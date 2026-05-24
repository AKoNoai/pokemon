/**
 * Backend Server - Poke Đại Chiến Gift Claim System
 * Port: 3000
 * Handles: Login proxy, Zone/Player fetch, Gift claim, CORS
 */

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const md5 = require('md5');

const app = express();
const PORT = 3000;

// ===================== CONFIG =====================
const GAME_API = 'https://activity.pocketgamesol.com';
const APP_ID = '10062';
const GROUP_ID = '5f682ae8b5cb673c9ca740ed';
const ACT_ID = '5f682ae8b5cb673c9ca740ee';
const REWARD_ID = '5f682ae8b5cb673c9ca740f0';
const GIFT_AMOUNT = 40; // Changed from 20 to 40
const GAME_REQUEST_TIMEOUT = 8000;

// ===================== MIDDLEWARE =====================
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./')); // Serve static files

// ===================== HELPERS =====================
function apiError(res, code, message) {
    return res.json({ success: false, code, message });
}

function apiOk(res, data) {
    return res.json({ success: true, data });
}

async function gameRequest(url, params) {
    try {
        const resp = await axios.get(url, {
            params,
            timeout: GAME_REQUEST_TIMEOUT,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'vi,en-US;q=0.9,en;q=0.8',
                'Referer': 'https://activity.pocketgamesol.com/',
                'Origin': 'https://activity.pocketgamesol.com',
                'Connection': 'keep-alive'
            }
        });
        
        if (resp.data === undefined || resp.data === null || resp.data === '') {
            console.warn(`[gameRequest] Empty response from ${url}. Status: ${resp.status}. Headers:`, JSON.stringify(resp.headers));
        }
        
        return resp.data;
    } catch (err) {
        if (err.response) {
            console.error(`[gameRequest] Error response from ${url}. Status: ${err.response.status}. Body:`, JSON.stringify(err.response.data));
        } else {
            console.error(`[gameRequest] Request error:`, err.message);
        }
        throw new Error(err.message);
    }
}

// ===================== ROUTES =====================

/**
 * GET /api/status
 * Health check
 */
app.get('/api/status', (req, res) => {
    apiOk(res, {
        server: 'Poke Gift Server',
        version: '2.0',
        giftAmount: GIFT_AMOUNT,
        time: new Date().toISOString()
    });
});

/**
 * POST /api/login
 * SDK Login with username & password
 * Body: { userName, password }
 */
app.post('/api/login', async (req, res) => {
    const { userName, password } = req.body;

    if (!userName || !password) {
        return apiError(res, 400, 'Vui lòng nhập tài khoản và mật khẩu');
    }

    try {
        const pwdMd5 = md5(password);
        const sign = md5(userName + pwdMd5 + 'v3_pokectgame_login');

        const result = await gameRequest(GAME_API + '/user/sdk/login', {
            userName,
            password: pwdMd5,
            version: 'v3',
            sign
        });

        if (result.code === 200) {
            return apiOk(res, result.state);
        } else if (result.code === 102) {
            return apiError(res, 102, 'Tài khoản không tồn tại hoặc sai mật khẩu');
        } else {
            return apiError(res, result.code, result.state || 'Đăng nhập thất bại');
        }
    } catch (err) {
        console.error('[login]', err.message);
        return apiError(res, 500, 'Lỗi server, thử lại sau');
    }
});

/**
 * POST /api/login/facebook
 * Facebook login via access_token
 * Body: { accessToken }
 */
app.post('/api/login/facebook', async (req, res) => {
    const { accessToken } = req.body;
    if (!accessToken) return apiError(res, 400, 'Thiếu access token Facebook');

    try {
        const sign = md5(APP_ID + accessToken + '_pokectgame_login');
        const result = await gameRequest(GAME_API + '/user/fb/login', {
            clientId: APP_ID,
            access_token: accessToken,
            sign
        });

        if (result.code === 200) {
            return apiOk(res, result.state);
        } else {
            return apiError(res, result.code, result.state || 'Đăng nhập Facebook thất bại');
        }
    } catch (err) {
        console.error('[fb login]', err.message);
        return apiError(res, 500, 'Lỗi server, thử lại sau');
    }
});

/**
 * GET /api/zones
 * Get server list for a token
 * Query: { token }
 */
app.get('/api/zones', async (req, res) => {
    const { token } = req.query;
    if (!token) return apiError(res, 400, 'Thiếu token');

    try {
        const result = await gameRequest(GAME_API + '/user/sdk/zones', {
            appId: APP_ID,
            token
        });

        if (result.code === 200) {
            return apiOk(res, result.state || []);
        } else if (result.code === 300) {
            return apiError(res, 300, 'Phiên đăng nhập hết hạn, vui lòng đăng nhập lại');
        } else {
            return apiError(res, result.code, 'Không thể lấy danh sách server');
        }
    } catch (err) {
        console.error('[zones]', err.message);
        return apiError(res, 500, 'Lỗi server, thử lại sau');
    }
});

/**
 * GET /api/players
 * Get player list in a zone
 * Query: { token, gameZoneId }
 */
app.get('/api/players', async (req, res) => {
    const { token, gameZoneId } = req.query;
    if (!token || !gameZoneId) return apiError(res, 400, 'Thiếu token hoặc gameZoneId');

    try {
        const result = await gameRequest(GAME_API + '/user/player/list', {
            appId: APP_ID,
            gameZoneId,
            token
        });

        if (result.code === 200) {
            return apiOk(res, result.state || []);
        } else if (result.code === 300) {
            return apiError(res, 300, 'Phiên đăng nhập hết hạn');
        } else {
            return apiError(res, result.code, 'Không thể lấy danh sách nhân vật');
        }
    } catch (err) {
        console.error('[players]', err.message);
        return apiError(res, 500, 'Lỗi server, thử lại sau');
    }
});

/**
 * POST /api/claim
 * Claim gift reward (40 vé ấp trứng)
 * Body: { token, playerId, gameZoneId }
 */
app.post('/api/claim', async (req, res) => {
    const { token, playerId, gameZoneId } = req.body;
    if (!token || !playerId) return apiError(res, 400, 'Thiếu thông tin đăng nhập');

    try {
        console.log('[claim] Starting probe of reward IDs around ' + REWARD_ID);
        const prefix = REWARD_ID.substring(0, 18);
        const suffixHex = REWARD_ID.substring(18);
        const suffixVal = parseInt(suffixHex, 16);

        let successResult = null;
        let alreadyClaimedResult = null;
        let invalidResult = null;

        // Probe offsets from -5 to +5 to cover different potential reward IDs
        for (let i = 0; i <= 10; i++) {
            const currentVal = suffixVal + i;
            const currentHex = currentVal.toString(16).padStart(6, '0');
            const probeId = prefix + currentHex;
            
            try {
                const probeResult = await gameRequest(GAME_API + '/activity/getUserReward', {
                    groupId: GROUP_ID,
                    actId: ACT_ID,
                    token,
                    rewardId: probeId
                });
                console.log(`[claim] Probed ID ${probeId} (offset ${i}) => Code: ${probeResult.code}, Response: ${JSON.stringify(probeResult)}`);
                
                if (probeResult.code === 200) {
                    successResult = { rewardId: probeId, offset: i, result: probeResult };
                    // If we successfully claimed a reward, we can break early!
                    break;
                } else if (probeResult.code === 1005) {
                    alreadyClaimedResult = { rewardId: probeId, offset: i, result: probeResult };
                } else if (probeResult.code !== 404) {
                    // Keep track of other non-404 error codes (like 403, 1000, etc.)
                    if (!invalidResult) {
                        invalidResult = { rewardId: probeId, offset: i, result: probeResult };
                    }
                }
            } catch (err) {
                console.error(`[claim] Failed to probe ID ${probeId}:`, err.message);
            }
        }

        if (successResult) {
            console.log(`[claim] SUCCESSFULLY CLAIMED REWARD with ID: ${successResult.rewardId} (offset ${successResult.offset})`);
            return apiOk(res, {
                message: `Chúc mừng bạn đã nhận được ${GIFT_AMOUNT} Vé Ấp Trứng! Hãy đăng nhập game để nhận!`,
                giftAmount: GIFT_AMOUNT,
                giftName: `Vé Ấp Trứng*${GIFT_AMOUNT}`,
                reward: successResult.result.state,
                claimedRewardId: successResult.rewardId
            });
        }

        if (alreadyClaimedResult) {
            console.log(`[claim] Reward ${alreadyClaimedResult.rewardId} (offset ${alreadyClaimedResult.offset}) was already claimed.`);
            return apiError(res, 1005, 'Bạn đã nhận quà này rồi! Mỗi tài khoản chỉ được nhận 1 lần.');
        }

        // If nothing was successful and we only got errors, use the result from our original REWARD_ID (offset 0)
        // or the first invalid result we encountered
        const finalResult = invalidResult || { result: { code: 404 } };
        const result = finalResult.result;

        // Map mã lỗi → thông báo tiếng Việt
        const errorMessages = {
            300:  'Phiên đăng nhập hết hạn, vui lòng đăng nhập lại',
            400:  'Yêu cầu không hợp lệ',
            401:  'Event chưa bắt đầu, xin hãy đón chờ',
            402:  'Event đã kết thúc, cám ơn bạn đã ủng hộ',
            403:  'Không có quyền nhận quà',
            404:  'Không tìm thấy thông tin phần thưởng',
            405:  typeof result.state === 'string' ? result.state : 'Nhận quà không hợp lệ',
            444:  'Tài khoản bị khóa',
            446:  'Đã đạt giới hạn nhận quà hôm nay',
            447:  'Không đủ điều kiện nhận quà',
            449:  'Không đủ điều kiện nhận quà',
            1000: 'Tài khoản khách không thể nhận quà. Vui lòng nâng cấp thành tài khoản chính thức!',
            1001: 'Tài khoản khách không thể nhận quà. Vui lòng nâng cấp thành tài khoản chính thức!',
            1002: 'Tài khoản khách không thể nhận quà. Vui lòng nâng cấp thành tài khoản chính thức!',
            1005: 'Bạn đã nhận quà này rồi! Mỗi tài khoản chỉ được nhận 1 lần.',
            1006: 'Tài khoản khách không thể nhận quà. Vui lòng nâng cấp thành tài khoản chính thức!',
            1101: 'Nếu không nhận được vui lòng vào fanpage để liên hệ CSKH',
        };

        const code = result.code;

        // Nếu code 1005 → đã nhận rồi (không phải lỗi thực sự)
        if (code === 1005) {
            return apiError(res, 1005, errorMessages[1005]);
        }

        // Thông báo rõ ràng từ map, hoặc lấy từ state nếu là string, hoặc fallback
        let msg = errorMessages[code];
        if (!msg) {
            if (typeof result.state === 'string' && result.state) {
                msg = result.state;
            } else if (result.message && typeof result.message === 'string') {
                msg = result.message;
            } else {
                msg = `Lỗi từ server game (mã: ${code}). Vui lòng thử lại hoặc liên hệ CSKH.`;
            }
        }

        console.warn(`[claim] Unhandled code ${code}:`, result);
        return apiError(res, code, msg);

    } catch (err) {
        console.error('[claim] Exception:', err.message);
        return apiError(res, 500, 'Không thể kết nối đến server game. Vui lòng thử lại sau.');
    }
});

/**
 * GET /api/check
 * Check if user already claimed (rewardId = undefined → status check)
 * Query: { token }
 */
app.get('/api/check', async (req, res) => {
    const { token } = req.query;
    if (!token) return apiError(res, 400, 'Thiếu token');

    try {
        const result = await gameRequest(GAME_API + '/activity/getUserReward', {
            groupId: GROUP_ID,
            actId: ACT_ID,
            token,
            rewardId: undefined   // undefined → check status, không claim
        });

        console.log('[check] Game server response:', JSON.stringify(result));

        if (result.code === 200 && result.state && result.state.roleId) {
            // Đã nhận rồi
            return apiOk(res, { claimed: true });
        }
        return apiOk(res, { claimed: false });
    } catch (err) {
        console.error('[check]', err.message);
        return apiOk(res, { claimed: false }); // Fail silently
    }
});

/**
 * GET /api/gift-info
 * Return gift info (for frontend to show)
 */
app.get('/api/gift-info', (req, res) => {
    apiOk(res, {
        giftName: `Vé Ấp Trứng*${GIFT_AMOUNT}`,
        giftAmount: GIFT_AMOUNT,
        description: `Mỗi tài khoản chính thức nhận ${GIFT_AMOUNT} Vé Ấp Trứng!`,
        eventTitle: 'Tài Khoản Chính Thức Quà Nâng Cấp Xịn'
    });
});

// ===================== START =====================
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`\n🎮 Poke Gift Server đang chạy tại http://localhost:${PORT}`);
        console.log(`📦 Gift: Vé Ấp Trứng x${GIFT_AMOUNT} (đã nâng từ 20 lên ${GIFT_AMOUNT})`);
        console.log(`🌐 Frontend: http://localhost:${PORT}/index.html\n`);
    });
}

module.exports = app;

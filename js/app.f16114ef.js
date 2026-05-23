(function (e) {
    function t(t) {
        for (
            var o, s, r = t[0], c = t[1], l = t[2], d = 0, h = [];
            d < r.length;
            d++
        )
            (s = r[d]),
                Object.prototype.hasOwnProperty.call(i, s) && i[s] && h.push(i[s][0]),
                (i[s] = 0);
        for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
        u && u(t);
        while (h.length) h.shift()();
        return a.push.apply(a, l || []), n();
    }
    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], o = !0, r = 1; r < n.length; r++) {
                var c = n[r];
                0 !== i[c] && (o = !1);
            }
            o && (a.splice(t--, 1), (e = s((s.s = n[0]))));
        }
        return e;
    }
    var o = {},
        i = { app: 0 },
        a = [];
    function s(t) {
        if (o[t]) return o[t].exports;
        var n = (o[t] = { i: t, l: !1, exports: {} });
        return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
    }
    (s.m = e),
        (s.c = o),
        (s.d = function (e, t, n) {
            s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (s.r = function (e) {
            "undefined" !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (s.t = function (e, t) {
            if ((1 & t && (e = s(e)), 8 & t)) return e;
            if (4 & t && "object" === typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
                (s.r(n),
                    Object.defineProperty(n, "default", { enumerable: !0, value: e }),
                    2 & t && "string" != typeof e)
            )
                for (var o in e)
                    s.d(
                        n,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return n;
        }),
        (s.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                        return e["default"];
                    }
                    : function () {
                        return e;
                    };
            return s.d(t, "a", t), t;
        }),
        (s.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (s.p = "");
    var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
        c = r.push.bind(r);
    (r.push = t), (r = r.slice());
    for (var l = 0; l < r.length; l++) t(r[l]);
    var u = c;
    a.push(["7bcc", "chunk-vendors"]), n();
})({
    "15a5": function (e, t, n) {
        "use strict";
        var o = n("830b"),
            i = n.n(o);
        i.a;
    },
    2775: function (e, t, n) {
        e.exports = n.p + "img/code.e190c0d3.png";
    },
    "7bcc": function (e, t, n) {
        "use strict";
        n.r(t);
        n("551c"), n("f5df");
        var o = n("2b0e"),
            i = (function () {
                function e(e, t) {
                    (this.facebook = function (e, t) {
                        t && t.fb ? window.fbq("track", e, t.fb) : window.fbq("track", e),
                            console.info('"' + e + '" has pixeled - facebook', t);
                    }),
                        (this.google = function (e, t) {
                            t && t.ga
                                ? window.gtag("event", e, t.ga)
                                : window.gtag("event", e),
                                console.info('"' + e + '" has pixeled - google', t);
                        }),
                        (this.ga = e),
                        (this.fb = t),
                        this.init();
                }
                return (
                    (e.prototype.init = function () {
                        this.fb && r(this.fb), this.ga && s(this.ga);
                    }),
                    (e.prototype.pixel = function (e, t) {
                        console.info("pixel------------------------------"),
                            this.ga && this.google(e, t),
                            this.fb && this.facebook(e, t);
                    }),
                    e
                );
            })(),
            a = i;
        function s(e) {
            (function (e, t, n, o, i, a, s) {
                (a = t.createElement(n)),
                    (a.async = !0),
                    (a.src = o),
                    (a.async = !0),
                    (s = t.getElementsByTagName(n)[0]),
                    s.parentNode.insertBefore(a, s);
            })(
                window,
                document,
                "script",
                "https://www.googletagmanager.com/gtag/js?id=" + e
            ),
                (window.dataLayer = window.dataLayer || []),
                (window.gtag = function () {
                    window.dataLayer.push(arguments);
                }),
                window.gtag("js", new Date()),
                window.gtag("config", e);
        }
        function r(e) {
            (function (t, n, o, i, a, s, r) {
                if (!t.fbq) {
                    (a = t.fbq = function () {
                        a.callMethod
                            ? a.callMethod.apply(a, arguments)
                            : a.queue.push(arguments);
                    }),
                        t._fbq || (t._fbq = a),
                        (a.push = a),
                        (a.loaded = !0),
                        (a.version = "2.0"),
                        (a.queue = []),
                        (s = n.createElement(o)),
                        (s.async = !0),
                        (s.src = i),
                        (r = n.getElementsByTagName(o)[0]),
                        r.parentNode.insertBefore(s, r);
                    var c = document.createElement("noscript");
                    (c.innerHTML =
                        '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=' +
                        e +
                        '&ev=PageView&noscript=1" />'),
                        document.body.appendChild(c);
                }
            })(
                window,
                document,
                "script",
                "https://connect.facebook.net/en_US/fbevents.js"
            ),
                window.fbq("init", e),
                window.fbq("track", "PageView");
        }
        n("ac6a"), n("28a5"), n("6b54"), n("87b3");
        var c = n("589d");
        function l(e) {
            var t = {
                elements: e,
                _delay: 0,
                velocity: function (e, t) {
                    var n;
                    return (
                        (n = "number" === typeof t ? { duration: t } : t),
                        this._delay && ((n.delay = this._delay), (this._delay = 0)),
                        c(this.elements, e, n),
                        this
                    );
                },
                delay: function (e) {
                    return (this._delay = e), this;
                },
                dequeue: function (e) {
                    return c["Utilities"].dequeue(this.elements, e), this;
                },
            };
            return t;
        }
        (function () {
            var e = {},
                t = location.href.indexOf("?") + 1,
                n = 0 === t ? "" : location.href.slice(t);
            if (n) {
                var o = n.split(/&|%26/);
                o.forEach(function (t) {
                    var n = t.split(/=|%3D/),
                        o = n[0],
                        i = n[1];
                    e[o] = i;
                });
            }
        })();
        function u(e) {
            var t = document.documentElement.clientWidth,
                n = t / (e / 100);
            document.documentElement.style.fontSize = n + "px";
        }
        function d(e, t) {
            var n = !0;
            return function () {
                for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
                n &&
                    ((n = !1),
                        setTimeout(function () {
                            t.apply(void 0, o), (n = !0);
                        }, e));
            };
        }
        function h(e, t) {
            (window.fbAsyncInit = function () {
                FB.init({ appId: e, autoLogAppEvents: !0, xfbml: !0, version: t });
            }),
                (function (e, t, n) {
                    var o,
                        i = e.getElementsByTagName(t)[0];
                    e.getElementById(n) ||
                        ((o = e.createElement(t)),
                            (o.id = n),
                            (o.src = "https://connect.facebook.net/en_US/sdk.js"),
                            i.parentNode.insertBefore(o, i));
                })(document, "script", "facebook-jssdk");
        }
        function p() {
            (window.requestAnimationFrame =
                window.requestAnimationFrame ||
                function (e) {
                    return setTimeout(e, 1e3 / 60);
                }),
                (window.cancelAnimationFrame =
                    window.cancelAnimationFrame || clearTimeout);
        }
        function g(e, t) {
            m(e, t);
            var n = d(100, m);
            window.addEventListener("resize", function () {
                n(e, t);
            });
        }
        var f = function () {
            return !(!localStorage.token || !localStorage.playerId);
        },
            v = function (e, t) {
                var n = document.getElementsByClassName(e)[0],
                    o = parseInt(n.style.height) ? parseInt(n.style.height) : 0;
                if (t)
                    var i = setInterval(function () {
                        o == t
                            ? ((n.style.height = "0px"), clearInterval(i))
                            : ((o += 10),
                                o == t && clearInterval(i),
                                (n.style.height = o + "px"));
                    }, 20);
                else n.style.height = "0px";
            };
        function m(e, t) {
            w() ? u(e) : u(t);
        }
        function w() {
            var e,
                t = window.innerWidth <= 768;
            return (e = !t), e;
        }
        var b = "ontouchend" in document;
        function _(e) {
            if (e.disabled) return !1;
            var t = e.time,
                n = e.tapObj;
            return (
                t < 300 && Math.abs(n.distanceX) < 10 && Math.abs(n.distanceY) < 10
            );
        }
        var y = function (e, t, n, o) {
            void 0 === o && (o = !1);
            var i = n.value;
            if (!i && t.href && !n.modifiers.prevent)
                return (window.location.href = t.href);
            (i.event = e), (i.tapObj = b ? t.tapObj : null);
            var a = i.event.target.tagName.toLocaleLowerCase();
            if (("input" === a || "textarea" === a) && !o)
                return i.event.target.focus();
            i.methods.call(t, i);
        };
        function k(e, t) {
            var n = e.touches[0],
                o = t.tapObj;
            (o.pageX = n.pageX),
                (o.pageY = n.pageY),
                (o.clientX = n.clientX),
                (o.clientY = n.clientY),
                (t.time = +new Date());
        }
        function x(e, t) {
            var n = e.changedTouches[0];
            t.time = +new Date() - t.time;
            var o = t.tapObj;
            (o.distanceX = o.pageX - n.pageX),
                (o.distanceY = o.pageY - n.pageY),
                _(t) && t.handler(e);
        }
        var C,
            N = function (e, t) {
                (e.tapObj = {}),
                    (e.handler = function (n) {
                        y(n, e, t);
                    }),
                    b
                        ? (e.addEventListener(
                            "touchstart",
                            function (n) {
                                t.modifiers.stop && n.stopPropagation(),
                                    t.modifiers.prevent && n.preventDefault(),
                                    k(n, e);
                            },
                            !1
                        ),
                            e.addEventListener(
                                "touchend",
                                function (t) {
                                    try {
                                        Object.defineProperty(t, "currentTarget", {
                                            value: e,
                                            writable: !0,
                                            enumerable: !0,
                                            configurable: !0,
                                        });
                                    } catch (t) {
                                        console.error(t.message), (t.currentTarget = e);
                                    }
                                    return t.preventDefault(), x(t, e);
                                },
                                !1
                            ))
                        : e.addEventListener(
                            "click",
                            function (n) {
                                t.modifiers.stop && n.stopPropagation(),
                                    t.modifiers.prevent && n.preventDefault(),
                                    e.handler(n);
                            },
                            !1
                        );
            },
            I = function (e, t) {
                (e.tapObj = {}),
                    (e.handler = function (n) {
                        y(n, e, t, !0);
                    });
            },
            S = function (e) {
                delete e.tapObj, delete e.time, (e.handler = function () { });
            },
            T = { bind: N, componentUpdated: I, unbind: S },
            O = {
                install: function (e) {
                    e.directive("tap", T);
                },
            },
            B = O,
            j = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("transition", { attrs: { name: "fadeIn" } }, [
                    n(
                        "div",
                        {
                            directives: [
                                {
                                    name: "show",
                                    rawName: "v-show",
                                    value: e.showDialog,
                                    expression: "showDialog",
                                },
                            ],
                            staticClass: "DialogTip",
                        },
                        [
                            n(
                                "div",
                                {
                                    directives: [
                                        {
                                            name: "show",
                                            rawName: "v-show",
                                            value: "tip" == e.toastName,
                                            expression: "toastName == 'tip'",
                                        },
                                    ],
                                    staticClass: "tipBox",
                                },
                                [
                                    n("p", { staticClass: "tipTxt" }, [e._v(e._s(e.content))]),
                                    n("button", { staticClass: "close", on: { click: e.close } }),
                                ]
                            ),
                            n(
                                "div",
                                {
                                    directives: [
                                        {
                                            name: "show",
                                            rawName: "v-show",
                                            value: "cdKeys" == e.toastName,
                                            expression: "toastName == 'cdKeys'",
                                        },
                                    ],
                                    staticClass: "cdkBox",
                                },
                                [
                                    n("p", { staticClass: "tipTxt" }, [
                                        e._v(
                                            "\n\t\t\t\t\t" + e._s(e.tip.join_success) + "\n\t\t\t\t\t"
                                        ),
                                        n("br"),
                                        e._v(
                                            "\n\t\t\t\t\t" +
                                            e._s(e.tip.reward_txt) +
                                            " : " +
                                            e._s(this.rewardName) +
                                            "\n\t\t\t\t\t"
                                        ),
                                        n("br"),
                                        e._v(
                                            "\n\t\t\t\t\t" +
                                            e._s(e.tip.time) +
                                            " : " +
                                            e._s(this.userCdkeys) +
                                            "\n\t\t\t\t"
                                        ),
                                    ]),
                                    n("button", { staticClass: "close", on: { click: e.close } }),
                                ]
                            ),
                            n("div", {
                                directives: [
                                    {
                                        name: "show",
                                        rawName: "v-show",
                                        value: "loading" == e.toastName,
                                        expression: "toastName == 'loading'",
                                    },
                                ],
                                staticClass: "loadingBox",
                            }),
                            n(
                                "div",
                                {
                                    directives: [
                                        {
                                            name: "show",
                                            rawName: "v-show",
                                            value: "reward" === e.toastName,
                                            expression: "toastName === 'reward'",
                                        },
                                    ],
                                    staticClass: "rewardBox center",
                                },
                                [
                                    n("button", { staticClass: "close", on: { click: e.close } }),
                                    n("p", { staticClass: "reward-box__title" }, [
                                        e._v("ยินดีด้วยที่ได้รับรางวัลต่อไปนี้"),
                                    ]),
                                    n(
                                        "div",
                                        {
                                            class: [
                                                "reward-box__gift",
                                                "reward-box__gift--" +
                                                (e.rewardArr && e.rewardArr.index),
                                            ],
                                        },
                                        [
                                            n("p", { staticClass: "reward-box__gift__count" }, [
                                                e._v(e._s(e.rewardArr && e.rewardArr.count)),
                                            ]),
                                        ]
                                    ),
                                ]
                            ),
                            n(
                                "div",
                                {
                                    directives: [
                                        {
                                            name: "show",
                                            rawName: "v-show",
                                            value: "lucky" === e.toastName,
                                            expression: "toastName === 'lucky'",
                                        },
                                    ],
                                    staticClass: "rewardBox",
                                },
                                [
                                    n("button", { staticClass: "close", on: { click: e.close } }),
                                    e.luckyArr.length
                                        ? e._e()
                                        : n("section", { staticClass: "giftNull" }, [
                                            e._v(e._s(e.tip.wishArr_null)),
                                        ]),
                                    e.luckyArr.length
                                        ? n("section", { staticClass: "rewardContainer" }, [
                                            n("p", [e._v("Lucky List")]),
                                            n("div", { staticClass: "table-head" }, [
                                                n("div", { staticClass: "table-head-wrap" }, [
                                                    n("table", { staticClass: "grid" }, [
                                                        n("thead", [
                                                            n("tr", [
                                                                n("th"),
                                                                n("th", [e._v(e._s(e.tip.server))]),
                                                                n("th", [e._v(e._s(e.tip.player))]),
                                                            ]),
                                                        ]),
                                                    ]),
                                                ]),
                                            ]),
                                            n("div", { staticClass: "table-content" }, [
                                                n("table", { staticClass: "grid" }, [
                                                    n(
                                                        "tbody",
                                                        e._l(e.luckyArr, function (t, o) {
                                                            return n("tr", { key: o }, [
                                                                n(
                                                                    "td",
                                                                    {
                                                                        style: parseInt(o % 2)
                                                                            ? { background: "#DADADA" }
                                                                            : { background: "#e9f5ff" },
                                                                    },
                                                                    [e._v(e._s(o + 1))]
                                                                ),
                                                                n(
                                                                    "td",
                                                                    {
                                                                        style: parseInt(o % 2)
                                                                            ? { background: "#DADADA" }
                                                                            : { background: "#e9f5ff" },
                                                                    },
                                                                    [e._v(e._s(t.server))]
                                                                ),
                                                                n(
                                                                    "td",
                                                                    {
                                                                        style: parseInt(o % 2)
                                                                            ? { background: "#DADADA" }
                                                                            : { background: "#e9f5ff" },
                                                                    },
                                                                    [e._v(e._s(t.player))]
                                                                ),
                                                            ]);
                                                        }),
                                                        0
                                                    ),
                                                ]),
                                            ]),
                                        ])
                                        : e._e(),
                                ]
                            ),
                        ]
                    ),
                ]);
            },
            L = [],
            E = o["a"].extend({
                name: "DialogTip",
                props: {
                    InstatceShowDialog: { type: Boolean, default: !1 },
                    content: { type: String, default: "" },
                },
                data: function () {
                    return {
                        tip: window._RG.config.tip,
                        toastName: "",
                        rewardName: "",
                        userCdkeys: "",
                        rewardIcon: "",
                        toastHide: !0,
                        showDialog: !1,
                        rewardArr: [],
                        luckyArr: [],
                        tokenExpired: !1,
                    };
                },
                watch: {},
                methods: {
                    close: function () {
                        this.tokenExpired && location.reload(), (this.showDialog = !1);
                    },
                    open: function () {
                        this.showDialog = !0;
                    },
                },
            }),
            $ = E,
            A = (n("bed8"), n("2877")),
            P = Object(A["a"])($, j, L, !1, null, null, null),
            q = P.exports;
        C = {
            install: function (e, t) {
                if (!document.getElementsByClassName("dialog").length) {
                    var n = e.extend(q),
                        o = new n(),
                        i = o.$mount().$el;
                    document.body.appendChild(i),
                        (e.prototype.$dialog = {
                            show: function (e, t, n) {
                                (o.toastName = e),
                                    n && (o.tokenExpired = !0),
                                    "string" === typeof t
                                        ? (o.content = t)
                                        : "reward" === e
                                            ? (o.rewardArr = t)
                                            : "cdKeys" === e
                                                ? (o.rewardArr = t)
                                                : "lucky" === e && (o.luckyArr = t),
                                    (o.showDialog = !0);
                            },
                            hide: function (e) {
                                e ? (o.toastName = e) : (o.showDialog = !1);
                            },
                        });
                }
            },
        };
        var D = C;
        (window._RG = {
            config: {
                tip: {
                    code_102: "Tài khoản không tồn tại hoặc sai mật khẩu",
                    code_200:
                        "Chúc mừng bạn đã nhận được quà tặng, hãy đăng nhập game để nhận!",
                    code_200_1: "Vui lòng đăng nhập game đổi quà.",
                    code_300:
                        "Phiên đăng nhập hết hạn, vui lòng đăng nhập lại, trang sẽ tự động làm mới sau 3 giây",
                    code_400: "",
                    code_401: "Event chưa bắt đầu, xin hãy đón chờ",
                    code_402: "Event đã kết thúc, cám ơn bạn đã ủng hộ",
                    code_403: "",
                    code_405: "",
                    code_1000:
                        "Tài khoản hiện tại là tài khoản khách, không thể nhận quà. Vui lòng vào game nâng cấp thành tài khoản chính thức, bạn sẽ được nhận quà ngay đấy~",
                    code_1001:
                        "Tài khoản hiện tại là tài khoản khách, không thể nhận quà. Vui lòng vào game nâng cấp thành tài khoản chính thức, bạn sẽ được nhận quà ngay đấy~",
                    code_1002:
                        "Tài khoản hiện tại là tài khoản khách, không thể nhận quà. Vui lòng vào game nâng cấp thành tài khoản chính thức, bạn sẽ được nhận quà ngay đấy~",
                    code_1005: "Số lần tham gia đạt tối đa, bạn đã nhận phần quà này",
                    code_1006:
                        "Tài khoản hiện tại là tài khoản khách, không thể nhận quà. Vui lòng vào game nâng cấp thành tài khoản chính thức, bạn sẽ được nhận quà ngay đấy~",
                    code_1101: "Nếu không nhận được vui lòng vào fanpage để liên hệ CSKH",
                    login_info_null: "Nhập mật khẩu Nhập tài khoản",
                    zone_null: "Chọn server của bạn",
                    player_null: "Không có nhân vật khả dụng tại server này",
                    phone_null: "Nhập SĐT chính xác",
                    reserve_success:
                        "Bạn đã đặt gạch thành công, hãy đăng nhập FB và tham gia rút thưởng!",
                    join_null: "Cám ơn bạn đã tham gia",
                    join_success: "Chúc mừng bạn đã trúng thưởng",
                    reward_txt: "Bạn đã trúng",
                    cdKeys: "mã code:",
                    userName: "Tài khoản",
                    userPass: "Mật khẩu",
                    reward_name: "Quà của",
                    code: "Mã code vòng quay",
                    time: "時間",
                    serve: "Server",
                    player: "Nhân vật",
                    loginOut: "Thoát ",
                    giftArr_null: "Chưa có dữ liệu quà",
                    wishArr_null: "",
                    wish_null: "Nhập lời ước, vui lòng không để trống",
                    wish_success:
                        "Ước thành công, vui lòng xem danh sách may mắn sau khi event kết thúc",
                    wish_search:
                        "danh sách may mắn sẽ được công bố vào đúng 12h trưa ngày 26/12",
                    prize: "",
                    rotate: "",
                    box: "",
                    flip: "",
                    everyLogin: "",
                    paySum: "",
                    payReach: "",
                    level: "",
                    active: "",
                    oldPlayer: "",
                },
                data: {
                    groupId: "5f682ae8b5cb673c9ca740ed",
                    actId: { CUMULATIVE_LOGIN: "5f682ae8b5cb673c9ca740ee" },
                    rewardId: { CUMULATIVE_LOGIN: ["5f682ae8b5cb673c9ca740ef"] },
                },
            },
        }),
            o["a"].use(B),
            o["a"].use(D);
        var R = function () {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n(
                "div",
                { staticClass: "app", attrs: { id: "app" } },
                [
                    n("DownloadBox", e._b({}, "DownloadBox", e._downloadBoxOption, !1)),
                    n("login", {
                        directives: [
                            {
                                name: "show",
                                rawName: "v-show",
                                value: e.loginIsVisible,
                                expression: "loginIsVisible",
                            },
                        ],
                        on: {
                            visibleLogin: function (t) {
                                return e.visibleLogin(!1);
                            },
                            init: function (t) {
                                return e.initUserInfo(t);
                            },
                        },
                    }),
                    n("div", { staticClass: "container" }, [
                        n("header", { staticClass: "header" }, [
                            n("p", { staticClass: "time" }),
                            n("section", { staticClass: "gift_icon_cls" }),
                            n(
                                "div",
                                { staticClass: "header__btns-wraper" },
                                [
                                    e.userRolle
                                        ? e._e()
                                        : n("RgButton", {
                                            staticClass:
                                                "header__btns-wraper__login-btn btn-relative",
                                            on: {
                                                click: function (t) {
                                                    return e.visibleLogin(!0);
                                                },
                                            },
                                        }),
                                    e.userRolle
                                        ? n("RgButton", {
                                            class: [
                                                "header__btns-wraper__reward-btn",
                                                "btn-relative",
                                                e.isJoin ? "joined" : "",
                                            ],
                                            attrs: { disabled: e.isJoin },
                                            on: {
                                                click: function (t) {
                                                    return e.getGift();
                                                },
                                            },
                                        })
                                        : e._e(),
                                    n(
                                        "div",
                                        {
                                            directives: [
                                                {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: e.userRolle,
                                                    expression: "userRolle",
                                                },
                                            ],
                                            staticClass: "header__user-info",
                                        },
                                        [
                                            n("span", { staticClass: "header__user-info__txt" }, [
                                                e._v(
                                                    e._s(e._RG.config.tip.serve) +
                                                    ": " +
                                                    e._s(e.userZone.replace(/[^0-9]/gi, ""))
                                                ),
                                            ]),
                                            n("span", { staticClass: "header__user-info__txt" }, [
                                                e._v(
                                                    e._s(e._RG.config.tip.player) +
                                                    ": " +
                                                    e._s(e.userRolle)
                                                ),
                                            ]),
                                            n(
                                                "RgButton",
                                                {
                                                    staticClass: "header__user-info__drop-btn",
                                                    on: { click: e.dropOut },
                                                },
                                                [e._v("[ " + e._s(e._RG.config.tip.loginOut) + "]")]
                                            ),
                                        ],
                                        1
                                    ),
                                ],
                                1
                            ),
                        ]),
                        e._m(0),
                        n(
                            "div",
                            {
                                directives: [
                                    {
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.isVideo,
                                        expression: "isVideo",
                                    },
                                ],
                                staticClass: "videoBox",
                            },
                            [e._m(1)]
                        ),
                    ]),
                ],
                1
            );
        },
            Z = [
                function () {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("section", { staticClass: "footer" }, [
                        o("p", [
                            o("img", { attrs: { src: n("9b3e"), alt: "", srcset: "" } }),
                            o(
                                "a",
                                {
                                    staticClass: "link_btn_cls",
                                    attrs: {
                                        href:
                                            "https://dangcapthucung.joygame.vn/account_upgrade_guide/index.html",
                                        target: "_blank",
                                    },
                                },
                                [e._v("Làm sao để nâng cấp thành tài khoản chính thức?")]
                            ),
                        ]),
                        o("p", { staticClass: "step_cls" }, [
                            e._v(
                                "Bước thao tác trong game: Avatar nhân vật-> Cài đặt -> Trung tâm cá nhân -> Nâng cấp tài khoản"
                            ),
                        ]),
                    ]);
                },
                function () {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", { staticClass: "video" }, [
                        n("div", { attrs: { id: "player" } }),
                    ]);
                },
            ],
            V = n("9ab4"),
            z = n("bc3a"),
            G = n.n(z),
            M = G.a.create({ timeout: 2e4, maxContentLength: 2e3, headers: {} });
        function U(e) {
            return e;
        }
        function Y(e) {
            return Promise.reject(e);
        }
        function F(e) {
            var t = e.data,
                n = window._RG.config.tip,
                i = t.code;
            switch (i) {
                case 102:
                    return void o["a"].prototype.$dialog.show("tip", n.code_102);
                case 200:
                    return t.state;
                case 300:
                    return (
                        localStorage.clear(),
                        o["a"].prototype.$dialog.show("tip", n.code_300),
                        void setTimeout(function () {
                            location.reload();
                        }, 3e3)
                    );
                case 401:
                    return void o["a"].prototype.$dialog.show("tip", n.code_401);
                case 402:
                    return void o["a"].prototype.$dialog.show("tip", n.code_402);
                case 444:
                    return void o["a"].prototype.$dialog.show("tip", n.code_444);
                case 446:
                    return void o["a"].prototype.$dialog.show("tip", n.code_446);
                case 447:
                    return void o["a"].prototype.$dialog.show("tip", n.code_447);
                case 449:
                    return void o["a"].prototype.$dialog.show("tip", n.code_447);
                case 405:
                    return void o["a"].prototype.$dialog.show("tip", t.state);
                case 1e3:
                    return void o["a"].prototype.$dialog.show("tip", n.code_1000);
                case 1001:
                    return void o["a"].prototype.$dialog.show("tip", n.code_1001);
                case 1002:
                    return void o["a"].prototype.$dialog.show("tip", n.code_1002);
                case 1005:
                    return void o["a"].prototype.$dialog.show("tip", n.code_1005);
                case 1006:
                    return void o["a"].prototype.$dialog.show("tip", n.code_1006);
                case 1101:
                    return void o["a"].prototype.$dialog.show("tip", n.code_1101);
                default:
                    return Promise.reject(t);
            }
        }
        function K(e) {
            return Promise.reject(e);
        }
        M.interceptors.request.use(U, Y), M.interceptors.response.use(F, K);
        var J = function (e, t) {
            return (
                o["a"].prototype.$dialog.show("loading"),
                M.get(e, { params: t })
                    .then(function (e) {
                        return (
                            e
                                ? o["a"].prototype.$dialog.hide()
                                : o["a"].prototype.$dialog.hide("tip"),
                            e
                        );
                    })
                    .catch(function (e) {
                        o["a"].prototype.$dialog.hide(), console.log(e);
                    })
            );
        },
            X = n("6821"),
            H = n.n(X),
            Q = "/user/sdk/login",
            W = "/user/fb/login",
            ee = "/user/fb/register",
            te = "/user/kk/login",
            ne = "/user/sdk/zones",
            oe = "/user/player/list",
            ie = "/activity/getUserReward",
            ae = "https://activity.pocketgamesol.com",
            se = "5f682ae8b5cb673c9ca740ed",
            re = function (e, t) {
                var n = {
                    userName: e,
                    password: H()(t),
                    version: "v3",
                    sign: H()(e + H()(t) + "v3_pokectgame_login"),
                };
                return J(ae + Q, n);
            },
            ce = function (e) {
                var t = {
                    clientId: "10062",
                    access_token: e,
                    sign: H()("10062" + e + "_pokectgame_login"),
                };
                return J(ae + W, t);
            },
            le = function (e) {
                var t = { appId: "10062", gameZoneId: e, token: localStorage.token };
                return J(ae + ee, t);
            },
            ue = function (e) {
                var t = {
                    clientId: "10062",
                    access_token: e,
                    sign: H()("10062" + e + "_pokectgame_login"),
                };
                return J(ae + te, t);
            },
            de = function (e) {
                var t = { appId: "10062", token: e.token };
                return J(ae + ne, t);
            },
            he = function (e) {
                var t = e,
                    n = { appId: "10062", gameZoneId: t, token: localStorage.token };
                return J(ae + oe, n);
            },
            pe = function (e, t) {
                var n = {
                    groupId: se,
                    actId: window._RG.config.data.actId[e],
                    token: localStorage.token,
                    rewardId: window._RG.config.data.rewardId[e][t],
                };
                return J(ae + ie, n);
            },
            ge = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("transition", { attrs: { name: "fade" } }, [
                    n("div", { staticClass: "maxBox" }, [
                        n("div", { staticClass: "centerBox" }, [
                            n("button", { staticClass: "close", on: { click: e.close } }),
                            n(
                                "div",
                                {
                                    directives: [
                                        {
                                            name: "show",
                                            rawName: "v-show",
                                            value: e.isType,
                                            expression: "isType",
                                        },
                                    ],
                                    staticClass: "accountBox",
                                },
                                [
                                    n("input", {
                                        directives: [
                                            {
                                                name: "model",
                                                rawName: "v-model",
                                                value: e.userName,
                                                expression: "userName",
                                            },
                                        ],
                                        key: "userAccount",
                                        staticClass: "username",
                                        attrs: {
                                            type: "text",
                                            autofocus: "",
                                            placeholder: e.tip.userName,
                                        },
                                        domProps: { value: e.userName },
                                        on: {
                                            keydown: function (t) {
                                                return !t.type.indexOf("key") &&
                                                    e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                                    ? null
                                                    : e.down(1);
                                            },
                                            input: function (t) {
                                                t.target.composing || (e.userName = t.target.value);
                                            },
                                        },
                                    }),
                                    n("input", {
                                        directives: [
                                            {
                                                name: "model",
                                                rawName: "v-model",
                                                value: e.userPassword,
                                                expression: "userPassword",
                                            },
                                        ],
                                        key: "userPassword",
                                        staticClass: "userpass",
                                        attrs: { type: "password", placeholder: e.tip.userPass },
                                        domProps: { value: e.userPassword },
                                        on: {
                                            keydown: function (t) {
                                                return !t.type.indexOf("key") &&
                                                    e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                                    ? null
                                                    : e.sdkLogin(t);
                                            },
                                            input: function (t) {
                                                t.target.composing || (e.userPassword = t.target.value);
                                            },
                                        },
                                    }),
                                    n("button", {
                                        staticClass: "login_btn1",
                                        on: { click: e.sdkLogin },
                                    }),
                                    n("button", {
                                        staticClass: "fb_btn",
                                        on: { click: e.facebook },
                                    }),
                                    n("p", { staticClass: "loginTxt" }, [
                                        e._v(
                                            "\n          Người chơi dùng tài khoản khách không thể đăng nhập, vui lòng liên hệ CSKH để nâng cấp thành tài khoản chính thức!\n        "
                                        ),
                                    ]),
                                ]
                            ),
                            e.isType
                                ? e._e()
                                : n(
                                    "div",
                                    {
                                        staticClass: "serverBox",
                                        staticStyle: { position: "relative" },
                                    },
                                    [
                                        n("div", { staticClass: "userzone-wrap" }, [
                                            n("input", {
                                                directives: [
                                                    { name: "number-only", rawName: "v-number-only" },
                                                    {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: e.userZone,
                                                        expression: "userZone",
                                                    },
                                                    {
                                                        name: "focus",
                                                        rawName: "v-focus",
                                                        value: e.focusStatus,
                                                        expression: "focusStatus",
                                                    },
                                                ],
                                                key: "userServer",
                                                staticClass: "userzone",
                                                attrs: { type: "number", placeholder: e.tip.serve },
                                                domProps: { value: e.userZone },
                                                on: {
                                                    click: function (t) {
                                                        return e.dropSelectInput();
                                                    },
                                                    keydown: function (t) {
                                                        return !t.type.indexOf("key") &&
                                                            e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                                            ? null
                                                            : e.serverBtn(t);
                                                    },
                                                    input: function (t) {
                                                        t.target.composing ||
                                                            (e.userZone = t.target.value);
                                                    },
                                                },
                                            }),
                                            n("span", {
                                                staticClass: "zone-select-btn",
                                                on: {
                                                    click: function (t) {
                                                        return t.stopPropagation(), e.dropSelectInput();
                                                    },
                                                },
                                            }),
                                        ]),
                                        n(
                                            "section",
                                            { staticClass: "selectZone" },
                                            e._l(this.zones, function (t, o) {
                                                return n(
                                                    "p",
                                                    {
                                                        key: o,
                                                        staticClass: "zoneli",
                                                        on: {
                                                            click: function (t) {
                                                                return e.selectZone(t, o);
                                                            },
                                                        },
                                                    },
                                                    [e._v(e._s(t.localName))]
                                                );
                                            }),
                                            0
                                        ),
                                        n("button", {
                                            staticClass: "server_btn",
                                            on: { click: e.serverBtn },
                                        }),
                                    ]
                                ),
                            e.isTip
                                ? n("p", { class: e.isType ? "loginTip" : "zoneTip" }, [
                                    e._v(e._s(e.userTip)),
                                ])
                                : e._e(),
                        ]),
                    ]),
                ]);
            },
            fe = [],
            ve = (n("a481"),
                o["a"].extend({
                    data: function () {
                        return {
                            tip: window._RG.config.tip,
                            userName: "",
                            userPassword: "",
                            userZone: "",
                            zones: [],
                            userTip: "",
                            myTimer: "",
                            focusStatus: !0,
                            isType: !0,
                            isTip: !1,
                            zoneName: "gameZoneId",
                        };
                    },
                    directives: {
                        focus: {
                            inserted: function (e, t) {
                                var n = t.value;
                                n && e.focus();
                            },
                        },
                        numberOnly: {
                            bind: function (e) {
                                (e.handler = function () {
                                    e.value = e.value.replace(/\D+/, "");
                                }),
                                    e.addEventListener("input", e.handler);
                            },
                            unbind: function (e) {
                                e.removeEventListener("input", e.handler);
                            },
                        },
                    },
                    watch: {
                        userZone: function (e, t) {
                            e > this.zones.length
                                ? (this.userZone = "")
                                : (this.userZone = this.userZone.replace(/[^0-9]/gi, ""));
                        },
                    },
                    methods: {
                        KakaoBtn: function () {
                            return Object(V["a"])(this, void 0, void 0, function () {
                                var e;
                                return Object(V["b"])(this, function (t) {
                                    return (
                                        (e = this),
                                        Kakao.Auth.login({
                                            success: function (t) {
                                                e.kakaoLogin(t.access_token);
                                            },
                                            fail: function (e) {
                                                console.log(JSON.stringify(e));
                                            },
                                        }),
                                        [2]
                                    );
                                });
                            });
                        },
                        kakaoLogin: function (e) {
                            return Object(V["a"])(this, void 0, void 0, function () {
                                var t, n;
                                return Object(V["b"])(this, function (o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, ue(e)];
                                        case 1:
                                            return (
                                                (t = o.sent()),
                                                (n = t),
                                                n ? [4, this.handleLogin(t)] : [3, 3]
                                            );
                                        case 2:
                                            (n = o.sent()), (o.label = 3);
                                        case 3:
                                            return n && (this.isType = !1), [2];
                                    }
                                });
                            });
                        },
                        sdkLogin: function () {
                            return Object(V["a"])(this, void 0, void 0, function () {
                                var e, t;
                                return Object(V["b"])(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.userName && this.userPassword
                                                ? [4, re(this.userName, this.userPassword)]
                                                : [3, 4];
                                        case 1:
                                            return (
                                                (e = n.sent()),
                                                (t = e),
                                                t ? [4, this.handleLogin(e)] : [3, 3]
                                            );
                                        case 2:
                                            (t = n.sent()), (n.label = 3);
                                        case 3:
                                            return t && (this.isType = !1), [3, 5];
                                        case 4:
                                            o["a"].prototype.$dialog.show(
                                                "tip",
                                                this.tip.login_info_null
                                            ),
                                                (n.label = 5);
                                        case 5:
                                            return [2];
                                    }
                                });
                            });
                        },
                        facebook: function () {
                            return Object(V["a"])(this, void 0, void 0, function () {
                                var e;
                                return Object(V["b"])(this, function (t) {
                                    return (
                                        (e = this),
                                        FB.getLoginStatus(function (t) {
                                            "connected" === t.status
                                                ? e.FBSdkLogin(t.authResponse.accessToken)
                                                : FB.login(function (t) {
                                                    "connected" === t.status &&
                                                        e.FBSdkLogin(t.authResponse.accessToken);
                                                });
                                        }),
                                        [2]
                                    );
                                });
                            });
                        },
                        FBSdkLogin: function (e) {
                            return Object(V["a"])(this, void 0, void 0, function () {
                                var t, n;
                                return Object(V["b"])(this, function (o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, ce(e)];
                                        case 1:
                                            return (
                                                (t = o.sent()),
                                                (n = t),
                                                n ? [4, this.handleLogin(t)] : [3, 3]
                                            );
                                        case 2:
                                            (n = o.sent()), (o.label = 3);
                                        case 3:
                                            return n && (this.isType = !1), [2];
                                    }
                                });
                            });
                        },
                        handleLogin: function (e) {
                            return Object(V["a"])(this, void 0, void 0, function () {
                                var t;
                                return Object(V["b"])(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return (
                                                (this.myTimer = new Date().getTime().toString()),
                                                localStorage.setItem("activetime", this.myTimer),
                                                localStorage.setItem("userId", e.userId),
                                                localStorage.setItem("token", e.token),
                                                e.type && localStorage.setItem("loginType", e.type),
                                                [4, de(e)]
                                            );
                                        case 1:
                                            return (
                                                (t = n.sent()),
                                                t.length > 0
                                                    ? ((this.isTip = !1), (this.zones = t), [2, !0])
                                                    : [2]
                                            );
                                    }
                                });
                            });
                        },
                        serverBtn: function () {
                            return Object(V["a"])(this, void 0, void 0, function () {
                                var e,
                                    t,
                                    n,
                                    i,
                                    a = this;
                                return Object(V["b"])(this, function (s) {
                                    switch (s.label) {
                                        case 0:
                                            return (
                                                v("selectZone", 0),
                                                this.userZone &&
                                                    "0" !== this.userZone &&
                                                    +this.userZone > 0
                                                    ? ((e = this.userZone.replace(/[^0-9]/gi, "")),
                                                        (t = this.zones[e - 1]),
                                                        (n = t.gameZoneId),
                                                        [4, he(n)])
                                                    : [3, 5]
                                            );
                                        case 1:
                                            return (
                                                (i = s.sent()),
                                                i || !localStorage.getItem("loginType")
                                                    ? [3, 3]
                                                    : [
                                                        4,
                                                        le(n).then(function (e) {
                                                            e.length
                                                                ? (localStorage.setItem(
                                                                    "playerName",
                                                                    e[0].playerName
                                                                ),
                                                                    localStorage.setItem(
                                                                        "playerId",
                                                                        e[0].playerId
                                                                    ),
                                                                    localStorage.setItem("zoneName", a.userZone),
                                                                    (a.isType = !0),
                                                                    a.$emit("visibleLogin", !1),
                                                                    a.$emit("init"))
                                                                : o["a"].prototype.$dialog.show(
                                                                    "tip",
                                                                    a.tip.player_null
                                                                );
                                                        }),
                                                    ]
                                            );
                                        case 2:
                                            return s.sent(), [3, 4];
                                        case 3:
                                            0 === i.length
                                                ? o["a"].prototype.$dialog.show(
                                                    "tip",
                                                    this.tip.player_null
                                                )
                                                : i.length > 0 &&
                                                (localStorage.setItem("playerName", i[0].playerName),
                                                    localStorage.setItem("playerId", i[0].playerId),
                                                    localStorage.setItem("zoneName", this.userZone),
                                                    (this.isType = !0),
                                                    this.$emit("visibleLogin", !1),
                                                    this.$emit("init")),
                                                (s.label = 4);
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            o["a"].prototype.$dialog.show("tip", this.tip.zone_null),
                                                (s.label = 6);
                                        case 6:
                                            return [2];
                                    }
                                });
                            });
                        },
                        close: function () {
                            (this.userName = ""),
                                (this.userPassword = ""),
                                (this.userZone = ""),
                                (this.isType = !0),
                                (this.isTip = !1),
                                localStorage.clear(),
                                this.$emit("visibleLogin", !1),
                                f() && location.reload();
                        },
                        down: function (e) {
                            document.getElementsByTagName("input")[e].focus();
                        },
                        dropSelectInput: function (e) {
                            v("selectZone", 280);
                        },
                        selectZone: function (e) {
                            (this.userZone = e.target.innerText), v("selectZone", 0);
                        },
                    },
                })),
            me = ve,
            we = (n("d8f3"), Object(A["a"])(me, ge, fe, !1, null, "11d22c1e", null)),
            be = we.exports,
            _e = function (e, t) {
                var n = t._c;
                return n(
                    "button",
                    t._g(
                        t._b(
                            {
                                directives: [
                                    {
                                        name: "tap",
                                        rawName: "v-tap",
                                        value: { methods: t.listeners.click },
                                        expression: "{methods:listeners.click}",
                                    },
                                ],
                                class: [
                                    t.data.class ? t.data.class : "",
                                    t.data.staticClass ? t.data.staticClass : "",
                                ],
                            },
                            "button",
                            t.data.attrs,
                            !1
                        ),
                        delete t.listeners.click && t.listeners
                    ),
                    [t._t("default")],
                    2
                );
            },
            ye = [],
            ke = { name: "RgButton" },
            xe = ke,
            Ce = Object(A["a"])(xe, _e, ye, !0, null, null, null),
            Ne = Ce.exports,
            Ie = function () {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", { ref: "downloadBox", staticClass: "download-box" }, [
                    o(
                        "div",
                        {
                            directives: [
                                {
                                    name: "tap",
                                    rawName: "v-tap",
                                    value: { methods: e.toggleContent },
                                    expression: "{methods:toggleContent}",
                                },
                            ],
                            class: [
                                e.isShowContent
                                    ? "download-box__control-btn--show"
                                    : "download-box__control-btn--hide",
                                "download-box__control-btn",
                            ],
                        },
                        [e._t("control-content")],
                        2
                    ),
                    o(
                        "div",
                        { staticClass: "download-box__content" },
                        [
                            o("img", {
                                staticClass: "code_cls",
                                attrs: { src: n("2775"), alt: "", srcset: "" },
                            }),
                            e._l(e.btns, function (t, n) {
                                return o(
                                    "div",
                                    { key: n, staticClass: "download-box__content__btn--wrap" },
                                    [
                                        "scroll" === t.type
                                            ? o("button", {
                                                directives: [
                                                    {
                                                        name: "tap",
                                                        rawName: "v-tap",
                                                        value: { methods: e.scroll, id: t.data },
                                                        expression: "{methods:scroll,id:value.data}",
                                                    },
                                                ],
                                                class: e.isCheck === n ? "navBtnActive" : "navBtn",
                                            })
                                            : e._e(),
                                        "href" === t.type
                                            ? o("a", {
                                                class: ["navBtn", t.txt],
                                                attrs: { href: t.data, target: "_blank" },
                                            })
                                            : e._e(),
                                    ]
                                );
                            }),
                        ],
                        2
                    ),
                ]);
            },
            Se = [],
            Te = (n("c5f6"),
                o["a"].extend({
                    name: "downloadBox",
                    props: {
                        distance: { type: String, required: !0 },
                        duration: { type: Number, required: !0 },
                        direction: { type: String, required: !0 },
                        easing: { type: String, default: "easeOutQuart" },
                        isShowTop: { type: Boolean, default: !1 },
                        btns: { type: Array, required: !0 },
                    },
                    data: function () {
                        return {
                            isShowContent: !1,
                            animalStop: !0,
                            scrollStop: !0,
                            isCheck: 0,
                        };
                    },
                    created: function () { },
                    methods: {
                        handleScroll: function () {
                            var e = ["act1", "act2", "act3", "act4"],
                                t = e.map(function (e) {
                                    return document.getElementById(e).offsetTop;
                                }),
                                n =
                                    window.pageYOffset ||
                                    document.documentElement.scrollTop ||
                                    document.body.scrollTop,
                                o = t.filter(function (e) {
                                    return e < n;
                                }).length;
                            this.isCheck = 0 == n ? 0 : o;
                        },
                        toggleContent: function () {
                            this.isShowContent
                                ? this.move("0rem")
                                : this.move(this.$props.distance);
                        },
                        move: function (e) {
                            var t,
                                n = this;
                            this.animalStop &&
                                ((this.animalStop = !1),
                                    l(this.$refs.downloadBox).velocity(
                                        ((t = {}), (t[this.$props.direction] = e), t),
                                        {
                                            duration: this.$props.duration,
                                            easing: this.$props.easing,
                                            complete: function () {
                                                var e = n.isShowContent;
                                                (n.isShowContent = !e), (n.animalStop = !0);
                                            },
                                        }
                                    ));
                        },
                        scroll: function (e) {
                            var t = e.id,
                                n = document.getElementById(t);
                            if (!n) return console.log("scroll element is not find.");
                            l(n).velocity("scroll", { container: document.body });
                        },
                    },
                })),
            Oe = Te,
            Be = Object(A["a"])(Oe, Ie, Se, !1, null, null, null),
            je = Be.exports,
            Le = window._RG.config.tip,
            Ee = o["a"].extend({
                components: { RgButton: Ne, DownloadBox: je, Login: be },
                data: function () {
                    return (
                        (this._downloadBoxOption = {
                            distance: "-1.73rem",
                            duration: 800,
                            direction: "right",
                            isShowTop: !0,
                            btns: [
                                {
                                    txt: "google",
                                    type: "href",
                                    data:
                                        "https://dangcapthucung.joygame.vn/activity/apk-tip0819/",
                                },
                                {
                                    txt: "ios",
                                    type: "href",
                                    data: "https://dangcapthucung.joygame.vn/ios_download_guide/",
                                },
                                {
                                    txt: "fans",
                                    type: "href",
                                    data: "https://www.facebook.com/pokedaichien/",
                                },
                            ],
                        }),
                        {
                            rewardIsVisible: !1,
                            loginIsVisible: !1,
                            userZone: "",
                            userRolle: "",
                            isJoin: !1,
                            isVideo: !1,
                            allData: [],
                            dialogInfo: { title: "", txt: "", type: 1, data: [] },
                        }
                    );
                },
                computed: {
                    _RG: function () {
                        return window._RG;
                    },
                },
                mounted: function () {
                    return Object(V["a"])(this, void 0, void 0, function () {
                        return Object(V["b"])(this, function (e) {
                            return this.initUserInfo(), [2];
                        });
                    });
                },
                methods: {
                    initUserInfo: function () {
                        return Object(V["a"])(this, void 0, void 0, function () {
                            var e = this;
                            return Object(V["b"])(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return f()
                                            ? ((this.userRolle = localStorage.getItem("playerName")),
                                                (this.userZone = localStorage.getItem("zoneName")),
                                                [
                                                    4,
                                                    pe("CUMULATIVE_LOGIN", -1).then(function (t) {
                                                        t && t["roleId"] && (e.isJoin = !0);
                                                    }),
                                                ])
                                            : [3, 2];
                                    case 1:
                                        t.sent(), (t.label = 2);
                                    case 2:
                                        return [2];
                                }
                            });
                        });
                    },
                    getGift: function () {
                        return Object(V["a"])(this, void 0, void 0, function () {
                            var e = this;
                            return Object(V["b"])(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return f()
                                            ? [
                                                4,
                                                pe("CUMULATIVE_LOGIN", 0).then(function (t) {
                                                    t &&
                                                        (o["a"].prototype.$dialog.show(
                                                            "tip",
                                                            Le.code_200
                                                        ),
                                                            (e.isJoin = !0));
                                                }),
                                            ]
                                            : [3, 2];
                                    case 1:
                                        return t.sent(), [3, 3];
                                    case 2:
                                        (this.loginIsVisible = !0), (t.label = 3);
                                    case 3:
                                        return [2];
                                }
                            });
                        });
                    },
                    closeReward: function (e) {
                        this.rewardIsVisible = e;
                    },
                    visibleLogin: function (e) {
                        this.loginIsVisible = e;
                    },
                    dropOut: function () {
                        localStorage.clear(), location.reload();
                    },
                    onPlayerReady: function (e) {
                        var t = this,
                            n = document.getElementsByClassName("videoBox")[0];
                        n.addEventListener("click", function () {
                            (t.isVideo = !1), e.target.pauseVideo();
                        });
                        var o = document.getElementsByClassName("video_btn_cls")[0];
                        o.addEventListener("click", function () {
                            e.target.playVideo();
                        });
                    },
                    onPlayerStateChange: function (e) {
                        var t = !1;
                        e.data != YT.PlayerState.PLAYING || t || (t = !0);
                    },
                    videoBtn: function () {
                        this.isVideo = !0;
                        new YT.Player("player", {
                            width: "640",
                            height: "360",
                            videoId: "pM9Au4EIIg8",
                            events: {
                                onReady: this.onPlayerReady,
                                onStateChange: this.onPlayerStateChange,
                            },
                        });
                    },
                },
            }),
            $e = Ee,
            Ae = (n("15a5"), Object(A["a"])($e, R, Z, !1, null, null, null)),
            Pe = Ae.exports;
        g(1920, 750), p(), h("1162312071472038", "v4.0");
        var qe = document.createElement("script");
        qe.src = "https://www.youtube.com/iframe_api";
        var De = document.getElementsByTagName("script")[0];
        De.parentNode.insertBefore(qe, De),
            (o["a"].prototype.$pixel = new a("", "")),
            new o["a"]({
                render: function (e) {
                    return e(Pe);
                },
            }).$mount("#app");
    },
    "830b": function (e, t, n) { },
    "95c7": function (e, t, n) { },
    "9b3e": function (e, t, n) {
        e.exports = n.p + "img/pika.c4d9129a.gif";
    },
    bed8: function (e, t, n) {
        "use strict";
        var o = n("95c7"),
            i = n.n(o);
        i.a;
    },
    d8f3: function (e, t, n) {
        "use strict";
        var o = n("e04e"),
            i = n.n(o);
        i.a;
    },
    e04e: function (e, t, n) { },
});

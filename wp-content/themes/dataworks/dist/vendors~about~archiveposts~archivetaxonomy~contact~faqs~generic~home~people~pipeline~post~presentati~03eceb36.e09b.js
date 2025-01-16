(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    682: function(t, e, i) {
        "use strict";
        (function(t) {
            function i(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function s(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    s.enumerable = s.enumerable || !1,
                    s.configurable = !0,
                    "value"in s && (s.writable = !0),
                    Object.defineProperty(t, s.key, s)
                }
            }
            function n(t, e, i) {
                return e && s(t.prototype, e),
                i && s(t, i),
                t
            }
            function o(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i,
                t
            }
            function r(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    i.push.apply(i, s)
                }
                return i
            }
            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(i), !0).forEach((function(e) {
                        o(t, e, i[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }
                    ))
                }
                return t
            }
            function u(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && c(t, e)
            }
            function a(t) {
                return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                )(t)
            }
            function c(t, e) {
                return (c = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e,
                    t
                }
                )(t, e)
            }
            function h(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            function D(t, e) {
                return !e || "object" != typeof e && "function" != typeof e ? h(t) : e
            }
            function d(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                        ))),
                        !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var i, s = a(t);
                    if (e) {
                        var n = a(this).constructor;
                        i = Reflect.construct(s, arguments, n)
                    } else
                        i = s.apply(this, arguments);
                    return D(this, i)
                }
            }
            function f(t, e, i) {
                return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
                    var s = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = a(t)); )
                            ;
                        return t
                    }(t, e);
                    if (s) {
                        var n = Object.getOwnPropertyDescriptor(s, e);
                        return n.get ? n.get.call(i) : n.value
                    }
                }
                )(t, e, i || t)
            }
            function p(t, e) {
                return function(t) {
                    if (Array.isArray(t))
                        return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
                        return;
                    var i = []
                      , s = !0
                      , n = !1
                      , o = void 0;
                    try {
                        for (var r, l = t[Symbol.iterator](); !(s = (r = l.next()).done) && (i.push(r.value),
                        !e || i.length !== e); s = !0)
                            ;
                    } catch (t) {
                        n = !0,
                        o = t
                    } finally {
                        try {
                            s || null == l.return || l.return()
                        } finally {
                            if (n)
                                throw o
                        }
                    }
                    return i
                }(t, e) || v(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function m(t) {
                return function(t) {
                    if (Array.isArray(t))
                        return y(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                        return Array.from(t)
                }(t) || v(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function v(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return y(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === i && t.constructor && (i = t.constructor.name),
                    "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? y(t, e) : void 0
                }
            }
            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, s = new Array(e); i < e; i++)
                    s[i] = t[i];
                return s
            }
            var C = {
                el: document,
                name: "scroll",
                offset: [0, 0],
                repeat: !1,
                smooth: !1,
                initPosition: {
                    x: 0,
                    y: 0
                },
                direction: "vertical",
                gestureDirection: "vertical",
                reloadOnContextChange: !1,
                lerp: .1,
                class: "is-inview",
                scrollbarContainer: !1,
                scrollbarClass: "c-scrollbar",
                scrollingClass: "has-scroll-scrolling",
                draggingClass: "has-scroll-dragging",
                smoothClass: "has-scroll-smooth",
                initClass: "has-scroll-init",
                getSpeed: !1,
                getDirection: !1,
                scrollFromAnywhere: !1,
                multiplier: 1,
                firefoxMultiplier: 50,
                touchMultiplier: 2,
                resetNativeScroll: !0,
                tablet: {
                    smooth: !1,
                    direction: "vertical",
                    gestureDirection: "vertical",
                    breakpoint: 1024
                },
                smartphone: {
                    smooth: !1,
                    direction: "vertical",
                    gestureDirection: "vertical"
                }
            }
              , g = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, t),
                    Object.assign(this, C, e),
                    this.smartphone = C.smartphone,
                    e.smartphone && Object.assign(this.smartphone, e.smartphone),
                    this.tablet = C.tablet,
                    e.tablet && Object.assign(this.tablet, e.tablet),
                    this.namespace = "locomotive",
                    this.html = document.documentElement,
                    this.windowHeight = window.innerHeight,
                    this.windowWidth = window.innerWidth,
                    this.windowMiddle = {
                        x: this.windowWidth / 2,
                        y: this.windowHeight / 2
                    },
                    this.els = {},
                    this.currentElements = {},
                    this.listeners = {},
                    this.hasScrollTicking = !1,
                    this.hasCallEventSet = !1,
                    this.checkScroll = this.checkScroll.bind(this),
                    this.checkResize = this.checkResize.bind(this),
                    this.checkEvent = this.checkEvent.bind(this),
                    this.instance = {
                        scroll: {
                            x: 0,
                            y: 0
                        },
                        limit: {
                            x: this.html.offsetWidth,
                            y: this.html.offsetHeight
                        },
                        currentElements: this.currentElements
                    },
                    this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop",
                    this.isMobile && (this.direction = this[this.context].direction),
                    "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y",
                    this.getDirection && (this.instance.direction = null),
                    this.getDirection && (this.instance.speed = 0),
                    this.html.classList.add(this.initClass),
                    window.addEventListener("resize", this.checkResize, !1)
                }
                return n(t, [{
                    key: "init",
                    value: function() {
                        this.initEvents()
                    }
                }, {
                    key: "checkScroll",
                    value: function() {
                        this.dispatchScroll()
                    }
                }, {
                    key: "checkResize",
                    value: function() {
                        var t = this;
                        this.resizeTick || (this.resizeTick = !0,
                        requestAnimationFrame((function() {
                            t.resize(),
                            t.resizeTick = !1
                        }
                        )))
                    }
                }, {
                    key: "resize",
                    value: function() {}
                }, {
                    key: "checkContext",
                    value: function() {
                        if (this.reloadOnContextChange) {
                            this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint,
                            this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                            var t = this.context;
                            if (this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop",
                            t != this.context)
                                ("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
                        }
                    }
                }, {
                    key: "initEvents",
                    value: function() {
                        var t = this;
                        this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")),
                        this.setScrollTo = this.setScrollTo.bind(this),
                        this.scrollToEls.forEach((function(e) {
                            e.addEventListener("click", t.setScrollTo, !1)
                        }
                        ))
                    }
                }, {
                    key: "setScrollTo",
                    value: function(t) {
                        t.preventDefault(),
                        this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                            offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                        })
                    }
                }, {
                    key: "addElements",
                    value: function() {}
                }, {
                    key: "detectElements",
                    value: function(t) {
                        var e = this
                          , i = this.instance.scroll.y
                          , s = i + this.windowHeight
                          , n = this.instance.scroll.x
                          , o = n + this.windowWidth;
                        Object.entries(this.els).forEach((function(r) {
                            var l = p(r, 2)
                              , u = l[0]
                              , a = l[1];
                            if (!a || a.inView && !t || ("horizontal" === e.direction ? o >= a.left && n < a.right && e.setInView(a, u) : s >= a.top && i < a.bottom && e.setInView(a, u)),
                            a && a.inView)
                                if ("horizontal" === e.direction) {
                                    var c = a.right - a.left;
                                    a.progress = (e.instance.scroll.x - (a.left - e.windowWidth)) / (c + e.windowWidth),
                                    (o < a.left || n > a.right) && e.setOutOfView(a, u)
                                } else {
                                    var h = a.bottom - a.top;
                                    a.progress = (e.instance.scroll.y - (a.top - e.windowHeight)) / (h + e.windowHeight),
                                    (s < a.top || i > a.bottom) && e.setOutOfView(a, u)
                                }
                        }
                        )),
                        this.hasScrollTicking = !1
                    }
                }, {
                    key: "setInView",
                    value: function(t, e) {
                        this.els[e].inView = !0,
                        t.el.classList.add(t.class),
                        this.currentElements[e] = t,
                        t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"),
                        t.repeat || (this.els[e].call = !1))
                    }
                }, {
                    key: "setOutOfView",
                    value: function(t, e) {
                        var i = this;
                        this.els[e].inView = !1,
                        Object.keys(this.currentElements).forEach((function(t) {
                            t === e && delete i.currentElements[t]
                        }
                        )),
                        t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                        t.repeat && t.el.classList.remove(t.class)
                    }
                }, {
                    key: "dispatchCall",
                    value: function(t, e) {
                        this.callWay = e,
                        this.callValue = t.call.split(",").map((function(t) {
                            return t.trim()
                        }
                        )),
                        this.callObj = t,
                        1 == this.callValue.length && (this.callValue = this.callValue[0]);
                        var i = new Event(this.namespace + "call");
                        this.el.dispatchEvent(i)
                    }
                }, {
                    key: "dispatchScroll",
                    value: function() {
                        var t = new Event(this.namespace + "scroll");
                        this.el.dispatchEvent(t)
                    }
                }, {
                    key: "setEvents",
                    value: function(t, e) {
                        this.listeners[t] || (this.listeners[t] = []);
                        var i = this.listeners[t];
                        i.push(e),
                        1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1),
                        "call" === t && (this.hasCallEventSet = !0,
                        this.detectElements(!0))
                    }
                }, {
                    key: "unsetEvents",
                    value: function(t, e) {
                        if (this.listeners[t]) {
                            var i = this.listeners[t]
                              , s = i.indexOf(e);
                            s < 0 || (i.splice(s, 1),
                            0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                        }
                    }
                }, {
                    key: "checkEvent",
                    value: function(t) {
                        var e = this
                          , i = t.type.replace(this.namespace, "")
                          , s = this.listeners[i];
                        s && 0 !== s.length && s.forEach((function(t) {
                            switch (i) {
                            case "scroll":
                                return t(e.instance);
                            case "call":
                                return t(e.callValue, e.callWay, e.callObj);
                            default:
                                return t()
                            }
                        }
                        ))
                    }
                }, {
                    key: "startScroll",
                    value: function() {}
                }, {
                    key: "stopScroll",
                    value: function() {}
                }, {
                    key: "setScroll",
                    value: function(t, e) {
                        this.instance.scroll = {
                            x: 0,
                            y: 0
                        }
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t = this;
                        window.removeEventListener("resize", this.checkResize, !1),
                        Object.keys(this.listeners).forEach((function(e) {
                            t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
                        }
                        )),
                        this.listeners = {},
                        this.scrollToEls.forEach((function(e) {
                            e.removeEventListener("click", t.setScrollTo, !1)
                        }
                        )),
                        this.html.classList.remove(this.initClass)
                    }
                }]),
                t
            }()
              , E = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
            function F(t, e) {
                return t(e = {
                    exports: {}
                }, e.exports),
                e.exports
            }
            var b = F((function(t, e) {
                t.exports = {
                    polyfill: function() {
                        var t = window
                          , e = document;
                        if (!("scrollBehavior"in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                            var i, s = t.HTMLElement || t.Element, n = {
                                scroll: t.scroll || t.scrollTo,
                                scrollBy: t.scrollBy,
                                elementScroll: s.prototype.scroll || l,
                                scrollIntoView: s.prototype.scrollIntoView
                            }, o = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now, r = (i = t.navigator.userAgent,
                            new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                            t.scroll = t.scrollTo = function() {
                                void 0 !== arguments[0] && (!0 !== u(arguments[0]) ? f.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : n.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                            }
                            ,
                            t.scrollBy = function() {
                                void 0 !== arguments[0] && (u(arguments[0]) ? n.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : f.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                            }
                            ,
                            s.prototype.scroll = s.prototype.scrollTo = function() {
                                if (void 0 !== arguments[0])
                                    if (!0 !== u(arguments[0])) {
                                        var t = arguments[0].left
                                          , e = arguments[0].top;
                                        f.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                                    } else {
                                        if ("number" == typeof arguments[0] && void 0 === arguments[1])
                                            throw new SyntaxError("Value could not be converted");
                                        n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                    }
                            }
                            ,
                            s.prototype.scrollBy = function() {
                                void 0 !== arguments[0] && (!0 !== u(arguments[0]) ? this.scroll({
                                    left: ~~arguments[0].left + this.scrollLeft,
                                    top: ~~arguments[0].top + this.scrollTop,
                                    behavior: arguments[0].behavior
                                }) : n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                            }
                            ,
                            s.prototype.scrollIntoView = function() {
                                if (!0 !== u(arguments[0])) {
                                    var i = D(this)
                                      , s = i.getBoundingClientRect()
                                      , o = this.getBoundingClientRect();
                                    i !== e.body ? (f.call(this, i, i.scrollLeft + o.left - s.left, i.scrollTop + o.top - s.top),
                                    "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
                                        left: s.left,
                                        top: s.top,
                                        behavior: "smooth"
                                    })) : t.scrollBy({
                                        left: o.left,
                                        top: o.top,
                                        behavior: "smooth"
                                    })
                                } else
                                    n.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                            }
                        }
                        function l(t, e) {
                            this.scrollLeft = t,
                            this.scrollTop = e
                        }
                        function u(t) {
                            if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior)
                                return !0;
                            if ("object" == typeof t && "smooth" === t.behavior)
                                return !1;
                            throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }
                        function a(t, e) {
                            return "Y" === e ? t.clientHeight + r < t.scrollHeight : "X" === e ? t.clientWidth + r < t.scrollWidth : void 0
                        }
                        function c(e, i) {
                            var s = t.getComputedStyle(e, null)["overflow" + i];
                            return "auto" === s || "scroll" === s
                        }
                        function h(t) {
                            var e = a(t, "Y") && c(t, "Y")
                              , i = a(t, "X") && c(t, "X");
                            return e || i
                        }
                        function D(t) {
                            for (; t !== e.body && !1 === h(t); )
                                t = t.parentNode || t.host;
                            return t
                        }
                        function d(e) {
                            var i, s, n, r, l = (o() - e.startTime) / 468;
                            r = l = l > 1 ? 1 : l,
                            i = .5 * (1 - Math.cos(Math.PI * r)),
                            s = e.startX + (e.x - e.startX) * i,
                            n = e.startY + (e.y - e.startY) * i,
                            e.method.call(e.scrollable, s, n),
                            s === e.x && n === e.y || t.requestAnimationFrame(d.bind(t, e))
                        }
                        function f(i, s, r) {
                            var u, a, c, h, D = o();
                            i === e.body ? (u = t,
                            a = t.scrollX || t.pageXOffset,
                            c = t.scrollY || t.pageYOffset,
                            h = n.scroll) : (u = i,
                            a = i.scrollLeft,
                            c = i.scrollTop,
                            h = l),
                            d({
                                scrollable: u,
                                method: h,
                                startTime: D,
                                startX: a,
                                startY: c,
                                x: s,
                                y: r
                            })
                        }
                    }
                }
            }
            ))
              , w = (b.polyfill,
            function(t) {
                u(s, t);
                var e = d(s);
                function s() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return i(this, s),
                    (t = e.call(this, n)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"),
                    window.scrollTo(0, 0)),
                    window.addEventListener("scroll", t.checkScroll, !1),
                    void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = b,
                    window.smoothscrollPolyfill.polyfill()),
                    t
                }
                return n(s, [{
                    key: "init",
                    value: function() {
                        this.instance.scroll.y = window.pageYOffset,
                        this.addElements(),
                        this.detectElements(),
                        f(a(s.prototype), "init", this).call(this)
                    }
                }, {
                    key: "checkScroll",
                    value: function() {
                        var t = this;
                        f(a(s.prototype), "checkScroll", this).call(this),
                        this.getDirection && this.addDirection(),
                        this.getSpeed && (this.addSpeed(),
                        this.speedTs = Date.now()),
                        this.instance.scroll.y = window.pageYOffset,
                        Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame((function() {
                            t.detectElements()
                        }
                        )),
                        this.hasScrollTicking = !0))
                    }
                }, {
                    key: "addDirection",
                    value: function() {
                        window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
                    }
                }, {
                    key: "addSpeed",
                    value: function() {
                        window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                    }
                }, {
                    key: "resize",
                    value: function() {
                        Object.entries(this.els).length && (this.windowHeight = window.innerHeight,
                        this.updateElements())
                    }
                }, {
                    key: "addElements",
                    value: function() {
                        var t = this;
                        this.els = {},
                        this.el.querySelectorAll("[data-" + this.name + "]").forEach((function(e, i) {
                            e.getBoundingClientRect();
                            var s, n, o, r = e.dataset[t.name + "Class"] || t.class, l = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : i, u = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset, a = e.dataset[t.name + "Repeat"], c = e.dataset[t.name + "Call"], h = e.dataset[t.name + "Target"], D = (o = void 0 !== h ? document.querySelector("".concat(h)) : e).getBoundingClientRect();
                            s = D.top + t.instance.scroll.y,
                            n = D.left + t.instance.scroll.x;
                            var d = s + o.offsetHeight
                              , f = n + o.offsetWidth;
                            a = "false" != a && (null != a || t.repeat);
                            var p = t.getRelativeOffset(u)
                              , m = {
                                el: e,
                                targetEl: o,
                                id: l,
                                class: r,
                                top: s += p[0],
                                bottom: d -= p[1],
                                left: n,
                                right: f,
                                offset: u,
                                progress: 0,
                                repeat: a,
                                inView: !1,
                                call: c
                            };
                            t.els[l] = m,
                            e.classList.contains(r) && t.setInView(t.els[l], l)
                        }
                        ))
                    }
                }, {
                    key: "updateElements",
                    value: function() {
                        var t = this;
                        Object.entries(this.els).forEach((function(e) {
                            var i = p(e, 2)
                              , s = i[0]
                              , n = i[1]
                              , o = n.targetEl.getBoundingClientRect().top + t.instance.scroll.y
                              , r = o + n.targetEl.offsetHeight
                              , l = t.getRelativeOffset(n.offset);
                            t.els[s].top = o + l[0],
                            t.els[s].bottom = r - l[1]
                        }
                        )),
                        this.hasScrollTicking = !1
                    }
                }, {
                    key: "getRelativeOffset",
                    value: function(t) {
                        var e = [0, 0];
                        if (t)
                            for (var i = 0; i < t.length; i++)
                                "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
                        return e
                    }
                }, {
                    key: "scrollTo",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , i = parseInt(e.offset) || 0
                          , s = !!e.callback && e.callback;
                        if ("string" == typeof t) {
                            if ("top" === t)
                                t = this.html;
                            else if ("bottom" === t)
                                t = this.html.offsetHeight - window.innerHeight;
                            else if (!(t = document.querySelector(t)))
                                return
                        } else if ("number" == typeof t)
                            t = parseInt(t);
                        else if (!t || !t.tagName)
                            return void console.warn("`target` parameter is not valid");
                        i = "number" != typeof t ? t.getBoundingClientRect().top + i + this.instance.scroll.y : t + i;
                        var n = function() {
                            return parseInt(window.pageYOffset) === parseInt(i)
                        };
                        if (s) {
                            if (n())
                                return void s();
                            var o = function t() {
                                n() && (window.removeEventListener("scroll", t),
                                s())
                            };
                            window.addEventListener("scroll", o)
                        }
                        window.scrollTo({
                            top: i,
                            behavior: 0 === e.duration ? "auto" : "smooth"
                        })
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.addElements(),
                        this.detectElements()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        f(a(s.prototype), "destroy", this).call(this),
                        window.removeEventListener("scroll", this.checkScroll, !1)
                    }
                }]),
                s
            }(g))
              , x = Object.getOwnPropertySymbols
              , S = Object.prototype.hasOwnProperty
              , A = Object.prototype.propertyIsEnumerable;
            function B(t) {
                if (null == t)
                    throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }
            var k = function() {
                try {
                    if (!Object.assign)
                        return !1;
                    var t = new String("abc");
                    if (t[5] = "de",
                    "5" === Object.getOwnPropertyNames(t)[0])
                        return !1;
                    for (var e = {}, i = 0; i < 10; i++)
                        e["_" + String.fromCharCode(i)] = i;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                        return e[t]
                    }
                    )).join(""))
                        return !1;
                    var s = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                        s[t] = t
                    }
                    )),
                    "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
                } catch (t) {
                    return !1
                }
            }() ? Object.assign : function(t, e) {
                for (var i, s, n = B(t), o = 1; o < arguments.length; o++) {
                    for (var r in i = Object(arguments[o]))
                        S.call(i, r) && (n[r] = i[r]);
                    if (x) {
                        s = x(i);
                        for (var l = 0; l < s.length; l++)
                            A.call(i, s[l]) && (n[s[l]] = i[s[l]])
                    }
                }
                return n
            }
            ;
            function T() {}
            T.prototype = {
                on: function(t, e, i) {
                    var s = this.e || (this.e = {});
                    return (s[t] || (s[t] = [])).push({
                        fn: e,
                        ctx: i
                    }),
                    this
                },
                once: function(t, e, i) {
                    var s = this;
                    function n() {
                        s.off(t, n),
                        e.apply(i, arguments)
                    }
                    return n._ = e,
                    this.on(t, n, i)
                },
                emit: function(t) {
                    for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), s = 0, n = i.length; s < n; s++)
                        i[s].fn.apply(i[s].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var i = this.e || (this.e = {})
                      , s = i[t]
                      , n = [];
                    if (s && e)
                        for (var o = 0, r = s.length; o < r; o++)
                            s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
                    return n.length ? i[t] = n : delete i[t],
                    this
                }
            };
            var O = T
              , _ = F((function(t, e) {
                (function() {
                    (null !== e ? e : this).Lethargy = function() {
                        function t(t, e, i, s) {
                            this.stability = null != t ? Math.abs(t) : 8,
                            this.sensitivity = null != e ? 1 + Math.abs(e) : 100,
                            this.tolerance = null != i ? 1 + Math.abs(i) : 1.1,
                            this.delay = null != s ? s : 150,
                            this.lastUpDeltas = function() {
                                var t, e, i;
                                for (i = [],
                                t = 1,
                                e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                                    i.push(null);
                                return i
                            }
                            .call(this),
                            this.lastDownDeltas = function() {
                                var t, e, i;
                                for (i = [],
                                t = 1,
                                e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                                    i.push(null);
                                return i
                            }
                            .call(this),
                            this.deltasTimestamp = function() {
                                var t, e, i;
                                for (i = [],
                                t = 1,
                                e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                                    i.push(null);
                                return i
                            }
                            .call(this)
                        }
                        return t.prototype.check = function(t) {
                            var e;
                            return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail),
                            this.deltasTimestamp.push(Date.now()),
                            this.deltasTimestamp.shift(),
                            e > 0 ? (this.lastUpDeltas.push(e),
                            this.lastUpDeltas.shift(),
                            this.isInertia(1)) : (this.lastDownDeltas.push(e),
                            this.lastDownDeltas.shift(),
                            this.isInertia(-1))
                        }
                        ,
                        t.prototype.isInertia = function(t) {
                            var e, i, s, n, o, r, l;
                            return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (s = e.slice(0, this.stability),
                            i = e.slice(this.stability, 2 * this.stability),
                            l = s.reduce((function(t, e) {
                                return t + e
                            }
                            )),
                            o = i.reduce((function(t, e) {
                                return t + e
                            }
                            )),
                            r = l / s.length,
                            n = o / i.length,
                            Math.abs(r) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t)
                        }
                        ,
                        t.prototype.showLastUpDeltas = function() {
                            return this.lastUpDeltas
                        }
                        ,
                        t.prototype.showLastDownDeltas = function() {
                            return this.lastDownDeltas
                        }
                        ,
                        t
                    }()
                }
                ).call(E)
            }
            ))
              , L = {
                hasWheelEvent: "onwheel"in document,
                hasMouseWheelEvent: "onmousewheel"in document,
                hasTouch: "ontouchstart"in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
                hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                hasPointer: !!window.navigator.msPointerEnabled,
                hasKeyDown: "onkeydown"in document,
                isFirefox: navigator.userAgent.indexOf("Firefox") > -1
            }
              , M = Object.prototype.toString
              , W = Object.prototype.hasOwnProperty;
            function j(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            var H = _.Lethargy
              , R = "virtualscroll"
              , P = X
              , Y = 37
              , I = 38
              , N = 39
              , z = 40
              , V = 32;
            function X(t) {
                !function(t) {
                    if (!t)
                        return console.warn("bindAll requires at least one argument.");
                    var e = Array.prototype.slice.call(arguments, 1);
                    if (0 === e.length)
                        for (var i in t)
                            W.call(t, i) && "function" == typeof t[i] && "[object Function]" == M.call(t[i]) && e.push(i);
                    for (var s = 0; s < e.length; s++) {
                        var n = e[s];
                        t[n] = j(t[n], t)
                    }
                }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"),
                this.el = window,
                t && t.el && (this.el = t.el,
                delete t.el),
                this.options = k({
                    mouseMultiplier: 1,
                    touchMultiplier: 2,
                    firefoxMultiplier: 15,
                    keyStep: 120,
                    preventTouch: !1,
                    unpreventTouchClass: "vs-touchmove-allowed",
                    limitInertia: !1,
                    useKeyboard: !0,
                    useTouch: !0
                }, t),
                this.options.limitInertia && (this._lethargy = new H),
                this._emitter = new O,
                this._event = {
                    y: 0,
                    x: 0,
                    deltaX: 0,
                    deltaY: 0
                },
                this.touchStartX = null,
                this.touchStartY = null,
                this.bodyTouchAction = null,
                void 0 !== this.options.passive && (this.listenerOptions = {
                    passive: this.options.passive
                })
            }
            function q(t, e, i) {
                return (1 - i) * t + i * e
            }
            function K(t) {
                var e = {};
                if (window.getComputedStyle) {
                    var i = getComputedStyle(t)
                      , s = i.transform || i.webkitTransform || i.mozTransform
                      , n = s.match(/^matrix3d\((.+)\)$/);
                    return n ? (e.x = n ? parseFloat(n[1].split(", ")[12]) : 0,
                    e.y = n ? parseFloat(n[1].split(", ")[13]) : 0) : (n = s.match(/^matrix\((.+)\)$/),
                    e.x = n ? parseFloat(n[1].split(", ")[4]) : 0,
                    e.y = n ? parseFloat(n[1].split(", ")[5]) : 0),
                    e
                }
            }
            function U(t) {
                for (var e = []; t && t !== document; t = t.parentNode)
                    e.push(t);
                return e
            }
            X.prototype._notify = function(t) {
                var e = this._event;
                e.x += e.deltaX,
                e.y += e.deltaY,
                this._emitter.emit(R, {
                    x: e.x,
                    y: e.y,
                    deltaX: e.deltaX,
                    deltaY: e.deltaY,
                    originalEvent: t
                })
            }
            ,
            X.prototype._onWheel = function(t) {
                var e = this.options;
                if (!this._lethargy || !1 !== this._lethargy.check(t)) {
                    var i = this._event;
                    i.deltaX = t.wheelDeltaX || -1 * t.deltaX,
                    i.deltaY = t.wheelDeltaY || -1 * t.deltaY,
                    L.isFirefox && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier,
                    i.deltaY *= e.firefoxMultiplier),
                    i.deltaX *= e.mouseMultiplier,
                    i.deltaY *= e.mouseMultiplier,
                    this._notify(t)
                }
            }
            ,
            X.prototype._onMouseWheel = function(t) {
                if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
                    var e = this._event;
                    e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0,
                    e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta,
                    this._notify(t)
                }
            }
            ,
            X.prototype._onTouchStart = function(t) {
                var e = t.targetTouches ? t.targetTouches[0] : t;
                this.touchStartX = e.pageX,
                this.touchStartY = e.pageY
            }
            ,
            X.prototype._onTouchMove = function(t) {
                var e = this.options;
                e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
                var i = this._event
                  , s = t.targetTouches ? t.targetTouches[0] : t;
                i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier,
                i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier,
                this.touchStartX = s.pageX,
                this.touchStartY = s.pageY,
                this._notify(t)
            }
            ,
            X.prototype._onKeyDown = function(t) {
                var e = this._event;
                e.deltaX = e.deltaY = 0;
                var i = window.innerHeight - 40;
                switch (t.keyCode) {
                case Y:
                case I:
                    e.deltaY = this.options.keyStep;
                    break;
                case N:
                case z:
                    e.deltaY = -this.options.keyStep;
                    break;
                case t.shiftKey:
                    e.deltaY = i;
                    break;
                case V:
                    e.deltaY = -i;
                    break;
                default:
                    return
                }
                this._notify(t)
            }
            ,
            X.prototype._bind = function() {
                L.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
                L.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions),
                L.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions),
                this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)),
                L.hasPointer && L.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction,
                document.body.style.msTouchAction = "none",
                this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
                this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
                L.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
            }
            ,
            X.prototype._unbind = function() {
                L.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
                L.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel),
                L.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart),
                this.el.removeEventListener("touchmove", this._onTouchMove)),
                L.hasPointer && L.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction,
                this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
                this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
                L.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
            }
            ,
            X.prototype.on = function(t, e) {
                this._emitter.on(R, t, e);
                var i = this._emitter.e;
                i && i[R] && 1 === i[R].length && this._bind()
            }
            ,
            X.prototype.off = function(t, e) {
                this._emitter.off(R, t, e);
                var i = this._emitter.e;
                (!i[R] || i[R].length <= 0) && this._unbind()
            }
            ,
            X.prototype.reset = function() {
                var t = this._event;
                t.x = 0,
                t.y = 0
            }
            ,
            X.prototype.destroy = function() {
                this._emitter.off(),
                this._unbind()
            }
            ;
            var $ = "function" == typeof Float32Array;
            function J(t, e) {
                return 1 - 3 * e + 3 * t
            }
            function G(t, e) {
                return 3 * e - 6 * t
            }
            function Q(t) {
                return 3 * t
            }
            function Z(t, e, i) {
                return ((J(e, i) * t + G(e, i)) * t + Q(e)) * t
            }
            function tt(t, e, i) {
                return 3 * J(e, i) * t * t + 2 * G(e, i) * t + Q(e)
            }
            function et(t) {
                return t
            }
            var it = function(t, e, i, s) {
                if (!(0 <= t && t <= 1 && 0 <= i && i <= 1))
                    throw new Error("bezier x values must be in [0, 1] range");
                if (t === e && i === s)
                    return et;
                for (var n = $ ? new Float32Array(11) : new Array(11), o = 0; o < 11; ++o)
                    n[o] = Z(.1 * o, t, i);
                function r(e) {
                    for (var s = 0, o = 1; 10 !== o && n[o] <= e; ++o)
                        s += .1;
                    --o;
                    var r = s + .1 * ((e - n[o]) / (n[o + 1] - n[o]))
                      , l = tt(r, t, i);
                    return l >= .001 ? function(t, e, i, s) {
                        for (var n = 0; n < 4; ++n) {
                            var o = tt(e, i, s);
                            if (0 === o)
                                return e;
                            e -= (Z(e, i, s) - t) / o
                        }
                        return e
                    }(e, r, t, i) : 0 === l ? r : function(t, e, i, s, n) {
                        var o, r, l = 0;
                        do {
                            (o = Z(r = e + (i - e) / 2, s, n) - t) > 0 ? i = r : e = r
                        } while (Math.abs(o) > 1e-7 && ++l < 10);
                        return r
                    }(e, s, s + .1, t, i)
                }
                return function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : Z(r(t), e, s)
                }
            }
              , st = 38
              , nt = 40
              , ot = 32
              , rt = 9
              , lt = 33
              , ut = 34
              , at = 36
              , ct = 35
              , ht = function(t) {
                u(s, t);
                var e = d(s);
                function s() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return i(this, s),
                    history.scrollRestoration && (history.scrollRestoration = "manual"),
                    window.scrollTo(0, 0),
                    (t = e.call(this, n)).inertia && (t.lerp = .1 * t.inertia),
                    t.isScrolling = !1,
                    t.isDraggingScrollbar = !1,
                    t.isTicking = !1,
                    t.hasScrollTicking = !1,
                    t.parallaxElements = {},
                    t.stop = !1,
                    t.scrollbarContainer = n.scrollbarContainer,
                    t.checkKey = t.checkKey.bind(h(t)),
                    window.addEventListener("keydown", t.checkKey, !1),
                    t
                }
                return n(s, [{
                    key: "init",
                    value: function() {
                        var t = this;
                        this.html.classList.add(this.smoothClass),
                        this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction),
                        this.instance = l({
                            delta: {
                                x: this.initPosition.x,
                                y: this.initPosition.y
                            },
                            scroll: {
                                x: this.initPosition.x,
                                y: this.initPosition.y
                            }
                        }, this.instance),
                        this.vs = new P({
                            el: this.scrollFromAnywhere ? document : this.el,
                            mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                            firefoxMultiplier: this.firefoxMultiplier,
                            touchMultiplier: this.touchMultiplier,
                            useKeyboard: !1,
                            passive: !0
                        }),
                        this.vs.on((function(e) {
                            t.stop || t.isDraggingScrollbar || requestAnimationFrame((function() {
                                t.updateDelta(e),
                                t.isScrolling || t.startScrolling()
                            }
                            ))
                        }
                        )),
                        this.setScrollLimit(),
                        this.initScrollBar(),
                        this.addSections(),
                        this.addElements(),
                        this.checkScroll(!0),
                        this.transformElements(!0, !0),
                        f(a(s.prototype), "init", this).call(this)
                    }
                }, {
                    key: "setScrollLimit",
                    value: function() {
                        if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight,
                        "horizontal" === this.direction) {
                            for (var t = 0, e = this.el.children, i = 0; i < e.length; i++)
                                t += e[i].offsetWidth;
                            this.instance.limit.x = t - this.windowWidth
                        }
                    }
                }, {
                    key: "startScrolling",
                    value: function() {
                        this.startScrollTs = Date.now(),
                        this.isScrolling = !0,
                        this.checkScroll(),
                        this.html.classList.add(this.scrollingClass)
                    }
                }, {
                    key: "stopScrolling",
                    value: function() {
                        cancelAnimationFrame(this.checkScrollRaf),
                        this.startScrollTs = void 0,
                        this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf),
                        this.scrollToRaf = null),
                        this.isScrolling = !1,
                        this.instance.scroll.y = Math.round(this.instance.scroll.y),
                        this.html.classList.remove(this.scrollingClass)
                    }
                }, {
                    key: "checkKey",
                    value: function(t) {
                        var e = this;
                        if (this.stop)
                            t.keyCode == rt && requestAnimationFrame((function() {
                                e.html.scrollTop = 0,
                                document.body.scrollTop = 0,
                                e.html.scrollLeft = 0,
                                document.body.scrollLeft = 0
                            }
                            ));
                        else {
                            switch (t.keyCode) {
                            case rt:
                                requestAnimationFrame((function() {
                                    e.html.scrollTop = 0,
                                    document.body.scrollTop = 0,
                                    e.html.scrollLeft = 0,
                                    document.body.scrollLeft = 0,
                                    e.scrollTo(document.activeElement, {
                                        offset: -window.innerHeight / 2
                                    })
                                }
                                ));
                                break;
                            case st:
                                this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] -= 240);
                                break;
                            case nt:
                                this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] += 240);
                                break;
                            case lt:
                                this.instance.delta[this.directionAxis] -= window.innerHeight;
                                break;
                            case ut:
                                this.instance.delta[this.directionAxis] += window.innerHeight;
                                break;
                            case at:
                                this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                                break;
                            case ct:
                                this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                                break;
                            case ot:
                                this.isActiveElementScrollSensitive() && (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                                break;
                            default:
                                return
                            }
                            this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                            this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]),
                            this.stopScrolling(),
                            this.isScrolling = !0,
                            this.checkScroll(),
                            this.html.classList.add(this.scrollingClass)
                        }
                    }
                }, {
                    key: "isActiveElementScrollSensitive",
                    value: function() {
                        return !(document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || document.activeElement instanceof HTMLButtonElement || document.activeElement instanceof HTMLSelectElement)
                    }
                }, {
                    key: "checkScroll",
                    value: function() {
                        var t = this
                          , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (e || this.isScrolling || this.isDraggingScrollbar) {
                            this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame((function() {
                                return t.checkScroll()
                            }
                            )),
                            this.hasScrollTicking = !0),
                            this.updateScroll();
                            var i = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis])
                              , n = Date.now() - this.startScrollTs;
                            if (!this.animatingScroll && n > 100 && (i < .5 && 0 != this.instance.delta[this.directionAxis] || i < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(),
                            Object.entries(this.sections).forEach((function(i) {
                                var s = p(i, 2)
                                  , n = (s[0],
                                s[1]);
                                n.persistent || t.instance.scroll[t.directionAxis] > n.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < n.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(n.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(n.el, 0, -t.instance.scroll[t.directionAxis]),
                                n.inView || (n.inView = !0,
                                n.el.style.opacity = 1,
                                n.el.style.pointerEvents = "all",
                                n.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : ((n.inView || e) && (n.inView = !1,
                                n.el.style.opacity = 0,
                                n.el.style.pointerEvents = "none",
                                n.el.removeAttribute("data-".concat(t.name, "-section-inview"))),
                                t.transform(n.el, 0, 0))
                            }
                            )),
                            this.getDirection && this.addDirection(),
                            this.getSpeed && (this.addSpeed(),
                            this.speedTs = Date.now()),
                            this.detectElements(),
                            this.transformElements(),
                            this.hasScrollbar) {
                                var o = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                                "horizontal" === this.direction ? this.transform(this.scrollbarThumb, o, 0) : this.transform(this.scrollbarThumb, 0, o)
                            }
                            f(a(s.prototype), "checkScroll", this).call(this),
                            this.hasScrollTicking = !1
                        }
                    }
                }, {
                    key: "resize",
                    value: function() {
                        this.windowHeight = window.innerHeight,
                        this.windowWidth = window.innerWidth,
                        this.checkContext(),
                        this.windowMiddle = {
                            x: this.windowWidth / 2,
                            y: this.windowHeight / 2
                        },
                        this.update()
                    }
                }, {
                    key: "updateDelta",
                    value: function(t) {
                        var e, i = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                        e = "both" === i ? t.deltaX + t.deltaY : "vertical" === i ? t.deltaY : "horizontal" === i ? t.deltaX : t.deltaY,
                        this.instance.delta[this.directionAxis] -= e * this.multiplier,
                        this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                        this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
                    }
                }, {
                    key: "updateScroll",
                    value: function(t) {
                        this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = q(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
                    }
                }, {
                    key: "addDirection",
                    value: function() {
                        this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"),
                        this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
                    }
                }, {
                    key: "addSpeed",
                    value: function() {
                        this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                    }
                }, {
                    key: "initScrollBar",
                    value: function() {
                        if (this.scrollbar = document.createElement("span"),
                        this.scrollbarThumb = document.createElement("span"),
                        this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                        this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")),
                        this.scrollbar.append(this.scrollbarThumb),
                        this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar),
                        this.getScrollBar = this.getScrollBar.bind(this),
                        this.releaseScrollBar = this.releaseScrollBar.bind(this),
                        this.moveScrollBar = this.moveScrollBar.bind(this),
                        this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar),
                        window.addEventListener("mouseup", this.releaseScrollBar),
                        window.addEventListener("mousemove", this.moveScrollBar),
                        this.hasScrollbar = !1,
                        "horizontal" == this.direction) {
                            if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
                                return
                        } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight)
                            return;
                        this.hasScrollbar = !0,
                        this.scrollbarBCR = this.scrollbar.getBoundingClientRect(),
                        this.scrollbarHeight = this.scrollbarBCR.height,
                        this.scrollbarWidth = this.scrollbarBCR.width,
                        "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"),
                        this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(),
                        this.scrollBarLimit = {
                            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                        }
                    }
                }, {
                    key: "reinitScrollBar",
                    value: function() {
                        if (this.hasScrollbar = !1,
                        "horizontal" == this.direction) {
                            if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
                                return
                        } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight)
                            return;
                        this.hasScrollbar = !0,
                        this.scrollbarBCR = this.scrollbar.getBoundingClientRect(),
                        this.scrollbarHeight = this.scrollbarBCR.height,
                        this.scrollbarWidth = this.scrollbarBCR.width,
                        "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"),
                        this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(),
                        this.scrollBarLimit = {
                            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                        }
                    }
                }, {
                    key: "destroyScrollBar",
                    value: function() {
                        this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar),
                        window.removeEventListener("mouseup", this.releaseScrollBar),
                        window.removeEventListener("mousemove", this.moveScrollBar),
                        this.scrollbar.remove()
                    }
                }, {
                    key: "getScrollBar",
                    value: function(t) {
                        this.isDraggingScrollbar = !0,
                        this.checkScroll(),
                        this.html.classList.remove(this.scrollingClass),
                        this.html.classList.add(this.draggingClass)
                    }
                }, {
                    key: "releaseScrollBar",
                    value: function(t) {
                        this.isDraggingScrollbar = !1,
                        this.isScrolling && this.html.classList.add(this.scrollingClass),
                        this.html.classList.remove(this.draggingClass)
                    }
                }, {
                    key: "moveScrollBar",
                    value: function(t) {
                        var e = this;
                        this.isDraggingScrollbar && requestAnimationFrame((function() {
                            var i = 100 * (t.clientX - e.scrollbarBCR.left) / e.scrollbarWidth * e.instance.limit.x / 100
                              , s = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit.y / 100;
                            s > 0 && s < e.instance.limit.y && (e.instance.delta.y = s),
                            i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i)
                        }
                        ))
                    }
                }, {
                    key: "addElements",
                    value: function() {
                        var t = this;
                        this.els = {},
                        this.parallaxElements = {},
                        this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach((function(e, i) {
                            var s, n, o, r = U(e), l = Object.entries(t.sections).map((function(t) {
                                var e = p(t, 2);
                                e[0];
                                return e[1]
                            }
                            )).find((function(t) {
                                return r.includes(t.el)
                            }
                            )), u = e.dataset[t.name + "Class"] || t.class, a = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + i, c = e.dataset[t.name + "Repeat"], h = e.dataset[t.name + "Call"], D = e.dataset[t.name + "Position"], d = e.dataset[t.name + "Delay"], f = e.dataset[t.name + "Direction"], m = "string" == typeof e.dataset[t.name + "Sticky"], v = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10, y = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset, C = e.dataset[t.name + "Target"], g = (o = void 0 !== C ? document.querySelector("".concat(C)) : e).getBoundingClientRect();
                            null === l || l.inView ? (s = g.top + t.instance.scroll.y - K(o).y,
                            n = g.left + t.instance.scroll.x - K(o).x) : (s = g.top - K(l.el).y - K(o).y,
                            n = g.left - K(l.el).x - K(o).x);
                            var E = s + o.offsetHeight
                              , F = n + o.offsetWidth
                              , b = {
                                x: (F - n) / 2 + n,
                                y: (E - s) / 2 + s
                            };
                            if (m) {
                                var w = e.getBoundingClientRect()
                                  , x = w.top
                                  , S = w.left
                                  , A = {
                                    x: S - n,
                                    y: x - s
                                };
                                s += window.innerHeight,
                                n += window.innerWidth,
                                E = x + o.offsetHeight - e.offsetHeight - A[t.directionAxis],
                                b = {
                                    x: ((F = S + o.offsetWidth - e.offsetWidth - A[t.directionAxis]) - n) / 2 + n,
                                    y: (E - s) / 2 + s
                                }
                            }
                            c = "false" != c && (null != c || t.repeat);
                            var B = [0, 0];
                            if (y)
                                if ("horizontal" === t.direction) {
                                    for (var k = 0; k < y.length; k++)
                                        "string" == typeof y[k] ? y[k].includes("%") ? B[k] = parseInt(y[k].replace("%", "") * t.windowWidth / 100) : B[k] = parseInt(y[k]) : B[k] = y[k];
                                    n += B[0],
                                    F -= B[1]
                                } else {
                                    for (k = 0; k < y.length; k++)
                                        "string" == typeof y[k] ? y[k].includes("%") ? B[k] = parseInt(y[k].replace("%", "") * t.windowHeight / 100) : B[k] = parseInt(y[k]) : B[k] = y[k];
                                    s += B[0],
                                    E -= B[1]
                                }
                            var T = {
                                el: e,
                                id: a,
                                class: u,
                                section: l,
                                top: s,
                                middle: b,
                                bottom: E,
                                left: n,
                                right: F,
                                offset: y,
                                progress: 0,
                                repeat: c,
                                inView: !1,
                                call: h,
                                speed: v,
                                delay: d,
                                position: D,
                                target: o,
                                direction: f,
                                sticky: m
                            };
                            t.els[a] = T,
                            e.classList.contains(u) && t.setInView(t.els[a], a),
                            (!1 !== v || m) && (t.parallaxElements[a] = T)
                        }
                        ))
                    }
                }, {
                    key: "addSections",
                    value: function() {
                        var t = this;
                        this.sections = {};
                        var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                        0 === e.length && (e = [this.el]),
                        e.forEach((function(e, i) {
                            var s = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + i
                              , n = e.getBoundingClientRect()
                              , o = {
                                x: n.left - 1.5 * window.innerWidth - K(e).x,
                                y: n.top - 1.5 * window.innerHeight - K(e).y
                            }
                              , r = {
                                x: o.x + n.width + 2 * window.innerWidth,
                                y: o.y + n.height + 2 * window.innerHeight
                            }
                              , l = "string" == typeof e.dataset[t.name + "Persistent"];
                            e.setAttribute("data-scroll-section-id", s);
                            var u = {
                                el: e,
                                offset: o,
                                limit: r,
                                inView: !1,
                                persistent: l,
                                id: s
                            };
                            t.sections[s] = u
                        }
                        ))
                    }
                }, {
                    key: "transform",
                    value: function(t, e, i, s) {
                        var n;
                        if (s) {
                            var o = K(t)
                              , r = q(o.x, e, s)
                              , l = q(o.y, i, s);
                            n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(r, ",").concat(l, ",0,1)")
                        } else
                            n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
                        t.style.webkitTransform = n,
                        t.style.msTransform = n,
                        t.style.transform = n
                    }
                }, {
                    key: "transformElements",
                    value: function(t) {
                        var e = this
                          , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                          , s = this.instance.scroll.x + this.windowWidth
                          , n = this.instance.scroll.y + this.windowHeight
                          , o = {
                            x: this.instance.scroll.x + this.windowMiddle.x,
                            y: this.instance.scroll.y + this.windowMiddle.y
                        };
                        Object.entries(this.parallaxElements).forEach((function(r) {
                            var l = p(r, 2)
                              , u = (l[0],
                            l[1])
                              , a = !1;
                            if (t && (a = 0),
                            u.inView || i)
                                switch (u.position) {
                                case "top":
                                    a = e.instance.scroll[e.directionAxis] * -u.speed;
                                    break;
                                case "elementTop":
                                    a = (n - u.top) * -u.speed;
                                    break;
                                case "bottom":
                                    a = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * u.speed;
                                    break;
                                case "left":
                                    a = e.instance.scroll[e.directionAxis] * -u.speed;
                                    break;
                                case "elementLeft":
                                    a = (s - u.left) * -u.speed;
                                    break;
                                case "right":
                                    a = (e.instance.limit[e.directionAxis] - s + e.windowHeight) * u.speed;
                                    break;
                                default:
                                    a = (o[e.directionAxis] - u.middle[e.directionAxis]) * -u.speed
                                }
                            u.sticky && (a = u.inView ? "horizontal" === e.direction ? e.instance.scroll.x - u.left + window.innerWidth : e.instance.scroll.y - u.top + window.innerHeight : "horizontal" === e.direction ? e.instance.scroll.x < u.left - window.innerWidth && e.instance.scroll.x < u.left - window.innerWidth / 2 ? 0 : e.instance.scroll.x > u.right && e.instance.scroll.x > u.right + 100 && u.right - u.left + window.innerWidth : e.instance.scroll.y < u.top - window.innerHeight && e.instance.scroll.y < u.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > u.bottom && e.instance.scroll.y > u.bottom + 100 && u.bottom - u.top + window.innerHeight),
                            !1 !== a && ("horizontal" === u.direction || "horizontal" === e.direction && "vertical" !== u.direction ? e.transform(u.el, a, 0, !t && u.delay) : e.transform(u.el, 0, a, !t && u.delay))
                        }
                        ))
                    }
                }, {
                    key: "scrollTo",
                    value: function(t) {
                        var e = this
                          , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , s = parseInt(i.offset) || 0
                          , n = isNaN(parseInt(i.duration)) ? 1e3 : parseInt(i.duration)
                          , o = i.easing || [.25, 0, .35, 1]
                          , r = !!i.disableLerp
                          , l = !!i.callback && i.callback;
                        if (o = it.apply(void 0, m(o)),
                        "string" == typeof t) {
                            if ("top" === t)
                                t = 0;
                            else if ("bottom" === t)
                                t = this.instance.limit.y;
                            else if ("left" === t)
                                t = 0;
                            else if ("right" === t)
                                t = this.instance.limit.x;
                            else if (!(t = document.querySelector(t)))
                                return
                        } else if ("number" == typeof t)
                            t = parseInt(t);
                        else if (!t || !t.tagName)
                            return void console.warn("`target` parameter is not valid");
                        if ("number" != typeof t) {
                            var u = U(t).includes(this.el);
                            if (!u)
                                return;
                            var a = t.getBoundingClientRect()
                              , c = a.top
                              , h = a.left
                              , D = U(t)
                              , d = D.find((function(t) {
                                return Object.entries(e.sections).map((function(t) {
                                    var e = p(t, 2);
                                    e[0];
                                    return e[1]
                                }
                                )).find((function(e) {
                                    return e.el == t
                                }
                                ))
                            }
                            ))
                              , f = 0;
                            f = d ? K(d)[this.directionAxis] : -this.instance.scroll[this.directionAxis],
                            s = "horizontal" === this.direction ? h + s - f : c + s - f
                        } else
                            s = t + s;
                        var v = parseFloat(this.instance.delta[this.directionAxis])
                          , y = Math.max(0, Math.min(s, this.instance.limit[this.directionAxis]))
                          , C = y - v
                          , g = function(t) {
                            r ? "horizontal" === e.direction ? e.setScroll(v + C * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, v + C * t) : e.instance.delta[e.directionAxis] = v + C * t
                        };
                        this.animatingScroll = !0,
                        this.stopScrolling(),
                        this.startScrolling();
                        var E = Date.now()
                          , F = function t() {
                            var i = (Date.now() - E) / n;
                            i > 1 ? (g(1),
                            e.animatingScroll = !1,
                            0 == n && e.update(),
                            l && l()) : (e.scrollToRaf = requestAnimationFrame(t),
                            g(o(i)))
                        };
                        F()
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.setScrollLimit(),
                        this.addSections(),
                        this.addElements(),
                        this.detectElements(),
                        this.updateScroll(),
                        this.transformElements(!0),
                        this.reinitScrollBar(),
                        this.checkScroll(!0)
                    }
                }, {
                    key: "startScroll",
                    value: function() {
                        this.stop = !1
                    }
                }, {
                    key: "stopScroll",
                    value: function() {
                        this.stop = !0
                    }
                }, {
                    key: "setScroll",
                    value: function(t, e) {
                        this.instance = l(l({}, this.instance), {}, {
                            scroll: {
                                x: t,
                                y: e
                            },
                            delta: {
                                x: t,
                                y: e
                            },
                            speed: 0
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        f(a(s.prototype), "destroy", this).call(this),
                        this.stopScrolling(),
                        this.html.classList.remove(this.smoothClass),
                        this.vs.destroy(),
                        this.destroyScrollBar(),
                        window.removeEventListener("keydown", this.checkKey, !1)
                    }
                }]),
                s
            }(g)
              , Dt = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, t),
                    this.options = e,
                    Object.assign(this, C, e),
                    this.smartphone = C.smartphone,
                    e.smartphone && Object.assign(this.smartphone, e.smartphone),
                    this.tablet = C.tablet,
                    e.tablet && Object.assign(this.tablet, e.tablet),
                    this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),
                    this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),
                    this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),
                    this.init()
                }
                return n(t, [{
                    key: "init",
                    value: function() {
                        if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint,
                        this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint,
                        this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new ht(this.options) : this.scroll = new w(this.options),
                        this.scroll.init(),
                        window.location.hash) {
                            var t = window.location.hash.slice(1, window.location.hash.length)
                              , e = document.getElementById(t);
                            e && this.scroll.scrollTo(e)
                        }
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.scroll.update()
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.scroll.startScroll()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.scroll.stopScroll()
                    }
                }, {
                    key: "scrollTo",
                    value: function(t, e) {
                        this.scroll.scrollTo(t, e)
                    }
                }, {
                    key: "setScroll",
                    value: function(t, e) {
                        this.scroll.setScroll(t, e)
                    }
                }, {
                    key: "on",
                    value: function(t, e) {
                        this.scroll.setEvents(t, e)
                    }
                }, {
                    key: "off",
                    value: function(t, e) {
                        this.scroll.unsetEvents(t, e)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.scroll.destroy()
                    }
                }]),
                t
            }();
            e.a = Dt
        }
        ).call(this, i(54))
    },
    683: function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return w
        }
        ));
        var s = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
        var n, o, r, l = /(?:\r|\n|\t\t)/g, u = /(?:\s\s+)/g, a = function(t) {
            return o.getComputedStyle(t)
        }, c = Array.isArray, h = [].slice, D = function(t, e) {
            var i;
            return c(t) ? t : "string" == (i = typeof t) && !e && t ? h.call(n.querySelectorAll(t), 0) : t && "object" === i && "length"in t ? h.call(t, 0) : t ? [t] : []
        }, d = function(t) {
            return "absolute" === t.position || !0 === t.absolute
        }, f = function(t, e) {
            for (var i, s = e.length; --s > -1; )
                if (i = e[s],
                t.substr(0, i.length) === i)
                    return i.length
        }, p = function(t, e) {
            void 0 === t && (t = "");
            var i = ~t.indexOf("++")
              , s = 1;
            return i && (t = t.split("++").join("")),
            function() {
                return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (i ? s++ : "") + "'>" : ">")
            }
        }, m = function t(e, i, s) {
            var n = e.nodeType;
            if (1 === n || 9 === n || 11 === n)
                for (e = e.firstChild; e; e = e.nextSibling)
                    t(e, i, s);
            else
                3 !== n && 4 !== n || (e.nodeValue = e.nodeValue.split(i).join(s))
        }, v = function(t, e) {
            for (var i = e.length; --i > -1; )
                t.push(e[i])
        }, y = function(t, e, i) {
            for (var s; t && t !== e; ) {
                if (s = t._next || t.nextSibling)
                    return s.textContent.charAt(0) === i;
                t = t.parentNode || t._parent
            }
        }, C = function t(e) {
            var i, s, n = D(e.childNodes), o = n.length;
            for (i = 0; i < o; i++)
                (s = n[i])._isSplit ? t(s) : (i && 3 === s.previousSibling.nodeType ? s.previousSibling.nodeValue += 3 === s.nodeType ? s.nodeValue : s.firstChild.nodeValue : 3 !== s.nodeType && e.insertBefore(s.firstChild, s),
                e.removeChild(s))
        }, g = function(t, e) {
            return parseFloat(e[t]) || 0
        }, E = function(t, e, i, s, o, r, l) {
            var u, c, h, D, f, p, E, F, b, w, x, S, A = a(t), B = g("paddingLeft", A), k = -999, T = g("borderBottomWidth", A) + g("borderTopWidth", A), O = g("borderLeftWidth", A) + g("borderRightWidth", A), _ = g("paddingTop", A) + g("paddingBottom", A), L = g("paddingLeft", A) + g("paddingRight", A), M = .2 * g("fontSize", A), W = A.textAlign, j = [], H = [], R = [], P = e.wordDelimiter || " ", Y = e.tag ? e.tag : e.span ? "span" : "div", I = e.type || e.split || "chars,words,lines", N = o && ~I.indexOf("lines") ? [] : null, z = ~I.indexOf("words"), V = ~I.indexOf("chars"), X = d(e), q = e.linesClass, K = ~(q || "").indexOf("++"), U = [];
            for (K && (q = q.split("++").join("")),
            h = (c = t.getElementsByTagName("*")).length,
            f = [],
            u = 0; u < h; u++)
                f[u] = c[u];
            if (N || X)
                for (u = 0; u < h; u++)
                    ((p = (D = f[u]).parentNode === t) || X || V && !z) && (S = D.offsetTop,
                    N && p && Math.abs(S - k) > M && ("BR" !== D.nodeName || 0 === u) && (E = [],
                    N.push(E),
                    k = S),
                    X && (D._x = D.offsetLeft,
                    D._y = S,
                    D._w = D.offsetWidth,
                    D._h = D.offsetHeight),
                    N && ((D._isSplit && p || !V && p || z && p || !z && D.parentNode.parentNode === t && !D.parentNode._isSplit) && (E.push(D),
                    D._x -= B,
                    y(D, t, P) && (D._wordEnd = !0)),
                    "BR" === D.nodeName && (D.nextSibling && "BR" === D.nextSibling.nodeName || 0 === u) && N.push([])));
            for (u = 0; u < h; u++)
                p = (D = f[u]).parentNode === t,
                "BR" !== D.nodeName ? (X && (b = D.style,
                z || p || (D._x += D.parentNode._x,
                D._y += D.parentNode._y),
                b.left = D._x + "px",
                b.top = D._y + "px",
                b.position = "absolute",
                b.display = "block",
                b.width = D._w + 1 + "px",
                b.height = D._h + "px"),
                !z && V ? D._isSplit ? (D._next = D.nextSibling,
                D.parentNode.appendChild(D)) : D.parentNode._isSplit ? (D._parent = D.parentNode,
                !D.previousSibling && D.firstChild && (D.firstChild._isFirst = !0),
                D.nextSibling && " " === D.nextSibling.textContent && !D.nextSibling.nextSibling && U.push(D.nextSibling),
                D._next = D.nextSibling && D.nextSibling._isFirst ? null : D.nextSibling,
                D.parentNode.removeChild(D),
                f.splice(u--, 1),
                h--) : p || (S = !D.nextSibling && y(D.parentNode, t, P),
                D.parentNode._parent && D.parentNode._parent.appendChild(D),
                S && D.parentNode.appendChild(n.createTextNode(" ")),
                "span" === Y && (D.style.display = "inline"),
                j.push(D)) : D.parentNode._isSplit && !D._isSplit && "" !== D.innerHTML ? H.push(D) : V && !D._isSplit && ("span" === Y && (D.style.display = "inline"),
                j.push(D))) : N || X ? (D.parentNode && D.parentNode.removeChild(D),
                f.splice(u--, 1),
                h--) : z || t.appendChild(D);
            for (u = U.length; --u > -1; )
                U[u].parentNode.removeChild(U[u]);
            if (N) {
                for (X && (w = n.createElement(Y),
                t.appendChild(w),
                x = w.offsetWidth + "px",
                S = w.offsetParent === t ? 0 : t.offsetLeft,
                t.removeChild(w)),
                b = t.style.cssText,
                t.style.cssText = "display:none;"; t.firstChild; )
                    t.removeChild(t.firstChild);
                for (F = " " === P && (!X || !z && !V),
                u = 0; u < N.length; u++) {
                    for (E = N[u],
                    (w = n.createElement(Y)).style.cssText = "display:block;text-align:" + W + ";position:" + (X ? "absolute;" : "relative;"),
                    q && (w.className = q + (K ? u + 1 : "")),
                    R.push(w),
                    h = E.length,
                    c = 0; c < h; c++)
                        "BR" !== E[c].nodeName && (D = E[c],
                        w.appendChild(D),
                        F && D._wordEnd && w.appendChild(n.createTextNode(" ")),
                        X && (0 === c && (w.style.top = D._y + "px",
                        w.style.left = B + S + "px"),
                        D.style.top = "0px",
                        S && (D.style.left = D._x - S + "px")));
                    0 === h ? w.innerHTML = "&nbsp;" : z || V || (C(w),
                    m(w, String.fromCharCode(160), " ")),
                    X && (w.style.width = x,
                    w.style.height = D._h + "px"),
                    t.appendChild(w)
                }
                t.style.cssText = b
            }
            X && (l > t.clientHeight && (t.style.height = l - _ + "px",
            t.clientHeight < l && (t.style.height = l + T + "px")),
            r > t.clientWidth && (t.style.width = r - L + "px",
            t.clientWidth < r && (t.style.width = r + O + "px"))),
            v(i, j),
            z && v(s, H),
            v(o, R)
        }, F = function(t, e, i, o) {
            var r, a, c, h, D, p, v, y, C = e.tag ? e.tag : e.span ? "span" : "div", g = ~(e.type || e.split || "chars,words,lines").indexOf("chars"), E = d(e), F = e.wordDelimiter || " ", b = " " !== F ? "" : E ? "&#173; " : " ", w = "</" + C + ">", x = 1, S = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : f : null, A = n.createElement("div"), B = t.parentNode;
            for (B.insertBefore(A, t),
            A.textContent = t.nodeValue,
            B.removeChild(t),
            v = -1 !== (r = function t(e) {
                var i = e.nodeType
                  , s = "";
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        s += t(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue;
                return s
            }(t = A)).indexOf("<"),
            !1 !== e.reduceWhiteSpace && (r = r.replace(u, " ").replace(l, "")),
            v && (r = r.split("<").join("{{LT}}")),
            D = r.length,
            a = (" " === r.charAt(0) ? b : "") + i(),
            c = 0; c < D; c++)
                if (p = r.charAt(c),
                S && (y = S(r.substr(c), e.specialChars)))
                    p = r.substr(c, y || 1),
                    a += g && " " !== p ? o() + p + "</" + C + ">" : p,
                    c += y - 1;
                else if (p === F && r.charAt(c - 1) !== F && c) {
                    for (a += x ? w : "",
                    x = 0; r.charAt(c + 1) === F; )
                        a += b,
                        c++;
                    c === D - 1 ? a += b : ")" !== r.charAt(c + 1) && (a += b + i(),
                    x = 1)
                } else
                    "{" === p && "{{LT}}" === r.substr(c, 6) ? (a += g ? o() + "{{LT}}</" + C + ">" : "{{LT}}",
                    c += 5) : p.charCodeAt(0) >= 55296 && p.charCodeAt(0) <= 56319 || r.charCodeAt(c + 1) >= 65024 && r.charCodeAt(c + 1) <= 65039 ? (h = ((r.substr(c, 12).split(s) || [])[1] || "").length || 2,
                    a += g && " " !== p ? o() + r.substr(c, h) + "</" + C + ">" : r.substr(c, h),
                    c += h - 1) : a += g && " " !== p ? o() + p + "</" + C + ">" : p;
            t.outerHTML = a + (x ? w : ""),
            v && m(B, "{{LT}}", "<")
        }, b = function t(e, i, s, n) {
            var o, r, l = D(e.childNodes), u = l.length, c = d(i);
            if (3 !== e.nodeType || u > 1) {
                for (i.absolute = !1,
                o = 0; o < u; o++)
                    (3 !== (r = l[o]).nodeType || /\S+/.test(r.nodeValue)) && (c && 3 !== r.nodeType && "inline" === a(r).display && (r.style.display = "inline-block",
                    r.style.position = "relative"),
                    r._isSplit = !0,
                    t(r, i, s, n));
                return i.absolute = c,
                void (e._isSplit = !0)
            }
            F(e, i, s, n)
        }, w = function() {
            function t(t, e) {
                r || (n = document,
                o = window,
                r = 1),
                this.elements = D(t),
                this.chars = [],
                this.words = [],
                this.lines = [],
                this._originals = [],
                this.vars = e || {},
                this.split(e)
            }
            var e = t.prototype;
            return e.split = function(t) {
                this.isSplit && this.revert(),
                this.vars = t = t || this.vars,
                this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                for (var e, i, s, n = this.elements.length, o = t.tag ? t.tag : t.span ? "span" : "div", r = p(t.wordsClass, o), l = p(t.charsClass, o); --n > -1; )
                    s = this.elements[n],
                    this._originals[n] = s.innerHTML,
                    e = s.clientHeight,
                    i = s.clientWidth,
                    b(s, t, r, l),
                    E(s, t, this.chars, this.words, this.lines, i, e);
                return this.chars.reverse(),
                this.words.reverse(),
                this.lines.reverse(),
                this.isSplit = !0,
                this
            }
            ,
            e.revert = function() {
                var t = this._originals;
                if (!t)
                    throw "revert() call wasn't scoped properly.";
                return this.elements.forEach((function(e, i) {
                    return e.innerHTML = t[i]
                }
                )),
                this.chars = [],
                this.words = [],
                this.lines = [],
                this.isSplit = !1,
                this
            }
            ,
            t.create = function(e, i) {
                return new t(e,i)
            }
            ,
            t
        }();
        w.version = "3.4.0"
    }
}]);
//# sourceMappingURL=vendors~about~archiveposts~archivetaxonomy~contact~faqs~generic~home~people~pipeline~post~presentati~03eceb36.e09b.js.map

(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
    667: function(e, t, n) {
        "use strict";
        var r = n(3)
          , i = n.n(r)
          , o = n(665)
          , c = n.n(o)
          , a = n(0)
          , s = n(10)
          , l = n(12)
          , u = n(15)
          , d = n.n(u)
          , f = function(e) {
            var t = {
                root: {
                    opacity: 0
                }
            };
            return t[e.mediaInverse.sm] = {
                root: {}
            },
            t
        }
          , b = n(1)
          , p = ["className", "children", "duration", "ease", "delay", "visible", "inview", "tag"];
        function m(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(n), !0).forEach((function(t) {
                    i()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var h = Object(l.b)(f)
          , j = function(e) {
            var t = e.className
              , n = e.children
              , r = e.duration
              , o = e.ease
              , l = e.delay
              , u = e.visible
              , f = e.inview
              , m = e.tag
              , j = c()(e, p)
              , v = h()
              , O = Object(a.useRef)()
              , y = m;
            return Object(a.useEffect)((function() {
                s.a.to(O.current, {
                    opacity: u || f ? 1 : 0,
                    duration: r,
                    ease: o,
                    delay: l
                })
            }
            ), [u, f]),
            Object(b.jsx)(y, g(g({
                className: d()(i()(i()({}, t, t), v.root, !0)),
                ref: O
            }, j), {}, {
                children: n
            }))
        };
        j.defaultProps = {
            className: "",
            tag: "div",
            duration: 1,
            delay: 0,
            ease: "power3.inOut",
            visible: !1,
            inview: !1
        };
        t.a = j
    },
    669: function(e, t, n) {
        "use strict";
        var r = n(3)
          , i = n.n(r)
          , o = n(6)
          , c = n.n(o)
          , a = n(0)
          , s = n(12)
          , l = n(15)
          , u = n.n(l)
          , d = n(10)
          , f = n(204)
          , b = n(76)
          , p = n(77)
          , m = n(683)
          , g = function(e) {
            var t = {
                root: {
                    position: "relative",
                    opacity: 0,
                    "& p": {
                        marginBottom: 0
                    },
                    "& *": {
                        lineHeight: 1.25
                    }
                },
                wrap: {
                    overflow: "hidden",
                    "& div.line:not(:last-child)": {
                        marginBottom: function(e) {
                            return "".concat(e.linesMargin, "em")
                        },
                        overflow: "hidden",
                        "& div": {
                            verticalAlign: "middle"
                        }
                    }
                },
                hidden: {
                    visibility: "hidden"
                }
            };
            return t[e.mediaInverse.md] = {
                wrap: {
                    "& div.line:not(:last-child)": {
                        overflow: "hidden",
                        "& div": {
                            overflow: "hidden"
                        }
                    }
                }
            },
            t
        }
          , h = n(1);
        d.a.registerPlugin(m.a);
        var j = Object(s.b)(g)
          , v = function(e) {
            var t = e.className
              , n = e.delayEnter
              , r = e.delayLeave
              , o = e.duration
              , s = e.ease
              , l = e.inview
              , g = e.lineHeight
              , v = e.link
              , O = e.onComplete
              , y = e.stagger
              , w = e.tag
              , x = e.type
              , N = e.value
              , R = e.visible
              , P = j({
                linesMargin: -1.25 + g
            })
              , S = Object(a.useRef)()
              , E = Object(a.useRef)(0)
              , C = Object(a.useRef)()
              , z = w
              , B = Object(a.useState)(!1)
              , L = c()(B, 2)
              , I = L[0]
              , _ = L[1];
            return Object(a.useEffect)((function() {
                "" !== N && (E.current = window.innerWidth,
                _(new m.a(C.current,{
                    type: x
                })))
            }
            ), []),
            Object(a.useEffect)((function() {
                !0 === I.isSplit && (d.a.set(S.current, {
                    opacity: 1
                }),
                d.a.set(I[x], {
                    y: "120%",
                    transformOrigin: "center top"
                }),
                "lines" === x && I.lines.forEach((function(e) {
                    var t, n;
                    t = e,
                    n = document.createElement("div"),
                    t.parentNode.insertBefore(n, t),
                    n.classList.add("line"),
                    n.appendChild(t)
                }
                )))
            }
            ), [I, x]),
            Object(p.c)((function() {
                E.current !== window.innerWidth && I.isSplit && (I.revert(),
                _(!1),
                setTimeout((function() {
                    _(new m.a(C.current,{
                        type: x
                    })),
                    E.current = window.innerWidth
                }
                ), 200))
            }
            ), [I]),
            Object(a.useEffect)((function() {
                !0 === I.isSplit && d.a.to(I[x], {
                    y: R || l ? "0%" : "120%",
                    duration: o,
                    stagger: y,
                    ease: s,
                    delay: R || l ? n : r,
                    onComplete: O
                })
            }
            ), [I, x, R, l, n, r, O]),
            Object(h.jsx)(z, {
                ref: S,
                className: u()(i()(i()(i()(i()({}, t, t), P.hidden, !I), P.root, !0), P.visible, R)),
                children: Object(h.jsx)(f.a, {
                    condition: v,
                    wrapper: function(e) {
                        return Object(h.jsx)(b.a, {
                            className: P.link,
                            to: v,
                            children: e
                        })
                    },
                    children: Object(h.jsx)("div", {
                        className: P.wrap,
                        dangerouslySetInnerHTML: {
                            __html: N
                        },
                        ref: C
                    })
                })
            })
        };
        v.defaultProps = {
            className: "",
            value: "",
            type: "chars",
            delayEnter: 0,
            delayLeave: 0,
            lineHeight: 1.25,
            tag: "div",
            stagger: .1,
            duration: 1.2,
            ease: "power3.inOut",
            link: !1,
            visible: !1,
            inview: !1
        };
        t.a = v
    },
    670: function(e, t, n) {
        "use strict";
        var r = n(3)
          , i = n.n(r)
          , o = n(6)
          , c = n.n(o)
          , a = n(665)
          , s = n.n(a)
          , l = n(0)
          , u = n(10)
          , d = n(96)
          , f = n(94)
          , b = n(1)
          , p = ["children", "offset", "once", "className"];
        function m(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(n), !0).forEach((function(t) {
                    i()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        u.a.registerPlugin(d.b);
        var h = function(e) {
            var t = e.children
              , n = e.offset
              , r = e.once
              , i = e.className
              , o = s()(e, p)
              , a = Object(l.useRef)()
              , u = Object(l.useRef)()
              , m = Object(l.useState)(!1)
              , h = c()(m, 2)
              , j = h[0]
              , v = h[1]
              , O = Object(l.useContext)(f.a).scrollElement;
            return Object(l.useEffect)((function() {
                return O && (u.current = d.b.create({
                    trigger: a.current,
                    scroller: O,
                    start: "top ".concat(n),
                    once: r,
                    onEnter: function() {
                        return r && v(!0)
                    },
                    onToggle: function(e) {
                        return !r && v(e.isActive)
                    }
                })),
                function() {
                    O && u.current.kill()
                }
            }
            ), [O]),
            Object(b.jsx)("div", g(g({
                ref: a,
                className: i
            }, o), {}, {
                children: l.Children.map(t, (function(e) {
                    return Object(l.cloneElement)(e, {
                        inview: "string" == typeof e.type ? void 0 : j
                    })
                }
                ))
            }))
        };
        h.defaultProps = {
            offset: "95%",
            once: !0
        },
        t.a = Object(l.memo)(h)
    },
    671: function(e, t, n) {
        "use strict";
        var r = n(3)
          , i = n.n(r)
          , o = n(665)
          , c = n.n(o)
          , a = n(0)
          , s = n(12)
          , l = n(10)
          , u = function(e) {
            var t = {
                root: {
                    willChange: "opacity",
                    overflow: "hidden",
                    display: "block",
                    opacity: 0,
                    "& span": {
                        display: "block",
                        willChange: "transform"
                    }
                },
                image: {
                    "& img": {
                        willChange: "transform",
                        transform: "scale(1)",
                        height: "auto"
                    }
                }
            };
            return t[e.mediaInverse.sm] = {},
            t
        }
          , d = n(1)
          , f = ["className", "image", "width", "height", "label", "visible", "inview", "delayEnter", "delayLeave"];
        function b(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? b(Object(n), !0).forEach((function(t) {
                    i()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var m = Object(s.b)(u)
          , g = function(e) {
            var t = e.className
              , n = e.image
              , r = e.width
              , i = e.height
              , o = e.label
              , s = e.visible
              , u = e.inview
              , b = e.delayEnter
              , g = e.delayLeave
              , h = c()(e, f)
              , j = m()
              , v = Object(a.useRef)()
              , O = Object(a.useRef)();
            return Object(a.useEffect)((function() {
                l.a.to(v.current, {
                    opacity: s || u ? 1 : 0,
                    duration: 1,
                    ease: "power3.inOut",
                    delay: s || u ? b : g
                })
            }
            ), [s, u]),
            Object(d.jsx)("picture", p(p({
                ref: v,
                className: "".concat(j.root, " ").concat(t)
            }, h), {}, {
                children: Object(d.jsx)("span", {
                    className: j.image,
                    children: Object(d.jsx)("img", {
                        ref: O,
                        src: n,
                        alt: o,
                        width: r,
                        height: i
                    })
                })
            }))
        };
        g.defaultProps = {
            className: "",
            image: "",
            label: "",
            visible: !1,
            inview: !1,
            delay: 0
        };
        t.a = g
    },
    672: function(e, t, n) {
        "use strict";
        var r = n(3)
          , i = n.n(r)
          , o = n(0)
          , c = n(15)
          , a = n.n(c)
          , s = n(325)
          , l = n(74)
          , u = n(682)
          , d = n(94)
          , f = n(1)
          , b = Object(o.forwardRef)((function(e, t) {
            var n = e.children
              , r = e.className
              , c = e.direction
              , b = e.init
              , p = e.lerp
              , m = e.smooth
              , g = Object(o.useRef)(null)
              , h = Object(l.c)()
              , j = Object(o.useRef)()
              , v = Object(o.useRef)()
              , O = Object(o.useContext)(d.a).setScrollbar;
            return Object(o.useEffect)((function() {
                return g.current && (v.current = new s.default((function() {
                    var e;
                    g.current && (null === (e = j.current) || void 0 === e || e.update())
                }
                )),
                v.current.observe(g.current)),
                function() {
                    g.current && v.current.disconnect(g.current)
                }
            }
            ), [g]),
            Object(o.useEffect)((function() {
                return g.current && b && !h.detect.isIE11 && (j.current = new u.a({
                    el: g.current,
                    direction: c,
                    smooth: m,
                    lerp: p,
                    getDirection: !0,
                    getSpeed: !0,
                    repeat: !1,
                    touchMultiplier: 2
                }),
                O(j.current)),
                function() {
                    b && j.current && j.current.destroy()
                }
            }
            ), [g, b]),
            Object(o.useImperativeHandle)(t, (function() {
                return {
                    ref: g.current
                }
            }
            )),
            Object(f.jsx)("div", {
                className: a()(i()(i()({}, r, r), "smooth-scroll", !0)),
                ref: g,
                "data-scroll-container": !0,
                children: n
            })
        }
        ));
        b.defaultProps = {
            smooth: !0,
            lerp: .1
        },
        t.a = b
    },
    674: function(e, t, n) {
        "use strict";
        var r = n(684)
          , i = n(11)
          , o = n(131)
          , c = n(1)
          , a = function(e) {
            var t = e.title
              , n = Object(i.f)((function(e) {
                return e.options.strings
            }
            ));
            return Object(c.jsx)(r.a, {
                title: "".concat(Object(o.decodeEntities)(t), " - ").concat(n.site_title)
            })
        };
        a.defaultProps = {
            title: ""
        },
        t.a = a
    },
    675: function(e, t, n) {
        "use strict";
        var r = n(3)
          , i = n.n(r)
          , o = n(0)
          , c = n(12)
          , a = n(15)
          , s = n.n(a)
          , l = n(10)
          , u = function(e) {
            var t = {
                root: {
                    width: 62,
                    height: 62,
                    border: "1px solid ".concat(e.getRgba(e.colors[1], .22)),
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 3,
                    cursor: "pointer",
                    opacity: 0,
                    "& svg": {
                        fill: function(t) {
                            return t.color ? t.color : e.colors[3]
                        },
                        width: 17,
                        height: 31
                    }
                },
                mouse: {
                    animation: "$scroll 1s ease-out infinite alternate"
                },
                arrow: {
                    animation: "$pulse 1s ease-out infinite alternate",
                    transformOrigin: "center 70%"
                },
                "@keyframes scroll": {
                    "0%": {
                        transform: "translateY(0px)"
                    },
                    "100%": {
                        transform: "translateY(15px)"
                    }
                },
                "@keyframes pulse": {
                    "0%": {
                        transform: "scale(1)"
                    },
                    "100%": {
                        transform: "scale(1.2)"
                    }
                }
            };
            return t[e.mediaInverse.sm] = {},
            t
        }
          , d = n(1)
          , f = Object(c.b)(u)
          , b = function(e) {
            var t = e.className
              , n = e.visible
              , r = e.color
              , c = e.event
              , a = f({
                color: r
            })
              , u = Object(o.useRef)();
            return Object(o.useEffect)((function() {
                n ? l.a.to(u.current, {
                    duration: 1.3,
                    opacity: 1,
                    y: "0%",
                    ease: "power3.out",
                    delay: .6
                }) : l.a.to(u.current, {
                    duration: 1.3,
                    opacity: 0,
                    y: "100%",
                    ease: "power3.inOut"
                })
            }
            ), [n]),
            Object(d.jsx)("button", {
                className: s()(i()(i()(i()({}, a.root, !0), t, t), a.visible, n)),
                ref: u,
                onClick: c,
                children: Object(d.jsxs)("svg", {
                    viewBox: "0 0 36 80",
                    children: [Object(d.jsx)("path", {
                        d: "M0,18v18c0,9.9,8.1,18,18,18s18-8.1,18-18V18c0-9.9-8.1-18-18-18S0,8.1,0,18z M18,4c7.7,0,14,6.3,14,14v18 c0,7.7-6.3,14-14,14S4,43.7,4,36V18C4,10.3,10.3,4,18,4z"
                    }), Object(d.jsx)("path", {
                        className: a.mouse,
                        d: "M18,21c1.1,0,2-0.9,2-2v-6c0-1.1-0.9-2-2-2s-2,0.9-2,2v6C16,20.1,16.9,21,18,21z"
                    }), Object(d.jsx)("path", {
                        className: a.arrow,
                        d: "M16.6,69.4C17,69.8,17.5,70,18,70s1-0.2,1.4-0.6l5-5c0.8-0.8,0.8-2,0-2.8s-2-0.8-2.8,0L18,65.2l-3.6-3.6 c-0.8-0.8-2-0.8-2.8,0s-0.8,2,0,2.8L16.6,69.4z"
                    })]
                })
            })
        };
        b.defaultProps = {
            className: "",
            visible: !0,
            event: function() {}
        };
        t.a = b
    },
    677: function(e, t, n) {
        "use strict";
        var r = n(3)
          , i = n.n(r)
          , o = n(6)
          , c = n.n(o)
          , a = n(0)
          , s = n(15)
          , l = n.n(s)
          , u = n(53)
          , d = n(77)
          , f = n(94)
          , b = n(12)
          , p = n(675)
          , m = n(10)
          , g = function(e) {
            var t = {
                "@global": {
                    ".c-scrollbar": {
                        display: "none"
                    }
                },
                root: {
                    position: "fixed",
                    extend: e.wrapper,
                    zIndex: 3,
                    top: function(e) {
                        return e.headerHeight
                    },
                    left: "5.5vw",
                    right: "5.5vw",
                    margin: [0, "auto"],
                    height: function(e) {
                        return "calc(100vh - ".concat(e.headerHeight, "px)")
                    },
                    pointerEvents: "none"
                },
                topLeftCorner: {
                    position: "absolute",
                    zIndex: 1,
                    left: 0,
                    top: 0,
                    borderTopLeftRadius: 112,
                    border: function(t) {
                        return "1px solid ".concat(e.getRgba(t.inverse ? e.colors[0] : e.colors[1], .15))
                    },
                    borderRight: "none!important",
                    borderBottom: "none!important",
                    width: 150,
                    height: "calc(100% - 35px)",
                    transition: "width .3s ease-out .15s"
                },
                noBorderRadius: {
                    width: 0,
                    transitionDelay: "0s"
                },
                scroll: {
                    position: "absolute",
                    left: 0,
                    top: 112,
                    height: "calc(100% - 112px)",
                    width: 1
                },
                thumb: {
                    position: "absolute",
                    zIndex: 1,
                    left: -2,
                    top: 0,
                    borderRadius: 5,
                    width: 3,
                    height: 120,
                    background: function(t) {
                        return t.color || e.colors[8]
                    }
                },
                scrollIcon: {
                    position: "absolute",
                    zIndex: 1,
                    left: "5.5vw",
                    bottom: 28
                }
            };
            return t[e.mediaInverse.sm] = {
                root: {
                    display: "none"
                },
                topLeftCorner: {
                    borderTopLeftRadius: 50
                },
                scroll: {
                    top: 50,
                    height: "calc(100% - 50px)"
                },
                thumb: {
                    width: 3,
                    left: -2,
                    height: "10vh"
                },
                scrollIcon: {
                    display: "none"
                }
            },
            t
        }
          , h = n(1)
          , j = Object(b.b)(g);
        t.a = function(e) {
            var t = e.color
              , n = e.inverse
              , r = Object(a.useContext)(u.a).headerHeight
              , o = j({
                headerHeight: r,
                color: t,
                inverse: n
            })
              , s = Object(a.useRef)()
              , b = Object(a.useRef)()
              , g = Object(a.useContext)(f.a)
              , v = g.scroll
              , O = g.limit
              , y = g.direction
              , w = Object(a.useRef)(0)
              , x = Object(a.useState)(!1)
              , N = c()(x, 2)
              , R = N[0]
              , P = N[1]
              , S = Object(a.useState)(!1)
              , E = c()(S, 2)
              , C = E[0]
              , z = E[1]
              , B = Object(a.useCallback)((function() {
                s.current && b.current && (w.current = s.current.getBoundingClientRect().height - b.current.getBoundingClientRect().height)
            }
            ), []);
            return Object(a.useEffect)((function() {
                B()
            }
            ), []),
            Object(d.c)((function() {
                B()
            }
            )),
            Object(d.b)((function() {
                if (0 === O.current.y)
                    P(!1),
                    z(!1),
                    b.current && m.a.to(b.current, {
                        opacity: 0,
                        y: 0
                    });
                else {
                    var e = v.current.y / O.current.y;
                    P(0 === e),
                    z("down" === y && e > 0),
                    b.current && m.a.to(b.current, {
                        opacity: 1,
                        y: e * w.current
                    })
                }
            }
            ), [y, O, v]),
            Object(h.jsxs)("div", {
                className: o.root,
                children: [Object(h.jsx)("div", {
                    className: l()(i()(i()({}, o.topLeftCorner, !0), o.noBorderRadius, C)),
                    children: Object(h.jsx)("div", {
                        className: o.scroll,
                        ref: s,
                        children: Object(h.jsx)("div", {
                            className: o.thumb,
                            ref: b
                        })
                    })
                }), Object(h.jsx)(p.a, {
                    visible: R,
                    color: t,
                    className: o.scrollIcon
                })]
            })
        }
    },
    678: function(e, t, n) {
        "use strict";
        var r = n(3)
          , i = n.n(r)
          , o = n(0)
          , c = n(15)
          , a = n.n(c)
          , s = n(12)
          , l = n(53)
          , u = n(76)
          , d = n(669)
          , f = n(671)
          , b = n(667)
          , p = n(670)
          , m = function(e) {
            var t = {
                hero: {
                    paddingTop: 90,
                    paddingBottom: 25,
                    position: "relative",
                    zIndex: 1,
                    maxWidth: 1280,
                    width: "100%",
                    margin: [0, "auto"]
                },
                title: {
                    color: function(t) {
                        return t.inverse ? e.colors[0] : e.colors[1]
                    },
                    fontFamily: e.fonts[1],
                    fontSize: 125,
                    marginBottom: 25,
                    maxWidth: 800
                },
                date: {
                    color: function(t) {
                        return t.inverse ? e.getRgba(e.colors[0], .7) : e.getRgba(e.colors[1], .7)
                    },
                    fontFamily: e.fonts[1],
                    fontSize: 16,
                    marginTop: -15,
                    marginBottom: 25,
                    "& a": {
                        extend: e.link,
                        color: e.colors[3],
                        letterSpacing: "0.01em",
                        fontFamily: e.fonts[0],
                        marginRight: 10
                    }
                },
                payoff: {
                    color: function(t) {
                        return t.inverse ? e.colors[0] : e.colors[1]
                    },
                    opacity: .45,
                    maxWidth: 330,
                    fontFamily: e.fonts[0],
                    fontSize: 18,
                    marginBottom: 55
                },
                image: {
                    borderRadius: 20,
                    marginLeft: "36%",
                    marginBottom: 45,
                    "& img": {
                        borderRadius: 20
                    }
                },
                caption: {
                    marginLeft: "36%",
                    marginTop: -30,
                    marginBottom: 45,
                    textAlign: "left",
                    color: e.getRgba(e.colors[1], .6)
                },
                subtitle: {
                    marginLeft: "36%",
                    color: function(t) {
                        return t.inverse ? e.colors[0] : e.colors[8]
                    },
                    fontFamily: e.fonts[1],
                    fontSize: 46,
                    marginBottom: 40
                },
                text: {
                    marginLeft: "36%",
                    color: function(t) {
                        return t.inverse ? e.colors[0] : e.colors[1]
                    },
                    opacity: .45,
                    fontFamily: e.fonts[0],
                    fontSize: 19,
                    maxWidth: "40vw"
                }
            };
            return t[e.mediaInverse.lg] = {
                hero: {
                    paddingTop: 97
                },
                title: {
                    fontSize: 90
                },
                image: {
                    marginBottom: 70
                },
                caption: {
                    marginTop: -30,
                    marginBottom: 70
                },
                subtitle: {
                    fontSize: 32,
                    marginBottom: 50
                }
            },
            t[e.mediaInverse.lg] = {
                hero: {
                    paddingTop: 100
                },
                title: {
                    fontSize: 70
                },
                image: {
                    marginLeft: 0,
                    marginBottom: 70
                },
                caption: {
                    marginTop: -50,
                    marginLeft: 0
                },
                subtitle: {
                    marginLeft: 0,
                    fontSize: 32,
                    marginBottom: 50
                },
                text: {
                    marginLeft: 0,
                    maxWidth: "none"
                }
            },
            t[e.mediaInverse.sm] = {
                hero: {
                    paddingTop: 47
                },
                title: {
                    fontSize: 37
                },
                image: {
                    marginBottom: 50
                },
                caption: {
                    marginTop: -30
                },
                subtitle: {
                    fontSize: 28
                },
                text: {
                    fontSize: 18
                },
                date: {
                    fontSize: 14
                }
            },
            t
        }
          , g = n(1)
          , h = Object(s.b)(m);
        t.a = function(e) {
            var t = e.pageAnimationReady
              , n = e.className
              , r = e.title
              , c = e.date
              , s = e.payoff
              , m = e.image
              , j = e.subtitle
              , v = e.text
              , O = e.categories
              , y = e.inverse
              , w = Object(o.useContext)(l.a).headerHeight
              , x = h({
                headerHeight: w,
                inverse: y
            });
            return Object(g.jsxs)("div", {
                className: a()(i()(i()({}, x.hero, !0), n, !0)),
                children: [r && Object(g.jsx)(d.a, {
                    className: "".concat(x.title, " hero__title"),
                    value: r,
                    tag: "h1",
                    type: "lines",
                    lineHeight: 1.1,
                    stagger: .03,
                    duration: 1.3,
                    visible: t
                }), (null == O ? void 0 : O.length) > 0 && Object(g.jsx)(b.a, {
                    className: "".concat(x.date, " hero__categories"),
                    delay: .5,
                    visible: t,
                    children: O.map((function(e) {
                        return Object(g.jsx)(u.a, {
                            to: "/news/".concat(e.slug),
                            children: e.name
                        }, e.slug)
                    }
                    ))
                }), c && Object(g.jsx)(d.a, {
                    className: "".concat(x.date, " hero__date"),
                    value: c,
                    tag: "h1",
                    type: "lines",
                    lineHeight: 1.1,
                    stagger: .03,
                    duration: 1.3,
                    delayEnter: .5,
                    visible: t
                }), s && Object(g.jsx)(p.a, {
                    children: Object(g.jsx)(d.a, {
                        className: "".concat(x.payoff, " hero__payoff"),
                        value: s,
                        tag: "div",
                        type: "lines",
                        lineHeight: 1.4,
                        duration: 1.3
                    })
                }), (null == m ? void 0 : m.src) && Object(g.jsx)("div", {
                    className: "".concat(x.image, " hero__image"),
                    children: Object(g.jsx)(f.a, {
                        image: null == m ? void 0 : m.src,
                        delayEnter: .5,
                        visible: t
                    })
                }), "" !== (null == m ? void 0 : m.caption) && Object(g.jsx)(b.a, {
                    className: "".concat(x.caption, " hero_caption"),
                    delay: .5,
                    visible: t,
                    children: null == m ? void 0 : m.caption
                }), j && Object(g.jsx)(p.a, {
                    children: Object(g.jsx)(d.a, {
                        className: "".concat(x.subtitle, " hero__subtitle"),
                        value: j,
                        tag: "div",
                        type: "lines",
                        lineHeight: 1.25,
                        duration: 1.3
                    })
                }), v && Object(g.jsx)(p.a, {
                    children: Object(g.jsx)(b.a, {
                        children: Object(g.jsx)("div", {
                            className: "".concat(x.text, " hero__text"),
                            duration: 1.3,
                            dangerouslySetInnerHTML: {
                                __html: v
                            }
                        })
                    })
                })]
            })
        }
    }
}]);
//# sourceMappingURL=contact~faqs~scholar.ea96.js.map

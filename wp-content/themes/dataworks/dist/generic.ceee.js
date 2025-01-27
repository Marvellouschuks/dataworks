(window.webpackJsonp = window.webpackJsonp || []).push([[10, 4], {
    665: function(e, t, n) {
        var r = n(673);
        e.exports = function(e, t) {
            if (null == e)
                return {};
            var n, o, i = r(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (o = 0; o < a.length; o++)
                    n = a[o],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    667: function(e, t, n) {
        "use strict";
        var r = n(3)
          , o = n.n(r)
          , i = n(665)
          , a = n.n(i)
          , c = n(0)
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
          , p = n(1)
          , g = ["className", "children", "duration", "ease", "delay", "visible", "inview", "tag"];
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
        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? b(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var h = Object(l.b)(f)
          , v = function(e) {
            var t = e.className
              , n = e.children
              , r = e.duration
              , i = e.ease
              , l = e.delay
              , u = e.visible
              , f = e.inview
              , b = e.tag
              , v = a()(e, g)
              , y = h()
              , j = Object(c.useRef)()
              , O = b;
            return Object(c.useEffect)((function() {
                s.a.to(j.current, {
                    opacity: u || f ? 1 : 0,
                    duration: r,
                    ease: i,
                    delay: l
                })
            }
            ), [u, f]),
            Object(p.jsx)(O, m(m({
                className: d()(o()(o()({}, t, t), y.root, !0)),
                ref: j
            }, v), {}, {
                children: n
            }))
        };
        v.defaultProps = {
            className: "",
            tag: "div",
            duration: 1,
            delay: 0,
            ease: "power3.inOut",
            visible: !1,
            inview: !1
        };
        t.a = v
    },
    669: function(e, t, n) {
        "use strict";
        var r = n(3)
          , o = n.n(r)
          , i = n(6)
          , a = n.n(i)
          , c = n(0)
          , s = n(12)
          , l = n(15)
          , u = n.n(l)
          , d = n(10)
          , f = n(204)
          , p = n(76)
          , g = n(77)
          , b = n(683)
          , m = function(e) {
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
        d.a.registerPlugin(b.a);
        var v = Object(s.b)(m)
          , y = function(e) {
            var t = e.className
              , n = e.delayEnter
              , r = e.delayLeave
              , i = e.duration
              , s = e.ease
              , l = e.inview
              , m = e.lineHeight
              , y = e.link
              , j = e.onComplete
              , O = e.stagger
              , x = e.tag
              , w = e.type
              , P = e.value
              , S = e.visible
              , k = v({
                linesMargin: -1.25 + m
            })
              , C = Object(c.useRef)()
              , N = Object(c.useRef)(0)
              , _ = Object(c.useRef)()
              , R = x
              , E = Object(c.useState)(!1)
              , I = a()(E, 2)
              , T = I[0]
              , z = I[1];
            return Object(c.useEffect)((function() {
                "" !== P && (N.current = window.innerWidth,
                z(new b.a(_.current,{
                    type: w
                })))
            }
            ), []),
            Object(c.useEffect)((function() {
                !0 === T.isSplit && (d.a.set(C.current, {
                    opacity: 1
                }),
                d.a.set(T[w], {
                    y: "120%",
                    transformOrigin: "center top"
                }),
                "lines" === w && T.lines.forEach((function(e) {
                    var t, n;
                    t = e,
                    n = document.createElement("div"),
                    t.parentNode.insertBefore(n, t),
                    n.classList.add("line"),
                    n.appendChild(t)
                }
                )))
            }
            ), [T, w]),
            Object(g.c)((function() {
                N.current !== window.innerWidth && T.isSplit && (T.revert(),
                z(!1),
                setTimeout((function() {
                    z(new b.a(_.current,{
                        type: w
                    })),
                    N.current = window.innerWidth
                }
                ), 200))
            }
            ), [T]),
            Object(c.useEffect)((function() {
                !0 === T.isSplit && d.a.to(T[w], {
                    y: S || l ? "0%" : "120%",
                    duration: i,
                    stagger: O,
                    ease: s,
                    delay: S || l ? n : r,
                    onComplete: j
                })
            }
            ), [T, w, S, l, n, r, j]),
            Object(h.jsx)(R, {
                ref: C,
                className: u()(o()(o()(o()(o()({}, t, t), k.hidden, !T), k.root, !0), k.visible, S)),
                children: Object(h.jsx)(f.a, {
                    condition: y,
                    wrapper: function(e) {
                        return Object(h.jsx)(p.a, {
                            className: k.link,
                            to: y,
                            children: e
                        })
                    },
                    children: Object(h.jsx)("div", {
                        className: k.wrap,
                        dangerouslySetInnerHTML: {
                            __html: P
                        },
                        ref: _
                    })
                })
            })
        };
        y.defaultProps = {
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
        t.a = y
    },
    670: function(e, t, n) {
        "use strict";
        var r = n(3)
          , o = n.n(r)
          , i = n(6)
          , a = n.n(i)
          , c = n(665)
          , s = n.n(c)
          , l = n(0)
          , u = n(10)
          , d = n(96)
          , f = n(94)
          , p = n(1)
          , g = ["children", "offset", "once", "className"];
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
        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? b(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
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
              , o = e.className
              , i = s()(e, g)
              , c = Object(l.useRef)()
              , u = Object(l.useRef)()
              , b = Object(l.useState)(!1)
              , h = a()(b, 2)
              , v = h[0]
              , y = h[1]
              , j = Object(l.useContext)(f.a).scrollElement;
            return Object(l.useEffect)((function() {
                return j && (u.current = d.b.create({
                    trigger: c.current,
                    scroller: j,
                    start: "top ".concat(n),
                    once: r,
                    onEnter: function() {
                        return r && y(!0)
                    },
                    onToggle: function(e) {
                        return !r && y(e.isActive)
                    }
                })),
                function() {
                    j && u.current.kill()
                }
            }
            ), [j]),
            Object(p.jsx)("div", m(m({
                ref: c,
                className: o
            }, i), {}, {
                children: l.Children.map(t, (function(e) {
                    return Object(l.cloneElement)(e, {
                        inview: "string" == typeof e.type ? void 0 : v
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
          , o = n.n(r)
          , i = n(665)
          , a = n.n(i)
          , c = n(0)
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
        function p(e, t) {
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
                t % 2 ? p(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var b = Object(s.b)(u)
          , m = function(e) {
            var t = e.className
              , n = e.image
              , r = e.width
              , o = e.height
              , i = e.label
              , s = e.visible
              , u = e.inview
              , p = e.delayEnter
              , m = e.delayLeave
              , h = a()(e, f)
              , v = b()
              , y = Object(c.useRef)()
              , j = Object(c.useRef)();
            return Object(c.useEffect)((function() {
                l.a.to(y.current, {
                    opacity: s || u ? 1 : 0,
                    duration: 1,
                    ease: "power3.inOut",
                    delay: s || u ? p : m
                })
            }
            ), [s, u]),
            Object(d.jsx)("picture", g(g({
                ref: y,
                className: "".concat(v.root, " ").concat(t)
            }, h), {}, {
                children: Object(d.jsx)("span", {
                    className: v.image,
                    children: Object(d.jsx)("img", {
                        ref: j,
                        src: n,
                        alt: i,
                        width: r,
                        height: o
                    })
                })
            }))
        };
        m.defaultProps = {
            className: "",
            image: "",
            label: "",
            visible: !1,
            inview: !1,
            delay: 0
        };
        t.a = m
    },
    672: function(e, t, n) {
        "use strict";
        var r = n(3)
          , o = n.n(r)
          , i = n(0)
          , a = n(15)
          , c = n.n(a)
          , s = n(325)
          , l = n(74)
          , u = n(682)
          , d = n(94)
          , f = n(1)
          , p = Object(i.forwardRef)((function(e, t) {
            var n = e.children
              , r = e.className
              , a = e.direction
              , p = e.init
              , g = e.lerp
              , b = e.smooth
              , m = Object(i.useRef)(null)
              , h = Object(l.c)()
              , v = Object(i.useRef)()
              , y = Object(i.useRef)()
              , j = Object(i.useContext)(d.a).setScrollbar;
            return Object(i.useEffect)((function() {
                return m.current && (y.current = new s.default((function() {
                    var e;
                    m.current && (null === (e = v.current) || void 0 === e || e.update())
                }
                )),
                y.current.observe(m.current)),
                function() {
                    m.current && y.current.disconnect(m.current)
                }
            }
            ), [m]),
            Object(i.useEffect)((function() {
                return m.current && p && !h.detect.isIE11 && (v.current = new u.a({
                    el: m.current,
                    direction: a,
                    smooth: b,
                    lerp: g,
                    getDirection: !0,
                    getSpeed: !0,
                    repeat: !1,
                    touchMultiplier: 2
                }),
                j(v.current)),
                function() {
                    p && v.current && v.current.destroy()
                }
            }
            ), [m, p]),
            Object(i.useImperativeHandle)(t, (function() {
                return {
                    ref: m.current
                }
            }
            )),
            Object(f.jsx)("div", {
                className: c()(o()(o()({}, r, r), "smooth-scroll", !0)),
                ref: m,
                "data-scroll-container": !0,
                children: n
            })
        }
        ));
        p.defaultProps = {
            smooth: !0,
            lerp: .1
        },
        t.a = p
    },
    673: function(e, t) {
        e.exports = function(e, t) {
            if (null == e)
                return {};
            var n = {};
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    if (t.indexOf(r) >= 0)
                        continue;
                    n[r] = e[r]
                }
            return n
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    674: function(e, t, n) {
        "use strict";
        var r = n(684)
          , o = n(11)
          , i = n(131)
          , a = n(1)
          , c = function(e) {
            var t = e.title
              , n = Object(o.f)((function(e) {
                return e.options.strings
            }
            ));
            return Object(a.jsx)(r.a, {
                title: "".concat(Object(i.decodeEntities)(t), " - ").concat(n?.site_title)
            })
        };
        c.defaultProps = {
            title: ""
        },
        t.a = c
    },
    675: function(e, t, n) {
        "use strict";
        var r = n(3)
          , o = n.n(r)
          , i = n(0)
          , a = n(12)
          , c = n(15)
          , s = n.n(c)
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
          , f = Object(a.b)(u)
          , p = function(e) {
            var t = e.className
              , n = e.visible
              , r = e.color
              , a = e.event
              , c = f({
                color: r
            })
              , u = Object(i.useRef)();
            return Object(i.useEffect)((function() {
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
                className: s()(o()(o()(o()({}, c.root, !0), t, t), c.visible, n)),
                ref: u,
                onClick: a,
                children: Object(d.jsxs)("svg", {
                    viewBox: "0 0 36 80",
                    children: [Object(d.jsx)("path", {
                        d: "M0,18v18c0,9.9,8.1,18,18,18s18-8.1,18-18V18c0-9.9-8.1-18-18-18S0,8.1,0,18z M18,4c7.7,0,14,6.3,14,14v18 c0,7.7-6.3,14-14,14S4,43.7,4,36V18C4,10.3,10.3,4,18,4z"
                    }), Object(d.jsx)("path", {
                        className: c.mouse,
                        d: "M18,21c1.1,0,2-0.9,2-2v-6c0-1.1-0.9-2-2-2s-2,0.9-2,2v6C16,20.1,16.9,21,18,21z"
                    }), Object(d.jsx)("path", {
                        className: c.arrow,
                        d: "M16.6,69.4C17,69.8,17.5,70,18,70s1-0.2,1.4-0.6l5-5c0.8-0.8,0.8-2,0-2.8s-2-0.8-2.8,0L18,65.2l-3.6-3.6 c-0.8-0.8-2-0.8-2.8,0s-0.8,2,0,2.8L16.6,69.4z"
                    })]
                })
            })
        };
        p.defaultProps = {
            className: "",
            visible: !0,
            event: function() {}
        };
        t.a = p
    },
    676: function(e, t, n) {
        "use strict";
        var r = n(3)
          , o = n.n(r)
          , i = n(15)
          , a = n.n(i)
          , c = n(11)
          , s = n(12)
          , l = n(76)
          , u = function(e) {
            var t = {
                root: {
                    lineHeight: 1.5,
                    color: function(t) {
                        return t.inverse ? e.getRgba(e.colors[0], .5) : e.getRgba(e.colors[1], .5)
                    },
                    textTransform: "uppercase",
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    paddingBottom: 48,
                    paddingTop: 50
                },
                wrapper: {
                    display: "flex",
                    flexWrap: "wrap"
                },
                text: {
                    textAlign: "left",
                    flex: "1 0 auto",
                    paddingTop: 7,
                    paddingBottom: 7,
                    paddingRight: 40
                },
                nav: {
                    flex: "0 0 auto",
                    textAlign: "right",
                    display: "flex",
                    marginRight: -20,
                    "& a": {
                        display: "inline-block",
                        marginRight: 20,
                        extend: e.link,
                        lineHeight: 1.5,
                        color: function(t) {
                            return t.inverse ? e.colors[0] : e.colors[1]
                        }
                    }
                }
            };
            return t[e.mediaInverse.md] = {
                root: {
                    paddingBottom: 24
                },
                wrapper: {
                    display: "block"
                }
            },
            t
        }
          , d = n(1)
          , f = Object(s.b)(u)
          , p = function(e) {
            var t = e.inverse
              , n = f({
                inverse: t
            })
              , r = Object(c.f)((function(e) {
                return {
                    footerNav: e.nav.footer_menu || [],
                    strings: e.options.strings
                }
            }
            ), c.d)
              , i = r.footerNav
              , s = r.strings;
            return Object(d.jsx)("footer", {
                className: a()(o()(o()({}, n.root, !0), "footer__root", !0)),
                children: Object(d.jsxs)("div", {
                    className: a()(o()(o()({}, n.wrapper, !0), "footer__wrapper", !0)),
                    children: [Object(d.jsx)("div", {
                        className: a()(o()(o()({}, n.text, !0), "footer__text", !0)),
                        children: s?.footer_string_1
                    }), Object(d.jsx)("div", {
                        className: a()(o()(o()({}, n.nav, !0), "footer__nav", !0)),
                        children: i.length && i.map((function(e, t) {
                            return Object(d.jsx)(l.a, {
                                to: e.url,
                                children: e.title
                            }, t.toString())
                        }
                        ))
                    })]
                })
            })
        };
        p.defaultProps = {
            storeLocator: !1
        };
        t.a = p
    },
    677: function(e, t, n) {
        "use strict";
        var r = n(3)
          , o = n.n(r)
          , i = n(6)
          , a = n.n(i)
          , c = n(0)
          , s = n(15)
          , l = n.n(s)
          , u = n(53)
          , d = n(77)
          , f = n(94)
          , p = n(12)
          , g = n(675)
          , b = n(10)
          , m = function(e) {
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
          , v = Object(p.b)(m);
        t.a = function(e) {
            var t = e.color
              , n = e.inverse
              , r = Object(c.useContext)(u.a).headerHeight
              , i = v({
                headerHeight: r,
                color: t,
                inverse: n
            })
              , s = Object(c.useRef)()
              , p = Object(c.useRef)()
              , m = Object(c.useContext)(f.a)
              , y = m.scroll
              , j = m.limit
              , O = m.direction
              , x = Object(c.useRef)(0)
              , w = Object(c.useState)(!1)
              , P = a()(w, 2)
              , S = P[0]
              , k = P[1]
              , C = Object(c.useState)(!1)
              , N = a()(C, 2)
              , _ = N[0]
              , R = N[1]
              , E = Object(c.useCallback)((function() {
                s.current && p.current && (x.current = s.current.getBoundingClientRect().height - p.current.getBoundingClientRect().height)
            }
            ), []);
            return Object(c.useEffect)((function() {
                E()
            }
            ), []),
            Object(d.c)((function() {
                E()
            }
            )),
            Object(d.b)((function() {
                if (0 === j.current.y)
                    k(!1),
                    R(!1),
                    p.current && b.a.to(p.current, {
                        opacity: 0,
                        y: 0
                    });
                else {
                    var e = y.current.y / j.current.y;
                    k(0 === e),
                    R("down" === O && e > 0),
                    p.current && b.a.to(p.current, {
                        opacity: 1,
                        y: e * x.current
                    })
                }
            }
            ), [O, j, y]),
            Object(h.jsxs)("div", {
                className: i.root,
                children: [Object(h.jsx)("div", {
                    className: l()(o()(o()({}, i.topLeftCorner, !0), i.noBorderRadius, _)),
                    children: Object(h.jsx)("div", {
                        className: i.scroll,
                        ref: s,
                        children: Object(h.jsx)("div", {
                            className: i.thumb,
                            ref: p
                        })
                    })
                }), Object(h.jsx)(g.a, {
                    visible: S,
                    color: t,
                    className: i.scrollIcon
                })]
            })
        }
    },
    678: function(e, t, n) {
        "use strict";
        var r = n(3)
          , o = n.n(r)
          , i = n(0)
          , a = n(15)
          , c = n.n(a)
          , s = n(12)
          , l = n(53)
          , u = n(76)
          , d = n(669)
          , f = n(671)
          , p = n(667)
          , g = n(670)
          , b = function(e) {
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
          , m = n(1)
          , h = Object(s.b)(b);
        t.a = function(e) {
            var t = e.pageAnimationReady
              , n = e.className
              , r = e.title
              , a = e.date
              , s = e.payoff
              , b = e.image
              , v = e.subtitle
              , y = e.text
              , j = e.categories
              , O = e.inverse
              , x = Object(i.useContext)(l.a).headerHeight
              , w = h({
                headerHeight: x,
                inverse: O
            });
            return Object(m.jsxs)("div", {
                className: c()(o()(o()({}, w.hero, !0), n, !0)),
                children: [r && Object(m.jsx)(d.a, {
                    className: "".concat(w.title, " hero__title"),
                    value: r,
                    tag: "h1",
                    type: "lines",
                    lineHeight: 1.1,
                    stagger: .03,
                    duration: 1.3,
                    visible: t
                }), (null == j ? void 0 : j.length) > 0 && Object(m.jsx)(p.a, {
                    className: "".concat(w.date, " hero__categories"),
                    delay: .5,
                    visible: t,
                    children: j.map((function(e) {
                        return Object(m.jsx)(u.a, {
                            to: "/news/".concat(e.slug),
                            children: e.name
                        }, e.slug)
                    }
                    ))
                }), a && Object(m.jsx)(d.a, {
                    className: "".concat(w.date, " hero__date"),
                    value: a,
                    tag: "h1",
                    type: "lines",
                    lineHeight: 1.1,
                    stagger: .03,
                    duration: 1.3,
                    delayEnter: .5,
                    visible: t
                }), s && Object(m.jsx)(g.a, {
                    children: Object(m.jsx)(d.a, {
                        className: "".concat(w.payoff, " hero__payoff"),
                        value: s,
                        tag: "div",
                        type: "lines",
                        lineHeight: 1.4,
                        duration: 1.3
                    })
                }), (null == b ? void 0 : b.src) && Object(m.jsx)("div", {
                    className: "".concat(w.image, " hero__image"),
                    children: Object(m.jsx)(f.a, {
                        image: null == b ? void 0 : b.src,
                        delayEnter: .5,
                        visible: t
                    })
                }), "" !== (null == b ? void 0 : b.caption) && Object(m.jsx)(p.a, {
                    className: "".concat(w.caption, " hero_caption"),
                    delay: .5,
                    visible: t,
                    children: null == b ? void 0 : b.caption
                }), v && Object(m.jsx)(g.a, {
                    children: Object(m.jsx)(d.a, {
                        className: "".concat(w.subtitle, " hero__subtitle"),
                        value: v,
                        tag: "div",
                        type: "lines",
                        lineHeight: 1.25,
                        duration: 1.3
                    })
                }), y && Object(m.jsx)(g.a, {
                    children: Object(m.jsx)(p.a, {
                        children: Object(m.jsx)("div", {
                            className: "".concat(w.text, " hero__text"),
                            duration: 1.3,
                            dangerouslySetInnerHTML: {
                                __html: y
                            }
                        })
                    })
                })]
            })
        }
    },
    679: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return l
        }
        ));
        var r = n(10)
          , o = n(668)
          , i = n(0)
          , a = n(666)
          , c = n(203)
          , s = n(1)
          , l = function() {
            var e = Object(c.a)()
              , t = e.stage
              , n = e.model
              , l = e.stage0
              , u = e.stage1
              , d = e.stage2
              , f = e.stage3
              , p = e.model0
              , g = e.model1
              , b = e.model2
              , m = Object(a.e)()
              , h = Object(i.useRef)()
              , v = Object(i.useRef)({
                color1: l.bgColor1,
                color2: l.bgColor2
            })
              , y = function(e, t) {
                r.a.killTweensOf(v.current),
                r.a.to(v.current, {
                    color1: e,
                    color2: t,
                    duration: 2
                })
            };
            Object(i.useEffect)((function() {
                switch (t) {
                case 0:
                    y(l.bgColor1, l.bgColor2);
                    break;
                case 1:
                    y(u.bgColor1, u.bgColor2);
                    break;
                case 2:
                    y(d.bgColor1, d.bgColor2);
                    break;
                case 3:
                    y(f.bgColor1, f.bgColor2)
                }
            }
            ), [t]),
            Object(i.useEffect)((function() {
                switch (n) {
                case 0:
                    y(p.bgColor1, p.bgColor2);
                    break;
                case 1:
                    y(g.bgColor1, g.bgColor2);
                    break;
                case 2:
                    y(b.bgColor1, b.bgColor2)
                }
            }
            ), [n]);
            var j = Object(i.useMemo)((function() {
                return {
                    uniforms: {
                        uTime: {
                            value: 0
                        },
                        uColor1: {
                            value: new o.Color(v.color1).convertSRGBToLinear()
                        },
                        uColor2: {
                            value: new o.Color(v.color2).convertSRGBToLinear()
                        }
                    },
                    vertexShader: "\n      varying vec2 vUv;\n      void main() {\n        vUv = uv;\n        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n        gl_Position = projectionMatrix * mvPosition;\n      }\n      ",
                    fragmentShader: "\n      varying vec2 vUv;\n      uniform float uTime;\n      uniform vec3 uColor1;\n      uniform vec3 uColor2;\n      \n      float sphere(vec2 p, vec2 offset) {\n        return 1. - length(p + offset);\n      }\n\n      void main() {\n        float t = uTime * .4;\n        vec2 uv = vUv;\n        uv -= .5;\n        float c = 0.;\n        for (float i = 0.; i < 3.; i++) {\n          c += sphere(uv * 1.5, vec2(\n            sin(t + i * 4. * i + sin(i + t * .5)) * (.5 + i * .21),\n            cos(t + i * 5. * i + sin(i + t * .3)) * (.5 + i * .21)\n          )) * .75;\n        }\n        gl_FragColor = vec4(mix(uColor2, uColor1, clamp(c, 0., 1.)), 1.);\n      }\n      "
                }
            }
            ), []);
            return Object(a.c)((function(e) {
                var t = e.clock;
                h.current.material.uniforms.uTime.value = t.getElapsedTime(),
                h.current.material.uniforms.uColor1.value = new o.Color(v.current.color1),
                h.current.material.uniforms.uColor2.value = new o.Color(v.current.color2)
            }
            )),
            Object(i.useEffect)((function() {
                var e = m.aspect < 1 ? 2 : 1;
                h.current.scale.set(m.viewport.width * m.viewport.distance * 2 * e, m.viewport.height * m.viewport.distance * 2, 1)
            }
            ), [m, t]),
            Object(s.jsxs)("mesh", {
                ref: h,
                position: [0, 0, -40],
                children: [Object(s.jsx)("planeBufferGeometry", {
                    attach: "geometry",
                    args: [1, 1]
                }), Object(s.jsx)("shaderMaterial", {
                    attach: "material",
                    transparent: !0,
                    args: [j]
                })]
            })
        }
    },
    680: function(e, t, n) {
        "use strict";
        var r = n(3)
          , o = n.n(r)
          , i = n(15)
          , a = n.n(i)
          , c = n(12)
          , s = n(76)
          , l = function(e) {
            var t = {
                root: {
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 1,
                    padding: [35, 40, 105],
                    borderRadius: 10,
                    "&:hover": {
                        "& $image": {
                            transform: "scale(1.2)"
                        },
                        "& $link": {
                            transform: "scale(1.2)"
                        }
                    }
                },
                image: {
                    position: "absolute",
                    zIndex: 1,
                    top: 0,
                    left: 0,
                    opacity: .3,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    transition: "transform 1s ".concat(e.easings["power3.out"])
                },
                link: {
                    position: "absolute",
                    zIndex: 2,
                    bottom: 40,
                    left: 35,
                    borderRadius: 20,
                    width: 40,
                    height: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: e.colors[1],
                    transition: "transform 1s ".concat(e.easings["power3.out"]),
                    "& svg": {
                        fill: e.colors[0],
                        width: 7
                    }
                },
                title: {
                    position: "relative",
                    zIndex: 2,
                    color: e.colors[1],
                    fontFamily: e.fonts[1],
                    fontSize: 28,
                    marginBottom: 10,
                    background: "linear-gradient(to-bottom, red, black)"
                },
                text: {
                    position: "relative",
                    zIndex: 2,
                    fontFamily: e.fonts[0],
                    color: e.colors[1],
                    opacity: .45,
                    maxWidth: 330,
                    fontSize: 19
                }
            };
            return t[e.mediaInverse.sm] = {
                root: {
                    padding: [25, 20, 80],
                    borderRadius: 10
                },
                link: {
                    bottom: 25,
                    left: 20
                },
                title: {
                    fontSize: 22
                },
                text: {
                    fontSize: 18
                }
            },
            t
        }
          , u = n(1)
          , d = Object(c.b)(l);
        t.a = function(e) {
            var t = e.className
              , n = e.title
              , r = e.text
              , i = e.image
              , c = e.link
              , f = e.color
              , p = d(l);
            return Object(u.jsxs)(s.a, {
                to: c,
                className: a()(o()(o()({}, p.root, !0), t, t)),
                style: {
                    backgroundColor: i ? "#382e63" : f
                },
                children: [i && Object(u.jsx)("div", {
                    className: p.image,
                    style: {
                        backgroundImage: "url(".concat(i, ")")
                    }
                }), Object(u.jsx)("div", {
                    className: p.title,
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                }), Object(u.jsx)("div", {
                    className: p.text,
                    children: r
                }), Object(u.jsx)("button", {
                    className: p.link,
                    children: Object(u.jsx)("svg", {
                        children: Object(u.jsx)("use", {
                            xlinkHref: "#ico-arrow"
                        })
                    })
                })]
            })
        }
    },
    689: function(e, t, n) {
        "use strict";
        var r = n(3)
          , o = n.n(r)
          , i = n(15)
          , a = n.n(i)
          , c = n(12)
          , s = n(669)
          , l = n(671)
          , u = n(667)
          , d = n(670)
          , f = n(76)
          , p = function(e) {
            var t = {
                root: {
                    display: "flex",
                    position: "relative",
                    zIndex: 1,
                    margin: [100, "auto"]
                },
                box: {
                    flex: "0 0 50%",
                    paddingLeft: 60,
                    paddingTop: 80
                },
                title: {
                    color: e.colors[1],
                    fontFamily: e.fonts[1],
                    fontSize: 55,
                    marginBottom: 17
                },
                text: {
                    color: e.colors[1],
                    fontFamily: e.fonts[0],
                    opacity: .45,
                    fontSize: 19,
                    marginBottom: 62,
                    maxWidth: 380
                },
                link: {
                    background: e.colors[1],
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 45,
                    height: 45,
                    borderRadius: "50%",
                    cursor: "pointer",
                    "& svg": {
                        fill: e.colors[0],
                        width: 6,
                        height: 9
                    }
                },
                img: {
                    flex: "0 0 50%",
                    overflow: "hidden",
                    "& picture": {
                        borderRadius: 20
                    },
                    "& img": {
                        maxWidth: "none",
                        width: "100%"
                    }
                }
            };
            return t[e.mediaInverse.lg] = {
                title: {
                    fontSize: 44
                }
            },
            t[e.mediaInverse.md] = {
                box: {
                    bottom: -70,
                    right: "5.5vw",
                    padding: [38, 40],
                    width: 470
                },
                title: {
                    fontSize: 32,
                    marginBottom: 17
                },
                text: {
                    fontSize: 18,
                    marginBottom: 30
                }
            },
            t[e.mediaInverse.sm] = {
                root: {
                    display: "block"
                },
                box: {
                    paddingLeft: 0,
                    width: "100%"
                },
                title: {
                    fontSize: 32
                }
            },
            t
        }
          , g = n(1)
          , b = Object(c.b)(p);
        t.a = function(e) {
            var t = e.className
              , n = e.title
              , r = e.text
              , i = e.image
              , c = e.link
              , m = e.visible
              , h = b(p);
            return Object(g.jsxs)("div", {
                className: a()(o()(o()({}, h.root, !0), t, t)),
                children: [i && Object(g.jsx)(d.a, {
                    className: h.img,
                    children: Object(g.jsx)(l.a, {
                        image: i.sizes.large,
                        width: i.width,
                        height: i.height,
                        delayEnter: 0,
                        visible: m
                    })
                }), Object(g.jsxs)(d.a, {
                    className: h.box,
                    children: [Object(g.jsx)(s.a, {
                        className: h.title,
                        value: n,
                        tag: "h3",
                        type: "lines",
                        stagger: .03,
                        duration: 1.1,
                        visible: m
                    }), Object(g.jsx)(s.a, {
                        className: h.text,
                        value: r,
                        tag: "div",
                        type: "lines",
                        stagger: .03,
                        duration: 1.3,
                        delayEnter: .2,
                        visible: m
                    }), Object(g.jsx)(u.a, {
                        delay: .8,
                        visible: m,
                        children: Object(g.jsx)(f.a, {
                            to: c,
                            className: h.link,
                            children: Object(g.jsx)("svg", {
                                children: Object(g.jsx)("use", {
                                    xlinkHref: "#ico-arrow"
                                })
                            })
                        })
                    })]
                })]
            })
        }
    },
    713: function(e, t, n) {
        e.exports = n(714)()
    },
    714: function(e, t, n) {
        "use strict";
        var r = n(715);
        function o() {}
        function i() {}
        i.resetWarningCache = o,
        e.exports = function() {
            function e(e, t, n, o, i, a) {
                if (a !== r) {
                    var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw c.name = "Invariant Violation",
                    c
                }
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: i,
                resetWarningCache: o
            };
            return n.PropTypes = n,
            n
        }
    },
    715: function(e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    716: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , o = c(n(717))
          , i = c(n(718))
          , a = c(n(720));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = void 0;
        t.default = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , c = (0,
            o.default)();
            if (s || (s = (0,
            i.default)(c)),
            t.events)
                throw new Error("Event handlers cannot be overwritten.");
            if ("string" == typeof e && !document.getElementById(e))
                throw new Error('Element "' + e + '" does not exist.');
            t.events = a.default.proxyEvents(c);
            var l = new Promise((function(n) {
                "object" === (void 0 === e ? "undefined" : r(e)) && e.playVideo instanceof Function ? n(e) : s.then((function(r) {
                    var o = new r.Player(e,t);
                    return c.on("ready", (function() {
                        n(o)
                    }
                    )),
                    null
                }
                ))
            }
            ))
              , u = a.default.promisifyPlayer(l, n);
            return u.on = c.on,
            u.off = c.off,
            u
        }
        ,
        e.exports = t.default
    },
    717: function(e, t, n) {
        "use strict";
        var r;
        r = function() {
            var e = {}
              , t = {};
            return e.on = function(e, n) {
                var r = {
                    name: e,
                    handler: n
                };
                return t[e] = t[e] || [],
                t[e].unshift(r),
                r
            }
            ,
            e.off = function(e) {
                var n = t[e.name].indexOf(e);
                -1 !== n && t[e.name].splice(n, 1)
            }
            ,
            e.trigger = function(e, n) {
                var r, o = t[e];
                if (o)
                    for (r = o.length; r--; )
                        o[r].handler(n)
            }
            ,
            e
        }
        ,
        e.exports = r
    },
    718: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o = n(719), i = (r = o) && r.__esModule ? r : {
            default: r
        };
        t.default = function(e) {
            return new Promise((function(t) {
                if (window.YT && window.YT.Player && window.YT.Player instanceof Function)
                    t(window.YT);
                else {
                    var n = "http:" === window.location.protocol ? "http:" : "https:";
                    (0,
                    i.default)(n + "//www.youtube.com/iframe_api", (function(t) {
                        t && e.trigger("error", t)
                    }
                    ));
                    var r = window.onYouTubeIframeAPIReady;
                    window.onYouTubeIframeAPIReady = function() {
                        r && r(),
                        t(window.YT)
                    }
                }
            }
            ))
        }
        ,
        e.exports = t.default
    },
    719: function(e, t) {
        function n(e, t) {
            e.onload = function() {
                this.onerror = this.onload = null,
                t(null, e)
            }
            ,
            e.onerror = function() {
                this.onerror = this.onload = null,
                t(new Error("Failed to load " + this.src), e)
            }
        }
        function r(e, t) {
            e.onreadystatechange = function() {
                "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null,
                t(null, e))
            }
        }
        e.exports = function(e, t, o) {
            var i = document.head || document.getElementsByTagName("head")[0]
              , a = document.createElement("script");
            "function" == typeof t && (o = t,
            t = {}),
            t = t || {},
            o = o || function() {}
            ,
            a.type = t.type || "text/javascript",
            a.charset = t.charset || "utf8",
            a.async = !("async"in t) || !!t.async,
            a.src = e,
            t.attrs && function(e, t) {
                for (var n in t)
                    e.setAttribute(n, t[n])
            }(a, t.attrs),
            t.text && (a.text = "" + t.text),
            ("onload"in a ? n : r)(a, o),
            a.onload || n(a, o),
            i.appendChild(a)
        }
    },
    720: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = c(n(721))
          , o = c(n(724))
          , i = c(n(725))
          , a = c(n(726));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = (0,
        r.default)("youtube-player")
          , l = {
            proxyEvents: function(e) {
                var t = {}
                  , n = function(n) {
                    var r = "on" + n.slice(0, 1).toUpperCase() + n.slice(1);
                    t[r] = function(t) {
                        s('event "%s"', r, t),
                        e.trigger(n, t)
                    }
                }
                  , r = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var c, l = i.default[Symbol.iterator](); !(r = (c = l.next()).done); r = !0) {
                        n(c.value)
                    }
                } catch (e) {
                    o = !0,
                    a = e
                } finally {
                    try {
                        !r && l.return && l.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
                return t
            },
            promisifyPlayer: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = {}
                  , r = function(r) {
                    t && a.default[r] ? n[r] = function() {
                        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
                            n[o] = arguments[o];
                        return e.then((function(e) {
                            var t = a.default[r]
                              , o = e.getPlayerState()
                              , i = e[r].apply(e, n);
                            return t.stateChangeRequired || Array.isArray(t.acceptableStates) && -1 === t.acceptableStates.indexOf(o) ? new Promise((function(n) {
                                e.addEventListener("onStateChange", (function r() {
                                    var o = e.getPlayerState()
                                      , i = void 0;
                                    "number" == typeof t.timeout && (i = setTimeout((function() {
                                        e.removeEventListener("onStateChange", r),
                                        n()
                                    }
                                    ), t.timeout)),
                                    Array.isArray(t.acceptableStates) && -1 !== t.acceptableStates.indexOf(o) && (e.removeEventListener("onStateChange", r),
                                    clearTimeout(i),
                                    n())
                                }
                                ))
                            }
                            )).then((function() {
                                return i
                            }
                            )) : i
                        }
                        ))
                    }
                    : n[r] = function() {
                        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
                            n[o] = arguments[o];
                        return e.then((function(e) {
                            return e[r].apply(e, n)
                        }
                        ))
                    }
                }
                  , i = !0
                  , c = !1
                  , s = void 0;
                try {
                    for (var l, u = o.default[Symbol.iterator](); !(i = (l = u.next()).done); i = !0) {
                        var d = l.value;
                        r(d)
                    }
                } catch (e) {
                    c = !0,
                    s = e
                } finally {
                    try {
                        !i && u.return && u.return()
                    } finally {
                        if (c)
                            throw s
                    }
                }
                return n
            }
        };
        t.default = l,
        e.exports = t.default
    },
    721: function(e, t, n) {
        (function(r) {
            function o() {
                var e;
                try {
                    e = t.storage.debug
                } catch (e) {}
                return !e && void 0 !== r && "env"in r && (e = r.env.DEBUG),
                e
            }
            (t = e.exports = n(722)).log = function() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }
            ,
            t.formatArgs = function(e) {
                var n = this.useColors;
                if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff),
                !n)
                    return;
                var r = "color: " + this.color;
                e.splice(1, 0, r, "color: inherit");
                var o = 0
                  , i = 0;
                e[0].replace(/%[a-zA-Z%]/g, (function(e) {
                    "%%" !== e && (o++,
                    "%c" === e && (i = o))
                }
                )),
                e.splice(i, 0, r)
            }
            ,
            t.save = function(e) {
                try {
                    null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                } catch (e) {}
            }
            ,
            t.load = o,
            t.useColors = function() {
                if ("undefined" != typeof window && window.process && "renderer" === window.process.type)
                    return !0;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }
            ,
            t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                try {
                    return window.localStorage
                } catch (e) {}
            }(),
            t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
            t.formatters.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }
            ,
            t.enable(o())
        }
        ).call(this, n(132))
    },
    722: function(e, t, n) {
        var r;
        function o(e) {
            function n() {
                if (n.enabled) {
                    var e = n
                      , o = +new Date
                      , i = o - (r || o);
                    e.diff = i,
                    e.prev = r,
                    e.curr = o,
                    r = o;
                    for (var a = new Array(arguments.length), c = 0; c < a.length; c++)
                        a[c] = arguments[c];
                    a[0] = t.coerce(a[0]),
                    "string" != typeof a[0] && a.unshift("%O");
                    var s = 0;
                    a[0] = a[0].replace(/%([a-zA-Z%])/g, (function(n, r) {
                        if ("%%" === n)
                            return n;
                        s++;
                        var o = t.formatters[r];
                        if ("function" == typeof o) {
                            var i = a[s];
                            n = o.call(e, i),
                            a.splice(s, 1),
                            s--
                        }
                        return n
                    }
                    )),
                    t.formatArgs.call(e, a);
                    var l = n.log || t.log || console.log.bind(console);
                    l.apply(e, a)
                }
            }
            return n.namespace = e,
            n.enabled = t.enabled(e),
            n.useColors = t.useColors(),
            n.color = function(e) {
                var n, r = 0;
                for (n in e)
                    r = (r << 5) - r + e.charCodeAt(n),
                    r |= 0;
                return t.colors[Math.abs(r) % t.colors.length]
            }(e),
            "function" == typeof t.init && t.init(n),
            n
        }
        (t = e.exports = o.debug = o.default = o).coerce = function(e) {
            return e instanceof Error ? e.stack || e.message : e
        }
        ,
        t.disable = function() {
            t.enable("")
        }
        ,
        t.enable = function(e) {
            t.save(e),
            t.names = [],
            t.skips = [];
            for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++)
                n[o] && ("-" === (e = n[o].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
        }
        ,
        t.enabled = function(e) {
            var n, r;
            for (n = 0,
            r = t.skips.length; n < r; n++)
                if (t.skips[n].test(e))
                    return !1;
            for (n = 0,
            r = t.names.length; n < r; n++)
                if (t.names[n].test(e))
                    return !0;
            return !1
        }
        ,
        t.humanize = n(723),
        t.names = [],
        t.skips = [],
        t.formatters = {}
    },
    723: function(e, t) {
        var n = 1e3
          , r = 6e4
          , o = 60 * r
          , i = 24 * o;
        function a(e, t, n) {
            if (!(e < t))
                return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
        }
        e.exports = function(e, t) {
            t = t || {};
            var c, s = typeof e;
            if ("string" === s && e.length > 0)
                return function(e) {
                    if ((e = String(e)).length > 100)
                        return;
                    var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (!t)
                        return;
                    var a = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return 315576e5 * a;
                    case "days":
                    case "day":
                    case "d":
                        return a * i;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return a * o;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return a * r;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return a * n;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return a;
                    default:
                        return
                    }
                }(e);
            if ("number" === s && !1 === isNaN(e))
                return t.long ? a(c = e, i, "day") || a(c, o, "hour") || a(c, r, "minute") || a(c, n, "second") || c + " ms" : function(e) {
                    if (e >= i)
                        return Math.round(e / i) + "d";
                    if (e >= o)
                        return Math.round(e / o) + "h";
                    if (e >= r)
                        return Math.round(e / r) + "m";
                    if (e >= n)
                        return Math.round(e / n) + "s";
                    return e + "ms"
                }(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    },
    724: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"],
        e.exports = t.default
    },
    725: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"],
        e.exports = t.default
    },
    726: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o = n(727), i = (r = o) && r.__esModule ? r : {
            default: r
        };
        t.default = {
            pauseVideo: {
                acceptableStates: [i.default.ENDED, i.default.PAUSED],
                stateChangeRequired: !1
            },
            playVideo: {
                acceptableStates: [i.default.ENDED, i.default.PLAYING],
                stateChangeRequired: !1
            },
            seekTo: {
                acceptableStates: [i.default.ENDED, i.default.PLAYING, i.default.PAUSED],
                stateChangeRequired: !0,
                timeout: 3e3
            }
        },
        e.exports = t.default
    },
    727: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            BUFFERING: 3,
            ENDED: 0,
            PAUSED: 2,
            PLAYING: 1,
            UNSTARTED: -1,
            VIDEO_CUED: 5
        },
        e.exports = t.default
    },
    728: function(e, t, n) {
        "use strict";
        var r = n(3)
          , o = n.n(r)
          , i = n(0)
          , a = n.n(i)
          , c = n(12)
          , s = n(15)
          , l = n.n(s)
          , u = n(210)
          , d = n(671)
          , f = n(667)
          , p = n(670)
          , g = n(6)
          , b = n.n(g)
          , m = n(713)
          , h = n.n(m)
          , v = n(703)
          , y = n.n(v)
          , j = n(716)
          , O = n.n(j);
        function x(e) {
            return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function w(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function P(e, t) {
            return (P = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function S(e) {
            var t = function() {
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
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = N(e);
                if (t) {
                    var o = N(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return k(this, n)
            }
        }
        function k(e, t) {
            return !t || "object" !== x(t) && "function" != typeof t ? C(e) : t
        }
        function C(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function N(e) {
            return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function _(e, t) {
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
        function R(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _(Object(n), !0).forEach((function(t) {
                    E(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function E(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function I(e) {
            return R(R({}, e), {}, {
                height: 0,
                width: 0,
                playerVars: R(R({}, e.playerVars), {}, {
                    autoplay: 0,
                    start: 0,
                    end: 0
                })
            })
        }
        var T = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && P(e, t)
            }(i, e);
            var t, n, r, o = S(i);
            function i(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                E(C(t = o.call(this, e)), "onPlayerReady", (function(e) {
                    return t.props.onReady(e)
                }
                )),
                E(C(t), "onPlayerError", (function(e) {
                    return t.props.onError(e)
                }
                )),
                E(C(t), "onPlayerStateChange", (function(e) {
                    switch (t.props.onStateChange(e),
                    e.data) {
                    case i.PlayerState.ENDED:
                        t.props.onEnd(e);
                        break;
                    case i.PlayerState.PLAYING:
                        t.props.onPlay(e);
                        break;
                    case i.PlayerState.PAUSED:
                        t.props.onPause(e)
                    }
                }
                )),
                E(C(t), "onPlayerPlaybackRateChange", (function(e) {
                    return t.props.onPlaybackRateChange(e)
                }
                )),
                E(C(t), "onPlayerPlaybackQualityChange", (function(e) {
                    return t.props.onPlaybackQualityChange(e)
                }
                )),
                E(C(t), "createPlayer", (function() {
                    if ("undefined" != typeof document) {
                        var e = R(R({}, t.props.opts), {}, {
                            videoId: t.props.videoId
                        });
                        t.internalPlayer = O()(t.container, e),
                        t.internalPlayer.on("ready", t.onPlayerReady),
                        t.internalPlayer.on("error", t.onPlayerError),
                        t.internalPlayer.on("stateChange", t.onPlayerStateChange),
                        t.internalPlayer.on("playbackRateChange", t.onPlayerPlaybackRateChange),
                        t.internalPlayer.on("playbackQualityChange", t.onPlayerPlaybackQualityChange)
                    }
                }
                )),
                E(C(t), "resetPlayer", (function() {
                    return t.internalPlayer.destroy().then(t.createPlayer)
                }
                )),
                E(C(t), "updatePlayer", (function() {
                    t.internalPlayer.getIframe().then((function(e) {
                        t.props.id ? e.setAttribute("id", t.props.id) : e.removeAttribute("id"),
                        t.props.className ? e.setAttribute("class", t.props.className) : e.removeAttribute("class"),
                        t.props.opts && t.props.opts.width ? e.setAttribute("width", t.props.opts.width) : e.removeAttribute("width"),
                        t.props.opts && t.props.opts.height ? e.setAttribute("height", t.props.opts.height) : e.removeAttribute("height"),
                        "string" == typeof t.props.title ? e.setAttribute("title", t.props.title) : e.setAttribute("title", "YouTube video player")
                    }
                    ))
                }
                )),
                E(C(t), "getInternalPlayer", (function() {
                    return t.internalPlayer
                }
                )),
                E(C(t), "updateVideo", (function() {
                    if (void 0 !== t.props.videoId && null !== t.props.videoId) {
                        var e = !1
                          , n = {
                            videoId: t.props.videoId
                        };
                        "playerVars"in t.props.opts && (e = 1 === t.props.opts.playerVars.autoplay,
                        "start"in t.props.opts.playerVars && (n.startSeconds = t.props.opts.playerVars.start),
                        "end"in t.props.opts.playerVars && (n.endSeconds = t.props.opts.playerVars.end)),
                        e ? t.internalPlayer.loadVideoById(n) : t.internalPlayer.cueVideoById(n)
                    } else
                        t.internalPlayer.stopVideo()
                }
                )),
                E(C(t), "refContainer", (function(e) {
                    t.container = e
                }
                )),
                t.container = null,
                t.internalPlayer = null,
                t
            }
            return t = i,
            (n = [{
                key: "componentDidMount",
                value: function() {
                    this.createPlayer()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    (function(e, t) {
                        return e.id !== t.id || e.className !== t.className || e.opts.width !== t.opts.width || e.opts.height !== t.opts.height || e.title !== t.title
                    }
                    )(e, this.props) && this.updatePlayer(),
                    function(e, t) {
                        return e.videoId !== t.videoId || !y()(I(e.opts), I(t.opts))
                    }(e, this.props) && this.resetPlayer(),
                    function(e, t) {
                        if (e.videoId !== t.videoId)
                            return !0;
                        var n = e.opts.playerVars || {}
                          , r = t.opts.playerVars || {};
                        return n.start !== r.start || n.end !== r.end
                    }(e, this.props) && this.updateVideo()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.internalPlayer.destroy()
                }
            }, {
                key: "render",
                value: function() {
                    return a.a.createElement("div", {
                        className: this.props.containerClassName
                    }, a.a.createElement("div", {
                        id: this.props.id,
                        className: this.props.className,
                        ref: this.refContainer,
                        loading: this.props.loading
                    }))
                }
            }]) && w(t.prototype, n),
            r && w(t, r),
            i
        }(a.a.Component);
        E(T, "PlayerState", {
            UNSTARTED: -1,
            ENDED: 0,
            PLAYING: 1,
            PAUSED: 2,
            BUFFERING: 3,
            CUED: 5
        }),
        T.propTypes = {
            videoId: h.a.string,
            id: h.a.string,
            className: h.a.string,
            containerClassName: h.a.string,
            title: h.a.string,
            loading: h.a.oneOf(["lazy", "eager", "auto"]),
            opts: h.a.objectOf(h.a.any),
            onReady: h.a.func,
            onError: h.a.func,
            onPlay: h.a.func,
            onPause: h.a.func,
            onEnd: h.a.func,
            onStateChange: h.a.func,
            onPlaybackRateChange: h.a.func,
            onPlaybackQualityChange: h.a.func
        },
        T.defaultProps = {
            videoId: null,
            id: null,
            className: null,
            loading: null,
            opts: {},
            containerClassName: "",
            onReady: function() {},
            onError: function() {},
            onPlay: function() {},
            onPause: function() {},
            onEnd: function() {},
            onStateChange: function() {},
            onPlaybackRateChange: function() {},
            onPlaybackQualityChange: function() {},
            title: null
        };
        var z = T
          , L = n(10)
          , D = n(208)
          , A = n(77)
          , B = n(91)
          , V = function(e) {
            return {
                root: {
                    display: "flex",
                    color: "white",
                    alignItems: "flex-end",
                    height: "100%"
                },
                pause: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    "& span": {
                        position: "absolute",
                        width: 20,
                        bottom: 25,
                        left: 30,
                        cursor: "pointer",
                        fontSize: 0,
                        height: 20,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:before, &:after": {
                            content: '""',
                            display: "inline-block",
                            width: 4,
                            height: 16,
                            marginRight: 5,
                            background: e.colors[6]
                        }
                    }
                },
                fullscreen: {
                    cursor: "pointer",
                    position: "absolute",
                    bottom: 25,
                    right: 30,
                    width: 20,
                    height: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "& svg": {
                        fill: e.colors[6],
                        width: 16,
                        height: 16
                    }
                },
                progressWrapper: {
                    position: "relative",
                    flex: 1,
                    display: "block",
                    height: "1px",
                    padding: "".concat("15px", " 0"),
                    cursor: "pointer",
                    marginLeft: 30,
                    marginRight: 30,
                    "&:before": {
                        content: '""',
                        background: "rgba(255, 255, 255, .3)",
                        position: "absolute",
                        top: "15px",
                        left: 0,
                        width: "100%",
                        height: "1px"
                    }
                },
                progress: {
                    position: "absolute",
                    top: "15px",
                    left: 0,
                    width: "100%",
                    height: "1px",
                    background: e.colors[6],
                    transformOrigin: "left"
                }
            }
        }
          , M = n(1)
          , H = Object(c.b)(V)
          , F = function(e) {
            var t = e.video
              , n = e.onClickPause
              , r = e.goFullscreen
              , o = H(V)
              , a = function(e) {
                return Number(e.toFixed(4))
            }
              , c = function(e) {
                var t = e.duration
                  , n = e.currentTime;
                return Object(B.newMapRange)(n, [0, t], [0, 1], !0)
            }
              , s = Object(i.useRef)(t.getDuration() || 0)
              , l = Object(i.useRef)(null)
              , u = Object(i.useRef)(null);
            Object(A.b)((function() {
                var e = c({
                    currentTime: t.getCurrentTime(),
                    duration: s.current
                });
                e = a(e),
                l.current.style.transform = "scaleX(".concat(e, ")")
            }
            ));
            return Object(M.jsxs)("div", {
                className: o.root,
                children: [Object(M.jsx)("div", {
                    className: "".concat(o.pause, " youtubeVideoTimeline__pause"),
                    onClick: n,
                    role: "presentation",
                    children: Object(M.jsx)("span", {
                        children: "pause"
                    })
                }), Object(M.jsx)("div", {
                    className: "".concat(o.progressWrapper, " youtubeVideoTimeline__progressWrapper"),
                    onMouseDown: function(e) {
                        var n = Object(D.getBoundingClientRect)(u.current)
                          , r = e.clientX - n.left
                          , o = Object(B.newMapRange)(r, [0, n.width], [0, s.current], !0);
                        o = a(o),
                        L.a.fromTo(l.current, {
                            scaleX: c({
                                currentTime: t.getCurrentTime(),
                                duration: s.current
                            })
                        }, {
                            scaleX: c({
                                currentTime: o,
                                duration: s.current
                            }),
                            ease: "expo.inOut",
                            duration: .8,
                            onComplete: function() {
                                t.seekTo(o)
                            }
                        })
                    },
                    ref: u,
                    role: "presentation",
                    children: Object(M.jsx)("div", {
                        className: "".concat(o.progress, " youtubeVideoTimeline__progress"),
                        ref: l
                    })
                }), Object(M.jsx)("div", {
                    className: "".concat(o.fullscreen, " youtubeVideoTimeline__fullscreen"),
                    onClick: r,
                    role: "presentation",
                    children: Object(M.jsxs)("svg", {
                        children: [Object(M.jsx)("title", {
                            children: "Fullscreen"
                        }), Object(M.jsx)("use", {
                            xlinkHref: "#ico-fullscreen"
                        })]
                    })
                })]
            })
        }
          , W = n(36)
          , U = function(e) {
            var t = {
                root: {
                    position: "relative",
                    width: "100%",
                    height: 0,
                    paddingBottom: "56.25%",
                    "& iframe": {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                        pointerEvents: "none"
                    }
                },
                poster: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    zIndex: 2,
                    transition: "all 0.3s ease-in",
                    "&:before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: e.getRgba(e.colors[2], .6)
                    }
                },
                posterHide: {
                    opacity: 0,
                    pointerEvents: "none"
                },
                timeline: {
                    position: "absolute",
                    zIndex: 1,
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    padding: "40px 30px 20px 30px",
                    background: "linear-gradient(to top, rgba(0, 0, 0, .3)0, rgba(0, 0, 0, 0) 20%)"
                },
                play: {
                    position: "absolute",
                    top: "calc(50% - 40px)",
                    left: "calc(50% - 40px)",
                    borderRadius: "50%",
                    width: 80,
                    height: 80,
                    cursor: "pointer",
                    background: e.getRgba(e.colors[1], .4),
                    transition: "all .3s ".concat(e.easings["power4.out"]),
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "& svg": {
                        width: 25,
                        height: 25,
                        marginLeft: 5,
                        fill: e.colors[1],
                        transition: "all .3s ".concat(e.easings["power4.out"])
                    },
                    "&:hover": {
                        background: e.colors[1],
                        "& svg": {
                            fill: e.getRgba(e.colors[2], .4)
                        }
                    }
                },
                playHide: {
                    opacity: 0,
                    pointerEvents: "none"
                },
                "@keyframes rotate": {
                    from: {
                        transform: "translate(-50%, -50%) rotate(0)"
                    },
                    to: {
                        transform: "translate(-50%, -50%) rotate(360deg)"
                    }
                },
                "@keyframes dash": {
                    "0%": {
                        strokeDasharray: "1, 150",
                        strokeDashoffset: 0
                    },
                    "50%": {
                        strokeDasharray: "90, 150",
                        strokeDashoffset: -35
                    },
                    "100%": {
                        strokeDasharray: "90, 150",
                        strokeDashoffset: -124
                    }
                },
                loading: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "60px",
                    height: "60px",
                    transformOrigin: "center",
                    animation: "$rotate 1s linear infinite",
                    transition: "all 0.3s ease-in",
                    opacity: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    pointerEvents: "none",
                    "& svg": {
                        stroke: "white",
                        strokeWidth: 1,
                        fill: "none",
                        width: 60,
                        height: 60,
                        animation: "$dash 1.5s ease-in-out infinite"
                    }
                },
                loadingShow: {
                    opacity: 1
                }
            };
            return t[e.mediaInverse.sm] = {
                play: {
                    "&:before": {
                        marginTop: -20,
                        borderLeft: "25px solid ".concat(e.colors[1]),
                        borderTop: "15px solid transparent",
                        borderBottom: "15px solid transparent"
                    },
                    "&:hover": {
                        paddingTop: 29,
                        color: e.getRgba(e.colors[1], 0),
                        "&:before": {
                            borderLeftColor: e.colors[4],
                            transform: "translate(-50%, 7px) scale(.5)"
                        },
                        "&:after": {
                            transform: "translate(-50%, -50%) scale(.8)"
                        }
                    }
                }
            },
            t
        }
          , Y = Object(c.b)(U)
          , G = Object(i.forwardRef)((function(e, t) {
            var n = e.videoId
              , r = e.poster
              , a = e.className
              , c = e.autoplay
              , s = Y(U)
              , u = Object(i.useState)(!1)
              , d = b()(u, 2)
              , f = d[0]
              , p = d[1]
              , g = Object(i.useState)(!0)
              , m = b()(g, 2)
              , h = m[0]
              , v = m[1]
              , y = Object(i.useState)(!1)
              , j = b()(y, 2)
              , O = j[0]
              , x = j[1]
              , w = Object(i.useRef)(null)
              , P = Object(i.useRef)(null)
              , S = Object(i.useRef)("https://img.youtube.com/vi/".concat(n, "/maxresdefault.jpg"))
              , k = Object(i.useRef)({
                playerVars: {
                    autoplay: 0,
                    controls: 0,
                    showinfo: 0,
                    color: "white",
                    rel: 0,
                    fs: 0,
                    modestbranding: 1,
                    playsinline: 1
                },
                host: "https://www.youtube-nocookie.com"
            })
              , C = function() {
                P.current && (h ? (P.current.playVideo(),
                P.current.mute(),
                x(!0)) : (P.current.playVideo(),
                P.current.unMute(),
                p(!0)))
            };
            Object(i.useImperativeHandle)(t, (function() {
                return {
                    play: C
                }
            }
            ));
            var N = Object(W.a)(h);
            Object(i.useEffect)((function() {
                N && !h && (C(),
                x(!1))
            }
            ), [h]);
            var _ = function() {
                P.current && p(!1)
            }
              , R = Object(W.a)(f);
            return Object(i.useEffect)((function() {
                R && !f && setTimeout((function() {
                    return P.current.pauseVideo()
                }
                ), 300)
            }
            ), [f]),
            Object(M.jsxs)("div", {
                className: "".concat(s.root, " ").concat(a, " youtubeVideo"),
                children: [Object(M.jsx)(z, {
                    ref: w,
                    videoId: n,
                    opts: k.current,
                    onReady: function(e) {
                        P.current = e.target,
                        c && C()
                    },
                    onStateChange: function(e) {
                        1 === e.target.getPlayerState() && h && (setTimeout((function() {
                            return P.current.pauseVideo()
                        }
                        ), 100),
                        setTimeout((function() {
                            return P.current.seekTo(0)
                        }
                        ), 200),
                        setTimeout((function() {
                            return v(!1)
                        }
                        ), 3e3))
                    },
                    onEnd: function() {
                        P.current.seekTo(0),
                        _()
                    }
                }), Object(M.jsxs)("div", {
                    className: "".concat(l()(o()(o()({}, s.poster, !0), s.posterHide, f)), " youtubeVideo__poster"),
                    style: {
                        backgroundImage: "url(".concat(r || S.current, ")")
                    },
                    children: [Object(M.jsx)("button", {
                        className: "".concat(l()(o()(o()({}, s.play, !0), s.playHide, O)), " youtubeVideo__play"),
                        type: "button",
                        onClick: C,
                        children: Object(M.jsxs)("svg", {
                            children: [Object(M.jsx)("title", {
                                children: "Play"
                            }), Object(M.jsx)("use", {
                                xlinkHref: "#ico-play"
                            })]
                        })
                    }), Object(M.jsx)("div", {
                        className: "".concat(l()(o()(o()({}, s.loading, !0), s.loadingShow, O)), " youtubeVideo__loading"),
                        children: Object(M.jsx)("svg", {
                            className: "spinner",
                            viewBox: "0 0 50 50",
                            children: Object(M.jsx)("circle", {
                                className: "path",
                                cx: "25",
                                cy: "25",
                                r: "20",
                                fill: "none"
                            })
                        })
                    })]
                }), P.current && Object(M.jsx)("div", {
                    className: "".concat(s.timeline, " youtubeVideo__timeline"),
                    children: Object(M.jsx)(F, {
                        video: P.current,
                        isPlaying: f,
                        onClickPause: _,
                        goFullscreen: function() {
                            var e = P.current.f.requestFullScreen || P.current.f.mozRequestFullScreen || P.current.f.webkitRequestFullScreen;
                            e && e.bind(P.current.f)()
                        }
                    })
                })]
            })
        }
        ));
        G.defaultProps = {
            autoplay: !1
        };
        var Q = G
          , $ = n(689)
          , q = function(e) {
            var t = {
                root: {
                    maxWidth: 1280,
                    margin: [0, "auto"],
                    "& blockquote": {
                        padding: [0, 30, 0, 33],
                        borderLeft: "2px solid ".concat(e.getRgba(e.colors[1], .3)),
                        margin: ["2em", 0]
                    }
                },
                section: {
                    margin: [50, 0, 100]
                },
                gallery: {
                    margin: [50, 0, 100],
                    "& img": {
                        borderRadius: 20
                    }
                },
                sectionTitle: {
                    color: e.colors[1],
                    fontFamily: e.fonts[1],
                    fontSize: 46,
                    marginBottom: 100
                },
                sectionText: {
                    color: e.getRgba(e.colors[1], .45),
                    fontFamily: e.fonts[0],
                    fontSize: 21,
                    marginBottom: 55,
                    "& a": {
                        hyphens: "auto",
                        position: "relative",
                        zIndex: 1,
                        color: e.colors[3],
                        overflow: "hidden",
                        display: "inline-block",
                        verticalAlign: "middle",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            bottom: 3,
                            left: 0,
                            width: "300%",
                            height: 1,
                            background: "linear-gradient(to right, currentColor 0%, currentColor 33.333%, transparent 33.333%, transparent 66.666%, currentColor 66.666%)",
                            transition: "transform 0.7s ".concat(e.easings["power3.inOut"]),
                            transform: "translateX(-66.666%)"
                        },
                        "&:hover": {
                            "&::before": {
                                transform: "translateX(0%)"
                            }
                        }
                    },
                    "& ul": {
                        listStyle: "none",
                        padding: 0,
                        "& li": {
                            position: "relative",
                            paddingLeft: 30,
                            zIndex: 1,
                            "&:before": {
                                content: '""',
                                position: "absolute",
                                top: 10,
                                left: 4,
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                background: e.colors[3]
                            }
                        }
                    },
                    "& ol": {
                        margin: 0,
                        padding: 0,
                        listStyle: "none",
                        counterReset: "section",
                        "& li": {
                            position: "relative",
                            paddingLeft: 30,
                            zIndex: 1,
                            "&:before": {
                                content: "counter(section)",
                                position: "absolute",
                                zIndex: 1,
                                left: 4,
                                top: 7,
                                color: e.colors[3],
                                fontSize: 12,
                                counterIncrement: "section"
                            }
                        }
                    }
                },
                colsText: {
                    "& h1, & h2, & h3": {
                        color: e.colors[1],
                        fontFamily: e.fonts[1],
                        fontSize: 46,
                        marginBottom: 50
                    },
                    "& h2": {
                        fontSize: 38
                    },
                    "& h3": {
                        fontSize: 32
                    }
                },
                caption: {
                    marginTop: 15,
                    color: e.getRgba(e.colors[1], .6)
                },
                section2: {
                    display: "flex",
                    "& > div": {
                        flex: "0 0 50%",
                        "&:nth-child(1)": {
                            paddingRight: 50
                        },
                        "&:nth-child(2)": {
                            paddingLeft: 50
                        }
                    }
                },
                video: {
                    borderRadius: 20,
                    overflow: "hidden"
                }
            };
            return t[e.mediaInverse.lg] = {
                colsText: {
                    columnGap: 60
                }
            },
            t[e.mediaInverse.md] = {
                section: {
                    margin: [100, 0]
                },
                sectionTitle: {
                    fontSize: 32,
                    marginBottom: 50
                },
                sectionText: {
                    fontSize: 18
                },
                colsText: {
                    columns: 1
                },
                gallery: {},
                section2: {
                    display: "block",
                    "& > div": {
                        "&:nth-child(1)": {
                            paddingRight: 0
                        },
                        "&:nth-child(2)": {
                            paddingLeft: 0
                        }
                    }
                }
            },
            t
        }
          , X = Object(c.b)(q)
          , J = function(e) {
            var t, n = e.className, r = e.elements, a = X(), c = Object(i.useRef)();
            return 0 !== (null == r ? void 0 : r.length) && Object(M.jsx)("div", {
                className: "".concat(a.root, " ").concat(n),
                ref: c,
                children: (t = r,
                t && t.map((function(e, t) {
                    return "gallery_section" === e.acf_fc_layout ? function(e, t) {
                        var n, r = (n = e.gallery).length > 0 ? n.map((function(e) {
                            var t = e.url
                              , n = e.width
                              , r = e.height;
                            return {
                                src: t,
                                width: n,
                                height: r,
                                caption: e.caption,
                                ratio: r / n
                            }
                        }
                        )) : [];
                        return Object(M.jsx)("div", {
                            className: l()(o()(o()({}, a.gallery, !0), a.section, !0)),
                            children: Object(M.jsx)(p.a, {
                                children: Object(M.jsx)(f.a, {
                                    children: Object(M.jsx)(u.a, {
                                        imagesList: r
                                    })
                                })
                            })
                        }, t)
                    }(e, t) : "text_section" === e.acf_fc_layout ? function(e, t) {
                        return Object(M.jsx)("div", {
                            className: a.section,
                            children: Object(M.jsx)(p.a, {
                                children: Object(M.jsx)(f.a, {
                                    children: Object(M.jsx)("div", {
                                        className: l()(o()(o()({}, a.sectionText, !0), a.colsText, !0)),
                                        duration: 1.2,
                                        dangerouslySetInnerHTML: {
                                            __html: e.text
                                        }
                                    })
                                })
                            })
                        }, t)
                    }(e, t) : "title_section" === e.acf_fc_layout ? function(e, t) {
                        return Object(M.jsx)("div", {
                            className: a.section,
                            children: Object(M.jsx)(p.a, {
                                children: Object(M.jsx)(f.a, {
                                    children: Object(M.jsx)("div", {
                                        className: a.sectionTitle,
                                        duration: 1,
                                        dangerouslySetInnerHTML: {
                                            __html: e.title
                                        }
                                    })
                                })
                            })
                        }, t)
                    }(e, t) : "video_section" === e.acf_fc_layout ? function(e, t) {
                        return Object(M.jsx)("div", {
                            className: l()(o()(o()({}, a.video, !0), a.section, !0)),
                            children: Object(M.jsx)(p.a, {
                                children: Object(M.jsx)(f.a, {
                                    children: Object(M.jsx)(Q, {
                                        videoId: e.video
                                    })
                                })
                            })
                        }, t)
                    }(e, t) : "image_section" === e.acf_fc_layout ? function(e, t) {
                        var n, r;
                        return Object(M.jsxs)("div", {
                            className: l()(o()(o()({}, a.gallery, !0), a.section, !0)),
                            children: [Object(M.jsx)(p.a, {
                                children: Object(M.jsx)(d.a, {
                                    label: e.element_title,
                                    image: e.image.url,
                                    width: e.image.width,
                                    height: e.image.height
                                })
                            }), "" !== (null === (n = e.image) || void 0 === n ? void 0 : n.alt) && Object(M.jsx)(p.a, {
                                children: Object(M.jsx)(f.a, {
                                    className: "".concat(a.caption),
                                    children: null === (r = e.image) || void 0 === r ? void 0 : r.alt
                                })
                            })]
                        }, t)
                    }(e, t) : "banner_section" === e.acf_fc_layout ? function(e, t) {
                        return Object(M.jsx)("div", {
                            className: l()(o()({}, a.section, !0)),
                            children: Object(M.jsx)(p.a, {
                                children: Object(M.jsx)(f.a, {
                                    children: (null == e ? void 0 : e.title) && Object(M.jsx)($.a, {
                                        className: a.banner,
                                        title: e.title,
                                        text: e.text,
                                        label: e.label,
                                        link: e.link,
                                        image: e.image
                                    })
                                })
                            })
                        }, t)
                    }(e, t) : null
                }
                )))
            })
        };
        J.defaultProps = {
            className: "",
            elements: [],
            getImageUrl: "",
            page: {},
            stub: ""
        };
        t.a = J
    },
    894: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(3)
          , o = n.n(r)
          , i = n(6)
          , a = n.n(i)
          , c = n(0)
          , s = n(11)
          , l = n(12)
          , u = n(74)
          , d = n(27)
          , f = n(681)
          , p = n.n(f)
          , g = n(53)
          , b = n(78)
          , m = n(672)
          , h = n(94)
          , v = n(674)
          , y = n(678)
          , j = n(689)
          , O = n(680)
          , x = n(666)
          , w = n(15)
          , P = n.n(w)
          , S = n(728)
          , k = n(677)
          , C = n(676)
          , N = n(130)
          , _ = n(19)
          , R = n(679)
          , E = n(1)
          , I = function() {
            return Object(E.jsx)(E.Fragment, {
                children: Object(E.jsx)(R.a, {})
            })
        }
          , T = function(e) {
            var t = {
                root: {
                    color: e.colors[1],
                    paddingTop: function(e) {
                        return e.headerHeight
                    }
                },
                page: {
                    minHeight: function(e) {
                        return "calc(100vh - ".concat(e.headerHeight, "px)")
                    },
                    overflowX: "hidden"
                },
                wrapper: {
                    extend: e.wrapper,
                    position: "relative",
                    paddingLeft: "11vw"
                },
                canvas: {
                    position: "fixed!important",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    height: "calc(var(--vh) + 115px)!important",
                    width: "100vw!important"
                },
                hero: {
                    "& .hero__title": {
                        fontSize: 60
                    }
                },
                pageElements: {},
                badges: {
                    maxWidth: 1280,
                    margin: [200, "auto", 100]
                },
                badgesWrap: {
                    margin: [0, -10],
                    display: "flex",
                    flexWrap: "wrap"
                },
                badge: {
                    minHeight: 300,
                    flex: "0 0 calc(33.333% - 20px)",
                    margin: [20, 10]
                }
            };
            return t[e.mediaInverse.md] = {
                badgesWrap: {
                    display: "block"
                },
                badge: {
                    display: "block",
                    minHeight: 300,
                    marginBottom: 30
                }
            },
            t[e.mediaInverse.sm] = {
                wrapper: {
                    paddingLeft: 30,
                    paddingRight: 30
                },
                hero: {
                    "& .hero__title": {
                        fontSize: 37
                    }
                },
                pageElements: {
                    marginTop: -100
                }
            },
            t
        }
          , z = Object(l.b)(T);
        t.default = function() {
            var e = Object(c.useContext)(g.a)
              , t = e.setPageAnimationReady
              , n = e.headerHeight
              , r = e.pageAnimationReady
              , i = e.setBackButtonVisible
              , l = Object(c.useContext)(h.a)
              , f = l.scrollbar
              , w = l.scroll
              , R = Object(c.useContext)(b.a)
              , T = R.setReady
              , L = R.setSiteLoaded
              , D = z({
                headerHeight: n,
                isMobile: null == f ? void 0 : f.scroll.isMobile
            })
              , A = Object(c.useState)(!1)
              , B = a()(A, 2)
              , V = B[0]
              , M = B[1]
              , H = Object(u.c)()
              , F = Object(c.useRef)(new p.a.LoadQueue)
              , W = Object(d.g)()
              , U = Object(c.useRef)(Object(_.getSlug)(W.pathname))
              , Y = Object(c.useRef)()
              , G = Object(c.useState)(!1)
              , Q = a()(G, 2)
              , $ = Q[0]
              , q = Q[1]
              , X = Object(s.f)((function(e) {
                return {
                    page: e.content.pages[U.current] || {}
                }
            }
            ), s.d).page
              , J = Object(s.e)()
              , Z = Object(c.useCallback)((function(e, t) {
                return J(N.c(e, t))
            }
            ), [J])
              , K = function() {
                T(!0),
                L(!0),
                M(!0),
                t(!0)
            };
            Object(c.useEffect)((function() {
                var e, t;
                Object.keys(X).length > 0 && (F.current.on("complete", K),
                null !== (e = X.featured_image) && void 0 !== e && e.src ? F.current.loadFile({
                    src: null === (t = X.featured_image) || void 0 === t ? void 0 : t.src
                }) : K())
            }
            ), [X]);
            var ee = function() {
                var e;
                e = U.current,
                Z(e, !0)
            };
            Object(c.useEffect)((function() {
                return V || ee(),
                i(!0),
                function() {
                    i(!1)
                }
            }
            ), []);
            Object(c.useEffect)((function() {
                $ && setTimeout((function() {
                    q(!1)
                }
                ), 2e3)
            }
            ), [$]);
            var te, ne, re, oe, ie, ae, ce, se, le, ue;
            return V && Object(E.jsxs)(E.Fragment, {
                children: [Object(E.jsxs)(m.a, {
                    init: V,
                    className: P()(o()(o()({
                        page: !0,
                        pageGeneric: !0
                    }, D.root, !0), D.isMobile, w.isMobile || w.isTablet)),
                    ref: Y,
                    children: [V && Object(E.jsx)(v.a, {
                        title: X.title?.rendered,
                        meta: X.yoast_meta,
                        schema: X.yoast_json_ld
                    }), V && Object(E.jsx)("div", {
                        className: D.page,
                        children: Object(E.jsxs)("div", {
                            className: D.wrapper,
                            children: [Object(E.jsx)("div", {
                                className: D.heroWrapper,
                                children: Object(E.jsx)(y.a, {
                                    pageAnimationReady: r,
                                    className: D.hero,
                                    title: X.title?.rendered,
                                    payoff: null === (ce = X.acf) || void 0 === ce || null === (se = ce.hero) || void 0 === se ? void 0 : se.payoff,
                                    text: null === (le = X.acf) || void 0 === le || null === (ue = le.hero) || void 0 === ue ? void 0 : ue.text,
                                    image: X.featured_image
                                })
                            }), Object(E.jsx)(S.a, {
                                className: D.pageElements,
                                elements: null === (ae = X.acf) || void 0 === ae ? void 0 : ae.page_builder
                            }), (ie = null === (re = X.acf) || void 0 === re || null === (oe = re.related) || void 0 === oe ? void 0 : oe.related,
                            ie && ie.length > 0 && Object(E.jsx)("div", {
                                className: D.badges,
                                children: Object(E.jsx)("div", {
                                    className: D.badgesWrap,
                                    children: ie.map((function(e, t) {
                                        var n;
                                        return Object(E.jsx)(O.a, {
                                            className: D.badge,
                                            title: e.title?.rendered,
                                            image: null === (n = e.featured_image) || void 0 === n ? void 0 : n.src,
                                            link: e.link
                                        }, t.toString())
                                    }
                                    ))
                                })
                            })), (null === (te = X.acf) || void 0 === te || null === (ne = te.banner) || void 0 === ne ? void 0 : ne.title) && Object(E.jsx)(j.a, {
                                className: D.banner,
                                title: X.acf.banner.title,
                                text: X.acf.banner.text,
                                label: X.acf.banner.label,
                                link: X.acf.banner.link,
                                image: X.acf.banner.image
                            }), Object(E.jsx)(C.a, {})]
                        })
                    })]
                }), Object(E.jsx)(k.a, {
                    color: H.colors[3]
                }), Object(E.jsx)(x.a, {
                    className: D.canvas,
                    dpr: [1, 1.5],
                    camera: {
                        position: [0, 0, 7],
                        fov: 30,
                        far: 50
                    },
                    children: Object(E.jsx)(I, {})
                })]
            })
        }
    }
}]);
//# sourceMappingURL=generic.ceee.js.map

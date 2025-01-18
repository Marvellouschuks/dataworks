(window.webpackJsonp = window.webpackJsonp || []).push([[5, 4], {
    665: function(e, t, r) {
        var o = r(673);
        e.exports = function(e, t) {
            if (null == e)
                return {};
            var r, i, n = o(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (i = 0; i < a.length; i++)
                    r = a[i],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
            }
            return n
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    667: function(e, t, r) {
        "use strict";
        var o = r(3)
          , i = r.n(o)
          , n = r(665)
          , a = r.n(n)
          , c = r(0)
          , l = r(10)
          , s = r(12)
          , d = r(15)
          , u = r.n(d)
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
          , m = r(1)
          , g = ["className", "children", "duration", "ease", "delay", "visible", "inview", "tag"];
        function b(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, o)
            }
            return r
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? b(Object(r), !0).forEach((function(t) {
                    i()(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var h = Object(s.b)(f)
          , p = function(e) {
            var t = e.className
              , r = e.children
              , o = e.duration
              , n = e.ease
              , s = e.delay
              , d = e.visible
              , f = e.inview
              , b = e.tag
              , p = a()(e, g)
              , j = h()
              , x = Object(c.useRef)()
              , O = b;
            return Object(c.useEffect)((function() {
                l.a.to(x.current, {
                    opacity: d || f ? 1 : 0,
                    duration: o,
                    ease: n,
                    delay: s
                })
            }
            ), [d, f]),
            Object(m.jsx)(O, v(v({
                className: u()(i()(i()({}, t, t), j.root, !0)),
                ref: x
            }, p), {}, {
                children: r
            }))
        };
        p.defaultProps = {
            className: "",
            tag: "div",
            duration: 1,
            delay: 0,
            ease: "power3.inOut",
            visible: !1,
            inview: !1
        };
        t.a = p
    },
    669: function(e, t, r) {
        "use strict";
        var o = r(3)
          , i = r.n(o)
          , n = r(6)
          , a = r.n(n)
          , c = r(0)
          , l = r(12)
          , s = r(15)
          , d = r.n(s)
          , u = r(10)
          , f = r(204)
          , m = r(76)
          , g = r(77)
          , b = r(683)
          , v = function(e) {
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
          , h = r(1);
        u.a.registerPlugin(b.a);
        var p = Object(l.b)(v)
          , j = function(e) {
            var t = e.className
              , r = e.delayEnter
              , o = e.delayLeave
              , n = e.duration
              , l = e.ease
              , s = e.inview
              , v = e.lineHeight
              , j = e.link
              , x = e.onComplete
              , O = e.stagger
              , y = e.tag
              , w = e.type
              , N = e.value
              , C = e.visible
              , S = p({
                linesMargin: -1.25 + v
            })
              , k = Object(c.useRef)()
              , R = Object(c.useRef)(0)
              , _ = Object(c.useRef)()
              , z = y
              , P = Object(c.useState)(!1)
              , I = a()(P, 2)
              , T = I[0]
              , B = I[1];
            return Object(c.useEffect)((function() {
                "" !== N && (R.current = window.innerWidth,
                B(new b.a(_.current,{
                    type: w
                })))
            }
            ), []),
            Object(c.useEffect)((function() {
                !0 === T.isSplit && (u.a.set(k.current, {
                    opacity: 1
                }),
                u.a.set(T[w], {
                    y: "120%",
                    transformOrigin: "center top"
                }),
                "lines" === w && T.lines.forEach((function(e) {
                    var t, r;
                    t = e,
                    r = document.createElement("div"),
                    t.parentNode.insertBefore(r, t),
                    r.classList.add("line"),
                    r.appendChild(t)
                }
                )))
            }
            ), [T, w]),
            Object(g.c)((function() {
                R.current !== window.innerWidth && T.isSplit && (T.revert(),
                B(!1),
                setTimeout((function() {
                    B(new b.a(_.current,{
                        type: w
                    })),
                    R.current = window.innerWidth
                }
                ), 200))
            }
            ), [T]),
            Object(c.useEffect)((function() {
                !0 === T.isSplit && u.a.to(T[w], {
                    y: C || s ? "0%" : "120%",
                    duration: n,
                    stagger: O,
                    ease: l,
                    delay: C || s ? r : o,
                    onComplete: x
                })
            }
            ), [T, w, C, s, r, o, x]),
            Object(h.jsx)(z, {
                ref: k,
                className: d()(i()(i()(i()(i()({}, t, t), S.hidden, !T), S.root, !0), S.visible, C)),
                children: Object(h.jsx)(f.a, {
                    condition: j,
                    wrapper: function(e) {
                        return Object(h.jsx)(m.a, {
                            className: S.link,
                            to: j,
                            children: e
                        })
                    },
                    children: Object(h.jsx)("div", {
                        className: S.wrap,
                        dangerouslySetInnerHTML: {
                            __html: N
                        },
                        ref: _
                    })
                })
            })
        };
        j.defaultProps = {
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
        t.a = j
    },
    670: function(e, t, r) {
        "use strict";
        var o = r(3)
          , i = r.n(o)
          , n = r(6)
          , a = r.n(n)
          , c = r(665)
          , l = r.n(c)
          , s = r(0)
          , d = r(10)
          , u = r(96)
          , f = r(94)
          , m = r(1)
          , g = ["children", "offset", "once", "className"];
        function b(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, o)
            }
            return r
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? b(Object(r), !0).forEach((function(t) {
                    i()(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        d.a.registerPlugin(u.b);
        var h = function(e) {
            var t = e.children
              , r = e.offset
              , o = e.once
              , i = e.className
              , n = l()(e, g)
              , c = Object(s.useRef)()
              , d = Object(s.useRef)()
              , b = Object(s.useState)(!1)
              , h = a()(b, 2)
              , p = h[0]
              , j = h[1]
              , x = Object(s.useContext)(f.a).scrollElement;
            return Object(s.useEffect)((function() {
                return x && (d.current = u.b.create({
                    trigger: c.current,
                    scroller: x,
                    start: "top ".concat(r),
                    once: o,
                    onEnter: function() {
                        return o && j(!0)
                    },
                    onToggle: function(e) {
                        return !o && j(e.isActive)
                    }
                })),
                function() {
                    x && d.current.kill()
                }
            }
            ), [x]),
            Object(m.jsx)("div", v(v({
                ref: c,
                className: i
            }, n), {}, {
                children: s.Children.map(t, (function(e) {
                    return Object(s.cloneElement)(e, {
                        inview: "string" == typeof e.type ? void 0 : p
                    })
                }
                ))
            }))
        };
        h.defaultProps = {
            offset: "95%",
            once: !0
        },
        t.a = Object(s.memo)(h)
    },
    671: function(e, t, r) {
        "use strict";
        var o = r(3)
          , i = r.n(o)
          , n = r(665)
          , a = r.n(n)
          , c = r(0)
          , l = r(12)
          , s = r(10)
          , d = function(e) {
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
          , u = r(1)
          , f = ["className", "image", "width", "height", "label", "visible", "inview", "delayEnter", "delayLeave"];
        function m(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, o)
            }
            return r
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(r), !0).forEach((function(t) {
                    i()(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var b = Object(l.b)(d)
          , v = function(e) {
            var t = e.className
              , r = e.image
              , o = e.width
              , i = e.height
              , n = e.label
              , l = e.visible
              , d = e.inview
              , m = e.delayEnter
              , v = e.delayLeave
              , h = a()(e, f)
              , p = b()
              , j = Object(c.useRef)()
              , x = Object(c.useRef)();
            return Object(c.useEffect)((function() {
                s.a.to(j.current, {
                    opacity: l || d ? 1 : 0,
                    duration: 1,
                    ease: "power3.inOut",
                    delay: l || d ? m : v
                })
            }
            ), [l, d]),
            Object(u.jsx)("picture", g(g({
                ref: j,
                className: "".concat(p.root, " ").concat(t)
            }, h), {}, {
                children: Object(u.jsx)("span", {
                    className: p.image,
                    children: Object(u.jsx)("img", {
                        ref: x,
                        src: r,
                        loading:"lazy",
                        alt: n,
                        width: o,
                        height: i
                    })
                })
            }))
        };
        v.defaultProps = {
            className: "",
            image: "",
            label: "",
            visible: !1,
            inview: !1,
            delay: 0
        };
        t.a = v
    },
    672: function(e, t, r) {
        "use strict";
        var o = r(3)
          , i = r.n(o)
          , n = r(0)
          , a = r(15)
          , c = r.n(a)
          , l = r(325)
          , s = r(74)
          , d = r(682)
          , u = r(94)
          , f = r(1)
          , m = Object(n.forwardRef)((function(e, t) {
            var r = e.children
              , o = e.className
              , a = e.direction
              , m = e.init
              , g = e.lerp
              , b = e.smooth
              , v = Object(n.useRef)(null)
              , h = Object(s.c)()
              , p = Object(n.useRef)()
              , j = Object(n.useRef)()
              , x = Object(n.useContext)(u.a).setScrollbar;
            return Object(n.useEffect)((function() {
                return v.current && (j.current = new l.default((function() {
                    var e;
                    v.current && (null === (e = p.current) || void 0 === e || e.update())
                }
                )),
                j.current.observe(v.current)),
                function() {
                    v.current && j.current.disconnect(v.current)
                }
            }
            ), [v]),
            Object(n.useEffect)((function() {
                return v.current && m && !h.detect.isIE11 && (p.current = new d.a({
                    el: v.current,
                    direction: a,
                    smooth: b,
                    lerp: g,
                    getDirection: !0,
                    getSpeed: !0,
                    repeat: !1,
                    touchMultiplier: 2
                }),
                x(p.current)),
                function() {
                    m && p.current && p.current.destroy()
                }
            }
            ), [v, m]),
            Object(n.useImperativeHandle)(t, (function() {
                return {
                    ref: v.current
                }
            }
            )),
            Object(f.jsx)("div", {
                className: c()(i()(i()({}, o, o), "smooth-scroll", !0)),
                ref: v,
                "data-scroll-container": !0,
                children: r
            })
        }
        ));
        m.defaultProps = {
            smooth: !0,
            lerp: .1
        },
        t.a = m
    },
    673: function(e, t) {
        e.exports = function(e, t) {
            if (null == e)
                return {};
            var r = {};
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    if (t.indexOf(o) >= 0)
                        continue;
                    r[o] = e[o]
                }
            return r
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    674: function(e, t, r) {
        "use strict";
        var o = r(684)
          , i = r(11)
          , n = r(131)
          , a = r(1)
          , c = function(e) {
            var t = e.title
              , r = Object(i.f)((function(e) {
                return e.options.strings
            }
            ));
            return Object(a.jsx)(o.a, {
                title: "".concat(Object(n.decodeEntities)(t), " - ").concat(r.site_title)
            })
        };
        c.defaultProps = {
            title: ""
        },
        t.a = c
    },
    675: function(e, t, r) {
        "use strict";
        var o = r(3)
          , i = r.n(o)
          , n = r(0)
          , a = r(12)
          , c = r(15)
          , l = r.n(c)
          , s = r(10)
          , d = function(e) {
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
          , u = r(1)
          , f = Object(a.b)(d)
          , m = function(e) {
            var t = e.className
              , r = e.visible
              , o = e.color
              , a = e.event
              , c = f({
                color: o
            })
              , d = Object(n.useRef)();
            return Object(n.useEffect)((function() {
                r ? s.a.to(d.current, {
                    duration: 1.3,
                    opacity: 1,
                    y: "0%",
                    ease: "power3.out",
                    delay: .6
                }) : s.a.to(d.current, {
                    duration: 1.3,
                    opacity: 0,
                    y: "100%",
                    ease: "power3.inOut"
                })
            }
            ), [r]),
            Object(u.jsx)("button", {
                className: l()(i()(i()(i()({}, c.root, !0), t, t), c.visible, r)),
                ref: d,
                onClick: a,
                children: Object(u.jsxs)("svg", {
                    viewBox: "0 0 36 80",
                    children: [Object(u.jsx)("path", {
                        d: "M0,18v18c0,9.9,8.1,18,18,18s18-8.1,18-18V18c0-9.9-8.1-18-18-18S0,8.1,0,18z M18,4c7.7,0,14,6.3,14,14v18 c0,7.7-6.3,14-14,14S4,43.7,4,36V18C4,10.3,10.3,4,18,4z"
                    }), Object(u.jsx)("path", {
                        className: c.mouse,
                        d: "M18,21c1.1,0,2-0.9,2-2v-6c0-1.1-0.9-2-2-2s-2,0.9-2,2v6C16,20.1,16.9,21,18,21z"
                    }), Object(u.jsx)("path", {
                        className: c.arrow,
                        d: "M16.6,69.4C17,69.8,17.5,70,18,70s1-0.2,1.4-0.6l5-5c0.8-0.8,0.8-2,0-2.8s-2-0.8-2.8,0L18,65.2l-3.6-3.6 c-0.8-0.8-2-0.8-2.8,0s-0.8,2,0,2.8L16.6,69.4z"
                    })]
                })
            })
        };
        m.defaultProps = {
            className: "",
            visible: !0,
            event: function() {}
        };
        t.a = m
    },
    676: function(e, t, r) {
        "use strict";
        var o = r(3)
          , i = r.n(o)
          , n = r(15)
          , a = r.n(n)
          , c = r(11)
          , l = r(12)
          , s = r(76)
          , d = function(e) {
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
          , u = r(1)
          , f = Object(l.b)(d)
          , m = function(e) {
            var t = e.inverse
              , r = f({
                inverse: t
            })
              , o = Object(c.f)((function(e) {
                return {
                    footerNav: e.nav.footer_menu || [],
                    strings: e.options.strings
                }
            }
            ), c.d)
              , n = o.footerNav
              , l = o.strings;
            return Object(u.jsx)("footer", {
                className: a()(i()(i()({}, r.root, !0), "footer__root", !0)),
                children: Object(u.jsxs)("div", {
                    className: a()(i()(i()({}, r.wrapper, !0), "footer__wrapper", !0)),
                    children: [Object(u.jsx)("div", {
                        className: a()(i()(i()({}, r.text, !0), "footer__text", !0)),
                        children: l.footer_string_1
                    }), Object(u.jsx)("div", {
                        className: a()(i()(i()({}, r.nav, !0), "footer__nav", !0)),
                        children: n.length && n.map((function(e, t) {
                            return Object(u.jsx)(s.a, {
                                to: e.url,
                                children: e.title
                            }, t.toString())
                        }
                        ))
                    })]
                })
            })
        };
        m.defaultProps = {
            storeLocator: !1
        };
        t.a = m
    },
    677: function(e, t, r) {
        "use strict";
        var o = r(3)
          , i = r.n(o)
          , n = r(6)
          , a = r.n(n)
          , c = r(0)
          , l = r(15)
          , s = r.n(l)
          , d = r(53)
          , u = r(77)
          , f = r(94)
          , m = r(12)
          , g = r(675)
          , b = r(10)
          , v = function(e) {
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
          , h = r(1)
          , p = Object(m.b)(v);
        t.a = function(e) {
            var t = e.color
              , r = e.inverse
              , o = Object(c.useContext)(d.a).headerHeight
              , n = p({
                headerHeight: o,
                color: t,
                inverse: r
            })
              , l = Object(c.useRef)()
              , m = Object(c.useRef)()
              , v = Object(c.useContext)(f.a)
              , j = v.scroll
              , x = v.limit
              , O = v.direction
              , y = Object(c.useRef)(0)
              , w = Object(c.useState)(!1)
              , N = a()(w, 2)
              , C = N[0]
              , S = N[1]
              , k = Object(c.useState)(!1)
              , R = a()(k, 2)
              , _ = R[0]
              , z = R[1]
              , P = Object(c.useCallback)((function() {
                l.current && m.current && (y.current = l.current.getBoundingClientRect().height - m.current.getBoundingClientRect().height)
            }
            ), []);
            return Object(c.useEffect)((function() {
                P()
            }
            ), []),
            Object(u.c)((function() {
                P()
            }
            )),
            Object(u.b)((function() {
                if (0 === x.current.y)
                    S(!1),
                    z(!1),
                    m.current && b.a.to(m.current, {
                        opacity: 0,
                        y: 0
                    });
                else {
                    var e = j.current.y / x.current.y;
                    S(0 === e),
                    z("down" === O && e > 0),
                    m.current && b.a.to(m.current, {
                        opacity: 1,
                        y: e * y.current
                    })
                }
            }
            ), [O, x, j]),
            Object(h.jsxs)("div", {
                className: n.root,
                children: [Object(h.jsx)("div", {
                    className: s()(i()(i()({}, n.topLeftCorner, !0), n.noBorderRadius, _)),
                    children: Object(h.jsx)("div", {
                        className: n.scroll,
                        ref: l,
                        children: Object(h.jsx)("div", {
                            className: n.thumb,
                            ref: m
                        })
                    })
                }), Object(h.jsx)(g.a, {
                    visible: C,
                    color: t,
                    className: n.scrollIcon
                })]
            })
        }
    },
    678: function(e, t, r) {
        "use strict";
        var o = r(3)
          , i = r.n(o)
          , n = r(0)
          , a = r(15)
          , c = r.n(a)
          , l = r(12)
          , s = r(53)
          , d = r(76)
          , u = r(669)
          , f = r(671)
          , m = r(667)
          , g = r(670)
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
          , v = r(1)
          , h = Object(l.b)(b);
        t.a = function(e) {
            var t = e.pageAnimationReady
              , r = e.className
              , o = e.title
              , a = e.date
              , l = e.payoff
              , b = e.image
              , p = e.subtitle
              , j = e.text
              , x = e.categories
              , O = e.inverse
              , y = Object(n.useContext)(s.a).headerHeight
              , w = h({
                headerHeight: y,
                inverse: O
            });
            return Object(v.jsxs)("div", {
                className: c()(i()(i()({}, w.hero, !0), r, !0)),
                children: [o && Object(v.jsx)(u.a, {
                    className: "".concat(w.title, " hero__title"),
                    value: o,
                    tag: "h1",
                    type: "lines",
                    lineHeight: 1.1,
                    stagger: .03,
                    duration: 1.3,
                    visible: t
                }), (null == x ? void 0 : x.length) > 0 && Object(v.jsx)(m.a, {
                    className: "".concat(w.date, " hero__categories"),
                    delay: .5,
                    visible: t,
                    children: x.map((function(e) {
                        return Object(v.jsx)(d.a, {
                            to: "/news/".concat(e.slug),
                            children: e.name
                        }, e.slug)
                    }
                    ))
                }), a && Object(v.jsx)(u.a, {
                    className: "".concat(w.date, " hero__date"),
                    value: a,
                    tag: "h1",
                    type: "lines",
                    lineHeight: 1.1,
                    stagger: .03,
                    duration: 1.3,
                    delayEnter: .5,
                    visible: t
                }), l && Object(v.jsx)(g.a, {
                    children: Object(v.jsx)(u.a, {
                        className: "".concat(w.payoff, " hero__payoff"),
                        value: l,
                        tag: "div",
                        type: "lines",
                        lineHeight: 1.4,
                        duration: 1.3
                    })
                }), (null == b ? void 0 : b.src) && Object(v.jsx)("div", {
                    className: "".concat(w.image, " hero__image"),
                    children: Object(v.jsx)(f.a, {
                        image: null == b ? void 0 : b.src,
                        delayEnter: .5,
                        visible: t
                    })
                }), "" !== (null == b ? void 0 : b.caption) && Object(v.jsx)(m.a, {
                    className: "".concat(w.caption, " hero_caption"),
                    delay: .5,
                    visible: t,
                    children: null == b ? void 0 : b.caption
                }), p && Object(v.jsx)(g.a, {
                    children: Object(v.jsx)(u.a, {
                        className: "".concat(w.subtitle, " hero__subtitle"),
                        value: p,
                        tag: "div",
                        type: "lines",
                        lineHeight: 1.25,
                        duration: 1.3
                    })
                }), j && Object(v.jsx)(g.a, {
                    children: Object(v.jsx)(m.a, {
                        children: Object(v.jsx)("div", {
                            className: "".concat(w.text, " hero__text"),
                            duration: 1.3,
                            dangerouslySetInnerHTML: {
                                __html: j
                            }
                        })
                    })
                })]
            })
        }
    },
    679: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return s
        }
        ));
        var o = r(10)
          , i = r(668)
          , n = r(0)
          , a = r(666)
          , c = r(203)
          , l = r(1)
          , s = function() {
            var e = Object(c.a)()
              , t = e.stage
              , r = e.model
              , s = e.stage0
              , d = e.stage1
              , u = e.stage2
              , f = e.stage3
              , m = e.model0
              , g = e.model1
              , b = e.model2
              , v = Object(a.e)()
              , h = Object(n.useRef)()
              , p = Object(n.useRef)({
                color1: s.bgColor1,
                color2: s.bgColor2
            })
              , j = function(e, t) {
                o.a.killTweensOf(p.current),
                o.a.to(p.current, {
                    color1: e,
                    color2: t,
                    duration: 2
                })
            };
            Object(n.useEffect)((function() {
                switch (t) {
                case 0:
                    j(s.bgColor1, s.bgColor2);
                    break;
                case 1:
                    j(d.bgColor1, d.bgColor2);
                    break;
                case 2:
                    j(u.bgColor1, u.bgColor2);
                    break;
                case 3:
                    j(f.bgColor1, f.bgColor2)
                }
            }
            ), [t]),
            Object(n.useEffect)((function() {
                switch (r) {
                case 0:
                    j(m.bgColor1, m.bgColor2);
                    break;
                case 1:
                    j(g.bgColor1, g.bgColor2);
                    break;
                case 2:
                    j(b.bgColor1, b.bgColor2)
                }
            }
            ), [r]);
            var x = Object(n.useMemo)((function() {
                return {
                    uniforms: {
                        uTime: {
                            value: 0
                        },
                        uColor1: {
                            value: new i.Color(p.color1).convertSRGBToLinear()
                        },
                        uColor2: {
                            value: new i.Color(p.color2).convertSRGBToLinear()
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
                h.current.material.uniforms.uColor1.value = new i.Color(p.current.color1),
                h.current.material.uniforms.uColor2.value = new i.Color(p.current.color2)
            }
            )),
            Object(n.useEffect)((function() {
                var e = v.aspect < 1 ? 2 : 1;
                h.current.scale.set(v.viewport.width * v.viewport.distance * 2 * e, v.viewport.height * v.viewport.distance * 2, 1)
            }
            ), [v, t]),
            Object(l.jsxs)("mesh", {
                ref: h,
                position: [0, 0, -40],
                children: [Object(l.jsx)("planeBufferGeometry", {
                    attach: "geometry",
                    args: [1, 1]
                }), Object(l.jsx)("shaderMaterial", {
                    attach: "material",
                    transparent: !0,
                    args: [x]
                })]
            })
        }
    },
    680: function(e, t, r) {
        "use strict";
        var o = r(3)
          , i = r.n(o)
          , n = r(15)
          , a = r.n(n)
          , c = r(12)
          , l = r(76)
          , s = function(e) {
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
          , d = r(1)
          , u = Object(c.b)(s);
        t.a = function(e) {
            var t = e.className
              , r = e.title
              , o = e.text
              , n = e.image
              , c = e.link
              , f = e.color
              , m = u(s);
            return Object(d.jsxs)(l.a, {
                to: c,
                className: a()(i()(i()({}, m.root, !0), t, t)),
                style: {
                    backgroundColor: n ? "#382e63" : f
                },
                children: [n && Object(d.jsx)("div", {
                    className: m.image,
                    style: {
                        backgroundImage: "url(".concat(n, ")")
                    }
                }), Object(d.jsx)("div", {
                    className: m.title,
                    dangerouslySetInnerHTML: {
                        __html: r
                    }
                }), Object(d.jsx)("div", {
                    className: m.text,
                    children: o
                }), Object(d.jsx)("button", {
                    className: m.link,
                    children: Object(d.jsx)("svg", {
                        children: Object(d.jsx)("use", {
                            xlinkHref: "#ico-arrow"
                        })
                    })
                })]
            })
        }
    },
    730: function(e, t, r) {
        "use strict";
        var o = r(3)
          , i = r.n(o)
          , n = r(15)
          , a = r.n(n)
          , c = r(12)
          , l = r(669)
          , s = r(671)
          , d = r(667)
          , u = r(670)
          , f = r(76)
          , m = function(e) {
            var t = {
                root: {
                    position: "relative",
                    zIndex: 1
                },
                box: {
                    position: "absolute",
                    zIndex: 1,
                    bottom: -70,
                    right: "5.5vw",
                    borderRadius: 20,
                    backgroundColor: e.colors[1],
                    padding: [48, 55],
                    width: 570
                },
                title: {
                    color: e.colors[0],
                    fontFamily: e.fonts[1],
                    fontSize: 55,
                    marginBottom: 17
                },
                text: {
                    color: e.colors[0],
                    fontFamily: e.fonts[0],
                    opacity: .45,
                    fontSize: 19,
                    marginBottom: 62
                },
                link: {
                    background: e.colors[0],
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 45,
                    height: 45,
                    borderRadius: "50%",
                    "& svg": {
                        fill: e.colors[1],
                        width: 6,
                        height: 9
                    }
                },
                img: {
                    "& img": {
                        maxWidth: "none",
                        width: "100%"
                    }
                }
            };
            return t[e.mediaInverse.md] = {
                box: {
                    bottom: -70,
                    right: "5.5vw",
                    padding: [38, 40],
                    width: 470
                },
                title: {
                    fontSize: 45,
                    marginBottom: 17
                },
                text: {
                    fontSize: 18,
                    marginBottom: 30
                }
            },
            t[e.mediaInverse.sm] = {
                box: {
                    position: "static",
                    borderRadius: 0,
                    padding: [30, 0],
                    width: "100%",
                    background: "none"
                },
                title: {
                    color: e.colors[1],
                    fontSize: 32
                },
                text: {
                    color: e.colors[1]
                },
                link: {
                    background: e.colors[1],
                    "& svg": {
                        fill: e.colors[0]
                    }
                },
                img: {
                    borderRadius: 20
                }
            },
            t
        }
          , g = r(1)
          , b = Object(c.b)(m);
        t.a = function(e) {
            var t = e.className
              , r = e.title
              , o = e.text
              , n = e.image
              , c = e.link
              , v = b(m);
            return Object(g.jsxs)("div", {
                className: a()(i()(i()({}, v.root, !0), t, t)),
                children: [Object(g.jsx)(u.a, {
                    className: v.imgWrap,
                    children: Object(g.jsx)(s.a, {
                        image: n.url,
                        width: n.width,
                        height: n.height,
                        className: v.img,
                        delayEnter: 0,
                        "data-scroll": !0,
                        "data-scroll-speed": "1"
                    })
                }), Object(g.jsxs)(u.a, {
                    className: v.box,
                    children: [Object(g.jsx)(l.a, {
                        className: v.title,
                        value: r,
                        tag: "h3",
                        type: "lines",
                        stagger: .03,
                        duration: 1.3
                    }), Object(g.jsx)(l.a, {
                        className: v.text,
                        value: o,
                        tag: "div",
                        type: "lines",
                        stagger: .03,
                        duration: 1.3,
                        delayEnter: .4
                    }), Object(g.jsx)(d.a, {
                        delay: .8,
                        children: Object(g.jsx)(f.a, {
                            to: c,
                            className: v.link,
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
    886: function(e, t, r) {
        "use strict";
        r.r(t);
        var o = r(3)
          , i = r.n(o)
          , n = r(6)
          , a = r.n(n)
          , c = r(0)
          , l = r(11)
          , s = r(27)
          , d = r(12)
          , u = r(74)
          , f = r(681)
          , m = r.n(f)
          , g = r(53)
          , b = r(78)
          , v = r(94)
          , h = r(666)
          , p = r(15)
          , j = r.n(p)
          , x = r(677)
          , O = r(730)
          , y = r(671)
          , w = r(669)
          , N = r(667)
          , C = r(670)
          , S = r(678)
          , k = r(676)
          , R = r(680)
          , _ = r(209)
          , z = function(e) {
            var t = {
                borderTitle: {
                    flex: "1 0 100%",
                    textTransform: "uppercase",
                    fontSize: 14,
                    opacity: .45,
                    borderBottom: "1px solid ".concat(e.colors[1]),
                    paddingBottom: 10,
                    marginBottom: 35
                },
                flexGrid: {
                    display: "flex",
                    flexWrap: "wrap"
                },
                cards: {
                    maxWidth: 1280,
                    margin: [200, "auto"],
                    "& $flexGrid": {
                        margin: [0, -10]
                    }
                },
                card: {
                    flex: "0 0 calc(25% - 20px)",
                    margin: [0, 10, 15],
                    padding: [10, 20],
                    transition: "opacity .5s ease-out",
                    opacity: 1,
                    height: "auto",
                    pointerEvents: "all"
                }
            };
            return t[e.mediaInverse.sm] = {
                cards: {
                    margin: [100, 0],
                    paddingRight: 5,
                    "& $flexGrid": {
                        margin: [0, -10]
                    }
                },
                card: {
                    flex: "0 0 calc(50% - 80px)",
                    margin: [0, 40, 30]
                }
            },
            t
        }
          , P = r(1)
          , I = Object(d.b)(z)
          , T = function(e) {
            var t = e.partners
              , r = e.title
              , o = Object(c.useContext)(g.a).headerHeight
              , i = Object(c.useContext)(v.a).scrollbar
              , n = I({
                headerHeight: o,
                isMobile: null == i ? void 0 : i.scroll.isMobile
            })
              , l = Object(c.useState)(!0)
              , s = a()(l, 2);
            s[0],
            s[1],
            Object(_.a)().vw;
            return t.length > 0 && Object(P.jsxs)("div", {
                className: n.cards,
                children: [Object(P.jsx)("div", {
                    className: n.borderTitle,
                    children: r
                }), Object(P.jsx)("div", {
                    className: n.flexGrid,
                    children: t.map((function(e, t) {
                        return Object(P.jsx)("div", {
                            className: n.card,
                            children: Object(P.jsx)(C.a, {
                                children: Object(P.jsx)(y.a, {
                                    image: e.image.url,
                                    width: e.image.width,
                                    height: e.image.height,
                                    className: n.img,
                                    delayEnter: 0
                                })
                            })
                        }, e.id)
                    }
                    ))
                })]
            })
        }
          , B = r(672)
          , E = r(674)
          , H = r(130)
          , L = r(205)
          , M = r(19)
          , W = r(668)
          , $ = r(679)
          , F = function() {
            var e = Object(c.useRef)({
                color1: "#40437a",
                color2: "#413b6b"
            })
              , t = Object(c.useRef)()
              , r = Object(c.useMemo)((function() {
                return {
                    transparent: !0,
                    uniforms: {
                        uTime: {
                            value: 0
                        },
                        uAlpha: {
                            value: .12
                        },
                        uColor1: {
                            value: new W.Color(e.current.color1).convertSRGBToLinear()
                        },
                        uColor2: {
                            value: new W.Color(e.current.color2).convertSRGBToLinear()
                        }
                    },
                    vertexShader: "\n      varying vec2 vUv;\n      void main() {\n        vUv = uv;\n        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n        gl_Position = projectionMatrix * mvPosition;\n      }\n      ",
                    fragmentShader: "\n      varying vec2 vUv;\n      uniform vec3 uColor1;\n      uniform vec3 uColor2;\n      uniform float uAlpha;\n\n      void main() {\n        vec3 color = mix(uColor1, uColor2, vUv.y);\n        gl_FragColor = vec4(color, uAlpha);\n      }\n      "
                }
            }
            ), []);
            return Object(h.c)((function() {
                t.current.rotation.z += .003
            }
            )),
            Object(P.jsxs)(P.Fragment, {
                children: [Object(P.jsxs)("mesh", {
                    position: [3, 0, 0],
                    scale: [1, 1, 1],
                    ref: t,
                    children: [Object(P.jsx)("circleGeometry", {
                        args: [3, 8]
                    }), Object(P.jsx)("shaderMaterial", {
                        attach: "material",
                        args: [r]
                    })]
                }), Object(P.jsx)($.a, {})]
            })
        }
          , G = r(76)
          , A = function(e) {
            var t = {
                root: {
                    color: e.colors[1],
                    position: "relative",
                    zIndex: 1,
                    display: "block",
                    paddingBottom: 50,
                    "&:hover": {
                        "& $img": {
                            "&:before": {
                                transformOrigin: "0 0%",
                                transform: "scaleY(1)"
                            }
                        },
                        "& $link": {
                            transition: "opacity .3s ease-in-out .3s",
                            opacity: 1
                        }
                    },
                    "&.big": {
                        paddingBottom: 0,
                        "& $name": {
                            fontSize: 55,
                            transform: "translateX(-30px)"
                        },
                        "& $surname": {
                            fontSize: 55,
                            transform: "translateX(30px)",
                            marginBottom: 10
                        },
                        "& $box": {
                            position: "relative",
                            zIndex: 2,
                            marginTop: -120
                        },
                        "& $role": {
                            marginBottom: 20
                        },
                        "& $link": {
                            opacity: 1,
                            backgroundColor: e.colors[1],
                            position: "static",
                            "& svg": {
                                fill: e.colors[0]
                            }
                        }
                    }
                },
                img: {
                    position: "relative",
                    zIndex: 1,
                    height: "0",
                    paddingBottom: "150%",
                    marginBottom: 15,
                    "& img": {
                        filter: "saturate(0)",
                        width: "100%",
                        opacity: .5
                    },
                    "&:before": {
                        content: '""',
                        position: "absolute",
                        zIndex: 2,
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "var(--color)",
                        mixBlendMode: "overlay",
                        transform: "scaleY(0)",
                        transformOrigin: "0 100%",
                        transition: "transform .65s ".concat(e.easings["power3.inOut"])
                    }
                },
                box: {},
                name: {
                    color: e.colors[1],
                    fontFamily: e.fonts[1],
                    fontSize: 22,
                    marginBottom: 2
                },
                surname: {
                    color: e.colors[1],
                    fontFamily: e.fonts[1],
                    fontSize: 22,
                    marginBottom: 2
                },
                role: {
                    color: e.colors[1],
                    fontFamily: e.fonts[0],
                    fontSize: 19,
                    marginBottom: 10,
                    opacity: .45
                },
                link: {
                    cursor: "pointer",
                    position: "absolute",
                    opacity: 0,
                    left: 0,
                    bottom: 0,
                    background: "transparent",
                    border: "1px solid ".concat(e.getRgba(e.colors[1], .45)),
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    transition: "opacity .3s ease-in-out",
                    "& svg": {
                        fill: e.colors[1],
                        width: 6,
                        height: 9,
                        transition: "fill .3s ease-in-out"
                    }
                }
            };
            return t[e.mediaInverse.sm] = {
                root: {
                    "&.big": {
                        "& $box": {
                            position: "relative",
                            zIndex: 2,
                            marginTop: -45
                        },
                        "& $name": {
                            fontSize: 26,
                            transform: "none"
                        },
                        "& $surname": {
                            fontSize: 26,
                            transform: "none"
                        }
                    }
                },
                name: {
                    fontSize: 20
                },
                role: {
                    fontSize: 16
                }
            },
            t
        }
          , D = Object(d.b)(A)
          , U = function(e) {
            var t = e.className
              , r = e.name
              , o = e.surname
              , n = e.jobRole
              , a = e.image
              , c = e.link
              , l = e.color
              , s = e.type
              , d = void 0 === s ? "small" : s
              , u = D(A);
            return Object(P.jsx)(G.a, {
                to: c,
                className: j()(i()(i()(i()({}, u.root, !0), t, t), d, !0)),
                style: {
                    "--color": "" !== l ? l : "#f5a94f"
                },
                children: Object(P.jsxs)(C.a, {
                    children: [Object(P.jsx)(y.a, {
                        image: a.url,
                        width: a.width,
                        height: a.height,
                        className: u.img,
                        delayEnter: 0
                    }), Object(P.jsxs)(C.a, {
                        className: u.box,
                        children: [Object(P.jsx)(w.a, {
                            className: u.name,
                            value: "small" === d ? "".concat(r, " ").concat(o) : r,
                            tag: "h3",
                            type: "lines",
                            stagger: .03,
                            duration: 1.3
                        }), Object(P.jsx)(w.a, {
                            className: u.surname,
                            value: "small" === d ? "" : o,
                            tag: "h3",
                            type: "lines",
                            stagger: .03,
                            duration: 1.3
                        }), Object(P.jsxs)(N.a, {
                            delay: .8,
                            children: [Object(P.jsx)("div", {
                                className: u.role,
                                children: n
                            }), Object(P.jsx)("button", {
                                to: c,
                                className: u.link,
                                children: Object(P.jsx)("svg", {
                                    children: Object(P.jsx)("use", {
                                        xlinkHref: "#ico-arrow"
                                    })
                                })
                            })]
                        })]
                    })]
                })
            })
        }
          , V = function(e) {
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
                    height: "calc(var(--vh))!important",
                    width: "100vw!important"
                },
                test: {
                    height: "400vh",
                    background: "linear-gradient(to bottom, blue, purple)",
                    opacity: .4
                },
                section: {
                    maxWidth: 1280,
                    margin: [200, "auto"]
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
                    }
                },
                colsText: {},
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
                heroWrapper: {
                    position: "relative",
                    zIndex: 1,
                    minHeight: "var(--vh)",
                    maxWidth: 1280,
                    margin: [0, "auto"]
                },
                heroParallax: {
                    position: "absolute",
                    zIndex: 0,
                    "& img": {
                        width: "100%",
                        overflow: "hidden",
                        opacity: .18,
                        borderRadius: "50%",
                        filter: "saturate(0)"
                    }
                },
                heroParallax1: {
                    width: 410,
                    height: 410,
                    left: "70%",
                    top: 50
                },
                heroParallax2: {
                    width: 520,
                    height: 520,
                    left: "20%",
                    top: 250
                },
                heroParallax3: {
                    width: 270,
                    height: 270,
                    left: "60%",
                    top: 700
                },
                bannerImage: {
                    margin: [100, "-5.5vw", 170, "-11vw"]
                },
                flexGrid: {
                    display: "flex",
                    flexWrap: "wrap"
                },
                mainCards: {
                    maxWidth: 1280,
                    margin: [200, "auto"],
                    "& $flexGrid": {
                        margin: [0, -35]
                    }
                },
                bigCard: {
                    flex: "0 0 calc(50% - 70px)",
                    margin: [0, 35, 35]
                },
                cards: {
                    maxWidth: 1280,
                    margin: [200, "auto"],
                    "& $flexGrid": {
                        margin: [0, -10]
                    }
                },
                miniCard: {
                    flex: "0 0 calc(25% - 20px)",
                    margin: [0, 10, 15],
                    transition: "opacity .5s ease-out",
                    opacity: 1,
                    height: "auto",
                    pointerEvents: "all"
                },
                hiddenCard: {
                    height: 0,
                    opacity: 0,
                    margin: 0,
                    padding: 0,
                    pointerEvents: "none"
                },
                viewMore: {
                    textAlign: "center",
                    "& button": {
                        extend: e.button,
                        cursor: "pointer"
                    }
                },
                borderTitle: {
                    flex: "1 0 100%",
                    textTransform: "uppercase",
                    fontSize: 14,
                    opacity: .45,
                    borderBottom: "1px solid ".concat(e.colors[1]),
                    paddingBottom: 10,
                    marginBottom: 35
                },
                badges: {
                    maxWidth: 1280,
                    margin: [100, "auto", 100]
                },
                badgesWrap: {
                    margin: [0, -10],
                    display: "flex",
                    flexWrap: "wrap"
                },
                badge: {
                    flex: "0 0 calc(33.333% - 20px)",
                    margin: [20, 10]
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
                },
                badgesWrap: {
                    display: "block"
                },
                badge: {
                    display: "block",
                    marginBottom: 30
                }
            },
            t[e.mediaInverse.sm] = {
                wrapper: {
                    paddingLeft: 30,
                    paddingRight: 30
                },
                heroParallax1: {
                    width: "40vw",
                    height: "40vw",
                    left: "60%",
                    top: 0
                },
                heroParallax2: {
                    width: "60vw",
                    height: "60vw",
                    left: "5%",
                    top: "35%"
                },
                heroParallax3: {
                    width: "25vw",
                    height: "25vw",
                    left: "50%",
                    top: "90%"
                },
                mainCards: {
                    margin: [100, 0],
                    paddingRight: 5,
                    "& $flexGrid": {
                        margin: [0, -10]
                    }
                },
                bigCard: {
                    flex: "0 0 calc(50% - 20px)",
                    margin: [0, 10, 30]
                },
                heroWrapper: {
                    minHeight: 500
                },
                canvas: {
                    height: "calc(var(--vh) + 115px)!important"
                },
                cards: {
                    margin: [100, 0],
                    paddingRight: 5,
                    "& $flexGrid": {
                        margin: [0, -10]
                    }
                },
                miniCard: {
                    flex: "0 0 calc(50% - 20px)"
                },
                section: {
                    margin: [100, 0]
                },
                bannerImage: {
                    margin: [100, 0, 170]
                }
            },
            t["@media (max-width: 375px)"] = {
                mainCards: {
                    "& $flexGrid": {
                        margin: [0, 0]
                    }
                },
                bigCard: {
                    flex: "0 0 100%",
                    margin: [0, 0, 30]
                }
            },
            t
        }
          , X = Object(d.b)(V)
          , Y = function(e) {
            var t = e.persons
              , r = e.title
              , o = e.main
              , n = Object(c.useContext)(g.a).headerHeight
              , l = Object(c.useContext)(v.a).scrollbar
              , s = X({
                headerHeight: n,
                isMobile: null == l ? void 0 : l.scroll.isMobile
            })
              , d = Object(c.useState)(!0)
              , u = a()(d, 2)
              , f = u[0]
              , m = u[1]
              , b = t.sort((function(e, t) {
                var r, o;
                return (null === (r = e.acf) || void 0 === r ? void 0 : r.surname) > (null === (o = t.acf) || void 0 === o ? void 0 : o.surname) ? 1 : -1
            }
            ))
              , h = Object(_.a)().vw
              , p = Object(c.useMemo)((function() {
                return h < 768 ? 4 : 16
            }
            ), [h]);
            return b.length > 0 && Object(P.jsxs)("div", {
                className: !0 === o ? s.mainCards : s.cards,
                children: [Object(P.jsx)("div", {
                    className: s.borderTitle,
                    children: r
                }), Object(P.jsx)("div", {
                    className: s.flexGrid,
                    children: b.map((function(e, t) {
                        var r, n, a, c, l;
                        return Object(P.jsx)(U, {
                            className: j()(i()(i()(i()({}, s.bigCard, o), s.miniCard, !o), s.hiddenCard, t >= p && f)),
                            name: null === (r = e.acf) || void 0 === r ? void 0 : r.name,
                            surname: null === (n = e.acf) || void 0 === n ? void 0 : n.surname,
                            jobRole: null === (a = e.acf) || void 0 === a ? void 0 : a.role,
                            image: null === (c = e.acf) || void 0 === c ? void 0 : c.image,
                            color: null === (l = e.acf) || void 0 === l ? void 0 : l.color,
                            link: e.link
                        }, e.id)
                    }
                    ))
                }), f && b.length > p && Object(P.jsx)("div", {
                    className: s.viewMore,
                    children: Object(P.jsx)("button", {
                        onClick: function() {
                            return m(!1)
                        },
                        children: "View more"
                    })
                })]
            })
        }
          , J = Object(d.b)(V);
        t.default = function() {
            var e = Object(c.useContext)(g.a)
              , t = e.setPageAnimationReady
              , r = e.pageAnimationReady
              , o = e.headerHeight
              , n = Object(c.useContext)(b.a)
              , d = n.setReady
              , f = n.setSiteLoaded
              , p = Object(c.useContext)(v.a)
              , _ = p.scrollbar
              , z = p.scroll
              , I = J({
                headerHeight: o,
                isMobile: null == _ ? void 0 : _.scroll.isMobile
            })
              , W = Object(c.useState)(!1)
              , $ = a()(W, 2)
              , G = $[0]
              , A = $[1]
              , D = Object(s.g)()
              , U = Object(u.c)()
              , V = Object(c.useRef)(new m.a.LoadQueue)
              , X = Object(c.useRef)(Object(M.getSlug)(D.pathname))
              , Q = Object(c.useRef)()
              , q = Object(c.useState)(!1)
              , K = a()(q, 2)
              , Z = K[0]
              , ee = K[1]
              , te = Object(l.f)((function(e) {
                var t;
                return {
                    page: e.content.pages[X.current] || {},
                    people: (null === (t = e.content.cpt) || void 0 === t ? void 0 : t._cty_people) || []
                }
            }
            ), l.d)
              , re = te.page
              , oe = te.people
              , ie = Object(l.e)()
              , ne = Object(c.useCallback)((function(e, t) {
                return ie(H.c(e, t))
            }
            ), [ie])
              , ae = function() {
                d(!0),
                f(!0),
                A(!0),
                t(!0)
            };
            Object(c.useEffect)((function() {
                var e, t;
                Object.keys(re).length > 0 && oe.length && (V.current.on("complete", ae),
                null !== (e = re.featured_image) && void 0 !== e && e.src ? V.current.loadFile({
                    src: null === (t = re.featured_image) || void 0 === t ? void 0 : t.src
                }) : ae())
            }
            ), [re, oe]);
            var ce = function() {
                var e;
                e = X.current,
                0 === Object.keys(re).length && ne(e, !0)
            };
            Object(c.useEffect)((function() {
                G || ce()
            }
            ), []);
            Object(c.useEffect)((function() {
                Z && setTimeout((function() {
                    ee(!1)
                }
                ), 2e3)
            }
            ), [Z]);
            var le, se, de, ue, fe, me, ge, be, ve, he, pe, je, xe, Oe, ye, we, Ne, Ce, Se, ke, Re, _e, ze, Pe, Ie, Te, Be, Ee, He, Le, Me = function() {
                var e, t, r;
                if (null !== (e = re.acf) && void 0 !== e && e.hero.title)
                    return Object(P.jsxs)("div", {
                        className: I.section,
                        children: [Object(P.jsx)(C.a, {
                            children: Object(P.jsx)(w.a, {
                                className: I.sectionTitle,
                                value: Object(L.removeParagraph)(null === (t = re.acf) || void 0 === t ? void 0 : t.hero.title),
                                tag: "h2",
                                type: "lines",
                                lineHeight: 1.2,
                                duration: 1.3
                            })
                        }), Object(P.jsx)(C.a, {
                            children: Object(P.jsx)(N.a, {
                                children: Object(P.jsx)("div", {
                                    className: j()(i()(i()({}, I.sectionText, !0), I.colsText, !0)),
                                    duration: 1.2,
                                    dangerouslySetInnerHTML: {
                                        __html: null === (r = re.acf) || void 0 === r ? void 0 : r.hero.text
                                    }
                                })
                            })
                        })]
                    })
            }, We = function() {
                var e, t, r;
                if (null !== (e = re.acf) && void 0 !== e && e.body?.title)
                    return Object(P.jsxs)("div", {
                        className: j()(i()(i()({}, I.section, !0), I.section2, !0)),
                        children: [Object(P.jsx)(C.a, {
                            children: Object(P.jsx)(w.a, {
                                className: I.sectionTitle,
                                value: Object(L.removeParagraph)(null === (t = re.acf) || void 0 === t ? void 0 : t.body?.title),
                                tag: "h2",
                                type: "lines",
                                lineHeight: 1.2,
                                duration: 1.3
                            })
                        }), Object(P.jsx)(C.a, {
                            children: Object(P.jsx)(N.a, {
                                children: Object(P.jsx)("div", {
                                    className: j()(i()({}, I.sectionText, !0)),
                                    duration: 1.2,
                                    dangerouslySetInnerHTML: {
                                        __html: null === (r = re.acf) || void 0 === r ? void 0 : r.body?.text
                                    }
                                })
                            })
                        })]
                    })
            };
            return G && Object(P.jsxs)(P.Fragment, {
                children: [Object(P.jsxs)(B.a, {
                    init: G,
                    className: j()(i()(i()({
                        page: !0,
                        pageAbout: !0
                    }, I.root, !0), I.isMobile, z.isMobile || z.isTablet)),
                    ref: Q,
                    children: [G && Object(P.jsx)(E.a, {
                        title: re.title.rendered,
                        meta: re.yoast_meta,
                        schema: re.yoast_json_ld
                    }), G && Object(P.jsx)("div", {
                        className: I.page,
                        children: Object(P.jsxs)("div", {
                            className: I.wrapper,
                            children: [Object(P.jsxs)("div", {
                                className: I.heroWrapper,
                                children: [Object(P.jsx)(S.a, {
                                    pageAnimationReady: r,
                                    className: I.hero,
                                    title: re.title.rendered,
                                    payoff: null === (Ce = re.acf) || void 0 === Ce ? void 0 : Ce.hero.payoff
                                }), (null === (Se = re.acf) || void 0 === Se ? void 0 : Se.hero.image_1) && Object(P.jsx)(C.a, {
                                    className: j()(i()(i()({}, I.heroParallax, !0), I.heroParallax1, !0)),
                                    "data-scroll": !0,
                                    "data-scroll-speed": 1,
                                    children: Object(P.jsx)(y.a, {
                                        image: null === (ke = re.acf) || void 0 === ke ? void 0 : ke.hero.image_1.sizes.large,
                                        width: null === (Re = re.acf) || void 0 === Re ? void 0 : Re.hero.image_1.width,
                                        height: null === (_e = re.acf) || void 0 === _e ? void 0 : _e.hero.image_1.height,
                                        label: re.title.rendered,
                                        visible: r
                                    })
                                }), (null === (ze = re.acf) || void 0 === ze ? void 0 : ze.hero.image_2) && Object(P.jsx)(C.a, {
                                    className: j()(i()(i()({}, I.heroParallax, !0), I.heroParallax2, !0)),
                                    "data-scroll": !0,
                                    "data-scroll-speed": 1,
                                    children: Object(P.jsx)(y.a, {
                                        image: null === (Pe = re.acf) || void 0 === Pe ? void 0 : Pe.hero.image_2.sizes.large,
                                        width: null === (Ie = re.acf) || void 0 === Ie ? void 0 : Ie.hero.image_2.width,
                                        height: null === (Te = re.acf) || void 0 === Te ? void 0 : Te.hero.image_2.height,
                                        label: re.title.rendered,
                                        visible: r
                                    })
                                }), (null === (Be = re.acf) || void 0 === Be ? void 0 : Be.hero.image_3) && Object(P.jsx)(C.a, {
                                    className: j()(i()(i()({}, I.heroParallax, !0), I.heroParallax3, !0)),
                                    "data-scroll": !0,
                                    "data-scroll-speed": 2,
                                    children: Object(P.jsx)(y.a, {
                                        image: null === (Ee = re.acf) || void 0 === Ee ? void 0 : Ee.hero.image_3.sizes.large,
                                        width: null === (He = re.acf) || void 0 === He ? void 0 : He.hero.image_3.width,
                                        height: null === (Le = re.acf) || void 0 === Le ? void 0 : Le.hero.image_3.height,
                                        label: re.title.rendered,
                                        visible: r
                                    })
                                })]
                            }), Me(), Object(P.jsx)(Y, {
                                persons: oe.filter((function(e) {
                                    return e
                                }
                                )).filter((function(e) {
                                    var t;
                                    return -1 !== (null === (t = e.acf) || void 0 === t ? void 0 : t.board.indexOf("leadership"))
                                }
                                )),
                                title: null === (le = re.acf) || void 0 === le ? void 0 : le.body?.leadership
                            }), Object(P.jsx)(Y, {
                                persons: oe.filter((function(e) {
                                    return e
                                }
                                )).filter((function(e) {
                                    var t;
                                    return -1 !== (null === (t = e.acf) || void 0 === t ? void 0 : t.board.indexOf("team"))
                                }
                                )),
                                title: null === (se = re.acf) || void 0 === se ? void 0 : se.body?.team
                            }), Object(P.jsx)(Y, {
                                persons: oe.filter((function(e) {
                                    return e
                                }
                                )).filter((function(e) {
                                    var t;
                                    return -1 !== (null === (t = e.acf) || void 0 === t ? void 0 : t.board.indexOf("directors"))
                                }
                                )),
                                title: null === (de = re.acf) || void 0 === de ? void 0 : de.body?.main_board
                            }), Object(P.jsx)(Y, {
                                persons: oe.filter((function(e) {
                                    return e
                                }
                                )).filter((function(e) {
                                    var t;
                                    return -1 !== (null === (t = e.acf) || void 0 === t ? void 0 : t.board.indexOf("scientific_advisory"))
                                }
                                )),
                                title: null === (ue = re.acf) || void 0 === ue ? void 0 : ue.body?.scientific_advisory
                            }), Object(P.jsx)(Y, {
                                persons: oe.filter((function(e) {
                                    return e
                                }
                                )).filter((function(e) {
                                    var t;
                                    return -1 !== (null === (t = e.acf) || void 0 === t ? void 0 : t.board.indexOf("advisory"))
                                }
                                )),
                                title: null === (fe = re.acf) || void 0 === fe ? void 0 : fe.body?.advisory_board
                            }), (Ne = null === (ye = re.acf) || void 0 === ye ? void 0 : ye.body?.partners.map((function(e) {
                                return {
                                    label: e.label,
                                    image: e.logo
                                }
                            }
                            )),
                            Ne && Ne.length > 0 && Object(P.jsx)(T, {
                                partners: Ne,
                                title: null === (we = re.acf) || void 0 === we ? void 0 : we.body?.partners_title
                            })), We(), (null === (he = re.acf) || void 0 === he ? void 0 : he.banner?.title) && Object(P.jsx)(O.a, {
                                className: I.bannerImage,
                                title: null === (pe = re.acf) || void 0 === pe ? void 0 : pe.banner?.title,
                                text: null === (je = re.acf) || void 0 === je ? void 0 : je.banner?.text,
                                link: null === (xe = re.acf) || void 0 === xe ? void 0 : xe.banner?.link,
                                image: null === (Oe = re.acf) || void 0 === Oe ? void 0 : Oe.banner?.image
                            }), (null === (me = re.acf) || void 0 === me || null === (ge = me.related) || void 0 === ge ? void 0 : ge.related.length) && Object(P.jsx)("div", {
                                className: I.badges,
                                children: Object(P.jsx)("div", {
                                    className: I.badgesWrap,
                                    children: null === (be = re.acf) || void 0 === be || null === (ve = be.related) || void 0 === ve ? void 0 : ve.related.map((function(e, t) {
                                        var r;
                                        return Object(P.jsx)(R.a, {
                                            className: I.badge,
                                            title: e.title.rendered,
                                            image: null === (r = e.featured_image) || void 0 === r ? void 0 : r.src,
                                            link: e.link
                                        }, t.toString())
                                    }
                                    ))
                                })
                            }), Object(P.jsx)(k.a, {})]
                        })
                    })]
                }), Object(P.jsx)(x.a, {
                    color: U.colors[3]
                }), Object(P.jsx)(h.a, {
                    className: I.canvas,
                    dpr: [1, 1.5],
                    camera: {
                        position: [0, 0, 7],
                        fov: 30,
                        far: 50
                    },
                    children: Object(P.jsx)(F, {})
                })]
            })
        }
    }
}]);
//# sourceMappingURL=about.edd7.js.map

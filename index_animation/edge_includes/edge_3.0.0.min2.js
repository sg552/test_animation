window.AdobeEdge = window.AdobeEdge || {};

(function() {
    var c = window.AdobeEdge.framework, b = window.AdobeEdge;
    if (c) if ("zepto" === c) b.$_ = window.Zepto; else if ("jqmobi" === c) {
        var p = window.jq;
        b.$_ = p;
        if (!function() {
            var b = document.createElement("div");
            b.style["background-color"] = "rgb(255, 255, 255)";
            return "rgb(255, 255, 255)" === b.style.backgroundColor;
        }()) {
            var w = function(b) {
                return b.replace(/^-ms-/, "ms-").replace(/-([a-z]|[0-9])/gi, function(b, a) {
                    return String(a).toUpperCase();
                });
            };
            p.fn._css_ = p.fn.css;
            p.fn.css = function(b, c, a) {
                var r = b;
                if ($.isObject(b)) {
                    var r = {}, d;
                    for (d in b) b.hasOwnProperty(d) && (r[w(d)] = b[d]);
                } else r = w(b);
                return this._css_(r, c, a);
            };
        }
    } else b.$_ = jQuery;
    !c || "zepto" !== c && "jqmobi" !== c || ($.data = $.data || function(b, c, a) {
        c = "data-" + c;
        if ("undefined" !== typeof a) b[c] = a; else return b[c];
    });
})();

(function(c) {
    function b(b) {
        var a = z.style, c;
        for (i = 0; i < b.length; i++) if (c = b[i], void 0 !== a[c]) return !0;
        return !1;
    }
    window.AdobeEdge.jQuery = c;
    c.easing = c.easing || {
        linear: function(b, a, c, d) {
            return c + d * b;
        },
        swing: function(b, a, c, d) {
            return (-Math.cos(b * Math.PI) / 2 + .5) * d + c;
        }
    };
    c.easing.jswing = c.easing.swing;
    c.extend(c.easing, {
        def: "easeOutQuad",
        swing: function(b, a, r, d, g) {
            return c.easing[c.easing.def](b, a, r, d, g);
        },
        easeInQuad: function(b, a, c, d, g) {
            return d * (a /= g) * a + c;
        },
        easeOutQuad: function(b, a, c, d, g) {
            return -d * (a /= g) * (a - 2) + c;
        },
        easeInOutQuad: function(b, a, c, d, g) {
            return 1 > (a /= g / 2) ? d / 2 * a * a + c : -d / 2 * (--a * (a - 2) - 1) + c;
        },
        easeInCubic: function(b, a, c, d, g) {
            return d * (a /= g) * a * a + c;
        },
        easeOutCubic: function(b, a, c, d, g) {
            return d * ((a = a / g - 1) * a * a + 1) + c;
        },
        easeInOutCubic: function(b, a, c, d, g) {
            return 1 > (a /= g / 2) ? d / 2 * a * a * a + c : d / 2 * ((a -= 2) * a * a + 2) + c;
        },
        easeInQuart: function(b, a, c, d, g) {
            return d * (a /= g) * a * a * a + c;
        },
        easeOutQuart: function(b, a, c, d, g) {
            return -d * ((a = a / g - 1) * a * a * a - 1) + c;
        },
        easeInOutQuart: function(b, a, c, d, g) {
            return 1 > (a /= g / 2) ? d / 2 * a * a * a * a + c : -d / 2 * ((a -= 2) * a * a * a - 2) + c;
        },
        easeInQuint: function(b, a, c, d, g) {
            return d * (a /= g) * a * a * a * a + c;
        },
        easeOutQuint: function(b, a, c, d, g) {
            return d * ((a = a / g - 1) * a * a * a * a + 1) + c;
        },
        easeInOutQuint: function(b, a, c, d, g) {
            return 1 > (a /= g / 2) ? d / 2 * a * a * a * a * a + c : d / 2 * ((a -= 2) * a * a * a * a + 2) + c;
        },
        easeInSine: function(b, a, c, d, g) {
            return -d * Math.cos(a / g * (Math.PI / 2)) + d + c;
        },
        easeOutSine: function(b, a, c, d, g) {
            return d * Math.sin(a / g * (Math.PI / 2)) + c;
        },
        easeInOutSine: function(b, a, c, d, g) {
            return -d / 2 * (Math.cos(Math.PI * a / g) - 1) + c;
        },
        easeInExpo: function(b, a, c, d, g) {
            return 0 == a ? c : d * Math.pow(2, 10 * (a / g - 1)) + c;
        },
        easeOutExpo: function(c, a, b, d, g) {
            return a == g ? b + d : d * (-Math.pow(2, -10 * a / g) + 1) + b;
        },
        easeInOutExpo: function(b, a, c, d, g) {
            return 0 == a ? c : a == g ? c + d : 1 > (a /= g / 2) ? d / 2 * Math.pow(2, 10 * (a - 1)) + c : d / 2 * (-Math.pow(2, -10 * --a) + 2) + c;
        },
        easeInCirc: function(c, a, b, d, g) {
            return -d * (Math.sqrt(1 - (a /= g) * a) - 1) + b;
        },
        easeOutCirc: function(c, a, b, d, g) {
            return d * Math.sqrt(1 - (a = a / g - 1) * a) + b;
        },
        easeInOutCirc: function(c, a, b, d, g) {
            return 1 > (a /= g / 2) ? -d / 2 * (Math.sqrt(1 - a * a) - 1) + b : d / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b;
        },
        easeInElastic: function(b, a, c, d, g) {
            b = 1.70158;
            var n = 0, m = d;
            if (0 == a) return c;
            if (1 == (a /= g)) return c + d;
            n || (n = .3 * g);
            m < Math.abs(d) ? (m = d, b = n / 4) : b = n / (2 * Math.PI) * Math.asin(d / m);
            return -(m * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * g - b) * Math.PI / n)) + c;
        },
        easeOutElastic: function(b, a, c, d, g) {
            b = 1.70158;
            var n = 0, m = d;
            if (0 == a) return c;
            if (1 == (a /= g)) return c + d;
            n || (n = .3 * g);
            m < Math.abs(d) ? (m = d, b = n / 4) : b = n / (2 * Math.PI) * Math.asin(d / m);
            return m * Math.pow(2, -10 * a) * Math.sin(2 * (a * g - b) * Math.PI / n) + d + c;
        },
        easeInOutElastic: function(b, a, c, d, g) {
            b = 1.70158;
            var n = 0, m = d;
            if (0 == a) return c;
            if (2 == (a /= g / 2)) return c + d;
            n || (n = .3 * g * 1.5);
            m < Math.abs(d) ? (m = d, b = n / 4) : b = n / (2 * Math.PI) * Math.asin(d / m);
            return 1 > a ? -.5 * m * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * g - b) * Math.PI / n) + c : m * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a * g - b) * Math.PI / n) * .5 + d + c;
        },
        easeInBack: function(b, a, c, d, g, n) {
            void 0 == n && (n = 1.70158);
            return d * (a /= g) * a * ((n + 1) * a - n) + c;
        },
        easeOutBack: function(b, a, c, d, g, n) {
            void 0 == n && (n = 1.70158);
            return d * ((a = a / g - 1) * a * ((n + 1) * a + n) + 1) + c;
        },
        easeInOutBack: function(b, a, c, d, g, n) {
            void 0 == n && (n = 1.70158);
            return 1 > (a /= g / 2) ? d / 2 * a * a * (((n *= 1.525) + 1) * a - n) + c : d / 2 * ((a -= 2) * a * (((n *= 1.525) + 1) * a + n) + 2) + c;
        },
        easeInBounce: function(b, a, r, d, g) {
            return d - c.easing.easeOutBounce(b, g - a, 0, d, g) + r;
        },
        easeOutBounce: function(b, a, c, d, g) {
            return (a /= g) < 1 / 2.75 ? 7.5625 * d * a * a + c : a < 2 / 2.75 ? d * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + c : a < 2.5 / 2.75 ? d * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + c : d * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + c;
        },
        easeInOutBounce: function(b, a, r, d, g) {
            return a < g / 2 ? .5 * c.easing.easeInBounce(b, 2 * a, 0, d, g) + r : .5 * c.easing.easeOutBounce(b, 2 * a - g, 0, d, g) + .5 * d + r;
        }
    });
    window.AdobeEdge = window.AdobeEdge || {};
    "undefined" === typeof c.Edge && (c.Edge = window.AdobeEdge);
    var p = c.Edge;
    p.version = "3.0.0";
    p.cloneJSONObject = function(b) {
        var a, r;
        if (c.isArray(b)) {
            a = [];
            var d, g = b.length;
            for (d = 0; d < g; d++) r = b[d], a[d] = "object" === typeof r ? p.cloneJSONObject(r) : r;
        } else for (d in a = {}, b) "prototype" != d && (r = b[d], a[d] = "object" === typeof r ? p.cloneJSONObject(r) : r);
        return a;
    };
    p.Notifier = function() {
        this.observers = [];
        this.notificationLevel = this.suppressNotifications = 0;
    };
    c.extend(p.Notifier.prototype, {
        addObserver: function(b) {
            if (b) {
                for (var a = this.observers.length, c = 0; c < a; c++) if (this.observers[c].observer == b) return;
                this.observers[a] = {
                    observer: b
                };
            }
        },
        removeObserver: function(b) {
            if (b) for (var a = 0; a < this.observers.length; a++) if (this.observers[a].observer == b) if (0 === this.notificationLevel) {
                this.observers.splice(a, 1);
                break;
            } else this.observers[a].deleted = !0;
        },
        notifyObservers: function(b, a) {
            if (b && !this.suppressNotifications) {
                a || (a = {});
                a.methodName = b;
                this.notificationLevel++;
                var c;
                for (c = 0; c < this.observers.length; c++) {
                    var d = this.observers[c];
                    if (d = d && !d.deleted ? d.observer : void 0) if ("function" == typeof d) d(b, this, a); else if (d[b]) d[b](this, a);
                }
                this.notificationLevel--;
                if (0 === this.notificationLevel) for (c = this.observers.length - 1; 0 <= c; c--) this.observers[c].deleted && this.observers.splice(c, 1);
            }
        },
        enableNotifications: function() {
            0 > --this.suppressNotifications && (this.suppressNotifications = 0, p.Debug.reportError("Unbalanced enableNotifications() call!\n"));
        },
        disableNotifications: function() {
            ++this.suppressNotifications;
        }
    });
    p.trimString = function(b) {
        return b.replace(/^\s+|\s+$/g, "");
    };
    var w = {
        log: function(b) {},
        trace: function() {}
    };
    "undefined" == typeof window.console && (window.console = w);
    var z = document.createElement("div"), w = p.supported = p.supported || {};
    w.cssTransform = b([ "transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform" ]);
    w.cssTransform3d = b([ "perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective" ]);
    w.originIncludesBorders = function() {
        var b = document.createElement("div");
        null != document.body && document.body.appendChild(b);
        var a = c(b);
        a.css("left", "-9999px").css("width", "100px");
        a.css("transform-origin", "50% 50%").css("-webkit-transform-origin", "50% 50%").css("-moz-transform-origin", "50% 50%").css("-ms-transform-origin", "50% 50%").css("-o-transform-origin", "50% 50%");
        var r = a.css("transform-origin") || a.css("-webkit-transform-origin") || a.css("-moz-transform-origin") || a.css("-ms-transform-origin") || a.css("-o-transform-origin");
        a.css("border-width", "10px").css("border-style", "solid");
        a = a.css("transform-origin") || a.css("-webkit-transform-origin") || a.css("-moz-transform-origin") || a.css("-ms-transform-origin") || a.css("-o-transform-origin");
        null != b.parentNode && b.parentNode.removeChild(b);
        return r != a;
    }();
    w.audio = function() {
        var b = document.createElement("audio"), a = {};
        b.canPlayType && (a.m4a = !!b.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, ""), 
        a.aac = a.m4a, a.mp3 = !!b.canPlayType("audio/mpeg;").replace(/no/, ""), a.wav = !!b.canPlayType('audio/wav; codecs="1"').replace(/no/, ""), 
        a.ogg = !!b.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""), a.oga = a.ogg);
        return a;
    }();
    p.isSupported = b;
})(jQuery);

(function(c, b) {
    function p() {
        b.Notifier.call(this);
        this.animationID = "animID-" + p.nextID++;
    }
    function w(a, c, k) {
        b.Animation.call(this);
        "function" === typeof a ? this.handler = a : "string" === typeof a && (this.eventType = a);
        this.handlerContext = k;
        this.data = c;
        this.isTrigger = !0;
    }
    function z(a, m, k, f, d) {
        b.Notifier.call(this);
        this.animation = a;
        this.position = 0;
        this.duration = -1;
        this.opts = {};
        c.extend(this.opts, d);
        this.easing = "function" === typeof f ? f : f && c.easing[f] ? f : z.defaultEasing;
        void 0 !== m && (this.position = m);
        void 0 !== k && (this.duration = k);
        this.timeline = null;
        this.dScale = 1;
        this.dDuration = 0;
        this.done = !1;
    }
    function s(a) {
        this.variables = {};
        a && c.extend(this, a);
    }
    function a(a) {
        b.Animation.call(this);
        c.extend(this, b.Timeline.config);
        c.extend(this, a);
        this.startPosition = this.timerStart = this.timer = 0;
        this.currentPosition = -1;
        this.playing = !1;
        this.duration = 0;
        this.interval = 1e3 / this.fps;
        this.objects = [];
    }
    var r = {};
    p.nextID = 1;
    c.extend(p.prototype, b.Notifier.prototype, {
        constructor: p,
        _setup: function() {},
        _update: function(a, b, c) {},
        getDuration: function() {
            return 0;
        }
    });
    c.extend(w.prototype, p.prototype, {
        constructor: w,
        _update: function(a) {
            this.fired || (this.fired = !0, this.handler ? this.handler.call(this.handlerContext, a, this.data) : this.eventType && this.timeline && this.timeline.notifyObservers(this.eventType, {
                elapsed: a,
                data: this.data
            }));
        },
        setup: function(a, b, c) {
            var f = "undefined" === typeof b.executeTriggers || null === b.executeTriggers;
            this.fired = b.startingFromCurrent && f || !f && !b.executeTriggers ? "reverse" !== b.playDirection ? a.currentPosition >= c : a.currentPosition <= c : "reverse" !== b.playDirection ? a.currentPosition > c : a.currentPosition < c;
            this.timeline = a;
        }
    });
    z.defaultEasing = "linear";
    c.extend(z.prototype, b.Notifier.prototype, {
        constructor: z,
        _setup: function(a, b) {
            this.timeline = a;
            var c = this.duration, f = null;
            this.animation && this.animation.getDuration && (f = this.animation.getDuration());
            this.dScale = -1 !== c && 0 !== c ? f / c : 1;
            this.dDuration = -1 !== c ? c : f;
            this.done = !1;
            this.animation && this.animation.setup && this.animation.setup(a, b, this.position);
        },
        _update: function(a, b) {
            if (!this.done) {
                var k = a, f = this.dDuration;
                if (this.animation) {
                    var d;
                    0 === f ? d = 0 <= k ? 1 : 0 : (k >= f && (k = f), 0 >= k && (k = 0), d = c.easing[this.easing](k / f, k, 0, 1, f));
                    this.animation.update(k * this.dScale, d, b);
                }
                ("reverse" === b.playDirection ? 0 >= k : k >= f) && this.complete();
            }
        },
        complete: function() {
            this.done = !0;
            this.timeline && this.timeline._updateComplete(this);
        },
        getPosition: function() {
            return this.position;
        },
        setPosition: function(a) {
            this.position = a;
        },
        getDuration: function() {
            return -1 !== this.duration ? this.duration : this.animation && this.animation.getDuration ? this.animation.getDuration() : 0;
        },
        setDuration: function(a) {
            this.duration = 0 <= a ? a : -1;
        }
    });
    a.config = {
        dropFrames: !0,
        fps: 60,
        pauseThreshold: 250
    };
    var d = [], g = 0;
    a.tick = function() {
        var a = d.slice(0);
        d = [];
        var b = a.length, c = new Date().getTime();
        g = c;
        for (var f = 0; f < b; f++) {
            var B = a[f];
            "undefined" !== typeof B && B.call(null, c);
        }
        g = 0;
    };
    c.extend(a.prototype, p.prototype, {
        constructor: a,
        play: function(a) {
            this.notifyObservers("play");
            this.stop();
            this.sort();
            this.playing = !0;
            this.context && (this.context.playDirection = void 0, this.context.executeTriggers = void 0);
            var b = this.getContext(a);
            b.timeline = this;
            void 0 !== a && "number" === typeof a.startPos && this.currentPosition !== a.startPos ? (b.startingFromCurrent = !1, 
            this.currentPosition = a.startPos) : b.startingFromCurrent = !0;
            this._setup(this, b);
            this.timerStart = g || new Date().getTime();
            this.startPosition = this.currentPosition;
            var c = this, f;
            this.lastUpdateTime = this.timerStart;
            this.timerFunc = f = b.externalClock ? function(a) {
                c._handleTimer(b, f, a);
            } : function() {
                c._handleTimer(b, f);
            };
            b.firstUpdate = !0;
            this._handleTimer(b, f);
            b.firstUpdate = !1;
        },
        stop: function(a) {
            a && a.dontNotify || this.notifyObservers("stop");
            this.timer && clearTimeout(this.timer);
            this.timerStart = this.timer = 0;
            this.playing = !1;
            if (this.timerFunc) for (a = 0; a < d.length; a++) d[a] === this.timerFunc && (d[a] = void 0);
        },
        seek: function(a, b) {
            this.notifyObservers("seek");
            this.sort();
            this.stop();
            var c = this.currentPosition;
            "number" === typeof a && (this.currentPosition = a);
            var f = this.getContext(b);
            f.timeline = this;
            f.startingFromCurrent = c === this.currentPosition ? !0 : !1;
            this._setup(this, f);
            f.firstUpdate = !0;
            this._updateSeek(this.currentPosition, 1, f, c);
            f.firstUpdate = !1;
        },
        add: function(a, b, c, f, d) {
            a = new z(a, b, c, f, d);
            this.objects.push(a);
            this.sorted = !1;
        },
        sort: function() {
            if (!this.sorted) {
                var a = {
                    width: 1,
                    height: 2,
                    "-webkit-transform-origin": 3,
                    "transform-origin": 4,
                    "-moz-transform-origin": 5,
                    "-ms-transform-origin": 6,
                    left: 7,
                    top: 8,
                    bottom: 9,
                    right: 10,
                    motion: 11
                }, b, c, f;
                this.objects.sort(function(b, c) {
                    var k = b.animation, f = c.animation;
                    if (k || f) {
                        if (!k) return -1;
                        if (!f) return 1;
                    } else return b.position - c.position;
                    if (k.property || f.property) {
                        if (!k.property) return -1;
                        if (!f.property) return 1;
                    } else return b.position - c.position;
                    var d = a[k.property], e = a[f.property];
                    return k.sourceElements !== f.sourceElements ? k.sourceElements > f.sourceElements ? 1 : -1 : d && (!e || e < d) ? 1 : e && (!d || e > d) ? -1 : b.position - c.position;
                });
                for (b = 1; b < this.objects.length; b++) f = this.objects[b - 1], c = this.objects[b], 
                f.animation && c.animation && f.animation.property === c.animation.property && f.animation.sourceElements === c.animation.sourceElements ? (f.animation._nextObj = c.animation, 
                c.animation._prevObj = f.animation) : (f.animation && (f.animation._nextObj = null), 
                c.animation && (c.animation._prevObj = null));
                this.sorted = !0;
            }
        },
        getDuration: function() {
            for (var a = 0, b = this.objects, c = this.objects.length, f = Math.max, d = 0; d < c; d++) var g = b[d], a = f(a, g.position + g.getDuration());
            return a;
        },
        getCurrentPosition: function() {
            return this.currentPosition;
        },
        getContext: function(a) {
            this.context ? c.extend(this.context, a) : this.context = new s(a);
            return this.context;
        },
        _update: function(a, b, c) {
            this.sort();
            this.currentContext = c;
            this.notifyObservers("preUpdate", {
                elapsed: a,
                easingConst: b
            });
            var f = this.objects, d = this.triggers, g = f.length, l = d.length, x = "reverse" !== c.playDirection;
            this.currentDirection = x ? "forward" : "reverse";
            for (var h = !1, e = !0, q = c.executeTriggers, r = "undefined" === typeof q || "null" === typeof q, s, p, I = 0; I < l; I++) {
                var w = d[x ? I : l - I - 1], O = w.animation.isTrigger && !(c.startingFromCurrent && c.firstUpdate);
                if ((r && O || q || !c.firstUpdate) && !w.animation.fired && (x ? a >= w.position : a <= w.position + w.duration)) {
                    for (var O = this.currentPosition = w.position, v = this._getState(), h = 0; h < g; h++) s = f[x ? h : g - h - 1], 
                    (p = x && !s.opts.reverseOnly || !x && !s.opts.forwardOnly) && !s.animation.isTrigger && (x ? O >= s.position : O <= s.position + s.duration) && ((p = O - s.position) || s.duration || x || p--, 
                    s._update(p, c));
                    h = !0;
                    w.animation._update(O, c);
                    if (!this._equalState(v)) {
                        e = !1;
                        break;
                    }
                }
            }
            if (!h) for (h = 0; h < g; h++) s = f[x ? h : g - h - 1], (p = x && !s.opts.reverseOnly || !x && !s.opts.forwardOnly) && !s.animation.isTrigger && (x ? a >= s.position : a <= s.position + s.duration) && ((p = a - s.position) || s.duration || x || p--, 
            s._update(p, c));
            this.notifyObservers("postUpdate", {
                elapsed: a,
                easingConst: b,
                context: c
            });
            this.notifyObservers("update", {
                elapsed: a,
                easingConst: b
            });
            this.currentContext = null;
            return e;
        },
        _getState: function() {
            return {
                pos: this.currentPosition,
                dir: this.context.playDirection,
                playing: this.playing
            };
        },
        _equalState: function(a) {
            var b = !!a.playing, c = !!this.playing;
            return a.pos === this.currentPosition && a.dir === this.context.playDirection && b === c;
        },
        _handleTimer: function(a, b, c) {
            c = c || new Date().getTime();
            var f = c - this.timerStart;
            c - this.lastUpdateTime > this.pauseThreshold && (this.timerStart += c - this.lastUpdateTime + this.interval, 
            f = c - this.timerStart);
            var g = "reverse" === a.playDirection, g = this.startPosition + (g ? -f : f);
            if (this.playing) {
                this.currentPosition = g = Math.max(0, Math.min(g, this.duration));
                var u = this._update(g, 1, a);
                this.lastUpdateTime = c || new Date().getTime();
                ((g = "reverse" === a.playDirection) ? 0 < this.currentPosition : this.currentPosition < this.duration) ? u && this.playing && (a.externalClock ? d.push(b) : this.timer = setTimeout(b, this.interval)) : (this.stop(), 
                this.notifyObservers("complete", {
                    elapsed: f
                }));
            }
        },
        _setup: function(a, c) {
            b.Animation.prototype._setup.call(this, a);
            this.triggers = [];
            for (var k = this.objects, f = this.objects.length, d = 0; d < f; d++) {
                var g = k[d];
                g._done = !1;
                g._setup(this, c);
                g.animation.isTrigger && this.triggers.push(g);
            }
            this.duration = this.getDuration();
        },
        _updateComplete: function(a) {
            a._done = !0;
        }
    });
    a.prototype._updateSeek = a.prototype._update;
    b.Animation = p;
    b.TimelineObject = z;
    b.Timeline = a;
    b.Timeline.createTimeline = function(a) {
        return new b.Timeline(a);
    };
    b.Timeline.createTween = function(a) {
        var b = r[a];
        return b ? b.func.apply(b.context, Array.prototype.slice.call(arguments, 1)) : null;
    };
    b.Timeline.addTweenType = function(a, b, c) {
        r[a] = {
            func: b,
            context: c
        };
    };
    b.Timeline.createTrigger = function(a, b) {
        return new w(a, b, arguments[arguments.length - 1]);
    };
    b.Timeline.createTriggerFromData = function(a, c) {
        var k = c.trigger.slice(0, 2);
        k.push(a);
        return b.Timeline.createTrigger.apply(null, k);
    };
    b.Timeline.createTimelineFromData = function(a) {
        for (var c = jQuery.Edge.Timeline.createTimeline(), k = a.length, f = 0; f < k; f++) {
            var d = a[f], g = null;
            d.timeline ? g = b.Timeline.createTimelineFromData(d.timeline) : d.tween ? g = b.Timeline.createTween.apply(null, d.tween) : d.trigger && (g = b.Timeline.createTriggerFromData(this, d));
            g && c.add(g, d.position, d.duration, d.easing, d.opts);
        }
        return c;
    };
})(jQuery, window.AdobeEdge);

(function(c, b) {
    function p(s, a, r, d, g) {
        b.Animation.call(this);
        this.name = "prop tween";
        this.sourceElements = this.elements = a;
        this.deferElementResolution = !0;
        this.tweenType = w[s];
        this.updateTriggered = !1;
        this.property = r;
        this.fromValue = void 0;
        this.toValue = d;
        this.duration = 1e3;
        this.fromValues = this.tokens = this.valueTemplate = null;
        g && c.extend(this, g);
        this.deferElementResolution = this.deferElementResolution || "string" == typeof a && -1 != a.search(/\$\{[^\{\}]+\}/);
        this.deferElementResolution || (this.elements = this.resolveElementSelector(a));
        a = this.toValues = [];
        r = this.parseValue(d);
        c.isArray(d) || (d = [ d ]);
        r && 0 !== r.length || (r = d);
        s = r.length;
        for (d = 0; d < s; d++) {
            g = r[d];
            var n = {};
            "string" == typeof g ? (n.value = parseFloat(g.replace(/[a-zA-Z%]+$/, "")), n.unit = g.replace(/^-?[0-9]*(\.[0-9]+)?/, ""), 
            isNaN(n.value) && (n.value = g, n.unit = "")) : ("number" == typeof g && (g = parseFloat(g)), 
            n.value = g, n.unit = "");
            a.push(n);
        }
        if (this.fromValue) for (a = this.fromValues = [], (d = this.parseValue(this.fromValue)) && 0 < d.length ? this.fromValue = d : c.isArray(this.fromValue) || (this.fromValue = [ this.fromValue ]), 
        s = this.fromValue.length, d = 0; d < s; d++) g = this.fromValue[d], "string" == typeof g ? (a[d] = parseFloat(g.replace(/[a-zA-Z%]+$/, "")), 
        isNaN(a[d]) && (a[d] = g)) : ("number" == typeof g && (g = parseFloat(g)), a[d] = g);
        if (this.filter) for (c.isArray(this.filter) || (this.filter = [ this.filter ]), 
        a = this.filter, s = a.length, d = 0; d < s; d++) "string" == typeof a[d] && (a[d] = Math[a[d]]), 
        "function" != typeof a[d] && (a[d] = null);
        this.valueTemplate && (this.tokens = this.parseTemplate(this.valueTemplate));
    }
    var w = {
        style: 0,
        attribute: 1,
        property: 2
    }, z = "webkitAppearance" in document.documentElement.style;
    p.Token = function(b, a) {
        this.value = b;
        this.isPlaceholder = a;
    };
    p.parseVariableName = function(c) {
        var a = c;
        if ("string" == typeof c && -1 != c.search(/\$\{/)) {
            var a = c.search(/\$\{/), r = c.search(/\}/), a = c.slice(a + 2, r);
            "string" == typeof a && (a = b.trimString(a), a = a.replace(/[\"\']/g, ""));
        }
        return a;
    };
    p.substituteVariables = function(b, a) {
        for (var c = b; a && "string" == typeof c && -1 != c.search(/\$\{/); ) var d = p.parseVariableName(c), c = "undefined" == typeof a[d] ? void 0 : c.replace(/\$\{[^\}]*\}/, a[d]);
        return c;
    };
    c.extend(p.prototype, b.Animation.prototype, {
        constructor: p,
        setup: function(b, a) {
            this.updateTriggered = !1;
        },
        update: function(b, a, c) {
            var d = this.getElementSet(c);
            this.updateTriggered || (this.updateTriggered = !0, this.setupForAnimation(c));
            var g = this, n = this.tweenType, m = this.property, k;
            d.each(function() {
                var d = g.getPropertyTweenData(this, n, m);
                if (d.animationID == g.animationID) {
                    var B = d.fromValues, u = d.toValues, d = d.tokens, l = g.filter, x = B.length, h = [];
                    for (k = 0; k < x; k++) {
                        var e = B[k], q = u[k], e = "string" == typeof e ? 0 == a && 0 < g.duration ? e : q.value : e + (q.value - e) * a;
                        l && l[k] && (e = l[k](e, g, this, m, q.unit, b, c));
                        "number" === typeof e && 1 > e && (e = e.toFixed(6));
                        h.push(e + q.unit);
                    }
                    B = "";
                    B = g.formatValue(h);
                    if (!(0 < B.length)) if (d) {
                        B = d.length;
                        u = [];
                        for (k = 0; k < B; k++) l = d[k], l.isPlaceholder ? u.push(h[l.value]) : u.push(l.value);
                        B = u.join("");
                    } else B = h.join("");
                    g.setValue.call(this, n, m, B);
                    g.notifyObservers("onUpdate", {
                        elapsed: b,
                        easingConst: a,
                        property: m,
                        value: B,
                        element: this
                    });
                }
            });
        },
        setValue: function(b, a, r) {
            switch (b) {
              case 0:
                b = c(this);
                b.css(a, r);
                z && "background-size" === a && b.css("-webkit-background-size", r);
                "display" === a && (b.is("audio") || b.is("video")) && b.attr("controls", "none" === r ? null : "controls");
                break;

              case 1:
                this.setAttribute(a, r);
                break;

              case 2:
                this[a] = r;
            }
        },
        getDuration: function() {
            return this.duration;
        },
        resolveElementSelector: function(b) {
            b = p.substituteVariables(this.elements, b.variables);
            b || (b = this.elements);
            /^\${/.test(b) && (b = "bad_selector");
            return c(b);
        },
        getElementSet: function(b) {
            var a = this.animationID;
            b.animData || (b.animData = {});
            var c = b.animData[a];
            c || (c = b.animData[a] = this.deferElementResolution ? this.resolveElementSelector(b) : this.elements);
            return c;
        },
        getValue: function(b, a) {
            var r;
            switch (a) {
              case 0:
                r = c(this).css(b);
                break;

              case 1:
                r = this.getAttribute(b);
                break;

              case 2:
                r = this[b] + "";
            }
            return r;
        },
        setupForAnimation: function(b) {
            var a = this, c = this.tweenType, d = this.property;
            this.getElementSet(b).each(function() {
                var b = a.getPropertyTweenData(this, c, d);
                b.animationID = a.animationID;
                b.toValues = a.toValues;
                b.tokens = a.tokens;
                if (a.fromValues) b.fromValues = a.fromValues; else {
                    var n = a.getValue.call(this, d, c);
                    void 0 === n && (n = "0");
                    var m = a.parseValue(n);
                    if (m && 0 < m.length) for (var b = b.fromValues = [], n = m.length, k = 0; k < n; k++) {
                        var f = m[k];
                        b[k] = "string" == typeof f ? parseFloat(f.replace(/[a-zA-Z%]+$/, "")) : f;
                        isNaN(b[k]) && (b[k] = f);
                    } else b.fromValues = [ parseFloat(n.replace(/[a-zA-Z%]+$/, "")) ];
                }
            });
        },
        parseTemplate: function(b) {
            for (var a = b.length, c = [], d = 0, g = /@@[0-9]+@@/g, n = null; d < a && (n = g.exec(b)); ) n.index != d && c.push(new p.Token(b.substring(d, n.index), !1)), 
            c.push(new p.Token(parseInt(n[0].replace(/@@/g, ""), 10), !0)), d = g.lastIndex;
            d < a && c.push(new p.Token(b.substring(d, a), !1));
            return c;
        },
        parseValue: function(b) {
            return [];
        },
        formatValue: function(b) {
            return "";
        },
        getPropertyTweenData: function(b, a, r) {
            var d = c.data(b, "tweenData");
            d || (d = {}, c.data(b, "tweenData", d));
            (b = d[a]) || (b = d[a] = {});
            (a = b[r]) || (a = b[r] = {
                animationID: -1
            });
            return a;
        }
    });
    b.PropertyTween = p;
    b.Timeline.addTweenType("style", function(b, a, c, d) {
        return new p("style", b, a, c, d);
    });
    b.Timeline.addTweenType("attribute", function(b, a, c, d) {
        return new p("attribute", b, a, c, d);
    });
    b.Timeline.addTweenType("property", function(b, a, c, d) {
        return new p("property", b, a, c, d);
    });
})(jQuery, AdobeEdge);

(function(c, b, p) {
    function w(a, c, e, t, d) {
        b.PropertyTween.call(this, a, c, e, t, d);
        this.name = "transformTween";
    }
    function z(a, b, c) {
        if ("undefined" === typeof b) return c;
        if ("undefined" === typeof c) return b;
        var e = q(b), d = q(c);
        if (!e) return c;
        if (!d) return b;
        b = D(b).units;
        c = D(c).units;
        var k = b;
        b !== c && ("%" === b && (k = c, e = e / 100 * a), "%" === c && (d = d / 100 * a));
        return e + d + k;
    }
    function s(a, b, c) {
        var e;
        e = function() {
            var d, k, f;
            50 > new Date().getMilliseconds() - K[a[0]] ? setTimeout(e, 50) : (a.css("-webkit-transform-origin", "0% 0%"), 
            (f = a.data("eg-track-size")) || (f = {
                scaleX: 1,
                scaleY: 1,
                width: a.width(),
                height: a.height()
            }), d = a.width() / f.scaleX, k = a.height() / f.scaleY, a.css("width", d * b), 
            a.css("height", k * c), f.scaleX = b, f.scaleY = c, a.data("eg-track-size", f), 
            d = a.data(w.dataName), d || (d = w.buildTransformData(a), a.data(w.dataName, d)), 
            d.scaleX = 1 / b, d.scaleY = 1 / c, w.applyTransform(a, d, d.tween, {}));
        };
        K[a[0]] || setTimeout(e, 50);
        K[a[0]] = new Date().getMilliseconds();
    }
    function a(a, b) {
        for (var c = 0, e = a.length, d = 0; d < e; d++) c += a[d] * b[d];
        return c;
    }
    function r(a) {
        for (var b = 0, c = a.length, e = 0; e < c; e++) b += a[e] * a[e];
        return Math.sqrt(b);
    }
    function d(a) {
        var b = a.length, c = r(a), e = Array(b);
        0 === c && (c = 1);
        for (var d = 0; d < b; d++) e[d] = a[d] / c;
        return e;
    }
    function g(a, b, c, e) {
        var d = Array(3);
        d[0] = c * a[0] + e * b[0];
        d[1] = c * a[1] + e * b[1];
        d[2] = c * a[2] + e * b[2];
        return d;
    }
    function n(a) {
        a = a.toLowerCase();
        if ("string" !== typeof a) return 0;
        a = D(a);
        "deg" === a.units && (a.num *= h);
        return a.num;
    }
    var m, k, f = Math.asin, B = Math.sin, u = Math.cos, l = Math.tan, x = Math.atan2, h = Math.PI / 180, e = 180 / Math.PI;
    w.removeData = function(a) {
        var b = c.data(a, w.dataName);
        b && (b.timeline && m.unRegister(b.timeline, b.id), c(a).removeData(a, w.dataName));
    };
    var q = function(a) {
        var b = 0;
        "string" === typeof a ? b = parseFloat(a.replace(/[a-zA-Z%]+$/, "")) : "number" === typeof a && (b = a);
        return b;
    };
    w.getNumber = q;
    var D = function(a) {
        var b = {};
        b.num = parseFloat(a);
        b.units = String(a).match(/[a-zA-Z%]+$/);
        return b;
    };
    w.splitUnits = D;
    var F = function(a) {
        return 0 !== a && 1e-6 > Math.abs(a) ? a.toFixed(6) : a.toString();
    }, K = {};
    w.applyTransform = function(a, e, d, t) {
        a = c(a);
        "undefined" !== typeof window.AdobeEdge.applyCount && window.AdobeEdge.applyCount++;
        var k = "webkitAppearance" in document.documentElement.style, f, l = !0;
        t && (l = !t.dontForceZ);
        f = z(1, e.translateX, e.motionTranslateX);
        var m = z(1, e.translateY, e.motionTranslateY);
        t = z(1, e.rotateZ, e.motionRotateZ);
        var x = b.supported.cssTransform3d;
        k ? (f = "translate(" + f + "," + m + ")", m = q(e.translateZ), (0 !== m || l) && x && (f += " translateZ(" + e.translateZ + ")"), 
        f += " rotate(" + t + ") ", x && (m = q(e.rotateY), 0 !== m && (f += " rotateY(" + e.rotateY + ")"), 
        m = q(e.rotateX), 0 !== m && (f += " rotateX(" + e.rotateX + ")")), e.skewX && "0deg" !== e.skewX && (f += " skewX(" + e.skewX + ") "), 
        e.skewY && "0deg" !== e.skewY && (f += " skewY(" + e.skewY + ") "), f += " scale(" + e.scaleX + "," + e.scaleY + ") ", 
        m = q(e.scaleZ), 1 !== m && x && (f += " scaleZ(" + e.scaleZ + ")"), !window.edge_authoring_mode && x && a.css("-webkit-transform-style", "preserve-3d"), 
        a.css("-webkit-transform", f), d && d.observers.length && d.notifyObservers("onUpdate", {
            elapsed: 0,
            easingConst: 0,
            property: void 0,
            value: f,
            element: a[0]
        }), window.edge_authoring_mode || (1 < e.scaleX || 1 < e.scaleY) && a.hasClass("eg-svg-holder") && a.children(".eg-svg-image.eg-counter-scale").each(function(a, b) {
            var d = c(b);
            s(d, e.scaleX, e.scaleY);
        })) : (l = q(e.rotateY), x = q(e.rotateX), l = e.scaleX * u(h * l), x = e.scaleY * u(h * x), 
        f = "translate(" + f + "," + m + ")" + (" rotate(" + t + ")"), e.skewX && "0deg" !== e.skewX && (f += " skewX(" + e.skewX + ") "), 
        e.skewY && "0deg" !== e.skewY && (f += " skewY(" + e.skewY + ") "), f += " scale(" + l + "," + x + ")", 
        a.css("-moz-transform", f), a.css("-o-transform", f), a.css("-ms-transform", f), 
        a.css("msTransform", f), d && d.observers.length && d.notifyObservers("onUpdate", {
            elapsed: 0,
            easingConst: 0,
            property: void 0,
            value: f,
            element: a[0]
        }));
        a.css("transform", f);
    };
    w.dataName = "EdgeTransformData";
    var I = 1;
    c.extend(w.prototype, p.prototype, {
        constructor: w,
        setup: function(a, b) {
            this.updateTriggered = !1;
        },
        setValue: function(a, b, e) {
            c.data(this, w.dataName)[b] = e;
        },
        getValue: function(a, b) {
            c.data(this, w.dataName);
        },
        setupForAnimation: function(a) {
            var b = this;
            this.getElementSet(a).each(function() {
                var a = c.data(this, w.dataName);
                a || (a = b.buildTransformData(this), c.data(this, w.dataName, a));
            });
            p.prototype.setupForAnimation.call(this, a);
        },
        update: function(a, b, e) {
            p.prototype.update.call(this, a, b, e);
            a = this.getElementSet(e);
            var d = this, f = this.property, k = this.tweenType;
            a.each(function() {
                if (d.getPropertyTweenData(this, k, f).animationID === d.animationID) {
                    var a = c.data(this, w.dataName);
                    a.timeline = e.timeline;
                    a.tween = d;
                    m.Register(e.timeline, a.id, a);
                }
            });
        },
        buildTransformData: function(a) {
            var c = b.parseCanonicalTransform(a);
            if (null === c) {
                var c = {}, d = b.getTransformProps(a);
                c.translateX = "0px";
                c.translateY = "0px";
                c.translateZ = "0px";
                c.scaleX = 1;
                c.scaleY = 1;
                c.scaleZ = 1;
                c.rotateX = "0deg";
                c.rotateY = "0deg";
                c.rotateZ = "0deg";
                c.skewXZ = 0;
                c.skewXY = 0;
                c.skewYZ = 0;
                c.skewX = "0deg";
                c.skewY = "0deg";
                c.matrix && delete c.matrix;
                d && (c.translateX = F(d.translation[0]) + "px", c.translateY = F(d.translation[1]) + "px", 
                c.translateZ = F(d.translation[2]) + "px", c.scaleX = F(d.scale[0]), c.scaleY = F(d.scale[1]), 
                c.scaleZ = F(d.scale[2]), c.rotateX = F(d.rotation[0] * e) + "deg", c.rotateY = F(d.rotation[1] * e) + "deg", 
                c.rotateZ = F(d.rotation[2] * e) + "deg", c.skewXY = d.skew[0], c.skewXZ = d.skew[1], 
                c.skewYZ = d.skew[2], c.skewX = F(Math.atan(d.skew[0]) * e) + "deg");
            }
            null === c && (c = {});
            c.id = "transform_" + I++;
            c.element = a;
            c.onFinalUpdate = m.prototype._applyTransform;
            return c;
        },
        buildDefaultTransformData: function(a) {
            var b = {
                translateX: "0px",
                translateY: "0px",
                translateZ: "0px",
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
                rotateX: "0deg",
                rotateY: "0deg",
                rotateZ: "0deg",
                skewXZ: 0,
                skewXY: 0,
                skewYZ: 0,
                skewX: "0deg",
                skewY: "0deg"
            };
            b.id = "transform_" + I++;
            b.element = a;
            b.onFinalUpdate = m.prototype._applyTransform;
            return b;
        }
    });
    var L = {
        translate3d: 0,
        translate: 0,
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotate: 1,
        rotateZ: 1,
        rotateX: 1,
        rotateY: 1,
        rotate3d: 1,
        skew: 2,
        skewX: 2,
        skewY: 2,
        scale3d: 3,
        scale: 3,
        scaleX: 3,
        scaleY: 3,
        scaleZ: 3,
        perspective: 4
    };
    b.getTransformProps = function(a, c) {
        var e = "string" === typeof c ? c : b.getTransform(a), d = "webkitAppearance" in document.documentElement.style;
        if (e && "none" !== e && d) d = new b.CSSMatrix(), d.setMatrixValue(e), e = k.fromCSSMatrix(d); else if (e && "none" !== e) e = k.fromCSSMatrixString(e); else return;
        return b.decomposeTransform(e);
    };
    b.getTransform = function(a) {
        var b = "webkitAppearance" in document.documentElement.style;
        a = c(a);
        var e = a[0].style, d;
        b && ((d = a.get(0).style.webkitTransform) || (d = a.css("-webkit-transform")));
        if (d) return d;
        (d = a.get(0).style.msTransform) || (d = a.css("-ms-transform"));
        d || (d = a.css("msTransform"));
        d || (d = e.MozTransform);
        d || (d = e["-moz-transform"]);
        d || (d = a.css("-moz-transform"));
        d || (d = e.oTransform);
        d || (d = a.css("-o-transform"));
        d || (d = e.transform);
        d || (d = a.css("transform"));
        return d || "";
    };
    b.parseCanonicalTransform = function(a, c) {
        var e = ("string" === typeof c ? c : b.getTransform(a)).match(/(\w+\s*\([^\)]*\))/g);
        if (!e) return null;
        var d = {}, f = {
            translateX: "0px",
            translateY: "0px",
            translateZ: "0px",
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
            rotateX: "0deg",
            rotateY: "0deg",
            rotateZ: "0deg",
            skewXZ: 0,
            skewXY: 0,
            skewYZ: 0,
            skewX: "0deg",
            skewY: "0deg"
        }, k;
        for (k = 0; k < e.length; k++) {
            var l = e[k].match(/\w+/);
            if (d[l[0]] || 0 > L[l[0]]) return null;
            var m = e[k].match(/\([^\)]*\)/), m = m[0].replace(/[\(\)]/g, ""), m = m.split(",");
            switch (l[0]) {
              case "matrix":
                return null;

              case "translate3d":
                f.translateX = m[0];
                f.translateY = 1 < m.length ? m[1] : "0px";
                f.translateZ = 2 < m.length ? m[2] : "0px";
                d.translate3d = d.translate = d.translateX = d.translateY = d.translateZ = !0;
                break;

              case "translate":
                f.translateX = m[0];
                f.translateY = 1 < m.length ? m[1] : "0px";
                d.translate3d = d.translate = d.translateX = d.translateY = !0;
                break;

              case "translateX":
                f.translateX = m[0];
                d.translate3d = d.translate = d.translateX = !0;
                break;

              case "translateY":
                f.translateY = m[0];
                d.translate3d = d.translate = d.translateY = !0;
                break;

              case "translateZ":
                f.translateZ = m[0];
                d.translate3d = d.translateZ = !0;
                break;

              case "rotate3d":
                return d.rotate3d = d.rotate = d.rotateX = d.rotateY = d.rotateZ = !0, null;

              case "rotateX":
                f.rotateX = m[0];
                d.rotate3d = d.rotateX = !0;
                break;

              case "rotateY":
                f.rotateY = m[0];
                d.rotate3d = d.rotateY = !0;
                break;

              case "rotateZ":
              case "rotate":
                f.rotateZ = m[0];
                d.rotate3d = d.rotate = d.rotateZ = !0;
                break;

              case "skew":
                f.skewX = m[0];
                f.skewY = 1 < m.length ? m[1] : "0px";
                d.skew = d.skewX = d.skewY = !0;
                break;

              case "skewX":
                f.skewX = m[0];
                d.skew = d.skewX = !0;
                break;

              case "skewY":
                f.skewY = m[0];
                d.skew = d.skewY = !0;
                break;

              case "scale3d":
                f.scaleX = m[0];
                f.scaleY = 1 < m.length ? m[1] : 1;
                f.scaleZ = 2 < m.length ? m[2] : 1;
                d.scale3d = d.scale = d.scaleX = d.scaleY = d.scaleZ = !0;
                break;

              case "scale":
                f.scaleX = m[0];
                f.scaleY = 1 < m.length ? m[1] : m[0];
                d.scale = d.scaleX = d.scaleY = !0;
                break;

              case "scaleX":
                f.scaleX = m[0];
                d.scale3d = d.scale = d.scaleX = !0;
                break;

              case "scaleY":
                f.scaleY = m[0];
                d.scale3d = d.scale = d.scaleY = !0;
                break;

              case "scaleZ":
                f.scaleZ = m[0];
                d.scale3d = d.scaleZ = !0;
                break;

              case "perspective":
                d.perspective = !0;
            }
        }
        return f;
    };
    b.TransformTween = w;
    b.forceGPU = function(a) {
        var b;
        !window.edge_authoring_mode && (b = "webkitAppearance" in document.documentElement.style) && (b = c(a).css("-webkit-transform"), 
        b.match("/translateZ/") || b.match("/matrix3d/") || c(a).css("-webkit-transform", b + " translateZ(0)"));
    };
    m = function(a) {
        this.handlers = {};
        this.timeline = a;
    };
    m.Register = function(a, b, c) {
        var d = a.updateFinalizer;
        "undefined" === typeof d && (d = new m(a), a.updateFinalizer = d, a.addObserver(d));
        d.handlers[b] = c;
    };
    m.unRegister = function(a, b) {
        var c = a.updateFinalizer;
        "undefined" !== typeof c && delete c.handlers[b];
    };
    c.extend(m.prototype, {
        _finalizeUpdate: function(a, b) {
            var c = {
                elapsed: a,
                context: b
            }, d;
            for (d in this.handlers) if (this.handlers.hasOwnProperty(d)) {
                var e = this.handlers[d];
                if (e.onFinalUpdate) e.onFinalUpdate(c);
            }
            this.handlers = {};
        },
        postUpdate: function(a, b) {
            this._finalizeUpdate(b.elapsed, b.context);
        },
        complete: function(a) {
            this.timeline && this.timeline.removeObserver(this);
            this.timeline.updateFinalizer = void 0;
        },
        _applyTransform: function(a) {
            var b = c.data(this.element, w.dataName);
            b && a && w.applyTransform(this.element, b, b.tween, a.context);
        }
    });
    w.UpdateFinalizer = m;
    "undefined" === typeof CSSMatrix ? "undefined" !== typeof WebKitCSSMatrix ? b.CSSMatrix = WebKitCSSMatrix : "undefined" !== typeof MozCSSMatrix && (b.CSSMatrix = MozCSSMatrix) : b.CSSMatrix = CSSMatrix;
    k = function(a) {
        var b, c;
        if (a) for (b = 0; 4 > b; b++) for (this[b] = Array(4), c = 0; 4 > c; c++) this[b][c] = a[b][c]; else for (b = 0; 4 > b; b++) {
            this[b] = Array(4);
            for (c = 0; 4 > c; c++) this[b][c] = 0;
            this[b][b] = 1;
        }
        this.size = 4;
    };
    k.fromCSSMatrix = function(a) {
        var b = new k();
        b[0][0] = a.m11;
        b[0][1] = a.m12;
        b[0][2] = a.m13;
        b[0][3] = a.m14;
        b[1][0] = a.m21;
        b[1][1] = a.m22;
        b[1][2] = a.m23;
        b[1][3] = a.m24;
        b[2][0] = a.m31;
        b[2][1] = a.m32;
        b[2][2] = a.m33;
        b[2][3] = a.m34;
        b[3][0] = a.m41;
        b[3][1] = a.m42;
        b[3][2] = a.m43;
        b[3][3] = a.m44;
        return b;
    };
    k.fromCSSMatrixString = function(a) {
        var b = new k();
        a = a.match(/(\w+\s*\([^\)]*\))/g);
        if ("undefined" === typeof a || null === a) return b;
        var c;
        for (c = 0; c < a.length; c++) {
            var d = a[c].match(/\w+/), e = a[c].match(/\([^\)]*\)/), e = e[0].replace(/[\(\)]/g, ""), e = e.split(","), f, l;
            switch (d[0]) {
              case "matrix":
                d = new k();
                6 === e.length && (d[0][0] = parseFloat(e[0]), d[0][1] = parseFloat(e[1]), d[1][0] = parseFloat(e[2]), 
                d[1][1] = parseFloat(e[3]), d[3][0] = parseFloat(e[4]), d[3][1] = parseFloat(e[5]), 
                b.preMultiplyBy(d));
                break;

              case "translate3d":
                d = D(e[0]).num;
                f = 1 < e.length ? D(e[1]).num : 0;
                l = 2 < e.length ? D(e[2]).num : 0;
                b.translate3d(d, f, l);
                break;

              case "translate":
                d = D(e[0]).num;
                f = 1 < e.length ? D(e[1]).num : 0;
                b.translate3d(d, f, 0);
                break;

              case "translateX":
                e = D(e[0]).num;
                b.translate3d(e, 0, 0);
                break;

              case "translateY":
                e = D(e[0]).num;
                b.translate3d(0, e, 0);
                break;

              case "translateZ":
                e = D(e[0]).num;
                b.translate3d(0, 0, e);
                break;

              case "rotate3d":
                3 <= e.length && (d = D(e[0]).num, f = D(e[1]).num, l = D(e[2]).num, e = n(e[3]), 
                b.rotate3d(d, f, l, e, !0));
                break;

              case "rotateX":
                e = n(e[0]);
                b.rotateX(e);
                break;

              case "rotateY":
                e = n(e[0]);
                b.rotateY(e);
                break;

              case "rotateZ":
              case "rotate":
                e = n(e[0]);
                b.rotateZ(e);
                break;

              case "skew":
                d = n(e[0]);
                e = n(e[1]);
                b.skew(d, e);
                break;

              case "skewX":
                e = n(e[0]);
                b.skew(e, 0);
                break;

              case "skewY":
                e = n(e[0]);
                b.skew(0, e);
                break;

              case "scale3d":
                d = parseFloat(e[0]);
                f = 1 < e.length ? parseFloat(e[1]) : 1;
                e = 2 < e.length ? parseFloat(e[2]) : 1;
                b.scale(d, f, e);
                break;

              case "scale":
                d = parseFloat(e[0]);
                f = 1 < e.length ? parseFloat(e[1]) : 1;
                b.scale(d, f, 1);
                break;

              case "scaleX":
                e = parseFloat(e[0]);
                b.scale(e, 1, 1);
                break;

              case "scaleY":
                e = parseFloat(e[0]);
                b.scale(1, e, 1);
                break;

              case "scaleZ":
                e = parseFloat(e[0]);
                b.scale(1, 1, e);
                break;

              case "perspective":
                e = parseFloat(e[0]), b.perspective(e);
            }
        }
        return b;
    };
    c.extend(k.prototype, {
        identity: function() {
            for (var a = 0; 4 > a; a++) {
                this[a] = Array(4);
                for (var b = 0; 4 > b; b++) this[a][b] = 0;
                this[a][a] = 1;
            }
            return this;
        },
        determinant: function() {
            var a = this[0][0], b = this[0][1], c = this[0][2], e = this[0][3], d = this[1][0], f = this[1][1], k = this[1][2], l = this[1][3], m = this[2][0], h = this[2][1], q = this[2][2], x = this[2][3], g = this[3][0], n = this[3][1], B = this[3][2], u = this[3][3];
            return e * k * h * g - c * l * h * g - e * f * q * g + b * l * q * g + c * f * x * g - b * k * x * g - e * k * m * n + c * l * m * n + e * d * q * n - a * l * q * n - c * d * x * n + a * k * x * n + e * f * m * B - b * l * m * B - e * d * h * B + a * l * h * B + b * d * x * B - a * f * x * B - c * f * m * u + b * k * m * u + c * d * h * u - a * k * h * u - b * d * q * u + a * f * q * u;
        },
        normalizeTransform: function() {
            if (0 === this[3][3]) return !1;
            for (var a = 0; 4 > a; a++) for (var b = 0; 4 > b; b++) this[a][b] /= this[3][3];
            return !0;
        },
        transpose: function() {
            for (var a = new k(), b = 0; 4 > b; b++) for (var c = 0; 4 > c; c++) a[b][c] = this[c][b];
            return a;
        },
        toCSSMatrix: function() {
            var a = new b.CSSMatrix();
            a.m11 = this[0][0];
            a.m12 = this[0][1];
            a.m13 = this[0][2];
            a.m14 = this[0][3];
            a.m21 = this[1][0];
            a.m22 = this[1][1];
            a.m23 = this[1][2];
            a.m24 = this[1][3];
            a.m31 = this[2][0];
            a.m32 = this[2][1];
            a.m33 = this[2][2];
            a.m34 = this[2][3];
            a.m41 = this[3][0];
            a.m42 = this[3][1];
            a.m43 = this[3][2];
            a.m44 = this[3][3];
            return a;
        },
        _inverse: function() {
            return this;
        },
        inverse: function() {
            if (void 0 !== b.CSSMatrix) {
                var a = this.toCSSMatrix().inverse();
                return k.fromCSSMatrix(a);
            }
            return this._inverse();
        },
        rotate3d: function(a, c, e, d, f) {
            var k = new b.Matrix4x4();
            f || (d *= h);
            d && (f = Math.sqrt(a * a + c * c + e * e), 0 !== f && (a /= f, c /= f, e /= f, 
            f = B(d), d = u(d), k[0][0] = 1 + (1 - d) * (a * a - 1), k[1][0] = -e * f + (1 - d) * a * c, 
            k[2][0] = c * f + (1 - d) * a * e, k[3][0] = 0, k[0][1] = e * f + (1 - d) * a * c, 
            k[1][1] = 1 + (1 - d) * (c * c - 1), k[2][1] = -a * f + (1 - d) * c * e, k[3][1] = 0, 
            k[0][2] = -c * f + (1 - d) * a * e, k[1][2] = a * f + (1 - d) * c * e, k[2][2] = 1 + (1 - d) * (e * e - 1), 
            k[3][2] = 0, k[0][3] = 0, k[1][3] = 0, k[2][3] = 0, k[3][3] = 1));
            return this.preMultiplyBy(k);
        },
        rotateX: function(a) {
            return this.rotate3d(1, 0, 0, a);
        },
        rotateY: function(a) {
            return this.rotate3d(0, 1, 0, a);
        },
        rotateZ: function(a) {
            return this.rotate3d(0, 0, 1, a);
        },
        translate3d: function(a, c, e) {
            var d = new b.Matrix4x4();
            d[3][0] += a;
            d[3][1] += c;
            d[3][2] += e;
            return this.preMultiplyBy(d);
        },
        scale: function(a, c, e) {
            if (1 !== a || 1 !== c || 1 !== e) {
                var d = new b.Matrix4x4();
                d[0][0] = a;
                d[1][1] = c;
                d[2][2] = e;
                return this.preMultiplyBy(d);
            }
            return this;
        },
        skew: function(a, c, e) {
            e || (a *= h, c *= h);
            0 !== a && (e = new b.Matrix4x4(), e[1][0] = l(a), this.preMultiplyBy(e));
            0 !== c && (a = new b.Matrix4x4(), a[0][1] = l(c), this.preMultiplyBy(a));
            return this;
        },
        perspective: function(a) {
            if (0 !== a) {
                var c = new b.Matrix4x4();
                c[2][3] = 1 / a;
                this.preMultiplyBy(c);
            }
            return this;
        },
        skewByFactors: function(a, c, e) {
            a = new b.Matrix4x4();
            a[2][1] = e;
            this.preMultiplyBy(a);
            a.identity();
            a[2][0] = e;
            this.preMultiplyBy(a);
            a.identity();
            a[1][0] = e;
            this.preMultiplyBy(a);
            return this;
        },
        applyPerspective: function(a, c, e, d) {
            var f = new b.Matrix4x4();
            f[0][3] = a;
            f[1][3] = c;
            f[2][3] = e;
            f[3][3] = d;
            this.preMultiplyBy(f);
            return this;
        },
        preMultiplyBy: function(a) {
            var b = a[0][0], c = a[0][1], e = a[0][2], d = a[0][3], f = a[1][0], k = a[1][1], l = a[1][2], m = a[1][3], h = a[2][0], q = a[2][1], x = a[2][2], g = a[2][3], n = a[3][0], B = a[3][1], u = a[3][2];
            a = a[3][3];
            var r = this[0][0], p = this[0][1], s = this[0][2], D = this[0][3], w = this[1][0], I = this[1][1], z = this[1][2], F = this[1][3], K = this[2][0], L = this[2][1], Q = this[2][2], S = this[2][3], J = this[3][0], G = this[3][1], E = this[3][2], V = this[3][3];
            this[0][0] = b * r + c * w + e * K + d * J;
            this[0][1] = b * p + c * I + e * L + d * G;
            this[0][2] = b * s + c * z + e * Q + d * E;
            this[0][3] = b * D + c * F + e * S + d * V;
            this[1][0] = f * r + k * w + l * K + m * J;
            this[1][1] = f * p + k * I + l * L + m * G;
            this[1][2] = f * s + k * z + l * Q + m * E;
            this[1][3] = f * D + k * F + l * S + m * V;
            this[2][0] = h * r + q * w + x * K + g * J;
            this[2][1] = h * p + q * I + x * L + g * G;
            this[2][2] = h * s + q * z + x * Q + g * E;
            this[2][3] = h * D + q * F + x * S + g * V;
            this[3][0] = n * r + B * w + u * K + a * J;
            this[3][1] = n * p + B * I + u * L + a * G;
            this[3][2] = n * s + B * z + u * Q + a * E;
            this[3][3] = n * D + B * F + u * S + a * V;
            return this;
        }
    });
    b.Matrix4x4 = k;
    b.decomposeTransform = function(b) {
        var c = new k(b);
        if (!c.normalizeTransform()) return null;
        var e = new k(b);
        for (b = 0; 3 > b; b++) e[b][3] = 0;
        e[3][3] = 1;
        if (0 === e.determinant(e)) return window.edge_authoring_mode && window.alert("Bad perspective matrix"), 
        null;
        var l = Array(4);
        b = Array(4);
        if (0 !== c[0][3] || 0 !== c[1][3] || 0 !== c[2][3]) {
            l[0] = c[0][3];
            l[1] = c[1][3];
            l[2] = c[2][3];
            l[3] = c[3][3];
            b = e.inverse();
            if (!b) return !1;
            b = b.transpose().rightMultiply(l);
            c[0][3] = c[1][3] = c[2][3] = 0;
            c[3][3] = 1;
        } else b[0] = b[1] = b[2] = 0, b[3] = 1;
        e = Array(3);
        e[0] = c[3][0];
        c[3][0] = 0;
        e[1] = c[3][1];
        c[3][1] = 0;
        e[2] = c[3][2];
        c[3][2] = 0;
        l = Array(3);
        l[0] = Array(3);
        l[1] = Array(3);
        l[2] = Array(3);
        for (var m = 0; 3 > m; m++) l[m][0] = c[m][0], l[m][1] = c[m][1], l[m][2] = c[m][2];
        c = Array(3);
        c[0] = r(l[0]);
        l[0] = d(l[0]);
        m = Array(3);
        m[0] = a(l[0], l[1]);
        l[1] = g(l[1], l[0], 1, -m[0]);
        c[1] = r(l[1]);
        l[1] = d(l[1]);
        0 !== c[1] && (m[0] /= c[1]);
        m[1] = a(l[0], l[2]);
        l[2] = g(l[2], l[0], 1, -m[1]);
        m[2] = a(l[1], l[2]);
        l[2] = g(l[2], l[1], 1, -m[2]);
        c[2] = r(l[2]);
        0 !== c[2] && (l[2] = d(l[2]));
        0 !== c[2] && (m[1] /= c[2], m[2] /= c[2]);
        var h;
        h = l[1];
        var q = l[2], n = Array(3);
        3 !== h.length || 3 !== q.length ? h = null : (n[0] = h[1] * q[2] - h[2] * q[1], 
        n[1] = h[2] * q[0] - h[0] * q[2], n[2] = h[0] * q[1] - h[1] * q[0], h = n);
        if (0 > a(l[0], h)) for (h = 0; 3 > h; h++) c[h] *= -1, l[h][0] *= -1, l[h][1] *= -1, 
        l[h][2] *= -1;
        h = Array(3);
        h[1] = f(-l[0][2]);
        0 !== u(h[1]) ? (h[0] = x(l[1][2], l[2][2]), h[2] = x(l[0][1], l[0][0])) : (h[0] = x(-l[2][0], l[1][1]), 
        h[2] = 0);
        return {
            translation: e,
            rotation: h,
            scale: c,
            skew: m,
            perspective: b
        };
    };
    b.Timeline.addTweenType("transform", function(a, b, c, e) {
        return new w("transform", a, b, c, e);
    });
})(jQuery, AdobeEdge, AdobeEdge.PropertyTween);

(function(c, b, p) {
    function w() {
        if (!a) {
            var b = document.createElement("div"), b = s(b), c;
            b.css("background-color", "transparent");
            var f = b.css("background-color");
            b.css("background-color", "rgb(100, 100, 100)");
            c = b.css("background-color");
            r = c != f;
            b.css("background-color", "transparent");
            b.css("background-color", "hsl(100, 100%, 100%)");
            c = b.css("background-color");
            d = c != f;
            b.css("background-color", "transparent");
            b.css("background-color", "rgba(100, 100, 100,.5)");
            c = b.css("background-color");
            g = c != f;
            b.css("background-color", "transparent");
            b.css("background-color", "hsla(100, 100%, 100%, .5)");
            c = b.css("background-color");
            n = c != f;
            a = !0;
        }
    }
    function z(a, c, d, e, f) {
        b.PropertyTween.call(this, a, c, d, e, f);
        this.name = "colorTween";
        w();
    }
    var s = c, a = !1, r = !1, d = !1, g = !1, n = !1;
    s.extend(z.prototype, p.prototype, {
        constructor: z,
        getValue: function(a, b) {
            return s(this).css(a);
        },
        setValue: function(a, b, c) {
            s(this).css(b, c);
        },
        parseValue: function(a) {
            var c = b.parseColorValue(a);
            if (c && c.colorFunction && c.values) {
                a = c.values;
                var c = c.colorFunction, d = /hsl/gi;
                if (c.match(/rgb/gi)) if (this.animationColorSpace && "HSL" == this.animationColorSpace) c = {
                    r: a[0],
                    g: a[1],
                    b: a[2]
                }, (c = b.rgbToHSL(c)) ? 3 < a.length ? (a = a[3], a = [ c.h, c.s, c.l, a ]) : a = [ c.h, c.s, c.l ] : a = []; else if (!this.animationColorSpace) this.animationColorSpace = "RGB"; else {
                    if ("RGB" != this.animationColorSpace) return a;
                } else if (c.match(d)) if (this.animationColorSpace && "RGB" == this.animationColorSpace) c = {
                    h: a[0],
                    s: a[1],
                    l: a[2]
                }, (c = b.hslToRGB(c)) ? 3 < a.length ? (a = a[3], a = [ c.r, c.g, c.b, a ]) : a = [ c.r, c.g, c.b ] : a = []; else if (!this.animationColorSpace) this.animationColorSpace = "HSL"; else if ("HSL" != this.animationColorSpace) return a;
                3 == a.length && (a[3] = 1);
                return a;
            }
        },
        formatValue: function(a) {
            w();
            if (a) {
                var c;
                if ("HSL" == this.animationColorSpace && n) c = "hsl", a = 4 == a.length && n ? c + "a(" + a[0] + "," + a[1] + "%," + a[2] + "%," + a[3] + ")" : c + "(" + a[0] + "," + a[1] + "%," + a[2] + "%)"; else if (g) c = "rgb", 
                a = 4 == a.length && g ? c + "a(" + a[0] + "%," + a[1] + "%," + a[2] + "%," + a[3] + ")" : c + "(" + a[0] + "%," + a[1] + "%," + a[2] + "%)"; else {
                    c = a[0];
                    var d = a[1], e = a[2];
                    "HSL" == this.animationColorSpace && (a = b.hslToRGB({
                        h: a[0],
                        g: a[1],
                        b: a[2]
                    }), c = a.r, d = a.g, e = a.b);
                    a = "#" + (65536 * Math.floor(2.55 * c) + 256 * Math.floor(2.55 * d) + Math.floor(2.55 * e)).toString(16);
                }
                return a;
            }
        }
    });
    b.ColorTween = z;
    b.Color = {
        formatValue: z.prototype.formatValue,
        parseValue: z.prototype.parseValue
    };
    b.parseColorValue = function(a) {
        if (a) {
            var b = [], c, e, d = /^\s*#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])\s*$/;
            (e = /^\s*#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})\s*$/.exec(a)) ? (b = [ parseInt(e[1], 16) / 255 * 100, parseInt(e[2], 16) / 255 * 100, parseInt(e[3], 16) / 255 * 100 ], 
            c = "rgb") : (e = d.exec(a)) ? (b = [ parseInt(e[1] + e[1], 16) / 255 * 100, parseInt(e[2] + e[2], 16) / 255 * 100, parseInt(e[3] + e[3], 16) / 255 * 100 ], 
            c = "rgb") : "transparent" == a && (b = [ 0, 0, 0, 0 ], c = "rgb");
            c || (c = a.toString().match(/\w+/), s.isArray(c) ? c = c[0] : c || (c = ""), (e = a.toString().match(/\([^\)]*\)/)) && 0 < e.length && (e = e[0].replace(/[\(\)]/g, "")));
            a = /rgb/gi;
            d = /hsl/gi;
            if (0 === b.length) if (c.match(a)) if ((d = /^\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*(?:,\s*([0-9](?:\.[0-9]+)?)\s*)?$/.exec(e)) && 4 <= d.length) {
                for (a = 0; 3 > a; a++) b[a] = d[a + 1] / 255 * 100;
                4 < d.length && (d[4] || (d[4] = 1), b[3] = d[4]);
            } else {
                if ((e = /^\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*%\s*,\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*%\s*,\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*%\s*(?:,\s*([0-9](?:\.[0-9]+)?)\s*)?$/.exec(e)) && 4 <= e.length) for (5 <= e.length && (e.length = 5, 
                e[4] || (e[4] = 1)), a = 0; a < e.length - 1; a++) b[a] = e[a + 1];
            } else if (c.match(d) && (e = /^\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*,\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*%\s*,\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*%\s*(?:,\s*([0-9](?:\.[0-9]+)?)\s*)?$/.exec(e)) && 4 <= e.length) for (5 <= e.length && (e.length = 5, 
            e[4] || (e[4] = 1)), a = 0; a < e.length - 1; a++) b[a] = e[a + 1];
            if (b) for (a = 0; a < b.length; a++) b[a] = Math.round(1e4 * b[a]) / 1e4;
            return {
                colorFunction: c,
                values: b
            };
        }
    };
    var m = 1 / 3, k = 1 / 6, f = 2 / 3, B = function(a) {
        return 0 > a ? a + 1 : 1 < a ? a - 1 : a;
    }, u = function(a, b, c, e) {
        return e < k ? a + c * e : .5 > e ? b : e < f ? a + c * (f - e) : a;
    };
    b.hslToRGB = function(a) {
        if (null === a || 0 > a.s || 100 < a.s || 0 > a.l || 100 < a.l) return null;
        for (;360 < a.h; ) a.h -= 360;
        for (;0 > a.h; ) a.h = 360 + a.h;
        var b = {}, c = a.h / 360, e = a.s / 100;
        a = a.l / 100;
        if (0 === e) b.r = b.g = b.b = a; else {
            e = .5 >= a ? a * (1 + e) : a + e - a * e;
            a = 2 * a - e;
            var d = B(c + m), f = B(c), c = B(c - m), k = 6 * (e - a);
            b.r = u(a, e, k, d);
            b.g = u(a, e, k, f);
            b.b = u(a, e, k, c);
        }
        b.r = Math.min(100 * b.r, 100);
        b.g = Math.min(100 * b.g, 100);
        b.b = Math.min(100 * b.b, 100);
        b.r = Math.round(1e4 * b.r) / 1e4;
        b.g = Math.round(1e4 * b.g) / 1e4;
        b.b = Math.round(1e4 * b.b) / 1e4;
        return b;
    };
    b.rgbToHSL = function(a) {
        if (null === a || 0 > a.r || 100 < a.r || 0 > a.g || 100 < a.g || 0 > a.b || 100 < a.b) return null;
        var b = {
            h: 0,
            s: 0,
            l: 0
        }, c = a.r / 100, e = a.g / 100;
        a = a.b / 100;
        var d = Math.max(c, e, a), f = Math.min(c, e, a);
        b.l = (d + f) / 2;
        if (d > f && 0 < b.l) {
            var k = d - f;
            b.s = .5 >= b.l ? k / (d + f) : k / (2 - d - f);
            b.h = d == a ? 4 + (c - e) / k : d == e ? 2 + (a - c) / k : (e - a) / k;
            b.h *= 60;
            360 < b.h ? b.h -= 360 : 0 > b.h && (b.h = 360 + b.h);
        }
        b.s = Math.min(100 * b.s, 100);
        b.l = Math.min(100 * b.l, 100);
        b.h = Math.round(1e4 * b.h) / 1e4;
        b.s = Math.round(1e4 * b.s) / 1e4;
        b.l = Math.round(1e4 * b.l) / 1e4;
        return b;
    };
    b.colorToSupported = function(a) {
        w();
        if (!g && /rgba/.test(a) || !r && /rgb/.test(a) || !n && /hsla/.test(a) || !d && /hsl/.test(a)) {
            var c = b.parseColorValue(a).values;
            if (4 <= c.length && .5 > c[3]) return "transparent";
            var f = c[0], e = c[1], k = c[2];
            /hsl/.test(a) && (a = b.hslToRGB({
                h: c[0],
                g: c[1],
                b: c[2]
            }), f = a.r, e = a.g, k = a.b);
            f = Math.floor(2.55 * f);
            e = Math.floor(2.55 * e);
            k = Math.floor(2.55 * k);
            f = (15 < f ? "" : "0") + f.toString(16);
            e = (15 < e ? "" : "0") + e.toString(16);
            k = (15 < k ? "" : "0") + k.toString(16);
            a = "#" + f + e + k;
        }
        return a;
    };
    b.Timeline.addTweenType("color", function(a, b, c, e) {
        return new z("color", a, b, c, e);
    });
})(jQuery, AdobeEdge, AdobeEdge.PropertyTween);

(function(c, b, p, w) {
    function z(a, c, d, f, B) {
        null !== r[d] && (this.superProperty = r[d].cssProp, a = r[d].type, "color" === a ? (s.extend(this, w.prototype, g), 
        w.call(this, a, c, d, f, B)) : (s.extend(this, p.prototype, g), b.PropertyTween.call(this, a, c, d, f, B)));
        this.name = "subpropertyTween";
    }
    var s = c, a = {
        "box-shadow": {
            def: "box-shadow",
            "-webkit-box-shadow": "boxShadow.color boxShadow.offsetH boxShadow.offsetV boxShadow.blur boxShadow.spread boxShadow.inset".split(" "),
            "-moz-box-shadow": "boxShadow.color boxShadow.offsetH boxShadow.offsetV boxShadow.blur boxShadow.spread boxShadow.inset".split(" "),
            "box-shadow": "boxShadow.color boxShadow.offsetH boxShadow.offsetV boxShadow.blur boxShadow.spread boxShadow.inset".split(" ")
        },
        "text-shadow": {
            def: "text-shadow",
            "text-shadow": [ "textShadow.color", "textShadow.offsetH", "textShadow.offsetV", "textShadow.blur" ]
        },
        filter: {
            def: "-webkit-filter",
            "-webkit-filter": "filter.invert filter.hue-rotate filter.contrast filter.saturate filter.brightness filter.sepia filter.grayscale filter.blur filter.drop-shadow.color filter.drop-shadow.offsetH filter.drop-shadow.offsetV filter.drop-shadow.blur".split(" "),
            "-moz-filter": "filter.invert filter.hue-rotate filter.contrast filter.saturate filter.brightness filter.sepia filter.grayscale filter.blur filter.drop-shadow.color filter.drop-shadow.offsetH filter.drop-shadow.offsetV filter.drop-shadow.blur".split(" "),
            filter: "filter.invert filter.hue-rotate filter.contrast filter.saturate filter.brightness filter.sepia filter.grayscale filter.blur filter.drop-shadow.color filter.drop-shadow.offsetH filter.drop-shadow.offsetV filter.drop-shadow.blur".split(" ")
        }
    }, r = {
        "boxShadow.offsetH": {
            cssProp: "box-shadow",
            type: "style",
            def: "0px"
        },
        "boxShadow.offsetV": {
            cssProp: "box-shadow",
            type: "style",
            def: "0px"
        },
        "boxShadow.blur": {
            cssProp: "box-shadow",
            type: "style",
            def: "0px"
        },
        "boxShadow.spread": {
            cssProp: "box-shadow",
            type: "style",
            def: "0px"
        },
        "boxShadow.color": {
            cssProp: "box-shadow",
            type: "color",
            def: "rgba(0,0,0,0)"
        },
        "boxShadow.inset": {
            cssProp: "box-shadow",
            def: ""
        },
        "textShadow.offsetH": {
            cssProp: "text-shadow",
            type: "style",
            def: "0px"
        },
        "textShadow.offsetV": {
            cssProp: "text-shadow",
            type: "style",
            def: "0px"
        },
        "textShadow.blur": {
            cssProp: "text-shadow",
            type: "style",
            def: "0px"
        },
        "textShadow.color": {
            cssProp: "text-shadow",
            type: "color",
            def: "rgba(0,0,0,0)"
        },
        "filter.drop-shadow.color": {
            cssProp: "filter",
            type: "color",
            def: "rgba(0,0,0,0)",
            strReplace: "drop-shadow(%1",
            combinedNum: 4
        },
        "filter.drop-shadow.offsetH": {
            cssProp: "filter",
            type: "style",
            def: "0px"
        },
        "filter.drop-shadow.offsetV": {
            cssProp: "filter",
            type: "style",
            def: "0px"
        },
        "filter.drop-shadow.blur": {
            cssProp: "filter",
            type: "style",
            def: "0px",
            strReplace: "%1)"
        },
        "filter.grayscale": {
            cssProp: "filter",
            type: "style",
            def: "0",
            strReplace: "grayscale(%1)"
        },
        "filter.sepia": {
            cssProp: "filter",
            type: "style",
            def: "0",
            strReplace: "sepia(%1)"
        },
        "filter.saturate": {
            cssProp: "filter",
            type: "style",
            def: "1",
            strReplace: "saturate(%1)"
        },
        "filter.hue-rotate": {
            cssProp: "filter",
            type: "style",
            def: "0deg",
            strReplace: "hue-rotate(%1)"
        },
        "filter.invert": {
            cssProp: "filter",
            type: "style",
            def: "0",
            strReplace: "invert(%1)"
        },
        "filter.brightness": {
            cssProp: "filter",
            type: "style",
            def: "0",
            strReplace: "brightness(%1)"
        },
        "filter.contrast": {
            cssProp: "filter",
            type: "style",
            def: "1",
            strReplace: "contrast(%1)"
        },
        "filter.blur": {
            cssProp: "filter",
            type: "style",
            def: "0px",
            strReplace: "blur(%1)"
        }
    }, d = 1, g = {
        setValue: function(a, b, c) {
            s.data(this, r[b].cssProp)[b] = c;
        },
        getValue: function(a, b) {
            s.data(this, r[a].cssProp);
        },
        setupForAnimation: function(a) {
            var b = this;
            this.getElementSet(a).each(function() {
                var a = s.data(this, b.superProperty);
                a || (a = b.buildProp(this), s.data(this, b.superProperty, a));
            });
            p.prototype.setupForAnimation.call(this, a);
        },
        buildProp: function(a) {
            var c, k = {}, f = b.getSubProps(a, this.superProperty);
            for (c in f) f.hasOwnProperty(c) && (k[c] = f[c]);
            null === k && (k = {});
            k.id = this.superProperty + d;
            d += 1;
            k.element = a;
            k.prop = this.superProperty;
            k.onFinalUpdate = s.Edge.TransformTween.UpdateFinalizer.prototype._applySubproperty;
            return k;
        },
        update: function(a, b, c) {
            p.prototype.update.call(this, a, b, c);
            a = this.getElementSet(c);
            var d = this, g = this.property, u = this.tweenType;
            a.each(function() {
                if (d.getPropertyTweenData(this, u, g).animationID === d.animationID) {
                    var a = s.data(this, d.superProperty);
                    a.timeline = c.timeline;
                    a.tween = d;
                    s.Edge.TransformTween.UpdateFinalizer.Register(c.timeline, a.id, a);
                }
            });
        }
    };
    s.extend(z.prototype, {
        constructor: z,
        buildDefaultProps: function(b, c) {
            var k, f, g = {};
            for (k in c) if (c.hasOwnProperty(k) && (g[k] = {}, c.hasOwnProperty(k))) {
                var u = a[k][a[k].def];
                for (f in u) u.hasOwnProperty(f) && (g[k][u[f]] = r[u[f]].def);
                g[k].prop = k;
                g[k].id = k + d;
                d += 1;
                g[k].element = b;
                g[k].onFinalUpdate = s.Edge.TransformTween.UpdateFinalizer.prototype._applySubproperty;
            }
            return g;
        }
    });
    b.getSubProps = function(b, c) {
        var d = s(b), f, g;
        for (g in a[c]) if (a[c].hasOwnProperty(g) && (f = d.css(g)) && "" !== f) {
            d = f;
            g = a[c][g];
            d = d.replace(/,\s*/g, ",");
            d = d.split(" ");
            f = [];
            for (var u = void 0, u = 0; u < g.length; u += 1) f[g[u]] = d[u] || r[g[u]].def;
            return f;
        }
        return [];
    };
    z.getSubType = function(a) {
        if (null !== r[a]) return r[a].type;
    };
    z.getStyle = function(a) {
        if (null !== r[a]) return r[a].cssProp;
    };
    z.applySubproperty = function(b, c, d, f) {
        b = s(b);
        var g, u, l;
        "undefined" !== typeof AdobeEdge.applyCount && AdobeEdge.applyCount++;
        for (u in a[c.prop]) if ("def" !== u && a[c.prop].hasOwnProperty(u)) {
            g = "";
            var x = !0;
            for (f = 0; f < a[c.prop][u].length; f += 1) {
                l = c[a[c.prop][u][f]];
                if ("combinedNum" in r[a[c.prop][u][f]]) for (var x = !0, h = f; h < f + r[a[c.prop][u][f]].combinedNum; h++) c[a[c.prop][u][h]] != r[a[c.prop][u][h]].def && (x = !1);
                a[c.prop][u][f].match(/^filter./) && l == r[a[c.prop][u][f]].def && x || ("strReplace" in r[a[c.prop][u][f]] && (l = r[a[c.prop][u][f]].strReplace.replace("%1", l)), 
                g += l, f !== a[c.prop][u].length - 1 && (g += " "));
            }
            (window.edge_authoring_mode && u === a[c.prop].def || !window.edge_authoring_mode) && b.css(u, g);
        }
        d && d.observers.length && d.notifyObservers("onUpdate", {
            elapsed: 0,
            easingConst: 0,
            property: u,
            value: g,
            element: b[0]
        });
    };
    s.extend(s.Edge.TransformTween.UpdateFinalizer.prototype, {
        _applySubproperty: function(a) {
            var b = s.data(this.element, this.prop);
            b && a && z.applySubproperty(this.element, b, b.tween, a.context);
        }
    });
    b.SubpropertyTween = z;
    b.Timeline.addTweenType("subproperty", function(a, b, c, d) {
        return new z("subproperty", a, b, c, d);
    });
})(jQuery, AdobeEdge, AdobeEdge.PropertyTween, AdobeEdge.ColorTween);

(function(c, b, p) {
    function w(a, c, d, g, n) {
        var m = null;
        2 <= g.length && z.isArray(g[1]) && 2 <= n.fromValue.length && z.isArray(n.fromValue[1]) ? m = 1 : 2 <= g.length && z.isArray(g[4]) && 2 <= n.fromValue.length && z.isArray(n.fromValue[4]) && (m = 4);
        if (m) {
            var k = n.fromValue[m].length < g[m].length ? n.fromValue[m] : g[m], m = k == g[m] ? n.fromValue[m] : g[m];
            for (i = k.length; i < m.length; i++) k[i] = k[i - 1];
        }
        b.PropertyTween.call(this, a, c, d, g, n);
        this.name = "GradientTween";
        this.tweenType = s[a];
    }
    var z = c, s = {
        gradient: 0
    };
    z.extend(w.prototype, p.prototype, {
        constructor: w,
        setupForAnimation: function(a) {
            this.getElementSet(a).each(function() {
                b.forceGPU(this);
            });
            p.prototype.setupForAnimation.call(this, a);
        },
        getValue: function(a, b) {
            return z(this).css(a);
        },
        setValuePre: function(a, b, c) {
            z(this).css(b, "-webkit-" + c);
            z(this).css(b, "-moz-" + c);
            z(this).css(b, "-ms-" + c);
            z(this).css(b, "-o-" + c);
        },
        setValue: function(a, b, c) {
            z(this).css(b, c);
        },
        update: function(a, b, c) {
            var g = this.getElementSet(c);
            this.updateTriggered || (this.updateTriggered = !0, this.setupForAnimation(c));
            var n = this, m = this.tweenType, k = this.property, f;
            g.each(function() {
                var g = n.getPropertyTweenData(this, m, k);
                if (g.animationID == n.animationID) {
                    var u = g.fromValues, l = g.toValues, x = n.filter, h = u.length, g = [];
                    for (f = 0; f < h; f++) {
                        var e = u[f], q = l[f], e = "string" == typeof e ? 0 == b && 0 < n.duration ? e : q.value : e + (q.value - e) * b;
                        x && x[f] && (e = x[f](e, n, this, k, q.unit, a, c));
                        "number" === typeof e && 1 > e && (e = e.toFixed(6));
                        g.push(e + q.unit);
                    }
                    u = n.formatValuePre(g);
                    g = n.formatValue(g);
                    n.setValuePre.call(this, m, k, u);
                    n.setValue.call(this, m, k, g);
                    n.notifyObservers("onUpdate", {
                        elapsed: a,
                        easingConst: b,
                        property: k,
                        value: "-webkit-" + u,
                        element: this
                    });
                }
            });
        },
        parseValue: function(a) {
            function c(a, b) {
                if (1 < a[b].length) return a[b][1];
                var d;
                d = 0 === i ? 0 : i === a.length - 1 ? 100 : (c(a, i - 1) + c(a, i + 1)) / 2;
                a[i].push(d);
                return d;
            }
            if (a && !(2 > a.length)) {
                "string" == typeof a && (a = JSON.parse(a));
                var d = null, g = null, n = null, m = null, k = null, f = [], B = !1;
                z.isArray(a[1]) ? (d = a[0], g = a[1], a[2] && (B = a[2])) : (n = [ a[0], a[1] ], 
                m = a[2], k = a[3], g = a[4], a[5] && (B = a[5]));
                for (i = 0; i < g.length; i++) if (a = b.Color.parseValue(g[i][0])) f = f.concat(a), 
                f.push(c(g, i));
                if ((d = {
                    angle: d,
                    colorstops: f,
                    centerPoint: n,
                    ellipse: m,
                    extent: k,
                    repeating: B
                }) && d.colorstops) return g = [], null !== d.angle ? g = g.concat(d.angle) : d.centerPoint && (g = g.concat(d.centerPoint), 
                g = g.concat([ d.ellipse, d.extent ])), g = g.concat(d.colorstops), g.concat(d.repeating);
            }
        },
        formatValue: function(a) {
            return b.formatGradient(a, !1);
        },
        formatValuePre: function(a) {
            return b.formatGradient(a, !0);
        }
    });
    b.GradientTween = w;
    b.Gradient = {
        parseValue: w.prototype.parseValue
    };
    b.formatGradient = function(a, c) {
        if (a) {
            var d = "", g = null;
            2 == a.length % 5 ? (g = 1, d = d + "linear-gradient(" + ((c ? a[0] : (450 - a[0]) % 360) + "deg,")) : (g = 4, 
            d += "radial-gradient(", d = c ? d + (a[0] + "% " + a[1] + "%," + (1 == a[2] ? "ellipse" : "circle") + " " + a[3] + ",") : d + (a[3] + " " + (1 == a[2] ? "ellipse" : "circle") + " at " + a[0] + "% " + a[1] + "%,"));
            1 == a[a.length - 1] && (d = "repeating-" + d);
            if (!(12 > a.length || 0 !== (a.length - g - 1) % 5)) {
                var n = Math.floor((a.length - g - 1) / 5);
                for (i = 0; i < n; i++) {
                    var m = 5 * i + g, d = d + b.Color.formatValue(a.slice(m, m + 4));
                    -1 !== a[m + 4] && (d += " " + a[m + 4] + "%");
                    i != n - 1 && (d += ",");
                }
                return d += ")";
            }
        }
    };
    b.Timeline.addTweenType("gradient", function(a, b, c, g) {
        return new w("gradient", a, b, c, g);
    });
})(jQuery, AdobeEdge, AdobeEdge.PropertyTween);

(function(c, b) {
    function p(a, b, c, g, u) {
        d.call(this, a, b, "motion", void 0, u);
        this.name = "motionTween";
        (this.path = c) && 1 < c.length && 6 > c[0].length && (c[0][4] = c[0][5] = 0, c[c.length - 1].splice(2, 0, 0, 0));
        this.keyframes = [];
    }
    function w(a, b, c) {
        var d = {};
        try {
            if (a[0] === b[0] && a[1] === b[1]) return d.x = b[0], d.y = b[1], d;
        } catch (g) {}
        var l = c * c, n = l * c, h = 2 * n - 3 * l + 1;
        c = n - 2 * l + c;
        var e = -2 * n + 3 * l, l = n - l;
        d.x = h * a[0] + c * a[2] + e * b[0] + l * b[4];
        d.y = h * a[1] + c * a[3] + e * b[1] + l * b[5];
        return d;
    }
    function z(a, b, c) {
        var d = {};
        if (a[0] === b[0] && a[1] === b[1]) return d.dx = 0, d.dy = 0, d;
        var g = c * c, l = 6 * g - 6 * c, n = 3 * g - 4 * c + 1, h = -6 * g + 6 * c;
        c = 3 * g - 2 * c;
        var g = a[3], e = b[5];
        d.dx = l * a[0] + n * a[2] + h * b[0] + c * b[4];
        d.dy = l * a[1] + n * g + h * b[1] + c * e;
        return d;
    }
    function s(a, c) {
        var b = a.x - c.x, d = a.y - c.y;
        return Math.sqrt(b * b + d * d);
    }
    function a(c, b, d, g, n) {
        var l = Math.floor(d[g].b), p = (d[g].b + d[g + 1].b) / 2 - l, h = w(c, b, p), e = 0;
        s({
            x: (d[g].x + d[g + 1].x) / 2,
            y: (d[g].y + d[g + 1].y) / 2
        }, h) > n && (h.b = p + l, d.splice(g + 1, 0, h), e = a(c, b, d, g + 1, n), e = e + a(c, b, d, g, n) + 1);
        return e;
    }
    function r(c) {
        var b, d;
        for (b = 0; b < c.length - 1; b++) {
            var g = [ 0, 0, 3 * c[b].upper.x, 3 * c[b].upper.y, 3 * c[b].lower.x, 3 * c[b].lower.y ], n = [ 1, 1, 3 * c[b + 1].upper.x, 3 * c[b + 1].upper.y, 3 * (1 - c[b + 1].lower.x), 3 * (1 - c[b + 1].lower.y) ], l = [];
            for (d = 0; 5 > d; d++) {
                var p = d / 4, h = {
                    b: p
                }, e = w(g, n, p);
                h.x = e.x;
                h.y = e.y;
                h.b = p;
                l[d] = h;
            }
            a: {
                d = l;
                for (var p = s(d[d.length - 1], d[0]), h = void 0, e = d[d.length - 1].x - d[0].x, q = d[d.length - 1].y - d[0].y, h = 1; h < d.length - 1; h++) {
                    var r;
                    r = (d[h].x - d[0].x) * e + (d[h].y - d[0].y) * q;
                    var z = p * s(d[h], d[0]);
                    if (.005 < Math.abs(Math.acos(r / z))) {
                        d = !1;
                        break a;
                    }
                }
                d = !0;
            }
            if (d) l.splice(1, 3); else for (d = 0; 4 > d; d++) a(g, n, l, 3 - d, .01);
            g = c[b];
            d = 1;
            n = void 0;
            for (n = 0; n < l.length - 1; n++) 0 < l[n + 1].x - l[n].x && (d = Math.min(d, l[n + 1].x - l[n].x));
            d = Math.ceil(1 / d);
            p = 1 / d;
            h = [ {
                t: 0,
                e: 0
            } ];
            for (n = e = 0; n < d; n++) {
                for (q = n * p; q > l[e + 1].x && e < l.length - 2; ) e++;
                r = l[e + 1].y;
                0 < l[e + 1].x - l[e].x && (r = l[e].y + (q - l[e].x) * (l[e + 1].y - l[e].y) / (l[e + 1].x - l[e].x));
                h[n] = {
                    t: q,
                    e: r
                };
            }
            1 > h[h.length - 1].t && (h[h.length] = {
                t: 1,
                e: 1
            });
            g.easingTable = h;
        }
    }
    var d = b.TransformTween, g = d.UpdateFinalizer, n = d.splitUnits;
    "undefined" !== typeof c.Edge && "undefined" !== typeof c.Edge.Timeline && "undefined" !== typeof c.Edge.PropertyTween && (function(a) {
        c.prototype.css = function(b, d) {
            var g = a.apply(this, arguments), u, l, p = function(a) {
                return a.replace(/^-ms-/, "ms-").replace(/-([a-z]|[0-9])/gi, function(a, b) {
                    return String(b).toUpperCase();
                });
            };
            return 1 < arguments.length ? (l = p(b), c(this).each(function(a) {
                u = c.data(this, "css_cache") || {};
                if (u[l] !== d) {
                    u[l] = d;
                    c.data(this, "css_cache", u);
                    "width" === b ? c.data(this, "u_w", n(d).units) : "height" === b && c.data(this, "u_h", n(d).units);
                    a = c.data(this, "u_w");
                    c.data(this, "u_h");
                    var e = null !== b.match(/^margin/) || null !== b.match(/^padding/) || null !== b.match(/^border/);
                    (e || void 0 === a || null === a || "width" === b) && c.data(this, "cw_d", 1);
                    (e || "height" === b) && c.data(this, "ch_d", 1);
                }
            }), this) : g;
        };
    }(c.prototype.css), function(a) {
        c.prototype.width = function() {
            var d = this[0], f = c.data(d, "cw"), g = 1 == c.data(d, "cw_d") || void 0 === c.data(d, "cw_d"), n = b.Symbol.get(d) || c.data(d, "domDef"), l = 1 === d.nodeType && "BODY" === d.tagName, g = g || "%" == c.data(d, "u_w");
            if (!n || l || g || void 0 === f || null === f || d == d.window || 9 === d.nodeType) f = a.apply(this, arguments), 
            c.data(d, "cw", f), c.data(d, "cw_d", 0);
            return f;
        };
    }(c.prototype.width), function(a) {
        c.prototype.height = function() {
            var d = this[0], f = c.data(d, "ch"), g = 1 == c.data(d, "ch_d") || void 0 === c.data(d, "ch_d"), n = b.Symbol.get(d) || c.data(d, "domDef"), l = 1 === d.nodeType && "BODY" === d.tagName, g = g || "%" == c.data(d, "u_h");
            if (!n || l || g || void 0 === f || null === f || d == d.window || 9 === d.nodeType) f = a.apply(this, arguments), 
            c.data(d, "ch", f), c.data(d, "ch_d", 0);
            return f;
        };
    }(c.prototype.height), c.extend(p.prototype, d.prototype, {
        constructor: p,
        setup: function() {
            this.updateTriggered = !1;
        },
        getValue: function() {},
        setupForAnimation: function(a) {
            d.prototype.setupForAnimation.call(this, a);
            this.points || (this.setUpPoints(), this.setUpLen2bMap(), r(this.keyframes));
            this.deltas || window.edge_authoring_mode || (this.getElementSet(a).each(function() {
                var a = c(this), b = c.data(this, "p_x") || "left", d = c.data(this, "p_y") || "top", g = c(this.parentElement), m = +parseFloat(a.css(b)) || 0, n = +parseFloat(a.css(d)) || 0;
                "%" === c.data(this, "u_x") && (m = m / 100 * +g.width());
                "%" === c.data(this, "u_y") && (n = n / 100 * +g.height());
                c.data(this, "deltaX", m);
                c.data(this, "deltaY", n);
                a.css(b, "0px").css(d, "0px");
            }), this.deltas = !0);
            for (a = this; a._prevObj && (2 != a._prevObj.path.length || a._prevObj.path[0][0] !== a._prevObj.path[1][0] || a._prevObj.path[0][1] !== a._prevObj.path[1][1]); ) a = a._prevObj;
            a = z(a.path[0], a.path[1], 1e-6);
            this._deltaRotate = 180 * Math.atan2(a.dx, a.dy) / Math.PI;
        },
        computeEasing: function(a) {
            var b = this.keyframes;
            a /= this.getDuration();
            var c = 0, d;
            for (d = 0; d < b.length - 1 && !(c = d, a <= b[d + 1].t); d++) ;
            d = b[c].easingTable;
            var g = b[c + 1].l - b[c].l;
            a = (a - b[c].t) / (b[c + 1].t - b[c].t);
            var l = Math.floor(a / (d[1].t - d[0].t)), l = Math.min(d.length - 2, Math.max(l, 0));
            return b[c].l + (d[l].e + (a - d[l].t) * (d[l + 1].e - d[l].e) / (d[l + 1].t - d[l].t)) * g;
        },
        originInPx: function(a) {
            var c, d = {}, g = a.width(), u = a.height(), l, p;
            c = (a.css("transform-origin") || a.css("-webkit-transform-origin") || a.css("-moz-transform-origin") || a.css("-ms-transform-origin") || a.css("-o-transform-origin") || "10% 10%").split(" ");
            0 < c[0].indexOf("%") ? (l = parseFloat(c[0].substring(0, c[0].length - 1)) / 100, 
            p = parseFloat(c[1].substring(0, c[1].length - 1)) / 100, d.x = g * l, d.y = u * p) : (d.x = parseFloat(c[0].substring(0, c[0].length - 2)), 
            d.y = parseFloat(c[1].substring(0, c[1].length - 2)));
            !b.supported.originIncludesBorders && !window.edge_authoring_mode && 0 < g && 0 < u && (l = l || d.x / g, 
            p = p || d.y / u, c = n(a.css("border-left-width")).num + n(a.css("border-right-width")).num || 0, 
            c *= l, a = n(a.css("border-top-width")).num + n(a.css("border-bottom-width")).num || 0, 
            d.x += c, d.y += a * p);
            return d;
        },
        update: function(a, b, f) {
            this.updateTriggered || (this.updateTriggered = !0, this.setupForAnimation(f));
            var n = this.getElementSet(f), p = this, l = this.property, r = this.tweenType, h = this._findSegment(b), e = this.path, q = this._easeToB(b), s = this.points[this.points.length - 1].l, F, q = Math.min(1, Math.max(0, q - h));
            F = Math.max(1e-6, Math.min(.999999, q));
            var K = w(e[h], e[h + 1], q), h = z(e[h], e[h + 1], F), q = 180 * Math.atan2(h.dx, h.dy) / Math.PI, I, L;
            this._prevObj && 2 === e.length && e[0][0] === e[1][0] && e[0][1] === e[1][1] ? (L = !0, 
            I = 0) : I = this._deltaRotate - q;
            if (0 > b || 1 < b) e = Math.atan2(h.dy, h.dx), h = 1 < b ? b - 1 : b, K.x += Math.cos(e) * s * h, 
            K.y += Math.sin(e) * s * h;
            n.each(function() {
                var e = c(this), h = p.getPropertyTweenData(this, r, l), q = c.data(this, d.dataName), n = this.parentElement, s;
                q.tween = p;
                if (h.animationID === p.animationID) {
                    var e = p.originInPx(e), h = c.data(this, "p_x") || "left", w = c.data(this, "p_y") || "top", D = K.x, z = K.y, B = c.data(this, "u_x") || "px", F = c.data(this, "u_y") || "px", R = !window.edge_authoring_mode, P = c.data(this, "doAutoOrient"), P = "true" === P ? !0 : "false" === P ? !1 : P;
                    R && (s = c(n), n = s.width(), s = s.height(), "%" === B && (D = D / 100 * n), "%" === F && (z = z / 100 * s));
                    D += "right" === h ? e.x : -1 * e.x;
                    z += "bottom" === w ? e.y : -1 * e.y;
                    R && (D += 0, z += 0);
                    D = 0 !== D && 1e-6 > Math.abs(D) ? D.toFixed(6) : D.toString();
                    z = 0 !== z && 1e-6 > Math.abs(z) ? z.toFixed(6) : z.toString();
                    L || (P || (I = 0), I = .01 < Math.abs(I) ? I : 0, c.data(this, "motionRotateZ", I + "deg"), 
                    p.setValue.call(this, void 0, "motionRotateZ", I + "deg"), g.Register(f.timeline, q.id, q));
                    R ? (p.setValue.call(this, void 0, "motionTranslateX", D + "px"), p.setValue.call(this, void 0, "motionTranslateY", z + "px"), 
                    g.Register(f.timeline, q.id, q)) : (c(this).css(h, D + B), p.notifyObservers("onUpdate", {
                        elapsed: a,
                        easingConst: b,
                        property: h,
                        value: D + B,
                        element: q.tween
                    }), c(this).css(w, z + F), p.notifyObservers("onUpdate", {
                        elapsed: a,
                        easingConst: b,
                        property: w,
                        value: z + F,
                        element: this
                    }));
                }
            });
        },
        _findSegment: function(a) {
            a = this.len2b(a * this.points[this.points.length - 1].l);
            a = Math.floor(a);
            return Math.min(Math.max(a, 0), this.path.length - 2);
        },
        _easeToB: function(a) {
            return this.len2b(a * this.points[this.points.length - 1].l);
        },
        setUpLen2bMap: function() {
            for (var a = 0, b = this.points, c = 0; c < b.length - 1; c++) b[c].l = a, a += s(b[c], b[c + 1]);
            var c = b[b.length - 1].l = a, a = 60 * this.getDuration() / 1e3, d = c / a;
            this.len2bStep = d;
            var a = 0, g = this.len2bMap = [], l = 0;
            if (0 < c) {
                for (;a <= c; ) {
                    for (;l < b.length - 1 && a > b[l + 1].l; ) l += 1;
                    if (l >= b.length - 1) break;
                    g.push({
                        l: a,
                        b: b[l].b + (a - b[l].l) * (b[l + 1].b - b[l].b) / (b[l + 1].l - b[l].l)
                    });
                    a += d;
                }
                g[g.length - 1].b < b[b.length - 1].b && g.push({
                    l: b[b.length - 1].l,
                    b: b[b.length - 1].b
                });
            } else g.push({
                l: 0,
                b: b[0].b
            });
        },
        setUpPoints: function() {
            var b = this.path;
            this.points = [];
            var c, d;
            for (c = 0; c < b.length - 1; c++) for (d = 0; 5 > d; d++) if (4 > d || c === b.length - 2) {
                var g = d / 4, n = {
                    b: c + g
                }, g = w(b[c], b[c + 1], g);
                n.x = g.x;
                n.y = g.y;
                this.points.push(n);
            }
            for (c = 1; c < b.length; c++) for (n = b.length - c - 1, d = 0; 4 > d; d++) a(b[n], b[n + 1], this.points, 3 - d + 4 * n, 2);
            return this.points;
        },
        len2b: function(a) {
            this.len2bMap || this.setUpLen2bMap();
            var b = this.len2bMap, c = Math.min(Math.max(0, Math.floor(a / this.len2bStep)), this.len2bMap.length - 2);
            return 0 === b.length ? 0 : 1 === b.length ? b[0].b : (a - b[c].l) * (b[c + 1].b - b[c].b) / (b[c + 1].l - b[c].l) + b[c].b;
        }
    }), b.Timeline.addTweenType("motion", function(a, b, c, d) {
        return new p("motion", a, b, c, d);
    }), b.MotionTween = p);
})(jQuery, AdobeEdge);

(function(c, b) {
    function p(a) {
        return a.parent().hasClass("center-wrapper");
    }
    function w(a) {
        p(a) || a.wrap("<div class='flow-wrapper' style='width:1px'><div class='center-wrapper'></div></div>");
    }
    function z(a) {
        var b = a.$("Stage");
        if (!a.composition.alreadyWrapped) {
            var d = function() {
                var d = p(b), e = d ? b.parent().parent().parent() : b.parent(), E = e.width(), g = e.height(), f = b.width(), h = b.height(), q = c(window).height(), n, l, k, m = 1, s = a.options.data.initialState;
                n = /px|^0$/;
                (e = "body" === e[0].nodeName.toLowerCase()) && (g = q);
                if (s = a.options.data.states[s]["${_Stage}"]) for (i = 0; i < s.length; i++) "style" === s[i][0] && "min-width" === s[i][1] && (q = s[i][2], 
                l = n.test(q) ? parseInt(q, 10) : void 0), "style" === s[i][0] && "max-width" === s[i][1] && (q = s[i][2], 
                k = n.test(q) ? parseInt(q, 10) : void 0);
                E = Math.round(E);
                n = Math.round(g);
                g = E / f;
                E = n / h;
                n = a.options.data.scaleToFit;
                "both" === n ? m = Math.min(g, E) : "height" === n ? m = E : "width" === n && (m = g);
                void 0 !== k && (m = Math.min(m, k / f));
                void 0 !== l && (m = Math.max(m, l / f));
                b.css("transform-origin", "0 0");
                b.css("-o-transform-origin", "0 0");
                b.css("-ms-transform-origin", "0 0");
                b.css("-webkit-transform-origin", "0 0");
                b.css("-moz-transform-origin", "0 0");
                b.css("-o-transform-origin", "0 0");
                b.css("transform", "scale(" + m + ")");
                b.css("-o-transform", "scale(" + m + ")");
                b.css("-ms-transform", "scale(" + m + ")");
                b.css("-webkit-transform", "scale(" + m + ")");
                b.css("-moz-transform", "scale(" + m + ")");
                b.css("-o-transform", "scale(" + m + ")");
                e && !d || b.parent().height(Math.round(h * m)).width(Math.round(f * m));
                d && (d = b.parent().parent(), d.height(Math.round(h * m + b.offset().top - d.offset().top)));
            };
            c(window).on("resize", function() {
                d();
            });
            c(document).ready(function() {
                d();
            });
        }
    }
    function s(a, b) {
        var d = b.centerStage;
        a = c(a);
        p(a) && (a = a.parent());
        if ("both" === d || "horizontal" === d) a.css("position", "absolute"), a.css("margin-left", "auto"), 
        a.css("margin-right", "auto"), a.css("left", "0"), a.css("right", "0");
        if ("both" === d || "vertical" === d) a.css("position", "absolute"), a.css("margin-top", "auto"), 
        a.css("margin-bottom", "auto"), a.css("top", "0"), a.css("bottom", "0");
    }
    function a(a, b, c, d, e) {
        var g = c.x - b.x, f = c.y - b.y, g = Math.sqrt(g * g + f + f);
        return {
            id: "generated",
            tween: [ "motion", a, [ [ b.x, b.y, 0, 0, 0, 0, 0 ], [ c.x, c.y, 0, 0, 0, 0, g ] ], [ [ 0, 0 ], [ 0, 0 ] ] ],
            position: d,
            duration: e
        };
    }
    function r() {
        if ("undefined" === typeof A.isiOS) {
            var a = navigator.userAgent;
            "webkitAppearance" in document.documentElement.style && (/iPad/.test(a) || /iPod/.test(a) || /iPhone/.test(a)) ? A.isiOS = !0 : A.isiOS = !1;
        }
        return A.isiOS;
    }
    function d(a) {
        var b = {
            Symbol: this,
            element: this.element,
            performDefaultAction: !0
        };
        c.extend(b, a);
        return b;
    }
    function g() {
        var a = {}, b = this.options.data.variables;
        if (b) for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d].defaultValue);
        c.extend(a, {
            symbolSelector: "#" + c(this.element)[0].id
        });
        return a;
    }
    function n(a, e) {
        var E = a, g = d.call(this, {
            markup: E
        });
        this.notifyObservers("onPreInjectMarkup", g);
        var E = g.markup, f = d.call(this, {
            markup: E
        });
        if (g.performDefaultAction) {
            var C, g = this.variableValues;
            C = this.options.data.content;
            if (!E && C) if (C.ref) E = "", c(C.ref).each(function(a, b) {
                E += c(b).html();
            }); else if (C.markup) E = C.markup; else if (C.dom) {
                var M = b.DeclareMarkup;
                if (M) {
                    var h = C.dom, q = C.symbolInstances, h = JSON.parse(JSON.stringify(C.dom)), q = [];
                    C.symbolInstances && (q = JSON.parse(JSON.stringify(C.symbolInstances)));
                    var n = h.length;
                    for (C = 0; C < n; C++) Y.call(this, h[C], q);
                    M.DOMNodeSeek(c(this.element)[0], this.getSymbolTypeName());
                    M.renderDOM(h, c(this.element)[0], g, this.getSymbolTypeName(), q, this.composition);
                    if (this.idLookup) for (var l in this.idLookup) this.idLookup.hasOwnProperty(l) && (c(l).data("originalId", this.idLookup[l]), 
                    c(l).data("symParent", this));
                    q && 0 < q.length && da.call(this, q);
                    M.DOMNodeCompleted(c(this.element)[0]);
                }
            }
            E && (E = N(E, g), c(E).appendTo(this.element));
        }
        this.notifyObservers("onPostInjectMarkup", f);
    }
    function m(a, c) {
        this.states = c;
        this.timelines = a;
        this.baseState = this.options.data.baseState;
        this.baseState || (this.baseState = "Base State");
        var d = this, e = function(a, c, e, J, G, g, f) {
            G = "#" + e.id;
            e && (c = b.Effectors.applyDelta(d, J, e, a, d.effectors[G], c.duration, c, g, f)) && (a += c);
            return a;
        }, g;
        for (g in this.timelines) if (this.timelines.hasOwnProperty(g)) for (var f = this.timelines[g], M = 0; M < f.timeline.length; M++) {
            var h = f.timeline[M];
            if (d.effectors && h.tween && 2 < h.tween.length) {
                var q = h.tween[2], n = h.tween[4], h = N(h.tween[1], d.variableValues);
                d.effectors[h] && b.Effectors.affectsProperty(d, q, d.effectors[h]) && (n.filter = e);
            }
        }
        return this;
    }
    function k(a) {
        var c = a[0];
        if ("element" === c[0]) {
            var d = N(c[1], this.variableValues);
            d !== c[1] && (c = b.cloneJSONObject(c), c[1] = d);
        }
        (d = ja[c[0]]) && (a = B.call(this, c[0], c[1], a.slice(1))) && d.apply(this, [ a ].concat(c.slice(1)));
    }
    function f(a) {
        for (var b = a.length, c = 0; c < b; c++) k.call(this, a[c]);
    }
    function B(a, b, d) {
        function e(b, d) {
            if (2 <= d.length && "object" === typeof d[0] && "object" === typeof d[1] && "onError" !== d[1].type) {
                var G;
                G = c.Event("onError");
                f && (G.compId = f.getComposition().compId);
                G.originalEvent = d[1];
                c(document).triggerHandler(G);
            }
            window.console.log("Javascript error in event handler! Event Type = " + a);
        }
        var g = this[d[0]], f = this;
        if ("function" === typeof g) {
            d.slice(1);
            if ("element" === a) return function() {
                var a;
                try {
                    return a = Array.prototype.slice.call(arguments), a.unshift(f), 2 <= a.length && "object" === typeof a[0] && "object" === typeof a[1] && "compositionReady" === a[1].type && "string" === typeof a[1].compId && "object" === typeof a[0].composition && a[1].compId !== a[0].composition.compId ? null : g.apply(f, a);
                } catch (b) {
                    e(f, a);
                }
            };
            if ("timeline" === a) return function(d, E) {
                var h;
                try {
                    var q;
                    q = E && E.methodName && /^trig_/.test(E.methodName) ? c.Event("trigger") : c.Event(a);
                    E && c.extend(q, E);
                    q.timeline = d;
                    h = Array.prototype.slice.call(arguments);
                    h.splice(0, 0, q, b);
                    h.unshift(f);
                    return g.apply(f, h);
                } catch (n) {
                    e(f, h);
                }
            };
            if ("symbol" === a) return function(b, d) {
                var G;
                try {
                    var E, h;
                    E = d && d.methodName ? c.Event(d.methodName) : c.Event(a);
                    d && (c.extend(E, d), d.variableValue && (h = d.variableValue));
                    G = Array.prototype.slice.call(arguments);
                    G.splice(0, 0, E, h);
                    G.unshift(f);
                    return g.apply(f, G);
                } catch (q) {
                    e(f, G);
                }
            };
        }
        return null;
    }
    function u(a) {
        c.extend(this, a);
    }
    function l() {
        var a = {
            variables: this.variableValues
        }, b = this.options.data.initialState;
        b || (b = this.options.data.baseState);
        if (!A.useCSSAnimation) if (b) {
            var c = v.call(this, null, b, a);
            t.call(this, c);
        } else for (c in this.timelines) this.timelines.hasOwnProperty(c) && (a = this.getAutoPlay(c), 
        "undefined" === typeof a && (b = this.getTimelineData(c)) && (a = b.autoPlay), "undefined" !== typeof a && "true" !== a && !0 !== a || this.seekTimeline(c, 0));
    }
    function x() {
        return "Default Timeline";
    }
    function h(a, b, e) {
        var g = {};
        c.extend(g, e);
        e = d.call(this, {
            tlName: b,
            tlOptions: g
        });
        this.notifyObservers(a, e);
        if (e.performDefaultAction) return e.tlOptions;
        g = e.tlOptions;
        b = {
            Symbol: this,
            timelineName: b,
            tlOptions: g,
            performDefaultAction: !0
        };
        a = a.replace(/onPre/, "onPost");
        this.notifyObservers(a, b);
    }
    function e(a, b) {
        if ("string" === typeof b) {
            var c = this.getTimelineData(a);
            return c && c.labels ? c.labels[b] : void 0;
        }
        return b;
    }
    function q(a) {
        var b = this.getTimelineData(a);
        return b ? this._getTimeline(a, b.toState, b.fromState) : null;
    }
    function D(a, b) {
        if (this.timelineObservers && this.timelineObservers[a]) {
            var c = this.timelineObservers[a];
            if (c) {
                var d, e = c.length;
                for (d = 0; d < e; d++) b.addObserver(c[d].observer);
            }
        }
    }
    function F(a, b, c) {
        var d = null;
        b && c || (d = this.getTimelineData(a));
        d && (b || (b = d.toState), c || (c = d.fromState));
        return a + "-" + (b ? b : "") + "-" + (c ? c : "");
    }
    function K() {
        if (this.baseState) return this.states[this.baseState];
        for (var a in this.states) if (this.states[a].baseState) return this.baseState = a, 
        this.states[this.baseState];
        return this.states[this.defaultBaseState];
    }
    function I(a) {
        var c = b.cloneJSONObject(K.call(this)), d;
        for (d in a) a.hasOwnProperty(d) && (c[d] || (c[d] = []), c[d] = c[d].concat(a[d]));
        return c;
    }
    function L(a, b, d, e) {
        b = {
            timeline: b,
            data: d
        };
        var g, f, h;
        for (h in a.effectors) if (a.effectors.hasOwnProperty(h) && (f = a.$(h))) for (d = {}, 
        f.data("efxCollector", d), g = c(f).data("efxInst"); g; ) e ? g.effector.postRender(f[0], g, d, b) : g.effector.preRender(f[0], g, d, b), 
        g = g.nextInst;
    }
    function O(a) {
        var c = b.Timeline.createTimeline(), d = this;
        b.Effectors && c.addObserver({
            preUpdate: function(a, b) {
                L(d, a, b, !1);
            },
            postUpdate: function(a, b) {
                L(d, a, b, !0);
            }
        });
        for (var e = a.length, g = 0; g < e; g++) {
            var f = a[g], h = null;
            f.timeline ? h = O.call(this, f.timeline) : f.tween ? h = b.Timeline.createTween.apply(null, f.tween) : f.trigger && (h = f.trigger.slice(0, 2), 
            h.push(this), h = b.Timeline.createTrigger.apply(null, h));
            h && c.add(h, f.position, f.duration, f.easing, f.opts);
        }
        return c;
    }
    function v(a, b, d) {
        d = {};
        if (b) {
            var e = this.states[b];
            if (e) {
                var g = {}, f, h;
                if (a) {
                    var q = this.getTimelineData(a).timeline, n = q.length;
                    for (a = 0; a < n; a++) h = q[a], h.tween && (f = N(h.tween[1], this.variableValues), 
                    f = h.tween[0] + ":" + f + ":" + h.tween[2], g[f] || (g[f] = []), g[f].push(h));
                }
                for (var l in e) if ("prototype" !== l) for (g = e[l], a = 0; a < g.length; a++) if (q = g[a], 
                "${symbolSelector}" != l || this._getBaseStateName() != b || !this._symbolBaseStateHasOverride(q[0], q[1])) if (f = N(l, this.variableValues), 
                "style" === q[0] || "transform" === q[0] || "color" === q[0] || "subproperty" === q[0] || "gradient" === q[0]) {
                    d[f] || (d[f] = []);
                    h = q[2];
                    if (q[3] && q[3].valueTemplate) if (n = W.prototype.parseTemplate.call(null, q[3].valueTemplate)) {
                        var k = n.length, m = [], p = q[2];
                        c.isArray(p) || (p = [ p ]);
                        for (var s = 0; s < k; s++) h = n[s], h.isPlaceholder ? m.push(p[h.value]) : m.push(h.value);
                        h = m.join("");
                    } else h = q[2].join("");
                    d[f].push({
                        decl: q,
                        value: h
                    });
                }
                return d;
            }
        }
    }
    function y(a, b, c) {
        var d = b + "Cache";
        this[d] || (this[d] = {});
        var e = null;
        if (this[d][a]) e = this[d][a]; else {
            b = this.getTimelineData(a)[b];
            var e = v.call(this, a, b, c), g;
            a: {
                g = this.getTimelineData(a).timeline;
                for (var f = g.length, h = 0; h < f; h++) {
                    var q = g[h];
                    if (q.tween && "string" === typeof q.tween[1] && -1 !== q.tween[1].search(/\$\{/)) {
                        g = !0;
                        break a;
                    }
                }
                g = !1;
            }
            g || ha.call(this, b) || (this[d][a] = e);
        }
        t.call(this, e, c);
    }
    function t(a, d) {
        var e = this, g, f, h = "webkitAppearance" in document.documentElement.style, q = function() {
            var a = c(this), d = {}, J = c.data(this, b.TransformTween.dataName), J = J || b.TransformTween.prototype.buildTransformData.call(null, this);
            c.extend(d, J, g);
            c.data(this, b.TransformTween.dataName, d);
            b.TransformTween.applyTransform(a, d, void 0, {
                dontForceZ: !e.gpuAccelerate
            });
            (d = c.data(this, "ui_visibility")) && a.css("visibility", d);
        }, n = function() {
            var a = c(this), d = {}, e = b.SubpropertyTween.prototype.buildDefaultProps.call(null, this, f);
            c.extend(d, e);
            for (var J in f) f.hasOwnProperty(J) && (d[J] ? c.extend(d[J], f[J]) : d[J] = f[J]);
            for (J in f) f.hasOwnProperty(J) && (c.data(this, J, d[J]), b.SubpropertyTween.applySubproperty(a, d[J], void 0, {}));
        }, l;
        for (l in a) if (a.hasOwnProperty(l)) {
            var m = a[l], k = m.length;
            f = g = null;
            for (var p = 0; p < k; p++) {
                var s = m[p].decl, r = s[1];
                if ("transform" === s[0]) g || (g = {}), g[r] = m[p].value; else if ("subproperty" === s[0]) {
                    f || (f = {});
                    var t = b.SubpropertyTween.getStyle(r);
                    f[t] || (f[t] = {});
                    f[t][r] = m[p].value;
                } else s = m[p].decl, t = m[p].value, "color" === s[0] && (t = b.colorToSupported(t)), 
                "gradient" === s[0] ? (s = b.Gradient.parseValue(t), t = b.formatGradient(s, !0), 
                c(l).css(r, "-webkit-" + t), c(l).css(r, "-moz-" + t), c(l).css(r, "-ms-" + t), 
                c(l).css(r, "-o-" + t), t = b.formatGradient(s, !1), c(l).css(r, t), b.forceGPU(l)) : c(l).css(r, t), 
                h && "background-size" === r && c(l).css("-webkit-background-size", t);
            }
            g && b.TransformTween && c(l).each(q);
            f && b.SubpropertyTween && c(l).each(n);
        }
    }
    function ga(a, b) {
        y.call(this, a, "toState", b);
    }
    function aa(a, b, c) {
        var d;
        d = F.call(this, a);
        d = null == this.timelineCache[d];
        var e = this.getTimelineData(a);
        if (e) {
            var g = e.toState, e = e.fromState;
            c || (c = {});
            !d && c.skipFromState ? c.assumeStateUnchanged = !0 : (c.ensureFromState && y.call(this, a, "fromState", c), 
            c.assumeStateUnchanged = !1);
            a && (a = this._getTimeline(a, g, e)) && (a.getDuration(), a.seek(b, c));
        }
    }
    function H(a) {
        if (a && (a = this.getTimelineData(a))) {
            a = a.timeline;
            for (var b = a.length, c = 0; c < b; c++) {
                var d = a[c];
                d.tween && (d = N(d.tween[1], this.variableValues), U.call(this, d));
            }
        }
    }
    function U(a) {
        c(a).each(function() {
            var a = c.data(this, X);
            a || (a = {}, c.data(this, X, a), a.transformData = b.TransformTween.prototype.buildTransformData.call(null, this));
        });
    }
    function ha(a) {
        if (!a) return !1;
        a = this.states[a];
        if (!a) return !1;
        for (var b in a) if (a.hasOwnProperty(b) && -1 !== b.search(/\$\{/)) return !0;
        return !1;
    }
    function ba(a) {
        return b.compositionDefns[a].symbolData;
    }
    function R(a, b, d, e) {
        if (a && b && this.symbolInstances && this.symbolDefns[a]) {
            var g = [], f = this;
            c(b).each(function() {
                var b = c(this), G = document.createElement("div");
                (d || 0 === d) && b.children().eq(d)[0] ? (b = b.children(), 0 > d ? b.eq(d).after(G) : b.eq(d).before(G)) : b.append(G);
                b = {};
                b.variables = e;
                if (G = f.convertElementToSymbol(G, a, b)) f.instanceReady(G), g.push(G);
            });
            if (this.readyCalled) for (b = 0; b < g.length; b++) g[b]._playAuto(!0);
            return g;
        }
    }
    function P(a) {
        var d, e = b.compositionDefns[a];
        if (e && !e.launched && e.okToLaunch && e.launchCalled && (e.launched = !0, !window.edge_authoring_mode || window.edge_remote_authoring)) {
            window.edge_remote_authoring ? (d = new b.Composition(a, {
                stage: "." + a
            }, {}), window.BYOD.initialize()) : d = new b.Composition(a, {
                stage: "." + a
            }, {});
            if ("webkitAppearance" in document.documentElement.style && !d.getStage().stageIsBody) {
                var e = document, g = e.createElement("style"), f = c("head")[0];
                f && (f.insertBefore(g, f.firstChild), "undefined" !== typeof e.styleSheets[0] && e.styleSheets[0].insertRule("." + a + ", ." + a + " *{-webkit-transform:translateX(0px);}", 0));
            }
            d.ready(function() {
                window.edge_authoring_mode && !window.edge_remote_authoring || d.play();
            });
        }
    }
    function ia(a) {
        for (var b in a) if (a.hasOwnProperty(b) && a[b].timelines) for (var c in a[b].timelines) if (a[b].timelines.hasOwnProperty(c)) for (var d = a[b].timelines[c].timeline, e = d.length, g = 0; g < e; g++) {
            var f = d[g];
            f.id || (f.id = fa());
        }
    }
    var ja = b.triggerDict = {
        element: function(a, b, c) {
            a && ("document" === b ? this.$(document).bind(c, a) : "window" === b ? this.$(window).bind(c, a) : this.$(b).bind(c, a));
        },
        timeline: function(a, b, c) {
            if (a && b) {
                var d = this.getTimelineData(b), e = d.toState, d = d.fromState, g = {};
                g[c] = a;
                this._getTimeline(b, e, d).addObserver(g);
            }
        },
        symbol: function(a, b, c) {
            a && (b = {}, b[c] = a, this.addObserver(b));
        }
    }, A = b.Symbol = function(a, d) {
        b.Notifier.call(this);
        c.extend(this, b.Symbol.config);
        this.widgetEventPrefix = "edgeSym_";
        this.element = null;
        this.options = {
            data: null,
            initialState: null
        };
        this.effectors = {};
        this.states = {};
        this.timelines = {};
        this.timelineCache = {};
        this.timelineStateMap = {};
        this.autoPlay = {};
        this.defaultBaseState = "Base State";
        this.symbolBaseStateOverrides = this.baseState = null;
        this._init(a, d);
    };
    b.symbol = A;
    b.Symbol.config = b.Symbol.config || {};
    var W = b.PropertyTween, N = W.substituteVariables;
    A._substituteVariables = N;
    A._parseVariableName = W.parseVariableName;
    var ka = b.symbolDefns = {}, X = "edgeBaseData";
    b.baseDataName = X;
    var Y, ca, da, Z;
    da = function(a) {
        if (a) {
            this.aSymbolInstances = [];
            for (var b = a.length, d = 0; d < b; d++) {
                var e = "#" + a[d].id;
                if (c(e)[0] && this.composition) {
                    var g = this._getSelectorBaseState(e);
                    this.composition.convertElementToSymbol(e, a[d].symbolName, {
                        autoPlay: a[d].autoPlay,
                        variables: a[d].variables,
                        symbolBaseState: g
                    });
                    this.aSymbolInstances.push(e);
                }
            }
        }
    };
    Y = function(a, b) {
        if (a) {
            var d = c(this.element)[0].id, e = a.id;
            e && "" !== e || (e = A._makeUniqueID());
            for (var d = d + "_" + e, g = b.length, f = 0; f < g; f++) b[f].id === a.id && (b[f].id = d);
            this.idLookup = this.idLookup || {};
            this.idLookup["#" + d] = e;
            this.setVariable("_" + e, "#" + d);
            a.oldId = a.id;
            a.id = d;
            if (a.c) for (e = a.c.length, d = 0; d < e; d++) Y.call(this, a.c[d], b);
        }
    };
    ca = function() {
        return A.getParentSymbol(this.element);
    };
    Z = function(a) {
        a && (this.aSymbolInstances || (this.aSymbolInstances = []), this.aSymbolInstances.push(a.getSymbolElement()));
    };
    c.extend(A.prototype, b.Notifier.prototype, {
        constructor: A,
        _init: function(a, e) {
            var h;
            if (e && (c.extend(this.options, e), c.isArray(e.observers) && e.observers.length)) {
                var q = e.observers.length;
                for (h = 0; h < q; h++) this.addObserver(e.observers[h]);
            }
            if (!this.options.data) return null;
            this.element = a;
            this.composition = this.options.composition;
            q = d.call(this);
            this.notifyObservers("onPreSymbolInit", q);
            h = d.call(this);
            if (q.performDefaultAction) {
                q = c(a);
                a[0].edgeSymbol = this;
                q[0].id || (q[0].id = A._makeUniqueID());
                var k = this, C = this.options.data;
                this.variableValues = g.call(this);
                c.extend(this.variableValues, this.options.variables);
                this.options.opts && c.extend(this.variableValues, this.options.opts.variables);
                var M = "#" + c(this.element)[0].id;
                this.setVariable("_Stage", M);
                this.setVariable("_stage", M);
                this.setVariable("_" + q[0].id, M);
                q.find("*").each(function(a, b) {
                    b.id && k.setVariable("_" + b.id, "#" + b.id);
                });
                this.symbolBaseStateOverrides = this.options.opts.symbolBaseState;
                C.content && n.call(this);
                C.actions && c.extend(this, C.actions);
                if (C.effectors) {
                    this.effectors = {};
                    for (var p in C.effectors) C.effectors.hasOwnProperty(p) && (this.effectors[N(p, this.variableValues)] = C.effectors[p]);
                }
                C.timelines && m.call(this, C.timelines, C.states);
                C.bindings && C.bindings.length && f.call(this, C.bindings);
                if ("object" === typeof this.options.opts.autoPlay) for (var s in this.options.opts.autoPlay) this.options.opts.autoPlay.hasOwnProperty(s) && this.setAutoPlay(this.options.opts.autoPlay[s], s);
                this.stageIsBody = p = "BODY" === q[0].nodeName;
                C.content && C.content.dom && !p && (p = q.css("position"), "absolute" !== p && "relative" !== p && q.css("position", "relative"));
                this.gpuAccelerate = C.gpuAccelerate;
                "undefined" === typeof this.gpuAccelerate && (this.gpuAccelerate = !0);
                this.gpuAccelerate = this.gpuAccelerate && b.supported.cssTransform3d;
                p = navigator.userAgent;
                s = "webkitAppearance" in document.documentElement.style;
                if (/Macintosh/.test(p) || s && /Windows NT/.test(p)) this.gpuAccelerate = !1;
                /Macintosh/.test(p) && /Safari/.test(p) && !/Chrome/.test(p) && /Version\/5\.1/.test(p) && (this.gpuAccelerate = !0);
                C = /Version\/(\d+)/.exec(p);
                /Macintosh/.test(p) && /Safari/.test(p) && !/Chrome/.test(p) && C && 1 < C.length && C[1] && 6 <= parseInt(C[1], 10) && (this.gpuAccelerate = !0);
                (C = /Chrome\/(\d+)/.exec(p)) && 1 < C.length && C[1] && 21 <= parseInt(C[1], 10) && (this.gpuAccelerate = !0);
                s && (/iPad/.test(p) || /iPod/.test(p) || /iPhone/.test(p)) && (this.gpuAccelerate = !0);
                (this.getComposition().compReadyCalled || window.edge_authoring_mode) && l.call(this);
                p = q[0].style.webkitTransform;
                this.gpuAccelerate && q[0].style && ("undefined" === typeof p || "" === p || "none" === p) ? window.edge_authoring_mode && "BODY" === q[0].nodeName || (q[0].style.webkitTransform = "translateZ(0)") : !q[0].style.zIndex && window.edge_authoring_mode && (q[0].style.zIndex = 0);
                this.notifyObservers("onPostSymbolInit", h);
                this.notifyObservers("creationComplete", h);
                return this;
            }
            this.notifyObservers("onPostSymbolInit", h);
        },
        _flushCache: function() {
            var a = this.timelines, b;
            for (b in a) if (a.hasOwnProperty(b)) {
                var c = b, d = this.timelines[c], d = F.call(this, c, d.toState, d.fromState);
                (d = this.timelineCache[d]) && d.updateFinalizer && d.updateFinalizer && d.removeObserver(d.updateFinalizer);
                var d = c, e = this.timelines[d], e = F.call(this, d, e.toState, e.fromState);
                if (e = this.timelineCache[e]) this.timelineObservers || (this.timelineObservers = {}), 
                this.timelineObservers[d] = e.observers.slice(0);
                c = F.call(this, c);
                this.timelineCache[c] = null;
                this.timelineStateMap = {};
                this.toStateCache = this.fromStateCache = null;
            }
        },
        play: function(a, b, c) {
            var d = x.call(this), e = {
                dontNotify: !0
            }, g = q.call(this, d);
            g && g.stop(e);
            return this.playTimeline(d, a, b, c);
        },
        playTimeline: function(a, b, g, f) {
            var n = h.call(this, "onPreSymbolPlay", a, f);
            if (void 0 !== typeof n) {
                b = e.call(this, a, b);
                var l;
                if ("string" === typeof a && this.timelines) {
                    var m = q.call(this, a);
                    if (m) {
                        if ("undefined" === typeof b || null === b) if (0 > m.getCurrentPosition() || m.getCurrentPosition() >= m.getDuration()) b = 0;
                        H.call(this, a);
                        l = f || {};
                        c.extend(l, {
                            variables: this.variableValues,
                            startPos: b
                        });
                        l.executeTriggers = g;
                        c.extend(l, n);
                        m.currentDirection = "forward";
                    }
                    this._play(a, l);
                }
                a = d.call(this, {
                    timeline: a,
                    tlOptions: l
                });
                this.notifyObservers("onPostSymbolPlay", a);
                return this;
            }
        },
        playReverse: function(a, b, c) {
            return this.playTimelineReverse(x.call(this), a, b, c);
        },
        playTimelineReverse: function(a, b, g, f) {
            var l = h.call(this, "onPreSymbolPlayReverse", a, f);
            if (void 0 !== typeof l) {
                f = f || {};
                A.startClock();
                f.externalClock = !0;
                b = e.call(this, a, b);
                if ("string" === typeof a) {
                    f = q.call(this, a);
                    if ("undefined" === typeof b || null === b) b = f.currentPosition, 0 === b && (b = f.getDuration());
                    b = {
                        variables: this.variableValues,
                        playDirection: "reverse",
                        startPos: b
                    };
                    c.extend(b, l);
                    b.executeTriggers = g;
                    f.currentDirection = "reverse";
                    f.play(b);
                }
                a = d(this, {
                    timeline: a,
                    tlOptions: l
                });
                this.notifyObservers("onPostSymbolPlayReverse", a);
                return this;
            }
        },
        seek: function(a, b) {
            return this.seekTimeline(x.call(this), a, b);
        },
        seekTimeline: function(a, b, g) {
            g = h.call(this, "onPreSymbolSeek", a, g);
            if (void 0 === typeof g) return null;
            b = e.call(this, a, b);
            if ("string" === typeof a) {
                H.call(this, a);
                var f = {
                    variables: this.variableValues
                };
                c.extend(f, g);
                this.timelines && aa.call(this, a, b, f);
            }
            a = d.call(this, {
                timeline: a,
                tlOptions: g
            });
            this.notifyObservers("onPostSymbolSeek", a);
            return null;
        },
        stop: function(a, b) {
            return this.stopTimeline(x.call(this), a, b);
        },
        stopTimeline: function(a, b, d) {
            d = h.call(this, "onPreSymbolStop", a, d);
            if (void 0 === typeof d) return null;
            if ("string" === typeof a) {
                var g = {
                    variables: this.variableValues
                };
                c.extend(g, d);
                this.timelines && ("undefined" === typeof b ? (a = q.call(this, a)) && a.stop(void 0) : ("string" === typeof b && (b = e.call(this, a, b)), 
                aa.call(this, a, b, g)));
            }
        },
        getPosition: function() {
            return this.getTimelinePosition(x.call(this));
        },
        getTimelinePosition: function(a) {
            if ("string" === typeof a && (a = q.call(this, a))) return a.getCurrentPosition();
        },
        getDuration: function() {
            return this.getTimelineDuration(x.call(this));
        },
        getTimelineDuration: function(a) {
            if ("string" === typeof a && (a = q.call(this, a))) return Math.round(a.getDuration());
        },
        isPlaying: function() {
            return this.isTimelinePlaying(x.call(this));
        },
        isTimelinePlaying: function(a) {
            return "string" !== typeof a ? void 0 : q.call(this, a).playing ? !0 : !1;
        },
        isPlayDirectionReverse: function() {
            return this.isTimelinePlayDirectionReverse(x.call(this));
        },
        isTimelinePlayDirectionReverse: function(a) {
            if ("string" === typeof a) {
                a = q.call(this, a);
                if (a.currentContext) {
                    if ("reverse" === a.currentContext.playDirection) return !0;
                } else if ("reverse" === a.currentDirection) return !0;
                return !1;
            }
        },
        getLabelPosition: function(a) {
            return e.call(this, x.call(this), a);
        },
        lookupSelector: function(a) {
            if ("string" === typeof a) try {
                return N("${_" + a + "}", this.variableValues);
            } catch (b) {}
        },
        getComposition: function() {
            return this.composition;
        },
        getSymbolElementNode: function() {
            return c(this.element)[0];
        },
        getSymbolElement: function() {
            return c(this.element);
        },
        getSymbolTypeName: function() {
            return this.options.data.typeName;
        },
        setAutoPlay: function(a, b) {
            b && 0 !== b.length || (b = x.call(this));
            this.autoPlay[b] = void 0;
        },
        getAutoPlay: function(a) {
            a && 0 !== a.length || (a = x.call(this));
            return this.autoPlay[a];
        },
        _playAuto: function(a) {
            for (var b in this.timelines) if (this.timelines.hasOwnProperty(b)) {
                var c = this.getAutoPlay(b);
                if ("undefined" === typeof c) {
                    var d = this.getTimelineData(b);
                    d && (c = d.autoPlay);
                }
                "undefined" !== typeof c && "true" !== c && !0 !== c || this.playTimeline(b, 0, void 0, {
                    firstUpdate: !0
                });
            }
            if (a && this.aSymbolInstances) for (b = this.aSymbolInstances.length, c = 0; c < b; c++) (d = A.get(this.aSymbolInstances[c])) && d._playAuto(a);
        },
        getVariable: function(a) {
            return this.variableValues[a];
        },
        setVariable: function(a, b) {
            this.variableValues[a] = b;
            if (a) {
                var c = this.getVariable(a), c = d.call(this, {
                    variableValue: c
                });
                this.notifyObservers("variableChanged:" + a, c);
            }
        },
        destroy: function() {
            c(this.ele)[0].edgeSymbol = void 0;
            return this;
        },
        getTimelineData: function(a) {
            return this.timelines[a];
        },
        _getBaseStateName: function() {
            var a = this.options.data.baseState;
            a || (a = this.defaultBaseState);
            return a;
        },
        _getSelectorBaseState: function(a) {
            if ("string" === typeof a) if (this.idLookup && this.idLookup[a]) a = "${_" + this.idLookup[a] + "}"; else if (-1 === a.search(/\$\{/)) {
                if (-1 !== a.search(/\#/)) {
                    var b = this.$(a);
                    b && b.get(0) && b.get(0).id && (a = b.get(0).id);
                }
                a = "${_" + a + "}";
            }
            var b = this._getBaseStateName(), c = null;
            this.options.data.states && this.options.data.states[b] && (c = this.options.data.states[b][a]);
            return c;
        },
        _symbolBaseStateHasOverride: function(a, b) {
            if (this.symbolBaseStateOverrides) for (var c = 0; c < this.symbolBaseStateOverrides.length; c++) if (this.symbolBaseStateOverrides[c][0] == a && this.symbolBaseStateOverrides[c][1] == b) return !0;
            return !1;
        },
        _getTimeline: function(c, d, e) {
            var g = F.call(this, c, d, e);
            if (this.timelineCache[g]) return this.timelineCache[g];
            if (!this.getTimelineData(c)) return null;
            var f = this.getTimelineData(c).timeline;
            if (d || e) f = b.cloneJSONObject(f); else for (var h = f.length - 1; 0 <= h; h--) "injected" === f[h].id && f.splice(h, 1);
            for (var q = f.length, l = {}, n = {}, m, k, h = 0, p, s, t = 0; t < q; t++) if (k = f[t], 
            k.tween && (m = k.tween[1], l[m] || (l[m] = []), l[m].push(k), m = k.tween[0] + ":" + k.tween[1] + ":" + ("motion" === k.tween[0] ? "location" : k.tween[2]), 
            n[m] || (n[m] = []), n[m].push(k)), k.tween || k.trigger) p = k.duration || 0, h = Math.max(h, k.position + p);
            k = function(a, b) {
                return a.position - b.position;
            };
            for (m in n) n.hasOwnProperty(m) && n[m].sort(k);
            var r, v, u, w, z, y;
            if (d) for (r in d = I.call(this, this.states[d]), d) if (d.hasOwnProperty(m)) for (t = d[r], 
            p = l[r], v = t.length, z = 0; z < v; z++) for (k = t[z], u = k[0], w = k[1], s = k[2], 
            s = -1, q = p.length, y = 0; p && y < q; y++) k = p[y], m = k.tween, m[0] === u && m[2] === w && (-1 === s || k.position + k.duration > s) && (s = k.position + k.duration);
            d = {};
            if (e) for (r in e = this.states[e], e) if (e.hasOwnProperty(r)) for (t = e[r], 
            p = l[r], v = t.length, z = 0; z < v; z++) if (k = t[z], u = k[0], w = k[1], s = k[2], 
            "${symbolSelector}" !== r || !this._symbolBaseStateHasOverride(u, w)) {
                d[u + ":" + r + ":" + w] = s;
                var x = null, A = -1, q = 0;
                p && (q = p.length);
                for (y = 0; p && y < q; y++) k = p[y], m = k.tween, m[0] === u && m[2] === w && (-1 === A || k.position < A) && (x = k, 
                A = k.position);
                x && (4 > x.tween.length || !x.tween[4] || "undefined" === typeof x.tween[4].fromValue) && (x.tween[4] || (x.tween[4] = {}), 
                x.tween[4].fromValue = s);
            }
            for (m in n) n.hasOwnProperty(m) && (0 < n[m][0].position && (e = d[m], n[m][0].tween && "motion" === n[m][0].tween[0] ? (k = n[m][0], 
            r = k.tween[2][0][0], l = k.tween[2][0][1], r = a(k.tween[1], {
                x: r,
                y: l
            }, {
                x: r,
                y: l
            }, 0, Math.max(0, k.position - 1)), r.id = "injected", f.push(r)) : void 0 !== e && (k = b.cloneJSONObject(n[m][0]), 
            k.tween[3] = k.tween[4].fromValue = e, k.position = 0, k.duration = 0, k.id = "injected", 
            f.push(k))), s = n[m].length - 1, 0 <= s && (k = n[m][s], e = k.position + k.duration, 
            e < h && (r = null, k.tween && "motion" === k.tween[0] ? (t = k.tween[2].length - 1, 
            r = k.tween[2][t][0], l = k.tween[2][t][1], r = a(k.tween[1], {
                x: r,
                y: l
            }, {
                x: r,
                y: l
            }, e, h - e)) : (r = b.cloneJSONObject(n[m][s]), r.tween[4] && (r.tween[4].fromValue = k.tween[3]), 
            r.position = h, r.duration = 0), r && (r.id = "injected", r.opts = r.opts || {}, 
            r.opts.reverseOnly = !0, f.push(r)))));
            n = this.getTimelineData(c);
            "number" === typeof n.duration && 1 <= n.duration - h && (k = {
                id: "rest",
                tween: [ "style", "${_Stage}", "-edge_resting", "100%", {
                    fromValue: "0%"
                } ],
                position: h,
                duration: Math.round(n.duration - h)
            }, f.push(k));
            f = O.call(this, f);
            D.call(this, c, f);
            return this.timelineCache[g] = f;
        },
        _play: function(a, b) {
            A.startClock();
            b.externalClock = !0;
            b.dontForceZ = !this.gpuAccelerate;
            var d = this.getTimelineData(a);
            if (d && (d = d.toState, a)) {
                var e = q.call(this, a);
                if (e) {
                    if (d && ("object" !== typeof b || "string" !== typeof b.playDirection || "reverse" !== b.playDirection)) {
                        if (!this.tlPlayHandler) {
                            var g = this;
                            this.tlPlayHandler = {};
                            this.tlPlayHandler.onComplete = function() {
                                ga.call(g, this.timelineName, this.opts);
                                this.tl.removeObserver(g.tlPlayHandler);
                            };
                        }
                        c.extend(this.tlPlayHandler, {
                            tl: e,
                            timelineName: a,
                            opts: b
                        });
                        e.addObserver(this.tlPlayHandler);
                    }
                    e.play(b);
                }
            }
        },
        _executeSymbolAction: function(a, c) {
            if (!("object" !== typeof c || 3 > c.length)) {
                var d = c[0], e = b.Symbol.get(this.$(c[1]));
                if (e && d) {
                    var g = c[2];
                    g && "object" === typeof g || (g = null);
                    e[d].apply(e, g);
                }
            }
        },
        eSA: function(a, b) {
            this._executeSymbolAction(a, b);
        },
        _executeMediaAction: function(a, b) {
            if (!("object" !== typeof b || 3 > b.length)) {
                var c = b[0], d = this.$(b[1])[0];
                if (d && c) {
                    var e = b[2];
                    e && "object" === typeof e || (e = null);
                    "play" === c ? (e && 0 < e.length && "number" === typeof e[0] && (d.currentTime = e[0]), 
                    d.play()) : "pause" === c && d.pause();
                }
            }
        },
        eMA: function(a, b) {
            this._executeMediaAction(a, b);
        },
        createChildSymbol: function(a, b, c, d) {
            if (a && b && a !== this.getSymbolTypeName() && (b = this.$(b)) && b[0] && (a = R.call(this.getComposition(), a, b, c, d))) return Z.call(this, a[0]), 
            a[0];
        },
        deleteSymbol: function(a) {
            a = a || {};
            var b;
            this.composition && (b = this.composition.getSymbols());
            if (b) {
                var e = d.call(this, {});
                this.notifyObservers("onPreRemove", e);
                this.notifyObservers("beforeDeletion", e);
                if (e.performDefaultAction) {
                    var g, f, h;
                    if (this.aSymbolInstances) for (;0 < this.aSymbolInstances.length; ) h = this.aSymbolInstances[0], 
                    this.aSymbolInstances.splice(0, 1), this.composition.removeSymbol(h, a);
                    if (this.timelines) for (g in this.timelines) this.timelines.hasOwnProperty(g) && (h = q.call(this, g)) && h.stop(void 0);
                    var k = this.getParentSymbol();
                    if (k && k.aSymbolInstances) for (f = k.aSymbolInstances.length, g = 0; g < f; g++) if (h = k.aSymbolInstances[g], 
                    k.getSymbol(h) === this) {
                        k.aSymbolInstances.splice(g, 1);
                        break;
                    }
                    if (this.idLookup) for (var n in this.idLookup) this.idLookup.hasOwnProperty(n) && c(n).removeData("symParent");
                    n = this.element;
                    c(n)[0].edgeSymbol = void 0;
                    a._keepElement ? c(n).empty() : c(n).remove();
                    for (g = b.length; 0 <= g; g--) if (b[g] === this) {
                        b.splice(g, 1);
                        break;
                    }
                    this.element = null;
                    this.notifyObservers("onPostRemove", e);
                    this.observers = [];
                }
            }
        },
        getSymbol: function(a) {
            a = this.$(a);
            return A.get(a);
        },
        getChildSymbols: function() {
            var a = [];
            if (this.aSymbolInstances) for (var b = 0; b < this.aSymbolInstances.length; b++) {
                var c = this.getSymbol(this.aSymbolInstances[b]);
                c && a.push(c);
            }
            return a;
        },
        getParentSymbol: function() {
            return ca.call(this);
        },
        $: function(a) {
            var b = a;
            "string" === typeof a && (-1 === a.search(/\$\{/) ? (b = this.lookupSelector(a), 
            "undefined" === typeof b && (b = a)) : b = N(a, this.variableValues));
            return c(b);
        }
    });
    A.prototype.getParameter = A.prototype.getVariable;
    A.prototype.setParameter = A.prototype.setVariable;
    A.get = function(a) {
        return (a = c(a)[0]) ? a.edgeSymbol : void 0;
    };
    A.getDefaultEasing = function(a) {
        return b.TimelineObject.defaultEasing;
    };
    A.getParentSymbol = function(a) {
        a = c(a).parents();
        for (var b = a.length, d = 0; d < b; d++) {
            var e = A.get(a[d]);
            if (e) return e;
        }
        return null;
    };
    A.startClock = function() {
        if (!A.timerFunc) {
            var a = 1e3 / b.Timeline.config.fps;
            A.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
            var c = navigator.userAgent;
            "webkitAppearance" in document.documentElement.style && /OS 6/.test(c) && (/iPad/.test(c) || /iPod/.test(c) || /iPhone/.test(c)) && (A.requestAnimationFrame = null);
            A.requestAnimationFrame = A.requestAnimationFrame || function(b) {
                window.setTimeout(b, a);
            };
            A.timerFunc = function() {
                b.Timeline.tick();
                A.requestAnimationFrame.call(window, A.timerFunc);
            };
            A.requestAnimationFrame.call(window, A.timerFunc);
        }
    };
    var T = function(a, c, d, e, g, f, h, q) {
        var n = b.getCompositionSymbolDefns(a)[c];
        if (n) {
            n.actions || (n.actions = {});
            h = A._makeUniqueID();
            n.actions[h] = g;
            n.bindings || (n.bindings = []);
            var l = [ [ f, d, e ], h ];
            n.bindings.push(l);
            if (null != b.compositions && (a = b.compositions[a], null != a && (a = a.getSymbols(), 
            null != a))) for (var n = a.length, m, p = 0; p < n; p++) {
                m = a[p];
                var s = m.getSymbolTypeName();
                if (c === s && (s = {}, s[h] = g, u.call(m, s), k.call(m, l), "timeline" === f)) {
                    var r = m;
                    m = d;
                    var s = e, t = q, v = void 0, v = F.call(r, m, r.toState, r.fromState), r = r.timelineCache[v], v = void 0;
                    r && (v = {
                        trigger: [ s, m ],
                        position: t,
                        duration: 0,
                        id: s
                    }, v = b.Timeline.createTriggerFromData(r, v), r.add(v, t, 0, ""));
                }
            }
        } else b.logError("$.Edge.Symbol." + h + ": symbol not found");
    };
    A.bindElementAction = function(a, b, c, d, e) {
        T(a, b, c, d, e, "element", "bindElementAction");
    };
    A.bindTimelineAction = function(a, b, c, d, e) {
        T(a, b, c, d, e, "timeline", "bindTimelineAction");
    };
    A.bindTriggerAction = function(a, c, d, e, g) {
        var f = b.getCompositionSymbolDefns(a)[c];
        if (f) if (f = f.timelines[d].timeline) {
            var h = "trig_" + b.Symbol._makeUniqueID();
            f.push({
                trigger: [ h, d ],
                position: e,
                duration: 0,
                id: h
            });
            T(a, c, d, h, g, "timeline", "bindTriggerAction", e);
        } else b.logError("$.Edge.Symbol.bindTriggerAction: timeline not found"); else b.logError("$.Edge.Symbol.bindTriggerAction: symbol not found");
    };
    A.bindSymbolAction = function(a, b, c, d) {
        T(a, b, "", c, d, "symbol", "bindSymbolAction");
    };
    A.bindVariableAction = function(a, b, c, d) {
        T(a, b, "", "variableChanged:" + c, d, "symbol", "bindVariableAction");
    };
    A.bindVariableActionToSymbol = function(a, b, c) {
        if (a = A.get(a)) {
            b = A._parseVariableName(b);
            var d = "variableChanged:" + b;
            b = A._makeUniqueID();
            var d = [ [ "symbol", "", d ], b ], e = {};
            e[b] = c;
            u.call(a, e);
            k.call(a, d);
        }
    };
    var ea = new Date().getTime(), fa = function() {
        for (var a = "eid_" + ea++; 0 < c("#" + a).length; ) a = "eid_" + ea++;
        return a;
    };
    A._makeUniqueID = fa;
    b.importSymbolDefinitions = function() {};
    b.registerFonts = function(a) {
        if (a) {
            var d, e, g, f, h;
            b.fonts || (b.fonts = {});
            for (var q in a) if (a.hasOwnProperty(q) && !b.fonts[q] && (g = a[q]) && "" !== g) {
                d = !1;
                for (var k in b.fonts) b.fonts.hasOwnProperty(k) && b.fonts[k] === g && (d = !0);
                if (!d) if (b.fonts[q] = g, d = g.indexOf("//use.typekit.com/"), 0 > d && (d = g.indexOf("//use.typekit.net/")), 
                0 > d && (d = g.indexOf("//use.edgefonts.net/"), h = 0 < d, window._adobewebfontsappname_ = "Animate"), 
                0 < d) e = g.indexOf('"', d + 1), 0 < e && (d = g.substring(d, e), h && "file:" === window.location.protocol && (d = "http:" + d), 
                g = document.createElement("script"), g.src = d, g.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(g), 
                h || (f = function() {
                    try {
                        window.Typekit.load();
                    } catch (a) {
                        setTimeout(f, 100);
                    }
                }, setTimeout(f, 100))); else if (0 > g.indexOf("<script")) c("head").append(g); else if (d = g.indexOf(">"), 
                e = g.indexOf("</script>"), 0 < d && 0 < e) {
                    g = g.substring(d + 1, e);
                    try {
                        window.eval(g);
                    } catch (n) {}
                }
            }
        }
    };
    var Q = 0;
    b.P = function(a, b, c, d, e) {
        var g = b, f = "";
        this.p = a;
        this.tt = c || "style";
        e || "" === e ? this.u = e : this.u || "" === this.u || (this.u = "px");
        "number" === typeof b && (f = this.u, g = b + f);
        this.vt = d;
        null != b && (this.st[this.s] || (this.st[this.s] = []), this.st[this.s][this.st[this.s].length] = this.vt ? [ this.tt, this.p, g, {
            valueTemplate: this.vt
        } ] : [ this.tt, this.p, g ], this.last = b);
        return this;
    };
    b.T = function(a, b, c, d, e) {
        var g = {}, f = "", f = b;
        e || 0 === e || (e = this.last);
        if ("number" === typeof b) {
            f = this.u;
            if (e || 0 === e) e += f;
            f = b + f;
        }
        if (e || 0 === e) g.f = e;
        this.vt && (g.vt = this.vt);
        d || (d = this.lastE);
        d || (d = "linear");
        null == c && (c = 0);
        this.tl[this.tl.length] = "motion" === this.tt ? {
            id: "dg" + ++Q,
            tw: [ this.tt, this.s, f ],
            p: Math.floor(1e3 * a),
            d: Math.floor(1e3 * c),
            e: d
        } : {
            id: "dg" + ++Q,
            tw: [ this.tt, this.s, this.p, f, g ],
            p: Math.floor(1e3 * a),
            d: Math.floor(1e3 * c),
            e: d
        };
        this.last = b;
        this.lastE = d;
        return this;
    };
    b.A = function(a, c, d) {
        c || (c = this.tl, d = this.st);
        return {
            tl: c,
            st: d,
            s: a,
            A: b.A,
            P: b.P,
            T: b.T
        };
    };
    b.compositions = b.compositions || {};
    b.compositionDefns = b.compositionDefns || {};
    b.compositionFonts = b.compositionFonts || {};
    b.compositionOpts = b.compositionOpts || {};
    b.compositionReadyHandler = b.compositionReadyHandler || {};
    b.registerSymbolDefns = function(a, c) {
        if (a && !(0 >= a.length) && b.compositionDefns[a]) {
            var d, e, g, f;
            for (d in c) if (c.hasOwnProperty(d)) {
                var h = c[d];
                h.typeName = d;
                h.v && (h.version = h.v);
                h.v && (h.minimumCompatibleVersion = h.mv);
                h.b && (h.build = h.b);
                h.bS && (h.baseState = h.bS);
                h.iS && (h.initialState = h.iS);
                null != h.gpu && (h.gpuAccelerate = h.gpu);
                null != h.rI && (h.resizeInstances = h.rI);
                h.cn && (h.content = h.cn);
                if (h.content && (g = h.content, null != g.sI && (g.symbolInstances = h.content.sI), 
                g.symbolInstances)) for (var q = 0; q < g.symbolInstances.length; q++) f = g.symbolInstances[q], 
                null != f.sN && (f.symbolName = f.sN), null != f.a && (f.autoPlay = f.a), null != f.x && (f.variables = f.x);
                h.cg && (h.centerStage = h.cg);
                h.stf && (h.scaleToFit = h.stf);
                h.x && (h.variables = h.x);
                h.s && (h.states = h.s);
                h.tl && (h.timelines = h.tl);
                for (e in h.timelines) if (h.timelines.hasOwnProperty(e)) for (q = h.timelines[e], 
                q.fS && (q.fromState = q.fS), q.tS && (q.toState = q.tS), null != q.d && (q.duration = q.d), 
                null != q.a && (q.autoPlay = q.a), q.l && (q.labels = q.l), q.tt && (q.timeline = q.tt), 
                g = 0; g < q.timeline.length; g++) {
                    f = q.timeline[g];
                    f.tween || null === f.tw || "undefined" === typeof f.tw || (f.tween = f.tw, f.tw = void 0);
                    if (f.tween && 3 < f.tween.length) {
                        var k = f.tween[4];
                        k && (k.fromValue || null === k.f || (k.fromValue = k.f, k.f = void 0), k.valueTemplate || null === k.vt || (k.valueTemplate = k.vt, 
                        k.vt = void 0));
                    }
                    f.position || null === f.p || "undefined" === typeof f.p || (f.position = f.p, f.p = void 0);
                    f.duration || null === f.d || "undefined" === typeof f.d || (f.duration = f.d, f.d = void 0);
                    f.easing || null === f.e || "undefined" === typeof f.e || (f.easing = f.e, f.e = void 0);
                    f.trigger || null === f.tr || "undefined" === typeof f.tr || (f.trigger = f.tr, 
                    f.tr = void 0);
                }
            }
        }
    };
    b.getPxValue = function(a) {
        if (!a) return 0;
        if ("number" === typeof a) return a;
        var b = a.indexOf("px");
        return 0 < b ? parseFloat(a.substring(0, b)) : parseFloat(a);
    };
    b.mapContentToTranslate = function(a, c, d, e, g) {
        var f, h, q;
        for (f = 0; f < a.length; f++) h = a[f], q = "${_" + h.id + "}", d[q] && (c[q] = !0, 
        h.rect || (h.rect = h.r, h.r = void 0, h.rect || (h.rect = [ 0, 0, 0, 0 ])), h.rect && (h.transform || (h.transform = h.tf, 
        h.tf = void 0, h.transform || (h.transform = [])), h.transform[0] || (h.transform[0] = [ 0, 0 ]), 
        b.isPx(h.rect[0]) && (h.transform[0][0] = b.getPxValue(h.rect[0]), e[q] = h.transform[0][0], 
        h.rect[0] = "0px"), b.isPx(h.rect[1]) && (h.transform[0][1] = b.getPxValue(h.rect[1]), 
        g[q] = h.transform[0][1], h.rect[1] = "0px"))), h.children ? b.mapContentToTranslate(h.children, c, d, e, g) : h.c && b.mapContentToTranslate(h.c, c, d, e, g);
    };
    b.isPx = function(a) {
        return a && "string" === typeof a && (0 < a.indexOf("%") || 0 < a.indexOf("em") || "auto" === a || "null" === a) ? !1 : !0;
    };
    b.mapSymToTranslate = function(a) {
        var c, d, e, g, f, h, q, k, n, m = {}, l = {}, p, s, r, t = {};
        d = {};
        if (a.timelines) for (n in a.timelines) if (a.timelines.hasOwnProperty(n) && (h = a.timelines[n], 
        g = h.timeline)) for (h = 0; h < g.length; h++) (f = g[h].tween) && ("left" == f[2] || "top" == f[2]) && b.isPx(f[3]) && (d[f[1]] = !0);
        a.content && a.content.dom && b.mapContentToTranslate(a.content.dom, t, d, m, l);
        for (c in a.states) if (a.states.hasOwnProperty(c)) for (e in d = a.states[c], d) if (d.hasOwnProperty(e) && t[e]) {
            g = d[e];
            f = [];
            s = p = r = !1;
            for (h = 0; h < g.length; h++) k = g[h], "left" !== k[1] && "top" !== k[1] || !b.isPx(k[2]) ? ("transform" === k[0] && (r = !0), 
            f[f.length] = g[h]) : (r = !0, "left" === g[h][1] && (q = "translateX", p = !0), 
            "top" === g[h][1] && (q = "translateY", s = !0), k = [ "transform" ], k[1] = q, 
            k[2] = b.getPxValue(g[h][2]) + "px", f[f.length] = k);
            r && (!p && m[e] && (f[f.length] = [ "transform", "translateX", b.getPxValue(m[e]) + "px" ]), 
            !s && l[e] && (f[f.length] = [ "transform", "translateY", b.getPxValue(l[e]) + "px" ]));
            d[e] = f;
        }
        if (a.timelines) for (n in a.timelines) if (a.timelines.hasOwnProperty(n) && (h = a.timelines[n], 
        g = h.timeline)) for (h = 0; h < g.length; h++) (f = g[h].tween) && ("left" == f[2] || "top" == f[2]) && b.isPx(f[3]) && t[f[1]] && ("left" === f[2] ? q = "translateX" : "top" === f[2] && (q = "translateY"), 
        f[0] = "transform", f[2] = q);
    };
    b.mapToTranslate = function(a) {
        if (!window.edge_authoring_mode) for (symName in a) a.hasOwnProperty(symName) && b.mapSymToTranslate(a[symName]);
    };
    b.registerCompositionDefn = function(a, c, d, e, f) {
        window.edge_authoring_mode && window.edge_symbol_import_mode && window.edge_comp_id ? b.importSymbolDefinitions(window.edge_comp_id, c, d, e) : a && 0 < a.length && !b.compositionDefns[a] && (b.compositionDefns[a] = {
            symbolData: c,
            resources: e,
            readyToLaunch: !1,
            opts: f
        }, b.registerSymbolDefns(a, c), b.mapToTranslate(c), b.compositionFonts[a] = d, 
        b.compositionOpts[a] = f || {}, b.registerFonts(d));
    };
    b.getCompositionSymbolDefns = ba;
    b.getCompositionResources = function(a) {
        return b.compositionDefns[a].resources;
    };
    b.getComposition = function(a) {
        if (a) return b.compositions[a];
    };
    b.registerCompositionReadyHandler = function(a, c, d) {
        d = d || {};
        (!window.edge_authoring_mode || d._tool || window.edge_remote_authoring) && a && c && (b.compositions[a] ? b.compositions.ready(c) : (b.compositionReadyHandler[a] = b.compositionReadyHandler[a] || [], 
        b.compositionReadyHandler[a].push(c)));
    };
    var S = b.Composition = function(a, d, e) {
        e = e || {};
        if (!window.edge_authoring_mode || e._tool || window.edge_remote_authoring) {
            b.Notifier.call(this);
            c.extend(this, b.Composition.config);
            c.extend(this, e);
            var f = "." + a, g = !1, h = 0, q, k = this;
            e = b.compositionReadyHandler[a];
            var n = b.compositionDefns[a].resources;
            symbolData = this.symbolDefns = ba(a);
            this.compId = a;
            h = this._createEvent();
            this.notifyObservers("onPreCompInit", h);
            var m = this._createEvent();
            if (h.performDefaultAction) {
                window.edge_authoring_mode || (data = symbolData.stage, this.alreadyWrapped = p(c(f)), 
                !data || "height" !== data.scaleToFit && "width" !== data.scaleToFit && "both" !== data.scaleToFit || w(c(f)), 
                !data || "vertical" !== data.centerStage && "horizontal" !== data.centerStage && "both" !== data.centerStage || s(c(f), data));
                this.symbolInstances = [];
                this.imageRequestCount = 0;
                this.imageRequestList = [];
                this.readyList = [];
                this.readyCalled = !1;
                this.$loadCalled = window.AdobeEdge.loaded;
                b.compositions[a] = this;
                this.compReadyCalled = !1;
                this.preloadAudio = b.compositionOpts[a].preloadAudio;
                if (n) for (h = 0; h < n.length; h++) this.requestImage(n[h]);
                ia(ka);
                for (q in d) if (d.hasOwnProperty(q) && (f = c(d[q]), 0 < f.size())) {
                    g = !0;
                    break;
                }
                g || (g = c("body"), c(g).addClass(a));
                for (q in d) d.hasOwnProperty(q) && (f = c(d[q]), f.each(function() {
                    k.convertElementToSymbol(this, q);
                }));
                window.AdobeEdge.loaded ? 0 >= k.imageRequestCount && k.callReadyList() : c(window).load(function() {
                    k.$loadCalled = !0;
                    0 >= k.imageRequestCount && k.callReadyList();
                });
                if (e) for (h = 0; h < e.length; h++) this.ready(e[h]);
            }
            this.notifyObservers("onPostCompInit", m);
        }
    };
    b.Composition.config = b.Composition.config || {};
    c.extend(S.prototype, b.Notifier.prototype, {
        play: function(a) {
            if (!window.edge_authoring_mode || a) if ("undefined" === typeof b.autoPlay || b.autoPlay) {
                a = this.symbolInstances.length;
                for (var c = 0; c < a; c++) this.symbolInstances[c]._playAuto();
            }
        },
        getSymbols: function(a) {
            if (!a) return this.symbolInstances;
            var b = [];
            if (!this.symbolInstances) return b;
            if (this.symbolDefns.hasOwnProperty(a)) for (var c = this.symbolInstances.length, d = 0; d < c; d++) this.symbolInstances[d].getSymbolTypeName() === a && b.push(this.symbolInstances[d]);
            return b;
        },
        ready: function(a) {
            this.readyCalled ? a.call() : this.readyList && this.readyList.push(a);
        },
        getCompId: function() {
            return this.compId;
        },
        requestImage: function(a) {
            function b() {
                f.unbind("load");
                f.unbind("error");
                for (var a = 0; a < d.imageRequestList.length; a++) if (d.imageRequestList[a] === e) {
                    d.imageRequestList.splice(a, 1);
                    break;
                }
                d.imageRequestCount--;
                0 >= d.imageRequestCount && d.$loadCalled && setTimeout(function() {
                    d.callReadyList();
                }, 0);
            }
            "undefined" === typeof A.isOpera && (A.isOpera = /Opera/.test(navigator.userAgent));
            if (A.isOpera && /\.svg$/.test(a)) return null;
            this.imageRequestCount++;
            var d = this, e = new Image(), f = c(e);
            this.imageRequestList.push(e);
            f.load(b);
            f.error(b);
            e.src = a;
            return null;
        },
        requestAudio: function(a) {
            var d = !0;
            if (!1 !== this.preloadAudio) {
                if (r()) return d;
                var e = this, f = new Audio(), g = c(f), h, q, k, n = function() {
                    g.off("canplaythrough");
                    for (h = 0; h < e.imageRequestList.length; h++) if (e.imageRequestList[h] === f) {
                        e.imageRequestList.splice(h, 1);
                        break;
                    }
                    e.imageRequestCount--;
                    0 >= e.imageRequestCount && e.$loadCalled && setTimeout(function() {
                        e.callReadyList();
                    }, 0);
                }, m = !1;
                for (q = 0; q < a.length; q++) if (k = a[q].split("."), k = k[k.length - 1].toLowerCase(), 
                b.supported.audio[k]) {
                    this.imageRequestCount++;
                    this.imageRequestList.push(f);
                    g.on("canplaythrough", n);
                    f.src = a[q];
                    m = !0;
                    break;
                }
                m || (d = !1);
            }
            return d;
        },
        restoreDisplay: function(a, b) {
            var d = this;
            b || c(".edgeLoad-" + d.compId).each(function(a, b) {
                c(b).removeClass("edgeLoad-" + d.compId);
                var e = c(b).data("dispOrig");
                "undefined" !== typeof e && (b.style.display = e);
            });
        },
        installEffectors: function(a, d, e) {
            var f = d.effectors, g = this;
            a = a[0] || a;
            !e && f && f["#" + a.id] && b.Effectors.attach(g, a, f["#" + a.id]);
            c(a).children().each(function(a, c) {
                f && f["#" + c.id] && b.Effectors.attach(g, c, f["#" + c.id]);
                g.installEffectors(c, d, !0);
            });
        },
        instanceReady: function(a) {
            var d = c(a.element);
            d && (b.Effectors && this.installEffectors(d, a), this.restoreDisplay(d));
        },
        callReadyList: function() {
            var a, d, e;
            if (!this.readyCalled) {
                this.imageRequestList = [];
                this.readyCalled = !0;
                if (b.preloadComplete && b.preloadComplete[this.compId]) b.preloadComplete[this.compId]([ this.compId ]);
                for (e = 0; e < this.symbolInstances.length; e++) d = this.symbolInstances[e], l.call(d), 
                this.instanceReady(d);
                for (e = 0; e < this.symbolInstances.length; e++) d = this.symbolInstances[e], a = d.options.data, 
                window.edge_authoring_mode || "height" !== a.scaleToFit && "width" !== a.scaleToFit && "both" !== a.scaleToFit || z(d);
                this.compReadyCalled || (this.compReadyCalled = !0, a = c.Event("compositionReady"), 
                a.compId = this.getCompId(), c(document).trigger(a));
                for (;0 < this.readyList.length; ) this.readyList.shift().call();
                a = c.Event("loaded");
                a.compId = this.getCompId();
                c(document).trigger(a);
            }
        },
        getStage: function() {
            return A.get(c("." + this.getCompId()));
        },
        createSymbolChild: function(a, b, c, d) {
            if ((a = R.call(this, a, b, c, d)) && 0 < a.length && ((c = A.get(b)) || (c = A.getParentSymbol(b)), 
            c)) for (b = 0; b < a.length; b++) Z.call(c, a[b]);
            return a;
        },
        convertElementToSymbol: function(a, b, d) {
            if (a && c(a) && this.symbolInstances && this.symbolDefns[b]) return d = d || {}, 
            d.regenerateID = d.regenerateID || !0, a = new A(c(a), {
                data: this.symbolDefns[b],
                composition: this,
                opts: d
            }), this.symbolInstances.push(a), a;
        },
        removeSymbol: function(a, b) {
            if (this.symbolInstances) {
                var c = A.get(a);
                c && c.deleteSymbol(b);
            }
        },
        _createEvent: function(a) {
            var b = {
                composition: this,
                compId: this.compId,
                performDefaultAction: !0
            };
            c.extend(b, a);
            return b;
        }
    });
    b.launchComposition = function(a) {
        var c = b.compositionDefns[a];
        c && (c.launchCalled = !0, P(a));
    };
    b.okToLaunchComposition = function(a) {
        var c = b.compositionDefns[a];
        c && (c.okToLaunch = !0, P(a));
    };
    b.play = function(a) {
        if (!window.edge_authoring_mode || a) if ("undefined" === typeof b.autoPlay || b.autoPlay) {
            a = this.symbolInstances.length;
            for (var c = 0; c < a; c++) {
                var d = (void 0)[c], e = d.options.data.autoPlay;
                "string" === typeof e && "true" !== e ? d.play(e) : "undefined" !== typeof e && !0 !== e && "true" !== e || d.play("Default Timeline");
            }
        }
    };
    b.logDebug = function(a) {};
    b.logInfo = function(a) {};
    b.logWarn = function(a) {};
    b.logError = function(a) {};
    b.logFatal = function(a) {};
})(jQuery, AdobeEdge);

(function(c, b, p) {
    c.each("touchstart touchmove touchend swipe swipeleft swiperight ".split(" "), function(b, p) {
        c.fn[p] = function(a) {
            return a ? this.bind(p, a) : this.trigger(p);
        };
        c.attrFn && (c.attrFn[p] = !0);
    });
    var w = "ontouchend" in document;
    msTouch = !w && b.navigator.msPointerEnabled;
    touchStartEvent = w ? "touchstart" : "mousedown";
    touchStopEvent = w ? "touchend" : "mouseup";
    touchMoveEvent = w ? "touchmove" : "mousemove";
    c.event.special.swipe = {
        scrollSupressionThreshold: 30,
        durationThreshold: 1e3,
        horizontalDistanceThreshold: 30,
        verticalDistanceThreshold: 75,
        setup: function() {
            var b = c(this);
            msTouch && b.css("-ms-touch-action", "pan-y pinch-zoom double-tap-zoom");
            b.bind(touchStartEvent, function(s) {
                function a(a) {
                    if (d) {
                        var b = a.originalEvent.touches ? a.originalEvent.touches[0] : a;
                        g = {
                            time: new Date().getTime(),
                            coords: [ b.pageX, b.pageY ]
                        };
                        Math.abs(d.coords[0] - g.coords[0]) > c.event.special.swipe.scrollSupressionThreshold && a.preventDefault();
                    }
                }
                var r = s.originalEvent.touches ? s.originalEvent.touches[0] : s, d = {
                    time: new Date().getTime(),
                    coords: [ r.pageX, r.pageY ],
                    origin: c(s.target)
                }, g;
                b.bind(touchMoveEvent, a).one(touchStopEvent, function(n) {
                    b.unbind(touchMoveEvent, a);
                    d && g && g.time - d.time < c.event.special.swipe.durationThreshold && Math.abs(d.coords[0] - g.coords[0]) > c.event.special.swipe.horizontalDistanceThreshold && Math.abs(d.coords[1] - g.coords[1]) < c.event.special.swipe.verticalDistanceThreshold && b.trigger("swipe").trigger(d.coords[0] > g.coords[0] ? "swipeleft" : "swiperight");
                    d = g = p;
                });
            });
        }
    };
    c.each({
        swipeleft: "swipe",
        swiperight: "swipe"
    }, function(b, p) {
        c.event.special[b] = {
            setup: function() {
                c(this).bind(p, c.noop);
            }
        };
    });
})(jQuery, this);

(function(c, b) {
    if ("undefined" === typeof b.DeclareMarkup) {
        var p = function() {
            function w(a, b, d) {
                c(a).get(0) && c(a).css(b, d);
            }
            function z(a, b, d) {
                c(a).get(0) && c(a).attr(b, d);
            }
            function s(a) {
                var b;
                if ("auto" == a) return a;
                "string" === typeof a && (b = u(a));
                b && b.units || (a += "px");
                return a;
            }
            function a(a, b, c, d) {
                if (c || d && 0 === c) {
                    var f = l(c);
                    (d || 0 < f || "auto" === c) && a.css(b, s(c));
                }
            }
            function r(d, e, f, g, n, m, l) {
                var p = document.getElementById(e), r = !1;
                p || (r = !0, p = document.createElement(d));
                p.id = e;
                p.style.position = "absolute";
                var v = c(p);
                v.data("domDef", f);
                v.addClass(e + "_id");
                r && (f.display && (p.style.display = f.display, "audio" !== d && "video" !== d || v.attr("controls", "none" === f.display ? null : "controls")), 
                window.edge_authoring_mode || (v.data("dispOrig", p.style.display), p.style.display = "none", 
                v.addClass("edgeLoad-" + m.compId)));
                f.className && v.addClass(f.className);
                v.css("margin", "0px");
                e = f.rect;
                a(v, "left", e[0], !0);
                a(v, "top", e[1], !0);
                a(v, "width", e[2]);
                a(v, "height", e[3]);
                a(v, "right", e[4], !0);
                a(v, "bottom", e[5], !0);
                var y = "px", t = "px", x = "left", B = "top";
                "auto" == e[0] ? (y = u(e[4]).units || y, x = "right") : y = u(e[0]).units || y;
                "auto" == e[1] ? (t = u(e[5]).units || t, B = "bottom") : t = u(e[1]).units || t;
                v.data("u_x", y);
                v.data("u_y", t);
                v.data("p_x", x);
                v.data("p_y", B);
                f.sizeRange && (a(v, "min-width", f.sizeRange[0]), a(v, "max-width", f.sizeRange[1]), 
                a(v, "min-height", f.sizeRange[2]), a(v, "max-height", f.sizeRange[3]));
                f.overflow && (v.css("overflow", f.overflow), "hidden" != f.overflow && "scroll" != f.overflow || v.css("text-overflow", "clip"));
                f.autoOrient && "false" !== f.autoOrient && c.data(v[0], "doAutoOrient", "true");
                f.cl && (1 == f.cl.length ? v.css("clip", f.cl[0]) : v.css("clip", "rect(" + f.cl[0] + "px " + f.cl[1] + "px" + f.cl[2] + "px " + f.cl[3] + ")"));
                f.cn && v.attr("controls", f.cn);
                f.al && v.attr("alt", f.al);
                f.tt && v.attr("title", f.tt);
                f.ti && v.attr("tabindex", f.ti);
                f.ap && v.attr("autoplay", f.ap);
                f.lp && v.attr("loop", f.lp);
                if (f.sr) if (1 == f.sr.length) {
                    if (v.attr("src", f.sr[0]), !m.requestAudio([ f.sr[0] ])) return console.log("There was no supported audio!!!"), 
                    null;
                } else {
                    e = [];
                    for (y = 0; y < f.sr.length; y++) e.push(f.sr[y]), t = document.createElement("source"), 
                    c(t).attr("src", f.sr[y]), p.appendChild(t);
                    if (!m.requestAudio(e)) return console.log("There was no supported audio!!!"), null;
                }
                f.cu && v.css("cursor", f.cu);
                f.uc && v.addClass(f.uc);
                f.br && (1 == f.br.length ? v.css("border-radius", s(f.br[0])) : (v.css("border-top-left-radius", f.br[0]), 
                v.css("border-top-right-radius", f.br[1]), v.css("border-bottom-right-radius", f.br[2]), 
                v.css("border-bottom-left-radius", f.br[3])));
                if (f.tf) {
                    e = [];
                    y = [ [ 3, 0 ], [ 3, 0 ], [ 2, 0 ], [ 3, 1 ], [ 2, "50%" ] ];
                    for (t = 0; t < y.length; t++) for (e[t] = [], f.tf[t] || (f.tf[t] = []), x = 0; x < y[t][0]; x++) f.tf[t][x] || (f.tf[t][x] = y[t][1]), 
                    e[t][x] = f.tf[t][x];
                    t = "string" == typeof e[4][0] ? e[4][0] + " " + e[4][1] : e[4][0] + "px " + e[4][1] + "px";
                    v.css("-webkit-transform-origin", t);
                    v.css("-moz-transform-origin", t);
                    v.css("-ms-transform-origin", t);
                    v.css("-o-transform-origin", t);
                    v.css("transform-origin", t);
                    "webkitAppearance" in document.documentElement.style ? (y = "", y = 0 != e[0][2] ? y + ("translate3d(" + s(e[0][0]) + "," + s(e[0][1]) + "," + s(e[0][2]) + ")") : y + ("translate(" + s(e[0][0]) + "," + s(e[0][1]) + ")"), 
                    0 != e[1][1] || 0 != e[1][2] ? (y += " rotateZ(" + e[1][0] + "deg)", y += " rotateX(" + e[1][0] + "deg)", 
                    y += " rotateY(" + e[1][0] + "deg)") : y += " rotate(" + e[1][0] + "deg)", y += " skewX(" + e[2][0] + "deg) skewY(" + e[2][1] + "deg)", 
                    y = 1 != e[3][2] ? y + (" scale3d(" + e[3][0] + "," + e[3][1] + "," + e[3][2] + ")") : y + (" scale(" + e[3][0] + "," + e[3][1] + ")"), 
                    c(p).css("-webkit-transform", y)) : (t = "translate(" + s(e[0][0]) + "," + s(e[0][1]) + ") rotate(" + e[1][0] + "deg)  skewX(" + e[2][0] + "deg) skewY(" + e[2][1] + "deg) scale(" + e[3][0] + "," + f.tf[3][1] + ")", 
                    v.css("-moz-transform", t), v.css("-ms-transform", t), v.css("-o-transform", t), 
                    v.css("transform", t));
                }
                f.boxShadow && (e = f.boxShadow, t = e[0] + " " + e[1] + "px " + e[2] + "px " + e[3] + "px " + e[4] + "px " + e[5], 
                v.css("-webkit-box-shadow", t), v.css("-moz-box-shadow", t), v.css("box-shadow", t));
                f.textShadow && (e = f.textShadow, t = e[0] + " " + e[1] + "px " + e[2] + "px " + e[3] + "px ", 
                v.css("text-shadow", t));
                if (f.filter) {
                    e = f.filter;
                    t = "";
                    0 !== e[0] && (t += "invert(" + e[0] + ") ");
                    0 !== e[1] && (t += "hue-rotate(" + e[1] + "deg) ");
                    1 !== e[2] && (t += "contrast(" + e[2] + ") ");
                    1 !== e[3] && (t += "saturate(" + e[3] + ") ");
                    0 !== e[4] && (t += "brightness(" + e[4] + ") ");
                    0 !== e[5] && (t += "sepia(" + e[5] + ") ");
                    0 !== e[6] && (t += "grayscale(" + e[6] + ") ");
                    0 !== e[7] && (t += "blur(" + e[7] + "px) ");
                    x = b.Color.parseValue(e[8]);
                    B = !0;
                    for (y = 1; y < x.length - 1; y++) if (0 !== x[y]) {
                        B = !1;
                        break;
                    }
                    B && 0 === e[9] && 0 === e[10] && 0 === e[11] || (t += "drop-shadow(" + e[8] + " " + e[9] + "px " + e[10] + "px " + e[11] + "px)");
                    v.css("-webkit-filter", t);
                    v.css("-moz-filter", t);
                    v.css("filter", t);
                }
                f.opacity && v.css("opacity", f.opacity);
                f.stroke && (t = f.stroke, (e = t[0]) || (e = 0), (y = t[1]) ? "string" == typeof y && (y = [ y ]) : y = [ "rgba(0,0,0,0)" ], 
                (t = t[2]) || (t = "none"), v.css("border", "" + e + "px " + t + " " + b.colorToSupported(y[0])));
                if (f.fill) {
                    e = f.fill;
                    y = e[0];
                    "string" == typeof y && (y = [ y ]);
                    t = e[1];
                    if (!t || c.isArray(t)) t = "solid";
                    "solid" == t && y && v.css("background-color", b.colorToSupported(y[0]));
                    if (e[1]) if (c.isArray(e[1])) if (c.isArray(e[1][1])) {
                        m = "linear-gradient(" + e[1][0];
                        var H = "linear-gradient(" + (450 - e[1][0]) % 360;
                        l = "deg,";
                        for (y = 0; y < e[1][1].length; y++) t = e[1][1][y], c.isArray(t) && (l += b.colorToSupported(t[0]), 
                        t[1] && (l += " " + t[1] + "%")), y < e[1][1].length - 1 && (l += ",");
                        l += ")";
                        e[1][2] && (H = "repeating-" + H, m = "repeating-" + m);
                        v.css("background-image", "-webkit-" + m + l);
                        v.css("background-image", "-moz-" + m + l);
                        v.css("background-image", "-ms-" + m + l);
                        v.css("background-image", "-o-" + m + l);
                        v.css("background-image", H + l);
                        b.forceGPU(p);
                    } else {
                        if (e[1][4] && c.isArray(e[1][4])) {
                            m = "radial-gradient(" + e[1][0] + "% " + e[1][1] + "%,";
                            m += e[1][2] ? "ellipse " : "circle ";
                            m += e[1][3] + ",";
                            H = "radial-gradient(" + (e[1][3] + " ");
                            H += e[1][2] ? " ellipse at " : " circle at ";
                            H += e[1][0] + "% " + e[1][1] + "%,";
                            l = "";
                            for (y = 0; y < e[1][4].length; y++) t = e[1][4][y], c.isArray(t) && (l += b.colorToSupported(t[0]), 
                            t[1] && (l += " " + t[1] + "%")), y < e[1][4].length - 1 && (l += ",");
                            l += ")";
                            e[1][5] && (m = "repeating-" + m);
                            v.css("background-image", "-webkit-" + m + l);
                            v.css("background-image", "-moz-" + m + l);
                            v.css("background-image", "-ms-" + m + l);
                            v.css("background-image", "-o-" + m + l);
                            v.css("background-image", H + l);
                            b.forceGPU(p);
                        }
                    } else if (y = e[1], "string" == typeof y ? y = [ y ] : "object" == typeof y && ((t = y[window.EdgeScreenProfile.name]) || (t = y["default"]), 
                    y = t), f.tag && "img" == f.tag) y[0] && (l = k(l, y[0], p, "src", z), m.requestImage(l)); else {
                        if (y[0]) {
                            v.css("background-size", "100% 100%");
                            v.css("-webkit-background-size", "100% 100%");
                            l = k(l, y[0], p, "background-image", w, function(a) {
                                if (a) {
                                    a = a.replace("'", "\\'");
                                    var b = g, d = f.counterScale, e = a.toLowerCase();
                                    if (e.match(".svg$") || e.match(".svg?")) for (v.addClass("eg-svg-image"), d && v.addClass("eg-counter-scale"); b; ) d = c(b), 
                                    d.hasClass("eg-svg-holder") || d.addClass("eg-svg-holder"), b = b.parentNode;
                                    return "url(" + a + ")";
                                }
                                return a;
                            });
                            if (e[2] || e[3]) y = "px", e[2] && "string" == typeof e[2] ? H = u(e[2]) : "string" == typeof e[3] && (H = u(e[3])), 
                            H && H.units && H.units[0] && (y = H.units[0]), e[2] || (e[2] = "0" + y), e[3] || (e[3] = "0" + y), 
                            v.css("background-position", s(e[2]) + " " + s(e[3]));
                            if (e[4] || e[5]) H = "", e[4] || (e[4] = e[5]), "string" == typeof e[4] && ("auto" !== e[4] && (e[4] = s(e[4])), 
                            H = e[4]), "string" == typeof e[5] && ("auto" !== e[5] && (e[5] = s(e[5])), H = H + " " + e[5]), 
                            v.css("background-size", H), v.css("-webkit-background-size", H);
                            m.requestImage(l);
                        }
                        e[6] || v.css("background-repeat", "no-repeat");
                        e[7] && "scroll" != e[7] && v.css("background-attachment", e[7]);
                    }
                }
                v.css("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)");
                if (g && r) {
                    if (!g.appendChild) return p;
                    g.firstChild && 0 <= n && g.children && n < g.children.length ? g.insertBefore(p, g.children[n]) : g.appendChild(p);
                }
                if (window.edge_authoring_mode && ("audio" === d || "video" === d)) {
                    if (4 == p.readyState) p.pause(); else var U = p;
                    c(U).one("loadedmetadata", function() {
                        U.pause();
                    });
                }
                return p;
            }
            function d(a, d, f, g, l, m, s) {
                n(d, g);
                var u = null, w = "div";
                d.tag && (w = d.tag);
                switch (d.t) {
                  case "rect":
                  case "ellipse":
                  case "canvas":
                  case "group":
                    u = r(w, a, d, f, l, m, g, s);
                    break;

                  case "image":
                    u = r(w, a, d, f, l, m, g, s);
                    break;

                  case "video":
                  case "audio":
                    u = r(w, a, d, f, l, m, g, s);
                    p.DOMMediaNodeCreated(u);
                    break;

                  case "text":
                    u = r(w, a, d, f, l, m, g, s), a = c(u), d.font && (f = d.font, f[0] && "" !== f[0] && a.css("font-family", f[0]), 
                    null !== f[1] && ("object" !== typeof f[1] && (f[1] = [ f[1] ]), f[1][1] || (f[1][1] = "px"), 
                    f[1][0] && "" !== f[1][0] && a.css("font-size", f[1][0] + f[1][1])), f[2] && "" !== f[2] && a.css("color", b.colorToSupported(f[2])), 
                    f[3] && "" !== f[3] && a.css("font-weight", f[3]), f[4] && "" !== f[4] && a.css("text-decoration", f[4]), 
                    f[5] && "" !== f[5] && a.css("font-style", f[5])), d.align && a.css("text-align", d.align), 
                    d.position && (u.style.position = d.position), (!d.rect[2] || 0 >= d.rect[2] || "auto" == d.rect[2]) && (!d.rect[3] || 0 >= d.rect[3] || "auto" == d.rect[3]) && a.css("white-space", "nowrap"), 
                    u.appendChild(document.createTextNode("")), k(g, d.text, u, "text", function(a, b, d) {
                        c(a).get(0) && c(a).html(d);
                    });
                }
                return u;
            }
            function g(a, b, c, f, k, l, m) {
                if (c = d(a, b, f, k, l || 0, m)) {
                    p.nodeSymbolInstanceLookup[a] ? p.DOMNodeStarted(c, f, b, p.nodeSymbolInstanceLookup[a].symbolName, p.nodeSymbolInstanceLookup[a].autoPlay, p.nodeSymbolInstanceLookup[a].variables) : p.DOMNodeStarted(c, f, b);
                    if (b.c) for (a = 0; a < b.c.length; a++) f = b.c[a], g(f.id, f, b, c, k, a, m);
                    p.DOMNodeCompleted(c);
                }
                return c;
            }
            var n, m, k, f = b.PropertyTween, B = b.TransformTween, u = B.splitUnits, l = B.getNumber, x = [ [ "children", "c" ], [ "rect", "r" ], [ "sizeRange", "zr" ], [ "borderRadius", "br" ], [ "clip", "cl" ], [ "alt", "al" ], [ "title", "tt" ], [ "tabindex", "ti" ], [ "controls", "cn" ], [ "source", "sr" ], [ "cursor", "cu" ], [ "autoplay", "ap" ], [ "loop", "lp" ], [ "font", "n" ], [ "transform", "tf" ], [ "boxShadow", "sh" ], [ "textShadow", "ts" ], [ "opacity", "o" ], [ "userClass", "uc" ], [ "stroke", "s" ], [ "fill", "f" ], [ "display", "v" ], [ "filter", "fi" ] ];
            m = function(a, b) {
                var c = a;
                a && b && (c = f.substituteVariables(a, b), "undefined" === typeof c && (c = a));
                return c;
            };
            k = function(a, b, c, d, f, g) {
                a = m(b, a);
                var k = function(a, b, e) {
                    g && (e = g(e));
                    f(c, d, e);
                };
                a && a != b && !window.edge_authoring_mode && (p.nodeVariableBindings[b] || (p.nodeVariableBindings[b] = []), 
                p.nodeVariableBindings[b].push({
                    ele: c,
                    action: k
                }));
                k(null, null, a);
                return a;
            };
            n = function(a, b) {
                a.type && (a.t = a.type);
                a.t && (a.t = a.t.toLowerCase());
                a.type = a.t;
                a.cs && (a.className = a.cs);
                var c, d = x.length;
                for (c = 0; c < d; c++) a[x[c][0]] && (a[x[c][1]] = a[x[c][0]]), a[x[c][0]] = a[x[c][1]];
                a.rect || (a.rect = a.r = []);
                for (;4 > a.rect.length; ) a.rect[a.rect.length] = 0;
                if (a.tf) {
                    for (;5 > a.tf.length; ) a.tf[a.tf.length] = 0;
                    for (;8 > a.transform.length; ) a.tf[a.tf.length] = 1;
                }
            };
            return {
                stageLookup: {},
                nodeLookup: {},
                nodeSymbolInstanceLookup: {},
                DOMNodeSeek: function(a) {},
                DOMNodeReset: function() {},
                DOMNodeStarted: function() {},
                DOMNodeCompleted: function() {},
                DOMMediaNodeCreated: function() {},
                renderDOM: function(a, c, d, f, k, l) {
                    p.nodeVariableBindings = {};
                    for (f = 0; f < a.length; f++) n(a[f], d);
                    p.nodeSymbolInstanceLookup = {};
                    if (k) for (f = 0; f < k.length; f++) p.nodeSymbolInstanceLookup[k[f].id] = k[f];
                    for (f = 0; f < a.length; f++) a[f] && (k = g(a[f].id, a[f], null, null, d, 0, l)) && c.appendChild(k);
                    for (var m in p.nodeVariableBindings) if (p.nodeVariableBindings.hasOwnProperty(m)) for (a = p.nodeVariableBindings[m], 
                    f = 0; f < a.length; f++) b.Symbol.bindVariableActionToSymbol(c, m, a[f].action);
                },
                buildSceneGraphNode: g,
                createElement: d
            };
        }();
        b.DeclareMarkup = p;
    }
})(jQuery, AdobeEdge);
function Pp(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const l in r)
				if (l !== 'default' && !(l in e)) {
					const i = Object.getOwnPropertyDescriptor(r, l);
					i &&
						Object.defineProperty(
							e,
							l,
							i.get ? i : { enumerable: !0, get: () => r[l] }
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
	);
}
(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
	new MutationObserver((l) => {
		for (const i of l)
			if (i.type === 'childList')
				for (const o of i.addedNodes)
					o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(l) {
		const i = {};
		return (
			l.integrity && (i.integrity = l.integrity),
			l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
			l.crossOrigin === 'use-credentials'
				? (i.credentials = 'include')
				: l.crossOrigin === 'anonymous'
				? (i.credentials = 'omit')
				: (i.credentials = 'same-origin'),
			i
		);
	}
	function r(l) {
		if (l.ep) return;
		l.ep = !0;
		const i = n(l);
		fetch(l.href, i);
	}
})();
function wl(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var Nc = { exports: {} },
	Di = {},
	Rc = { exports: {} },
	V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xl = Symbol.for('react.element'),
	Np = Symbol.for('react.portal'),
	Rp = Symbol.for('react.fragment'),
	_p = Symbol.for('react.strict_mode'),
	Lp = Symbol.for('react.profiler'),
	Mp = Symbol.for('react.provider'),
	Op = Symbol.for('react.context'),
	Ap = Symbol.for('react.forward_ref'),
	Dp = Symbol.for('react.suspense'),
	Ip = Symbol.for('react.memo'),
	zp = Symbol.for('react.lazy'),
	Ks = Symbol.iterator;
function Fp(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Ks && e[Ks]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var _c = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	Lc = Object.assign,
	Mc = {};
function gr(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Mc),
		(this.updater = n || _c);
}
gr.prototype.isReactComponent = {};
gr.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		);
	this.updater.enqueueSetState(this, e, t, 'setState');
};
gr.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Oc() {}
Oc.prototype = gr.prototype;
function Ua(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Mc),
		(this.updater = n || _c);
}
var Ba = (Ua.prototype = new Oc());
Ba.constructor = Ua;
Lc(Ba, gr.prototype);
Ba.isPureReactComponent = !0;
var Gs = Array.isArray,
	Ac = Object.prototype.hasOwnProperty,
	Ha = { current: null },
	Dc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ic(e, t, n) {
	var r,
		l = {},
		i = null,
		o = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (o = t.ref),
		t.key !== void 0 && (i = '' + t.key),
		t))
			Ac.call(t, r) && !Dc.hasOwnProperty(r) && (l[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) l.children = n;
	else if (1 < a) {
		for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
		l.children = s;
	}
	if (e && e.defaultProps)
		for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
	return {
		$$typeof: xl,
		type: e,
		key: i,
		ref: o,
		props: l,
		_owner: Ha.current,
	};
}
function Up(e, t) {
	return {
		$$typeof: xl,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function $a(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === xl;
}
function Bp(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Xs = /\/+/g;
function so(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? Bp('' + e.key)
		: t.toString(36);
}
function Gl(e, t, n, r, l) {
	var i = typeof e;
	(i === 'undefined' || i === 'boolean') && (e = null);
	var o = !1;
	if (e === null) o = !0;
	else
		switch (i) {
			case 'string':
			case 'number':
				o = !0;
				break;
			case 'object':
				switch (e.$$typeof) {
					case xl:
					case Np:
						o = !0;
				}
		}
	if (o)
		return (
			(o = e),
			(l = l(o)),
			(e = r === '' ? '.' + so(o, 0) : r),
			Gs(l)
				? ((n = ''),
				  e != null && (n = e.replace(Xs, '$&/') + '/'),
				  Gl(l, t, n, '', function (u) {
						return u;
				  }))
				: l != null &&
				  ($a(l) &&
						(l = Up(
							l,
							n +
								(!l.key || (o && o.key === l.key)
									? ''
									: ('' + l.key).replace(Xs, '$&/') + '/') +
								e
						)),
				  t.push(l)),
			1
		);
	if (((o = 0), (r = r === '' ? '.' : r + ':'), Gs(e)))
		for (var a = 0; a < e.length; a++) {
			i = e[a];
			var s = r + so(i, a);
			o += Gl(i, t, n, s, l);
		}
	else if (((s = Fp(e)), typeof s == 'function'))
		for (e = s.call(e), a = 0; !(i = e.next()).done; )
			(i = i.value), (s = r + so(i, a++)), (o += Gl(i, t, n, s, l));
	else if (i === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]'
						? 'object with keys {' + Object.keys(e).join(', ') + '}'
						: t) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		);
	return o;
}
function Ll(e, t, n) {
	if (e == null) return e;
	var r = [],
		l = 0;
	return (
		Gl(e, r, '', '', function (i) {
			return t.call(n, i, l++);
		}),
		r
	);
}
function Hp(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var Oe = { current: null },
	Xl = { transition: null },
	$p = {
		ReactCurrentDispatcher: Oe,
		ReactCurrentBatchConfig: Xl,
		ReactCurrentOwner: Ha,
	};
V.Children = {
	map: Ll,
	forEach: function (e, t, n) {
		Ll(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			Ll(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			Ll(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!$a(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			);
		return e;
	},
};
V.Component = gr;
V.Fragment = Rp;
V.Profiler = Lp;
V.PureComponent = Ua;
V.StrictMode = _p;
V.Suspense = Dp;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $p;
V.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.'
		);
	var r = Lc({}, e.props),
		l = e.key,
		i = e.ref,
		o = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((i = t.ref), (o = Ha.current)),
			t.key !== void 0 && (l = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var a = e.type.defaultProps;
		for (s in t)
			Ac.call(t, s) &&
				!Dc.hasOwnProperty(s) &&
				(r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
	}
	var s = arguments.length - 2;
	if (s === 1) r.children = n;
	else if (1 < s) {
		a = Array(s);
		for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
		r.children = a;
	}
	return { $$typeof: xl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
V.createContext = function (e) {
	return (
		(e = {
			$$typeof: Op,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Mp, _context: e }),
		(e.Consumer = e)
	);
};
V.createElement = Ic;
V.createFactory = function (e) {
	var t = Ic.bind(null, e);
	return (t.type = e), t;
};
V.createRef = function () {
	return { current: null };
};
V.forwardRef = function (e) {
	return { $$typeof: Ap, render: e };
};
V.isValidElement = $a;
V.lazy = function (e) {
	return { $$typeof: zp, _payload: { _status: -1, _result: e }, _init: Hp };
};
V.memo = function (e, t) {
	return { $$typeof: Ip, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
	var t = Xl.transition;
	Xl.transition = {};
	try {
		e();
	} finally {
		Xl.transition = t;
	}
};
V.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.');
};
V.useCallback = function (e, t) {
	return Oe.current.useCallback(e, t);
};
V.useContext = function (e) {
	return Oe.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
	return Oe.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
	return Oe.current.useEffect(e, t);
};
V.useId = function () {
	return Oe.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
	return Oe.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
	return Oe.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
	return Oe.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
	return Oe.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
	return Oe.current.useReducer(e, t, n);
};
V.useRef = function (e) {
	return Oe.current.useRef(e);
};
V.useState = function (e) {
	return Oe.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
	return Oe.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
	return Oe.current.useTransition();
};
V.version = '18.2.0';
Rc.exports = V;
var C = Rc.exports;
const Ue = wl(C),
	Wp = Pp({ __proto__: null, default: Ue }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vp = C,
	Qp = Symbol.for('react.element'),
	qp = Symbol.for('react.fragment'),
	Yp = Object.prototype.hasOwnProperty,
	Kp = Vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Gp = { key: !0, ref: !0, __self: !0, __source: !0 };
function zc(e, t, n) {
	var r,
		l = {},
		i = null,
		o = null;
	n !== void 0 && (i = '' + n),
		t.key !== void 0 && (i = '' + t.key),
		t.ref !== void 0 && (o = t.ref);
	for (r in t) Yp.call(t, r) && !Gp.hasOwnProperty(r) && (l[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
	return {
		$$typeof: Qp,
		type: e,
		key: i,
		ref: o,
		props: l,
		_owner: Kp.current,
	};
}
Di.Fragment = qp;
Di.jsx = zc;
Di.jsxs = zc;
Nc.exports = Di;
var c = Nc.exports,
	Fo = {},
	Fc = { exports: {} },
	Ke = {},
	Uc = { exports: {} },
	Bc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(_, I) {
		var $ = _.length;
		_.push(I);
		e: for (; 0 < $; ) {
			var oe = ($ - 1) >>> 1,
				fe = _[oe];
			if (0 < l(fe, I)) (_[oe] = I), (_[$] = fe), ($ = oe);
			else break e;
		}
	}
	function n(_) {
		return _.length === 0 ? null : _[0];
	}
	function r(_) {
		if (_.length === 0) return null;
		var I = _[0],
			$ = _.pop();
		if ($ !== I) {
			_[0] = $;
			e: for (var oe = 0, fe = _.length, On = fe >>> 1; oe < On; ) {
				var ee = 2 * (oe + 1) - 1,
					Et = _[ee],
					mt = ee + 1,
					An = _[mt];
				if (0 > l(Et, $))
					mt < fe && 0 > l(An, Et)
						? ((_[oe] = An), (_[mt] = $), (oe = mt))
						: ((_[oe] = Et), (_[ee] = $), (oe = ee));
				else if (mt < fe && 0 > l(An, $)) (_[oe] = An), (_[mt] = $), (oe = mt);
				else break e;
			}
		}
		return I;
	}
	function l(_, I) {
		var $ = _.sortIndex - I.sortIndex;
		return $ !== 0 ? $ : _.id - I.id;
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var i = performance;
		e.unstable_now = function () {
			return i.now();
		};
	} else {
		var o = Date,
			a = o.now();
		e.unstable_now = function () {
			return o.now() - a;
		};
	}
	var s = [],
		u = [],
		d = 1,
		p = null,
		m = 3,
		y = !1,
		x = !1,
		w = !1,
		P = typeof setTimeout == 'function' ? setTimeout : null,
		v = typeof clearTimeout == 'function' ? clearTimeout : null,
		f = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function g(_) {
		for (var I = n(u); I !== null; ) {
			if (I.callback === null) r(u);
			else if (I.startTime <= _)
				r(u), (I.sortIndex = I.expirationTime), t(s, I);
			else break;
			I = n(u);
		}
	}
	function h(_) {
		if (((w = !1), g(_), !x))
			if (n(s) !== null) (x = !0), lt(j);
			else {
				var I = n(u);
				I !== null && ht(h, I.startTime - _);
			}
	}
	function j(_, I) {
		(x = !1), w && ((w = !1), v(M), (M = -1)), (y = !0);
		var $ = m;
		try {
			for (
				g(I), p = n(s);
				p !== null && (!(p.expirationTime > I) || (_ && !Ee()));

			) {
				var oe = p.callback;
				if (typeof oe == 'function') {
					(p.callback = null), (m = p.priorityLevel);
					var fe = oe(p.expirationTime <= I);
					(I = e.unstable_now()),
						typeof fe == 'function' ? (p.callback = fe) : p === n(s) && r(s),
						g(I);
				} else r(s);
				p = n(s);
			}
			if (p !== null) var On = !0;
			else {
				var ee = n(u);
				ee !== null && ht(h, ee.startTime - I), (On = !1);
			}
			return On;
		} finally {
			(p = null), (m = $), (y = !1);
		}
	}
	var R = !1,
		N = null,
		M = -1,
		Q = 5,
		U = -1;
	function Ee() {
		return !(e.unstable_now() - U < Q);
	}
	function G() {
		if (N !== null) {
			var _ = e.unstable_now();
			U = _;
			var I = !0;
			try {
				I = N(!0, _);
			} finally {
				I ? Bt() : ((R = !1), (N = null));
			}
		} else R = !1;
	}
	var Bt;
	if (typeof f == 'function')
		Bt = function () {
			f(G);
		};
	else if (typeof MessageChannel < 'u') {
		var Mn = new MessageChannel(),
			Ht = Mn.port2;
		(Mn.port1.onmessage = G),
			(Bt = function () {
				Ht.postMessage(null);
			});
	} else
		Bt = function () {
			P(G, 0);
		};
	function lt(_) {
		(N = _), R || ((R = !0), Bt());
	}
	function ht(_, I) {
		M = P(function () {
			_(e.unstable_now());
		}, I);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (_) {
			_.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			x || y || ((x = !0), lt(j));
		}),
		(e.unstable_forceFrameRate = function (_) {
			0 > _ || 125 < _
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (Q = 0 < _ ? Math.floor(1e3 / _) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return m;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(s);
		}),
		(e.unstable_next = function (_) {
			switch (m) {
				case 1:
				case 2:
				case 3:
					var I = 3;
					break;
				default:
					I = m;
			}
			var $ = m;
			m = I;
			try {
				return _();
			} finally {
				m = $;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (_, I) {
			switch (_) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					_ = 3;
			}
			var $ = m;
			m = _;
			try {
				return I();
			} finally {
				m = $;
			}
		}),
		(e.unstable_scheduleCallback = function (_, I, $) {
			var oe = e.unstable_now();
			switch (
				(typeof $ == 'object' && $ !== null
					? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? oe + $ : oe))
					: ($ = oe),
				_)
			) {
				case 1:
					var fe = -1;
					break;
				case 2:
					fe = 250;
					break;
				case 5:
					fe = 1073741823;
					break;
				case 4:
					fe = 1e4;
					break;
				default:
					fe = 5e3;
			}
			return (
				(fe = $ + fe),
				(_ = {
					id: d++,
					callback: I,
					priorityLevel: _,
					startTime: $,
					expirationTime: fe,
					sortIndex: -1,
				}),
				$ > oe
					? ((_.sortIndex = $),
					  t(u, _),
					  n(s) === null &&
							_ === n(u) &&
							(w ? (v(M), (M = -1)) : (w = !0), ht(h, $ - oe)))
					: ((_.sortIndex = fe), t(s, _), x || y || ((x = !0), lt(j))),
				_
			);
		}),
		(e.unstable_shouldYield = Ee),
		(e.unstable_wrapCallback = function (_) {
			var I = m;
			return function () {
				var $ = m;
				m = I;
				try {
					return _.apply(this, arguments);
				} finally {
					m = $;
				}
			};
		});
})(Bc);
Uc.exports = Bc;
var Xp = Uc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hc = C,
	Ye = Xp;
function T(e) {
	for (
		var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
		n < arguments.length;
		n++
	)
		t += '&args[]=' + encodeURIComponent(arguments[n]);
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	);
}
var $c = new Set(),
	br = {};
function Nn(e, t) {
	sr(e, t), sr(e + 'Capture', t);
}
function sr(e, t) {
	for (br[e] = t, e = 0; e < t.length; e++) $c.add(t[e]);
}
var Mt = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	Uo = Object.prototype.hasOwnProperty,
	Jp =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Js = {},
	Zs = {};
function Zp(e) {
	return Uo.call(Zs, e)
		? !0
		: Uo.call(Js, e)
		? !1
		: Jp.test(e)
		? (Zs[e] = !0)
		: ((Js[e] = !0), !1);
}
function bp(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0;
		case 'boolean':
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
		default:
			return !1;
	}
}
function eh(e, t, n, r) {
	if (t === null || typeof t > 'u' || bp(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function Ae(e, t, n, r, l, i, o) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = l),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = i),
		(this.removeEmptyString = o);
}
var Te = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		Te[e] = new Ae(e, 0, !1, e, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0];
	Te[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	Te[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (e) {
	Te[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		Te[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	Te[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	Te[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	Te[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	Te[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wa = /[\-:]([a-z])/g;
function Va(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Wa, Va);
		Te[t] = new Ae(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Wa, Va);
		Te[t] = new Ae(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(Wa, Va);
	Te[t] = new Ae(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	Te[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new Ae(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	Te[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qa(e, t, n, r) {
	var l = Te.hasOwnProperty(t) ? Te[t] : null;
	(l !== null
		? l.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(eh(t, n, l, r) && (n = null),
		r || l === null
			? Zp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: l.mustUseProperty
			? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
			: ((t = l.attributeName),
			  (r = l.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((l = l.type),
					  (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var zt = Hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Ml = Symbol.for('react.element'),
	Fn = Symbol.for('react.portal'),
	Un = Symbol.for('react.fragment'),
	qa = Symbol.for('react.strict_mode'),
	Bo = Symbol.for('react.profiler'),
	Wc = Symbol.for('react.provider'),
	Vc = Symbol.for('react.context'),
	Ya = Symbol.for('react.forward_ref'),
	Ho = Symbol.for('react.suspense'),
	$o = Symbol.for('react.suspense_list'),
	Ka = Symbol.for('react.memo'),
	Qt = Symbol.for('react.lazy'),
	Qc = Symbol.for('react.offscreen'),
	bs = Symbol.iterator;
function jr(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (bs && e[bs]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var ue = Object.assign,
	uo;
function Ur(e) {
	if (uo === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			uo = (t && t[1]) || '';
		}
	return (
		`
` +
		uo +
		e
	);
}
var co = !1;
function fo(e, t) {
	if (!e || co) return '';
	co = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == 'string') {
			for (
				var l = u.stack.split(`
`),
					i = r.stack.split(`
`),
					o = l.length - 1,
					a = i.length - 1;
				1 <= o && 0 <= a && l[o] !== i[a];

			)
				a--;
			for (; 1 <= o && 0 <= a; o--, a--)
				if (l[o] !== i[a]) {
					if (o !== 1 || a !== 1)
						do
							if ((o--, a--, 0 > a || l[o] !== i[a])) {
								var s =
									`
` + l[o].replace(' at new ', ' at ');
								return (
									e.displayName &&
										s.includes('<anonymous>') &&
										(s = s.replace('<anonymous>', e.displayName)),
									s
								);
							}
						while (1 <= o && 0 <= a);
					break;
				}
		}
	} finally {
		(co = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : '') ? Ur(e) : '';
}
function th(e) {
	switch (e.tag) {
		case 5:
			return Ur(e.type);
		case 16:
			return Ur('Lazy');
		case 13:
			return Ur('Suspense');
		case 19:
			return Ur('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = fo(e.type, !1)), e;
		case 11:
			return (e = fo(e.type.render, !1)), e;
		case 1:
			return (e = fo(e.type, !0)), e;
		default:
			return '';
	}
}
function Wo(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case Un:
			return 'Fragment';
		case Fn:
			return 'Portal';
		case Bo:
			return 'Profiler';
		case qa:
			return 'StrictMode';
		case Ho:
			return 'Suspense';
		case $o:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case Vc:
				return (e.displayName || 'Context') + '.Consumer';
			case Wc:
				return (e._context.displayName || 'Context') + '.Provider';
			case Ya:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case Ka:
				return (
					(t = e.displayName || null), t !== null ? t : Wo(e.type) || 'Memo'
				);
			case Qt:
				(t = e._payload), (e = e._init);
				try {
					return Wo(e(t));
				} catch {}
		}
	return null;
}
function nh(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return 'Cache';
		case 9:
			return (t.displayName || 'Context') + '.Consumer';
		case 10:
			return (t._context.displayName || 'Context') + '.Provider';
		case 18:
			return 'DehydratedFragment';
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			);
		case 7:
			return 'Fragment';
		case 5:
			return t;
		case 4:
			return 'Portal';
		case 3:
			return 'Root';
		case 6:
			return 'Text';
		case 16:
			return Wo(t);
		case 8:
			return t === qa ? 'StrictMode' : 'Mode';
		case 22:
			return 'Offscreen';
		case 12:
			return 'Profiler';
		case 21:
			return 'Scope';
		case 13:
			return 'Suspense';
		case 19:
			return 'SuspenseList';
		case 25:
			return 'TracingMarker';
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null;
			if (typeof t == 'string') return t;
	}
	return null;
}
function an(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e;
		case 'object':
			return e;
		default:
			return '';
	}
}
function qc(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	);
}
function rh(e) {
	var t = qc(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var l = n.get,
			i = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return l.call(this);
				},
				set: function (o) {
					(r = '' + o), i.call(this, o);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (o) {
					r = '' + o;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function Ol(e) {
	e._valueTracker || (e._valueTracker = rh(e));
}
function Yc(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return (
		e && (r = qc(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function ui(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Vo(e, t) {
	var n = t.checked;
	return ue({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function eu(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = an(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null,
		});
}
function Kc(e, t) {
	(t = t.checked), t != null && Qa(e, 'checked', t, !1);
}
function Qo(e, t) {
	Kc(e, t);
	var n = an(t.value),
		r = t.type;
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n);
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value');
		return;
	}
	t.hasOwnProperty('value')
		? qo(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && qo(e, t.type, an(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function tu(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type;
		if (
			!(
				(r !== 'submit' && r !== 'reset') ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = '' + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== '' && (e.name = n);
}
function qo(e, t, n) {
	(t !== 'number' || ui(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Br = Array.isArray;
function Zn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
		for (n = 0; n < e.length; n++)
			(l = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== l && (e[n].selected = l),
				l && r && (e[n].defaultSelected = !0);
	} else {
		for (n = '' + an(n), t = null, l = 0; l < e.length; l++) {
			if (e[l].value === n) {
				(e[l].selected = !0), r && (e[l].defaultSelected = !0);
				return;
			}
			t !== null || e[l].disabled || (t = e[l]);
		}
		t !== null && (t.selected = !0);
	}
}
function Yo(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
	return ue({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue,
	});
}
function nu(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(T(92));
			if (Br(n)) {
				if (1 < n.length) throw Error(T(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ''), (n = t);
	}
	e._wrapperState = { initialValue: an(n) };
}
function Gc(e, t) {
	var n = an(t.value),
		r = an(t.defaultValue);
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r);
}
function ru(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Xc(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function Ko(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? Xc(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e;
}
var Al,
	Jc = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, l) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, l);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
			e.innerHTML = t;
		else {
			for (
				Al = Al || document.createElement('div'),
					Al.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = Al.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function el(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Wr = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	lh = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Wr).forEach(function (e) {
	lh.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wr[t] = Wr[e]);
	});
});
function Zc(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (Wr.hasOwnProperty(e) && Wr[e])
		? ('' + t).trim()
		: t + 'px';
}
function bc(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				l = Zc(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
		}
}
var ih = ue(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
);
function Go(e, t) {
	if (t) {
		if (ih[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(T(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(T(60));
			if (
				typeof t.dangerouslySetInnerHTML != 'object' ||
				!('__html' in t.dangerouslySetInnerHTML)
			)
				throw Error(T(61));
		}
		if (t.style != null && typeof t.style != 'object') throw Error(T(62));
	}
}
function Xo(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string';
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1;
		default:
			return !0;
	}
}
var Jo = null;
function Ga(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Zo = null,
	bn = null,
	er = null;
function lu(e) {
	if ((e = Cl(e))) {
		if (typeof Zo != 'function') throw Error(T(280));
		var t = e.stateNode;
		t && ((t = Bi(t)), Zo(e.stateNode, e.type, t));
	}
}
function ed(e) {
	bn ? (er ? er.push(e) : (er = [e])) : (bn = e);
}
function td() {
	if (bn) {
		var e = bn,
			t = er;
		if (((er = bn = null), lu(e), t)) for (e = 0; e < t.length; e++) lu(t[e]);
	}
}
function nd(e, t) {
	return e(t);
}
function rd() {}
var po = !1;
function ld(e, t, n) {
	if (po) return e(t, n);
	po = !0;
	try {
		return nd(e, t, n);
	} finally {
		(po = !1), (bn !== null || er !== null) && (rd(), td());
	}
}
function tl(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Bi(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === 'button' ||
					e === 'input' ||
					e === 'select' ||
					e === 'textarea'
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != 'function') throw Error(T(231, t, typeof n));
	return n;
}
var bo = !1;
if (Mt)
	try {
		var Tr = {};
		Object.defineProperty(Tr, 'passive', {
			get: function () {
				bo = !0;
			},
		}),
			window.addEventListener('test', Tr, Tr),
			window.removeEventListener('test', Tr, Tr);
	} catch {
		bo = !1;
	}
function oh(e, t, n, r, l, i, o, a, s) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (d) {
		this.onError(d);
	}
}
var Vr = !1,
	ci = null,
	di = !1,
	ea = null,
	ah = {
		onError: function (e) {
			(Vr = !0), (ci = e);
		},
	};
function sh(e, t, n, r, l, i, o, a, s) {
	(Vr = !1), (ci = null), oh.apply(ah, arguments);
}
function uh(e, t, n, r, l, i, o, a, s) {
	if ((sh.apply(this, arguments), Vr)) {
		if (Vr) {
			var u = ci;
			(Vr = !1), (ci = null);
		} else throw Error(T(198));
		di || ((di = !0), (ea = u));
	}
}
function Rn(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function id(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function iu(e) {
	if (Rn(e) !== e) throw Error(T(188));
}
function ch(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = Rn(e)), t === null)) throw Error(T(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var l = n.return;
		if (l === null) break;
		var i = l.alternate;
		if (i === null) {
			if (((r = l.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (l.child === i.child) {
			for (i = l.child; i; ) {
				if (i === n) return iu(l), e;
				if (i === r) return iu(l), t;
				i = i.sibling;
			}
			throw Error(T(188));
		}
		if (n.return !== r.return) (n = l), (r = i);
		else {
			for (var o = !1, a = l.child; a; ) {
				if (a === n) {
					(o = !0), (n = l), (r = i);
					break;
				}
				if (a === r) {
					(o = !0), (r = l), (n = i);
					break;
				}
				a = a.sibling;
			}
			if (!o) {
				for (a = i.child; a; ) {
					if (a === n) {
						(o = !0), (n = i), (r = l);
						break;
					}
					if (a === r) {
						(o = !0), (r = i), (n = l);
						break;
					}
					a = a.sibling;
				}
				if (!o) throw Error(T(189));
			}
		}
		if (n.alternate !== r) throw Error(T(190));
	}
	if (n.tag !== 3) throw Error(T(188));
	return n.stateNode.current === n ? e : t;
}
function od(e) {
	return (e = ch(e)), e !== null ? ad(e) : null;
}
function ad(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = ad(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var sd = Ye.unstable_scheduleCallback,
	ou = Ye.unstable_cancelCallback,
	dh = Ye.unstable_shouldYield,
	fh = Ye.unstable_requestPaint,
	de = Ye.unstable_now,
	ph = Ye.unstable_getCurrentPriorityLevel,
	Xa = Ye.unstable_ImmediatePriority,
	ud = Ye.unstable_UserBlockingPriority,
	fi = Ye.unstable_NormalPriority,
	hh = Ye.unstable_LowPriority,
	cd = Ye.unstable_IdlePriority,
	Ii = null,
	xt = null;
function mh(e) {
	if (xt && typeof xt.onCommitFiberRoot == 'function')
		try {
			xt.onCommitFiberRoot(Ii, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var dt = Math.clz32 ? Math.clz32 : yh,
	vh = Math.log,
	gh = Math.LN2;
function yh(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((vh(e) / gh) | 0)) | 0;
}
var Dl = 64,
	Il = 4194304;
function Hr(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function pi(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		l = e.suspendedLanes,
		i = e.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var a = o & ~l;
		a !== 0 ? (r = Hr(a)) : ((i &= o), i !== 0 && (r = Hr(i)));
	} else (o = n & ~l), o !== 0 ? (r = Hr(o)) : i !== 0 && (r = Hr(i));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & l) &&
		((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - dt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
	return r;
}
function wh(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function xh(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			l = e.expirationTimes,
			i = e.pendingLanes;
		0 < i;

	) {
		var o = 31 - dt(i),
			a = 1 << o,
			s = l[o];
		s === -1
			? (!(a & n) || a & r) && (l[o] = wh(a, t))
			: s <= t && (e.expiredLanes |= a),
			(i &= ~a);
	}
}
function ta(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function dd() {
	var e = Dl;
	return (Dl <<= 1), !(Dl & 4194240) && (Dl = 64), e;
}
function ho(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function Sl(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - dt(t)),
		(e[t] = n);
}
function Sh(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var l = 31 - dt(n),
			i = 1 << l;
		(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
	}
}
function Ja(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - dt(n),
			l = 1 << r;
		(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
	}
}
var K = 0;
function fd(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pd,
	Za,
	hd,
	md,
	vd,
	na = !1,
	zl = [],
	Jt = null,
	Zt = null,
	bt = null,
	nl = new Map(),
	rl = new Map(),
	Yt = [],
	Eh =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		);
function au(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			Jt = null;
			break;
		case 'dragenter':
		case 'dragleave':
			Zt = null;
			break;
		case 'mouseover':
		case 'mouseout':
			bt = null;
			break;
		case 'pointerover':
		case 'pointerout':
			nl.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			rl.delete(t.pointerId);
	}
}
function Pr(e, t, n, r, l, i) {
	return e === null || e.nativeEvent !== i
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: i,
				targetContainers: [l],
		  }),
		  t !== null && ((t = Cl(t)), t !== null && Za(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  l !== null && t.indexOf(l) === -1 && t.push(l),
		  e);
}
function Ch(e, t, n, r, l) {
	switch (t) {
		case 'focusin':
			return (Jt = Pr(Jt, e, t, n, r, l)), !0;
		case 'dragenter':
			return (Zt = Pr(Zt, e, t, n, r, l)), !0;
		case 'mouseover':
			return (bt = Pr(bt, e, t, n, r, l)), !0;
		case 'pointerover':
			var i = l.pointerId;
			return nl.set(i, Pr(nl.get(i) || null, e, t, n, r, l)), !0;
		case 'gotpointercapture':
			return (
				(i = l.pointerId), rl.set(i, Pr(rl.get(i) || null, e, t, n, r, l)), !0
			);
	}
	return !1;
}
function gd(e) {
	var t = mn(e.target);
	if (t !== null) {
		var n = Rn(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = id(n)), t !== null)) {
					(e.blockedOn = t),
						vd(e.priority, function () {
							hd(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function Jl(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = ra(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(Jo = r), n.target.dispatchEvent(r), (Jo = null);
		} else return (t = Cl(n)), t !== null && Za(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function su(e, t, n) {
	Jl(e) && n.delete(t);
}
function kh() {
	(na = !1),
		Jt !== null && Jl(Jt) && (Jt = null),
		Zt !== null && Jl(Zt) && (Zt = null),
		bt !== null && Jl(bt) && (bt = null),
		nl.forEach(su),
		rl.forEach(su);
}
function Nr(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		na ||
			((na = !0),
			Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, kh)));
}
function ll(e) {
	function t(l) {
		return Nr(l, e);
	}
	if (0 < zl.length) {
		Nr(zl[0], e);
		for (var n = 1; n < zl.length; n++) {
			var r = zl[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		Jt !== null && Nr(Jt, e),
			Zt !== null && Nr(Zt, e),
			bt !== null && Nr(bt, e),
			nl.forEach(t),
			rl.forEach(t),
			n = 0;
		n < Yt.length;
		n++
	)
		(r = Yt[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Yt.length && ((n = Yt[0]), n.blockedOn === null); )
		gd(n), n.blockedOn === null && Yt.shift();
}
var tr = zt.ReactCurrentBatchConfig,
	hi = !0;
function jh(e, t, n, r) {
	var l = K,
		i = tr.transition;
	tr.transition = null;
	try {
		(K = 1), ba(e, t, n, r);
	} finally {
		(K = l), (tr.transition = i);
	}
}
function Th(e, t, n, r) {
	var l = K,
		i = tr.transition;
	tr.transition = null;
	try {
		(K = 4), ba(e, t, n, r);
	} finally {
		(K = l), (tr.transition = i);
	}
}
function ba(e, t, n, r) {
	if (hi) {
		var l = ra(e, t, n, r);
		if (l === null) ko(e, t, r, mi, n), au(e, r);
		else if (Ch(l, e, t, n, r)) r.stopPropagation();
		else if ((au(e, r), t & 4 && -1 < Eh.indexOf(e))) {
			for (; l !== null; ) {
				var i = Cl(l);
				if (
					(i !== null && pd(i),
					(i = ra(e, t, n, r)),
					i === null && ko(e, t, r, mi, n),
					i === l)
				)
					break;
				l = i;
			}
			l !== null && r.stopPropagation();
		} else ko(e, t, r, null, n);
	}
}
var mi = null;
function ra(e, t, n, r) {
	if (((mi = null), (e = Ga(r)), (e = mn(e)), e !== null))
		if (((t = Rn(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = id(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (mi = e), null;
}
function yd(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1;
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4;
		case 'message':
			switch (ph()) {
				case Xa:
					return 1;
				case ud:
					return 4;
				case fi:
				case hh:
					return 16;
				case cd:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var Gt = null,
	es = null,
	Zl = null;
function wd() {
	if (Zl) return Zl;
	var e,
		t = es,
		n = t.length,
		r,
		l = 'value' in Gt ? Gt.value : Gt.textContent,
		i = l.length;
	for (e = 0; e < n && t[e] === l[e]; e++);
	var o = n - e;
	for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
	return (Zl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function bl(e) {
	var t = e.keyCode;
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Fl() {
	return !0;
}
function uu() {
	return !1;
}
function Ge(e) {
	function t(n, r, l, i, o) {
		(this._reactName = n),
			(this._targetInst = l),
			(this.type = r),
			(this.nativeEvent = i),
			(this.target = o),
			(this.currentTarget = null);
		for (var a in e)
			e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
		return (
			(this.isDefaultPrevented = (
				i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
			)
				? Fl
				: uu),
			(this.isPropagationStopped = uu),
			this
		);
	}
	return (
		ue(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = Fl));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = Fl));
			},
			persist: function () {},
			isPersistent: Fl,
		}),
		t
	);
}
var yr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	ts = Ge(yr),
	El = ue({}, yr, { view: 0, detail: 0 }),
	Ph = Ge(El),
	mo,
	vo,
	Rr,
	zi = ue({}, El, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: ns,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return 'movementX' in e
				? e.movementX
				: (e !== Rr &&
						(Rr && e.type === 'mousemove'
							? ((mo = e.screenX - Rr.screenX), (vo = e.screenY - Rr.screenY))
							: (vo = mo = 0),
						(Rr = e)),
				  mo);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : vo;
		},
	}),
	cu = Ge(zi),
	Nh = ue({}, zi, { dataTransfer: 0 }),
	Rh = Ge(Nh),
	_h = ue({}, El, { relatedTarget: 0 }),
	go = Ge(_h),
	Lh = ue({}, yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Mh = Ge(Lh),
	Oh = ue({}, yr, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Ah = Ge(Oh),
	Dh = ue({}, yr, { data: 0 }),
	du = Ge(Dh),
	Ih = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	zh = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	Fh = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	};
function Uh(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Fh[e]) ? !!t[e] : !1;
}
function ns() {
	return Uh;
}
var Bh = ue({}, El, {
		key: function (e) {
			if (e.key) {
				var t = Ih[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = bl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? zh[e.keyCode] || 'Unidentified'
				: '';
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: ns,
		charCode: function (e) {
			return e.type === 'keypress' ? bl(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress'
				? bl(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0;
		},
	}),
	Hh = Ge(Bh),
	$h = ue({}, zi, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	fu = Ge($h),
	Wh = ue({}, El, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: ns,
	}),
	Vh = Ge(Wh),
	Qh = ue({}, yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	qh = Ge(Qh),
	Yh = ue({}, zi, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return 'deltaY' in e
				? e.deltaY
				: 'wheelDeltaY' in e
				? -e.wheelDeltaY
				: 'wheelDelta' in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	Kh = Ge(Yh),
	Gh = [9, 13, 27, 32],
	rs = Mt && 'CompositionEvent' in window,
	Qr = null;
Mt && 'documentMode' in document && (Qr = document.documentMode);
var Xh = Mt && 'TextEvent' in window && !Qr,
	xd = Mt && (!rs || (Qr && 8 < Qr && 11 >= Qr)),
	pu = String.fromCharCode(32),
	hu = !1;
function Sd(e, t) {
	switch (e) {
		case 'keyup':
			return Gh.indexOf(t.keyCode) !== -1;
		case 'keydown':
			return t.keyCode !== 229;
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0;
		default:
			return !1;
	}
}
function Ed(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Bn = !1;
function Jh(e, t) {
	switch (e) {
		case 'compositionend':
			return Ed(t);
		case 'keypress':
			return t.which !== 32 ? null : ((hu = !0), pu);
		case 'textInput':
			return (e = t.data), e === pu && hu ? null : e;
		default:
			return null;
	}
}
function Zh(e, t) {
	if (Bn)
		return e === 'compositionend' || (!rs && Sd(e, t))
			? ((e = wd()), (Zl = es = Gt = null), (Bn = !1), e)
			: null;
	switch (e) {
		case 'paste':
			return null;
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case 'compositionend':
			return xd && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var bh = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function mu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!bh[e.type] : t === 'textarea';
}
function Cd(e, t, n, r) {
	ed(r),
		(t = vi(t, 'onChange')),
		0 < t.length &&
			((n = new ts('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }));
}
var qr = null,
	il = null;
function em(e) {
	Ad(e, 0);
}
function Fi(e) {
	var t = Wn(e);
	if (Yc(t)) return e;
}
function tm(e, t) {
	if (e === 'change') return t;
}
var kd = !1;
if (Mt) {
	var yo;
	if (Mt) {
		var wo = 'oninput' in document;
		if (!wo) {
			var vu = document.createElement('div');
			vu.setAttribute('oninput', 'return;'),
				(wo = typeof vu.oninput == 'function');
		}
		yo = wo;
	} else yo = !1;
	kd = yo && (!document.documentMode || 9 < document.documentMode);
}
function gu() {
	qr && (qr.detachEvent('onpropertychange', jd), (il = qr = null));
}
function jd(e) {
	if (e.propertyName === 'value' && Fi(il)) {
		var t = [];
		Cd(t, il, e, Ga(e)), ld(em, t);
	}
}
function nm(e, t, n) {
	e === 'focusin'
		? (gu(), (qr = t), (il = n), qr.attachEvent('onpropertychange', jd))
		: e === 'focusout' && gu();
}
function rm(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
		return Fi(il);
}
function lm(e, t) {
	if (e === 'click') return Fi(t);
}
function im(e, t) {
	if (e === 'input' || e === 'change') return Fi(t);
}
function om(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pt = typeof Object.is == 'function' ? Object.is : om;
function ol(e, t) {
	if (pt(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var l = n[r];
		if (!Uo.call(t, l) || !pt(e[l], t[l])) return !1;
	}
	return !0;
}
function yu(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function wu(e, t) {
	var n = yu(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = yu(n);
	}
}
function Td(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Td(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function Pd() {
	for (var e = window, t = ui(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = ui(e.document);
	}
	return t;
}
function ls(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' ||
				e.type === 'search' ||
				e.type === 'tel' ||
				e.type === 'url' ||
				e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	);
}
function am(e) {
	var t = Pd(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Td(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && ls(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				'selectionStart' in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var l = n.textContent.length,
					i = Math.min(r.start, l);
				(r = r.end === void 0 ? i : Math.min(r.end, l)),
					!e.extend && i > r && ((l = r), (r = i), (i = l)),
					(l = wu(n, i));
				var o = wu(n, r);
				l &&
					o &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== l.node ||
						e.anchorOffset !== l.offset ||
						e.focusNode !== o.node ||
						e.focusOffset !== o.offset) &&
					((t = t.createRange()),
					t.setStart(l.node, l.offset),
					e.removeAllRanges(),
					i > r
						? (e.addRange(t), e.extend(o.node, o.offset))
						: (t.setEnd(o.node, o.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var sm = Mt && 'documentMode' in document && 11 >= document.documentMode,
	Hn = null,
	la = null,
	Yr = null,
	ia = !1;
function xu(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	ia ||
		Hn == null ||
		Hn !== ui(r) ||
		((r = Hn),
		'selectionStart' in r && ls(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(Yr && ol(Yr, r)) ||
			((Yr = r),
			(r = vi(la, 'onSelect')),
			0 < r.length &&
				((t = new ts('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Hn))));
}
function Ul(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	);
}
var $n = {
		animationend: Ul('Animation', 'AnimationEnd'),
		animationiteration: Ul('Animation', 'AnimationIteration'),
		animationstart: Ul('Animation', 'AnimationStart'),
		transitionend: Ul('Transition', 'TransitionEnd'),
	},
	xo = {},
	Nd = {};
Mt &&
	((Nd = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete $n.animationend.animation,
		delete $n.animationiteration.animation,
		delete $n.animationstart.animation),
	'TransitionEvent' in window || delete $n.transitionend.transition);
function Ui(e) {
	if (xo[e]) return xo[e];
	if (!$n[e]) return e;
	var t = $n[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Nd) return (xo[e] = t[n]);
	return e;
}
var Rd = Ui('animationend'),
	_d = Ui('animationiteration'),
	Ld = Ui('animationstart'),
	Md = Ui('transitionend'),
	Od = new Map(),
	Su =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		);
function un(e, t) {
	Od.set(e, t), Nn(t, [e]);
}
for (var So = 0; So < Su.length; So++) {
	var Eo = Su[So],
		um = Eo.toLowerCase(),
		cm = Eo[0].toUpperCase() + Eo.slice(1);
	un(um, 'on' + cm);
}
un(Rd, 'onAnimationEnd');
un(_d, 'onAnimationIteration');
un(Ld, 'onAnimationStart');
un('dblclick', 'onDoubleClick');
un('focusin', 'onFocus');
un('focusout', 'onBlur');
un(Md, 'onTransitionEnd');
sr('onMouseEnter', ['mouseout', 'mouseover']);
sr('onMouseLeave', ['mouseout', 'mouseover']);
sr('onPointerEnter', ['pointerout', 'pointerover']);
sr('onPointerLeave', ['pointerout', 'pointerover']);
Nn(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Nn(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
);
Nn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Nn(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Nn(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Nn(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var $r =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	dm = new Set('cancel close invalid load scroll toggle'.split(' ').concat($r));
function Eu(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), uh(r, t, void 0, e), (e.currentTarget = null);
}
function Ad(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			l = r.event;
		r = r.listeners;
		e: {
			var i = void 0;
			if (t)
				for (var o = r.length - 1; 0 <= o; o--) {
					var a = r[o],
						s = a.instance,
						u = a.currentTarget;
					if (((a = a.listener), s !== i && l.isPropagationStopped())) break e;
					Eu(l, a, u), (i = s);
				}
			else
				for (o = 0; o < r.length; o++) {
					if (
						((a = r[o]),
						(s = a.instance),
						(u = a.currentTarget),
						(a = a.listener),
						s !== i && l.isPropagationStopped())
					)
						break e;
					Eu(l, a, u), (i = s);
				}
		}
	}
	if (di) throw ((e = ea), (di = !1), (ea = null), e);
}
function Z(e, t) {
	var n = t[ca];
	n === void 0 && (n = t[ca] = new Set());
	var r = e + '__bubble';
	n.has(r) || (Dd(t, e, 2, !1), n.add(r));
}
function Co(e, t, n) {
	var r = 0;
	t && (r |= 4), Dd(n, e, r, t);
}
var Bl = '_reactListening' + Math.random().toString(36).slice(2);
function al(e) {
	if (!e[Bl]) {
		(e[Bl] = !0),
			$c.forEach(function (n) {
				n !== 'selectionchange' && (dm.has(n) || Co(n, !1, e), Co(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Bl] || ((t[Bl] = !0), Co('selectionchange', !1, t));
	}
}
function Dd(e, t, n, r) {
	switch (yd(t)) {
		case 1:
			var l = jh;
			break;
		case 4:
			l = Th;
			break;
		default:
			l = ba;
	}
	(n = l.bind(null, t, n, e)),
		(l = void 0),
		!bo ||
			(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
			(l = !0),
		r
			? l !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: l })
				: e.addEventListener(t, n, !0)
			: l !== void 0
			? e.addEventListener(t, n, { passive: l })
			: e.addEventListener(t, n, !1);
}
function ko(e, t, n, r, l) {
	var i = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var a = r.stateNode.containerInfo;
				if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
				if (o === 4)
					for (o = r.return; o !== null; ) {
						var s = o.tag;
						if (
							(s === 3 || s === 4) &&
							((s = o.stateNode.containerInfo),
							s === l || (s.nodeType === 8 && s.parentNode === l))
						)
							return;
						o = o.return;
					}
				for (; a !== null; ) {
					if (((o = mn(a)), o === null)) return;
					if (((s = o.tag), s === 5 || s === 6)) {
						r = i = o;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	ld(function () {
		var u = i,
			d = Ga(n),
			p = [];
		e: {
			var m = Od.get(e);
			if (m !== void 0) {
				var y = ts,
					x = e;
				switch (e) {
					case 'keypress':
						if (bl(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						y = Hh;
						break;
					case 'focusin':
						(x = 'focus'), (y = go);
						break;
					case 'focusout':
						(x = 'blur'), (y = go);
						break;
					case 'beforeblur':
					case 'afterblur':
						y = go;
						break;
					case 'click':
						if (n.button === 2) break e;
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						y = cu;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						y = Rh;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						y = Vh;
						break;
					case Rd:
					case _d:
					case Ld:
						y = Mh;
						break;
					case Md:
						y = qh;
						break;
					case 'scroll':
						y = Ph;
						break;
					case 'wheel':
						y = Kh;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						y = Ah;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						y = fu;
				}
				var w = (t & 4) !== 0,
					P = !w && e === 'scroll',
					v = w ? (m !== null ? m + 'Capture' : null) : m;
				w = [];
				for (var f = u, g; f !== null; ) {
					g = f;
					var h = g.stateNode;
					if (
						(g.tag === 5 &&
							h !== null &&
							((g = h),
							v !== null && ((h = tl(f, v)), h != null && w.push(sl(f, h, g)))),
						P)
					)
						break;
					f = f.return;
				}
				0 < w.length &&
					((m = new y(m, x, null, n, d)), p.push({ event: m, listeners: w }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((m = e === 'mouseover' || e === 'pointerover'),
					(y = e === 'mouseout' || e === 'pointerout'),
					m &&
						n !== Jo &&
						(x = n.relatedTarget || n.fromElement) &&
						(mn(x) || x[Ot]))
				)
					break e;
				if (
					(y || m) &&
					((m =
						d.window === d
							? d
							: (m = d.ownerDocument)
							? m.defaultView || m.parentWindow
							: window),
					y
						? ((x = n.relatedTarget || n.toElement),
						  (y = u),
						  (x = x ? mn(x) : null),
						  x !== null &&
								((P = Rn(x)), x !== P || (x.tag !== 5 && x.tag !== 6)) &&
								(x = null))
						: ((y = null), (x = u)),
					y !== x)
				) {
					if (
						((w = cu),
						(h = 'onMouseLeave'),
						(v = 'onMouseEnter'),
						(f = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((w = fu),
							(h = 'onPointerLeave'),
							(v = 'onPointerEnter'),
							(f = 'pointer')),
						(P = y == null ? m : Wn(y)),
						(g = x == null ? m : Wn(x)),
						(m = new w(h, f + 'leave', y, n, d)),
						(m.target = P),
						(m.relatedTarget = g),
						(h = null),
						mn(d) === u &&
							((w = new w(v, f + 'enter', x, n, d)),
							(w.target = g),
							(w.relatedTarget = P),
							(h = w)),
						(P = h),
						y && x)
					)
						t: {
							for (w = y, v = x, f = 0, g = w; g; g = In(g)) f++;
							for (g = 0, h = v; h; h = In(h)) g++;
							for (; 0 < f - g; ) (w = In(w)), f--;
							for (; 0 < g - f; ) (v = In(v)), g--;
							for (; f--; ) {
								if (w === v || (v !== null && w === v.alternate)) break t;
								(w = In(w)), (v = In(v));
							}
							w = null;
						}
					else w = null;
					y !== null && Cu(p, m, y, w, !1),
						x !== null && P !== null && Cu(p, P, x, w, !0);
				}
			}
			e: {
				if (
					((m = u ? Wn(u) : window),
					(y = m.nodeName && m.nodeName.toLowerCase()),
					y === 'select' || (y === 'input' && m.type === 'file'))
				)
					var j = tm;
				else if (mu(m))
					if (kd) j = im;
					else {
						j = rm;
						var R = nm;
					}
				else
					(y = m.nodeName) &&
						y.toLowerCase() === 'input' &&
						(m.type === 'checkbox' || m.type === 'radio') &&
						(j = lm);
				if (j && (j = j(e, u))) {
					Cd(p, j, n, d);
					break e;
				}
				R && R(e, m, u),
					e === 'focusout' &&
						(R = m._wrapperState) &&
						R.controlled &&
						m.type === 'number' &&
						qo(m, 'number', m.value);
			}
			switch (((R = u ? Wn(u) : window), e)) {
				case 'focusin':
					(mu(R) || R.contentEditable === 'true') &&
						((Hn = R), (la = u), (Yr = null));
					break;
				case 'focusout':
					Yr = la = Hn = null;
					break;
				case 'mousedown':
					ia = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(ia = !1), xu(p, n, d);
					break;
				case 'selectionchange':
					if (sm) break;
				case 'keydown':
				case 'keyup':
					xu(p, n, d);
			}
			var N;
			if (rs)
				e: {
					switch (e) {
						case 'compositionstart':
							var M = 'onCompositionStart';
							break e;
						case 'compositionend':
							M = 'onCompositionEnd';
							break e;
						case 'compositionupdate':
							M = 'onCompositionUpdate';
							break e;
					}
					M = void 0;
				}
			else
				Bn
					? Sd(e, n) && (M = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (M = 'onCompositionStart');
			M &&
				(xd &&
					n.locale !== 'ko' &&
					(Bn || M !== 'onCompositionStart'
						? M === 'onCompositionEnd' && Bn && (N = wd())
						: ((Gt = d),
						  (es = 'value' in Gt ? Gt.value : Gt.textContent),
						  (Bn = !0))),
				(R = vi(u, M)),
				0 < R.length &&
					((M = new du(M, e, null, n, d)),
					p.push({ event: M, listeners: R }),
					N ? (M.data = N) : ((N = Ed(n)), N !== null && (M.data = N)))),
				(N = Xh ? Jh(e, n) : Zh(e, n)) &&
					((u = vi(u, 'onBeforeInput')),
					0 < u.length &&
						((d = new du('onBeforeInput', 'beforeinput', null, n, d)),
						p.push({ event: d, listeners: u }),
						(d.data = N)));
		}
		Ad(p, t);
	});
}
function sl(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function vi(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var l = e,
			i = l.stateNode;
		l.tag === 5 &&
			i !== null &&
			((l = i),
			(i = tl(e, n)),
			i != null && r.unshift(sl(e, i, l)),
			(i = tl(e, t)),
			i != null && r.push(sl(e, i, l))),
			(e = e.return);
	}
	return r;
}
function In(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function Cu(e, t, n, r, l) {
	for (var i = t._reactName, o = []; n !== null && n !== r; ) {
		var a = n,
			s = a.alternate,
			u = a.stateNode;
		if (s !== null && s === r) break;
		a.tag === 5 &&
			u !== null &&
			((a = u),
			l
				? ((s = tl(n, i)), s != null && o.unshift(sl(n, s, a)))
				: l || ((s = tl(n, i)), s != null && o.push(sl(n, s, a)))),
			(n = n.return);
	}
	o.length !== 0 && e.push({ event: t, listeners: o });
}
var fm = /\r\n?/g,
	pm = /\u0000|\uFFFD/g;
function ku(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			fm,
			`
`
		)
		.replace(pm, '');
}
function Hl(e, t, n) {
	if (((t = ku(t)), ku(e) !== t && n)) throw Error(T(425));
}
function gi() {}
var oa = null,
	aa = null;
function sa(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var ua = typeof setTimeout == 'function' ? setTimeout : void 0,
	hm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	ju = typeof Promise == 'function' ? Promise : void 0,
	mm =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof ju < 'u'
			? function (e) {
					return ju.resolve(null).then(e).catch(vm);
			  }
			: ua;
function vm(e) {
	setTimeout(function () {
		throw e;
	});
}
function jo(e, t) {
	var n = t,
		r = 0;
	do {
		var l = n.nextSibling;
		if ((e.removeChild(n), l && l.nodeType === 8))
			if (((n = l.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(l), ll(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = l;
	} while (n);
	ll(t);
}
function en(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
			if (t === '/$') return null;
		}
	}
	return e;
}
function Tu(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e;
				t--;
			} else n === '/$' && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var wr = Math.random().toString(36).slice(2),
	wt = '__reactFiber$' + wr,
	ul = '__reactProps$' + wr,
	Ot = '__reactContainer$' + wr,
	ca = '__reactEvents$' + wr,
	gm = '__reactListeners$' + wr,
	ym = '__reactHandles$' + wr;
function mn(e) {
	var t = e[wt];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Ot] || n[wt])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = Tu(e); e !== null; ) {
					if ((n = e[wt])) return n;
					e = Tu(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function Cl(e) {
	return (
		(e = e[wt] || e[Ot]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Wn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(T(33));
}
function Bi(e) {
	return e[ul] || null;
}
var da = [],
	Vn = -1;
function cn(e) {
	return { current: e };
}
function b(e) {
	0 > Vn || ((e.current = da[Vn]), (da[Vn] = null), Vn--);
}
function J(e, t) {
	Vn++, (da[Vn] = e.current), (e.current = t);
}
var sn = {},
	_e = cn(sn),
	Be = cn(!1),
	En = sn;
function ur(e, t) {
	var n = e.type.contextTypes;
	if (!n) return sn;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var l = {},
		i;
	for (i in n) l[i] = t[i];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = l)),
		l
	);
}
function He(e) {
	return (e = e.childContextTypes), e != null;
}
function yi() {
	b(Be), b(_e);
}
function Pu(e, t, n) {
	if (_e.current !== sn) throw Error(T(168));
	J(_e, t), J(Be, n);
}
function Id(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var l in r) if (!(l in t)) throw Error(T(108, nh(e) || 'Unknown', l));
	return ue({}, n, r);
}
function wi(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || sn),
		(En = _e.current),
		J(_e, e),
		J(Be, Be.current),
		!0
	);
}
function Nu(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(T(169));
	n
		? ((e = Id(e, t, En)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  b(Be),
		  b(_e),
		  J(_e, e))
		: b(Be),
		J(Be, n);
}
var Tt = null,
	Hi = !1,
	To = !1;
function zd(e) {
	Tt === null ? (Tt = [e]) : Tt.push(e);
}
function wm(e) {
	(Hi = !0), zd(e);
}
function dn() {
	if (!To && Tt !== null) {
		To = !0;
		var e = 0,
			t = K;
		try {
			var n = Tt;
			for (K = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(Tt = null), (Hi = !1);
		} catch (l) {
			throw (Tt !== null && (Tt = Tt.slice(e + 1)), sd(Xa, dn), l);
		} finally {
			(K = t), (To = !1);
		}
	}
	return null;
}
var Qn = [],
	qn = 0,
	xi = null,
	Si = 0,
	Ze = [],
	be = 0,
	Cn = null,
	Pt = 1,
	Nt = '';
function pn(e, t) {
	(Qn[qn++] = Si), (Qn[qn++] = xi), (xi = e), (Si = t);
}
function Fd(e, t, n) {
	(Ze[be++] = Pt), (Ze[be++] = Nt), (Ze[be++] = Cn), (Cn = e);
	var r = Pt;
	e = Nt;
	var l = 32 - dt(r) - 1;
	(r &= ~(1 << l)), (n += 1);
	var i = 32 - dt(t) + l;
	if (30 < i) {
		var o = l - (l % 5);
		(i = (r & ((1 << o) - 1)).toString(32)),
			(r >>= o),
			(l -= o),
			(Pt = (1 << (32 - dt(t) + l)) | (n << l) | r),
			(Nt = i + e);
	} else (Pt = (1 << i) | (n << l) | r), (Nt = e);
}
function is(e) {
	e.return !== null && (pn(e, 1), Fd(e, 1, 0));
}
function os(e) {
	for (; e === xi; )
		(xi = Qn[--qn]), (Qn[qn] = null), (Si = Qn[--qn]), (Qn[qn] = null);
	for (; e === Cn; )
		(Cn = Ze[--be]),
			(Ze[be] = null),
			(Nt = Ze[--be]),
			(Ze[be] = null),
			(Pt = Ze[--be]),
			(Ze[be] = null);
}
var qe = null,
	Qe = null,
	ie = !1,
	ut = null;
function Ud(e, t) {
	var n = et(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ru(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (qe = e), (Qe = en(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (qe = e), (Qe = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = Cn !== null ? { id: Pt, overflow: Nt } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = et(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (qe = e),
					  (Qe = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function fa(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function pa(e) {
	if (ie) {
		var t = Qe;
		if (t) {
			var n = t;
			if (!Ru(e, t)) {
				if (fa(e)) throw Error(T(418));
				t = en(n.nextSibling);
				var r = qe;
				t && Ru(e, t)
					? Ud(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (ie = !1), (qe = e));
			}
		} else {
			if (fa(e)) throw Error(T(418));
			(e.flags = (e.flags & -4097) | 2), (ie = !1), (qe = e);
		}
	}
}
function _u(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	qe = e;
}
function $l(e) {
	if (e !== qe) return !1;
	if (!ie) return _u(e), (ie = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !sa(e.type, e.memoizedProps))),
		t && (t = Qe))
	) {
		if (fa(e)) throw (Bd(), Error(T(418)));
		for (; t; ) Ud(e, t), (t = en(t.nextSibling));
	}
	if ((_u(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(T(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === '/$') {
						if (t === 0) {
							Qe = en(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			Qe = null;
		}
	} else Qe = qe ? en(e.stateNode.nextSibling) : null;
	return !0;
}
function Bd() {
	for (var e = Qe; e; ) e = en(e.nextSibling);
}
function cr() {
	(Qe = qe = null), (ie = !1);
}
function as(e) {
	ut === null ? (ut = [e]) : ut.push(e);
}
var xm = zt.ReactCurrentBatchConfig;
function ot(e, t) {
	if (e && e.defaultProps) {
		(t = ue({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var Ei = cn(null),
	Ci = null,
	Yn = null,
	ss = null;
function us() {
	ss = Yn = Ci = null;
}
function cs(e) {
	var t = Ei.current;
	b(Ei), (e._currentValue = t);
}
function ha(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function nr(e, t) {
	(Ci = e),
		(ss = Yn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Fe = !0), (e.firstContext = null));
}
function nt(e) {
	var t = e._currentValue;
	if (ss !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Yn === null)) {
			if (Ci === null) throw Error(T(308));
			(Yn = e), (Ci.dependencies = { lanes: 0, firstContext: e });
		} else Yn = Yn.next = e;
	return t;
}
var vn = null;
function ds(e) {
	vn === null ? (vn = [e]) : vn.push(e);
}
function Hd(e, t, n, r) {
	var l = t.interleaved;
	return (
		l === null ? ((n.next = n), ds(t)) : ((n.next = l.next), (l.next = n)),
		(t.interleaved = n),
		At(e, r)
	);
}
function At(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var qt = !1;
function fs(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function $d(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function Rt(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function tn(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), q & 2)) {
		var l = r.pending;
		return (
			l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
			(r.pending = t),
			At(e, n)
		);
	}
	return (
		(l = r.interleaved),
		l === null ? ((t.next = t), ds(r)) : ((t.next = l.next), (l.next = t)),
		(r.interleaved = t),
		At(e, n)
	);
}
function ei(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ja(e, n);
	}
}
function Lu(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var l = null,
			i = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var o = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
			} while (n !== null);
			i === null ? (l = i = t) : (i = i.next = t);
		} else l = i = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: l,
			lastBaseUpdate: i,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function ki(e, t, n, r) {
	var l = e.updateQueue;
	qt = !1;
	var i = l.firstBaseUpdate,
		o = l.lastBaseUpdate,
		a = l.shared.pending;
	if (a !== null) {
		l.shared.pending = null;
		var s = a,
			u = s.next;
		(s.next = null), o === null ? (i = u) : (o.next = u), (o = s);
		var d = e.alternate;
		d !== null &&
			((d = d.updateQueue),
			(a = d.lastBaseUpdate),
			a !== o &&
				(a === null ? (d.firstBaseUpdate = u) : (a.next = u),
				(d.lastBaseUpdate = s)));
	}
	if (i !== null) {
		var p = l.baseState;
		(o = 0), (d = u = s = null), (a = i);
		do {
			var m = a.lane,
				y = a.eventTime;
			if ((r & m) === m) {
				d !== null &&
					(d = d.next =
						{
							eventTime: y,
							lane: 0,
							tag: a.tag,
							payload: a.payload,
							callback: a.callback,
							next: null,
						});
				e: {
					var x = e,
						w = a;
					switch (((m = t), (y = n), w.tag)) {
						case 1:
							if (((x = w.payload), typeof x == 'function')) {
								p = x.call(y, p, m);
								break e;
							}
							p = x;
							break e;
						case 3:
							x.flags = (x.flags & -65537) | 128;
						case 0:
							if (
								((x = w.payload),
								(m = typeof x == 'function' ? x.call(y, p, m) : x),
								m == null)
							)
								break e;
							p = ue({}, p, m);
							break e;
						case 2:
							qt = !0;
					}
				}
				a.callback !== null &&
					a.lane !== 0 &&
					((e.flags |= 64),
					(m = l.effects),
					m === null ? (l.effects = [a]) : m.push(a));
			} else
				(y = {
					eventTime: y,
					lane: m,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null,
				}),
					d === null ? ((u = d = y), (s = p)) : (d = d.next = y),
					(o |= m);
			if (((a = a.next), a === null)) {
				if (((a = l.shared.pending), a === null)) break;
				(m = a),
					(a = m.next),
					(m.next = null),
					(l.lastBaseUpdate = m),
					(l.shared.pending = null);
			}
		} while (1);
		if (
			(d === null && (s = p),
			(l.baseState = s),
			(l.firstBaseUpdate = u),
			(l.lastBaseUpdate = d),
			(t = l.shared.interleaved),
			t !== null)
		) {
			l = t;
			do (o |= l.lane), (l = l.next);
			while (l !== t);
		} else i === null && (l.shared.lanes = 0);
		(jn |= o), (e.lanes = o), (e.memoizedState = p);
	}
}
function Mu(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				l = r.callback;
			if (l !== null) {
				if (((r.callback = null), (r = n), typeof l != 'function'))
					throw Error(T(191, l));
				l.call(r);
			}
		}
}
var Wd = new Hc.Component().refs;
function ma(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : ue({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $i = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Rn(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = Me(),
			l = rn(e),
			i = Rt(r, l);
		(i.payload = t),
			n != null && (i.callback = n),
			(t = tn(e, i, l)),
			t !== null && (ft(t, e, l, r), ei(t, e, l));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = Me(),
			l = rn(e),
			i = Rt(r, l);
		(i.tag = 1),
			(i.payload = t),
			n != null && (i.callback = n),
			(t = tn(e, i, l)),
			t !== null && (ft(t, e, l, r), ei(t, e, l));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = Me(),
			r = rn(e),
			l = Rt(n, r);
		(l.tag = 2),
			t != null && (l.callback = t),
			(t = tn(e, l, r)),
			t !== null && (ft(t, e, r, n), ei(t, e, r));
	},
};
function Ou(e, t, n, r, l, i, o) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, i, o)
			: t.prototype && t.prototype.isPureReactComponent
			? !ol(n, r) || !ol(l, i)
			: !0
	);
}
function Vd(e, t, n) {
	var r = !1,
		l = sn,
		i = t.contextType;
	return (
		typeof i == 'object' && i !== null
			? (i = nt(i))
			: ((l = He(t) ? En : _e.current),
			  (r = t.contextTypes),
			  (i = (r = r != null) ? ur(e, l) : sn)),
		(t = new t(n, i)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = $i),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = l),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		t
	);
}
function Au(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && $i.enqueueReplaceState(t, t.state, null);
}
function va(e, t, n, r) {
	var l = e.stateNode;
	(l.props = n), (l.state = e.memoizedState), (l.refs = Wd), fs(e);
	var i = t.contextType;
	typeof i == 'object' && i !== null
		? (l.context = nt(i))
		: ((i = He(t) ? En : _e.current), (l.context = ur(e, i))),
		(l.state = e.memoizedState),
		(i = t.getDerivedStateFromProps),
		typeof i == 'function' && (ma(e, t, i, n), (l.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof l.getSnapshotBeforeUpdate == 'function' ||
			(typeof l.UNSAFE_componentWillMount != 'function' &&
				typeof l.componentWillMount != 'function') ||
			((t = l.state),
			typeof l.componentWillMount == 'function' && l.componentWillMount(),
			typeof l.UNSAFE_componentWillMount == 'function' &&
				l.UNSAFE_componentWillMount(),
			t !== l.state && $i.enqueueReplaceState(l, l.state, null),
			ki(e, n, l, r),
			(l.state = e.memoizedState)),
		typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function _r(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(T(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(T(147, e));
			var l = r,
				i = '' + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == 'function' &&
				t.ref._stringRef === i
				? t.ref
				: ((t = function (o) {
						var a = l.refs;
						a === Wd && (a = l.refs = {}),
							o === null ? delete a[i] : (a[i] = o);
				  }),
				  (t._stringRef = i),
				  t);
		}
		if (typeof e != 'string') throw Error(T(284));
		if (!n._owner) throw Error(T(290, e));
	}
	return e;
}
function Wl(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			T(
				31,
				e === '[object Object]'
					? 'object with keys {' + Object.keys(t).join(', ') + '}'
					: e
			)
		))
	);
}
function Du(e) {
	var t = e._init;
	return t(e._payload);
}
function Qd(e) {
	function t(v, f) {
		if (e) {
			var g = v.deletions;
			g === null ? ((v.deletions = [f]), (v.flags |= 16)) : g.push(f);
		}
	}
	function n(v, f) {
		if (!e) return null;
		for (; f !== null; ) t(v, f), (f = f.sibling);
		return null;
	}
	function r(v, f) {
		for (v = new Map(); f !== null; )
			f.key !== null ? v.set(f.key, f) : v.set(f.index, f), (f = f.sibling);
		return v;
	}
	function l(v, f) {
		return (v = ln(v, f)), (v.index = 0), (v.sibling = null), v;
	}
	function i(v, f, g) {
		return (
			(v.index = g),
			e
				? ((g = v.alternate),
				  g !== null
						? ((g = g.index), g < f ? ((v.flags |= 2), f) : g)
						: ((v.flags |= 2), f))
				: ((v.flags |= 1048576), f)
		);
	}
	function o(v) {
		return e && v.alternate === null && (v.flags |= 2), v;
	}
	function a(v, f, g, h) {
		return f === null || f.tag !== 6
			? ((f = Oo(g, v.mode, h)), (f.return = v), f)
			: ((f = l(f, g)), (f.return = v), f);
	}
	function s(v, f, g, h) {
		var j = g.type;
		return j === Un
			? d(v, f, g.props.children, h, g.key)
			: f !== null &&
			  (f.elementType === j ||
					(typeof j == 'object' &&
						j !== null &&
						j.$$typeof === Qt &&
						Du(j) === f.type))
			? ((h = l(f, g.props)), (h.ref = _r(v, f, g)), (h.return = v), h)
			: ((h = oi(g.type, g.key, g.props, null, v.mode, h)),
			  (h.ref = _r(v, f, g)),
			  (h.return = v),
			  h);
	}
	function u(v, f, g, h) {
		return f === null ||
			f.tag !== 4 ||
			f.stateNode.containerInfo !== g.containerInfo ||
			f.stateNode.implementation !== g.implementation
			? ((f = Ao(g, v.mode, h)), (f.return = v), f)
			: ((f = l(f, g.children || [])), (f.return = v), f);
	}
	function d(v, f, g, h, j) {
		return f === null || f.tag !== 7
			? ((f = xn(g, v.mode, h, j)), (f.return = v), f)
			: ((f = l(f, g)), (f.return = v), f);
	}
	function p(v, f, g) {
		if ((typeof f == 'string' && f !== '') || typeof f == 'number')
			return (f = Oo('' + f, v.mode, g)), (f.return = v), f;
		if (typeof f == 'object' && f !== null) {
			switch (f.$$typeof) {
				case Ml:
					return (
						(g = oi(f.type, f.key, f.props, null, v.mode, g)),
						(g.ref = _r(v, null, f)),
						(g.return = v),
						g
					);
				case Fn:
					return (f = Ao(f, v.mode, g)), (f.return = v), f;
				case Qt:
					var h = f._init;
					return p(v, h(f._payload), g);
			}
			if (Br(f) || jr(f))
				return (f = xn(f, v.mode, g, null)), (f.return = v), f;
			Wl(v, f);
		}
		return null;
	}
	function m(v, f, g, h) {
		var j = f !== null ? f.key : null;
		if ((typeof g == 'string' && g !== '') || typeof g == 'number')
			return j !== null ? null : a(v, f, '' + g, h);
		if (typeof g == 'object' && g !== null) {
			switch (g.$$typeof) {
				case Ml:
					return g.key === j ? s(v, f, g, h) : null;
				case Fn:
					return g.key === j ? u(v, f, g, h) : null;
				case Qt:
					return (j = g._init), m(v, f, j(g._payload), h);
			}
			if (Br(g) || jr(g)) return j !== null ? null : d(v, f, g, h, null);
			Wl(v, g);
		}
		return null;
	}
	function y(v, f, g, h, j) {
		if ((typeof h == 'string' && h !== '') || typeof h == 'number')
			return (v = v.get(g) || null), a(f, v, '' + h, j);
		if (typeof h == 'object' && h !== null) {
			switch (h.$$typeof) {
				case Ml:
					return (v = v.get(h.key === null ? g : h.key) || null), s(f, v, h, j);
				case Fn:
					return (v = v.get(h.key === null ? g : h.key) || null), u(f, v, h, j);
				case Qt:
					var R = h._init;
					return y(v, f, g, R(h._payload), j);
			}
			if (Br(h) || jr(h)) return (v = v.get(g) || null), d(f, v, h, j, null);
			Wl(f, h);
		}
		return null;
	}
	function x(v, f, g, h) {
		for (
			var j = null, R = null, N = f, M = (f = 0), Q = null;
			N !== null && M < g.length;
			M++
		) {
			N.index > M ? ((Q = N), (N = null)) : (Q = N.sibling);
			var U = m(v, N, g[M], h);
			if (U === null) {
				N === null && (N = Q);
				break;
			}
			e && N && U.alternate === null && t(v, N),
				(f = i(U, f, M)),
				R === null ? (j = U) : (R.sibling = U),
				(R = U),
				(N = Q);
		}
		if (M === g.length) return n(v, N), ie && pn(v, M), j;
		if (N === null) {
			for (; M < g.length; M++)
				(N = p(v, g[M], h)),
					N !== null &&
						((f = i(N, f, M)), R === null ? (j = N) : (R.sibling = N), (R = N));
			return ie && pn(v, M), j;
		}
		for (N = r(v, N); M < g.length; M++)
			(Q = y(N, v, M, g[M], h)),
				Q !== null &&
					(e && Q.alternate !== null && N.delete(Q.key === null ? M : Q.key),
					(f = i(Q, f, M)),
					R === null ? (j = Q) : (R.sibling = Q),
					(R = Q));
		return (
			e &&
				N.forEach(function (Ee) {
					return t(v, Ee);
				}),
			ie && pn(v, M),
			j
		);
	}
	function w(v, f, g, h) {
		var j = jr(g);
		if (typeof j != 'function') throw Error(T(150));
		if (((g = j.call(g)), g == null)) throw Error(T(151));
		for (
			var R = (j = null), N = f, M = (f = 0), Q = null, U = g.next();
			N !== null && !U.done;
			M++, U = g.next()
		) {
			N.index > M ? ((Q = N), (N = null)) : (Q = N.sibling);
			var Ee = m(v, N, U.value, h);
			if (Ee === null) {
				N === null && (N = Q);
				break;
			}
			e && N && Ee.alternate === null && t(v, N),
				(f = i(Ee, f, M)),
				R === null ? (j = Ee) : (R.sibling = Ee),
				(R = Ee),
				(N = Q);
		}
		if (U.done) return n(v, N), ie && pn(v, M), j;
		if (N === null) {
			for (; !U.done; M++, U = g.next())
				(U = p(v, U.value, h)),
					U !== null &&
						((f = i(U, f, M)), R === null ? (j = U) : (R.sibling = U), (R = U));
			return ie && pn(v, M), j;
		}
		for (N = r(v, N); !U.done; M++, U = g.next())
			(U = y(N, v, M, U.value, h)),
				U !== null &&
					(e && U.alternate !== null && N.delete(U.key === null ? M : U.key),
					(f = i(U, f, M)),
					R === null ? (j = U) : (R.sibling = U),
					(R = U));
		return (
			e &&
				N.forEach(function (G) {
					return t(v, G);
				}),
			ie && pn(v, M),
			j
		);
	}
	function P(v, f, g, h) {
		if (
			(typeof g == 'object' &&
				g !== null &&
				g.type === Un &&
				g.key === null &&
				(g = g.props.children),
			typeof g == 'object' && g !== null)
		) {
			switch (g.$$typeof) {
				case Ml:
					e: {
						for (var j = g.key, R = f; R !== null; ) {
							if (R.key === j) {
								if (((j = g.type), j === Un)) {
									if (R.tag === 7) {
										n(v, R.sibling),
											(f = l(R, g.props.children)),
											(f.return = v),
											(v = f);
										break e;
									}
								} else if (
									R.elementType === j ||
									(typeof j == 'object' &&
										j !== null &&
										j.$$typeof === Qt &&
										Du(j) === R.type)
								) {
									n(v, R.sibling),
										(f = l(R, g.props)),
										(f.ref = _r(v, R, g)),
										(f.return = v),
										(v = f);
									break e;
								}
								n(v, R);
								break;
							} else t(v, R);
							R = R.sibling;
						}
						g.type === Un
							? ((f = xn(g.props.children, v.mode, h, g.key)),
							  (f.return = v),
							  (v = f))
							: ((h = oi(g.type, g.key, g.props, null, v.mode, h)),
							  (h.ref = _r(v, f, g)),
							  (h.return = v),
							  (v = h));
					}
					return o(v);
				case Fn:
					e: {
						for (R = g.key; f !== null; ) {
							if (f.key === R)
								if (
									f.tag === 4 &&
									f.stateNode.containerInfo === g.containerInfo &&
									f.stateNode.implementation === g.implementation
								) {
									n(v, f.sibling),
										(f = l(f, g.children || [])),
										(f.return = v),
										(v = f);
									break e;
								} else {
									n(v, f);
									break;
								}
							else t(v, f);
							f = f.sibling;
						}
						(f = Ao(g, v.mode, h)), (f.return = v), (v = f);
					}
					return o(v);
				case Qt:
					return (R = g._init), P(v, f, R(g._payload), h);
			}
			if (Br(g)) return x(v, f, g, h);
			if (jr(g)) return w(v, f, g, h);
			Wl(v, g);
		}
		return (typeof g == 'string' && g !== '') || typeof g == 'number'
			? ((g = '' + g),
			  f !== null && f.tag === 6
					? (n(v, f.sibling), (f = l(f, g)), (f.return = v), (v = f))
					: (n(v, f), (f = Oo(g, v.mode, h)), (f.return = v), (v = f)),
			  o(v))
			: n(v, f);
	}
	return P;
}
var dr = Qd(!0),
	qd = Qd(!1),
	kl = {},
	St = cn(kl),
	cl = cn(kl),
	dl = cn(kl);
function gn(e) {
	if (e === kl) throw Error(T(174));
	return e;
}
function ps(e, t) {
	switch ((J(dl, t), J(cl, e), J(St, kl), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Ko(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Ko(t, e));
	}
	b(St), J(St, t);
}
function fr() {
	b(St), b(cl), b(dl);
}
function Yd(e) {
	gn(dl.current);
	var t = gn(St.current),
		n = Ko(t, e.type);
	t !== n && (J(cl, e), J(St, n));
}
function hs(e) {
	cl.current === e && (b(St), b(cl));
}
var ae = cn(0);
function ji(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var Po = [];
function ms() {
	for (var e = 0; e < Po.length; e++)
		Po[e]._workInProgressVersionPrimary = null;
	Po.length = 0;
}
var ti = zt.ReactCurrentDispatcher,
	No = zt.ReactCurrentBatchConfig,
	kn = 0,
	se = null,
	ge = null,
	xe = null,
	Ti = !1,
	Kr = !1,
	fl = 0,
	Sm = 0;
function Pe() {
	throw Error(T(321));
}
function vs(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!pt(e[n], t[n])) return !1;
	return !0;
}
function gs(e, t, n, r, l, i) {
	if (
		((kn = i),
		(se = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(ti.current = e === null || e.memoizedState === null ? jm : Tm),
		(e = n(r, l)),
		Kr)
	) {
		i = 0;
		do {
			if (((Kr = !1), (fl = 0), 25 <= i)) throw Error(T(301));
			(i += 1),
				(xe = ge = null),
				(t.updateQueue = null),
				(ti.current = Pm),
				(e = n(r, l));
		} while (Kr);
	}
	if (
		((ti.current = Pi),
		(t = ge !== null && ge.next !== null),
		(kn = 0),
		(xe = ge = se = null),
		(Ti = !1),
		t)
	)
		throw Error(T(300));
	return e;
}
function ys() {
	var e = fl !== 0;
	return (fl = 0), e;
}
function yt() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return xe === null ? (se.memoizedState = xe = e) : (xe = xe.next = e), xe;
}
function rt() {
	if (ge === null) {
		var e = se.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = ge.next;
	var t = xe === null ? se.memoizedState : xe.next;
	if (t !== null) (xe = t), (ge = e);
	else {
		if (e === null) throw Error(T(310));
		(ge = e),
			(e = {
				memoizedState: ge.memoizedState,
				baseState: ge.baseState,
				baseQueue: ge.baseQueue,
				queue: ge.queue,
				next: null,
			}),
			xe === null ? (se.memoizedState = xe = e) : (xe = xe.next = e);
	}
	return xe;
}
function pl(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function Ro(e) {
	var t = rt(),
		n = t.queue;
	if (n === null) throw Error(T(311));
	n.lastRenderedReducer = e;
	var r = ge,
		l = r.baseQueue,
		i = n.pending;
	if (i !== null) {
		if (l !== null) {
			var o = l.next;
			(l.next = i.next), (i.next = o);
		}
		(r.baseQueue = l = i), (n.pending = null);
	}
	if (l !== null) {
		(i = l.next), (r = r.baseState);
		var a = (o = null),
			s = null,
			u = i;
		do {
			var d = u.lane;
			if ((kn & d) === d)
				s !== null &&
					(s = s.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var p = {
					lane: d,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				s === null ? ((a = s = p), (o = r)) : (s = s.next = p),
					(se.lanes |= d),
					(jn |= d);
			}
			u = u.next;
		} while (u !== null && u !== i);
		s === null ? (o = r) : (s.next = a),
			pt(r, t.memoizedState) || (Fe = !0),
			(t.memoizedState = r),
			(t.baseState = o),
			(t.baseQueue = s),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		l = e;
		do (i = l.lane), (se.lanes |= i), (jn |= i), (l = l.next);
		while (l !== e);
	} else l === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function _o(e) {
	var t = rt(),
		n = t.queue;
	if (n === null) throw Error(T(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		l = n.pending,
		i = t.memoizedState;
	if (l !== null) {
		n.pending = null;
		var o = (l = l.next);
		do (i = e(i, o.action)), (o = o.next);
		while (o !== l);
		pt(i, t.memoizedState) || (Fe = !0),
			(t.memoizedState = i),
			t.baseQueue === null && (t.baseState = i),
			(n.lastRenderedState = i);
	}
	return [i, r];
}
function Kd() {}
function Gd(e, t) {
	var n = se,
		r = rt(),
		l = t(),
		i = !pt(r.memoizedState, l);
	if (
		(i && ((r.memoizedState = l), (Fe = !0)),
		(r = r.queue),
		ws(Zd.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || i || (xe !== null && xe.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			hl(9, Jd.bind(null, n, r, l, t), void 0, null),
			Se === null)
		)
			throw Error(T(349));
		kn & 30 || Xd(n, t, l);
	}
	return l;
}
function Xd(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = se.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (se.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Jd(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), bd(t) && ef(e);
}
function Zd(e, t, n) {
	return n(function () {
		bd(t) && ef(e);
	});
}
function bd(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !pt(e, n);
	} catch {
		return !0;
	}
}
function ef(e) {
	var t = At(e, 1);
	t !== null && ft(t, e, 1, -1);
}
function Iu(e) {
	var t = yt();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: pl,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = km.bind(null, se, e)),
		[t.memoizedState, e]
	);
}
function hl(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = se.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (se.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function tf() {
	return rt().memoizedState;
}
function ni(e, t, n, r) {
	var l = yt();
	(se.flags |= e),
		(l.memoizedState = hl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Wi(e, t, n, r) {
	var l = rt();
	r = r === void 0 ? null : r;
	var i = void 0;
	if (ge !== null) {
		var o = ge.memoizedState;
		if (((i = o.destroy), r !== null && vs(r, o.deps))) {
			l.memoizedState = hl(t, n, i, r);
			return;
		}
	}
	(se.flags |= e), (l.memoizedState = hl(1 | t, n, i, r));
}
function zu(e, t) {
	return ni(8390656, 8, e, t);
}
function ws(e, t) {
	return Wi(2048, 8, e, t);
}
function nf(e, t) {
	return Wi(4, 2, e, t);
}
function rf(e, t) {
	return Wi(4, 4, e, t);
}
function lf(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function of(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Wi(4, 4, lf.bind(null, t, e), n)
	);
}
function xs() {}
function af(e, t) {
	var n = rt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && vs(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function sf(e, t) {
	var n = rt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && vs(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function uf(e, t, n) {
	return kn & 21
		? (pt(n, t) || ((n = dd()), (se.lanes |= n), (jn |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n));
}
function Em(e, t) {
	var n = K;
	(K = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = No.transition;
	No.transition = {};
	try {
		e(!1), t();
	} finally {
		(K = n), (No.transition = r);
	}
}
function cf() {
	return rt().memoizedState;
}
function Cm(e, t, n) {
	var r = rn(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		df(e))
	)
		ff(t, n);
	else if (((n = Hd(e, t, n, r)), n !== null)) {
		var l = Me();
		ft(n, e, r, l), pf(n, t, r);
	}
}
function km(e, t, n) {
	var r = rn(e),
		l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (df(e)) ff(t, l);
	else {
		var i = e.alternate;
		if (
			e.lanes === 0 &&
			(i === null || i.lanes === 0) &&
			((i = t.lastRenderedReducer), i !== null)
		)
			try {
				var o = t.lastRenderedState,
					a = i(o, n);
				if (((l.hasEagerState = !0), (l.eagerState = a), pt(a, o))) {
					var s = t.interleaved;
					s === null
						? ((l.next = l), ds(t))
						: ((l.next = s.next), (s.next = l)),
						(t.interleaved = l);
					return;
				}
			} catch {
			} finally {
			}
		(n = Hd(e, t, l, r)),
			n !== null && ((l = Me()), ft(n, e, r, l), pf(n, t, r));
	}
}
function df(e) {
	var t = e.alternate;
	return e === se || (t !== null && t === se);
}
function ff(e, t) {
	Kr = Ti = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function pf(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ja(e, n);
	}
}
var Pi = {
		readContext: nt,
		useCallback: Pe,
		useContext: Pe,
		useEffect: Pe,
		useImperativeHandle: Pe,
		useInsertionEffect: Pe,
		useLayoutEffect: Pe,
		useMemo: Pe,
		useReducer: Pe,
		useRef: Pe,
		useState: Pe,
		useDebugValue: Pe,
		useDeferredValue: Pe,
		useTransition: Pe,
		useMutableSource: Pe,
		useSyncExternalStore: Pe,
		useId: Pe,
		unstable_isNewReconciler: !1,
	},
	jm = {
		readContext: nt,
		useCallback: function (e, t) {
			return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: nt,
		useEffect: zu,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				ni(4194308, 4, lf.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return ni(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return ni(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = yt();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = yt();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = Cm.bind(null, se, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = yt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: Iu,
		useDebugValue: xs,
		useDeferredValue: function (e) {
			return (yt().memoizedState = e);
		},
		useTransition: function () {
			var e = Iu(!1),
				t = e[0];
			return (e = Em.bind(null, e[1])), (yt().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = se,
				l = yt();
			if (ie) {
				if (n === void 0) throw Error(T(407));
				n = n();
			} else {
				if (((n = t()), Se === null)) throw Error(T(349));
				kn & 30 || Xd(r, t, n);
			}
			l.memoizedState = n;
			var i = { value: n, getSnapshot: t };
			return (
				(l.queue = i),
				zu(Zd.bind(null, r, i, e), [e]),
				(r.flags |= 2048),
				hl(9, Jd.bind(null, r, i, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = yt(),
				t = Se.identifierPrefix;
			if (ie) {
				var n = Nt,
					r = Pt;
				(n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = fl++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':');
			} else (n = Sm++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	Tm = {
		readContext: nt,
		useCallback: af,
		useContext: nt,
		useEffect: ws,
		useImperativeHandle: of,
		useInsertionEffect: nf,
		useLayoutEffect: rf,
		useMemo: sf,
		useReducer: Ro,
		useRef: tf,
		useState: function () {
			return Ro(pl);
		},
		useDebugValue: xs,
		useDeferredValue: function (e) {
			var t = rt();
			return uf(t, ge.memoizedState, e);
		},
		useTransition: function () {
			var e = Ro(pl)[0],
				t = rt().memoizedState;
			return [e, t];
		},
		useMutableSource: Kd,
		useSyncExternalStore: Gd,
		useId: cf,
		unstable_isNewReconciler: !1,
	},
	Pm = {
		readContext: nt,
		useCallback: af,
		useContext: nt,
		useEffect: ws,
		useImperativeHandle: of,
		useInsertionEffect: nf,
		useLayoutEffect: rf,
		useMemo: sf,
		useReducer: _o,
		useRef: tf,
		useState: function () {
			return _o(pl);
		},
		useDebugValue: xs,
		useDeferredValue: function (e) {
			var t = rt();
			return ge === null ? (t.memoizedState = e) : uf(t, ge.memoizedState, e);
		},
		useTransition: function () {
			var e = _o(pl)[0],
				t = rt().memoizedState;
			return [e, t];
		},
		useMutableSource: Kd,
		useSyncExternalStore: Gd,
		useId: cf,
		unstable_isNewReconciler: !1,
	};
function pr(e, t) {
	try {
		var n = '',
			r = t;
		do (n += th(r)), (r = r.return);
		while (r);
		var l = n;
	} catch (i) {
		l =
			`
Error generating stack: ` +
			i.message +
			`
` +
			i.stack;
	}
	return { value: e, source: t, stack: l, digest: null };
}
function Lo(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ga(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var Nm = typeof WeakMap == 'function' ? WeakMap : Map;
function hf(e, t, n) {
	(n = Rt(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			Ri || ((Ri = !0), (Pa = r)), ga(e, t);
		}),
		n
	);
}
function mf(e, t, n) {
	(n = Rt(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var l = t.value;
		(n.payload = function () {
			return r(l);
		}),
			(n.callback = function () {
				ga(e, t);
			});
	}
	var i = e.stateNode;
	return (
		i !== null &&
			typeof i.componentDidCatch == 'function' &&
			(n.callback = function () {
				ga(e, t),
					typeof r != 'function' &&
						(nn === null ? (nn = new Set([this])) : nn.add(this));
				var o = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: o !== null ? o : '',
				});
			}),
		n
	);
}
function Fu(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new Nm();
		var l = new Set();
		r.set(t, l);
	} else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
	l.has(n) || (l.add(n), (e = $m.bind(null, e, t, n)), t.then(e, e));
}
function Uu(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function Bu(e, t, n, r, l) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = l), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = Rt(-1, 1)), (t.tag = 2), tn(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var Rm = zt.ReactCurrentOwner,
	Fe = !1;
function Le(e, t, n, r) {
	t.child = e === null ? qd(t, null, n, r) : dr(t, e.child, n, r);
}
function Hu(e, t, n, r, l) {
	n = n.render;
	var i = t.ref;
	return (
		nr(t, l),
		(r = gs(e, t, n, r, i, l)),
		(n = ys()),
		e !== null && !Fe
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  Dt(e, t, l))
			: (ie && n && is(t), (t.flags |= 1), Le(e, t, r, l), t.child)
	);
}
function $u(e, t, n, r, l) {
	if (e === null) {
		var i = n.type;
		return typeof i == 'function' &&
			!Ns(i) &&
			i.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = i), vf(e, t, i, r, l))
			: ((e = oi(n.type, null, r, t, t.mode, l)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((i = e.child), !(e.lanes & l))) {
		var o = i.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : ol), n(o, r) && e.ref === t.ref)
		)
			return Dt(e, t, l);
	}
	return (
		(t.flags |= 1),
		(e = ln(i, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function vf(e, t, n, r, l) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (ol(i, r) && e.ref === t.ref)
			if (((Fe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
				e.flags & 131072 && (Fe = !0);
			else return (t.lanes = e.lanes), Dt(e, t, l);
	}
	return ya(e, t, n, r, l);
}
function gf(e, t, n) {
	var r = t.pendingProps,
		l = r.children,
		i = e !== null ? e.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				J(Gn, Ve),
				(Ve |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = i !== null ? i.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					J(Gn, Ve),
					(Ve |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = i !== null ? i.baseLanes : n),
				J(Gn, Ve),
				(Ve |= r);
		}
	else
		i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
			J(Gn, Ve),
			(Ve |= r);
	return Le(e, t, l, n), t.child;
}
function yf(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function ya(e, t, n, r, l) {
	var i = He(n) ? En : _e.current;
	return (
		(i = ur(t, i)),
		nr(t, l),
		(n = gs(e, t, n, r, i, l)),
		(r = ys()),
		e !== null && !Fe
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  Dt(e, t, l))
			: (ie && r && is(t), (t.flags |= 1), Le(e, t, n, l), t.child)
	);
}
function Wu(e, t, n, r, l) {
	if (He(n)) {
		var i = !0;
		wi(t);
	} else i = !1;
	if ((nr(t, l), t.stateNode === null))
		ri(e, t), Vd(t, n, r), va(t, n, r, l), (r = !0);
	else if (e === null) {
		var o = t.stateNode,
			a = t.memoizedProps;
		o.props = a;
		var s = o.context,
			u = n.contextType;
		typeof u == 'object' && u !== null
			? (u = nt(u))
			: ((u = He(n) ? En : _e.current), (u = ur(t, u)));
		var d = n.getDerivedStateFromProps,
			p =
				typeof d == 'function' ||
				typeof o.getSnapshotBeforeUpdate == 'function';
		p ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((a !== r || s !== u) && Au(t, o, r, u)),
			(qt = !1);
		var m = t.memoizedState;
		(o.state = m),
			ki(t, r, o, l),
			(s = t.memoizedState),
			a !== r || m !== s || Be.current || qt
				? (typeof d == 'function' && (ma(t, n, d, r), (s = t.memoizedState)),
				  (a = qt || Ou(t, n, a, r, m, s, u))
						? (p ||
								(typeof o.UNSAFE_componentWillMount != 'function' &&
									typeof o.componentWillMount != 'function') ||
								(typeof o.componentWillMount == 'function' &&
									o.componentWillMount(),
								typeof o.UNSAFE_componentWillMount == 'function' &&
									o.UNSAFE_componentWillMount()),
						  typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = s)),
				  (o.props = r),
				  (o.state = s),
				  (o.context = u),
				  (r = a))
				: (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(o = t.stateNode),
			$d(e, t),
			(a = t.memoizedProps),
			(u = t.type === t.elementType ? a : ot(t.type, a)),
			(o.props = u),
			(p = t.pendingProps),
			(m = o.context),
			(s = n.contextType),
			typeof s == 'object' && s !== null
				? (s = nt(s))
				: ((s = He(n) ? En : _e.current), (s = ur(t, s)));
		var y = n.getDerivedStateFromProps;
		(d =
			typeof y == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function') ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((a !== p || m !== s) && Au(t, o, r, s)),
			(qt = !1),
			(m = t.memoizedState),
			(o.state = m),
			ki(t, r, o, l);
		var x = t.memoizedState;
		a !== p || m !== x || Be.current || qt
			? (typeof y == 'function' && (ma(t, n, y, r), (x = t.memoizedState)),
			  (u = qt || Ou(t, n, u, r, m, x, s) || !1)
					? (d ||
							(typeof o.UNSAFE_componentWillUpdate != 'function' &&
								typeof o.componentWillUpdate != 'function') ||
							(typeof o.componentWillUpdate == 'function' &&
								o.componentWillUpdate(r, x, s),
							typeof o.UNSAFE_componentWillUpdate == 'function' &&
								o.UNSAFE_componentWillUpdate(r, x, s)),
					  typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof o.componentDidUpdate != 'function' ||
							(a === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate != 'function' ||
							(a === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = x)),
			  (o.props = r),
			  (o.state = x),
			  (o.context = s),
			  (r = u))
			: (typeof o.componentDidUpdate != 'function' ||
					(a === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 4),
			  typeof o.getSnapshotBeforeUpdate != 'function' ||
					(a === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return wa(e, t, n, r, i, l);
}
function wa(e, t, n, r, l, i) {
	yf(e, t);
	var o = (t.flags & 128) !== 0;
	if (!r && !o) return l && Nu(t, n, !1), Dt(e, t, i);
	(r = t.stateNode), (Rm.current = t);
	var a =
		o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && o
			? ((t.child = dr(t, e.child, null, i)), (t.child = dr(t, null, a, i)))
			: Le(e, t, a, i),
		(t.memoizedState = r.state),
		l && Nu(t, n, !0),
		t.child
	);
}
function wf(e) {
	var t = e.stateNode;
	t.pendingContext
		? Pu(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Pu(e, t.context, !1),
		ps(e, t.containerInfo);
}
function Vu(e, t, n, r, l) {
	return cr(), as(l), (t.flags |= 256), Le(e, t, n, r), t.child;
}
var xa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Sa(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function xf(e, t, n) {
	var r = t.pendingProps,
		l = ae.current,
		i = !1,
		o = (t.flags & 128) !== 0,
		a;
	if (
		((a = o) ||
			(a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
		a
			? ((i = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (l |= 1),
		J(ae, l & 1),
		e === null)
	)
		return (
			pa(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === '$!'
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((o = r.children),
				  (e = r.fallback),
				  i
						? ((r = t.mode),
						  (i = t.child),
						  (o = { mode: 'hidden', children: o }),
						  !(r & 1) && i !== null
								? ((i.childLanes = 0), (i.pendingProps = o))
								: (i = qi(o, r, 0, null)),
						  (e = xn(e, r, n, null)),
						  (i.return = t),
						  (e.return = t),
						  (i.sibling = e),
						  (t.child = i),
						  (t.child.memoizedState = Sa(n)),
						  (t.memoizedState = xa),
						  e)
						: Ss(t, o))
		);
	if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
		return _m(e, t, o, r, a, l, n);
	if (i) {
		(i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
		var s = { mode: 'hidden', children: r.children };
		return (
			!(o & 1) && t.child !== l
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = s),
				  (t.deletions = null))
				: ((r = ln(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
			a !== null ? (i = ln(a, i)) : ((i = xn(i, o, n, null)), (i.flags |= 2)),
			(i.return = t),
			(r.return = t),
			(r.sibling = i),
			(t.child = r),
			(r = i),
			(i = t.child),
			(o = e.child.memoizedState),
			(o =
				o === null
					? Sa(n)
					: {
							baseLanes: o.baseLanes | n,
							cachePool: null,
							transitions: o.transitions,
					  }),
			(i.memoizedState = o),
			(i.childLanes = e.childLanes & ~n),
			(t.memoizedState = xa),
			r
		);
	}
	return (
		(i = e.child),
		(e = i.sibling),
		(r = ln(i, { mode: 'visible', children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function Ss(e, t) {
	return (
		(t = qi({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function Vl(e, t, n, r) {
	return (
		r !== null && as(r),
		dr(t, e.child, null, n),
		(e = Ss(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function _m(e, t, n, r, l, i, o) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Lo(Error(T(422)))), Vl(e, t, o, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((i = r.fallback),
			  (l = t.mode),
			  (r = qi({ mode: 'visible', children: r.children }, l, 0, null)),
			  (i = xn(i, l, o, null)),
			  (i.flags |= 2),
			  (r.return = t),
			  (i.return = t),
			  (r.sibling = i),
			  (t.child = r),
			  t.mode & 1 && dr(t, e.child, null, o),
			  (t.child.memoizedState = Sa(o)),
			  (t.memoizedState = xa),
			  i);
	if (!(t.mode & 1)) return Vl(e, t, o, null);
	if (l.data === '$!') {
		if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
		return (r = a), (i = Error(T(419))), (r = Lo(i, r, void 0)), Vl(e, t, o, r);
	}
	if (((a = (o & e.childLanes) !== 0), Fe || a)) {
		if (((r = Se), r !== null)) {
			switch (o & -o) {
				case 4:
					l = 2;
					break;
				case 16:
					l = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					l = 32;
					break;
				case 536870912:
					l = 268435456;
					break;
				default:
					l = 0;
			}
			(l = l & (r.suspendedLanes | o) ? 0 : l),
				l !== 0 &&
					l !== i.retryLane &&
					((i.retryLane = l), At(e, l), ft(r, e, l, -1));
		}
		return Ps(), (r = Lo(Error(T(421)))), Vl(e, t, o, r);
	}
	return l.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = Wm.bind(null, e)),
		  (l._reactRetry = t),
		  null)
		: ((e = i.treeContext),
		  (Qe = en(l.nextSibling)),
		  (qe = t),
		  (ie = !0),
		  (ut = null),
		  e !== null &&
				((Ze[be++] = Pt),
				(Ze[be++] = Nt),
				(Ze[be++] = Cn),
				(Pt = e.id),
				(Nt = e.overflow),
				(Cn = t)),
		  (t = Ss(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function Qu(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), ha(e.return, t, n);
}
function Mo(e, t, n, r, l) {
	var i = e.memoizedState;
	i === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: l,
		  })
		: ((i.isBackwards = t),
		  (i.rendering = null),
		  (i.renderingStartTime = 0),
		  (i.last = r),
		  (i.tail = n),
		  (i.tailMode = l));
}
function Sf(e, t, n) {
	var r = t.pendingProps,
		l = r.revealOrder,
		i = r.tail;
	if ((Le(e, t, r.children, n), (r = ae.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Qu(e, n, t);
				else if (e.tag === 19) Qu(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((J(ae, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (l) {
			case 'forwards':
				for (n = t.child, l = null; n !== null; )
					(e = n.alternate),
						e !== null && ji(e) === null && (l = n),
						(n = n.sibling);
				(n = l),
					n === null
						? ((l = t.child), (t.child = null))
						: ((l = n.sibling), (n.sibling = null)),
					Mo(t, !1, l, n, i);
				break;
			case 'backwards':
				for (n = null, l = t.child, t.child = null; l !== null; ) {
					if (((e = l.alternate), e !== null && ji(e) === null)) {
						t.child = l;
						break;
					}
					(e = l.sibling), (l.sibling = n), (n = l), (l = e);
				}
				Mo(t, !0, n, null, i);
				break;
			case 'together':
				Mo(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function ri(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Dt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(jn |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(T(153));
	if (t.child !== null) {
		for (
			e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = ln(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function Lm(e, t, n) {
	switch (t.tag) {
		case 3:
			wf(t), cr();
			break;
		case 5:
			Yd(t);
			break;
		case 1:
			He(t.type) && wi(t);
			break;
		case 4:
			ps(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				l = t.memoizedProps.value;
			J(Ei, r._currentValue), (r._currentValue = l);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (J(ae, ae.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? xf(e, t, n)
					: (J(ae, ae.current & 1),
					  (e = Dt(e, t, n)),
					  e !== null ? e.sibling : null);
			J(ae, ae.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Sf(e, t, n);
				t.flags |= 128;
			}
			if (
				((l = t.memoizedState),
				l !== null &&
					((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
				J(ae, ae.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), gf(e, t, n);
	}
	return Dt(e, t, n);
}
var Ef, Ea, Cf, kf;
Ef = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
Ea = function () {};
Cf = function (e, t, n, r) {
	var l = e.memoizedProps;
	if (l !== r) {
		(e = t.stateNode), gn(St.current);
		var i = null;
		switch (n) {
			case 'input':
				(l = Vo(e, l)), (r = Vo(e, r)), (i = []);
				break;
			case 'select':
				(l = ue({}, l, { value: void 0 })),
					(r = ue({}, r, { value: void 0 })),
					(i = []);
				break;
			case 'textarea':
				(l = Yo(e, l)), (r = Yo(e, r)), (i = []);
				break;
			default:
				typeof l.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = gi);
		}
		Go(n, r);
		var o;
		n = null;
		for (u in l)
			if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
				if (u === 'style') {
					var a = l[u];
					for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
				} else
					u !== 'dangerouslySetInnerHTML' &&
						u !== 'children' &&
						u !== 'suppressContentEditableWarning' &&
						u !== 'suppressHydrationWarning' &&
						u !== 'autoFocus' &&
						(br.hasOwnProperty(u)
							? i || (i = [])
							: (i = i || []).push(u, null));
		for (u in r) {
			var s = r[u];
			if (
				((a = l != null ? l[u] : void 0),
				r.hasOwnProperty(u) && s !== a && (s != null || a != null))
			)
				if (u === 'style')
					if (a) {
						for (o in a)
							!a.hasOwnProperty(o) ||
								(s && s.hasOwnProperty(o)) ||
								(n || (n = {}), (n[o] = ''));
						for (o in s)
							s.hasOwnProperty(o) &&
								a[o] !== s[o] &&
								(n || (n = {}), (n[o] = s[o]));
					} else n || (i || (i = []), i.push(u, n)), (n = s);
				else
					u === 'dangerouslySetInnerHTML'
						? ((s = s ? s.__html : void 0),
						  (a = a ? a.__html : void 0),
						  s != null && a !== s && (i = i || []).push(u, s))
						: u === 'children'
						? (typeof s != 'string' && typeof s != 'number') ||
						  (i = i || []).push(u, '' + s)
						: u !== 'suppressContentEditableWarning' &&
						  u !== 'suppressHydrationWarning' &&
						  (br.hasOwnProperty(u)
								? (s != null && u === 'onScroll' && Z('scroll', e),
								  i || a === s || (i = []))
								: (i = i || []).push(u, s));
		}
		n && (i = i || []).push('style', n);
		var u = i;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
kf = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Lr(e, t) {
	if (!ie)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case 'collapsed':
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function Ne(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var l = e.child; l !== null; )
			(n |= l.lanes | l.childLanes),
				(r |= l.subtreeFlags & 14680064),
				(r |= l.flags & 14680064),
				(l.return = e),
				(l = l.sibling);
	else
		for (l = e.child; l !== null; )
			(n |= l.lanes | l.childLanes),
				(r |= l.subtreeFlags),
				(r |= l.flags),
				(l.return = e),
				(l = l.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Mm(e, t, n) {
	var r = t.pendingProps;
	switch ((os(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return Ne(t), null;
		case 1:
			return He(t.type) && yi(), Ne(t), null;
		case 3:
			return (
				(r = t.stateNode),
				fr(),
				b(Be),
				b(_e),
				ms(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					($l(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), ut !== null && (_a(ut), (ut = null)))),
				Ea(e, t),
				Ne(t),
				null
			);
		case 5:
			hs(t);
			var l = gn(dl.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Cf(e, t, n, r, l),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(T(166));
					return Ne(t), null;
				}
				if (((e = gn(St.current)), $l(t))) {
					(r = t.stateNode), (n = t.type);
					var i = t.memoizedProps;
					switch (((r[wt] = t), (r[ul] = i), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							Z('cancel', r), Z('close', r);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							Z('load', r);
							break;
						case 'video':
						case 'audio':
							for (l = 0; l < $r.length; l++) Z($r[l], r);
							break;
						case 'source':
							Z('error', r);
							break;
						case 'img':
						case 'image':
						case 'link':
							Z('error', r), Z('load', r);
							break;
						case 'details':
							Z('toggle', r);
							break;
						case 'input':
							eu(r, i), Z('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!i.multiple }),
								Z('invalid', r);
							break;
						case 'textarea':
							nu(r, i), Z('invalid', r);
					}
					Go(n, i), (l = null);
					for (var o in i)
						if (i.hasOwnProperty(o)) {
							var a = i[o];
							o === 'children'
								? typeof a == 'string'
									? r.textContent !== a &&
									  (i.suppressHydrationWarning !== !0 &&
											Hl(r.textContent, a, e),
									  (l = ['children', a]))
									: typeof a == 'number' &&
									  r.textContent !== '' + a &&
									  (i.suppressHydrationWarning !== !0 &&
											Hl(r.textContent, a, e),
									  (l = ['children', '' + a]))
								: br.hasOwnProperty(o) &&
								  a != null &&
								  o === 'onScroll' &&
								  Z('scroll', r);
						}
					switch (n) {
						case 'input':
							Ol(r), tu(r, i, !0);
							break;
						case 'textarea':
							Ol(r), ru(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof i.onClick == 'function' && (r.onclick = gi);
					}
					(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(o = l.nodeType === 9 ? l : l.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = Xc(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = o.createElement('div')),
								  (e.innerHTML = '<script></script>'),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = o.createElement(n, { is: r.is }))
								: ((e = o.createElement(n)),
								  n === 'select' &&
										((o = e),
										r.multiple
											? (o.multiple = !0)
											: r.size && (o.size = r.size)))
							: (e = o.createElementNS(e, n)),
						(e[wt] = t),
						(e[ul] = r),
						Ef(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((o = Xo(n, r)), n)) {
							case 'dialog':
								Z('cancel', e), Z('close', e), (l = r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								Z('load', e), (l = r);
								break;
							case 'video':
							case 'audio':
								for (l = 0; l < $r.length; l++) Z($r[l], e);
								l = r;
								break;
							case 'source':
								Z('error', e), (l = r);
								break;
							case 'img':
							case 'image':
							case 'link':
								Z('error', e), Z('load', e), (l = r);
								break;
							case 'details':
								Z('toggle', e), (l = r);
								break;
							case 'input':
								eu(e, r), (l = Vo(e, r)), Z('invalid', e);
								break;
							case 'option':
								l = r;
								break;
							case 'select':
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(l = ue({}, r, { value: void 0 })),
									Z('invalid', e);
								break;
							case 'textarea':
								nu(e, r), (l = Yo(e, r)), Z('invalid', e);
								break;
							default:
								l = r;
						}
						Go(n, l), (a = l);
						for (i in a)
							if (a.hasOwnProperty(i)) {
								var s = a[i];
								i === 'style'
									? bc(e, s)
									: i === 'dangerouslySetInnerHTML'
									? ((s = s ? s.__html : void 0), s != null && Jc(e, s))
									: i === 'children'
									? typeof s == 'string'
										? (n !== 'textarea' || s !== '') && el(e, s)
										: typeof s == 'number' && el(e, '' + s)
									: i !== 'suppressContentEditableWarning' &&
									  i !== 'suppressHydrationWarning' &&
									  i !== 'autoFocus' &&
									  (br.hasOwnProperty(i)
											? s != null && i === 'onScroll' && Z('scroll', e)
											: s != null && Qa(e, i, s, o));
							}
						switch (n) {
							case 'input':
								Ol(e), tu(e, r, !1);
								break;
							case 'textarea':
								Ol(e), ru(e);
								break;
							case 'option':
								r.value != null && e.setAttribute('value', '' + an(r.value));
								break;
							case 'select':
								(e.multiple = !!r.multiple),
									(i = r.value),
									i != null
										? Zn(e, !!r.multiple, i, !1)
										: r.defaultValue != null &&
										  Zn(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof l.onClick == 'function' && (e.onclick = gi);
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus;
								break e;
							case 'img':
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return Ne(t), null;
		case 6:
			if (e && t.stateNode != null) kf(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(T(166));
				if (((n = gn(dl.current)), gn(St.current), $l(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[wt] = t),
						(i = r.nodeValue !== n) && ((e = qe), e !== null))
					)
						switch (e.tag) {
							case 3:
								Hl(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									Hl(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					i && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[wt] = t),
						(t.stateNode = r);
			}
			return Ne(t), null;
		case 13:
			if (
				(b(ae),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (ie && Qe !== null && t.mode & 1 && !(t.flags & 128))
					Bd(), cr(), (t.flags |= 98560), (i = !1);
				else if (((i = $l(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!i) throw Error(T(318));
						if (
							((i = t.memoizedState),
							(i = i !== null ? i.dehydrated : null),
							!i)
						)
							throw Error(T(317));
						i[wt] = t;
					} else
						cr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					Ne(t), (i = !1);
				} else ut !== null && (_a(ut), (ut = null)), (i = !0);
				if (!i) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || ae.current & 1 ? ye === 0 && (ye = 3) : Ps())),
				  t.updateQueue !== null && (t.flags |= 4),
				  Ne(t),
				  null);
		case 4:
			return (
				fr(), Ea(e, t), e === null && al(t.stateNode.containerInfo), Ne(t), null
			);
		case 10:
			return cs(t.type._context), Ne(t), null;
		case 17:
			return He(t.type) && yi(), Ne(t), null;
		case 19:
			if ((b(ae), (i = t.memoizedState), i === null)) return Ne(t), null;
			if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
				if (r) Lr(i, !1);
				else {
					if (ye !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((o = ji(e)), o !== null)) {
								for (
									t.flags |= 128,
										Lr(i, !1),
										r = o.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(i = n),
										(e = r),
										(i.flags &= 14680066),
										(o = i.alternate),
										o === null
											? ((i.childLanes = 0),
											  (i.lanes = e),
											  (i.child = null),
											  (i.subtreeFlags = 0),
											  (i.memoizedProps = null),
											  (i.memoizedState = null),
											  (i.updateQueue = null),
											  (i.dependencies = null),
											  (i.stateNode = null))
											: ((i.childLanes = o.childLanes),
											  (i.lanes = o.lanes),
											  (i.child = o.child),
											  (i.subtreeFlags = 0),
											  (i.deletions = null),
											  (i.memoizedProps = o.memoizedProps),
											  (i.memoizedState = o.memoizedState),
											  (i.updateQueue = o.updateQueue),
											  (i.type = o.type),
											  (e = o.dependencies),
											  (i.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return J(ae, (ae.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					i.tail !== null &&
						de() > hr &&
						((t.flags |= 128), (r = !0), Lr(i, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = ji(o)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Lr(i, !0),
							i.tail === null && i.tailMode === 'hidden' && !o.alternate && !ie)
						)
							return Ne(t), null;
					} else
						2 * de() - i.renderingStartTime > hr &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Lr(i, !1), (t.lanes = 4194304));
				i.isBackwards
					? ((o.sibling = t.child), (t.child = o))
					: ((n = i.last),
					  n !== null ? (n.sibling = o) : (t.child = o),
					  (i.last = o));
			}
			return i.tail !== null
				? ((t = i.tail),
				  (i.rendering = t),
				  (i.tail = t.sibling),
				  (i.renderingStartTime = de()),
				  (t.sibling = null),
				  (n = ae.current),
				  J(ae, r ? (n & 1) | 2 : n & 1),
				  t)
				: (Ne(t), null);
		case 22:
		case 23:
			return (
				Ts(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? Ve & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: Ne(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(T(156, t.tag));
}
function Om(e, t) {
	switch ((os(t), t.tag)) {
		case 1:
			return (
				He(t.type) && yi(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				fr(),
				b(Be),
				b(_e),
				ms(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return hs(t), null;
		case 13:
			if ((b(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(T(340));
				cr();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return b(ae), null;
		case 4:
			return fr(), null;
		case 10:
			return cs(t.type._context), null;
		case 22:
		case 23:
			return Ts(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Ql = !1,
	Re = !1,
	Am = typeof WeakSet == 'function' ? WeakSet : Set,
	L = null;
function Kn(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null);
			} catch (r) {
				ce(e, t, r);
			}
		else n.current = null;
}
function Ca(e, t, n) {
	try {
		n();
	} catch (r) {
		ce(e, t, r);
	}
}
var qu = !1;
function Dm(e, t) {
	if (((oa = hi), (e = Pd()), ls(e))) {
		if ('selectionStart' in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var l = r.anchorOffset,
						i = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, i.nodeType;
					} catch {
						n = null;
						break e;
					}
					var o = 0,
						a = -1,
						s = -1,
						u = 0,
						d = 0,
						p = e,
						m = null;
					t: for (;;) {
						for (
							var y;
							p !== n || (l !== 0 && p.nodeType !== 3) || (a = o + l),
								p !== i || (r !== 0 && p.nodeType !== 3) || (s = o + r),
								p.nodeType === 3 && (o += p.nodeValue.length),
								(y = p.firstChild) !== null;

						)
							(m = p), (p = y);
						for (;;) {
							if (p === e) break t;
							if (
								(m === n && ++u === l && (a = o),
								m === i && ++d === r && (s = o),
								(y = p.nextSibling) !== null)
							)
								break;
							(p = m), (m = p.parentNode);
						}
						p = y;
					}
					n = a === -1 || s === -1 ? null : { start: a, end: s };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (aa = { focusedElem: e, selectionRange: n }, hi = !1, L = t; L !== null; )
		if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (L = e);
		else
			for (; L !== null; ) {
				t = L;
				try {
					var x = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (x !== null) {
									var w = x.memoizedProps,
										P = x.memoizedState,
										v = t.stateNode,
										f = v.getSnapshotBeforeUpdate(
											t.elementType === t.type ? w : ot(t.type, w),
											P
										);
									v.__reactInternalSnapshotBeforeUpdate = f;
								}
								break;
							case 3:
								var g = t.stateNode.containerInfo;
								g.nodeType === 1
									? (g.textContent = '')
									: g.nodeType === 9 &&
									  g.documentElement &&
									  g.removeChild(g.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(T(163));
						}
				} catch (h) {
					ce(t, t.return, h);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (L = e);
					break;
				}
				L = t.return;
			}
	return (x = qu), (qu = !1), x;
}
function Gr(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var l = (r = r.next);
		do {
			if ((l.tag & e) === e) {
				var i = l.destroy;
				(l.destroy = void 0), i !== void 0 && Ca(t, n, i);
			}
			l = l.next;
		} while (l !== r);
	}
}
function Vi(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function ka(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == 'function' ? t(e) : (t.current = e);
	}
}
function jf(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), jf(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[wt], delete t[ul], delete t[ca], delete t[gm], delete t[ym])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Tf(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Yu(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Tf(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function ja(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = gi));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (ja(e, t, n), e = e.sibling; e !== null; ) ja(e, t, n), (e = e.sibling);
}
function Ta(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Ta(e, t, n), e = e.sibling; e !== null; ) Ta(e, t, n), (e = e.sibling);
}
var ke = null,
	at = !1;
function Vt(e, t, n) {
	for (n = n.child; n !== null; ) Pf(e, t, n), (n = n.sibling);
}
function Pf(e, t, n) {
	if (xt && typeof xt.onCommitFiberUnmount == 'function')
		try {
			xt.onCommitFiberUnmount(Ii, n);
		} catch {}
	switch (n.tag) {
		case 5:
			Re || Kn(n, t);
		case 6:
			var r = ke,
				l = at;
			(ke = null),
				Vt(e, t, n),
				(ke = r),
				(at = l),
				ke !== null &&
					(at
						? ((e = ke),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: ke.removeChild(n.stateNode));
			break;
		case 18:
			ke !== null &&
				(at
					? ((e = ke),
					  (n = n.stateNode),
					  e.nodeType === 8
							? jo(e.parentNode, n)
							: e.nodeType === 1 && jo(e, n),
					  ll(e))
					: jo(ke, n.stateNode));
			break;
		case 4:
			(r = ke),
				(l = at),
				(ke = n.stateNode.containerInfo),
				(at = !0),
				Vt(e, t, n),
				(ke = r),
				(at = l);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!Re &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				l = r = r.next;
				do {
					var i = l,
						o = i.destroy;
					(i = i.tag),
						o !== void 0 && (i & 2 || i & 4) && Ca(n, t, o),
						(l = l.next);
				} while (l !== r);
			}
			Vt(e, t, n);
			break;
		case 1:
			if (
				!Re &&
				(Kn(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (a) {
					ce(n, t, a);
				}
			Vt(e, t, n);
			break;
		case 21:
			Vt(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((Re = (r = Re) || n.memoizedState !== null), Vt(e, t, n), (Re = r))
				: Vt(e, t, n);
			break;
		default:
			Vt(e, t, n);
	}
}
function Ku(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Am()),
			t.forEach(function (r) {
				var l = Vm.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(l, l));
			});
	}
}
function it(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var l = n[r];
			try {
				var i = e,
					o = t,
					a = o;
				e: for (; a !== null; ) {
					switch (a.tag) {
						case 5:
							(ke = a.stateNode), (at = !1);
							break e;
						case 3:
							(ke = a.stateNode.containerInfo), (at = !0);
							break e;
						case 4:
							(ke = a.stateNode.containerInfo), (at = !0);
							break e;
					}
					a = a.return;
				}
				if (ke === null) throw Error(T(160));
				Pf(i, o, l), (ke = null), (at = !1);
				var s = l.alternate;
				s !== null && (s.return = null), (l.return = null);
			} catch (u) {
				ce(l, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Nf(t, e), (t = t.sibling);
}
function Nf(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((it(t, e), gt(e), r & 4)) {
				try {
					Gr(3, e, e.return), Vi(3, e);
				} catch (w) {
					ce(e, e.return, w);
				}
				try {
					Gr(5, e, e.return);
				} catch (w) {
					ce(e, e.return, w);
				}
			}
			break;
		case 1:
			it(t, e), gt(e), r & 512 && n !== null && Kn(n, n.return);
			break;
		case 5:
			if (
				(it(t, e),
				gt(e),
				r & 512 && n !== null && Kn(n, n.return),
				e.flags & 32)
			) {
				var l = e.stateNode;
				try {
					el(l, '');
				} catch (w) {
					ce(e, e.return, w);
				}
			}
			if (r & 4 && ((l = e.stateNode), l != null)) {
				var i = e.memoizedProps,
					o = n !== null ? n.memoizedProps : i,
					a = e.type,
					s = e.updateQueue;
				if (((e.updateQueue = null), s !== null))
					try {
						a === 'input' && i.type === 'radio' && i.name != null && Kc(l, i),
							Xo(a, o);
						var u = Xo(a, i);
						for (o = 0; o < s.length; o += 2) {
							var d = s[o],
								p = s[o + 1];
							d === 'style'
								? bc(l, p)
								: d === 'dangerouslySetInnerHTML'
								? Jc(l, p)
								: d === 'children'
								? el(l, p)
								: Qa(l, d, p, u);
						}
						switch (a) {
							case 'input':
								Qo(l, i);
								break;
							case 'textarea':
								Gc(l, i);
								break;
							case 'select':
								var m = l._wrapperState.wasMultiple;
								l._wrapperState.wasMultiple = !!i.multiple;
								var y = i.value;
								y != null
									? Zn(l, !!i.multiple, y, !1)
									: m !== !!i.multiple &&
									  (i.defaultValue != null
											? Zn(l, !!i.multiple, i.defaultValue, !0)
											: Zn(l, !!i.multiple, i.multiple ? [] : '', !1));
						}
						l[ul] = i;
					} catch (w) {
						ce(e, e.return, w);
					}
			}
			break;
		case 6:
			if ((it(t, e), gt(e), r & 4)) {
				if (e.stateNode === null) throw Error(T(162));
				(l = e.stateNode), (i = e.memoizedProps);
				try {
					l.nodeValue = i;
				} catch (w) {
					ce(e, e.return, w);
				}
			}
			break;
		case 3:
			if (
				(it(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					ll(t.containerInfo);
				} catch (w) {
					ce(e, e.return, w);
				}
			break;
		case 4:
			it(t, e), gt(e);
			break;
		case 13:
			it(t, e),
				gt(e),
				(l = e.child),
				l.flags & 8192 &&
					((i = l.memoizedState !== null),
					(l.stateNode.isHidden = i),
					!i ||
						(l.alternate !== null && l.alternate.memoizedState !== null) ||
						(ks = de())),
				r & 4 && Ku(e);
			break;
		case 22:
			if (
				((d = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((Re = (u = Re) || d), it(t, e), (Re = u)) : it(t, e),
				gt(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !d && e.mode & 1)
				)
					for (L = e, d = e.child; d !== null; ) {
						for (p = L = d; L !== null; ) {
							switch (((m = L), (y = m.child), m.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Gr(4, m, m.return);
									break;
								case 1:
									Kn(m, m.return);
									var x = m.stateNode;
									if (typeof x.componentWillUnmount == 'function') {
										(r = m), (n = m.return);
										try {
											(t = r),
												(x.props = t.memoizedProps),
												(x.state = t.memoizedState),
												x.componentWillUnmount();
										} catch (w) {
											ce(r, n, w);
										}
									}
									break;
								case 5:
									Kn(m, m.return);
									break;
								case 22:
									if (m.memoizedState !== null) {
										Xu(p);
										continue;
									}
							}
							y !== null ? ((y.return = m), (L = y)) : Xu(p);
						}
						d = d.sibling;
					}
				e: for (d = null, p = e; ; ) {
					if (p.tag === 5) {
						if (d === null) {
							d = p;
							try {
								(l = p.stateNode),
									u
										? ((i = l.style),
										  typeof i.setProperty == 'function'
												? i.setProperty('display', 'none', 'important')
												: (i.display = 'none'))
										: ((a = p.stateNode),
										  (s = p.memoizedProps.style),
										  (o =
												s != null && s.hasOwnProperty('display')
													? s.display
													: null),
										  (a.style.display = Zc('display', o)));
							} catch (w) {
								ce(e, e.return, w);
							}
						}
					} else if (p.tag === 6) {
						if (d === null)
							try {
								p.stateNode.nodeValue = u ? '' : p.memoizedProps;
							} catch (w) {
								ce(e, e.return, w);
							}
					} else if (
						((p.tag !== 22 && p.tag !== 23) ||
							p.memoizedState === null ||
							p === e) &&
						p.child !== null
					) {
						(p.child.return = p), (p = p.child);
						continue;
					}
					if (p === e) break e;
					for (; p.sibling === null; ) {
						if (p.return === null || p.return === e) break e;
						d === p && (d = null), (p = p.return);
					}
					d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
				}
			}
			break;
		case 19:
			it(t, e), gt(e), r & 4 && Ku(e);
			break;
		case 21:
			break;
		default:
			it(t, e), gt(e);
	}
}
function gt(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Tf(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(T(160));
			}
			switch (r.tag) {
				case 5:
					var l = r.stateNode;
					r.flags & 32 && (el(l, ''), (r.flags &= -33));
					var i = Yu(e);
					Ta(e, i, l);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						a = Yu(e);
					ja(e, a, o);
					break;
				default:
					throw Error(T(161));
			}
		} catch (s) {
			ce(e, e.return, s);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function Im(e, t, n) {
	(L = e), Rf(e);
}
function Rf(e, t, n) {
	for (var r = (e.mode & 1) !== 0; L !== null; ) {
		var l = L,
			i = l.child;
		if (l.tag === 22 && r) {
			var o = l.memoizedState !== null || Ql;
			if (!o) {
				var a = l.alternate,
					s = (a !== null && a.memoizedState !== null) || Re;
				a = Ql;
				var u = Re;
				if (((Ql = o), (Re = s) && !u))
					for (L = l; L !== null; )
						(o = L),
							(s = o.child),
							o.tag === 22 && o.memoizedState !== null
								? Ju(l)
								: s !== null
								? ((s.return = o), (L = s))
								: Ju(l);
				for (; i !== null; ) (L = i), Rf(i), (i = i.sibling);
				(L = l), (Ql = a), (Re = u);
			}
			Gu(e);
		} else
			l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (L = i)) : Gu(e);
	}
}
function Gu(e) {
	for (; L !== null; ) {
		var t = L;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							Re || Vi(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !Re)
								if (n === null) r.componentDidMount();
								else {
									var l =
										t.elementType === t.type
											? n.memoizedProps
											: ot(t.type, n.memoizedProps);
									r.componentDidUpdate(
										l,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var i = t.updateQueue;
							i !== null && Mu(t, i, r);
							break;
						case 3:
							var o = t.updateQueue;
							if (o !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								Mu(t, o, n);
							}
							break;
						case 5:
							var a = t.stateNode;
							if (n === null && t.flags & 4) {
								n = a;
								var s = t.memoizedProps;
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										s.autoFocus && n.focus();
										break;
									case 'img':
										s.src && (n.src = s.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var d = u.memoizedState;
									if (d !== null) {
										var p = d.dehydrated;
										p !== null && ll(p);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(T(163));
					}
				Re || (t.flags & 512 && ka(t));
			} catch (m) {
				ce(t, t.return, m);
			}
		}
		if (t === e) {
			L = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (L = n);
			break;
		}
		L = t.return;
	}
}
function Xu(e) {
	for (; L !== null; ) {
		var t = L;
		if (t === e) {
			L = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (L = n);
			break;
		}
		L = t.return;
	}
}
function Ju(e) {
	for (; L !== null; ) {
		var t = L;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Vi(4, t);
					} catch (s) {
						ce(t, n, s);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == 'function') {
						var l = t.return;
						try {
							r.componentDidMount();
						} catch (s) {
							ce(t, l, s);
						}
					}
					var i = t.return;
					try {
						ka(t);
					} catch (s) {
						ce(t, i, s);
					}
					break;
				case 5:
					var o = t.return;
					try {
						ka(t);
					} catch (s) {
						ce(t, o, s);
					}
			}
		} catch (s) {
			ce(t, t.return, s);
		}
		if (t === e) {
			L = null;
			break;
		}
		var a = t.sibling;
		if (a !== null) {
			(a.return = t.return), (L = a);
			break;
		}
		L = t.return;
	}
}
var zm = Math.ceil,
	Ni = zt.ReactCurrentDispatcher,
	Es = zt.ReactCurrentOwner,
	tt = zt.ReactCurrentBatchConfig,
	q = 0,
	Se = null,
	he = null,
	je = 0,
	Ve = 0,
	Gn = cn(0),
	ye = 0,
	ml = null,
	jn = 0,
	Qi = 0,
	Cs = 0,
	Xr = null,
	ze = null,
	ks = 0,
	hr = 1 / 0,
	jt = null,
	Ri = !1,
	Pa = null,
	nn = null,
	ql = !1,
	Xt = null,
	_i = 0,
	Jr = 0,
	Na = null,
	li = -1,
	ii = 0;
function Me() {
	return q & 6 ? de() : li !== -1 ? li : (li = de());
}
function rn(e) {
	return e.mode & 1
		? q & 2 && je !== 0
			? je & -je
			: xm.transition !== null
			? (ii === 0 && (ii = dd()), ii)
			: ((e = K),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yd(e.type))),
			  e)
		: 1;
}
function ft(e, t, n, r) {
	if (50 < Jr) throw ((Jr = 0), (Na = null), Error(T(185)));
	Sl(e, n, r),
		(!(q & 2) || e !== Se) &&
			(e === Se && (!(q & 2) && (Qi |= n), ye === 4 && Kt(e, je)),
			$e(e, r),
			n === 1 && q === 0 && !(t.mode & 1) && ((hr = de() + 500), Hi && dn()));
}
function $e(e, t) {
	var n = e.callbackNode;
	xh(e, t);
	var r = pi(e, e === Se ? je : 0);
	if (r === 0)
		n !== null && ou(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && ou(n), t === 1))
			e.tag === 0 ? wm(Zu.bind(null, e)) : zd(Zu.bind(null, e)),
				mm(function () {
					!(q & 6) && dn();
				}),
				(n = null);
		else {
			switch (fd(r)) {
				case 1:
					n = Xa;
					break;
				case 4:
					n = ud;
					break;
				case 16:
					n = fi;
					break;
				case 536870912:
					n = cd;
					break;
				default:
					n = fi;
			}
			n = zf(n, _f.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function _f(e, t) {
	if (((li = -1), (ii = 0), q & 6)) throw Error(T(327));
	var n = e.callbackNode;
	if (rr() && e.callbackNode !== n) return null;
	var r = pi(e, e === Se ? je : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Li(e, r);
	else {
		t = r;
		var l = q;
		q |= 2;
		var i = Mf();
		(Se !== e || je !== t) && ((jt = null), (hr = de() + 500), wn(e, t));
		do
			try {
				Bm();
				break;
			} catch (a) {
				Lf(e, a);
			}
		while (1);
		us(),
			(Ni.current = i),
			(q = l),
			he !== null ? (t = 0) : ((Se = null), (je = 0), (t = ye));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((l = ta(e)), l !== 0 && ((r = l), (t = Ra(e, l)))), t === 1)
		)
			throw ((n = ml), wn(e, 0), Kt(e, r), $e(e, de()), n);
		if (t === 6) Kt(e, r);
		else {
			if (
				((l = e.current.alternate),
				!(r & 30) &&
					!Fm(l) &&
					((t = Li(e, r)),
					t === 2 && ((i = ta(e)), i !== 0 && ((r = i), (t = Ra(e, i)))),
					t === 1))
			)
				throw ((n = ml), wn(e, 0), Kt(e, r), $e(e, de()), n);
			switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(T(345));
				case 2:
					hn(e, ze, jt);
					break;
				case 3:
					if (
						(Kt(e, r), (r & 130023424) === r && ((t = ks + 500 - de()), 10 < t))
					) {
						if (pi(e, 0) !== 0) break;
						if (((l = e.suspendedLanes), (l & r) !== r)) {
							Me(), (e.pingedLanes |= e.suspendedLanes & l);
							break;
						}
						e.timeoutHandle = ua(hn.bind(null, e, ze, jt), t);
						break;
					}
					hn(e, ze, jt);
					break;
				case 4:
					if ((Kt(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, l = -1; 0 < r; ) {
						var o = 31 - dt(r);
						(i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
					}
					if (
						((r = l),
						(r = de() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * zm(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = ua(hn.bind(null, e, ze, jt), r);
						break;
					}
					hn(e, ze, jt);
					break;
				case 5:
					hn(e, ze, jt);
					break;
				default:
					throw Error(T(329));
			}
		}
	}
	return $e(e, de()), e.callbackNode === n ? _f.bind(null, e) : null;
}
function Ra(e, t) {
	var n = Xr;
	return (
		e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256),
		(e = Li(e, t)),
		e !== 2 && ((t = ze), (ze = n), t !== null && _a(t)),
		e
	);
}
function _a(e) {
	ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function Fm(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var l = n[r],
						i = l.getSnapshot;
					l = l.value;
					try {
						if (!pt(i(), l)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function Kt(e, t) {
	for (
		t &= ~Cs,
			t &= ~Qi,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - dt(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function Zu(e) {
	if (q & 6) throw Error(T(327));
	rr();
	var t = pi(e, 0);
	if (!(t & 1)) return $e(e, de()), null;
	var n = Li(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = ta(e);
		r !== 0 && ((t = r), (n = Ra(e, r)));
	}
	if (n === 1) throw ((n = ml), wn(e, 0), Kt(e, t), $e(e, de()), n);
	if (n === 6) throw Error(T(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		hn(e, ze, jt),
		$e(e, de()),
		null
	);
}
function js(e, t) {
	var n = q;
	q |= 1;
	try {
		return e(t);
	} finally {
		(q = n), q === 0 && ((hr = de() + 500), Hi && dn());
	}
}
function Tn(e) {
	Xt !== null && Xt.tag === 0 && !(q & 6) && rr();
	var t = q;
	q |= 1;
	var n = tt.transition,
		r = K;
	try {
		if (((tt.transition = null), (K = 1), e)) return e();
	} finally {
		(K = r), (tt.transition = n), (q = t), !(q & 6) && dn();
	}
}
function Ts() {
	(Ve = Gn.current), b(Gn);
}
function wn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), hm(n)), he !== null))
		for (n = he.return; n !== null; ) {
			var r = n;
			switch ((os(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && yi();
					break;
				case 3:
					fr(), b(Be), b(_e), ms();
					break;
				case 5:
					hs(r);
					break;
				case 4:
					fr();
					break;
				case 13:
					b(ae);
					break;
				case 19:
					b(ae);
					break;
				case 10:
					cs(r.type._context);
					break;
				case 22:
				case 23:
					Ts();
			}
			n = n.return;
		}
	if (
		((Se = e),
		(he = e = ln(e.current, null)),
		(je = Ve = t),
		(ye = 0),
		(ml = null),
		(Cs = Qi = jn = 0),
		(ze = Xr = null),
		vn !== null)
	) {
		for (t = 0; t < vn.length; t++)
			if (((n = vn[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var l = r.next,
					i = n.pending;
				if (i !== null) {
					var o = i.next;
					(i.next = l), (r.next = o);
				}
				n.pending = r;
			}
		vn = null;
	}
	return e;
}
function Lf(e, t) {
	do {
		var n = he;
		try {
			if ((us(), (ti.current = Pi), Ti)) {
				for (var r = se.memoizedState; r !== null; ) {
					var l = r.queue;
					l !== null && (l.pending = null), (r = r.next);
				}
				Ti = !1;
			}
			if (
				((kn = 0),
				(xe = ge = se = null),
				(Kr = !1),
				(fl = 0),
				(Es.current = null),
				n === null || n.return === null)
			) {
				(ye = 1), (ml = t), (he = null);
				break;
			}
			e: {
				var i = e,
					o = n.return,
					a = n,
					s = t;
				if (
					((t = je),
					(a.flags |= 32768),
					s !== null && typeof s == 'object' && typeof s.then == 'function')
				) {
					var u = s,
						d = a,
						p = d.tag;
					if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
						var m = d.alternate;
						m
							? ((d.updateQueue = m.updateQueue),
							  (d.memoizedState = m.memoizedState),
							  (d.lanes = m.lanes))
							: ((d.updateQueue = null), (d.memoizedState = null));
					}
					var y = Uu(o);
					if (y !== null) {
						(y.flags &= -257),
							Bu(y, o, a, i, t),
							y.mode & 1 && Fu(i, u, t),
							(t = y),
							(s = u);
						var x = t.updateQueue;
						if (x === null) {
							var w = new Set();
							w.add(s), (t.updateQueue = w);
						} else x.add(s);
						break e;
					} else {
						if (!(t & 1)) {
							Fu(i, u, t), Ps();
							break e;
						}
						s = Error(T(426));
					}
				} else if (ie && a.mode & 1) {
					var P = Uu(o);
					if (P !== null) {
						!(P.flags & 65536) && (P.flags |= 256),
							Bu(P, o, a, i, t),
							as(pr(s, a));
						break e;
					}
				}
				(i = s = pr(s, a)),
					ye !== 4 && (ye = 2),
					Xr === null ? (Xr = [i]) : Xr.push(i),
					(i = o);
				do {
					switch (i.tag) {
						case 3:
							(i.flags |= 65536), (t &= -t), (i.lanes |= t);
							var v = hf(i, s, t);
							Lu(i, v);
							break e;
						case 1:
							a = s;
							var f = i.type,
								g = i.stateNode;
							if (
								!(i.flags & 128) &&
								(typeof f.getDerivedStateFromError == 'function' ||
									(g !== null &&
										typeof g.componentDidCatch == 'function' &&
										(nn === null || !nn.has(g))))
							) {
								(i.flags |= 65536), (t &= -t), (i.lanes |= t);
								var h = mf(i, a, t);
								Lu(i, h);
								break e;
							}
					}
					i = i.return;
				} while (i !== null);
			}
			Af(n);
		} catch (j) {
			(t = j), he === n && n !== null && (he = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function Mf() {
	var e = Ni.current;
	return (Ni.current = Pi), e === null ? Pi : e;
}
function Ps() {
	(ye === 0 || ye === 3 || ye === 2) && (ye = 4),
		Se === null || (!(jn & 268435455) && !(Qi & 268435455)) || Kt(Se, je);
}
function Li(e, t) {
	var n = q;
	q |= 2;
	var r = Mf();
	(Se !== e || je !== t) && ((jt = null), wn(e, t));
	do
		try {
			Um();
			break;
		} catch (l) {
			Lf(e, l);
		}
	while (1);
	if ((us(), (q = n), (Ni.current = r), he !== null)) throw Error(T(261));
	return (Se = null), (je = 0), ye;
}
function Um() {
	for (; he !== null; ) Of(he);
}
function Bm() {
	for (; he !== null && !dh(); ) Of(he);
}
function Of(e) {
	var t = If(e.alternate, e, Ve);
	(e.memoizedProps = e.pendingProps),
		t === null ? Af(e) : (he = t),
		(Es.current = null);
}
function Af(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Om(n, t)), n !== null)) {
				(n.flags &= 32767), (he = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(ye = 6), (he = null);
				return;
			}
		} else if (((n = Mm(n, t, Ve)), n !== null)) {
			he = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			he = t;
			return;
		}
		he = t = e;
	} while (t !== null);
	ye === 0 && (ye = 5);
}
function hn(e, t, n) {
	var r = K,
		l = tt.transition;
	try {
		(tt.transition = null), (K = 1), Hm(e, t, n, r);
	} finally {
		(tt.transition = l), (K = r);
	}
	return null;
}
function Hm(e, t, n, r) {
	do rr();
	while (Xt !== null);
	if (q & 6) throw Error(T(327));
	n = e.finishedWork;
	var l = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(T(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var i = n.lanes | n.childLanes;
	if (
		(Sh(e, i),
		e === Se && ((he = Se = null), (je = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			ql ||
			((ql = !0),
			zf(fi, function () {
				return rr(), null;
			})),
		(i = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || i)
	) {
		(i = tt.transition), (tt.transition = null);
		var o = K;
		K = 1;
		var a = q;
		(q |= 4),
			(Es.current = null),
			Dm(e, n),
			Nf(n, e),
			am(aa),
			(hi = !!oa),
			(aa = oa = null),
			(e.current = n),
			Im(n),
			fh(),
			(q = a),
			(K = o),
			(tt.transition = i);
	} else e.current = n;
	if (
		(ql && ((ql = !1), (Xt = e), (_i = l)),
		(i = e.pendingLanes),
		i === 0 && (nn = null),
		mh(n.stateNode),
		$e(e, de()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
	if (Ri) throw ((Ri = !1), (e = Pa), (Pa = null), e);
	return (
		_i & 1 && e.tag !== 0 && rr(),
		(i = e.pendingLanes),
		i & 1 ? (e === Na ? Jr++ : ((Jr = 0), (Na = e))) : (Jr = 0),
		dn(),
		null
	);
}
function rr() {
	if (Xt !== null) {
		var e = fd(_i),
			t = tt.transition,
			n = K;
		try {
			if (((tt.transition = null), (K = 16 > e ? 16 : e), Xt === null))
				var r = !1;
			else {
				if (((e = Xt), (Xt = null), (_i = 0), q & 6)) throw Error(T(331));
				var l = q;
				for (q |= 4, L = e.current; L !== null; ) {
					var i = L,
						o = i.child;
					if (L.flags & 16) {
						var a = i.deletions;
						if (a !== null) {
							for (var s = 0; s < a.length; s++) {
								var u = a[s];
								for (L = u; L !== null; ) {
									var d = L;
									switch (d.tag) {
										case 0:
										case 11:
										case 15:
											Gr(8, d, i);
									}
									var p = d.child;
									if (p !== null) (p.return = d), (L = p);
									else
										for (; L !== null; ) {
											d = L;
											var m = d.sibling,
												y = d.return;
											if ((jf(d), d === u)) {
												L = null;
												break;
											}
											if (m !== null) {
												(m.return = y), (L = m);
												break;
											}
											L = y;
										}
								}
							}
							var x = i.alternate;
							if (x !== null) {
								var w = x.child;
								if (w !== null) {
									x.child = null;
									do {
										var P = w.sibling;
										(w.sibling = null), (w = P);
									} while (w !== null);
								}
							}
							L = i;
						}
					}
					if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (L = o);
					else
						e: for (; L !== null; ) {
							if (((i = L), i.flags & 2048))
								switch (i.tag) {
									case 0:
									case 11:
									case 15:
										Gr(9, i, i.return);
								}
							var v = i.sibling;
							if (v !== null) {
								(v.return = i.return), (L = v);
								break e;
							}
							L = i.return;
						}
				}
				var f = e.current;
				for (L = f; L !== null; ) {
					o = L;
					var g = o.child;
					if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (L = g);
					else
						e: for (o = f; L !== null; ) {
							if (((a = L), a.flags & 2048))
								try {
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											Vi(9, a);
									}
								} catch (j) {
									ce(a, a.return, j);
								}
							if (a === o) {
								L = null;
								break e;
							}
							var h = a.sibling;
							if (h !== null) {
								(h.return = a.return), (L = h);
								break e;
							}
							L = a.return;
						}
				}
				if (
					((q = l), dn(), xt && typeof xt.onPostCommitFiberRoot == 'function')
				)
					try {
						xt.onPostCommitFiberRoot(Ii, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(K = n), (tt.transition = t);
		}
	}
	return !1;
}
function bu(e, t, n) {
	(t = pr(n, t)),
		(t = hf(e, t, 1)),
		(e = tn(e, t, 1)),
		(t = Me()),
		e !== null && (Sl(e, 1, t), $e(e, t));
}
function ce(e, t, n) {
	if (e.tag === 3) bu(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				bu(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(nn === null || !nn.has(r)))
				) {
					(e = pr(n, e)),
						(e = mf(t, e, 1)),
						(t = tn(t, e, 1)),
						(e = Me()),
						t !== null && (Sl(t, 1, e), $e(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function $m(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = Me()),
		(e.pingedLanes |= e.suspendedLanes & n),
		Se === e &&
			(je & n) === n &&
			(ye === 4 || (ye === 3 && (je & 130023424) === je && 500 > de() - ks)
				? wn(e, 0)
				: (Cs |= n)),
		$e(e, t);
}
function Df(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = Il), (Il <<= 1), !(Il & 130023424) && (Il = 4194304))
			: (t = 1));
	var n = Me();
	(e = At(e, t)), e !== null && (Sl(e, t, n), $e(e, n));
}
function Wm(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Df(e, n);
}
function Vm(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				l = e.memoizedState;
			l !== null && (n = l.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(T(314));
	}
	r !== null && r.delete(t), Df(e, n);
}
var If;
If = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Be.current) Fe = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Fe = !1), Lm(e, t, n);
			Fe = !!(e.flags & 131072);
		}
	else (Fe = !1), ie && t.flags & 1048576 && Fd(t, Si, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			ri(e, t), (e = t.pendingProps);
			var l = ur(t, _e.current);
			nr(t, n), (l = gs(null, t, r, e, l, n));
			var i = ys();
			return (
				(t.flags |= 1),
				typeof l == 'object' &&
				l !== null &&
				typeof l.render == 'function' &&
				l.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  He(r) ? ((i = !0), wi(t)) : (i = !1),
					  (t.memoizedState =
							l.state !== null && l.state !== void 0 ? l.state : null),
					  fs(t),
					  (l.updater = $i),
					  (t.stateNode = l),
					  (l._reactInternals = t),
					  va(t, r, e, n),
					  (t = wa(null, t, r, !0, i, n)))
					: ((t.tag = 0), ie && i && is(t), Le(null, t, l, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(ri(e, t),
					(e = t.pendingProps),
					(l = r._init),
					(r = l(r._payload)),
					(t.type = r),
					(l = t.tag = qm(r)),
					(e = ot(r, e)),
					l)
				) {
					case 0:
						t = ya(null, t, r, e, n);
						break e;
					case 1:
						t = Wu(null, t, r, e, n);
						break e;
					case 11:
						t = Hu(null, t, r, e, n);
						break e;
					case 14:
						t = $u(null, t, r, ot(r.type, e), n);
						break e;
				}
				throw Error(T(306, r, ''));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ot(r, l)),
				ya(e, t, r, l, n)
			);
		case 1:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ot(r, l)),
				Wu(e, t, r, l, n)
			);
		case 3:
			e: {
				if ((wf(t), e === null)) throw Error(T(387));
				(r = t.pendingProps),
					(i = t.memoizedState),
					(l = i.element),
					$d(e, t),
					ki(t, r, null, n);
				var o = t.memoizedState;
				if (((r = o.element), i.isDehydrated))
					if (
						((i = {
							element: r,
							isDehydrated: !1,
							cache: o.cache,
							pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
							transitions: o.transitions,
						}),
						(t.updateQueue.baseState = i),
						(t.memoizedState = i),
						t.flags & 256)
					) {
						(l = pr(Error(T(423)), t)), (t = Vu(e, t, r, n, l));
						break e;
					} else if (r !== l) {
						(l = pr(Error(T(424)), t)), (t = Vu(e, t, r, n, l));
						break e;
					} else
						for (
							Qe = en(t.stateNode.containerInfo.firstChild),
								qe = t,
								ie = !0,
								ut = null,
								n = qd(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((cr(), r === l)) {
						t = Dt(e, t, n);
						break e;
					}
					Le(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Yd(t),
				e === null && pa(t),
				(r = t.type),
				(l = t.pendingProps),
				(i = e !== null ? e.memoizedProps : null),
				(o = l.children),
				sa(r, l) ? (o = null) : i !== null && sa(r, i) && (t.flags |= 32),
				yf(e, t),
				Le(e, t, o, n),
				t.child
			);
		case 6:
			return e === null && pa(t), null;
		case 13:
			return xf(e, t, n);
		case 4:
			return (
				ps(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = dr(t, null, r, n)) : Le(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ot(r, l)),
				Hu(e, t, r, l, n)
			);
		case 7:
			return Le(e, t, t.pendingProps, n), t.child;
		case 8:
			return Le(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return Le(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(l = t.pendingProps),
					(i = t.memoizedProps),
					(o = l.value),
					J(Ei, r._currentValue),
					(r._currentValue = o),
					i !== null)
				)
					if (pt(i.value, o)) {
						if (i.children === l.children && !Be.current) {
							t = Dt(e, t, n);
							break e;
						}
					} else
						for (i = t.child, i !== null && (i.return = t); i !== null; ) {
							var a = i.dependencies;
							if (a !== null) {
								o = i.child;
								for (var s = a.firstContext; s !== null; ) {
									if (s.context === r) {
										if (i.tag === 1) {
											(s = Rt(-1, n & -n)), (s.tag = 2);
											var u = i.updateQueue;
											if (u !== null) {
												u = u.shared;
												var d = u.pending;
												d === null
													? (s.next = s)
													: ((s.next = d.next), (d.next = s)),
													(u.pending = s);
											}
										}
										(i.lanes |= n),
											(s = i.alternate),
											s !== null && (s.lanes |= n),
											ha(i.return, n, t),
											(a.lanes |= n);
										break;
									}
									s = s.next;
								}
							} else if (i.tag === 10) o = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (((o = i.return), o === null)) throw Error(T(341));
								(o.lanes |= n),
									(a = o.alternate),
									a !== null && (a.lanes |= n),
									ha(o, n, t),
									(o = i.sibling);
							} else o = i.child;
							if (o !== null) o.return = i;
							else
								for (o = i; o !== null; ) {
									if (o === t) {
										o = null;
										break;
									}
									if (((i = o.sibling), i !== null)) {
										(i.return = o.return), (o = i);
										break;
									}
									o = o.return;
								}
							i = o;
						}
				Le(e, t, l.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(l = t.type),
				(r = t.pendingProps.children),
				nr(t, n),
				(l = nt(l)),
				(r = r(l)),
				(t.flags |= 1),
				Le(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(l = ot(r, t.pendingProps)),
				(l = ot(r.type, l)),
				$u(e, t, r, l, n)
			);
		case 15:
			return vf(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ot(r, l)),
				ri(e, t),
				(t.tag = 1),
				He(r) ? ((e = !0), wi(t)) : (e = !1),
				nr(t, n),
				Vd(t, r, l),
				va(t, r, l, n),
				wa(null, t, r, !0, e, n)
			);
		case 19:
			return Sf(e, t, n);
		case 22:
			return gf(e, t, n);
	}
	throw Error(T(156, t.tag));
};
function zf(e, t) {
	return sd(e, t);
}
function Qm(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function et(e, t, n, r) {
	return new Qm(e, t, n, r);
}
function Ns(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function qm(e) {
	if (typeof e == 'function') return Ns(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === Ya)) return 11;
		if (e === Ka) return 14;
	}
	return 2;
}
function ln(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = et(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function oi(e, t, n, r, l, i) {
	var o = 2;
	if (((r = e), typeof e == 'function')) Ns(e) && (o = 1);
	else if (typeof e == 'string') o = 5;
	else
		e: switch (e) {
			case Un:
				return xn(n.children, l, i, t);
			case qa:
				(o = 8), (l |= 8);
				break;
			case Bo:
				return (
					(e = et(12, n, t, l | 2)), (e.elementType = Bo), (e.lanes = i), e
				);
			case Ho:
				return (e = et(13, n, t, l)), (e.elementType = Ho), (e.lanes = i), e;
			case $o:
				return (e = et(19, n, t, l)), (e.elementType = $o), (e.lanes = i), e;
			case Qc:
				return qi(n, l, i, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case Wc:
							o = 10;
							break e;
						case Vc:
							o = 9;
							break e;
						case Ya:
							o = 11;
							break e;
						case Ka:
							o = 14;
							break e;
						case Qt:
							(o = 16), (r = null);
							break e;
					}
				throw Error(T(130, e == null ? e : typeof e, ''));
		}
	return (
		(t = et(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
	);
}
function xn(e, t, n, r) {
	return (e = et(7, e, r, t)), (e.lanes = n), e;
}
function qi(e, t, n, r) {
	return (
		(e = et(22, e, r, t)),
		(e.elementType = Qc),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function Oo(e, t, n) {
	return (e = et(6, e, null, t)), (e.lanes = n), e;
}
function Ao(e, t, n) {
	return (
		(t = et(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Ym(e, t, n, r, l) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = ho(0)),
		(this.expirationTimes = ho(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = ho(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = l),
		(this.mutableSourceEagerHydrationData = null);
}
function Rs(e, t, n, r, l, i, o, a, s) {
	return (
		(e = new Ym(e, t, n, a, s)),
		t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
		(i = et(3, null, null, t)),
		(e.current = i),
		(i.stateNode = e),
		(i.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		fs(i),
		e
	);
}
function Km(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Fn,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function Ff(e) {
	if (!e) return sn;
	e = e._reactInternals;
	e: {
		if (Rn(e) !== e || e.tag !== 1) throw Error(T(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (He(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(T(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (He(n)) return Id(e, n, t);
	}
	return t;
}
function Uf(e, t, n, r, l, i, o, a, s) {
	return (
		(e = Rs(n, r, !0, e, l, i, o, a, s)),
		(e.context = Ff(null)),
		(n = e.current),
		(r = Me()),
		(l = rn(n)),
		(i = Rt(r, l)),
		(i.callback = t ?? null),
		tn(n, i, l),
		(e.current.lanes = l),
		Sl(e, l, r),
		$e(e, r),
		e
	);
}
function Yi(e, t, n, r) {
	var l = t.current,
		i = Me(),
		o = rn(l);
	return (
		(n = Ff(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = Rt(i, o)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = tn(l, t, o)),
		e !== null && (ft(e, l, o, i), ei(e, l, o)),
		o
	);
}
function Mi(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function ec(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function _s(e, t) {
	ec(e, t), (e = e.alternate) && ec(e, t);
}
function Gm() {
	return null;
}
var Bf =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
		  };
function Ls(e) {
	this._internalRoot = e;
}
Ki.prototype.render = Ls.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(T(409));
	Yi(e, t, null, null);
};
Ki.prototype.unmount = Ls.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		Tn(function () {
			Yi(null, e, null, null);
		}),
			(t[Ot] = null);
	}
};
function Ki(e) {
	this._internalRoot = e;
}
Ki.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = md();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++);
		Yt.splice(n, 0, e), n === 0 && gd(e);
	}
};
function Ms(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Gi(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	);
}
function tc() {}
function Xm(e, t, n, r, l) {
	if (l) {
		if (typeof r == 'function') {
			var i = r;
			r = function () {
				var u = Mi(o);
				i.call(u);
			};
		}
		var o = Uf(t, r, e, 0, null, !1, !1, '', tc);
		return (
			(e._reactRootContainer = o),
			(e[Ot] = o.current),
			al(e.nodeType === 8 ? e.parentNode : e),
			Tn(),
			o
		);
	}
	for (; (l = e.lastChild); ) e.removeChild(l);
	if (typeof r == 'function') {
		var a = r;
		r = function () {
			var u = Mi(s);
			a.call(u);
		};
	}
	var s = Rs(e, 0, !1, null, null, !1, !1, '', tc);
	return (
		(e._reactRootContainer = s),
		(e[Ot] = s.current),
		al(e.nodeType === 8 ? e.parentNode : e),
		Tn(function () {
			Yi(t, s, n, r);
		}),
		s
	);
}
function Xi(e, t, n, r, l) {
	var i = n._reactRootContainer;
	if (i) {
		var o = i;
		if (typeof l == 'function') {
			var a = l;
			l = function () {
				var s = Mi(o);
				a.call(s);
			};
		}
		Yi(t, o, e, l);
	} else o = Xm(n, t, e, l, r);
	return Mi(o);
}
pd = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Hr(t.pendingLanes);
				n !== 0 &&
					(Ja(t, n | 1), $e(t, de()), !(q & 6) && ((hr = de() + 500), dn()));
			}
			break;
		case 13:
			Tn(function () {
				var r = At(e, 1);
				if (r !== null) {
					var l = Me();
					ft(r, e, 1, l);
				}
			}),
				_s(e, 1);
	}
};
Za = function (e) {
	if (e.tag === 13) {
		var t = At(e, 134217728);
		if (t !== null) {
			var n = Me();
			ft(t, e, 134217728, n);
		}
		_s(e, 134217728);
	}
};
hd = function (e) {
	if (e.tag === 13) {
		var t = rn(e),
			n = At(e, t);
		if (n !== null) {
			var r = Me();
			ft(n, e, t, r);
		}
		_s(e, t);
	}
};
md = function () {
	return K;
};
vd = function (e, t) {
	var n = K;
	try {
		return (K = e), t();
	} finally {
		K = n;
	}
};
Zo = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((Qo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var l = Bi(r);
						if (!l) throw Error(T(90));
						Yc(r), Qo(r, l);
					}
				}
			}
			break;
		case 'textarea':
			Gc(e, n);
			break;
		case 'select':
			(t = n.value), t != null && Zn(e, !!n.multiple, t, !1);
	}
};
nd = js;
rd = Tn;
var Jm = { usingClientEntryPoint: !1, Events: [Cl, Wn, Bi, ed, td, js] },
	Mr = {
		findFiberByHostInstance: mn,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom',
	},
	Zm = {
		bundleType: Mr.bundleType,
		version: Mr.version,
		rendererPackageName: Mr.rendererPackageName,
		rendererConfig: Mr.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: zt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = od(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Mr.findFiberByHostInstance || Gm,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var Yl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Yl.isDisabled && Yl.supportsFiber)
		try {
			(Ii = Yl.inject(Zm)), (xt = Yl);
		} catch {}
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jm;
Ke.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Ms(t)) throw Error(T(200));
	return Km(e, t, null, n);
};
Ke.createRoot = function (e, t) {
	if (!Ms(e)) throw Error(T(299));
	var n = !1,
		r = '',
		l = Bf;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
		(t = Rs(e, 1, !1, null, null, n, !1, r, l)),
		(e[Ot] = t.current),
		al(e.nodeType === 8 ? e.parentNode : e),
		new Ls(t)
	);
};
Ke.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(T(188))
			: ((e = Object.keys(e).join(',')), Error(T(268, e)));
	return (e = od(t)), (e = e === null ? null : e.stateNode), e;
};
Ke.flushSync = function (e) {
	return Tn(e);
};
Ke.hydrate = function (e, t, n) {
	if (!Gi(t)) throw Error(T(200));
	return Xi(null, e, t, !0, n);
};
Ke.hydrateRoot = function (e, t, n) {
	if (!Ms(e)) throw Error(T(405));
	var r = (n != null && n.hydratedSources) || null,
		l = !1,
		i = '',
		o = Bf;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (l = !0),
			n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(t = Uf(t, null, e, 1, n ?? null, l, !1, i, o)),
		(e[Ot] = t.current),
		al(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(l = n._getVersion),
				(l = l(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, l])
					: t.mutableSourceEagerHydrationData.push(n, l);
	return new Ki(t);
};
Ke.render = function (e, t, n) {
	if (!Gi(t)) throw Error(T(200));
	return Xi(null, e, t, !1, n);
};
Ke.unmountComponentAtNode = function (e) {
	if (!Gi(e)) throw Error(T(40));
	return e._reactRootContainer
		? (Tn(function () {
				Xi(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Ot] = null);
				});
		  }),
		  !0)
		: !1;
};
Ke.unstable_batchedUpdates = js;
Ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Gi(n)) throw Error(T(200));
	if (e == null || e._reactInternals === void 0) throw Error(T(38));
	return Xi(e, t, n, !1, r);
};
Ke.version = '18.2.0-next-9e3b772b8-20220608';
function Hf() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hf);
		} catch (e) {
			console.error(e);
		}
}
Hf(), (Fc.exports = Ke);
var bm = Fc.exports,
	nc = bm;
(Fo.createRoot = nc.createRoot), (Fo.hydrateRoot = nc.hydrateRoot);
/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function le() {
	return (
		(le = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		le.apply(this, arguments)
	);
}
var pe;
(function (e) {
	(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(pe || (pe = {}));
const rc = 'popstate';
function ev(e) {
	e === void 0 && (e = {});
	function t(r, l) {
		let { pathname: i, search: o, hash: a } = r.location;
		return vl(
			'',
			{ pathname: i, search: o, hash: a },
			(l.state && l.state.usr) || null,
			(l.state && l.state.key) || 'default'
		);
	}
	function n(r, l) {
		return typeof l == 'string' ? l : Pn(l);
	}
	return nv(t, n, null, e);
}
function W(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function mr(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function tv() {
	return Math.random().toString(36).substr(2, 8);
}
function lc(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function vl(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		le(
			{ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
			typeof t == 'string' ? Ft(t) : t,
			{ state: n, key: (t && t.key) || r || tv() }
		)
	);
}
function Pn(e) {
	let { pathname: t = '/', search: n = '', hash: r = '' } = e;
	return (
		n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
		r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
		t
	);
}
function Ft(e) {
	let t = {};
	if (e) {
		let n = e.indexOf('#');
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf('?');
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e);
	}
	return t;
}
function nv(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: l = document.defaultView, v5Compat: i = !1 } = r,
		o = l.history,
		a = pe.Pop,
		s = null,
		u = d();
	u == null && ((u = 0), o.replaceState(le({}, o.state, { idx: u }), ''));
	function d() {
		return (o.state || { idx: null }).idx;
	}
	function p() {
		a = pe.Pop;
		let P = d(),
			v = P == null ? null : P - u;
		(u = P), s && s({ action: a, location: w.location, delta: v });
	}
	function m(P, v) {
		a = pe.Push;
		let f = vl(w.location, P, v);
		n && n(f, P), (u = d() + 1);
		let g = lc(f, u),
			h = w.createHref(f);
		try {
			o.pushState(g, '', h);
		} catch (j) {
			if (j instanceof DOMException && j.name === 'DataCloneError') throw j;
			l.location.assign(h);
		}
		i && s && s({ action: a, location: w.location, delta: 1 });
	}
	function y(P, v) {
		a = pe.Replace;
		let f = vl(w.location, P, v);
		n && n(f, P), (u = d());
		let g = lc(f, u),
			h = w.createHref(f);
		o.replaceState(g, '', h),
			i && s && s({ action: a, location: w.location, delta: 0 });
	}
	function x(P) {
		let v = l.location.origin !== 'null' ? l.location.origin : l.location.href,
			f = typeof P == 'string' ? P : Pn(P);
		return (
			W(
				v,
				'No window.location.(origin|href) available to create URL for href: ' +
					f
			),
			new URL(f, v)
		);
	}
	let w = {
		get action() {
			return a;
		},
		get location() {
			return e(l, o);
		},
		listen(P) {
			if (s) throw new Error('A history only accepts one active listener');
			return (
				l.addEventListener(rc, p),
				(s = P),
				() => {
					l.removeEventListener(rc, p), (s = null);
				}
			);
		},
		createHref(P) {
			return t(l, P);
		},
		createURL: x,
		encodeLocation(P) {
			let v = x(P);
			return { pathname: v.pathname, search: v.search, hash: v.hash };
		},
		push: m,
		replace: y,
		go(P) {
			return o.go(P);
		},
	};
	return w;
}
var ve;
(function (e) {
	(e.data = 'data'),
		(e.deferred = 'deferred'),
		(e.redirect = 'redirect'),
		(e.error = 'error');
})(ve || (ve = {}));
const rv = new Set([
	'lazy',
	'caseSensitive',
	'path',
	'id',
	'index',
	'children',
]);
function lv(e) {
	return e.index === !0;
}
function La(e, t, n, r) {
	return (
		n === void 0 && (n = []),
		r === void 0 && (r = {}),
		e.map((l, i) => {
			let o = [...n, i],
				a = typeof l.id == 'string' ? l.id : o.join('-');
			if (
				(W(
					l.index !== !0 || !l.children,
					'Cannot specify children on an index route'
				),
				W(
					!r[a],
					'Found a route id collision on id "' +
						a +
						`".  Route id's must be globally unique within Data Router usages`
				),
				lv(l))
			) {
				let s = le({}, l, t(l), { id: a });
				return (r[a] = s), s;
			} else {
				let s = le({}, l, t(l), { id: a, children: void 0 });
				return (
					(r[a] = s), l.children && (s.children = La(l.children, t, o, r)), s
				);
			}
		})
	);
}
function Xn(e, t, n) {
	n === void 0 && (n = '/');
	let r = typeof t == 'string' ? Ft(t) : t,
		l = xr(r.pathname || '/', n);
	if (l == null) return null;
	let i = $f(e);
	iv(i);
	let o = null;
	for (let a = 0; o == null && a < i.length; ++a) o = hv(i[a], gv(l));
	return o;
}
function $f(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
	let l = (i, o, a) => {
		let s = {
			relativePath: a === void 0 ? i.path || '' : a,
			caseSensitive: i.caseSensitive === !0,
			childrenIndex: o,
			route: i,
		};
		s.relativePath.startsWith('/') &&
			(W(
				s.relativePath.startsWith(r),
				'Absolute route path "' +
					s.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					'must start with the combined path of all its parent routes.'
			),
			(s.relativePath = s.relativePath.slice(r.length)));
		let u = _t([r, s.relativePath]),
			d = n.concat(s);
		i.children &&
			i.children.length > 0 &&
			(W(
				i.index !== !0,
				'Index routes must not have child routes. Please remove ' +
					('all child routes from route path "' + u + '".')
			),
			$f(i.children, t, d, u)),
			!(i.path == null && !i.index) &&
				t.push({ path: u, score: fv(u, i.index), routesMeta: d });
	};
	return (
		e.forEach((i, o) => {
			var a;
			if (i.path === '' || !((a = i.path) != null && a.includes('?'))) l(i, o);
			else for (let s of Wf(i.path)) l(i, o, s);
		}),
		t
	);
}
function Wf(e) {
	let t = e.split('/');
	if (t.length === 0) return [];
	let [n, ...r] = t,
		l = n.endsWith('?'),
		i = n.replace(/\?$/, '');
	if (r.length === 0) return l ? [i, ''] : [i];
	let o = Wf(r.join('/')),
		a = [];
	return (
		a.push(...o.map((s) => (s === '' ? i : [i, s].join('/')))),
		l && a.push(...o),
		a.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
	);
}
function iv(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: pv(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const ov = /^:\w+$/,
	av = 3,
	sv = 2,
	uv = 1,
	cv = 10,
	dv = -2,
	ic = (e) => e === '*';
function fv(e, t) {
	let n = e.split('/'),
		r = n.length;
	return (
		n.some(ic) && (r += dv),
		t && (r += sv),
		n
			.filter((l) => !ic(l))
			.reduce((l, i) => l + (ov.test(i) ? av : i === '' ? uv : cv), r)
	);
}
function pv(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function hv(e, t) {
	let { routesMeta: n } = e,
		r = {},
		l = '/',
		i = [];
	for (let o = 0; o < n.length; ++o) {
		let a = n[o],
			s = o === n.length - 1,
			u = l === '/' ? t : t.slice(l.length) || '/',
			d = mv(
				{ path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
				u
			);
		if (!d) return null;
		Object.assign(r, d.params);
		let p = a.route;
		i.push({
			params: r,
			pathname: _t([l, d.pathname]),
			pathnameBase: Sv(_t([l, d.pathnameBase])),
			route: p,
		}),
			d.pathnameBase !== '/' && (l = _t([l, d.pathnameBase]));
	}
	return i;
}
function mv(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = vv(e.path, e.caseSensitive, e.end),
		l = t.match(n);
	if (!l) return null;
	let i = l[0],
		o = i.replace(/(.)\/+$/, '$1'),
		a = l.slice(1);
	return {
		params: r.reduce((u, d, p) => {
			if (d === '*') {
				let m = a[p] || '';
				o = i.slice(0, i.length - m.length).replace(/(.)\/+$/, '$1');
			}
			return (u[d] = yv(a[p] || '', d)), u;
		}, {}),
		pathname: i,
		pathnameBase: o,
		pattern: e,
	};
}
function vv(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		mr(
			e === '*' || !e.endsWith('*') || e.endsWith('/*'),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
				'always follow a `/` in the pattern. To get rid of this warning, ' +
				('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
		);
	let r = [],
		l =
			'^' +
			e
				.replace(/\/*\*?$/, '')
				.replace(/^\/*/, '/')
				.replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
				.replace(/\/:(\w+)/g, (o, a) => (r.push(a), '/([^\\/]+)'));
	return (
		e.endsWith('*')
			? (r.push('*'),
			  (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
			: n
			? (l += '\\/*$')
			: e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
		[new RegExp(l, t ? void 0 : 'i'), r]
	);
}
function gv(e) {
	try {
		return decodeURI(e);
	} catch (t) {
		return (
			mr(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					('encoding (' + t + ').')
			),
			e
		);
	}
}
function yv(e, t) {
	try {
		return decodeURIComponent(e);
	} catch (n) {
		return (
			mr(
				!1,
				'The value for the URL param "' +
					t +
					'" will not be decoded because' +
					(' the string "' +
						e +
						'" is a malformed URL segment. This is probably') +
					(' due to a bad percent encoding (' + n + ').')
			),
			e
		);
	}
}
function xr(e, t) {
	if (t === '/') return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== '/' ? null : e.slice(n) || '/';
}
function wv(e, t) {
	t === void 0 && (t = '/');
	let {
		pathname: n,
		search: r = '',
		hash: l = '',
	} = typeof e == 'string' ? Ft(e) : e;
	return {
		pathname: n ? (n.startsWith('/') ? n : xv(n, t)) : t,
		search: Ev(r),
		hash: Cv(l),
	};
}
function xv(e, t) {
	let n = t.replace(/\/+$/, '').split('/');
	return (
		e.split('/').forEach((l) => {
			l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
		}),
		n.length > 1 ? n.join('/') : '/'
	);
}
function Do(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		('`to.' +
			t +
			'` field [' +
			JSON.stringify(r) +
			'].  Please separate it out to the ') +
		('`to.' + n + '` field. Alternatively you may provide the full path as ') +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function Ji(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	);
}
function Os(e, t, n, r) {
	r === void 0 && (r = !1);
	let l;
	typeof e == 'string'
		? (l = Ft(e))
		: ((l = le({}, e)),
		  W(
				!l.pathname || !l.pathname.includes('?'),
				Do('?', 'pathname', 'search', l)
		  ),
		  W(
				!l.pathname || !l.pathname.includes('#'),
				Do('#', 'pathname', 'hash', l)
		  ),
		  W(!l.search || !l.search.includes('#'), Do('#', 'search', 'hash', l)));
	let i = e === '' || l.pathname === '',
		o = i ? '/' : l.pathname,
		a;
	if (r || o == null) a = n;
	else {
		let p = t.length - 1;
		if (o.startsWith('..')) {
			let m = o.split('/');
			for (; m[0] === '..'; ) m.shift(), (p -= 1);
			l.pathname = m.join('/');
		}
		a = p >= 0 ? t[p] : '/';
	}
	let s = wv(l, a),
		u = o && o !== '/' && o.endsWith('/'),
		d = (i || o === '.') && n.endsWith('/');
	return !s.pathname.endsWith('/') && (u || d) && (s.pathname += '/'), s;
}
const _t = (e) => e.join('/').replace(/\/\/+/g, '/'),
	Sv = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
	Ev = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
	Cv = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class As {
	constructor(t, n, r, l) {
		l === void 0 && (l = !1),
			(this.status = t),
			(this.statusText = n || ''),
			(this.internal = l),
			r instanceof Error
				? ((this.data = r.toString()), (this.error = r))
				: (this.data = r);
	}
}
function Vf(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.internal == 'boolean' &&
		'data' in e
	);
}
const Qf = ['post', 'put', 'patch', 'delete'],
	kv = new Set(Qf),
	jv = ['get', ...Qf],
	Tv = new Set(jv),
	Pv = new Set([301, 302, 303, 307, 308]),
	Nv = new Set([307, 308]),
	Io = {
		state: 'idle',
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	Rv = {
		state: 'idle',
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	Or = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
	qf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	_v = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function Lv(e) {
	const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
		n =
			typeof t < 'u' &&
			typeof t.document < 'u' &&
			typeof t.document.createElement < 'u',
		r = !n;
	W(
		e.routes.length > 0,
		'You must provide a non-empty routes array to createRouter'
	);
	let l;
	if (e.mapRouteProperties) l = e.mapRouteProperties;
	else if (e.detectErrorBoundary) {
		let S = e.detectErrorBoundary;
		l = (E) => ({ hasErrorBoundary: S(E) });
	} else l = _v;
	let i = {},
		o = La(e.routes, l, void 0, i),
		a,
		s = e.basename || '/',
		u = le({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
		d = null,
		p = new Set(),
		m = null,
		y = null,
		x = null,
		w = e.hydrationData != null,
		P = Xn(o, e.history.location, s),
		v = null;
	if (P == null) {
		let S = Je(404, { pathname: e.history.location.pathname }),
			{ matches: E, route: k } = pc(o);
		(P = E), (v = { [k.id]: S });
	}
	let f =
			!P.some((S) => S.route.lazy) &&
			(!P.some((S) => S.route.loader) || e.hydrationData != null),
		g,
		h = {
			historyAction: e.history.action,
			location: e.history.location,
			matches: P,
			initialized: f,
			navigation: Io,
			restoreScrollPosition: e.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: 'idle',
			loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
			actionData: (e.hydrationData && e.hydrationData.actionData) || null,
			errors: (e.hydrationData && e.hydrationData.errors) || v,
			fetchers: new Map(),
			blockers: new Map(),
		},
		j = pe.Pop,
		R = !1,
		N,
		M = !1,
		Q = !1,
		U = [],
		Ee = [],
		G = new Map(),
		Bt = 0,
		Mn = -1,
		Ht = new Map(),
		lt = new Set(),
		ht = new Map(),
		_ = new Map(),
		I = new Map(),
		$ = !1;
	function oe() {
		return (
			(d = e.history.listen((S) => {
				let { action: E, location: k, delta: O } = S;
				if ($) {
					$ = !1;
					return;
				}
				mr(
					I.size === 0 || O != null,
					'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
				);
				let B = Vs({
					currentLocation: h.location,
					nextLocation: k,
					historyAction: E,
				});
				if (B && O != null) {
					($ = !0),
						e.history.go(O * -1),
						Pl(B, {
							state: 'blocked',
							location: k,
							proceed() {
								Pl(B, {
									state: 'proceeding',
									proceed: void 0,
									reset: void 0,
									location: k,
								}),
									e.history.go(O);
							},
							reset() {
								let z = new Map(h.blockers);
								z.set(B, Or), ee({ blockers: z });
							},
						});
					return;
				}
				return $t(E, k);
			})),
			h.initialized || $t(pe.Pop, h.location),
			g
		);
	}
	function fe() {
		d && d(),
			p.clear(),
			N && N.abort(),
			h.fetchers.forEach((S, E) => no(E)),
			h.blockers.forEach((S, E) => Ws(E));
	}
	function On(S) {
		return p.add(S), () => p.delete(S);
	}
	function ee(S) {
		(h = le({}, h, S)), p.forEach((E) => E(h));
	}
	function Et(S, E) {
		var k, O;
		let B =
				h.actionData != null &&
				h.navigation.formMethod != null &&
				st(h.navigation.formMethod) &&
				h.navigation.state === 'loading' &&
				((k = S.state) == null ? void 0 : k._isRedirect) !== !0,
			z;
		E.actionData
			? Object.keys(E.actionData).length > 0
				? (z = E.actionData)
				: (z = null)
			: B
			? (z = h.actionData)
			: (z = null);
		let F = E.loaderData
				? fc(h.loaderData, E.loaderData, E.matches || [], E.errors)
				: h.loaderData,
			D = h.blockers;
		D.size > 0 && ((D = new Map(D)), D.forEach((X, Y) => D.set(Y, Or)));
		let A =
			R === !0 ||
			(h.navigation.formMethod != null &&
				st(h.navigation.formMethod) &&
				((O = S.state) == null ? void 0 : O._isRedirect) !== !0);
		a && ((o = a), (a = void 0)),
			M ||
				j === pe.Pop ||
				(j === pe.Push
					? e.history.push(S, S.state)
					: j === pe.Replace && e.history.replace(S, S.state)),
			ee(
				le({}, E, {
					actionData: z,
					loaderData: F,
					historyAction: j,
					location: S,
					initialized: !0,
					navigation: Io,
					revalidation: 'idle',
					restoreScrollPosition: qs(S, E.matches || h.matches),
					preventScrollReset: A,
					blockers: D,
				})
			),
			(j = pe.Pop),
			(R = !1),
			(M = !1),
			(Q = !1),
			(U = []),
			(Ee = []);
	}
	async function mt(S, E) {
		if (typeof S == 'number') {
			e.history.go(S);
			return;
		}
		let k = Ma(
				h.location,
				h.matches,
				s,
				u.v7_prependBasename,
				S,
				E == null ? void 0 : E.fromRouteId,
				E == null ? void 0 : E.relative
			),
			{
				path: O,
				submission: B,
				error: z,
			} = oc(u.v7_normalizeFormMethod, !1, k, E),
			F = h.location,
			D = vl(h.location, O, E && E.state);
		D = le({}, D, e.history.encodeLocation(D));
		let A = E && E.replace != null ? E.replace : void 0,
			X = pe.Push;
		A === !0
			? (X = pe.Replace)
			: A === !1 ||
			  (B != null &&
					st(B.formMethod) &&
					B.formAction === h.location.pathname + h.location.search &&
					(X = pe.Replace));
		let Y =
				E && 'preventScrollReset' in E ? E.preventScrollReset === !0 : void 0,
			We = Vs({ currentLocation: F, nextLocation: D, historyAction: X });
		if (We) {
			Pl(We, {
				state: 'blocked',
				location: D,
				proceed() {
					Pl(We, {
						state: 'proceeding',
						proceed: void 0,
						reset: void 0,
						location: D,
					}),
						mt(S, E);
				},
				reset() {
					let we = new Map(h.blockers);
					we.set(We, Or), ee({ blockers: we });
				},
			});
			return;
		}
		return await $t(X, D, {
			submission: B,
			pendingError: z,
			preventScrollReset: Y,
			replace: E && E.replace,
		});
	}
	function An() {
		if (
			(to(),
			ee({ revalidation: 'loading' }),
			h.navigation.state !== 'submitting')
		) {
			if (h.navigation.state === 'idle') {
				$t(h.historyAction, h.location, { startUninterruptedRevalidation: !0 });
				return;
			}
			$t(j || h.historyAction, h.navigation.location, {
				overrideNavigation: h.navigation,
			});
		}
	}
	async function $t(S, E, k) {
		N && N.abort(),
			(N = null),
			(j = S),
			(M = (k && k.startUninterruptedRevalidation) === !0),
			kp(h.location, h.matches),
			(R = (k && k.preventScrollReset) === !0);
		let O = a || o,
			B = k && k.overrideNavigation,
			z = Xn(O, E, s);
		if (!z) {
			let we = Je(404, { pathname: E.pathname }),
				{ matches: De, route: vt } = pc(O);
			ro(), Et(E, { matches: De, loaderData: {}, errors: { [vt.id]: we } });
			return;
		}
		if (
			h.initialized &&
			!Q &&
			Iv(h.location, E) &&
			!(k && k.submission && st(k.submission.formMethod))
		) {
			Et(E, { matches: z });
			return;
		}
		N = new AbortController();
		let F = Dr(e.history, E, N.signal, k && k.submission),
			D,
			A;
		if (k && k.pendingError) A = { [Jn(z).route.id]: k.pendingError };
		else if (k && k.submission && st(k.submission.formMethod)) {
			let we = await gp(F, E, k.submission, z, { replace: k.replace });
			if (we.shortCircuited) return;
			(D = we.pendingActionData),
				(A = we.pendingActionError),
				(B = Kl(E, k.submission)),
				(F = new Request(F.url, { signal: F.signal }));
		}
		let {
			shortCircuited: X,
			loaderData: Y,
			errors: We,
		} = await yp(
			F,
			E,
			z,
			B,
			k && k.submission,
			k && k.fetcherSubmission,
			k && k.replace,
			D,
			A
		);
		X ||
			((N = null),
			Et(
				E,
				le({ matches: z }, D ? { actionData: D } : {}, {
					loaderData: Y,
					errors: We,
				})
			));
	}
	async function gp(S, E, k, O, B) {
		B === void 0 && (B = {}), to();
		let z = Hv(E, k);
		ee({ navigation: z });
		let F,
			D = Aa(O, E);
		if (!D.route.action && !D.route.lazy)
			F = {
				type: ve.error,
				error: Je(405, {
					method: S.method,
					pathname: E.pathname,
					routeId: D.route.id,
				}),
			};
		else if (((F = await Ar('action', S, D, O, i, l, s)), S.signal.aborted))
			return { shortCircuited: !0 };
		if (lr(F)) {
			let A;
			return (
				B && B.replace != null
					? (A = B.replace)
					: (A = F.location === h.location.pathname + h.location.search),
				await Er(h, F, { submission: k, replace: A }),
				{ shortCircuited: !0 }
			);
		}
		if (Zr(F)) {
			let A = Jn(O, D.route.id);
			return (
				(B && B.replace) !== !0 && (j = pe.Push),
				{ pendingActionData: {}, pendingActionError: { [A.route.id]: F.error } }
			);
		}
		if (yn(F)) throw Je(400, { type: 'defer-action' });
		return { pendingActionData: { [D.route.id]: F.data } };
	}
	async function yp(S, E, k, O, B, z, F, D, A) {
		let X = O || Kl(E, B),
			Y = B || z || vc(X),
			We = a || o,
			[we, De] = ac(e.history, h, k, Y, E, Q, U, Ee, ht, lt, We, s, D, A);
		if (
			(ro(
				(te) =>
					!(k && k.some((Xe) => Xe.route.id === te)) ||
					(we && we.some((Xe) => Xe.route.id === te))
			),
			we.length === 0 && De.length === 0)
		) {
			let te = Hs();
			return (
				Et(
					E,
					le(
						{ matches: k, loaderData: {}, errors: A || null },
						D ? { actionData: D } : {},
						te ? { fetchers: new Map(h.fetchers) } : {}
					)
				),
				{ shortCircuited: !0 }
			);
		}
		if (!M) {
			De.forEach((Xe) => {
				let Dn = h.fetchers.get(Xe.key),
					Ce = Ir(void 0, Dn ? Dn.data : void 0);
				h.fetchers.set(Xe.key, Ce);
			});
			let te = D || h.actionData;
			ee(
				le(
					{ navigation: X },
					te
						? Object.keys(te).length === 0
							? { actionData: null }
							: { actionData: te }
						: {},
					De.length > 0 ? { fetchers: new Map(h.fetchers) } : {}
				)
			);
		}
		(Mn = ++Bt),
			De.forEach((te) => {
				G.has(te.key) && Wt(te.key),
					te.controller && G.set(te.key, te.controller);
			});
		let vt = () => De.forEach((te) => Wt(te.key));
		N && N.signal.addEventListener('abort', vt);
		let {
			results: Cr,
			loaderResults: lo,
			fetcherResults: Nl,
		} = await Us(h.matches, k, we, De, S);
		if (S.signal.aborted) return { shortCircuited: !0 };
		N && N.signal.removeEventListener('abort', vt),
			De.forEach((te) => G.delete(te.key));
		let Ct = hc(Cr);
		if (Ct) return await Er(h, Ct, { replace: F }), { shortCircuited: !0 };
		let { loaderData: Rl, errors: io } = dc(h, k, we, lo, A, De, Nl, _);
		_.forEach((te, Xe) => {
			te.subscribe((Dn) => {
				(Dn || te.done) && _.delete(Xe);
			});
		});
		let oo = Hs(),
			ao = $s(Mn),
			_l = oo || ao || De.length > 0;
		return le(
			{ loaderData: Rl, errors: io },
			_l ? { fetchers: new Map(h.fetchers) } : {}
		);
	}
	function Fs(S) {
		return h.fetchers.get(S) || Rv;
	}
	function wp(S, E, k, O) {
		if (r)
			throw new Error(
				"router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
			);
		G.has(S) && Wt(S);
		let B = a || o,
			z = Ma(
				h.location,
				h.matches,
				s,
				u.v7_prependBasename,
				k,
				E,
				O == null ? void 0 : O.relative
			),
			F = Xn(B, z, s);
		if (!F) {
			Tl(S, E, Je(404, { pathname: z }));
			return;
		}
		let {
			path: D,
			submission: A,
			error: X,
		} = oc(u.v7_normalizeFormMethod, !0, z, O);
		if (X) {
			Tl(S, E, X);
			return;
		}
		let Y = Aa(F, D);
		if (((R = (O && O.preventScrollReset) === !0), A && st(A.formMethod))) {
			xp(S, E, D, Y, F, A);
			return;
		}
		ht.set(S, { routeId: E, path: D }), Sp(S, E, D, Y, F, A);
	}
	async function xp(S, E, k, O, B, z) {
		if ((to(), ht.delete(S), !O.route.action && !O.route.lazy)) {
			let Ce = Je(405, { method: z.formMethod, pathname: k, routeId: E });
			Tl(S, E, Ce);
			return;
		}
		let F = h.fetchers.get(S),
			D = $v(z, F);
		h.fetchers.set(S, D), ee({ fetchers: new Map(h.fetchers) });
		let A = new AbortController(),
			X = Dr(e.history, k, A.signal, z);
		G.set(S, A);
		let Y = await Ar('action', X, O, B, i, l, s);
		if (X.signal.aborted) {
			G.get(S) === A && G.delete(S);
			return;
		}
		if (lr(Y)) {
			G.delete(S), lt.add(S);
			let Ce = Ir(z);
			return (
				h.fetchers.set(S, Ce),
				ee({ fetchers: new Map(h.fetchers) }),
				Er(h, Y, { submission: z, isFetchActionRedirect: !0 })
			);
		}
		if (Zr(Y)) {
			Tl(S, E, Y.error);
			return;
		}
		if (yn(Y)) throw Je(400, { type: 'defer-action' });
		let We = h.navigation.location || h.location,
			we = Dr(e.history, We, A.signal),
			De = a || o,
			vt =
				h.navigation.state !== 'idle'
					? Xn(De, h.navigation.location, s)
					: h.matches;
		W(vt, "Didn't find any matches after fetcher action");
		let Cr = ++Bt;
		Ht.set(S, Cr);
		let lo = Ir(z, Y.data);
		h.fetchers.set(S, lo);
		let [Nl, Ct] = ac(
			e.history,
			h,
			vt,
			z,
			We,
			Q,
			U,
			Ee,
			ht,
			lt,
			De,
			s,
			{ [O.route.id]: Y.data },
			void 0
		);
		Ct.filter((Ce) => Ce.key !== S).forEach((Ce) => {
			let kr = Ce.key,
				Ys = h.fetchers.get(kr),
				Tp = Ir(void 0, Ys ? Ys.data : void 0);
			h.fetchers.set(kr, Tp),
				G.has(kr) && Wt(kr),
				Ce.controller && G.set(kr, Ce.controller);
		}),
			ee({ fetchers: new Map(h.fetchers) });
		let Rl = () => Ct.forEach((Ce) => Wt(Ce.key));
		A.signal.addEventListener('abort', Rl);
		let {
			results: io,
			loaderResults: oo,
			fetcherResults: ao,
		} = await Us(h.matches, vt, Nl, Ct, we);
		if (A.signal.aborted) return;
		A.signal.removeEventListener('abort', Rl),
			Ht.delete(S),
			G.delete(S),
			Ct.forEach((Ce) => G.delete(Ce.key));
		let _l = hc(io);
		if (_l) return Er(h, _l);
		let { loaderData: te, errors: Xe } = dc(
			h,
			h.matches,
			Nl,
			oo,
			void 0,
			Ct,
			ao,
			_
		);
		if (h.fetchers.has(S)) {
			let Ce = ai(Y.data);
			h.fetchers.set(S, Ce);
		}
		let Dn = $s(Cr);
		h.navigation.state === 'loading' && Cr > Mn
			? (W(j, 'Expected pending action'),
			  N && N.abort(),
			  Et(h.navigation.location, {
					matches: vt,
					loaderData: te,
					errors: Xe,
					fetchers: new Map(h.fetchers),
			  }))
			: (ee(
					le(
						{ errors: Xe, loaderData: fc(h.loaderData, te, vt, Xe) },
						Dn || Ct.length > 0 ? { fetchers: new Map(h.fetchers) } : {}
					)
			  ),
			  (Q = !1));
	}
	async function Sp(S, E, k, O, B, z) {
		let F = h.fetchers.get(S),
			D = Ir(z, F ? F.data : void 0);
		h.fetchers.set(S, D), ee({ fetchers: new Map(h.fetchers) });
		let A = new AbortController(),
			X = Dr(e.history, k, A.signal);
		G.set(S, A);
		let Y = await Ar('loader', X, O, B, i, l, s);
		if (
			(yn(Y) && (Y = (await Gf(Y, X.signal, !0)) || Y),
			G.get(S) === A && G.delete(S),
			X.signal.aborted)
		)
			return;
		if (lr(Y)) {
			lt.add(S), await Er(h, Y);
			return;
		}
		if (Zr(Y)) {
			let we = Jn(h.matches, E);
			h.fetchers.delete(S),
				ee({
					fetchers: new Map(h.fetchers),
					errors: { [we.route.id]: Y.error },
				});
			return;
		}
		W(!yn(Y), 'Unhandled fetcher deferred data');
		let We = ai(Y.data);
		h.fetchers.set(S, We), ee({ fetchers: new Map(h.fetchers) });
	}
	async function Er(S, E, k) {
		let {
			submission: O,
			replace: B,
			isFetchActionRedirect: z,
		} = k === void 0 ? {} : k;
		E.revalidate && (Q = !0);
		let F = vl(
			S.location,
			E.location,
			le({ _isRedirect: !0 }, z ? { _isFetchActionRedirect: !0 } : {})
		);
		if (
			(W(F, 'Expected a location on the redirect navigation'),
			qf.test(E.location) && n)
		) {
			let X = e.history.createURL(E.location),
				Y = xr(X.pathname, s) == null;
			if (t.location.origin !== X.origin || Y) {
				B ? t.location.replace(E.location) : t.location.assign(E.location);
				return;
			}
		}
		N = null;
		let D = B === !0 ? pe.Replace : pe.Push,
			A = O || vc(S.navigation);
		if (Nv.has(E.status) && A && st(A.formMethod))
			await $t(D, F, {
				submission: le({}, A, { formAction: E.location }),
				preventScrollReset: R,
			});
		else if (z)
			await $t(D, F, {
				overrideNavigation: Kl(F),
				fetcherSubmission: A,
				preventScrollReset: R,
			});
		else {
			let X = Kl(F, A);
			await $t(D, F, { overrideNavigation: X, preventScrollReset: R });
		}
	}
	async function Us(S, E, k, O, B) {
		let z = await Promise.all([
				...k.map((A) => Ar('loader', B, A, E, i, l, s)),
				...O.map((A) =>
					A.matches && A.match && A.controller
						? Ar(
								'loader',
								Dr(e.history, A.path, A.controller.signal),
								A.match,
								A.matches,
								i,
								l,
								s
						  )
						: { type: ve.error, error: Je(404, { pathname: A.path }) }
				),
			]),
			F = z.slice(0, k.length),
			D = z.slice(k.length);
		return (
			await Promise.all([
				mc(
					S,
					k,
					F,
					F.map(() => B.signal),
					!1,
					h.loaderData
				),
				mc(
					S,
					O.map((A) => A.match),
					D,
					O.map((A) => (A.controller ? A.controller.signal : null)),
					!0
				),
			]),
			{ results: z, loaderResults: F, fetcherResults: D }
		);
	}
	function to() {
		(Q = !0),
			U.push(...ro()),
			ht.forEach((S, E) => {
				G.has(E) && (Ee.push(E), Wt(E));
			});
	}
	function Tl(S, E, k) {
		let O = Jn(h.matches, E);
		no(S), ee({ errors: { [O.route.id]: k }, fetchers: new Map(h.fetchers) });
	}
	function no(S) {
		let E = h.fetchers.get(S);
		G.has(S) && !(E && E.state === 'loading' && Ht.has(S)) && Wt(S),
			ht.delete(S),
			Ht.delete(S),
			lt.delete(S),
			h.fetchers.delete(S);
	}
	function Wt(S) {
		let E = G.get(S);
		W(E, 'Expected fetch controller: ' + S), E.abort(), G.delete(S);
	}
	function Bs(S) {
		for (let E of S) {
			let k = Fs(E),
				O = ai(k.data);
			h.fetchers.set(E, O);
		}
	}
	function Hs() {
		let S = [],
			E = !1;
		for (let k of lt) {
			let O = h.fetchers.get(k);
			W(O, 'Expected fetcher: ' + k),
				O.state === 'loading' && (lt.delete(k), S.push(k), (E = !0));
		}
		return Bs(S), E;
	}
	function $s(S) {
		let E = [];
		for (let [k, O] of Ht)
			if (O < S) {
				let B = h.fetchers.get(k);
				W(B, 'Expected fetcher: ' + k),
					B.state === 'loading' && (Wt(k), Ht.delete(k), E.push(k));
			}
		return Bs(E), E.length > 0;
	}
	function Ep(S, E) {
		let k = h.blockers.get(S) || Or;
		return I.get(S) !== E && I.set(S, E), k;
	}
	function Ws(S) {
		h.blockers.delete(S), I.delete(S);
	}
	function Pl(S, E) {
		let k = h.blockers.get(S) || Or;
		W(
			(k.state === 'unblocked' && E.state === 'blocked') ||
				(k.state === 'blocked' && E.state === 'blocked') ||
				(k.state === 'blocked' && E.state === 'proceeding') ||
				(k.state === 'blocked' && E.state === 'unblocked') ||
				(k.state === 'proceeding' && E.state === 'unblocked'),
			'Invalid blocker state transition: ' + k.state + ' -> ' + E.state
		);
		let O = new Map(h.blockers);
		O.set(S, E), ee({ blockers: O });
	}
	function Vs(S) {
		let { currentLocation: E, nextLocation: k, historyAction: O } = S;
		if (I.size === 0) return;
		I.size > 1 && mr(!1, 'A router only supports one blocker at a time');
		let B = Array.from(I.entries()),
			[z, F] = B[B.length - 1],
			D = h.blockers.get(z);
		if (
			!(D && D.state === 'proceeding') &&
			F({ currentLocation: E, nextLocation: k, historyAction: O })
		)
			return z;
	}
	function ro(S) {
		let E = [];
		return (
			_.forEach((k, O) => {
				(!S || S(O)) && (k.cancel(), E.push(O), _.delete(O));
			}),
			E
		);
	}
	function Cp(S, E, k) {
		if (((m = S), (x = E), (y = k || null), !w && h.navigation === Io)) {
			w = !0;
			let O = qs(h.location, h.matches);
			O != null && ee({ restoreScrollPosition: O });
		}
		return () => {
			(m = null), (x = null), (y = null);
		};
	}
	function Qs(S, E) {
		return (
			(y &&
				y(
					S,
					E.map((O) => Bv(O, h.loaderData))
				)) ||
			S.key
		);
	}
	function kp(S, E) {
		if (m && x) {
			let k = Qs(S, E);
			m[k] = x();
		}
	}
	function qs(S, E) {
		if (m) {
			let k = Qs(S, E),
				O = m[k];
			if (typeof O == 'number') return O;
		}
		return null;
	}
	function jp(S) {
		(i = {}), (a = La(S, l, void 0, i));
	}
	return (
		(g = {
			get basename() {
				return s;
			},
			get state() {
				return h;
			},
			get routes() {
				return o;
			},
			initialize: oe,
			subscribe: On,
			enableScrollRestoration: Cp,
			navigate: mt,
			fetch: wp,
			revalidate: An,
			createHref: (S) => e.history.createHref(S),
			encodeLocation: (S) => e.history.encodeLocation(S),
			getFetcher: Fs,
			deleteFetcher: no,
			dispose: fe,
			getBlocker: Ep,
			deleteBlocker: Ws,
			_internalFetchControllers: G,
			_internalActiveDeferreds: _,
			_internalSetRoutes: jp,
		}),
		g
	);
}
function Mv(e) {
	return (
		e != null &&
		(('formData' in e && e.formData != null) ||
			('body' in e && e.body !== void 0))
	);
}
function Ma(e, t, n, r, l, i, o) {
	let a, s;
	if (i != null && o !== 'path') {
		a = [];
		for (let d of t)
			if ((a.push(d), d.route.id === i)) {
				s = d;
				break;
			}
	} else (a = t), (s = t[t.length - 1]);
	let u = Os(
		l || '.',
		Ji(a).map((d) => d.pathnameBase),
		xr(e.pathname, n) || e.pathname,
		o === 'path'
	);
	return (
		l == null && ((u.search = e.search), (u.hash = e.hash)),
		(l == null || l === '' || l === '.') &&
			s &&
			s.route.index &&
			!Ds(u.search) &&
			(u.search = u.search ? u.search.replace(/^\?/, '?index&') : '?index'),
		r &&
			n !== '/' &&
			(u.pathname = u.pathname === '/' ? n : _t([n, u.pathname])),
		Pn(u)
	);
}
function oc(e, t, n, r) {
	if (!r || !Mv(r)) return { path: n };
	if (r.formMethod && !Uv(r.formMethod))
		return { path: n, error: Je(405, { method: r.formMethod }) };
	let l = () => ({ path: n, error: Je(400, { type: 'invalid-body' }) }),
		i = r.formMethod || 'get',
		o = e ? i.toUpperCase() : i.toLowerCase(),
		a = Kf(n);
	if (r.body !== void 0) {
		if (r.formEncType === 'text/plain') {
			if (!st(o)) return l();
			let m =
				typeof r.body == 'string'
					? r.body
					: r.body instanceof FormData || r.body instanceof URLSearchParams
					? Array.from(r.body.entries()).reduce((y, x) => {
							let [w, P] = x;
							return (
								'' +
								y +
								w +
								'=' +
								P +
								`
`
							);
					  }, '')
					: String(r.body);
			return {
				path: n,
				submission: {
					formMethod: o,
					formAction: a,
					formEncType: r.formEncType,
					formData: void 0,
					json: void 0,
					text: m,
				},
			};
		} else if (r.formEncType === 'application/json') {
			if (!st(o)) return l();
			try {
				let m = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
				return {
					path: n,
					submission: {
						formMethod: o,
						formAction: a,
						formEncType: r.formEncType,
						formData: void 0,
						json: m,
						text: void 0,
					},
				};
			} catch {
				return l();
			}
		}
	}
	W(
		typeof FormData == 'function',
		'FormData is not available in this environment'
	);
	let s, u;
	if (r.formData) (s = Oa(r.formData)), (u = r.formData);
	else if (r.body instanceof FormData) (s = Oa(r.body)), (u = r.body);
	else if (r.body instanceof URLSearchParams) (s = r.body), (u = cc(s));
	else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
	else
		try {
			(s = new URLSearchParams(r.body)), (u = cc(s));
		} catch {
			return l();
		}
	let d = {
		formMethod: o,
		formAction: a,
		formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
		formData: u,
		json: void 0,
		text: void 0,
	};
	if (st(d.formMethod)) return { path: n, submission: d };
	let p = Ft(n);
	return (
		t && p.search && Ds(p.search) && s.append('index', ''),
		(p.search = '?' + s),
		{ path: Pn(p), submission: d }
	);
}
function Ov(e, t) {
	let n = e;
	if (t) {
		let r = e.findIndex((l) => l.route.id === t);
		r >= 0 && (n = e.slice(0, r));
	}
	return n;
}
function ac(e, t, n, r, l, i, o, a, s, u, d, p, m, y) {
	let x = y ? Object.values(y)[0] : m ? Object.values(m)[0] : void 0,
		w = e.createURL(t.location),
		P = e.createURL(l),
		v = y ? Object.keys(y)[0] : void 0,
		g = Ov(n, v).filter((j, R) => {
			if (j.route.lazy) return !0;
			if (j.route.loader == null) return !1;
			if (Av(t.loaderData, t.matches[R], j) || o.some((Q) => Q === j.route.id))
				return !0;
			let N = t.matches[R],
				M = j;
			return sc(
				j,
				le(
					{
						currentUrl: w,
						currentParams: N.params,
						nextUrl: P,
						nextParams: M.params,
					},
					r,
					{
						actionResult: x,
						defaultShouldRevalidate:
							i ||
							w.pathname + w.search === P.pathname + P.search ||
							w.search !== P.search ||
							Yf(N, M),
					}
				)
			);
		}),
		h = [];
	return (
		s.forEach((j, R) => {
			if (!n.some((G) => G.route.id === j.routeId)) return;
			let N = Xn(d, j.path, p);
			if (!N) {
				h.push({
					key: R,
					routeId: j.routeId,
					path: j.path,
					matches: null,
					match: null,
					controller: null,
				});
				return;
			}
			let M = t.fetchers.get(R),
				Q = M && M.state !== 'idle' && M.data === void 0 && !u.has(R),
				U = Aa(N, j.path);
			(a.includes(R) ||
				Q ||
				sc(
					U,
					le(
						{
							currentUrl: w,
							currentParams: t.matches[t.matches.length - 1].params,
							nextUrl: P,
							nextParams: n[n.length - 1].params,
						},
						r,
						{ actionResult: x, defaultShouldRevalidate: i }
					)
				)) &&
				h.push({
					key: R,
					routeId: j.routeId,
					path: j.path,
					matches: N,
					match: U,
					controller: new AbortController(),
				});
		}),
		[g, h]
	);
}
function Av(e, t, n) {
	let r = !t || n.route.id !== t.route.id,
		l = e[n.route.id] === void 0;
	return r || l;
}
function Yf(e, t) {
	let n = e.route.path;
	return (
		e.pathname !== t.pathname ||
		(n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
	);
}
function sc(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == 'boolean') return n;
	}
	return t.defaultShouldRevalidate;
}
async function uc(e, t, n) {
	if (!e.lazy) return;
	let r = await e.lazy();
	if (!e.lazy) return;
	let l = n[e.id];
	W(l, 'No route found in manifest');
	let i = {};
	for (let o in r) {
		let s = l[o] !== void 0 && o !== 'hasErrorBoundary';
		mr(
			!s,
			'Route "' +
				l.id +
				'" has a static property "' +
				o +
				'" defined but its lazy function is also returning a value for this property. ' +
				('The lazy route property "' + o + '" will be ignored.')
		),
			!s && !rv.has(o) && (i[o] = r[o]);
	}
	Object.assign(l, i), Object.assign(l, le({}, t(l), { lazy: void 0 }));
}
async function Ar(e, t, n, r, l, i, o, a) {
	a === void 0 && (a = {});
	let s,
		u,
		d,
		p = (x) => {
			let w,
				P = new Promise((v, f) => (w = f));
			return (
				(d = () => w()),
				t.signal.addEventListener('abort', d),
				Promise.race([
					x({ request: t, params: n.params, context: a.requestContext }),
					P,
				])
			);
		};
	try {
		let x = n.route[e];
		if (n.route.lazy)
			if (x) u = (await Promise.all([p(x), uc(n.route, i, l)]))[0];
			else if ((await uc(n.route, i, l), (x = n.route[e]), x)) u = await p(x);
			else if (e === 'action') {
				let w = new URL(t.url),
					P = w.pathname + w.search;
				throw Je(405, { method: t.method, pathname: P, routeId: n.route.id });
			} else return { type: ve.data, data: void 0 };
		else if (x) u = await p(x);
		else {
			let w = new URL(t.url),
				P = w.pathname + w.search;
			throw Je(404, { pathname: P });
		}
		W(
			u !== void 0,
			'You defined ' +
				(e === 'action' ? 'an action' : 'a loader') +
				' for route ' +
				('"' +
					n.route.id +
					'" but didn\'t return anything from your `' +
					e +
					'` ') +
				'function. Please return a value or `null`.'
		);
	} catch (x) {
		(s = ve.error), (u = x);
	} finally {
		d && t.signal.removeEventListener('abort', d);
	}
	if (Fv(u)) {
		let x = u.status;
		if (Pv.has(x)) {
			let v = u.headers.get('Location');
			if (
				(W(
					v,
					'Redirects returned/thrown from loaders/actions must have a Location header'
				),
				!qf.test(v))
			)
				v = Ma(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, v);
			else if (!a.isStaticRequest) {
				let f = new URL(t.url),
					g = v.startsWith('//') ? new URL(f.protocol + v) : new URL(v),
					h = xr(g.pathname, o) != null;
				g.origin === f.origin && h && (v = g.pathname + g.search + g.hash);
			}
			if (a.isStaticRequest) throw (u.headers.set('Location', v), u);
			return {
				type: ve.redirect,
				status: x,
				location: v,
				revalidate: u.headers.get('X-Remix-Revalidate') !== null,
			};
		}
		if (a.isRouteRequest) throw { type: s || ve.data, response: u };
		let w,
			P = u.headers.get('Content-Type');
		return (
			P && /\bapplication\/json\b/.test(P)
				? (w = await u.json())
				: (w = await u.text()),
			s === ve.error
				? { type: s, error: new As(x, u.statusText, w), headers: u.headers }
				: { type: ve.data, data: w, statusCode: u.status, headers: u.headers }
		);
	}
	if (s === ve.error) return { type: s, error: u };
	if (zv(u)) {
		var m, y;
		return {
			type: ve.deferred,
			deferredData: u,
			statusCode: (m = u.init) == null ? void 0 : m.status,
			headers:
				((y = u.init) == null ? void 0 : y.headers) &&
				new Headers(u.init.headers),
		};
	}
	return { type: ve.data, data: u };
}
function Dr(e, t, n, r) {
	let l = e.createURL(Kf(t)).toString(),
		i = { signal: n };
	if (r && st(r.formMethod)) {
		let { formMethod: o, formEncType: a } = r;
		(i.method = o.toUpperCase()),
			a === 'application/json'
				? ((i.headers = new Headers({ 'Content-Type': a })),
				  (i.body = JSON.stringify(r.json)))
				: a === 'text/plain'
				? (i.body = r.text)
				: a === 'application/x-www-form-urlencoded' && r.formData
				? (i.body = Oa(r.formData))
				: (i.body = r.formData);
	}
	return new Request(l, i);
}
function Oa(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries())
		t.append(n, typeof r == 'string' ? r : r.name);
	return t;
}
function cc(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function Dv(e, t, n, r, l) {
	let i = {},
		o = null,
		a,
		s = !1,
		u = {};
	return (
		n.forEach((d, p) => {
			let m = t[p].route.id;
			if (
				(W(!lr(d), 'Cannot handle redirect results in processLoaderData'),
				Zr(d))
			) {
				let y = Jn(e, m),
					x = d.error;
				r && ((x = Object.values(r)[0]), (r = void 0)),
					(o = o || {}),
					o[y.route.id] == null && (o[y.route.id] = x),
					(i[m] = void 0),
					s || ((s = !0), (a = Vf(d.error) ? d.error.status : 500)),
					d.headers && (u[m] = d.headers);
			} else
				yn(d)
					? (l.set(m, d.deferredData), (i[m] = d.deferredData.data))
					: (i[m] = d.data),
					d.statusCode != null &&
						d.statusCode !== 200 &&
						!s &&
						(a = d.statusCode),
					d.headers && (u[m] = d.headers);
		}),
		r && ((o = r), (i[Object.keys(r)[0]] = void 0)),
		{ loaderData: i, errors: o, statusCode: a || 200, loaderHeaders: u }
	);
}
function dc(e, t, n, r, l, i, o, a) {
	let { loaderData: s, errors: u } = Dv(t, n, r, l, a);
	for (let d = 0; d < i.length; d++) {
		let { key: p, match: m, controller: y } = i[d];
		W(
			o !== void 0 && o[d] !== void 0,
			'Did not find corresponding fetcher result'
		);
		let x = o[d];
		if (!(y && y.signal.aborted))
			if (Zr(x)) {
				let w = Jn(e.matches, m == null ? void 0 : m.route.id);
				(u && u[w.route.id]) || (u = le({}, u, { [w.route.id]: x.error })),
					e.fetchers.delete(p);
			} else if (lr(x)) W(!1, 'Unhandled fetcher revalidation redirect');
			else if (yn(x)) W(!1, 'Unhandled fetcher deferred data');
			else {
				let w = ai(x.data);
				e.fetchers.set(p, w);
			}
	}
	return { loaderData: s, errors: u };
}
function fc(e, t, n, r) {
	let l = le({}, t);
	for (let i of n) {
		let o = i.route.id;
		if (
			(t.hasOwnProperty(o)
				? t[o] !== void 0 && (l[o] = t[o])
				: e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
			r && r.hasOwnProperty(o))
		)
			break;
	}
	return l;
}
function Jn(e, t) {
	return (
		(t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
			.reverse()
			.find((r) => r.route.hasErrorBoundary === !0) || e[0]
	);
}
function pc(e) {
	let t = e.find((n) => n.index || !n.path || n.path === '/') || {
		id: '__shim-error-route__',
	};
	return {
		matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
		route: t,
	};
}
function Je(e, t) {
	let { pathname: n, routeId: r, method: l, type: i } = t === void 0 ? {} : t,
		o = 'Unknown Server Error',
		a = 'Unknown @remix-run/router error';
	return (
		e === 400
			? ((o = 'Bad Request'),
			  l && n && r
					? (a =
							'You made a ' +
							l +
							' request to "' +
							n +
							'" but ' +
							('did not provide a `loader` for route "' + r + '", ') +
							'so there is no way to handle the request.')
					: i === 'defer-action'
					? (a = 'defer() is not supported in actions')
					: i === 'invalid-body' && (a = 'Unable to encode submission body'))
			: e === 403
			? ((o = 'Forbidden'),
			  (a = 'Route "' + r + '" does not match URL "' + n + '"'))
			: e === 404
			? ((o = 'Not Found'), (a = 'No route matches URL "' + n + '"'))
			: e === 405 &&
			  ((o = 'Method Not Allowed'),
			  l && n && r
					? (a =
							'You made a ' +
							l.toUpperCase() +
							' request to "' +
							n +
							'" but ' +
							('did not provide an `action` for route "' + r + '", ') +
							'so there is no way to handle the request.')
					: l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
		new As(e || 500, o, new Error(a), !0)
	);
}
function hc(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (lr(n)) return n;
	}
}
function Kf(e) {
	let t = typeof e == 'string' ? Ft(e) : e;
	return Pn(le({}, t, { hash: '' }));
}
function Iv(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search
		? !1
		: e.hash === ''
		? t.hash !== ''
		: e.hash === t.hash
		? !0
		: t.hash !== '';
}
function yn(e) {
	return e.type === ve.deferred;
}
function Zr(e) {
	return e.type === ve.error;
}
function lr(e) {
	return (e && e.type) === ve.redirect;
}
function zv(e) {
	let t = e;
	return (
		t &&
		typeof t == 'object' &&
		typeof t.data == 'object' &&
		typeof t.subscribe == 'function' &&
		typeof t.cancel == 'function' &&
		typeof t.resolveData == 'function'
	);
}
function Fv(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.headers == 'object' &&
		typeof e.body < 'u'
	);
}
function Uv(e) {
	return Tv.has(e.toLowerCase());
}
function st(e) {
	return kv.has(e.toLowerCase());
}
async function mc(e, t, n, r, l, i) {
	for (let o = 0; o < n.length; o++) {
		let a = n[o],
			s = t[o];
		if (!s) continue;
		let u = e.find((p) => p.route.id === s.route.id),
			d = u != null && !Yf(u, s) && (i && i[s.route.id]) !== void 0;
		if (yn(a) && (l || d)) {
			let p = r[o];
			W(p, 'Expected an AbortSignal for revalidating fetcher deferred result'),
				await Gf(a, p, l).then((m) => {
					m && (n[o] = m || n[o]);
				});
		}
	}
}
async function Gf(e, t, n) {
	if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
		if (n)
			try {
				return { type: ve.data, data: e.deferredData.unwrappedData };
			} catch (l) {
				return { type: ve.error, error: l };
			}
		return { type: ve.data, data: e.deferredData.data };
	}
}
function Ds(e) {
	return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Bv(e, t) {
	let { route: n, pathname: r, params: l } = e;
	return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Aa(e, t) {
	let n = typeof t == 'string' ? Ft(t).search : t.search;
	if (e[e.length - 1].route.index && Ds(n || '')) return e[e.length - 1];
	let r = Ji(e);
	return r[r.length - 1];
}
function vc(e) {
	let {
		formMethod: t,
		formAction: n,
		formEncType: r,
		text: l,
		formData: i,
		json: o,
	} = e;
	if (!(!t || !n || !r)) {
		if (l != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: void 0,
				text: l,
			};
		if (i != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: i,
				json: void 0,
				text: void 0,
			};
		if (o !== void 0)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: o,
				text: void 0,
			};
	}
}
function Kl(e, t) {
	return t
		? {
				state: 'loading',
				location: e,
				formMethod: t.formMethod,
				formAction: t.formAction,
				formEncType: t.formEncType,
				formData: t.formData,
				json: t.json,
				text: t.text,
		  }
		: {
				state: 'loading',
				location: e,
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
		  };
}
function Hv(e, t) {
	return {
		state: 'submitting',
		location: e,
		formMethod: t.formMethod,
		formAction: t.formAction,
		formEncType: t.formEncType,
		formData: t.formData,
		json: t.json,
		text: t.text,
	};
}
function Ir(e, t) {
	return e
		? {
				state: 'loading',
				formMethod: e.formMethod,
				formAction: e.formAction,
				formEncType: e.formEncType,
				formData: e.formData,
				json: e.json,
				text: e.text,
				data: t,
				' _hasFetcherDoneAnything ': !0,
		  }
		: {
				state: 'loading',
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
				data: t,
				' _hasFetcherDoneAnything ': !0,
		  };
}
function $v(e, t) {
	return {
		state: 'submitting',
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t ? t.data : void 0,
		' _hasFetcherDoneAnything ': !0,
	};
}
function ai(e) {
	return {
		state: 'idle',
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: e,
		' _hasFetcherDoneAnything ': !0,
	};
}
/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Oi() {
	return (
		(Oi = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Oi.apply(this, arguments)
	);
}
const Zi = C.createContext(null),
	Is = C.createContext(null),
	_n = C.createContext(null),
	bi = C.createContext(null),
	Ut = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	Xf = C.createContext(null);
function Wv(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	jl() || W(!1);
	let { basename: r, navigator: l } = C.useContext(_n),
		{ hash: i, pathname: o, search: a } = zs(e, { relative: n }),
		s = o;
	return (
		r !== '/' && (s = o === '/' ? r : _t([r, o])),
		l.createHref({ pathname: s, search: a, hash: i })
	);
}
function jl() {
	return C.useContext(bi) != null;
}
function fn() {
	return jl() || W(!1), C.useContext(bi).location;
}
function Jf(e) {
	C.useContext(_n).static || C.useLayoutEffect(e);
}
function Zf() {
	let { isDataRoute: e } = C.useContext(Ut);
	return e ? l0() : Vv();
}
function Vv() {
	jl() || W(!1);
	let e = C.useContext(Zi),
		{ basename: t, navigator: n } = C.useContext(_n),
		{ matches: r } = C.useContext(Ut),
		{ pathname: l } = fn(),
		i = JSON.stringify(Ji(r).map((s) => s.pathnameBase)),
		o = C.useRef(!1);
	return (
		Jf(() => {
			o.current = !0;
		}),
		C.useCallback(
			function (s, u) {
				if ((u === void 0 && (u = {}), !o.current)) return;
				if (typeof s == 'number') {
					n.go(s);
					return;
				}
				let d = Os(s, JSON.parse(i), l, u.relative === 'path');
				e == null &&
					t !== '/' &&
					(d.pathname = d.pathname === '/' ? t : _t([t, d.pathname])),
					(u.replace ? n.replace : n.push)(d, u.state, u);
			},
			[t, n, i, l, e]
		)
	);
}
const Qv = C.createContext(null);
function qv(e) {
	let t = C.useContext(Ut).outlet;
	return t && C.createElement(Qv.Provider, { value: e }, t);
}
function Yv() {
	let { matches: e } = C.useContext(Ut),
		t = e[e.length - 1];
	return t ? t.params : {};
}
function zs(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ matches: r } = C.useContext(Ut),
		{ pathname: l } = fn(),
		i = JSON.stringify(Ji(r).map((o) => o.pathnameBase));
	return C.useMemo(() => Os(e, JSON.parse(i), l, n === 'path'), [e, i, l, n]);
}
function Kv(e, t, n) {
	jl() || W(!1);
	let { navigator: r } = C.useContext(_n),
		{ matches: l } = C.useContext(Ut),
		i = l[l.length - 1],
		o = i ? i.params : {};
	i && i.pathname;
	let a = i ? i.pathnameBase : '/';
	i && i.route;
	let s = fn(),
		u;
	if (t) {
		var d;
		let w = typeof t == 'string' ? Ft(t) : t;
		a === '/' || ((d = w.pathname) != null && d.startsWith(a)) || W(!1),
			(u = w);
	} else u = s;
	let p = u.pathname || '/',
		m = a === '/' ? p : p.slice(a.length) || '/',
		y = Xn(e, { pathname: m }),
		x = bv(
			y &&
				y.map((w) =>
					Object.assign({}, w, {
						params: Object.assign({}, o, w.params),
						pathname: _t([
							a,
							r.encodeLocation
								? r.encodeLocation(w.pathname).pathname
								: w.pathname,
						]),
						pathnameBase:
							w.pathnameBase === '/'
								? a
								: _t([
										a,
										r.encodeLocation
											? r.encodeLocation(w.pathnameBase).pathname
											: w.pathnameBase,
								  ]),
					})
				),
			l,
			n
		);
	return t && x
		? C.createElement(
				bi.Provider,
				{
					value: {
						location: Oi(
							{
								pathname: '/',
								search: '',
								hash: '',
								state: null,
								key: 'default',
							},
							u
						),
						navigationType: pe.Pop,
					},
				},
				x
		  )
		: x;
}
function Gv() {
	let e = r0(),
		t = Vf(e)
			? e.status + ' ' + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
		i = null;
	return C.createElement(
		C.Fragment,
		null,
		C.createElement('h2', null, 'Unexpected Application Error!'),
		C.createElement('h3', { style: { fontStyle: 'italic' } }, t),
		n ? C.createElement('pre', { style: l }, n) : null,
		i
	);
}
const Xv = C.createElement(Gv, null);
class Jv extends C.Component {
	constructor(t) {
		super(t),
			(this.state = {
				location: t.location,
				revalidation: t.revalidation,
				error: t.error,
			});
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location ||
			(n.revalidation !== 'idle' && t.revalidation === 'idle')
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: {
					error: t.error || n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
			  };
	}
	componentDidCatch(t, n) {
		console.error(
			'React Router caught the following error during render',
			t,
			n
		);
	}
	render() {
		return this.state.error
			? C.createElement(
					Ut.Provider,
					{ value: this.props.routeContext },
					C.createElement(Xf.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function Zv(e) {
	let { routeContext: t, match: n, children: r } = e,
		l = C.useContext(Zi);
	return (
		l &&
			l.static &&
			l.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(l.staticContext._deepestRenderedBoundaryId = n.route.id),
		C.createElement(Ut.Provider, { value: t }, r)
	);
}
function bv(e, t, n) {
	var r;
	if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
		var l;
		if ((l = n) != null && l.errors) e = n.matches;
		else return null;
	}
	let i = e,
		o = (r = n) == null ? void 0 : r.errors;
	if (o != null) {
		let a = i.findIndex(
			(s) => s.route.id && (o == null ? void 0 : o[s.route.id])
		);
		a >= 0 || W(!1), (i = i.slice(0, Math.min(i.length, a + 1)));
	}
	return i.reduceRight((a, s, u) => {
		let d = s.route.id ? (o == null ? void 0 : o[s.route.id]) : null,
			p = null;
		n && (p = s.route.errorElement || Xv);
		let m = t.concat(i.slice(0, u + 1)),
			y = () => {
				let x;
				return (
					d
						? (x = p)
						: s.route.Component
						? (x = C.createElement(s.route.Component, null))
						: s.route.element
						? (x = s.route.element)
						: (x = a),
					C.createElement(Zv, {
						match: s,
						routeContext: { outlet: a, matches: m, isDataRoute: n != null },
						children: x,
					})
				);
			};
		return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0)
			? C.createElement(Jv, {
					location: n.location,
					revalidation: n.revalidation,
					component: p,
					error: d,
					children: y(),
					routeContext: { outlet: null, matches: m, isDataRoute: !0 },
			  })
			: y();
	}, null);
}
var Da;
(function (e) {
	(e.UseBlocker = 'useBlocker'),
		(e.UseRevalidator = 'useRevalidator'),
		(e.UseNavigateStable = 'useNavigate');
})(Da || (Da = {}));
var gl;
(function (e) {
	(e.UseBlocker = 'useBlocker'),
		(e.UseLoaderData = 'useLoaderData'),
		(e.UseActionData = 'useActionData'),
		(e.UseRouteError = 'useRouteError'),
		(e.UseNavigation = 'useNavigation'),
		(e.UseRouteLoaderData = 'useRouteLoaderData'),
		(e.UseMatches = 'useMatches'),
		(e.UseRevalidator = 'useRevalidator'),
		(e.UseNavigateStable = 'useNavigate'),
		(e.UseRouteId = 'useRouteId');
})(gl || (gl = {}));
function e0(e) {
	let t = C.useContext(Zi);
	return t || W(!1), t;
}
function t0(e) {
	let t = C.useContext(Is);
	return t || W(!1), t;
}
function n0(e) {
	let t = C.useContext(Ut);
	return t || W(!1), t;
}
function bf(e) {
	let t = n0(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || W(!1), n.route.id;
}
function r0() {
	var e;
	let t = C.useContext(Xf),
		n = t0(gl.UseRouteError),
		r = bf(gl.UseRouteError);
	return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function l0() {
	let { router: e } = e0(Da.UseNavigateStable),
		t = bf(gl.UseNavigateStable),
		n = C.useRef(!1);
	return (
		Jf(() => {
			n.current = !0;
		}),
		C.useCallback(
			function (l, i) {
				i === void 0 && (i = {}),
					n.current &&
						(typeof l == 'number'
							? e.navigate(l)
							: e.navigate(l, Oi({ fromRouteId: t }, i)));
			},
			[e, t]
		)
	);
}
const i0 = 'startTransition',
	gc = Wp[i0];
function o0(e) {
	let { fallbackElement: t, router: n, future: r } = e,
		[l, i] = C.useState(n.state),
		{ v7_startTransition: o } = r || {},
		a = C.useCallback(
			(p) => {
				o && gc ? gc(() => i(p)) : i(p);
			},
			[i, o]
		);
	C.useLayoutEffect(() => n.subscribe(a), [n, a]);
	let s = C.useMemo(
			() => ({
				createHref: n.createHref,
				encodeLocation: n.encodeLocation,
				go: (p) => n.navigate(p),
				push: (p, m, y) =>
					n.navigate(p, {
						state: m,
						preventScrollReset: y == null ? void 0 : y.preventScrollReset,
					}),
				replace: (p, m, y) =>
					n.navigate(p, {
						replace: !0,
						state: m,
						preventScrollReset: y == null ? void 0 : y.preventScrollReset,
					}),
			}),
			[n]
		),
		u = n.basename || '/',
		d = C.useMemo(
			() => ({ router: n, navigator: s, static: !1, basename: u }),
			[n, s, u]
		);
	return C.createElement(
		C.Fragment,
		null,
		C.createElement(
			Zi.Provider,
			{ value: d },
			C.createElement(
				Is.Provider,
				{ value: l },
				C.createElement(
					s0,
					{
						basename: u,
						location: l.location,
						navigationType: l.historyAction,
						navigator: s,
					},
					l.initialized
						? C.createElement(a0, { routes: n.routes, state: l })
						: t
				)
			)
		),
		null
	);
}
function a0(e) {
	let { routes: t, state: n } = e;
	return Kv(t, void 0, n);
}
function ep(e) {
	return qv(e.context);
}
function s0(e) {
	let {
		basename: t = '/',
		children: n = null,
		location: r,
		navigationType: l = pe.Pop,
		navigator: i,
		static: o = !1,
	} = e;
	jl() && W(!1);
	let a = t.replace(/^\/*/, '/'),
		s = C.useMemo(() => ({ basename: a, navigator: i, static: o }), [a, i, o]);
	typeof r == 'string' && (r = Ft(r));
	let {
			pathname: u = '/',
			search: d = '',
			hash: p = '',
			state: m = null,
			key: y = 'default',
		} = r,
		x = C.useMemo(() => {
			let w = xr(u, a);
			return w == null
				? null
				: {
						location: { pathname: w, search: d, hash: p, state: m, key: y },
						navigationType: l,
				  };
		}, [a, u, d, p, m, y, l]);
	return x == null
		? null
		: C.createElement(
				_n.Provider,
				{ value: s },
				C.createElement(bi.Provider, { children: n, value: x })
		  );
}
var yc;
(function (e) {
	(e[(e.pending = 0)] = 'pending'),
		(e[(e.success = 1)] = 'success'),
		(e[(e.error = 2)] = 'error');
})(yc || (yc = {}));
new Promise(() => {});
function u0(e) {
	let t = {
		hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
	};
	return (
		e.Component &&
			Object.assign(t, {
				element: C.createElement(e.Component),
				Component: void 0,
			}),
		e.ErrorBoundary &&
			Object.assign(t, {
				errorElement: C.createElement(e.ErrorBoundary),
				ErrorBoundary: void 0,
			}),
		t
	);
}
/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vr() {
	return (
		(vr = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		vr.apply(this, arguments)
	);
}
function tp(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		l,
		i;
	for (i = 0; i < r.length; i++)
		(l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
	return n;
}
function c0(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function d0(e, t) {
	return e.button === 0 && (!t || t === '_self') && !c0(e);
}
const f0 = [
		'onClick',
		'relative',
		'reloadDocument',
		'replace',
		'state',
		'target',
		'to',
		'preventScrollReset',
	],
	p0 = [
		'aria-current',
		'caseSensitive',
		'className',
		'end',
		'style',
		'to',
		'children',
	];
function h0(e, t) {
	return Lv({
		basename: t == null ? void 0 : t.basename,
		future: vr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
		history: ev({ window: t == null ? void 0 : t.window }),
		hydrationData: (t == null ? void 0 : t.hydrationData) || m0(),
		routes: e,
		mapRouteProperties: u0,
	}).initialize();
}
function m0() {
	var e;
	let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
	return t && t.errors && (t = vr({}, t, { errors: v0(t.errors) })), t;
}
function v0(e) {
	if (!e) return null;
	let t = Object.entries(e),
		n = {};
	for (let [r, l] of t)
		if (l && l.__type === 'RouteErrorResponse')
			n[r] = new As(l.status, l.statusText, l.data, l.internal === !0);
		else if (l && l.__type === 'Error') {
			let i = new Error(l.message);
			(i.stack = ''), (n[r] = i);
		} else n[r] = l;
	return n;
}
const g0 =
		typeof window < 'u' &&
		typeof window.document < 'u' &&
		typeof window.document.createElement < 'u',
	y0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	w0 = C.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: l,
				reloadDocument: i,
				replace: o,
				state: a,
				target: s,
				to: u,
				preventScrollReset: d,
			} = t,
			p = tp(t, f0),
			{ basename: m } = C.useContext(_n),
			y,
			x = !1;
		if (typeof u == 'string' && y0.test(u) && ((y = u), g0))
			try {
				let f = new URL(window.location.href),
					g = u.startsWith('//') ? new URL(f.protocol + u) : new URL(u),
					h = xr(g.pathname, m);
				g.origin === f.origin && h != null
					? (u = h + g.search + g.hash)
					: (x = !0);
			} catch {}
		let w = Wv(u, { relative: l }),
			P = x0(u, {
				replace: o,
				state: a,
				target: s,
				preventScrollReset: d,
				relative: l,
			});
		function v(f) {
			r && r(f), f.defaultPrevented || P(f);
		}
		return C.createElement(
			'a',
			vr({}, p, { href: y || w, onClick: x || i ? r : v, ref: n, target: s })
		);
	}),
	me = C.forwardRef(function (t, n) {
		let {
				'aria-current': r = 'page',
				caseSensitive: l = !1,
				className: i = '',
				end: o = !1,
				style: a,
				to: s,
				children: u,
			} = t,
			d = tp(t, p0),
			p = zs(s, { relative: d.relative }),
			m = fn(),
			y = C.useContext(Is),
			{ navigator: x } = C.useContext(_n),
			w = x.encodeLocation ? x.encodeLocation(p).pathname : p.pathname,
			P = m.pathname,
			v =
				y && y.navigation && y.navigation.location
					? y.navigation.location.pathname
					: null;
		l ||
			((P = P.toLowerCase()),
			(v = v ? v.toLowerCase() : null),
			(w = w.toLowerCase()));
		let f = P === w || (!o && P.startsWith(w) && P.charAt(w.length) === '/'),
			g =
				v != null &&
				(v === w || (!o && v.startsWith(w) && v.charAt(w.length) === '/')),
			h = f ? r : void 0,
			j;
		typeof i == 'function'
			? (j = i({ isActive: f, isPending: g }))
			: (j = [i, f ? 'active' : null, g ? 'pending' : null]
					.filter(Boolean)
					.join(' '));
		let R = typeof a == 'function' ? a({ isActive: f, isPending: g }) : a;
		return C.createElement(
			w0,
			vr({}, d, { 'aria-current': h, className: j, ref: n, style: R, to: s }),
			typeof u == 'function' ? u({ isActive: f, isPending: g }) : u
		);
	});
var wc;
(function (e) {
	(e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmit = 'useSubmit'),
		(e.UseSubmitFetcher = 'useSubmitFetcher'),
		(e.UseFetcher = 'useFetcher');
})(wc || (wc = {}));
var xc;
(function (e) {
	(e.UseFetchers = 'useFetchers'),
		(e.UseScrollRestoration = 'useScrollRestoration');
})(xc || (xc = {}));
function x0(e, t) {
	let {
			target: n,
			replace: r,
			state: l,
			preventScrollReset: i,
			relative: o,
		} = t === void 0 ? {} : t,
		a = Zf(),
		s = fn(),
		u = zs(e, { relative: o });
	return C.useCallback(
		(d) => {
			if (d0(d, n)) {
				d.preventDefault();
				let p = r !== void 0 ? r : Pn(s) === Pn(u);
				a(e, { replace: p, state: l, preventScrollReset: i, relative: o });
			}
		},
		[s, a, u, r, l, n, e, i, o]
	);
}
const ir = () => {
		let e, t, n, r;
		(e = document.querySelector('.menu')),
			(t = document.querySelector('.close')),
			(n = document.querySelector('#nav-list')),
			(r = document.querySelector('main')),
			n.classList.toggle('open'),
			e.classList.toggle('hidden'),
			t.classList.toggle('hidden'),
			r.classList.toggle('blur');
	},
	S0 = () => (
		C.useEffect(() => {
			let e = document.querySelectorAll('#nav-list a');
			return (
				e.forEach((t) => {
					t.addEventListener('click', ir);
				}),
				() => {
					e.forEach((t) => {
						t.removeEventListener('click', ir);
					});
				}
			);
		}),
		c.jsxs('header', {
			children: [
				c.jsx('div', {
					id: 'logo',
					children: c.jsx('img', { src: '/images/logo.png', alt: '' }),
				}),
				c.jsxs('nav', {
					children: [
						c.jsxs('div', {
							className: 'visible-mobile',
							id: 'nav-icons',
							'aria-hidden': 'true',
							'aria-label': 'Menu icons',
							onClick: ir,
							children: [
								c.jsx('span', {
									className: 'menu material-symbols-outlined',
									children: 'menu',
								}),
								c.jsx('span', {
									className: 'close material-symbols-outlined hidden',
									children: 'close',
								}),
							],
						}),
						c.jsx('div', {
							id: 'nav-list',
							children: c.jsxs('ul', {
								children: [
									c.jsx('li', {
										children: c.jsxs(me, {
											to: '/',
											children: [
												c.jsx('span', {
													className: 'material-symbols-outlined',
													children: 'home',
												}),
												' Home',
											],
										}),
									}),
									c.jsx('li', {
										children: c.jsxs(me, {
											to: '/about',
											children: [
												c.jsx('span', {
													className: 'material-symbols-outlined',
													children: 'info',
												}),
												' About',
											],
										}),
									}),
									c.jsx('li', {
										children: c.jsxs(me, {
											to: '/contact',
											children: [
												c.jsx('span', {
													className: 'material-symbols-outlined',
													children: 'phone',
												}),
												' Contact',
											],
										}),
									}),
									c.jsx('li', {
										children: c.jsxs(me, {
											to: '/shop',
											children: [
												c.jsx('span', {
													className: 'material-symbols-outlined',
													children: 'store',
												}),
												' Shop',
											],
										}),
									}),
								],
							}),
						}),
					],
				}),
			],
		})
	);
var np = { exports: {} },
	E0 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
	C0 = E0,
	k0 = C0;
function rp() {}
function lp() {}
lp.resetWarningCache = rp;
var j0 = function () {
	function e(r, l, i, o, a, s) {
		if (s !== k0) {
			var u = new Error(
				'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
			);
			throw ((u.name = 'Invariant Violation'), u);
		}
	}
	e.isRequired = e;
	function t() {
		return e;
	}
	var n = {
		array: e,
		bigint: e,
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
		checkPropTypes: lp,
		resetWarningCache: rp,
	};
	return (n.PropTypes = n), n;
};
np.exports = j0();
var T0 = np.exports;
const ne = wl(T0);
function P0(e) {
	return e && typeof e == 'object' && 'default' in e ? e.default : e;
}
var ip = C,
	N0 = P0(ip);
function Sc(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0,
			  })
			: (e[t] = n),
		e
	);
}
function R0(e, t) {
	(e.prototype = Object.create(t.prototype)),
		(e.prototype.constructor = e),
		(e.__proto__ = t);
}
var _0 = !!(
	typeof window < 'u' &&
	window.document &&
	window.document.createElement
);
function L0(e, t, n) {
	if (typeof e != 'function')
		throw new Error('Expected reducePropsToState to be a function.');
	if (typeof t != 'function')
		throw new Error('Expected handleStateChangeOnClient to be a function.');
	if (typeof n < 'u' && typeof n != 'function')
		throw new Error(
			'Expected mapStateOnServer to either be undefined or a function.'
		);
	function r(l) {
		return l.displayName || l.name || 'Component';
	}
	return function (i) {
		if (typeof i != 'function')
			throw new Error('Expected WrappedComponent to be a React component.');
		var o = [],
			a;
		function s() {
			(a = e(
				o.map(function (d) {
					return d.props;
				})
			)),
				u.canUseDOM ? t(a) : n && (a = n(a));
		}
		var u = (function (d) {
			R0(p, d);
			function p() {
				return d.apply(this, arguments) || this;
			}
			(p.peek = function () {
				return a;
			}),
				(p.rewind = function () {
					if (p.canUseDOM)
						throw new Error(
							'You may only call rewind() on the server. Call peek() to read the current state.'
						);
					var x = a;
					return (a = void 0), (o = []), x;
				});
			var m = p.prototype;
			return (
				(m.UNSAFE_componentWillMount = function () {
					o.push(this), s();
				}),
				(m.componentDidUpdate = function () {
					s();
				}),
				(m.componentWillUnmount = function () {
					var x = o.indexOf(this);
					o.splice(x, 1), s();
				}),
				(m.render = function () {
					return N0.createElement(i, this.props);
				}),
				p
			);
		})(ip.PureComponent);
		return (
			Sc(u, 'displayName', 'SideEffect(' + r(i) + ')'),
			Sc(u, 'canUseDOM', _0),
			u
		);
	};
}
var M0 = L0;
const O0 = wl(M0);
var A0 = typeof Element < 'u',
	D0 = typeof Map == 'function',
	I0 = typeof Set == 'function',
	z0 = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
function si(e, t) {
	if (e === t) return !0;
	if (e && t && typeof e == 'object' && typeof t == 'object') {
		if (e.constructor !== t.constructor) return !1;
		var n, r, l;
		if (Array.isArray(e)) {
			if (((n = e.length), n != t.length)) return !1;
			for (r = n; r-- !== 0; ) if (!si(e[r], t[r])) return !1;
			return !0;
		}
		var i;
		if (D0 && e instanceof Map && t instanceof Map) {
			if (e.size !== t.size) return !1;
			for (i = e.entries(); !(r = i.next()).done; )
				if (!t.has(r.value[0])) return !1;
			for (i = e.entries(); !(r = i.next()).done; )
				if (!si(r.value[1], t.get(r.value[0]))) return !1;
			return !0;
		}
		if (I0 && e instanceof Set && t instanceof Set) {
			if (e.size !== t.size) return !1;
			for (i = e.entries(); !(r = i.next()).done; )
				if (!t.has(r.value[0])) return !1;
			return !0;
		}
		if (z0 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
			if (((n = e.length), n != t.length)) return !1;
			for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
			return !0;
		}
		if (e.constructor === RegExp)
			return e.source === t.source && e.flags === t.flags;
		if (
			e.valueOf !== Object.prototype.valueOf &&
			typeof e.valueOf == 'function' &&
			typeof t.valueOf == 'function'
		)
			return e.valueOf() === t.valueOf();
		if (
			e.toString !== Object.prototype.toString &&
			typeof e.toString == 'function' &&
			typeof t.toString == 'function'
		)
			return e.toString() === t.toString();
		if (((l = Object.keys(e)), (n = l.length), n !== Object.keys(t).length))
			return !1;
		for (r = n; r-- !== 0; )
			if (!Object.prototype.hasOwnProperty.call(t, l[r])) return !1;
		if (A0 && e instanceof Element) return !1;
		for (r = n; r-- !== 0; )
			if (
				!(
					(l[r] === '_owner' || l[r] === '__v' || l[r] === '__o') &&
					e.$$typeof
				) &&
				!si(e[l[r]], t[l[r]])
			)
				return !1;
		return !0;
	}
	return e !== e && t !== t;
}
var F0 = function (t, n) {
	try {
		return si(t, n);
	} catch (r) {
		if ((r.message || '').match(/stack|recursion/i))
			return console.warn('react-fast-compare cannot handle circular refs'), !1;
		throw r;
	}
};
const U0 = wl(F0);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var Ec = Object.getOwnPropertySymbols,
	B0 = Object.prototype.hasOwnProperty,
	H0 = Object.prototype.propertyIsEnumerable;
function $0(e) {
	if (e == null)
		throw new TypeError(
			'Object.assign cannot be called with null or undefined'
		);
	return Object(e);
}
function W0() {
	try {
		if (!Object.assign) return !1;
		var e = new String('abc');
		if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1;
		for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
		var r = Object.getOwnPropertyNames(t).map(function (i) {
			return t[i];
		});
		if (r.join('') !== '0123456789') return !1;
		var l = {};
		return (
			'abcdefghijklmnopqrst'.split('').forEach(function (i) {
				l[i] = i;
			}),
			Object.keys(Object.assign({}, l)).join('') === 'abcdefghijklmnopqrst'
		);
	} catch {
		return !1;
	}
}
var V0 = W0()
	? Object.assign
	: function (e, t) {
			for (var n, r = $0(e), l, i = 1; i < arguments.length; i++) {
				n = Object(arguments[i]);
				for (var o in n) B0.call(n, o) && (r[o] = n[o]);
				if (Ec) {
					l = Ec(n);
					for (var a = 0; a < l.length; a++)
						H0.call(n, l[a]) && (r[l[a]] = n[l[a]]);
				}
			}
			return r;
	  };
const Q0 = wl(V0);
var Sn = {
		BODY: 'bodyAttributes',
		HTML: 'htmlAttributes',
		TITLE: 'titleAttributes',
	},
	H = {
		BASE: 'base',
		BODY: 'body',
		HEAD: 'head',
		HTML: 'html',
		LINK: 'link',
		META: 'meta',
		NOSCRIPT: 'noscript',
		SCRIPT: 'script',
		STYLE: 'style',
		TITLE: 'title',
	};
Object.keys(H).map(function (e) {
	return H[e];
});
var re = {
		CHARSET: 'charset',
		CSS_TEXT: 'cssText',
		HREF: 'href',
		HTTPEQUIV: 'http-equiv',
		INNER_HTML: 'innerHTML',
		ITEM_PROP: 'itemprop',
		NAME: 'name',
		PROPERTY: 'property',
		REL: 'rel',
		SRC: 'src',
		TARGET: 'target',
	},
	Ai = {
		accesskey: 'accessKey',
		charset: 'charSet',
		class: 'className',
		contenteditable: 'contentEditable',
		contextmenu: 'contextMenu',
		'http-equiv': 'httpEquiv',
		itemprop: 'itemProp',
		tabindex: 'tabIndex',
	},
	yl = {
		DEFAULT_TITLE: 'defaultTitle',
		DEFER: 'defer',
		ENCODE_SPECIAL_CHARACTERS: 'encodeSpecialCharacters',
		ON_CHANGE_CLIENT_STATE: 'onChangeClientState',
		TITLE_TEMPLATE: 'titleTemplate',
	},
	q0 = Object.keys(Ai).reduce(function (e, t) {
		return (e[Ai[t]] = t), e;
	}, {}),
	Y0 = [H.NOSCRIPT, H.SCRIPT, H.STYLE],
	ct = 'data-react-helmet',
	K0 =
		typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
			? function (e) {
					return typeof e;
			  }
			: function (e) {
					return e &&
						typeof Symbol == 'function' &&
						e.constructor === Symbol &&
						e !== Symbol.prototype
						? 'symbol'
						: typeof e;
			  },
	G0 = function (e, t) {
		if (!(e instanceof t))
			throw new TypeError('Cannot call a class as a function');
	},
	X0 = (function () {
		function e(t, n) {
			for (var r = 0; r < n.length; r++) {
				var l = n[r];
				(l.enumerable = l.enumerable || !1),
					(l.configurable = !0),
					'value' in l && (l.writable = !0),
					Object.defineProperty(t, l.key, l);
			}
		}
		return function (t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	})(),
	Ie =
		Object.assign ||
		function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n)
					Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
			}
			return e;
		},
	J0 = function (e, t) {
		if (typeof t != 'function' && t !== null)
			throw new TypeError(
				'Super expression must either be null or a function, not ' + typeof t
			);
		(e.prototype = Object.create(t && t.prototype, {
			constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
		})),
			t &&
				(Object.setPrototypeOf
					? Object.setPrototypeOf(e, t)
					: (e.__proto__ = t));
	},
	Cc = function (e, t) {
		var n = {};
		for (var r in e)
			t.indexOf(r) >= 0 ||
				(Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
		return n;
	},
	Z0 = function (e, t) {
		if (!e)
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		return t && (typeof t == 'object' || typeof t == 'function') ? t : e;
	},
	Ia = function (t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
		return n === !1
			? String(t)
			: String(t)
					.replace(/&/g, '&amp;')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;')
					.replace(/"/g, '&quot;')
					.replace(/'/g, '&#x27;');
	},
	b0 = function (t) {
		var n = or(t, H.TITLE),
			r = or(t, yl.TITLE_TEMPLATE);
		if (r && n)
			return r.replace(/%s/g, function () {
				return Array.isArray(n) ? n.join('') : n;
			});
		var l = or(t, yl.DEFAULT_TITLE);
		return n || l || void 0;
	},
	eg = function (t) {
		return or(t, yl.ON_CHANGE_CLIENT_STATE) || function () {};
	},
	zo = function (t, n) {
		return n
			.filter(function (r) {
				return typeof r[t] < 'u';
			})
			.map(function (r) {
				return r[t];
			})
			.reduce(function (r, l) {
				return Ie({}, r, l);
			}, {});
	},
	tg = function (t, n) {
		return n
			.filter(function (r) {
				return typeof r[H.BASE] < 'u';
			})
			.map(function (r) {
				return r[H.BASE];
			})
			.reverse()
			.reduce(function (r, l) {
				if (!r.length)
					for (var i = Object.keys(l), o = 0; o < i.length; o++) {
						var a = i[o],
							s = a.toLowerCase();
						if (t.indexOf(s) !== -1 && l[s]) return r.concat(l);
					}
				return r;
			}, []);
	},
	zr = function (t, n, r) {
		var l = {};
		return r
			.filter(function (i) {
				return Array.isArray(i[t])
					? !0
					: (typeof i[t] < 'u' &&
							ig(
								'Helmet: ' +
									t +
									' should be of type "Array". Instead found type "' +
									K0(i[t]) +
									'"'
							),
					  !1);
			})
			.map(function (i) {
				return i[t];
			})
			.reverse()
			.reduce(function (i, o) {
				var a = {};
				o.filter(function (m) {
					for (var y = void 0, x = Object.keys(m), w = 0; w < x.length; w++) {
						var P = x[w],
							v = P.toLowerCase();
						n.indexOf(v) !== -1 &&
							!(y === re.REL && m[y].toLowerCase() === 'canonical') &&
							!(v === re.REL && m[v].toLowerCase() === 'stylesheet') &&
							(y = v),
							n.indexOf(P) !== -1 &&
								(P === re.INNER_HTML ||
									P === re.CSS_TEXT ||
									P === re.ITEM_PROP) &&
								(y = P);
					}
					if (!y || !m[y]) return !1;
					var f = m[y].toLowerCase();
					return (
						l[y] || (l[y] = {}),
						a[y] || (a[y] = {}),
						l[y][f] ? !1 : ((a[y][f] = !0), !0)
					);
				})
					.reverse()
					.forEach(function (m) {
						return i.push(m);
					});
				for (var s = Object.keys(a), u = 0; u < s.length; u++) {
					var d = s[u],
						p = Q0({}, l[d], a[d]);
					l[d] = p;
				}
				return i;
			}, [])
			.reverse();
	},
	or = function (t, n) {
		for (var r = t.length - 1; r >= 0; r--) {
			var l = t[r];
			if (l.hasOwnProperty(n)) return l[n];
		}
		return null;
	},
	ng = function (t) {
		return {
			baseTag: tg([re.HREF, re.TARGET], t),
			bodyAttributes: zo(Sn.BODY, t),
			defer: or(t, yl.DEFER),
			encode: or(t, yl.ENCODE_SPECIAL_CHARACTERS),
			htmlAttributes: zo(Sn.HTML, t),
			linkTags: zr(H.LINK, [re.REL, re.HREF], t),
			metaTags: zr(
				H.META,
				[re.NAME, re.CHARSET, re.HTTPEQUIV, re.PROPERTY, re.ITEM_PROP],
				t
			),
			noscriptTags: zr(H.NOSCRIPT, [re.INNER_HTML], t),
			onChangeClientState: eg(t),
			scriptTags: zr(H.SCRIPT, [re.SRC, re.INNER_HTML], t),
			styleTags: zr(H.STYLE, [re.CSS_TEXT], t),
			title: b0(t),
			titleAttributes: zo(Sn.TITLE, t),
		};
	},
	za = (function () {
		var e = Date.now();
		return function (t) {
			var n = Date.now();
			n - e > 16
				? ((e = n), t(n))
				: setTimeout(function () {
						za(t);
				  }, 0);
		};
	})(),
	kc = function (t) {
		return clearTimeout(t);
	},
	rg =
		typeof window < 'u'
			? (window.requestAnimationFrame &&
					window.requestAnimationFrame.bind(window)) ||
			  window.webkitRequestAnimationFrame ||
			  window.mozRequestAnimationFrame ||
			  za
			: global.requestAnimationFrame || za,
	lg =
		typeof window < 'u'
			? window.cancelAnimationFrame ||
			  window.webkitCancelAnimationFrame ||
			  window.mozCancelAnimationFrame ||
			  kc
			: global.cancelAnimationFrame || kc,
	ig = function (t) {
		return console && typeof console.warn == 'function' && console.warn(t);
	},
	Fr = null,
	og = function (t) {
		Fr && lg(Fr),
			t.defer
				? (Fr = rg(function () {
						jc(t, function () {
							Fr = null;
						});
				  }))
				: (jc(t), (Fr = null));
	},
	jc = function (t, n) {
		var r = t.baseTag,
			l = t.bodyAttributes,
			i = t.htmlAttributes,
			o = t.linkTags,
			a = t.metaTags,
			s = t.noscriptTags,
			u = t.onChangeClientState,
			d = t.scriptTags,
			p = t.styleTags,
			m = t.title,
			y = t.titleAttributes;
		Fa(H.BODY, l), Fa(H.HTML, i), ag(m, y);
		var x = {
				baseTag: zn(H.BASE, r),
				linkTags: zn(H.LINK, o),
				metaTags: zn(H.META, a),
				noscriptTags: zn(H.NOSCRIPT, s),
				scriptTags: zn(H.SCRIPT, d),
				styleTags: zn(H.STYLE, p),
			},
			w = {},
			P = {};
		Object.keys(x).forEach(function (v) {
			var f = x[v],
				g = f.newTags,
				h = f.oldTags;
			g.length && (w[v] = g), h.length && (P[v] = x[v].oldTags);
		}),
			n && n(),
			u(t, w, P);
	},
	op = function (t) {
		return Array.isArray(t) ? t.join('') : t;
	},
	ag = function (t, n) {
		typeof t < 'u' && document.title !== t && (document.title = op(t)),
			Fa(H.TITLE, n);
	},
	Fa = function (t, n) {
		var r = document.getElementsByTagName(t)[0];
		if (r) {
			for (
				var l = r.getAttribute(ct),
					i = l ? l.split(',') : [],
					o = [].concat(i),
					a = Object.keys(n),
					s = 0;
				s < a.length;
				s++
			) {
				var u = a[s],
					d = n[u] || '';
				r.getAttribute(u) !== d && r.setAttribute(u, d),
					i.indexOf(u) === -1 && i.push(u);
				var p = o.indexOf(u);
				p !== -1 && o.splice(p, 1);
			}
			for (var m = o.length - 1; m >= 0; m--) r.removeAttribute(o[m]);
			i.length === o.length
				? r.removeAttribute(ct)
				: r.getAttribute(ct) !== a.join(',') && r.setAttribute(ct, a.join(','));
		}
	},
	zn = function (t, n) {
		var r = document.head || document.querySelector(H.HEAD),
			l = r.querySelectorAll(t + '[' + ct + ']'),
			i = Array.prototype.slice.call(l),
			o = [],
			a = void 0;
		return (
			n &&
				n.length &&
				n.forEach(function (s) {
					var u = document.createElement(t);
					for (var d in s)
						if (s.hasOwnProperty(d))
							if (d === re.INNER_HTML) u.innerHTML = s.innerHTML;
							else if (d === re.CSS_TEXT)
								u.styleSheet
									? (u.styleSheet.cssText = s.cssText)
									: u.appendChild(document.createTextNode(s.cssText));
							else {
								var p = typeof s[d] > 'u' ? '' : s[d];
								u.setAttribute(d, p);
							}
					u.setAttribute(ct, 'true'),
						i.some(function (m, y) {
							return (a = y), u.isEqualNode(m);
						})
							? i.splice(a, 1)
							: o.push(u);
				}),
			i.forEach(function (s) {
				return s.parentNode.removeChild(s);
			}),
			o.forEach(function (s) {
				return r.appendChild(s);
			}),
			{ oldTags: i, newTags: o }
		);
	},
	ap = function (t) {
		return Object.keys(t).reduce(function (n, r) {
			var l = typeof t[r] < 'u' ? r + '="' + t[r] + '"' : '' + r;
			return n ? n + ' ' + l : l;
		}, '');
	},
	sg = function (t, n, r, l) {
		var i = ap(r),
			o = op(n);
		return i
			? '<' + t + ' ' + ct + '="true" ' + i + '>' + Ia(o, l) + '</' + t + '>'
			: '<' + t + ' ' + ct + '="true">' + Ia(o, l) + '</' + t + '>';
	},
	ug = function (t, n, r) {
		return n.reduce(function (l, i) {
			var o = Object.keys(i)
					.filter(function (u) {
						return !(u === re.INNER_HTML || u === re.CSS_TEXT);
					})
					.reduce(function (u, d) {
						var p = typeof i[d] > 'u' ? d : d + '="' + Ia(i[d], r) + '"';
						return u ? u + ' ' + p : p;
					}, ''),
				a = i.innerHTML || i.cssText || '',
				s = Y0.indexOf(t) === -1;
			return (
				l +
				'<' +
				t +
				' ' +
				ct +
				'="true" ' +
				o +
				(s ? '/>' : '>' + a + '</' + t + '>')
			);
		}, '');
	},
	sp = function (t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		return Object.keys(t).reduce(function (r, l) {
			return (r[Ai[l] || l] = t[l]), r;
		}, n);
	},
	cg = function (t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		return Object.keys(t).reduce(function (r, l) {
			return (r[q0[l] || l] = t[l]), r;
		}, n);
	},
	dg = function (t, n, r) {
		var l,
			i = ((l = { key: n }), (l[ct] = !0), l),
			o = sp(r, i);
		return [Ue.createElement(H.TITLE, o, n)];
	},
	fg = function (t, n) {
		return n.map(function (r, l) {
			var i,
				o = ((i = { key: l }), (i[ct] = !0), i);
			return (
				Object.keys(r).forEach(function (a) {
					var s = Ai[a] || a;
					if (s === re.INNER_HTML || s === re.CSS_TEXT) {
						var u = r.innerHTML || r.cssText;
						o.dangerouslySetInnerHTML = { __html: u };
					} else o[s] = r[a];
				}),
				Ue.createElement(t, o)
			);
		});
	},
	kt = function (t, n, r) {
		switch (t) {
			case H.TITLE:
				return {
					toComponent: function () {
						return dg(t, n.title, n.titleAttributes);
					},
					toString: function () {
						return sg(t, n.title, n.titleAttributes, r);
					},
				};
			case Sn.BODY:
			case Sn.HTML:
				return {
					toComponent: function () {
						return sp(n);
					},
					toString: function () {
						return ap(n);
					},
				};
			default:
				return {
					toComponent: function () {
						return fg(t, n);
					},
					toString: function () {
						return ug(t, n, r);
					},
				};
		}
	},
	up = function (t) {
		var n = t.baseTag,
			r = t.bodyAttributes,
			l = t.encode,
			i = t.htmlAttributes,
			o = t.linkTags,
			a = t.metaTags,
			s = t.noscriptTags,
			u = t.scriptTags,
			d = t.styleTags,
			p = t.title,
			m = p === void 0 ? '' : p,
			y = t.titleAttributes;
		return {
			base: kt(H.BASE, n, l),
			bodyAttributes: kt(Sn.BODY, r, l),
			htmlAttributes: kt(Sn.HTML, i, l),
			link: kt(H.LINK, o, l),
			meta: kt(H.META, a, l),
			noscript: kt(H.NOSCRIPT, s, l),
			script: kt(H.SCRIPT, u, l),
			style: kt(H.STYLE, d, l),
			title: kt(H.TITLE, { title: m, titleAttributes: y }, l),
		};
	},
	pg = function (t) {
		var n, r;
		return (
			(r = n =
				(function (l) {
					J0(i, l);
					function i() {
						return G0(this, i), Z0(this, l.apply(this, arguments));
					}
					return (
						(i.prototype.shouldComponentUpdate = function (a) {
							return !U0(this.props, a);
						}),
						(i.prototype.mapNestedChildrenToProps = function (a, s) {
							if (!s) return null;
							switch (a.type) {
								case H.SCRIPT:
								case H.NOSCRIPT:
									return { innerHTML: s };
								case H.STYLE:
									return { cssText: s };
							}
							throw new Error(
								'<' +
									a.type +
									' /> elements are self-closing and can not contain children. Refer to our API for more information.'
							);
						}),
						(i.prototype.flattenArrayTypeChildren = function (a) {
							var s,
								u = a.child,
								d = a.arrayTypeChildren,
								p = a.newChildProps,
								m = a.nestedChildren;
							return Ie(
								{},
								d,
								((s = {}),
								(s[u.type] = [].concat(d[u.type] || [], [
									Ie({}, p, this.mapNestedChildrenToProps(u, m)),
								])),
								s)
							);
						}),
						(i.prototype.mapObjectTypeChildren = function (a) {
							var s,
								u,
								d = a.child,
								p = a.newProps,
								m = a.newChildProps,
								y = a.nestedChildren;
							switch (d.type) {
								case H.TITLE:
									return Ie(
										{},
										p,
										((s = {}),
										(s[d.type] = y),
										(s.titleAttributes = Ie({}, m)),
										s)
									);
								case H.BODY:
									return Ie({}, p, { bodyAttributes: Ie({}, m) });
								case H.HTML:
									return Ie({}, p, { htmlAttributes: Ie({}, m) });
							}
							return Ie({}, p, ((u = {}), (u[d.type] = Ie({}, m)), u));
						}),
						(i.prototype.mapArrayTypeChildrenToProps = function (a, s) {
							var u = Ie({}, s);
							return (
								Object.keys(a).forEach(function (d) {
									var p;
									u = Ie({}, u, ((p = {}), (p[d] = a[d]), p));
								}),
								u
							);
						}),
						(i.prototype.warnOnInvalidChildren = function (a, s) {
							return !0;
						}),
						(i.prototype.mapChildrenToProps = function (a, s) {
							var u = this,
								d = {};
							return (
								Ue.Children.forEach(a, function (p) {
									if (!(!p || !p.props)) {
										var m = p.props,
											y = m.children,
											x = Cc(m, ['children']),
											w = cg(x);
										switch ((u.warnOnInvalidChildren(p, y), p.type)) {
											case H.LINK:
											case H.META:
											case H.NOSCRIPT:
											case H.SCRIPT:
											case H.STYLE:
												d = u.flattenArrayTypeChildren({
													child: p,
													arrayTypeChildren: d,
													newChildProps: w,
													nestedChildren: y,
												});
												break;
											default:
												s = u.mapObjectTypeChildren({
													child: p,
													newProps: s,
													newChildProps: w,
													nestedChildren: y,
												});
												break;
										}
									}
								}),
								(s = this.mapArrayTypeChildrenToProps(d, s)),
								s
							);
						}),
						(i.prototype.render = function () {
							var a = this.props,
								s = a.children,
								u = Cc(a, ['children']),
								d = Ie({}, u);
							return (
								s && (d = this.mapChildrenToProps(s, d)), Ue.createElement(t, d)
							);
						}),
						X0(i, null, [
							{
								key: 'canUseDOM',
								set: function (a) {
									t.canUseDOM = a;
								},
							},
						]),
						i
					);
				})(Ue.Component)),
			(n.propTypes = {
				base: ne.object,
				bodyAttributes: ne.object,
				children: ne.oneOfType([ne.arrayOf(ne.node), ne.node]),
				defaultTitle: ne.string,
				defer: ne.bool,
				encodeSpecialCharacters: ne.bool,
				htmlAttributes: ne.object,
				link: ne.arrayOf(ne.object),
				meta: ne.arrayOf(ne.object),
				noscript: ne.arrayOf(ne.object),
				onChangeClientState: ne.func,
				script: ne.arrayOf(ne.object),
				style: ne.arrayOf(ne.object),
				title: ne.string,
				titleAttributes: ne.object,
				titleTemplate: ne.string,
			}),
			(n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
			(n.peek = t.peek),
			(n.rewind = function () {
				var l = t.rewind();
				return (
					l ||
						(l = up({
							baseTag: [],
							bodyAttributes: {},
							encodeSpecialCharacters: !0,
							htmlAttributes: {},
							linkTags: [],
							metaTags: [],
							noscriptTags: [],
							scriptTags: [],
							styleTags: [],
							title: '',
							titleAttributes: {},
						})),
					l
				);
			}),
			r
		);
	},
	hg = function () {
		return null;
	},
	mg = O0(ng, og, up)(hg),
	It = pg(mg);
It.renderStatic = It.rewind;
const Sr = () => {
		let e, t, n, r;
		(e = document.querySelector('.menu')),
			(t = document.querySelector('.close')),
			(n = document.querySelector('#nav-list')),
			(r = document.querySelector('main')),
			n.classList.remove('open'),
			e.classList.remove('hidden'),
			t.classList.add('hidden'),
			r.classList.remove('blur');
	},
	cp = async (e, t) => {
		try {
			return await (
				await fetch(t, {
					method: 'POST',
					body: JSON.stringify(e),
					headers: { 'Content-Type': 'application/json' },
				})
			).json();
		} catch {
			return {
				success: !1,
				message:
					"We couldn't send your message due to network issues. Please check your connection and try again.",
			};
		}
	},
	Lt = (e, t, n) => {
		let r = document.querySelector('.message');
		r.classList.remove('hidden'),
			e(!0),
			t(n),
			setTimeout(() => {
				e(!1), t(''), r.classList.add('hidden');
			}, 6e3);
	},
	vg = () => {
		let [e, t] = C.useState(''),
			[n, r] = C.useState(!1);
		return (
			C.useEffect(() => {
				const l = async (o) => {
					o.preventDefault();
					let a = document.querySelector('form button');
					a.setAttribute('disabled', !0);
					try {
						let s, u, d;
						(s = document.querySelector('#name')),
							(u = document.querySelector('#phone')),
							(d = document.querySelector('#message'));
						const p = {
							content: d.value.trim(),
							phoneNumber: u.value.trim(),
							name: s.value.trim(),
							senderID: void 0,
						};
						let m = await cp(p, 'https://mbc.onrender.com/api/users/message');
						if (!m.success)
							return a.removeAttribute('disabled'), Lt(r, t, m.message);
						Lt(
							r,
							t,
							'Your message was sent successfully. You will hear from us soon.'
						),
							o.target.reset(),
							a.removeAttribute('disabled');
					} catch {
						Lt(r, t, 'Failed to complete request due to an unknown error.'),
							a.removeAttribute('disabled');
					}
				};
				let i = document.forms['message-form'];
				return (
					i.addEventListener('submit', l),
					() => {
						i.removeEventListener('submit', l);
					}
				);
			}, []),
			C.useEffect(() => {
				let l, i, o, a;
				(l = document.querySelector('.carousel')),
					(i = document.querySelectorAll('.carousel-item')),
					(o = 0),
					(a = i.length);
				let s, u;
				(s = document.querySelector('.next')),
					(u = document.querySelector('.prev'));
				const d = (p) => {
					(o += p),
						o < 0 ? (o = a - 1) : o >= a && (o = 0),
						(l.style.transform = `translateX(-${o * i[0].clientWidth}px)`);
				};
				s.addEventListener('click', () => d(1)),
					u.addEventListener('click', () => d(-1));
			}, []),
			C.useEffect(() => {
				const l = () => {
					document.querySelectorAll('.animated').forEach((o) => {
						let a = window.scrollY,
							s = window.innerHeight,
							u = o.offsetTop;
						u < s || a + s > u
							? o.classList.remove('slide-in')
							: o.classList.add('slide-in');
					});
				};
				return (
					window.addEventListener('scroll', l),
					l(),
					() => window.removeEventListener('scroll', l)
				);
			}, []),
			c.jsxs(c.Fragment, {
				children: [
					c.jsxs(It, {
						children: [
							c.jsx('meta', {
								property: 'og:title',
								content: 'MBC - Mma Beauty Care',
							}),
							c.jsx('meta', {
								property: 'og:description',
								content: 'Discover the Power of Natural Skincare',
							}),
							c.jsx('meta', {
								name: 'description',
								content:
									'At MBC, we are your premier destination for high-quality skincare products. We partner with leading skincare brands to bring you a curated selection of the finest products that will nourish, rejuvenate, and protect your skin.',
							}),
							c.jsx('title', { children: 'MBC | Mma Beauty Care' }),
						],
					}),
					c.jsx('p', { className: 'message hidden', children: e }),
					c.jsxs('main', {
						onClick: Sr,
						id: 'home',
						children: [
							c.jsxs('section', {
								id: 'intro',
								children: [
									c.jsx('h1', {
										className: 'animated slide-in',
										children: 'Mma Beauty Care',
									}),
									c.jsx('p', {
										className: 'animated slide-in',
										children: 'Discover the Best Skincare Products',
									}),
									c.jsx(me, {
										to: '/shop',
										className: 'btn animated slide-in',
										children: 'View available products',
									}),
								],
							}),
							c.jsxs('section', {
								className: 'animated slide-in',
								id: 'featured',
								children: [
									c.jsx('img', {
										src: '/images/img_collage.png',
										alt: 'Skincare products collage',
									}),
									c.jsx('p', {
										children:
											'Explore our handpicked collection of skincare products from renowned brands. From gentle cleansers and rejuvenating serums to nourishing moisturizers and age-defying treatments, we offer a diverse range of products to cater to all your skincare needs.',
									}),
								],
							}),
							c.jsxs('section', {
								id: 'reasons',
								children: [
									c.jsx('h2', {
										className: 'fancy-header',
										children: 'Why Choose MBC',
									}),
									c.jsxs('ul', {
										children: [
											c.jsxs('li', {
												className: 'animated slide-in',
												children: [
													c.jsx('img', {
														src: '/images/trusted_brands.jpg',
														alt: '',
													}),
													c.jsxs('article', {
														children: [
															c.jsx('h3', { children: 'Trusted Brands' }),
															c.jsx('p', {
																children:
																	'We collaborate with trusted skincare brands known for their commitment to quality, innovation, and exceptional results.',
															}),
														],
													}),
												],
											}),
											c.jsxs('li', {
												className: 'animated slide-in',
												children: [
													c.jsx('img', {
														src: '/images/expert_curation.webp',
														alt: '',
													}),
													c.jsxs('article', {
														children: [
															c.jsx('h3', { children: 'Expert Curation' }),
															c.jsx('p', {
																children:
																	'Our team of skincare enthusiasts carefully curates each product in my collection, ensuring that you have access to the best skincare options available.',
															}),
														],
													}),
												],
											}),
											c.jsxs('li', {
												className: 'animated slide-in',
												children: [
													c.jsx('img', {
														src: '/images/comprehensive_range.jpg',
														alt: '',
													}),
													c.jsxs('article', {
														children: [
															c.jsx('h3', { children: 'Comprehensive Range' }),
															c.jsx('p', {
																children:
																	'We offer a wide array of products targeting various skin concerns, so you can find the perfect solution for your unique skin type and goals.',
															}),
														],
													}),
												],
											}),
											c.jsxs('li', {
												className: 'animated slide-in',
												children: [
													c.jsx('img', {
														src: '/images/customer_service.webp',
														alt: '',
													}),
													c.jsxs('article', {
														children: [
															c.jsx('h3', {
																children: 'Exceptional Customer Service',
															}),
															c.jsx('p', {
																children:
																	'We prioritize your satisfaction and are dedicated to providing outstanding customer service. Our knowledgeable team is here to assist you and guide you towards finding the right products for your skincare routine.',
															}),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
							c.jsxs('section', {
								id: 'testimonials',
								children: [
									c.jsx('h2', { children: 'What Our Customers Say About Us' }),
									c.jsxs('div', {
										className: 'carousel-container',
										children: [
											c.jsxs('div', {
												className: 'carousel',
												children: [
													c.jsxs('article', {
														className: 'carousel-item',
														children: [
															c.jsxs('div', {
																children: [
																	c.jsx('img', {
																		src: '/images/IMG-20230714-WA0004.jpg',
																		alt: '',
																	}),
																	c.jsx('p', { children: 'Claire' }),
																],
															}),
															c.jsx('p', {
																children:
																	'My skin was bumpy as Nigerian roads until I met MBC. She helped me figure my skin concerns. She recommended skincare products to me. I used them consistently and now my skin is flawless. I can now confidently flex my glow without being criticized because of outbreaks. Thank you so much MBC store. You guys are the best',
															}),
															c.jsxs('address', {
																children: [
																	c.jsx('a', {
																		href: 'tel:+2348108742236',
																		children: c.jsx('span', {
																			className: 'material-symbols-outlined',
																			children: 'Phone',
																		}),
																	}),
																	c.jsx('a', {
																		href: `https://wa.me/2348108742236?text=${encodeURIComponent(
																			'Hello MBC, I visited your website and I would like to connect with you.'
																		)}`,
																		children: c.jsx('span', {
																			className: 'material-symbols-outlined',
																			children: 'chat',
																		}),
																	}),
																],
															}),
														],
													}),
													c.jsxs('article', {
														className: 'carousel-item',
														children: [
															c.jsxs('div', {
																children: [
																	c.jsx('img', {
																		src: '/images/IMG-20230715-WA0000.jpg',
																		alt: '',
																	}),
																	c.jsx('p', { children: 'Favour' }),
																],
															}),
															c.jsx('p', {
																children:
																	"My skincare journey has been quite difficult until I met Mma Beauty Care (MBC). I've tried a lot of products and they weren't really working. I met MBC and I got a free consultation and their products are very effective and affordable. I can assure you that they're really the best.",
															}),
															c.jsxs('address', {
																children: [
																	c.jsx('a', {
																		href: 'tel:+2349049861570',
																		children: c.jsx('span', {
																			className: 'material-symbols-outlined',
																			children: 'Phone',
																		}),
																	}),
																	c.jsx('a', {
																		href: `https://wa.me/2348108742236?text=${encodeURIComponent(
																			'Hello MBC, I visited your website and I would like to connect with you.'
																		)}`,
																		children: c.jsx('span', {
																			className: 'material-symbols-outlined',
																			children: 'chat',
																		}),
																	}),
																],
															}),
														],
													}),
													c.jsxs('article', {
														className: 'carousel-item',
														children: [
															c.jsxs('div', {
																children: [
																	c.jsx('img', {
																		src: '/images/IMG-20230715-WA0006.jpg',
																		alt: '',
																	}),
																	c.jsx('p', {}),
																],
															}),
															c.jsx('p', {
																children:
																	"I didn't exactly have terrible skin conditions, but I had outbreaks now and then and I was always getting rashes and hyper-pigmentation when I used many different products in the name of skincare 😭. Then MBC came around and she recommended some products for me and I bought them all cos I was desperate😭. Within a month of steady routine, this is my skin in its natural glow, without any filters at all. Just sunlight and face. I don't even have any products on my face as at this time.",
															}),
															c.jsxs('address', {
																children: [
																	c.jsx('a', {
																		href: 'tel:+2349049026878',
																		children: c.jsx('span', {
																			className: 'material-symbols-outlined',
																			children: 'Phone',
																		}),
																	}),
																	c.jsx('a', {
																		href: 'https://wa.me/2349049026878',
																		children: c.jsx('span', {
																			className: 'material-symbols-outlined',
																			children: 'chat',
																		}),
																	}),
																],
															}),
														],
													}),
												],
											}),
											c.jsx('span', {
												className: 'next material-symbols-outlined',
												children: 'arrow_right',
											}),
											c.jsx('span', {
												className: 'prev material-symbols-outlined',
												children: 'arrow_left',
											}),
										],
									}),
								],
							}),
							c.jsx('section', {
								id: 'contact',
								children: c.jsxs('form', {
									className: 'animated slide-in',
									id: 'message-form',
									children: [
										c.jsx('h2', { children: "We'd love to hear from you" }),
										c.jsx('p', { children: 'Send us a message' }),
										c.jsxs('div', {
											className: 'field-group',
											children: [
												c.jsx('input', {
													required: !0,
													type: 'text',
													id: 'name',
													name: 'name',
												}),
												c.jsx('label', {
													htmlFor: 'name',
													children: 'Full name',
												}),
											],
										}),
										c.jsxs('div', {
											className: 'field-group',
											children: [
												c.jsx('input', {
													required: !0,
													type: 'tel',
													name: 'phone',
													placeholder: '08123456789',
													id: 'phone',
												}),
												c.jsx('label', {
													htmlFor: 'phone',
													children: 'Phone no.',
												}),
											],
										}),
										c.jsx('textarea', {
											required: !0,
											placeholder: 'Write your message here...',
											name: 'message',
											id: 'message',
											cols: '30',
											rows: '10',
										}),
										c.jsx('button', {
											type: 'submit',
											className: 'btn',
											children: 'Send',
										}),
									],
								}),
							}),
						],
					}),
				],
			})
		);
	},
	gg = () => (
		C.useEffect(() => {
			const e = () => {
				document.querySelectorAll('.animated').forEach((n) => {
					let r = window.scrollY,
						l = window.innerHeight,
						i = n.offsetTop;
					i < l || r + l > i
						? n.classList.remove('slide-in-right')
						: n.classList.add('slide-in-right');
				});
			};
			return (
				window.addEventListener('scroll', e),
				e(),
				() => window.removeEventListener('scroll', e)
			);
		}, []),
		c.jsxs(c.Fragment, {
			children: [
				c.jsxs(It, {
					children: [
						c.jsx('meta', {
							property: 'og:title',
							content: 'About MBC | Mma Beauty Care',
						}),
						c.jsx('meta', {
							property: 'og:description',
							content: 'Discover the Power of Natural Skincare',
						}),
						c.jsx('meta', {
							name: 'description',
							content:
								'At MBC, we are your premier destination for high-quality skincare products. We partner with leading skincare brands to bring you a curated selection of the finest products that will nourish, rejuvenate, and protect your skin.',
						}),
						c.jsx('title', { children: 'About MBC | Mma Beauty Care' }),
					],
				}),
				c.jsxs('main', {
					onClick: Sr,
					id: 'about',
					children: [
						c.jsxs('section', {
							id: 'intro',
							children: [
								c.jsx('img', {
									src: '/images/mbc.jpg',
									alt: '',
									className: 'animated slide-in-right',
								}),
								c.jsxs('article', {
									children: [
										c.jsx('h1', {
											className: 'animated slide-in-right',
											children: 'Welcome',
										}),
										c.jsx('p', {
											className: 'animated slide-in-right',
											children:
												'Welcome to MBC your trusted source for exceptional skincare products. As a vendor, we collaborate with top skincare brands to bring you a thoughtfully curated selection of products that have been meticulously chosen for their quality and efficacy.',
										}),
									],
								}),
							],
						}),
						c.jsxs('section', {
							id: 'mission',
							children: [
								c.jsx('img', {
									src: '/images/our_mission.jpg',
									alt: '',
									className: 'animated slide-in-right',
								}),
								c.jsxs('article', {
									children: [
										c.jsx('h2', {
											className: 'animated slide-in-right',
											children: 'Our Mission',
										}),
										c.jsx('p', {
											className: 'animated slide-in-right',
											children:
												'Our mission at MBC is to provide you with access to a comprehensive range of skincare products from trusted brands. We aim to simplify your skincare shopping experience by offering a curated collection that meets the diverse needs and preferences of our valued customers.',
										}),
									],
								}),
							],
						}),
						c.jsxs('section', {
							id: 'approach',
							children: [
								c.jsxs('article', {
									children: [
										c.jsx('h2', {
											className: 'animated slide-in-right',
											children: 'Our Approach',
										}),
										c.jsx('p', {
											className: 'animated slide-in-right',
											children:
												'We believe in the power of collaboration. By partnering with leading skincare brands, we can offer you a wide variety of products that have undergone rigorous testing and are backed by scientific research. Our commitment to excellence ensures that every product we purchase meets the highest standards of quality and effectiveness.',
										}),
									],
								}),
								c.jsx('img', {
									src: '/images/collaboration.jpg',
									alt: '',
									className: 'animated slide-in-right',
								}),
							],
						}),
						c.jsxs('section', {
							id: 'customer-satisfaction',
							children: [
								c.jsx('img', {
									src: '/images/customer_support.jpg',
									alt: '',
									className: 'animated slide-in-right',
								}),
								c.jsxs('article', {
									children: [
										c.jsx('h2', {
											className: 'animated slide-in-right',
											children: 'Customer Satisfaction',
										}),
										c.jsx('p', {
											className: 'animated slide-in-right',
											children:
												'Your satisfaction is our top priority. We understand that skincare is personal,and we strive to provide you with the best possible experience. Our dedicated customer service team is here to assist you, answer your questions, and guide you towards finding the perfect skincare products that will help you achieve your desired results.',
										}),
									],
								}),
							],
						}),
						c.jsx('section', {
							id: 'invitation',
							children: c.jsxs('article', {
								children: [
									c.jsx('h2', {
										className: 'fancy-header-2',
										children: 'Join the MBC Community',
									}),
									c.jsx('p', {
										children:
											'Join our community of skincare enthusiasts! Connect with us on social media, share your skincare journey, and stay updated with the latest trends and insights. We love hearing from our customers and are here to support you on your quest for healthy and radiant skin.',
									}),
									c.jsx(me, {
										className: 'btn',
										children: 'Join us on WhatsApp',
									}),
								],
							}),
						}),
					],
				}),
			],
		})
	),
	dp = () => {
		let e = fn();
		C.useEffect(() => {
			window.scrollTo(0, 0);
		}, [e]);
	},
	fp = () =>
		c.jsxs('footer', {
			children: [
				c.jsxs('section', {
					id: 'logo',
					children: [
						c.jsx('img', { src: '/images/logo.png', alt: '' }),
						c.jsxs('span', {
							children: [
								'MBC',
								c.jsx('sup', { children: '©' }),
								' ',
								new Date().getFullYear(),
							],
						}),
					],
				}),
				c.jsx('nav', {
					children: c.jsxs('ul', {
						children: [
							c.jsx('li', {
								children: c.jsx(me, { to: '/', children: 'Home' }),
							}),
							c.jsx('li', {
								children: c.jsx(me, { to: '/about', children: 'About' }),
							}),
							c.jsx('li', {
								children: c.jsx(me, { to: '/contact', children: 'Contact' }),
							}),
							c.jsx('li', {
								children: c.jsx(me, { to: '/shop', children: 'Shop' }),
							}),
						],
					}),
				}),
			],
		});
var pp = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0,
	},
	Tc = Ue.createContext && Ue.createContext(pp),
	on =
		(globalThis && globalThis.__assign) ||
		function () {
			return (
				(on =
					Object.assign ||
					function (e) {
						for (var t, n = 1, r = arguments.length; n < r; n++) {
							t = arguments[n];
							for (var l in t)
								Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
						}
						return e;
					}),
				on.apply(this, arguments)
			);
		},
	yg =
		(globalThis && globalThis.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) &&
					t.indexOf(r) < 0 &&
					(n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == 'function')
				for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
					t.indexOf(r[l]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
						(n[r[l]] = e[r[l]]);
			return n;
		};
function hp(e) {
	return (
		e &&
		e.map(function (t, n) {
			return Ue.createElement(t.tag, on({ key: n }, t.attr), hp(t.child));
		})
	);
}
function eo(e) {
	return function (t) {
		return Ue.createElement(wg, on({ attr: on({}, e.attr) }, t), hp(e.child));
	};
}
function wg(e) {
	var t = function (n) {
		var r = e.attr,
			l = e.size,
			i = e.title,
			o = yg(e, ['attr', 'size', 'title']),
			a = l || n.size || '1em',
			s;
		return (
			n.className && (s = n.className),
			e.className && (s = (s ? s + ' ' : '') + e.className),
			Ue.createElement(
				'svg',
				on(
					{ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
					n.attr,
					r,
					o,
					{
						className: s,
						style: on(on({ color: e.color || n.color }, n.style), e.style),
						height: a,
						width: a,
						xmlns: 'http://www.w3.org/2000/svg',
					}
				),
				i && Ue.createElement('title', null, i),
				e.children
			)
		);
	};
	return Tc !== void 0
		? Ue.createElement(Tc.Consumer, null, function (n) {
				return t(n);
		  })
		: t(pp);
}
function mp(e) {
	return eo({
		tag: 'svg',
		attr: { version: '1.1', viewBox: '0 0 16 16' },
		child: [
			{
				tag: 'path',
				attr: {
					d: 'M16 8c-0.020-1.045-0.247-2.086-0.665-3.038-0.417-0.953-1.023-1.817-1.766-2.53s-1.624-1.278-2.578-1.651c-0.953-0.374-1.978-0.552-2.991-0.531-1.013 0.020-2.021 0.24-2.943 0.646-0.923 0.405-1.758 0.992-2.449 1.712s-1.237 1.574-1.597 2.497c-0.361 0.923-0.533 1.914-0.512 2.895 0.020 0.981 0.234 1.955 0.627 2.847 0.392 0.892 0.961 1.7 1.658 2.368s1.523 1.195 2.416 1.543c0.892 0.348 1.851 0.514 2.799 0.493 0.949-0.020 1.89-0.227 2.751-0.608 0.862-0.379 1.642-0.929 2.287-1.604s1.154-1.472 1.488-2.335c0.204-0.523 0.342-1.069 0.415-1.622 0.019 0.001 0.039 0.002 0.059 0.002 0.552 0 1-0.448 1-1 0-0.028-0.001-0.056-0.004-0.083h0.004zM14.411 10.655c-0.367 0.831-0.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434c-0.832 0.323-1.723 0.476-2.608 0.454-0.884-0.020-1.759-0.215-2.56-0.57-0.801-0.354-1.526-0.867-2.125-1.495s-1.071-1.371-1.38-2.173c-0.31-0.801-0.457-1.66-0.435-2.512s0.208-1.694 0.551-2.464c0.342-0.77 0.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c0.771-0.298 1.596-0.438 2.416-0.416s1.629 0.202 2.368 0.532c0.74 0.329 1.41 0.805 1.963 1.387s0.988 1.27 1.272 2.011c0.285 0.74 0.418 1.532 0.397 2.32h0.004c-0.002 0.027-0.004 0.055-0.004 0.083 0 0.516 0.39 0.94 0.892 0.994-0.097 0.544-0.258 1.075-0.481 1.578z',
				},
			},
		],
	})(e);
}
function xg(e) {
	return eo({
		tag: 'svg',
		attr: { version: '1.1', viewBox: '0 0 16 16' },
		child: [
			{
				tag: 'path',
				attr: {
					d: 'M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11 2.5c0-0.275 0.225-0.5 0.5-0.5h2c0.275 0 0.5 0.225 0.5 0.5v2c0 0.275-0.225 0.5-0.5 0.5h-2c-0.275 0-0.5-0.225-0.5-0.5v-2zM8 5c1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.656 0-3-1.344-3-3s1.344-3 3-3zM14 13.5v0c0 0.275-0.225 0.5-0.5 0.5h-11c-0.275 0-0.5-0.225-0.5-0.5v0-6.5h1.1c-0.066 0.322-0.1 0.656-0.1 1 0 2.762 2.237 5 5 5s5-2.238 5-5c0-0.344-0.034-0.678-0.1-1h1.1v6.5z',
				},
			},
		],
	})(e);
}
function Sg(e) {
	return eo({
		tag: 'svg',
		attr: { version: '1.1', viewBox: '0 0 16 16' },
		child: [
			{
				tag: 'path',
				attr: {
					d: 'M13.641 2.325c-1.497-1.5-3.488-2.325-5.609-2.325-4.369 0-7.925 3.556-7.925 7.928 0 1.397 0.366 2.763 1.059 3.963l-1.125 4.109 4.203-1.103c1.159 0.631 2.463 0.966 3.787 0.966h0.003c0 0 0 0 0 0 4.369 0 7.928-3.556 7.928-7.928 0-2.119-0.825-4.109-2.322-5.609zM8.034 14.525v0c-1.184 0-2.344-0.319-3.356-0.919l-0.241-0.144-2.494 0.653 0.666-2.431-0.156-0.25c-0.663-1.047-1.009-2.259-1.009-3.506 0-3.634 2.956-6.591 6.594-6.591 1.759 0 3.416 0.688 4.659 1.931 1.244 1.247 1.928 2.9 1.928 4.662-0.003 3.637-2.959 6.594-6.591 6.594zM11.647 9.588c-0.197-0.1-1.172-0.578-1.353-0.644s-0.313-0.1-0.447 0.1c-0.131 0.197-0.512 0.644-0.628 0.778-0.116 0.131-0.231 0.15-0.428 0.050s-0.838-0.309-1.594-0.984c-0.588-0.525-0.987-1.175-1.103-1.372s-0.013-0.306 0.088-0.403c0.091-0.088 0.197-0.231 0.297-0.347s0.131-0.197 0.197-0.331c0.066-0.131 0.034-0.247-0.016-0.347s-0.447-1.075-0.609-1.472c-0.159-0.388-0.325-0.334-0.447-0.341-0.116-0.006-0.247-0.006-0.378-0.006s-0.347 0.050-0.528 0.247c-0.181 0.197-0.694 0.678-0.694 1.653s0.709 1.916 0.809 2.050c0.1 0.131 1.397 2.134 3.384 2.991 0.472 0.203 0.841 0.325 1.128 0.419 0.475 0.15 0.906 0.128 1.247 0.078 0.381-0.056 1.172-0.478 1.338-0.941s0.166-0.859 0.116-0.941c-0.047-0.088-0.178-0.137-0.378-0.238z',
				},
			},
		],
	})(e);
}
function Eg(e) {
	return eo({
		tag: 'svg',
		attr: { viewBox: '0 0 448 512' },
		child: [
			{
				tag: 'path',
				attr: {
					d: 'M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z',
				},
			},
		],
	})(e);
}
const Cg = () => {
		let [e, t] = C.useState(''),
			[n, r] = C.useState(!1);
		return (
			C.useEffect(() => {
				const l = () => {
					document.querySelectorAll('.animated').forEach((o) => {
						let a = window.scrollY,
							s = window.innerHeight,
							u = o.offsetTop;
						u < s || a + s > u
							? o.classList.remove('slide-in')
							: o.classList.add('slide-in');
					});
				};
				return (
					window.addEventListener('scroll', l),
					l(),
					() => window.removeEventListener('scroll', l)
				);
			}, []),
			C.useEffect(() => {
				const l = async (o) => {
					o.preventDefault();
					let a = document.querySelector('form button');
					a.setAttribute('disabled', !0);
					try {
						let s, u, d;
						(s = document.querySelector('#name')),
							(u = document.querySelector('#phone')),
							(d = document.querySelector('#message'));
						const p = {
							content: d.value.trim(),
							phoneNumber: u.value.trim(),
							name: s.value.trim(),
							senderID: void 0,
						};
						let m = await cp(p, 'https://mbc.onrender.com/api/users/message');
						if (!m.success)
							return a.removeAttribute('disabled'), Lt(r, t, m.message);
						Lt(
							r,
							t,
							'Your message was sent successfully. You will hear from us soon.'
						),
							a.removeAttribute('disabled'),
							o.target.reset();
					} catch {
						Lt(r, t, 'Failed to complete request due to an unknown error.'),
							a.removeAttribute('disabled');
					}
				};
				let i = document.forms['message-form'];
				return (
					i.addEventListener('submit', l),
					() => {
						i.removeEventListener('submit', l);
					}
				);
			}, []),
			c.jsxs(c.Fragment, {
				children: [
					c.jsx(It, {
						children: c.jsx('title', {
							children: 'Contact MBC | Mma Beauty Care',
						}),
					}),
					c.jsx('p', { className: 'message hidden', children: e }),
					c.jsxs('main', {
						onClick: Sr,
						id: 'contact',
						children: [
							c.jsxs('section', {
								id: 'intro',
								children: [
									c.jsx('h1', {
										className: 'animated slide-in',
										children: 'Contact Us',
									}),
									c.jsx('p', {
										className: 'animated slide-in',
										children:
											"We'd love to here from you and answer all your questions.",
									}),
								],
							}),
							c.jsxs('section', {
								id: 'contact-options',
								children: [
									c.jsx('h2', {
										className: 'fancy-header-2',
										children: 'Connect with us on social media',
									}),
									c.jsxs('div', {
										children: [
											c.jsxs('a', {
												href: `https://wa.me/2348108742236?text=${encodeURIComponent(
													'Hello MBC, I visited your website and I would like to connect with you.'
												)}`,
												target: '_blank',
												className: 'animated slide-in',
												children: [c.jsx(Sg, {}), ' WhatsApp'],
											}),
											c.jsxs('a', {
												href: 'https://tiktok.com/@mmabeautycare?_t=8e3jRQumDBd&_r=1',
												target: '_blank',
												className: 'animated slide-in',
												children: [c.jsx(Eg, {}), ' TikTok'],
											}),
											c.jsxs('a', {
												href: 'https://instagram.com/invites/contact/?i=1hmx8xbaijlhpw&utm_content=qv0519s',
												target: '_blank',
												className: 'animated slide-in',
												children: [c.jsx(xg, {}), ' Instagram'],
											}),
										],
									}),
								],
							}),
							c.jsx('section', {
								id: 'form',
								children: c.jsxs('form', {
									id: 'message-form',
									className: 'animated slide-in',
									children: [
										c.jsx('h2', { children: 'Ask us a question' }),
										c.jsx('p', {
											children: 'Please fill in the correct details required.',
										}),
										c.jsxs('div', {
											className: 'field-group',
											children: [
												c.jsx('input', {
													required: !0,
													type: 'text',
													id: 'name',
													name: 'name',
												}),
												c.jsx('label', {
													htmlFor: 'name',
													children: 'Full name',
												}),
											],
										}),
										c.jsxs('div', {
											className: 'field-group',
											children: [
												c.jsx('input', {
													required: !0,
													type: 'tel',
													name: 'phone',
													placeholder: '08123456789',
													id: 'phone',
												}),
												c.jsx('label', {
													htmlFor: 'phone',
													children: 'Phone no.',
												}),
											],
										}),
										c.jsx('textarea', {
											required: !0,
											placeholder: 'Ask your question here...',
											name: 'message',
											id: 'message',
											cols: '30',
											rows: '10',
										}),
										c.jsx('button', {
											type: 'submit',
											className: 'btn',
											children: 'Send',
										}),
									],
								}),
							}),
						],
					}),
				],
			})
		);
	},
	Pc = () => {
		let e = Zf();
		return c.jsxs('main', {
			style: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
				height: '100%',
				background: '#333',
				color: 'white',
				flexDirection: 'column',
				gap: '1rem',
				padding: '2rem',
				textAlign: 'center',
				position: 'fixed',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				width: '100%',
			},
			children: [
				c.jsx('h1', {
					style: { font: '4rem "Playfair Display"' },
					children: '404',
				}),
				c.jsx('p', { children: "That's an error." }),
				c.jsx(me, {
					onClick: () => e(-1),
					className: 'btn',
					children: 'Go back',
				}),
			],
		});
	},
	vp = () => {
		let e = fn();
		C.useEffect(() => {
			let t = document.getElementById('root');
			switch (!0) {
				case e.pathname.startsWith('/shop'):
					t.classList.add('grid');
					break;
				default:
					t.classList.remove('grid');
					break;
			}
		}, [e]);
	},
	kg = () => {
		let { cart: e } = C.useContext(Ln);
		return (
			C.useEffect(() => {
				let t = document.querySelectorAll('#nav-list a');
				return (
					t.forEach((n) => {
						n.addEventListener('click', ir);
					}),
					() => {
						t.forEach((n) => {
							n.removeEventListener('click', ir);
						});
					}
				);
			}),
			c.jsxs('header', {
				children: [
					c.jsx('div', {
						id: 'logo',
						children: c.jsx('img', { src: '/images/logo.png', alt: '' }),
					}),
					c.jsxs('nav', {
						children: [
							c.jsxs('div', {
								className: 'visible-mobile',
								id: 'nav-icons',
								'aria-hidden': 'true',
								'aria-label': 'Menu icons',
								onClick: ir,
								children: [
									c.jsx('span', {
										className: 'menu material-symbols-outlined',
										children: 'menu',
									}),
									c.jsx('span', {
										className: 'close material-symbols-outlined hidden',
										children: 'close',
									}),
								],
							}),
							c.jsx('div', {
								id: 'nav-list',
								children: c.jsxs('ul', {
									children: [
										c.jsx('li', {
											children: c.jsxs(me, {
												to: '/',
												children: [
													c.jsx('span', {
														className: 'material-symbols-outlined',
														children: 'home',
													}),
													' Home',
												],
											}),
										}),
										c.jsx('li', {
											children: c.jsxs(me, {
												to: '/about',
												children: [
													c.jsx('span', {
														className: 'material-symbols-outlined',
														children: 'info',
													}),
													' About',
												],
											}),
										}),
										c.jsx('li', {
											children: c.jsxs(me, {
												to: '/contact',
												children: [
													c.jsx('span', {
														className: 'material-symbols-outlined',
														children: 'phone',
													}),
													' Contact',
												],
											}),
										}),
										c.jsx('li', {
											children: c.jsxs(me, {
												to: '/shop',
												children: [
													c.jsx('span', {
														className: 'material-symbols-outlined',
														children: 'store',
													}),
													' Shop',
												],
											}),
										}),
										c.jsx('li', {
											children: c.jsxs(me, {
												to: '/shop/cart',
												children: [
													c.jsx('span', {
														className: 'material-symbols-outlined',
														children: 'Shopping_Cart',
													}),
													'Cart ',
													c.jsx('span', {
														className: 'count',
														children: e.length,
													}),
												],
											}),
										}),
									],
								}),
							}),
						],
					}),
				],
			})
		);
	},
	jg = () => {
		let { cart: e } = C.useContext(Ln);
		return c.jsxs(c.Fragment, {
			children: [
				c.jsx(vp, {}),
				c.jsx(dp, {}),
				fn().pathname.includes('cart') ||
					c.jsxs(me, {
						className: 'floating_counter',
						to: '/shop/cart',
						children: [
							c.jsx('span', {
								className: 'material-symbols-outlined',
								children: 'shopping_cart',
							}),
							c.jsx('span', { className: 'count', children: e.length }),
						],
					}),
				c.jsx(kg, {}),
				c.jsx(ep, {}),
				c.jsx(fp, {}),
			],
		});
	};
function ar(e) {
	const t = String(e),
		[n, r] = t.split('.'),
		l = n.replace(/\B(?=(\d{3})+(?!\d))/g, ', ');
	return r ? `${l}.${r}` : l;
}
const Tg = () => {
	let { products: e, loadState: t, cart: n, setCart: r } = C.useContext(Ln);
	return c.jsxs(c.Fragment, {
		children: [
			c.jsx(It, {
				children: c.jsx('title', { children: 'Shop | Mma Beauty Care' }),
			}),
			c.jsxs('main', {
				onClick: Sr,
				id: 'shop-home',
				children: [
					c.jsx('h1', { className: 'fancy-header', children: 'Our Products' }),
					t === 'loading'
						? c.jsx(mp, { className: 'spin' })
						: t === 'success'
						? c.jsx(c.Fragment, {
								children:
									e.length < 1
										? c.jsx('h2', {
												className: 'load-info',
												children: 'No products to show',
										  })
										: c.jsx('div', {
												id: 'products',
												children: e.map((l) =>
													c.jsxs(
														'div',
														{
															className: 'product',
															children: [
																c.jsx('img', {
																	src: `data:image/png;base64,${l.image}`,
																	alt: '',
																}),
																c.jsxs('div', {
																	className: 'info',
																	children: [
																		c.jsx('h3', { children: l.name }),
																		c.jsxs('p', {
																			children: ['price: ₦', ar(l.price)],
																		}),
																	],
																}),
																c.jsxs('div', {
																	className: 'options',
																	children: [
																		c.jsx('button', {
																			className: 'btn',
																			'data-id': l.id,
																			onClick: (i) => {
																				let { target: o } = i,
																					{ id: a } = o.dataset,
																					s = n.findIndex((d) => d.id === a);
																				if (s < 0) {
																					let d = { ...l, quantity: 1 };
																					r([...n, d]);
																					return;
																				}
																				let u = [...n];
																				(u[s].quantity += 1), r(u);
																			},
																			children: 'Add to cart',
																		}),
																		c.jsx(me, {
																			to: `/shop/products/${l.id}`,
																			children: 'View product',
																		}),
																	],
																}),
															],
														},
														l.id
													)
												),
										  }),
						  })
						: c.jsx('h2', {
								className: 'load-info',
								children: 'Failed to load products',
						  }),
				],
			}),
		],
	});
};
function Pg() {
	let { id: e } = Yv(),
		{ cart: t, products: n, setCart: r } = C.useContext(Ln),
		[l, i] = C.useState({}),
		[o, a] = C.useState(!1);
	return (
		C.useEffect(() => {
			(async function () {
				let s = n.find((u) => u.id === e);
				if ((i({ ...s }), !l.id)) {
					let d = await (
						await fetch(`https://mbc.onrender.com/api/products/${e}`)
					).json();
					d.success && i({ ...d.data });
					return;
				}
			})();
		}, []),
		C.useEffect(() => {
			t.find((s) => s.id === e) ? a(!0) : a(!1);
		}, [t]),
		c.jsxs(c.Fragment, {
			children: [
				c.jsx(It, {
					children: c.jsxs('title', {
						children: [l.id ? l.name : 'Shop', ' | Mma Beauty Care'],
					}),
				}),
				c.jsx('main', {
					onClick: Sr,
					id: 'single-product',
					children: l.id
						? c.jsxs('div', {
								children: [
									c.jsx('img', {
										src: `data:image/png;base64,${l.image}`,
										alt: '',
									}),
									c.jsxs('div', {
										children: [
											c.jsxs('div', {
												className: 'info',
												children: [
													c.jsx('h1', { children: l.name }),
													c.jsx('p', {
														children:
															l.description || 'No description available',
													}),
													c.jsxs('p', {
														className: 'price',
														children: ['₦', ar(l.price)],
													}),
													o &&
														c.jsxs('p', {
															className: 'sub-total',
															children: [
																c.jsx('b', { children: 'Sub Total: ' }),
																'₦',
																ar(
																	t.find((s) => s.id === e).quantity * l.price
																),
															],
														}),
												],
											}),
											c.jsxs('div', {
												className: 'options',
												children: [
													o &&
														c.jsx('input', {
															type: 'number',
															value: t.find((s) => s.id === e)
																? t.find((s) => s.id === e).quantity
																: 1,
															onChange: (s) => {
																let u = [...t],
																	d = u.findIndex((p) => p.id === e);
																s.target.value === 0
																	? (u[d].quantity = 1)
																	: (u[d].quantity = Number(s.target.value)),
																	r([...u]);
															},
															min: 1,
														}),
													' ',
													o
														? c.jsx('button', {
																className: 'btn',
																onClick: () => {
																	let s = t.filter((u) => u.id !== e);
																	r([...s]), a(!1);
																},
																children: 'Remove from cart',
														  })
														: c.jsx('button', {
																className: 'btn',
																onClick: () => {
																	r([...t, { ...l, quantity: 1 }]), a(!0);
																},
																children: 'Add to cart',
														  }),
												],
											}),
										],
									}),
								],
						  })
						: c.jsx('h3', {
								className: 'load-info',
								children: c.jsx(mp, { className: 'spin' }),
						  }),
				}),
			],
		})
	);
}
function Ng() {
	function e(r) {
		let l = 0;
		for (let i of r) l += Number(i.quantity) * Number(i.price);
		return l;
	}
	let { cart: t, setCart: n } = C.useContext(Ln);
	return c.jsxs(c.Fragment, {
		children: [
			c.jsx(It, {
				children: c.jsx('title', {
					children: `Cart (${t.length}) | Mma Beauty Care`,
				}),
			}),
			c.jsxs('main', {
				onClick: Sr,
				id: 'cart',
				children: [
					c.jsx('h1', { className: 'fancy-header', children: 'Cart' }),
					c.jsx('div', {
						children:
							t.length > 0
								? t.map((r) =>
										c.jsxs(
											me,
											{
												to: `/shop/products/${r.id}`,
												className: 'item',
												children: [
													c.jsx('img', {
														src: `data:image/png;base64,${r.image}`,
														alt: '',
													}),
													c.jsx('div', {
														className: 'info',
														children: c.jsxs('div', {
															children: [
																c.jsx('h3', { children: r.name }),
																c.jsxs('p', {
																	children: [
																		c.jsx('span', { children: 'Price: ' }),
																		c.jsxs('b', {
																			children: ['₦', ar(r.price)],
																		}),
																	],
																}),
																c.jsxs('p', {
																	children: [
																		c.jsx('span', { children: 'Quantity: ' }),
																		c.jsx('b', { children: r.quantity }),
																	],
																}),
																c.jsxs('p', {
																	className: 'sub-total',
																	children: [
																		c.jsx('b', { children: 'Sub Total: ' }),
																		'₦',
																		ar(r.quantity * r.price),
																	],
																}),
															],
														}),
													}),
												],
											},
											r.id
										)
								  )
								: c.jsx('h2', {
										className: 'load-info',
										children: 'No item in cart',
								  }),
					}),
					t.length > 0 &&
						c.jsxs('div', {
							className: 'total-info',
							children: [
								c.jsx('p', {
									children: c.jsxs('b', { children: ['Total: ₦', ar(e(t))] }),
								}),
								c.jsx(me, {
									to: '/shop/checkout',
									className: 'btn',
									children: 'Place order',
								}),
								c.jsx('button', {
									onClick: () => n([]),
									className: 'btn',
									children: 'Empty your cart',
								}),
							],
						}),
				],
			}),
		],
	});
}
const Rg = async (e) => {
	try {
		return await (await fetch(e)).json();
	} catch {
		return {
			success: !1,
			message:
				'An unexpected error occurred. Please check your connections and try again',
		};
	}
};
function _g() {
	let [e, t] = C.useState(''),
		[n, r] = C.useState(!1),
		{ cart: l, setCart: i } = C.useContext(Ln);
	return (
		C.useEffect(() => {
			if (l.length > 0) {
				const o = async (s) => {
					s.preventDefault();
					let u = document.querySelector('button');
					try {
						let d, p, m;
						(d = document.querySelector('#name')),
							(p = document.querySelector('#phone')),
							(m = document.querySelector('#message')),
							u.setAttribute('disabled', !0);
						const y = new FormData();
						y.append('order', JSON.stringify(l)),
							y.append('phoneNumber', p.value.trim()),
							y.append('name', d.value.trim());
						let w = await (
							await fetch('https://mbc.onrender.com/api/users/order', {
								body: y,
								method: 'POST',
							})
						).json();
						if (!w.success)
							return u.removeAttribute('disabled'), Lt(r, t, w.message);
						u.removeAttribute('disabled'),
							Lt(
								r,
								t,
								'Your order was placed successfully. You will hear from us soon.'
							),
							s.target.reset(),
							i([]);
					} catch (d) {
						u.removeAttribute('disabled'),
							Lt(r, t, 'Failed to complete request due to an unknown error.'),
							console.error(d);
					}
				};
				let a = document.forms['order-form'];
				return (
					a.addEventListener('submit', o),
					() => {
						a.removeEventListener('submit', o);
					}
				);
			}
		}, [l]),
		c.jsxs(c.Fragment, {
			children: [
				c.jsx(It, {
					children: c.jsx('title', { children: 'Checkout | Mma Beauty Care' }),
				}),
				c.jsx('p', { className: 'message hidden', children: e }),
				c.jsxs('main', {
					id: 'checkout',
					children: [
						c.jsx('h1', {
							className: 'fancy-header',
							children: 'Checkout Page',
						}),
						l.length > 0
							? c.jsxs('form', {
									id: 'order-form',
									children: [
										c.jsx('p', {
											children:
												'Please fill in the correct details, so we can easily contact you',
										}),
										c.jsxs('div', {
											className: 'field-group',
											children: [
												c.jsx('input', {
													type: 'text',
													id: 'name',
													name: '',
													required: !0,
												}),
												c.jsx('label', { htmlFor: 'name', children: 'Name' }),
											],
										}),
										c.jsxs('div', {
											className: 'field-group',
											children: [
												c.jsx('input', {
													type: 'tel',
													name: '',
													id: 'phone',
													placeholder: '08123456789',
													required: !0,
												}),
												c.jsx('label', {
													htmlFor: 'phone',
													children: 'Phone number',
												}),
											],
										}),
										c.jsx('button', {
											className: 'btn',
											type: 'submit',
											children: 'Complete order',
										}),
									],
							  })
							: c.jsx('h2', {
									className: 'load-info',
									children: 'Your cart is empty',
							  }),
					],
				}),
			],
		})
	);
}
const Lg = h0([
		{
			path: '/',
			element: c.jsxs(c.Fragment, {
				children: [
					c.jsx(dp, {}),
					c.jsx(vp, {}),
					c.jsx(S0, {}),
					c.jsx(ep, {}),
					c.jsx(fp, {}),
				],
			}),
			children: [
				{ index: !0, element: c.jsx(vg, {}) },
				{ path: 'about', element: c.jsx(gg, {}) },
				{ path: 'contact', element: c.jsx(Cg, {}) },
			],
			errorElement: c.jsx(Pc, {}),
		},
		{
			path: '/shop',
			element: c.jsx(jg, {}),
			children: [
				{ index: !0, element: c.jsx(Tg, {}) },
				{ path: '/shop/products/:id', element: c.jsx(Pg, {}) },
				{ path: 'cart', element: c.jsx(Ng, {}) },
				{ path: 'checkout', element: c.jsx(_g, {}) },
			],
			errorElement: c.jsx(Pc, {}),
		},
	]),
	Ln = C.createContext(void 0);
function Mg() {
	let [e, t] = C.useState([]),
		[n, r] = C.useState([]),
		[l, i] = C.useState('loading');
	return (
		C.useEffect(() => {
			(async () => {
				let a = await Rg('https://mbc.onrender.com/api/products');
				if (!a.success) return i('failed'), console.log(a.message);
				t([...a.data]), i('success');
			})();
		}, []),
		c.jsx(Ln.Provider, {
			value: { cart: n, products: e, setCart: r, loadState: l },
			children: c.jsx(o0, { router: Lg }),
		})
	);
}
Fo.createRoot(document.getElementById('root')).render(
	c.jsx(Ue.StrictMode, { children: c.jsx(Mg, {}) })
);

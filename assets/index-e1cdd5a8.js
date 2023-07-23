function Cp(e, t) {
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
function vl(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var jc = { exports: {} },
	Mi = {},
	Pc = { exports: {} },
	V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gl = Symbol.for('react.element'),
	Tp = Symbol.for('react.portal'),
	jp = Symbol.for('react.fragment'),
	Pp = Symbol.for('react.strict_mode'),
	Np = Symbol.for('react.profiler'),
	_p = Symbol.for('react.provider'),
	Rp = Symbol.for('react.context'),
	Lp = Symbol.for('react.forward_ref'),
	Mp = Symbol.for('react.suspense'),
	Op = Symbol.for('react.memo'),
	Ap = Symbol.for('react.lazy'),
	qu = Symbol.iterator;
function Dp(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (qu && e[qu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var Nc = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	_c = Object.assign,
	Rc = {};
function hr(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Rc),
		(this.updater = n || Nc);
}
hr.prototype.isReactComponent = {};
hr.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		);
	this.updater.enqueueSetState(this, e, t, 'setState');
};
hr.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Lc() {}
Lc.prototype = hr.prototype;
function za(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Rc),
		(this.updater = n || Nc);
}
var Fa = (za.prototype = new Lc());
Fa.constructor = za;
_c(Fa, hr.prototype);
Fa.isPureReactComponent = !0;
var Ku = Array.isArray,
	Mc = Object.prototype.hasOwnProperty,
	Ua = { current: null },
	Oc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ac(e, t, n) {
	var r,
		l = {},
		i = null,
		o = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (o = t.ref),
		t.key !== void 0 && (i = '' + t.key),
		t))
			Mc.call(t, r) && !Oc.hasOwnProperty(r) && (l[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) l.children = n;
	else if (1 < a) {
		for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
		l.children = u;
	}
	if (e && e.defaultProps)
		for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
	return {
		$$typeof: gl,
		type: e,
		key: i,
		ref: o,
		props: l,
		_owner: Ua.current,
	};
}
function Ip(e, t) {
	return {
		$$typeof: gl,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function Ba(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === gl;
}
function zp(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Gu = /\/+/g;
function oo(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? zp('' + e.key)
		: t.toString(36);
}
function Yl(e, t, n, r, l) {
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
					case gl:
					case Tp:
						o = !0;
				}
		}
	if (o)
		return (
			(o = e),
			(l = l(o)),
			(e = r === '' ? '.' + oo(o, 0) : r),
			Ku(l)
				? ((n = ''),
				  e != null && (n = e.replace(Gu, '$&/') + '/'),
				  Yl(l, t, n, '', function (s) {
						return s;
				  }))
				: l != null &&
				  (Ba(l) &&
						(l = Ip(
							l,
							n +
								(!l.key || (o && o.key === l.key)
									? ''
									: ('' + l.key).replace(Gu, '$&/') + '/') +
								e
						)),
				  t.push(l)),
			1
		);
	if (((o = 0), (r = r === '' ? '.' : r + ':'), Ku(e)))
		for (var a = 0; a < e.length; a++) {
			i = e[a];
			var u = r + oo(i, a);
			o += Yl(i, t, n, u, l);
		}
	else if (((u = Dp(e)), typeof u == 'function'))
		for (e = u.call(e), a = 0; !(i = e.next()).done; )
			(i = i.value), (u = r + oo(i, a++)), (o += Yl(i, t, n, u, l));
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
function Nl(e, t, n) {
	if (e == null) return e;
	var r = [],
		l = 0;
	return (
		Yl(e, r, '', '', function (i) {
			return t.call(n, i, l++);
		}),
		r
	);
}
function Fp(e) {
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
	ql = { transition: null },
	Up = {
		ReactCurrentDispatcher: Oe,
		ReactCurrentBatchConfig: ql,
		ReactCurrentOwner: Ua,
	};
V.Children = {
	map: Nl,
	forEach: function (e, t, n) {
		Nl(
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
			Nl(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			Nl(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!Ba(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			);
		return e;
	},
};
V.Component = hr;
V.Fragment = jp;
V.Profiler = Np;
V.PureComponent = za;
V.StrictMode = Pp;
V.Suspense = Mp;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Up;
V.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.'
		);
	var r = _c({}, e.props),
		l = e.key,
		i = e.ref,
		o = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((i = t.ref), (o = Ua.current)),
			t.key !== void 0 && (l = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var a = e.type.defaultProps;
		for (u in t)
			Mc.call(t, u) &&
				!Oc.hasOwnProperty(u) &&
				(r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
	}
	var u = arguments.length - 2;
	if (u === 1) r.children = n;
	else if (1 < u) {
		a = Array(u);
		for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
		r.children = a;
	}
	return { $$typeof: gl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
V.createContext = function (e) {
	return (
		(e = {
			$$typeof: Rp,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: _p, _context: e }),
		(e.Consumer = e)
	);
};
V.createElement = Ac;
V.createFactory = function (e) {
	var t = Ac.bind(null, e);
	return (t.type = e), t;
};
V.createRef = function () {
	return { current: null };
};
V.forwardRef = function (e) {
	return { $$typeof: Lp, render: e };
};
V.isValidElement = Ba;
V.lazy = function (e) {
	return { $$typeof: Ap, _payload: { _status: -1, _result: e }, _init: Fp };
};
V.memo = function (e, t) {
	return { $$typeof: Op, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
	var t = ql.transition;
	ql.transition = {};
	try {
		e();
	} finally {
		ql.transition = t;
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
Pc.exports = V;
var k = Pc.exports;
const Ue = vl(k),
	Bp = Cp({ __proto__: null, default: Ue }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hp = k,
	$p = Symbol.for('react.element'),
	Wp = Symbol.for('react.fragment'),
	Vp = Object.prototype.hasOwnProperty,
	Qp = Hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Yp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dc(e, t, n) {
	var r,
		l = {},
		i = null,
		o = null;
	n !== void 0 && (i = '' + n),
		t.key !== void 0 && (i = '' + t.key),
		t.ref !== void 0 && (o = t.ref);
	for (r in t) Vp.call(t, r) && !Yp.hasOwnProperty(r) && (l[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
	return {
		$$typeof: $p,
		type: e,
		key: i,
		ref: o,
		props: l,
		_owner: Qp.current,
	};
}
Mi.Fragment = Wp;
Mi.jsx = Dc;
Mi.jsxs = Dc;
jc.exports = Mi;
var c = jc.exports,
	Io = {},
	Ic = { exports: {} },
	Ke = {},
	zc = { exports: {} },
	Fc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(R, I) {
		var $ = R.length;
		R.push(I);
		e: for (; 0 < $; ) {
			var oe = ($ - 1) >>> 1,
				fe = R[oe];
			if (0 < l(fe, I)) (R[oe] = I), (R[$] = fe), ($ = oe);
			else break e;
		}
	}
	function n(R) {
		return R.length === 0 ? null : R[0];
	}
	function r(R) {
		if (R.length === 0) return null;
		var I = R[0],
			$ = R.pop();
		if ($ !== I) {
			R[0] = $;
			e: for (var oe = 0, fe = R.length, Rn = fe >>> 1; oe < Rn; ) {
				var ee = 2 * (oe + 1) - 1,
					Et = R[ee],
					mt = ee + 1,
					Ln = R[mt];
				if (0 > l(Et, $))
					mt < fe && 0 > l(Ln, Et)
						? ((R[oe] = Ln), (R[mt] = $), (oe = mt))
						: ((R[oe] = Et), (R[ee] = $), (oe = ee));
				else if (mt < fe && 0 > l(Ln, $)) (R[oe] = Ln), (R[mt] = $), (oe = mt);
				else break e;
			}
		}
		return I;
	}
	function l(R, I) {
		var $ = R.sortIndex - I.sortIndex;
		return $ !== 0 ? $ : R.id - I.id;
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
	var u = [],
		s = [],
		d = 1,
		p = null,
		v = 3,
		y = !1,
		x = !1,
		w = !1,
		P = typeof setTimeout == 'function' ? setTimeout : null,
		m = typeof clearTimeout == 'function' ? clearTimeout : null,
		f = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function g(R) {
		for (var I = n(s); I !== null; ) {
			if (I.callback === null) r(s);
			else if (I.startTime <= R)
				r(s), (I.sortIndex = I.expirationTime), t(u, I);
			else break;
			I = n(s);
		}
	}
	function h(R) {
		if (((w = !1), g(R), !x))
			if (n(u) !== null) (x = !0), lt(T);
			else {
				var I = n(s);
				I !== null && ht(h, I.startTime - R);
			}
	}
	function T(R, I) {
		(x = !1), w && ((w = !1), m(M), (M = -1)), (y = !0);
		var $ = v;
		try {
			for (
				g(I), p = n(u);
				p !== null && (!(p.expirationTime > I) || (R && !Ee()));

			) {
				var oe = p.callback;
				if (typeof oe == 'function') {
					(p.callback = null), (v = p.priorityLevel);
					var fe = oe(p.expirationTime <= I);
					(I = e.unstable_now()),
						typeof fe == 'function' ? (p.callback = fe) : p === n(u) && r(u),
						g(I);
				} else r(u);
				p = n(u);
			}
			if (p !== null) var Rn = !0;
			else {
				var ee = n(s);
				ee !== null && ht(h, ee.startTime - I), (Rn = !1);
			}
			return Rn;
		} finally {
			(p = null), (v = $), (y = !1);
		}
	}
	var _ = !1,
		N = null,
		M = -1,
		Q = 5,
		U = -1;
	function Ee() {
		return !(e.unstable_now() - U < Q);
	}
	function G() {
		if (N !== null) {
			var R = e.unstable_now();
			U = R;
			var I = !0;
			try {
				I = N(!0, R);
			} finally {
				I ? Ft() : ((_ = !1), (N = null));
			}
		} else _ = !1;
	}
	var Ft;
	if (typeof f == 'function')
		Ft = function () {
			f(G);
		};
	else if (typeof MessageChannel < 'u') {
		var _n = new MessageChannel(),
			Ut = _n.port2;
		(_n.port1.onmessage = G),
			(Ft = function () {
				Ut.postMessage(null);
			});
	} else
		Ft = function () {
			P(G, 0);
		};
	function lt(R) {
		(N = R), _ || ((_ = !0), Ft());
	}
	function ht(R, I) {
		M = P(function () {
			R(e.unstable_now());
		}, I);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (R) {
			R.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			x || y || ((x = !0), lt(T));
		}),
		(e.unstable_forceFrameRate = function (R) {
			0 > R || 125 < R
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (Q = 0 < R ? Math.floor(1e3 / R) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return v;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(u);
		}),
		(e.unstable_next = function (R) {
			switch (v) {
				case 1:
				case 2:
				case 3:
					var I = 3;
					break;
				default:
					I = v;
			}
			var $ = v;
			v = I;
			try {
				return R();
			} finally {
				v = $;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (R, I) {
			switch (R) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					R = 3;
			}
			var $ = v;
			v = R;
			try {
				return I();
			} finally {
				v = $;
			}
		}),
		(e.unstable_scheduleCallback = function (R, I, $) {
			var oe = e.unstable_now();
			switch (
				(typeof $ == 'object' && $ !== null
					? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? oe + $ : oe))
					: ($ = oe),
				R)
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
				(R = {
					id: d++,
					callback: I,
					priorityLevel: R,
					startTime: $,
					expirationTime: fe,
					sortIndex: -1,
				}),
				$ > oe
					? ((R.sortIndex = $),
					  t(s, R),
					  n(u) === null &&
							R === n(s) &&
							(w ? (m(M), (M = -1)) : (w = !0), ht(h, $ - oe)))
					: ((R.sortIndex = fe), t(u, R), x || y || ((x = !0), lt(T))),
				R
			);
		}),
		(e.unstable_shouldYield = Ee),
		(e.unstable_wrapCallback = function (R) {
			var I = v;
			return function () {
				var $ = v;
				v = I;
				try {
					return R.apply(this, arguments);
				} finally {
					v = $;
				}
			};
		});
})(Fc);
zc.exports = Fc;
var qp = zc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uc = k,
	qe = qp;
function j(e) {
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
var Bc = new Set(),
	Gr = {};
function Tn(e, t) {
	ir(e, t), ir(e + 'Capture', t);
}
function ir(e, t) {
	for (Gr[e] = t, e = 0; e < t.length; e++) Bc.add(t[e]);
}
var Lt = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	zo = Object.prototype.hasOwnProperty,
	Kp =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Xu = {},
	Ju = {};
function Gp(e) {
	return zo.call(Ju, e)
		? !0
		: zo.call(Xu, e)
		? !1
		: Kp.test(e)
		? (Ju[e] = !0)
		: ((Xu[e] = !0), !1);
}
function Xp(e, t, n, r) {
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
function Jp(e, t, n, r) {
	if (t === null || typeof t > 'u' || Xp(e, t, n, r)) return !0;
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
var je = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		je[e] = new Ae(e, 0, !1, e, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0];
	je[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	je[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (e) {
	je[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		je[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	je[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	je[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	je[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	je[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ha = /[\-:]([a-z])/g;
function $a(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Ha, $a);
		je[t] = new Ae(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Ha, $a);
		je[t] = new Ae(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(Ha, $a);
	je[t] = new Ae(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	je[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new Ae(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	je[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wa(e, t, n, r) {
	var l = je.hasOwnProperty(t) ? je[t] : null;
	(l !== null
		? l.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(Jp(t, n, l, r) && (n = null),
		r || l === null
			? Gp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var Dt = Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	_l = Symbol.for('react.element'),
	Dn = Symbol.for('react.portal'),
	In = Symbol.for('react.fragment'),
	Va = Symbol.for('react.strict_mode'),
	Fo = Symbol.for('react.profiler'),
	Hc = Symbol.for('react.provider'),
	$c = Symbol.for('react.context'),
	Qa = Symbol.for('react.forward_ref'),
	Uo = Symbol.for('react.suspense'),
	Bo = Symbol.for('react.suspense_list'),
	Ya = Symbol.for('react.memo'),
	Wt = Symbol.for('react.lazy'),
	Wc = Symbol.for('react.offscreen'),
	Zu = Symbol.iterator;
function Sr(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Zu && e[Zu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var se = Object.assign,
	ao;
function Dr(e) {
	if (ao === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			ao = (t && t[1]) || '';
		}
	return (
		`
` +
		ao +
		e
	);
}
var uo = !1;
function so(e, t) {
	if (!e || uo) return '';
	uo = !0;
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
				} catch (s) {
					var r = s;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (s) {
					r = s;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (s) {
				r = s;
			}
			e();
		}
	} catch (s) {
		if (s && r && typeof s.stack == 'string') {
			for (
				var l = s.stack.split(`
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
								var u =
									`
` + l[o].replace(' at new ', ' at ');
								return (
									e.displayName &&
										u.includes('<anonymous>') &&
										(u = u.replace('<anonymous>', e.displayName)),
									u
								);
							}
						while (1 <= o && 0 <= a);
					break;
				}
		}
	} finally {
		(uo = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : '') ? Dr(e) : '';
}
function Zp(e) {
	switch (e.tag) {
		case 5:
			return Dr(e.type);
		case 16:
			return Dr('Lazy');
		case 13:
			return Dr('Suspense');
		case 19:
			return Dr('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = so(e.type, !1)), e;
		case 11:
			return (e = so(e.type.render, !1)), e;
		case 1:
			return (e = so(e.type, !0)), e;
		default:
			return '';
	}
}
function Ho(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case In:
			return 'Fragment';
		case Dn:
			return 'Portal';
		case Fo:
			return 'Profiler';
		case Va:
			return 'StrictMode';
		case Uo:
			return 'Suspense';
		case Bo:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case $c:
				return (e.displayName || 'Context') + '.Consumer';
			case Hc:
				return (e._context.displayName || 'Context') + '.Provider';
			case Qa:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case Ya:
				return (
					(t = e.displayName || null), t !== null ? t : Ho(e.type) || 'Memo'
				);
			case Wt:
				(t = e._payload), (e = e._init);
				try {
					return Ho(e(t));
				} catch {}
		}
	return null;
}
function bp(e) {
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
			return Ho(t);
		case 8:
			return t === Va ? 'StrictMode' : 'Mode';
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
function ln(e) {
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
function Vc(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	);
}
function eh(e) {
	var t = Vc(e) ? 'checked' : 'value',
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
function Rl(e) {
	e._valueTracker || (e._valueTracker = eh(e));
}
function Qc(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return (
		e && (r = Vc(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function oi(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function $o(e, t) {
	var n = t.checked;
	return se({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function bu(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = ln(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null,
		});
}
function Yc(e, t) {
	(t = t.checked), t != null && Wa(e, 'checked', t, !1);
}
function Wo(e, t) {
	Yc(e, t);
	var n = ln(t.value),
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
		? Vo(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && Vo(e, t.type, ln(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function es(e, t, n) {
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
function Vo(e, t, n) {
	(t !== 'number' || oi(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Ir = Array.isArray;
function Gn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
		for (n = 0; n < e.length; n++)
			(l = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== l && (e[n].selected = l),
				l && r && (e[n].defaultSelected = !0);
	} else {
		for (n = '' + ln(n), t = null, l = 0; l < e.length; l++) {
			if (e[l].value === n) {
				(e[l].selected = !0), r && (e[l].defaultSelected = !0);
				return;
			}
			t !== null || e[l].disabled || (t = e[l]);
		}
		t !== null && (t.selected = !0);
	}
}
function Qo(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
	return se({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue,
	});
}
function ts(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(j(92));
			if (Ir(n)) {
				if (1 < n.length) throw Error(j(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ''), (n = t);
	}
	e._wrapperState = { initialValue: ln(n) };
}
function qc(e, t) {
	var n = ln(t.value),
		r = ln(t.defaultValue);
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r);
}
function ns(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Kc(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function Yo(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? Kc(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e;
}
var Ll,
	Gc = (function (e) {
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
				Ll = Ll || document.createElement('div'),
					Ll.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = Ll.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Xr(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Ur = {
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
	th = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ur).forEach(function (e) {
	th.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ur[t] = Ur[e]);
	});
});
function Xc(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (Ur.hasOwnProperty(e) && Ur[e])
		? ('' + t).trim()
		: t + 'px';
}
function Jc(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				l = Xc(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
		}
}
var nh = se(
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
function qo(e, t) {
	if (t) {
		if (nh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(j(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(j(60));
			if (
				typeof t.dangerouslySetInnerHTML != 'object' ||
				!('__html' in t.dangerouslySetInnerHTML)
			)
				throw Error(j(61));
		}
		if (t.style != null && typeof t.style != 'object') throw Error(j(62));
	}
}
function Ko(e, t) {
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
var Go = null;
function qa(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Xo = null,
	Xn = null,
	Jn = null;
function rs(e) {
	if ((e = xl(e))) {
		if (typeof Xo != 'function') throw Error(j(280));
		var t = e.stateNode;
		t && ((t = zi(t)), Xo(e.stateNode, e.type, t));
	}
}
function Zc(e) {
	Xn ? (Jn ? Jn.push(e) : (Jn = [e])) : (Xn = e);
}
function bc() {
	if (Xn) {
		var e = Xn,
			t = Jn;
		if (((Jn = Xn = null), rs(e), t)) for (e = 0; e < t.length; e++) rs(t[e]);
	}
}
function ed(e, t) {
	return e(t);
}
function td() {}
var co = !1;
function nd(e, t, n) {
	if (co) return e(t, n);
	co = !0;
	try {
		return ed(e, t, n);
	} finally {
		(co = !1), (Xn !== null || Jn !== null) && (td(), bc());
	}
}
function Jr(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = zi(n);
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
	if (n && typeof n != 'function') throw Error(j(231, t, typeof n));
	return n;
}
var Jo = !1;
if (Lt)
	try {
		var Er = {};
		Object.defineProperty(Er, 'passive', {
			get: function () {
				Jo = !0;
			},
		}),
			window.addEventListener('test', Er, Er),
			window.removeEventListener('test', Er, Er);
	} catch {
		Jo = !1;
	}
function rh(e, t, n, r, l, i, o, a, u) {
	var s = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, s);
	} catch (d) {
		this.onError(d);
	}
}
var Br = !1,
	ai = null,
	ui = !1,
	Zo = null,
	lh = {
		onError: function (e) {
			(Br = !0), (ai = e);
		},
	};
function ih(e, t, n, r, l, i, o, a, u) {
	(Br = !1), (ai = null), rh.apply(lh, arguments);
}
function oh(e, t, n, r, l, i, o, a, u) {
	if ((ih.apply(this, arguments), Br)) {
		if (Br) {
			var s = ai;
			(Br = !1), (ai = null);
		} else throw Error(j(198));
		ui || ((ui = !0), (Zo = s));
	}
}
function jn(e) {
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
function rd(e) {
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
function ls(e) {
	if (jn(e) !== e) throw Error(j(188));
}
function ah(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = jn(e)), t === null)) throw Error(j(188));
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
				if (i === n) return ls(l), e;
				if (i === r) return ls(l), t;
				i = i.sibling;
			}
			throw Error(j(188));
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
				if (!o) throw Error(j(189));
			}
		}
		if (n.alternate !== r) throw Error(j(190));
	}
	if (n.tag !== 3) throw Error(j(188));
	return n.stateNode.current === n ? e : t;
}
function ld(e) {
	return (e = ah(e)), e !== null ? id(e) : null;
}
function id(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = id(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var od = qe.unstable_scheduleCallback,
	is = qe.unstable_cancelCallback,
	uh = qe.unstable_shouldYield,
	sh = qe.unstable_requestPaint,
	de = qe.unstable_now,
	ch = qe.unstable_getCurrentPriorityLevel,
	Ka = qe.unstable_ImmediatePriority,
	ad = qe.unstable_UserBlockingPriority,
	si = qe.unstable_NormalPriority,
	dh = qe.unstable_LowPriority,
	ud = qe.unstable_IdlePriority,
	Oi = null,
	xt = null;
function fh(e) {
	if (xt && typeof xt.onCommitFiberRoot == 'function')
		try {
			xt.onCommitFiberRoot(Oi, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var dt = Math.clz32 ? Math.clz32 : mh,
	ph = Math.log,
	hh = Math.LN2;
function mh(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((ph(e) / hh) | 0)) | 0;
}
var Ml = 64,
	Ol = 4194304;
function zr(e) {
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
function ci(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		l = e.suspendedLanes,
		i = e.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var a = o & ~l;
		a !== 0 ? (r = zr(a)) : ((i &= o), i !== 0 && (r = zr(i)));
	} else (o = n & ~l), o !== 0 ? (r = zr(o)) : i !== 0 && (r = zr(i));
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
function vh(e, t) {
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
function gh(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			l = e.expirationTimes,
			i = e.pendingLanes;
		0 < i;

	) {
		var o = 31 - dt(i),
			a = 1 << o,
			u = l[o];
		u === -1
			? (!(a & n) || a & r) && (l[o] = vh(a, t))
			: u <= t && (e.expiredLanes |= a),
			(i &= ~a);
	}
}
function bo(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function sd() {
	var e = Ml;
	return (Ml <<= 1), !(Ml & 4194240) && (Ml = 64), e;
}
function fo(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function yl(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - dt(t)),
		(e[t] = n);
}
function yh(e, t) {
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
function Ga(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - dt(n),
			l = 1 << r;
		(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
	}
}
var K = 0;
function cd(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var dd,
	Xa,
	fd,
	pd,
	hd,
	ea = !1,
	Al = [],
	Gt = null,
	Xt = null,
	Jt = null,
	Zr = new Map(),
	br = new Map(),
	Qt = [],
	wh =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		);
function os(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			Gt = null;
			break;
		case 'dragenter':
		case 'dragleave':
			Xt = null;
			break;
		case 'mouseover':
		case 'mouseout':
			Jt = null;
			break;
		case 'pointerover':
		case 'pointerout':
			Zr.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			br.delete(t.pointerId);
	}
}
function kr(e, t, n, r, l, i) {
	return e === null || e.nativeEvent !== i
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: i,
				targetContainers: [l],
		  }),
		  t !== null && ((t = xl(t)), t !== null && Xa(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  l !== null && t.indexOf(l) === -1 && t.push(l),
		  e);
}
function xh(e, t, n, r, l) {
	switch (t) {
		case 'focusin':
			return (Gt = kr(Gt, e, t, n, r, l)), !0;
		case 'dragenter':
			return (Xt = kr(Xt, e, t, n, r, l)), !0;
		case 'mouseover':
			return (Jt = kr(Jt, e, t, n, r, l)), !0;
		case 'pointerover':
			var i = l.pointerId;
			return Zr.set(i, kr(Zr.get(i) || null, e, t, n, r, l)), !0;
		case 'gotpointercapture':
			return (
				(i = l.pointerId), br.set(i, kr(br.get(i) || null, e, t, n, r, l)), !0
			);
	}
	return !1;
}
function md(e) {
	var t = fn(e.target);
	if (t !== null) {
		var n = jn(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = rd(n)), t !== null)) {
					(e.blockedOn = t),
						hd(e.priority, function () {
							fd(n);
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
function Kl(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = ta(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(Go = r), n.target.dispatchEvent(r), (Go = null);
		} else return (t = xl(n)), t !== null && Xa(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function as(e, t, n) {
	Kl(e) && n.delete(t);
}
function Sh() {
	(ea = !1),
		Gt !== null && Kl(Gt) && (Gt = null),
		Xt !== null && Kl(Xt) && (Xt = null),
		Jt !== null && Kl(Jt) && (Jt = null),
		Zr.forEach(as),
		br.forEach(as);
}
function Cr(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		ea ||
			((ea = !0),
			qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Sh)));
}
function el(e) {
	function t(l) {
		return Cr(l, e);
	}
	if (0 < Al.length) {
		Cr(Al[0], e);
		for (var n = 1; n < Al.length; n++) {
			var r = Al[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		Gt !== null && Cr(Gt, e),
			Xt !== null && Cr(Xt, e),
			Jt !== null && Cr(Jt, e),
			Zr.forEach(t),
			br.forEach(t),
			n = 0;
		n < Qt.length;
		n++
	)
		(r = Qt[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); )
		md(n), n.blockedOn === null && Qt.shift();
}
var Zn = Dt.ReactCurrentBatchConfig,
	di = !0;
function Eh(e, t, n, r) {
	var l = K,
		i = Zn.transition;
	Zn.transition = null;
	try {
		(K = 1), Ja(e, t, n, r);
	} finally {
		(K = l), (Zn.transition = i);
	}
}
function kh(e, t, n, r) {
	var l = K,
		i = Zn.transition;
	Zn.transition = null;
	try {
		(K = 4), Ja(e, t, n, r);
	} finally {
		(K = l), (Zn.transition = i);
	}
}
function Ja(e, t, n, r) {
	if (di) {
		var l = ta(e, t, n, r);
		if (l === null) Eo(e, t, r, fi, n), os(e, r);
		else if (xh(l, e, t, n, r)) r.stopPropagation();
		else if ((os(e, r), t & 4 && -1 < wh.indexOf(e))) {
			for (; l !== null; ) {
				var i = xl(l);
				if (
					(i !== null && dd(i),
					(i = ta(e, t, n, r)),
					i === null && Eo(e, t, r, fi, n),
					i === l)
				)
					break;
				l = i;
			}
			l !== null && r.stopPropagation();
		} else Eo(e, t, r, null, n);
	}
}
var fi = null;
function ta(e, t, n, r) {
	if (((fi = null), (e = qa(r)), (e = fn(e)), e !== null))
		if (((t = jn(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = rd(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (fi = e), null;
}
function vd(e) {
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
			switch (ch()) {
				case Ka:
					return 1;
				case ad:
					return 4;
				case si:
				case dh:
					return 16;
				case ud:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var qt = null,
	Za = null,
	Gl = null;
function gd() {
	if (Gl) return Gl;
	var e,
		t = Za,
		n = t.length,
		r,
		l = 'value' in qt ? qt.value : qt.textContent,
		i = l.length;
	for (e = 0; e < n && t[e] === l[e]; e++);
	var o = n - e;
	for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
	return (Gl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Xl(e) {
	var t = e.keyCode;
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Dl() {
	return !0;
}
function us() {
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
				? Dl
				: us),
			(this.isPropagationStopped = us),
			this
		);
	}
	return (
		se(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = Dl));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = Dl));
			},
			persist: function () {},
			isPersistent: Dl,
		}),
		t
	);
}
var mr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	ba = Ge(mr),
	wl = se({}, mr, { view: 0, detail: 0 }),
	Ch = Ge(wl),
	po,
	ho,
	Tr,
	Ai = se({}, wl, {
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
		getModifierState: eu,
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
				: (e !== Tr &&
						(Tr && e.type === 'mousemove'
							? ((po = e.screenX - Tr.screenX), (ho = e.screenY - Tr.screenY))
							: (ho = po = 0),
						(Tr = e)),
				  po);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : ho;
		},
	}),
	ss = Ge(Ai),
	Th = se({}, Ai, { dataTransfer: 0 }),
	jh = Ge(Th),
	Ph = se({}, wl, { relatedTarget: 0 }),
	mo = Ge(Ph),
	Nh = se({}, mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	_h = Ge(Nh),
	Rh = se({}, mr, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Lh = Ge(Rh),
	Mh = se({}, mr, { data: 0 }),
	cs = Ge(Mh),
	Oh = {
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
	Ah = {
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
	Dh = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	};
function Ih(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Dh[e]) ? !!t[e] : !1;
}
function eu() {
	return Ih;
}
var zh = se({}, wl, {
		key: function (e) {
			if (e.key) {
				var t = Oh[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = Xl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? Ah[e.keyCode] || 'Unidentified'
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
		getModifierState: eu,
		charCode: function (e) {
			return e.type === 'keypress' ? Xl(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress'
				? Xl(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0;
		},
	}),
	Fh = Ge(zh),
	Uh = se({}, Ai, {
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
	ds = Ge(Uh),
	Bh = se({}, wl, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: eu,
	}),
	Hh = Ge(Bh),
	$h = se({}, mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Wh = Ge($h),
	Vh = se({}, Ai, {
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
	Qh = Ge(Vh),
	Yh = [9, 13, 27, 32],
	tu = Lt && 'CompositionEvent' in window,
	Hr = null;
Lt && 'documentMode' in document && (Hr = document.documentMode);
var qh = Lt && 'TextEvent' in window && !Hr,
	yd = Lt && (!tu || (Hr && 8 < Hr && 11 >= Hr)),
	fs = String.fromCharCode(32),
	ps = !1;
function wd(e, t) {
	switch (e) {
		case 'keyup':
			return Yh.indexOf(t.keyCode) !== -1;
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
function xd(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var zn = !1;
function Kh(e, t) {
	switch (e) {
		case 'compositionend':
			return xd(t);
		case 'keypress':
			return t.which !== 32 ? null : ((ps = !0), fs);
		case 'textInput':
			return (e = t.data), e === fs && ps ? null : e;
		default:
			return null;
	}
}
function Gh(e, t) {
	if (zn)
		return e === 'compositionend' || (!tu && wd(e, t))
			? ((e = gd()), (Gl = Za = qt = null), (zn = !1), e)
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
			return yd && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var Xh = {
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
function hs(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!Xh[e.type] : t === 'textarea';
}
function Sd(e, t, n, r) {
	Zc(r),
		(t = pi(t, 'onChange')),
		0 < t.length &&
			((n = new ba('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }));
}
var $r = null,
	tl = null;
function Jh(e) {
	Md(e, 0);
}
function Di(e) {
	var t = Bn(e);
	if (Qc(t)) return e;
}
function Zh(e, t) {
	if (e === 'change') return t;
}
var Ed = !1;
if (Lt) {
	var vo;
	if (Lt) {
		var go = 'oninput' in document;
		if (!go) {
			var ms = document.createElement('div');
			ms.setAttribute('oninput', 'return;'),
				(go = typeof ms.oninput == 'function');
		}
		vo = go;
	} else vo = !1;
	Ed = vo && (!document.documentMode || 9 < document.documentMode);
}
function vs() {
	$r && ($r.detachEvent('onpropertychange', kd), (tl = $r = null));
}
function kd(e) {
	if (e.propertyName === 'value' && Di(tl)) {
		var t = [];
		Sd(t, tl, e, qa(e)), nd(Jh, t);
	}
}
function bh(e, t, n) {
	e === 'focusin'
		? (vs(), ($r = t), (tl = n), $r.attachEvent('onpropertychange', kd))
		: e === 'focusout' && vs();
}
function em(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
		return Di(tl);
}
function tm(e, t) {
	if (e === 'click') return Di(t);
}
function nm(e, t) {
	if (e === 'input' || e === 'change') return Di(t);
}
function rm(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pt = typeof Object.is == 'function' ? Object.is : rm;
function nl(e, t) {
	if (pt(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var l = n[r];
		if (!zo.call(t, l) || !pt(e[l], t[l])) return !1;
	}
	return !0;
}
function gs(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function ys(e, t) {
	var n = gs(e);
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
		n = gs(n);
	}
}
function Cd(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Cd(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function Td() {
	for (var e = window, t = oi(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = oi(e.document);
	}
	return t;
}
function nu(e) {
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
function lm(e) {
	var t = Td(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Cd(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && nu(n)) {
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
					(l = ys(n, i));
				var o = ys(n, r);
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
var im = Lt && 'documentMode' in document && 11 >= document.documentMode,
	Fn = null,
	na = null,
	Wr = null,
	ra = !1;
function ws(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	ra ||
		Fn == null ||
		Fn !== oi(r) ||
		((r = Fn),
		'selectionStart' in r && nu(r)
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
		(Wr && nl(Wr, r)) ||
			((Wr = r),
			(r = pi(na, 'onSelect')),
			0 < r.length &&
				((t = new ba('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Fn))));
}
function Il(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	);
}
var Un = {
		animationend: Il('Animation', 'AnimationEnd'),
		animationiteration: Il('Animation', 'AnimationIteration'),
		animationstart: Il('Animation', 'AnimationStart'),
		transitionend: Il('Transition', 'TransitionEnd'),
	},
	yo = {},
	jd = {};
Lt &&
	((jd = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete Un.animationend.animation,
		delete Un.animationiteration.animation,
		delete Un.animationstart.animation),
	'TransitionEvent' in window || delete Un.transitionend.transition);
function Ii(e) {
	if (yo[e]) return yo[e];
	if (!Un[e]) return e;
	var t = Un[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in jd) return (yo[e] = t[n]);
	return e;
}
var Pd = Ii('animationend'),
	Nd = Ii('animationiteration'),
	_d = Ii('animationstart'),
	Rd = Ii('transitionend'),
	Ld = new Map(),
	xs =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		);
function an(e, t) {
	Ld.set(e, t), Tn(t, [e]);
}
for (var wo = 0; wo < xs.length; wo++) {
	var xo = xs[wo],
		om = xo.toLowerCase(),
		am = xo[0].toUpperCase() + xo.slice(1);
	an(om, 'on' + am);
}
an(Pd, 'onAnimationEnd');
an(Nd, 'onAnimationIteration');
an(_d, 'onAnimationStart');
an('dblclick', 'onDoubleClick');
an('focusin', 'onFocus');
an('focusout', 'onBlur');
an(Rd, 'onTransitionEnd');
ir('onMouseEnter', ['mouseout', 'mouseover']);
ir('onMouseLeave', ['mouseout', 'mouseover']);
ir('onPointerEnter', ['pointerout', 'pointerover']);
ir('onPointerLeave', ['pointerout', 'pointerover']);
Tn(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Tn(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
);
Tn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Tn(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Tn(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Tn(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Fr =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	um = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Fr));
function Ss(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), oh(r, t, void 0, e), (e.currentTarget = null);
}
function Md(e, t) {
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
						u = a.instance,
						s = a.currentTarget;
					if (((a = a.listener), u !== i && l.isPropagationStopped())) break e;
					Ss(l, a, s), (i = u);
				}
			else
				for (o = 0; o < r.length; o++) {
					if (
						((a = r[o]),
						(u = a.instance),
						(s = a.currentTarget),
						(a = a.listener),
						u !== i && l.isPropagationStopped())
					)
						break e;
					Ss(l, a, s), (i = u);
				}
		}
	}
	if (ui) throw ((e = Zo), (ui = !1), (Zo = null), e);
}
function Z(e, t) {
	var n = t[ua];
	n === void 0 && (n = t[ua] = new Set());
	var r = e + '__bubble';
	n.has(r) || (Od(t, e, 2, !1), n.add(r));
}
function So(e, t, n) {
	var r = 0;
	t && (r |= 4), Od(n, e, r, t);
}
var zl = '_reactListening' + Math.random().toString(36).slice(2);
function rl(e) {
	if (!e[zl]) {
		(e[zl] = !0),
			Bc.forEach(function (n) {
				n !== 'selectionchange' && (um.has(n) || So(n, !1, e), So(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[zl] || ((t[zl] = !0), So('selectionchange', !1, t));
	}
}
function Od(e, t, n, r) {
	switch (vd(t)) {
		case 1:
			var l = Eh;
			break;
		case 4:
			l = kh;
			break;
		default:
			l = Ja;
	}
	(n = l.bind(null, t, n, e)),
		(l = void 0),
		!Jo ||
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
function Eo(e, t, n, r, l) {
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
						var u = o.tag;
						if (
							(u === 3 || u === 4) &&
							((u = o.stateNode.containerInfo),
							u === l || (u.nodeType === 8 && u.parentNode === l))
						)
							return;
						o = o.return;
					}
				for (; a !== null; ) {
					if (((o = fn(a)), o === null)) return;
					if (((u = o.tag), u === 5 || u === 6)) {
						r = i = o;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	nd(function () {
		var s = i,
			d = qa(n),
			p = [];
		e: {
			var v = Ld.get(e);
			if (v !== void 0) {
				var y = ba,
					x = e;
				switch (e) {
					case 'keypress':
						if (Xl(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						y = Fh;
						break;
					case 'focusin':
						(x = 'focus'), (y = mo);
						break;
					case 'focusout':
						(x = 'blur'), (y = mo);
						break;
					case 'beforeblur':
					case 'afterblur':
						y = mo;
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
						y = ss;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						y = jh;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						y = Hh;
						break;
					case Pd:
					case Nd:
					case _d:
						y = _h;
						break;
					case Rd:
						y = Wh;
						break;
					case 'scroll':
						y = Ch;
						break;
					case 'wheel':
						y = Qh;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						y = Lh;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						y = ds;
				}
				var w = (t & 4) !== 0,
					P = !w && e === 'scroll',
					m = w ? (v !== null ? v + 'Capture' : null) : v;
				w = [];
				for (var f = s, g; f !== null; ) {
					g = f;
					var h = g.stateNode;
					if (
						(g.tag === 5 &&
							h !== null &&
							((g = h),
							m !== null && ((h = Jr(f, m)), h != null && w.push(ll(f, h, g)))),
						P)
					)
						break;
					f = f.return;
				}
				0 < w.length &&
					((v = new y(v, x, null, n, d)), p.push({ event: v, listeners: w }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((v = e === 'mouseover' || e === 'pointerover'),
					(y = e === 'mouseout' || e === 'pointerout'),
					v &&
						n !== Go &&
						(x = n.relatedTarget || n.fromElement) &&
						(fn(x) || x[Mt]))
				)
					break e;
				if (
					(y || v) &&
					((v =
						d.window === d
							? d
							: (v = d.ownerDocument)
							? v.defaultView || v.parentWindow
							: window),
					y
						? ((x = n.relatedTarget || n.toElement),
						  (y = s),
						  (x = x ? fn(x) : null),
						  x !== null &&
								((P = jn(x)), x !== P || (x.tag !== 5 && x.tag !== 6)) &&
								(x = null))
						: ((y = null), (x = s)),
					y !== x)
				) {
					if (
						((w = ss),
						(h = 'onMouseLeave'),
						(m = 'onMouseEnter'),
						(f = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((w = ds),
							(h = 'onPointerLeave'),
							(m = 'onPointerEnter'),
							(f = 'pointer')),
						(P = y == null ? v : Bn(y)),
						(g = x == null ? v : Bn(x)),
						(v = new w(h, f + 'leave', y, n, d)),
						(v.target = P),
						(v.relatedTarget = g),
						(h = null),
						fn(d) === s &&
							((w = new w(m, f + 'enter', x, n, d)),
							(w.target = g),
							(w.relatedTarget = P),
							(h = w)),
						(P = h),
						y && x)
					)
						t: {
							for (w = y, m = x, f = 0, g = w; g; g = On(g)) f++;
							for (g = 0, h = m; h; h = On(h)) g++;
							for (; 0 < f - g; ) (w = On(w)), f--;
							for (; 0 < g - f; ) (m = On(m)), g--;
							for (; f--; ) {
								if (w === m || (m !== null && w === m.alternate)) break t;
								(w = On(w)), (m = On(m));
							}
							w = null;
						}
					else w = null;
					y !== null && Es(p, v, y, w, !1),
						x !== null && P !== null && Es(p, P, x, w, !0);
				}
			}
			e: {
				if (
					((v = s ? Bn(s) : window),
					(y = v.nodeName && v.nodeName.toLowerCase()),
					y === 'select' || (y === 'input' && v.type === 'file'))
				)
					var T = Zh;
				else if (hs(v))
					if (Ed) T = nm;
					else {
						T = em;
						var _ = bh;
					}
				else
					(y = v.nodeName) &&
						y.toLowerCase() === 'input' &&
						(v.type === 'checkbox' || v.type === 'radio') &&
						(T = tm);
				if (T && (T = T(e, s))) {
					Sd(p, T, n, d);
					break e;
				}
				_ && _(e, v, s),
					e === 'focusout' &&
						(_ = v._wrapperState) &&
						_.controlled &&
						v.type === 'number' &&
						Vo(v, 'number', v.value);
			}
			switch (((_ = s ? Bn(s) : window), e)) {
				case 'focusin':
					(hs(_) || _.contentEditable === 'true') &&
						((Fn = _), (na = s), (Wr = null));
					break;
				case 'focusout':
					Wr = na = Fn = null;
					break;
				case 'mousedown':
					ra = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(ra = !1), ws(p, n, d);
					break;
				case 'selectionchange':
					if (im) break;
				case 'keydown':
				case 'keyup':
					ws(p, n, d);
			}
			var N;
			if (tu)
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
				zn
					? wd(e, n) && (M = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (M = 'onCompositionStart');
			M &&
				(yd &&
					n.locale !== 'ko' &&
					(zn || M !== 'onCompositionStart'
						? M === 'onCompositionEnd' && zn && (N = gd())
						: ((qt = d),
						  (Za = 'value' in qt ? qt.value : qt.textContent),
						  (zn = !0))),
				(_ = pi(s, M)),
				0 < _.length &&
					((M = new cs(M, e, null, n, d)),
					p.push({ event: M, listeners: _ }),
					N ? (M.data = N) : ((N = xd(n)), N !== null && (M.data = N)))),
				(N = qh ? Kh(e, n) : Gh(e, n)) &&
					((s = pi(s, 'onBeforeInput')),
					0 < s.length &&
						((d = new cs('onBeforeInput', 'beforeinput', null, n, d)),
						p.push({ event: d, listeners: s }),
						(d.data = N)));
		}
		Md(p, t);
	});
}
function ll(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function pi(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var l = e,
			i = l.stateNode;
		l.tag === 5 &&
			i !== null &&
			((l = i),
			(i = Jr(e, n)),
			i != null && r.unshift(ll(e, i, l)),
			(i = Jr(e, t)),
			i != null && r.push(ll(e, i, l))),
			(e = e.return);
	}
	return r;
}
function On(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function Es(e, t, n, r, l) {
	for (var i = t._reactName, o = []; n !== null && n !== r; ) {
		var a = n,
			u = a.alternate,
			s = a.stateNode;
		if (u !== null && u === r) break;
		a.tag === 5 &&
			s !== null &&
			((a = s),
			l
				? ((u = Jr(n, i)), u != null && o.unshift(ll(n, u, a)))
				: l || ((u = Jr(n, i)), u != null && o.push(ll(n, u, a)))),
			(n = n.return);
	}
	o.length !== 0 && e.push({ event: t, listeners: o });
}
var sm = /\r\n?/g,
	cm = /\u0000|\uFFFD/g;
function ks(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			sm,
			`
`
		)
		.replace(cm, '');
}
function Fl(e, t, n) {
	if (((t = ks(t)), ks(e) !== t && n)) throw Error(j(425));
}
function hi() {}
var la = null,
	ia = null;
function oa(e, t) {
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
var aa = typeof setTimeout == 'function' ? setTimeout : void 0,
	dm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	Cs = typeof Promise == 'function' ? Promise : void 0,
	fm =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof Cs < 'u'
			? function (e) {
					return Cs.resolve(null).then(e).catch(pm);
			  }
			: aa;
function pm(e) {
	setTimeout(function () {
		throw e;
	});
}
function ko(e, t) {
	var n = t,
		r = 0;
	do {
		var l = n.nextSibling;
		if ((e.removeChild(n), l && l.nodeType === 8))
			if (((n = l.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(l), el(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = l;
	} while (n);
	el(t);
}
function Zt(e) {
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
function Ts(e) {
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
var vr = Math.random().toString(36).slice(2),
	wt = '__reactFiber$' + vr,
	il = '__reactProps$' + vr,
	Mt = '__reactContainer$' + vr,
	ua = '__reactEvents$' + vr,
	hm = '__reactListeners$' + vr,
	mm = '__reactHandles$' + vr;
function fn(e) {
	var t = e[wt];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Mt] || n[wt])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = Ts(e); e !== null; ) {
					if ((n = e[wt])) return n;
					e = Ts(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function xl(e) {
	return (
		(e = e[wt] || e[Mt]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Bn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(j(33));
}
function zi(e) {
	return e[il] || null;
}
var sa = [],
	Hn = -1;
function un(e) {
	return { current: e };
}
function b(e) {
	0 > Hn || ((e.current = sa[Hn]), (sa[Hn] = null), Hn--);
}
function J(e, t) {
	Hn++, (sa[Hn] = e.current), (e.current = t);
}
var on = {},
	Re = un(on),
	Be = un(!1),
	wn = on;
function or(e, t) {
	var n = e.type.contextTypes;
	if (!n) return on;
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
function mi() {
	b(Be), b(Re);
}
function js(e, t, n) {
	if (Re.current !== on) throw Error(j(168));
	J(Re, t), J(Be, n);
}
function Ad(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var l in r) if (!(l in t)) throw Error(j(108, bp(e) || 'Unknown', l));
	return se({}, n, r);
}
function vi(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || on),
		(wn = Re.current),
		J(Re, e),
		J(Be, Be.current),
		!0
	);
}
function Ps(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(j(169));
	n
		? ((e = Ad(e, t, wn)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  b(Be),
		  b(Re),
		  J(Re, e))
		: b(Be),
		J(Be, n);
}
var jt = null,
	Fi = !1,
	Co = !1;
function Dd(e) {
	jt === null ? (jt = [e]) : jt.push(e);
}
function vm(e) {
	(Fi = !0), Dd(e);
}
function sn() {
	if (!Co && jt !== null) {
		Co = !0;
		var e = 0,
			t = K;
		try {
			var n = jt;
			for (K = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(jt = null), (Fi = !1);
		} catch (l) {
			throw (jt !== null && (jt = jt.slice(e + 1)), od(Ka, sn), l);
		} finally {
			(K = t), (Co = !1);
		}
	}
	return null;
}
var $n = [],
	Wn = 0,
	gi = null,
	yi = 0,
	Ze = [],
	be = 0,
	xn = null,
	Pt = 1,
	Nt = '';
function cn(e, t) {
	($n[Wn++] = yi), ($n[Wn++] = gi), (gi = e), (yi = t);
}
function Id(e, t, n) {
	(Ze[be++] = Pt), (Ze[be++] = Nt), (Ze[be++] = xn), (xn = e);
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
function ru(e) {
	e.return !== null && (cn(e, 1), Id(e, 1, 0));
}
function lu(e) {
	for (; e === gi; )
		(gi = $n[--Wn]), ($n[Wn] = null), (yi = $n[--Wn]), ($n[Wn] = null);
	for (; e === xn; )
		(xn = Ze[--be]),
			(Ze[be] = null),
			(Nt = Ze[--be]),
			(Ze[be] = null),
			(Pt = Ze[--be]),
			(Ze[be] = null);
}
var Ye = null,
	Qe = null,
	ie = !1,
	st = null;
function zd(e, t) {
	var n = et(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ns(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (Ye = e), (Qe = Zt(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (Ye = e), (Qe = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = xn !== null ? { id: Pt, overflow: Nt } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = et(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (Ye = e),
					  (Qe = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function ca(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function da(e) {
	if (ie) {
		var t = Qe;
		if (t) {
			var n = t;
			if (!Ns(e, t)) {
				if (ca(e)) throw Error(j(418));
				t = Zt(n.nextSibling);
				var r = Ye;
				t && Ns(e, t)
					? zd(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ye = e));
			}
		} else {
			if (ca(e)) throw Error(j(418));
			(e.flags = (e.flags & -4097) | 2), (ie = !1), (Ye = e);
		}
	}
}
function _s(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	Ye = e;
}
function Ul(e) {
	if (e !== Ye) return !1;
	if (!ie) return _s(e), (ie = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !oa(e.type, e.memoizedProps))),
		t && (t = Qe))
	) {
		if (ca(e)) throw (Fd(), Error(j(418)));
		for (; t; ) zd(e, t), (t = Zt(t.nextSibling));
	}
	if ((_s(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(j(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === '/$') {
						if (t === 0) {
							Qe = Zt(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			Qe = null;
		}
	} else Qe = Ye ? Zt(e.stateNode.nextSibling) : null;
	return !0;
}
function Fd() {
	for (var e = Qe; e; ) e = Zt(e.nextSibling);
}
function ar() {
	(Qe = Ye = null), (ie = !1);
}
function iu(e) {
	st === null ? (st = [e]) : st.push(e);
}
var gm = Dt.ReactCurrentBatchConfig;
function ot(e, t) {
	if (e && e.defaultProps) {
		(t = se({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var wi = un(null),
	xi = null,
	Vn = null,
	ou = null;
function au() {
	ou = Vn = xi = null;
}
function uu(e) {
	var t = wi.current;
	b(wi), (e._currentValue = t);
}
function fa(e, t, n) {
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
function bn(e, t) {
	(xi = e),
		(ou = Vn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Fe = !0), (e.firstContext = null));
}
function nt(e) {
	var t = e._currentValue;
	if (ou !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
			if (xi === null) throw Error(j(308));
			(Vn = e), (xi.dependencies = { lanes: 0, firstContext: e });
		} else Vn = Vn.next = e;
	return t;
}
var pn = null;
function su(e) {
	pn === null ? (pn = [e]) : pn.push(e);
}
function Ud(e, t, n, r) {
	var l = t.interleaved;
	return (
		l === null ? ((n.next = n), su(t)) : ((n.next = l.next), (l.next = n)),
		(t.interleaved = n),
		Ot(e, r)
	);
}
function Ot(e, t) {
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
var Vt = !1;
function cu(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function Bd(e, t) {
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
function _t(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function bt(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), Y & 2)) {
		var l = r.pending;
		return (
			l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
			(r.pending = t),
			Ot(e, n)
		);
	}
	return (
		(l = r.interleaved),
		l === null ? ((t.next = t), su(r)) : ((t.next = l.next), (l.next = t)),
		(r.interleaved = t),
		Ot(e, n)
	);
}
function Jl(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ga(e, n);
	}
}
function Rs(e, t) {
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
function Si(e, t, n, r) {
	var l = e.updateQueue;
	Vt = !1;
	var i = l.firstBaseUpdate,
		o = l.lastBaseUpdate,
		a = l.shared.pending;
	if (a !== null) {
		l.shared.pending = null;
		var u = a,
			s = u.next;
		(u.next = null), o === null ? (i = s) : (o.next = s), (o = u);
		var d = e.alternate;
		d !== null &&
			((d = d.updateQueue),
			(a = d.lastBaseUpdate),
			a !== o &&
				(a === null ? (d.firstBaseUpdate = s) : (a.next = s),
				(d.lastBaseUpdate = u)));
	}
	if (i !== null) {
		var p = l.baseState;
		(o = 0), (d = s = u = null), (a = i);
		do {
			var v = a.lane,
				y = a.eventTime;
			if ((r & v) === v) {
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
					switch (((v = t), (y = n), w.tag)) {
						case 1:
							if (((x = w.payload), typeof x == 'function')) {
								p = x.call(y, p, v);
								break e;
							}
							p = x;
							break e;
						case 3:
							x.flags = (x.flags & -65537) | 128;
						case 0:
							if (
								((x = w.payload),
								(v = typeof x == 'function' ? x.call(y, p, v) : x),
								v == null)
							)
								break e;
							p = se({}, p, v);
							break e;
						case 2:
							Vt = !0;
					}
				}
				a.callback !== null &&
					a.lane !== 0 &&
					((e.flags |= 64),
					(v = l.effects),
					v === null ? (l.effects = [a]) : v.push(a));
			} else
				(y = {
					eventTime: y,
					lane: v,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null,
				}),
					d === null ? ((s = d = y), (u = p)) : (d = d.next = y),
					(o |= v);
			if (((a = a.next), a === null)) {
				if (((a = l.shared.pending), a === null)) break;
				(v = a),
					(a = v.next),
					(v.next = null),
					(l.lastBaseUpdate = v),
					(l.shared.pending = null);
			}
		} while (1);
		if (
			(d === null && (u = p),
			(l.baseState = u),
			(l.firstBaseUpdate = s),
			(l.lastBaseUpdate = d),
			(t = l.shared.interleaved),
			t !== null)
		) {
			l = t;
			do (o |= l.lane), (l = l.next);
			while (l !== t);
		} else i === null && (l.shared.lanes = 0);
		(En |= o), (e.lanes = o), (e.memoizedState = p);
	}
}
function Ls(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				l = r.callback;
			if (l !== null) {
				if (((r.callback = null), (r = n), typeof l != 'function'))
					throw Error(j(191, l));
				l.call(r);
			}
		}
}
var Hd = new Uc.Component().refs;
function pa(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : se({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ui = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? jn(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = Me(),
			l = tn(e),
			i = _t(r, l);
		(i.payload = t),
			n != null && (i.callback = n),
			(t = bt(e, i, l)),
			t !== null && (ft(t, e, l, r), Jl(t, e, l));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = Me(),
			l = tn(e),
			i = _t(r, l);
		(i.tag = 1),
			(i.payload = t),
			n != null && (i.callback = n),
			(t = bt(e, i, l)),
			t !== null && (ft(t, e, l, r), Jl(t, e, l));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = Me(),
			r = tn(e),
			l = _t(n, r);
		(l.tag = 2),
			t != null && (l.callback = t),
			(t = bt(e, l, r)),
			t !== null && (ft(t, e, r, n), Jl(t, e, r));
	},
};
function Ms(e, t, n, r, l, i, o) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, i, o)
			: t.prototype && t.prototype.isPureReactComponent
			? !nl(n, r) || !nl(l, i)
			: !0
	);
}
function $d(e, t, n) {
	var r = !1,
		l = on,
		i = t.contextType;
	return (
		typeof i == 'object' && i !== null
			? (i = nt(i))
			: ((l = He(t) ? wn : Re.current),
			  (r = t.contextTypes),
			  (i = (r = r != null) ? or(e, l) : on)),
		(t = new t(n, i)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Ui),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = l),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		t
	);
}
function Os(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Ui.enqueueReplaceState(t, t.state, null);
}
function ha(e, t, n, r) {
	var l = e.stateNode;
	(l.props = n), (l.state = e.memoizedState), (l.refs = Hd), cu(e);
	var i = t.contextType;
	typeof i == 'object' && i !== null
		? (l.context = nt(i))
		: ((i = He(t) ? wn : Re.current), (l.context = or(e, i))),
		(l.state = e.memoizedState),
		(i = t.getDerivedStateFromProps),
		typeof i == 'function' && (pa(e, t, i, n), (l.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof l.getSnapshotBeforeUpdate == 'function' ||
			(typeof l.UNSAFE_componentWillMount != 'function' &&
				typeof l.componentWillMount != 'function') ||
			((t = l.state),
			typeof l.componentWillMount == 'function' && l.componentWillMount(),
			typeof l.UNSAFE_componentWillMount == 'function' &&
				l.UNSAFE_componentWillMount(),
			t !== l.state && Ui.enqueueReplaceState(l, l.state, null),
			Si(e, n, l, r),
			(l.state = e.memoizedState)),
		typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function jr(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(j(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(j(147, e));
			var l = r,
				i = '' + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == 'function' &&
				t.ref._stringRef === i
				? t.ref
				: ((t = function (o) {
						var a = l.refs;
						a === Hd && (a = l.refs = {}),
							o === null ? delete a[i] : (a[i] = o);
				  }),
				  (t._stringRef = i),
				  t);
		}
		if (typeof e != 'string') throw Error(j(284));
		if (!n._owner) throw Error(j(290, e));
	}
	return e;
}
function Bl(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			j(
				31,
				e === '[object Object]'
					? 'object with keys {' + Object.keys(t).join(', ') + '}'
					: e
			)
		))
	);
}
function As(e) {
	var t = e._init;
	return t(e._payload);
}
function Wd(e) {
	function t(m, f) {
		if (e) {
			var g = m.deletions;
			g === null ? ((m.deletions = [f]), (m.flags |= 16)) : g.push(f);
		}
	}
	function n(m, f) {
		if (!e) return null;
		for (; f !== null; ) t(m, f), (f = f.sibling);
		return null;
	}
	function r(m, f) {
		for (m = new Map(); f !== null; )
			f.key !== null ? m.set(f.key, f) : m.set(f.index, f), (f = f.sibling);
		return m;
	}
	function l(m, f) {
		return (m = nn(m, f)), (m.index = 0), (m.sibling = null), m;
	}
	function i(m, f, g) {
		return (
			(m.index = g),
			e
				? ((g = m.alternate),
				  g !== null
						? ((g = g.index), g < f ? ((m.flags |= 2), f) : g)
						: ((m.flags |= 2), f))
				: ((m.flags |= 1048576), f)
		);
	}
	function o(m) {
		return e && m.alternate === null && (m.flags |= 2), m;
	}
	function a(m, f, g, h) {
		return f === null || f.tag !== 6
			? ((f = Lo(g, m.mode, h)), (f.return = m), f)
			: ((f = l(f, g)), (f.return = m), f);
	}
	function u(m, f, g, h) {
		var T = g.type;
		return T === In
			? d(m, f, g.props.children, h, g.key)
			: f !== null &&
			  (f.elementType === T ||
					(typeof T == 'object' &&
						T !== null &&
						T.$$typeof === Wt &&
						As(T) === f.type))
			? ((h = l(f, g.props)), (h.ref = jr(m, f, g)), (h.return = m), h)
			: ((h = ri(g.type, g.key, g.props, null, m.mode, h)),
			  (h.ref = jr(m, f, g)),
			  (h.return = m),
			  h);
	}
	function s(m, f, g, h) {
		return f === null ||
			f.tag !== 4 ||
			f.stateNode.containerInfo !== g.containerInfo ||
			f.stateNode.implementation !== g.implementation
			? ((f = Mo(g, m.mode, h)), (f.return = m), f)
			: ((f = l(f, g.children || [])), (f.return = m), f);
	}
	function d(m, f, g, h, T) {
		return f === null || f.tag !== 7
			? ((f = gn(g, m.mode, h, T)), (f.return = m), f)
			: ((f = l(f, g)), (f.return = m), f);
	}
	function p(m, f, g) {
		if ((typeof f == 'string' && f !== '') || typeof f == 'number')
			return (f = Lo('' + f, m.mode, g)), (f.return = m), f;
		if (typeof f == 'object' && f !== null) {
			switch (f.$$typeof) {
				case _l:
					return (
						(g = ri(f.type, f.key, f.props, null, m.mode, g)),
						(g.ref = jr(m, null, f)),
						(g.return = m),
						g
					);
				case Dn:
					return (f = Mo(f, m.mode, g)), (f.return = m), f;
				case Wt:
					var h = f._init;
					return p(m, h(f._payload), g);
			}
			if (Ir(f) || Sr(f))
				return (f = gn(f, m.mode, g, null)), (f.return = m), f;
			Bl(m, f);
		}
		return null;
	}
	function v(m, f, g, h) {
		var T = f !== null ? f.key : null;
		if ((typeof g == 'string' && g !== '') || typeof g == 'number')
			return T !== null ? null : a(m, f, '' + g, h);
		if (typeof g == 'object' && g !== null) {
			switch (g.$$typeof) {
				case _l:
					return g.key === T ? u(m, f, g, h) : null;
				case Dn:
					return g.key === T ? s(m, f, g, h) : null;
				case Wt:
					return (T = g._init), v(m, f, T(g._payload), h);
			}
			if (Ir(g) || Sr(g)) return T !== null ? null : d(m, f, g, h, null);
			Bl(m, g);
		}
		return null;
	}
	function y(m, f, g, h, T) {
		if ((typeof h == 'string' && h !== '') || typeof h == 'number')
			return (m = m.get(g) || null), a(f, m, '' + h, T);
		if (typeof h == 'object' && h !== null) {
			switch (h.$$typeof) {
				case _l:
					return (m = m.get(h.key === null ? g : h.key) || null), u(f, m, h, T);
				case Dn:
					return (m = m.get(h.key === null ? g : h.key) || null), s(f, m, h, T);
				case Wt:
					var _ = h._init;
					return y(m, f, g, _(h._payload), T);
			}
			if (Ir(h) || Sr(h)) return (m = m.get(g) || null), d(f, m, h, T, null);
			Bl(f, h);
		}
		return null;
	}
	function x(m, f, g, h) {
		for (
			var T = null, _ = null, N = f, M = (f = 0), Q = null;
			N !== null && M < g.length;
			M++
		) {
			N.index > M ? ((Q = N), (N = null)) : (Q = N.sibling);
			var U = v(m, N, g[M], h);
			if (U === null) {
				N === null && (N = Q);
				break;
			}
			e && N && U.alternate === null && t(m, N),
				(f = i(U, f, M)),
				_ === null ? (T = U) : (_.sibling = U),
				(_ = U),
				(N = Q);
		}
		if (M === g.length) return n(m, N), ie && cn(m, M), T;
		if (N === null) {
			for (; M < g.length; M++)
				(N = p(m, g[M], h)),
					N !== null &&
						((f = i(N, f, M)), _ === null ? (T = N) : (_.sibling = N), (_ = N));
			return ie && cn(m, M), T;
		}
		for (N = r(m, N); M < g.length; M++)
			(Q = y(N, m, M, g[M], h)),
				Q !== null &&
					(e && Q.alternate !== null && N.delete(Q.key === null ? M : Q.key),
					(f = i(Q, f, M)),
					_ === null ? (T = Q) : (_.sibling = Q),
					(_ = Q));
		return (
			e &&
				N.forEach(function (Ee) {
					return t(m, Ee);
				}),
			ie && cn(m, M),
			T
		);
	}
	function w(m, f, g, h) {
		var T = Sr(g);
		if (typeof T != 'function') throw Error(j(150));
		if (((g = T.call(g)), g == null)) throw Error(j(151));
		for (
			var _ = (T = null), N = f, M = (f = 0), Q = null, U = g.next();
			N !== null && !U.done;
			M++, U = g.next()
		) {
			N.index > M ? ((Q = N), (N = null)) : (Q = N.sibling);
			var Ee = v(m, N, U.value, h);
			if (Ee === null) {
				N === null && (N = Q);
				break;
			}
			e && N && Ee.alternate === null && t(m, N),
				(f = i(Ee, f, M)),
				_ === null ? (T = Ee) : (_.sibling = Ee),
				(_ = Ee),
				(N = Q);
		}
		if (U.done) return n(m, N), ie && cn(m, M), T;
		if (N === null) {
			for (; !U.done; M++, U = g.next())
				(U = p(m, U.value, h)),
					U !== null &&
						((f = i(U, f, M)), _ === null ? (T = U) : (_.sibling = U), (_ = U));
			return ie && cn(m, M), T;
		}
		for (N = r(m, N); !U.done; M++, U = g.next())
			(U = y(N, m, M, U.value, h)),
				U !== null &&
					(e && U.alternate !== null && N.delete(U.key === null ? M : U.key),
					(f = i(U, f, M)),
					_ === null ? (T = U) : (_.sibling = U),
					(_ = U));
		return (
			e &&
				N.forEach(function (G) {
					return t(m, G);
				}),
			ie && cn(m, M),
			T
		);
	}
	function P(m, f, g, h) {
		if (
			(typeof g == 'object' &&
				g !== null &&
				g.type === In &&
				g.key === null &&
				(g = g.props.children),
			typeof g == 'object' && g !== null)
		) {
			switch (g.$$typeof) {
				case _l:
					e: {
						for (var T = g.key, _ = f; _ !== null; ) {
							if (_.key === T) {
								if (((T = g.type), T === In)) {
									if (_.tag === 7) {
										n(m, _.sibling),
											(f = l(_, g.props.children)),
											(f.return = m),
											(m = f);
										break e;
									}
								} else if (
									_.elementType === T ||
									(typeof T == 'object' &&
										T !== null &&
										T.$$typeof === Wt &&
										As(T) === _.type)
								) {
									n(m, _.sibling),
										(f = l(_, g.props)),
										(f.ref = jr(m, _, g)),
										(f.return = m),
										(m = f);
									break e;
								}
								n(m, _);
								break;
							} else t(m, _);
							_ = _.sibling;
						}
						g.type === In
							? ((f = gn(g.props.children, m.mode, h, g.key)),
							  (f.return = m),
							  (m = f))
							: ((h = ri(g.type, g.key, g.props, null, m.mode, h)),
							  (h.ref = jr(m, f, g)),
							  (h.return = m),
							  (m = h));
					}
					return o(m);
				case Dn:
					e: {
						for (_ = g.key; f !== null; ) {
							if (f.key === _)
								if (
									f.tag === 4 &&
									f.stateNode.containerInfo === g.containerInfo &&
									f.stateNode.implementation === g.implementation
								) {
									n(m, f.sibling),
										(f = l(f, g.children || [])),
										(f.return = m),
										(m = f);
									break e;
								} else {
									n(m, f);
									break;
								}
							else t(m, f);
							f = f.sibling;
						}
						(f = Mo(g, m.mode, h)), (f.return = m), (m = f);
					}
					return o(m);
				case Wt:
					return (_ = g._init), P(m, f, _(g._payload), h);
			}
			if (Ir(g)) return x(m, f, g, h);
			if (Sr(g)) return w(m, f, g, h);
			Bl(m, g);
		}
		return (typeof g == 'string' && g !== '') || typeof g == 'number'
			? ((g = '' + g),
			  f !== null && f.tag === 6
					? (n(m, f.sibling), (f = l(f, g)), (f.return = m), (m = f))
					: (n(m, f), (f = Lo(g, m.mode, h)), (f.return = m), (m = f)),
			  o(m))
			: n(m, f);
	}
	return P;
}
var ur = Wd(!0),
	Vd = Wd(!1),
	Sl = {},
	St = un(Sl),
	ol = un(Sl),
	al = un(Sl);
function hn(e) {
	if (e === Sl) throw Error(j(174));
	return e;
}
function du(e, t) {
	switch ((J(al, t), J(ol, e), J(St, Sl), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Yo(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Yo(t, e));
	}
	b(St), J(St, t);
}
function sr() {
	b(St), b(ol), b(al);
}
function Qd(e) {
	hn(al.current);
	var t = hn(St.current),
		n = Yo(t, e.type);
	t !== n && (J(ol, e), J(St, n));
}
function fu(e) {
	ol.current === e && (b(St), b(ol));
}
var ae = un(0);
function Ei(e) {
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
var To = [];
function pu() {
	for (var e = 0; e < To.length; e++)
		To[e]._workInProgressVersionPrimary = null;
	To.length = 0;
}
var Zl = Dt.ReactCurrentDispatcher,
	jo = Dt.ReactCurrentBatchConfig,
	Sn = 0,
	ue = null,
	ve = null,
	we = null,
	ki = !1,
	Vr = !1,
	ul = 0,
	ym = 0;
function Pe() {
	throw Error(j(321));
}
function hu(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!pt(e[n], t[n])) return !1;
	return !0;
}
function mu(e, t, n, r, l, i) {
	if (
		((Sn = i),
		(ue = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Zl.current = e === null || e.memoizedState === null ? Em : km),
		(e = n(r, l)),
		Vr)
	) {
		i = 0;
		do {
			if (((Vr = !1), (ul = 0), 25 <= i)) throw Error(j(301));
			(i += 1),
				(we = ve = null),
				(t.updateQueue = null),
				(Zl.current = Cm),
				(e = n(r, l));
		} while (Vr);
	}
	if (
		((Zl.current = Ci),
		(t = ve !== null && ve.next !== null),
		(Sn = 0),
		(we = ve = ue = null),
		(ki = !1),
		t)
	)
		throw Error(j(300));
	return e;
}
function vu() {
	var e = ul !== 0;
	return (ul = 0), e;
}
function yt() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return we === null ? (ue.memoizedState = we = e) : (we = we.next = e), we;
}
function rt() {
	if (ve === null) {
		var e = ue.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = ve.next;
	var t = we === null ? ue.memoizedState : we.next;
	if (t !== null) (we = t), (ve = e);
	else {
		if (e === null) throw Error(j(310));
		(ve = e),
			(e = {
				memoizedState: ve.memoizedState,
				baseState: ve.baseState,
				baseQueue: ve.baseQueue,
				queue: ve.queue,
				next: null,
			}),
			we === null ? (ue.memoizedState = we = e) : (we = we.next = e);
	}
	return we;
}
function sl(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function Po(e) {
	var t = rt(),
		n = t.queue;
	if (n === null) throw Error(j(311));
	n.lastRenderedReducer = e;
	var r = ve,
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
			u = null,
			s = i;
		do {
			var d = s.lane;
			if ((Sn & d) === d)
				u !== null &&
					(u = u.next =
						{
							lane: 0,
							action: s.action,
							hasEagerState: s.hasEagerState,
							eagerState: s.eagerState,
							next: null,
						}),
					(r = s.hasEagerState ? s.eagerState : e(r, s.action));
			else {
				var p = {
					lane: d,
					action: s.action,
					hasEagerState: s.hasEagerState,
					eagerState: s.eagerState,
					next: null,
				};
				u === null ? ((a = u = p), (o = r)) : (u = u.next = p),
					(ue.lanes |= d),
					(En |= d);
			}
			s = s.next;
		} while (s !== null && s !== i);
		u === null ? (o = r) : (u.next = a),
			pt(r, t.memoizedState) || (Fe = !0),
			(t.memoizedState = r),
			(t.baseState = o),
			(t.baseQueue = u),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		l = e;
		do (i = l.lane), (ue.lanes |= i), (En |= i), (l = l.next);
		while (l !== e);
	} else l === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function No(e) {
	var t = rt(),
		n = t.queue;
	if (n === null) throw Error(j(311));
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
function Yd() {}
function qd(e, t) {
	var n = ue,
		r = rt(),
		l = t(),
		i = !pt(r.memoizedState, l);
	if (
		(i && ((r.memoizedState = l), (Fe = !0)),
		(r = r.queue),
		gu(Xd.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || i || (we !== null && we.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			cl(9, Gd.bind(null, n, r, l, t), void 0, null),
			Se === null)
		)
			throw Error(j(349));
		Sn & 30 || Kd(n, t, l);
	}
	return l;
}
function Kd(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = ue.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (ue.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Gd(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), Jd(t) && Zd(e);
}
function Xd(e, t, n) {
	return n(function () {
		Jd(t) && Zd(e);
	});
}
function Jd(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !pt(e, n);
	} catch {
		return !0;
	}
}
function Zd(e) {
	var t = Ot(e, 1);
	t !== null && ft(t, e, 1, -1);
}
function Ds(e) {
	var t = yt();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: sl,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = Sm.bind(null, ue, e)),
		[t.memoizedState, e]
	);
}
function cl(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = ue.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (ue.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function bd() {
	return rt().memoizedState;
}
function bl(e, t, n, r) {
	var l = yt();
	(ue.flags |= e),
		(l.memoizedState = cl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Bi(e, t, n, r) {
	var l = rt();
	r = r === void 0 ? null : r;
	var i = void 0;
	if (ve !== null) {
		var o = ve.memoizedState;
		if (((i = o.destroy), r !== null && hu(r, o.deps))) {
			l.memoizedState = cl(t, n, i, r);
			return;
		}
	}
	(ue.flags |= e), (l.memoizedState = cl(1 | t, n, i, r));
}
function Is(e, t) {
	return bl(8390656, 8, e, t);
}
function gu(e, t) {
	return Bi(2048, 8, e, t);
}
function ef(e, t) {
	return Bi(4, 2, e, t);
}
function tf(e, t) {
	return Bi(4, 4, e, t);
}
function nf(e, t) {
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
function rf(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Bi(4, 4, nf.bind(null, t, e), n)
	);
}
function yu() {}
function lf(e, t) {
	var n = rt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && hu(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function of(e, t) {
	var n = rt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && hu(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function af(e, t, n) {
	return Sn & 21
		? (pt(n, t) || ((n = sd()), (ue.lanes |= n), (En |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n));
}
function wm(e, t) {
	var n = K;
	(K = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = jo.transition;
	jo.transition = {};
	try {
		e(!1), t();
	} finally {
		(K = n), (jo.transition = r);
	}
}
function uf() {
	return rt().memoizedState;
}
function xm(e, t, n) {
	var r = tn(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		sf(e))
	)
		cf(t, n);
	else if (((n = Ud(e, t, n, r)), n !== null)) {
		var l = Me();
		ft(n, e, r, l), df(n, t, r);
	}
}
function Sm(e, t, n) {
	var r = tn(e),
		l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (sf(e)) cf(t, l);
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
					var u = t.interleaved;
					u === null
						? ((l.next = l), su(t))
						: ((l.next = u.next), (u.next = l)),
						(t.interleaved = l);
					return;
				}
			} catch {
			} finally {
			}
		(n = Ud(e, t, l, r)),
			n !== null && ((l = Me()), ft(n, e, r, l), df(n, t, r));
	}
}
function sf(e) {
	var t = e.alternate;
	return e === ue || (t !== null && t === ue);
}
function cf(e, t) {
	Vr = ki = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function df(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ga(e, n);
	}
}
var Ci = {
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
	Em = {
		readContext: nt,
		useCallback: function (e, t) {
			return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: nt,
		useEffect: Is,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				bl(4194308, 4, nf.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return bl(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return bl(4, 2, e, t);
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
				(e = e.dispatch = xm.bind(null, ue, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = yt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: Ds,
		useDebugValue: yu,
		useDeferredValue: function (e) {
			return (yt().memoizedState = e);
		},
		useTransition: function () {
			var e = Ds(!1),
				t = e[0];
			return (e = wm.bind(null, e[1])), (yt().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = ue,
				l = yt();
			if (ie) {
				if (n === void 0) throw Error(j(407));
				n = n();
			} else {
				if (((n = t()), Se === null)) throw Error(j(349));
				Sn & 30 || Kd(r, t, n);
			}
			l.memoizedState = n;
			var i = { value: n, getSnapshot: t };
			return (
				(l.queue = i),
				Is(Xd.bind(null, r, i, e), [e]),
				(r.flags |= 2048),
				cl(9, Gd.bind(null, r, i, n, t), void 0, null),
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
					(n = ul++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':');
			} else (n = ym++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	km = {
		readContext: nt,
		useCallback: lf,
		useContext: nt,
		useEffect: gu,
		useImperativeHandle: rf,
		useInsertionEffect: ef,
		useLayoutEffect: tf,
		useMemo: of,
		useReducer: Po,
		useRef: bd,
		useState: function () {
			return Po(sl);
		},
		useDebugValue: yu,
		useDeferredValue: function (e) {
			var t = rt();
			return af(t, ve.memoizedState, e);
		},
		useTransition: function () {
			var e = Po(sl)[0],
				t = rt().memoizedState;
			return [e, t];
		},
		useMutableSource: Yd,
		useSyncExternalStore: qd,
		useId: uf,
		unstable_isNewReconciler: !1,
	},
	Cm = {
		readContext: nt,
		useCallback: lf,
		useContext: nt,
		useEffect: gu,
		useImperativeHandle: rf,
		useInsertionEffect: ef,
		useLayoutEffect: tf,
		useMemo: of,
		useReducer: No,
		useRef: bd,
		useState: function () {
			return No(sl);
		},
		useDebugValue: yu,
		useDeferredValue: function (e) {
			var t = rt();
			return ve === null ? (t.memoizedState = e) : af(t, ve.memoizedState, e);
		},
		useTransition: function () {
			var e = No(sl)[0],
				t = rt().memoizedState;
			return [e, t];
		},
		useMutableSource: Yd,
		useSyncExternalStore: qd,
		useId: uf,
		unstable_isNewReconciler: !1,
	};
function cr(e, t) {
	try {
		var n = '',
			r = t;
		do (n += Zp(r)), (r = r.return);
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
function _o(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ma(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var Tm = typeof WeakMap == 'function' ? WeakMap : Map;
function ff(e, t, n) {
	(n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			ji || ((ji = !0), (Ta = r)), ma(e, t);
		}),
		n
	);
}
function pf(e, t, n) {
	(n = _t(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var l = t.value;
		(n.payload = function () {
			return r(l);
		}),
			(n.callback = function () {
				ma(e, t);
			});
	}
	var i = e.stateNode;
	return (
		i !== null &&
			typeof i.componentDidCatch == 'function' &&
			(n.callback = function () {
				ma(e, t),
					typeof r != 'function' &&
						(en === null ? (en = new Set([this])) : en.add(this));
				var o = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: o !== null ? o : '',
				});
			}),
		n
	);
}
function zs(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new Tm();
		var l = new Set();
		r.set(t, l);
	} else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
	l.has(n) || (l.add(n), (e = Um.bind(null, e, t, n)), t.then(e, e));
}
function Fs(e) {
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
function Us(e, t, n, r, l) {
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
							: ((t = _t(-1, 1)), (t.tag = 2), bt(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var jm = Dt.ReactCurrentOwner,
	Fe = !1;
function Le(e, t, n, r) {
	t.child = e === null ? Vd(t, null, n, r) : ur(t, e.child, n, r);
}
function Bs(e, t, n, r, l) {
	n = n.render;
	var i = t.ref;
	return (
		bn(t, l),
		(r = mu(e, t, n, r, i, l)),
		(n = vu()),
		e !== null && !Fe
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  At(e, t, l))
			: (ie && n && ru(t), (t.flags |= 1), Le(e, t, r, l), t.child)
	);
}
function Hs(e, t, n, r, l) {
	if (e === null) {
		var i = n.type;
		return typeof i == 'function' &&
			!ju(i) &&
			i.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = i), hf(e, t, i, r, l))
			: ((e = ri(n.type, null, r, t, t.mode, l)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((i = e.child), !(e.lanes & l))) {
		var o = i.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : nl), n(o, r) && e.ref === t.ref)
		)
			return At(e, t, l);
	}
	return (
		(t.flags |= 1),
		(e = nn(i, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function hf(e, t, n, r, l) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (nl(i, r) && e.ref === t.ref)
			if (((Fe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
				e.flags & 131072 && (Fe = !0);
			else return (t.lanes = e.lanes), At(e, t, l);
	}
	return va(e, t, n, r, l);
}
function mf(e, t, n) {
	var r = t.pendingProps,
		l = r.children,
		i = e !== null ? e.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				J(Yn, Ve),
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
					J(Yn, Ve),
					(Ve |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = i !== null ? i.baseLanes : n),
				J(Yn, Ve),
				(Ve |= r);
		}
	else
		i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
			J(Yn, Ve),
			(Ve |= r);
	return Le(e, t, l, n), t.child;
}
function vf(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function va(e, t, n, r, l) {
	var i = He(n) ? wn : Re.current;
	return (
		(i = or(t, i)),
		bn(t, l),
		(n = mu(e, t, n, r, i, l)),
		(r = vu()),
		e !== null && !Fe
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  At(e, t, l))
			: (ie && r && ru(t), (t.flags |= 1), Le(e, t, n, l), t.child)
	);
}
function $s(e, t, n, r, l) {
	if (He(n)) {
		var i = !0;
		vi(t);
	} else i = !1;
	if ((bn(t, l), t.stateNode === null))
		ei(e, t), $d(t, n, r), ha(t, n, r, l), (r = !0);
	else if (e === null) {
		var o = t.stateNode,
			a = t.memoizedProps;
		o.props = a;
		var u = o.context,
			s = n.contextType;
		typeof s == 'object' && s !== null
			? (s = nt(s))
			: ((s = He(n) ? wn : Re.current), (s = or(t, s)));
		var d = n.getDerivedStateFromProps,
			p =
				typeof d == 'function' ||
				typeof o.getSnapshotBeforeUpdate == 'function';
		p ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((a !== r || u !== s) && Os(t, o, r, s)),
			(Vt = !1);
		var v = t.memoizedState;
		(o.state = v),
			Si(t, r, o, l),
			(u = t.memoizedState),
			a !== r || v !== u || Be.current || Vt
				? (typeof d == 'function' && (pa(t, n, d, r), (u = t.memoizedState)),
				  (a = Vt || Ms(t, n, a, r, v, u, s))
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
						  (t.memoizedState = u)),
				  (o.props = r),
				  (o.state = u),
				  (o.context = s),
				  (r = a))
				: (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(o = t.stateNode),
			Bd(e, t),
			(a = t.memoizedProps),
			(s = t.type === t.elementType ? a : ot(t.type, a)),
			(o.props = s),
			(p = t.pendingProps),
			(v = o.context),
			(u = n.contextType),
			typeof u == 'object' && u !== null
				? (u = nt(u))
				: ((u = He(n) ? wn : Re.current), (u = or(t, u)));
		var y = n.getDerivedStateFromProps;
		(d =
			typeof y == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function') ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((a !== p || v !== u) && Os(t, o, r, u)),
			(Vt = !1),
			(v = t.memoizedState),
			(o.state = v),
			Si(t, r, o, l);
		var x = t.memoizedState;
		a !== p || v !== x || Be.current || Vt
			? (typeof y == 'function' && (pa(t, n, y, r), (x = t.memoizedState)),
			  (s = Vt || Ms(t, n, s, r, v, x, u) || !1)
					? (d ||
							(typeof o.UNSAFE_componentWillUpdate != 'function' &&
								typeof o.componentWillUpdate != 'function') ||
							(typeof o.componentWillUpdate == 'function' &&
								o.componentWillUpdate(r, x, u),
							typeof o.UNSAFE_componentWillUpdate == 'function' &&
								o.UNSAFE_componentWillUpdate(r, x, u)),
					  typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof o.componentDidUpdate != 'function' ||
							(a === e.memoizedProps && v === e.memoizedState) ||
							(t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate != 'function' ||
							(a === e.memoizedProps && v === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = x)),
			  (o.props = r),
			  (o.state = x),
			  (o.context = u),
			  (r = s))
			: (typeof o.componentDidUpdate != 'function' ||
					(a === e.memoizedProps && v === e.memoizedState) ||
					(t.flags |= 4),
			  typeof o.getSnapshotBeforeUpdate != 'function' ||
					(a === e.memoizedProps && v === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return ga(e, t, n, r, i, l);
}
function ga(e, t, n, r, l, i) {
	vf(e, t);
	var o = (t.flags & 128) !== 0;
	if (!r && !o) return l && Ps(t, n, !1), At(e, t, i);
	(r = t.stateNode), (jm.current = t);
	var a =
		o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && o
			? ((t.child = ur(t, e.child, null, i)), (t.child = ur(t, null, a, i)))
			: Le(e, t, a, i),
		(t.memoizedState = r.state),
		l && Ps(t, n, !0),
		t.child
	);
}
function gf(e) {
	var t = e.stateNode;
	t.pendingContext
		? js(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && js(e, t.context, !1),
		du(e, t.containerInfo);
}
function Ws(e, t, n, r, l) {
	return ar(), iu(l), (t.flags |= 256), Le(e, t, n, r), t.child;
}
var ya = { dehydrated: null, treeContext: null, retryLane: 0 };
function wa(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function yf(e, t, n) {
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
			da(t),
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
								: (i = Wi(o, r, 0, null)),
						  (e = gn(e, r, n, null)),
						  (i.return = t),
						  (e.return = t),
						  (i.sibling = e),
						  (t.child = i),
						  (t.child.memoizedState = wa(n)),
						  (t.memoizedState = ya),
						  e)
						: wu(t, o))
		);
	if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
		return Pm(e, t, o, r, a, l, n);
	if (i) {
		(i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
		var u = { mode: 'hidden', children: r.children };
		return (
			!(o & 1) && t.child !== l
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = u),
				  (t.deletions = null))
				: ((r = nn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
			a !== null ? (i = nn(a, i)) : ((i = gn(i, o, n, null)), (i.flags |= 2)),
			(i.return = t),
			(r.return = t),
			(r.sibling = i),
			(t.child = r),
			(r = i),
			(i = t.child),
			(o = e.child.memoizedState),
			(o =
				o === null
					? wa(n)
					: {
							baseLanes: o.baseLanes | n,
							cachePool: null,
							transitions: o.transitions,
					  }),
			(i.memoizedState = o),
			(i.childLanes = e.childLanes & ~n),
			(t.memoizedState = ya),
			r
		);
	}
	return (
		(i = e.child),
		(e = i.sibling),
		(r = nn(i, { mode: 'visible', children: r.children })),
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
function wu(e, t) {
	return (
		(t = Wi({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function Hl(e, t, n, r) {
	return (
		r !== null && iu(r),
		ur(t, e.child, null, n),
		(e = wu(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function Pm(e, t, n, r, l, i, o) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = _o(Error(j(422)))), Hl(e, t, o, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((i = r.fallback),
			  (l = t.mode),
			  (r = Wi({ mode: 'visible', children: r.children }, l, 0, null)),
			  (i = gn(i, l, o, null)),
			  (i.flags |= 2),
			  (r.return = t),
			  (i.return = t),
			  (r.sibling = i),
			  (t.child = r),
			  t.mode & 1 && ur(t, e.child, null, o),
			  (t.child.memoizedState = wa(o)),
			  (t.memoizedState = ya),
			  i);
	if (!(t.mode & 1)) return Hl(e, t, o, null);
	if (l.data === '$!') {
		if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
		return (r = a), (i = Error(j(419))), (r = _o(i, r, void 0)), Hl(e, t, o, r);
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
					((i.retryLane = l), Ot(e, l), ft(r, e, l, -1));
		}
		return Tu(), (r = _o(Error(j(421)))), Hl(e, t, o, r);
	}
	return l.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = Bm.bind(null, e)),
		  (l._reactRetry = t),
		  null)
		: ((e = i.treeContext),
		  (Qe = Zt(l.nextSibling)),
		  (Ye = t),
		  (ie = !0),
		  (st = null),
		  e !== null &&
				((Ze[be++] = Pt),
				(Ze[be++] = Nt),
				(Ze[be++] = xn),
				(Pt = e.id),
				(Nt = e.overflow),
				(xn = t)),
		  (t = wu(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function Vs(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), fa(e.return, t, n);
}
function Ro(e, t, n, r, l) {
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
function wf(e, t, n) {
	var r = t.pendingProps,
		l = r.revealOrder,
		i = r.tail;
	if ((Le(e, t, r.children, n), (r = ae.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Vs(e, n, t);
				else if (e.tag === 19) Vs(e, n, t);
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
						e !== null && Ei(e) === null && (l = n),
						(n = n.sibling);
				(n = l),
					n === null
						? ((l = t.child), (t.child = null))
						: ((l = n.sibling), (n.sibling = null)),
					Ro(t, !1, l, n, i);
				break;
			case 'backwards':
				for (n = null, l = t.child, t.child = null; l !== null; ) {
					if (((e = l.alternate), e !== null && Ei(e) === null)) {
						t.child = l;
						break;
					}
					(e = l.sibling), (l.sibling = n), (n = l), (l = e);
				}
				Ro(t, !0, n, null, i);
				break;
			case 'together':
				Ro(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function ei(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function At(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(En |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(j(153));
	if (t.child !== null) {
		for (
			e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = nn(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function Nm(e, t, n) {
	switch (t.tag) {
		case 3:
			gf(t), ar();
			break;
		case 5:
			Qd(t);
			break;
		case 1:
			He(t.type) && vi(t);
			break;
		case 4:
			du(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				l = t.memoizedProps.value;
			J(wi, r._currentValue), (r._currentValue = l);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (J(ae, ae.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? yf(e, t, n)
					: (J(ae, ae.current & 1),
					  (e = At(e, t, n)),
					  e !== null ? e.sibling : null);
			J(ae, ae.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return wf(e, t, n);
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
			return (t.lanes = 0), mf(e, t, n);
	}
	return At(e, t, n);
}
var xf, xa, Sf, Ef;
xf = function (e, t) {
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
xa = function () {};
Sf = function (e, t, n, r) {
	var l = e.memoizedProps;
	if (l !== r) {
		(e = t.stateNode), hn(St.current);
		var i = null;
		switch (n) {
			case 'input':
				(l = $o(e, l)), (r = $o(e, r)), (i = []);
				break;
			case 'select':
				(l = se({}, l, { value: void 0 })),
					(r = se({}, r, { value: void 0 })),
					(i = []);
				break;
			case 'textarea':
				(l = Qo(e, l)), (r = Qo(e, r)), (i = []);
				break;
			default:
				typeof l.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = hi);
		}
		qo(n, r);
		var o;
		n = null;
		for (s in l)
			if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
				if (s === 'style') {
					var a = l[s];
					for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
				} else
					s !== 'dangerouslySetInnerHTML' &&
						s !== 'children' &&
						s !== 'suppressContentEditableWarning' &&
						s !== 'suppressHydrationWarning' &&
						s !== 'autoFocus' &&
						(Gr.hasOwnProperty(s)
							? i || (i = [])
							: (i = i || []).push(s, null));
		for (s in r) {
			var u = r[s];
			if (
				((a = l != null ? l[s] : void 0),
				r.hasOwnProperty(s) && u !== a && (u != null || a != null))
			)
				if (s === 'style')
					if (a) {
						for (o in a)
							!a.hasOwnProperty(o) ||
								(u && u.hasOwnProperty(o)) ||
								(n || (n = {}), (n[o] = ''));
						for (o in u)
							u.hasOwnProperty(o) &&
								a[o] !== u[o] &&
								(n || (n = {}), (n[o] = u[o]));
					} else n || (i || (i = []), i.push(s, n)), (n = u);
				else
					s === 'dangerouslySetInnerHTML'
						? ((u = u ? u.__html : void 0),
						  (a = a ? a.__html : void 0),
						  u != null && a !== u && (i = i || []).push(s, u))
						: s === 'children'
						? (typeof u != 'string' && typeof u != 'number') ||
						  (i = i || []).push(s, '' + u)
						: s !== 'suppressContentEditableWarning' &&
						  s !== 'suppressHydrationWarning' &&
						  (Gr.hasOwnProperty(s)
								? (u != null && s === 'onScroll' && Z('scroll', e),
								  i || a === u || (i = []))
								: (i = i || []).push(s, u));
		}
		n && (i = i || []).push('style', n);
		var s = i;
		(t.updateQueue = s) && (t.flags |= 4);
	}
};
Ef = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Pr(e, t) {
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
function _m(e, t, n) {
	var r = t.pendingProps;
	switch ((lu(t), t.tag)) {
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
			return He(t.type) && mi(), Ne(t), null;
		case 3:
			return (
				(r = t.stateNode),
				sr(),
				b(Be),
				b(Re),
				pu(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Ul(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), st !== null && (Na(st), (st = null)))),
				xa(e, t),
				Ne(t),
				null
			);
		case 5:
			fu(t);
			var l = hn(al.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Sf(e, t, n, r, l),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(j(166));
					return Ne(t), null;
				}
				if (((e = hn(St.current)), Ul(t))) {
					(r = t.stateNode), (n = t.type);
					var i = t.memoizedProps;
					switch (((r[wt] = t), (r[il] = i), (e = (t.mode & 1) !== 0), n)) {
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
							for (l = 0; l < Fr.length; l++) Z(Fr[l], r);
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
							bu(r, i), Z('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!i.multiple }),
								Z('invalid', r);
							break;
						case 'textarea':
							ts(r, i), Z('invalid', r);
					}
					qo(n, i), (l = null);
					for (var o in i)
						if (i.hasOwnProperty(o)) {
							var a = i[o];
							o === 'children'
								? typeof a == 'string'
									? r.textContent !== a &&
									  (i.suppressHydrationWarning !== !0 &&
											Fl(r.textContent, a, e),
									  (l = ['children', a]))
									: typeof a == 'number' &&
									  r.textContent !== '' + a &&
									  (i.suppressHydrationWarning !== !0 &&
											Fl(r.textContent, a, e),
									  (l = ['children', '' + a]))
								: Gr.hasOwnProperty(o) &&
								  a != null &&
								  o === 'onScroll' &&
								  Z('scroll', r);
						}
					switch (n) {
						case 'input':
							Rl(r), es(r, i, !0);
							break;
						case 'textarea':
							Rl(r), ns(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof i.onClick == 'function' && (r.onclick = hi);
					}
					(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(o = l.nodeType === 9 ? l : l.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = Kc(n)),
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
						(e[il] = r),
						xf(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((o = Ko(n, r)), n)) {
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
								for (l = 0; l < Fr.length; l++) Z(Fr[l], e);
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
								bu(e, r), (l = $o(e, r)), Z('invalid', e);
								break;
							case 'option':
								l = r;
								break;
							case 'select':
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(l = se({}, r, { value: void 0 })),
									Z('invalid', e);
								break;
							case 'textarea':
								ts(e, r), (l = Qo(e, r)), Z('invalid', e);
								break;
							default:
								l = r;
						}
						qo(n, l), (a = l);
						for (i in a)
							if (a.hasOwnProperty(i)) {
								var u = a[i];
								i === 'style'
									? Jc(e, u)
									: i === 'dangerouslySetInnerHTML'
									? ((u = u ? u.__html : void 0), u != null && Gc(e, u))
									: i === 'children'
									? typeof u == 'string'
										? (n !== 'textarea' || u !== '') && Xr(e, u)
										: typeof u == 'number' && Xr(e, '' + u)
									: i !== 'suppressContentEditableWarning' &&
									  i !== 'suppressHydrationWarning' &&
									  i !== 'autoFocus' &&
									  (Gr.hasOwnProperty(i)
											? u != null && i === 'onScroll' && Z('scroll', e)
											: u != null && Wa(e, i, u, o));
							}
						switch (n) {
							case 'input':
								Rl(e), es(e, r, !1);
								break;
							case 'textarea':
								Rl(e), ns(e);
								break;
							case 'option':
								r.value != null && e.setAttribute('value', '' + ln(r.value));
								break;
							case 'select':
								(e.multiple = !!r.multiple),
									(i = r.value),
									i != null
										? Gn(e, !!r.multiple, i, !1)
										: r.defaultValue != null &&
										  Gn(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof l.onClick == 'function' && (e.onclick = hi);
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
			if (e && t.stateNode != null) Ef(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(j(166));
				if (((n = hn(al.current)), hn(St.current), Ul(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[wt] = t),
						(i = r.nodeValue !== n) && ((e = Ye), e !== null))
					)
						switch (e.tag) {
							case 3:
								Fl(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									Fl(r.nodeValue, n, (e.mode & 1) !== 0);
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
					Fd(), ar(), (t.flags |= 98560), (i = !1);
				else if (((i = Ul(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!i) throw Error(j(318));
						if (
							((i = t.memoizedState),
							(i = i !== null ? i.dehydrated : null),
							!i)
						)
							throw Error(j(317));
						i[wt] = t;
					} else
						ar(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					Ne(t), (i = !1);
				} else st !== null && (Na(st), (st = null)), (i = !0);
				if (!i) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || ae.current & 1 ? ge === 0 && (ge = 3) : Tu())),
				  t.updateQueue !== null && (t.flags |= 4),
				  Ne(t),
				  null);
		case 4:
			return (
				sr(), xa(e, t), e === null && rl(t.stateNode.containerInfo), Ne(t), null
			);
		case 10:
			return uu(t.type._context), Ne(t), null;
		case 17:
			return He(t.type) && mi(), Ne(t), null;
		case 19:
			if ((b(ae), (i = t.memoizedState), i === null)) return Ne(t), null;
			if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
				if (r) Pr(i, !1);
				else {
					if (ge !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((o = Ei(e)), o !== null)) {
								for (
									t.flags |= 128,
										Pr(i, !1),
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
						de() > dr &&
						((t.flags |= 128), (r = !0), Pr(i, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = Ei(o)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Pr(i, !0),
							i.tail === null && i.tailMode === 'hidden' && !o.alternate && !ie)
						)
							return Ne(t), null;
					} else
						2 * de() - i.renderingStartTime > dr &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Pr(i, !1), (t.lanes = 4194304));
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
				Cu(),
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
	throw Error(j(156, t.tag));
}
function Rm(e, t) {
	switch ((lu(t), t.tag)) {
		case 1:
			return (
				He(t.type) && mi(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				sr(),
				b(Be),
				b(Re),
				pu(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return fu(t), null;
		case 13:
			if ((b(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(j(340));
				ar();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return b(ae), null;
		case 4:
			return sr(), null;
		case 10:
			return uu(t.type._context), null;
		case 22:
		case 23:
			return Cu(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var $l = !1,
	_e = !1,
	Lm = typeof WeakSet == 'function' ? WeakSet : Set,
	L = null;
function Qn(e, t) {
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
function Sa(e, t, n) {
	try {
		n();
	} catch (r) {
		ce(e, t, r);
	}
}
var Qs = !1;
function Mm(e, t) {
	if (((la = di), (e = Td()), nu(e))) {
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
						u = -1,
						s = 0,
						d = 0,
						p = e,
						v = null;
					t: for (;;) {
						for (
							var y;
							p !== n || (l !== 0 && p.nodeType !== 3) || (a = o + l),
								p !== i || (r !== 0 && p.nodeType !== 3) || (u = o + r),
								p.nodeType === 3 && (o += p.nodeValue.length),
								(y = p.firstChild) !== null;

						)
							(v = p), (p = y);
						for (;;) {
							if (p === e) break t;
							if (
								(v === n && ++s === l && (a = o),
								v === i && ++d === r && (u = o),
								(y = p.nextSibling) !== null)
							)
								break;
							(p = v), (v = p.parentNode);
						}
						p = y;
					}
					n = a === -1 || u === -1 ? null : { start: a, end: u };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (ia = { focusedElem: e, selectionRange: n }, di = !1, L = t; L !== null; )
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
										m = t.stateNode,
										f = m.getSnapshotBeforeUpdate(
											t.elementType === t.type ? w : ot(t.type, w),
											P
										);
									m.__reactInternalSnapshotBeforeUpdate = f;
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
								throw Error(j(163));
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
	return (x = Qs), (Qs = !1), x;
}
function Qr(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var l = (r = r.next);
		do {
			if ((l.tag & e) === e) {
				var i = l.destroy;
				(l.destroy = void 0), i !== void 0 && Sa(t, n, i);
			}
			l = l.next;
		} while (l !== r);
	}
}
function Hi(e, t) {
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
function Ea(e) {
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
function kf(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), kf(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[wt], delete t[il], delete t[ua], delete t[hm], delete t[mm])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Cf(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ys(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Cf(e.return)) return null;
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
function ka(e, t, n) {
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
				  n != null || t.onclick !== null || (t.onclick = hi));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (ka(e, t, n), e = e.sibling; e !== null; ) ka(e, t, n), (e = e.sibling);
}
function Ca(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Ca(e, t, n), e = e.sibling; e !== null; ) Ca(e, t, n), (e = e.sibling);
}
var Ce = null,
	at = !1;
function $t(e, t, n) {
	for (n = n.child; n !== null; ) Tf(e, t, n), (n = n.sibling);
}
function Tf(e, t, n) {
	if (xt && typeof xt.onCommitFiberUnmount == 'function')
		try {
			xt.onCommitFiberUnmount(Oi, n);
		} catch {}
	switch (n.tag) {
		case 5:
			_e || Qn(n, t);
		case 6:
			var r = Ce,
				l = at;
			(Ce = null),
				$t(e, t, n),
				(Ce = r),
				(at = l),
				Ce !== null &&
					(at
						? ((e = Ce),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: Ce.removeChild(n.stateNode));
			break;
		case 18:
			Ce !== null &&
				(at
					? ((e = Ce),
					  (n = n.stateNode),
					  e.nodeType === 8
							? ko(e.parentNode, n)
							: e.nodeType === 1 && ko(e, n),
					  el(e))
					: ko(Ce, n.stateNode));
			break;
		case 4:
			(r = Ce),
				(l = at),
				(Ce = n.stateNode.containerInfo),
				(at = !0),
				$t(e, t, n),
				(Ce = r),
				(at = l);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!_e &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				l = r = r.next;
				do {
					var i = l,
						o = i.destroy;
					(i = i.tag),
						o !== void 0 && (i & 2 || i & 4) && Sa(n, t, o),
						(l = l.next);
				} while (l !== r);
			}
			$t(e, t, n);
			break;
		case 1:
			if (
				!_e &&
				(Qn(n, t),
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
			$t(e, t, n);
			break;
		case 21:
			$t(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((_e = (r = _e) || n.memoizedState !== null), $t(e, t, n), (_e = r))
				: $t(e, t, n);
			break;
		default:
			$t(e, t, n);
	}
}
function qs(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Lm()),
			t.forEach(function (r) {
				var l = Hm.bind(null, e, r);
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
							(Ce = a.stateNode), (at = !1);
							break e;
						case 3:
							(Ce = a.stateNode.containerInfo), (at = !0);
							break e;
						case 4:
							(Ce = a.stateNode.containerInfo), (at = !0);
							break e;
					}
					a = a.return;
				}
				if (Ce === null) throw Error(j(160));
				Tf(i, o, l), (Ce = null), (at = !1);
				var u = l.alternate;
				u !== null && (u.return = null), (l.return = null);
			} catch (s) {
				ce(l, t, s);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) jf(t, e), (t = t.sibling);
}
function jf(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((it(t, e), gt(e), r & 4)) {
				try {
					Qr(3, e, e.return), Hi(3, e);
				} catch (w) {
					ce(e, e.return, w);
				}
				try {
					Qr(5, e, e.return);
				} catch (w) {
					ce(e, e.return, w);
				}
			}
			break;
		case 1:
			it(t, e), gt(e), r & 512 && n !== null && Qn(n, n.return);
			break;
		case 5:
			if (
				(it(t, e),
				gt(e),
				r & 512 && n !== null && Qn(n, n.return),
				e.flags & 32)
			) {
				var l = e.stateNode;
				try {
					Xr(l, '');
				} catch (w) {
					ce(e, e.return, w);
				}
			}
			if (r & 4 && ((l = e.stateNode), l != null)) {
				var i = e.memoizedProps,
					o = n !== null ? n.memoizedProps : i,
					a = e.type,
					u = e.updateQueue;
				if (((e.updateQueue = null), u !== null))
					try {
						a === 'input' && i.type === 'radio' && i.name != null && Yc(l, i),
							Ko(a, o);
						var s = Ko(a, i);
						for (o = 0; o < u.length; o += 2) {
							var d = u[o],
								p = u[o + 1];
							d === 'style'
								? Jc(l, p)
								: d === 'dangerouslySetInnerHTML'
								? Gc(l, p)
								: d === 'children'
								? Xr(l, p)
								: Wa(l, d, p, s);
						}
						switch (a) {
							case 'input':
								Wo(l, i);
								break;
							case 'textarea':
								qc(l, i);
								break;
							case 'select':
								var v = l._wrapperState.wasMultiple;
								l._wrapperState.wasMultiple = !!i.multiple;
								var y = i.value;
								y != null
									? Gn(l, !!i.multiple, y, !1)
									: v !== !!i.multiple &&
									  (i.defaultValue != null
											? Gn(l, !!i.multiple, i.defaultValue, !0)
											: Gn(l, !!i.multiple, i.multiple ? [] : '', !1));
						}
						l[il] = i;
					} catch (w) {
						ce(e, e.return, w);
					}
			}
			break;
		case 6:
			if ((it(t, e), gt(e), r & 4)) {
				if (e.stateNode === null) throw Error(j(162));
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
					el(t.containerInfo);
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
						(Eu = de())),
				r & 4 && qs(e);
			break;
		case 22:
			if (
				((d = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((_e = (s = _e) || d), it(t, e), (_e = s)) : it(t, e),
				gt(e),
				r & 8192)
			) {
				if (
					((s = e.memoizedState !== null),
					(e.stateNode.isHidden = s) && !d && e.mode & 1)
				)
					for (L = e, d = e.child; d !== null; ) {
						for (p = L = d; L !== null; ) {
							switch (((v = L), (y = v.child), v.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Qr(4, v, v.return);
									break;
								case 1:
									Qn(v, v.return);
									var x = v.stateNode;
									if (typeof x.componentWillUnmount == 'function') {
										(r = v), (n = v.return);
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
									Qn(v, v.return);
									break;
								case 22:
									if (v.memoizedState !== null) {
										Gs(p);
										continue;
									}
							}
							y !== null ? ((y.return = v), (L = y)) : Gs(p);
						}
						d = d.sibling;
					}
				e: for (d = null, p = e; ; ) {
					if (p.tag === 5) {
						if (d === null) {
							d = p;
							try {
								(l = p.stateNode),
									s
										? ((i = l.style),
										  typeof i.setProperty == 'function'
												? i.setProperty('display', 'none', 'important')
												: (i.display = 'none'))
										: ((a = p.stateNode),
										  (u = p.memoizedProps.style),
										  (o =
												u != null && u.hasOwnProperty('display')
													? u.display
													: null),
										  (a.style.display = Xc('display', o)));
							} catch (w) {
								ce(e, e.return, w);
							}
						}
					} else if (p.tag === 6) {
						if (d === null)
							try {
								p.stateNode.nodeValue = s ? '' : p.memoizedProps;
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
			it(t, e), gt(e), r & 4 && qs(e);
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
					if (Cf(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(j(160));
			}
			switch (r.tag) {
				case 5:
					var l = r.stateNode;
					r.flags & 32 && (Xr(l, ''), (r.flags &= -33));
					var i = Ys(e);
					Ca(e, i, l);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						a = Ys(e);
					ka(e, a, o);
					break;
				default:
					throw Error(j(161));
			}
		} catch (u) {
			ce(e, e.return, u);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function Om(e, t, n) {
	(L = e), Pf(e);
}
function Pf(e, t, n) {
	for (var r = (e.mode & 1) !== 0; L !== null; ) {
		var l = L,
			i = l.child;
		if (l.tag === 22 && r) {
			var o = l.memoizedState !== null || $l;
			if (!o) {
				var a = l.alternate,
					u = (a !== null && a.memoizedState !== null) || _e;
				a = $l;
				var s = _e;
				if ((($l = o), (_e = u) && !s))
					for (L = l; L !== null; )
						(o = L),
							(u = o.child),
							o.tag === 22 && o.memoizedState !== null
								? Xs(l)
								: u !== null
								? ((u.return = o), (L = u))
								: Xs(l);
				for (; i !== null; ) (L = i), Pf(i), (i = i.sibling);
				(L = l), ($l = a), (_e = s);
			}
			Ks(e);
		} else
			l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (L = i)) : Ks(e);
	}
}
function Ks(e) {
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
							_e || Hi(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !_e)
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
							i !== null && Ls(t, i, r);
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
								Ls(t, o, n);
							}
							break;
						case 5:
							var a = t.stateNode;
							if (n === null && t.flags & 4) {
								n = a;
								var u = t.memoizedProps;
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										u.autoFocus && n.focus();
										break;
									case 'img':
										u.src && (n.src = u.src);
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
								var s = t.alternate;
								if (s !== null) {
									var d = s.memoizedState;
									if (d !== null) {
										var p = d.dehydrated;
										p !== null && el(p);
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
							throw Error(j(163));
					}
				_e || (t.flags & 512 && Ea(t));
			} catch (v) {
				ce(t, t.return, v);
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
function Gs(e) {
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
function Xs(e) {
	for (; L !== null; ) {
		var t = L;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Hi(4, t);
					} catch (u) {
						ce(t, n, u);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == 'function') {
						var l = t.return;
						try {
							r.componentDidMount();
						} catch (u) {
							ce(t, l, u);
						}
					}
					var i = t.return;
					try {
						Ea(t);
					} catch (u) {
						ce(t, i, u);
					}
					break;
				case 5:
					var o = t.return;
					try {
						Ea(t);
					} catch (u) {
						ce(t, o, u);
					}
			}
		} catch (u) {
			ce(t, t.return, u);
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
var Am = Math.ceil,
	Ti = Dt.ReactCurrentDispatcher,
	xu = Dt.ReactCurrentOwner,
	tt = Dt.ReactCurrentBatchConfig,
	Y = 0,
	Se = null,
	he = null,
	Te = 0,
	Ve = 0,
	Yn = un(0),
	ge = 0,
	dl = null,
	En = 0,
	$i = 0,
	Su = 0,
	Yr = null,
	ze = null,
	Eu = 0,
	dr = 1 / 0,
	Tt = null,
	ji = !1,
	Ta = null,
	en = null,
	Wl = !1,
	Kt = null,
	Pi = 0,
	qr = 0,
	ja = null,
	ti = -1,
	ni = 0;
function Me() {
	return Y & 6 ? de() : ti !== -1 ? ti : (ti = de());
}
function tn(e) {
	return e.mode & 1
		? Y & 2 && Te !== 0
			? Te & -Te
			: gm.transition !== null
			? (ni === 0 && (ni = sd()), ni)
			: ((e = K),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vd(e.type))),
			  e)
		: 1;
}
function ft(e, t, n, r) {
	if (50 < qr) throw ((qr = 0), (ja = null), Error(j(185)));
	yl(e, n, r),
		(!(Y & 2) || e !== Se) &&
			(e === Se && (!(Y & 2) && ($i |= n), ge === 4 && Yt(e, Te)),
			$e(e, r),
			n === 1 && Y === 0 && !(t.mode & 1) && ((dr = de() + 500), Fi && sn()));
}
function $e(e, t) {
	var n = e.callbackNode;
	gh(e, t);
	var r = ci(e, e === Se ? Te : 0);
	if (r === 0)
		n !== null && is(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && is(n), t === 1))
			e.tag === 0 ? vm(Js.bind(null, e)) : Dd(Js.bind(null, e)),
				fm(function () {
					!(Y & 6) && sn();
				}),
				(n = null);
		else {
			switch (cd(r)) {
				case 1:
					n = Ka;
					break;
				case 4:
					n = ad;
					break;
				case 16:
					n = si;
					break;
				case 536870912:
					n = ud;
					break;
				default:
					n = si;
			}
			n = Df(n, Nf.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function Nf(e, t) {
	if (((ti = -1), (ni = 0), Y & 6)) throw Error(j(327));
	var n = e.callbackNode;
	if (er() && e.callbackNode !== n) return null;
	var r = ci(e, e === Se ? Te : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Ni(e, r);
	else {
		t = r;
		var l = Y;
		Y |= 2;
		var i = Rf();
		(Se !== e || Te !== t) && ((Tt = null), (dr = de() + 500), vn(e, t));
		do
			try {
				zm();
				break;
			} catch (a) {
				_f(e, a);
			}
		while (1);
		au(),
			(Ti.current = i),
			(Y = l),
			he !== null ? (t = 0) : ((Se = null), (Te = 0), (t = ge));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((l = bo(e)), l !== 0 && ((r = l), (t = Pa(e, l)))), t === 1)
		)
			throw ((n = dl), vn(e, 0), Yt(e, r), $e(e, de()), n);
		if (t === 6) Yt(e, r);
		else {
			if (
				((l = e.current.alternate),
				!(r & 30) &&
					!Dm(l) &&
					((t = Ni(e, r)),
					t === 2 && ((i = bo(e)), i !== 0 && ((r = i), (t = Pa(e, i)))),
					t === 1))
			)
				throw ((n = dl), vn(e, 0), Yt(e, r), $e(e, de()), n);
			switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(j(345));
				case 2:
					dn(e, ze, Tt);
					break;
				case 3:
					if (
						(Yt(e, r), (r & 130023424) === r && ((t = Eu + 500 - de()), 10 < t))
					) {
						if (ci(e, 0) !== 0) break;
						if (((l = e.suspendedLanes), (l & r) !== r)) {
							Me(), (e.pingedLanes |= e.suspendedLanes & l);
							break;
						}
						e.timeoutHandle = aa(dn.bind(null, e, ze, Tt), t);
						break;
					}
					dn(e, ze, Tt);
					break;
				case 4:
					if ((Yt(e, r), (r & 4194240) === r)) break;
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
								: 1960 * Am(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = aa(dn.bind(null, e, ze, Tt), r);
						break;
					}
					dn(e, ze, Tt);
					break;
				case 5:
					dn(e, ze, Tt);
					break;
				default:
					throw Error(j(329));
			}
		}
	}
	return $e(e, de()), e.callbackNode === n ? Nf.bind(null, e) : null;
}
function Pa(e, t) {
	var n = Yr;
	return (
		e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256),
		(e = Ni(e, t)),
		e !== 2 && ((t = ze), (ze = n), t !== null && Na(t)),
		e
	);
}
function Na(e) {
	ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function Dm(e) {
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
function Yt(e, t) {
	for (
		t &= ~Su,
			t &= ~$i,
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
function Js(e) {
	if (Y & 6) throw Error(j(327));
	er();
	var t = ci(e, 0);
	if (!(t & 1)) return $e(e, de()), null;
	var n = Ni(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = bo(e);
		r !== 0 && ((t = r), (n = Pa(e, r)));
	}
	if (n === 1) throw ((n = dl), vn(e, 0), Yt(e, t), $e(e, de()), n);
	if (n === 6) throw Error(j(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		dn(e, ze, Tt),
		$e(e, de()),
		null
	);
}
function ku(e, t) {
	var n = Y;
	Y |= 1;
	try {
		return e(t);
	} finally {
		(Y = n), Y === 0 && ((dr = de() + 500), Fi && sn());
	}
}
function kn(e) {
	Kt !== null && Kt.tag === 0 && !(Y & 6) && er();
	var t = Y;
	Y |= 1;
	var n = tt.transition,
		r = K;
	try {
		if (((tt.transition = null), (K = 1), e)) return e();
	} finally {
		(K = r), (tt.transition = n), (Y = t), !(Y & 6) && sn();
	}
}
function Cu() {
	(Ve = Yn.current), b(Yn);
}
function vn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), dm(n)), he !== null))
		for (n = he.return; n !== null; ) {
			var r = n;
			switch ((lu(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && mi();
					break;
				case 3:
					sr(), b(Be), b(Re), pu();
					break;
				case 5:
					fu(r);
					break;
				case 4:
					sr();
					break;
				case 13:
					b(ae);
					break;
				case 19:
					b(ae);
					break;
				case 10:
					uu(r.type._context);
					break;
				case 22:
				case 23:
					Cu();
			}
			n = n.return;
		}
	if (
		((Se = e),
		(he = e = nn(e.current, null)),
		(Te = Ve = t),
		(ge = 0),
		(dl = null),
		(Su = $i = En = 0),
		(ze = Yr = null),
		pn !== null)
	) {
		for (t = 0; t < pn.length; t++)
			if (((n = pn[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var l = r.next,
					i = n.pending;
				if (i !== null) {
					var o = i.next;
					(i.next = l), (r.next = o);
				}
				n.pending = r;
			}
		pn = null;
	}
	return e;
}
function _f(e, t) {
	do {
		var n = he;
		try {
			if ((au(), (Zl.current = Ci), ki)) {
				for (var r = ue.memoizedState; r !== null; ) {
					var l = r.queue;
					l !== null && (l.pending = null), (r = r.next);
				}
				ki = !1;
			}
			if (
				((Sn = 0),
				(we = ve = ue = null),
				(Vr = !1),
				(ul = 0),
				(xu.current = null),
				n === null || n.return === null)
			) {
				(ge = 1), (dl = t), (he = null);
				break;
			}
			e: {
				var i = e,
					o = n.return,
					a = n,
					u = t;
				if (
					((t = Te),
					(a.flags |= 32768),
					u !== null && typeof u == 'object' && typeof u.then == 'function')
				) {
					var s = u,
						d = a,
						p = d.tag;
					if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
						var v = d.alternate;
						v
							? ((d.updateQueue = v.updateQueue),
							  (d.memoizedState = v.memoizedState),
							  (d.lanes = v.lanes))
							: ((d.updateQueue = null), (d.memoizedState = null));
					}
					var y = Fs(o);
					if (y !== null) {
						(y.flags &= -257),
							Us(y, o, a, i, t),
							y.mode & 1 && zs(i, s, t),
							(t = y),
							(u = s);
						var x = t.updateQueue;
						if (x === null) {
							var w = new Set();
							w.add(u), (t.updateQueue = w);
						} else x.add(u);
						break e;
					} else {
						if (!(t & 1)) {
							zs(i, s, t), Tu();
							break e;
						}
						u = Error(j(426));
					}
				} else if (ie && a.mode & 1) {
					var P = Fs(o);
					if (P !== null) {
						!(P.flags & 65536) && (P.flags |= 256),
							Us(P, o, a, i, t),
							iu(cr(u, a));
						break e;
					}
				}
				(i = u = cr(u, a)),
					ge !== 4 && (ge = 2),
					Yr === null ? (Yr = [i]) : Yr.push(i),
					(i = o);
				do {
					switch (i.tag) {
						case 3:
							(i.flags |= 65536), (t &= -t), (i.lanes |= t);
							var m = ff(i, u, t);
							Rs(i, m);
							break e;
						case 1:
							a = u;
							var f = i.type,
								g = i.stateNode;
							if (
								!(i.flags & 128) &&
								(typeof f.getDerivedStateFromError == 'function' ||
									(g !== null &&
										typeof g.componentDidCatch == 'function' &&
										(en === null || !en.has(g))))
							) {
								(i.flags |= 65536), (t &= -t), (i.lanes |= t);
								var h = pf(i, a, t);
								Rs(i, h);
								break e;
							}
					}
					i = i.return;
				} while (i !== null);
			}
			Mf(n);
		} catch (T) {
			(t = T), he === n && n !== null && (he = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function Rf() {
	var e = Ti.current;
	return (Ti.current = Ci), e === null ? Ci : e;
}
function Tu() {
	(ge === 0 || ge === 3 || ge === 2) && (ge = 4),
		Se === null || (!(En & 268435455) && !($i & 268435455)) || Yt(Se, Te);
}
function Ni(e, t) {
	var n = Y;
	Y |= 2;
	var r = Rf();
	(Se !== e || Te !== t) && ((Tt = null), vn(e, t));
	do
		try {
			Im();
			break;
		} catch (l) {
			_f(e, l);
		}
	while (1);
	if ((au(), (Y = n), (Ti.current = r), he !== null)) throw Error(j(261));
	return (Se = null), (Te = 0), ge;
}
function Im() {
	for (; he !== null; ) Lf(he);
}
function zm() {
	for (; he !== null && !uh(); ) Lf(he);
}
function Lf(e) {
	var t = Af(e.alternate, e, Ve);
	(e.memoizedProps = e.pendingProps),
		t === null ? Mf(e) : (he = t),
		(xu.current = null);
}
function Mf(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Rm(n, t)), n !== null)) {
				(n.flags &= 32767), (he = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(ge = 6), (he = null);
				return;
			}
		} else if (((n = _m(n, t, Ve)), n !== null)) {
			he = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			he = t;
			return;
		}
		he = t = e;
	} while (t !== null);
	ge === 0 && (ge = 5);
}
function dn(e, t, n) {
	var r = K,
		l = tt.transition;
	try {
		(tt.transition = null), (K = 1), Fm(e, t, n, r);
	} finally {
		(tt.transition = l), (K = r);
	}
	return null;
}
function Fm(e, t, n, r) {
	do er();
	while (Kt !== null);
	if (Y & 6) throw Error(j(327));
	n = e.finishedWork;
	var l = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(j(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var i = n.lanes | n.childLanes;
	if (
		(yh(e, i),
		e === Se && ((he = Se = null), (Te = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Wl ||
			((Wl = !0),
			Df(si, function () {
				return er(), null;
			})),
		(i = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || i)
	) {
		(i = tt.transition), (tt.transition = null);
		var o = K;
		K = 1;
		var a = Y;
		(Y |= 4),
			(xu.current = null),
			Mm(e, n),
			jf(n, e),
			lm(ia),
			(di = !!la),
			(ia = la = null),
			(e.current = n),
			Om(n),
			sh(),
			(Y = a),
			(K = o),
			(tt.transition = i);
	} else e.current = n;
	if (
		(Wl && ((Wl = !1), (Kt = e), (Pi = l)),
		(i = e.pendingLanes),
		i === 0 && (en = null),
		fh(n.stateNode),
		$e(e, de()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
	if (ji) throw ((ji = !1), (e = Ta), (Ta = null), e);
	return (
		Pi & 1 && e.tag !== 0 && er(),
		(i = e.pendingLanes),
		i & 1 ? (e === ja ? qr++ : ((qr = 0), (ja = e))) : (qr = 0),
		sn(),
		null
	);
}
function er() {
	if (Kt !== null) {
		var e = cd(Pi),
			t = tt.transition,
			n = K;
		try {
			if (((tt.transition = null), (K = 16 > e ? 16 : e), Kt === null))
				var r = !1;
			else {
				if (((e = Kt), (Kt = null), (Pi = 0), Y & 6)) throw Error(j(331));
				var l = Y;
				for (Y |= 4, L = e.current; L !== null; ) {
					var i = L,
						o = i.child;
					if (L.flags & 16) {
						var a = i.deletions;
						if (a !== null) {
							for (var u = 0; u < a.length; u++) {
								var s = a[u];
								for (L = s; L !== null; ) {
									var d = L;
									switch (d.tag) {
										case 0:
										case 11:
										case 15:
											Qr(8, d, i);
									}
									var p = d.child;
									if (p !== null) (p.return = d), (L = p);
									else
										for (; L !== null; ) {
											d = L;
											var v = d.sibling,
												y = d.return;
											if ((kf(d), d === s)) {
												L = null;
												break;
											}
											if (v !== null) {
												(v.return = y), (L = v);
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
										Qr(9, i, i.return);
								}
							var m = i.sibling;
							if (m !== null) {
								(m.return = i.return), (L = m);
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
											Hi(9, a);
									}
								} catch (T) {
									ce(a, a.return, T);
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
					((Y = l), sn(), xt && typeof xt.onPostCommitFiberRoot == 'function')
				)
					try {
						xt.onPostCommitFiberRoot(Oi, e);
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
function Zs(e, t, n) {
	(t = cr(n, t)),
		(t = ff(e, t, 1)),
		(e = bt(e, t, 1)),
		(t = Me()),
		e !== null && (yl(e, 1, t), $e(e, t));
}
function ce(e, t, n) {
	if (e.tag === 3) Zs(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Zs(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(en === null || !en.has(r)))
				) {
					(e = cr(n, e)),
						(e = pf(t, e, 1)),
						(t = bt(t, e, 1)),
						(e = Me()),
						t !== null && (yl(t, 1, e), $e(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function Um(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = Me()),
		(e.pingedLanes |= e.suspendedLanes & n),
		Se === e &&
			(Te & n) === n &&
			(ge === 4 || (ge === 3 && (Te & 130023424) === Te && 500 > de() - Eu)
				? vn(e, 0)
				: (Su |= n)),
		$e(e, t);
}
function Of(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = Ol), (Ol <<= 1), !(Ol & 130023424) && (Ol = 4194304))
			: (t = 1));
	var n = Me();
	(e = Ot(e, t)), e !== null && (yl(e, t, n), $e(e, n));
}
function Bm(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Of(e, n);
}
function Hm(e, t) {
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
			throw Error(j(314));
	}
	r !== null && r.delete(t), Of(e, n);
}
var Af;
Af = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Be.current) Fe = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Fe = !1), Nm(e, t, n);
			Fe = !!(e.flags & 131072);
		}
	else (Fe = !1), ie && t.flags & 1048576 && Id(t, yi, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			ei(e, t), (e = t.pendingProps);
			var l = or(t, Re.current);
			bn(t, n), (l = mu(null, t, r, e, l, n));
			var i = vu();
			return (
				(t.flags |= 1),
				typeof l == 'object' &&
				l !== null &&
				typeof l.render == 'function' &&
				l.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  He(r) ? ((i = !0), vi(t)) : (i = !1),
					  (t.memoizedState =
							l.state !== null && l.state !== void 0 ? l.state : null),
					  cu(t),
					  (l.updater = Ui),
					  (t.stateNode = l),
					  (l._reactInternals = t),
					  ha(t, r, e, n),
					  (t = ga(null, t, r, !0, i, n)))
					: ((t.tag = 0), ie && i && ru(t), Le(null, t, l, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(ei(e, t),
					(e = t.pendingProps),
					(l = r._init),
					(r = l(r._payload)),
					(t.type = r),
					(l = t.tag = Wm(r)),
					(e = ot(r, e)),
					l)
				) {
					case 0:
						t = va(null, t, r, e, n);
						break e;
					case 1:
						t = $s(null, t, r, e, n);
						break e;
					case 11:
						t = Bs(null, t, r, e, n);
						break e;
					case 14:
						t = Hs(null, t, r, ot(r.type, e), n);
						break e;
				}
				throw Error(j(306, r, ''));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ot(r, l)),
				va(e, t, r, l, n)
			);
		case 1:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ot(r, l)),
				$s(e, t, r, l, n)
			);
		case 3:
			e: {
				if ((gf(t), e === null)) throw Error(j(387));
				(r = t.pendingProps),
					(i = t.memoizedState),
					(l = i.element),
					Bd(e, t),
					Si(t, r, null, n);
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
						(l = cr(Error(j(423)), t)), (t = Ws(e, t, r, n, l));
						break e;
					} else if (r !== l) {
						(l = cr(Error(j(424)), t)), (t = Ws(e, t, r, n, l));
						break e;
					} else
						for (
							Qe = Zt(t.stateNode.containerInfo.firstChild),
								Ye = t,
								ie = !0,
								st = null,
								n = Vd(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((ar(), r === l)) {
						t = At(e, t, n);
						break e;
					}
					Le(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Qd(t),
				e === null && da(t),
				(r = t.type),
				(l = t.pendingProps),
				(i = e !== null ? e.memoizedProps : null),
				(o = l.children),
				oa(r, l) ? (o = null) : i !== null && oa(r, i) && (t.flags |= 32),
				vf(e, t),
				Le(e, t, o, n),
				t.child
			);
		case 6:
			return e === null && da(t), null;
		case 13:
			return yf(e, t, n);
		case 4:
			return (
				du(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = ur(t, null, r, n)) : Le(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ot(r, l)),
				Bs(e, t, r, l, n)
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
					J(wi, r._currentValue),
					(r._currentValue = o),
					i !== null)
				)
					if (pt(i.value, o)) {
						if (i.children === l.children && !Be.current) {
							t = At(e, t, n);
							break e;
						}
					} else
						for (i = t.child, i !== null && (i.return = t); i !== null; ) {
							var a = i.dependencies;
							if (a !== null) {
								o = i.child;
								for (var u = a.firstContext; u !== null; ) {
									if (u.context === r) {
										if (i.tag === 1) {
											(u = _t(-1, n & -n)), (u.tag = 2);
											var s = i.updateQueue;
											if (s !== null) {
												s = s.shared;
												var d = s.pending;
												d === null
													? (u.next = u)
													: ((u.next = d.next), (d.next = u)),
													(s.pending = u);
											}
										}
										(i.lanes |= n),
											(u = i.alternate),
											u !== null && (u.lanes |= n),
											fa(i.return, n, t),
											(a.lanes |= n);
										break;
									}
									u = u.next;
								}
							} else if (i.tag === 10) o = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (((o = i.return), o === null)) throw Error(j(341));
								(o.lanes |= n),
									(a = o.alternate),
									a !== null && (a.lanes |= n),
									fa(o, n, t),
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
				bn(t, n),
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
				Hs(e, t, r, l, n)
			);
		case 15:
			return hf(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ot(r, l)),
				ei(e, t),
				(t.tag = 1),
				He(r) ? ((e = !0), vi(t)) : (e = !1),
				bn(t, n),
				$d(t, r, l),
				ha(t, r, l, n),
				ga(null, t, r, !0, e, n)
			);
		case 19:
			return wf(e, t, n);
		case 22:
			return mf(e, t, n);
	}
	throw Error(j(156, t.tag));
};
function Df(e, t) {
	return od(e, t);
}
function $m(e, t, n, r) {
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
	return new $m(e, t, n, r);
}
function ju(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Wm(e) {
	if (typeof e == 'function') return ju(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === Qa)) return 11;
		if (e === Ya) return 14;
	}
	return 2;
}
function nn(e, t) {
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
function ri(e, t, n, r, l, i) {
	var o = 2;
	if (((r = e), typeof e == 'function')) ju(e) && (o = 1);
	else if (typeof e == 'string') o = 5;
	else
		e: switch (e) {
			case In:
				return gn(n.children, l, i, t);
			case Va:
				(o = 8), (l |= 8);
				break;
			case Fo:
				return (
					(e = et(12, n, t, l | 2)), (e.elementType = Fo), (e.lanes = i), e
				);
			case Uo:
				return (e = et(13, n, t, l)), (e.elementType = Uo), (e.lanes = i), e;
			case Bo:
				return (e = et(19, n, t, l)), (e.elementType = Bo), (e.lanes = i), e;
			case Wc:
				return Wi(n, l, i, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case Hc:
							o = 10;
							break e;
						case $c:
							o = 9;
							break e;
						case Qa:
							o = 11;
							break e;
						case Ya:
							o = 14;
							break e;
						case Wt:
							(o = 16), (r = null);
							break e;
					}
				throw Error(j(130, e == null ? e : typeof e, ''));
		}
	return (
		(t = et(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
	);
}
function gn(e, t, n, r) {
	return (e = et(7, e, r, t)), (e.lanes = n), e;
}
function Wi(e, t, n, r) {
	return (
		(e = et(22, e, r, t)),
		(e.elementType = Wc),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function Lo(e, t, n) {
	return (e = et(6, e, null, t)), (e.lanes = n), e;
}
function Mo(e, t, n) {
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
function Vm(e, t, n, r, l) {
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
		(this.eventTimes = fo(0)),
		(this.expirationTimes = fo(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = fo(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = l),
		(this.mutableSourceEagerHydrationData = null);
}
function Pu(e, t, n, r, l, i, o, a, u) {
	return (
		(e = new Vm(e, t, n, a, u)),
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
		cu(i),
		e
	);
}
function Qm(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Dn,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function If(e) {
	if (!e) return on;
	e = e._reactInternals;
	e: {
		if (jn(e) !== e || e.tag !== 1) throw Error(j(170));
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
		throw Error(j(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (He(n)) return Ad(e, n, t);
	}
	return t;
}
function zf(e, t, n, r, l, i, o, a, u) {
	return (
		(e = Pu(n, r, !0, e, l, i, o, a, u)),
		(e.context = If(null)),
		(n = e.current),
		(r = Me()),
		(l = tn(n)),
		(i = _t(r, l)),
		(i.callback = t ?? null),
		bt(n, i, l),
		(e.current.lanes = l),
		yl(e, l, r),
		$e(e, r),
		e
	);
}
function Vi(e, t, n, r) {
	var l = t.current,
		i = Me(),
		o = tn(l);
	return (
		(n = If(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = _t(i, o)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = bt(l, t, o)),
		e !== null && (ft(e, l, o, i), Jl(e, l, o)),
		o
	);
}
function _i(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function bs(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Nu(e, t) {
	bs(e, t), (e = e.alternate) && bs(e, t);
}
function Ym() {
	return null;
}
var Ff =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
		  };
function _u(e) {
	this._internalRoot = e;
}
Qi.prototype.render = _u.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(j(409));
	Vi(e, t, null, null);
};
Qi.prototype.unmount = _u.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		kn(function () {
			Vi(null, e, null, null);
		}),
			(t[Mt] = null);
	}
};
function Qi(e) {
	this._internalRoot = e;
}
Qi.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = pd();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
		Qt.splice(n, 0, e), n === 0 && md(e);
	}
};
function Ru(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yi(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	);
}
function ec() {}
function qm(e, t, n, r, l) {
	if (l) {
		if (typeof r == 'function') {
			var i = r;
			r = function () {
				var s = _i(o);
				i.call(s);
			};
		}
		var o = zf(t, r, e, 0, null, !1, !1, '', ec);
		return (
			(e._reactRootContainer = o),
			(e[Mt] = o.current),
			rl(e.nodeType === 8 ? e.parentNode : e),
			kn(),
			o
		);
	}
	for (; (l = e.lastChild); ) e.removeChild(l);
	if (typeof r == 'function') {
		var a = r;
		r = function () {
			var s = _i(u);
			a.call(s);
		};
	}
	var u = Pu(e, 0, !1, null, null, !1, !1, '', ec);
	return (
		(e._reactRootContainer = u),
		(e[Mt] = u.current),
		rl(e.nodeType === 8 ? e.parentNode : e),
		kn(function () {
			Vi(t, u, n, r);
		}),
		u
	);
}
function qi(e, t, n, r, l) {
	var i = n._reactRootContainer;
	if (i) {
		var o = i;
		if (typeof l == 'function') {
			var a = l;
			l = function () {
				var u = _i(o);
				a.call(u);
			};
		}
		Vi(t, o, e, l);
	} else o = qm(n, t, e, l, r);
	return _i(o);
}
dd = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = zr(t.pendingLanes);
				n !== 0 &&
					(Ga(t, n | 1), $e(t, de()), !(Y & 6) && ((dr = de() + 500), sn()));
			}
			break;
		case 13:
			kn(function () {
				var r = Ot(e, 1);
				if (r !== null) {
					var l = Me();
					ft(r, e, 1, l);
				}
			}),
				Nu(e, 1);
	}
};
Xa = function (e) {
	if (e.tag === 13) {
		var t = Ot(e, 134217728);
		if (t !== null) {
			var n = Me();
			ft(t, e, 134217728, n);
		}
		Nu(e, 134217728);
	}
};
fd = function (e) {
	if (e.tag === 13) {
		var t = tn(e),
			n = Ot(e, t);
		if (n !== null) {
			var r = Me();
			ft(n, e, t, r);
		}
		Nu(e, t);
	}
};
pd = function () {
	return K;
};
hd = function (e, t) {
	var n = K;
	try {
		return (K = e), t();
	} finally {
		K = n;
	}
};
Xo = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((Wo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
						var l = zi(r);
						if (!l) throw Error(j(90));
						Qc(r), Wo(r, l);
					}
				}
			}
			break;
		case 'textarea':
			qc(e, n);
			break;
		case 'select':
			(t = n.value), t != null && Gn(e, !!n.multiple, t, !1);
	}
};
ed = ku;
td = kn;
var Km = { usingClientEntryPoint: !1, Events: [xl, Bn, zi, Zc, bc, ku] },
	Nr = {
		findFiberByHostInstance: fn,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom',
	},
	Gm = {
		bundleType: Nr.bundleType,
		version: Nr.version,
		rendererPackageName: Nr.rendererPackageName,
		rendererConfig: Nr.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Dt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = ld(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Nr.findFiberByHostInstance || Ym,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Vl.isDisabled && Vl.supportsFiber)
		try {
			(Oi = Vl.inject(Gm)), (xt = Vl);
		} catch {}
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Km;
Ke.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Ru(t)) throw Error(j(200));
	return Qm(e, t, null, n);
};
Ke.createRoot = function (e, t) {
	if (!Ru(e)) throw Error(j(299));
	var n = !1,
		r = '',
		l = Ff;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
		(t = Pu(e, 1, !1, null, null, n, !1, r, l)),
		(e[Mt] = t.current),
		rl(e.nodeType === 8 ? e.parentNode : e),
		new _u(t)
	);
};
Ke.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(j(188))
			: ((e = Object.keys(e).join(',')), Error(j(268, e)));
	return (e = ld(t)), (e = e === null ? null : e.stateNode), e;
};
Ke.flushSync = function (e) {
	return kn(e);
};
Ke.hydrate = function (e, t, n) {
	if (!Yi(t)) throw Error(j(200));
	return qi(null, e, t, !0, n);
};
Ke.hydrateRoot = function (e, t, n) {
	if (!Ru(e)) throw Error(j(405));
	var r = (n != null && n.hydratedSources) || null,
		l = !1,
		i = '',
		o = Ff;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (l = !0),
			n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(t = zf(t, null, e, 1, n ?? null, l, !1, i, o)),
		(e[Mt] = t.current),
		rl(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(l = n._getVersion),
				(l = l(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, l])
					: t.mutableSourceEagerHydrationData.push(n, l);
	return new Qi(t);
};
Ke.render = function (e, t, n) {
	if (!Yi(t)) throw Error(j(200));
	return qi(null, e, t, !1, n);
};
Ke.unmountComponentAtNode = function (e) {
	if (!Yi(e)) throw Error(j(40));
	return e._reactRootContainer
		? (kn(function () {
				qi(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Mt] = null);
				});
		  }),
		  !0)
		: !1;
};
Ke.unstable_batchedUpdates = ku;
Ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Yi(n)) throw Error(j(200));
	if (e == null || e._reactInternals === void 0) throw Error(j(38));
	return qi(e, t, n, !1, r);
};
Ke.version = '18.2.0-next-9e3b772b8-20220608';
function Uf() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uf);
		} catch (e) {
			console.error(e);
		}
}
Uf(), (Ic.exports = Ke);
var Xm = Ic.exports,
	tc = Xm;
(Io.createRoot = tc.createRoot), (Io.hydrateRoot = tc.hydrateRoot);
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
const nc = 'popstate';
function Jm(e) {
	e === void 0 && (e = {});
	function t(r, l) {
		let { pathname: i, search: o, hash: a } = r.location;
		return fl(
			'',
			{ pathname: i, search: o, hash: a },
			(l.state && l.state.usr) || null,
			(l.state && l.state.key) || 'default'
		);
	}
	function n(r, l) {
		return typeof l == 'string' ? l : Cn(l);
	}
	return bm(t, n, null, e);
}
function W(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function fr(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function Zm() {
	return Math.random().toString(36).substr(2, 8);
}
function rc(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function fl(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		le(
			{ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
			typeof t == 'string' ? It(t) : t,
			{ state: n, key: (t && t.key) || r || Zm() }
		)
	);
}
function Cn(e) {
	let { pathname: t = '/', search: n = '', hash: r = '' } = e;
	return (
		n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
		r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
		t
	);
}
function It(e) {
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
function bm(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: l = document.defaultView, v5Compat: i = !1 } = r,
		o = l.history,
		a = pe.Pop,
		u = null,
		s = d();
	s == null && ((s = 0), o.replaceState(le({}, o.state, { idx: s }), ''));
	function d() {
		return (o.state || { idx: null }).idx;
	}
	function p() {
		a = pe.Pop;
		let P = d(),
			m = P == null ? null : P - s;
		(s = P), u && u({ action: a, location: w.location, delta: m });
	}
	function v(P, m) {
		a = pe.Push;
		let f = fl(w.location, P, m);
		n && n(f, P), (s = d() + 1);
		let g = rc(f, s),
			h = w.createHref(f);
		try {
			o.pushState(g, '', h);
		} catch (T) {
			if (T instanceof DOMException && T.name === 'DataCloneError') throw T;
			l.location.assign(h);
		}
		i && u && u({ action: a, location: w.location, delta: 1 });
	}
	function y(P, m) {
		a = pe.Replace;
		let f = fl(w.location, P, m);
		n && n(f, P), (s = d());
		let g = rc(f, s),
			h = w.createHref(f);
		o.replaceState(g, '', h),
			i && u && u({ action: a, location: w.location, delta: 0 });
	}
	function x(P) {
		let m = l.location.origin !== 'null' ? l.location.origin : l.location.href,
			f = typeof P == 'string' ? P : Cn(P);
		return (
			W(
				m,
				'No window.location.(origin|href) available to create URL for href: ' +
					f
			),
			new URL(f, m)
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
			if (u) throw new Error('A history only accepts one active listener');
			return (
				l.addEventListener(nc, p),
				(u = P),
				() => {
					l.removeEventListener(nc, p), (u = null);
				}
			);
		},
		createHref(P) {
			return t(l, P);
		},
		createURL: x,
		encodeLocation(P) {
			let m = x(P);
			return { pathname: m.pathname, search: m.search, hash: m.hash };
		},
		push: v,
		replace: y,
		go(P) {
			return o.go(P);
		},
	};
	return w;
}
var me;
(function (e) {
	(e.data = 'data'),
		(e.deferred = 'deferred'),
		(e.redirect = 'redirect'),
		(e.error = 'error');
})(me || (me = {}));
const ev = new Set([
	'lazy',
	'caseSensitive',
	'path',
	'id',
	'index',
	'children',
]);
function tv(e) {
	return e.index === !0;
}
function _a(e, t, n, r) {
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
				tv(l))
			) {
				let u = le({}, l, t(l), { id: a });
				return (r[a] = u), u;
			} else {
				let u = le({}, l, t(l), { id: a, children: void 0 });
				return (
					(r[a] = u), l.children && (u.children = _a(l.children, t, o, r)), u
				);
			}
		})
	);
}
function qn(e, t, n) {
	n === void 0 && (n = '/');
	let r = typeof t == 'string' ? It(t) : t,
		l = gr(r.pathname || '/', n);
	if (l == null) return null;
	let i = Bf(e);
	nv(i);
	let o = null;
	for (let a = 0; o == null && a < i.length; ++a) o = dv(i[a], hv(l));
	return o;
}
function Bf(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
	let l = (i, o, a) => {
		let u = {
			relativePath: a === void 0 ? i.path || '' : a,
			caseSensitive: i.caseSensitive === !0,
			childrenIndex: o,
			route: i,
		};
		u.relativePath.startsWith('/') &&
			(W(
				u.relativePath.startsWith(r),
				'Absolute route path "' +
					u.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					'must start with the combined path of all its parent routes.'
			),
			(u.relativePath = u.relativePath.slice(r.length)));
		let s = Rt([r, u.relativePath]),
			d = n.concat(u);
		i.children &&
			i.children.length > 0 &&
			(W(
				i.index !== !0,
				'Index routes must not have child routes. Please remove ' +
					('all child routes from route path "' + s + '".')
			),
			Bf(i.children, t, d, s)),
			!(i.path == null && !i.index) &&
				t.push({ path: s, score: sv(s, i.index), routesMeta: d });
	};
	return (
		e.forEach((i, o) => {
			var a;
			if (i.path === '' || !((a = i.path) != null && a.includes('?'))) l(i, o);
			else for (let u of Hf(i.path)) l(i, o, u);
		}),
		t
	);
}
function Hf(e) {
	let t = e.split('/');
	if (t.length === 0) return [];
	let [n, ...r] = t,
		l = n.endsWith('?'),
		i = n.replace(/\?$/, '');
	if (r.length === 0) return l ? [i, ''] : [i];
	let o = Hf(r.join('/')),
		a = [];
	return (
		a.push(...o.map((u) => (u === '' ? i : [i, u].join('/')))),
		l && a.push(...o),
		a.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
	);
}
function nv(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: cv(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const rv = /^:\w+$/,
	lv = 3,
	iv = 2,
	ov = 1,
	av = 10,
	uv = -2,
	lc = (e) => e === '*';
function sv(e, t) {
	let n = e.split('/'),
		r = n.length;
	return (
		n.some(lc) && (r += uv),
		t && (r += iv),
		n
			.filter((l) => !lc(l))
			.reduce((l, i) => l + (rv.test(i) ? lv : i === '' ? ov : av), r)
	);
}
function cv(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function dv(e, t) {
	let { routesMeta: n } = e,
		r = {},
		l = '/',
		i = [];
	for (let o = 0; o < n.length; ++o) {
		let a = n[o],
			u = o === n.length - 1,
			s = l === '/' ? t : t.slice(l.length) || '/',
			d = fv(
				{ path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
				s
			);
		if (!d) return null;
		Object.assign(r, d.params);
		let p = a.route;
		i.push({
			params: r,
			pathname: Rt([l, d.pathname]),
			pathnameBase: yv(Rt([l, d.pathnameBase])),
			route: p,
		}),
			d.pathnameBase !== '/' && (l = Rt([l, d.pathnameBase]));
	}
	return i;
}
function fv(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = pv(e.path, e.caseSensitive, e.end),
		l = t.match(n);
	if (!l) return null;
	let i = l[0],
		o = i.replace(/(.)\/+$/, '$1'),
		a = l.slice(1);
	return {
		params: r.reduce((s, d, p) => {
			if (d === '*') {
				let v = a[p] || '';
				o = i.slice(0, i.length - v.length).replace(/(.)\/+$/, '$1');
			}
			return (s[d] = mv(a[p] || '', d)), s;
		}, {}),
		pathname: i,
		pathnameBase: o,
		pattern: e,
	};
}
function pv(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		fr(
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
function hv(e) {
	try {
		return decodeURI(e);
	} catch (t) {
		return (
			fr(
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
function mv(e, t) {
	try {
		return decodeURIComponent(e);
	} catch (n) {
		return (
			fr(
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
function gr(e, t) {
	if (t === '/') return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== '/' ? null : e.slice(n) || '/';
}
function vv(e, t) {
	t === void 0 && (t = '/');
	let {
		pathname: n,
		search: r = '',
		hash: l = '',
	} = typeof e == 'string' ? It(e) : e;
	return {
		pathname: n ? (n.startsWith('/') ? n : gv(n, t)) : t,
		search: wv(r),
		hash: xv(l),
	};
}
function gv(e, t) {
	let n = t.replace(/\/+$/, '').split('/');
	return (
		e.split('/').forEach((l) => {
			l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
		}),
		n.length > 1 ? n.join('/') : '/'
	);
}
function Oo(e, t, n, r) {
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
function Ki(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	);
}
function Lu(e, t, n, r) {
	r === void 0 && (r = !1);
	let l;
	typeof e == 'string'
		? (l = It(e))
		: ((l = le({}, e)),
		  W(
				!l.pathname || !l.pathname.includes('?'),
				Oo('?', 'pathname', 'search', l)
		  ),
		  W(
				!l.pathname || !l.pathname.includes('#'),
				Oo('#', 'pathname', 'hash', l)
		  ),
		  W(!l.search || !l.search.includes('#'), Oo('#', 'search', 'hash', l)));
	let i = e === '' || l.pathname === '',
		o = i ? '/' : l.pathname,
		a;
	if (r || o == null) a = n;
	else {
		let p = t.length - 1;
		if (o.startsWith('..')) {
			let v = o.split('/');
			for (; v[0] === '..'; ) v.shift(), (p -= 1);
			l.pathname = v.join('/');
		}
		a = p >= 0 ? t[p] : '/';
	}
	let u = vv(l, a),
		s = o && o !== '/' && o.endsWith('/'),
		d = (i || o === '.') && n.endsWith('/');
	return !u.pathname.endsWith('/') && (s || d) && (u.pathname += '/'), u;
}
const Rt = (e) => e.join('/').replace(/\/\/+/g, '/'),
	yv = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
	wv = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
	xv = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class Mu {
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
function $f(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.internal == 'boolean' &&
		'data' in e
	);
}
const Wf = ['post', 'put', 'patch', 'delete'],
	Sv = new Set(Wf),
	Ev = ['get', ...Wf],
	kv = new Set(Ev),
	Cv = new Set([301, 302, 303, 307, 308]),
	Tv = new Set([307, 308]),
	Ao = {
		state: 'idle',
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	jv = {
		state: 'idle',
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	_r = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
	Vf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	Pv = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function Nv(e) {
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
	} else l = Pv;
	let i = {},
		o = _a(e.routes, l, void 0, i),
		a,
		u = e.basename || '/',
		s = le({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
		d = null,
		p = new Set(),
		v = null,
		y = null,
		x = null,
		w = e.hydrationData != null,
		P = qn(o, e.history.location, u),
		m = null;
	if (P == null) {
		let S = Je(404, { pathname: e.history.location.pathname }),
			{ matches: E, route: C } = fc(o);
		(P = E), (m = { [C.id]: S });
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
			navigation: Ao,
			restoreScrollPosition: e.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: 'idle',
			loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
			actionData: (e.hydrationData && e.hydrationData.actionData) || null,
			errors: (e.hydrationData && e.hydrationData.errors) || m,
			fetchers: new Map(),
			blockers: new Map(),
		},
		T = pe.Pop,
		_ = !1,
		N,
		M = !1,
		Q = !1,
		U = [],
		Ee = [],
		G = new Map(),
		Ft = 0,
		_n = -1,
		Ut = new Map(),
		lt = new Set(),
		ht = new Map(),
		R = new Map(),
		I = new Map(),
		$ = !1;
	function oe() {
		return (
			(d = e.history.listen((S) => {
				let { action: E, location: C, delta: O } = S;
				if ($) {
					$ = !1;
					return;
				}
				fr(
					I.size === 0 || O != null,
					'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
				);
				let B = Wu({
					currentLocation: h.location,
					nextLocation: C,
					historyAction: E,
				});
				if (B && O != null) {
					($ = !0),
						e.history.go(O * -1),
						Cl(B, {
							state: 'blocked',
							location: C,
							proceed() {
								Cl(B, {
									state: 'proceeding',
									proceed: void 0,
									reset: void 0,
									location: C,
								}),
									e.history.go(O);
							},
							reset() {
								let z = new Map(h.blockers);
								z.set(B, _r), ee({ blockers: z });
							},
						});
					return;
				}
				return Bt(E, C);
			})),
			h.initialized || Bt(pe.Pop, h.location),
			g
		);
	}
	function fe() {
		d && d(),
			p.clear(),
			N && N.abort(),
			h.fetchers.forEach((S, E) => eo(E)),
			h.blockers.forEach((S, E) => $u(E));
	}
	function Rn(S) {
		return p.add(S), () => p.delete(S);
	}
	function ee(S) {
		(h = le({}, h, S)), p.forEach((E) => E(h));
	}
	function Et(S, E) {
		var C, O;
		let B =
				h.actionData != null &&
				h.navigation.formMethod != null &&
				ut(h.navigation.formMethod) &&
				h.navigation.state === 'loading' &&
				((C = S.state) == null ? void 0 : C._isRedirect) !== !0,
			z;
		E.actionData
			? Object.keys(E.actionData).length > 0
				? (z = E.actionData)
				: (z = null)
			: B
			? (z = h.actionData)
			: (z = null);
		let F = E.loaderData
				? dc(h.loaderData, E.loaderData, E.matches || [], E.errors)
				: h.loaderData,
			D = h.blockers;
		D.size > 0 && ((D = new Map(D)), D.forEach((X, q) => D.set(q, _r)));
		let A =
			_ === !0 ||
			(h.navigation.formMethod != null &&
				ut(h.navigation.formMethod) &&
				((O = S.state) == null ? void 0 : O._isRedirect) !== !0);
		a && ((o = a), (a = void 0)),
			M ||
				T === pe.Pop ||
				(T === pe.Push
					? e.history.push(S, S.state)
					: T === pe.Replace && e.history.replace(S, S.state)),
			ee(
				le({}, E, {
					actionData: z,
					loaderData: F,
					historyAction: T,
					location: S,
					initialized: !0,
					navigation: Ao,
					revalidation: 'idle',
					restoreScrollPosition: Qu(S, E.matches || h.matches),
					preventScrollReset: A,
					blockers: D,
				})
			),
			(T = pe.Pop),
			(_ = !1),
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
		let C = Ra(
				h.location,
				h.matches,
				u,
				s.v7_prependBasename,
				S,
				E == null ? void 0 : E.fromRouteId,
				E == null ? void 0 : E.relative
			),
			{
				path: O,
				submission: B,
				error: z,
			} = ic(s.v7_normalizeFormMethod, !1, C, E),
			F = h.location,
			D = fl(h.location, O, E && E.state);
		D = le({}, D, e.history.encodeLocation(D));
		let A = E && E.replace != null ? E.replace : void 0,
			X = pe.Push;
		A === !0
			? (X = pe.Replace)
			: A === !1 ||
			  (B != null &&
					ut(B.formMethod) &&
					B.formAction === h.location.pathname + h.location.search &&
					(X = pe.Replace));
		let q =
				E && 'preventScrollReset' in E ? E.preventScrollReset === !0 : void 0,
			We = Wu({ currentLocation: F, nextLocation: D, historyAction: X });
		if (We) {
			Cl(We, {
				state: 'blocked',
				location: D,
				proceed() {
					Cl(We, {
						state: 'proceeding',
						proceed: void 0,
						reset: void 0,
						location: D,
					}),
						mt(S, E);
				},
				reset() {
					let ye = new Map(h.blockers);
					ye.set(We, _r), ee({ blockers: ye });
				},
			});
			return;
		}
		return await Bt(X, D, {
			submission: B,
			pendingError: z,
			preventScrollReset: q,
			replace: E && E.replace,
		});
	}
	function Ln() {
		if (
			(bi(),
			ee({ revalidation: 'loading' }),
			h.navigation.state !== 'submitting')
		) {
			if (h.navigation.state === 'idle') {
				Bt(h.historyAction, h.location, { startUninterruptedRevalidation: !0 });
				return;
			}
			Bt(T || h.historyAction, h.navigation.location, {
				overrideNavigation: h.navigation,
			});
		}
	}
	async function Bt(S, E, C) {
		N && N.abort(),
			(N = null),
			(T = S),
			(M = (C && C.startUninterruptedRevalidation) === !0),
			Sp(h.location, h.matches),
			(_ = (C && C.preventScrollReset) === !0);
		let O = a || o,
			B = C && C.overrideNavigation,
			z = qn(O, E, u);
		if (!z) {
			let ye = Je(404, { pathname: E.pathname }),
				{ matches: De, route: vt } = fc(O);
			to(), Et(E, { matches: De, loaderData: {}, errors: { [vt.id]: ye } });
			return;
		}
		if (
			h.initialized &&
			!Q &&
			Ov(h.location, E) &&
			!(C && C.submission && ut(C.submission.formMethod))
		) {
			Et(E, { matches: z });
			return;
		}
		N = new AbortController();
		let F = Lr(e.history, E, N.signal, C && C.submission),
			D,
			A;
		if (C && C.pendingError) A = { [Kn(z).route.id]: C.pendingError };
		else if (C && C.submission && ut(C.submission.formMethod)) {
			let ye = await hp(F, E, C.submission, z, { replace: C.replace });
			if (ye.shortCircuited) return;
			(D = ye.pendingActionData),
				(A = ye.pendingActionError),
				(B = Ql(E, C.submission)),
				(F = new Request(F.url, { signal: F.signal }));
		}
		let {
			shortCircuited: X,
			loaderData: q,
			errors: We,
		} = await mp(
			F,
			E,
			z,
			B,
			C && C.submission,
			C && C.fetcherSubmission,
			C && C.replace,
			D,
			A
		);
		X ||
			((N = null),
			Et(
				E,
				le({ matches: z }, D ? { actionData: D } : {}, {
					loaderData: q,
					errors: We,
				})
			));
	}
	async function hp(S, E, C, O, B) {
		B === void 0 && (B = {}), bi();
		let z = Fv(E, C);
		ee({ navigation: z });
		let F,
			D = Ma(O, E);
		if (!D.route.action && !D.route.lazy)
			F = {
				type: me.error,
				error: Je(405, {
					method: S.method,
					pathname: E.pathname,
					routeId: D.route.id,
				}),
			};
		else if (((F = await Rr('action', S, D, O, i, l, u)), S.signal.aborted))
			return { shortCircuited: !0 };
		if (tr(F)) {
			let A;
			return (
				B && B.replace != null
					? (A = B.replace)
					: (A = F.location === h.location.pathname + h.location.search),
				await yr(h, F, { submission: C, replace: A }),
				{ shortCircuited: !0 }
			);
		}
		if (Kr(F)) {
			let A = Kn(O, D.route.id);
			return (
				(B && B.replace) !== !0 && (T = pe.Push),
				{ pendingActionData: {}, pendingActionError: { [A.route.id]: F.error } }
			);
		}
		if (mn(F)) throw Je(400, { type: 'defer-action' });
		return { pendingActionData: { [D.route.id]: F.data } };
	}
	async function mp(S, E, C, O, B, z, F, D, A) {
		let X = O || Ql(E, B),
			q = B || z || mc(X),
			We = a || o,
			[ye, De] = oc(e.history, h, C, q, E, Q, U, Ee, ht, lt, We, u, D, A);
		if (
			(to(
				(te) =>
					!(C && C.some((Xe) => Xe.route.id === te)) ||
					(ye && ye.some((Xe) => Xe.route.id === te))
			),
			ye.length === 0 && De.length === 0)
		) {
			let te = Bu();
			return (
				Et(
					E,
					le(
						{ matches: C, loaderData: {}, errors: A || null },
						D ? { actionData: D } : {},
						te ? { fetchers: new Map(h.fetchers) } : {}
					)
				),
				{ shortCircuited: !0 }
			);
		}
		if (!M) {
			De.forEach((Xe) => {
				let Mn = h.fetchers.get(Xe.key),
					ke = Mr(void 0, Mn ? Mn.data : void 0);
				h.fetchers.set(Xe.key, ke);
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
		(_n = ++Ft),
			De.forEach((te) => {
				G.has(te.key) && Ht(te.key),
					te.controller && G.set(te.key, te.controller);
			});
		let vt = () => De.forEach((te) => Ht(te.key));
		N && N.signal.addEventListener('abort', vt);
		let {
			results: wr,
			loaderResults: no,
			fetcherResults: Tl,
		} = await Fu(h.matches, C, ye, De, S);
		if (S.signal.aborted) return { shortCircuited: !0 };
		N && N.signal.removeEventListener('abort', vt),
			De.forEach((te) => G.delete(te.key));
		let kt = pc(wr);
		if (kt) return await yr(h, kt, { replace: F }), { shortCircuited: !0 };
		let { loaderData: jl, errors: ro } = cc(h, C, ye, no, A, De, Tl, R);
		R.forEach((te, Xe) => {
			te.subscribe((Mn) => {
				(Mn || te.done) && R.delete(Xe);
			});
		});
		let lo = Bu(),
			io = Hu(_n),
			Pl = lo || io || De.length > 0;
		return le(
			{ loaderData: jl, errors: ro },
			Pl ? { fetchers: new Map(h.fetchers) } : {}
		);
	}
	function zu(S) {
		return h.fetchers.get(S) || jv;
	}
	function vp(S, E, C, O) {
		if (r)
			throw new Error(
				"router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
			);
		G.has(S) && Ht(S);
		let B = a || o,
			z = Ra(
				h.location,
				h.matches,
				u,
				s.v7_prependBasename,
				C,
				E,
				O == null ? void 0 : O.relative
			),
			F = qn(B, z, u);
		if (!F) {
			kl(S, E, Je(404, { pathname: z }));
			return;
		}
		let {
			path: D,
			submission: A,
			error: X,
		} = ic(s.v7_normalizeFormMethod, !0, z, O);
		if (X) {
			kl(S, E, X);
			return;
		}
		let q = Ma(F, D);
		if (((_ = (O && O.preventScrollReset) === !0), A && ut(A.formMethod))) {
			gp(S, E, D, q, F, A);
			return;
		}
		ht.set(S, { routeId: E, path: D }), yp(S, E, D, q, F, A);
	}
	async function gp(S, E, C, O, B, z) {
		if ((bi(), ht.delete(S), !O.route.action && !O.route.lazy)) {
			let ke = Je(405, { method: z.formMethod, pathname: C, routeId: E });
			kl(S, E, ke);
			return;
		}
		let F = h.fetchers.get(S),
			D = Uv(z, F);
		h.fetchers.set(S, D), ee({ fetchers: new Map(h.fetchers) });
		let A = new AbortController(),
			X = Lr(e.history, C, A.signal, z);
		G.set(S, A);
		let q = await Rr('action', X, O, B, i, l, u);
		if (X.signal.aborted) {
			G.get(S) === A && G.delete(S);
			return;
		}
		if (tr(q)) {
			G.delete(S), lt.add(S);
			let ke = Mr(z);
			return (
				h.fetchers.set(S, ke),
				ee({ fetchers: new Map(h.fetchers) }),
				yr(h, q, { submission: z, isFetchActionRedirect: !0 })
			);
		}
		if (Kr(q)) {
			kl(S, E, q.error);
			return;
		}
		if (mn(q)) throw Je(400, { type: 'defer-action' });
		let We = h.navigation.location || h.location,
			ye = Lr(e.history, We, A.signal),
			De = a || o,
			vt =
				h.navigation.state !== 'idle'
					? qn(De, h.navigation.location, u)
					: h.matches;
		W(vt, "Didn't find any matches after fetcher action");
		let wr = ++Ft;
		Ut.set(S, wr);
		let no = Mr(z, q.data);
		h.fetchers.set(S, no);
		let [Tl, kt] = oc(
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
			u,
			{ [O.route.id]: q.data },
			void 0
		);
		kt
			.filter((ke) => ke.key !== S)
			.forEach((ke) => {
				let xr = ke.key,
					Yu = h.fetchers.get(xr),
					kp = Mr(void 0, Yu ? Yu.data : void 0);
				h.fetchers.set(xr, kp),
					G.has(xr) && Ht(xr),
					ke.controller && G.set(xr, ke.controller);
			}),
			ee({ fetchers: new Map(h.fetchers) });
		let jl = () => kt.forEach((ke) => Ht(ke.key));
		A.signal.addEventListener('abort', jl);
		let {
			results: ro,
			loaderResults: lo,
			fetcherResults: io,
		} = await Fu(h.matches, vt, Tl, kt, ye);
		if (A.signal.aborted) return;
		A.signal.removeEventListener('abort', jl),
			Ut.delete(S),
			G.delete(S),
			kt.forEach((ke) => G.delete(ke.key));
		let Pl = pc(ro);
		if (Pl) return yr(h, Pl);
		let { loaderData: te, errors: Xe } = cc(
			h,
			h.matches,
			Tl,
			lo,
			void 0,
			kt,
			io,
			R
		);
		if (h.fetchers.has(S)) {
			let ke = li(q.data);
			h.fetchers.set(S, ke);
		}
		let Mn = Hu(wr);
		h.navigation.state === 'loading' && wr > _n
			? (W(T, 'Expected pending action'),
			  N && N.abort(),
			  Et(h.navigation.location, {
					matches: vt,
					loaderData: te,
					errors: Xe,
					fetchers: new Map(h.fetchers),
			  }))
			: (ee(
					le(
						{ errors: Xe, loaderData: dc(h.loaderData, te, vt, Xe) },
						Mn || kt.length > 0 ? { fetchers: new Map(h.fetchers) } : {}
					)
			  ),
			  (Q = !1));
	}
	async function yp(S, E, C, O, B, z) {
		let F = h.fetchers.get(S),
			D = Mr(z, F ? F.data : void 0);
		h.fetchers.set(S, D), ee({ fetchers: new Map(h.fetchers) });
		let A = new AbortController(),
			X = Lr(e.history, C, A.signal);
		G.set(S, A);
		let q = await Rr('loader', X, O, B, i, l, u);
		if (
			(mn(q) && (q = (await qf(q, X.signal, !0)) || q),
			G.get(S) === A && G.delete(S),
			X.signal.aborted)
		)
			return;
		if (tr(q)) {
			lt.add(S), await yr(h, q);
			return;
		}
		if (Kr(q)) {
			let ye = Kn(h.matches, E);
			h.fetchers.delete(S),
				ee({
					fetchers: new Map(h.fetchers),
					errors: { [ye.route.id]: q.error },
				});
			return;
		}
		W(!mn(q), 'Unhandled fetcher deferred data');
		let We = li(q.data);
		h.fetchers.set(S, We), ee({ fetchers: new Map(h.fetchers) });
	}
	async function yr(S, E, C) {
		let {
			submission: O,
			replace: B,
			isFetchActionRedirect: z,
		} = C === void 0 ? {} : C;
		E.revalidate && (Q = !0);
		let F = fl(
			S.location,
			E.location,
			le({ _isRedirect: !0 }, z ? { _isFetchActionRedirect: !0 } : {})
		);
		if (
			(W(F, 'Expected a location on the redirect navigation'),
			Vf.test(E.location) && n)
		) {
			let X = e.history.createURL(E.location),
				q = gr(X.pathname, u) == null;
			if (t.location.origin !== X.origin || q) {
				B ? t.location.replace(E.location) : t.location.assign(E.location);
				return;
			}
		}
		N = null;
		let D = B === !0 ? pe.Replace : pe.Push,
			A = O || mc(S.navigation);
		if (Tv.has(E.status) && A && ut(A.formMethod))
			await Bt(D, F, {
				submission: le({}, A, { formAction: E.location }),
				preventScrollReset: _,
			});
		else if (z)
			await Bt(D, F, {
				overrideNavigation: Ql(F),
				fetcherSubmission: A,
				preventScrollReset: _,
			});
		else {
			let X = Ql(F, A);
			await Bt(D, F, { overrideNavigation: X, preventScrollReset: _ });
		}
	}
	async function Fu(S, E, C, O, B) {
		let z = await Promise.all([
				...C.map((A) => Rr('loader', B, A, E, i, l, u)),
				...O.map((A) =>
					A.matches && A.match && A.controller
						? Rr(
								'loader',
								Lr(e.history, A.path, A.controller.signal),
								A.match,
								A.matches,
								i,
								l,
								u
						  )
						: { type: me.error, error: Je(404, { pathname: A.path }) }
				),
			]),
			F = z.slice(0, C.length),
			D = z.slice(C.length);
		return (
			await Promise.all([
				hc(
					S,
					C,
					F,
					F.map(() => B.signal),
					!1,
					h.loaderData
				),
				hc(
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
	function bi() {
		(Q = !0),
			U.push(...to()),
			ht.forEach((S, E) => {
				G.has(E) && (Ee.push(E), Ht(E));
			});
	}
	function kl(S, E, C) {
		let O = Kn(h.matches, E);
		eo(S), ee({ errors: { [O.route.id]: C }, fetchers: new Map(h.fetchers) });
	}
	function eo(S) {
		let E = h.fetchers.get(S);
		G.has(S) && !(E && E.state === 'loading' && Ut.has(S)) && Ht(S),
			ht.delete(S),
			Ut.delete(S),
			lt.delete(S),
			h.fetchers.delete(S);
	}
	function Ht(S) {
		let E = G.get(S);
		W(E, 'Expected fetch controller: ' + S), E.abort(), G.delete(S);
	}
	function Uu(S) {
		for (let E of S) {
			let C = zu(E),
				O = li(C.data);
			h.fetchers.set(E, O);
		}
	}
	function Bu() {
		let S = [],
			E = !1;
		for (let C of lt) {
			let O = h.fetchers.get(C);
			W(O, 'Expected fetcher: ' + C),
				O.state === 'loading' && (lt.delete(C), S.push(C), (E = !0));
		}
		return Uu(S), E;
	}
	function Hu(S) {
		let E = [];
		for (let [C, O] of Ut)
			if (O < S) {
				let B = h.fetchers.get(C);
				W(B, 'Expected fetcher: ' + C),
					B.state === 'loading' && (Ht(C), Ut.delete(C), E.push(C));
			}
		return Uu(E), E.length > 0;
	}
	function wp(S, E) {
		let C = h.blockers.get(S) || _r;
		return I.get(S) !== E && I.set(S, E), C;
	}
	function $u(S) {
		h.blockers.delete(S), I.delete(S);
	}
	function Cl(S, E) {
		let C = h.blockers.get(S) || _r;
		W(
			(C.state === 'unblocked' && E.state === 'blocked') ||
				(C.state === 'blocked' && E.state === 'blocked') ||
				(C.state === 'blocked' && E.state === 'proceeding') ||
				(C.state === 'blocked' && E.state === 'unblocked') ||
				(C.state === 'proceeding' && E.state === 'unblocked'),
			'Invalid blocker state transition: ' + C.state + ' -> ' + E.state
		);
		let O = new Map(h.blockers);
		O.set(S, E), ee({ blockers: O });
	}
	function Wu(S) {
		let { currentLocation: E, nextLocation: C, historyAction: O } = S;
		if (I.size === 0) return;
		I.size > 1 && fr(!1, 'A router only supports one blocker at a time');
		let B = Array.from(I.entries()),
			[z, F] = B[B.length - 1],
			D = h.blockers.get(z);
		if (
			!(D && D.state === 'proceeding') &&
			F({ currentLocation: E, nextLocation: C, historyAction: O })
		)
			return z;
	}
	function to(S) {
		let E = [];
		return (
			R.forEach((C, O) => {
				(!S || S(O)) && (C.cancel(), E.push(O), R.delete(O));
			}),
			E
		);
	}
	function xp(S, E, C) {
		if (((v = S), (x = E), (y = C || null), !w && h.navigation === Ao)) {
			w = !0;
			let O = Qu(h.location, h.matches);
			O != null && ee({ restoreScrollPosition: O });
		}
		return () => {
			(v = null), (x = null), (y = null);
		};
	}
	function Vu(S, E) {
		return (
			(y &&
				y(
					S,
					E.map((O) => zv(O, h.loaderData))
				)) ||
			S.key
		);
	}
	function Sp(S, E) {
		if (v && x) {
			let C = Vu(S, E);
			v[C] = x();
		}
	}
	function Qu(S, E) {
		if (v) {
			let C = Vu(S, E),
				O = v[C];
			if (typeof O == 'number') return O;
		}
		return null;
	}
	function Ep(S) {
		(i = {}), (a = _a(S, l, void 0, i));
	}
	return (
		(g = {
			get basename() {
				return u;
			},
			get state() {
				return h;
			},
			get routes() {
				return o;
			},
			initialize: oe,
			subscribe: Rn,
			enableScrollRestoration: xp,
			navigate: mt,
			fetch: vp,
			revalidate: Ln,
			createHref: (S) => e.history.createHref(S),
			encodeLocation: (S) => e.history.encodeLocation(S),
			getFetcher: zu,
			deleteFetcher: eo,
			dispose: fe,
			getBlocker: wp,
			deleteBlocker: $u,
			_internalFetchControllers: G,
			_internalActiveDeferreds: R,
			_internalSetRoutes: Ep,
		}),
		g
	);
}
function _v(e) {
	return (
		e != null &&
		(('formData' in e && e.formData != null) ||
			('body' in e && e.body !== void 0))
	);
}
function Ra(e, t, n, r, l, i, o) {
	let a, u;
	if (i != null && o !== 'path') {
		a = [];
		for (let d of t)
			if ((a.push(d), d.route.id === i)) {
				u = d;
				break;
			}
	} else (a = t), (u = t[t.length - 1]);
	let s = Lu(
		l || '.',
		Ki(a).map((d) => d.pathnameBase),
		gr(e.pathname, n) || e.pathname,
		o === 'path'
	);
	return (
		l == null && ((s.search = e.search), (s.hash = e.hash)),
		(l == null || l === '' || l === '.') &&
			u &&
			u.route.index &&
			!Ou(s.search) &&
			(s.search = s.search ? s.search.replace(/^\?/, '?index&') : '?index'),
		r &&
			n !== '/' &&
			(s.pathname = s.pathname === '/' ? n : Rt([n, s.pathname])),
		Cn(s)
	);
}
function ic(e, t, n, r) {
	if (!r || !_v(r)) return { path: n };
	if (r.formMethod && !Iv(r.formMethod))
		return { path: n, error: Je(405, { method: r.formMethod }) };
	let l = () => ({ path: n, error: Je(400, { type: 'invalid-body' }) }),
		i = r.formMethod || 'get',
		o = e ? i.toUpperCase() : i.toLowerCase(),
		a = Yf(n);
	if (r.body !== void 0) {
		if (r.formEncType === 'text/plain') {
			if (!ut(o)) return l();
			let v =
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
					text: v,
				},
			};
		} else if (r.formEncType === 'application/json') {
			if (!ut(o)) return l();
			try {
				let v = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
				return {
					path: n,
					submission: {
						formMethod: o,
						formAction: a,
						formEncType: r.formEncType,
						formData: void 0,
						json: v,
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
	let u, s;
	if (r.formData) (u = La(r.formData)), (s = r.formData);
	else if (r.body instanceof FormData) (u = La(r.body)), (s = r.body);
	else if (r.body instanceof URLSearchParams) (u = r.body), (s = sc(u));
	else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
	else
		try {
			(u = new URLSearchParams(r.body)), (s = sc(u));
		} catch {
			return l();
		}
	let d = {
		formMethod: o,
		formAction: a,
		formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
		formData: s,
		json: void 0,
		text: void 0,
	};
	if (ut(d.formMethod)) return { path: n, submission: d };
	let p = It(n);
	return (
		t && p.search && Ou(p.search) && u.append('index', ''),
		(p.search = '?' + u),
		{ path: Cn(p), submission: d }
	);
}
function Rv(e, t) {
	let n = e;
	if (t) {
		let r = e.findIndex((l) => l.route.id === t);
		r >= 0 && (n = e.slice(0, r));
	}
	return n;
}
function oc(e, t, n, r, l, i, o, a, u, s, d, p, v, y) {
	let x = y ? Object.values(y)[0] : v ? Object.values(v)[0] : void 0,
		w = e.createURL(t.location),
		P = e.createURL(l),
		m = y ? Object.keys(y)[0] : void 0,
		g = Rv(n, m).filter((T, _) => {
			if (T.route.lazy) return !0;
			if (T.route.loader == null) return !1;
			if (Lv(t.loaderData, t.matches[_], T) || o.some((Q) => Q === T.route.id))
				return !0;
			let N = t.matches[_],
				M = T;
			return ac(
				T,
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
							Qf(N, M),
					}
				)
			);
		}),
		h = [];
	return (
		u.forEach((T, _) => {
			if (!n.some((G) => G.route.id === T.routeId)) return;
			let N = qn(d, T.path, p);
			if (!N) {
				h.push({
					key: _,
					routeId: T.routeId,
					path: T.path,
					matches: null,
					match: null,
					controller: null,
				});
				return;
			}
			let M = t.fetchers.get(_),
				Q = M && M.state !== 'idle' && M.data === void 0 && !s.has(_),
				U = Ma(N, T.path);
			(a.includes(_) ||
				Q ||
				ac(
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
					key: _,
					routeId: T.routeId,
					path: T.path,
					matches: N,
					match: U,
					controller: new AbortController(),
				});
		}),
		[g, h]
	);
}
function Lv(e, t, n) {
	let r = !t || n.route.id !== t.route.id,
		l = e[n.route.id] === void 0;
	return r || l;
}
function Qf(e, t) {
	let n = e.route.path;
	return (
		e.pathname !== t.pathname ||
		(n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
	);
}
function ac(e, t) {
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
		let u = l[o] !== void 0 && o !== 'hasErrorBoundary';
		fr(
			!u,
			'Route "' +
				l.id +
				'" has a static property "' +
				o +
				'" defined but its lazy function is also returning a value for this property. ' +
				('The lazy route property "' + o + '" will be ignored.')
		),
			!u && !ev.has(o) && (i[o] = r[o]);
	}
	Object.assign(l, i), Object.assign(l, le({}, t(l), { lazy: void 0 }));
}
async function Rr(e, t, n, r, l, i, o, a) {
	a === void 0 && (a = {});
	let u,
		s,
		d,
		p = (x) => {
			let w,
				P = new Promise((m, f) => (w = f));
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
			if (x) s = (await Promise.all([p(x), uc(n.route, i, l)]))[0];
			else if ((await uc(n.route, i, l), (x = n.route[e]), x)) s = await p(x);
			else if (e === 'action') {
				let w = new URL(t.url),
					P = w.pathname + w.search;
				throw Je(405, { method: t.method, pathname: P, routeId: n.route.id });
			} else return { type: me.data, data: void 0 };
		else if (x) s = await p(x);
		else {
			let w = new URL(t.url),
				P = w.pathname + w.search;
			throw Je(404, { pathname: P });
		}
		W(
			s !== void 0,
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
		(u = me.error), (s = x);
	} finally {
		d && t.signal.removeEventListener('abort', d);
	}
	if (Dv(s)) {
		let x = s.status;
		if (Cv.has(x)) {
			let m = s.headers.get('Location');
			if (
				(W(
					m,
					'Redirects returned/thrown from loaders/actions must have a Location header'
				),
				!Vf.test(m))
			)
				m = Ra(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, m);
			else if (!a.isStaticRequest) {
				let f = new URL(t.url),
					g = m.startsWith('//') ? new URL(f.protocol + m) : new URL(m),
					h = gr(g.pathname, o) != null;
				g.origin === f.origin && h && (m = g.pathname + g.search + g.hash);
			}
			if (a.isStaticRequest) throw (s.headers.set('Location', m), s);
			return {
				type: me.redirect,
				status: x,
				location: m,
				revalidate: s.headers.get('X-Remix-Revalidate') !== null,
			};
		}
		if (a.isRouteRequest) throw { type: u || me.data, response: s };
		let w,
			P = s.headers.get('Content-Type');
		return (
			P && /\bapplication\/json\b/.test(P)
				? (w = await s.json())
				: (w = await s.text()),
			u === me.error
				? { type: u, error: new Mu(x, s.statusText, w), headers: s.headers }
				: { type: me.data, data: w, statusCode: s.status, headers: s.headers }
		);
	}
	if (u === me.error) return { type: u, error: s };
	if (Av(s)) {
		var v, y;
		return {
			type: me.deferred,
			deferredData: s,
			statusCode: (v = s.init) == null ? void 0 : v.status,
			headers:
				((y = s.init) == null ? void 0 : y.headers) &&
				new Headers(s.init.headers),
		};
	}
	return { type: me.data, data: s };
}
function Lr(e, t, n, r) {
	let l = e.createURL(Yf(t)).toString(),
		i = { signal: n };
	if (r && ut(r.formMethod)) {
		let { formMethod: o, formEncType: a } = r;
		(i.method = o.toUpperCase()),
			a === 'application/json'
				? ((i.headers = new Headers({ 'Content-Type': a })),
				  (i.body = JSON.stringify(r.json)))
				: a === 'text/plain'
				? (i.body = r.text)
				: a === 'application/x-www-form-urlencoded' && r.formData
				? (i.body = La(r.formData))
				: (i.body = r.formData);
	}
	return new Request(l, i);
}
function La(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries())
		t.append(n, typeof r == 'string' ? r : r.name);
	return t;
}
function sc(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function Mv(e, t, n, r, l) {
	let i = {},
		o = null,
		a,
		u = !1,
		s = {};
	return (
		n.forEach((d, p) => {
			let v = t[p].route.id;
			if (
				(W(!tr(d), 'Cannot handle redirect results in processLoaderData'),
				Kr(d))
			) {
				let y = Kn(e, v),
					x = d.error;
				r && ((x = Object.values(r)[0]), (r = void 0)),
					(o = o || {}),
					o[y.route.id] == null && (o[y.route.id] = x),
					(i[v] = void 0),
					u || ((u = !0), (a = $f(d.error) ? d.error.status : 500)),
					d.headers && (s[v] = d.headers);
			} else
				mn(d)
					? (l.set(v, d.deferredData), (i[v] = d.deferredData.data))
					: (i[v] = d.data),
					d.statusCode != null &&
						d.statusCode !== 200 &&
						!u &&
						(a = d.statusCode),
					d.headers && (s[v] = d.headers);
		}),
		r && ((o = r), (i[Object.keys(r)[0]] = void 0)),
		{ loaderData: i, errors: o, statusCode: a || 200, loaderHeaders: s }
	);
}
function cc(e, t, n, r, l, i, o, a) {
	let { loaderData: u, errors: s } = Mv(t, n, r, l, a);
	for (let d = 0; d < i.length; d++) {
		let { key: p, match: v, controller: y } = i[d];
		W(
			o !== void 0 && o[d] !== void 0,
			'Did not find corresponding fetcher result'
		);
		let x = o[d];
		if (!(y && y.signal.aborted))
			if (Kr(x)) {
				let w = Kn(e.matches, v == null ? void 0 : v.route.id);
				(s && s[w.route.id]) || (s = le({}, s, { [w.route.id]: x.error })),
					e.fetchers.delete(p);
			} else if (tr(x)) W(!1, 'Unhandled fetcher revalidation redirect');
			else if (mn(x)) W(!1, 'Unhandled fetcher deferred data');
			else {
				let w = li(x.data);
				e.fetchers.set(p, w);
			}
	}
	return { loaderData: u, errors: s };
}
function dc(e, t, n, r) {
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
function Kn(e, t) {
	return (
		(t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
			.reverse()
			.find((r) => r.route.hasErrorBoundary === !0) || e[0]
	);
}
function fc(e) {
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
		new Mu(e || 500, o, new Error(a), !0)
	);
}
function pc(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (tr(n)) return n;
	}
}
function Yf(e) {
	let t = typeof e == 'string' ? It(e) : e;
	return Cn(le({}, t, { hash: '' }));
}
function Ov(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search
		? !1
		: e.hash === ''
		? t.hash !== ''
		: e.hash === t.hash
		? !0
		: t.hash !== '';
}
function mn(e) {
	return e.type === me.deferred;
}
function Kr(e) {
	return e.type === me.error;
}
function tr(e) {
	return (e && e.type) === me.redirect;
}
function Av(e) {
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
function Dv(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.headers == 'object' &&
		typeof e.body < 'u'
	);
}
function Iv(e) {
	return kv.has(e.toLowerCase());
}
function ut(e) {
	return Sv.has(e.toLowerCase());
}
async function hc(e, t, n, r, l, i) {
	for (let o = 0; o < n.length; o++) {
		let a = n[o],
			u = t[o];
		if (!u) continue;
		let s = e.find((p) => p.route.id === u.route.id),
			d = s != null && !Qf(s, u) && (i && i[u.route.id]) !== void 0;
		if (mn(a) && (l || d)) {
			let p = r[o];
			W(p, 'Expected an AbortSignal for revalidating fetcher deferred result'),
				await qf(a, p, l).then((v) => {
					v && (n[o] = v || n[o]);
				});
		}
	}
}
async function qf(e, t, n) {
	if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
		if (n)
			try {
				return { type: me.data, data: e.deferredData.unwrappedData };
			} catch (l) {
				return { type: me.error, error: l };
			}
		return { type: me.data, data: e.deferredData.data };
	}
}
function Ou(e) {
	return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function zv(e, t) {
	let { route: n, pathname: r, params: l } = e;
	return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Ma(e, t) {
	let n = typeof t == 'string' ? It(t).search : t.search;
	if (e[e.length - 1].route.index && Ou(n || '')) return e[e.length - 1];
	let r = Ki(e);
	return r[r.length - 1];
}
function mc(e) {
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
function Ql(e, t) {
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
function Fv(e, t) {
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
function Mr(e, t) {
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
function Uv(e, t) {
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
function li(e) {
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
 */ function Ri() {
	return (
		(Ri = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Ri.apply(this, arguments)
	);
}
const Gi = k.createContext(null),
	Au = k.createContext(null),
	Pn = k.createContext(null),
	Xi = k.createContext(null),
	zt = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	Kf = k.createContext(null);
function Bv(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	El() || W(!1);
	let { basename: r, navigator: l } = k.useContext(Pn),
		{ hash: i, pathname: o, search: a } = Du(e, { relative: n }),
		u = o;
	return (
		r !== '/' && (u = o === '/' ? r : Rt([r, o])),
		l.createHref({ pathname: u, search: a, hash: i })
	);
}
function El() {
	return k.useContext(Xi) != null;
}
function Nn() {
	return El() || W(!1), k.useContext(Xi).location;
}
function Gf(e) {
	k.useContext(Pn).static || k.useLayoutEffect(e);
}
function Xf() {
	let { isDataRoute: e } = k.useContext(zt);
	return e ? t0() : Hv();
}
function Hv() {
	El() || W(!1);
	let e = k.useContext(Gi),
		{ basename: t, navigator: n } = k.useContext(Pn),
		{ matches: r } = k.useContext(zt),
		{ pathname: l } = Nn(),
		i = JSON.stringify(Ki(r).map((u) => u.pathnameBase)),
		o = k.useRef(!1);
	return (
		Gf(() => {
			o.current = !0;
		}),
		k.useCallback(
			function (u, s) {
				if ((s === void 0 && (s = {}), !o.current)) return;
				if (typeof u == 'number') {
					n.go(u);
					return;
				}
				let d = Lu(u, JSON.parse(i), l, s.relative === 'path');
				e == null &&
					t !== '/' &&
					(d.pathname = d.pathname === '/' ? t : Rt([t, d.pathname])),
					(s.replace ? n.replace : n.push)(d, s.state, s);
			},
			[t, n, i, l, e]
		)
	);
}
const $v = k.createContext(null);
function Wv(e) {
	let t = k.useContext(zt).outlet;
	return t && k.createElement($v.Provider, { value: e }, t);
}
function Vv() {
	let { matches: e } = k.useContext(zt),
		t = e[e.length - 1];
	return t ? t.params : {};
}
function Du(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ matches: r } = k.useContext(zt),
		{ pathname: l } = Nn(),
		i = JSON.stringify(Ki(r).map((o) => o.pathnameBase));
	return k.useMemo(() => Lu(e, JSON.parse(i), l, n === 'path'), [e, i, l, n]);
}
function Qv(e, t, n) {
	El() || W(!1);
	let { navigator: r } = k.useContext(Pn),
		{ matches: l } = k.useContext(zt),
		i = l[l.length - 1],
		o = i ? i.params : {};
	i && i.pathname;
	let a = i ? i.pathnameBase : '/';
	i && i.route;
	let u = Nn(),
		s;
	if (t) {
		var d;
		let w = typeof t == 'string' ? It(t) : t;
		a === '/' || ((d = w.pathname) != null && d.startsWith(a)) || W(!1),
			(s = w);
	} else s = u;
	let p = s.pathname || '/',
		v = a === '/' ? p : p.slice(a.length) || '/',
		y = qn(e, { pathname: v }),
		x = Xv(
			y &&
				y.map((w) =>
					Object.assign({}, w, {
						params: Object.assign({}, o, w.params),
						pathname: Rt([
							a,
							r.encodeLocation
								? r.encodeLocation(w.pathname).pathname
								: w.pathname,
						]),
						pathnameBase:
							w.pathnameBase === '/'
								? a
								: Rt([
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
		? k.createElement(
				Xi.Provider,
				{
					value: {
						location: Ri(
							{
								pathname: '/',
								search: '',
								hash: '',
								state: null,
								key: 'default',
							},
							s
						),
						navigationType: pe.Pop,
					},
				},
				x
		  )
		: x;
}
function Yv() {
	let e = e0(),
		t = $f(e)
			? e.status + ' ' + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
		i = null;
	return k.createElement(
		k.Fragment,
		null,
		k.createElement('h2', null, 'Unexpected Application Error!'),
		k.createElement('h3', { style: { fontStyle: 'italic' } }, t),
		n ? k.createElement('pre', { style: l }, n) : null,
		i
	);
}
const qv = k.createElement(Yv, null);
class Kv extends k.Component {
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
			? k.createElement(
					zt.Provider,
					{ value: this.props.routeContext },
					k.createElement(Kf.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function Gv(e) {
	let { routeContext: t, match: n, children: r } = e,
		l = k.useContext(Gi);
	return (
		l &&
			l.static &&
			l.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(l.staticContext._deepestRenderedBoundaryId = n.route.id),
		k.createElement(zt.Provider, { value: t }, r)
	);
}
function Xv(e, t, n) {
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
			(u) => u.route.id && (o == null ? void 0 : o[u.route.id])
		);
		a >= 0 || W(!1), (i = i.slice(0, Math.min(i.length, a + 1)));
	}
	return i.reduceRight((a, u, s) => {
		let d = u.route.id ? (o == null ? void 0 : o[u.route.id]) : null,
			p = null;
		n && (p = u.route.errorElement || qv);
		let v = t.concat(i.slice(0, s + 1)),
			y = () => {
				let x;
				return (
					d
						? (x = p)
						: u.route.Component
						? (x = k.createElement(u.route.Component, null))
						: u.route.element
						? (x = u.route.element)
						: (x = a),
					k.createElement(Gv, {
						match: u,
						routeContext: { outlet: a, matches: v, isDataRoute: n != null },
						children: x,
					})
				);
			};
		return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0)
			? k.createElement(Kv, {
					location: n.location,
					revalidation: n.revalidation,
					component: p,
					error: d,
					children: y(),
					routeContext: { outlet: null, matches: v, isDataRoute: !0 },
			  })
			: y();
	}, null);
}
var Oa;
(function (e) {
	(e.UseBlocker = 'useBlocker'),
		(e.UseRevalidator = 'useRevalidator'),
		(e.UseNavigateStable = 'useNavigate');
})(Oa || (Oa = {}));
var pl;
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
})(pl || (pl = {}));
function Jv(e) {
	let t = k.useContext(Gi);
	return t || W(!1), t;
}
function Zv(e) {
	let t = k.useContext(Au);
	return t || W(!1), t;
}
function bv(e) {
	let t = k.useContext(zt);
	return t || W(!1), t;
}
function Jf(e) {
	let t = bv(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || W(!1), n.route.id;
}
function e0() {
	var e;
	let t = k.useContext(Kf),
		n = Zv(pl.UseRouteError),
		r = Jf(pl.UseRouteError);
	return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function t0() {
	let { router: e } = Jv(Oa.UseNavigateStable),
		t = Jf(pl.UseNavigateStable),
		n = k.useRef(!1);
	return (
		Gf(() => {
			n.current = !0;
		}),
		k.useCallback(
			function (l, i) {
				i === void 0 && (i = {}),
					n.current &&
						(typeof l == 'number'
							? e.navigate(l)
							: e.navigate(l, Ri({ fromRouteId: t }, i)));
			},
			[e, t]
		)
	);
}
const n0 = 'startTransition',
	vc = Bp[n0];
function r0(e) {
	let { fallbackElement: t, router: n, future: r } = e,
		[l, i] = k.useState(n.state),
		{ v7_startTransition: o } = r || {},
		a = k.useCallback(
			(p) => {
				o && vc ? vc(() => i(p)) : i(p);
			},
			[i, o]
		);
	k.useLayoutEffect(() => n.subscribe(a), [n, a]);
	let u = k.useMemo(
			() => ({
				createHref: n.createHref,
				encodeLocation: n.encodeLocation,
				go: (p) => n.navigate(p),
				push: (p, v, y) =>
					n.navigate(p, {
						state: v,
						preventScrollReset: y == null ? void 0 : y.preventScrollReset,
					}),
				replace: (p, v, y) =>
					n.navigate(p, {
						replace: !0,
						state: v,
						preventScrollReset: y == null ? void 0 : y.preventScrollReset,
					}),
			}),
			[n]
		),
		s = n.basename || '/',
		d = k.useMemo(
			() => ({ router: n, navigator: u, static: !1, basename: s }),
			[n, u, s]
		);
	return k.createElement(
		k.Fragment,
		null,
		k.createElement(
			Gi.Provider,
			{ value: d },
			k.createElement(
				Au.Provider,
				{ value: l },
				k.createElement(
					i0,
					{
						basename: s,
						location: l.location,
						navigationType: l.historyAction,
						navigator: u,
					},
					l.initialized
						? k.createElement(l0, { routes: n.routes, state: l })
						: t
				)
			)
		),
		null
	);
}
function l0(e) {
	let { routes: t, state: n } = e;
	return Qv(t, void 0, n);
}
function Zf(e) {
	return Wv(e.context);
}
function i0(e) {
	let {
		basename: t = '/',
		children: n = null,
		location: r,
		navigationType: l = pe.Pop,
		navigator: i,
		static: o = !1,
	} = e;
	El() && W(!1);
	let a = t.replace(/^\/*/, '/'),
		u = k.useMemo(() => ({ basename: a, navigator: i, static: o }), [a, i, o]);
	typeof r == 'string' && (r = It(r));
	let {
			pathname: s = '/',
			search: d = '',
			hash: p = '',
			state: v = null,
			key: y = 'default',
		} = r,
		x = k.useMemo(() => {
			let w = gr(s, a);
			return w == null
				? null
				: {
						location: { pathname: w, search: d, hash: p, state: v, key: y },
						navigationType: l,
				  };
		}, [a, s, d, p, v, y, l]);
	return x == null
		? null
		: k.createElement(
				Pn.Provider,
				{ value: u },
				k.createElement(Xi.Provider, { children: n, value: x })
		  );
}
var gc;
(function (e) {
	(e[(e.pending = 0)] = 'pending'),
		(e[(e.success = 1)] = 'success'),
		(e[(e.error = 2)] = 'error');
})(gc || (gc = {}));
new Promise(() => {});
function o0(e) {
	let t = {
		hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
	};
	return (
		e.Component &&
			Object.assign(t, {
				element: k.createElement(e.Component),
				Component: void 0,
			}),
		e.ErrorBoundary &&
			Object.assign(t, {
				errorElement: k.createElement(e.ErrorBoundary),
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
 */ function pr() {
	return (
		(pr = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		pr.apply(this, arguments)
	);
}
function bf(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		l,
		i;
	for (i = 0; i < r.length; i++)
		(l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
	return n;
}
function a0(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function u0(e, t) {
	return e.button === 0 && (!t || t === '_self') && !a0(e);
}
const s0 = [
		'onClick',
		'relative',
		'reloadDocument',
		'replace',
		'state',
		'target',
		'to',
		'preventScrollReset',
	],
	c0 = [
		'aria-current',
		'caseSensitive',
		'className',
		'end',
		'style',
		'to',
		'children',
	];
function d0(e, t) {
	return Nv({
		basename: t == null ? void 0 : t.basename,
		future: pr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
		history: Jm({ window: t == null ? void 0 : t.window }),
		hydrationData: (t == null ? void 0 : t.hydrationData) || f0(),
		routes: e,
		mapRouteProperties: o0,
	}).initialize();
}
function f0() {
	var e;
	let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
	return t && t.errors && (t = pr({}, t, { errors: p0(t.errors) })), t;
}
function p0(e) {
	if (!e) return null;
	let t = Object.entries(e),
		n = {};
	for (let [r, l] of t)
		if (l && l.__type === 'RouteErrorResponse')
			n[r] = new Mu(l.status, l.statusText, l.data, l.internal === !0);
		else if (l && l.__type === 'Error') {
			let i = new Error(l.message);
			(i.stack = ''), (n[r] = i);
		} else n[r] = l;
	return n;
}
const h0 =
		typeof window < 'u' &&
		typeof window.document < 'u' &&
		typeof window.document.createElement < 'u',
	m0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	v0 = k.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: l,
				reloadDocument: i,
				replace: o,
				state: a,
				target: u,
				to: s,
				preventScrollReset: d,
			} = t,
			p = bf(t, s0),
			{ basename: v } = k.useContext(Pn),
			y,
			x = !1;
		if (typeof s == 'string' && m0.test(s) && ((y = s), h0))
			try {
				let f = new URL(window.location.href),
					g = s.startsWith('//') ? new URL(f.protocol + s) : new URL(s),
					h = gr(g.pathname, v);
				g.origin === f.origin && h != null
					? (s = h + g.search + g.hash)
					: (x = !0);
			} catch {}
		let w = Bv(s, { relative: l }),
			P = g0(s, {
				replace: o,
				state: a,
				target: u,
				preventScrollReset: d,
				relative: l,
			});
		function m(f) {
			r && r(f), f.defaultPrevented || P(f);
		}
		return k.createElement(
			'a',
			pr({}, p, { href: y || w, onClick: x || i ? r : m, ref: n, target: u })
		);
	}),
	xe = k.forwardRef(function (t, n) {
		let {
				'aria-current': r = 'page',
				caseSensitive: l = !1,
				className: i = '',
				end: o = !1,
				style: a,
				to: u,
				children: s,
			} = t,
			d = bf(t, c0),
			p = Du(u, { relative: d.relative }),
			v = Nn(),
			y = k.useContext(Au),
			{ navigator: x } = k.useContext(Pn),
			w = x.encodeLocation ? x.encodeLocation(p).pathname : p.pathname,
			P = v.pathname,
			m =
				y && y.navigation && y.navigation.location
					? y.navigation.location.pathname
					: null;
		l ||
			((P = P.toLowerCase()),
			(m = m ? m.toLowerCase() : null),
			(w = w.toLowerCase()));
		let f = P === w || (!o && P.startsWith(w) && P.charAt(w.length) === '/'),
			g =
				m != null &&
				(m === w || (!o && m.startsWith(w) && m.charAt(w.length) === '/')),
			h = f ? r : void 0,
			T;
		typeof i == 'function'
			? (T = i({ isActive: f, isPending: g }))
			: (T = [i, f ? 'active' : null, g ? 'pending' : null]
					.filter(Boolean)
					.join(' '));
		let _ = typeof a == 'function' ? a({ isActive: f, isPending: g }) : a;
		return k.createElement(
			v0,
			pr({}, d, { 'aria-current': h, className: T, ref: n, style: _, to: u }),
			typeof s == 'function' ? s({ isActive: f, isPending: g }) : s
		);
	});
var yc;
(function (e) {
	(e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmit = 'useSubmit'),
		(e.UseSubmitFetcher = 'useSubmitFetcher'),
		(e.UseFetcher = 'useFetcher');
})(yc || (yc = {}));
var wc;
(function (e) {
	(e.UseFetchers = 'useFetchers'),
		(e.UseScrollRestoration = 'useScrollRestoration');
})(wc || (wc = {}));
function g0(e, t) {
	let {
			target: n,
			replace: r,
			state: l,
			preventScrollReset: i,
			relative: o,
		} = t === void 0 ? {} : t,
		a = Xf(),
		u = Nn(),
		s = Du(e, { relative: o });
	return k.useCallback(
		(d) => {
			if (u0(d, n)) {
				d.preventDefault();
				let p = r !== void 0 ? r : Cn(u) === Cn(s);
				a(e, { replace: p, state: l, preventScrollReset: i, relative: o });
			}
		},
		[u, a, s, r, l, n, e, i, o]
	);
}
const nr = () => {
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
	y0 = () => (
		k.useEffect(() => {
			let e = document.querySelectorAll('#nav-list a');
			return (
				e.forEach((t) => {
					t.addEventListener('click', nr);
				}),
				() => {
					e.forEach((t) => {
						t.removeEventListener('click', nr);
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
							onClick: nr,
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
										children: c.jsxs(xe, {
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
										children: c.jsxs(xe, {
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
										children: c.jsxs(xe, {
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
										children: c.jsxs(xe, {
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
var ep = { exports: {} },
	w0 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
	x0 = w0,
	S0 = x0;
function tp() {}
function np() {}
np.resetWarningCache = tp;
var E0 = function () {
	function e(r, l, i, o, a, u) {
		if (u !== S0) {
			var s = new Error(
				'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
			);
			throw ((s.name = 'Invariant Violation'), s);
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
		checkPropTypes: np,
		resetWarningCache: tp,
	};
	return (n.PropTypes = n), n;
};
ep.exports = E0();
var k0 = ep.exports;
const ne = vl(k0);
function C0(e) {
	return e && typeof e == 'object' && 'default' in e ? e.default : e;
}
var rp = k,
	T0 = C0(rp);
function xc(e, t, n) {
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
function j0(e, t) {
	(e.prototype = Object.create(t.prototype)),
		(e.prototype.constructor = e),
		(e.__proto__ = t);
}
var P0 = !!(
	typeof window < 'u' &&
	window.document &&
	window.document.createElement
);
function N0(e, t, n) {
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
		function u() {
			(a = e(
				o.map(function (d) {
					return d.props;
				})
			)),
				s.canUseDOM ? t(a) : n && (a = n(a));
		}
		var s = (function (d) {
			j0(p, d);
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
			var v = p.prototype;
			return (
				(v.UNSAFE_componentWillMount = function () {
					o.push(this), u();
				}),
				(v.componentDidUpdate = function () {
					u();
				}),
				(v.componentWillUnmount = function () {
					var x = o.indexOf(this);
					o.splice(x, 1), u();
				}),
				(v.render = function () {
					return T0.createElement(i, this.props);
				}),
				p
			);
		})(rp.PureComponent);
		return (
			xc(s, 'displayName', 'SideEffect(' + r(i) + ')'),
			xc(s, 'canUseDOM', P0),
			s
		);
	};
}
var _0 = N0;
const R0 = vl(_0);
var L0 = typeof Element < 'u',
	M0 = typeof Map == 'function',
	O0 = typeof Set == 'function',
	A0 = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
function ii(e, t) {
	if (e === t) return !0;
	if (e && t && typeof e == 'object' && typeof t == 'object') {
		if (e.constructor !== t.constructor) return !1;
		var n, r, l;
		if (Array.isArray(e)) {
			if (((n = e.length), n != t.length)) return !1;
			for (r = n; r-- !== 0; ) if (!ii(e[r], t[r])) return !1;
			return !0;
		}
		var i;
		if (M0 && e instanceof Map && t instanceof Map) {
			if (e.size !== t.size) return !1;
			for (i = e.entries(); !(r = i.next()).done; )
				if (!t.has(r.value[0])) return !1;
			for (i = e.entries(); !(r = i.next()).done; )
				if (!ii(r.value[1], t.get(r.value[0]))) return !1;
			return !0;
		}
		if (O0 && e instanceof Set && t instanceof Set) {
			if (e.size !== t.size) return !1;
			for (i = e.entries(); !(r = i.next()).done; )
				if (!t.has(r.value[0])) return !1;
			return !0;
		}
		if (A0 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
		if (L0 && e instanceof Element) return !1;
		for (r = n; r-- !== 0; )
			if (
				!(
					(l[r] === '_owner' || l[r] === '__v' || l[r] === '__o') &&
					e.$$typeof
				) &&
				!ii(e[l[r]], t[l[r]])
			)
				return !1;
		return !0;
	}
	return e !== e && t !== t;
}
var D0 = function (t, n) {
	try {
		return ii(t, n);
	} catch (r) {
		if ((r.message || '').match(/stack|recursion/i))
			return console.warn('react-fast-compare cannot handle circular refs'), !1;
		throw r;
	}
};
const I0 = vl(D0);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var Sc = Object.getOwnPropertySymbols,
	z0 = Object.prototype.hasOwnProperty,
	F0 = Object.prototype.propertyIsEnumerable;
function U0(e) {
	if (e == null)
		throw new TypeError(
			'Object.assign cannot be called with null or undefined'
		);
	return Object(e);
}
function B0() {
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
var H0 = B0()
	? Object.assign
	: function (e, t) {
			for (var n, r = U0(e), l, i = 1; i < arguments.length; i++) {
				n = Object(arguments[i]);
				for (var o in n) z0.call(n, o) && (r[o] = n[o]);
				if (Sc) {
					l = Sc(n);
					for (var a = 0; a < l.length; a++)
						F0.call(n, l[a]) && (r[l[a]] = n[l[a]]);
				}
			}
			return r;
	  };
const $0 = vl(H0);
var yn = {
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
	Li = {
		accesskey: 'accessKey',
		charset: 'charSet',
		class: 'className',
		contenteditable: 'contentEditable',
		contextmenu: 'contextMenu',
		'http-equiv': 'httpEquiv',
		itemprop: 'itemProp',
		tabindex: 'tabIndex',
	},
	hl = {
		DEFAULT_TITLE: 'defaultTitle',
		DEFER: 'defer',
		ENCODE_SPECIAL_CHARACTERS: 'encodeSpecialCharacters',
		ON_CHANGE_CLIENT_STATE: 'onChangeClientState',
		TITLE_TEMPLATE: 'titleTemplate',
	},
	W0 = Object.keys(Li).reduce(function (e, t) {
		return (e[Li[t]] = t), e;
	}, {}),
	V0 = [H.NOSCRIPT, H.SCRIPT, H.STYLE],
	ct = 'data-react-helmet',
	Q0 =
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
	Y0 = function (e, t) {
		if (!(e instanceof t))
			throw new TypeError('Cannot call a class as a function');
	},
	q0 = (function () {
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
	K0 = function (e, t) {
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
	Ec = function (e, t) {
		var n = {};
		for (var r in e)
			t.indexOf(r) >= 0 ||
				(Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
		return n;
	},
	G0 = function (e, t) {
		if (!e)
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		return t && (typeof t == 'object' || typeof t == 'function') ? t : e;
	},
	Aa = function (t) {
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
	X0 = function (t) {
		var n = rr(t, H.TITLE),
			r = rr(t, hl.TITLE_TEMPLATE);
		if (r && n)
			return r.replace(/%s/g, function () {
				return Array.isArray(n) ? n.join('') : n;
			});
		var l = rr(t, hl.DEFAULT_TITLE);
		return n || l || void 0;
	},
	J0 = function (t) {
		return rr(t, hl.ON_CHANGE_CLIENT_STATE) || function () {};
	},
	Do = function (t, n) {
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
	Z0 = function (t, n) {
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
							u = a.toLowerCase();
						if (t.indexOf(u) !== -1 && l[u]) return r.concat(l);
					}
				return r;
			}, []);
	},
	Or = function (t, n, r) {
		var l = {};
		return r
			.filter(function (i) {
				return Array.isArray(i[t])
					? !0
					: (typeof i[t] < 'u' &&
							ng(
								'Helmet: ' +
									t +
									' should be of type "Array". Instead found type "' +
									Q0(i[t]) +
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
				o.filter(function (v) {
					for (var y = void 0, x = Object.keys(v), w = 0; w < x.length; w++) {
						var P = x[w],
							m = P.toLowerCase();
						n.indexOf(m) !== -1 &&
							!(y === re.REL && v[y].toLowerCase() === 'canonical') &&
							!(m === re.REL && v[m].toLowerCase() === 'stylesheet') &&
							(y = m),
							n.indexOf(P) !== -1 &&
								(P === re.INNER_HTML ||
									P === re.CSS_TEXT ||
									P === re.ITEM_PROP) &&
								(y = P);
					}
					if (!y || !v[y]) return !1;
					var f = v[y].toLowerCase();
					return (
						l[y] || (l[y] = {}),
						a[y] || (a[y] = {}),
						l[y][f] ? !1 : ((a[y][f] = !0), !0)
					);
				})
					.reverse()
					.forEach(function (v) {
						return i.push(v);
					});
				for (var u = Object.keys(a), s = 0; s < u.length; s++) {
					var d = u[s],
						p = $0({}, l[d], a[d]);
					l[d] = p;
				}
				return i;
			}, [])
			.reverse();
	},
	rr = function (t, n) {
		for (var r = t.length - 1; r >= 0; r--) {
			var l = t[r];
			if (l.hasOwnProperty(n)) return l[n];
		}
		return null;
	},
	b0 = function (t) {
		return {
			baseTag: Z0([re.HREF, re.TARGET], t),
			bodyAttributes: Do(yn.BODY, t),
			defer: rr(t, hl.DEFER),
			encode: rr(t, hl.ENCODE_SPECIAL_CHARACTERS),
			htmlAttributes: Do(yn.HTML, t),
			linkTags: Or(H.LINK, [re.REL, re.HREF], t),
			metaTags: Or(
				H.META,
				[re.NAME, re.CHARSET, re.HTTPEQUIV, re.PROPERTY, re.ITEM_PROP],
				t
			),
			noscriptTags: Or(H.NOSCRIPT, [re.INNER_HTML], t),
			onChangeClientState: J0(t),
			scriptTags: Or(H.SCRIPT, [re.SRC, re.INNER_HTML], t),
			styleTags: Or(H.STYLE, [re.CSS_TEXT], t),
			title: X0(t),
			titleAttributes: Do(yn.TITLE, t),
		};
	},
	Da = (function () {
		var e = Date.now();
		return function (t) {
			var n = Date.now();
			n - e > 16
				? ((e = n), t(n))
				: setTimeout(function () {
						Da(t);
				  }, 0);
		};
	})(),
	kc = function (t) {
		return clearTimeout(t);
	},
	eg =
		typeof window < 'u'
			? (window.requestAnimationFrame &&
					window.requestAnimationFrame.bind(window)) ||
			  window.webkitRequestAnimationFrame ||
			  window.mozRequestAnimationFrame ||
			  Da
			: global.requestAnimationFrame || Da,
	tg =
		typeof window < 'u'
			? window.cancelAnimationFrame ||
			  window.webkitCancelAnimationFrame ||
			  window.mozCancelAnimationFrame ||
			  kc
			: global.cancelAnimationFrame || kc,
	ng = function (t) {
		return console && typeof console.warn == 'function' && console.warn(t);
	},
	Ar = null,
	rg = function (t) {
		Ar && tg(Ar),
			t.defer
				? (Ar = eg(function () {
						Cc(t, function () {
							Ar = null;
						});
				  }))
				: (Cc(t), (Ar = null));
	},
	Cc = function (t, n) {
		var r = t.baseTag,
			l = t.bodyAttributes,
			i = t.htmlAttributes,
			o = t.linkTags,
			a = t.metaTags,
			u = t.noscriptTags,
			s = t.onChangeClientState,
			d = t.scriptTags,
			p = t.styleTags,
			v = t.title,
			y = t.titleAttributes;
		Ia(H.BODY, l), Ia(H.HTML, i), lg(v, y);
		var x = {
				baseTag: An(H.BASE, r),
				linkTags: An(H.LINK, o),
				metaTags: An(H.META, a),
				noscriptTags: An(H.NOSCRIPT, u),
				scriptTags: An(H.SCRIPT, d),
				styleTags: An(H.STYLE, p),
			},
			w = {},
			P = {};
		Object.keys(x).forEach(function (m) {
			var f = x[m],
				g = f.newTags,
				h = f.oldTags;
			g.length && (w[m] = g), h.length && (P[m] = x[m].oldTags);
		}),
			n && n(),
			s(t, w, P);
	},
	lp = function (t) {
		return Array.isArray(t) ? t.join('') : t;
	},
	lg = function (t, n) {
		typeof t < 'u' && document.title !== t && (document.title = lp(t)),
			Ia(H.TITLE, n);
	},
	Ia = function (t, n) {
		var r = document.getElementsByTagName(t)[0];
		if (r) {
			for (
				var l = r.getAttribute(ct),
					i = l ? l.split(',') : [],
					o = [].concat(i),
					a = Object.keys(n),
					u = 0;
				u < a.length;
				u++
			) {
				var s = a[u],
					d = n[s] || '';
				r.getAttribute(s) !== d && r.setAttribute(s, d),
					i.indexOf(s) === -1 && i.push(s);
				var p = o.indexOf(s);
				p !== -1 && o.splice(p, 1);
			}
			for (var v = o.length - 1; v >= 0; v--) r.removeAttribute(o[v]);
			i.length === o.length
				? r.removeAttribute(ct)
				: r.getAttribute(ct) !== a.join(',') && r.setAttribute(ct, a.join(','));
		}
	},
	An = function (t, n) {
		var r = document.head || document.querySelector(H.HEAD),
			l = r.querySelectorAll(t + '[' + ct + ']'),
			i = Array.prototype.slice.call(l),
			o = [],
			a = void 0;
		return (
			n &&
				n.length &&
				n.forEach(function (u) {
					var s = document.createElement(t);
					for (var d in u)
						if (u.hasOwnProperty(d))
							if (d === re.INNER_HTML) s.innerHTML = u.innerHTML;
							else if (d === re.CSS_TEXT)
								s.styleSheet
									? (s.styleSheet.cssText = u.cssText)
									: s.appendChild(document.createTextNode(u.cssText));
							else {
								var p = typeof u[d] > 'u' ? '' : u[d];
								s.setAttribute(d, p);
							}
					s.setAttribute(ct, 'true'),
						i.some(function (v, y) {
							return (a = y), s.isEqualNode(v);
						})
							? i.splice(a, 1)
							: o.push(s);
				}),
			i.forEach(function (u) {
				return u.parentNode.removeChild(u);
			}),
			o.forEach(function (u) {
				return r.appendChild(u);
			}),
			{ oldTags: i, newTags: o }
		);
	},
	ip = function (t) {
		return Object.keys(t).reduce(function (n, r) {
			var l = typeof t[r] < 'u' ? r + '="' + t[r] + '"' : '' + r;
			return n ? n + ' ' + l : l;
		}, '');
	},
	ig = function (t, n, r, l) {
		var i = ip(r),
			o = lp(n);
		return i
			? '<' + t + ' ' + ct + '="true" ' + i + '>' + Aa(o, l) + '</' + t + '>'
			: '<' + t + ' ' + ct + '="true">' + Aa(o, l) + '</' + t + '>';
	},
	og = function (t, n, r) {
		return n.reduce(function (l, i) {
			var o = Object.keys(i)
					.filter(function (s) {
						return !(s === re.INNER_HTML || s === re.CSS_TEXT);
					})
					.reduce(function (s, d) {
						var p = typeof i[d] > 'u' ? d : d + '="' + Aa(i[d], r) + '"';
						return s ? s + ' ' + p : p;
					}, ''),
				a = i.innerHTML || i.cssText || '',
				u = V0.indexOf(t) === -1;
			return (
				l +
				'<' +
				t +
				' ' +
				ct +
				'="true" ' +
				o +
				(u ? '/>' : '>' + a + '</' + t + '>')
			);
		}, '');
	},
	op = function (t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		return Object.keys(t).reduce(function (r, l) {
			return (r[Li[l] || l] = t[l]), r;
		}, n);
	},
	ag = function (t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		return Object.keys(t).reduce(function (r, l) {
			return (r[W0[l] || l] = t[l]), r;
		}, n);
	},
	ug = function (t, n, r) {
		var l,
			i = ((l = { key: n }), (l[ct] = !0), l),
			o = op(r, i);
		return [Ue.createElement(H.TITLE, o, n)];
	},
	sg = function (t, n) {
		return n.map(function (r, l) {
			var i,
				o = ((i = { key: l }), (i[ct] = !0), i);
			return (
				Object.keys(r).forEach(function (a) {
					var u = Li[a] || a;
					if (u === re.INNER_HTML || u === re.CSS_TEXT) {
						var s = r.innerHTML || r.cssText;
						o.dangerouslySetInnerHTML = { __html: s };
					} else o[u] = r[a];
				}),
				Ue.createElement(t, o)
			);
		});
	},
	Ct = function (t, n, r) {
		switch (t) {
			case H.TITLE:
				return {
					toComponent: function () {
						return ug(t, n.title, n.titleAttributes);
					},
					toString: function () {
						return ig(t, n.title, n.titleAttributes, r);
					},
				};
			case yn.BODY:
			case yn.HTML:
				return {
					toComponent: function () {
						return op(n);
					},
					toString: function () {
						return ip(n);
					},
				};
			default:
				return {
					toComponent: function () {
						return sg(t, n);
					},
					toString: function () {
						return og(t, n, r);
					},
				};
		}
	},
	ap = function (t) {
		var n = t.baseTag,
			r = t.bodyAttributes,
			l = t.encode,
			i = t.htmlAttributes,
			o = t.linkTags,
			a = t.metaTags,
			u = t.noscriptTags,
			s = t.scriptTags,
			d = t.styleTags,
			p = t.title,
			v = p === void 0 ? '' : p,
			y = t.titleAttributes;
		return {
			base: Ct(H.BASE, n, l),
			bodyAttributes: Ct(yn.BODY, r, l),
			htmlAttributes: Ct(yn.HTML, i, l),
			link: Ct(H.LINK, o, l),
			meta: Ct(H.META, a, l),
			noscript: Ct(H.NOSCRIPT, u, l),
			script: Ct(H.SCRIPT, s, l),
			style: Ct(H.STYLE, d, l),
			title: Ct(H.TITLE, { title: v, titleAttributes: y }, l),
		};
	},
	cg = function (t) {
		var n, r;
		return (
			(r = n =
				(function (l) {
					K0(i, l);
					function i() {
						return Y0(this, i), G0(this, l.apply(this, arguments));
					}
					return (
						(i.prototype.shouldComponentUpdate = function (a) {
							return !I0(this.props, a);
						}),
						(i.prototype.mapNestedChildrenToProps = function (a, u) {
							if (!u) return null;
							switch (a.type) {
								case H.SCRIPT:
								case H.NOSCRIPT:
									return { innerHTML: u };
								case H.STYLE:
									return { cssText: u };
							}
							throw new Error(
								'<' +
									a.type +
									' /> elements are self-closing and can not contain children. Refer to our API for more information.'
							);
						}),
						(i.prototype.flattenArrayTypeChildren = function (a) {
							var u,
								s = a.child,
								d = a.arrayTypeChildren,
								p = a.newChildProps,
								v = a.nestedChildren;
							return Ie(
								{},
								d,
								((u = {}),
								(u[s.type] = [].concat(d[s.type] || [], [
									Ie({}, p, this.mapNestedChildrenToProps(s, v)),
								])),
								u)
							);
						}),
						(i.prototype.mapObjectTypeChildren = function (a) {
							var u,
								s,
								d = a.child,
								p = a.newProps,
								v = a.newChildProps,
								y = a.nestedChildren;
							switch (d.type) {
								case H.TITLE:
									return Ie(
										{},
										p,
										((u = {}),
										(u[d.type] = y),
										(u.titleAttributes = Ie({}, v)),
										u)
									);
								case H.BODY:
									return Ie({}, p, { bodyAttributes: Ie({}, v) });
								case H.HTML:
									return Ie({}, p, { htmlAttributes: Ie({}, v) });
							}
							return Ie({}, p, ((s = {}), (s[d.type] = Ie({}, v)), s));
						}),
						(i.prototype.mapArrayTypeChildrenToProps = function (a, u) {
							var s = Ie({}, u);
							return (
								Object.keys(a).forEach(function (d) {
									var p;
									s = Ie({}, s, ((p = {}), (p[d] = a[d]), p));
								}),
								s
							);
						}),
						(i.prototype.warnOnInvalidChildren = function (a, u) {
							return !0;
						}),
						(i.prototype.mapChildrenToProps = function (a, u) {
							var s = this,
								d = {};
							return (
								Ue.Children.forEach(a, function (p) {
									if (!(!p || !p.props)) {
										var v = p.props,
											y = v.children,
											x = Ec(v, ['children']),
											w = ag(x);
										switch ((s.warnOnInvalidChildren(p, y), p.type)) {
											case H.LINK:
											case H.META:
											case H.NOSCRIPT:
											case H.SCRIPT:
											case H.STYLE:
												d = s.flattenArrayTypeChildren({
													child: p,
													arrayTypeChildren: d,
													newChildProps: w,
													nestedChildren: y,
												});
												break;
											default:
												u = s.mapObjectTypeChildren({
													child: p,
													newProps: u,
													newChildProps: w,
													nestedChildren: y,
												});
												break;
										}
									}
								}),
								(u = this.mapArrayTypeChildrenToProps(d, u)),
								u
							);
						}),
						(i.prototype.render = function () {
							var a = this.props,
								u = a.children,
								s = Ec(a, ['children']),
								d = Ie({}, s);
							return (
								u && (d = this.mapChildrenToProps(u, d)), Ue.createElement(t, d)
							);
						}),
						q0(i, null, [
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
						(l = ap({
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
	dg = function () {
		return null;
	},
	fg = R0(b0, rg, ap)(dg),
	ml = cg(fg);
ml.renderStatic = ml.rewind;
const Iu = () => {
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
	up = async (e, t) => {
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
	lr = (e, t, n) => {
		let r = document.querySelector('.message');
		r.classList.remove('hidden'),
			e(!0),
			t(n),
			setTimeout(() => {
				e(!1), t(''), r.classList.add('hidden');
			}, 6e3);
	},
	pg = () => {
		let [e, t] = k.useState(''),
			[n, r] = k.useState(!1);
		return (
			k.useEffect(() => {
				const l = async (o) => {
					o.preventDefault();
					let a = document.querySelector('form button');
					a.setAttribute('disabled', !0);
					try {
						let u, s, d;
						(u = document.querySelector('#name')),
							(s = document.querySelector('#phone')),
							(d = document.querySelector('#message'));
						const p = {
							content: d.value.trim(),
							phoneNumber: s.value.trim(),
							name: u.value.trim(),
							senderID: void 0,
						};
						let v = await up(p, 'https://mbc.onrender.com/api/users/message');
						if (!v.success) return lr(r, t, v.message);
						lr(
							r,
							t,
							'Your message was sent successfully. You will hear from us soon.'
						),
							o.target.reset(),
							a.removeAttribute('disabled');
					} catch {
						lr(r, t, 'Failed to complete request due to an unknown error.'),
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
			k.useEffect(() => {
				let l, i, o, a;
				(l = document.querySelector('.carousel')),
					(i = document.querySelectorAll('.carousel-item')),
					(o = 0),
					(a = i.length);
				let u, s;
				(u = document.querySelector('.next')),
					(s = document.querySelector('.prev'));
				const d = (p) => {
					(o += p),
						o < 0 ? (o = a - 1) : o >= a && (o = 0),
						(l.style.transform = `translateX(-${o * i[0].clientWidth}px)`);
				};
				u.addEventListener('click', () => d(1)),
					s.addEventListener('click', () => d(-1));
			}, []),
			k.useEffect(() => {
				const l = () => {
					document.querySelectorAll('.animated').forEach((o) => {
						let a = window.scrollY,
							u = window.innerHeight,
							s = o.offsetTop;
						s < u || a + u > s
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
					c.jsxs(ml, {
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
						onClick: Iu,
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
									c.jsx(xe, {
										to: '/products',
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
																		href: 'https://wa.me/2348108742236',
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
																		href: 'https://wa.me/2349049861570',
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
	hg = () => (
		k.useEffect(() => {
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
				c.jsxs(ml, {
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
					onClick: Iu,
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
									c.jsx(xe, {
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
	mg = () => {
		let e = Nn();
		k.useEffect(() => {
			window.scrollTo(0, 0);
		}, [e]);
	},
	sp = () =>
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
								children: c.jsx(xe, { to: '/', children: 'Home' }),
							}),
							c.jsx('li', {
								children: c.jsx(xe, { to: '/about', children: 'About' }),
							}),
							c.jsx('li', {
								children: c.jsx(xe, { to: '/contact', children: 'Contact' }),
							}),
							c.jsx('li', {
								children: c.jsx(xe, { to: '/shop', children: 'Shop' }),
							}),
						],
					}),
				}),
			],
		});
var cp = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0,
	},
	Tc = Ue.createContext && Ue.createContext(cp),
	rn =
		(globalThis && globalThis.__assign) ||
		function () {
			return (
				(rn =
					Object.assign ||
					function (e) {
						for (var t, n = 1, r = arguments.length; n < r; n++) {
							t = arguments[n];
							for (var l in t)
								Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
						}
						return e;
					}),
				rn.apply(this, arguments)
			);
		},
	vg =
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
function dp(e) {
	return (
		e &&
		e.map(function (t, n) {
			return Ue.createElement(t.tag, rn({ key: n }, t.attr), dp(t.child));
		})
	);
}
function Ji(e) {
	return function (t) {
		return Ue.createElement(gg, rn({ attr: rn({}, e.attr) }, t), dp(e.child));
	};
}
function gg(e) {
	var t = function (n) {
		var r = e.attr,
			l = e.size,
			i = e.title,
			o = vg(e, ['attr', 'size', 'title']),
			a = l || n.size || '1em',
			u;
		return (
			n.className && (u = n.className),
			e.className && (u = (u ? u + ' ' : '') + e.className),
			Ue.createElement(
				'svg',
				rn(
					{ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
					n.attr,
					r,
					o,
					{
						className: u,
						style: rn(rn({ color: e.color || n.color }, n.style), e.style),
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
		: t(cp);
}
function yg(e) {
	return Ji({
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
function wg(e) {
	return Ji({
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
function xg(e) {
	return Ji({
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
function Sg(e) {
	return Ji({
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
const Eg = () => {
		let [e, t] = k.useState(''),
			[n, r] = k.useState(!1);
		return (
			k.useEffect(() => {
				const l = () => {
					document.querySelectorAll('.animated').forEach((o) => {
						let a = window.scrollY,
							u = window.innerHeight,
							s = o.offsetTop;
						s < u || a + u > s
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
			k.useEffect(() => {
				const l = async (o) => {
					o.preventDefault();
					try {
						let a, u, s;
						(a = document.querySelector('#name')),
							(u = document.querySelector('#phone')),
							(s = document.querySelector('#message'));
						const d = {
							content: s.value.trim(),
							phoneNumber: u.value.trim(),
							name: a.value.trim(),
							senderID: void 0,
						};
						let p = await up(d, 'https://mbc.onrender.com/api/users/message');
						if (!p.success) return lr(r, t, p.message);
						lr(
							r,
							t,
							'Your message was sent successfully. You will hear from us soon.'
						),
							o.target.reset();
					} catch {
						lr(r, t, 'Failed to complete request due to an unknown error.');
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
					c.jsx(ml, {
						children: c.jsx('title', {
							children: 'Contact MBC | Mma Beauty Care',
						}),
					}),
					c.jsx('p', { className: 'message hidden', children: e }),
					c.jsxs('main', {
						onClick: Iu,
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
												href: 'https://wa.me/2348101321849',
												target: '_blank',
												className: 'animated slide-in',
												children: [c.jsx(xg, {}), ' WhatsApp'],
											}),
											c.jsxs('a', {
												href: 'https://tiktok.com/@mmabeautycare?_t=8e3jRQumDBd&_r=1',
												target: '_blank',
												className: 'animated slide-in',
												children: [c.jsx(Sg, {}), ' TikTok'],
											}),
											c.jsxs('a', {
												href: 'https://instagram.com/invites/contact/?i=1hmx8xbaijlhpw&utm_content=qv0519s',
												target: '_blank',
												className: 'animated slide-in',
												children: [c.jsx(wg, {}), ' Instagram'],
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
	kg = () => {
		let e = Xf();
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
				c.jsx(xe, {
					onClick: () => e(-1),
					className: 'btn',
					children: 'Go back',
				}),
			],
		});
	},
	fp = () => {
		let e = Nn();
		k.useEffect(() => {
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
	Cg = () => {
		let { cart: e } = k.useContext(Zi);
		return (
			k.useEffect(() => {
				let t = document.querySelectorAll('#nav-list a');
				return (
					t.forEach((n) => {
						n.addEventListener('click', nr);
					}),
					() => {
						t.forEach((n) => {
							n.removeEventListener('click', nr);
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
								onClick: nr,
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
											children: c.jsxs(xe, {
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
											children: c.jsxs(xe, {
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
											children: c.jsxs(xe, {
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
											children: c.jsxs(xe, {
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
											children: c.jsxs(xe, {
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
	Tg = async (e) => {
		try {
			return await (await fetch(e)).json();
		} catch {
			return {
				success: !1,
				message:
					'An unexpected error occurred. Please check your connections and try again',
			};
		}
	},
	Zi = k.createContext(void 0),
	jg = () => {
		let [e, t] = k.useState([]),
			[n, r] = k.useState([]),
			[l, i] = k.useState('loading');
		return (
			k.useEffect(() => {
				(async () => {
					let a = await Tg('https://mbc.onrender.com/api/products');
					if (!a.success) return i('failed'), console.log(a.message);
					t([...a.data]), i('success');
				})();
			}, []),
			c.jsxs(c.Fragment, {
				children: [
					c.jsx(fp, {}),
					c.jsxs(Zi.Provider, {
						value: { cart: n, products: e, setCart: r, loadState: l },
						children: [
							c.jsxs(xe, {
								className: 'floating_counter',
								to: '/shop/cart',
								children: [
									c.jsx('span', {
										className: 'material-symbols-outlined',
										children: 'shopping_cart',
									}),
									c.jsx('span', { className: 'count', children: n.length }),
								],
							}),
							c.jsx(Cg, {}),
							c.jsx(Zf, {}),
							c.jsx(sp, {}),
						],
					}),
				],
			})
		);
	};
function pp(e) {
	const t = String(e),
		[n, r] = t.split('.'),
		l = n.replace(/\B(?=(\d{3})+(?!\d))/g, ', ');
	return r ? `${l}.${r}` : l;
}
const Pg = () => {
	let { products: e, loadState: t, cart: n, setCart: r } = k.useContext(Zi);
	return c.jsxs('main', {
		id: 'shop-home',
		children: [
			c.jsx('h1', { className: 'fancy-header', children: 'Our Products' }),
			c.jsx('div', {
				className: 'products',
				children:
					t === 'loading'
						? c.jsx(yg, { className: 'spin' })
						: t === 'success'
						? c.jsx('div', {
								id: 'products',
								children:
									e.length < 1
										? c.jsx('h2', {
												className: 'load-info',
												children: 'No products to show',
										  })
										: e.map((l) =>
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
																	c.jsxs('p', { children: ['₦', pp(l.price)] }),
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
																				u = n.findIndex((d) => d.id === a);
																			if (u < 0) {
																				let d = { ...l, quantity: 1 };
																				r([...n, d]);
																				return;
																			}
																			let s = [...n];
																			(s[u].quantity += 1), r(s);
																		},
																		children: 'Add to cart',
																	}),
																	c.jsx(xe, {
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
						  })
						: c.jsx('h2', {
								className: 'load-info',
								children: 'Failed to load products',
						  }),
			}),
		],
	});
};
function Ng() {
	let { id: e } = Vv(),
		{ cart: t, products: n, setCart: r } = k.useContext(Zi),
		[l, i] = k.useState({}),
		[o, a] = k.useState(!1);
	return (
		k.useEffect(() => {
			(async function () {
				let u = n.find((s) => s.id === e);
				if ((i({ ...u }), !l.id)) {
					let d = await (
						await fetch(`https://mbc.onrender.com/api/products/${e}`)
					).json();
					d.success && i({ ...d.data });
					return;
				}
			})();
		}, []),
		k.useEffect(() => {
			t.find((u) => u.id === e) ? a(!0) : a(!1);
		}, [t]),
		c.jsx('main', {
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
												children: l.description || 'No description available',
											}),
											c.jsxs('p', {
												className: 'price',
												children: ['₦', pp(l.price)],
											}),
										],
									}),
									c.jsxs('div', {
										className: 'options',
										children: [
											o &&
												c.jsx('input', {
													type: 'number',
													value: t.find((u) => u.id === e)
														? t.find((u) => u.id === e).quantity
														: 1,
												}),
											' ',
											o ||
												c.jsx('button', {
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
						children: 'No product to show',
				  }),
		})
	);
}
const _g = d0([
	{
		path: '/',
		element: c.jsxs(c.Fragment, {
			children: [
				c.jsx(mg, {}),
				c.jsx(fp, {}),
				c.jsx(y0, {}),
				c.jsx(Zf, {}),
				c.jsx(sp, {}),
			],
		}),
		children: [
			{ index: !0, element: c.jsx(pg, {}) },
			{ path: 'about', element: c.jsx(hg, {}) },
			{ path: 'contact', element: c.jsx(Eg, {}) },
		],
		errorElement: c.jsx(kg, {}),
	},
	{
		path: '/shop',
		element: c.jsx(jg, {}),
		children: [
			{ index: !0, element: c.jsx(Pg, {}) },
			{ path: '/shop/products/:id', element: c.jsx(Ng, {}) },
		],
	},
]);
function Rg() {
	return c.jsx(r0, { router: _g });
}
Io.createRoot(document.getElementById('root')).render(
	c.jsx(Ue.StrictMode, { children: c.jsx(Rg, {}) })
);

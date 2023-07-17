function vp(e, t) {
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
function hl(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var Ec = { exports: {} },
	Ni = {},
	kc = { exports: {} },
	V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ml = Symbol.for('react.element'),
	gp = Symbol.for('react.portal'),
	yp = Symbol.for('react.fragment'),
	wp = Symbol.for('react.strict_mode'),
	xp = Symbol.for('react.profiler'),
	Sp = Symbol.for('react.provider'),
	Ep = Symbol.for('react.context'),
	kp = Symbol.for('react.forward_ref'),
	Cp = Symbol.for('react.suspense'),
	Tp = Symbol.for('react.memo'),
	jp = Symbol.for('react.lazy'),
	Wu = Symbol.iterator;
function Pp(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Wu && e[Wu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var Cc = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	Tc = Object.assign,
	jc = {};
function fr(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = jc),
		(this.updater = n || Cc);
}
fr.prototype.isReactComponent = {};
fr.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		);
	this.updater.enqueueSetState(this, e, t, 'setState');
};
fr.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Pc() {}
Pc.prototype = fr.prototype;
function Ma(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = jc),
		(this.updater = n || Cc);
}
var Da = (Ma.prototype = new Pc());
Da.constructor = Ma;
Tc(Da, fr.prototype);
Da.isPureReactComponent = !0;
var Vu = Array.isArray,
	Rc = Object.prototype.hasOwnProperty,
	Aa = { current: null },
	_c = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nc(e, t, n) {
	var r,
		l = {},
		i = null,
		o = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (o = t.ref),
		t.key !== void 0 && (i = '' + t.key),
		t))
			Rc.call(t, r) && !_c.hasOwnProperty(r) && (l[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) l.children = n;
	else if (1 < a) {
		for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
		l.children = u;
	}
	if (e && e.defaultProps)
		for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
	return {
		$$typeof: ml,
		type: e,
		key: i,
		ref: o,
		props: l,
		_owner: Aa.current,
	};
}
function Rp(e, t) {
	return {
		$$typeof: ml,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function za(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === ml;
}
function _p(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Qu = /\/+/g;
function no(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? _p('' + e.key)
		: t.toString(36);
}
function Vl(e, t, n, r, l) {
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
					case ml:
					case gp:
						o = !0;
				}
		}
	if (o)
		return (
			(o = e),
			(l = l(o)),
			(e = r === '' ? '.' + no(o, 0) : r),
			Vu(l)
				? ((n = ''),
				  e != null && (n = e.replace(Qu, '$&/') + '/'),
				  Vl(l, t, n, '', function (s) {
						return s;
				  }))
				: l != null &&
				  (za(l) &&
						(l = Rp(
							l,
							n +
								(!l.key || (o && o.key === l.key)
									? ''
									: ('' + l.key).replace(Qu, '$&/') + '/') +
								e
						)),
				  t.push(l)),
			1
		);
	if (((o = 0), (r = r === '' ? '.' : r + ':'), Vu(e)))
		for (var a = 0; a < e.length; a++) {
			i = e[a];
			var u = r + no(i, a);
			o += Vl(i, t, n, u, l);
		}
	else if (((u = Pp(e)), typeof u == 'function'))
		for (e = u.call(e), a = 0; !(i = e.next()).done; )
			(i = i.value), (u = r + no(i, a++)), (o += Vl(i, t, n, u, l));
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
function jl(e, t, n) {
	if (e == null) return e;
	var r = [],
		l = 0;
	return (
		Vl(e, r, '', '', function (i) {
			return t.call(n, i, l++);
		}),
		r
	);
}
function Np(e) {
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
var Me = { current: null },
	Ql = { transition: null },
	Lp = {
		ReactCurrentDispatcher: Me,
		ReactCurrentBatchConfig: Ql,
		ReactCurrentOwner: Aa,
	};
V.Children = {
	map: jl,
	forEach: function (e, t, n) {
		jl(
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
			jl(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			jl(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!za(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			);
		return e;
	},
};
V.Component = fr;
V.Fragment = yp;
V.Profiler = xp;
V.PureComponent = Ma;
V.StrictMode = wp;
V.Suspense = Cp;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lp;
V.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.'
		);
	var r = Tc({}, e.props),
		l = e.key,
		i = e.ref,
		o = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((i = t.ref), (o = Aa.current)),
			t.key !== void 0 && (l = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var a = e.type.defaultProps;
		for (u in t)
			Rc.call(t, u) &&
				!_c.hasOwnProperty(u) &&
				(r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
	}
	var u = arguments.length - 2;
	if (u === 1) r.children = n;
	else if (1 < u) {
		a = Array(u);
		for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
		r.children = a;
	}
	return { $$typeof: ml, type: e.type, key: l, ref: i, props: r, _owner: o };
};
V.createContext = function (e) {
	return (
		(e = {
			$$typeof: Ep,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Sp, _context: e }),
		(e.Consumer = e)
	);
};
V.createElement = Nc;
V.createFactory = function (e) {
	var t = Nc.bind(null, e);
	return (t.type = e), t;
};
V.createRef = function () {
	return { current: null };
};
V.forwardRef = function (e) {
	return { $$typeof: kp, render: e };
};
V.isValidElement = za;
V.lazy = function (e) {
	return { $$typeof: jp, _payload: { _status: -1, _result: e }, _init: Np };
};
V.memo = function (e, t) {
	return { $$typeof: Tp, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
	var t = Ql.transition;
	Ql.transition = {};
	try {
		e();
	} finally {
		Ql.transition = t;
	}
};
V.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.');
};
V.useCallback = function (e, t) {
	return Me.current.useCallback(e, t);
};
V.useContext = function (e) {
	return Me.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
	return Me.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
	return Me.current.useEffect(e, t);
};
V.useId = function () {
	return Me.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
	return Me.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
	return Me.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
	return Me.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
	return Me.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
	return Me.current.useReducer(e, t, n);
};
V.useRef = function (e) {
	return Me.current.useRef(e);
};
V.useState = function (e) {
	return Me.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
	return Me.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
	return Me.current.useTransition();
};
V.version = '18.2.0';
kc.exports = V;
var P = kc.exports;
const Ue = hl(P),
	Op = vp({ __proto__: null, default: Ue }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mp = P,
	Dp = Symbol.for('react.element'),
	Ap = Symbol.for('react.fragment'),
	zp = Object.prototype.hasOwnProperty,
	Ip = Mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Fp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lc(e, t, n) {
	var r,
		l = {},
		i = null,
		o = null;
	n !== void 0 && (i = '' + n),
		t.key !== void 0 && (i = '' + t.key),
		t.ref !== void 0 && (o = t.ref);
	for (r in t) zp.call(t, r) && !Fp.hasOwnProperty(r) && (l[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
	return {
		$$typeof: Dp,
		type: e,
		key: i,
		ref: o,
		props: l,
		_owner: Ip.current,
	};
}
Ni.Fragment = Ap;
Ni.jsx = Lc;
Ni.jsxs = Lc;
Ec.exports = Ni;
var d = Ec.exports,
	Oo = {},
	Oc = { exports: {} },
	qe = {},
	Mc = { exports: {} },
	Dc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(N, z) {
		var $ = N.length;
		N.push(z);
		e: for (; 0 < $; ) {
			var oe = ($ - 1) >>> 1,
				fe = N[oe];
			if (0 < l(fe, z)) (N[oe] = z), (N[$] = fe), ($ = oe);
			else break e;
		}
	}
	function n(N) {
		return N.length === 0 ? null : N[0];
	}
	function r(N) {
		if (N.length === 0) return null;
		var z = N[0],
			$ = N.pop();
		if ($ !== z) {
			N[0] = $;
			e: for (var oe = 0, fe = N.length, Nn = fe >>> 1; oe < Nn; ) {
				var ee = 2 * (oe + 1) - 1,
					Et = N[ee],
					mt = ee + 1,
					Ln = N[mt];
				if (0 > l(Et, $))
					mt < fe && 0 > l(Ln, Et)
						? ((N[oe] = Ln), (N[mt] = $), (oe = mt))
						: ((N[oe] = Et), (N[ee] = $), (oe = ee));
				else if (mt < fe && 0 > l(Ln, $)) (N[oe] = Ln), (N[mt] = $), (oe = mt);
				else break e;
			}
		}
		return z;
	}
	function l(N, z) {
		var $ = N.sortIndex - z.sortIndex;
		return $ !== 0 ? $ : N.id - z.id;
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
		c = 1,
		m = null,
		v = 3,
		y = !1,
		x = !1,
		w = !1,
		j = typeof setTimeout == 'function' ? setTimeout : null,
		h = typeof clearTimeout == 'function' ? clearTimeout : null,
		f = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function g(N) {
		for (var z = n(s); z !== null; ) {
			if (z.callback === null) r(s);
			else if (z.startTime <= N)
				r(s), (z.sortIndex = z.expirationTime), t(u, z);
			else break;
			z = n(s);
		}
	}
	function p(N) {
		if (((w = !1), g(N), !x))
			if (n(u) !== null) (x = !0), lt(C);
			else {
				var z = n(s);
				z !== null && ht(p, z.startTime - N);
			}
	}
	function C(N, z) {
		(x = !1), w && ((w = !1), h(O), (O = -1)), (y = !0);
		var $ = v;
		try {
			for (
				g(z), m = n(u);
				m !== null && (!(m.expirationTime > z) || (N && !Se()));

			) {
				var oe = m.callback;
				if (typeof oe == 'function') {
					(m.callback = null), (v = m.priorityLevel);
					var fe = oe(m.expirationTime <= z);
					(z = e.unstable_now()),
						typeof fe == 'function' ? (m.callback = fe) : m === n(u) && r(u),
						g(z);
				} else r(u);
				m = n(u);
			}
			if (m !== null) var Nn = !0;
			else {
				var ee = n(s);
				ee !== null && ht(p, ee.startTime - z), (Nn = !1);
			}
			return Nn;
		} finally {
			(m = null), (v = $), (y = !1);
		}
	}
	var _ = !1,
		R = null,
		O = -1,
		Q = 5,
		U = -1;
	function Se() {
		return !(e.unstable_now() - U < Q);
	}
	function G() {
		if (R !== null) {
			var N = e.unstable_now();
			U = N;
			var z = !0;
			try {
				z = R(!0, N);
			} finally {
				z ? It() : ((_ = !1), (R = null));
			}
		} else _ = !1;
	}
	var It;
	if (typeof f == 'function')
		It = function () {
			f(G);
		};
	else if (typeof MessageChannel < 'u') {
		var _n = new MessageChannel(),
			Ft = _n.port2;
		(_n.port1.onmessage = G),
			(It = function () {
				Ft.postMessage(null);
			});
	} else
		It = function () {
			j(G, 0);
		};
	function lt(N) {
		(R = N), _ || ((_ = !0), It());
	}
	function ht(N, z) {
		O = j(function () {
			N(e.unstable_now());
		}, z);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (N) {
			N.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			x || y || ((x = !0), lt(C));
		}),
		(e.unstable_forceFrameRate = function (N) {
			0 > N || 125 < N
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (Q = 0 < N ? Math.floor(1e3 / N) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return v;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(u);
		}),
		(e.unstable_next = function (N) {
			switch (v) {
				case 1:
				case 2:
				case 3:
					var z = 3;
					break;
				default:
					z = v;
			}
			var $ = v;
			v = z;
			try {
				return N();
			} finally {
				v = $;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (N, z) {
			switch (N) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					N = 3;
			}
			var $ = v;
			v = N;
			try {
				return z();
			} finally {
				v = $;
			}
		}),
		(e.unstable_scheduleCallback = function (N, z, $) {
			var oe = e.unstable_now();
			switch (
				(typeof $ == 'object' && $ !== null
					? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? oe + $ : oe))
					: ($ = oe),
				N)
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
				(N = {
					id: c++,
					callback: z,
					priorityLevel: N,
					startTime: $,
					expirationTime: fe,
					sortIndex: -1,
				}),
				$ > oe
					? ((N.sortIndex = $),
					  t(s, N),
					  n(u) === null &&
							N === n(s) &&
							(w ? (h(O), (O = -1)) : (w = !0), ht(p, $ - oe)))
					: ((N.sortIndex = fe), t(u, N), x || y || ((x = !0), lt(C))),
				N
			);
		}),
		(e.unstable_shouldYield = Se),
		(e.unstable_wrapCallback = function (N) {
			var z = v;
			return function () {
				var $ = v;
				v = z;
				try {
					return N.apply(this, arguments);
				} finally {
					v = $;
				}
			};
		});
})(Dc);
Mc.exports = Dc;
var Up = Mc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ac = P,
	Ke = Up;
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
var zc = new Set(),
	Kr = {};
function Tn(e, t) {
	rr(e, t), rr(e + 'Capture', t);
}
function rr(e, t) {
	for (Kr[e] = t, e = 0; e < t.length; e++) zc.add(t[e]);
}
var Lt = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	Mo = Object.prototype.hasOwnProperty,
	Bp =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Yu = {},
	Ku = {};
function Hp(e) {
	return Mo.call(Ku, e)
		? !0
		: Mo.call(Yu, e)
		? !1
		: Bp.test(e)
		? (Ku[e] = !0)
		: ((Yu[e] = !0), !1);
}
function $p(e, t, n, r) {
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
function Wp(e, t, n, r) {
	if (t === null || typeof t > 'u' || $p(e, t, n, r)) return !0;
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
function De(e, t, n, r, l, i, o) {
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
		Te[e] = new De(e, 0, !1, e, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0];
	Te[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	Te[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (e) {
	Te[e] = new De(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		Te[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	Te[e] = new De(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	Te[e] = new De(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	Te[e] = new De(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	Te[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ia = /[\-:]([a-z])/g;
function Fa(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Ia, Fa);
		Te[t] = new De(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Ia, Fa);
		Te[t] = new De(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(Ia, Fa);
	Te[t] = new De(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	Te[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new De(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	Te[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ua(e, t, n, r) {
	var l = Te.hasOwnProperty(t) ? Te[t] : null;
	(l !== null
		? l.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(Wp(t, n, l, r) && (n = null),
		r || l === null
			? Hp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var At = Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Pl = Symbol.for('react.element'),
	An = Symbol.for('react.portal'),
	zn = Symbol.for('react.fragment'),
	Ba = Symbol.for('react.strict_mode'),
	Do = Symbol.for('react.profiler'),
	Ic = Symbol.for('react.provider'),
	Fc = Symbol.for('react.context'),
	Ha = Symbol.for('react.forward_ref'),
	Ao = Symbol.for('react.suspense'),
	zo = Symbol.for('react.suspense_list'),
	$a = Symbol.for('react.memo'),
	$t = Symbol.for('react.lazy'),
	Uc = Symbol.for('react.offscreen'),
	qu = Symbol.iterator;
function wr(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (qu && e[qu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var se = Object.assign,
	ro;
function Mr(e) {
	if (ro === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			ro = (t && t[1]) || '';
		}
	return (
		`
` +
		ro +
		e
	);
}
var lo = !1;
function io(e, t) {
	if (!e || lo) return '';
	lo = !0;
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
		(lo = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : '') ? Mr(e) : '';
}
function Vp(e) {
	switch (e.tag) {
		case 5:
			return Mr(e.type);
		case 16:
			return Mr('Lazy');
		case 13:
			return Mr('Suspense');
		case 19:
			return Mr('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = io(e.type, !1)), e;
		case 11:
			return (e = io(e.type.render, !1)), e;
		case 1:
			return (e = io(e.type, !0)), e;
		default:
			return '';
	}
}
function Io(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case zn:
			return 'Fragment';
		case An:
			return 'Portal';
		case Do:
			return 'Profiler';
		case Ba:
			return 'StrictMode';
		case Ao:
			return 'Suspense';
		case zo:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case Fc:
				return (e.displayName || 'Context') + '.Consumer';
			case Ic:
				return (e._context.displayName || 'Context') + '.Provider';
			case Ha:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case $a:
				return (
					(t = e.displayName || null), t !== null ? t : Io(e.type) || 'Memo'
				);
			case $t:
				(t = e._payload), (e = e._init);
				try {
					return Io(e(t));
				} catch {}
		}
	return null;
}
function Qp(e) {
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
			return Io(t);
		case 8:
			return t === Ba ? 'StrictMode' : 'Mode';
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
function rn(e) {
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
function Bc(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	);
}
function Yp(e) {
	var t = Bc(e) ? 'checked' : 'value',
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
	e._valueTracker || (e._valueTracker = Yp(e));
}
function Hc(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return (
		e && (r = Bc(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function li(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Fo(e, t) {
	var n = t.checked;
	return se({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Gu(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = rn(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null,
		});
}
function $c(e, t) {
	(t = t.checked), t != null && Ua(e, 'checked', t, !1);
}
function Uo(e, t) {
	$c(e, t);
	var n = rn(t.value),
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
		? Bo(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && Bo(e, t.type, rn(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Xu(e, t, n) {
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
function Bo(e, t, n) {
	(t !== 'number' || li(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Dr = Array.isArray;
function Gn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
		for (n = 0; n < e.length; n++)
			(l = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== l && (e[n].selected = l),
				l && r && (e[n].defaultSelected = !0);
	} else {
		for (n = '' + rn(n), t = null, l = 0; l < e.length; l++) {
			if (e[l].value === n) {
				(e[l].selected = !0), r && (e[l].defaultSelected = !0);
				return;
			}
			t !== null || e[l].disabled || (t = e[l]);
		}
		t !== null && (t.selected = !0);
	}
}
function Ho(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
	return se({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue,
	});
}
function Ju(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(T(92));
			if (Dr(n)) {
				if (1 < n.length) throw Error(T(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ''), (n = t);
	}
	e._wrapperState = { initialValue: rn(n) };
}
function Wc(e, t) {
	var n = rn(t.value),
		r = rn(t.defaultValue);
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r);
}
function Zu(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Vc(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function $o(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? Vc(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e;
}
var _l,
	Qc = (function (e) {
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
				_l = _l || document.createElement('div'),
					_l.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = _l.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function qr(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Ir = {
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
	Kp = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ir).forEach(function (e) {
	Kp.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ir[t] = Ir[e]);
	});
});
function Yc(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (Ir.hasOwnProperty(e) && Ir[e])
		? ('' + t).trim()
		: t + 'px';
}
function Kc(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				l = Yc(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
		}
}
var qp = se(
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
function Wo(e, t) {
	if (t) {
		if (qp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Vo(e, t) {
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
var Qo = null;
function Wa(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Yo = null,
	Xn = null,
	Jn = null;
function bu(e) {
	if ((e = yl(e))) {
		if (typeof Yo != 'function') throw Error(T(280));
		var t = e.stateNode;
		t && ((t = Ai(t)), Yo(e.stateNode, e.type, t));
	}
}
function qc(e) {
	Xn ? (Jn ? Jn.push(e) : (Jn = [e])) : (Xn = e);
}
function Gc() {
	if (Xn) {
		var e = Xn,
			t = Jn;
		if (((Jn = Xn = null), bu(e), t)) for (e = 0; e < t.length; e++) bu(t[e]);
	}
}
function Xc(e, t) {
	return e(t);
}
function Jc() {}
var oo = !1;
function Zc(e, t, n) {
	if (oo) return e(t, n);
	oo = !0;
	try {
		return Xc(e, t, n);
	} finally {
		(oo = !1), (Xn !== null || Jn !== null) && (Jc(), Gc());
	}
}
function Gr(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Ai(n);
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
var Ko = !1;
if (Lt)
	try {
		var xr = {};
		Object.defineProperty(xr, 'passive', {
			get: function () {
				Ko = !0;
			},
		}),
			window.addEventListener('test', xr, xr),
			window.removeEventListener('test', xr, xr);
	} catch {
		Ko = !1;
	}
function Gp(e, t, n, r, l, i, o, a, u) {
	var s = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, s);
	} catch (c) {
		this.onError(c);
	}
}
var Fr = !1,
	ii = null,
	oi = !1,
	qo = null,
	Xp = {
		onError: function (e) {
			(Fr = !0), (ii = e);
		},
	};
function Jp(e, t, n, r, l, i, o, a, u) {
	(Fr = !1), (ii = null), Gp.apply(Xp, arguments);
}
function Zp(e, t, n, r, l, i, o, a, u) {
	if ((Jp.apply(this, arguments), Fr)) {
		if (Fr) {
			var s = ii;
			(Fr = !1), (ii = null);
		} else throw Error(T(198));
		oi || ((oi = !0), (qo = s));
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
function bc(e) {
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
function es(e) {
	if (jn(e) !== e) throw Error(T(188));
}
function bp(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = jn(e)), t === null)) throw Error(T(188));
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
				if (i === n) return es(l), e;
				if (i === r) return es(l), t;
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
function ed(e) {
	return (e = bp(e)), e !== null ? td(e) : null;
}
function td(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = td(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var nd = Ke.unstable_scheduleCallback,
	ts = Ke.unstable_cancelCallback,
	eh = Ke.unstable_shouldYield,
	th = Ke.unstable_requestPaint,
	de = Ke.unstable_now,
	nh = Ke.unstable_getCurrentPriorityLevel,
	Va = Ke.unstable_ImmediatePriority,
	rd = Ke.unstable_UserBlockingPriority,
	ai = Ke.unstable_NormalPriority,
	rh = Ke.unstable_LowPriority,
	ld = Ke.unstable_IdlePriority,
	Li = null,
	xt = null;
function lh(e) {
	if (xt && typeof xt.onCommitFiberRoot == 'function')
		try {
			xt.onCommitFiberRoot(Li, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var dt = Math.clz32 ? Math.clz32 : ah,
	ih = Math.log,
	oh = Math.LN2;
function ah(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((ih(e) / oh) | 0)) | 0;
}
var Nl = 64,
	Ll = 4194304;
function Ar(e) {
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
function ui(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		l = e.suspendedLanes,
		i = e.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var a = o & ~l;
		a !== 0 ? (r = Ar(a)) : ((i &= o), i !== 0 && (r = Ar(i)));
	} else (o = n & ~l), o !== 0 ? (r = Ar(o)) : i !== 0 && (r = Ar(i));
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
function uh(e, t) {
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
function sh(e, t) {
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
			? (!(a & n) || a & r) && (l[o] = uh(a, t))
			: u <= t && (e.expiredLanes |= a),
			(i &= ~a);
	}
}
function Go(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function id() {
	var e = Nl;
	return (Nl <<= 1), !(Nl & 4194240) && (Nl = 64), e;
}
function ao(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function vl(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - dt(t)),
		(e[t] = n);
}
function ch(e, t) {
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
function Qa(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - dt(n),
			l = 1 << r;
		(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
	}
}
var q = 0;
function od(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ad,
	Ya,
	ud,
	sd,
	cd,
	Xo = !1,
	Ol = [],
	qt = null,
	Gt = null,
	Xt = null,
	Xr = new Map(),
	Jr = new Map(),
	Vt = [],
	dh =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		);
function ns(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			qt = null;
			break;
		case 'dragenter':
		case 'dragleave':
			Gt = null;
			break;
		case 'mouseover':
		case 'mouseout':
			Xt = null;
			break;
		case 'pointerover':
		case 'pointerout':
			Xr.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			Jr.delete(t.pointerId);
	}
}
function Sr(e, t, n, r, l, i) {
	return e === null || e.nativeEvent !== i
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: i,
				targetContainers: [l],
		  }),
		  t !== null && ((t = yl(t)), t !== null && Ya(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  l !== null && t.indexOf(l) === -1 && t.push(l),
		  e);
}
function fh(e, t, n, r, l) {
	switch (t) {
		case 'focusin':
			return (qt = Sr(qt, e, t, n, r, l)), !0;
		case 'dragenter':
			return (Gt = Sr(Gt, e, t, n, r, l)), !0;
		case 'mouseover':
			return (Xt = Sr(Xt, e, t, n, r, l)), !0;
		case 'pointerover':
			var i = l.pointerId;
			return Xr.set(i, Sr(Xr.get(i) || null, e, t, n, r, l)), !0;
		case 'gotpointercapture':
			return (
				(i = l.pointerId), Jr.set(i, Sr(Jr.get(i) || null, e, t, n, r, l)), !0
			);
	}
	return !1;
}
function dd(e) {
	var t = fn(e.target);
	if (t !== null) {
		var n = jn(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = bc(n)), t !== null)) {
					(e.blockedOn = t),
						cd(e.priority, function () {
							ud(n);
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
function Yl(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Jo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(Qo = r), n.target.dispatchEvent(r), (Qo = null);
		} else return (t = yl(n)), t !== null && Ya(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function rs(e, t, n) {
	Yl(e) && n.delete(t);
}
function ph() {
	(Xo = !1),
		qt !== null && Yl(qt) && (qt = null),
		Gt !== null && Yl(Gt) && (Gt = null),
		Xt !== null && Yl(Xt) && (Xt = null),
		Xr.forEach(rs),
		Jr.forEach(rs);
}
function Er(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Xo ||
			((Xo = !0),
			Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, ph)));
}
function Zr(e) {
	function t(l) {
		return Er(l, e);
	}
	if (0 < Ol.length) {
		Er(Ol[0], e);
		for (var n = 1; n < Ol.length; n++) {
			var r = Ol[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		qt !== null && Er(qt, e),
			Gt !== null && Er(Gt, e),
			Xt !== null && Er(Xt, e),
			Xr.forEach(t),
			Jr.forEach(t),
			n = 0;
		n < Vt.length;
		n++
	)
		(r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
		dd(n), n.blockedOn === null && Vt.shift();
}
var Zn = At.ReactCurrentBatchConfig,
	si = !0;
function hh(e, t, n, r) {
	var l = q,
		i = Zn.transition;
	Zn.transition = null;
	try {
		(q = 1), Ka(e, t, n, r);
	} finally {
		(q = l), (Zn.transition = i);
	}
}
function mh(e, t, n, r) {
	var l = q,
		i = Zn.transition;
	Zn.transition = null;
	try {
		(q = 4), Ka(e, t, n, r);
	} finally {
		(q = l), (Zn.transition = i);
	}
}
function Ka(e, t, n, r) {
	if (si) {
		var l = Jo(e, t, n, r);
		if (l === null) yo(e, t, r, ci, n), ns(e, r);
		else if (fh(l, e, t, n, r)) r.stopPropagation();
		else if ((ns(e, r), t & 4 && -1 < dh.indexOf(e))) {
			for (; l !== null; ) {
				var i = yl(l);
				if (
					(i !== null && ad(i),
					(i = Jo(e, t, n, r)),
					i === null && yo(e, t, r, ci, n),
					i === l)
				)
					break;
				l = i;
			}
			l !== null && r.stopPropagation();
		} else yo(e, t, r, null, n);
	}
}
var ci = null;
function Jo(e, t, n, r) {
	if (((ci = null), (e = Wa(r)), (e = fn(e)), e !== null))
		if (((t = jn(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = bc(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (ci = e), null;
}
function fd(e) {
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
			switch (nh()) {
				case Va:
					return 1;
				case rd:
					return 4;
				case ai:
				case rh:
					return 16;
				case ld:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var Yt = null,
	qa = null,
	Kl = null;
function pd() {
	if (Kl) return Kl;
	var e,
		t = qa,
		n = t.length,
		r,
		l = 'value' in Yt ? Yt.value : Yt.textContent,
		i = l.length;
	for (e = 0; e < n && t[e] === l[e]; e++);
	var o = n - e;
	for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
	return (Kl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ql(e) {
	var t = e.keyCode;
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Ml() {
	return !0;
}
function ls() {
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
				? Ml
				: ls),
			(this.isPropagationStopped = ls),
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
					(this.isDefaultPrevented = Ml));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = Ml));
			},
			persist: function () {},
			isPersistent: Ml,
		}),
		t
	);
}
var pr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	Ga = Ge(pr),
	gl = se({}, pr, { view: 0, detail: 0 }),
	vh = Ge(gl),
	uo,
	so,
	kr,
	Oi = se({}, gl, {
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
		getModifierState: Xa,
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
				: (e !== kr &&
						(kr && e.type === 'mousemove'
							? ((uo = e.screenX - kr.screenX), (so = e.screenY - kr.screenY))
							: (so = uo = 0),
						(kr = e)),
				  uo);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : so;
		},
	}),
	is = Ge(Oi),
	gh = se({}, Oi, { dataTransfer: 0 }),
	yh = Ge(gh),
	wh = se({}, gl, { relatedTarget: 0 }),
	co = Ge(wh),
	xh = se({}, pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Sh = Ge(xh),
	Eh = se({}, pr, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		},
	}),
	kh = Ge(Eh),
	Ch = se({}, pr, { data: 0 }),
	os = Ge(Ch),
	Th = {
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
	jh = {
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
	Ph = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	};
function Rh(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Ph[e]) ? !!t[e] : !1;
}
function Xa() {
	return Rh;
}
var _h = se({}, gl, {
		key: function (e) {
			if (e.key) {
				var t = Th[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = ql(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? jh[e.keyCode] || 'Unidentified'
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
		getModifierState: Xa,
		charCode: function (e) {
			return e.type === 'keypress' ? ql(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress'
				? ql(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0;
		},
	}),
	Nh = Ge(_h),
	Lh = se({}, Oi, {
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
	as = Ge(Lh),
	Oh = se({}, gl, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Xa,
	}),
	Mh = Ge(Oh),
	Dh = se({}, pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Ah = Ge(Dh),
	zh = se({}, Oi, {
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
	Ih = Ge(zh),
	Fh = [9, 13, 27, 32],
	Ja = Lt && 'CompositionEvent' in window,
	Ur = null;
Lt && 'documentMode' in document && (Ur = document.documentMode);
var Uh = Lt && 'TextEvent' in window && !Ur,
	hd = Lt && (!Ja || (Ur && 8 < Ur && 11 >= Ur)),
	us = String.fromCharCode(32),
	ss = !1;
function md(e, t) {
	switch (e) {
		case 'keyup':
			return Fh.indexOf(t.keyCode) !== -1;
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
function vd(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var In = !1;
function Bh(e, t) {
	switch (e) {
		case 'compositionend':
			return vd(t);
		case 'keypress':
			return t.which !== 32 ? null : ((ss = !0), us);
		case 'textInput':
			return (e = t.data), e === us && ss ? null : e;
		default:
			return null;
	}
}
function Hh(e, t) {
	if (In)
		return e === 'compositionend' || (!Ja && md(e, t))
			? ((e = pd()), (Kl = qa = Yt = null), (In = !1), e)
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
			return hd && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var $h = {
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
function cs(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!$h[e.type] : t === 'textarea';
}
function gd(e, t, n, r) {
	qc(r),
		(t = di(t, 'onChange')),
		0 < t.length &&
			((n = new Ga('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }));
}
var Br = null,
	br = null;
function Wh(e) {
	Rd(e, 0);
}
function Mi(e) {
	var t = Bn(e);
	if (Hc(t)) return e;
}
function Vh(e, t) {
	if (e === 'change') return t;
}
var yd = !1;
if (Lt) {
	var fo;
	if (Lt) {
		var po = 'oninput' in document;
		if (!po) {
			var ds = document.createElement('div');
			ds.setAttribute('oninput', 'return;'),
				(po = typeof ds.oninput == 'function');
		}
		fo = po;
	} else fo = !1;
	yd = fo && (!document.documentMode || 9 < document.documentMode);
}
function fs() {
	Br && (Br.detachEvent('onpropertychange', wd), (br = Br = null));
}
function wd(e) {
	if (e.propertyName === 'value' && Mi(br)) {
		var t = [];
		gd(t, br, e, Wa(e)), Zc(Wh, t);
	}
}
function Qh(e, t, n) {
	e === 'focusin'
		? (fs(), (Br = t), (br = n), Br.attachEvent('onpropertychange', wd))
		: e === 'focusout' && fs();
}
function Yh(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
		return Mi(br);
}
function Kh(e, t) {
	if (e === 'click') return Mi(t);
}
function qh(e, t) {
	if (e === 'input' || e === 'change') return Mi(t);
}
function Gh(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pt = typeof Object.is == 'function' ? Object.is : Gh;
function el(e, t) {
	if (pt(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var l = n[r];
		if (!Mo.call(t, l) || !pt(e[l], t[l])) return !1;
	}
	return !0;
}
function ps(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function hs(e, t) {
	var n = ps(e);
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
		n = ps(n);
	}
}
function xd(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? xd(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function Sd() {
	for (var e = window, t = li(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = li(e.document);
	}
	return t;
}
function Za(e) {
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
function Xh(e) {
	var t = Sd(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		xd(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Za(n)) {
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
					(l = hs(n, i));
				var o = hs(n, r);
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
var Jh = Lt && 'documentMode' in document && 11 >= document.documentMode,
	Fn = null,
	Zo = null,
	Hr = null,
	bo = !1;
function ms(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	bo ||
		Fn == null ||
		Fn !== li(r) ||
		((r = Fn),
		'selectionStart' in r && Za(r)
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
		(Hr && el(Hr, r)) ||
			((Hr = r),
			(r = di(Zo, 'onSelect')),
			0 < r.length &&
				((t = new Ga('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Fn))));
}
function Dl(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	);
}
var Un = {
		animationend: Dl('Animation', 'AnimationEnd'),
		animationiteration: Dl('Animation', 'AnimationIteration'),
		animationstart: Dl('Animation', 'AnimationStart'),
		transitionend: Dl('Transition', 'TransitionEnd'),
	},
	ho = {},
	Ed = {};
Lt &&
	((Ed = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete Un.animationend.animation,
		delete Un.animationiteration.animation,
		delete Un.animationstart.animation),
	'TransitionEvent' in window || delete Un.transitionend.transition);
function Di(e) {
	if (ho[e]) return ho[e];
	if (!Un[e]) return e;
	var t = Un[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Ed) return (ho[e] = t[n]);
	return e;
}
var kd = Di('animationend'),
	Cd = Di('animationiteration'),
	Td = Di('animationstart'),
	jd = Di('transitionend'),
	Pd = new Map(),
	vs =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		);
function on(e, t) {
	Pd.set(e, t), Tn(t, [e]);
}
for (var mo = 0; mo < vs.length; mo++) {
	var vo = vs[mo],
		Zh = vo.toLowerCase(),
		bh = vo[0].toUpperCase() + vo.slice(1);
	on(Zh, 'on' + bh);
}
on(kd, 'onAnimationEnd');
on(Cd, 'onAnimationIteration');
on(Td, 'onAnimationStart');
on('dblclick', 'onDoubleClick');
on('focusin', 'onFocus');
on('focusout', 'onBlur');
on(jd, 'onTransitionEnd');
rr('onMouseEnter', ['mouseout', 'mouseover']);
rr('onMouseLeave', ['mouseout', 'mouseover']);
rr('onPointerEnter', ['pointerout', 'pointerover']);
rr('onPointerLeave', ['pointerout', 'pointerover']);
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
var zr =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	em = new Set('cancel close invalid load scroll toggle'.split(' ').concat(zr));
function gs(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), Zp(r, t, void 0, e), (e.currentTarget = null);
}
function Rd(e, t) {
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
					gs(l, a, s), (i = u);
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
					gs(l, a, s), (i = u);
				}
		}
	}
	if (oi) throw ((e = qo), (oi = !1), (qo = null), e);
}
function Z(e, t) {
	var n = t[la];
	n === void 0 && (n = t[la] = new Set());
	var r = e + '__bubble';
	n.has(r) || (_d(t, e, 2, !1), n.add(r));
}
function go(e, t, n) {
	var r = 0;
	t && (r |= 4), _d(n, e, r, t);
}
var Al = '_reactListening' + Math.random().toString(36).slice(2);
function tl(e) {
	if (!e[Al]) {
		(e[Al] = !0),
			zc.forEach(function (n) {
				n !== 'selectionchange' && (em.has(n) || go(n, !1, e), go(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Al] || ((t[Al] = !0), go('selectionchange', !1, t));
	}
}
function _d(e, t, n, r) {
	switch (fd(t)) {
		case 1:
			var l = hh;
			break;
		case 4:
			l = mh;
			break;
		default:
			l = Ka;
	}
	(n = l.bind(null, t, n, e)),
		(l = void 0),
		!Ko ||
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
function yo(e, t, n, r, l) {
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
	Zc(function () {
		var s = i,
			c = Wa(n),
			m = [];
		e: {
			var v = Pd.get(e);
			if (v !== void 0) {
				var y = Ga,
					x = e;
				switch (e) {
					case 'keypress':
						if (ql(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						y = Nh;
						break;
					case 'focusin':
						(x = 'focus'), (y = co);
						break;
					case 'focusout':
						(x = 'blur'), (y = co);
						break;
					case 'beforeblur':
					case 'afterblur':
						y = co;
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
						y = is;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						y = yh;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						y = Mh;
						break;
					case kd:
					case Cd:
					case Td:
						y = Sh;
						break;
					case jd:
						y = Ah;
						break;
					case 'scroll':
						y = vh;
						break;
					case 'wheel':
						y = Ih;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						y = kh;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						y = as;
				}
				var w = (t & 4) !== 0,
					j = !w && e === 'scroll',
					h = w ? (v !== null ? v + 'Capture' : null) : v;
				w = [];
				for (var f = s, g; f !== null; ) {
					g = f;
					var p = g.stateNode;
					if (
						(g.tag === 5 &&
							p !== null &&
							((g = p),
							h !== null && ((p = Gr(f, h)), p != null && w.push(nl(f, p, g)))),
						j)
					)
						break;
					f = f.return;
				}
				0 < w.length &&
					((v = new y(v, x, null, n, c)), m.push({ event: v, listeners: w }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((v = e === 'mouseover' || e === 'pointerover'),
					(y = e === 'mouseout' || e === 'pointerout'),
					v &&
						n !== Qo &&
						(x = n.relatedTarget || n.fromElement) &&
						(fn(x) || x[Ot]))
				)
					break e;
				if (
					(y || v) &&
					((v =
						c.window === c
							? c
							: (v = c.ownerDocument)
							? v.defaultView || v.parentWindow
							: window),
					y
						? ((x = n.relatedTarget || n.toElement),
						  (y = s),
						  (x = x ? fn(x) : null),
						  x !== null &&
								((j = jn(x)), x !== j || (x.tag !== 5 && x.tag !== 6)) &&
								(x = null))
						: ((y = null), (x = s)),
					y !== x)
				) {
					if (
						((w = is),
						(p = 'onMouseLeave'),
						(h = 'onMouseEnter'),
						(f = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((w = as),
							(p = 'onPointerLeave'),
							(h = 'onPointerEnter'),
							(f = 'pointer')),
						(j = y == null ? v : Bn(y)),
						(g = x == null ? v : Bn(x)),
						(v = new w(p, f + 'leave', y, n, c)),
						(v.target = j),
						(v.relatedTarget = g),
						(p = null),
						fn(c) === s &&
							((w = new w(h, f + 'enter', x, n, c)),
							(w.target = g),
							(w.relatedTarget = j),
							(p = w)),
						(j = p),
						y && x)
					)
						t: {
							for (w = y, h = x, f = 0, g = w; g; g = Mn(g)) f++;
							for (g = 0, p = h; p; p = Mn(p)) g++;
							for (; 0 < f - g; ) (w = Mn(w)), f--;
							for (; 0 < g - f; ) (h = Mn(h)), g--;
							for (; f--; ) {
								if (w === h || (h !== null && w === h.alternate)) break t;
								(w = Mn(w)), (h = Mn(h));
							}
							w = null;
						}
					else w = null;
					y !== null && ys(m, v, y, w, !1),
						x !== null && j !== null && ys(m, j, x, w, !0);
				}
			}
			e: {
				if (
					((v = s ? Bn(s) : window),
					(y = v.nodeName && v.nodeName.toLowerCase()),
					y === 'select' || (y === 'input' && v.type === 'file'))
				)
					var C = Vh;
				else if (cs(v))
					if (yd) C = qh;
					else {
						C = Yh;
						var _ = Qh;
					}
				else
					(y = v.nodeName) &&
						y.toLowerCase() === 'input' &&
						(v.type === 'checkbox' || v.type === 'radio') &&
						(C = Kh);
				if (C && (C = C(e, s))) {
					gd(m, C, n, c);
					break e;
				}
				_ && _(e, v, s),
					e === 'focusout' &&
						(_ = v._wrapperState) &&
						_.controlled &&
						v.type === 'number' &&
						Bo(v, 'number', v.value);
			}
			switch (((_ = s ? Bn(s) : window), e)) {
				case 'focusin':
					(cs(_) || _.contentEditable === 'true') &&
						((Fn = _), (Zo = s), (Hr = null));
					break;
				case 'focusout':
					Hr = Zo = Fn = null;
					break;
				case 'mousedown':
					bo = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(bo = !1), ms(m, n, c);
					break;
				case 'selectionchange':
					if (Jh) break;
				case 'keydown':
				case 'keyup':
					ms(m, n, c);
			}
			var R;
			if (Ja)
				e: {
					switch (e) {
						case 'compositionstart':
							var O = 'onCompositionStart';
							break e;
						case 'compositionend':
							O = 'onCompositionEnd';
							break e;
						case 'compositionupdate':
							O = 'onCompositionUpdate';
							break e;
					}
					O = void 0;
				}
			else
				In
					? md(e, n) && (O = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (O = 'onCompositionStart');
			O &&
				(hd &&
					n.locale !== 'ko' &&
					(In || O !== 'onCompositionStart'
						? O === 'onCompositionEnd' && In && (R = pd())
						: ((Yt = c),
						  (qa = 'value' in Yt ? Yt.value : Yt.textContent),
						  (In = !0))),
				(_ = di(s, O)),
				0 < _.length &&
					((O = new os(O, e, null, n, c)),
					m.push({ event: O, listeners: _ }),
					R ? (O.data = R) : ((R = vd(n)), R !== null && (O.data = R)))),
				(R = Uh ? Bh(e, n) : Hh(e, n)) &&
					((s = di(s, 'onBeforeInput')),
					0 < s.length &&
						((c = new os('onBeforeInput', 'beforeinput', null, n, c)),
						m.push({ event: c, listeners: s }),
						(c.data = R)));
		}
		Rd(m, t);
	});
}
function nl(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function di(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var l = e,
			i = l.stateNode;
		l.tag === 5 &&
			i !== null &&
			((l = i),
			(i = Gr(e, n)),
			i != null && r.unshift(nl(e, i, l)),
			(i = Gr(e, t)),
			i != null && r.push(nl(e, i, l))),
			(e = e.return);
	}
	return r;
}
function Mn(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function ys(e, t, n, r, l) {
	for (var i = t._reactName, o = []; n !== null && n !== r; ) {
		var a = n,
			u = a.alternate,
			s = a.stateNode;
		if (u !== null && u === r) break;
		a.tag === 5 &&
			s !== null &&
			((a = s),
			l
				? ((u = Gr(n, i)), u != null && o.unshift(nl(n, u, a)))
				: l || ((u = Gr(n, i)), u != null && o.push(nl(n, u, a)))),
			(n = n.return);
	}
	o.length !== 0 && e.push({ event: t, listeners: o });
}
var tm = /\r\n?/g,
	nm = /\u0000|\uFFFD/g;
function ws(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			tm,
			`
`
		)
		.replace(nm, '');
}
function zl(e, t, n) {
	if (((t = ws(t)), ws(e) !== t && n)) throw Error(T(425));
}
function fi() {}
var ea = null,
	ta = null;
function na(e, t) {
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
var ra = typeof setTimeout == 'function' ? setTimeout : void 0,
	rm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	xs = typeof Promise == 'function' ? Promise : void 0,
	lm =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof xs < 'u'
			? function (e) {
					return xs.resolve(null).then(e).catch(im);
			  }
			: ra;
function im(e) {
	setTimeout(function () {
		throw e;
	});
}
function wo(e, t) {
	var n = t,
		r = 0;
	do {
		var l = n.nextSibling;
		if ((e.removeChild(n), l && l.nodeType === 8))
			if (((n = l.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(l), Zr(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = l;
	} while (n);
	Zr(t);
}
function Jt(e) {
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
function Ss(e) {
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
var hr = Math.random().toString(36).slice(2),
	wt = '__reactFiber$' + hr,
	rl = '__reactProps$' + hr,
	Ot = '__reactContainer$' + hr,
	la = '__reactEvents$' + hr,
	om = '__reactListeners$' + hr,
	am = '__reactHandles$' + hr;
function fn(e) {
	var t = e[wt];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Ot] || n[wt])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = Ss(e); e !== null; ) {
					if ((n = e[wt])) return n;
					e = Ss(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function yl(e) {
	return (
		(e = e[wt] || e[Ot]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Bn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(T(33));
}
function Ai(e) {
	return e[rl] || null;
}
var ia = [],
	Hn = -1;
function an(e) {
	return { current: e };
}
function b(e) {
	0 > Hn || ((e.current = ia[Hn]), (ia[Hn] = null), Hn--);
}
function J(e, t) {
	Hn++, (ia[Hn] = e.current), (e.current = t);
}
var ln = {},
	_e = an(ln),
	Be = an(!1),
	wn = ln;
function lr(e, t) {
	var n = e.type.contextTypes;
	if (!n) return ln;
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
function pi() {
	b(Be), b(_e);
}
function Es(e, t, n) {
	if (_e.current !== ln) throw Error(T(168));
	J(_e, t), J(Be, n);
}
function Nd(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var l in r) if (!(l in t)) throw Error(T(108, Qp(e) || 'Unknown', l));
	return se({}, n, r);
}
function hi(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ln),
		(wn = _e.current),
		J(_e, e),
		J(Be, Be.current),
		!0
	);
}
function ks(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(T(169));
	n
		? ((e = Nd(e, t, wn)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  b(Be),
		  b(_e),
		  J(_e, e))
		: b(Be),
		J(Be, n);
}
var jt = null,
	zi = !1,
	xo = !1;
function Ld(e) {
	jt === null ? (jt = [e]) : jt.push(e);
}
function um(e) {
	(zi = !0), Ld(e);
}
function un() {
	if (!xo && jt !== null) {
		xo = !0;
		var e = 0,
			t = q;
		try {
			var n = jt;
			for (q = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(jt = null), (zi = !1);
		} catch (l) {
			throw (jt !== null && (jt = jt.slice(e + 1)), nd(Va, un), l);
		} finally {
			(q = t), (xo = !1);
		}
	}
	return null;
}
var $n = [],
	Wn = 0,
	mi = null,
	vi = 0,
	Ze = [],
	be = 0,
	xn = null,
	Pt = 1,
	Rt = '';
function cn(e, t) {
	($n[Wn++] = vi), ($n[Wn++] = mi), (mi = e), (vi = t);
}
function Od(e, t, n) {
	(Ze[be++] = Pt), (Ze[be++] = Rt), (Ze[be++] = xn), (xn = e);
	var r = Pt;
	e = Rt;
	var l = 32 - dt(r) - 1;
	(r &= ~(1 << l)), (n += 1);
	var i = 32 - dt(t) + l;
	if (30 < i) {
		var o = l - (l % 5);
		(i = (r & ((1 << o) - 1)).toString(32)),
			(r >>= o),
			(l -= o),
			(Pt = (1 << (32 - dt(t) + l)) | (n << l) | r),
			(Rt = i + e);
	} else (Pt = (1 << i) | (n << l) | r), (Rt = e);
}
function ba(e) {
	e.return !== null && (cn(e, 1), Od(e, 1, 0));
}
function eu(e) {
	for (; e === mi; )
		(mi = $n[--Wn]), ($n[Wn] = null), (vi = $n[--Wn]), ($n[Wn] = null);
	for (; e === xn; )
		(xn = Ze[--be]),
			(Ze[be] = null),
			(Rt = Ze[--be]),
			(Ze[be] = null),
			(Pt = Ze[--be]),
			(Ze[be] = null);
}
var Ye = null,
	Qe = null,
	ie = !1,
	st = null;
function Md(e, t) {
	var n = et(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Cs(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (Ye = e), (Qe = Jt(t.firstChild)), !0)
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
					? ((n = xn !== null ? { id: Pt, overflow: Rt } : null),
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
function oa(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function aa(e) {
	if (ie) {
		var t = Qe;
		if (t) {
			var n = t;
			if (!Cs(e, t)) {
				if (oa(e)) throw Error(T(418));
				t = Jt(n.nextSibling);
				var r = Ye;
				t && Cs(e, t)
					? Md(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ye = e));
			}
		} else {
			if (oa(e)) throw Error(T(418));
			(e.flags = (e.flags & -4097) | 2), (ie = !1), (Ye = e);
		}
	}
}
function Ts(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	Ye = e;
}
function Il(e) {
	if (e !== Ye) return !1;
	if (!ie) return Ts(e), (ie = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !na(e.type, e.memoizedProps))),
		t && (t = Qe))
	) {
		if (oa(e)) throw (Dd(), Error(T(418)));
		for (; t; ) Md(e, t), (t = Jt(t.nextSibling));
	}
	if ((Ts(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(T(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === '/$') {
						if (t === 0) {
							Qe = Jt(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			Qe = null;
		}
	} else Qe = Ye ? Jt(e.stateNode.nextSibling) : null;
	return !0;
}
function Dd() {
	for (var e = Qe; e; ) e = Jt(e.nextSibling);
}
function ir() {
	(Qe = Ye = null), (ie = !1);
}
function tu(e) {
	st === null ? (st = [e]) : st.push(e);
}
var sm = At.ReactCurrentBatchConfig;
function ot(e, t) {
	if (e && e.defaultProps) {
		(t = se({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var gi = an(null),
	yi = null,
	Vn = null,
	nu = null;
function ru() {
	nu = Vn = yi = null;
}
function lu(e) {
	var t = gi.current;
	b(gi), (e._currentValue = t);
}
function ua(e, t, n) {
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
	(yi = e),
		(nu = Vn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Fe = !0), (e.firstContext = null));
}
function nt(e) {
	var t = e._currentValue;
	if (nu !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
			if (yi === null) throw Error(T(308));
			(Vn = e), (yi.dependencies = { lanes: 0, firstContext: e });
		} else Vn = Vn.next = e;
	return t;
}
var pn = null;
function iu(e) {
	pn === null ? (pn = [e]) : pn.push(e);
}
function Ad(e, t, n, r) {
	var l = t.interleaved;
	return (
		l === null ? ((n.next = n), iu(t)) : ((n.next = l.next), (l.next = n)),
		(t.interleaved = n),
		Mt(e, r)
	);
}
function Mt(e, t) {
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
var Wt = !1;
function ou(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function zd(e, t) {
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
function Zt(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), Y & 2)) {
		var l = r.pending;
		return (
			l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
			(r.pending = t),
			Mt(e, n)
		);
	}
	return (
		(l = r.interleaved),
		l === null ? ((t.next = t), iu(r)) : ((t.next = l.next), (l.next = t)),
		(r.interleaved = t),
		Mt(e, n)
	);
}
function Gl(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Qa(e, n);
	}
}
function js(e, t) {
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
function wi(e, t, n, r) {
	var l = e.updateQueue;
	Wt = !1;
	var i = l.firstBaseUpdate,
		o = l.lastBaseUpdate,
		a = l.shared.pending;
	if (a !== null) {
		l.shared.pending = null;
		var u = a,
			s = u.next;
		(u.next = null), o === null ? (i = s) : (o.next = s), (o = u);
		var c = e.alternate;
		c !== null &&
			((c = c.updateQueue),
			(a = c.lastBaseUpdate),
			a !== o &&
				(a === null ? (c.firstBaseUpdate = s) : (a.next = s),
				(c.lastBaseUpdate = u)));
	}
	if (i !== null) {
		var m = l.baseState;
		(o = 0), (c = s = u = null), (a = i);
		do {
			var v = a.lane,
				y = a.eventTime;
			if ((r & v) === v) {
				c !== null &&
					(c = c.next =
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
								m = x.call(y, m, v);
								break e;
							}
							m = x;
							break e;
						case 3:
							x.flags = (x.flags & -65537) | 128;
						case 0:
							if (
								((x = w.payload),
								(v = typeof x == 'function' ? x.call(y, m, v) : x),
								v == null)
							)
								break e;
							m = se({}, m, v);
							break e;
						case 2:
							Wt = !0;
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
					c === null ? ((s = c = y), (u = m)) : (c = c.next = y),
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
			(c === null && (u = m),
			(l.baseState = u),
			(l.firstBaseUpdate = s),
			(l.lastBaseUpdate = c),
			(t = l.shared.interleaved),
			t !== null)
		) {
			l = t;
			do (o |= l.lane), (l = l.next);
			while (l !== t);
		} else i === null && (l.shared.lanes = 0);
		(En |= o), (e.lanes = o), (e.memoizedState = m);
	}
}
function Ps(e, t, n) {
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
var Id = new Ac.Component().refs;
function sa(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : se({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ii = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? jn(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = Oe(),
			l = en(e),
			i = _t(r, l);
		(i.payload = t),
			n != null && (i.callback = n),
			(t = Zt(e, i, l)),
			t !== null && (ft(t, e, l, r), Gl(t, e, l));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = Oe(),
			l = en(e),
			i = _t(r, l);
		(i.tag = 1),
			(i.payload = t),
			n != null && (i.callback = n),
			(t = Zt(e, i, l)),
			t !== null && (ft(t, e, l, r), Gl(t, e, l));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = Oe(),
			r = en(e),
			l = _t(n, r);
		(l.tag = 2),
			t != null && (l.callback = t),
			(t = Zt(e, l, r)),
			t !== null && (ft(t, e, r, n), Gl(t, e, r));
	},
};
function Rs(e, t, n, r, l, i, o) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, i, o)
			: t.prototype && t.prototype.isPureReactComponent
			? !el(n, r) || !el(l, i)
			: !0
	);
}
function Fd(e, t, n) {
	var r = !1,
		l = ln,
		i = t.contextType;
	return (
		typeof i == 'object' && i !== null
			? (i = nt(i))
			: ((l = He(t) ? wn : _e.current),
			  (r = t.contextTypes),
			  (i = (r = r != null) ? lr(e, l) : ln)),
		(t = new t(n, i)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Ii),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = l),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		t
	);
}
function _s(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Ii.enqueueReplaceState(t, t.state, null);
}
function ca(e, t, n, r) {
	var l = e.stateNode;
	(l.props = n), (l.state = e.memoizedState), (l.refs = Id), ou(e);
	var i = t.contextType;
	typeof i == 'object' && i !== null
		? (l.context = nt(i))
		: ((i = He(t) ? wn : _e.current), (l.context = lr(e, i))),
		(l.state = e.memoizedState),
		(i = t.getDerivedStateFromProps),
		typeof i == 'function' && (sa(e, t, i, n), (l.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof l.getSnapshotBeforeUpdate == 'function' ||
			(typeof l.UNSAFE_componentWillMount != 'function' &&
				typeof l.componentWillMount != 'function') ||
			((t = l.state),
			typeof l.componentWillMount == 'function' && l.componentWillMount(),
			typeof l.UNSAFE_componentWillMount == 'function' &&
				l.UNSAFE_componentWillMount(),
			t !== l.state && Ii.enqueueReplaceState(l, l.state, null),
			wi(e, n, l, r),
			(l.state = e.memoizedState)),
		typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Cr(e, t, n) {
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
						a === Id && (a = l.refs = {}),
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
function Fl(e, t) {
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
function Ns(e) {
	var t = e._init;
	return t(e._payload);
}
function Ud(e) {
	function t(h, f) {
		if (e) {
			var g = h.deletions;
			g === null ? ((h.deletions = [f]), (h.flags |= 16)) : g.push(f);
		}
	}
	function n(h, f) {
		if (!e) return null;
		for (; f !== null; ) t(h, f), (f = f.sibling);
		return null;
	}
	function r(h, f) {
		for (h = new Map(); f !== null; )
			f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
		return h;
	}
	function l(h, f) {
		return (h = tn(h, f)), (h.index = 0), (h.sibling = null), h;
	}
	function i(h, f, g) {
		return (
			(h.index = g),
			e
				? ((g = h.alternate),
				  g !== null
						? ((g = g.index), g < f ? ((h.flags |= 2), f) : g)
						: ((h.flags |= 2), f))
				: ((h.flags |= 1048576), f)
		);
	}
	function o(h) {
		return e && h.alternate === null && (h.flags |= 2), h;
	}
	function a(h, f, g, p) {
		return f === null || f.tag !== 6
			? ((f = Po(g, h.mode, p)), (f.return = h), f)
			: ((f = l(f, g)), (f.return = h), f);
	}
	function u(h, f, g, p) {
		var C = g.type;
		return C === zn
			? c(h, f, g.props.children, p, g.key)
			: f !== null &&
			  (f.elementType === C ||
					(typeof C == 'object' &&
						C !== null &&
						C.$$typeof === $t &&
						Ns(C) === f.type))
			? ((p = l(f, g.props)), (p.ref = Cr(h, f, g)), (p.return = h), p)
			: ((p = ti(g.type, g.key, g.props, null, h.mode, p)),
			  (p.ref = Cr(h, f, g)),
			  (p.return = h),
			  p);
	}
	function s(h, f, g, p) {
		return f === null ||
			f.tag !== 4 ||
			f.stateNode.containerInfo !== g.containerInfo ||
			f.stateNode.implementation !== g.implementation
			? ((f = Ro(g, h.mode, p)), (f.return = h), f)
			: ((f = l(f, g.children || [])), (f.return = h), f);
	}
	function c(h, f, g, p, C) {
		return f === null || f.tag !== 7
			? ((f = gn(g, h.mode, p, C)), (f.return = h), f)
			: ((f = l(f, g)), (f.return = h), f);
	}
	function m(h, f, g) {
		if ((typeof f == 'string' && f !== '') || typeof f == 'number')
			return (f = Po('' + f, h.mode, g)), (f.return = h), f;
		if (typeof f == 'object' && f !== null) {
			switch (f.$$typeof) {
				case Pl:
					return (
						(g = ti(f.type, f.key, f.props, null, h.mode, g)),
						(g.ref = Cr(h, null, f)),
						(g.return = h),
						g
					);
				case An:
					return (f = Ro(f, h.mode, g)), (f.return = h), f;
				case $t:
					var p = f._init;
					return m(h, p(f._payload), g);
			}
			if (Dr(f) || wr(f))
				return (f = gn(f, h.mode, g, null)), (f.return = h), f;
			Fl(h, f);
		}
		return null;
	}
	function v(h, f, g, p) {
		var C = f !== null ? f.key : null;
		if ((typeof g == 'string' && g !== '') || typeof g == 'number')
			return C !== null ? null : a(h, f, '' + g, p);
		if (typeof g == 'object' && g !== null) {
			switch (g.$$typeof) {
				case Pl:
					return g.key === C ? u(h, f, g, p) : null;
				case An:
					return g.key === C ? s(h, f, g, p) : null;
				case $t:
					return (C = g._init), v(h, f, C(g._payload), p);
			}
			if (Dr(g) || wr(g)) return C !== null ? null : c(h, f, g, p, null);
			Fl(h, g);
		}
		return null;
	}
	function y(h, f, g, p, C) {
		if ((typeof p == 'string' && p !== '') || typeof p == 'number')
			return (h = h.get(g) || null), a(f, h, '' + p, C);
		if (typeof p == 'object' && p !== null) {
			switch (p.$$typeof) {
				case Pl:
					return (h = h.get(p.key === null ? g : p.key) || null), u(f, h, p, C);
				case An:
					return (h = h.get(p.key === null ? g : p.key) || null), s(f, h, p, C);
				case $t:
					var _ = p._init;
					return y(h, f, g, _(p._payload), C);
			}
			if (Dr(p) || wr(p)) return (h = h.get(g) || null), c(f, h, p, C, null);
			Fl(f, p);
		}
		return null;
	}
	function x(h, f, g, p) {
		for (
			var C = null, _ = null, R = f, O = (f = 0), Q = null;
			R !== null && O < g.length;
			O++
		) {
			R.index > O ? ((Q = R), (R = null)) : (Q = R.sibling);
			var U = v(h, R, g[O], p);
			if (U === null) {
				R === null && (R = Q);
				break;
			}
			e && R && U.alternate === null && t(h, R),
				(f = i(U, f, O)),
				_ === null ? (C = U) : (_.sibling = U),
				(_ = U),
				(R = Q);
		}
		if (O === g.length) return n(h, R), ie && cn(h, O), C;
		if (R === null) {
			for (; O < g.length; O++)
				(R = m(h, g[O], p)),
					R !== null &&
						((f = i(R, f, O)), _ === null ? (C = R) : (_.sibling = R), (_ = R));
			return ie && cn(h, O), C;
		}
		for (R = r(h, R); O < g.length; O++)
			(Q = y(R, h, O, g[O], p)),
				Q !== null &&
					(e && Q.alternate !== null && R.delete(Q.key === null ? O : Q.key),
					(f = i(Q, f, O)),
					_ === null ? (C = Q) : (_.sibling = Q),
					(_ = Q));
		return (
			e &&
				R.forEach(function (Se) {
					return t(h, Se);
				}),
			ie && cn(h, O),
			C
		);
	}
	function w(h, f, g, p) {
		var C = wr(g);
		if (typeof C != 'function') throw Error(T(150));
		if (((g = C.call(g)), g == null)) throw Error(T(151));
		for (
			var _ = (C = null), R = f, O = (f = 0), Q = null, U = g.next();
			R !== null && !U.done;
			O++, U = g.next()
		) {
			R.index > O ? ((Q = R), (R = null)) : (Q = R.sibling);
			var Se = v(h, R, U.value, p);
			if (Se === null) {
				R === null && (R = Q);
				break;
			}
			e && R && Se.alternate === null && t(h, R),
				(f = i(Se, f, O)),
				_ === null ? (C = Se) : (_.sibling = Se),
				(_ = Se),
				(R = Q);
		}
		if (U.done) return n(h, R), ie && cn(h, O), C;
		if (R === null) {
			for (; !U.done; O++, U = g.next())
				(U = m(h, U.value, p)),
					U !== null &&
						((f = i(U, f, O)), _ === null ? (C = U) : (_.sibling = U), (_ = U));
			return ie && cn(h, O), C;
		}
		for (R = r(h, R); !U.done; O++, U = g.next())
			(U = y(R, h, O, U.value, p)),
				U !== null &&
					(e && U.alternate !== null && R.delete(U.key === null ? O : U.key),
					(f = i(U, f, O)),
					_ === null ? (C = U) : (_.sibling = U),
					(_ = U));
		return (
			e &&
				R.forEach(function (G) {
					return t(h, G);
				}),
			ie && cn(h, O),
			C
		);
	}
	function j(h, f, g, p) {
		if (
			(typeof g == 'object' &&
				g !== null &&
				g.type === zn &&
				g.key === null &&
				(g = g.props.children),
			typeof g == 'object' && g !== null)
		) {
			switch (g.$$typeof) {
				case Pl:
					e: {
						for (var C = g.key, _ = f; _ !== null; ) {
							if (_.key === C) {
								if (((C = g.type), C === zn)) {
									if (_.tag === 7) {
										n(h, _.sibling),
											(f = l(_, g.props.children)),
											(f.return = h),
											(h = f);
										break e;
									}
								} else if (
									_.elementType === C ||
									(typeof C == 'object' &&
										C !== null &&
										C.$$typeof === $t &&
										Ns(C) === _.type)
								) {
									n(h, _.sibling),
										(f = l(_, g.props)),
										(f.ref = Cr(h, _, g)),
										(f.return = h),
										(h = f);
									break e;
								}
								n(h, _);
								break;
							} else t(h, _);
							_ = _.sibling;
						}
						g.type === zn
							? ((f = gn(g.props.children, h.mode, p, g.key)),
							  (f.return = h),
							  (h = f))
							: ((p = ti(g.type, g.key, g.props, null, h.mode, p)),
							  (p.ref = Cr(h, f, g)),
							  (p.return = h),
							  (h = p));
					}
					return o(h);
				case An:
					e: {
						for (_ = g.key; f !== null; ) {
							if (f.key === _)
								if (
									f.tag === 4 &&
									f.stateNode.containerInfo === g.containerInfo &&
									f.stateNode.implementation === g.implementation
								) {
									n(h, f.sibling),
										(f = l(f, g.children || [])),
										(f.return = h),
										(h = f);
									break e;
								} else {
									n(h, f);
									break;
								}
							else t(h, f);
							f = f.sibling;
						}
						(f = Ro(g, h.mode, p)), (f.return = h), (h = f);
					}
					return o(h);
				case $t:
					return (_ = g._init), j(h, f, _(g._payload), p);
			}
			if (Dr(g)) return x(h, f, g, p);
			if (wr(g)) return w(h, f, g, p);
			Fl(h, g);
		}
		return (typeof g == 'string' && g !== '') || typeof g == 'number'
			? ((g = '' + g),
			  f !== null && f.tag === 6
					? (n(h, f.sibling), (f = l(f, g)), (f.return = h), (h = f))
					: (n(h, f), (f = Po(g, h.mode, p)), (f.return = h), (h = f)),
			  o(h))
			: n(h, f);
	}
	return j;
}
var or = Ud(!0),
	Bd = Ud(!1),
	wl = {},
	St = an(wl),
	ll = an(wl),
	il = an(wl);
function hn(e) {
	if (e === wl) throw Error(T(174));
	return e;
}
function au(e, t) {
	switch ((J(il, t), J(ll, e), J(St, wl), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : $o(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = $o(t, e));
	}
	b(St), J(St, t);
}
function ar() {
	b(St), b(ll), b(il);
}
function Hd(e) {
	hn(il.current);
	var t = hn(St.current),
		n = $o(t, e.type);
	t !== n && (J(ll, e), J(St, n));
}
function uu(e) {
	ll.current === e && (b(St), b(ll));
}
var ae = an(0);
function xi(e) {
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
var So = [];
function su() {
	for (var e = 0; e < So.length; e++)
		So[e]._workInProgressVersionPrimary = null;
	So.length = 0;
}
var Xl = At.ReactCurrentDispatcher,
	Eo = At.ReactCurrentBatchConfig,
	Sn = 0,
	ue = null,
	ve = null,
	we = null,
	Si = !1,
	$r = !1,
	ol = 0,
	cm = 0;
function je() {
	throw Error(T(321));
}
function cu(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!pt(e[n], t[n])) return !1;
	return !0;
}
function du(e, t, n, r, l, i) {
	if (
		((Sn = i),
		(ue = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Xl.current = e === null || e.memoizedState === null ? hm : mm),
		(e = n(r, l)),
		$r)
	) {
		i = 0;
		do {
			if ((($r = !1), (ol = 0), 25 <= i)) throw Error(T(301));
			(i += 1),
				(we = ve = null),
				(t.updateQueue = null),
				(Xl.current = vm),
				(e = n(r, l));
		} while ($r);
	}
	if (
		((Xl.current = Ei),
		(t = ve !== null && ve.next !== null),
		(Sn = 0),
		(we = ve = ue = null),
		(Si = !1),
		t)
	)
		throw Error(T(300));
	return e;
}
function fu() {
	var e = ol !== 0;
	return (ol = 0), e;
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
		if (e === null) throw Error(T(310));
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
function al(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function ko(e) {
	var t = rt(),
		n = t.queue;
	if (n === null) throw Error(T(311));
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
			var c = s.lane;
			if ((Sn & c) === c)
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
				var m = {
					lane: c,
					action: s.action,
					hasEagerState: s.hasEagerState,
					eagerState: s.eagerState,
					next: null,
				};
				u === null ? ((a = u = m), (o = r)) : (u = u.next = m),
					(ue.lanes |= c),
					(En |= c);
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
function Co(e) {
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
function $d() {}
function Wd(e, t) {
	var n = ue,
		r = rt(),
		l = t(),
		i = !pt(r.memoizedState, l);
	if (
		(i && ((r.memoizedState = l), (Fe = !0)),
		(r = r.queue),
		pu(Yd.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || i || (we !== null && we.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			ul(9, Qd.bind(null, n, r, l, t), void 0, null),
			xe === null)
		)
			throw Error(T(349));
		Sn & 30 || Vd(n, t, l);
	}
	return l;
}
function Vd(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = ue.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (ue.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Qd(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), Kd(t) && qd(e);
}
function Yd(e, t, n) {
	return n(function () {
		Kd(t) && qd(e);
	});
}
function Kd(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !pt(e, n);
	} catch {
		return !0;
	}
}
function qd(e) {
	var t = Mt(e, 1);
	t !== null && ft(t, e, 1, -1);
}
function Ls(e) {
	var t = yt();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: al,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = pm.bind(null, ue, e)),
		[t.memoizedState, e]
	);
}
function ul(e, t, n, r) {
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
function Gd() {
	return rt().memoizedState;
}
function Jl(e, t, n, r) {
	var l = yt();
	(ue.flags |= e),
		(l.memoizedState = ul(1 | t, n, void 0, r === void 0 ? null : r));
}
function Fi(e, t, n, r) {
	var l = rt();
	r = r === void 0 ? null : r;
	var i = void 0;
	if (ve !== null) {
		var o = ve.memoizedState;
		if (((i = o.destroy), r !== null && cu(r, o.deps))) {
			l.memoizedState = ul(t, n, i, r);
			return;
		}
	}
	(ue.flags |= e), (l.memoizedState = ul(1 | t, n, i, r));
}
function Os(e, t) {
	return Jl(8390656, 8, e, t);
}
function pu(e, t) {
	return Fi(2048, 8, e, t);
}
function Xd(e, t) {
	return Fi(4, 2, e, t);
}
function Jd(e, t) {
	return Fi(4, 4, e, t);
}
function Zd(e, t) {
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
function bd(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Fi(4, 4, Zd.bind(null, t, e), n)
	);
}
function hu() {}
function ef(e, t) {
	var n = rt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && cu(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function tf(e, t) {
	var n = rt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && cu(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function nf(e, t, n) {
	return Sn & 21
		? (pt(n, t) || ((n = id()), (ue.lanes |= n), (En |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n));
}
function dm(e, t) {
	var n = q;
	(q = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = Eo.transition;
	Eo.transition = {};
	try {
		e(!1), t();
	} finally {
		(q = n), (Eo.transition = r);
	}
}
function rf() {
	return rt().memoizedState;
}
function fm(e, t, n) {
	var r = en(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		lf(e))
	)
		of(t, n);
	else if (((n = Ad(e, t, n, r)), n !== null)) {
		var l = Oe();
		ft(n, e, r, l), af(n, t, r);
	}
}
function pm(e, t, n) {
	var r = en(e),
		l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (lf(e)) of(t, l);
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
						? ((l.next = l), iu(t))
						: ((l.next = u.next), (u.next = l)),
						(t.interleaved = l);
					return;
				}
			} catch {
			} finally {
			}
		(n = Ad(e, t, l, r)),
			n !== null && ((l = Oe()), ft(n, e, r, l), af(n, t, r));
	}
}
function lf(e) {
	var t = e.alternate;
	return e === ue || (t !== null && t === ue);
}
function of(e, t) {
	$r = Si = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function af(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Qa(e, n);
	}
}
var Ei = {
		readContext: nt,
		useCallback: je,
		useContext: je,
		useEffect: je,
		useImperativeHandle: je,
		useInsertionEffect: je,
		useLayoutEffect: je,
		useMemo: je,
		useReducer: je,
		useRef: je,
		useState: je,
		useDebugValue: je,
		useDeferredValue: je,
		useTransition: je,
		useMutableSource: je,
		useSyncExternalStore: je,
		useId: je,
		unstable_isNewReconciler: !1,
	},
	hm = {
		readContext: nt,
		useCallback: function (e, t) {
			return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: nt,
		useEffect: Os,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Jl(4194308, 4, Zd.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Jl(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Jl(4, 2, e, t);
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
				(e = e.dispatch = fm.bind(null, ue, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = yt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: Ls,
		useDebugValue: hu,
		useDeferredValue: function (e) {
			return (yt().memoizedState = e);
		},
		useTransition: function () {
			var e = Ls(!1),
				t = e[0];
			return (e = dm.bind(null, e[1])), (yt().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = ue,
				l = yt();
			if (ie) {
				if (n === void 0) throw Error(T(407));
				n = n();
			} else {
				if (((n = t()), xe === null)) throw Error(T(349));
				Sn & 30 || Vd(r, t, n);
			}
			l.memoizedState = n;
			var i = { value: n, getSnapshot: t };
			return (
				(l.queue = i),
				Os(Yd.bind(null, r, i, e), [e]),
				(r.flags |= 2048),
				ul(9, Qd.bind(null, r, i, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = yt(),
				t = xe.identifierPrefix;
			if (ie) {
				var n = Rt,
					r = Pt;
				(n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = ol++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':');
			} else (n = cm++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	mm = {
		readContext: nt,
		useCallback: ef,
		useContext: nt,
		useEffect: pu,
		useImperativeHandle: bd,
		useInsertionEffect: Xd,
		useLayoutEffect: Jd,
		useMemo: tf,
		useReducer: ko,
		useRef: Gd,
		useState: function () {
			return ko(al);
		},
		useDebugValue: hu,
		useDeferredValue: function (e) {
			var t = rt();
			return nf(t, ve.memoizedState, e);
		},
		useTransition: function () {
			var e = ko(al)[0],
				t = rt().memoizedState;
			return [e, t];
		},
		useMutableSource: $d,
		useSyncExternalStore: Wd,
		useId: rf,
		unstable_isNewReconciler: !1,
	},
	vm = {
		readContext: nt,
		useCallback: ef,
		useContext: nt,
		useEffect: pu,
		useImperativeHandle: bd,
		useInsertionEffect: Xd,
		useLayoutEffect: Jd,
		useMemo: tf,
		useReducer: Co,
		useRef: Gd,
		useState: function () {
			return Co(al);
		},
		useDebugValue: hu,
		useDeferredValue: function (e) {
			var t = rt();
			return ve === null ? (t.memoizedState = e) : nf(t, ve.memoizedState, e);
		},
		useTransition: function () {
			var e = Co(al)[0],
				t = rt().memoizedState;
			return [e, t];
		},
		useMutableSource: $d,
		useSyncExternalStore: Wd,
		useId: rf,
		unstable_isNewReconciler: !1,
	};
function ur(e, t) {
	try {
		var n = '',
			r = t;
		do (n += Vp(r)), (r = r.return);
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
function To(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function da(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var gm = typeof WeakMap == 'function' ? WeakMap : Map;
function uf(e, t, n) {
	(n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			Ci || ((Ci = !0), (Sa = r)), da(e, t);
		}),
		n
	);
}
function sf(e, t, n) {
	(n = _t(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var l = t.value;
		(n.payload = function () {
			return r(l);
		}),
			(n.callback = function () {
				da(e, t);
			});
	}
	var i = e.stateNode;
	return (
		i !== null &&
			typeof i.componentDidCatch == 'function' &&
			(n.callback = function () {
				da(e, t),
					typeof r != 'function' &&
						(bt === null ? (bt = new Set([this])) : bt.add(this));
				var o = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: o !== null ? o : '',
				});
			}),
		n
	);
}
function Ms(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new gm();
		var l = new Set();
		r.set(t, l);
	} else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
	l.has(n) || (l.add(n), (e = Lm.bind(null, e, t, n)), t.then(e, e));
}
function Ds(e) {
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
function As(e, t, n, r, l) {
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
							: ((t = _t(-1, 1)), (t.tag = 2), Zt(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var ym = At.ReactCurrentOwner,
	Fe = !1;
function Ne(e, t, n, r) {
	t.child = e === null ? Bd(t, null, n, r) : or(t, e.child, n, r);
}
function zs(e, t, n, r, l) {
	n = n.render;
	var i = t.ref;
	return (
		bn(t, l),
		(r = du(e, t, n, r, i, l)),
		(n = fu()),
		e !== null && !Fe
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  Dt(e, t, l))
			: (ie && n && ba(t), (t.flags |= 1), Ne(e, t, r, l), t.child)
	);
}
function Is(e, t, n, r, l) {
	if (e === null) {
		var i = n.type;
		return typeof i == 'function' &&
			!Eu(i) &&
			i.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = i), cf(e, t, i, r, l))
			: ((e = ti(n.type, null, r, t, t.mode, l)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((i = e.child), !(e.lanes & l))) {
		var o = i.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : el), n(o, r) && e.ref === t.ref)
		)
			return Dt(e, t, l);
	}
	return (
		(t.flags |= 1),
		(e = tn(i, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function cf(e, t, n, r, l) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (el(i, r) && e.ref === t.ref)
			if (((Fe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
				e.flags & 131072 && (Fe = !0);
			else return (t.lanes = e.lanes), Dt(e, t, l);
	}
	return fa(e, t, n, r, l);
}
function df(e, t, n) {
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
	return Ne(e, t, l, n), t.child;
}
function ff(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function fa(e, t, n, r, l) {
	var i = He(n) ? wn : _e.current;
	return (
		(i = lr(t, i)),
		bn(t, l),
		(n = du(e, t, n, r, i, l)),
		(r = fu()),
		e !== null && !Fe
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  Dt(e, t, l))
			: (ie && r && ba(t), (t.flags |= 1), Ne(e, t, n, l), t.child)
	);
}
function Fs(e, t, n, r, l) {
	if (He(n)) {
		var i = !0;
		hi(t);
	} else i = !1;
	if ((bn(t, l), t.stateNode === null))
		Zl(e, t), Fd(t, n, r), ca(t, n, r, l), (r = !0);
	else if (e === null) {
		var o = t.stateNode,
			a = t.memoizedProps;
		o.props = a;
		var u = o.context,
			s = n.contextType;
		typeof s == 'object' && s !== null
			? (s = nt(s))
			: ((s = He(n) ? wn : _e.current), (s = lr(t, s)));
		var c = n.getDerivedStateFromProps,
			m =
				typeof c == 'function' ||
				typeof o.getSnapshotBeforeUpdate == 'function';
		m ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((a !== r || u !== s) && _s(t, o, r, s)),
			(Wt = !1);
		var v = t.memoizedState;
		(o.state = v),
			wi(t, r, o, l),
			(u = t.memoizedState),
			a !== r || v !== u || Be.current || Wt
				? (typeof c == 'function' && (sa(t, n, c, r), (u = t.memoizedState)),
				  (a = Wt || Rs(t, n, a, r, v, u, s))
						? (m ||
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
			zd(e, t),
			(a = t.memoizedProps),
			(s = t.type === t.elementType ? a : ot(t.type, a)),
			(o.props = s),
			(m = t.pendingProps),
			(v = o.context),
			(u = n.contextType),
			typeof u == 'object' && u !== null
				? (u = nt(u))
				: ((u = He(n) ? wn : _e.current), (u = lr(t, u)));
		var y = n.getDerivedStateFromProps;
		(c =
			typeof y == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function') ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((a !== m || v !== u) && _s(t, o, r, u)),
			(Wt = !1),
			(v = t.memoizedState),
			(o.state = v),
			wi(t, r, o, l);
		var x = t.memoizedState;
		a !== m || v !== x || Be.current || Wt
			? (typeof y == 'function' && (sa(t, n, y, r), (x = t.memoizedState)),
			  (s = Wt || Rs(t, n, s, r, v, x, u) || !1)
					? (c ||
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
	return pa(e, t, n, r, i, l);
}
function pa(e, t, n, r, l, i) {
	ff(e, t);
	var o = (t.flags & 128) !== 0;
	if (!r && !o) return l && ks(t, n, !1), Dt(e, t, i);
	(r = t.stateNode), (ym.current = t);
	var a =
		o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && o
			? ((t.child = or(t, e.child, null, i)), (t.child = or(t, null, a, i)))
			: Ne(e, t, a, i),
		(t.memoizedState = r.state),
		l && ks(t, n, !0),
		t.child
	);
}
function pf(e) {
	var t = e.stateNode;
	t.pendingContext
		? Es(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Es(e, t.context, !1),
		au(e, t.containerInfo);
}
function Us(e, t, n, r, l) {
	return ir(), tu(l), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var ha = { dehydrated: null, treeContext: null, retryLane: 0 };
function ma(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function hf(e, t, n) {
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
			aa(t),
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
								: (i = Hi(o, r, 0, null)),
						  (e = gn(e, r, n, null)),
						  (i.return = t),
						  (e.return = t),
						  (i.sibling = e),
						  (t.child = i),
						  (t.child.memoizedState = ma(n)),
						  (t.memoizedState = ha),
						  e)
						: mu(t, o))
		);
	if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
		return wm(e, t, o, r, a, l, n);
	if (i) {
		(i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
		var u = { mode: 'hidden', children: r.children };
		return (
			!(o & 1) && t.child !== l
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = u),
				  (t.deletions = null))
				: ((r = tn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
			a !== null ? (i = tn(a, i)) : ((i = gn(i, o, n, null)), (i.flags |= 2)),
			(i.return = t),
			(r.return = t),
			(r.sibling = i),
			(t.child = r),
			(r = i),
			(i = t.child),
			(o = e.child.memoizedState),
			(o =
				o === null
					? ma(n)
					: {
							baseLanes: o.baseLanes | n,
							cachePool: null,
							transitions: o.transitions,
					  }),
			(i.memoizedState = o),
			(i.childLanes = e.childLanes & ~n),
			(t.memoizedState = ha),
			r
		);
	}
	return (
		(i = e.child),
		(e = i.sibling),
		(r = tn(i, { mode: 'visible', children: r.children })),
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
function mu(e, t) {
	return (
		(t = Hi({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function Ul(e, t, n, r) {
	return (
		r !== null && tu(r),
		or(t, e.child, null, n),
		(e = mu(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function wm(e, t, n, r, l, i, o) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = To(Error(T(422)))), Ul(e, t, o, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((i = r.fallback),
			  (l = t.mode),
			  (r = Hi({ mode: 'visible', children: r.children }, l, 0, null)),
			  (i = gn(i, l, o, null)),
			  (i.flags |= 2),
			  (r.return = t),
			  (i.return = t),
			  (r.sibling = i),
			  (t.child = r),
			  t.mode & 1 && or(t, e.child, null, o),
			  (t.child.memoizedState = ma(o)),
			  (t.memoizedState = ha),
			  i);
	if (!(t.mode & 1)) return Ul(e, t, o, null);
	if (l.data === '$!') {
		if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
		return (r = a), (i = Error(T(419))), (r = To(i, r, void 0)), Ul(e, t, o, r);
	}
	if (((a = (o & e.childLanes) !== 0), Fe || a)) {
		if (((r = xe), r !== null)) {
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
					((i.retryLane = l), Mt(e, l), ft(r, e, l, -1));
		}
		return Su(), (r = To(Error(T(421)))), Ul(e, t, o, r);
	}
	return l.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = Om.bind(null, e)),
		  (l._reactRetry = t),
		  null)
		: ((e = i.treeContext),
		  (Qe = Jt(l.nextSibling)),
		  (Ye = t),
		  (ie = !0),
		  (st = null),
		  e !== null &&
				((Ze[be++] = Pt),
				(Ze[be++] = Rt),
				(Ze[be++] = xn),
				(Pt = e.id),
				(Rt = e.overflow),
				(xn = t)),
		  (t = mu(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function Bs(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), ua(e.return, t, n);
}
function jo(e, t, n, r, l) {
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
function mf(e, t, n) {
	var r = t.pendingProps,
		l = r.revealOrder,
		i = r.tail;
	if ((Ne(e, t, r.children, n), (r = ae.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Bs(e, n, t);
				else if (e.tag === 19) Bs(e, n, t);
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
						e !== null && xi(e) === null && (l = n),
						(n = n.sibling);
				(n = l),
					n === null
						? ((l = t.child), (t.child = null))
						: ((l = n.sibling), (n.sibling = null)),
					jo(t, !1, l, n, i);
				break;
			case 'backwards':
				for (n = null, l = t.child, t.child = null; l !== null; ) {
					if (((e = l.alternate), e !== null && xi(e) === null)) {
						t.child = l;
						break;
					}
					(e = l.sibling), (l.sibling = n), (n = l), (l = e);
				}
				jo(t, !0, n, null, i);
				break;
			case 'together':
				jo(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Zl(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Dt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(En |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(T(153));
	if (t.child !== null) {
		for (
			e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = tn(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function xm(e, t, n) {
	switch (t.tag) {
		case 3:
			pf(t), ir();
			break;
		case 5:
			Hd(t);
			break;
		case 1:
			He(t.type) && hi(t);
			break;
		case 4:
			au(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				l = t.memoizedProps.value;
			J(gi, r._currentValue), (r._currentValue = l);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (J(ae, ae.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? hf(e, t, n)
					: (J(ae, ae.current & 1),
					  (e = Dt(e, t, n)),
					  e !== null ? e.sibling : null);
			J(ae, ae.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return mf(e, t, n);
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
			return (t.lanes = 0), df(e, t, n);
	}
	return Dt(e, t, n);
}
var vf, va, gf, yf;
vf = function (e, t) {
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
va = function () {};
gf = function (e, t, n, r) {
	var l = e.memoizedProps;
	if (l !== r) {
		(e = t.stateNode), hn(St.current);
		var i = null;
		switch (n) {
			case 'input':
				(l = Fo(e, l)), (r = Fo(e, r)), (i = []);
				break;
			case 'select':
				(l = se({}, l, { value: void 0 })),
					(r = se({}, r, { value: void 0 })),
					(i = []);
				break;
			case 'textarea':
				(l = Ho(e, l)), (r = Ho(e, r)), (i = []);
				break;
			default:
				typeof l.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = fi);
		}
		Wo(n, r);
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
						(Kr.hasOwnProperty(s)
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
						  (Kr.hasOwnProperty(s)
								? (u != null && s === 'onScroll' && Z('scroll', e),
								  i || a === u || (i = []))
								: (i = i || []).push(s, u));
		}
		n && (i = i || []).push('style', n);
		var s = i;
		(t.updateQueue = s) && (t.flags |= 4);
	}
};
yf = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Tr(e, t) {
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
function Pe(e) {
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
function Sm(e, t, n) {
	var r = t.pendingProps;
	switch ((eu(t), t.tag)) {
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
			return Pe(t), null;
		case 1:
			return He(t.type) && pi(), Pe(t), null;
		case 3:
			return (
				(r = t.stateNode),
				ar(),
				b(Be),
				b(_e),
				su(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Il(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), st !== null && (Ca(st), (st = null)))),
				va(e, t),
				Pe(t),
				null
			);
		case 5:
			uu(t);
			var l = hn(il.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				gf(e, t, n, r, l),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(T(166));
					return Pe(t), null;
				}
				if (((e = hn(St.current)), Il(t))) {
					(r = t.stateNode), (n = t.type);
					var i = t.memoizedProps;
					switch (((r[wt] = t), (r[rl] = i), (e = (t.mode & 1) !== 0), n)) {
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
							for (l = 0; l < zr.length; l++) Z(zr[l], r);
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
							Gu(r, i), Z('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!i.multiple }),
								Z('invalid', r);
							break;
						case 'textarea':
							Ju(r, i), Z('invalid', r);
					}
					Wo(n, i), (l = null);
					for (var o in i)
						if (i.hasOwnProperty(o)) {
							var a = i[o];
							o === 'children'
								? typeof a == 'string'
									? r.textContent !== a &&
									  (i.suppressHydrationWarning !== !0 &&
											zl(r.textContent, a, e),
									  (l = ['children', a]))
									: typeof a == 'number' &&
									  r.textContent !== '' + a &&
									  (i.suppressHydrationWarning !== !0 &&
											zl(r.textContent, a, e),
									  (l = ['children', '' + a]))
								: Kr.hasOwnProperty(o) &&
								  a != null &&
								  o === 'onScroll' &&
								  Z('scroll', r);
						}
					switch (n) {
						case 'input':
							Rl(r), Xu(r, i, !0);
							break;
						case 'textarea':
							Rl(r), Zu(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof i.onClick == 'function' && (r.onclick = fi);
					}
					(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(o = l.nodeType === 9 ? l : l.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = Vc(n)),
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
						(e[rl] = r),
						vf(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((o = Vo(n, r)), n)) {
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
								for (l = 0; l < zr.length; l++) Z(zr[l], e);
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
								Gu(e, r), (l = Fo(e, r)), Z('invalid', e);
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
								Ju(e, r), (l = Ho(e, r)), Z('invalid', e);
								break;
							default:
								l = r;
						}
						Wo(n, l), (a = l);
						for (i in a)
							if (a.hasOwnProperty(i)) {
								var u = a[i];
								i === 'style'
									? Kc(e, u)
									: i === 'dangerouslySetInnerHTML'
									? ((u = u ? u.__html : void 0), u != null && Qc(e, u))
									: i === 'children'
									? typeof u == 'string'
										? (n !== 'textarea' || u !== '') && qr(e, u)
										: typeof u == 'number' && qr(e, '' + u)
									: i !== 'suppressContentEditableWarning' &&
									  i !== 'suppressHydrationWarning' &&
									  i !== 'autoFocus' &&
									  (Kr.hasOwnProperty(i)
											? u != null && i === 'onScroll' && Z('scroll', e)
											: u != null && Ua(e, i, u, o));
							}
						switch (n) {
							case 'input':
								Rl(e), Xu(e, r, !1);
								break;
							case 'textarea':
								Rl(e), Zu(e);
								break;
							case 'option':
								r.value != null && e.setAttribute('value', '' + rn(r.value));
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
								typeof l.onClick == 'function' && (e.onclick = fi);
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
			return Pe(t), null;
		case 6:
			if (e && t.stateNode != null) yf(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(T(166));
				if (((n = hn(il.current)), hn(St.current), Il(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[wt] = t),
						(i = r.nodeValue !== n) && ((e = Ye), e !== null))
					)
						switch (e.tag) {
							case 3:
								zl(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									zl(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					i && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[wt] = t),
						(t.stateNode = r);
			}
			return Pe(t), null;
		case 13:
			if (
				(b(ae),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (ie && Qe !== null && t.mode & 1 && !(t.flags & 128))
					Dd(), ir(), (t.flags |= 98560), (i = !1);
				else if (((i = Il(t)), r !== null && r.dehydrated !== null)) {
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
						ir(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					Pe(t), (i = !1);
				} else st !== null && (Ca(st), (st = null)), (i = !0);
				if (!i) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || ae.current & 1 ? ge === 0 && (ge = 3) : Su())),
				  t.updateQueue !== null && (t.flags |= 4),
				  Pe(t),
				  null);
		case 4:
			return (
				ar(), va(e, t), e === null && tl(t.stateNode.containerInfo), Pe(t), null
			);
		case 10:
			return lu(t.type._context), Pe(t), null;
		case 17:
			return He(t.type) && pi(), Pe(t), null;
		case 19:
			if ((b(ae), (i = t.memoizedState), i === null)) return Pe(t), null;
			if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
				if (r) Tr(i, !1);
				else {
					if (ge !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((o = xi(e)), o !== null)) {
								for (
									t.flags |= 128,
										Tr(i, !1),
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
						de() > sr &&
						((t.flags |= 128), (r = !0), Tr(i, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = xi(o)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Tr(i, !0),
							i.tail === null && i.tailMode === 'hidden' && !o.alternate && !ie)
						)
							return Pe(t), null;
					} else
						2 * de() - i.renderingStartTime > sr &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Tr(i, !1), (t.lanes = 4194304));
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
				: (Pe(t), null);
		case 22:
		case 23:
			return (
				xu(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? Ve & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: Pe(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(T(156, t.tag));
}
function Em(e, t) {
	switch ((eu(t), t.tag)) {
		case 1:
			return (
				He(t.type) && pi(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				ar(),
				b(Be),
				b(_e),
				su(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return uu(t), null;
		case 13:
			if ((b(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(T(340));
				ir();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return b(ae), null;
		case 4:
			return ar(), null;
		case 10:
			return lu(t.type._context), null;
		case 22:
		case 23:
			return xu(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Bl = !1,
	Re = !1,
	km = typeof WeakSet == 'function' ? WeakSet : Set,
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
function ga(e, t, n) {
	try {
		n();
	} catch (r) {
		ce(e, t, r);
	}
}
var Hs = !1;
function Cm(e, t) {
	if (((ea = si), (e = Sd()), Za(e))) {
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
						c = 0,
						m = e,
						v = null;
					t: for (;;) {
						for (
							var y;
							m !== n || (l !== 0 && m.nodeType !== 3) || (a = o + l),
								m !== i || (r !== 0 && m.nodeType !== 3) || (u = o + r),
								m.nodeType === 3 && (o += m.nodeValue.length),
								(y = m.firstChild) !== null;

						)
							(v = m), (m = y);
						for (;;) {
							if (m === e) break t;
							if (
								(v === n && ++s === l && (a = o),
								v === i && ++c === r && (u = o),
								(y = m.nextSibling) !== null)
							)
								break;
							(m = v), (v = m.parentNode);
						}
						m = y;
					}
					n = a === -1 || u === -1 ? null : { start: a, end: u };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (ta = { focusedElem: e, selectionRange: n }, si = !1, L = t; L !== null; )
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
										j = x.memoizedState,
										h = t.stateNode,
										f = h.getSnapshotBeforeUpdate(
											t.elementType === t.type ? w : ot(t.type, w),
											j
										);
									h.__reactInternalSnapshotBeforeUpdate = f;
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
				} catch (p) {
					ce(t, t.return, p);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (L = e);
					break;
				}
				L = t.return;
			}
	return (x = Hs), (Hs = !1), x;
}
function Wr(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var l = (r = r.next);
		do {
			if ((l.tag & e) === e) {
				var i = l.destroy;
				(l.destroy = void 0), i !== void 0 && ga(t, n, i);
			}
			l = l.next;
		} while (l !== r);
	}
}
function Ui(e, t) {
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
function ya(e) {
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
function wf(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), wf(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[wt], delete t[rl], delete t[la], delete t[om], delete t[am])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function xf(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $s(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || xf(e.return)) return null;
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
function wa(e, t, n) {
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
				  n != null || t.onclick !== null || (t.onclick = fi));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (wa(e, t, n), e = e.sibling; e !== null; ) wa(e, t, n), (e = e.sibling);
}
function xa(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (xa(e, t, n), e = e.sibling; e !== null; ) xa(e, t, n), (e = e.sibling);
}
var ke = null,
	at = !1;
function Ht(e, t, n) {
	for (n = n.child; n !== null; ) Sf(e, t, n), (n = n.sibling);
}
function Sf(e, t, n) {
	if (xt && typeof xt.onCommitFiberUnmount == 'function')
		try {
			xt.onCommitFiberUnmount(Li, n);
		} catch {}
	switch (n.tag) {
		case 5:
			Re || Qn(n, t);
		case 6:
			var r = ke,
				l = at;
			(ke = null),
				Ht(e, t, n),
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
							? wo(e.parentNode, n)
							: e.nodeType === 1 && wo(e, n),
					  Zr(e))
					: wo(ke, n.stateNode));
			break;
		case 4:
			(r = ke),
				(l = at),
				(ke = n.stateNode.containerInfo),
				(at = !0),
				Ht(e, t, n),
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
						o !== void 0 && (i & 2 || i & 4) && ga(n, t, o),
						(l = l.next);
				} while (l !== r);
			}
			Ht(e, t, n);
			break;
		case 1:
			if (
				!Re &&
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
			Ht(e, t, n);
			break;
		case 21:
			Ht(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((Re = (r = Re) || n.memoizedState !== null), Ht(e, t, n), (Re = r))
				: Ht(e, t, n);
			break;
		default:
			Ht(e, t, n);
	}
}
function Ws(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new km()),
			t.forEach(function (r) {
				var l = Mm.bind(null, e, r);
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
				Sf(i, o, l), (ke = null), (at = !1);
				var u = l.alternate;
				u !== null && (u.return = null), (l.return = null);
			} catch (s) {
				ce(l, t, s);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Ef(t, e), (t = t.sibling);
}
function Ef(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((it(t, e), gt(e), r & 4)) {
				try {
					Wr(3, e, e.return), Ui(3, e);
				} catch (w) {
					ce(e, e.return, w);
				}
				try {
					Wr(5, e, e.return);
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
					qr(l, '');
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
						a === 'input' && i.type === 'radio' && i.name != null && $c(l, i),
							Vo(a, o);
						var s = Vo(a, i);
						for (o = 0; o < u.length; o += 2) {
							var c = u[o],
								m = u[o + 1];
							c === 'style'
								? Kc(l, m)
								: c === 'dangerouslySetInnerHTML'
								? Qc(l, m)
								: c === 'children'
								? qr(l, m)
								: Ua(l, c, m, s);
						}
						switch (a) {
							case 'input':
								Uo(l, i);
								break;
							case 'textarea':
								Wc(l, i);
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
						l[rl] = i;
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
					Zr(t.containerInfo);
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
						(yu = de())),
				r & 4 && Ws(e);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((Re = (s = Re) || c), it(t, e), (Re = s)) : it(t, e),
				gt(e),
				r & 8192)
			) {
				if (
					((s = e.memoizedState !== null),
					(e.stateNode.isHidden = s) && !c && e.mode & 1)
				)
					for (L = e, c = e.child; c !== null; ) {
						for (m = L = c; L !== null; ) {
							switch (((v = L), (y = v.child), v.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Wr(4, v, v.return);
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
										Qs(m);
										continue;
									}
							}
							y !== null ? ((y.return = v), (L = y)) : Qs(m);
						}
						c = c.sibling;
					}
				e: for (c = null, m = e; ; ) {
					if (m.tag === 5) {
						if (c === null) {
							c = m;
							try {
								(l = m.stateNode),
									s
										? ((i = l.style),
										  typeof i.setProperty == 'function'
												? i.setProperty('display', 'none', 'important')
												: (i.display = 'none'))
										: ((a = m.stateNode),
										  (u = m.memoizedProps.style),
										  (o =
												u != null && u.hasOwnProperty('display')
													? u.display
													: null),
										  (a.style.display = Yc('display', o)));
							} catch (w) {
								ce(e, e.return, w);
							}
						}
					} else if (m.tag === 6) {
						if (c === null)
							try {
								m.stateNode.nodeValue = s ? '' : m.memoizedProps;
							} catch (w) {
								ce(e, e.return, w);
							}
					} else if (
						((m.tag !== 22 && m.tag !== 23) ||
							m.memoizedState === null ||
							m === e) &&
						m.child !== null
					) {
						(m.child.return = m), (m = m.child);
						continue;
					}
					if (m === e) break e;
					for (; m.sibling === null; ) {
						if (m.return === null || m.return === e) break e;
						c === m && (c = null), (m = m.return);
					}
					c === m && (c = null), (m.sibling.return = m.return), (m = m.sibling);
				}
			}
			break;
		case 19:
			it(t, e), gt(e), r & 4 && Ws(e);
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
					if (xf(n)) {
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
					r.flags & 32 && (qr(l, ''), (r.flags &= -33));
					var i = $s(e);
					xa(e, i, l);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						a = $s(e);
					wa(e, a, o);
					break;
				default:
					throw Error(T(161));
			}
		} catch (u) {
			ce(e, e.return, u);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function Tm(e, t, n) {
	(L = e), kf(e);
}
function kf(e, t, n) {
	for (var r = (e.mode & 1) !== 0; L !== null; ) {
		var l = L,
			i = l.child;
		if (l.tag === 22 && r) {
			var o = l.memoizedState !== null || Bl;
			if (!o) {
				var a = l.alternate,
					u = (a !== null && a.memoizedState !== null) || Re;
				a = Bl;
				var s = Re;
				if (((Bl = o), (Re = u) && !s))
					for (L = l; L !== null; )
						(o = L),
							(u = o.child),
							o.tag === 22 && o.memoizedState !== null
								? Ys(l)
								: u !== null
								? ((u.return = o), (L = u))
								: Ys(l);
				for (; i !== null; ) (L = i), kf(i), (i = i.sibling);
				(L = l), (Bl = a), (Re = s);
			}
			Vs(e);
		} else
			l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (L = i)) : Vs(e);
	}
}
function Vs(e) {
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
							Re || Ui(5, t);
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
							i !== null && Ps(t, i, r);
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
								Ps(t, o, n);
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
									var c = s.memoizedState;
									if (c !== null) {
										var m = c.dehydrated;
										m !== null && Zr(m);
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
				Re || (t.flags & 512 && ya(t));
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
function Qs(e) {
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
function Ys(e) {
	for (; L !== null; ) {
		var t = L;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Ui(4, t);
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
						ya(t);
					} catch (u) {
						ce(t, i, u);
					}
					break;
				case 5:
					var o = t.return;
					try {
						ya(t);
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
var jm = Math.ceil,
	ki = At.ReactCurrentDispatcher,
	vu = At.ReactCurrentOwner,
	tt = At.ReactCurrentBatchConfig,
	Y = 0,
	xe = null,
	he = null,
	Ce = 0,
	Ve = 0,
	Yn = an(0),
	ge = 0,
	sl = null,
	En = 0,
	Bi = 0,
	gu = 0,
	Vr = null,
	Ie = null,
	yu = 0,
	sr = 1 / 0,
	Tt = null,
	Ci = !1,
	Sa = null,
	bt = null,
	Hl = !1,
	Kt = null,
	Ti = 0,
	Qr = 0,
	Ea = null,
	bl = -1,
	ei = 0;
function Oe() {
	return Y & 6 ? de() : bl !== -1 ? bl : (bl = de());
}
function en(e) {
	return e.mode & 1
		? Y & 2 && Ce !== 0
			? Ce & -Ce
			: sm.transition !== null
			? (ei === 0 && (ei = id()), ei)
			: ((e = q),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fd(e.type))),
			  e)
		: 1;
}
function ft(e, t, n, r) {
	if (50 < Qr) throw ((Qr = 0), (Ea = null), Error(T(185)));
	vl(e, n, r),
		(!(Y & 2) || e !== xe) &&
			(e === xe && (!(Y & 2) && (Bi |= n), ge === 4 && Qt(e, Ce)),
			$e(e, r),
			n === 1 && Y === 0 && !(t.mode & 1) && ((sr = de() + 500), zi && un()));
}
function $e(e, t) {
	var n = e.callbackNode;
	sh(e, t);
	var r = ui(e, e === xe ? Ce : 0);
	if (r === 0)
		n !== null && ts(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && ts(n), t === 1))
			e.tag === 0 ? um(Ks.bind(null, e)) : Ld(Ks.bind(null, e)),
				lm(function () {
					!(Y & 6) && un();
				}),
				(n = null);
		else {
			switch (od(r)) {
				case 1:
					n = Va;
					break;
				case 4:
					n = rd;
					break;
				case 16:
					n = ai;
					break;
				case 536870912:
					n = ld;
					break;
				default:
					n = ai;
			}
			n = Lf(n, Cf.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function Cf(e, t) {
	if (((bl = -1), (ei = 0), Y & 6)) throw Error(T(327));
	var n = e.callbackNode;
	if (er() && e.callbackNode !== n) return null;
	var r = ui(e, e === xe ? Ce : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = ji(e, r);
	else {
		t = r;
		var l = Y;
		Y |= 2;
		var i = jf();
		(xe !== e || Ce !== t) && ((Tt = null), (sr = de() + 500), vn(e, t));
		do
			try {
				_m();
				break;
			} catch (a) {
				Tf(e, a);
			}
		while (1);
		ru(),
			(ki.current = i),
			(Y = l),
			he !== null ? (t = 0) : ((xe = null), (Ce = 0), (t = ge));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((l = Go(e)), l !== 0 && ((r = l), (t = ka(e, l)))), t === 1)
		)
			throw ((n = sl), vn(e, 0), Qt(e, r), $e(e, de()), n);
		if (t === 6) Qt(e, r);
		else {
			if (
				((l = e.current.alternate),
				!(r & 30) &&
					!Pm(l) &&
					((t = ji(e, r)),
					t === 2 && ((i = Go(e)), i !== 0 && ((r = i), (t = ka(e, i)))),
					t === 1))
			)
				throw ((n = sl), vn(e, 0), Qt(e, r), $e(e, de()), n);
			switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(T(345));
				case 2:
					dn(e, Ie, Tt);
					break;
				case 3:
					if (
						(Qt(e, r), (r & 130023424) === r && ((t = yu + 500 - de()), 10 < t))
					) {
						if (ui(e, 0) !== 0) break;
						if (((l = e.suspendedLanes), (l & r) !== r)) {
							Oe(), (e.pingedLanes |= e.suspendedLanes & l);
							break;
						}
						e.timeoutHandle = ra(dn.bind(null, e, Ie, Tt), t);
						break;
					}
					dn(e, Ie, Tt);
					break;
				case 4:
					if ((Qt(e, r), (r & 4194240) === r)) break;
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
								: 1960 * jm(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = ra(dn.bind(null, e, Ie, Tt), r);
						break;
					}
					dn(e, Ie, Tt);
					break;
				case 5:
					dn(e, Ie, Tt);
					break;
				default:
					throw Error(T(329));
			}
		}
	}
	return $e(e, de()), e.callbackNode === n ? Cf.bind(null, e) : null;
}
function ka(e, t) {
	var n = Vr;
	return (
		e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256),
		(e = ji(e, t)),
		e !== 2 && ((t = Ie), (Ie = n), t !== null && Ca(t)),
		e
	);
}
function Ca(e) {
	Ie === null ? (Ie = e) : Ie.push.apply(Ie, e);
}
function Pm(e) {
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
function Qt(e, t) {
	for (
		t &= ~gu,
			t &= ~Bi,
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
function Ks(e) {
	if (Y & 6) throw Error(T(327));
	er();
	var t = ui(e, 0);
	if (!(t & 1)) return $e(e, de()), null;
	var n = ji(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Go(e);
		r !== 0 && ((t = r), (n = ka(e, r)));
	}
	if (n === 1) throw ((n = sl), vn(e, 0), Qt(e, t), $e(e, de()), n);
	if (n === 6) throw Error(T(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		dn(e, Ie, Tt),
		$e(e, de()),
		null
	);
}
function wu(e, t) {
	var n = Y;
	Y |= 1;
	try {
		return e(t);
	} finally {
		(Y = n), Y === 0 && ((sr = de() + 500), zi && un());
	}
}
function kn(e) {
	Kt !== null && Kt.tag === 0 && !(Y & 6) && er();
	var t = Y;
	Y |= 1;
	var n = tt.transition,
		r = q;
	try {
		if (((tt.transition = null), (q = 1), e)) return e();
	} finally {
		(q = r), (tt.transition = n), (Y = t), !(Y & 6) && un();
	}
}
function xu() {
	(Ve = Yn.current), b(Yn);
}
function vn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), rm(n)), he !== null))
		for (n = he.return; n !== null; ) {
			var r = n;
			switch ((eu(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && pi();
					break;
				case 3:
					ar(), b(Be), b(_e), su();
					break;
				case 5:
					uu(r);
					break;
				case 4:
					ar();
					break;
				case 13:
					b(ae);
					break;
				case 19:
					b(ae);
					break;
				case 10:
					lu(r.type._context);
					break;
				case 22:
				case 23:
					xu();
			}
			n = n.return;
		}
	if (
		((xe = e),
		(he = e = tn(e.current, null)),
		(Ce = Ve = t),
		(ge = 0),
		(sl = null),
		(gu = Bi = En = 0),
		(Ie = Vr = null),
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
function Tf(e, t) {
	do {
		var n = he;
		try {
			if ((ru(), (Xl.current = Ei), Si)) {
				for (var r = ue.memoizedState; r !== null; ) {
					var l = r.queue;
					l !== null && (l.pending = null), (r = r.next);
				}
				Si = !1;
			}
			if (
				((Sn = 0),
				(we = ve = ue = null),
				($r = !1),
				(ol = 0),
				(vu.current = null),
				n === null || n.return === null)
			) {
				(ge = 1), (sl = t), (he = null);
				break;
			}
			e: {
				var i = e,
					o = n.return,
					a = n,
					u = t;
				if (
					((t = Ce),
					(a.flags |= 32768),
					u !== null && typeof u == 'object' && typeof u.then == 'function')
				) {
					var s = u,
						c = a,
						m = c.tag;
					if (!(c.mode & 1) && (m === 0 || m === 11 || m === 15)) {
						var v = c.alternate;
						v
							? ((c.updateQueue = v.updateQueue),
							  (c.memoizedState = v.memoizedState),
							  (c.lanes = v.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null));
					}
					var y = Ds(o);
					if (y !== null) {
						(y.flags &= -257),
							As(y, o, a, i, t),
							y.mode & 1 && Ms(i, s, t),
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
							Ms(i, s, t), Su();
							break e;
						}
						u = Error(T(426));
					}
				} else if (ie && a.mode & 1) {
					var j = Ds(o);
					if (j !== null) {
						!(j.flags & 65536) && (j.flags |= 256),
							As(j, o, a, i, t),
							tu(ur(u, a));
						break e;
					}
				}
				(i = u = ur(u, a)),
					ge !== 4 && (ge = 2),
					Vr === null ? (Vr = [i]) : Vr.push(i),
					(i = o);
				do {
					switch (i.tag) {
						case 3:
							(i.flags |= 65536), (t &= -t), (i.lanes |= t);
							var h = uf(i, u, t);
							js(i, h);
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
										(bt === null || !bt.has(g))))
							) {
								(i.flags |= 65536), (t &= -t), (i.lanes |= t);
								var p = sf(i, a, t);
								js(i, p);
								break e;
							}
					}
					i = i.return;
				} while (i !== null);
			}
			Rf(n);
		} catch (C) {
			(t = C), he === n && n !== null && (he = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function jf() {
	var e = ki.current;
	return (ki.current = Ei), e === null ? Ei : e;
}
function Su() {
	(ge === 0 || ge === 3 || ge === 2) && (ge = 4),
		xe === null || (!(En & 268435455) && !(Bi & 268435455)) || Qt(xe, Ce);
}
function ji(e, t) {
	var n = Y;
	Y |= 2;
	var r = jf();
	(xe !== e || Ce !== t) && ((Tt = null), vn(e, t));
	do
		try {
			Rm();
			break;
		} catch (l) {
			Tf(e, l);
		}
	while (1);
	if ((ru(), (Y = n), (ki.current = r), he !== null)) throw Error(T(261));
	return (xe = null), (Ce = 0), ge;
}
function Rm() {
	for (; he !== null; ) Pf(he);
}
function _m() {
	for (; he !== null && !eh(); ) Pf(he);
}
function Pf(e) {
	var t = Nf(e.alternate, e, Ve);
	(e.memoizedProps = e.pendingProps),
		t === null ? Rf(e) : (he = t),
		(vu.current = null);
}
function Rf(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Em(n, t)), n !== null)) {
				(n.flags &= 32767), (he = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(ge = 6), (he = null);
				return;
			}
		} else if (((n = Sm(n, t, Ve)), n !== null)) {
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
	var r = q,
		l = tt.transition;
	try {
		(tt.transition = null), (q = 1), Nm(e, t, n, r);
	} finally {
		(tt.transition = l), (q = r);
	}
	return null;
}
function Nm(e, t, n, r) {
	do er();
	while (Kt !== null);
	if (Y & 6) throw Error(T(327));
	n = e.finishedWork;
	var l = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(T(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var i = n.lanes | n.childLanes;
	if (
		(ch(e, i),
		e === xe && ((he = xe = null), (Ce = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Hl ||
			((Hl = !0),
			Lf(ai, function () {
				return er(), null;
			})),
		(i = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || i)
	) {
		(i = tt.transition), (tt.transition = null);
		var o = q;
		q = 1;
		var a = Y;
		(Y |= 4),
			(vu.current = null),
			Cm(e, n),
			Ef(n, e),
			Xh(ta),
			(si = !!ea),
			(ta = ea = null),
			(e.current = n),
			Tm(n),
			th(),
			(Y = a),
			(q = o),
			(tt.transition = i);
	} else e.current = n;
	if (
		(Hl && ((Hl = !1), (Kt = e), (Ti = l)),
		(i = e.pendingLanes),
		i === 0 && (bt = null),
		lh(n.stateNode),
		$e(e, de()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
	if (Ci) throw ((Ci = !1), (e = Sa), (Sa = null), e);
	return (
		Ti & 1 && e.tag !== 0 && er(),
		(i = e.pendingLanes),
		i & 1 ? (e === Ea ? Qr++ : ((Qr = 0), (Ea = e))) : (Qr = 0),
		un(),
		null
	);
}
function er() {
	if (Kt !== null) {
		var e = od(Ti),
			t = tt.transition,
			n = q;
		try {
			if (((tt.transition = null), (q = 16 > e ? 16 : e), Kt === null))
				var r = !1;
			else {
				if (((e = Kt), (Kt = null), (Ti = 0), Y & 6)) throw Error(T(331));
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
									var c = L;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											Wr(8, c, i);
									}
									var m = c.child;
									if (m !== null) (m.return = c), (L = m);
									else
										for (; L !== null; ) {
											c = L;
											var v = c.sibling,
												y = c.return;
											if ((wf(c), c === s)) {
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
										var j = w.sibling;
										(w.sibling = null), (w = j);
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
										Wr(9, i, i.return);
								}
							var h = i.sibling;
							if (h !== null) {
								(h.return = i.return), (L = h);
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
											Ui(9, a);
									}
								} catch (C) {
									ce(a, a.return, C);
								}
							if (a === o) {
								L = null;
								break e;
							}
							var p = a.sibling;
							if (p !== null) {
								(p.return = a.return), (L = p);
								break e;
							}
							L = a.return;
						}
				}
				if (
					((Y = l), un(), xt && typeof xt.onPostCommitFiberRoot == 'function')
				)
					try {
						xt.onPostCommitFiberRoot(Li, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(q = n), (tt.transition = t);
		}
	}
	return !1;
}
function qs(e, t, n) {
	(t = ur(n, t)),
		(t = uf(e, t, 1)),
		(e = Zt(e, t, 1)),
		(t = Oe()),
		e !== null && (vl(e, 1, t), $e(e, t));
}
function ce(e, t, n) {
	if (e.tag === 3) qs(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				qs(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(bt === null || !bt.has(r)))
				) {
					(e = ur(n, e)),
						(e = sf(t, e, 1)),
						(t = Zt(t, e, 1)),
						(e = Oe()),
						t !== null && (vl(t, 1, e), $e(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function Lm(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = Oe()),
		(e.pingedLanes |= e.suspendedLanes & n),
		xe === e &&
			(Ce & n) === n &&
			(ge === 4 || (ge === 3 && (Ce & 130023424) === Ce && 500 > de() - yu)
				? vn(e, 0)
				: (gu |= n)),
		$e(e, t);
}
function _f(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = Ll), (Ll <<= 1), !(Ll & 130023424) && (Ll = 4194304))
			: (t = 1));
	var n = Oe();
	(e = Mt(e, t)), e !== null && (vl(e, t, n), $e(e, n));
}
function Om(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), _f(e, n);
}
function Mm(e, t) {
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
	r !== null && r.delete(t), _f(e, n);
}
var Nf;
Nf = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Be.current) Fe = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Fe = !1), xm(e, t, n);
			Fe = !!(e.flags & 131072);
		}
	else (Fe = !1), ie && t.flags & 1048576 && Od(t, vi, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Zl(e, t), (e = t.pendingProps);
			var l = lr(t, _e.current);
			bn(t, n), (l = du(null, t, r, e, l, n));
			var i = fu();
			return (
				(t.flags |= 1),
				typeof l == 'object' &&
				l !== null &&
				typeof l.render == 'function' &&
				l.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  He(r) ? ((i = !0), hi(t)) : (i = !1),
					  (t.memoizedState =
							l.state !== null && l.state !== void 0 ? l.state : null),
					  ou(t),
					  (l.updater = Ii),
					  (t.stateNode = l),
					  (l._reactInternals = t),
					  ca(t, r, e, n),
					  (t = pa(null, t, r, !0, i, n)))
					: ((t.tag = 0), ie && i && ba(t), Ne(null, t, l, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Zl(e, t),
					(e = t.pendingProps),
					(l = r._init),
					(r = l(r._payload)),
					(t.type = r),
					(l = t.tag = Am(r)),
					(e = ot(r, e)),
					l)
				) {
					case 0:
						t = fa(null, t, r, e, n);
						break e;
					case 1:
						t = Fs(null, t, r, e, n);
						break e;
					case 11:
						t = zs(null, t, r, e, n);
						break e;
					case 14:
						t = Is(null, t, r, ot(r.type, e), n);
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
				fa(e, t, r, l, n)
			);
		case 1:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ot(r, l)),
				Fs(e, t, r, l, n)
			);
		case 3:
			e: {
				if ((pf(t), e === null)) throw Error(T(387));
				(r = t.pendingProps),
					(i = t.memoizedState),
					(l = i.element),
					zd(e, t),
					wi(t, r, null, n);
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
						(l = ur(Error(T(423)), t)), (t = Us(e, t, r, n, l));
						break e;
					} else if (r !== l) {
						(l = ur(Error(T(424)), t)), (t = Us(e, t, r, n, l));
						break e;
					} else
						for (
							Qe = Jt(t.stateNode.containerInfo.firstChild),
								Ye = t,
								ie = !0,
								st = null,
								n = Bd(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((ir(), r === l)) {
						t = Dt(e, t, n);
						break e;
					}
					Ne(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Hd(t),
				e === null && aa(t),
				(r = t.type),
				(l = t.pendingProps),
				(i = e !== null ? e.memoizedProps : null),
				(o = l.children),
				na(r, l) ? (o = null) : i !== null && na(r, i) && (t.flags |= 32),
				ff(e, t),
				Ne(e, t, o, n),
				t.child
			);
		case 6:
			return e === null && aa(t), null;
		case 13:
			return hf(e, t, n);
		case 4:
			return (
				au(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = or(t, null, r, n)) : Ne(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ot(r, l)),
				zs(e, t, r, l, n)
			);
		case 7:
			return Ne(e, t, t.pendingProps, n), t.child;
		case 8:
			return Ne(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return Ne(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(l = t.pendingProps),
					(i = t.memoizedProps),
					(o = l.value),
					J(gi, r._currentValue),
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
								for (var u = a.firstContext; u !== null; ) {
									if (u.context === r) {
										if (i.tag === 1) {
											(u = _t(-1, n & -n)), (u.tag = 2);
											var s = i.updateQueue;
											if (s !== null) {
												s = s.shared;
												var c = s.pending;
												c === null
													? (u.next = u)
													: ((u.next = c.next), (c.next = u)),
													(s.pending = u);
											}
										}
										(i.lanes |= n),
											(u = i.alternate),
											u !== null && (u.lanes |= n),
											ua(i.return, n, t),
											(a.lanes |= n);
										break;
									}
									u = u.next;
								}
							} else if (i.tag === 10) o = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (((o = i.return), o === null)) throw Error(T(341));
								(o.lanes |= n),
									(a = o.alternate),
									a !== null && (a.lanes |= n),
									ua(o, n, t),
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
				Ne(e, t, l.children, n), (t = t.child);
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
				Ne(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(l = ot(r, t.pendingProps)),
				(l = ot(r.type, l)),
				Is(e, t, r, l, n)
			);
		case 15:
			return cf(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ot(r, l)),
				Zl(e, t),
				(t.tag = 1),
				He(r) ? ((e = !0), hi(t)) : (e = !1),
				bn(t, n),
				Fd(t, r, l),
				ca(t, r, l, n),
				pa(null, t, r, !0, e, n)
			);
		case 19:
			return mf(e, t, n);
		case 22:
			return df(e, t, n);
	}
	throw Error(T(156, t.tag));
};
function Lf(e, t) {
	return nd(e, t);
}
function Dm(e, t, n, r) {
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
	return new Dm(e, t, n, r);
}
function Eu(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Am(e) {
	if (typeof e == 'function') return Eu(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === Ha)) return 11;
		if (e === $a) return 14;
	}
	return 2;
}
function tn(e, t) {
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
function ti(e, t, n, r, l, i) {
	var o = 2;
	if (((r = e), typeof e == 'function')) Eu(e) && (o = 1);
	else if (typeof e == 'string') o = 5;
	else
		e: switch (e) {
			case zn:
				return gn(n.children, l, i, t);
			case Ba:
				(o = 8), (l |= 8);
				break;
			case Do:
				return (
					(e = et(12, n, t, l | 2)), (e.elementType = Do), (e.lanes = i), e
				);
			case Ao:
				return (e = et(13, n, t, l)), (e.elementType = Ao), (e.lanes = i), e;
			case zo:
				return (e = et(19, n, t, l)), (e.elementType = zo), (e.lanes = i), e;
			case Uc:
				return Hi(n, l, i, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case Ic:
							o = 10;
							break e;
						case Fc:
							o = 9;
							break e;
						case Ha:
							o = 11;
							break e;
						case $a:
							o = 14;
							break e;
						case $t:
							(o = 16), (r = null);
							break e;
					}
				throw Error(T(130, e == null ? e : typeof e, ''));
		}
	return (
		(t = et(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
	);
}
function gn(e, t, n, r) {
	return (e = et(7, e, r, t)), (e.lanes = n), e;
}
function Hi(e, t, n, r) {
	return (
		(e = et(22, e, r, t)),
		(e.elementType = Uc),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function Po(e, t, n) {
	return (e = et(6, e, null, t)), (e.lanes = n), e;
}
function Ro(e, t, n) {
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
function zm(e, t, n, r, l) {
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
		(this.eventTimes = ao(0)),
		(this.expirationTimes = ao(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = ao(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = l),
		(this.mutableSourceEagerHydrationData = null);
}
function ku(e, t, n, r, l, i, o, a, u) {
	return (
		(e = new zm(e, t, n, a, u)),
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
		ou(i),
		e
	);
}
function Im(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: An,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function Of(e) {
	if (!e) return ln;
	e = e._reactInternals;
	e: {
		if (jn(e) !== e || e.tag !== 1) throw Error(T(170));
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
		if (He(n)) return Nd(e, n, t);
	}
	return t;
}
function Mf(e, t, n, r, l, i, o, a, u) {
	return (
		(e = ku(n, r, !0, e, l, i, o, a, u)),
		(e.context = Of(null)),
		(n = e.current),
		(r = Oe()),
		(l = en(n)),
		(i = _t(r, l)),
		(i.callback = t ?? null),
		Zt(n, i, l),
		(e.current.lanes = l),
		vl(e, l, r),
		$e(e, r),
		e
	);
}
function $i(e, t, n, r) {
	var l = t.current,
		i = Oe(),
		o = en(l);
	return (
		(n = Of(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = _t(i, o)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Zt(l, t, o)),
		e !== null && (ft(e, l, o, i), Gl(e, l, o)),
		o
	);
}
function Pi(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Gs(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Cu(e, t) {
	Gs(e, t), (e = e.alternate) && Gs(e, t);
}
function Fm() {
	return null;
}
var Df =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
		  };
function Tu(e) {
	this._internalRoot = e;
}
Wi.prototype.render = Tu.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(T(409));
	$i(e, t, null, null);
};
Wi.prototype.unmount = Tu.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		kn(function () {
			$i(null, e, null, null);
		}),
			(t[Ot] = null);
	}
};
function Wi(e) {
	this._internalRoot = e;
}
Wi.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = sd();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
		Vt.splice(n, 0, e), n === 0 && dd(e);
	}
};
function ju(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Vi(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	);
}
function Xs() {}
function Um(e, t, n, r, l) {
	if (l) {
		if (typeof r == 'function') {
			var i = r;
			r = function () {
				var s = Pi(o);
				i.call(s);
			};
		}
		var o = Mf(t, r, e, 0, null, !1, !1, '', Xs);
		return (
			(e._reactRootContainer = o),
			(e[Ot] = o.current),
			tl(e.nodeType === 8 ? e.parentNode : e),
			kn(),
			o
		);
	}
	for (; (l = e.lastChild); ) e.removeChild(l);
	if (typeof r == 'function') {
		var a = r;
		r = function () {
			var s = Pi(u);
			a.call(s);
		};
	}
	var u = ku(e, 0, !1, null, null, !1, !1, '', Xs);
	return (
		(e._reactRootContainer = u),
		(e[Ot] = u.current),
		tl(e.nodeType === 8 ? e.parentNode : e),
		kn(function () {
			$i(t, u, n, r);
		}),
		u
	);
}
function Qi(e, t, n, r, l) {
	var i = n._reactRootContainer;
	if (i) {
		var o = i;
		if (typeof l == 'function') {
			var a = l;
			l = function () {
				var u = Pi(o);
				a.call(u);
			};
		}
		$i(t, o, e, l);
	} else o = Um(n, t, e, l, r);
	return Pi(o);
}
ad = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Ar(t.pendingLanes);
				n !== 0 &&
					(Qa(t, n | 1), $e(t, de()), !(Y & 6) && ((sr = de() + 500), un()));
			}
			break;
		case 13:
			kn(function () {
				var r = Mt(e, 1);
				if (r !== null) {
					var l = Oe();
					ft(r, e, 1, l);
				}
			}),
				Cu(e, 1);
	}
};
Ya = function (e) {
	if (e.tag === 13) {
		var t = Mt(e, 134217728);
		if (t !== null) {
			var n = Oe();
			ft(t, e, 134217728, n);
		}
		Cu(e, 134217728);
	}
};
ud = function (e) {
	if (e.tag === 13) {
		var t = en(e),
			n = Mt(e, t);
		if (n !== null) {
			var r = Oe();
			ft(n, e, t, r);
		}
		Cu(e, t);
	}
};
sd = function () {
	return q;
};
cd = function (e, t) {
	var n = q;
	try {
		return (q = e), t();
	} finally {
		q = n;
	}
};
Yo = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((Uo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
						var l = Ai(r);
						if (!l) throw Error(T(90));
						Hc(r), Uo(r, l);
					}
				}
			}
			break;
		case 'textarea':
			Wc(e, n);
			break;
		case 'select':
			(t = n.value), t != null && Gn(e, !!n.multiple, t, !1);
	}
};
Xc = wu;
Jc = kn;
var Bm = { usingClientEntryPoint: !1, Events: [yl, Bn, Ai, qc, Gc, wu] },
	jr = {
		findFiberByHostInstance: fn,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom',
	},
	Hm = {
		bundleType: jr.bundleType,
		version: jr.version,
		rendererPackageName: jr.rendererPackageName,
		rendererConfig: jr.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: At.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = ed(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: jr.findFiberByHostInstance || Fm,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var $l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!$l.isDisabled && $l.supportsFiber)
		try {
			(Li = $l.inject(Hm)), (xt = $l);
		} catch {}
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bm;
qe.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!ju(t)) throw Error(T(200));
	return Im(e, t, null, n);
};
qe.createRoot = function (e, t) {
	if (!ju(e)) throw Error(T(299));
	var n = !1,
		r = '',
		l = Df;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
		(t = ku(e, 1, !1, null, null, n, !1, r, l)),
		(e[Ot] = t.current),
		tl(e.nodeType === 8 ? e.parentNode : e),
		new Tu(t)
	);
};
qe.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(T(188))
			: ((e = Object.keys(e).join(',')), Error(T(268, e)));
	return (e = ed(t)), (e = e === null ? null : e.stateNode), e;
};
qe.flushSync = function (e) {
	return kn(e);
};
qe.hydrate = function (e, t, n) {
	if (!Vi(t)) throw Error(T(200));
	return Qi(null, e, t, !0, n);
};
qe.hydrateRoot = function (e, t, n) {
	if (!ju(e)) throw Error(T(405));
	var r = (n != null && n.hydratedSources) || null,
		l = !1,
		i = '',
		o = Df;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (l = !0),
			n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(t = Mf(t, null, e, 1, n ?? null, l, !1, i, o)),
		(e[Ot] = t.current),
		tl(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(l = n._getVersion),
				(l = l(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, l])
					: t.mutableSourceEagerHydrationData.push(n, l);
	return new Wi(t);
};
qe.render = function (e, t, n) {
	if (!Vi(t)) throw Error(T(200));
	return Qi(null, e, t, !1, n);
};
qe.unmountComponentAtNode = function (e) {
	if (!Vi(e)) throw Error(T(40));
	return e._reactRootContainer
		? (kn(function () {
				Qi(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Ot] = null);
				});
		  }),
		  !0)
		: !1;
};
qe.unstable_batchedUpdates = wu;
qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Vi(n)) throw Error(T(200));
	if (e == null || e._reactInternals === void 0) throw Error(T(38));
	return Qi(e, t, n, !1, r);
};
qe.version = '18.2.0-next-9e3b772b8-20220608';
function Af() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Af);
		} catch (e) {
			console.error(e);
		}
}
Af(), (Oc.exports = qe);
var $m = Oc.exports,
	Js = $m;
(Oo.createRoot = Js.createRoot), (Oo.hydrateRoot = Js.hydrateRoot);
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
const Zs = 'popstate';
function Wm(e) {
	e === void 0 && (e = {});
	function t(r, l) {
		let { pathname: i, search: o, hash: a } = r.location;
		return cl(
			'',
			{ pathname: i, search: o, hash: a },
			(l.state && l.state.usr) || null,
			(l.state && l.state.key) || 'default'
		);
	}
	function n(r, l) {
		return typeof l == 'string' ? l : Cn(l);
	}
	return Qm(t, n, null, e);
}
function W(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function cr(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function Vm() {
	return Math.random().toString(36).substr(2, 8);
}
function bs(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function cl(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		le(
			{ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
			typeof t == 'string' ? zt(t) : t,
			{ state: n, key: (t && t.key) || r || Vm() }
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
function zt(e) {
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
function Qm(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: l = document.defaultView, v5Compat: i = !1 } = r,
		o = l.history,
		a = pe.Pop,
		u = null,
		s = c();
	s == null && ((s = 0), o.replaceState(le({}, o.state, { idx: s }), ''));
	function c() {
		return (o.state || { idx: null }).idx;
	}
	function m() {
		a = pe.Pop;
		let j = c(),
			h = j == null ? null : j - s;
		(s = j), u && u({ action: a, location: w.location, delta: h });
	}
	function v(j, h) {
		a = pe.Push;
		let f = cl(w.location, j, h);
		n && n(f, j), (s = c() + 1);
		let g = bs(f, s),
			p = w.createHref(f);
		try {
			o.pushState(g, '', p);
		} catch (C) {
			if (C instanceof DOMException && C.name === 'DataCloneError') throw C;
			l.location.assign(p);
		}
		i && u && u({ action: a, location: w.location, delta: 1 });
	}
	function y(j, h) {
		a = pe.Replace;
		let f = cl(w.location, j, h);
		n && n(f, j), (s = c());
		let g = bs(f, s),
			p = w.createHref(f);
		o.replaceState(g, '', p),
			i && u && u({ action: a, location: w.location, delta: 0 });
	}
	function x(j) {
		let h = l.location.origin !== 'null' ? l.location.origin : l.location.href,
			f = typeof j == 'string' ? j : Cn(j);
		return (
			W(
				h,
				'No window.location.(origin|href) available to create URL for href: ' +
					f
			),
			new URL(f, h)
		);
	}
	let w = {
		get action() {
			return a;
		},
		get location() {
			return e(l, o);
		},
		listen(j) {
			if (u) throw new Error('A history only accepts one active listener');
			return (
				l.addEventListener(Zs, m),
				(u = j),
				() => {
					l.removeEventListener(Zs, m), (u = null);
				}
			);
		},
		createHref(j) {
			return t(l, j);
		},
		createURL: x,
		encodeLocation(j) {
			let h = x(j);
			return { pathname: h.pathname, search: h.search, hash: h.hash };
		},
		push: v,
		replace: y,
		go(j) {
			return o.go(j);
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
const Ym = new Set([
	'lazy',
	'caseSensitive',
	'path',
	'id',
	'index',
	'children',
]);
function Km(e) {
	return e.index === !0;
}
function Ta(e, t, n, r) {
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
				Km(l))
			) {
				let u = le({}, l, t(l), { id: a });
				return (r[a] = u), u;
			} else {
				let u = le({}, l, t(l), { id: a, children: void 0 });
				return (
					(r[a] = u), l.children && (u.children = Ta(l.children, t, o, r)), u
				);
			}
		})
	);
}
function Kn(e, t, n) {
	n === void 0 && (n = '/');
	let r = typeof t == 'string' ? zt(t) : t,
		l = mr(r.pathname || '/', n);
	if (l == null) return null;
	let i = zf(e);
	qm(i);
	let o = null;
	for (let a = 0; o == null && a < i.length; ++a) o = rv(i[a], ov(l));
	return o;
}
function zf(e, t, n, r) {
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
		let s = Nt([r, u.relativePath]),
			c = n.concat(u);
		i.children &&
			i.children.length > 0 &&
			(W(
				i.index !== !0,
				'Index routes must not have child routes. Please remove ' +
					('all child routes from route path "' + s + '".')
			),
			zf(i.children, t, c, s)),
			!(i.path == null && !i.index) &&
				t.push({ path: s, score: tv(s, i.index), routesMeta: c });
	};
	return (
		e.forEach((i, o) => {
			var a;
			if (i.path === '' || !((a = i.path) != null && a.includes('?'))) l(i, o);
			else for (let u of If(i.path)) l(i, o, u);
		}),
		t
	);
}
function If(e) {
	let t = e.split('/');
	if (t.length === 0) return [];
	let [n, ...r] = t,
		l = n.endsWith('?'),
		i = n.replace(/\?$/, '');
	if (r.length === 0) return l ? [i, ''] : [i];
	let o = If(r.join('/')),
		a = [];
	return (
		a.push(...o.map((u) => (u === '' ? i : [i, u].join('/')))),
		l && a.push(...o),
		a.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
	);
}
function qm(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: nv(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const Gm = /^:\w+$/,
	Xm = 3,
	Jm = 2,
	Zm = 1,
	bm = 10,
	ev = -2,
	ec = (e) => e === '*';
function tv(e, t) {
	let n = e.split('/'),
		r = n.length;
	return (
		n.some(ec) && (r += ev),
		t && (r += Jm),
		n
			.filter((l) => !ec(l))
			.reduce((l, i) => l + (Gm.test(i) ? Xm : i === '' ? Zm : bm), r)
	);
}
function nv(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function rv(e, t) {
	let { routesMeta: n } = e,
		r = {},
		l = '/',
		i = [];
	for (let o = 0; o < n.length; ++o) {
		let a = n[o],
			u = o === n.length - 1,
			s = l === '/' ? t : t.slice(l.length) || '/',
			c = lv(
				{ path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
				s
			);
		if (!c) return null;
		Object.assign(r, c.params);
		let m = a.route;
		i.push({
			params: r,
			pathname: Nt([l, c.pathname]),
			pathnameBase: cv(Nt([l, c.pathnameBase])),
			route: m,
		}),
			c.pathnameBase !== '/' && (l = Nt([l, c.pathnameBase]));
	}
	return i;
}
function lv(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = iv(e.path, e.caseSensitive, e.end),
		l = t.match(n);
	if (!l) return null;
	let i = l[0],
		o = i.replace(/(.)\/+$/, '$1'),
		a = l.slice(1);
	return {
		params: r.reduce((s, c, m) => {
			if (c === '*') {
				let v = a[m] || '';
				o = i.slice(0, i.length - v.length).replace(/(.)\/+$/, '$1');
			}
			return (s[c] = av(a[m] || '', c)), s;
		}, {}),
		pathname: i,
		pathnameBase: o,
		pattern: e,
	};
}
function iv(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		cr(
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
function ov(e) {
	try {
		return decodeURI(e);
	} catch (t) {
		return (
			cr(
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
function av(e, t) {
	try {
		return decodeURIComponent(e);
	} catch (n) {
		return (
			cr(
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
function mr(e, t) {
	if (t === '/') return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== '/' ? null : e.slice(n) || '/';
}
function uv(e, t) {
	t === void 0 && (t = '/');
	let {
		pathname: n,
		search: r = '',
		hash: l = '',
	} = typeof e == 'string' ? zt(e) : e;
	return {
		pathname: n ? (n.startsWith('/') ? n : sv(n, t)) : t,
		search: dv(r),
		hash: fv(l),
	};
}
function sv(e, t) {
	let n = t.replace(/\/+$/, '').split('/');
	return (
		e.split('/').forEach((l) => {
			l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
		}),
		n.length > 1 ? n.join('/') : '/'
	);
}
function _o(e, t, n, r) {
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
function Yi(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	);
}
function Pu(e, t, n, r) {
	r === void 0 && (r = !1);
	let l;
	typeof e == 'string'
		? (l = zt(e))
		: ((l = le({}, e)),
		  W(
				!l.pathname || !l.pathname.includes('?'),
				_o('?', 'pathname', 'search', l)
		  ),
		  W(
				!l.pathname || !l.pathname.includes('#'),
				_o('#', 'pathname', 'hash', l)
		  ),
		  W(!l.search || !l.search.includes('#'), _o('#', 'search', 'hash', l)));
	let i = e === '' || l.pathname === '',
		o = i ? '/' : l.pathname,
		a;
	if (r || o == null) a = n;
	else {
		let m = t.length - 1;
		if (o.startsWith('..')) {
			let v = o.split('/');
			for (; v[0] === '..'; ) v.shift(), (m -= 1);
			l.pathname = v.join('/');
		}
		a = m >= 0 ? t[m] : '/';
	}
	let u = uv(l, a),
		s = o && o !== '/' && o.endsWith('/'),
		c = (i || o === '.') && n.endsWith('/');
	return !u.pathname.endsWith('/') && (s || c) && (u.pathname += '/'), u;
}
const Nt = (e) => e.join('/').replace(/\/\/+/g, '/'),
	cv = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
	dv = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
	fv = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class Ru {
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
function Ff(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.internal == 'boolean' &&
		'data' in e
	);
}
const Uf = ['post', 'put', 'patch', 'delete'],
	pv = new Set(Uf),
	hv = ['get', ...Uf],
	mv = new Set(hv),
	vv = new Set([301, 302, 303, 307, 308]),
	gv = new Set([307, 308]),
	No = {
		state: 'idle',
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	yv = {
		state: 'idle',
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	Pr = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
	Bf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	wv = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function xv(e) {
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
	} else l = wv;
	let i = {},
		o = Ta(e.routes, l, void 0, i),
		a,
		u = e.basename || '/',
		s = le({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
		c = null,
		m = new Set(),
		v = null,
		y = null,
		x = null,
		w = e.hydrationData != null,
		j = Kn(o, e.history.location, u),
		h = null;
	if (j == null) {
		let S = Je(404, { pathname: e.history.location.pathname }),
			{ matches: E, route: k } = uc(o);
		(j = E), (h = { [k.id]: S });
	}
	let f =
			!j.some((S) => S.route.lazy) &&
			(!j.some((S) => S.route.loader) || e.hydrationData != null),
		g,
		p = {
			historyAction: e.history.action,
			location: e.history.location,
			matches: j,
			initialized: f,
			navigation: No,
			restoreScrollPosition: e.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: 'idle',
			loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
			actionData: (e.hydrationData && e.hydrationData.actionData) || null,
			errors: (e.hydrationData && e.hydrationData.errors) || h,
			fetchers: new Map(),
			blockers: new Map(),
		},
		C = pe.Pop,
		_ = !1,
		R,
		O = !1,
		Q = !1,
		U = [],
		Se = [],
		G = new Map(),
		It = 0,
		_n = -1,
		Ft = new Map(),
		lt = new Set(),
		ht = new Map(),
		N = new Map(),
		z = new Map(),
		$ = !1;
	function oe() {
		return (
			(c = e.history.listen((S) => {
				let { action: E, location: k, delta: M } = S;
				if ($) {
					$ = !1;
					return;
				}
				cr(
					z.size === 0 || M != null,
					'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
				);
				let B = Uu({
					currentLocation: p.location,
					nextLocation: k,
					historyAction: E,
				});
				if (B && M != null) {
					($ = !0),
						e.history.go(M * -1),
						El(B, {
							state: 'blocked',
							location: k,
							proceed() {
								El(B, {
									state: 'proceeding',
									proceed: void 0,
									reset: void 0,
									location: k,
								}),
									e.history.go(M);
							},
							reset() {
								let I = new Map(p.blockers);
								I.set(B, Pr), ee({ blockers: I });
							},
						});
					return;
				}
				return Ut(E, k);
			})),
			p.initialized || Ut(pe.Pop, p.location),
			g
		);
	}
	function fe() {
		c && c(),
			m.clear(),
			R && R.abort(),
			p.fetchers.forEach((S, E) => Xi(E)),
			p.blockers.forEach((S, E) => Fu(E));
	}
	function Nn(S) {
		return m.add(S), () => m.delete(S);
	}
	function ee(S) {
		(p = le({}, p, S)), m.forEach((E) => E(p));
	}
	function Et(S, E) {
		var k, M;
		let B =
				p.actionData != null &&
				p.navigation.formMethod != null &&
				ut(p.navigation.formMethod) &&
				p.navigation.state === 'loading' &&
				((k = S.state) == null ? void 0 : k._isRedirect) !== !0,
			I;
		E.actionData
			? Object.keys(E.actionData).length > 0
				? (I = E.actionData)
				: (I = null)
			: B
			? (I = p.actionData)
			: (I = null);
		let F = E.loaderData
				? ac(p.loaderData, E.loaderData, E.matches || [], E.errors)
				: p.loaderData,
			A = p.blockers;
		A.size > 0 && ((A = new Map(A)), A.forEach((X, K) => A.set(K, Pr)));
		let D =
			_ === !0 ||
			(p.navigation.formMethod != null &&
				ut(p.navigation.formMethod) &&
				((M = S.state) == null ? void 0 : M._isRedirect) !== !0);
		a && ((o = a), (a = void 0)),
			O ||
				C === pe.Pop ||
				(C === pe.Push
					? e.history.push(S, S.state)
					: C === pe.Replace && e.history.replace(S, S.state)),
			ee(
				le({}, E, {
					actionData: I,
					loaderData: F,
					historyAction: C,
					location: S,
					initialized: !0,
					navigation: No,
					revalidation: 'idle',
					restoreScrollPosition: Hu(S, E.matches || p.matches),
					preventScrollReset: D,
					blockers: A,
				})
			),
			(C = pe.Pop),
			(_ = !1),
			(O = !1),
			(Q = !1),
			(U = []),
			(Se = []);
	}
	async function mt(S, E) {
		if (typeof S == 'number') {
			e.history.go(S);
			return;
		}
		let k = ja(
				p.location,
				p.matches,
				u,
				s.v7_prependBasename,
				S,
				E == null ? void 0 : E.fromRouteId,
				E == null ? void 0 : E.relative
			),
			{
				path: M,
				submission: B,
				error: I,
			} = tc(s.v7_normalizeFormMethod, !1, k, E),
			F = p.location,
			A = cl(p.location, M, E && E.state);
		A = le({}, A, e.history.encodeLocation(A));
		let D = E && E.replace != null ? E.replace : void 0,
			X = pe.Push;
		D === !0
			? (X = pe.Replace)
			: D === !1 ||
			  (B != null &&
					ut(B.formMethod) &&
					B.formAction === p.location.pathname + p.location.search &&
					(X = pe.Replace));
		let K =
				E && 'preventScrollReset' in E ? E.preventScrollReset === !0 : void 0,
			We = Uu({ currentLocation: F, nextLocation: A, historyAction: X });
		if (We) {
			El(We, {
				state: 'blocked',
				location: A,
				proceed() {
					El(We, {
						state: 'proceeding',
						proceed: void 0,
						reset: void 0,
						location: A,
					}),
						mt(S, E);
				},
				reset() {
					let ye = new Map(p.blockers);
					ye.set(We, Pr), ee({ blockers: ye });
				},
			});
			return;
		}
		return await Ut(X, A, {
			submission: B,
			pendingError: I,
			preventScrollReset: K,
			replace: E && E.replace,
		});
	}
	function Ln() {
		if (
			(Gi(),
			ee({ revalidation: 'loading' }),
			p.navigation.state !== 'submitting')
		) {
			if (p.navigation.state === 'idle') {
				Ut(p.historyAction, p.location, { startUninterruptedRevalidation: !0 });
				return;
			}
			Ut(C || p.historyAction, p.navigation.location, {
				overrideNavigation: p.navigation,
			});
		}
	}
	async function Ut(S, E, k) {
		R && R.abort(),
			(R = null),
			(C = S),
			(O = (k && k.startUninterruptedRevalidation) === !0),
			pp(p.location, p.matches),
			(_ = (k && k.preventScrollReset) === !0);
		let M = a || o,
			B = k && k.overrideNavigation,
			I = Kn(M, E, u);
		if (!I) {
			let ye = Je(404, { pathname: E.pathname }),
				{ matches: Ae, route: vt } = uc(M);
			Ji(), Et(E, { matches: Ae, loaderData: {}, errors: { [vt.id]: ye } });
			return;
		}
		if (
			p.initialized &&
			!Q &&
			Tv(p.location, E) &&
			!(k && k.submission && ut(k.submission.formMethod))
		) {
			Et(E, { matches: I });
			return;
		}
		R = new AbortController();
		let F = _r(e.history, E, R.signal, k && k.submission),
			A,
			D;
		if (k && k.pendingError) D = { [qn(I).route.id]: k.pendingError };
		else if (k && k.submission && ut(k.submission.formMethod)) {
			let ye = await op(F, E, k.submission, I, { replace: k.replace });
			if (ye.shortCircuited) return;
			(A = ye.pendingActionData),
				(D = ye.pendingActionError),
				(B = Wl(E, k.submission)),
				(F = new Request(F.url, { signal: F.signal }));
		}
		let {
			shortCircuited: X,
			loaderData: K,
			errors: We,
		} = await ap(
			F,
			E,
			I,
			B,
			k && k.submission,
			k && k.fetcherSubmission,
			k && k.replace,
			A,
			D
		);
		X ||
			((R = null),
			Et(
				E,
				le({ matches: I }, A ? { actionData: A } : {}, {
					loaderData: K,
					errors: We,
				})
			));
	}
	async function op(S, E, k, M, B) {
		B === void 0 && (B = {}), Gi();
		let I = Nv(E, k);
		ee({ navigation: I });
		let F,
			A = Ra(M, E);
		if (!A.route.action && !A.route.lazy)
			F = {
				type: me.error,
				error: Je(405, {
					method: S.method,
					pathname: E.pathname,
					routeId: A.route.id,
				}),
			};
		else if (((F = await Rr('action', S, A, M, i, l, u)), S.signal.aborted))
			return { shortCircuited: !0 };
		if (tr(F)) {
			let D;
			return (
				B && B.replace != null
					? (D = B.replace)
					: (D = F.location === p.location.pathname + p.location.search),
				await vr(p, F, { submission: k, replace: D }),
				{ shortCircuited: !0 }
			);
		}
		if (Yr(F)) {
			let D = qn(M, A.route.id);
			return (
				(B && B.replace) !== !0 && (C = pe.Push),
				{ pendingActionData: {}, pendingActionError: { [D.route.id]: F.error } }
			);
		}
		if (mn(F)) throw Je(400, { type: 'defer-action' });
		return { pendingActionData: { [A.route.id]: F.data } };
	}
	async function ap(S, E, k, M, B, I, F, A, D) {
		let X = M || Wl(E, B),
			K = B || I || dc(X),
			We = a || o,
			[ye, Ae] = nc(e.history, p, k, K, E, Q, U, Se, ht, lt, We, u, A, D);
		if (
			(Ji(
				(te) =>
					!(k && k.some((Xe) => Xe.route.id === te)) ||
					(ye && ye.some((Xe) => Xe.route.id === te))
			),
			ye.length === 0 && Ae.length === 0)
		) {
			let te = zu();
			return (
				Et(
					E,
					le(
						{ matches: k, loaderData: {}, errors: D || null },
						A ? { actionData: A } : {},
						te ? { fetchers: new Map(p.fetchers) } : {}
					)
				),
				{ shortCircuited: !0 }
			);
		}
		if (!O) {
			Ae.forEach((Xe) => {
				let On = p.fetchers.get(Xe.key),
					Ee = Nr(void 0, On ? On.data : void 0);
				p.fetchers.set(Xe.key, Ee);
			});
			let te = A || p.actionData;
			ee(
				le(
					{ navigation: X },
					te
						? Object.keys(te).length === 0
							? { actionData: null }
							: { actionData: te }
						: {},
					Ae.length > 0 ? { fetchers: new Map(p.fetchers) } : {}
				)
			);
		}
		(_n = ++It),
			Ae.forEach((te) => {
				G.has(te.key) && Bt(te.key),
					te.controller && G.set(te.key, te.controller);
			});
		let vt = () => Ae.forEach((te) => Bt(te.key));
		R && R.signal.addEventListener('abort', vt);
		let {
			results: gr,
			loaderResults: Zi,
			fetcherResults: kl,
		} = await Du(p.matches, k, ye, Ae, S);
		if (S.signal.aborted) return { shortCircuited: !0 };
		R && R.signal.removeEventListener('abort', vt),
			Ae.forEach((te) => G.delete(te.key));
		let kt = sc(gr);
		if (kt) return await vr(p, kt, { replace: F }), { shortCircuited: !0 };
		let { loaderData: Cl, errors: bi } = oc(p, k, ye, Zi, D, Ae, kl, N);
		N.forEach((te, Xe) => {
			te.subscribe((On) => {
				(On || te.done) && N.delete(Xe);
			});
		});
		let eo = zu(),
			to = Iu(_n),
			Tl = eo || to || Ae.length > 0;
		return le(
			{ loaderData: Cl, errors: bi },
			Tl ? { fetchers: new Map(p.fetchers) } : {}
		);
	}
	function Mu(S) {
		return p.fetchers.get(S) || yv;
	}
	function up(S, E, k, M) {
		if (r)
			throw new Error(
				"router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
			);
		G.has(S) && Bt(S);
		let B = a || o,
			I = ja(
				p.location,
				p.matches,
				u,
				s.v7_prependBasename,
				k,
				E,
				M == null ? void 0 : M.relative
			),
			F = Kn(B, I, u);
		if (!F) {
			Sl(S, E, Je(404, { pathname: I }));
			return;
		}
		let {
			path: A,
			submission: D,
			error: X,
		} = tc(s.v7_normalizeFormMethod, !0, I, M);
		if (X) {
			Sl(S, E, X);
			return;
		}
		let K = Ra(F, A);
		if (((_ = (M && M.preventScrollReset) === !0), D && ut(D.formMethod))) {
			sp(S, E, A, K, F, D);
			return;
		}
		ht.set(S, { routeId: E, path: A }), cp(S, E, A, K, F, D);
	}
	async function sp(S, E, k, M, B, I) {
		if ((Gi(), ht.delete(S), !M.route.action && !M.route.lazy)) {
			let Ee = Je(405, { method: I.formMethod, pathname: k, routeId: E });
			Sl(S, E, Ee);
			return;
		}
		let F = p.fetchers.get(S),
			A = Lv(I, F);
		p.fetchers.set(S, A), ee({ fetchers: new Map(p.fetchers) });
		let D = new AbortController(),
			X = _r(e.history, k, D.signal, I);
		G.set(S, D);
		let K = await Rr('action', X, M, B, i, l, u);
		if (X.signal.aborted) {
			G.get(S) === D && G.delete(S);
			return;
		}
		if (tr(K)) {
			G.delete(S), lt.add(S);
			let Ee = Nr(I);
			return (
				p.fetchers.set(S, Ee),
				ee({ fetchers: new Map(p.fetchers) }),
				vr(p, K, { submission: I, isFetchActionRedirect: !0 })
			);
		}
		if (Yr(K)) {
			Sl(S, E, K.error);
			return;
		}
		if (mn(K)) throw Je(400, { type: 'defer-action' });
		let We = p.navigation.location || p.location,
			ye = _r(e.history, We, D.signal),
			Ae = a || o,
			vt =
				p.navigation.state !== 'idle'
					? Kn(Ae, p.navigation.location, u)
					: p.matches;
		W(vt, "Didn't find any matches after fetcher action");
		let gr = ++It;
		Ft.set(S, gr);
		let Zi = Nr(I, K.data);
		p.fetchers.set(S, Zi);
		let [kl, kt] = nc(
			e.history,
			p,
			vt,
			I,
			We,
			Q,
			U,
			Se,
			ht,
			lt,
			Ae,
			u,
			{ [M.route.id]: K.data },
			void 0
		);
		kt
			.filter((Ee) => Ee.key !== S)
			.forEach((Ee) => {
				let yr = Ee.key,
					$u = p.fetchers.get(yr),
					mp = Nr(void 0, $u ? $u.data : void 0);
				p.fetchers.set(yr, mp),
					G.has(yr) && Bt(yr),
					Ee.controller && G.set(yr, Ee.controller);
			}),
			ee({ fetchers: new Map(p.fetchers) });
		let Cl = () => kt.forEach((Ee) => Bt(Ee.key));
		D.signal.addEventListener('abort', Cl);
		let {
			results: bi,
			loaderResults: eo,
			fetcherResults: to,
		} = await Du(p.matches, vt, kl, kt, ye);
		if (D.signal.aborted) return;
		D.signal.removeEventListener('abort', Cl),
			Ft.delete(S),
			G.delete(S),
			kt.forEach((Ee) => G.delete(Ee.key));
		let Tl = sc(bi);
		if (Tl) return vr(p, Tl);
		let { loaderData: te, errors: Xe } = oc(
			p,
			p.matches,
			kl,
			eo,
			void 0,
			kt,
			to,
			N
		);
		if (p.fetchers.has(S)) {
			let Ee = ni(K.data);
			p.fetchers.set(S, Ee);
		}
		let On = Iu(gr);
		p.navigation.state === 'loading' && gr > _n
			? (W(C, 'Expected pending action'),
			  R && R.abort(),
			  Et(p.navigation.location, {
					matches: vt,
					loaderData: te,
					errors: Xe,
					fetchers: new Map(p.fetchers),
			  }))
			: (ee(
					le(
						{ errors: Xe, loaderData: ac(p.loaderData, te, vt, Xe) },
						On || kt.length > 0 ? { fetchers: new Map(p.fetchers) } : {}
					)
			  ),
			  (Q = !1));
	}
	async function cp(S, E, k, M, B, I) {
		let F = p.fetchers.get(S),
			A = Nr(I, F ? F.data : void 0);
		p.fetchers.set(S, A), ee({ fetchers: new Map(p.fetchers) });
		let D = new AbortController(),
			X = _r(e.history, k, D.signal);
		G.set(S, D);
		let K = await Rr('loader', X, M, B, i, l, u);
		if (
			(mn(K) && (K = (await Wf(K, X.signal, !0)) || K),
			G.get(S) === D && G.delete(S),
			X.signal.aborted)
		)
			return;
		if (tr(K)) {
			lt.add(S), await vr(p, K);
			return;
		}
		if (Yr(K)) {
			let ye = qn(p.matches, E);
			p.fetchers.delete(S),
				ee({
					fetchers: new Map(p.fetchers),
					errors: { [ye.route.id]: K.error },
				});
			return;
		}
		W(!mn(K), 'Unhandled fetcher deferred data');
		let We = ni(K.data);
		p.fetchers.set(S, We), ee({ fetchers: new Map(p.fetchers) });
	}
	async function vr(S, E, k) {
		let {
			submission: M,
			replace: B,
			isFetchActionRedirect: I,
		} = k === void 0 ? {} : k;
		E.revalidate && (Q = !0);
		let F = cl(
			S.location,
			E.location,
			le({ _isRedirect: !0 }, I ? { _isFetchActionRedirect: !0 } : {})
		);
		if (
			(W(F, 'Expected a location on the redirect navigation'),
			Bf.test(E.location) && n)
		) {
			let X = e.history.createURL(E.location),
				K = mr(X.pathname, u) == null;
			if (t.location.origin !== X.origin || K) {
				B ? t.location.replace(E.location) : t.location.assign(E.location);
				return;
			}
		}
		R = null;
		let A = B === !0 ? pe.Replace : pe.Push,
			D = M || dc(S.navigation);
		if (gv.has(E.status) && D && ut(D.formMethod))
			await Ut(A, F, {
				submission: le({}, D, { formAction: E.location }),
				preventScrollReset: _,
			});
		else if (I)
			await Ut(A, F, {
				overrideNavigation: Wl(F),
				fetcherSubmission: D,
				preventScrollReset: _,
			});
		else {
			let X = Wl(F, D);
			await Ut(A, F, { overrideNavigation: X, preventScrollReset: _ });
		}
	}
	async function Du(S, E, k, M, B) {
		let I = await Promise.all([
				...k.map((D) => Rr('loader', B, D, E, i, l, u)),
				...M.map((D) =>
					D.matches && D.match && D.controller
						? Rr(
								'loader',
								_r(e.history, D.path, D.controller.signal),
								D.match,
								D.matches,
								i,
								l,
								u
						  )
						: { type: me.error, error: Je(404, { pathname: D.path }) }
				),
			]),
			F = I.slice(0, k.length),
			A = I.slice(k.length);
		return (
			await Promise.all([
				cc(
					S,
					k,
					F,
					F.map(() => B.signal),
					!1,
					p.loaderData
				),
				cc(
					S,
					M.map((D) => D.match),
					A,
					M.map((D) => (D.controller ? D.controller.signal : null)),
					!0
				),
			]),
			{ results: I, loaderResults: F, fetcherResults: A }
		);
	}
	function Gi() {
		(Q = !0),
			U.push(...Ji()),
			ht.forEach((S, E) => {
				G.has(E) && (Se.push(E), Bt(E));
			});
	}
	function Sl(S, E, k) {
		let M = qn(p.matches, E);
		Xi(S), ee({ errors: { [M.route.id]: k }, fetchers: new Map(p.fetchers) });
	}
	function Xi(S) {
		let E = p.fetchers.get(S);
		G.has(S) && !(E && E.state === 'loading' && Ft.has(S)) && Bt(S),
			ht.delete(S),
			Ft.delete(S),
			lt.delete(S),
			p.fetchers.delete(S);
	}
	function Bt(S) {
		let E = G.get(S);
		W(E, 'Expected fetch controller: ' + S), E.abort(), G.delete(S);
	}
	function Au(S) {
		for (let E of S) {
			let k = Mu(E),
				M = ni(k.data);
			p.fetchers.set(E, M);
		}
	}
	function zu() {
		let S = [],
			E = !1;
		for (let k of lt) {
			let M = p.fetchers.get(k);
			W(M, 'Expected fetcher: ' + k),
				M.state === 'loading' && (lt.delete(k), S.push(k), (E = !0));
		}
		return Au(S), E;
	}
	function Iu(S) {
		let E = [];
		for (let [k, M] of Ft)
			if (M < S) {
				let B = p.fetchers.get(k);
				W(B, 'Expected fetcher: ' + k),
					B.state === 'loading' && (Bt(k), Ft.delete(k), E.push(k));
			}
		return Au(E), E.length > 0;
	}
	function dp(S, E) {
		let k = p.blockers.get(S) || Pr;
		return z.get(S) !== E && z.set(S, E), k;
	}
	function Fu(S) {
		p.blockers.delete(S), z.delete(S);
	}
	function El(S, E) {
		let k = p.blockers.get(S) || Pr;
		W(
			(k.state === 'unblocked' && E.state === 'blocked') ||
				(k.state === 'blocked' && E.state === 'blocked') ||
				(k.state === 'blocked' && E.state === 'proceeding') ||
				(k.state === 'blocked' && E.state === 'unblocked') ||
				(k.state === 'proceeding' && E.state === 'unblocked'),
			'Invalid blocker state transition: ' + k.state + ' -> ' + E.state
		);
		let M = new Map(p.blockers);
		M.set(S, E), ee({ blockers: M });
	}
	function Uu(S) {
		let { currentLocation: E, nextLocation: k, historyAction: M } = S;
		if (z.size === 0) return;
		z.size > 1 && cr(!1, 'A router only supports one blocker at a time');
		let B = Array.from(z.entries()),
			[I, F] = B[B.length - 1],
			A = p.blockers.get(I);
		if (
			!(A && A.state === 'proceeding') &&
			F({ currentLocation: E, nextLocation: k, historyAction: M })
		)
			return I;
	}
	function Ji(S) {
		let E = [];
		return (
			N.forEach((k, M) => {
				(!S || S(M)) && (k.cancel(), E.push(M), N.delete(M));
			}),
			E
		);
	}
	function fp(S, E, k) {
		if (((v = S), (x = E), (y = k || null), !w && p.navigation === No)) {
			w = !0;
			let M = Hu(p.location, p.matches);
			M != null && ee({ restoreScrollPosition: M });
		}
		return () => {
			(v = null), (x = null), (y = null);
		};
	}
	function Bu(S, E) {
		return (
			(y &&
				y(
					S,
					E.map((M) => _v(M, p.loaderData))
				)) ||
			S.key
		);
	}
	function pp(S, E) {
		if (v && x) {
			let k = Bu(S, E);
			v[k] = x();
		}
	}
	function Hu(S, E) {
		if (v) {
			let k = Bu(S, E),
				M = v[k];
			if (typeof M == 'number') return M;
		}
		return null;
	}
	function hp(S) {
		(i = {}), (a = Ta(S, l, void 0, i));
	}
	return (
		(g = {
			get basename() {
				return u;
			},
			get state() {
				return p;
			},
			get routes() {
				return o;
			},
			initialize: oe,
			subscribe: Nn,
			enableScrollRestoration: fp,
			navigate: mt,
			fetch: up,
			revalidate: Ln,
			createHref: (S) => e.history.createHref(S),
			encodeLocation: (S) => e.history.encodeLocation(S),
			getFetcher: Mu,
			deleteFetcher: Xi,
			dispose: fe,
			getBlocker: dp,
			deleteBlocker: Fu,
			_internalFetchControllers: G,
			_internalActiveDeferreds: N,
			_internalSetRoutes: hp,
		}),
		g
	);
}
function Sv(e) {
	return (
		e != null &&
		(('formData' in e && e.formData != null) ||
			('body' in e && e.body !== void 0))
	);
}
function ja(e, t, n, r, l, i, o) {
	let a, u;
	if (i != null && o !== 'path') {
		a = [];
		for (let c of t)
			if ((a.push(c), c.route.id === i)) {
				u = c;
				break;
			}
	} else (a = t), (u = t[t.length - 1]);
	let s = Pu(
		l || '.',
		Yi(a).map((c) => c.pathnameBase),
		mr(e.pathname, n) || e.pathname,
		o === 'path'
	);
	return (
		l == null && ((s.search = e.search), (s.hash = e.hash)),
		(l == null || l === '' || l === '.') &&
			u &&
			u.route.index &&
			!_u(s.search) &&
			(s.search = s.search ? s.search.replace(/^\?/, '?index&') : '?index'),
		r &&
			n !== '/' &&
			(s.pathname = s.pathname === '/' ? n : Nt([n, s.pathname])),
		Cn(s)
	);
}
function tc(e, t, n, r) {
	if (!r || !Sv(r)) return { path: n };
	if (r.formMethod && !Rv(r.formMethod))
		return { path: n, error: Je(405, { method: r.formMethod }) };
	let l = () => ({ path: n, error: Je(400, { type: 'invalid-body' }) }),
		i = r.formMethod || 'get',
		o = e ? i.toUpperCase() : i.toLowerCase(),
		a = $f(n);
	if (r.body !== void 0) {
		if (r.formEncType === 'text/plain') {
			if (!ut(o)) return l();
			let v =
				typeof r.body == 'string'
					? r.body
					: r.body instanceof FormData || r.body instanceof URLSearchParams
					? Array.from(r.body.entries()).reduce((y, x) => {
							let [w, j] = x;
							return (
								'' +
								y +
								w +
								'=' +
								j +
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
	if (r.formData) (u = Pa(r.formData)), (s = r.formData);
	else if (r.body instanceof FormData) (u = Pa(r.body)), (s = r.body);
	else if (r.body instanceof URLSearchParams) (u = r.body), (s = ic(u));
	else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
	else
		try {
			(u = new URLSearchParams(r.body)), (s = ic(u));
		} catch {
			return l();
		}
	let c = {
		formMethod: o,
		formAction: a,
		formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
		formData: s,
		json: void 0,
		text: void 0,
	};
	if (ut(c.formMethod)) return { path: n, submission: c };
	let m = zt(n);
	return (
		t && m.search && _u(m.search) && u.append('index', ''),
		(m.search = '?' + u),
		{ path: Cn(m), submission: c }
	);
}
function Ev(e, t) {
	let n = e;
	if (t) {
		let r = e.findIndex((l) => l.route.id === t);
		r >= 0 && (n = e.slice(0, r));
	}
	return n;
}
function nc(e, t, n, r, l, i, o, a, u, s, c, m, v, y) {
	let x = y ? Object.values(y)[0] : v ? Object.values(v)[0] : void 0,
		w = e.createURL(t.location),
		j = e.createURL(l),
		h = y ? Object.keys(y)[0] : void 0,
		g = Ev(n, h).filter((C, _) => {
			if (C.route.lazy) return !0;
			if (C.route.loader == null) return !1;
			if (kv(t.loaderData, t.matches[_], C) || o.some((Q) => Q === C.route.id))
				return !0;
			let R = t.matches[_],
				O = C;
			return rc(
				C,
				le(
					{
						currentUrl: w,
						currentParams: R.params,
						nextUrl: j,
						nextParams: O.params,
					},
					r,
					{
						actionResult: x,
						defaultShouldRevalidate:
							i ||
							w.pathname + w.search === j.pathname + j.search ||
							w.search !== j.search ||
							Hf(R, O),
					}
				)
			);
		}),
		p = [];
	return (
		u.forEach((C, _) => {
			if (!n.some((G) => G.route.id === C.routeId)) return;
			let R = Kn(c, C.path, m);
			if (!R) {
				p.push({
					key: _,
					routeId: C.routeId,
					path: C.path,
					matches: null,
					match: null,
					controller: null,
				});
				return;
			}
			let O = t.fetchers.get(_),
				Q = O && O.state !== 'idle' && O.data === void 0 && !s.has(_),
				U = Ra(R, C.path);
			(a.includes(_) ||
				Q ||
				rc(
					U,
					le(
						{
							currentUrl: w,
							currentParams: t.matches[t.matches.length - 1].params,
							nextUrl: j,
							nextParams: n[n.length - 1].params,
						},
						r,
						{ actionResult: x, defaultShouldRevalidate: i }
					)
				)) &&
				p.push({
					key: _,
					routeId: C.routeId,
					path: C.path,
					matches: R,
					match: U,
					controller: new AbortController(),
				});
		}),
		[g, p]
	);
}
function kv(e, t, n) {
	let r = !t || n.route.id !== t.route.id,
		l = e[n.route.id] === void 0;
	return r || l;
}
function Hf(e, t) {
	let n = e.route.path;
	return (
		e.pathname !== t.pathname ||
		(n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
	);
}
function rc(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == 'boolean') return n;
	}
	return t.defaultShouldRevalidate;
}
async function lc(e, t, n) {
	if (!e.lazy) return;
	let r = await e.lazy();
	if (!e.lazy) return;
	let l = n[e.id];
	W(l, 'No route found in manifest');
	let i = {};
	for (let o in r) {
		let u = l[o] !== void 0 && o !== 'hasErrorBoundary';
		cr(
			!u,
			'Route "' +
				l.id +
				'" has a static property "' +
				o +
				'" defined but its lazy function is also returning a value for this property. ' +
				('The lazy route property "' + o + '" will be ignored.')
		),
			!u && !Ym.has(o) && (i[o] = r[o]);
	}
	Object.assign(l, i), Object.assign(l, le({}, t(l), { lazy: void 0 }));
}
async function Rr(e, t, n, r, l, i, o, a) {
	a === void 0 && (a = {});
	let u,
		s,
		c,
		m = (x) => {
			let w,
				j = new Promise((h, f) => (w = f));
			return (
				(c = () => w()),
				t.signal.addEventListener('abort', c),
				Promise.race([
					x({ request: t, params: n.params, context: a.requestContext }),
					j,
				])
			);
		};
	try {
		let x = n.route[e];
		if (n.route.lazy)
			if (x) s = (await Promise.all([m(x), lc(n.route, i, l)]))[0];
			else if ((await lc(n.route, i, l), (x = n.route[e]), x)) s = await m(x);
			else if (e === 'action') {
				let w = new URL(t.url),
					j = w.pathname + w.search;
				throw Je(405, { method: t.method, pathname: j, routeId: n.route.id });
			} else return { type: me.data, data: void 0 };
		else if (x) s = await m(x);
		else {
			let w = new URL(t.url),
				j = w.pathname + w.search;
			throw Je(404, { pathname: j });
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
		c && t.signal.removeEventListener('abort', c);
	}
	if (Pv(s)) {
		let x = s.status;
		if (vv.has(x)) {
			let h = s.headers.get('Location');
			if (
				(W(
					h,
					'Redirects returned/thrown from loaders/actions must have a Location header'
				),
				!Bf.test(h))
			)
				h = ja(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, h);
			else if (!a.isStaticRequest) {
				let f = new URL(t.url),
					g = h.startsWith('//') ? new URL(f.protocol + h) : new URL(h),
					p = mr(g.pathname, o) != null;
				g.origin === f.origin && p && (h = g.pathname + g.search + g.hash);
			}
			if (a.isStaticRequest) throw (s.headers.set('Location', h), s);
			return {
				type: me.redirect,
				status: x,
				location: h,
				revalidate: s.headers.get('X-Remix-Revalidate') !== null,
			};
		}
		if (a.isRouteRequest) throw { type: u || me.data, response: s };
		let w,
			j = s.headers.get('Content-Type');
		return (
			j && /\bapplication\/json\b/.test(j)
				? (w = await s.json())
				: (w = await s.text()),
			u === me.error
				? { type: u, error: new Ru(x, s.statusText, w), headers: s.headers }
				: { type: me.data, data: w, statusCode: s.status, headers: s.headers }
		);
	}
	if (u === me.error) return { type: u, error: s };
	if (jv(s)) {
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
function _r(e, t, n, r) {
	let l = e.createURL($f(t)).toString(),
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
				? (i.body = Pa(r.formData))
				: (i.body = r.formData);
	}
	return new Request(l, i);
}
function Pa(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries())
		t.append(n, typeof r == 'string' ? r : r.name);
	return t;
}
function ic(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function Cv(e, t, n, r, l) {
	let i = {},
		o = null,
		a,
		u = !1,
		s = {};
	return (
		n.forEach((c, m) => {
			let v = t[m].route.id;
			if (
				(W(!tr(c), 'Cannot handle redirect results in processLoaderData'),
				Yr(c))
			) {
				let y = qn(e, v),
					x = c.error;
				r && ((x = Object.values(r)[0]), (r = void 0)),
					(o = o || {}),
					o[y.route.id] == null && (o[y.route.id] = x),
					(i[v] = void 0),
					u || ((u = !0), (a = Ff(c.error) ? c.error.status : 500)),
					c.headers && (s[v] = c.headers);
			} else
				mn(c)
					? (l.set(v, c.deferredData), (i[v] = c.deferredData.data))
					: (i[v] = c.data),
					c.statusCode != null &&
						c.statusCode !== 200 &&
						!u &&
						(a = c.statusCode),
					c.headers && (s[v] = c.headers);
		}),
		r && ((o = r), (i[Object.keys(r)[0]] = void 0)),
		{ loaderData: i, errors: o, statusCode: a || 200, loaderHeaders: s }
	);
}
function oc(e, t, n, r, l, i, o, a) {
	let { loaderData: u, errors: s } = Cv(t, n, r, l, a);
	for (let c = 0; c < i.length; c++) {
		let { key: m, match: v, controller: y } = i[c];
		W(
			o !== void 0 && o[c] !== void 0,
			'Did not find corresponding fetcher result'
		);
		let x = o[c];
		if (!(y && y.signal.aborted))
			if (Yr(x)) {
				let w = qn(e.matches, v == null ? void 0 : v.route.id);
				(s && s[w.route.id]) || (s = le({}, s, { [w.route.id]: x.error })),
					e.fetchers.delete(m);
			} else if (tr(x)) W(!1, 'Unhandled fetcher revalidation redirect');
			else if (mn(x)) W(!1, 'Unhandled fetcher deferred data');
			else {
				let w = ni(x.data);
				e.fetchers.set(m, w);
			}
	}
	return { loaderData: u, errors: s };
}
function ac(e, t, n, r) {
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
function qn(e, t) {
	return (
		(t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
			.reverse()
			.find((r) => r.route.hasErrorBoundary === !0) || e[0]
	);
}
function uc(e) {
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
		new Ru(e || 500, o, new Error(a), !0)
	);
}
function sc(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (tr(n)) return n;
	}
}
function $f(e) {
	let t = typeof e == 'string' ? zt(e) : e;
	return Cn(le({}, t, { hash: '' }));
}
function Tv(e, t) {
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
function Yr(e) {
	return e.type === me.error;
}
function tr(e) {
	return (e && e.type) === me.redirect;
}
function jv(e) {
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
function Pv(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.headers == 'object' &&
		typeof e.body < 'u'
	);
}
function Rv(e) {
	return mv.has(e.toLowerCase());
}
function ut(e) {
	return pv.has(e.toLowerCase());
}
async function cc(e, t, n, r, l, i) {
	for (let o = 0; o < n.length; o++) {
		let a = n[o],
			u = t[o];
		if (!u) continue;
		let s = e.find((m) => m.route.id === u.route.id),
			c = s != null && !Hf(s, u) && (i && i[u.route.id]) !== void 0;
		if (mn(a) && (l || c)) {
			let m = r[o];
			W(m, 'Expected an AbortSignal for revalidating fetcher deferred result'),
				await Wf(a, m, l).then((v) => {
					v && (n[o] = v || n[o]);
				});
		}
	}
}
async function Wf(e, t, n) {
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
function _u(e) {
	return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function _v(e, t) {
	let { route: n, pathname: r, params: l } = e;
	return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Ra(e, t) {
	let n = typeof t == 'string' ? zt(t).search : t.search;
	if (e[e.length - 1].route.index && _u(n || '')) return e[e.length - 1];
	let r = Yi(e);
	return r[r.length - 1];
}
function dc(e) {
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
function Wl(e, t) {
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
function Nv(e, t) {
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
function Nr(e, t) {
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
function Lv(e, t) {
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
function ni(e) {
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
const Ki = P.createContext(null),
	Nu = P.createContext(null),
	Pn = P.createContext(null),
	qi = P.createContext(null),
	sn = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	Vf = P.createContext(null);
function Ov(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	xl() || W(!1);
	let { basename: r, navigator: l } = P.useContext(Pn),
		{ hash: i, pathname: o, search: a } = Lu(e, { relative: n }),
		u = o;
	return (
		r !== '/' && (u = o === '/' ? r : Nt([r, o])),
		l.createHref({ pathname: u, search: a, hash: i })
	);
}
function xl() {
	return P.useContext(qi) != null;
}
function Rn() {
	return xl() || W(!1), P.useContext(qi).location;
}
function Qf(e) {
	P.useContext(Pn).static || P.useLayoutEffect(e);
}
function Yf() {
	let { isDataRoute: e } = P.useContext(sn);
	return e ? Yv() : Mv();
}
function Mv() {
	xl() || W(!1);
	let e = P.useContext(Ki),
		{ basename: t, navigator: n } = P.useContext(Pn),
		{ matches: r } = P.useContext(sn),
		{ pathname: l } = Rn(),
		i = JSON.stringify(Yi(r).map((u) => u.pathnameBase)),
		o = P.useRef(!1);
	return (
		Qf(() => {
			o.current = !0;
		}),
		P.useCallback(
			function (u, s) {
				if ((s === void 0 && (s = {}), !o.current)) return;
				if (typeof u == 'number') {
					n.go(u);
					return;
				}
				let c = Pu(u, JSON.parse(i), l, s.relative === 'path');
				e == null &&
					t !== '/' &&
					(c.pathname = c.pathname === '/' ? t : Nt([t, c.pathname])),
					(s.replace ? n.replace : n.push)(c, s.state, s);
			},
			[t, n, i, l, e]
		)
	);
}
const Dv = P.createContext(null);
function Av(e) {
	let t = P.useContext(sn).outlet;
	return t && P.createElement(Dv.Provider, { value: e }, t);
}
function Lu(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ matches: r } = P.useContext(sn),
		{ pathname: l } = Rn(),
		i = JSON.stringify(Yi(r).map((o) => o.pathnameBase));
	return P.useMemo(() => Pu(e, JSON.parse(i), l, n === 'path'), [e, i, l, n]);
}
function zv(e, t, n) {
	xl() || W(!1);
	let { navigator: r } = P.useContext(Pn),
		{ matches: l } = P.useContext(sn),
		i = l[l.length - 1],
		o = i ? i.params : {};
	i && i.pathname;
	let a = i ? i.pathnameBase : '/';
	i && i.route;
	let u = Rn(),
		s;
	if (t) {
		var c;
		let w = typeof t == 'string' ? zt(t) : t;
		a === '/' || ((c = w.pathname) != null && c.startsWith(a)) || W(!1),
			(s = w);
	} else s = u;
	let m = s.pathname || '/',
		v = a === '/' ? m : m.slice(a.length) || '/',
		y = Kn(e, { pathname: v }),
		x = Hv(
			y &&
				y.map((w) =>
					Object.assign({}, w, {
						params: Object.assign({}, o, w.params),
						pathname: Nt([
							a,
							r.encodeLocation
								? r.encodeLocation(w.pathname).pathname
								: w.pathname,
						]),
						pathnameBase:
							w.pathnameBase === '/'
								? a
								: Nt([
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
		? P.createElement(
				qi.Provider,
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
function Iv() {
	let e = Qv(),
		t = Ff(e)
			? e.status + ' ' + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
		i = null;
	return P.createElement(
		P.Fragment,
		null,
		P.createElement('h2', null, 'Unexpected Application Error!'),
		P.createElement('h3', { style: { fontStyle: 'italic' } }, t),
		n ? P.createElement('pre', { style: l }, n) : null,
		i
	);
}
const Fv = P.createElement(Iv, null);
class Uv extends P.Component {
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
			? P.createElement(
					sn.Provider,
					{ value: this.props.routeContext },
					P.createElement(Vf.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function Bv(e) {
	let { routeContext: t, match: n, children: r } = e,
		l = P.useContext(Ki);
	return (
		l &&
			l.static &&
			l.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(l.staticContext._deepestRenderedBoundaryId = n.route.id),
		P.createElement(sn.Provider, { value: t }, r)
	);
}
function Hv(e, t, n) {
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
		let c = u.route.id ? (o == null ? void 0 : o[u.route.id]) : null,
			m = null;
		n && (m = u.route.errorElement || Fv);
		let v = t.concat(i.slice(0, s + 1)),
			y = () => {
				let x;
				return (
					c
						? (x = m)
						: u.route.Component
						? (x = P.createElement(u.route.Component, null))
						: u.route.element
						? (x = u.route.element)
						: (x = a),
					P.createElement(Bv, {
						match: u,
						routeContext: { outlet: a, matches: v, isDataRoute: n != null },
						children: x,
					})
				);
			};
		return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0)
			? P.createElement(Uv, {
					location: n.location,
					revalidation: n.revalidation,
					component: m,
					error: c,
					children: y(),
					routeContext: { outlet: null, matches: v, isDataRoute: !0 },
			  })
			: y();
	}, null);
}
var _a;
(function (e) {
	(e.UseBlocker = 'useBlocker'),
		(e.UseRevalidator = 'useRevalidator'),
		(e.UseNavigateStable = 'useNavigate');
})(_a || (_a = {}));
var dl;
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
})(dl || (dl = {}));
function $v(e) {
	let t = P.useContext(Ki);
	return t || W(!1), t;
}
function Wv(e) {
	let t = P.useContext(Nu);
	return t || W(!1), t;
}
function Vv(e) {
	let t = P.useContext(sn);
	return t || W(!1), t;
}
function Kf(e) {
	let t = Vv(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || W(!1), n.route.id;
}
function Qv() {
	var e;
	let t = P.useContext(Vf),
		n = Wv(dl.UseRouteError),
		r = Kf(dl.UseRouteError);
	return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Yv() {
	let { router: e } = $v(_a.UseNavigateStable),
		t = Kf(dl.UseNavigateStable),
		n = P.useRef(!1);
	return (
		Qf(() => {
			n.current = !0;
		}),
		P.useCallback(
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
const Kv = 'startTransition',
	fc = Op[Kv];
function qv(e) {
	let { fallbackElement: t, router: n, future: r } = e,
		[l, i] = P.useState(n.state),
		{ v7_startTransition: o } = r || {},
		a = P.useCallback(
			(m) => {
				o && fc ? fc(() => i(m)) : i(m);
			},
			[i, o]
		);
	P.useLayoutEffect(() => n.subscribe(a), [n, a]);
	let u = P.useMemo(
			() => ({
				createHref: n.createHref,
				encodeLocation: n.encodeLocation,
				go: (m) => n.navigate(m),
				push: (m, v, y) =>
					n.navigate(m, {
						state: v,
						preventScrollReset: y == null ? void 0 : y.preventScrollReset,
					}),
				replace: (m, v, y) =>
					n.navigate(m, {
						replace: !0,
						state: v,
						preventScrollReset: y == null ? void 0 : y.preventScrollReset,
					}),
			}),
			[n]
		),
		s = n.basename || '/',
		c = P.useMemo(
			() => ({ router: n, navigator: u, static: !1, basename: s }),
			[n, u, s]
		);
	return P.createElement(
		P.Fragment,
		null,
		P.createElement(
			Ki.Provider,
			{ value: c },
			P.createElement(
				Nu.Provider,
				{ value: l },
				P.createElement(
					Jv,
					{
						basename: s,
						location: l.location,
						navigationType: l.historyAction,
						navigator: u,
					},
					l.initialized
						? P.createElement(Gv, { routes: n.routes, state: l })
						: t
				)
			)
		),
		null
	);
}
function Gv(e) {
	let { routes: t, state: n } = e;
	return zv(t, void 0, n);
}
function Xv(e) {
	return Av(e.context);
}
function Jv(e) {
	let {
		basename: t = '/',
		children: n = null,
		location: r,
		navigationType: l = pe.Pop,
		navigator: i,
		static: o = !1,
	} = e;
	xl() && W(!1);
	let a = t.replace(/^\/*/, '/'),
		u = P.useMemo(() => ({ basename: a, navigator: i, static: o }), [a, i, o]);
	typeof r == 'string' && (r = zt(r));
	let {
			pathname: s = '/',
			search: c = '',
			hash: m = '',
			state: v = null,
			key: y = 'default',
		} = r,
		x = P.useMemo(() => {
			let w = mr(s, a);
			return w == null
				? null
				: {
						location: { pathname: w, search: c, hash: m, state: v, key: y },
						navigationType: l,
				  };
		}, [a, s, c, m, v, y, l]);
	return x == null
		? null
		: P.createElement(
				Pn.Provider,
				{ value: u },
				P.createElement(qi.Provider, { children: n, value: x })
		  );
}
var pc;
(function (e) {
	(e[(e.pending = 0)] = 'pending'),
		(e[(e.success = 1)] = 'success'),
		(e[(e.error = 2)] = 'error');
})(pc || (pc = {}));
new Promise(() => {});
function Zv(e) {
	let t = {
		hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
	};
	return (
		e.Component &&
			Object.assign(t, {
				element: P.createElement(e.Component),
				Component: void 0,
			}),
		e.ErrorBoundary &&
			Object.assign(t, {
				errorElement: P.createElement(e.ErrorBoundary),
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
 */ function dr() {
	return (
		(dr = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		dr.apply(this, arguments)
	);
}
function qf(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		l,
		i;
	for (i = 0; i < r.length; i++)
		(l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
	return n;
}
function bv(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function eg(e, t) {
	return e.button === 0 && (!t || t === '_self') && !bv(e);
}
const tg = [
		'onClick',
		'relative',
		'reloadDocument',
		'replace',
		'state',
		'target',
		'to',
		'preventScrollReset',
	],
	ng = [
		'aria-current',
		'caseSensitive',
		'className',
		'end',
		'style',
		'to',
		'children',
	];
function rg(e, t) {
	return xv({
		basename: t == null ? void 0 : t.basename,
		future: dr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
		history: Wm({ window: t == null ? void 0 : t.window }),
		hydrationData: (t == null ? void 0 : t.hydrationData) || lg(),
		routes: e,
		mapRouteProperties: Zv,
	}).initialize();
}
function lg() {
	var e;
	let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
	return t && t.errors && (t = dr({}, t, { errors: ig(t.errors) })), t;
}
function ig(e) {
	if (!e) return null;
	let t = Object.entries(e),
		n = {};
	for (let [r, l] of t)
		if (l && l.__type === 'RouteErrorResponse')
			n[r] = new Ru(l.status, l.statusText, l.data, l.internal === !0);
		else if (l && l.__type === 'Error') {
			let i = new Error(l.message);
			(i.stack = ''), (n[r] = i);
		} else n[r] = l;
	return n;
}
const og =
		typeof window < 'u' &&
		typeof window.document < 'u' &&
		typeof window.document.createElement < 'u',
	ag = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	ug = P.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: l,
				reloadDocument: i,
				replace: o,
				state: a,
				target: u,
				to: s,
				preventScrollReset: c,
			} = t,
			m = qf(t, tg),
			{ basename: v } = P.useContext(Pn),
			y,
			x = !1;
		if (typeof s == 'string' && ag.test(s) && ((y = s), og))
			try {
				let f = new URL(window.location.href),
					g = s.startsWith('//') ? new URL(f.protocol + s) : new URL(s),
					p = mr(g.pathname, v);
				g.origin === f.origin && p != null
					? (s = p + g.search + g.hash)
					: (x = !0);
			} catch {}
		let w = Ov(s, { relative: l }),
			j = sg(s, {
				replace: o,
				state: a,
				target: u,
				preventScrollReset: c,
				relative: l,
			});
		function h(f) {
			r && r(f), f.defaultPrevented || j(f);
		}
		return P.createElement(
			'a',
			dr({}, m, { href: y || w, onClick: x || i ? r : h, ref: n, target: u })
		);
	}),
	Le = P.forwardRef(function (t, n) {
		let {
				'aria-current': r = 'page',
				caseSensitive: l = !1,
				className: i = '',
				end: o = !1,
				style: a,
				to: u,
				children: s,
			} = t,
			c = qf(t, ng),
			m = Lu(u, { relative: c.relative }),
			v = Rn(),
			y = P.useContext(Nu),
			{ navigator: x } = P.useContext(Pn),
			w = x.encodeLocation ? x.encodeLocation(m).pathname : m.pathname,
			j = v.pathname,
			h =
				y && y.navigation && y.navigation.location
					? y.navigation.location.pathname
					: null;
		l ||
			((j = j.toLowerCase()),
			(h = h ? h.toLowerCase() : null),
			(w = w.toLowerCase()));
		let f = j === w || (!o && j.startsWith(w) && j.charAt(w.length) === '/'),
			g =
				h != null &&
				(h === w || (!o && h.startsWith(w) && h.charAt(w.length) === '/')),
			p = f ? r : void 0,
			C;
		typeof i == 'function'
			? (C = i({ isActive: f, isPending: g }))
			: (C = [i, f ? 'active' : null, g ? 'pending' : null]
					.filter(Boolean)
					.join(' '));
		let _ = typeof a == 'function' ? a({ isActive: f, isPending: g }) : a;
		return P.createElement(
			ug,
			dr({}, c, { 'aria-current': p, className: C, ref: n, style: _, to: u }),
			typeof s == 'function' ? s({ isActive: f, isPending: g }) : s
		);
	});
var hc;
(function (e) {
	(e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmit = 'useSubmit'),
		(e.UseSubmitFetcher = 'useSubmitFetcher'),
		(e.UseFetcher = 'useFetcher');
})(hc || (hc = {}));
var mc;
(function (e) {
	(e.UseFetchers = 'useFetchers'),
		(e.UseScrollRestoration = 'useScrollRestoration');
})(mc || (mc = {}));
function sg(e, t) {
	let {
			target: n,
			replace: r,
			state: l,
			preventScrollReset: i,
			relative: o,
		} = t === void 0 ? {} : t,
		a = Yf(),
		u = Rn(),
		s = Lu(e, { relative: o });
	return P.useCallback(
		(c) => {
			if (eg(c, n)) {
				c.preventDefault();
				let m = r !== void 0 ? r : Cn(u) === Cn(s);
				a(e, { replace: m, state: l, preventScrollReset: i, relative: o });
			}
		},
		[u, a, s, r, l, n, e, i, o]
	);
}
const cg = () => {
	const e = () => {
		let t, n, r, l;
		(t = document.querySelector('.menu')),
			(n = document.querySelector('.close')),
			(r = document.querySelector('#nav-list')),
			(l = document.querySelector('main')),
			r.classList.toggle('open'),
			t.classList.toggle('hidden'),
			n.classList.toggle('hidden'),
			l.classList.toggle('blur');
	};
	return (
		P.useEffect(() => {
			let t = document.querySelectorAll('#nav-list a');
			return (
				t.forEach((n) => {
					n.addEventListener('click', e);
				}),
				() => {
					t.forEach((n) => {
						n.removeEventListener('click', e);
					});
				}
			);
		}),
		d.jsxs('header', {
			children: [
				d.jsx('div', {
					id: 'logo',
					children: d.jsx('img', { src: '/images/logo.png', alt: '' }),
				}),
				d.jsxs('nav', {
					children: [
						d.jsxs('div', {
							className: 'visible-mobile',
							id: 'nav-icons',
							'aria-hidden': 'true',
							'aria-label': 'Menu icons',
							onClick: e,
							children: [
								d.jsx('span', {
									className: 'menu material-symbols-outlined',
									children: 'menu',
								}),
								d.jsx('span', {
									className: 'close material-symbols-outlined hidden',
									children: 'close',
								}),
							],
						}),
						d.jsx('div', {
							id: 'nav-list',
							children: d.jsxs('ul', {
								children: [
									d.jsx('li', {
										children: d.jsx(Le, { to: '/', children: 'Home' }),
									}),
									d.jsx('li', {
										children: d.jsx(Le, { to: '/about', children: 'About' }),
									}),
									d.jsx('li', {
										children: d.jsx(Le, {
											to: '/contact',
											children: 'Contact',
										}),
									}),
									d.jsx('li', {
										children: d.jsx(Le, {
											to: '/products',
											children: 'Products',
										}),
									}),
									d.jsx('li', {
										children: d.jsx(Le, {
											to: '/register',
											children: 'Register',
										}),
									}),
									d.jsx('li', {
										children: d.jsx(Le, { to: '/login', children: 'Login' }),
									}),
								],
							}),
						}),
					],
				}),
			],
		})
	);
};
var Gf = { exports: {} },
	dg = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
	fg = dg,
	pg = fg;
function Xf() {}
function Jf() {}
Jf.resetWarningCache = Xf;
var hg = function () {
	function e(r, l, i, o, a, u) {
		if (u !== pg) {
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
		checkPropTypes: Jf,
		resetWarningCache: Xf,
	};
	return (n.PropTypes = n), n;
};
Gf.exports = hg();
var mg = Gf.exports;
const ne = hl(mg);
function vg(e) {
	return e && typeof e == 'object' && 'default' in e ? e.default : e;
}
var Zf = P,
	gg = vg(Zf);
function vc(e, t, n) {
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
function yg(e, t) {
	(e.prototype = Object.create(t.prototype)),
		(e.prototype.constructor = e),
		(e.__proto__ = t);
}
var wg = !!(
	typeof window < 'u' &&
	window.document &&
	window.document.createElement
);
function xg(e, t, n) {
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
				o.map(function (c) {
					return c.props;
				})
			)),
				s.canUseDOM ? t(a) : n && (a = n(a));
		}
		var s = (function (c) {
			yg(m, c);
			function m() {
				return c.apply(this, arguments) || this;
			}
			(m.peek = function () {
				return a;
			}),
				(m.rewind = function () {
					if (m.canUseDOM)
						throw new Error(
							'You may only call rewind() on the server. Call peek() to read the current state.'
						);
					var x = a;
					return (a = void 0), (o = []), x;
				});
			var v = m.prototype;
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
					return gg.createElement(i, this.props);
				}),
				m
			);
		})(Zf.PureComponent);
		return (
			vc(s, 'displayName', 'SideEffect(' + r(i) + ')'),
			vc(s, 'canUseDOM', wg),
			s
		);
	};
}
var Sg = xg;
const Eg = hl(Sg);
var kg = typeof Element < 'u',
	Cg = typeof Map == 'function',
	Tg = typeof Set == 'function',
	jg = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
function ri(e, t) {
	if (e === t) return !0;
	if (e && t && typeof e == 'object' && typeof t == 'object') {
		if (e.constructor !== t.constructor) return !1;
		var n, r, l;
		if (Array.isArray(e)) {
			if (((n = e.length), n != t.length)) return !1;
			for (r = n; r-- !== 0; ) if (!ri(e[r], t[r])) return !1;
			return !0;
		}
		var i;
		if (Cg && e instanceof Map && t instanceof Map) {
			if (e.size !== t.size) return !1;
			for (i = e.entries(); !(r = i.next()).done; )
				if (!t.has(r.value[0])) return !1;
			for (i = e.entries(); !(r = i.next()).done; )
				if (!ri(r.value[1], t.get(r.value[0]))) return !1;
			return !0;
		}
		if (Tg && e instanceof Set && t instanceof Set) {
			if (e.size !== t.size) return !1;
			for (i = e.entries(); !(r = i.next()).done; )
				if (!t.has(r.value[0])) return !1;
			return !0;
		}
		if (jg && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
		if (kg && e instanceof Element) return !1;
		for (r = n; r-- !== 0; )
			if (
				!(
					(l[r] === '_owner' || l[r] === '__v' || l[r] === '__o') &&
					e.$$typeof
				) &&
				!ri(e[l[r]], t[l[r]])
			)
				return !1;
		return !0;
	}
	return e !== e && t !== t;
}
var Pg = function (t, n) {
	try {
		return ri(t, n);
	} catch (r) {
		if ((r.message || '').match(/stack|recursion/i))
			return console.warn('react-fast-compare cannot handle circular refs'), !1;
		throw r;
	}
};
const Rg = hl(Pg);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var gc = Object.getOwnPropertySymbols,
	_g = Object.prototype.hasOwnProperty,
	Ng = Object.prototype.propertyIsEnumerable;
function Lg(e) {
	if (e == null)
		throw new TypeError(
			'Object.assign cannot be called with null or undefined'
		);
	return Object(e);
}
function Og() {
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
var Mg = Og()
	? Object.assign
	: function (e, t) {
			for (var n, r = Lg(e), l, i = 1; i < arguments.length; i++) {
				n = Object(arguments[i]);
				for (var o in n) _g.call(n, o) && (r[o] = n[o]);
				if (gc) {
					l = gc(n);
					for (var a = 0; a < l.length; a++)
						Ng.call(n, l[a]) && (r[l[a]] = n[l[a]]);
				}
			}
			return r;
	  };
const Dg = hl(Mg);
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
	_i = {
		accesskey: 'accessKey',
		charset: 'charSet',
		class: 'className',
		contenteditable: 'contentEditable',
		contextmenu: 'contextMenu',
		'http-equiv': 'httpEquiv',
		itemprop: 'itemProp',
		tabindex: 'tabIndex',
	},
	fl = {
		DEFAULT_TITLE: 'defaultTitle',
		DEFER: 'defer',
		ENCODE_SPECIAL_CHARACTERS: 'encodeSpecialCharacters',
		ON_CHANGE_CLIENT_STATE: 'onChangeClientState',
		TITLE_TEMPLATE: 'titleTemplate',
	},
	Ag = Object.keys(_i).reduce(function (e, t) {
		return (e[_i[t]] = t), e;
	}, {}),
	zg = [H.NOSCRIPT, H.SCRIPT, H.STYLE],
	ct = 'data-react-helmet',
	Ig =
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
	Fg = function (e, t) {
		if (!(e instanceof t))
			throw new TypeError('Cannot call a class as a function');
	},
	Ug = (function () {
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
	ze =
		Object.assign ||
		function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n)
					Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
			}
			return e;
		},
	Bg = function (e, t) {
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
	yc = function (e, t) {
		var n = {};
		for (var r in e)
			t.indexOf(r) >= 0 ||
				(Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
		return n;
	},
	Hg = function (e, t) {
		if (!e)
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		return t && (typeof t == 'object' || typeof t == 'function') ? t : e;
	},
	Na = function (t) {
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
	$g = function (t) {
		var n = nr(t, H.TITLE),
			r = nr(t, fl.TITLE_TEMPLATE);
		if (r && n)
			return r.replace(/%s/g, function () {
				return Array.isArray(n) ? n.join('') : n;
			});
		var l = nr(t, fl.DEFAULT_TITLE);
		return n || l || void 0;
	},
	Wg = function (t) {
		return nr(t, fl.ON_CHANGE_CLIENT_STATE) || function () {};
	},
	Lo = function (t, n) {
		return n
			.filter(function (r) {
				return typeof r[t] < 'u';
			})
			.map(function (r) {
				return r[t];
			})
			.reduce(function (r, l) {
				return ze({}, r, l);
			}, {});
	},
	Vg = function (t, n) {
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
	Lr = function (t, n, r) {
		var l = {};
		return r
			.filter(function (i) {
				return Array.isArray(i[t])
					? !0
					: (typeof i[t] < 'u' &&
							qg(
								'Helmet: ' +
									t +
									' should be of type "Array". Instead found type "' +
									Ig(i[t]) +
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
						var j = x[w],
							h = j.toLowerCase();
						n.indexOf(h) !== -1 &&
							!(y === re.REL && v[y].toLowerCase() === 'canonical') &&
							!(h === re.REL && v[h].toLowerCase() === 'stylesheet') &&
							(y = h),
							n.indexOf(j) !== -1 &&
								(j === re.INNER_HTML ||
									j === re.CSS_TEXT ||
									j === re.ITEM_PROP) &&
								(y = j);
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
					var c = u[s],
						m = Dg({}, l[c], a[c]);
					l[c] = m;
				}
				return i;
			}, [])
			.reverse();
	},
	nr = function (t, n) {
		for (var r = t.length - 1; r >= 0; r--) {
			var l = t[r];
			if (l.hasOwnProperty(n)) return l[n];
		}
		return null;
	},
	Qg = function (t) {
		return {
			baseTag: Vg([re.HREF, re.TARGET], t),
			bodyAttributes: Lo(yn.BODY, t),
			defer: nr(t, fl.DEFER),
			encode: nr(t, fl.ENCODE_SPECIAL_CHARACTERS),
			htmlAttributes: Lo(yn.HTML, t),
			linkTags: Lr(H.LINK, [re.REL, re.HREF], t),
			metaTags: Lr(
				H.META,
				[re.NAME, re.CHARSET, re.HTTPEQUIV, re.PROPERTY, re.ITEM_PROP],
				t
			),
			noscriptTags: Lr(H.NOSCRIPT, [re.INNER_HTML], t),
			onChangeClientState: Wg(t),
			scriptTags: Lr(H.SCRIPT, [re.SRC, re.INNER_HTML], t),
			styleTags: Lr(H.STYLE, [re.CSS_TEXT], t),
			title: $g(t),
			titleAttributes: Lo(yn.TITLE, t),
		};
	},
	La = (function () {
		var e = Date.now();
		return function (t) {
			var n = Date.now();
			n - e > 16
				? ((e = n), t(n))
				: setTimeout(function () {
						La(t);
				  }, 0);
		};
	})(),
	wc = function (t) {
		return clearTimeout(t);
	},
	Yg =
		typeof window < 'u'
			? (window.requestAnimationFrame &&
					window.requestAnimationFrame.bind(window)) ||
			  window.webkitRequestAnimationFrame ||
			  window.mozRequestAnimationFrame ||
			  La
			: global.requestAnimationFrame || La,
	Kg =
		typeof window < 'u'
			? window.cancelAnimationFrame ||
			  window.webkitCancelAnimationFrame ||
			  window.mozCancelAnimationFrame ||
			  wc
			: global.cancelAnimationFrame || wc,
	qg = function (t) {
		return console && typeof console.warn == 'function' && console.warn(t);
	},
	Or = null,
	Gg = function (t) {
		Or && Kg(Or),
			t.defer
				? (Or = Yg(function () {
						xc(t, function () {
							Or = null;
						});
				  }))
				: (xc(t), (Or = null));
	},
	xc = function (t, n) {
		var r = t.baseTag,
			l = t.bodyAttributes,
			i = t.htmlAttributes,
			o = t.linkTags,
			a = t.metaTags,
			u = t.noscriptTags,
			s = t.onChangeClientState,
			c = t.scriptTags,
			m = t.styleTags,
			v = t.title,
			y = t.titleAttributes;
		Oa(H.BODY, l), Oa(H.HTML, i), Xg(v, y);
		var x = {
				baseTag: Dn(H.BASE, r),
				linkTags: Dn(H.LINK, o),
				metaTags: Dn(H.META, a),
				noscriptTags: Dn(H.NOSCRIPT, u),
				scriptTags: Dn(H.SCRIPT, c),
				styleTags: Dn(H.STYLE, m),
			},
			w = {},
			j = {};
		Object.keys(x).forEach(function (h) {
			var f = x[h],
				g = f.newTags,
				p = f.oldTags;
			g.length && (w[h] = g), p.length && (j[h] = x[h].oldTags);
		}),
			n && n(),
			s(t, w, j);
	},
	bf = function (t) {
		return Array.isArray(t) ? t.join('') : t;
	},
	Xg = function (t, n) {
		typeof t < 'u' && document.title !== t && (document.title = bf(t)),
			Oa(H.TITLE, n);
	},
	Oa = function (t, n) {
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
					c = n[s] || '';
				r.getAttribute(s) !== c && r.setAttribute(s, c),
					i.indexOf(s) === -1 && i.push(s);
				var m = o.indexOf(s);
				m !== -1 && o.splice(m, 1);
			}
			for (var v = o.length - 1; v >= 0; v--) r.removeAttribute(o[v]);
			i.length === o.length
				? r.removeAttribute(ct)
				: r.getAttribute(ct) !== a.join(',') && r.setAttribute(ct, a.join(','));
		}
	},
	Dn = function (t, n) {
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
					for (var c in u)
						if (u.hasOwnProperty(c))
							if (c === re.INNER_HTML) s.innerHTML = u.innerHTML;
							else if (c === re.CSS_TEXT)
								s.styleSheet
									? (s.styleSheet.cssText = u.cssText)
									: s.appendChild(document.createTextNode(u.cssText));
							else {
								var m = typeof u[c] > 'u' ? '' : u[c];
								s.setAttribute(c, m);
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
	ep = function (t) {
		return Object.keys(t).reduce(function (n, r) {
			var l = typeof t[r] < 'u' ? r + '="' + t[r] + '"' : '' + r;
			return n ? n + ' ' + l : l;
		}, '');
	},
	Jg = function (t, n, r, l) {
		var i = ep(r),
			o = bf(n);
		return i
			? '<' + t + ' ' + ct + '="true" ' + i + '>' + Na(o, l) + '</' + t + '>'
			: '<' + t + ' ' + ct + '="true">' + Na(o, l) + '</' + t + '>';
	},
	Zg = function (t, n, r) {
		return n.reduce(function (l, i) {
			var o = Object.keys(i)
					.filter(function (s) {
						return !(s === re.INNER_HTML || s === re.CSS_TEXT);
					})
					.reduce(function (s, c) {
						var m = typeof i[c] > 'u' ? c : c + '="' + Na(i[c], r) + '"';
						return s ? s + ' ' + m : m;
					}, ''),
				a = i.innerHTML || i.cssText || '',
				u = zg.indexOf(t) === -1;
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
	tp = function (t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		return Object.keys(t).reduce(function (r, l) {
			return (r[_i[l] || l] = t[l]), r;
		}, n);
	},
	bg = function (t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		return Object.keys(t).reduce(function (r, l) {
			return (r[Ag[l] || l] = t[l]), r;
		}, n);
	},
	ey = function (t, n, r) {
		var l,
			i = ((l = { key: n }), (l[ct] = !0), l),
			o = tp(r, i);
		return [Ue.createElement(H.TITLE, o, n)];
	},
	ty = function (t, n) {
		return n.map(function (r, l) {
			var i,
				o = ((i = { key: l }), (i[ct] = !0), i);
			return (
				Object.keys(r).forEach(function (a) {
					var u = _i[a] || a;
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
						return ey(t, n.title, n.titleAttributes);
					},
					toString: function () {
						return Jg(t, n.title, n.titleAttributes, r);
					},
				};
			case yn.BODY:
			case yn.HTML:
				return {
					toComponent: function () {
						return tp(n);
					},
					toString: function () {
						return ep(n);
					},
				};
			default:
				return {
					toComponent: function () {
						return ty(t, n);
					},
					toString: function () {
						return Zg(t, n, r);
					},
				};
		}
	},
	np = function (t) {
		var n = t.baseTag,
			r = t.bodyAttributes,
			l = t.encode,
			i = t.htmlAttributes,
			o = t.linkTags,
			a = t.metaTags,
			u = t.noscriptTags,
			s = t.scriptTags,
			c = t.styleTags,
			m = t.title,
			v = m === void 0 ? '' : m,
			y = t.titleAttributes;
		return {
			base: Ct(H.BASE, n, l),
			bodyAttributes: Ct(yn.BODY, r, l),
			htmlAttributes: Ct(yn.HTML, i, l),
			link: Ct(H.LINK, o, l),
			meta: Ct(H.META, a, l),
			noscript: Ct(H.NOSCRIPT, u, l),
			script: Ct(H.SCRIPT, s, l),
			style: Ct(H.STYLE, c, l),
			title: Ct(H.TITLE, { title: v, titleAttributes: y }, l),
		};
	},
	ny = function (t) {
		var n, r;
		return (
			(r = n =
				(function (l) {
					Bg(i, l);
					function i() {
						return Fg(this, i), Hg(this, l.apply(this, arguments));
					}
					return (
						(i.prototype.shouldComponentUpdate = function (a) {
							return !Rg(this.props, a);
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
								c = a.arrayTypeChildren,
								m = a.newChildProps,
								v = a.nestedChildren;
							return ze(
								{},
								c,
								((u = {}),
								(u[s.type] = [].concat(c[s.type] || [], [
									ze({}, m, this.mapNestedChildrenToProps(s, v)),
								])),
								u)
							);
						}),
						(i.prototype.mapObjectTypeChildren = function (a) {
							var u,
								s,
								c = a.child,
								m = a.newProps,
								v = a.newChildProps,
								y = a.nestedChildren;
							switch (c.type) {
								case H.TITLE:
									return ze(
										{},
										m,
										((u = {}),
										(u[c.type] = y),
										(u.titleAttributes = ze({}, v)),
										u)
									);
								case H.BODY:
									return ze({}, m, { bodyAttributes: ze({}, v) });
								case H.HTML:
									return ze({}, m, { htmlAttributes: ze({}, v) });
							}
							return ze({}, m, ((s = {}), (s[c.type] = ze({}, v)), s));
						}),
						(i.prototype.mapArrayTypeChildrenToProps = function (a, u) {
							var s = ze({}, u);
							return (
								Object.keys(a).forEach(function (c) {
									var m;
									s = ze({}, s, ((m = {}), (m[c] = a[c]), m));
								}),
								s
							);
						}),
						(i.prototype.warnOnInvalidChildren = function (a, u) {
							return !0;
						}),
						(i.prototype.mapChildrenToProps = function (a, u) {
							var s = this,
								c = {};
							return (
								Ue.Children.forEach(a, function (m) {
									if (!(!m || !m.props)) {
										var v = m.props,
											y = v.children,
											x = yc(v, ['children']),
											w = bg(x);
										switch ((s.warnOnInvalidChildren(m, y), m.type)) {
											case H.LINK:
											case H.META:
											case H.NOSCRIPT:
											case H.SCRIPT:
											case H.STYLE:
												c = s.flattenArrayTypeChildren({
													child: m,
													arrayTypeChildren: c,
													newChildProps: w,
													nestedChildren: y,
												});
												break;
											default:
												u = s.mapObjectTypeChildren({
													child: m,
													newProps: u,
													newChildProps: w,
													nestedChildren: y,
												});
												break;
										}
									}
								}),
								(u = this.mapArrayTypeChildrenToProps(c, u)),
								u
							);
						}),
						(i.prototype.render = function () {
							var a = this.props,
								u = a.children,
								s = yc(a, ['children']),
								c = ze({}, s);
							return (
								u && (c = this.mapChildrenToProps(u, c)), Ue.createElement(t, c)
							);
						}),
						Ug(i, null, [
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
						(l = np({
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
	ry = function () {
		return null;
	},
	ly = Eg(Qg, Gg, np)(ry),
	pl = ny(ly);
pl.renderStatic = pl.rewind;
const rp = () => {
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
	iy = () => (
		P.useEffect(() => {
			let e, t, n, r;
			(e = document.querySelector('.carousel')),
				(t = document.querySelectorAll('.carousel-item')),
				(n = 0),
				(r = t.length);
			let l, i;
			(l = document.querySelector('.next')),
				(i = document.querySelector('.prev'));
			const o = (a) => {
				(n += a),
					n < 0 ? (n = r - 1) : n >= r && (n = 0),
					(e.style.transform = `translateX(-${n * t[0].clientWidth}px)`);
			};
			l.addEventListener('click', () => o(1)),
				i.addEventListener('click', () => o(-1));
		}, []),
		P.useEffect(() => {
			const e = () => {
				document.querySelectorAll('.animated').forEach((n) => {
					let r = window.scrollY,
						l = window.innerHeight,
						i = n.offsetTop;
					i < l || r + l > i
						? n.classList.remove('slide-in')
						: n.classList.add('slide-in');
				});
			};
			return (
				window.addEventListener('scroll', e),
				e(),
				() => window.removeEventListener('scroll', e)
			);
		}, []),
		d.jsxs(d.Fragment, {
			children: [
				d.jsxs(pl, {
					children: [
						d.jsx('meta', {
							property: 'og:title',
							content: 'MBC - Mma Beauty Care',
						}),
						d.jsx('meta', {
							property: 'og:description',
							content: 'Discover the Power of Natural Skincare',
						}),
						d.jsx('meta', {
							name: 'description',
							content:
								'At MBC, we are your premier destination for high-quality skincare products. We partner with leading skincare brands to bring you a curated selection of the finest products that will nourish, rejuvenate, and protect your skin.',
						}),
						d.jsx('title', { children: 'MBC | Mma Beauty Care' }),
					],
				}),
				d.jsxs('main', {
					onClick: rp,
					id: 'home',
					children: [
						d.jsxs('section', {
							id: 'intro',
							children: [
								d.jsx('h1', {
									className: 'animated slide-in',
									children: 'Mma Beauty Care',
								}),
								d.jsx('p', {
									className: 'animated slide-in',
									children: 'Discover the Best Skincare Products',
								}),
								d.jsx(Le, {
									to: '/products',
									className: 'btn animated slide-in',
									children: 'View available products',
								}),
							],
						}),
						d.jsxs('section', {
							className: 'animated slide-in',
							id: 'featured',
							children: [
								d.jsx('img', {
									src: '/images/img_collage.png',
									alt: 'Skincare products collage',
								}),
								d.jsx('p', {
									children:
										'Explore our handpicked collection of skincare products from renowned brands. From gentle cleansers and rejuvenating serums to nourishing moisturizers and age-defying treatments, we offer a diverse range of products to cater to all your skincare needs.',
								}),
							],
						}),
						d.jsxs('section', {
							id: 'reasons',
							children: [
								d.jsx('h2', {
									className: 'fancy-header',
									children: 'Why Choose MBC',
								}),
								d.jsxs('ul', {
									children: [
										d.jsxs('li', {
											className: 'animated slide-in',
											children: [
												d.jsx('img', {
													src: '/images/trusted_brands.jpg',
													alt: '',
												}),
												d.jsxs('article', {
													children: [
														d.jsx('h3', { children: 'Trusted Brands' }),
														d.jsx('p', {
															children:
																'We collaborate with trusted skincare brands known for their commitment to quality, innovation, and exceptional results.',
														}),
													],
												}),
											],
										}),
										d.jsxs('li', {
											className: 'animated slide-in',
											children: [
												d.jsx('img', {
													src: '/images/expert_curation.webp',
													alt: '',
												}),
												d.jsxs('article', {
													children: [
														d.jsx('h3', { children: 'Expert Curation' }),
														d.jsx('p', {
															children:
																'Our team of skincare enthusiasts carefully curates each product in my collection, ensuring that you have access to the best skincare options available.',
														}),
													],
												}),
											],
										}),
										d.jsxs('li', {
											className: 'animated slide-in',
											children: [
												d.jsx('img', {
													src: '/images/comprehensive_range.jpg',
													alt: '',
												}),
												d.jsxs('article', {
													children: [
														d.jsx('h3', { children: 'Comprehensive Range' }),
														d.jsx('p', {
															children:
																'We offer a wide array of products targeting various skin concerns, so you can find the perfect solution for your unique skin type and goals.',
														}),
													],
												}),
											],
										}),
										d.jsxs('li', {
											className: 'animated slide-in',
											children: [
												d.jsx('img', {
													src: '/images/customer_service.webp',
													alt: '',
												}),
												d.jsxs('article', {
													children: [
														d.jsx('h3', {
															children: 'Exceptional Customer Service',
														}),
														d.jsx('p', {
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
						d.jsxs('section', {
							id: 'testimonials',
							children: [
								d.jsx('h2', { children: 'What Our Customers Say About Us' }),
								d.jsxs('div', {
									className: 'carousel-container',
									children: [
										d.jsxs('div', {
											className: 'carousel',
											children: [
												d.jsxs('article', {
													className: 'carousel-item',
													children: [
														d.jsxs('div', {
															children: [
																d.jsx('img', {
																	src: '/images/IMG-20230714-WA0004.jpg',
																	alt: '',
																}),
																d.jsx('p', { children: 'Claire' }),
															],
														}),
														d.jsx('p', {
															children:
																'My skin was bumpy as Nigerian roads until I met MBC. She helped me figure my skin concerns. She recommended skincare products to me. I used them consistently and now my skin is flawless. I can now confidently flex my glow without being criticized because of outbreaks. Thank you so much MBC store. You guys are the best',
														}),
														d.jsxs('address', {
															children: [
																d.jsx('a', {
																	href: 'tel:+2348108742236',
																	children: d.jsx('span', {
																		className: 'material-symbols-outlined',
																		children: 'Phone',
																	}),
																}),
																d.jsx('a', {
																	href: 'https://wa.me/2348108742236',
																	children: d.jsx('span', {
																		className: 'material-symbols-outlined',
																		children: 'chat',
																	}),
																}),
															],
														}),
													],
												}),
												d.jsxs('article', {
													className: 'carousel-item',
													children: [
														d.jsxs('div', {
															children: [
																d.jsx('img', {
																	src: '/images/IMG-20230715-WA0000.jpg',
																	alt: '',
																}),
																d.jsx('p', { children: 'Favour' }),
															],
														}),
														d.jsx('p', {
															children:
																"My skincare journey has been quite difficult until I met Mma Beauty Care (MBC). I've tried a lot of products and they weren't really working. I met MBC and I got a free consultation and their products are very effective and affordable. I can assure you that they're really the best.",
														}),
														d.jsxs('address', {
															children: [
																d.jsx('a', {
																	href: 'tel:+2349049861570',
																	children: d.jsx('span', {
																		className: 'material-symbols-outlined',
																		children: 'Phone',
																	}),
																}),
																d.jsx('a', {
																	href: 'https://wa.me/2349049861570',
																	children: d.jsx('span', {
																		className: 'material-symbols-outlined',
																		children: 'chat',
																	}),
																}),
															],
														}),
													],
												}),
												d.jsxs('article', {
													className: 'carousel-item',
													children: [
														d.jsxs('div', {
															children: [
																d.jsx('img', {
																	src: '/images/IMG-20230715-WA0006.jpg',
																	alt: '',
																}),
																d.jsx('p', {}),
															],
														}),
														d.jsx('p', {
															children:
																"I didn't exactly have terrible skin conditions, but I had outbreaks now and then and I was always getting rashes and hyper-pigmentation when I used many different products in the name of skincare 😭. Then MBC came around and she recommended some products for me and I bought them all cos I was desperate😭. Within a month of steady routine, this is my skin in its natural glow, without any filters at all. Just sunlight and face. I don't even have any products on my face as at this time.",
														}),
														d.jsxs('address', {
															children: [
																d.jsx('a', {
																	href: 'tel:+2349049026878',
																	children: d.jsx('span', {
																		className: 'material-symbols-outlined',
																		children: 'Phone',
																	}),
																}),
																d.jsx('a', {
																	href: 'https://wa.me/2349049026878',
																	children: d.jsx('span', {
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
										d.jsx('span', {
											className: 'next material-symbols-outlined',
											children: 'arrow_right',
										}),
										d.jsx('span', {
											className: 'prev material-symbols-outlined',
											children: 'arrow_left',
										}),
									],
								}),
							],
						}),
						d.jsx('section', {
							id: 'contact',
							children: d.jsxs('form', {
								className: 'animated slide-in',
								children: [
									d.jsx('h2', { children: "We'd love to hear from you" }),
									d.jsx('p', { children: 'Send us a message' }),
									d.jsxs('div', {
										className: 'field-group',
										children: [
											d.jsx('input', {
												required: !0,
												type: 'text',
												id: 'name',
												name: 'name',
											}),
											d.jsx('label', {
												htmlFor: 'name',
												children: 'Full name',
											}),
										],
									}),
									d.jsxs('div', {
										className: 'field-group',
										children: [
											d.jsx('input', {
												required: !0,
												type: 'tel',
												name: 'phone',
												id: 'phone',
											}),
											d.jsx('label', {
												htmlFor: 'phone',
												children: 'Phone no.',
											}),
										],
									}),
									d.jsx('textarea', {
										required: !0,
										placeholder: 'Write your message here...',
										name: 'message',
										id: 'message',
										cols: '30',
										rows: '10',
									}),
									d.jsx('button', {
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
	),
	oy = () => (
		P.useEffect(() => {
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
		d.jsxs(d.Fragment, {
			children: [
				d.jsxs(pl, {
					children: [
						d.jsx('meta', {
							property: 'og:title',
							content: 'About MBC | Mma Beauty Care',
						}),
						d.jsx('meta', {
							property: 'og:description',
							content: 'Discover the Power of Natural Skincare',
						}),
						d.jsx('meta', {
							name: 'description',
							content:
								'At MBC, we are your premier destination for high-quality skincare products. We partner with leading skincare brands to bring you a curated selection of the finest products that will nourish, rejuvenate, and protect your skin.',
						}),
						d.jsx('title', { children: 'About MBC | Mma Beauty Care' }),
					],
				}),
				d.jsxs('main', {
					onClick: rp,
					id: 'about',
					children: [
						d.jsxs('section', {
							id: 'intro',
							children: [
								d.jsx('img', {
									src: '/images/mbc.jpg',
									alt: '',
									className: 'animated slide-in-right',
								}),
								d.jsxs('article', {
									children: [
										d.jsx('h1', {
											className: 'animated slide-in-right',
											children: 'Welcome',
										}),
										d.jsx('p', {
											className: 'animated slide-in-right',
											children:
												'Welcome to MBC your trusted source for exceptional skincare products. As a vendor, we collaborate with top skincare brands to bring you a thoughtfully curated selection of products that have been meticulously chosen for their quality and efficacy.',
										}),
									],
								}),
							],
						}),
						d.jsxs('section', {
							id: 'mission',
							children: [
								d.jsx('img', {
									src: '/images/our_mission.jpg',
									alt: '',
									className: 'animated slide-in-right',
								}),
								d.jsxs('article', {
									children: [
										d.jsx('h2', {
											className: 'animated slide-in-right',
											children: 'Our Mission',
										}),
										d.jsx('p', {
											className: 'animated slide-in-right',
											children:
												'Our mission at MBC is to provide you with access to a comprehensive range of skincare products from trusted brands. We aim to simplify your skincare shopping experience by offering a curated collection that meets the diverse needs and preferences of our valued customers.',
										}),
									],
								}),
							],
						}),
						d.jsxs('section', {
							id: 'approach',
							children: [
								d.jsxs('article', {
									children: [
										d.jsx('h2', {
											className: 'animated slide-in-right',
											children: 'Our Approach',
										}),
										d.jsx('p', {
											className: 'animated slide-in-right',
											children:
												'We believe in the power of collaboration. By partnering with leading skincare brands, we can offer you a wide variety of products that have undergone rigorous testing and are backed by scientific research. Our commitment to excellence ensures that every product we purchase meets the highest standards of quality and effectiveness.',
										}),
									],
								}),
								d.jsx('img', {
									src: '/images/collaboration.jpg',
									alt: '',
									className: 'animated slide-in-right',
								}),
							],
						}),
						d.jsxs('section', {
							id: 'customer-satisfaction',
							children: [
								d.jsx('img', {
									src: '/images/customer_support.jpg',
									alt: '',
									className: 'animated slide-in-right',
								}),
								d.jsxs('article', {
									children: [
										d.jsx('h2', {
											className: 'animated slide-in-right',
											children: 'Customer Satisfaction',
										}),
										d.jsx('p', {
											className: 'animated slide-in-right',
											children:
												'Your satisfaction is our top priority. We understand that skincare is personal,and we strive to provide you with the best possible experience. Our dedicated customer service team is here to assist you, answer your questions, and guide you towards finding the perfect skincare products that will help you achieve your desired results.',
										}),
									],
								}),
							],
						}),
						d.jsx('section', {
							id: 'invitation',
							children: d.jsxs('article', {
								children: [
									d.jsx('h2', {
										className: 'fancy-header-2',
										children: 'Join the MBC Community',
									}),
									d.jsx('p', {
										children:
											'Join our community of skincare enthusiasts! Connect with us on social media, share your skincare journey, and stay updated with the latest trends and insights. We love hearing from our customers and are here to support you on your quest for healthy and radiant skin.',
									}),
									d.jsx(Le, {
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
	ay = () => {
		let e = Rn();
		P.useEffect(() => {
			window.scrollTo(0, 0);
		}, [e]);
	},
	uy = () =>
		d.jsxs('footer', {
			children: [
				d.jsxs('section', {
					id: 'logo',
					children: [
						d.jsx('img', { src: '/images/logo.png', alt: '' }),
						d.jsxs('span', {
							children: [
								'MBC',
								d.jsx('sup', { children: '©' }),
								' ',
								new Date().getFullYear(),
							],
						}),
					],
				}),
				d.jsx('nav', {
					children: d.jsxs('ul', {
						children: [
							d.jsx('li', {
								children: d.jsx(Le, { to: '/', children: 'Home' }),
							}),
							d.jsx('li', {
								children: d.jsx(Le, { to: '/about', children: 'About' }),
							}),
							d.jsx('li', {
								children: d.jsx(Le, { to: '/contact', children: 'Contact' }),
							}),
							d.jsx('li', {
								children: d.jsx(Le, { to: '/products', children: 'Products' }),
							}),
							d.jsx('li', {
								children: d.jsx(Le, { to: '/register', children: 'Register' }),
							}),
							d.jsx('li', {
								children: d.jsx(Le, { to: '/login', children: 'Login' }),
							}),
						],
					}),
				}),
			],
		});
var lp = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0,
	},
	Sc = Ue.createContext && Ue.createContext(lp),
	nn =
		(globalThis && globalThis.__assign) ||
		function () {
			return (
				(nn =
					Object.assign ||
					function (e) {
						for (var t, n = 1, r = arguments.length; n < r; n++) {
							t = arguments[n];
							for (var l in t)
								Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
						}
						return e;
					}),
				nn.apply(this, arguments)
			);
		},
	sy =
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
function ip(e) {
	return (
		e &&
		e.map(function (t, n) {
			return Ue.createElement(t.tag, nn({ key: n }, t.attr), ip(t.child));
		})
	);
}
function Ou(e) {
	return function (t) {
		return Ue.createElement(cy, nn({ attr: nn({}, e.attr) }, t), ip(e.child));
	};
}
function cy(e) {
	var t = function (n) {
		var r = e.attr,
			l = e.size,
			i = e.title,
			o = sy(e, ['attr', 'size', 'title']),
			a = l || n.size || '1em',
			u;
		return (
			n.className && (u = n.className),
			e.className && (u = (u ? u + ' ' : '') + e.className),
			Ue.createElement(
				'svg',
				nn(
					{ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
					n.attr,
					r,
					o,
					{
						className: u,
						style: nn(nn({ color: e.color || n.color }, n.style), e.style),
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
	return Sc !== void 0
		? Ue.createElement(Sc.Consumer, null, function (n) {
				return t(n);
		  })
		: t(lp);
}
function dy(e) {
	return Ou({
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
function fy(e) {
	return Ou({
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
function py(e) {
	return Ou({
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
const hy = () => (
		P.useEffect(() => {
			const e = () => {
				document.querySelectorAll('.animated').forEach((n) => {
					let r = window.scrollY,
						l = window.innerHeight,
						i = n.offsetTop;
					i < l || r + l > i
						? n.classList.remove('slide-in')
						: n.classList.add('slide-in');
				});
			};
			return (
				window.addEventListener('scroll', e),
				e(),
				() => window.removeEventListener('scroll', e)
			);
		}, []),
		d.jsxs(d.Fragment, {
			children: [
				d.jsx(pl, {
					children: d.jsx('title', {
						children: 'Contact MBC | Mma Beauty Care',
					}),
				}),
				d.jsxs('main', {
					id: 'contact',
					children: [
						d.jsxs('section', {
							id: 'intro',
							children: [
								d.jsx('h1', {
									className: 'animated slide-in',
									children: 'Contact Us',
								}),
								d.jsx('p', {
									className: 'animated slide-in',
									children:
										"We'd love to here from you and answer all your questions.",
								}),
							],
						}),
						d.jsxs('section', {
							id: 'contact-options',
							children: [
								d.jsx('h2', {
									className: 'fancy-header-2',
									children: 'Connect with us on social media',
								}),
								d.jsxs('div', {
									children: [
										d.jsxs('a', {
											href: 'https://wa.me/2348101321849',
											target: '_blank',
											className: 'animated slide-in',
											children: [d.jsx(fy, {}), ' WhatsApp'],
										}),
										d.jsxs('a', {
											href: 'https://tiktok.com/@mmabeautycare?_t=8e3jRQumDBd&_r=1',
											target: '_blank',
											className: 'animated slide-in',
											children: [d.jsx(py, {}), ' TikTok'],
										}),
										d.jsxs('a', {
											href: 'https://instagram.com/invites/contact/?i=1hmx8xbaijlhpw&utm_content=qv0519s',
											target: '_blank',
											className: 'animated slide-in',
											children: [d.jsx(dy, {}), ' Instagram'],
										}),
									],
								}),
							],
						}),
						d.jsx('section', {
							id: 'form',
							children: d.jsxs('form', {
								className: 'animated slide-in',
								children: [
									d.jsx('h2', { children: 'Ask us a question' }),
									d.jsx('p', {
										children: 'Please fill in the correct details required.',
									}),
									d.jsxs('div', {
										className: 'field-group',
										children: [
											d.jsx('input', {
												required: !0,
												type: 'text',
												id: 'name',
												name: 'name',
											}),
											d.jsx('label', {
												htmlFor: 'name',
												children: 'Full name',
											}),
										],
									}),
									d.jsxs('div', {
										className: 'field-group',
										children: [
											d.jsx('input', {
												required: !0,
												type: 'tel',
												name: 'phone',
												id: 'phone',
											}),
											d.jsx('label', {
												htmlFor: 'phone',
												children: 'Phone no.',
											}),
										],
									}),
									d.jsx('textarea', {
										required: !0,
										placeholder: 'Ask your question here...',
										name: 'message',
										id: 'message',
										cols: '30',
										rows: '10',
									}),
									d.jsx('button', {
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
	),
	my = () => {
		let e = Yf();
		return d.jsxs('main', {
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
				d.jsx('h1', {
					style: { font: '4rem "Playfair Display"' },
					children: '404',
				}),
				d.jsx('p', { children: "That's an error." }),
				d.jsx(Le, {
					onClick: () => e(-1),
					className: 'btn',
					children: 'Go back',
				}),
			],
		});
	},
	vy = () =>
		d.jsx('main', {
			id: 'register',
			children: d.jsx('section', {
				id: 'form',
				children: d.jsxs('form', {
					children: [
						d.jsx('h1', { children: 'Sign up' }),
						d.jsx('p', {
							children: 'Create an MBC account to enjoy offers and discounts',
						}),
						d.jsxs('div', {
							className: 'field-group',
							children: [
								d.jsx('input', {
									required: !0,
									type: 'text',
									id: 'name',
									name: 'name',
								}),
								d.jsx('label', { htmlFor: 'name', children: 'Full name' }),
							],
						}),
						d.jsxs('div', {
							className: 'field-group',
							children: [
								d.jsx('input', {
									required: !0,
									type: 'tel',
									name: 'phone',
									id: 'phone',
								}),
								d.jsx('label', { htmlFor: 'phone', children: 'Phone no.' }),
							],
						}),
						d.jsxs('div', {
							className: 'field-group',
							children: [
								d.jsx('input', {
									type: 'email',
									name: 'email',
									id: 'email',
									required: !0,
								}),
								d.jsx('label', { htmlFor: 'email', children: 'Email' }),
							],
						}),
						d.jsxs('div', {
							className: 'field-group',
							children: [
								d.jsx('input', {
									type: 'password',
									name: 'password',
									id: 'password',
									required: !0,
								}),
								d.jsx('label', { htmlFor: 'password', children: 'Password' }),
							],
						}),
						d.jsx('button', {
							className: 'btn',
							type: 'submit',
							children: 'Submit',
						}),
					],
				}),
			}),
		}),
	gy = () =>
		d.jsx('main', {
			id: 'register',
			children: d.jsx('section', {
				id: 'form',
				children: d.jsxs('form', {
					children: [
						d.jsx('h1', { children: 'Sign in' }),
						d.jsx('p', {
							children:
								'Sign in to your account enjoy enjoy offers and discounts',
						}),
						d.jsxs('div', {
							className: 'field-group',
							children: [
								d.jsx('input', {
									type: 'email',
									name: 'email',
									id: 'email',
									required: !0,
								}),
								d.jsx('label', { htmlFor: 'email', children: 'Email' }),
							],
						}),
						d.jsxs('div', {
							className: 'field-group',
							children: [
								d.jsx('input', {
									type: 'password',
									name: 'password',
									id: 'password',
									required: !0,
								}),
								d.jsx('label', { htmlFor: 'password', children: 'Password' }),
							],
						}),
						d.jsx('button', {
							className: 'btn',
							type: 'submit',
							children: 'Submit',
						}),
					],
				}),
			}),
		}),
	yy = () => {
		let e = Rn();
		P.useEffect(() => {
			let t = document.getElementById('root');
			switch (e.pathname) {
				case '/login':
				case '/register':
					t.classList.add('grid');
					break;
				default:
					t.classList.remove('grid');
					break;
			}
		}, [e]);
	},
	wy = rg([
		{
			path: '/',
			element: d.jsxs(d.Fragment, {
				children: [
					d.jsx(ay, {}),
					d.jsx(yy, {}),
					d.jsx(cg, {}),
					d.jsx(Xv, {}),
					d.jsx(uy, {}),
				],
			}),
			children: [
				{ index: !0, element: d.jsx(iy, {}) },
				{ path: 'about', element: d.jsx(oy, {}) },
				{ path: 'contact', element: d.jsx(hy, {}) },
				{ path: 'register', element: d.jsx(vy, {}) },
				{ path: 'login', element: d.jsx(gy, {}) },
			],
			errorElement: d.jsx(my, {}),
		},
	]);
function xy() {
	return d.jsx(qv, { router: wy });
}
Oo.createRoot(document.getElementById('root')).render(
	d.jsx(Ue.StrictMode, { children: d.jsx(xy, {}) })
);

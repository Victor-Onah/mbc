function sp(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const l in r)
				if (l !== 'default' && !(l in e)) {
					const o = Object.getOwnPropertyDescriptor(r, l);
					o &&
						Object.defineProperty(
							e,
							l,
							o.get ? o : { enumerable: !0, get: () => r[l] }
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
		for (const o of l)
			if (o.type === 'childList')
				for (const i of o.addedNodes)
					i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(l) {
		const o = {};
		return (
			l.integrity && (o.integrity = l.integrity),
			l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
			l.crossOrigin === 'use-credentials'
				? (o.credentials = 'include')
				: l.crossOrigin === 'anonymous'
				? (o.credentials = 'omit')
				: (o.credentials = 'same-origin'),
			o
		);
	}
	function r(l) {
		if (l.ep) return;
		l.ep = !0;
		const o = n(l);
		fetch(l.href, o);
	}
})();
function dl(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var wc = { exports: {} },
	No = {},
	Sc = { exports: {} },
	V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pl = Symbol.for('react.element'),
	cp = Symbol.for('react.portal'),
	fp = Symbol.for('react.fragment'),
	dp = Symbol.for('react.strict_mode'),
	pp = Symbol.for('react.profiler'),
	hp = Symbol.for('react.provider'),
	mp = Symbol.for('react.context'),
	vp = Symbol.for('react.forward_ref'),
	yp = Symbol.for('react.suspense'),
	gp = Symbol.for('react.memo'),
	wp = Symbol.for('react.lazy'),
	Hu = Symbol.iterator;
function Sp(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Hu && e[Hu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var Ec = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	xc = Object.assign,
	kc = {};
function cr(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = kc),
		(this.updater = n || Ec);
}
cr.prototype.isReactComponent = {};
cr.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		);
	this.updater.enqueueSetState(this, e, t, 'setState');
};
cr.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Cc() {}
Cc.prototype = cr.prototype;
function Oa(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = kc),
		(this.updater = n || Ec);
}
var Ma = (Oa.prototype = new Cc());
Ma.constructor = Oa;
xc(Ma, cr.prototype);
Ma.isPureReactComponent = !0;
var $u = Array.isArray,
	Tc = Object.prototype.hasOwnProperty,
	Da = { current: null },
	Pc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rc(e, t, n) {
	var r,
		l = {},
		o = null,
		i = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (i = t.ref),
		t.key !== void 0 && (o = '' + t.key),
		t))
			Tc.call(t, r) && !Pc.hasOwnProperty(r) && (l[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) l.children = n;
	else if (1 < a) {
		for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
		l.children = u;
	}
	if (e && e.defaultProps)
		for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
	return {
		$$typeof: pl,
		type: e,
		key: o,
		ref: i,
		props: l,
		_owner: Da.current,
	};
}
function Ep(e, t) {
	return {
		$$typeof: pl,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function Aa(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === pl;
}
function xp(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Wu = /\/+/g;
function ni(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? xp('' + e.key)
		: t.toString(36);
}
function $l(e, t, n, r, l) {
	var o = typeof e;
	(o === 'undefined' || o === 'boolean') && (e = null);
	var i = !1;
	if (e === null) i = !0;
	else
		switch (o) {
			case 'string':
			case 'number':
				i = !0;
				break;
			case 'object':
				switch (e.$$typeof) {
					case pl:
					case cp:
						i = !0;
				}
		}
	if (i)
		return (
			(i = e),
			(l = l(i)),
			(e = r === '' ? '.' + ni(i, 0) : r),
			$u(l)
				? ((n = ''),
				  e != null && (n = e.replace(Wu, '$&/') + '/'),
				  $l(l, t, n, '', function (s) {
						return s;
				  }))
				: l != null &&
				  (Aa(l) &&
						(l = Ep(
							l,
							n +
								(!l.key || (i && i.key === l.key)
									? ''
									: ('' + l.key).replace(Wu, '$&/') + '/') +
								e
						)),
				  t.push(l)),
			1
		);
	if (((i = 0), (r = r === '' ? '.' : r + ':'), $u(e)))
		for (var a = 0; a < e.length; a++) {
			o = e[a];
			var u = r + ni(o, a);
			i += $l(o, t, n, u, l);
		}
	else if (((u = Sp(e)), typeof u == 'function'))
		for (e = u.call(e), a = 0; !(o = e.next()).done; )
			(o = o.value), (u = r + ni(o, a++)), (i += $l(o, t, n, u, l));
	else if (o === 'object')
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
	return i;
}
function Cl(e, t, n) {
	if (e == null) return e;
	var r = [],
		l = 0;
	return (
		$l(e, r, '', '', function (o) {
			return t.call(n, o, l++);
		}),
		r
	);
}
function kp(e) {
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
	Wl = { transition: null },
	Cp = {
		ReactCurrentDispatcher: Oe,
		ReactCurrentBatchConfig: Wl,
		ReactCurrentOwner: Da,
	};
V.Children = {
	map: Cl,
	forEach: function (e, t, n) {
		Cl(
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
			Cl(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			Cl(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!Aa(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			);
		return e;
	},
};
V.Component = cr;
V.Fragment = fp;
V.Profiler = pp;
V.PureComponent = Oa;
V.StrictMode = dp;
V.Suspense = yp;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cp;
V.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.'
		);
	var r = xc({}, e.props),
		l = e.key,
		o = e.ref,
		i = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (i = Da.current)),
			t.key !== void 0 && (l = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var a = e.type.defaultProps;
		for (u in t)
			Tc.call(t, u) &&
				!Pc.hasOwnProperty(u) &&
				(r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
	}
	var u = arguments.length - 2;
	if (u === 1) r.children = n;
	else if (1 < u) {
		a = Array(u);
		for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
		r.children = a;
	}
	return { $$typeof: pl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
V.createContext = function (e) {
	return (
		(e = {
			$$typeof: mp,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: hp, _context: e }),
		(e.Consumer = e)
	);
};
V.createElement = Rc;
V.createFactory = function (e) {
	var t = Rc.bind(null, e);
	return (t.type = e), t;
};
V.createRef = function () {
	return { current: null };
};
V.forwardRef = function (e) {
	return { $$typeof: vp, render: e };
};
V.isValidElement = Aa;
V.lazy = function (e) {
	return { $$typeof: wp, _payload: { _status: -1, _result: e }, _init: kp };
};
V.memo = function (e, t) {
	return { $$typeof: gp, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
	var t = Wl.transition;
	Wl.transition = {};
	try {
		e();
	} finally {
		Wl.transition = t;
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
Sc.exports = V;
var _ = Sc.exports;
const hn = dl(_),
	Tp = sp({ __proto__: null, default: hn }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pp = _,
	Rp = Symbol.for('react.element'),
	_p = Symbol.for('react.fragment'),
	jp = Object.prototype.hasOwnProperty,
	Np = Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Lp = { key: !0, ref: !0, __self: !0, __source: !0 };
function _c(e, t, n) {
	var r,
		l = {},
		o = null,
		i = null;
	n !== void 0 && (o = '' + n),
		t.key !== void 0 && (o = '' + t.key),
		t.ref !== void 0 && (i = t.ref);
	for (r in t) jp.call(t, r) && !Lp.hasOwnProperty(r) && (l[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
	return {
		$$typeof: Rp,
		type: e,
		key: o,
		ref: i,
		props: l,
		_owner: Np.current,
	};
}
No.Fragment = _p;
No.jsx = _c;
No.jsxs = _c;
wc.exports = No;
var y = wc.exports,
	Li = {},
	jc = { exports: {} },
	Ke = {},
	Nc = { exports: {} },
	Lc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(N, I) {
		var $ = N.length;
		N.push(I);
		e: for (; 0 < $; ) {
			var ie = ($ - 1) >>> 1,
				de = N[ie];
			if (0 < l(de, I)) (N[ie] = I), (N[$] = de), ($ = ie);
			else break e;
		}
	}
	function n(N) {
		return N.length === 0 ? null : N[0];
	}
	function r(N) {
		if (N.length === 0) return null;
		var I = N[0],
			$ = N.pop();
		if ($ !== I) {
			N[0] = $;
			e: for (var ie = 0, de = N.length, _n = de >>> 1; ie < _n; ) {
				var ee = 2 * (ie + 1) - 1,
					Et = N[ee],
					ht = ee + 1,
					jn = N[ht];
				if (0 > l(Et, $))
					ht < de && 0 > l(jn, Et)
						? ((N[ie] = jn), (N[ht] = $), (ie = ht))
						: ((N[ie] = Et), (N[ee] = $), (ie = ee));
				else if (ht < de && 0 > l(jn, $)) (N[ie] = jn), (N[ht] = $), (ie = ht);
				else break e;
			}
		}
		return I;
	}
	function l(N, I) {
		var $ = N.sortIndex - I.sortIndex;
		return $ !== 0 ? $ : N.id - I.id;
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var o = performance;
		e.unstable_now = function () {
			return o.now();
		};
	} else {
		var i = Date,
			a = i.now();
		e.unstable_now = function () {
			return i.now() - a;
		};
	}
	var u = [],
		s = [],
		c = 1,
		h = null,
		m = 3,
		g = !1,
		S = !1,
		w = !1,
		P = typeof setTimeout == 'function' ? setTimeout : null,
		p = typeof clearTimeout == 'function' ? clearTimeout : null,
		f = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function v(N) {
		for (var I = n(s); I !== null; ) {
			if (I.callback === null) r(s);
			else if (I.startTime <= N)
				r(s), (I.sortIndex = I.expirationTime), t(u, I);
			else break;
			I = n(s);
		}
	}
	function d(N) {
		if (((w = !1), v(N), !S))
			if (n(u) !== null) (S = !0), rt(C);
			else {
				var I = n(s);
				I !== null && pt(d, I.startTime - N);
			}
	}
	function C(N, I) {
		(S = !1), w && ((w = !1), p(O), (O = -1)), (g = !0);
		var $ = m;
		try {
			for (
				v(I), h = n(u);
				h !== null && (!(h.expirationTime > I) || (N && !Ee()));

			) {
				var ie = h.callback;
				if (typeof ie == 'function') {
					(h.callback = null), (m = h.priorityLevel);
					var de = ie(h.expirationTime <= I);
					(I = e.unstable_now()),
						typeof de == 'function' ? (h.callback = de) : h === n(u) && r(u),
						v(I);
				} else r(u);
				h = n(u);
			}
			if (h !== null) var _n = !0;
			else {
				var ee = n(s);
				ee !== null && pt(d, ee.startTime - I), (_n = !1);
			}
			return _n;
		} finally {
			(h = null), (m = $), (g = !1);
		}
	}
	var j = !1,
		R = null,
		O = -1,
		Q = 5,
		U = -1;
	function Ee() {
		return !(e.unstable_now() - U < Q);
	}
	function X() {
		if (R !== null) {
			var N = e.unstable_now();
			U = N;
			var I = !0;
			try {
				I = R(!0, N);
			} finally {
				I ? It() : ((j = !1), (R = null));
			}
		} else j = !1;
	}
	var It;
	if (typeof f == 'function')
		It = function () {
			f(X);
		};
	else if (typeof MessageChannel < 'u') {
		var Rn = new MessageChannel(),
			zt = Rn.port2;
		(Rn.port1.onmessage = X),
			(It = function () {
				zt.postMessage(null);
			});
	} else
		It = function () {
			P(X, 0);
		};
	function rt(N) {
		(R = N), j || ((j = !0), It());
	}
	function pt(N, I) {
		O = P(function () {
			N(e.unstable_now());
		}, I);
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
			S || g || ((S = !0), rt(C));
		}),
		(e.unstable_forceFrameRate = function (N) {
			0 > N || 125 < N
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (Q = 0 < N ? Math.floor(1e3 / N) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return m;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(u);
		}),
		(e.unstable_next = function (N) {
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
				return N();
			} finally {
				m = $;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (N, I) {
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
			var $ = m;
			m = N;
			try {
				return I();
			} finally {
				m = $;
			}
		}),
		(e.unstable_scheduleCallback = function (N, I, $) {
			var ie = e.unstable_now();
			switch (
				(typeof $ == 'object' && $ !== null
					? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? ie + $ : ie))
					: ($ = ie),
				N)
			) {
				case 1:
					var de = -1;
					break;
				case 2:
					de = 250;
					break;
				case 5:
					de = 1073741823;
					break;
				case 4:
					de = 1e4;
					break;
				default:
					de = 5e3;
			}
			return (
				(de = $ + de),
				(N = {
					id: c++,
					callback: I,
					priorityLevel: N,
					startTime: $,
					expirationTime: de,
					sortIndex: -1,
				}),
				$ > ie
					? ((N.sortIndex = $),
					  t(s, N),
					  n(u) === null &&
							N === n(s) &&
							(w ? (p(O), (O = -1)) : (w = !0), pt(d, $ - ie)))
					: ((N.sortIndex = de), t(u, N), S || g || ((S = !0), rt(C))),
				N
			);
		}),
		(e.unstable_shouldYield = Ee),
		(e.unstable_wrapCallback = function (N) {
			var I = m;
			return function () {
				var $ = m;
				m = I;
				try {
					return N.apply(this, arguments);
				} finally {
					m = $;
				}
			};
		});
})(Lc);
Nc.exports = Lc;
var Op = Nc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oc = _,
	Ye = Op;
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
var Mc = new Set(),
	Yr = {};
function Cn(e, t) {
	tr(e, t), tr(e + 'Capture', t);
}
function tr(e, t) {
	for (Yr[e] = t, e = 0; e < t.length; e++) Mc.add(t[e]);
}
var Nt = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	Oi = Object.prototype.hasOwnProperty,
	Mp =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Vu = {},
	Qu = {};
function Dp(e) {
	return Oi.call(Qu, e)
		? !0
		: Oi.call(Vu, e)
		? !1
		: Mp.test(e)
		? (Qu[e] = !0)
		: ((Vu[e] = !0), !1);
}
function Ap(e, t, n, r) {
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
function Ip(e, t, n, r) {
	if (t === null || typeof t > 'u' || Ap(e, t, n, r)) return !0;
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
function Me(e, t, n, r, l, o, i) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = l),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = i);
}
var Te = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		Te[e] = new Me(e, 0, !1, e, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0];
	Te[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	Te[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (e) {
	Te[e] = new Me(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		Te[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	Te[e] = new Me(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	Te[e] = new Me(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	Te[e] = new Me(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	Te[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ia = /[\-:]([a-z])/g;
function za(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Ia, za);
		Te[t] = new Me(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Ia, za);
		Te[t] = new Me(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(Ia, za);
	Te[t] = new Me(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	Te[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new Me(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	Te[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Fa(e, t, n, r) {
	var l = Te.hasOwnProperty(t) ? Te[t] : null;
	(l !== null
		? l.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(Ip(t, n, l, r) && (n = null),
		r || l === null
			? Dp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var Dt = Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Tl = Symbol.for('react.element'),
	Mn = Symbol.for('react.portal'),
	Dn = Symbol.for('react.fragment'),
	Ua = Symbol.for('react.strict_mode'),
	Mi = Symbol.for('react.profiler'),
	Dc = Symbol.for('react.provider'),
	Ac = Symbol.for('react.context'),
	Ba = Symbol.for('react.forward_ref'),
	Di = Symbol.for('react.suspense'),
	Ai = Symbol.for('react.suspense_list'),
	Ha = Symbol.for('react.memo'),
	Ht = Symbol.for('react.lazy'),
	Ic = Symbol.for('react.offscreen'),
	Yu = Symbol.iterator;
function gr(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Yu && e[Yu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var se = Object.assign,
	ri;
function Or(e) {
	if (ri === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			ri = (t && t[1]) || '';
		}
	return (
		`
` +
		ri +
		e
	);
}
var li = !1;
function oi(e, t) {
	if (!e || li) return '';
	li = !0;
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
					o = r.stack.split(`
`),
					i = l.length - 1,
					a = o.length - 1;
				1 <= i && 0 <= a && l[i] !== o[a];

			)
				a--;
			for (; 1 <= i && 0 <= a; i--, a--)
				if (l[i] !== o[a]) {
					if (i !== 1 || a !== 1)
						do
							if ((i--, a--, 0 > a || l[i] !== o[a])) {
								var u =
									`
` + l[i].replace(' at new ', ' at ');
								return (
									e.displayName &&
										u.includes('<anonymous>') &&
										(u = u.replace('<anonymous>', e.displayName)),
									u
								);
							}
						while (1 <= i && 0 <= a);
					break;
				}
		}
	} finally {
		(li = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : '') ? Or(e) : '';
}
function zp(e) {
	switch (e.tag) {
		case 5:
			return Or(e.type);
		case 16:
			return Or('Lazy');
		case 13:
			return Or('Suspense');
		case 19:
			return Or('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = oi(e.type, !1)), e;
		case 11:
			return (e = oi(e.type.render, !1)), e;
		case 1:
			return (e = oi(e.type, !0)), e;
		default:
			return '';
	}
}
function Ii(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case Dn:
			return 'Fragment';
		case Mn:
			return 'Portal';
		case Mi:
			return 'Profiler';
		case Ua:
			return 'StrictMode';
		case Di:
			return 'Suspense';
		case Ai:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case Ac:
				return (e.displayName || 'Context') + '.Consumer';
			case Dc:
				return (e._context.displayName || 'Context') + '.Provider';
			case Ba:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case Ha:
				return (
					(t = e.displayName || null), t !== null ? t : Ii(e.type) || 'Memo'
				);
			case Ht:
				(t = e._payload), (e = e._init);
				try {
					return Ii(e(t));
				} catch {}
		}
	return null;
}
function Fp(e) {
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
			return Ii(t);
		case 8:
			return t === Ua ? 'StrictMode' : 'Mode';
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
function tn(e) {
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
function zc(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	);
}
function Up(e) {
	var t = zc(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var l = n.get,
			o = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return l.call(this);
				},
				set: function (i) {
					(r = '' + i), o.call(this, i);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (i) {
					r = '' + i;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function Pl(e) {
	e._valueTracker || (e._valueTracker = Up(e));
}
function Fc(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return (
		e && (r = zc(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function no(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function zi(e, t) {
	var n = t.checked;
	return se({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Ku(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = tn(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null,
		});
}
function Uc(e, t) {
	(t = t.checked), t != null && Fa(e, 'checked', t, !1);
}
function Fi(e, t) {
	Uc(e, t);
	var n = tn(t.value),
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
		? Ui(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && Ui(e, t.type, tn(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Gu(e, t, n) {
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
function Ui(e, t, n) {
	(t !== 'number' || no(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Mr = Array.isArray;
function Kn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
		for (n = 0; n < e.length; n++)
			(l = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== l && (e[n].selected = l),
				l && r && (e[n].defaultSelected = !0);
	} else {
		for (n = '' + tn(n), t = null, l = 0; l < e.length; l++) {
			if (e[l].value === n) {
				(e[l].selected = !0), r && (e[l].defaultSelected = !0);
				return;
			}
			t !== null || e[l].disabled || (t = e[l]);
		}
		t !== null && (t.selected = !0);
	}
}
function Bi(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
	return se({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue,
	});
}
function Xu(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(T(92));
			if (Mr(n)) {
				if (1 < n.length) throw Error(T(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ''), (n = t);
	}
	e._wrapperState = { initialValue: tn(n) };
}
function Bc(e, t) {
	var n = tn(t.value),
		r = tn(t.defaultValue);
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r);
}
function qu(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Hc(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function Hi(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? Hc(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e;
}
var Rl,
	$c = (function (e) {
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
				Rl = Rl || document.createElement('div'),
					Rl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = Rl.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Kr(e, t) {
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
	Bp = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ir).forEach(function (e) {
	Bp.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ir[t] = Ir[e]);
	});
});
function Wc(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (Ir.hasOwnProperty(e) && Ir[e])
		? ('' + t).trim()
		: t + 'px';
}
function Vc(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				l = Wc(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
		}
}
var Hp = se(
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
function $i(e, t) {
	if (t) {
		if (Hp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Wi(e, t) {
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
var Vi = null;
function $a(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Qi = null,
	Gn = null,
	Xn = null;
function Ju(e) {
	if ((e = vl(e))) {
		if (typeof Qi != 'function') throw Error(T(280));
		var t = e.stateNode;
		t && ((t = Ao(t)), Qi(e.stateNode, e.type, t));
	}
}
function Qc(e) {
	Gn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Gn = e);
}
function Yc() {
	if (Gn) {
		var e = Gn,
			t = Xn;
		if (((Xn = Gn = null), Ju(e), t)) for (e = 0; e < t.length; e++) Ju(t[e]);
	}
}
function Kc(e, t) {
	return e(t);
}
function Gc() {}
var ii = !1;
function Xc(e, t, n) {
	if (ii) return e(t, n);
	ii = !0;
	try {
		return Kc(e, t, n);
	} finally {
		(ii = !1), (Gn !== null || Xn !== null) && (Gc(), Yc());
	}
}
function Gr(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Ao(n);
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
var Yi = !1;
if (Nt)
	try {
		var wr = {};
		Object.defineProperty(wr, 'passive', {
			get: function () {
				Yi = !0;
			},
		}),
			window.addEventListener('test', wr, wr),
			window.removeEventListener('test', wr, wr);
	} catch {
		Yi = !1;
	}
function $p(e, t, n, r, l, o, i, a, u) {
	var s = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, s);
	} catch (c) {
		this.onError(c);
	}
}
var zr = !1,
	ro = null,
	lo = !1,
	Ki = null,
	Wp = {
		onError: function (e) {
			(zr = !0), (ro = e);
		},
	};
function Vp(e, t, n, r, l, o, i, a, u) {
	(zr = !1), (ro = null), $p.apply(Wp, arguments);
}
function Qp(e, t, n, r, l, o, i, a, u) {
	if ((Vp.apply(this, arguments), zr)) {
		if (zr) {
			var s = ro;
			(zr = !1), (ro = null);
		} else throw Error(T(198));
		lo || ((lo = !0), (Ki = s));
	}
}
function Tn(e) {
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
function qc(e) {
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
function Zu(e) {
	if (Tn(e) !== e) throw Error(T(188));
}
function Yp(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = Tn(e)), t === null)) throw Error(T(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var l = n.return;
		if (l === null) break;
		var o = l.alternate;
		if (o === null) {
			if (((r = l.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (l.child === o.child) {
			for (o = l.child; o; ) {
				if (o === n) return Zu(l), e;
				if (o === r) return Zu(l), t;
				o = o.sibling;
			}
			throw Error(T(188));
		}
		if (n.return !== r.return) (n = l), (r = o);
		else {
			for (var i = !1, a = l.child; a; ) {
				if (a === n) {
					(i = !0), (n = l), (r = o);
					break;
				}
				if (a === r) {
					(i = !0), (r = l), (n = o);
					break;
				}
				a = a.sibling;
			}
			if (!i) {
				for (a = o.child; a; ) {
					if (a === n) {
						(i = !0), (n = o), (r = l);
						break;
					}
					if (a === r) {
						(i = !0), (r = o), (n = l);
						break;
					}
					a = a.sibling;
				}
				if (!i) throw Error(T(189));
			}
		}
		if (n.alternate !== r) throw Error(T(190));
	}
	if (n.tag !== 3) throw Error(T(188));
	return n.stateNode.current === n ? e : t;
}
function Jc(e) {
	return (e = Yp(e)), e !== null ? Zc(e) : null;
}
function Zc(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Zc(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var bc = Ye.unstable_scheduleCallback,
	bu = Ye.unstable_cancelCallback,
	Kp = Ye.unstable_shouldYield,
	Gp = Ye.unstable_requestPaint,
	fe = Ye.unstable_now,
	Xp = Ye.unstable_getCurrentPriorityLevel,
	Wa = Ye.unstable_ImmediatePriority,
	ef = Ye.unstable_UserBlockingPriority,
	oo = Ye.unstable_NormalPriority,
	qp = Ye.unstable_LowPriority,
	tf = Ye.unstable_IdlePriority,
	Lo = null,
	wt = null;
function Jp(e) {
	if (wt && typeof wt.onCommitFiberRoot == 'function')
		try {
			wt.onCommitFiberRoot(Lo, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var ct = Math.clz32 ? Math.clz32 : eh,
	Zp = Math.log,
	bp = Math.LN2;
function eh(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((Zp(e) / bp) | 0)) | 0;
}
var _l = 64,
	jl = 4194304;
function Dr(e) {
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
function io(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		l = e.suspendedLanes,
		o = e.pingedLanes,
		i = n & 268435455;
	if (i !== 0) {
		var a = i & ~l;
		a !== 0 ? (r = Dr(a)) : ((o &= i), o !== 0 && (r = Dr(o)));
	} else (i = n & ~l), i !== 0 ? (r = Dr(i)) : o !== 0 && (r = Dr(o));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & l) &&
		((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - ct(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
	return r;
}
function th(e, t) {
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
function nh(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			l = e.expirationTimes,
			o = e.pendingLanes;
		0 < o;

	) {
		var i = 31 - ct(o),
			a = 1 << i,
			u = l[i];
		u === -1
			? (!(a & n) || a & r) && (l[i] = th(a, t))
			: u <= t && (e.expiredLanes |= a),
			(o &= ~a);
	}
}
function Gi(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function nf() {
	var e = _l;
	return (_l <<= 1), !(_l & 4194240) && (_l = 64), e;
}
function ai(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function hl(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - ct(t)),
		(e[t] = n);
}
function rh(e, t) {
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
		var l = 31 - ct(n),
			o = 1 << l;
		(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
	}
}
function Va(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - ct(n),
			l = 1 << r;
		(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
	}
}
var G = 0;
function rf(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var lf,
	Qa,
	of,
	af,
	uf,
	Xi = !1,
	Nl = [],
	Kt = null,
	Gt = null,
	Xt = null,
	Xr = new Map(),
	qr = new Map(),
	Wt = [],
	lh =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		);
function es(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			Kt = null;
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
			qr.delete(t.pointerId);
	}
}
function Sr(e, t, n, r, l, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [l],
		  }),
		  t !== null && ((t = vl(t)), t !== null && Qa(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  l !== null && t.indexOf(l) === -1 && t.push(l),
		  e);
}
function oh(e, t, n, r, l) {
	switch (t) {
		case 'focusin':
			return (Kt = Sr(Kt, e, t, n, r, l)), !0;
		case 'dragenter':
			return (Gt = Sr(Gt, e, t, n, r, l)), !0;
		case 'mouseover':
			return (Xt = Sr(Xt, e, t, n, r, l)), !0;
		case 'pointerover':
			var o = l.pointerId;
			return Xr.set(o, Sr(Xr.get(o) || null, e, t, n, r, l)), !0;
		case 'gotpointercapture':
			return (
				(o = l.pointerId), qr.set(o, Sr(qr.get(o) || null, e, t, n, r, l)), !0
			);
	}
	return !1;
}
function sf(e) {
	var t = cn(e.target);
	if (t !== null) {
		var n = Tn(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = qc(n)), t !== null)) {
					(e.blockedOn = t),
						uf(e.priority, function () {
							of(n);
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
function Vl(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = qi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(Vi = r), n.target.dispatchEvent(r), (Vi = null);
		} else return (t = vl(n)), t !== null && Qa(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function ts(e, t, n) {
	Vl(e) && n.delete(t);
}
function ih() {
	(Xi = !1),
		Kt !== null && Vl(Kt) && (Kt = null),
		Gt !== null && Vl(Gt) && (Gt = null),
		Xt !== null && Vl(Xt) && (Xt = null),
		Xr.forEach(ts),
		qr.forEach(ts);
}
function Er(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Xi ||
			((Xi = !0),
			Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, ih)));
}
function Jr(e) {
	function t(l) {
		return Er(l, e);
	}
	if (0 < Nl.length) {
		Er(Nl[0], e);
		for (var n = 1; n < Nl.length; n++) {
			var r = Nl[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		Kt !== null && Er(Kt, e),
			Gt !== null && Er(Gt, e),
			Xt !== null && Er(Xt, e),
			Xr.forEach(t),
			qr.forEach(t),
			n = 0;
		n < Wt.length;
		n++
	)
		(r = Wt[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
		sf(n), n.blockedOn === null && Wt.shift();
}
var qn = Dt.ReactCurrentBatchConfig,
	ao = !0;
function ah(e, t, n, r) {
	var l = G,
		o = qn.transition;
	qn.transition = null;
	try {
		(G = 1), Ya(e, t, n, r);
	} finally {
		(G = l), (qn.transition = o);
	}
}
function uh(e, t, n, r) {
	var l = G,
		o = qn.transition;
	qn.transition = null;
	try {
		(G = 4), Ya(e, t, n, r);
	} finally {
		(G = l), (qn.transition = o);
	}
}
function Ya(e, t, n, r) {
	if (ao) {
		var l = qi(e, t, n, r);
		if (l === null) yi(e, t, r, uo, n), es(e, r);
		else if (oh(l, e, t, n, r)) r.stopPropagation();
		else if ((es(e, r), t & 4 && -1 < lh.indexOf(e))) {
			for (; l !== null; ) {
				var o = vl(l);
				if (
					(o !== null && lf(o),
					(o = qi(e, t, n, r)),
					o === null && yi(e, t, r, uo, n),
					o === l)
				)
					break;
				l = o;
			}
			l !== null && r.stopPropagation();
		} else yi(e, t, r, null, n);
	}
}
var uo = null;
function qi(e, t, n, r) {
	if (((uo = null), (e = $a(r)), (e = cn(e)), e !== null))
		if (((t = Tn(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = qc(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (uo = e), null;
}
function cf(e) {
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
			switch (Xp()) {
				case Wa:
					return 1;
				case ef:
					return 4;
				case oo:
				case qp:
					return 16;
				case tf:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var Qt = null,
	Ka = null,
	Ql = null;
function ff() {
	if (Ql) return Ql;
	var e,
		t = Ka,
		n = t.length,
		r,
		l = 'value' in Qt ? Qt.value : Qt.textContent,
		o = l.length;
	for (e = 0; e < n && t[e] === l[e]; e++);
	var i = n - e;
	for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
	return (Ql = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Yl(e) {
	var t = e.keyCode;
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Ll() {
	return !0;
}
function ns() {
	return !1;
}
function Ge(e) {
	function t(n, r, l, o, i) {
		(this._reactName = n),
			(this._targetInst = l),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = i),
			(this.currentTarget = null);
		for (var a in e)
			e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
			)
				? Ll
				: ns),
			(this.isPropagationStopped = ns),
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
					(this.isDefaultPrevented = Ll));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = Ll));
			},
			persist: function () {},
			isPersistent: Ll,
		}),
		t
	);
}
var fr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	Ga = Ge(fr),
	ml = se({}, fr, { view: 0, detail: 0 }),
	sh = Ge(ml),
	ui,
	si,
	xr,
	Oo = se({}, ml, {
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
				: (e !== xr &&
						(xr && e.type === 'mousemove'
							? ((ui = e.screenX - xr.screenX), (si = e.screenY - xr.screenY))
							: (si = ui = 0),
						(xr = e)),
				  ui);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : si;
		},
	}),
	rs = Ge(Oo),
	ch = se({}, Oo, { dataTransfer: 0 }),
	fh = Ge(ch),
	dh = se({}, ml, { relatedTarget: 0 }),
	ci = Ge(dh),
	ph = se({}, fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	hh = Ge(ph),
	mh = se({}, fr, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		},
	}),
	vh = Ge(mh),
	yh = se({}, fr, { data: 0 }),
	ls = Ge(yh),
	gh = {
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
	wh = {
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
	Sh = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	};
function Eh(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Sh[e]) ? !!t[e] : !1;
}
function Xa() {
	return Eh;
}
var xh = se({}, ml, {
		key: function (e) {
			if (e.key) {
				var t = gh[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = Yl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? wh[e.keyCode] || 'Unidentified'
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
			return e.type === 'keypress' ? Yl(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress'
				? Yl(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0;
		},
	}),
	kh = Ge(xh),
	Ch = se({}, Oo, {
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
	os = Ge(Ch),
	Th = se({}, ml, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Xa,
	}),
	Ph = Ge(Th),
	Rh = se({}, fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	_h = Ge(Rh),
	jh = se({}, Oo, {
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
	Nh = Ge(jh),
	Lh = [9, 13, 27, 32],
	qa = Nt && 'CompositionEvent' in window,
	Fr = null;
Nt && 'documentMode' in document && (Fr = document.documentMode);
var Oh = Nt && 'TextEvent' in window && !Fr,
	df = Nt && (!qa || (Fr && 8 < Fr && 11 >= Fr)),
	is = String.fromCharCode(32),
	as = !1;
function pf(e, t) {
	switch (e) {
		case 'keyup':
			return Lh.indexOf(t.keyCode) !== -1;
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
function hf(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var An = !1;
function Mh(e, t) {
	switch (e) {
		case 'compositionend':
			return hf(t);
		case 'keypress':
			return t.which !== 32 ? null : ((as = !0), is);
		case 'textInput':
			return (e = t.data), e === is && as ? null : e;
		default:
			return null;
	}
}
function Dh(e, t) {
	if (An)
		return e === 'compositionend' || (!qa && pf(e, t))
			? ((e = ff()), (Ql = Ka = Qt = null), (An = !1), e)
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
			return df && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var Ah = {
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
function us(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!Ah[e.type] : t === 'textarea';
}
function mf(e, t, n, r) {
	Qc(r),
		(t = so(t, 'onChange')),
		0 < t.length &&
			((n = new Ga('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }));
}
var Ur = null,
	Zr = null;
function Ih(e) {
	Pf(e, 0);
}
function Mo(e) {
	var t = Fn(e);
	if (Fc(t)) return e;
}
function zh(e, t) {
	if (e === 'change') return t;
}
var vf = !1;
if (Nt) {
	var fi;
	if (Nt) {
		var di = 'oninput' in document;
		if (!di) {
			var ss = document.createElement('div');
			ss.setAttribute('oninput', 'return;'),
				(di = typeof ss.oninput == 'function');
		}
		fi = di;
	} else fi = !1;
	vf = fi && (!document.documentMode || 9 < document.documentMode);
}
function cs() {
	Ur && (Ur.detachEvent('onpropertychange', yf), (Zr = Ur = null));
}
function yf(e) {
	if (e.propertyName === 'value' && Mo(Zr)) {
		var t = [];
		mf(t, Zr, e, $a(e)), Xc(Ih, t);
	}
}
function Fh(e, t, n) {
	e === 'focusin'
		? (cs(), (Ur = t), (Zr = n), Ur.attachEvent('onpropertychange', yf))
		: e === 'focusout' && cs();
}
function Uh(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
		return Mo(Zr);
}
function Bh(e, t) {
	if (e === 'click') return Mo(t);
}
function Hh(e, t) {
	if (e === 'input' || e === 'change') return Mo(t);
}
function $h(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dt = typeof Object.is == 'function' ? Object.is : $h;
function br(e, t) {
	if (dt(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var l = n[r];
		if (!Oi.call(t, l) || !dt(e[l], t[l])) return !1;
	}
	return !0;
}
function fs(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function ds(e, t) {
	var n = fs(e);
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
		n = fs(n);
	}
}
function gf(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? gf(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function wf() {
	for (var e = window, t = no(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = no(e.document);
	}
	return t;
}
function Ja(e) {
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
function Wh(e) {
	var t = wf(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		gf(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Ja(n)) {
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
					o = Math.min(r.start, l);
				(r = r.end === void 0 ? o : Math.min(r.end, l)),
					!e.extend && o > r && ((l = r), (r = o), (o = l)),
					(l = ds(n, o));
				var i = ds(n, r);
				l &&
					i &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== l.node ||
						e.anchorOffset !== l.offset ||
						e.focusNode !== i.node ||
						e.focusOffset !== i.offset) &&
					((t = t.createRange()),
					t.setStart(l.node, l.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(i.node, i.offset))
						: (t.setEnd(i.node, i.offset), e.addRange(t)));
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
var Vh = Nt && 'documentMode' in document && 11 >= document.documentMode,
	In = null,
	Ji = null,
	Br = null,
	Zi = !1;
function ps(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Zi ||
		In == null ||
		In !== no(r) ||
		((r = In),
		'selectionStart' in r && Ja(r)
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
		(Br && br(Br, r)) ||
			((Br = r),
			(r = so(Ji, 'onSelect')),
			0 < r.length &&
				((t = new Ga('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = In))));
}
function Ol(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	);
}
var zn = {
		animationend: Ol('Animation', 'AnimationEnd'),
		animationiteration: Ol('Animation', 'AnimationIteration'),
		animationstart: Ol('Animation', 'AnimationStart'),
		transitionend: Ol('Transition', 'TransitionEnd'),
	},
	pi = {},
	Sf = {};
Nt &&
	((Sf = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete zn.animationend.animation,
		delete zn.animationiteration.animation,
		delete zn.animationstart.animation),
	'TransitionEvent' in window || delete zn.transitionend.transition);
function Do(e) {
	if (pi[e]) return pi[e];
	if (!zn[e]) return e;
	var t = zn[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Sf) return (pi[e] = t[n]);
	return e;
}
var Ef = Do('animationend'),
	xf = Do('animationiteration'),
	kf = Do('animationstart'),
	Cf = Do('transitionend'),
	Tf = new Map(),
	hs =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		);
function rn(e, t) {
	Tf.set(e, t), Cn(t, [e]);
}
for (var hi = 0; hi < hs.length; hi++) {
	var mi = hs[hi],
		Qh = mi.toLowerCase(),
		Yh = mi[0].toUpperCase() + mi.slice(1);
	rn(Qh, 'on' + Yh);
}
rn(Ef, 'onAnimationEnd');
rn(xf, 'onAnimationIteration');
rn(kf, 'onAnimationStart');
rn('dblclick', 'onDoubleClick');
rn('focusin', 'onFocus');
rn('focusout', 'onBlur');
rn(Cf, 'onTransitionEnd');
tr('onMouseEnter', ['mouseout', 'mouseover']);
tr('onMouseLeave', ['mouseout', 'mouseover']);
tr('onPointerEnter', ['pointerout', 'pointerover']);
tr('onPointerLeave', ['pointerout', 'pointerover']);
Cn(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Cn(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
);
Cn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Cn(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Cn(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Cn(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Ar =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	Kh = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ar));
function ms(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), Qp(r, t, void 0, e), (e.currentTarget = null);
}
function Pf(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			l = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var i = r.length - 1; 0 <= i; i--) {
					var a = r[i],
						u = a.instance,
						s = a.currentTarget;
					if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
					ms(l, a, s), (o = u);
				}
			else
				for (i = 0; i < r.length; i++) {
					if (
						((a = r[i]),
						(u = a.instance),
						(s = a.currentTarget),
						(a = a.listener),
						u !== o && l.isPropagationStopped())
					)
						break e;
					ms(l, a, s), (o = u);
				}
		}
	}
	if (lo) throw ((e = Ki), (lo = !1), (Ki = null), e);
}
function Z(e, t) {
	var n = t[ra];
	n === void 0 && (n = t[ra] = new Set());
	var r = e + '__bubble';
	n.has(r) || (Rf(t, e, 2, !1), n.add(r));
}
function vi(e, t, n) {
	var r = 0;
	t && (r |= 4), Rf(n, e, r, t);
}
var Ml = '_reactListening' + Math.random().toString(36).slice(2);
function el(e) {
	if (!e[Ml]) {
		(e[Ml] = !0),
			Mc.forEach(function (n) {
				n !== 'selectionchange' && (Kh.has(n) || vi(n, !1, e), vi(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Ml] || ((t[Ml] = !0), vi('selectionchange', !1, t));
	}
}
function Rf(e, t, n, r) {
	switch (cf(t)) {
		case 1:
			var l = ah;
			break;
		case 4:
			l = uh;
			break;
		default:
			l = Ya;
	}
	(n = l.bind(null, t, n, e)),
		(l = void 0),
		!Yi ||
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
function yi(e, t, n, r, l) {
	var o = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var i = r.tag;
			if (i === 3 || i === 4) {
				var a = r.stateNode.containerInfo;
				if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
				if (i === 4)
					for (i = r.return; i !== null; ) {
						var u = i.tag;
						if (
							(u === 3 || u === 4) &&
							((u = i.stateNode.containerInfo),
							u === l || (u.nodeType === 8 && u.parentNode === l))
						)
							return;
						i = i.return;
					}
				for (; a !== null; ) {
					if (((i = cn(a)), i === null)) return;
					if (((u = i.tag), u === 5 || u === 6)) {
						r = o = i;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	Xc(function () {
		var s = o,
			c = $a(n),
			h = [];
		e: {
			var m = Tf.get(e);
			if (m !== void 0) {
				var g = Ga,
					S = e;
				switch (e) {
					case 'keypress':
						if (Yl(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						g = kh;
						break;
					case 'focusin':
						(S = 'focus'), (g = ci);
						break;
					case 'focusout':
						(S = 'blur'), (g = ci);
						break;
					case 'beforeblur':
					case 'afterblur':
						g = ci;
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
						g = rs;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						g = fh;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						g = Ph;
						break;
					case Ef:
					case xf:
					case kf:
						g = hh;
						break;
					case Cf:
						g = _h;
						break;
					case 'scroll':
						g = sh;
						break;
					case 'wheel':
						g = Nh;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						g = vh;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						g = os;
				}
				var w = (t & 4) !== 0,
					P = !w && e === 'scroll',
					p = w ? (m !== null ? m + 'Capture' : null) : m;
				w = [];
				for (var f = s, v; f !== null; ) {
					v = f;
					var d = v.stateNode;
					if (
						(v.tag === 5 &&
							d !== null &&
							((v = d),
							p !== null && ((d = Gr(f, p)), d != null && w.push(tl(f, d, v)))),
						P)
					)
						break;
					f = f.return;
				}
				0 < w.length &&
					((m = new g(m, S, null, n, c)), h.push({ event: m, listeners: w }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((m = e === 'mouseover' || e === 'pointerover'),
					(g = e === 'mouseout' || e === 'pointerout'),
					m &&
						n !== Vi &&
						(S = n.relatedTarget || n.fromElement) &&
						(cn(S) || S[Lt]))
				)
					break e;
				if (
					(g || m) &&
					((m =
						c.window === c
							? c
							: (m = c.ownerDocument)
							? m.defaultView || m.parentWindow
							: window),
					g
						? ((S = n.relatedTarget || n.toElement),
						  (g = s),
						  (S = S ? cn(S) : null),
						  S !== null &&
								((P = Tn(S)), S !== P || (S.tag !== 5 && S.tag !== 6)) &&
								(S = null))
						: ((g = null), (S = s)),
					g !== S)
				) {
					if (
						((w = rs),
						(d = 'onMouseLeave'),
						(p = 'onMouseEnter'),
						(f = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((w = os),
							(d = 'onPointerLeave'),
							(p = 'onPointerEnter'),
							(f = 'pointer')),
						(P = g == null ? m : Fn(g)),
						(v = S == null ? m : Fn(S)),
						(m = new w(d, f + 'leave', g, n, c)),
						(m.target = P),
						(m.relatedTarget = v),
						(d = null),
						cn(c) === s &&
							((w = new w(p, f + 'enter', S, n, c)),
							(w.target = v),
							(w.relatedTarget = P),
							(d = w)),
						(P = d),
						g && S)
					)
						t: {
							for (w = g, p = S, f = 0, v = w; v; v = Ln(v)) f++;
							for (v = 0, d = p; d; d = Ln(d)) v++;
							for (; 0 < f - v; ) (w = Ln(w)), f--;
							for (; 0 < v - f; ) (p = Ln(p)), v--;
							for (; f--; ) {
								if (w === p || (p !== null && w === p.alternate)) break t;
								(w = Ln(w)), (p = Ln(p));
							}
							w = null;
						}
					else w = null;
					g !== null && vs(h, m, g, w, !1),
						S !== null && P !== null && vs(h, P, S, w, !0);
				}
			}
			e: {
				if (
					((m = s ? Fn(s) : window),
					(g = m.nodeName && m.nodeName.toLowerCase()),
					g === 'select' || (g === 'input' && m.type === 'file'))
				)
					var C = zh;
				else if (us(m))
					if (vf) C = Hh;
					else {
						C = Uh;
						var j = Fh;
					}
				else
					(g = m.nodeName) &&
						g.toLowerCase() === 'input' &&
						(m.type === 'checkbox' || m.type === 'radio') &&
						(C = Bh);
				if (C && (C = C(e, s))) {
					mf(h, C, n, c);
					break e;
				}
				j && j(e, m, s),
					e === 'focusout' &&
						(j = m._wrapperState) &&
						j.controlled &&
						m.type === 'number' &&
						Ui(m, 'number', m.value);
			}
			switch (((j = s ? Fn(s) : window), e)) {
				case 'focusin':
					(us(j) || j.contentEditable === 'true') &&
						((In = j), (Ji = s), (Br = null));
					break;
				case 'focusout':
					Br = Ji = In = null;
					break;
				case 'mousedown':
					Zi = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(Zi = !1), ps(h, n, c);
					break;
				case 'selectionchange':
					if (Vh) break;
				case 'keydown':
				case 'keyup':
					ps(h, n, c);
			}
			var R;
			if (qa)
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
				An
					? pf(e, n) && (O = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (O = 'onCompositionStart');
			O &&
				(df &&
					n.locale !== 'ko' &&
					(An || O !== 'onCompositionStart'
						? O === 'onCompositionEnd' && An && (R = ff())
						: ((Qt = c),
						  (Ka = 'value' in Qt ? Qt.value : Qt.textContent),
						  (An = !0))),
				(j = so(s, O)),
				0 < j.length &&
					((O = new ls(O, e, null, n, c)),
					h.push({ event: O, listeners: j }),
					R ? (O.data = R) : ((R = hf(n)), R !== null && (O.data = R)))),
				(R = Oh ? Mh(e, n) : Dh(e, n)) &&
					((s = so(s, 'onBeforeInput')),
					0 < s.length &&
						((c = new ls('onBeforeInput', 'beforeinput', null, n, c)),
						h.push({ event: c, listeners: s }),
						(c.data = R)));
		}
		Pf(h, t);
	});
}
function tl(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function so(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var l = e,
			o = l.stateNode;
		l.tag === 5 &&
			o !== null &&
			((l = o),
			(o = Gr(e, n)),
			o != null && r.unshift(tl(e, o, l)),
			(o = Gr(e, t)),
			o != null && r.push(tl(e, o, l))),
			(e = e.return);
	}
	return r;
}
function Ln(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function vs(e, t, n, r, l) {
	for (var o = t._reactName, i = []; n !== null && n !== r; ) {
		var a = n,
			u = a.alternate,
			s = a.stateNode;
		if (u !== null && u === r) break;
		a.tag === 5 &&
			s !== null &&
			((a = s),
			l
				? ((u = Gr(n, o)), u != null && i.unshift(tl(n, u, a)))
				: l || ((u = Gr(n, o)), u != null && i.push(tl(n, u, a)))),
			(n = n.return);
	}
	i.length !== 0 && e.push({ event: t, listeners: i });
}
var Gh = /\r\n?/g,
	Xh = /\u0000|\uFFFD/g;
function ys(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			Gh,
			`
`
		)
		.replace(Xh, '');
}
function Dl(e, t, n) {
	if (((t = ys(t)), ys(e) !== t && n)) throw Error(T(425));
}
function co() {}
var bi = null,
	ea = null;
function ta(e, t) {
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
var na = typeof setTimeout == 'function' ? setTimeout : void 0,
	qh = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	gs = typeof Promise == 'function' ? Promise : void 0,
	Jh =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof gs < 'u'
			? function (e) {
					return gs.resolve(null).then(e).catch(Zh);
			  }
			: na;
function Zh(e) {
	setTimeout(function () {
		throw e;
	});
}
function gi(e, t) {
	var n = t,
		r = 0;
	do {
		var l = n.nextSibling;
		if ((e.removeChild(n), l && l.nodeType === 8))
			if (((n = l.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(l), Jr(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = l;
	} while (n);
	Jr(t);
}
function qt(e) {
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
function ws(e) {
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
var dr = Math.random().toString(36).slice(2),
	gt = '__reactFiber$' + dr,
	nl = '__reactProps$' + dr,
	Lt = '__reactContainer$' + dr,
	ra = '__reactEvents$' + dr,
	bh = '__reactListeners$' + dr,
	em = '__reactHandles$' + dr;
function cn(e) {
	var t = e[gt];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Lt] || n[gt])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = ws(e); e !== null; ) {
					if ((n = e[gt])) return n;
					e = ws(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function vl(e) {
	return (
		(e = e[gt] || e[Lt]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Fn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(T(33));
}
function Ao(e) {
	return e[nl] || null;
}
var la = [],
	Un = -1;
function ln(e) {
	return { current: e };
}
function b(e) {
	0 > Un || ((e.current = la[Un]), (la[Un] = null), Un--);
}
function J(e, t) {
	Un++, (la[Un] = e.current), (e.current = t);
}
var nn = {},
	je = ln(nn),
	Ue = ln(!1),
	gn = nn;
function nr(e, t) {
	var n = e.type.contextTypes;
	if (!n) return nn;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var l = {},
		o;
	for (o in n) l[o] = t[o];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = l)),
		l
	);
}
function Be(e) {
	return (e = e.childContextTypes), e != null;
}
function fo() {
	b(Ue), b(je);
}
function Ss(e, t, n) {
	if (je.current !== nn) throw Error(T(168));
	J(je, t), J(Ue, n);
}
function _f(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var l in r) if (!(l in t)) throw Error(T(108, Fp(e) || 'Unknown', l));
	return se({}, n, r);
}
function po(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || nn),
		(gn = je.current),
		J(je, e),
		J(Ue, Ue.current),
		!0
	);
}
function Es(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(T(169));
	n
		? ((e = _f(e, t, gn)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  b(Ue),
		  b(je),
		  J(je, e))
		: b(Ue),
		J(Ue, n);
}
var Tt = null,
	Io = !1,
	wi = !1;
function jf(e) {
	Tt === null ? (Tt = [e]) : Tt.push(e);
}
function tm(e) {
	(Io = !0), jf(e);
}
function on() {
	if (!wi && Tt !== null) {
		wi = !0;
		var e = 0,
			t = G;
		try {
			var n = Tt;
			for (G = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(Tt = null), (Io = !1);
		} catch (l) {
			throw (Tt !== null && (Tt = Tt.slice(e + 1)), bc(Wa, on), l);
		} finally {
			(G = t), (wi = !1);
		}
	}
	return null;
}
var Bn = [],
	Hn = 0,
	ho = null,
	mo = 0,
	Je = [],
	Ze = 0,
	wn = null,
	Pt = 1,
	Rt = '';
function un(e, t) {
	(Bn[Hn++] = mo), (Bn[Hn++] = ho), (ho = e), (mo = t);
}
function Nf(e, t, n) {
	(Je[Ze++] = Pt), (Je[Ze++] = Rt), (Je[Ze++] = wn), (wn = e);
	var r = Pt;
	e = Rt;
	var l = 32 - ct(r) - 1;
	(r &= ~(1 << l)), (n += 1);
	var o = 32 - ct(t) + l;
	if (30 < o) {
		var i = l - (l % 5);
		(o = (r & ((1 << i) - 1)).toString(32)),
			(r >>= i),
			(l -= i),
			(Pt = (1 << (32 - ct(t) + l)) | (n << l) | r),
			(Rt = o + e);
	} else (Pt = (1 << o) | (n << l) | r), (Rt = e);
}
function Za(e) {
	e.return !== null && (un(e, 1), Nf(e, 1, 0));
}
function ba(e) {
	for (; e === ho; )
		(ho = Bn[--Hn]), (Bn[Hn] = null), (mo = Bn[--Hn]), (Bn[Hn] = null);
	for (; e === wn; )
		(wn = Je[--Ze]),
			(Je[Ze] = null),
			(Rt = Je[--Ze]),
			(Je[Ze] = null),
			(Pt = Je[--Ze]),
			(Je[Ze] = null);
}
var Qe = null,
	Ve = null,
	oe = !1,
	ut = null;
function Lf(e, t) {
	var n = be(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function xs(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (Qe = e), (Ve = qt(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (Qe = e), (Ve = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = wn !== null ? { id: Pt, overflow: Rt } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = be(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (Qe = e),
					  (Ve = null),
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
function ia(e) {
	if (oe) {
		var t = Ve;
		if (t) {
			var n = t;
			if (!xs(e, t)) {
				if (oa(e)) throw Error(T(418));
				t = qt(n.nextSibling);
				var r = Qe;
				t && xs(e, t)
					? Lf(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (oe = !1), (Qe = e));
			}
		} else {
			if (oa(e)) throw Error(T(418));
			(e.flags = (e.flags & -4097) | 2), (oe = !1), (Qe = e);
		}
	}
}
function ks(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	Qe = e;
}
function Al(e) {
	if (e !== Qe) return !1;
	if (!oe) return ks(e), (oe = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !ta(e.type, e.memoizedProps))),
		t && (t = Ve))
	) {
		if (oa(e)) throw (Of(), Error(T(418)));
		for (; t; ) Lf(e, t), (t = qt(t.nextSibling));
	}
	if ((ks(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(T(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === '/$') {
						if (t === 0) {
							Ve = qt(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			Ve = null;
		}
	} else Ve = Qe ? qt(e.stateNode.nextSibling) : null;
	return !0;
}
function Of() {
	for (var e = Ve; e; ) e = qt(e.nextSibling);
}
function rr() {
	(Ve = Qe = null), (oe = !1);
}
function eu(e) {
	ut === null ? (ut = [e]) : ut.push(e);
}
var nm = Dt.ReactCurrentBatchConfig;
function ot(e, t) {
	if (e && e.defaultProps) {
		(t = se({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var vo = ln(null),
	yo = null,
	$n = null,
	tu = null;
function nu() {
	tu = $n = yo = null;
}
function ru(e) {
	var t = vo.current;
	b(vo), (e._currentValue = t);
}
function aa(e, t, n) {
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
function Jn(e, t) {
	(yo = e),
		(tu = $n = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Fe = !0), (e.firstContext = null));
}
function tt(e) {
	var t = e._currentValue;
	if (tu !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), $n === null)) {
			if (yo === null) throw Error(T(308));
			($n = e), (yo.dependencies = { lanes: 0, firstContext: e });
		} else $n = $n.next = e;
	return t;
}
var fn = null;
function lu(e) {
	fn === null ? (fn = [e]) : fn.push(e);
}
function Mf(e, t, n, r) {
	var l = t.interleaved;
	return (
		l === null ? ((n.next = n), lu(t)) : ((n.next = l.next), (l.next = n)),
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
var $t = !1;
function ou(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function Df(e, t) {
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
function Jt(e, t, n) {
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
		l === null ? ((t.next = t), lu(r)) : ((t.next = l.next), (l.next = t)),
		(r.interleaved = t),
		Ot(e, n)
	);
}
function Kl(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Va(e, n);
	}
}
function Cs(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var l = null,
			o = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var i = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
			} while (n !== null);
			o === null ? (l = o = t) : (o = o.next = t);
		} else l = o = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: l,
			lastBaseUpdate: o,
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
function go(e, t, n, r) {
	var l = e.updateQueue;
	$t = !1;
	var o = l.firstBaseUpdate,
		i = l.lastBaseUpdate,
		a = l.shared.pending;
	if (a !== null) {
		l.shared.pending = null;
		var u = a,
			s = u.next;
		(u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
		var c = e.alternate;
		c !== null &&
			((c = c.updateQueue),
			(a = c.lastBaseUpdate),
			a !== i &&
				(a === null ? (c.firstBaseUpdate = s) : (a.next = s),
				(c.lastBaseUpdate = u)));
	}
	if (o !== null) {
		var h = l.baseState;
		(i = 0), (c = s = u = null), (a = o);
		do {
			var m = a.lane,
				g = a.eventTime;
			if ((r & m) === m) {
				c !== null &&
					(c = c.next =
						{
							eventTime: g,
							lane: 0,
							tag: a.tag,
							payload: a.payload,
							callback: a.callback,
							next: null,
						});
				e: {
					var S = e,
						w = a;
					switch (((m = t), (g = n), w.tag)) {
						case 1:
							if (((S = w.payload), typeof S == 'function')) {
								h = S.call(g, h, m);
								break e;
							}
							h = S;
							break e;
						case 3:
							S.flags = (S.flags & -65537) | 128;
						case 0:
							if (
								((S = w.payload),
								(m = typeof S == 'function' ? S.call(g, h, m) : S),
								m == null)
							)
								break e;
							h = se({}, h, m);
							break e;
						case 2:
							$t = !0;
					}
				}
				a.callback !== null &&
					a.lane !== 0 &&
					((e.flags |= 64),
					(m = l.effects),
					m === null ? (l.effects = [a]) : m.push(a));
			} else
				(g = {
					eventTime: g,
					lane: m,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null,
				}),
					c === null ? ((s = c = g), (u = h)) : (c = c.next = g),
					(i |= m);
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
			(c === null && (u = h),
			(l.baseState = u),
			(l.firstBaseUpdate = s),
			(l.lastBaseUpdate = c),
			(t = l.shared.interleaved),
			t !== null)
		) {
			l = t;
			do (i |= l.lane), (l = l.next);
			while (l !== t);
		} else o === null && (l.shared.lanes = 0);
		(En |= i), (e.lanes = i), (e.memoizedState = h);
	}
}
function Ts(e, t, n) {
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
var Af = new Oc.Component().refs;
function ua(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : se({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zo = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Tn(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = Le(),
			l = bt(e),
			o = _t(r, l);
		(o.payload = t),
			n != null && (o.callback = n),
			(t = Jt(e, o, l)),
			t !== null && (ft(t, e, l, r), Kl(t, e, l));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = Le(),
			l = bt(e),
			o = _t(r, l);
		(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = Jt(e, o, l)),
			t !== null && (ft(t, e, l, r), Kl(t, e, l));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = Le(),
			r = bt(e),
			l = _t(n, r);
		(l.tag = 2),
			t != null && (l.callback = t),
			(t = Jt(e, l, r)),
			t !== null && (ft(t, e, r, n), Kl(t, e, r));
	},
};
function Ps(e, t, n, r, l, o, i) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, o, i)
			: t.prototype && t.prototype.isPureReactComponent
			? !br(n, r) || !br(l, o)
			: !0
	);
}
function If(e, t, n) {
	var r = !1,
		l = nn,
		o = t.contextType;
	return (
		typeof o == 'object' && o !== null
			? (o = tt(o))
			: ((l = Be(t) ? gn : je.current),
			  (r = t.contextTypes),
			  (o = (r = r != null) ? nr(e, l) : nn)),
		(t = new t(n, o)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = zo),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = l),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	);
}
function Rs(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && zo.enqueueReplaceState(t, t.state, null);
}
function sa(e, t, n, r) {
	var l = e.stateNode;
	(l.props = n), (l.state = e.memoizedState), (l.refs = Af), ou(e);
	var o = t.contextType;
	typeof o == 'object' && o !== null
		? (l.context = tt(o))
		: ((o = Be(t) ? gn : je.current), (l.context = nr(e, o))),
		(l.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == 'function' && (ua(e, t, o, n), (l.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof l.getSnapshotBeforeUpdate == 'function' ||
			(typeof l.UNSAFE_componentWillMount != 'function' &&
				typeof l.componentWillMount != 'function') ||
			((t = l.state),
			typeof l.componentWillMount == 'function' && l.componentWillMount(),
			typeof l.UNSAFE_componentWillMount == 'function' &&
				l.UNSAFE_componentWillMount(),
			t !== l.state && zo.enqueueReplaceState(l, l.state, null),
			go(e, n, l, r),
			(l.state = e.memoizedState)),
		typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function kr(e, t, n) {
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
				o = '' + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == 'function' &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function (i) {
						var a = l.refs;
						a === Af && (a = l.refs = {}),
							i === null ? delete a[o] : (a[o] = i);
				  }),
				  (t._stringRef = o),
				  t);
		}
		if (typeof e != 'string') throw Error(T(284));
		if (!n._owner) throw Error(T(290, e));
	}
	return e;
}
function Il(e, t) {
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
function _s(e) {
	var t = e._init;
	return t(e._payload);
}
function zf(e) {
	function t(p, f) {
		if (e) {
			var v = p.deletions;
			v === null ? ((p.deletions = [f]), (p.flags |= 16)) : v.push(f);
		}
	}
	function n(p, f) {
		if (!e) return null;
		for (; f !== null; ) t(p, f), (f = f.sibling);
		return null;
	}
	function r(p, f) {
		for (p = new Map(); f !== null; )
			f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
		return p;
	}
	function l(p, f) {
		return (p = en(p, f)), (p.index = 0), (p.sibling = null), p;
	}
	function o(p, f, v) {
		return (
			(p.index = v),
			e
				? ((v = p.alternate),
				  v !== null
						? ((v = v.index), v < f ? ((p.flags |= 2), f) : v)
						: ((p.flags |= 2), f))
				: ((p.flags |= 1048576), f)
		);
	}
	function i(p) {
		return e && p.alternate === null && (p.flags |= 2), p;
	}
	function a(p, f, v, d) {
		return f === null || f.tag !== 6
			? ((f = Pi(v, p.mode, d)), (f.return = p), f)
			: ((f = l(f, v)), (f.return = p), f);
	}
	function u(p, f, v, d) {
		var C = v.type;
		return C === Dn
			? c(p, f, v.props.children, d, v.key)
			: f !== null &&
			  (f.elementType === C ||
					(typeof C == 'object' &&
						C !== null &&
						C.$$typeof === Ht &&
						_s(C) === f.type))
			? ((d = l(f, v.props)), (d.ref = kr(p, f, v)), (d.return = p), d)
			: ((d = bl(v.type, v.key, v.props, null, p.mode, d)),
			  (d.ref = kr(p, f, v)),
			  (d.return = p),
			  d);
	}
	function s(p, f, v, d) {
		return f === null ||
			f.tag !== 4 ||
			f.stateNode.containerInfo !== v.containerInfo ||
			f.stateNode.implementation !== v.implementation
			? ((f = Ri(v, p.mode, d)), (f.return = p), f)
			: ((f = l(f, v.children || [])), (f.return = p), f);
	}
	function c(p, f, v, d, C) {
		return f === null || f.tag !== 7
			? ((f = vn(v, p.mode, d, C)), (f.return = p), f)
			: ((f = l(f, v)), (f.return = p), f);
	}
	function h(p, f, v) {
		if ((typeof f == 'string' && f !== '') || typeof f == 'number')
			return (f = Pi('' + f, p.mode, v)), (f.return = p), f;
		if (typeof f == 'object' && f !== null) {
			switch (f.$$typeof) {
				case Tl:
					return (
						(v = bl(f.type, f.key, f.props, null, p.mode, v)),
						(v.ref = kr(p, null, f)),
						(v.return = p),
						v
					);
				case Mn:
					return (f = Ri(f, p.mode, v)), (f.return = p), f;
				case Ht:
					var d = f._init;
					return h(p, d(f._payload), v);
			}
			if (Mr(f) || gr(f))
				return (f = vn(f, p.mode, v, null)), (f.return = p), f;
			Il(p, f);
		}
		return null;
	}
	function m(p, f, v, d) {
		var C = f !== null ? f.key : null;
		if ((typeof v == 'string' && v !== '') || typeof v == 'number')
			return C !== null ? null : a(p, f, '' + v, d);
		if (typeof v == 'object' && v !== null) {
			switch (v.$$typeof) {
				case Tl:
					return v.key === C ? u(p, f, v, d) : null;
				case Mn:
					return v.key === C ? s(p, f, v, d) : null;
				case Ht:
					return (C = v._init), m(p, f, C(v._payload), d);
			}
			if (Mr(v) || gr(v)) return C !== null ? null : c(p, f, v, d, null);
			Il(p, v);
		}
		return null;
	}
	function g(p, f, v, d, C) {
		if ((typeof d == 'string' && d !== '') || typeof d == 'number')
			return (p = p.get(v) || null), a(f, p, '' + d, C);
		if (typeof d == 'object' && d !== null) {
			switch (d.$$typeof) {
				case Tl:
					return (p = p.get(d.key === null ? v : d.key) || null), u(f, p, d, C);
				case Mn:
					return (p = p.get(d.key === null ? v : d.key) || null), s(f, p, d, C);
				case Ht:
					var j = d._init;
					return g(p, f, v, j(d._payload), C);
			}
			if (Mr(d) || gr(d)) return (p = p.get(v) || null), c(f, p, d, C, null);
			Il(f, d);
		}
		return null;
	}
	function S(p, f, v, d) {
		for (
			var C = null, j = null, R = f, O = (f = 0), Q = null;
			R !== null && O < v.length;
			O++
		) {
			R.index > O ? ((Q = R), (R = null)) : (Q = R.sibling);
			var U = m(p, R, v[O], d);
			if (U === null) {
				R === null && (R = Q);
				break;
			}
			e && R && U.alternate === null && t(p, R),
				(f = o(U, f, O)),
				j === null ? (C = U) : (j.sibling = U),
				(j = U),
				(R = Q);
		}
		if (O === v.length) return n(p, R), oe && un(p, O), C;
		if (R === null) {
			for (; O < v.length; O++)
				(R = h(p, v[O], d)),
					R !== null &&
						((f = o(R, f, O)), j === null ? (C = R) : (j.sibling = R), (j = R));
			return oe && un(p, O), C;
		}
		for (R = r(p, R); O < v.length; O++)
			(Q = g(R, p, O, v[O], d)),
				Q !== null &&
					(e && Q.alternate !== null && R.delete(Q.key === null ? O : Q.key),
					(f = o(Q, f, O)),
					j === null ? (C = Q) : (j.sibling = Q),
					(j = Q));
		return (
			e &&
				R.forEach(function (Ee) {
					return t(p, Ee);
				}),
			oe && un(p, O),
			C
		);
	}
	function w(p, f, v, d) {
		var C = gr(v);
		if (typeof C != 'function') throw Error(T(150));
		if (((v = C.call(v)), v == null)) throw Error(T(151));
		for (
			var j = (C = null), R = f, O = (f = 0), Q = null, U = v.next();
			R !== null && !U.done;
			O++, U = v.next()
		) {
			R.index > O ? ((Q = R), (R = null)) : (Q = R.sibling);
			var Ee = m(p, R, U.value, d);
			if (Ee === null) {
				R === null && (R = Q);
				break;
			}
			e && R && Ee.alternate === null && t(p, R),
				(f = o(Ee, f, O)),
				j === null ? (C = Ee) : (j.sibling = Ee),
				(j = Ee),
				(R = Q);
		}
		if (U.done) return n(p, R), oe && un(p, O), C;
		if (R === null) {
			for (; !U.done; O++, U = v.next())
				(U = h(p, U.value, d)),
					U !== null &&
						((f = o(U, f, O)), j === null ? (C = U) : (j.sibling = U), (j = U));
			return oe && un(p, O), C;
		}
		for (R = r(p, R); !U.done; O++, U = v.next())
			(U = g(R, p, O, U.value, d)),
				U !== null &&
					(e && U.alternate !== null && R.delete(U.key === null ? O : U.key),
					(f = o(U, f, O)),
					j === null ? (C = U) : (j.sibling = U),
					(j = U));
		return (
			e &&
				R.forEach(function (X) {
					return t(p, X);
				}),
			oe && un(p, O),
			C
		);
	}
	function P(p, f, v, d) {
		if (
			(typeof v == 'object' &&
				v !== null &&
				v.type === Dn &&
				v.key === null &&
				(v = v.props.children),
			typeof v == 'object' && v !== null)
		) {
			switch (v.$$typeof) {
				case Tl:
					e: {
						for (var C = v.key, j = f; j !== null; ) {
							if (j.key === C) {
								if (((C = v.type), C === Dn)) {
									if (j.tag === 7) {
										n(p, j.sibling),
											(f = l(j, v.props.children)),
											(f.return = p),
											(p = f);
										break e;
									}
								} else if (
									j.elementType === C ||
									(typeof C == 'object' &&
										C !== null &&
										C.$$typeof === Ht &&
										_s(C) === j.type)
								) {
									n(p, j.sibling),
										(f = l(j, v.props)),
										(f.ref = kr(p, j, v)),
										(f.return = p),
										(p = f);
									break e;
								}
								n(p, j);
								break;
							} else t(p, j);
							j = j.sibling;
						}
						v.type === Dn
							? ((f = vn(v.props.children, p.mode, d, v.key)),
							  (f.return = p),
							  (p = f))
							: ((d = bl(v.type, v.key, v.props, null, p.mode, d)),
							  (d.ref = kr(p, f, v)),
							  (d.return = p),
							  (p = d));
					}
					return i(p);
				case Mn:
					e: {
						for (j = v.key; f !== null; ) {
							if (f.key === j)
								if (
									f.tag === 4 &&
									f.stateNode.containerInfo === v.containerInfo &&
									f.stateNode.implementation === v.implementation
								) {
									n(p, f.sibling),
										(f = l(f, v.children || [])),
										(f.return = p),
										(p = f);
									break e;
								} else {
									n(p, f);
									break;
								}
							else t(p, f);
							f = f.sibling;
						}
						(f = Ri(v, p.mode, d)), (f.return = p), (p = f);
					}
					return i(p);
				case Ht:
					return (j = v._init), P(p, f, j(v._payload), d);
			}
			if (Mr(v)) return S(p, f, v, d);
			if (gr(v)) return w(p, f, v, d);
			Il(p, v);
		}
		return (typeof v == 'string' && v !== '') || typeof v == 'number'
			? ((v = '' + v),
			  f !== null && f.tag === 6
					? (n(p, f.sibling), (f = l(f, v)), (f.return = p), (p = f))
					: (n(p, f), (f = Pi(v, p.mode, d)), (f.return = p), (p = f)),
			  i(p))
			: n(p, f);
	}
	return P;
}
var lr = zf(!0),
	Ff = zf(!1),
	yl = {},
	St = ln(yl),
	rl = ln(yl),
	ll = ln(yl);
function dn(e) {
	if (e === yl) throw Error(T(174));
	return e;
}
function iu(e, t) {
	switch ((J(ll, t), J(rl, e), J(St, yl), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Hi(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Hi(t, e));
	}
	b(St), J(St, t);
}
function or() {
	b(St), b(rl), b(ll);
}
function Uf(e) {
	dn(ll.current);
	var t = dn(St.current),
		n = Hi(t, e.type);
	t !== n && (J(rl, e), J(St, n));
}
function au(e) {
	rl.current === e && (b(St), b(rl));
}
var ae = ln(0);
function wo(e) {
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
var Si = [];
function uu() {
	for (var e = 0; e < Si.length; e++)
		Si[e]._workInProgressVersionPrimary = null;
	Si.length = 0;
}
var Gl = Dt.ReactCurrentDispatcher,
	Ei = Dt.ReactCurrentBatchConfig,
	Sn = 0,
	ue = null,
	ve = null,
	we = null,
	So = !1,
	Hr = !1,
	ol = 0,
	rm = 0;
function Pe() {
	throw Error(T(321));
}
function su(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!dt(e[n], t[n])) return !1;
	return !0;
}
function cu(e, t, n, r, l, o) {
	if (
		((Sn = o),
		(ue = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Gl.current = e === null || e.memoizedState === null ? am : um),
		(e = n(r, l)),
		Hr)
	) {
		o = 0;
		do {
			if (((Hr = !1), (ol = 0), 25 <= o)) throw Error(T(301));
			(o += 1),
				(we = ve = null),
				(t.updateQueue = null),
				(Gl.current = sm),
				(e = n(r, l));
		} while (Hr);
	}
	if (
		((Gl.current = Eo),
		(t = ve !== null && ve.next !== null),
		(Sn = 0),
		(we = ve = ue = null),
		(So = !1),
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
function nt() {
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
function il(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function xi(e) {
	var t = nt(),
		n = t.queue;
	if (n === null) throw Error(T(311));
	n.lastRenderedReducer = e;
	var r = ve,
		l = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (l !== null) {
			var i = l.next;
			(l.next = o.next), (o.next = i);
		}
		(r.baseQueue = l = o), (n.pending = null);
	}
	if (l !== null) {
		(o = l.next), (r = r.baseState);
		var a = (i = null),
			u = null,
			s = o;
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
				var h = {
					lane: c,
					action: s.action,
					hasEagerState: s.hasEagerState,
					eagerState: s.eagerState,
					next: null,
				};
				u === null ? ((a = u = h), (i = r)) : (u = u.next = h),
					(ue.lanes |= c),
					(En |= c);
			}
			s = s.next;
		} while (s !== null && s !== o);
		u === null ? (i = r) : (u.next = a),
			dt(r, t.memoizedState) || (Fe = !0),
			(t.memoizedState = r),
			(t.baseState = i),
			(t.baseQueue = u),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		l = e;
		do (o = l.lane), (ue.lanes |= o), (En |= o), (l = l.next);
		while (l !== e);
	} else l === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function ki(e) {
	var t = nt(),
		n = t.queue;
	if (n === null) throw Error(T(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		l = n.pending,
		o = t.memoizedState;
	if (l !== null) {
		n.pending = null;
		var i = (l = l.next);
		do (o = e(o, i.action)), (i = i.next);
		while (i !== l);
		dt(o, t.memoizedState) || (Fe = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, r];
}
function Bf() {}
function Hf(e, t) {
	var n = ue,
		r = nt(),
		l = t(),
		o = !dt(r.memoizedState, l);
	if (
		(o && ((r.memoizedState = l), (Fe = !0)),
		(r = r.queue),
		du(Vf.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (we !== null && we.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			al(9, Wf.bind(null, n, r, l, t), void 0, null),
			Se === null)
		)
			throw Error(T(349));
		Sn & 30 || $f(n, t, l);
	}
	return l;
}
function $f(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = ue.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (ue.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Wf(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), Qf(t) && Yf(e);
}
function Vf(e, t, n) {
	return n(function () {
		Qf(t) && Yf(e);
	});
}
function Qf(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !dt(e, n);
	} catch {
		return !0;
	}
}
function Yf(e) {
	var t = Ot(e, 1);
	t !== null && ft(t, e, 1, -1);
}
function js(e) {
	var t = yt();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: il,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = im.bind(null, ue, e)),
		[t.memoizedState, e]
	);
}
function al(e, t, n, r) {
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
function Kf() {
	return nt().memoizedState;
}
function Xl(e, t, n, r) {
	var l = yt();
	(ue.flags |= e),
		(l.memoizedState = al(1 | t, n, void 0, r === void 0 ? null : r));
}
function Fo(e, t, n, r) {
	var l = nt();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (ve !== null) {
		var i = ve.memoizedState;
		if (((o = i.destroy), r !== null && su(r, i.deps))) {
			l.memoizedState = al(t, n, o, r);
			return;
		}
	}
	(ue.flags |= e), (l.memoizedState = al(1 | t, n, o, r));
}
function Ns(e, t) {
	return Xl(8390656, 8, e, t);
}
function du(e, t) {
	return Fo(2048, 8, e, t);
}
function Gf(e, t) {
	return Fo(4, 2, e, t);
}
function Xf(e, t) {
	return Fo(4, 4, e, t);
}
function qf(e, t) {
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
function Jf(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Fo(4, 4, qf.bind(null, t, e), n)
	);
}
function pu() {}
function Zf(e, t) {
	var n = nt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && su(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function bf(e, t) {
	var n = nt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && su(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function ed(e, t, n) {
	return Sn & 21
		? (dt(n, t) || ((n = nf()), (ue.lanes |= n), (En |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n));
}
function lm(e, t) {
	var n = G;
	(G = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = Ei.transition;
	Ei.transition = {};
	try {
		e(!1), t();
	} finally {
		(G = n), (Ei.transition = r);
	}
}
function td() {
	return nt().memoizedState;
}
function om(e, t, n) {
	var r = bt(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		nd(e))
	)
		rd(t, n);
	else if (((n = Mf(e, t, n, r)), n !== null)) {
		var l = Le();
		ft(n, e, r, l), ld(n, t, r);
	}
}
function im(e, t, n) {
	var r = bt(e),
		l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (nd(e)) rd(t, l);
	else {
		var o = e.alternate;
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var i = t.lastRenderedState,
					a = o(i, n);
				if (((l.hasEagerState = !0), (l.eagerState = a), dt(a, i))) {
					var u = t.interleaved;
					u === null
						? ((l.next = l), lu(t))
						: ((l.next = u.next), (u.next = l)),
						(t.interleaved = l);
					return;
				}
			} catch {
			} finally {
			}
		(n = Mf(e, t, l, r)),
			n !== null && ((l = Le()), ft(n, e, r, l), ld(n, t, r));
	}
}
function nd(e) {
	var t = e.alternate;
	return e === ue || (t !== null && t === ue);
}
function rd(e, t) {
	Hr = So = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function ld(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Va(e, n);
	}
}
var Eo = {
		readContext: tt,
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
	am = {
		readContext: tt,
		useCallback: function (e, t) {
			return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: tt,
		useEffect: Ns,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Xl(4194308, 4, qf.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Xl(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Xl(4, 2, e, t);
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
				(e = e.dispatch = om.bind(null, ue, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = yt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: js,
		useDebugValue: pu,
		useDeferredValue: function (e) {
			return (yt().memoizedState = e);
		},
		useTransition: function () {
			var e = js(!1),
				t = e[0];
			return (e = lm.bind(null, e[1])), (yt().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = ue,
				l = yt();
			if (oe) {
				if (n === void 0) throw Error(T(407));
				n = n();
			} else {
				if (((n = t()), Se === null)) throw Error(T(349));
				Sn & 30 || $f(r, t, n);
			}
			l.memoizedState = n;
			var o = { value: n, getSnapshot: t };
			return (
				(l.queue = o),
				Ns(Vf.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				al(9, Wf.bind(null, r, o, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = yt(),
				t = Se.identifierPrefix;
			if (oe) {
				var n = Rt,
					r = Pt;
				(n = (r & ~(1 << (32 - ct(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = ol++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':');
			} else (n = rm++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	um = {
		readContext: tt,
		useCallback: Zf,
		useContext: tt,
		useEffect: du,
		useImperativeHandle: Jf,
		useInsertionEffect: Gf,
		useLayoutEffect: Xf,
		useMemo: bf,
		useReducer: xi,
		useRef: Kf,
		useState: function () {
			return xi(il);
		},
		useDebugValue: pu,
		useDeferredValue: function (e) {
			var t = nt();
			return ed(t, ve.memoizedState, e);
		},
		useTransition: function () {
			var e = xi(il)[0],
				t = nt().memoizedState;
			return [e, t];
		},
		useMutableSource: Bf,
		useSyncExternalStore: Hf,
		useId: td,
		unstable_isNewReconciler: !1,
	},
	sm = {
		readContext: tt,
		useCallback: Zf,
		useContext: tt,
		useEffect: du,
		useImperativeHandle: Jf,
		useInsertionEffect: Gf,
		useLayoutEffect: Xf,
		useMemo: bf,
		useReducer: ki,
		useRef: Kf,
		useState: function () {
			return ki(il);
		},
		useDebugValue: pu,
		useDeferredValue: function (e) {
			var t = nt();
			return ve === null ? (t.memoizedState = e) : ed(t, ve.memoizedState, e);
		},
		useTransition: function () {
			var e = ki(il)[0],
				t = nt().memoizedState;
			return [e, t];
		},
		useMutableSource: Bf,
		useSyncExternalStore: Hf,
		useId: td,
		unstable_isNewReconciler: !1,
	};
function ir(e, t) {
	try {
		var n = '',
			r = t;
		do (n += zp(r)), (r = r.return);
		while (r);
		var l = n;
	} catch (o) {
		l =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: e, source: t, stack: l, digest: null };
}
function Ci(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ca(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var cm = typeof WeakMap == 'function' ? WeakMap : Map;
function od(e, t, n) {
	(n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			ko || ((ko = !0), (Sa = r)), ca(e, t);
		}),
		n
	);
}
function id(e, t, n) {
	(n = _t(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var l = t.value;
		(n.payload = function () {
			return r(l);
		}),
			(n.callback = function () {
				ca(e, t);
			});
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == 'function' &&
			(n.callback = function () {
				ca(e, t),
					typeof r != 'function' &&
						(Zt === null ? (Zt = new Set([this])) : Zt.add(this));
				var i = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: i !== null ? i : '',
				});
			}),
		n
	);
}
function Ls(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new cm();
		var l = new Set();
		r.set(t, l);
	} else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
	l.has(n) || (l.add(n), (e = Cm.bind(null, e, t, n)), t.then(e, e));
}
function Os(e) {
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
function Ms(e, t, n, r, l) {
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
							: ((t = _t(-1, 1)), (t.tag = 2), Jt(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var fm = Dt.ReactCurrentOwner,
	Fe = !1;
function Ne(e, t, n, r) {
	t.child = e === null ? Ff(t, null, n, r) : lr(t, e.child, n, r);
}
function Ds(e, t, n, r, l) {
	n = n.render;
	var o = t.ref;
	return (
		Jn(t, l),
		(r = cu(e, t, n, r, o, l)),
		(n = fu()),
		e !== null && !Fe
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  Mt(e, t, l))
			: (oe && n && Za(t), (t.flags |= 1), Ne(e, t, r, l), t.child)
	);
}
function As(e, t, n, r, l) {
	if (e === null) {
		var o = n.type;
		return typeof o == 'function' &&
			!Eu(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), ad(e, t, o, r, l))
			: ((e = bl(n.type, null, r, t, t.mode, l)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((o = e.child), !(e.lanes & l))) {
		var i = o.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : br), n(i, r) && e.ref === t.ref)
		)
			return Mt(e, t, l);
	}
	return (
		(t.flags |= 1),
		(e = en(o, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function ad(e, t, n, r, l) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (br(o, r) && e.ref === t.ref)
			if (((Fe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
				e.flags & 131072 && (Fe = !0);
			else return (t.lanes = e.lanes), Mt(e, t, l);
	}
	return fa(e, t, n, r, l);
}
function ud(e, t, n) {
	var r = t.pendingProps,
		l = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				J(Vn, We),
				(We |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = o !== null ? o.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					J(Vn, We),
					(We |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = o !== null ? o.baseLanes : n),
				J(Vn, We),
				(We |= r);
		}
	else
		o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
			J(Vn, We),
			(We |= r);
	return Ne(e, t, l, n), t.child;
}
function sd(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function fa(e, t, n, r, l) {
	var o = Be(n) ? gn : je.current;
	return (
		(o = nr(t, o)),
		Jn(t, l),
		(n = cu(e, t, n, r, o, l)),
		(r = fu()),
		e !== null && !Fe
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  Mt(e, t, l))
			: (oe && r && Za(t), (t.flags |= 1), Ne(e, t, n, l), t.child)
	);
}
function Is(e, t, n, r, l) {
	if (Be(n)) {
		var o = !0;
		po(t);
	} else o = !1;
	if ((Jn(t, l), t.stateNode === null))
		ql(e, t), If(t, n, r), sa(t, n, r, l), (r = !0);
	else if (e === null) {
		var i = t.stateNode,
			a = t.memoizedProps;
		i.props = a;
		var u = i.context,
			s = n.contextType;
		typeof s == 'object' && s !== null
			? (s = tt(s))
			: ((s = Be(n) ? gn : je.current), (s = nr(t, s)));
		var c = n.getDerivedStateFromProps,
			h =
				typeof c == 'function' ||
				typeof i.getSnapshotBeforeUpdate == 'function';
		h ||
			(typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof i.componentWillReceiveProps != 'function') ||
			((a !== r || u !== s) && Rs(t, i, r, s)),
			($t = !1);
		var m = t.memoizedState;
		(i.state = m),
			go(t, r, i, l),
			(u = t.memoizedState),
			a !== r || m !== u || Ue.current || $t
				? (typeof c == 'function' && (ua(t, n, c, r), (u = t.memoizedState)),
				  (a = $t || Ps(t, n, a, r, m, u, s))
						? (h ||
								(typeof i.UNSAFE_componentWillMount != 'function' &&
									typeof i.componentWillMount != 'function') ||
								(typeof i.componentWillMount == 'function' &&
									i.componentWillMount(),
								typeof i.UNSAFE_componentWillMount == 'function' &&
									i.UNSAFE_componentWillMount()),
						  typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = u)),
				  (i.props = r),
				  (i.state = u),
				  (i.context = s),
				  (r = a))
				: (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(i = t.stateNode),
			Df(e, t),
			(a = t.memoizedProps),
			(s = t.type === t.elementType ? a : ot(t.type, a)),
			(i.props = s),
			(h = t.pendingProps),
			(m = i.context),
			(u = n.contextType),
			typeof u == 'object' && u !== null
				? (u = tt(u))
				: ((u = Be(n) ? gn : je.current), (u = nr(t, u)));
		var g = n.getDerivedStateFromProps;
		(c =
			typeof g == 'function' ||
			typeof i.getSnapshotBeforeUpdate == 'function') ||
			(typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof i.componentWillReceiveProps != 'function') ||
			((a !== h || m !== u) && Rs(t, i, r, u)),
			($t = !1),
			(m = t.memoizedState),
			(i.state = m),
			go(t, r, i, l);
		var S = t.memoizedState;
		a !== h || m !== S || Ue.current || $t
			? (typeof g == 'function' && (ua(t, n, g, r), (S = t.memoizedState)),
			  (s = $t || Ps(t, n, s, r, m, S, u) || !1)
					? (c ||
							(typeof i.UNSAFE_componentWillUpdate != 'function' &&
								typeof i.componentWillUpdate != 'function') ||
							(typeof i.componentWillUpdate == 'function' &&
								i.componentWillUpdate(r, S, u),
							typeof i.UNSAFE_componentWillUpdate == 'function' &&
								i.UNSAFE_componentWillUpdate(r, S, u)),
					  typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof i.componentDidUpdate != 'function' ||
							(a === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate != 'function' ||
							(a === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = S)),
			  (i.props = r),
			  (i.state = S),
			  (i.context = u),
			  (r = s))
			: (typeof i.componentDidUpdate != 'function' ||
					(a === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 4),
			  typeof i.getSnapshotBeforeUpdate != 'function' ||
					(a === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return da(e, t, n, r, o, l);
}
function da(e, t, n, r, l, o) {
	sd(e, t);
	var i = (t.flags & 128) !== 0;
	if (!r && !i) return l && Es(t, n, !1), Mt(e, t, o);
	(r = t.stateNode), (fm.current = t);
	var a =
		i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && i
			? ((t.child = lr(t, e.child, null, o)), (t.child = lr(t, null, a, o)))
			: Ne(e, t, a, o),
		(t.memoizedState = r.state),
		l && Es(t, n, !0),
		t.child
	);
}
function cd(e) {
	var t = e.stateNode;
	t.pendingContext
		? Ss(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Ss(e, t.context, !1),
		iu(e, t.containerInfo);
}
function zs(e, t, n, r, l) {
	return rr(), eu(l), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var pa = { dehydrated: null, treeContext: null, retryLane: 0 };
function ha(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function fd(e, t, n) {
	var r = t.pendingProps,
		l = ae.current,
		o = !1,
		i = (t.flags & 128) !== 0,
		a;
	if (
		((a = i) ||
			(a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
		a
			? ((o = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (l |= 1),
		J(ae, l & 1),
		e === null)
	)
		return (
			ia(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === '$!'
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((i = r.children),
				  (e = r.fallback),
				  o
						? ((r = t.mode),
						  (o = t.child),
						  (i = { mode: 'hidden', children: i }),
						  !(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = i))
								: (o = Ho(i, r, 0, null)),
						  (e = vn(e, r, n, null)),
						  (o.return = t),
						  (e.return = t),
						  (o.sibling = e),
						  (t.child = o),
						  (t.child.memoizedState = ha(n)),
						  (t.memoizedState = pa),
						  e)
						: hu(t, i))
		);
	if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
		return dm(e, t, i, r, a, l, n);
	if (o) {
		(o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
		var u = { mode: 'hidden', children: r.children };
		return (
			!(i & 1) && t.child !== l
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = u),
				  (t.deletions = null))
				: ((r = en(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
			a !== null ? (o = en(a, o)) : ((o = vn(o, i, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(i = e.child.memoizedState),
			(i =
				i === null
					? ha(n)
					: {
							baseLanes: i.baseLanes | n,
							cachePool: null,
							transitions: i.transitions,
					  }),
			(o.memoizedState = i),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = pa),
			r
		);
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = en(o, { mode: 'visible', children: r.children })),
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
function hu(e, t) {
	return (
		(t = Ho({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function zl(e, t, n, r) {
	return (
		r !== null && eu(r),
		lr(t, e.child, null, n),
		(e = hu(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function dm(e, t, n, r, l, o, i) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Ci(Error(T(422)))), zl(e, t, i, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((o = r.fallback),
			  (l = t.mode),
			  (r = Ho({ mode: 'visible', children: r.children }, l, 0, null)),
			  (o = vn(o, l, i, null)),
			  (o.flags |= 2),
			  (r.return = t),
			  (o.return = t),
			  (r.sibling = o),
			  (t.child = r),
			  t.mode & 1 && lr(t, e.child, null, i),
			  (t.child.memoizedState = ha(i)),
			  (t.memoizedState = pa),
			  o);
	if (!(t.mode & 1)) return zl(e, t, i, null);
	if (l.data === '$!') {
		if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
		return (r = a), (o = Error(T(419))), (r = Ci(o, r, void 0)), zl(e, t, i, r);
	}
	if (((a = (i & e.childLanes) !== 0), Fe || a)) {
		if (((r = Se), r !== null)) {
			switch (i & -i) {
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
			(l = l & (r.suspendedLanes | i) ? 0 : l),
				l !== 0 &&
					l !== o.retryLane &&
					((o.retryLane = l), Ot(e, l), ft(r, e, l, -1));
		}
		return Su(), (r = Ci(Error(T(421)))), zl(e, t, i, r);
	}
	return l.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = Tm.bind(null, e)),
		  (l._reactRetry = t),
		  null)
		: ((e = o.treeContext),
		  (Ve = qt(l.nextSibling)),
		  (Qe = t),
		  (oe = !0),
		  (ut = null),
		  e !== null &&
				((Je[Ze++] = Pt),
				(Je[Ze++] = Rt),
				(Je[Ze++] = wn),
				(Pt = e.id),
				(Rt = e.overflow),
				(wn = t)),
		  (t = hu(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function Fs(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), aa(e.return, t, n);
}
function Ti(e, t, n, r, l) {
	var o = e.memoizedState;
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: l,
		  })
		: ((o.isBackwards = t),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = l));
}
function dd(e, t, n) {
	var r = t.pendingProps,
		l = r.revealOrder,
		o = r.tail;
	if ((Ne(e, t, r.children, n), (r = ae.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Fs(e, n, t);
				else if (e.tag === 19) Fs(e, n, t);
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
						e !== null && wo(e) === null && (l = n),
						(n = n.sibling);
				(n = l),
					n === null
						? ((l = t.child), (t.child = null))
						: ((l = n.sibling), (n.sibling = null)),
					Ti(t, !1, l, n, o);
				break;
			case 'backwards':
				for (n = null, l = t.child, t.child = null; l !== null; ) {
					if (((e = l.alternate), e !== null && wo(e) === null)) {
						t.child = l;
						break;
					}
					(e = l.sibling), (l.sibling = n), (n = l), (l = e);
				}
				Ti(t, !0, n, null, o);
				break;
			case 'together':
				Ti(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function ql(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(En |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(T(153));
	if (t.child !== null) {
		for (
			e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = en(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function pm(e, t, n) {
	switch (t.tag) {
		case 3:
			cd(t), rr();
			break;
		case 5:
			Uf(t);
			break;
		case 1:
			Be(t.type) && po(t);
			break;
		case 4:
			iu(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				l = t.memoizedProps.value;
			J(vo, r._currentValue), (r._currentValue = l);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (J(ae, ae.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? fd(e, t, n)
					: (J(ae, ae.current & 1),
					  (e = Mt(e, t, n)),
					  e !== null ? e.sibling : null);
			J(ae, ae.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return dd(e, t, n);
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
			return (t.lanes = 0), ud(e, t, n);
	}
	return Mt(e, t, n);
}
var pd, ma, hd, md;
pd = function (e, t) {
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
ma = function () {};
hd = function (e, t, n, r) {
	var l = e.memoizedProps;
	if (l !== r) {
		(e = t.stateNode), dn(St.current);
		var o = null;
		switch (n) {
			case 'input':
				(l = zi(e, l)), (r = zi(e, r)), (o = []);
				break;
			case 'select':
				(l = se({}, l, { value: void 0 })),
					(r = se({}, r, { value: void 0 })),
					(o = []);
				break;
			case 'textarea':
				(l = Bi(e, l)), (r = Bi(e, r)), (o = []);
				break;
			default:
				typeof l.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = co);
		}
		$i(n, r);
		var i;
		n = null;
		for (s in l)
			if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
				if (s === 'style') {
					var a = l[s];
					for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
				} else
					s !== 'dangerouslySetInnerHTML' &&
						s !== 'children' &&
						s !== 'suppressContentEditableWarning' &&
						s !== 'suppressHydrationWarning' &&
						s !== 'autoFocus' &&
						(Yr.hasOwnProperty(s)
							? o || (o = [])
							: (o = o || []).push(s, null));
		for (s in r) {
			var u = r[s];
			if (
				((a = l != null ? l[s] : void 0),
				r.hasOwnProperty(s) && u !== a && (u != null || a != null))
			)
				if (s === 'style')
					if (a) {
						for (i in a)
							!a.hasOwnProperty(i) ||
								(u && u.hasOwnProperty(i)) ||
								(n || (n = {}), (n[i] = ''));
						for (i in u)
							u.hasOwnProperty(i) &&
								a[i] !== u[i] &&
								(n || (n = {}), (n[i] = u[i]));
					} else n || (o || (o = []), o.push(s, n)), (n = u);
				else
					s === 'dangerouslySetInnerHTML'
						? ((u = u ? u.__html : void 0),
						  (a = a ? a.__html : void 0),
						  u != null && a !== u && (o = o || []).push(s, u))
						: s === 'children'
						? (typeof u != 'string' && typeof u != 'number') ||
						  (o = o || []).push(s, '' + u)
						: s !== 'suppressContentEditableWarning' &&
						  s !== 'suppressHydrationWarning' &&
						  (Yr.hasOwnProperty(s)
								? (u != null && s === 'onScroll' && Z('scroll', e),
								  o || a === u || (o = []))
								: (o = o || []).push(s, u));
		}
		n && (o = o || []).push('style', n);
		var s = o;
		(t.updateQueue = s) && (t.flags |= 4);
	}
};
md = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Cr(e, t) {
	if (!oe)
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
function Re(e) {
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
function hm(e, t, n) {
	var r = t.pendingProps;
	switch ((ba(t), t.tag)) {
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
			return Re(t), null;
		case 1:
			return Be(t.type) && fo(), Re(t), null;
		case 3:
			return (
				(r = t.stateNode),
				or(),
				b(Ue),
				b(je),
				uu(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Al(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), ut !== null && (ka(ut), (ut = null)))),
				ma(e, t),
				Re(t),
				null
			);
		case 5:
			au(t);
			var l = dn(ll.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				hd(e, t, n, r, l),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(T(166));
					return Re(t), null;
				}
				if (((e = dn(St.current)), Al(t))) {
					(r = t.stateNode), (n = t.type);
					var o = t.memoizedProps;
					switch (((r[gt] = t), (r[nl] = o), (e = (t.mode & 1) !== 0), n)) {
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
							for (l = 0; l < Ar.length; l++) Z(Ar[l], r);
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
							Ku(r, o), Z('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!o.multiple }),
								Z('invalid', r);
							break;
						case 'textarea':
							Xu(r, o), Z('invalid', r);
					}
					$i(n, o), (l = null);
					for (var i in o)
						if (o.hasOwnProperty(i)) {
							var a = o[i];
							i === 'children'
								? typeof a == 'string'
									? r.textContent !== a &&
									  (o.suppressHydrationWarning !== !0 &&
											Dl(r.textContent, a, e),
									  (l = ['children', a]))
									: typeof a == 'number' &&
									  r.textContent !== '' + a &&
									  (o.suppressHydrationWarning !== !0 &&
											Dl(r.textContent, a, e),
									  (l = ['children', '' + a]))
								: Yr.hasOwnProperty(i) &&
								  a != null &&
								  i === 'onScroll' &&
								  Z('scroll', r);
						}
					switch (n) {
						case 'input':
							Pl(r), Gu(r, o, !0);
							break;
						case 'textarea':
							Pl(r), qu(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof o.onClick == 'function' && (r.onclick = co);
					}
					(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(i = l.nodeType === 9 ? l : l.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = Hc(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = i.createElement('div')),
								  (e.innerHTML = '<script></script>'),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = i.createElement(n, { is: r.is }))
								: ((e = i.createElement(n)),
								  n === 'select' &&
										((i = e),
										r.multiple
											? (i.multiple = !0)
											: r.size && (i.size = r.size)))
							: (e = i.createElementNS(e, n)),
						(e[gt] = t),
						(e[nl] = r),
						pd(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((i = Wi(n, r)), n)) {
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
								for (l = 0; l < Ar.length; l++) Z(Ar[l], e);
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
								Ku(e, r), (l = zi(e, r)), Z('invalid', e);
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
								Xu(e, r), (l = Bi(e, r)), Z('invalid', e);
								break;
							default:
								l = r;
						}
						$i(n, l), (a = l);
						for (o in a)
							if (a.hasOwnProperty(o)) {
								var u = a[o];
								o === 'style'
									? Vc(e, u)
									: o === 'dangerouslySetInnerHTML'
									? ((u = u ? u.__html : void 0), u != null && $c(e, u))
									: o === 'children'
									? typeof u == 'string'
										? (n !== 'textarea' || u !== '') && Kr(e, u)
										: typeof u == 'number' && Kr(e, '' + u)
									: o !== 'suppressContentEditableWarning' &&
									  o !== 'suppressHydrationWarning' &&
									  o !== 'autoFocus' &&
									  (Yr.hasOwnProperty(o)
											? u != null && o === 'onScroll' && Z('scroll', e)
											: u != null && Fa(e, o, u, i));
							}
						switch (n) {
							case 'input':
								Pl(e), Gu(e, r, !1);
								break;
							case 'textarea':
								Pl(e), qu(e);
								break;
							case 'option':
								r.value != null && e.setAttribute('value', '' + tn(r.value));
								break;
							case 'select':
								(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? Kn(e, !!r.multiple, o, !1)
										: r.defaultValue != null &&
										  Kn(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof l.onClick == 'function' && (e.onclick = co);
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
			return Re(t), null;
		case 6:
			if (e && t.stateNode != null) md(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(T(166));
				if (((n = dn(ll.current)), dn(St.current), Al(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[gt] = t),
						(o = r.nodeValue !== n) && ((e = Qe), e !== null))
					)
						switch (e.tag) {
							case 3:
								Dl(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									Dl(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					o && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[gt] = t),
						(t.stateNode = r);
			}
			return Re(t), null;
		case 13:
			if (
				(b(ae),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (oe && Ve !== null && t.mode & 1 && !(t.flags & 128))
					Of(), rr(), (t.flags |= 98560), (o = !1);
				else if (((o = Al(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(T(318));
						if (
							((o = t.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(T(317));
						o[gt] = t;
					} else
						rr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					Re(t), (o = !1);
				} else ut !== null && (ka(ut), (ut = null)), (o = !0);
				if (!o) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || ae.current & 1 ? ye === 0 && (ye = 3) : Su())),
				  t.updateQueue !== null && (t.flags |= 4),
				  Re(t),
				  null);
		case 4:
			return (
				or(), ma(e, t), e === null && el(t.stateNode.containerInfo), Re(t), null
			);
		case 10:
			return ru(t.type._context), Re(t), null;
		case 17:
			return Be(t.type) && fo(), Re(t), null;
		case 19:
			if ((b(ae), (o = t.memoizedState), o === null)) return Re(t), null;
			if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
				if (r) Cr(o, !1);
				else {
					if (ye !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((i = wo(e)), i !== null)) {
								for (
									t.flags |= 128,
										Cr(o, !1),
										r = i.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(i = o.alternate),
										i === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = i.childLanes),
											  (o.lanes = i.lanes),
											  (o.child = i.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps = i.memoizedProps),
											  (o.memoizedState = i.memoizedState),
											  (o.updateQueue = i.updateQueue),
											  (o.type = i.type),
											  (e = i.dependencies),
											  (o.dependencies =
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
					o.tail !== null &&
						fe() > ar &&
						((t.flags |= 128), (r = !0), Cr(o, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = wo(i)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Cr(o, !0),
							o.tail === null && o.tailMode === 'hidden' && !i.alternate && !oe)
						)
							return Re(t), null;
					} else
						2 * fe() - o.renderingStartTime > ar &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Cr(o, !1), (t.lanes = 4194304));
				o.isBackwards
					? ((i.sibling = t.child), (t.child = i))
					: ((n = o.last),
					  n !== null ? (n.sibling = i) : (t.child = i),
					  (o.last = i));
			}
			return o.tail !== null
				? ((t = o.tail),
				  (o.rendering = t),
				  (o.tail = t.sibling),
				  (o.renderingStartTime = fe()),
				  (t.sibling = null),
				  (n = ae.current),
				  J(ae, r ? (n & 1) | 2 : n & 1),
				  t)
				: (Re(t), null);
		case 22:
		case 23:
			return (
				wu(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? We & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: Re(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(T(156, t.tag));
}
function mm(e, t) {
	switch ((ba(t), t.tag)) {
		case 1:
			return (
				Be(t.type) && fo(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				or(),
				b(Ue),
				b(je),
				uu(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return au(t), null;
		case 13:
			if ((b(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(T(340));
				rr();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return b(ae), null;
		case 4:
			return or(), null;
		case 10:
			return ru(t.type._context), null;
		case 22:
		case 23:
			return wu(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Fl = !1,
	_e = !1,
	vm = typeof WeakSet == 'function' ? WeakSet : Set,
	L = null;
function Wn(e, t) {
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
function va(e, t, n) {
	try {
		n();
	} catch (r) {
		ce(e, t, r);
	}
}
var Us = !1;
function ym(e, t) {
	if (((bi = ao), (e = wf()), Ja(e))) {
		if ('selectionStart' in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var l = r.anchorOffset,
						o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break e;
					}
					var i = 0,
						a = -1,
						u = -1,
						s = 0,
						c = 0,
						h = e,
						m = null;
					t: for (;;) {
						for (
							var g;
							h !== n || (l !== 0 && h.nodeType !== 3) || (a = i + l),
								h !== o || (r !== 0 && h.nodeType !== 3) || (u = i + r),
								h.nodeType === 3 && (i += h.nodeValue.length),
								(g = h.firstChild) !== null;

						)
							(m = h), (h = g);
						for (;;) {
							if (h === e) break t;
							if (
								(m === n && ++s === l && (a = i),
								m === o && ++c === r && (u = i),
								(g = h.nextSibling) !== null)
							)
								break;
							(h = m), (m = h.parentNode);
						}
						h = g;
					}
					n = a === -1 || u === -1 ? null : { start: a, end: u };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (ea = { focusedElem: e, selectionRange: n }, ao = !1, L = t; L !== null; )
		if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (L = e);
		else
			for (; L !== null; ) {
				t = L;
				try {
					var S = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (S !== null) {
									var w = S.memoizedProps,
										P = S.memoizedState,
										p = t.stateNode,
										f = p.getSnapshotBeforeUpdate(
											t.elementType === t.type ? w : ot(t.type, w),
											P
										);
									p.__reactInternalSnapshotBeforeUpdate = f;
								}
								break;
							case 3:
								var v = t.stateNode.containerInfo;
								v.nodeType === 1
									? (v.textContent = '')
									: v.nodeType === 9 &&
									  v.documentElement &&
									  v.removeChild(v.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(T(163));
						}
				} catch (d) {
					ce(t, t.return, d);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (L = e);
					break;
				}
				L = t.return;
			}
	return (S = Us), (Us = !1), S;
}
function $r(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var l = (r = r.next);
		do {
			if ((l.tag & e) === e) {
				var o = l.destroy;
				(l.destroy = void 0), o !== void 0 && va(t, n, o);
			}
			l = l.next;
		} while (l !== r);
	}
}
function Uo(e, t) {
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
function vd(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), vd(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[gt], delete t[nl], delete t[ra], delete t[bh], delete t[em])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function yd(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bs(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || yd(e.return)) return null;
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
function ga(e, t, n) {
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
				  n != null || t.onclick !== null || (t.onclick = co));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (ga(e, t, n), e = e.sibling; e !== null; ) ga(e, t, n), (e = e.sibling);
}
function wa(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (wa(e, t, n), e = e.sibling; e !== null; ) wa(e, t, n), (e = e.sibling);
}
var ke = null,
	it = !1;
function Bt(e, t, n) {
	for (n = n.child; n !== null; ) gd(e, t, n), (n = n.sibling);
}
function gd(e, t, n) {
	if (wt && typeof wt.onCommitFiberUnmount == 'function')
		try {
			wt.onCommitFiberUnmount(Lo, n);
		} catch {}
	switch (n.tag) {
		case 5:
			_e || Wn(n, t);
		case 6:
			var r = ke,
				l = it;
			(ke = null),
				Bt(e, t, n),
				(ke = r),
				(it = l),
				ke !== null &&
					(it
						? ((e = ke),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: ke.removeChild(n.stateNode));
			break;
		case 18:
			ke !== null &&
				(it
					? ((e = ke),
					  (n = n.stateNode),
					  e.nodeType === 8
							? gi(e.parentNode, n)
							: e.nodeType === 1 && gi(e, n),
					  Jr(e))
					: gi(ke, n.stateNode));
			break;
		case 4:
			(r = ke),
				(l = it),
				(ke = n.stateNode.containerInfo),
				(it = !0),
				Bt(e, t, n),
				(ke = r),
				(it = l);
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
					var o = l,
						i = o.destroy;
					(o = o.tag),
						i !== void 0 && (o & 2 || o & 4) && va(n, t, i),
						(l = l.next);
				} while (l !== r);
			}
			Bt(e, t, n);
			break;
		case 1:
			if (
				!_e &&
				(Wn(n, t),
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
			Bt(e, t, n);
			break;
		case 21:
			Bt(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((_e = (r = _e) || n.memoizedState !== null), Bt(e, t, n), (_e = r))
				: Bt(e, t, n);
			break;
		default:
			Bt(e, t, n);
	}
}
function Hs(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new vm()),
			t.forEach(function (r) {
				var l = Pm.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(l, l));
			});
	}
}
function lt(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var l = n[r];
			try {
				var o = e,
					i = t,
					a = i;
				e: for (; a !== null; ) {
					switch (a.tag) {
						case 5:
							(ke = a.stateNode), (it = !1);
							break e;
						case 3:
							(ke = a.stateNode.containerInfo), (it = !0);
							break e;
						case 4:
							(ke = a.stateNode.containerInfo), (it = !0);
							break e;
					}
					a = a.return;
				}
				if (ke === null) throw Error(T(160));
				gd(o, i, l), (ke = null), (it = !1);
				var u = l.alternate;
				u !== null && (u.return = null), (l.return = null);
			} catch (s) {
				ce(l, t, s);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) wd(t, e), (t = t.sibling);
}
function wd(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((lt(t, e), vt(e), r & 4)) {
				try {
					$r(3, e, e.return), Uo(3, e);
				} catch (w) {
					ce(e, e.return, w);
				}
				try {
					$r(5, e, e.return);
				} catch (w) {
					ce(e, e.return, w);
				}
			}
			break;
		case 1:
			lt(t, e), vt(e), r & 512 && n !== null && Wn(n, n.return);
			break;
		case 5:
			if (
				(lt(t, e),
				vt(e),
				r & 512 && n !== null && Wn(n, n.return),
				e.flags & 32)
			) {
				var l = e.stateNode;
				try {
					Kr(l, '');
				} catch (w) {
					ce(e, e.return, w);
				}
			}
			if (r & 4 && ((l = e.stateNode), l != null)) {
				var o = e.memoizedProps,
					i = n !== null ? n.memoizedProps : o,
					a = e.type,
					u = e.updateQueue;
				if (((e.updateQueue = null), u !== null))
					try {
						a === 'input' && o.type === 'radio' && o.name != null && Uc(l, o),
							Wi(a, i);
						var s = Wi(a, o);
						for (i = 0; i < u.length; i += 2) {
							var c = u[i],
								h = u[i + 1];
							c === 'style'
								? Vc(l, h)
								: c === 'dangerouslySetInnerHTML'
								? $c(l, h)
								: c === 'children'
								? Kr(l, h)
								: Fa(l, c, h, s);
						}
						switch (a) {
							case 'input':
								Fi(l, o);
								break;
							case 'textarea':
								Bc(l, o);
								break;
							case 'select':
								var m = l._wrapperState.wasMultiple;
								l._wrapperState.wasMultiple = !!o.multiple;
								var g = o.value;
								g != null
									? Kn(l, !!o.multiple, g, !1)
									: m !== !!o.multiple &&
									  (o.defaultValue != null
											? Kn(l, !!o.multiple, o.defaultValue, !0)
											: Kn(l, !!o.multiple, o.multiple ? [] : '', !1));
						}
						l[nl] = o;
					} catch (w) {
						ce(e, e.return, w);
					}
			}
			break;
		case 6:
			if ((lt(t, e), vt(e), r & 4)) {
				if (e.stateNode === null) throw Error(T(162));
				(l = e.stateNode), (o = e.memoizedProps);
				try {
					l.nodeValue = o;
				} catch (w) {
					ce(e, e.return, w);
				}
			}
			break;
		case 3:
			if (
				(lt(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Jr(t.containerInfo);
				} catch (w) {
					ce(e, e.return, w);
				}
			break;
		case 4:
			lt(t, e), vt(e);
			break;
		case 13:
			lt(t, e),
				vt(e),
				(l = e.child),
				l.flags & 8192 &&
					((o = l.memoizedState !== null),
					(l.stateNode.isHidden = o),
					!o ||
						(l.alternate !== null && l.alternate.memoizedState !== null) ||
						(yu = fe())),
				r & 4 && Hs(e);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((_e = (s = _e) || c), lt(t, e), (_e = s)) : lt(t, e),
				vt(e),
				r & 8192)
			) {
				if (
					((s = e.memoizedState !== null),
					(e.stateNode.isHidden = s) && !c && e.mode & 1)
				)
					for (L = e, c = e.child; c !== null; ) {
						for (h = L = c; L !== null; ) {
							switch (((m = L), (g = m.child), m.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									$r(4, m, m.return);
									break;
								case 1:
									Wn(m, m.return);
									var S = m.stateNode;
									if (typeof S.componentWillUnmount == 'function') {
										(r = m), (n = m.return);
										try {
											(t = r),
												(S.props = t.memoizedProps),
												(S.state = t.memoizedState),
												S.componentWillUnmount();
										} catch (w) {
											ce(r, n, w);
										}
									}
									break;
								case 5:
									Wn(m, m.return);
									break;
								case 22:
									if (m.memoizedState !== null) {
										Ws(h);
										continue;
									}
							}
							g !== null ? ((g.return = m), (L = g)) : Ws(h);
						}
						c = c.sibling;
					}
				e: for (c = null, h = e; ; ) {
					if (h.tag === 5) {
						if (c === null) {
							c = h;
							try {
								(l = h.stateNode),
									s
										? ((o = l.style),
										  typeof o.setProperty == 'function'
												? o.setProperty('display', 'none', 'important')
												: (o.display = 'none'))
										: ((a = h.stateNode),
										  (u = h.memoizedProps.style),
										  (i =
												u != null && u.hasOwnProperty('display')
													? u.display
													: null),
										  (a.style.display = Wc('display', i)));
							} catch (w) {
								ce(e, e.return, w);
							}
						}
					} else if (h.tag === 6) {
						if (c === null)
							try {
								h.stateNode.nodeValue = s ? '' : h.memoizedProps;
							} catch (w) {
								ce(e, e.return, w);
							}
					} else if (
						((h.tag !== 22 && h.tag !== 23) ||
							h.memoizedState === null ||
							h === e) &&
						h.child !== null
					) {
						(h.child.return = h), (h = h.child);
						continue;
					}
					if (h === e) break e;
					for (; h.sibling === null; ) {
						if (h.return === null || h.return === e) break e;
						c === h && (c = null), (h = h.return);
					}
					c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
				}
			}
			break;
		case 19:
			lt(t, e), vt(e), r & 4 && Hs(e);
			break;
		case 21:
			break;
		default:
			lt(t, e), vt(e);
	}
}
function vt(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (yd(n)) {
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
					r.flags & 32 && (Kr(l, ''), (r.flags &= -33));
					var o = Bs(e);
					wa(e, o, l);
					break;
				case 3:
				case 4:
					var i = r.stateNode.containerInfo,
						a = Bs(e);
					ga(e, a, i);
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
function gm(e, t, n) {
	(L = e), Sd(e);
}
function Sd(e, t, n) {
	for (var r = (e.mode & 1) !== 0; L !== null; ) {
		var l = L,
			o = l.child;
		if (l.tag === 22 && r) {
			var i = l.memoizedState !== null || Fl;
			if (!i) {
				var a = l.alternate,
					u = (a !== null && a.memoizedState !== null) || _e;
				a = Fl;
				var s = _e;
				if (((Fl = i), (_e = u) && !s))
					for (L = l; L !== null; )
						(i = L),
							(u = i.child),
							i.tag === 22 && i.memoizedState !== null
								? Vs(l)
								: u !== null
								? ((u.return = i), (L = u))
								: Vs(l);
				for (; o !== null; ) (L = o), Sd(o), (o = o.sibling);
				(L = l), (Fl = a), (_e = s);
			}
			$s(e);
		} else
			l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (L = o)) : $s(e);
	}
}
function $s(e) {
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
							_e || Uo(5, t);
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
							var o = t.updateQueue;
							o !== null && Ts(t, o, r);
							break;
						case 3:
							var i = t.updateQueue;
							if (i !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								Ts(t, i, n);
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
										var h = c.dehydrated;
										h !== null && Jr(h);
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
				_e || (t.flags & 512 && ya(t));
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
function Ws(e) {
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
function Vs(e) {
	for (; L !== null; ) {
		var t = L;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Uo(4, t);
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
					var o = t.return;
					try {
						ya(t);
					} catch (u) {
						ce(t, o, u);
					}
					break;
				case 5:
					var i = t.return;
					try {
						ya(t);
					} catch (u) {
						ce(t, i, u);
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
var wm = Math.ceil,
	xo = Dt.ReactCurrentDispatcher,
	mu = Dt.ReactCurrentOwner,
	et = Dt.ReactCurrentBatchConfig,
	Y = 0,
	Se = null,
	he = null,
	Ce = 0,
	We = 0,
	Vn = ln(0),
	ye = 0,
	ul = null,
	En = 0,
	Bo = 0,
	vu = 0,
	Wr = null,
	Ie = null,
	yu = 0,
	ar = 1 / 0,
	Ct = null,
	ko = !1,
	Sa = null,
	Zt = null,
	Ul = !1,
	Yt = null,
	Co = 0,
	Vr = 0,
	Ea = null,
	Jl = -1,
	Zl = 0;
function Le() {
	return Y & 6 ? fe() : Jl !== -1 ? Jl : (Jl = fe());
}
function bt(e) {
	return e.mode & 1
		? Y & 2 && Ce !== 0
			? Ce & -Ce
			: nm.transition !== null
			? (Zl === 0 && (Zl = nf()), Zl)
			: ((e = G),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cf(e.type))),
			  e)
		: 1;
}
function ft(e, t, n, r) {
	if (50 < Vr) throw ((Vr = 0), (Ea = null), Error(T(185)));
	hl(e, n, r),
		(!(Y & 2) || e !== Se) &&
			(e === Se && (!(Y & 2) && (Bo |= n), ye === 4 && Vt(e, Ce)),
			He(e, r),
			n === 1 && Y === 0 && !(t.mode & 1) && ((ar = fe() + 500), Io && on()));
}
function He(e, t) {
	var n = e.callbackNode;
	nh(e, t);
	var r = io(e, e === Se ? Ce : 0);
	if (r === 0)
		n !== null && bu(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && bu(n), t === 1))
			e.tag === 0 ? tm(Qs.bind(null, e)) : jf(Qs.bind(null, e)),
				Jh(function () {
					!(Y & 6) && on();
				}),
				(n = null);
		else {
			switch (rf(r)) {
				case 1:
					n = Wa;
					break;
				case 4:
					n = ef;
					break;
				case 16:
					n = oo;
					break;
				case 536870912:
					n = tf;
					break;
				default:
					n = oo;
			}
			n = _d(n, Ed.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function Ed(e, t) {
	if (((Jl = -1), (Zl = 0), Y & 6)) throw Error(T(327));
	var n = e.callbackNode;
	if (Zn() && e.callbackNode !== n) return null;
	var r = io(e, e === Se ? Ce : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = To(e, r);
	else {
		t = r;
		var l = Y;
		Y |= 2;
		var o = kd();
		(Se !== e || Ce !== t) && ((Ct = null), (ar = fe() + 500), mn(e, t));
		do
			try {
				xm();
				break;
			} catch (a) {
				xd(e, a);
			}
		while (1);
		nu(),
			(xo.current = o),
			(Y = l),
			he !== null ? (t = 0) : ((Se = null), (Ce = 0), (t = ye));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((l = Gi(e)), l !== 0 && ((r = l), (t = xa(e, l)))), t === 1)
		)
			throw ((n = ul), mn(e, 0), Vt(e, r), He(e, fe()), n);
		if (t === 6) Vt(e, r);
		else {
			if (
				((l = e.current.alternate),
				!(r & 30) &&
					!Sm(l) &&
					((t = To(e, r)),
					t === 2 && ((o = Gi(e)), o !== 0 && ((r = o), (t = xa(e, o)))),
					t === 1))
			)
				throw ((n = ul), mn(e, 0), Vt(e, r), He(e, fe()), n);
			switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(T(345));
				case 2:
					sn(e, Ie, Ct);
					break;
				case 3:
					if (
						(Vt(e, r), (r & 130023424) === r && ((t = yu + 500 - fe()), 10 < t))
					) {
						if (io(e, 0) !== 0) break;
						if (((l = e.suspendedLanes), (l & r) !== r)) {
							Le(), (e.pingedLanes |= e.suspendedLanes & l);
							break;
						}
						e.timeoutHandle = na(sn.bind(null, e, Ie, Ct), t);
						break;
					}
					sn(e, Ie, Ct);
					break;
				case 4:
					if ((Vt(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, l = -1; 0 < r; ) {
						var i = 31 - ct(r);
						(o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
					}
					if (
						((r = l),
						(r = fe() - r),
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
								: 1960 * wm(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = na(sn.bind(null, e, Ie, Ct), r);
						break;
					}
					sn(e, Ie, Ct);
					break;
				case 5:
					sn(e, Ie, Ct);
					break;
				default:
					throw Error(T(329));
			}
		}
	}
	return He(e, fe()), e.callbackNode === n ? Ed.bind(null, e) : null;
}
function xa(e, t) {
	var n = Wr;
	return (
		e.current.memoizedState.isDehydrated && (mn(e, t).flags |= 256),
		(e = To(e, t)),
		e !== 2 && ((t = Ie), (Ie = n), t !== null && ka(t)),
		e
	);
}
function ka(e) {
	Ie === null ? (Ie = e) : Ie.push.apply(Ie, e);
}
function Sm(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var l = n[r],
						o = l.getSnapshot;
					l = l.value;
					try {
						if (!dt(o(), l)) return !1;
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
function Vt(e, t) {
	for (
		t &= ~vu,
			t &= ~Bo,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - ct(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function Qs(e) {
	if (Y & 6) throw Error(T(327));
	Zn();
	var t = io(e, 0);
	if (!(t & 1)) return He(e, fe()), null;
	var n = To(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Gi(e);
		r !== 0 && ((t = r), (n = xa(e, r)));
	}
	if (n === 1) throw ((n = ul), mn(e, 0), Vt(e, t), He(e, fe()), n);
	if (n === 6) throw Error(T(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		sn(e, Ie, Ct),
		He(e, fe()),
		null
	);
}
function gu(e, t) {
	var n = Y;
	Y |= 1;
	try {
		return e(t);
	} finally {
		(Y = n), Y === 0 && ((ar = fe() + 500), Io && on());
	}
}
function xn(e) {
	Yt !== null && Yt.tag === 0 && !(Y & 6) && Zn();
	var t = Y;
	Y |= 1;
	var n = et.transition,
		r = G;
	try {
		if (((et.transition = null), (G = 1), e)) return e();
	} finally {
		(G = r), (et.transition = n), (Y = t), !(Y & 6) && on();
	}
}
function wu() {
	(We = Vn.current), b(Vn);
}
function mn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), qh(n)), he !== null))
		for (n = he.return; n !== null; ) {
			var r = n;
			switch ((ba(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && fo();
					break;
				case 3:
					or(), b(Ue), b(je), uu();
					break;
				case 5:
					au(r);
					break;
				case 4:
					or();
					break;
				case 13:
					b(ae);
					break;
				case 19:
					b(ae);
					break;
				case 10:
					ru(r.type._context);
					break;
				case 22:
				case 23:
					wu();
			}
			n = n.return;
		}
	if (
		((Se = e),
		(he = e = en(e.current, null)),
		(Ce = We = t),
		(ye = 0),
		(ul = null),
		(vu = Bo = En = 0),
		(Ie = Wr = null),
		fn !== null)
	) {
		for (t = 0; t < fn.length; t++)
			if (((n = fn[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var l = r.next,
					o = n.pending;
				if (o !== null) {
					var i = o.next;
					(o.next = l), (r.next = i);
				}
				n.pending = r;
			}
		fn = null;
	}
	return e;
}
function xd(e, t) {
	do {
		var n = he;
		try {
			if ((nu(), (Gl.current = Eo), So)) {
				for (var r = ue.memoizedState; r !== null; ) {
					var l = r.queue;
					l !== null && (l.pending = null), (r = r.next);
				}
				So = !1;
			}
			if (
				((Sn = 0),
				(we = ve = ue = null),
				(Hr = !1),
				(ol = 0),
				(mu.current = null),
				n === null || n.return === null)
			) {
				(ye = 1), (ul = t), (he = null);
				break;
			}
			e: {
				var o = e,
					i = n.return,
					a = n,
					u = t;
				if (
					((t = Ce),
					(a.flags |= 32768),
					u !== null && typeof u == 'object' && typeof u.then == 'function')
				) {
					var s = u,
						c = a,
						h = c.tag;
					if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
						var m = c.alternate;
						m
							? ((c.updateQueue = m.updateQueue),
							  (c.memoizedState = m.memoizedState),
							  (c.lanes = m.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null));
					}
					var g = Os(i);
					if (g !== null) {
						(g.flags &= -257),
							Ms(g, i, a, o, t),
							g.mode & 1 && Ls(o, s, t),
							(t = g),
							(u = s);
						var S = t.updateQueue;
						if (S === null) {
							var w = new Set();
							w.add(u), (t.updateQueue = w);
						} else S.add(u);
						break e;
					} else {
						if (!(t & 1)) {
							Ls(o, s, t), Su();
							break e;
						}
						u = Error(T(426));
					}
				} else if (oe && a.mode & 1) {
					var P = Os(i);
					if (P !== null) {
						!(P.flags & 65536) && (P.flags |= 256),
							Ms(P, i, a, o, t),
							eu(ir(u, a));
						break e;
					}
				}
				(o = u = ir(u, a)),
					ye !== 4 && (ye = 2),
					Wr === null ? (Wr = [o]) : Wr.push(o),
					(o = i);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (t &= -t), (o.lanes |= t);
							var p = od(o, u, t);
							Cs(o, p);
							break e;
						case 1:
							a = u;
							var f = o.type,
								v = o.stateNode;
							if (
								!(o.flags & 128) &&
								(typeof f.getDerivedStateFromError == 'function' ||
									(v !== null &&
										typeof v.componentDidCatch == 'function' &&
										(Zt === null || !Zt.has(v))))
							) {
								(o.flags |= 65536), (t &= -t), (o.lanes |= t);
								var d = id(o, a, t);
								Cs(o, d);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			Td(n);
		} catch (C) {
			(t = C), he === n && n !== null && (he = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function kd() {
	var e = xo.current;
	return (xo.current = Eo), e === null ? Eo : e;
}
function Su() {
	(ye === 0 || ye === 3 || ye === 2) && (ye = 4),
		Se === null || (!(En & 268435455) && !(Bo & 268435455)) || Vt(Se, Ce);
}
function To(e, t) {
	var n = Y;
	Y |= 2;
	var r = kd();
	(Se !== e || Ce !== t) && ((Ct = null), mn(e, t));
	do
		try {
			Em();
			break;
		} catch (l) {
			xd(e, l);
		}
	while (1);
	if ((nu(), (Y = n), (xo.current = r), he !== null)) throw Error(T(261));
	return (Se = null), (Ce = 0), ye;
}
function Em() {
	for (; he !== null; ) Cd(he);
}
function xm() {
	for (; he !== null && !Kp(); ) Cd(he);
}
function Cd(e) {
	var t = Rd(e.alternate, e, We);
	(e.memoizedProps = e.pendingProps),
		t === null ? Td(e) : (he = t),
		(mu.current = null);
}
function Td(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = mm(n, t)), n !== null)) {
				(n.flags &= 32767), (he = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(ye = 6), (he = null);
				return;
			}
		} else if (((n = hm(n, t, We)), n !== null)) {
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
function sn(e, t, n) {
	var r = G,
		l = et.transition;
	try {
		(et.transition = null), (G = 1), km(e, t, n, r);
	} finally {
		(et.transition = l), (G = r);
	}
	return null;
}
function km(e, t, n, r) {
	do Zn();
	while (Yt !== null);
	if (Y & 6) throw Error(T(327));
	n = e.finishedWork;
	var l = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(T(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		(rh(e, o),
		e === Se && ((he = Se = null), (Ce = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Ul ||
			((Ul = !0),
			_d(oo, function () {
				return Zn(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		(o = et.transition), (et.transition = null);
		var i = G;
		G = 1;
		var a = Y;
		(Y |= 4),
			(mu.current = null),
			ym(e, n),
			wd(n, e),
			Wh(ea),
			(ao = !!bi),
			(ea = bi = null),
			(e.current = n),
			gm(n),
			Gp(),
			(Y = a),
			(G = i),
			(et.transition = o);
	} else e.current = n;
	if (
		(Ul && ((Ul = !1), (Yt = e), (Co = l)),
		(o = e.pendingLanes),
		o === 0 && (Zt = null),
		Jp(n.stateNode),
		He(e, fe()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
	if (ko) throw ((ko = !1), (e = Sa), (Sa = null), e);
	return (
		Co & 1 && e.tag !== 0 && Zn(),
		(o = e.pendingLanes),
		o & 1 ? (e === Ea ? Vr++ : ((Vr = 0), (Ea = e))) : (Vr = 0),
		on(),
		null
	);
}
function Zn() {
	if (Yt !== null) {
		var e = rf(Co),
			t = et.transition,
			n = G;
		try {
			if (((et.transition = null), (G = 16 > e ? 16 : e), Yt === null))
				var r = !1;
			else {
				if (((e = Yt), (Yt = null), (Co = 0), Y & 6)) throw Error(T(331));
				var l = Y;
				for (Y |= 4, L = e.current; L !== null; ) {
					var o = L,
						i = o.child;
					if (L.flags & 16) {
						var a = o.deletions;
						if (a !== null) {
							for (var u = 0; u < a.length; u++) {
								var s = a[u];
								for (L = s; L !== null; ) {
									var c = L;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											$r(8, c, o);
									}
									var h = c.child;
									if (h !== null) (h.return = c), (L = h);
									else
										for (; L !== null; ) {
											c = L;
											var m = c.sibling,
												g = c.return;
											if ((vd(c), c === s)) {
												L = null;
												break;
											}
											if (m !== null) {
												(m.return = g), (L = m);
												break;
											}
											L = g;
										}
								}
							}
							var S = o.alternate;
							if (S !== null) {
								var w = S.child;
								if (w !== null) {
									S.child = null;
									do {
										var P = w.sibling;
										(w.sibling = null), (w = P);
									} while (w !== null);
								}
							}
							L = o;
						}
					}
					if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (L = i);
					else
						e: for (; L !== null; ) {
							if (((o = L), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										$r(9, o, o.return);
								}
							var p = o.sibling;
							if (p !== null) {
								(p.return = o.return), (L = p);
								break e;
							}
							L = o.return;
						}
				}
				var f = e.current;
				for (L = f; L !== null; ) {
					i = L;
					var v = i.child;
					if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (L = v);
					else
						e: for (i = f; L !== null; ) {
							if (((a = L), a.flags & 2048))
								try {
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											Uo(9, a);
									}
								} catch (C) {
									ce(a, a.return, C);
								}
							if (a === i) {
								L = null;
								break e;
							}
							var d = a.sibling;
							if (d !== null) {
								(d.return = a.return), (L = d);
								break e;
							}
							L = a.return;
						}
				}
				if (
					((Y = l), on(), wt && typeof wt.onPostCommitFiberRoot == 'function')
				)
					try {
						wt.onPostCommitFiberRoot(Lo, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(G = n), (et.transition = t);
		}
	}
	return !1;
}
function Ys(e, t, n) {
	(t = ir(n, t)),
		(t = od(e, t, 1)),
		(e = Jt(e, t, 1)),
		(t = Le()),
		e !== null && (hl(e, 1, t), He(e, t));
}
function ce(e, t, n) {
	if (e.tag === 3) Ys(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Ys(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(Zt === null || !Zt.has(r)))
				) {
					(e = ir(n, e)),
						(e = id(t, e, 1)),
						(t = Jt(t, e, 1)),
						(e = Le()),
						t !== null && (hl(t, 1, e), He(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function Cm(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = Le()),
		(e.pingedLanes |= e.suspendedLanes & n),
		Se === e &&
			(Ce & n) === n &&
			(ye === 4 || (ye === 3 && (Ce & 130023424) === Ce && 500 > fe() - yu)
				? mn(e, 0)
				: (vu |= n)),
		He(e, t);
}
function Pd(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = jl), (jl <<= 1), !(jl & 130023424) && (jl = 4194304))
			: (t = 1));
	var n = Le();
	(e = Ot(e, t)), e !== null && (hl(e, t, n), He(e, n));
}
function Tm(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Pd(e, n);
}
function Pm(e, t) {
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
	r !== null && r.delete(t), Pd(e, n);
}
var Rd;
Rd = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Ue.current) Fe = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Fe = !1), pm(e, t, n);
			Fe = !!(e.flags & 131072);
		}
	else (Fe = !1), oe && t.flags & 1048576 && Nf(t, mo, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			ql(e, t), (e = t.pendingProps);
			var l = nr(t, je.current);
			Jn(t, n), (l = cu(null, t, r, e, l, n));
			var o = fu();
			return (
				(t.flags |= 1),
				typeof l == 'object' &&
				l !== null &&
				typeof l.render == 'function' &&
				l.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  Be(r) ? ((o = !0), po(t)) : (o = !1),
					  (t.memoizedState =
							l.state !== null && l.state !== void 0 ? l.state : null),
					  ou(t),
					  (l.updater = zo),
					  (t.stateNode = l),
					  (l._reactInternals = t),
					  sa(t, r, e, n),
					  (t = da(null, t, r, !0, o, n)))
					: ((t.tag = 0), oe && o && Za(t), Ne(null, t, l, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(ql(e, t),
					(e = t.pendingProps),
					(l = r._init),
					(r = l(r._payload)),
					(t.type = r),
					(l = t.tag = _m(r)),
					(e = ot(r, e)),
					l)
				) {
					case 0:
						t = fa(null, t, r, e, n);
						break e;
					case 1:
						t = Is(null, t, r, e, n);
						break e;
					case 11:
						t = Ds(null, t, r, e, n);
						break e;
					case 14:
						t = As(null, t, r, ot(r.type, e), n);
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
				Is(e, t, r, l, n)
			);
		case 3:
			e: {
				if ((cd(t), e === null)) throw Error(T(387));
				(r = t.pendingProps),
					(o = t.memoizedState),
					(l = o.element),
					Df(e, t),
					go(t, r, null, n);
				var i = t.memoizedState;
				if (((r = i.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: i.cache,
							pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
							transitions: i.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						(l = ir(Error(T(423)), t)), (t = zs(e, t, r, n, l));
						break e;
					} else if (r !== l) {
						(l = ir(Error(T(424)), t)), (t = zs(e, t, r, n, l));
						break e;
					} else
						for (
							Ve = qt(t.stateNode.containerInfo.firstChild),
								Qe = t,
								oe = !0,
								ut = null,
								n = Ff(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((rr(), r === l)) {
						t = Mt(e, t, n);
						break e;
					}
					Ne(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Uf(t),
				e === null && ia(t),
				(r = t.type),
				(l = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(i = l.children),
				ta(r, l) ? (i = null) : o !== null && ta(r, o) && (t.flags |= 32),
				sd(e, t),
				Ne(e, t, i, n),
				t.child
			);
		case 6:
			return e === null && ia(t), null;
		case 13:
			return fd(e, t, n);
		case 4:
			return (
				iu(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = lr(t, null, r, n)) : Ne(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ot(r, l)),
				Ds(e, t, r, l, n)
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
					(o = t.memoizedProps),
					(i = l.value),
					J(vo, r._currentValue),
					(r._currentValue = i),
					o !== null)
				)
					if (dt(o.value, i)) {
						if (o.children === l.children && !Ue.current) {
							t = Mt(e, t, n);
							break e;
						}
					} else
						for (o = t.child, o !== null && (o.return = t); o !== null; ) {
							var a = o.dependencies;
							if (a !== null) {
								i = o.child;
								for (var u = a.firstContext; u !== null; ) {
									if (u.context === r) {
										if (o.tag === 1) {
											(u = _t(-1, n & -n)), (u.tag = 2);
											var s = o.updateQueue;
											if (s !== null) {
												s = s.shared;
												var c = s.pending;
												c === null
													? (u.next = u)
													: ((u.next = c.next), (c.next = u)),
													(s.pending = u);
											}
										}
										(o.lanes |= n),
											(u = o.alternate),
											u !== null && (u.lanes |= n),
											aa(o.return, n, t),
											(a.lanes |= n);
										break;
									}
									u = u.next;
								}
							} else if (o.tag === 10) i = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (((i = o.return), i === null)) throw Error(T(341));
								(i.lanes |= n),
									(a = i.alternate),
									a !== null && (a.lanes |= n),
									aa(i, n, t),
									(i = o.sibling);
							} else i = o.child;
							if (i !== null) i.return = o;
							else
								for (i = o; i !== null; ) {
									if (i === t) {
										i = null;
										break;
									}
									if (((o = i.sibling), o !== null)) {
										(o.return = i.return), (i = o);
										break;
									}
									i = i.return;
								}
							o = i;
						}
				Ne(e, t, l.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(l = t.type),
				(r = t.pendingProps.children),
				Jn(t, n),
				(l = tt(l)),
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
				As(e, t, r, l, n)
			);
		case 15:
			return ad(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ot(r, l)),
				ql(e, t),
				(t.tag = 1),
				Be(r) ? ((e = !0), po(t)) : (e = !1),
				Jn(t, n),
				If(t, r, l),
				sa(t, r, l, n),
				da(null, t, r, !0, e, n)
			);
		case 19:
			return dd(e, t, n);
		case 22:
			return ud(e, t, n);
	}
	throw Error(T(156, t.tag));
};
function _d(e, t) {
	return bc(e, t);
}
function Rm(e, t, n, r) {
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
function be(e, t, n, r) {
	return new Rm(e, t, n, r);
}
function Eu(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _m(e) {
	if (typeof e == 'function') return Eu(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === Ba)) return 11;
		if (e === Ha) return 14;
	}
	return 2;
}
function en(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = be(e.tag, t, e.key, e.mode)),
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
function bl(e, t, n, r, l, o) {
	var i = 2;
	if (((r = e), typeof e == 'function')) Eu(e) && (i = 1);
	else if (typeof e == 'string') i = 5;
	else
		e: switch (e) {
			case Dn:
				return vn(n.children, l, o, t);
			case Ua:
				(i = 8), (l |= 8);
				break;
			case Mi:
				return (
					(e = be(12, n, t, l | 2)), (e.elementType = Mi), (e.lanes = o), e
				);
			case Di:
				return (e = be(13, n, t, l)), (e.elementType = Di), (e.lanes = o), e;
			case Ai:
				return (e = be(19, n, t, l)), (e.elementType = Ai), (e.lanes = o), e;
			case Ic:
				return Ho(n, l, o, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case Dc:
							i = 10;
							break e;
						case Ac:
							i = 9;
							break e;
						case Ba:
							i = 11;
							break e;
						case Ha:
							i = 14;
							break e;
						case Ht:
							(i = 16), (r = null);
							break e;
					}
				throw Error(T(130, e == null ? e : typeof e, ''));
		}
	return (
		(t = be(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
	);
}
function vn(e, t, n, r) {
	return (e = be(7, e, r, t)), (e.lanes = n), e;
}
function Ho(e, t, n, r) {
	return (
		(e = be(22, e, r, t)),
		(e.elementType = Ic),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function Pi(e, t, n) {
	return (e = be(6, e, null, t)), (e.lanes = n), e;
}
function Ri(e, t, n) {
	return (
		(t = be(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function jm(e, t, n, r, l) {
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
		(this.eventTimes = ai(0)),
		(this.expirationTimes = ai(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = ai(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = l),
		(this.mutableSourceEagerHydrationData = null);
}
function xu(e, t, n, r, l, o, i, a, u) {
	return (
		(e = new jm(e, t, n, a, u)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = be(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		ou(o),
		e
	);
}
function Nm(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Mn,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function jd(e) {
	if (!e) return nn;
	e = e._reactInternals;
	e: {
		if (Tn(e) !== e || e.tag !== 1) throw Error(T(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (Be(t.type)) {
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
		if (Be(n)) return _f(e, n, t);
	}
	return t;
}
function Nd(e, t, n, r, l, o, i, a, u) {
	return (
		(e = xu(n, r, !0, e, l, o, i, a, u)),
		(e.context = jd(null)),
		(n = e.current),
		(r = Le()),
		(l = bt(n)),
		(o = _t(r, l)),
		(o.callback = t ?? null),
		Jt(n, o, l),
		(e.current.lanes = l),
		hl(e, l, r),
		He(e, r),
		e
	);
}
function $o(e, t, n, r) {
	var l = t.current,
		o = Le(),
		i = bt(l);
	return (
		(n = jd(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = _t(o, i)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Jt(l, t, i)),
		e !== null && (ft(e, l, i, o), Kl(e, l, i)),
		i
	);
}
function Po(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Ks(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function ku(e, t) {
	Ks(e, t), (e = e.alternate) && Ks(e, t);
}
function Lm() {
	return null;
}
var Ld =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
		  };
function Cu(e) {
	this._internalRoot = e;
}
Wo.prototype.render = Cu.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(T(409));
	$o(e, t, null, null);
};
Wo.prototype.unmount = Cu.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		xn(function () {
			$o(null, e, null, null);
		}),
			(t[Lt] = null);
	}
};
function Wo(e) {
	this._internalRoot = e;
}
Wo.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = af();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
		Wt.splice(n, 0, e), n === 0 && sf(e);
	}
};
function Tu(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Vo(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	);
}
function Gs() {}
function Om(e, t, n, r, l) {
	if (l) {
		if (typeof r == 'function') {
			var o = r;
			r = function () {
				var s = Po(i);
				o.call(s);
			};
		}
		var i = Nd(t, r, e, 0, null, !1, !1, '', Gs);
		return (
			(e._reactRootContainer = i),
			(e[Lt] = i.current),
			el(e.nodeType === 8 ? e.parentNode : e),
			xn(),
			i
		);
	}
	for (; (l = e.lastChild); ) e.removeChild(l);
	if (typeof r == 'function') {
		var a = r;
		r = function () {
			var s = Po(u);
			a.call(s);
		};
	}
	var u = xu(e, 0, !1, null, null, !1, !1, '', Gs);
	return (
		(e._reactRootContainer = u),
		(e[Lt] = u.current),
		el(e.nodeType === 8 ? e.parentNode : e),
		xn(function () {
			$o(t, u, n, r);
		}),
		u
	);
}
function Qo(e, t, n, r, l) {
	var o = n._reactRootContainer;
	if (o) {
		var i = o;
		if (typeof l == 'function') {
			var a = l;
			l = function () {
				var u = Po(i);
				a.call(u);
			};
		}
		$o(t, i, e, l);
	} else i = Om(n, t, e, l, r);
	return Po(i);
}
lf = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Dr(t.pendingLanes);
				n !== 0 &&
					(Va(t, n | 1), He(t, fe()), !(Y & 6) && ((ar = fe() + 500), on()));
			}
			break;
		case 13:
			xn(function () {
				var r = Ot(e, 1);
				if (r !== null) {
					var l = Le();
					ft(r, e, 1, l);
				}
			}),
				ku(e, 1);
	}
};
Qa = function (e) {
	if (e.tag === 13) {
		var t = Ot(e, 134217728);
		if (t !== null) {
			var n = Le();
			ft(t, e, 134217728, n);
		}
		ku(e, 134217728);
	}
};
of = function (e) {
	if (e.tag === 13) {
		var t = bt(e),
			n = Ot(e, t);
		if (n !== null) {
			var r = Le();
			ft(n, e, t, r);
		}
		ku(e, t);
	}
};
af = function () {
	return G;
};
uf = function (e, t) {
	var n = G;
	try {
		return (G = e), t();
	} finally {
		G = n;
	}
};
Qi = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((Fi(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
						var l = Ao(r);
						if (!l) throw Error(T(90));
						Fc(r), Fi(r, l);
					}
				}
			}
			break;
		case 'textarea':
			Bc(e, n);
			break;
		case 'select':
			(t = n.value), t != null && Kn(e, !!n.multiple, t, !1);
	}
};
Kc = gu;
Gc = xn;
var Mm = { usingClientEntryPoint: !1, Events: [vl, Fn, Ao, Qc, Yc, gu] },
	Tr = {
		findFiberByHostInstance: cn,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom',
	},
	Dm = {
		bundleType: Tr.bundleType,
		version: Tr.version,
		rendererPackageName: Tr.rendererPackageName,
		rendererConfig: Tr.rendererConfig,
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
			return (e = Jc(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Tr.findFiberByHostInstance || Lm,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var Bl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Bl.isDisabled && Bl.supportsFiber)
		try {
			(Lo = Bl.inject(Dm)), (wt = Bl);
		} catch {}
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mm;
Ke.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Tu(t)) throw Error(T(200));
	return Nm(e, t, null, n);
};
Ke.createRoot = function (e, t) {
	if (!Tu(e)) throw Error(T(299));
	var n = !1,
		r = '',
		l = Ld;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
		(t = xu(e, 1, !1, null, null, n, !1, r, l)),
		(e[Lt] = t.current),
		el(e.nodeType === 8 ? e.parentNode : e),
		new Cu(t)
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
	return (e = Jc(t)), (e = e === null ? null : e.stateNode), e;
};
Ke.flushSync = function (e) {
	return xn(e);
};
Ke.hydrate = function (e, t, n) {
	if (!Vo(t)) throw Error(T(200));
	return Qo(null, e, t, !0, n);
};
Ke.hydrateRoot = function (e, t, n) {
	if (!Tu(e)) throw Error(T(405));
	var r = (n != null && n.hydratedSources) || null,
		l = !1,
		o = '',
		i = Ld;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (l = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
		(t = Nd(t, null, e, 1, n ?? null, l, !1, o, i)),
		(e[Lt] = t.current),
		el(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(l = n._getVersion),
				(l = l(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, l])
					: t.mutableSourceEagerHydrationData.push(n, l);
	return new Wo(t);
};
Ke.render = function (e, t, n) {
	if (!Vo(t)) throw Error(T(200));
	return Qo(null, e, t, !1, n);
};
Ke.unmountComponentAtNode = function (e) {
	if (!Vo(e)) throw Error(T(40));
	return e._reactRootContainer
		? (xn(function () {
				Qo(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Lt] = null);
				});
		  }),
		  !0)
		: !1;
};
Ke.unstable_batchedUpdates = gu;
Ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Vo(n)) throw Error(T(200));
	if (e == null || e._reactInternals === void 0) throw Error(T(38));
	return Qo(e, t, n, !1, r);
};
Ke.version = '18.2.0-next-9e3b772b8-20220608';
function Od() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Od);
		} catch (e) {
			console.error(e);
		}
}
Od(), (jc.exports = Ke);
var Am = jc.exports,
	Xs = Am;
(Li.createRoot = Xs.createRoot), (Li.hydrateRoot = Xs.hydrateRoot);
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
const qs = 'popstate';
function Im(e) {
	e === void 0 && (e = {});
	function t(r, l) {
		let { pathname: o, search: i, hash: a } = r.location;
		return sl(
			'',
			{ pathname: o, search: i, hash: a },
			(l.state && l.state.usr) || null,
			(l.state && l.state.key) || 'default'
		);
	}
	function n(r, l) {
		return typeof l == 'string' ? l : kn(l);
	}
	return Fm(t, n, null, e);
}
function W(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function ur(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function zm() {
	return Math.random().toString(36).substr(2, 8);
}
function Js(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function sl(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		le(
			{ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
			typeof t == 'string' ? At(t) : t,
			{ state: n, key: (t && t.key) || r || zm() }
		)
	);
}
function kn(e) {
	let { pathname: t = '/', search: n = '', hash: r = '' } = e;
	return (
		n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
		r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
		t
	);
}
function At(e) {
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
function Fm(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: l = document.defaultView, v5Compat: o = !1 } = r,
		i = l.history,
		a = pe.Pop,
		u = null,
		s = c();
	s == null && ((s = 0), i.replaceState(le({}, i.state, { idx: s }), ''));
	function c() {
		return (i.state || { idx: null }).idx;
	}
	function h() {
		a = pe.Pop;
		let P = c(),
			p = P == null ? null : P - s;
		(s = P), u && u({ action: a, location: w.location, delta: p });
	}
	function m(P, p) {
		a = pe.Push;
		let f = sl(w.location, P, p);
		n && n(f, P), (s = c() + 1);
		let v = Js(f, s),
			d = w.createHref(f);
		try {
			i.pushState(v, '', d);
		} catch (C) {
			if (C instanceof DOMException && C.name === 'DataCloneError') throw C;
			l.location.assign(d);
		}
		o && u && u({ action: a, location: w.location, delta: 1 });
	}
	function g(P, p) {
		a = pe.Replace;
		let f = sl(w.location, P, p);
		n && n(f, P), (s = c());
		let v = Js(f, s),
			d = w.createHref(f);
		i.replaceState(v, '', d),
			o && u && u({ action: a, location: w.location, delta: 0 });
	}
	function S(P) {
		let p = l.location.origin !== 'null' ? l.location.origin : l.location.href,
			f = typeof P == 'string' ? P : kn(P);
		return (
			W(
				p,
				'No window.location.(origin|href) available to create URL for href: ' +
					f
			),
			new URL(f, p)
		);
	}
	let w = {
		get action() {
			return a;
		},
		get location() {
			return e(l, i);
		},
		listen(P) {
			if (u) throw new Error('A history only accepts one active listener');
			return (
				l.addEventListener(qs, h),
				(u = P),
				() => {
					l.removeEventListener(qs, h), (u = null);
				}
			);
		},
		createHref(P) {
			return t(l, P);
		},
		createURL: S,
		encodeLocation(P) {
			let p = S(P);
			return { pathname: p.pathname, search: p.search, hash: p.hash };
		},
		push: m,
		replace: g,
		go(P) {
			return i.go(P);
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
const Um = new Set([
	'lazy',
	'caseSensitive',
	'path',
	'id',
	'index',
	'children',
]);
function Bm(e) {
	return e.index === !0;
}
function Ca(e, t, n, r) {
	return (
		n === void 0 && (n = []),
		r === void 0 && (r = {}),
		e.map((l, o) => {
			let i = [...n, o],
				a = typeof l.id == 'string' ? l.id : i.join('-');
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
				Bm(l))
			) {
				let u = le({}, l, t(l), { id: a });
				return (r[a] = u), u;
			} else {
				let u = le({}, l, t(l), { id: a, children: void 0 });
				return (
					(r[a] = u), l.children && (u.children = Ca(l.children, t, i, r)), u
				);
			}
		})
	);
}
function Qn(e, t, n) {
	n === void 0 && (n = '/');
	let r = typeof t == 'string' ? At(t) : t,
		l = pr(r.pathname || '/', n);
	if (l == null) return null;
	let o = Md(e);
	Hm(o);
	let i = null;
	for (let a = 0; i == null && a < o.length; ++a) i = qm(o[a], bm(l));
	return i;
}
function Md(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
	let l = (o, i, a) => {
		let u = {
			relativePath: a === void 0 ? o.path || '' : a,
			caseSensitive: o.caseSensitive === !0,
			childrenIndex: i,
			route: o,
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
		let s = jt([r, u.relativePath]),
			c = n.concat(u);
		o.children &&
			o.children.length > 0 &&
			(W(
				o.index !== !0,
				'Index routes must not have child routes. Please remove ' +
					('all child routes from route path "' + s + '".')
			),
			Md(o.children, t, c, s)),
			!(o.path == null && !o.index) &&
				t.push({ path: s, score: Gm(s, o.index), routesMeta: c });
	};
	return (
		e.forEach((o, i) => {
			var a;
			if (o.path === '' || !((a = o.path) != null && a.includes('?'))) l(o, i);
			else for (let u of Dd(o.path)) l(o, i, u);
		}),
		t
	);
}
function Dd(e) {
	let t = e.split('/');
	if (t.length === 0) return [];
	let [n, ...r] = t,
		l = n.endsWith('?'),
		o = n.replace(/\?$/, '');
	if (r.length === 0) return l ? [o, ''] : [o];
	let i = Dd(r.join('/')),
		a = [];
	return (
		a.push(...i.map((u) => (u === '' ? o : [o, u].join('/')))),
		l && a.push(...i),
		a.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
	);
}
function Hm(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: Xm(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const $m = /^:\w+$/,
	Wm = 3,
	Vm = 2,
	Qm = 1,
	Ym = 10,
	Km = -2,
	Zs = (e) => e === '*';
function Gm(e, t) {
	let n = e.split('/'),
		r = n.length;
	return (
		n.some(Zs) && (r += Km),
		t && (r += Vm),
		n
			.filter((l) => !Zs(l))
			.reduce((l, o) => l + ($m.test(o) ? Wm : o === '' ? Qm : Ym), r)
	);
}
function Xm(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function qm(e, t) {
	let { routesMeta: n } = e,
		r = {},
		l = '/',
		o = [];
	for (let i = 0; i < n.length; ++i) {
		let a = n[i],
			u = i === n.length - 1,
			s = l === '/' ? t : t.slice(l.length) || '/',
			c = Jm(
				{ path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
				s
			);
		if (!c) return null;
		Object.assign(r, c.params);
		let h = a.route;
		o.push({
			params: r,
			pathname: jt([l, c.pathname]),
			pathnameBase: rv(jt([l, c.pathnameBase])),
			route: h,
		}),
			c.pathnameBase !== '/' && (l = jt([l, c.pathnameBase]));
	}
	return o;
}
function Jm(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = Zm(e.path, e.caseSensitive, e.end),
		l = t.match(n);
	if (!l) return null;
	let o = l[0],
		i = o.replace(/(.)\/+$/, '$1'),
		a = l.slice(1);
	return {
		params: r.reduce((s, c, h) => {
			if (c === '*') {
				let m = a[h] || '';
				i = o.slice(0, o.length - m.length).replace(/(.)\/+$/, '$1');
			}
			return (s[c] = ev(a[h] || '', c)), s;
		}, {}),
		pathname: o,
		pathnameBase: i,
		pattern: e,
	};
}
function Zm(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		ur(
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
				.replace(/\/:(\w+)/g, (i, a) => (r.push(a), '/([^\\/]+)'));
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
function bm(e) {
	try {
		return decodeURI(e);
	} catch (t) {
		return (
			ur(
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
function ev(e, t) {
	try {
		return decodeURIComponent(e);
	} catch (n) {
		return (
			ur(
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
function pr(e, t) {
	if (t === '/') return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== '/' ? null : e.slice(n) || '/';
}
function tv(e, t) {
	t === void 0 && (t = '/');
	let {
		pathname: n,
		search: r = '',
		hash: l = '',
	} = typeof e == 'string' ? At(e) : e;
	return {
		pathname: n ? (n.startsWith('/') ? n : nv(n, t)) : t,
		search: lv(r),
		hash: ov(l),
	};
}
function nv(e, t) {
	let n = t.replace(/\/+$/, '').split('/');
	return (
		e.split('/').forEach((l) => {
			l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
		}),
		n.length > 1 ? n.join('/') : '/'
	);
}
function _i(e, t, n, r) {
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
function Yo(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	);
}
function Pu(e, t, n, r) {
	r === void 0 && (r = !1);
	let l;
	typeof e == 'string'
		? (l = At(e))
		: ((l = le({}, e)),
		  W(
				!l.pathname || !l.pathname.includes('?'),
				_i('?', 'pathname', 'search', l)
		  ),
		  W(
				!l.pathname || !l.pathname.includes('#'),
				_i('#', 'pathname', 'hash', l)
		  ),
		  W(!l.search || !l.search.includes('#'), _i('#', 'search', 'hash', l)));
	let o = e === '' || l.pathname === '',
		i = o ? '/' : l.pathname,
		a;
	if (r || i == null) a = n;
	else {
		let h = t.length - 1;
		if (i.startsWith('..')) {
			let m = i.split('/');
			for (; m[0] === '..'; ) m.shift(), (h -= 1);
			l.pathname = m.join('/');
		}
		a = h >= 0 ? t[h] : '/';
	}
	let u = tv(l, a),
		s = i && i !== '/' && i.endsWith('/'),
		c = (o || i === '.') && n.endsWith('/');
	return !u.pathname.endsWith('/') && (s || c) && (u.pathname += '/'), u;
}
const jt = (e) => e.join('/').replace(/\/\/+/g, '/'),
	rv = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
	lv = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
	ov = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
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
function Ad(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.internal == 'boolean' &&
		'data' in e
	);
}
const Id = ['post', 'put', 'patch', 'delete'],
	iv = new Set(Id),
	av = ['get', ...Id],
	uv = new Set(av),
	sv = new Set([301, 302, 303, 307, 308]),
	cv = new Set([307, 308]),
	ji = {
		state: 'idle',
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	fv = {
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
	zd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	dv = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function pv(e) {
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
		let E = e.detectErrorBoundary;
		l = (x) => ({ hasErrorBoundary: E(x) });
	} else l = dv;
	let o = {},
		i = Ca(e.routes, l, void 0, o),
		a,
		u = e.basename || '/',
		s = le({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
		c = null,
		h = new Set(),
		m = null,
		g = null,
		S = null,
		w = e.hydrationData != null,
		P = Qn(i, e.history.location, u),
		p = null;
	if (P == null) {
		let E = qe(404, { pathname: e.history.location.pathname }),
			{ matches: x, route: k } = ic(i);
		(P = x), (p = { [k.id]: E });
	}
	let f =
			!P.some((E) => E.route.lazy) &&
			(!P.some((E) => E.route.loader) || e.hydrationData != null),
		v,
		d = {
			historyAction: e.history.action,
			location: e.history.location,
			matches: P,
			initialized: f,
			navigation: ji,
			restoreScrollPosition: e.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: 'idle',
			loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
			actionData: (e.hydrationData && e.hydrationData.actionData) || null,
			errors: (e.hydrationData && e.hydrationData.errors) || p,
			fetchers: new Map(),
			blockers: new Map(),
		},
		C = pe.Pop,
		j = !1,
		R,
		O = !1,
		Q = !1,
		U = [],
		Ee = [],
		X = new Map(),
		It = 0,
		Rn = -1,
		zt = new Map(),
		rt = new Set(),
		pt = new Map(),
		N = new Map(),
		I = new Map(),
		$ = !1;
	function ie() {
		return (
			(c = e.history.listen((E) => {
				let { action: x, location: k, delta: M } = E;
				if ($) {
					$ = !1;
					return;
				}
				ur(
					I.size === 0 || M != null,
					'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
				);
				let B = zu({
					currentLocation: d.location,
					nextLocation: k,
					historyAction: x,
				});
				if (B && M != null) {
					($ = !0),
						e.history.go(M * -1),
						Sl(B, {
							state: 'blocked',
							location: k,
							proceed() {
								Sl(B, {
									state: 'proceeding',
									proceed: void 0,
									reset: void 0,
									location: k,
								}),
									e.history.go(M);
							},
							reset() {
								let z = new Map(d.blockers);
								z.set(B, Pr), ee({ blockers: z });
							},
						});
					return;
				}
				return Ft(x, k);
			})),
			d.initialized || Ft(pe.Pop, d.location),
			v
		);
	}
	function de() {
		c && c(),
			h.clear(),
			R && R.abort(),
			d.fetchers.forEach((E, x) => qo(x)),
			d.blockers.forEach((E, x) => Iu(x));
	}
	function _n(E) {
		return h.add(E), () => h.delete(E);
	}
	function ee(E) {
		(d = le({}, d, E)), h.forEach((x) => x(d));
	}
	function Et(E, x) {
		var k, M;
		let B =
				d.actionData != null &&
				d.navigation.formMethod != null &&
				at(d.navigation.formMethod) &&
				d.navigation.state === 'loading' &&
				((k = E.state) == null ? void 0 : k._isRedirect) !== !0,
			z;
		x.actionData
			? Object.keys(x.actionData).length > 0
				? (z = x.actionData)
				: (z = null)
			: B
			? (z = d.actionData)
			: (z = null);
		let F = x.loaderData
				? oc(d.loaderData, x.loaderData, x.matches || [], x.errors)
				: d.loaderData,
			A = d.blockers;
		A.size > 0 && ((A = new Map(A)), A.forEach((q, K) => A.set(K, Pr)));
		let D =
			j === !0 ||
			(d.navigation.formMethod != null &&
				at(d.navigation.formMethod) &&
				((M = E.state) == null ? void 0 : M._isRedirect) !== !0);
		a && ((i = a), (a = void 0)),
			O ||
				C === pe.Pop ||
				(C === pe.Push
					? e.history.push(E, E.state)
					: C === pe.Replace && e.history.replace(E, E.state)),
			ee(
				le({}, x, {
					actionData: z,
					loaderData: F,
					historyAction: C,
					location: E,
					initialized: !0,
					navigation: ji,
					revalidation: 'idle',
					restoreScrollPosition: Uu(E, x.matches || d.matches),
					preventScrollReset: D,
					blockers: A,
				})
			),
			(C = pe.Pop),
			(j = !1),
			(O = !1),
			(Q = !1),
			(U = []),
			(Ee = []);
	}
	async function ht(E, x) {
		if (typeof E == 'number') {
			e.history.go(E);
			return;
		}
		let k = Ta(
				d.location,
				d.matches,
				u,
				s.v7_prependBasename,
				E,
				x == null ? void 0 : x.fromRouteId,
				x == null ? void 0 : x.relative
			),
			{
				path: M,
				submission: B,
				error: z,
			} = bs(s.v7_normalizeFormMethod, !1, k, x),
			F = d.location,
			A = sl(d.location, M, x && x.state);
		A = le({}, A, e.history.encodeLocation(A));
		let D = x && x.replace != null ? x.replace : void 0,
			q = pe.Push;
		D === !0
			? (q = pe.Replace)
			: D === !1 ||
			  (B != null &&
					at(B.formMethod) &&
					B.formAction === d.location.pathname + d.location.search &&
					(q = pe.Replace));
		let K =
				x && 'preventScrollReset' in x ? x.preventScrollReset === !0 : void 0,
			$e = zu({ currentLocation: F, nextLocation: A, historyAction: q });
		if ($e) {
			Sl($e, {
				state: 'blocked',
				location: A,
				proceed() {
					Sl($e, {
						state: 'proceeding',
						proceed: void 0,
						reset: void 0,
						location: A,
					}),
						ht(E, x);
				},
				reset() {
					let ge = new Map(d.blockers);
					ge.set($e, Pr), ee({ blockers: ge });
				},
			});
			return;
		}
		return await Ft(q, A, {
			submission: B,
			pendingError: z,
			preventScrollReset: K,
			replace: x && x.replace,
		});
	}
	function jn() {
		if (
			(Xo(),
			ee({ revalidation: 'loading' }),
			d.navigation.state !== 'submitting')
		) {
			if (d.navigation.state === 'idle') {
				Ft(d.historyAction, d.location, { startUninterruptedRevalidation: !0 });
				return;
			}
			Ft(C || d.historyAction, d.navigation.location, {
				overrideNavigation: d.navigation,
			});
		}
	}
	async function Ft(E, x, k) {
		R && R.abort(),
			(R = null),
			(C = E),
			(O = (k && k.startUninterruptedRevalidation) === !0),
			ip(d.location, d.matches),
			(j = (k && k.preventScrollReset) === !0);
		let M = a || i,
			B = k && k.overrideNavigation,
			z = Qn(M, x, u);
		if (!z) {
			let ge = qe(404, { pathname: x.pathname }),
				{ matches: De, route: mt } = ic(M);
			Jo(), Et(x, { matches: De, loaderData: {}, errors: { [mt.id]: ge } });
			return;
		}
		if (
			d.initialized &&
			!Q &&
			gv(d.location, x) &&
			!(k && k.submission && at(k.submission.formMethod))
		) {
			Et(x, { matches: z });
			return;
		}
		R = new AbortController();
		let F = _r(e.history, x, R.signal, k && k.submission),
			A,
			D;
		if (k && k.pendingError) D = { [Yn(z).route.id]: k.pendingError };
		else if (k && k.submission && at(k.submission.formMethod)) {
			let ge = await bd(F, x, k.submission, z, { replace: k.replace });
			if (ge.shortCircuited) return;
			(A = ge.pendingActionData),
				(D = ge.pendingActionError),
				(B = Hl(x, k.submission)),
				(F = new Request(F.url, { signal: F.signal }));
		}
		let {
			shortCircuited: q,
			loaderData: K,
			errors: $e,
		} = await ep(
			F,
			x,
			z,
			B,
			k && k.submission,
			k && k.fetcherSubmission,
			k && k.replace,
			A,
			D
		);
		q ||
			((R = null),
			Et(
				x,
				le({ matches: z }, A ? { actionData: A } : {}, {
					loaderData: K,
					errors: $e,
				})
			));
	}
	async function bd(E, x, k, M, B) {
		B === void 0 && (B = {}), Xo();
		let z = kv(x, k);
		ee({ navigation: z });
		let F,
			A = Ra(M, x);
		if (!A.route.action && !A.route.lazy)
			F = {
				type: me.error,
				error: qe(405, {
					method: E.method,
					pathname: x.pathname,
					routeId: A.route.id,
				}),
			};
		else if (((F = await Rr('action', E, A, M, o, l, u)), E.signal.aborted))
			return { shortCircuited: !0 };
		if (bn(F)) {
			let D;
			return (
				B && B.replace != null
					? (D = B.replace)
					: (D = F.location === d.location.pathname + d.location.search),
				await mr(d, F, { submission: k, replace: D }),
				{ shortCircuited: !0 }
			);
		}
		if (Qr(F)) {
			let D = Yn(M, A.route.id);
			return (
				(B && B.replace) !== !0 && (C = pe.Push),
				{ pendingActionData: {}, pendingActionError: { [D.route.id]: F.error } }
			);
		}
		if (pn(F)) throw qe(400, { type: 'defer-action' });
		return { pendingActionData: { [A.route.id]: F.data } };
	}
	async function ep(E, x, k, M, B, z, F, A, D) {
		let q = M || Hl(x, B),
			K = B || z || sc(q),
			$e = a || i,
			[ge, De] = ec(e.history, d, k, K, x, Q, U, Ee, pt, rt, $e, u, A, D);
		if (
			(Jo(
				(te) =>
					!(k && k.some((Xe) => Xe.route.id === te)) ||
					(ge && ge.some((Xe) => Xe.route.id === te))
			),
			ge.length === 0 && De.length === 0)
		) {
			let te = Du();
			return (
				Et(
					x,
					le(
						{ matches: k, loaderData: {}, errors: D || null },
						A ? { actionData: A } : {},
						te ? { fetchers: new Map(d.fetchers) } : {}
					)
				),
				{ shortCircuited: !0 }
			);
		}
		if (!O) {
			De.forEach((Xe) => {
				let Nn = d.fetchers.get(Xe.key),
					xe = jr(void 0, Nn ? Nn.data : void 0);
				d.fetchers.set(Xe.key, xe);
			});
			let te = A || d.actionData;
			ee(
				le(
					{ navigation: q },
					te
						? Object.keys(te).length === 0
							? { actionData: null }
							: { actionData: te }
						: {},
					De.length > 0 ? { fetchers: new Map(d.fetchers) } : {}
				)
			);
		}
		(Rn = ++It),
			De.forEach((te) => {
				X.has(te.key) && Ut(te.key),
					te.controller && X.set(te.key, te.controller);
			});
		let mt = () => De.forEach((te) => Ut(te.key));
		R && R.signal.addEventListener('abort', mt);
		let {
			results: vr,
			loaderResults: Zo,
			fetcherResults: El,
		} = await Ou(d.matches, k, ge, De, E);
		if (E.signal.aborted) return { shortCircuited: !0 };
		R && R.signal.removeEventListener('abort', mt),
			De.forEach((te) => X.delete(te.key));
		let xt = ac(vr);
		if (xt) return await mr(d, xt, { replace: F }), { shortCircuited: !0 };
		let { loaderData: xl, errors: bo } = lc(d, k, ge, Zo, D, De, El, N);
		N.forEach((te, Xe) => {
			te.subscribe((Nn) => {
				(Nn || te.done) && N.delete(Xe);
			});
		});
		let ei = Du(),
			ti = Au(Rn),
			kl = ei || ti || De.length > 0;
		return le(
			{ loaderData: xl, errors: bo },
			kl ? { fetchers: new Map(d.fetchers) } : {}
		);
	}
	function Lu(E) {
		return d.fetchers.get(E) || fv;
	}
	function tp(E, x, k, M) {
		if (r)
			throw new Error(
				"router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
			);
		X.has(E) && Ut(E);
		let B = a || i,
			z = Ta(
				d.location,
				d.matches,
				u,
				s.v7_prependBasename,
				k,
				x,
				M == null ? void 0 : M.relative
			),
			F = Qn(B, z, u);
		if (!F) {
			wl(E, x, qe(404, { pathname: z }));
			return;
		}
		let {
			path: A,
			submission: D,
			error: q,
		} = bs(s.v7_normalizeFormMethod, !0, z, M);
		if (q) {
			wl(E, x, q);
			return;
		}
		let K = Ra(F, A);
		if (((j = (M && M.preventScrollReset) === !0), D && at(D.formMethod))) {
			np(E, x, A, K, F, D);
			return;
		}
		pt.set(E, { routeId: x, path: A }), rp(E, x, A, K, F, D);
	}
	async function np(E, x, k, M, B, z) {
		if ((Xo(), pt.delete(E), !M.route.action && !M.route.lazy)) {
			let xe = qe(405, { method: z.formMethod, pathname: k, routeId: x });
			wl(E, x, xe);
			return;
		}
		let F = d.fetchers.get(E),
			A = Cv(z, F);
		d.fetchers.set(E, A), ee({ fetchers: new Map(d.fetchers) });
		let D = new AbortController(),
			q = _r(e.history, k, D.signal, z);
		X.set(E, D);
		let K = await Rr('action', q, M, B, o, l, u);
		if (q.signal.aborted) {
			X.get(E) === D && X.delete(E);
			return;
		}
		if (bn(K)) {
			X.delete(E), rt.add(E);
			let xe = jr(z);
			return (
				d.fetchers.set(E, xe),
				ee({ fetchers: new Map(d.fetchers) }),
				mr(d, K, { submission: z, isFetchActionRedirect: !0 })
			);
		}
		if (Qr(K)) {
			wl(E, x, K.error);
			return;
		}
		if (pn(K)) throw qe(400, { type: 'defer-action' });
		let $e = d.navigation.location || d.location,
			ge = _r(e.history, $e, D.signal),
			De = a || i,
			mt =
				d.navigation.state !== 'idle'
					? Qn(De, d.navigation.location, u)
					: d.matches;
		W(mt, "Didn't find any matches after fetcher action");
		let vr = ++It;
		zt.set(E, vr);
		let Zo = jr(z, K.data);
		d.fetchers.set(E, Zo);
		let [El, xt] = ec(
			e.history,
			d,
			mt,
			z,
			$e,
			Q,
			U,
			Ee,
			pt,
			rt,
			De,
			u,
			{ [M.route.id]: K.data },
			void 0
		);
		xt
			.filter((xe) => xe.key !== E)
			.forEach((xe) => {
				let yr = xe.key,
					Bu = d.fetchers.get(yr),
					up = jr(void 0, Bu ? Bu.data : void 0);
				d.fetchers.set(yr, up),
					X.has(yr) && Ut(yr),
					xe.controller && X.set(yr, xe.controller);
			}),
			ee({ fetchers: new Map(d.fetchers) });
		let xl = () => xt.forEach((xe) => Ut(xe.key));
		D.signal.addEventListener('abort', xl);
		let {
			results: bo,
			loaderResults: ei,
			fetcherResults: ti,
		} = await Ou(d.matches, mt, El, xt, ge);
		if (D.signal.aborted) return;
		D.signal.removeEventListener('abort', xl),
			zt.delete(E),
			X.delete(E),
			xt.forEach((xe) => X.delete(xe.key));
		let kl = ac(bo);
		if (kl) return mr(d, kl);
		let { loaderData: te, errors: Xe } = lc(
			d,
			d.matches,
			El,
			ei,
			void 0,
			xt,
			ti,
			N
		);
		if (d.fetchers.has(E)) {
			let xe = eo(K.data);
			d.fetchers.set(E, xe);
		}
		let Nn = Au(vr);
		d.navigation.state === 'loading' && vr > Rn
			? (W(C, 'Expected pending action'),
			  R && R.abort(),
			  Et(d.navigation.location, {
					matches: mt,
					loaderData: te,
					errors: Xe,
					fetchers: new Map(d.fetchers),
			  }))
			: (ee(
					le(
						{ errors: Xe, loaderData: oc(d.loaderData, te, mt, Xe) },
						Nn || xt.length > 0 ? { fetchers: new Map(d.fetchers) } : {}
					)
			  ),
			  (Q = !1));
	}
	async function rp(E, x, k, M, B, z) {
		let F = d.fetchers.get(E),
			A = jr(z, F ? F.data : void 0);
		d.fetchers.set(E, A), ee({ fetchers: new Map(d.fetchers) });
		let D = new AbortController(),
			q = _r(e.history, k, D.signal);
		X.set(E, D);
		let K = await Rr('loader', q, M, B, o, l, u);
		if (
			(pn(K) && (K = (await Bd(K, q.signal, !0)) || K),
			X.get(E) === D && X.delete(E),
			q.signal.aborted)
		)
			return;
		if (bn(K)) {
			rt.add(E), await mr(d, K);
			return;
		}
		if (Qr(K)) {
			let ge = Yn(d.matches, x);
			d.fetchers.delete(E),
				ee({
					fetchers: new Map(d.fetchers),
					errors: { [ge.route.id]: K.error },
				});
			return;
		}
		W(!pn(K), 'Unhandled fetcher deferred data');
		let $e = eo(K.data);
		d.fetchers.set(E, $e), ee({ fetchers: new Map(d.fetchers) });
	}
	async function mr(E, x, k) {
		let {
			submission: M,
			replace: B,
			isFetchActionRedirect: z,
		} = k === void 0 ? {} : k;
		x.revalidate && (Q = !0);
		let F = sl(
			E.location,
			x.location,
			le({ _isRedirect: !0 }, z ? { _isFetchActionRedirect: !0 } : {})
		);
		if (
			(W(F, 'Expected a location on the redirect navigation'),
			zd.test(x.location) && n)
		) {
			let q = e.history.createURL(x.location),
				K = pr(q.pathname, u) == null;
			if (t.location.origin !== q.origin || K) {
				B ? t.location.replace(x.location) : t.location.assign(x.location);
				return;
			}
		}
		R = null;
		let A = B === !0 ? pe.Replace : pe.Push,
			D = M || sc(E.navigation);
		if (cv.has(x.status) && D && at(D.formMethod))
			await Ft(A, F, {
				submission: le({}, D, { formAction: x.location }),
				preventScrollReset: j,
			});
		else if (z)
			await Ft(A, F, {
				overrideNavigation: Hl(F),
				fetcherSubmission: D,
				preventScrollReset: j,
			});
		else {
			let q = Hl(F, D);
			await Ft(A, F, { overrideNavigation: q, preventScrollReset: j });
		}
	}
	async function Ou(E, x, k, M, B) {
		let z = await Promise.all([
				...k.map((D) => Rr('loader', B, D, x, o, l, u)),
				...M.map((D) =>
					D.matches && D.match && D.controller
						? Rr(
								'loader',
								_r(e.history, D.path, D.controller.signal),
								D.match,
								D.matches,
								o,
								l,
								u
						  )
						: { type: me.error, error: qe(404, { pathname: D.path }) }
				),
			]),
			F = z.slice(0, k.length),
			A = z.slice(k.length);
		return (
			await Promise.all([
				uc(
					E,
					k,
					F,
					F.map(() => B.signal),
					!1,
					d.loaderData
				),
				uc(
					E,
					M.map((D) => D.match),
					A,
					M.map((D) => (D.controller ? D.controller.signal : null)),
					!0
				),
			]),
			{ results: z, loaderResults: F, fetcherResults: A }
		);
	}
	function Xo() {
		(Q = !0),
			U.push(...Jo()),
			pt.forEach((E, x) => {
				X.has(x) && (Ee.push(x), Ut(x));
			});
	}
	function wl(E, x, k) {
		let M = Yn(d.matches, x);
		qo(E), ee({ errors: { [M.route.id]: k }, fetchers: new Map(d.fetchers) });
	}
	function qo(E) {
		let x = d.fetchers.get(E);
		X.has(E) && !(x && x.state === 'loading' && zt.has(E)) && Ut(E),
			pt.delete(E),
			zt.delete(E),
			rt.delete(E),
			d.fetchers.delete(E);
	}
	function Ut(E) {
		let x = X.get(E);
		W(x, 'Expected fetch controller: ' + E), x.abort(), X.delete(E);
	}
	function Mu(E) {
		for (let x of E) {
			let k = Lu(x),
				M = eo(k.data);
			d.fetchers.set(x, M);
		}
	}
	function Du() {
		let E = [],
			x = !1;
		for (let k of rt) {
			let M = d.fetchers.get(k);
			W(M, 'Expected fetcher: ' + k),
				M.state === 'loading' && (rt.delete(k), E.push(k), (x = !0));
		}
		return Mu(E), x;
	}
	function Au(E) {
		let x = [];
		for (let [k, M] of zt)
			if (M < E) {
				let B = d.fetchers.get(k);
				W(B, 'Expected fetcher: ' + k),
					B.state === 'loading' && (Ut(k), zt.delete(k), x.push(k));
			}
		return Mu(x), x.length > 0;
	}
	function lp(E, x) {
		let k = d.blockers.get(E) || Pr;
		return I.get(E) !== x && I.set(E, x), k;
	}
	function Iu(E) {
		d.blockers.delete(E), I.delete(E);
	}
	function Sl(E, x) {
		let k = d.blockers.get(E) || Pr;
		W(
			(k.state === 'unblocked' && x.state === 'blocked') ||
				(k.state === 'blocked' && x.state === 'blocked') ||
				(k.state === 'blocked' && x.state === 'proceeding') ||
				(k.state === 'blocked' && x.state === 'unblocked') ||
				(k.state === 'proceeding' && x.state === 'unblocked'),
			'Invalid blocker state transition: ' + k.state + ' -> ' + x.state
		);
		let M = new Map(d.blockers);
		M.set(E, x), ee({ blockers: M });
	}
	function zu(E) {
		let { currentLocation: x, nextLocation: k, historyAction: M } = E;
		if (I.size === 0) return;
		I.size > 1 && ur(!1, 'A router only supports one blocker at a time');
		let B = Array.from(I.entries()),
			[z, F] = B[B.length - 1],
			A = d.blockers.get(z);
		if (
			!(A && A.state === 'proceeding') &&
			F({ currentLocation: x, nextLocation: k, historyAction: M })
		)
			return z;
	}
	function Jo(E) {
		let x = [];
		return (
			N.forEach((k, M) => {
				(!E || E(M)) && (k.cancel(), x.push(M), N.delete(M));
			}),
			x
		);
	}
	function op(E, x, k) {
		if (((m = E), (S = x), (g = k || null), !w && d.navigation === ji)) {
			w = !0;
			let M = Uu(d.location, d.matches);
			M != null && ee({ restoreScrollPosition: M });
		}
		return () => {
			(m = null), (S = null), (g = null);
		};
	}
	function Fu(E, x) {
		return (
			(g &&
				g(
					E,
					x.map((M) => xv(M, d.loaderData))
				)) ||
			E.key
		);
	}
	function ip(E, x) {
		if (m && S) {
			let k = Fu(E, x);
			m[k] = S();
		}
	}
	function Uu(E, x) {
		if (m) {
			let k = Fu(E, x),
				M = m[k];
			if (typeof M == 'number') return M;
		}
		return null;
	}
	function ap(E) {
		(o = {}), (a = Ca(E, l, void 0, o));
	}
	return (
		(v = {
			get basename() {
				return u;
			},
			get state() {
				return d;
			},
			get routes() {
				return i;
			},
			initialize: ie,
			subscribe: _n,
			enableScrollRestoration: op,
			navigate: ht,
			fetch: tp,
			revalidate: jn,
			createHref: (E) => e.history.createHref(E),
			encodeLocation: (E) => e.history.encodeLocation(E),
			getFetcher: Lu,
			deleteFetcher: qo,
			dispose: de,
			getBlocker: lp,
			deleteBlocker: Iu,
			_internalFetchControllers: X,
			_internalActiveDeferreds: N,
			_internalSetRoutes: ap,
		}),
		v
	);
}
function hv(e) {
	return (
		e != null &&
		(('formData' in e && e.formData != null) ||
			('body' in e && e.body !== void 0))
	);
}
function Ta(e, t, n, r, l, o, i) {
	let a, u;
	if (o != null && i !== 'path') {
		a = [];
		for (let c of t)
			if ((a.push(c), c.route.id === o)) {
				u = c;
				break;
			}
	} else (a = t), (u = t[t.length - 1]);
	let s = Pu(
		l || '.',
		Yo(a).map((c) => c.pathnameBase),
		pr(e.pathname, n) || e.pathname,
		i === 'path'
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
			(s.pathname = s.pathname === '/' ? n : jt([n, s.pathname])),
		kn(s)
	);
}
function bs(e, t, n, r) {
	if (!r || !hv(r)) return { path: n };
	if (r.formMethod && !Ev(r.formMethod))
		return { path: n, error: qe(405, { method: r.formMethod }) };
	let l = () => ({ path: n, error: qe(400, { type: 'invalid-body' }) }),
		o = r.formMethod || 'get',
		i = e ? o.toUpperCase() : o.toLowerCase(),
		a = Ud(n);
	if (r.body !== void 0) {
		if (r.formEncType === 'text/plain') {
			if (!at(i)) return l();
			let m =
				typeof r.body == 'string'
					? r.body
					: r.body instanceof FormData || r.body instanceof URLSearchParams
					? Array.from(r.body.entries()).reduce((g, S) => {
							let [w, P] = S;
							return (
								'' +
								g +
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
					formMethod: i,
					formAction: a,
					formEncType: r.formEncType,
					formData: void 0,
					json: void 0,
					text: m,
				},
			};
		} else if (r.formEncType === 'application/json') {
			if (!at(i)) return l();
			try {
				let m = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
				return {
					path: n,
					submission: {
						formMethod: i,
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
	let u, s;
	if (r.formData) (u = Pa(r.formData)), (s = r.formData);
	else if (r.body instanceof FormData) (u = Pa(r.body)), (s = r.body);
	else if (r.body instanceof URLSearchParams) (u = r.body), (s = rc(u));
	else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
	else
		try {
			(u = new URLSearchParams(r.body)), (s = rc(u));
		} catch {
			return l();
		}
	let c = {
		formMethod: i,
		formAction: a,
		formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
		formData: s,
		json: void 0,
		text: void 0,
	};
	if (at(c.formMethod)) return { path: n, submission: c };
	let h = At(n);
	return (
		t && h.search && _u(h.search) && u.append('index', ''),
		(h.search = '?' + u),
		{ path: kn(h), submission: c }
	);
}
function mv(e, t) {
	let n = e;
	if (t) {
		let r = e.findIndex((l) => l.route.id === t);
		r >= 0 && (n = e.slice(0, r));
	}
	return n;
}
function ec(e, t, n, r, l, o, i, a, u, s, c, h, m, g) {
	let S = g ? Object.values(g)[0] : m ? Object.values(m)[0] : void 0,
		w = e.createURL(t.location),
		P = e.createURL(l),
		p = g ? Object.keys(g)[0] : void 0,
		v = mv(n, p).filter((C, j) => {
			if (C.route.lazy) return !0;
			if (C.route.loader == null) return !1;
			if (vv(t.loaderData, t.matches[j], C) || i.some((Q) => Q === C.route.id))
				return !0;
			let R = t.matches[j],
				O = C;
			return tc(
				C,
				le(
					{
						currentUrl: w,
						currentParams: R.params,
						nextUrl: P,
						nextParams: O.params,
					},
					r,
					{
						actionResult: S,
						defaultShouldRevalidate:
							o ||
							w.pathname + w.search === P.pathname + P.search ||
							w.search !== P.search ||
							Fd(R, O),
					}
				)
			);
		}),
		d = [];
	return (
		u.forEach((C, j) => {
			if (!n.some((X) => X.route.id === C.routeId)) return;
			let R = Qn(c, C.path, h);
			if (!R) {
				d.push({
					key: j,
					routeId: C.routeId,
					path: C.path,
					matches: null,
					match: null,
					controller: null,
				});
				return;
			}
			let O = t.fetchers.get(j),
				Q = O && O.state !== 'idle' && O.data === void 0 && !s.has(j),
				U = Ra(R, C.path);
			(a.includes(j) ||
				Q ||
				tc(
					U,
					le(
						{
							currentUrl: w,
							currentParams: t.matches[t.matches.length - 1].params,
							nextUrl: P,
							nextParams: n[n.length - 1].params,
						},
						r,
						{ actionResult: S, defaultShouldRevalidate: o }
					)
				)) &&
				d.push({
					key: j,
					routeId: C.routeId,
					path: C.path,
					matches: R,
					match: U,
					controller: new AbortController(),
				});
		}),
		[v, d]
	);
}
function vv(e, t, n) {
	let r = !t || n.route.id !== t.route.id,
		l = e[n.route.id] === void 0;
	return r || l;
}
function Fd(e, t) {
	let n = e.route.path;
	return (
		e.pathname !== t.pathname ||
		(n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
	);
}
function tc(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == 'boolean') return n;
	}
	return t.defaultShouldRevalidate;
}
async function nc(e, t, n) {
	if (!e.lazy) return;
	let r = await e.lazy();
	if (!e.lazy) return;
	let l = n[e.id];
	W(l, 'No route found in manifest');
	let o = {};
	for (let i in r) {
		let u = l[i] !== void 0 && i !== 'hasErrorBoundary';
		ur(
			!u,
			'Route "' +
				l.id +
				'" has a static property "' +
				i +
				'" defined but its lazy function is also returning a value for this property. ' +
				('The lazy route property "' + i + '" will be ignored.')
		),
			!u && !Um.has(i) && (o[i] = r[i]);
	}
	Object.assign(l, o), Object.assign(l, le({}, t(l), { lazy: void 0 }));
}
async function Rr(e, t, n, r, l, o, i, a) {
	a === void 0 && (a = {});
	let u,
		s,
		c,
		h = (S) => {
			let w,
				P = new Promise((p, f) => (w = f));
			return (
				(c = () => w()),
				t.signal.addEventListener('abort', c),
				Promise.race([
					S({ request: t, params: n.params, context: a.requestContext }),
					P,
				])
			);
		};
	try {
		let S = n.route[e];
		if (n.route.lazy)
			if (S) s = (await Promise.all([h(S), nc(n.route, o, l)]))[0];
			else if ((await nc(n.route, o, l), (S = n.route[e]), S)) s = await h(S);
			else if (e === 'action') {
				let w = new URL(t.url),
					P = w.pathname + w.search;
				throw qe(405, { method: t.method, pathname: P, routeId: n.route.id });
			} else return { type: me.data, data: void 0 };
		else if (S) s = await h(S);
		else {
			let w = new URL(t.url),
				P = w.pathname + w.search;
			throw qe(404, { pathname: P });
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
	} catch (S) {
		(u = me.error), (s = S);
	} finally {
		c && t.signal.removeEventListener('abort', c);
	}
	if (Sv(s)) {
		let S = s.status;
		if (sv.has(S)) {
			let p = s.headers.get('Location');
			if (
				(W(
					p,
					'Redirects returned/thrown from loaders/actions must have a Location header'
				),
				!zd.test(p))
			)
				p = Ta(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, p);
			else if (!a.isStaticRequest) {
				let f = new URL(t.url),
					v = p.startsWith('//') ? new URL(f.protocol + p) : new URL(p),
					d = pr(v.pathname, i) != null;
				v.origin === f.origin && d && (p = v.pathname + v.search + v.hash);
			}
			if (a.isStaticRequest) throw (s.headers.set('Location', p), s);
			return {
				type: me.redirect,
				status: S,
				location: p,
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
				? { type: u, error: new Ru(S, s.statusText, w), headers: s.headers }
				: { type: me.data, data: w, statusCode: s.status, headers: s.headers }
		);
	}
	if (u === me.error) return { type: u, error: s };
	if (wv(s)) {
		var m, g;
		return {
			type: me.deferred,
			deferredData: s,
			statusCode: (m = s.init) == null ? void 0 : m.status,
			headers:
				((g = s.init) == null ? void 0 : g.headers) &&
				new Headers(s.init.headers),
		};
	}
	return { type: me.data, data: s };
}
function _r(e, t, n, r) {
	let l = e.createURL(Ud(t)).toString(),
		o = { signal: n };
	if (r && at(r.formMethod)) {
		let { formMethod: i, formEncType: a } = r;
		(o.method = i.toUpperCase()),
			a === 'application/json'
				? ((o.headers = new Headers({ 'Content-Type': a })),
				  (o.body = JSON.stringify(r.json)))
				: a === 'text/plain'
				? (o.body = r.text)
				: a === 'application/x-www-form-urlencoded' && r.formData
				? (o.body = Pa(r.formData))
				: (o.body = r.formData);
	}
	return new Request(l, o);
}
function Pa(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries())
		t.append(n, typeof r == 'string' ? r : r.name);
	return t;
}
function rc(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function yv(e, t, n, r, l) {
	let o = {},
		i = null,
		a,
		u = !1,
		s = {};
	return (
		n.forEach((c, h) => {
			let m = t[h].route.id;
			if (
				(W(!bn(c), 'Cannot handle redirect results in processLoaderData'),
				Qr(c))
			) {
				let g = Yn(e, m),
					S = c.error;
				r && ((S = Object.values(r)[0]), (r = void 0)),
					(i = i || {}),
					i[g.route.id] == null && (i[g.route.id] = S),
					(o[m] = void 0),
					u || ((u = !0), (a = Ad(c.error) ? c.error.status : 500)),
					c.headers && (s[m] = c.headers);
			} else
				pn(c)
					? (l.set(m, c.deferredData), (o[m] = c.deferredData.data))
					: (o[m] = c.data),
					c.statusCode != null &&
						c.statusCode !== 200 &&
						!u &&
						(a = c.statusCode),
					c.headers && (s[m] = c.headers);
		}),
		r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
		{ loaderData: o, errors: i, statusCode: a || 200, loaderHeaders: s }
	);
}
function lc(e, t, n, r, l, o, i, a) {
	let { loaderData: u, errors: s } = yv(t, n, r, l, a);
	for (let c = 0; c < o.length; c++) {
		let { key: h, match: m, controller: g } = o[c];
		W(
			i !== void 0 && i[c] !== void 0,
			'Did not find corresponding fetcher result'
		);
		let S = i[c];
		if (!(g && g.signal.aborted))
			if (Qr(S)) {
				let w = Yn(e.matches, m == null ? void 0 : m.route.id);
				(s && s[w.route.id]) || (s = le({}, s, { [w.route.id]: S.error })),
					e.fetchers.delete(h);
			} else if (bn(S)) W(!1, 'Unhandled fetcher revalidation redirect');
			else if (pn(S)) W(!1, 'Unhandled fetcher deferred data');
			else {
				let w = eo(S.data);
				e.fetchers.set(h, w);
			}
	}
	return { loaderData: u, errors: s };
}
function oc(e, t, n, r) {
	let l = le({}, t);
	for (let o of n) {
		let i = o.route.id;
		if (
			(t.hasOwnProperty(i)
				? t[i] !== void 0 && (l[i] = t[i])
				: e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
			r && r.hasOwnProperty(i))
		)
			break;
	}
	return l;
}
function Yn(e, t) {
	return (
		(t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
			.reverse()
			.find((r) => r.route.hasErrorBoundary === !0) || e[0]
	);
}
function ic(e) {
	let t = e.find((n) => n.index || !n.path || n.path === '/') || {
		id: '__shim-error-route__',
	};
	return {
		matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
		route: t,
	};
}
function qe(e, t) {
	let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
		i = 'Unknown Server Error',
		a = 'Unknown @remix-run/router error';
	return (
		e === 400
			? ((i = 'Bad Request'),
			  l && n && r
					? (a =
							'You made a ' +
							l +
							' request to "' +
							n +
							'" but ' +
							('did not provide a `loader` for route "' + r + '", ') +
							'so there is no way to handle the request.')
					: o === 'defer-action'
					? (a = 'defer() is not supported in actions')
					: o === 'invalid-body' && (a = 'Unable to encode submission body'))
			: e === 403
			? ((i = 'Forbidden'),
			  (a = 'Route "' + r + '" does not match URL "' + n + '"'))
			: e === 404
			? ((i = 'Not Found'), (a = 'No route matches URL "' + n + '"'))
			: e === 405 &&
			  ((i = 'Method Not Allowed'),
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
		new Ru(e || 500, i, new Error(a), !0)
	);
}
function ac(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (bn(n)) return n;
	}
}
function Ud(e) {
	let t = typeof e == 'string' ? At(e) : e;
	return kn(le({}, t, { hash: '' }));
}
function gv(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search
		? !1
		: e.hash === ''
		? t.hash !== ''
		: e.hash === t.hash
		? !0
		: t.hash !== '';
}
function pn(e) {
	return e.type === me.deferred;
}
function Qr(e) {
	return e.type === me.error;
}
function bn(e) {
	return (e && e.type) === me.redirect;
}
function wv(e) {
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
function Sv(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.headers == 'object' &&
		typeof e.body < 'u'
	);
}
function Ev(e) {
	return uv.has(e.toLowerCase());
}
function at(e) {
	return iv.has(e.toLowerCase());
}
async function uc(e, t, n, r, l, o) {
	for (let i = 0; i < n.length; i++) {
		let a = n[i],
			u = t[i];
		if (!u) continue;
		let s = e.find((h) => h.route.id === u.route.id),
			c = s != null && !Fd(s, u) && (o && o[u.route.id]) !== void 0;
		if (pn(a) && (l || c)) {
			let h = r[i];
			W(h, 'Expected an AbortSignal for revalidating fetcher deferred result'),
				await Bd(a, h, l).then((m) => {
					m && (n[i] = m || n[i]);
				});
		}
	}
}
async function Bd(e, t, n) {
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
function xv(e, t) {
	let { route: n, pathname: r, params: l } = e;
	return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Ra(e, t) {
	let n = typeof t == 'string' ? At(t).search : t.search;
	if (e[e.length - 1].route.index && _u(n || '')) return e[e.length - 1];
	let r = Yo(e);
	return r[r.length - 1];
}
function sc(e) {
	let {
		formMethod: t,
		formAction: n,
		formEncType: r,
		text: l,
		formData: o,
		json: i,
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
		if (o != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: o,
				json: void 0,
				text: void 0,
			};
		if (i !== void 0)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: i,
				text: void 0,
			};
	}
}
function Hl(e, t) {
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
function kv(e, t) {
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
function jr(e, t) {
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
function Cv(e, t) {
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
function eo(e) {
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
 */ function Ro() {
	return (
		(Ro = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Ro.apply(this, arguments)
	);
}
const Ko = _.createContext(null),
	ju = _.createContext(null),
	Pn = _.createContext(null),
	Go = _.createContext(null),
	an = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	Hd = _.createContext(null);
function Tv(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	gl() || W(!1);
	let { basename: r, navigator: l } = _.useContext(Pn),
		{ hash: o, pathname: i, search: a } = Nu(e, { relative: n }),
		u = i;
	return (
		r !== '/' && (u = i === '/' ? r : jt([r, i])),
		l.createHref({ pathname: u, search: a, hash: o })
	);
}
function gl() {
	return _.useContext(Go) != null;
}
function hr() {
	return gl() || W(!1), _.useContext(Go).location;
}
function $d(e) {
	_.useContext(Pn).static || _.useLayoutEffect(e);
}
function Pv() {
	let { isDataRoute: e } = _.useContext(an);
	return e ? Bv() : Rv();
}
function Rv() {
	gl() || W(!1);
	let e = _.useContext(Ko),
		{ basename: t, navigator: n } = _.useContext(Pn),
		{ matches: r } = _.useContext(an),
		{ pathname: l } = hr(),
		o = JSON.stringify(Yo(r).map((u) => u.pathnameBase)),
		i = _.useRef(!1);
	return (
		$d(() => {
			i.current = !0;
		}),
		_.useCallback(
			function (u, s) {
				if ((s === void 0 && (s = {}), !i.current)) return;
				if (typeof u == 'number') {
					n.go(u);
					return;
				}
				let c = Pu(u, JSON.parse(o), l, s.relative === 'path');
				e == null &&
					t !== '/' &&
					(c.pathname = c.pathname === '/' ? t : jt([t, c.pathname])),
					(s.replace ? n.replace : n.push)(c, s.state, s);
			},
			[t, n, o, l, e]
		)
	);
}
const _v = _.createContext(null);
function jv(e) {
	let t = _.useContext(an).outlet;
	return t && _.createElement(_v.Provider, { value: e }, t);
}
function Nu(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ matches: r } = _.useContext(an),
		{ pathname: l } = hr(),
		o = JSON.stringify(Yo(r).map((i) => i.pathnameBase));
	return _.useMemo(() => Pu(e, JSON.parse(o), l, n === 'path'), [e, o, l, n]);
}
function Nv(e, t, n) {
	gl() || W(!1);
	let { navigator: r } = _.useContext(Pn),
		{ matches: l } = _.useContext(an),
		o = l[l.length - 1],
		i = o ? o.params : {};
	o && o.pathname;
	let a = o ? o.pathnameBase : '/';
	o && o.route;
	let u = hr(),
		s;
	if (t) {
		var c;
		let w = typeof t == 'string' ? At(t) : t;
		a === '/' || ((c = w.pathname) != null && c.startsWith(a)) || W(!1),
			(s = w);
	} else s = u;
	let h = s.pathname || '/',
		m = a === '/' ? h : h.slice(a.length) || '/',
		g = Qn(e, { pathname: m }),
		S = Av(
			g &&
				g.map((w) =>
					Object.assign({}, w, {
						params: Object.assign({}, i, w.params),
						pathname: jt([
							a,
							r.encodeLocation
								? r.encodeLocation(w.pathname).pathname
								: w.pathname,
						]),
						pathnameBase:
							w.pathnameBase === '/'
								? a
								: jt([
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
	return t && S
		? _.createElement(
				Go.Provider,
				{
					value: {
						location: Ro(
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
				S
		  )
		: S;
}
function Lv() {
	let e = Uv(),
		t = Ad(e)
			? e.status + ' ' + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
		o = null;
	return _.createElement(
		_.Fragment,
		null,
		_.createElement('h2', null, 'Unexpected Application Error!'),
		_.createElement('h3', { style: { fontStyle: 'italic' } }, t),
		n ? _.createElement('pre', { style: l }, n) : null,
		o
	);
}
const Ov = _.createElement(Lv, null);
class Mv extends _.Component {
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
			? _.createElement(
					an.Provider,
					{ value: this.props.routeContext },
					_.createElement(Hd.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function Dv(e) {
	let { routeContext: t, match: n, children: r } = e,
		l = _.useContext(Ko);
	return (
		l &&
			l.static &&
			l.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(l.staticContext._deepestRenderedBoundaryId = n.route.id),
		_.createElement(an.Provider, { value: t }, r)
	);
}
function Av(e, t, n) {
	var r;
	if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
		var l;
		if ((l = n) != null && l.errors) e = n.matches;
		else return null;
	}
	let o = e,
		i = (r = n) == null ? void 0 : r.errors;
	if (i != null) {
		let a = o.findIndex(
			(u) => u.route.id && (i == null ? void 0 : i[u.route.id])
		);
		a >= 0 || W(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
	}
	return o.reduceRight((a, u, s) => {
		let c = u.route.id ? (i == null ? void 0 : i[u.route.id]) : null,
			h = null;
		n && (h = u.route.errorElement || Ov);
		let m = t.concat(o.slice(0, s + 1)),
			g = () => {
				let S;
				return (
					c
						? (S = h)
						: u.route.Component
						? (S = _.createElement(u.route.Component, null))
						: u.route.element
						? (S = u.route.element)
						: (S = a),
					_.createElement(Dv, {
						match: u,
						routeContext: { outlet: a, matches: m, isDataRoute: n != null },
						children: S,
					})
				);
			};
		return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0)
			? _.createElement(Mv, {
					location: n.location,
					revalidation: n.revalidation,
					component: h,
					error: c,
					children: g(),
					routeContext: { outlet: null, matches: m, isDataRoute: !0 },
			  })
			: g();
	}, null);
}
var _a;
(function (e) {
	(e.UseBlocker = 'useBlocker'),
		(e.UseRevalidator = 'useRevalidator'),
		(e.UseNavigateStable = 'useNavigate');
})(_a || (_a = {}));
var cl;
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
})(cl || (cl = {}));
function Iv(e) {
	let t = _.useContext(Ko);
	return t || W(!1), t;
}
function zv(e) {
	let t = _.useContext(ju);
	return t || W(!1), t;
}
function Fv(e) {
	let t = _.useContext(an);
	return t || W(!1), t;
}
function Wd(e) {
	let t = Fv(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || W(!1), n.route.id;
}
function Uv() {
	var e;
	let t = _.useContext(Hd),
		n = zv(cl.UseRouteError),
		r = Wd(cl.UseRouteError);
	return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Bv() {
	let { router: e } = Iv(_a.UseNavigateStable),
		t = Wd(cl.UseNavigateStable),
		n = _.useRef(!1);
	return (
		$d(() => {
			n.current = !0;
		}),
		_.useCallback(
			function (l, o) {
				o === void 0 && (o = {}),
					n.current &&
						(typeof l == 'number'
							? e.navigate(l)
							: e.navigate(l, Ro({ fromRouteId: t }, o)));
			},
			[e, t]
		)
	);
}
const Hv = 'startTransition',
	cc = Tp[Hv];
function $v(e) {
	let { fallbackElement: t, router: n, future: r } = e,
		[l, o] = _.useState(n.state),
		{ v7_startTransition: i } = r || {},
		a = _.useCallback(
			(h) => {
				i && cc ? cc(() => o(h)) : o(h);
			},
			[o, i]
		);
	_.useLayoutEffect(() => n.subscribe(a), [n, a]);
	let u = _.useMemo(
			() => ({
				createHref: n.createHref,
				encodeLocation: n.encodeLocation,
				go: (h) => n.navigate(h),
				push: (h, m, g) =>
					n.navigate(h, {
						state: m,
						preventScrollReset: g == null ? void 0 : g.preventScrollReset,
					}),
				replace: (h, m, g) =>
					n.navigate(h, {
						replace: !0,
						state: m,
						preventScrollReset: g == null ? void 0 : g.preventScrollReset,
					}),
			}),
			[n]
		),
		s = n.basename || '/',
		c = _.useMemo(
			() => ({ router: n, navigator: u, static: !1, basename: s }),
			[n, u, s]
		);
	return _.createElement(
		_.Fragment,
		null,
		_.createElement(
			Ko.Provider,
			{ value: c },
			_.createElement(
				ju.Provider,
				{ value: l },
				_.createElement(
					Qv,
					{
						basename: s,
						location: l.location,
						navigationType: l.historyAction,
						navigator: u,
					},
					l.initialized
						? _.createElement(Wv, { routes: n.routes, state: l })
						: t
				)
			)
		),
		null
	);
}
function Wv(e) {
	let { routes: t, state: n } = e;
	return Nv(t, void 0, n);
}
function Vv(e) {
	return jv(e.context);
}
function Qv(e) {
	let {
		basename: t = '/',
		children: n = null,
		location: r,
		navigationType: l = pe.Pop,
		navigator: o,
		static: i = !1,
	} = e;
	gl() && W(!1);
	let a = t.replace(/^\/*/, '/'),
		u = _.useMemo(() => ({ basename: a, navigator: o, static: i }), [a, o, i]);
	typeof r == 'string' && (r = At(r));
	let {
			pathname: s = '/',
			search: c = '',
			hash: h = '',
			state: m = null,
			key: g = 'default',
		} = r,
		S = _.useMemo(() => {
			let w = pr(s, a);
			return w == null
				? null
				: {
						location: { pathname: w, search: c, hash: h, state: m, key: g },
						navigationType: l,
				  };
		}, [a, s, c, h, m, g, l]);
	return S == null
		? null
		: _.createElement(
				Pn.Provider,
				{ value: u },
				_.createElement(Go.Provider, { children: n, value: S })
		  );
}
var fc;
(function (e) {
	(e[(e.pending = 0)] = 'pending'),
		(e[(e.success = 1)] = 'success'),
		(e[(e.error = 2)] = 'error');
})(fc || (fc = {}));
new Promise(() => {});
function Yv(e) {
	let t = {
		hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
	};
	return (
		e.Component &&
			Object.assign(t, {
				element: _.createElement(e.Component),
				Component: void 0,
			}),
		e.ErrorBoundary &&
			Object.assign(t, {
				errorElement: _.createElement(e.ErrorBoundary),
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
 */ function sr() {
	return (
		(sr = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		sr.apply(this, arguments)
	);
}
function Vd(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		l,
		o;
	for (o = 0; o < r.length; o++)
		(l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
	return n;
}
function Kv(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Gv(e, t) {
	return e.button === 0 && (!t || t === '_self') && !Kv(e);
}
const Xv = [
		'onClick',
		'relative',
		'reloadDocument',
		'replace',
		'state',
		'target',
		'to',
		'preventScrollReset',
	],
	qv = [
		'aria-current',
		'caseSensitive',
		'className',
		'end',
		'style',
		'to',
		'children',
	];
function Jv(e, t) {
	return pv({
		basename: t == null ? void 0 : t.basename,
		future: sr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
		history: Im({ window: t == null ? void 0 : t.window }),
		hydrationData: (t == null ? void 0 : t.hydrationData) || Zv(),
		routes: e,
		mapRouteProperties: Yv,
	}).initialize();
}
function Zv() {
	var e;
	let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
	return t && t.errors && (t = sr({}, t, { errors: bv(t.errors) })), t;
}
function bv(e) {
	if (!e) return null;
	let t = Object.entries(e),
		n = {};
	for (let [r, l] of t)
		if (l && l.__type === 'RouteErrorResponse')
			n[r] = new Ru(l.status, l.statusText, l.data, l.internal === !0);
		else if (l && l.__type === 'Error') {
			let o = new Error(l.message);
			(o.stack = ''), (n[r] = o);
		} else n[r] = l;
	return n;
}
const ey =
		typeof window < 'u' &&
		typeof window.document < 'u' &&
		typeof window.document.createElement < 'u',
	ty = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	ny = _.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: l,
				reloadDocument: o,
				replace: i,
				state: a,
				target: u,
				to: s,
				preventScrollReset: c,
			} = t,
			h = Vd(t, Xv),
			{ basename: m } = _.useContext(Pn),
			g,
			S = !1;
		if (typeof s == 'string' && ty.test(s) && ((g = s), ey))
			try {
				let f = new URL(window.location.href),
					v = s.startsWith('//') ? new URL(f.protocol + s) : new URL(s),
					d = pr(v.pathname, m);
				v.origin === f.origin && d != null
					? (s = d + v.search + v.hash)
					: (S = !0);
			} catch {}
		let w = Tv(s, { relative: l }),
			P = ry(s, {
				replace: i,
				state: a,
				target: u,
				preventScrollReset: c,
				relative: l,
			});
		function p(f) {
			r && r(f), f.defaultPrevented || P(f);
		}
		return _.createElement(
			'a',
			sr({}, h, { href: g || w, onClick: S || o ? r : p, ref: n, target: u })
		);
	}),
	ze = _.forwardRef(function (t, n) {
		let {
				'aria-current': r = 'page',
				caseSensitive: l = !1,
				className: o = '',
				end: i = !1,
				style: a,
				to: u,
				children: s,
			} = t,
			c = Vd(t, qv),
			h = Nu(u, { relative: c.relative }),
			m = hr(),
			g = _.useContext(ju),
			{ navigator: S } = _.useContext(Pn),
			w = S.encodeLocation ? S.encodeLocation(h).pathname : h.pathname,
			P = m.pathname,
			p =
				g && g.navigation && g.navigation.location
					? g.navigation.location.pathname
					: null;
		l ||
			((P = P.toLowerCase()),
			(p = p ? p.toLowerCase() : null),
			(w = w.toLowerCase()));
		let f = P === w || (!i && P.startsWith(w) && P.charAt(w.length) === '/'),
			v =
				p != null &&
				(p === w || (!i && p.startsWith(w) && p.charAt(w.length) === '/')),
			d = f ? r : void 0,
			C;
		typeof o == 'function'
			? (C = o({ isActive: f, isPending: v }))
			: (C = [o, f ? 'active' : null, v ? 'pending' : null]
					.filter(Boolean)
					.join(' '));
		let j = typeof a == 'function' ? a({ isActive: f, isPending: v }) : a;
		return _.createElement(
			ny,
			sr({}, c, { 'aria-current': d, className: C, ref: n, style: j, to: u }),
			typeof s == 'function' ? s({ isActive: f, isPending: v }) : s
		);
	});
var dc;
(function (e) {
	(e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmit = 'useSubmit'),
		(e.UseSubmitFetcher = 'useSubmitFetcher'),
		(e.UseFetcher = 'useFetcher');
})(dc || (dc = {}));
var pc;
(function (e) {
	(e.UseFetchers = 'useFetchers'),
		(e.UseScrollRestoration = 'useScrollRestoration');
})(pc || (pc = {}));
function ry(e, t) {
	let {
			target: n,
			replace: r,
			state: l,
			preventScrollReset: o,
			relative: i,
		} = t === void 0 ? {} : t,
		a = Pv(),
		u = hr(),
		s = Nu(e, { relative: i });
	return _.useCallback(
		(c) => {
			if (Gv(c, n)) {
				c.preventDefault();
				let h = r !== void 0 ? r : kn(u) === kn(s);
				a(e, { replace: h, state: l, preventScrollReset: o, relative: i });
			}
		},
		[u, a, s, r, l, n, e, o, i]
	);
}
const ly = () => {
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
		_.useEffect(() => {
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
		y.jsxs('header', {
			children: [
				y.jsx('div', {
					id: 'logo',
					children: y.jsx('img', { src: '/images/logo.png', alt: '' }),
				}),
				y.jsxs('nav', {
					children: [
						y.jsxs('div', {
							className: 'visible-mobile',
							id: 'nav-icons',
							'aria-hidden': 'true',
							'aria-label': 'Menu icons',
							onClick: e,
							children: [
								y.jsx('span', {
									className: 'menu material-symbols-outlined',
									children: 'menu',
								}),
								y.jsx('span', {
									className: 'close material-symbols-outlined hidden',
									children: 'close',
								}),
							],
						}),
						y.jsx('div', {
							id: 'nav-list',
							children: y.jsxs('ul', {
								children: [
									y.jsx('li', {
										children: y.jsx(ze, { to: '/', children: 'Home' }),
									}),
									y.jsx('li', {
										children: y.jsx(ze, { to: '/about', children: 'About' }),
									}),
									y.jsx('li', {
										children: y.jsx(ze, {
											to: '/contact',
											children: 'Contact',
										}),
									}),
									y.jsx('li', {
										children: y.jsx(ze, {
											to: '/products',
											children: 'Products',
										}),
									}),
									y.jsx('li', {
										children: y.jsx(ze, {
											to: '/register',
											children: 'Register',
										}),
									}),
									y.jsx('li', {
										children: y.jsx(ze, { to: '/login', children: 'Login' }),
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
var Qd = { exports: {} },
	oy = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
	iy = oy,
	ay = iy;
function Yd() {}
function Kd() {}
Kd.resetWarningCache = Yd;
var uy = function () {
	function e(r, l, o, i, a, u) {
		if (u !== ay) {
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
		checkPropTypes: Kd,
		resetWarningCache: Yd,
	};
	return (n.PropTypes = n), n;
};
Qd.exports = uy();
var sy = Qd.exports;
const ne = dl(sy);
function cy(e) {
	return e && typeof e == 'object' && 'default' in e ? e.default : e;
}
var Gd = _,
	fy = cy(Gd);
function hc(e, t, n) {
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
function dy(e, t) {
	(e.prototype = Object.create(t.prototype)),
		(e.prototype.constructor = e),
		(e.__proto__ = t);
}
var py = !!(
	typeof window < 'u' &&
	window.document &&
	window.document.createElement
);
function hy(e, t, n) {
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
	return function (o) {
		if (typeof o != 'function')
			throw new Error('Expected WrappedComponent to be a React component.');
		var i = [],
			a;
		function u() {
			(a = e(
				i.map(function (c) {
					return c.props;
				})
			)),
				s.canUseDOM ? t(a) : n && (a = n(a));
		}
		var s = (function (c) {
			dy(h, c);
			function h() {
				return c.apply(this, arguments) || this;
			}
			(h.peek = function () {
				return a;
			}),
				(h.rewind = function () {
					if (h.canUseDOM)
						throw new Error(
							'You may only call rewind() on the server. Call peek() to read the current state.'
						);
					var S = a;
					return (a = void 0), (i = []), S;
				});
			var m = h.prototype;
			return (
				(m.UNSAFE_componentWillMount = function () {
					i.push(this), u();
				}),
				(m.componentDidUpdate = function () {
					u();
				}),
				(m.componentWillUnmount = function () {
					var S = i.indexOf(this);
					i.splice(S, 1), u();
				}),
				(m.render = function () {
					return fy.createElement(o, this.props);
				}),
				h
			);
		})(Gd.PureComponent);
		return (
			hc(s, 'displayName', 'SideEffect(' + r(o) + ')'),
			hc(s, 'canUseDOM', py),
			s
		);
	};
}
var my = hy;
const vy = dl(my);
var yy = typeof Element < 'u',
	gy = typeof Map == 'function',
	wy = typeof Set == 'function',
	Sy = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
function to(e, t) {
	if (e === t) return !0;
	if (e && t && typeof e == 'object' && typeof t == 'object') {
		if (e.constructor !== t.constructor) return !1;
		var n, r, l;
		if (Array.isArray(e)) {
			if (((n = e.length), n != t.length)) return !1;
			for (r = n; r-- !== 0; ) if (!to(e[r], t[r])) return !1;
			return !0;
		}
		var o;
		if (gy && e instanceof Map && t instanceof Map) {
			if (e.size !== t.size) return !1;
			for (o = e.entries(); !(r = o.next()).done; )
				if (!t.has(r.value[0])) return !1;
			for (o = e.entries(); !(r = o.next()).done; )
				if (!to(r.value[1], t.get(r.value[0]))) return !1;
			return !0;
		}
		if (wy && e instanceof Set && t instanceof Set) {
			if (e.size !== t.size) return !1;
			for (o = e.entries(); !(r = o.next()).done; )
				if (!t.has(r.value[0])) return !1;
			return !0;
		}
		if (Sy && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
		if (yy && e instanceof Element) return !1;
		for (r = n; r-- !== 0; )
			if (
				!(
					(l[r] === '_owner' || l[r] === '__v' || l[r] === '__o') &&
					e.$$typeof
				) &&
				!to(e[l[r]], t[l[r]])
			)
				return !1;
		return !0;
	}
	return e !== e && t !== t;
}
var Ey = function (t, n) {
	try {
		return to(t, n);
	} catch (r) {
		if ((r.message || '').match(/stack|recursion/i))
			return console.warn('react-fast-compare cannot handle circular refs'), !1;
		throw r;
	}
};
const xy = dl(Ey);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var mc = Object.getOwnPropertySymbols,
	ky = Object.prototype.hasOwnProperty,
	Cy = Object.prototype.propertyIsEnumerable;
function Ty(e) {
	if (e == null)
		throw new TypeError(
			'Object.assign cannot be called with null or undefined'
		);
	return Object(e);
}
function Py() {
	try {
		if (!Object.assign) return !1;
		var e = new String('abc');
		if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1;
		for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
		var r = Object.getOwnPropertyNames(t).map(function (o) {
			return t[o];
		});
		if (r.join('') !== '0123456789') return !1;
		var l = {};
		return (
			'abcdefghijklmnopqrst'.split('').forEach(function (o) {
				l[o] = o;
			}),
			Object.keys(Object.assign({}, l)).join('') === 'abcdefghijklmnopqrst'
		);
	} catch {
		return !1;
	}
}
var Ry = Py()
	? Object.assign
	: function (e, t) {
			for (var n, r = Ty(e), l, o = 1; o < arguments.length; o++) {
				n = Object(arguments[o]);
				for (var i in n) ky.call(n, i) && (r[i] = n[i]);
				if (mc) {
					l = mc(n);
					for (var a = 0; a < l.length; a++)
						Cy.call(n, l[a]) && (r[l[a]] = n[l[a]]);
				}
			}
			return r;
	  };
const _y = dl(Ry);
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
	_o = {
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
	jy = Object.keys(_o).reduce(function (e, t) {
		return (e[_o[t]] = t), e;
	}, {}),
	Ny = [H.NOSCRIPT, H.SCRIPT, H.STYLE],
	st = 'data-react-helmet',
	Ly =
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
	Oy = function (e, t) {
		if (!(e instanceof t))
			throw new TypeError('Cannot call a class as a function');
	},
	My = (function () {
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
	Ae =
		Object.assign ||
		function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n)
					Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
			}
			return e;
		},
	Dy = function (e, t) {
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
	vc = function (e, t) {
		var n = {};
		for (var r in e)
			t.indexOf(r) >= 0 ||
				(Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
		return n;
	},
	Ay = function (e, t) {
		if (!e)
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		return t && (typeof t == 'object' || typeof t == 'function') ? t : e;
	},
	ja = function (t) {
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
	Iy = function (t) {
		var n = er(t, H.TITLE),
			r = er(t, fl.TITLE_TEMPLATE);
		if (r && n)
			return r.replace(/%s/g, function () {
				return Array.isArray(n) ? n.join('') : n;
			});
		var l = er(t, fl.DEFAULT_TITLE);
		return n || l || void 0;
	},
	zy = function (t) {
		return er(t, fl.ON_CHANGE_CLIENT_STATE) || function () {};
	},
	Ni = function (t, n) {
		return n
			.filter(function (r) {
				return typeof r[t] < 'u';
			})
			.map(function (r) {
				return r[t];
			})
			.reduce(function (r, l) {
				return Ae({}, r, l);
			}, {});
	},
	Fy = function (t, n) {
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
					for (var o = Object.keys(l), i = 0; i < o.length; i++) {
						var a = o[i],
							u = a.toLowerCase();
						if (t.indexOf(u) !== -1 && l[u]) return r.concat(l);
					}
				return r;
			}, []);
	},
	Nr = function (t, n, r) {
		var l = {};
		return r
			.filter(function (o) {
				return Array.isArray(o[t])
					? !0
					: (typeof o[t] < 'u' &&
							$y(
								'Helmet: ' +
									t +
									' should be of type "Array". Instead found type "' +
									Ly(o[t]) +
									'"'
							),
					  !1);
			})
			.map(function (o) {
				return o[t];
			})
			.reverse()
			.reduce(function (o, i) {
				var a = {};
				i.filter(function (m) {
					for (var g = void 0, S = Object.keys(m), w = 0; w < S.length; w++) {
						var P = S[w],
							p = P.toLowerCase();
						n.indexOf(p) !== -1 &&
							!(g === re.REL && m[g].toLowerCase() === 'canonical') &&
							!(p === re.REL && m[p].toLowerCase() === 'stylesheet') &&
							(g = p),
							n.indexOf(P) !== -1 &&
								(P === re.INNER_HTML ||
									P === re.CSS_TEXT ||
									P === re.ITEM_PROP) &&
								(g = P);
					}
					if (!g || !m[g]) return !1;
					var f = m[g].toLowerCase();
					return (
						l[g] || (l[g] = {}),
						a[g] || (a[g] = {}),
						l[g][f] ? !1 : ((a[g][f] = !0), !0)
					);
				})
					.reverse()
					.forEach(function (m) {
						return o.push(m);
					});
				for (var u = Object.keys(a), s = 0; s < u.length; s++) {
					var c = u[s],
						h = _y({}, l[c], a[c]);
					l[c] = h;
				}
				return o;
			}, [])
			.reverse();
	},
	er = function (t, n) {
		for (var r = t.length - 1; r >= 0; r--) {
			var l = t[r];
			if (l.hasOwnProperty(n)) return l[n];
		}
		return null;
	},
	Uy = function (t) {
		return {
			baseTag: Fy([re.HREF, re.TARGET], t),
			bodyAttributes: Ni(yn.BODY, t),
			defer: er(t, fl.DEFER),
			encode: er(t, fl.ENCODE_SPECIAL_CHARACTERS),
			htmlAttributes: Ni(yn.HTML, t),
			linkTags: Nr(H.LINK, [re.REL, re.HREF], t),
			metaTags: Nr(
				H.META,
				[re.NAME, re.CHARSET, re.HTTPEQUIV, re.PROPERTY, re.ITEM_PROP],
				t
			),
			noscriptTags: Nr(H.NOSCRIPT, [re.INNER_HTML], t),
			onChangeClientState: zy(t),
			scriptTags: Nr(H.SCRIPT, [re.SRC, re.INNER_HTML], t),
			styleTags: Nr(H.STYLE, [re.CSS_TEXT], t),
			title: Iy(t),
			titleAttributes: Ni(yn.TITLE, t),
		};
	},
	Na = (function () {
		var e = Date.now();
		return function (t) {
			var n = Date.now();
			n - e > 16
				? ((e = n), t(n))
				: setTimeout(function () {
						Na(t);
				  }, 0);
		};
	})(),
	yc = function (t) {
		return clearTimeout(t);
	},
	By =
		typeof window < 'u'
			? (window.requestAnimationFrame &&
					window.requestAnimationFrame.bind(window)) ||
			  window.webkitRequestAnimationFrame ||
			  window.mozRequestAnimationFrame ||
			  Na
			: global.requestAnimationFrame || Na,
	Hy =
		typeof window < 'u'
			? window.cancelAnimationFrame ||
			  window.webkitCancelAnimationFrame ||
			  window.mozCancelAnimationFrame ||
			  yc
			: global.cancelAnimationFrame || yc,
	$y = function (t) {
		return console && typeof console.warn == 'function' && console.warn(t);
	},
	Lr = null,
	Wy = function (t) {
		Lr && Hy(Lr),
			t.defer
				? (Lr = By(function () {
						gc(t, function () {
							Lr = null;
						});
				  }))
				: (gc(t), (Lr = null));
	},
	gc = function (t, n) {
		var r = t.baseTag,
			l = t.bodyAttributes,
			o = t.htmlAttributes,
			i = t.linkTags,
			a = t.metaTags,
			u = t.noscriptTags,
			s = t.onChangeClientState,
			c = t.scriptTags,
			h = t.styleTags,
			m = t.title,
			g = t.titleAttributes;
		La(H.BODY, l), La(H.HTML, o), Vy(m, g);
		var S = {
				baseTag: On(H.BASE, r),
				linkTags: On(H.LINK, i),
				metaTags: On(H.META, a),
				noscriptTags: On(H.NOSCRIPT, u),
				scriptTags: On(H.SCRIPT, c),
				styleTags: On(H.STYLE, h),
			},
			w = {},
			P = {};
		Object.keys(S).forEach(function (p) {
			var f = S[p],
				v = f.newTags,
				d = f.oldTags;
			v.length && (w[p] = v), d.length && (P[p] = S[p].oldTags);
		}),
			n && n(),
			s(t, w, P);
	},
	Xd = function (t) {
		return Array.isArray(t) ? t.join('') : t;
	},
	Vy = function (t, n) {
		typeof t < 'u' && document.title !== t && (document.title = Xd(t)),
			La(H.TITLE, n);
	},
	La = function (t, n) {
		var r = document.getElementsByTagName(t)[0];
		if (r) {
			for (
				var l = r.getAttribute(st),
					o = l ? l.split(',') : [],
					i = [].concat(o),
					a = Object.keys(n),
					u = 0;
				u < a.length;
				u++
			) {
				var s = a[u],
					c = n[s] || '';
				r.getAttribute(s) !== c && r.setAttribute(s, c),
					o.indexOf(s) === -1 && o.push(s);
				var h = i.indexOf(s);
				h !== -1 && i.splice(h, 1);
			}
			for (var m = i.length - 1; m >= 0; m--) r.removeAttribute(i[m]);
			o.length === i.length
				? r.removeAttribute(st)
				: r.getAttribute(st) !== a.join(',') && r.setAttribute(st, a.join(','));
		}
	},
	On = function (t, n) {
		var r = document.head || document.querySelector(H.HEAD),
			l = r.querySelectorAll(t + '[' + st + ']'),
			o = Array.prototype.slice.call(l),
			i = [],
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
								var h = typeof u[c] > 'u' ? '' : u[c];
								s.setAttribute(c, h);
							}
					s.setAttribute(st, 'true'),
						o.some(function (m, g) {
							return (a = g), s.isEqualNode(m);
						})
							? o.splice(a, 1)
							: i.push(s);
				}),
			o.forEach(function (u) {
				return u.parentNode.removeChild(u);
			}),
			i.forEach(function (u) {
				return r.appendChild(u);
			}),
			{ oldTags: o, newTags: i }
		);
	},
	qd = function (t) {
		return Object.keys(t).reduce(function (n, r) {
			var l = typeof t[r] < 'u' ? r + '="' + t[r] + '"' : '' + r;
			return n ? n + ' ' + l : l;
		}, '');
	},
	Qy = function (t, n, r, l) {
		var o = qd(r),
			i = Xd(n);
		return o
			? '<' + t + ' ' + st + '="true" ' + o + '>' + ja(i, l) + '</' + t + '>'
			: '<' + t + ' ' + st + '="true">' + ja(i, l) + '</' + t + '>';
	},
	Yy = function (t, n, r) {
		return n.reduce(function (l, o) {
			var i = Object.keys(o)
					.filter(function (s) {
						return !(s === re.INNER_HTML || s === re.CSS_TEXT);
					})
					.reduce(function (s, c) {
						var h = typeof o[c] > 'u' ? c : c + '="' + ja(o[c], r) + '"';
						return s ? s + ' ' + h : h;
					}, ''),
				a = o.innerHTML || o.cssText || '',
				u = Ny.indexOf(t) === -1;
			return (
				l +
				'<' +
				t +
				' ' +
				st +
				'="true" ' +
				i +
				(u ? '/>' : '>' + a + '</' + t + '>')
			);
		}, '');
	},
	Jd = function (t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		return Object.keys(t).reduce(function (r, l) {
			return (r[_o[l] || l] = t[l]), r;
		}, n);
	},
	Ky = function (t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		return Object.keys(t).reduce(function (r, l) {
			return (r[jy[l] || l] = t[l]), r;
		}, n);
	},
	Gy = function (t, n, r) {
		var l,
			o = ((l = { key: n }), (l[st] = !0), l),
			i = Jd(r, o);
		return [hn.createElement(H.TITLE, i, n)];
	},
	Xy = function (t, n) {
		return n.map(function (r, l) {
			var o,
				i = ((o = { key: l }), (o[st] = !0), o);
			return (
				Object.keys(r).forEach(function (a) {
					var u = _o[a] || a;
					if (u === re.INNER_HTML || u === re.CSS_TEXT) {
						var s = r.innerHTML || r.cssText;
						i.dangerouslySetInnerHTML = { __html: s };
					} else i[u] = r[a];
				}),
				hn.createElement(t, i)
			);
		});
	},
	kt = function (t, n, r) {
		switch (t) {
			case H.TITLE:
				return {
					toComponent: function () {
						return Gy(t, n.title, n.titleAttributes);
					},
					toString: function () {
						return Qy(t, n.title, n.titleAttributes, r);
					},
				};
			case yn.BODY:
			case yn.HTML:
				return {
					toComponent: function () {
						return Jd(n);
					},
					toString: function () {
						return qd(n);
					},
				};
			default:
				return {
					toComponent: function () {
						return Xy(t, n);
					},
					toString: function () {
						return Yy(t, n, r);
					},
				};
		}
	},
	Zd = function (t) {
		var n = t.baseTag,
			r = t.bodyAttributes,
			l = t.encode,
			o = t.htmlAttributes,
			i = t.linkTags,
			a = t.metaTags,
			u = t.noscriptTags,
			s = t.scriptTags,
			c = t.styleTags,
			h = t.title,
			m = h === void 0 ? '' : h,
			g = t.titleAttributes;
		return {
			base: kt(H.BASE, n, l),
			bodyAttributes: kt(yn.BODY, r, l),
			htmlAttributes: kt(yn.HTML, o, l),
			link: kt(H.LINK, i, l),
			meta: kt(H.META, a, l),
			noscript: kt(H.NOSCRIPT, u, l),
			script: kt(H.SCRIPT, s, l),
			style: kt(H.STYLE, c, l),
			title: kt(H.TITLE, { title: m, titleAttributes: g }, l),
		};
	},
	qy = function (t) {
		var n, r;
		return (
			(r = n =
				(function (l) {
					Dy(o, l);
					function o() {
						return Oy(this, o), Ay(this, l.apply(this, arguments));
					}
					return (
						(o.prototype.shouldComponentUpdate = function (a) {
							return !xy(this.props, a);
						}),
						(o.prototype.mapNestedChildrenToProps = function (a, u) {
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
						(o.prototype.flattenArrayTypeChildren = function (a) {
							var u,
								s = a.child,
								c = a.arrayTypeChildren,
								h = a.newChildProps,
								m = a.nestedChildren;
							return Ae(
								{},
								c,
								((u = {}),
								(u[s.type] = [].concat(c[s.type] || [], [
									Ae({}, h, this.mapNestedChildrenToProps(s, m)),
								])),
								u)
							);
						}),
						(o.prototype.mapObjectTypeChildren = function (a) {
							var u,
								s,
								c = a.child,
								h = a.newProps,
								m = a.newChildProps,
								g = a.nestedChildren;
							switch (c.type) {
								case H.TITLE:
									return Ae(
										{},
										h,
										((u = {}),
										(u[c.type] = g),
										(u.titleAttributes = Ae({}, m)),
										u)
									);
								case H.BODY:
									return Ae({}, h, { bodyAttributes: Ae({}, m) });
								case H.HTML:
									return Ae({}, h, { htmlAttributes: Ae({}, m) });
							}
							return Ae({}, h, ((s = {}), (s[c.type] = Ae({}, m)), s));
						}),
						(o.prototype.mapArrayTypeChildrenToProps = function (a, u) {
							var s = Ae({}, u);
							return (
								Object.keys(a).forEach(function (c) {
									var h;
									s = Ae({}, s, ((h = {}), (h[c] = a[c]), h));
								}),
								s
							);
						}),
						(o.prototype.warnOnInvalidChildren = function (a, u) {
							return !0;
						}),
						(o.prototype.mapChildrenToProps = function (a, u) {
							var s = this,
								c = {};
							return (
								hn.Children.forEach(a, function (h) {
									if (!(!h || !h.props)) {
										var m = h.props,
											g = m.children,
											S = vc(m, ['children']),
											w = Ky(S);
										switch ((s.warnOnInvalidChildren(h, g), h.type)) {
											case H.LINK:
											case H.META:
											case H.NOSCRIPT:
											case H.SCRIPT:
											case H.STYLE:
												c = s.flattenArrayTypeChildren({
													child: h,
													arrayTypeChildren: c,
													newChildProps: w,
													nestedChildren: g,
												});
												break;
											default:
												u = s.mapObjectTypeChildren({
													child: h,
													newProps: u,
													newChildProps: w,
													nestedChildren: g,
												});
												break;
										}
									}
								}),
								(u = this.mapArrayTypeChildrenToProps(c, u)),
								u
							);
						}),
						(o.prototype.render = function () {
							var a = this.props,
								u = a.children,
								s = vc(a, ['children']),
								c = Ae({}, s);
							return (
								u && (c = this.mapChildrenToProps(u, c)), hn.createElement(t, c)
							);
						}),
						My(o, null, [
							{
								key: 'canUseDOM',
								set: function (a) {
									t.canUseDOM = a;
								},
							},
						]),
						o
					);
				})(hn.Component)),
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
						(l = Zd({
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
	Jy = function () {
		return null;
	},
	Zy = vy(Uy, Wy, Zd)(Jy),
	jo = qy(Zy);
jo.renderStatic = jo.rewind;
const by = () => (
		_.useEffect(() => {
			let e, t, n, r;
			(e = document.querySelector('.carousel')),
				(t = document.querySelectorAll('.carousel-item')),
				(n = 0),
				(r = t.length);
			let l, o;
			(l = document.querySelector('.next')),
				(o = document.querySelector('.prev'));
			const i = (a) => {
				(n += a),
					n < 0 ? (n = r - 1) : n >= r && (n = 0),
					(e.style.transform = `translateX(-${n * t[0].clientWidth}px)`);
			};
			l.addEventListener('click', () => i(1)),
				o.addEventListener('click', () => i(-1));
		}, []),
		_.useEffect(() => {
			const e = () => {
				document.querySelectorAll('.animated').forEach((n) => {
					let r = window.scrollY,
						l = window.innerHeight,
						o = n.offsetTop;
					o < l || r + l > o
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
		y.jsxs(y.Fragment, {
			children: [
				y.jsxs(jo, {
					children: [
						y.jsx('meta', {
							property: 'og:title',
							content: 'MBC - Mma Beauty Care',
						}),
						y.jsx('meta', {
							property: 'og:description',
							content: 'Discover the Power of Natural Skincare',
						}),
						y.jsx('meta', {
							name: 'description',
							content:
								'At MBC, we are your premier destination for high-quality skincare products. We partner with leading skincare brands to bring you a curated selection of the finest products that will nourish, rejuvenate, and protect your skin.',
						}),
						y.jsx('meta', {
							name: 'viewport',
							content: 'width=device-width, initial-scale=1.0',
						}),
						y.jsx('title', { children: 'MBC | Mma Beauty Care' }),
					],
				}),
				y.jsxs('main', {
					id: 'home',
					children: [
						y.jsxs('section', {
							id: 'intro',
							children: [
								y.jsx('h1', {
									className: 'animated slide-in',
									children: 'Mma Beauty Care',
								}),
								y.jsx('p', {
									className: 'animated slide-in',
									children: 'Discover the Best Skincare Products',
								}),
								y.jsx(ze, {
									to: '/products',
									className: 'btn animated slide-in',
									children: 'View available products',
								}),
							],
						}),
						y.jsxs('section', {
							className: 'animated slide-in',
							id: 'featured',
							children: [
								y.jsx('img', {
									src: '/images/img_collage.png',
									alt: 'Skincare products collage',
								}),
								y.jsx('p', {
									children:
										'Explore my handpicked collection of skincare products from renowned brands. From gentle cleansers and rejuvenating serums to nourishing moisturizers and age-defying treatments, we offer a diverse range of products to cater to all your skincare needs.',
								}),
							],
						}),
						y.jsxs('section', {
							id: 'reasons',
							children: [
								y.jsx('h2', {
									className: 'fancy-header',
									children: 'Why Choose MBC',
								}),
								y.jsxs('ul', {
									children: [
										y.jsxs('li', {
											className: 'animated slide-in',
											children: [
												y.jsx('img', {
													src: '/images/trusted_brands.jpg',
													alt: '',
												}),
												y.jsxs('article', {
													children: [
														y.jsx('h3', { children: 'Trusted Brands' }),
														y.jsx('p', {
															children:
																'I collaborate with trusted skincare brands known for their commitment to quality, innovation, and exceptional results.',
														}),
													],
												}),
											],
										}),
										y.jsxs('li', {
											className: 'animated slide-in',
											children: [
												y.jsx('img', {
													src: '/images/expert_curation.webp',
													alt: '',
												}),
												y.jsxs('article', {
													children: [
														y.jsx('h3', { children: 'Expert Curation' }),
														y.jsx('p', {
															children:
																'My team of skincare enthusiasts carefully curates each product in my collection, ensuring that you have access to the best skincare options available.',
														}),
													],
												}),
											],
										}),
										y.jsxs('li', {
											className: 'animated slide-in',
											children: [
												y.jsx('img', {
													src: '/images/comprehensive_range.jpg',
													alt: '',
												}),
												y.jsxs('article', {
													children: [
														y.jsx('h3', { children: 'Comprehensive Range' }),
														y.jsx('p', {
															children:
																'I offer a wide array of products targeting various skin concerns, so you can find the perfect solution for your unique skin type and goals.',
														}),
													],
												}),
											],
										}),
										y.jsxs('li', {
											className: 'animated slide-in',
											children: [
												y.jsx('img', {
													src: '/images/customer_service.webp',
													alt: '',
												}),
												y.jsxs('article', {
													children: [
														y.jsx('h3', {
															children: 'Exceptional Customer Service',
														}),
														y.jsx('p', {
															children:
																'I prioritize your satisfaction and are dedicated to providing outstanding customer service. my knowledgeable team is here to assist you and guide you towards finding the right products for your skincare routine.',
														}),
													],
												}),
											],
										}),
									],
								}),
							],
						}),
						y.jsxs('section', {
							id: 'testimonials',
							children: [
								y.jsx('h2', { children: 'What Our Customers Say About Us' }),
								y.jsxs('div', {
									className: 'carousel-container',
									children: [
										y.jsxs('div', {
											className: 'carousel',
											children: [
												y.jsxs('article', {
													className: 'carousel-item',
													children: [
														y.jsxs('div', {
															children: [
																y.jsx('img', {
																	src: '/images/IMG-20230714-WA0004.jpg',
																	alt: '',
																}),
																y.jsx('p', { children: 'Claire' }),
															],
														}),
														y.jsx('p', {
															children:
																'My skin was bumpy as Nigerian roads until I met MBC. She helped me figure my skin concerns. She recommended skincare products to me. I used them consistently and now my skin is flawless. I can now confidently flex my glow without being criticized because of outbreaks. Thank you so much MBC store. You guys are the best',
														}),
														y.jsxs('address', {
															children: [
																y.jsx('a', {
																	href: 'tel:+2348108742236',
																	children: y.jsx('span', {
																		className: 'material-symbols-outlined',
																		children: 'Phone',
																	}),
																}),
																y.jsx('a', {
																	href: 'https://wa.me/2348108742236',
																	children: y.jsx('span', {
																		className: 'material-symbols-outlined',
																		children: 'chat',
																	}),
																}),
															],
														}),
													],
												}),
												y.jsxs('article', {
													className: 'carousel-item',
													children: [
														y.jsxs('div', {
															children: [
																y.jsx('img', {
																	src: '/images/IMG-20230715-WA0000.jpg',
																	alt: '',
																}),
																y.jsx('p', { children: 'Favour' }),
															],
														}),
														y.jsx('p', {
															children:
																"My skincare journey has been quite difficult until I met Mma Beauty Care (MBC). I've tried a lot of products and they weren't really working. I met MBC and I got a free consultation and their products are very effective and affordable. I can assure you that they're really the best.",
														}),
														y.jsxs('address', {
															children: [
																y.jsx('a', {
																	href: 'tel:+2349049861570',
																	children: y.jsx('span', {
																		className: 'material-symbols-outlined',
																		children: 'Phone',
																	}),
																}),
																y.jsx('a', {
																	href: 'https://wa.me/2349049861570',
																	children: y.jsx('span', {
																		className: 'material-symbols-outlined',
																		children: 'chat',
																	}),
																}),
															],
														}),
													],
												}),
												y.jsxs('article', {
													className: 'carousel-item',
													children: [
														y.jsxs('div', {
															children: [
																y.jsx('img', {
																	src: '/images/IMG-20230715-WA0006.jpg',
																	alt: '',
																}),
																y.jsx('p', {}),
															],
														}),
														y.jsx('p', {
															children:
																'I didn’t exactly have terrible skin conditions, but I had outbreaks now and then and I was always getting rashes and hyper-pigmentation when I used many different products in the name of skincare 😭. Then MBC came around and she recommended some products for me and I bought them all cos I was desperate😭. Within a month of steady routine, this is my skin in its natural glow, without any filters at all. Just sunlight and face. I don’t even have any products on my face as at this time.',
														}),
														y.jsxs('address', {
															children: [
																y.jsx('a', {
																	href: 'tel:+2349049026878',
																	children: y.jsx('span', {
																		className: 'material-symbols-outlined',
																		children: 'Phone',
																	}),
																}),
																y.jsx('a', {
																	href: 'https://wa.me/2349049026878',
																	children: y.jsx('span', {
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
										y.jsx('span', {
											className: 'next material-symbols-outlined',
											children: 'arrow_right',
										}),
										y.jsx('span', {
											className: 'prev material-symbols-outlined',
											children: 'arrow_left',
										}),
									],
								}),
							],
						}),
						y.jsx('section', {
							id: 'contact',
							children: y.jsxs('form', {
								className: 'animated slide-in',
								children: [
									y.jsx('h2', { children: "I'd love to hear from you" }),
									y.jsx('p', { children: 'Send me a message' }),
									y.jsxs('div', {
										className: 'field-group',
										children: [
											y.jsx('input', {
												required: !0,
												type: 'text',
												id: 'name',
												name: 'name',
											}),
											y.jsx('label', {
												htmlFor: 'name',
												children: 'Full name',
											}),
										],
									}),
									y.jsxs('div', {
										className: 'field-group',
										children: [
											y.jsx('input', {
												required: !0,
												type: 'tel',
												name: 'phone',
												id: 'phone',
											}),
											y.jsx('label', {
												htmlFor: 'phone',
												children: 'Phone no.',
											}),
										],
									}),
									y.jsx('textarea', {
										required: !0,
										placeholder: 'Write your message here...',
										name: 'message',
										id: 'message',
										cols: '30',
										rows: '10',
									}),
									y.jsx('button', {
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
	eg = () => (
		_.useEffect(() => {
			const e = () => {
				document.querySelectorAll('.animated').forEach((n) => {
					let r = window.scrollY,
						l = window.innerHeight,
						o = n.offsetTop;
					o < l || r + l > o
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
		y.jsxs(y.Fragment, {
			children: [
				y.jsxs(jo, {
					children: [
						y.jsx('meta', {
							property: 'og:title',
							content: 'About MBC | Mma Beauty Care',
						}),
						y.jsx('meta', {
							property: 'og:description',
							content: 'Discover the Power of Natural Skincare',
						}),
						y.jsx('meta', {
							name: 'description',
							content:
								'At MBC, we are your premier destination for high-quality skincare products. We partner with leading skincare brands to bring you a curated selection of the finest products that will nourish, rejuvenate, and protect your skin.',
						}),
						y.jsx('meta', {
							name: 'viewport',
							content: 'width=device-width, initial-scale=1.0',
						}),
						y.jsx('title', { children: 'About MBC | Mma Beauty Care' }),
					],
				}),
				y.jsxs('main', {
					id: 'about',
					children: [
						y.jsxs('section', {
							id: 'intro',
							children: [
								y.jsx('img', {
									src: '/images/mbc.png',
									alt: '',
									className: 'animated slide-in-right',
								}),
								y.jsxs('article', {
									children: [
										y.jsx('h1', {
											className: 'animated slide-in-right',
											children: 'Welcome',
										}),
										y.jsx('p', {
											className: 'animated slide-in-right',
											children:
												'Welcome to MBC your trusted source for exceptional skincare products. As a vendor, we collaborate with top skincare brands to bring you a thoughtfully curated selection of products that have been meticulously chosen for their quality and efficacy.',
										}),
									],
								}),
							],
						}),
						y.jsxs('section', {
							id: 'mission',
							children: [
								y.jsx('img', {
									src: '/images/our_mission.jpg',
									alt: '',
									className: 'animated slide-in-right',
								}),
								y.jsxs('article', {
									children: [
										y.jsx('h2', {
											className: 'animated slide-in-right',
											children: 'Our Mission',
										}),
										y.jsx('p', {
											className: 'animated slide-in-right',
											children:
												'Our mission at MBC is to provide you with access to a comprehensive range of skincare products from trusted brands. We aim to simplify your skincare shopping experience by offering a curated collection that meets the diverse needs and preferences of our valued customers.',
										}),
									],
								}),
							],
						}),
						y.jsxs('section', {
							id: 'approach',
							children: [
								y.jsxs('article', {
									children: [
										y.jsx('h2', {
											className: 'animated slide-in-right',
											children: 'Our Approach',
										}),
										y.jsx('p', {
											className: 'animated slide-in-right',
											children:
												'We believe in the power of collaboration. By partnering with leading skincare brands, we can offer you a wide variety of products that have undergone rigorous testing and are backed by scientific research. Our commitment to excellence ensures that every product we purchase meets the highest standards of quality and effectiveness.',
										}),
									],
								}),
								y.jsx('img', {
									src: '/images/collaboration.jpg',
									alt: '',
									className: 'animated slide-in-right',
								}),
							],
						}),
						y.jsxs('section', {
							id: 'customer-satisfaction',
							children: [
								y.jsx('img', {
									src: '/images/customer_support.jpg',
									alt: '',
									className: 'animated slide-in-right',
								}),
								y.jsxs('article', {
									children: [
										y.jsx('h2', {
											className: 'animated slide-in-right',
											children: 'Customer Satisfaction',
										}),
										y.jsx('p', {
											className: 'animated slide-in-right',
											children:
												'Your satisfaction is our top priority. We understand that skincare is personal,and we strive to provide you with the best possible experience. Our dedicated customer service team is here to assist you, answer your questions, and guide you towards finding the perfect skincare products that will help you achieve your desired results.',
										}),
									],
								}),
							],
						}),
						y.jsx('section', {
							id: 'invitation',
							children: y.jsxs('article', {
								children: [
									y.jsx('h2', {
										className: 'fancy-header-2',
										children: 'Join the MBC Community',
									}),
									y.jsx('p', {
										children:
											'Join our community of skincare enthusiasts! Connect with us on social media, share your skincare journey, and stay updated with the latest trends and insights. We love hearing from our customers and are here to support you on your quest for healthy and radiant skin.',
									}),
									y.jsx(ze, {
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
	tg = () => {
		let e = hr();
		_.useEffect(() => {
			window.scrollTo(0, 0);
		}, [e]);
	},
	ng = () =>
		y.jsxs('footer', {
			children: [
				y.jsxs('section', {
					id: 'logo',
					children: [
						y.jsx('img', { src: '/images/logo.png', alt: '' }),
						y.jsxs('span', {
							children: [
								'MBC',
								y.jsx('sup', { children: '©' }),
								' ',
								new Date().getFullYear(),
							],
						}),
					],
				}),
				y.jsx('nav', {
					children: y.jsxs('ul', {
						children: [
							y.jsx('li', {
								children: y.jsx(ze, { to: '/', children: 'Home' }),
							}),
							y.jsx('li', {
								children: y.jsx(ze, { to: '/about', children: 'About' }),
							}),
							y.jsx('li', {
								children: y.jsx(ze, { to: '/contact', children: 'Contact' }),
							}),
							y.jsx('li', {
								children: y.jsx(ze, { to: '/products', children: 'Products' }),
							}),
							y.jsx('li', {
								children: y.jsx(ze, { to: '/register', children: 'Register' }),
							}),
							y.jsx('li', {
								children: y.jsx(ze, { to: '/login', children: 'Login' }),
							}),
						],
					}),
				}),
			],
		}),
	rg = Jv([
		{
			path: '/',
			element: y.jsxs(y.Fragment, {
				children: [y.jsx(tg, {}), y.jsx(ly, {}), y.jsx(Vv, {}), y.jsx(ng, {})],
			}),
			children: [
				{ index: !0, element: y.jsx(by, {}) },
				{ path: 'about', element: y.jsx(eg, {}) },
			],
			errorElement: y.jsx('h1', { children: 'Error' }),
		},
	]);
function lg() {
	return y.jsx($v, { router: rg });
}
Li.createRoot(document.getElementById('root')).render(
	y.jsx(hn.StrictMode, { children: y.jsx(lg, {}) })
);

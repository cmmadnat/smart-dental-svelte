function t() {}
const e = (t) => t;
function r(t, e) {
	for (const r in e) t[r] = e[r];
	return t;
}
function n(t) {
	return t();
}
function o() {
	return Object.create(null);
}
function i(t) {
	t.forEach(n);
}
function a(t) {
	return 'function' == typeof t;
}
function s(t, e) {
	return t != t ? e == e : t !== e || (t && 'object' == typeof t) || 'function' == typeof t;
}
let u;
function c(t, e) {
	return u || (u = document.createElement('a')), (u.href = e), t === u.href;
}
function l(e, ...r) {
	if (null == e) return t;
	const n = e.subscribe(...r);
	return n.unsubscribe ? () => n.unsubscribe() : n;
}
function f(t, e, r) {
	t.$$.on_destroy.push(l(e, r));
}
function p(t, e, r, n) {
	if (t) {
		const o = h(t, e, r, n);
		return t[0](o);
	}
}
function h(t, e, n, o) {
	return t[1] && o ? r(n.ctx.slice(), t[1](o(e))) : n.ctx;
}
function y(t, e, r, n) {
	if (t[2] && n) {
		const o = t[2](n(r));
		if (void 0 === e.dirty) return o;
		if ('object' == typeof o) {
			const t = [],
				r = Math.max(e.dirty.length, o.length);
			for (let n = 0; n < r; n += 1) t[n] = e.dirty[n] | o[n];
			return t;
		}
		return e.dirty | o;
	}
	return e.dirty;
}
function d(t, e, r, n, o, i) {
	if (o) {
		const a = h(e, r, n, i);
		t.p(a, o);
	}
}
function m(t) {
	if (t.ctx.length > 32) {
		const e = [],
			r = t.ctx.length / 32;
		for (let t = 0; t < r; t++) e[t] = -1;
		return e;
	}
	return -1;
}
function g(t, e, r) {
	return t.set(r), e;
}
const b = 'undefined' != typeof window;
let v = b ? () => window.performance.now() : () => Date.now(),
	_ = b ? (t) => requestAnimationFrame(t) : t;
const E = new Set();
function w(t) {
	E.forEach((e) => {
		e.c(t) || (E.delete(e), e.f());
	}),
		0 !== E.size && _(w);
}
let S = !1;
function T(t, e, r, n) {
	for (; t < e; ) {
		const o = t + ((e - t) >> 1);
		r(o) <= n ? (t = o + 1) : (e = o);
	}
	return t;
}
function A(t) {
	if (!t) return document;
	const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
	return e && e.host ? e : t.ownerDocument;
}
function O(t) {
	const e = j('style');
	return (
		(function (t, e) {
			!(function (t, e) {
				t.appendChild(e);
			})(t.head || t, e);
		})(A(t), e),
		e
	);
}
function P(t, e) {
	if (S) {
		for (
			!(function (t) {
				if (t.hydrate_init) return;
				t.hydrate_init = !0;
				let e = t.childNodes;
				if ('HEAD' === t.nodeName) {
					const t = [];
					for (let r = 0; r < e.length; r++) {
						const n = e[r];
						void 0 !== n.claim_order && t.push(n);
					}
					e = t;
				}
				const r = new Int32Array(e.length + 1),
					n = new Int32Array(e.length);
				r[0] = -1;
				let o = 0;
				for (let u = 0; u < e.length; u++) {
					const t = e[u].claim_order,
						i =
							(o > 0 && e[r[o]].claim_order <= t ? o + 1 : T(1, o, (t) => e[r[t]].claim_order, t)) -
							1;
					n[u] = r[i] + 1;
					const a = i + 1;
					(r[a] = u), (o = Math.max(a, o));
				}
				const i = [],
					a = [];
				let s = e.length - 1;
				for (let u = r[o] + 1; 0 != u; u = n[u - 1]) {
					for (i.push(e[u - 1]); s >= u; s--) a.push(e[s]);
					s--;
				}
				for (; s >= 0; s--) a.push(e[s]);
				i.reverse(), a.sort((t, e) => t.claim_order - e.claim_order);
				for (let u = 0, c = 0; u < a.length; u++) {
					for (; c < i.length && a[u].claim_order >= i[c].claim_order; ) c++;
					const e = c < i.length ? i[c] : null;
					t.insertBefore(a[u], e);
				}
			})(t),
				(void 0 === t.actual_end_child ||
					(null !== t.actual_end_child && t.actual_end_child.parentElement !== t)) &&
					(t.actual_end_child = t.firstChild);
			null !== t.actual_end_child && void 0 === t.actual_end_child.claim_order;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		e !== t.actual_end_child
			? (void 0 === e.claim_order && e.parentNode === t) || t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling);
	} else (e.parentNode === t && null === e.nextSibling) || t.appendChild(e);
}
function M(t, e, r) {
	S && !r ? P(t, e) : (e.parentNode === t && e.nextSibling == r) || t.insertBefore(e, r || null);
}
function L(t) {
	t.parentNode.removeChild(t);
}
function D(t, e) {
	for (let r = 0; r < t.length; r += 1) t[r] && t[r].d(e);
}
function j(t) {
	return document.createElement(t);
}
function N(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function R(t) {
	return document.createTextNode(t);
}
function x() {
	return R(' ');
}
function k() {
	return R('');
}
function I(t, e, r, n) {
	return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n);
}
function C(t, e, r) {
	null == r ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function $(t, e, r) {
	t.setAttributeNS('http://www.w3.org/1999/xlink', e, r);
}
function U(t) {
	return Array.from(t.childNodes);
}
function F(t, e, r, n, o = !1) {
	!(function (t) {
		void 0 === t.claim_info && (t.claim_info = { last_index: 0, total_claimed: 0 });
	})(t);
	const i = (() => {
		for (let n = t.claim_info.last_index; n < t.length; n++) {
			const i = t[n];
			if (e(i)) {
				const e = r(i);
				return void 0 === e ? t.splice(n, 1) : (t[n] = e), o || (t.claim_info.last_index = n), i;
			}
		}
		for (let n = t.claim_info.last_index - 1; n >= 0; n--) {
			const i = t[n];
			if (e(i)) {
				const e = r(i);
				return (
					void 0 === e ? t.splice(n, 1) : (t[n] = e),
					o ? void 0 === e && t.claim_info.last_index-- : (t.claim_info.last_index = n),
					i
				);
			}
		}
		return n();
	})();
	return (i.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), i;
}
function G(t, e, r, n) {
	return F(
		t,
		(t) => t.nodeName === e,
		(t) => {
			const e = [];
			for (let n = 0; n < t.attributes.length; n++) {
				const o = t.attributes[n];
				r[o.name] || e.push(o.name);
			}
			e.forEach((e) => t.removeAttribute(e));
		},
		() => n(e)
	);
}
function Y(t, e, r) {
	return G(t, e, r, j);
}
function H(t, e, r) {
	return G(t, e, r, N);
}
function q(t, e) {
	return F(
		t,
		(t) => 3 === t.nodeType,
		(t) => {
			const r = '' + e;
			if (t.data.startsWith(r)) {
				if (t.data.length !== r.length) return t.splitText(r.length);
			} else t.data = r;
		},
		() => R(e),
		!0
	);
}
function z(t) {
	return q(t, ' ');
}
function V(t, e) {
	(e = '' + e), t.wholeText !== e && (t.data = e);
}
function X(t, e) {
	t.value = null == e ? '' : e;
}
function B(t, e) {
	for (let r = 0; r < t.options.length; r += 1) {
		const n = t.options[r];
		if (n.__value === e) return void (n.selected = !0);
	}
	t.selectedIndex = -1;
}
function W(t) {
	const e = t.querySelector(':checked') || t.options[0];
	return e && e.__value;
}
function J(t, e, r = !1) {
	const n = document.createEvent('CustomEvent');
	return n.initCustomEvent(t, r, !1, e), n;
}
const Q = new Set();
let Z,
	K = 0;
function tt(t, e) {
	const r = (t.style.animation || '').split(', '),
		n = r.filter(e ? (t) => t.indexOf(e) < 0 : (t) => -1 === t.indexOf('__svelte')),
		o = r.length - n.length;
	o &&
		((t.style.animation = n.join(', ')),
		(K -= o),
		K ||
			_(() => {
				K ||
					(Q.forEach((t) => {
						const e = t.__svelte_stylesheet;
						let r = e.cssRules.length;
						for (; r--; ) e.deleteRule(r);
						t.__svelte_rules = {};
					}),
					Q.clear());
			}));
}
function et(t) {
	Z = t;
}
function rt() {
	if (!Z) throw new Error('Function called outside component initialization');
	return Z;
}
function nt(t) {
	rt().$$.on_mount.push(t);
}
function ot(t) {
	rt().$$.after_update.push(t);
}
function it() {
	const t = rt();
	return (e, r) => {
		const n = t.$$.callbacks[e];
		if (n) {
			const o = J(e, r);
			n.slice().forEach((e) => {
				e.call(t, o);
			});
		}
	};
}
function at(t, e) {
	rt().$$.context.set(t, e);
}
const st = [],
	ut = [],
	ct = [],
	lt = [],
	ft = Promise.resolve();
let pt = !1;
function ht(t) {
	ct.push(t);
}
function yt(t) {
	lt.push(t);
}
let dt = !1;
const mt = new Set();
function gt() {
	if (!dt) {
		dt = !0;
		do {
			for (let t = 0; t < st.length; t += 1) {
				const e = st[t];
				et(e), bt(e.$$);
			}
			for (et(null), st.length = 0; ut.length; ) ut.pop()();
			for (let t = 0; t < ct.length; t += 1) {
				const e = ct[t];
				mt.has(e) || (mt.add(e), e());
			}
			ct.length = 0;
		} while (st.length);
		for (; lt.length; ) lt.pop()();
		(pt = !1), (dt = !1), mt.clear();
	}
}
function bt(t) {
	if (null !== t.fragment) {
		t.update(), i(t.before_update);
		const e = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ht);
	}
}
let vt;
function _t(t, e, r) {
	t.dispatchEvent(J(`${e ? 'intro' : 'outro'}${r}`));
}
const Et = new Set();
let wt;
function St() {
	wt = { r: 0, c: [], p: wt };
}
function Tt() {
	wt.r || i(wt.c), (wt = wt.p);
}
function At(t, e) {
	t && t.i && (Et.delete(t), t.i(e));
}
function Ot(t, e, r, n) {
	if (t && t.o) {
		if (Et.has(t)) return;
		Et.add(t),
			wt.c.push(() => {
				Et.delete(t), n && (r && t.d(1), n());
			}),
			t.o(e);
	}
}
const Pt = { duration: 0 };
function Mt(r, n, o) {
	let i,
		s,
		u = n(r, o),
		c = !1,
		l = 0;
	function f() {
		i && tt(r, i);
	}
	function p() {
		const { delay: n = 0, duration: o = 300, easing: a = e, tick: p = t, css: h } = u || Pt;
		h &&
			(i = (function (t, e, r, n, o, i, a, s = 0) {
				const u = 16.666 / n;
				let c = '{\n';
				for (let m = 0; m <= 1; m += u) {
					const t = e + (r - e) * i(m);
					c += 100 * m + `%{${a(t, 1 - t)}}\n`;
				}
				const l = c + `100% {${a(r, 1 - r)}}\n}`,
					f = `__svelte_${(function (t) {
						let e = 5381,
							r = t.length;
						for (; r--; ) e = ((e << 5) - e) ^ t.charCodeAt(r);
						return e >>> 0;
					})(l)}_${s}`,
					p = A(t);
				Q.add(p);
				const h = p.__svelte_stylesheet || (p.__svelte_stylesheet = O(t).sheet),
					y = p.__svelte_rules || (p.__svelte_rules = {});
				y[f] || ((y[f] = !0), h.insertRule(`@keyframes ${f} ${l}`, h.cssRules.length));
				const d = t.style.animation || '';
				return (
					(t.style.animation = `${d ? `${d}, ` : ''}${f} ${n}ms linear ${o}ms 1 both`), (K += 1), f
				);
			})(r, 0, 1, o, n, a, h, l++)),
			p(0, 1);
		const y = v() + n,
			d = y + o;
		s && s.abort(),
			(c = !0),
			ht(() => _t(r, !0, 'start')),
			(s = (function (t) {
				let e;
				return (
					0 === E.size && _(w),
					{
						promise: new Promise((r) => {
							E.add((e = { c: t, f: r }));
						}),
						abort() {
							E.delete(e);
						}
					}
				);
			})((t) => {
				if (c) {
					if (t >= d) return p(1, 0), _t(r, !0, 'end'), f(), (c = !1);
					if (t >= y) {
						const e = a((t - y) / o);
						p(e, 1 - e);
					}
				}
				return c;
			}));
	}
	let h = !1;
	return {
		start() {
			h ||
				((h = !0),
				tt(r),
				a(u)
					? ((u = u()),
					  (vt ||
							((vt = Promise.resolve()),
							vt.then(() => {
								vt = null;
							})),
					  vt).then(p))
					: p());
		},
		invalidate() {
			h = !1;
		},
		end() {
			c && (f(), (c = !1));
		}
	};
}
function Lt(t, e) {
	const r = {},
		n = {},
		o = { $$scope: 1 };
	let i = t.length;
	for (; i--; ) {
		const a = t[i],
			s = e[i];
		if (s) {
			for (const t in a) t in s || (n[t] = 1);
			for (const t in s) o[t] || ((r[t] = s[t]), (o[t] = 1));
			t[i] = s;
		} else for (const t in a) o[t] = 1;
	}
	for (const a in n) a in r || (r[a] = void 0);
	return r;
}
function Dt(t) {
	return 'object' == typeof t && null !== t ? t : {};
}
function jt(t, e, r) {
	const n = t.$$.props[e];
	void 0 !== n && ((t.$$.bound[n] = r), r(t.$$.ctx[n]));
}
function Nt(t) {
	t && t.c();
}
function Rt(t, e) {
	t && t.l(e);
}
function xt(t, e, r, o) {
	const { fragment: s, on_mount: u, on_destroy: c, after_update: l } = t.$$;
	s && s.m(e, r),
		o ||
			ht(() => {
				const e = u.map(n).filter(a);
				c ? c.push(...e) : i(e), (t.$$.on_mount = []);
			}),
		l.forEach(ht);
}
function kt(t, e) {
	const r = t.$$;
	null !== r.fragment &&
		(i(r.on_destroy),
		r.fragment && r.fragment.d(e),
		(r.on_destroy = r.fragment = null),
		(r.ctx = []));
}
function It(t, e) {
	-1 === t.$$.dirty[0] && (st.push(t), pt || ((pt = !0), ft.then(gt)), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Ct(e, r, n, a, s, u, c, l = [-1]) {
	const f = Z;
	et(e);
	const p = (e.$$ = {
		fragment: null,
		ctx: null,
		props: u,
		update: t,
		not_equal: s,
		bound: o(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(f ? f.$$.context : r.context || []),
		callbacks: o(),
		dirty: l,
		skip_bound: !1,
		root: r.target || f.$$.root
	});
	c && c(p.root);
	let h = !1;
	if (
		((p.ctx = n
			? n(e, r.props || {}, (t, r, ...n) => {
					const o = n.length ? n[0] : r;
					return (
						p.ctx &&
							s(p.ctx[t], (p.ctx[t] = o)) &&
							(!p.skip_bound && p.bound[t] && p.bound[t](o), h && It(e, t)),
						r
					);
			  })
			: []),
		p.update(),
		(h = !0),
		i(p.before_update),
		(p.fragment = !!a && a(p.ctx)),
		r.target)
	) {
		if (r.hydrate) {
			S = !0;
			const t = U(r.target);
			p.fragment && p.fragment.l(t), t.forEach(L);
		} else p.fragment && p.fragment.c();
		r.intro && At(e.$$.fragment), xt(e, r.target, r.anchor, r.customElement), (S = !1), gt();
	}
	et(f);
}
class $t {
	$destroy() {
		kt(this, 1), (this.$destroy = t);
	}
	$on(t, e) {
		const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
		return (
			r.push(e),
			() => {
				const t = r.indexOf(e);
				-1 !== t && r.splice(t, 1);
			}
		);
	}
	$set(t) {
		var e;
		this.$$set &&
			((e = t), 0 !== Object.keys(e).length) &&
			((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
	}
}
const Ut = [];
function Ft(e, r = t) {
	let n;
	const o = new Set();
	function i(t) {
		if (s(e, t) && ((e = t), n)) {
			const t = !Ut.length;
			for (const r of o) r[1](), Ut.push(r, e);
			if (t) {
				for (let t = 0; t < Ut.length; t += 2) Ut[t][0](Ut[t + 1]);
				Ut.length = 0;
			}
		}
	}
	return {
		set: i,
		update: function (t) {
			i(t(e));
		},
		subscribe: function (a, s = t) {
			const u = [a, s];
			return (
				o.add(u),
				1 === o.size && (n = r(i) || t),
				a(e),
				() => {
					o.delete(u), 0 === o.size && (n(), (n = null));
				}
			);
		}
	};
}
function Gt(e, r, n) {
	const o = !Array.isArray(e),
		s = o ? [e] : e,
		u = r.length < 2;
	return {
		subscribe: Ft(n, (e) => {
			let n = !1;
			const c = [];
			let f = 0,
				p = t;
			const h = () => {
					if (f) return;
					p();
					const n = r(o ? c[0] : c, e);
					u ? e(n) : (p = a(n) ? n : t);
				},
				y = s.map((t, e) =>
					l(
						t,
						(t) => {
							(c[e] = t), (f &= ~(1 << e)), n && h();
						},
						() => {
							f |= 1 << e;
						}
					)
				);
			return (
				(n = !0),
				h(),
				function () {
					i(y), p();
				}
			);
		}).subscribe
	};
}
'undefined' != typeof globalThis
	? globalThis
	: 'undefined' != typeof window
	? window
	: 'undefined' != typeof global
	? global
	: 'undefined' != typeof self && self;
function Yt(t) {
	if (t.__esModule) return t;
	var e = Object.defineProperty({}, '__esModule', { value: !0 });
	return (
		Object.keys(t).forEach(function (r) {
			var n = Object.getOwnPropertyDescriptor(t, r);
			Object.defineProperty(
				e,
				r,
				n.get
					? n
					: {
							enumerable: !0,
							get: function () {
								return t[r];
							}
					  }
			);
		}),
		e
	);
}
var Ht = function (t) {
	return (
		(function (t) {
			return !!t && 'object' == typeof t;
		})(t) &&
		!(function (t) {
			var e = Object.prototype.toString.call(t);
			return (
				'[object RegExp]' === e ||
				'[object Date]' === e ||
				(function (t) {
					return t.$$typeof === qt;
				})(t)
			);
		})(t)
	);
};
var qt = 'function' == typeof Symbol && Symbol.for ? Symbol.for('react.element') : 60103;
function zt(t, e) {
	return !1 !== e.clone && e.isMergeableObject(t)
		? Jt(((r = t), Array.isArray(r) ? [] : {}), t, e)
		: t;
	var r;
}
function Vt(t, e, r) {
	return t.concat(e).map(function (t) {
		return zt(t, r);
	});
}
function Xt(t) {
	return Object.keys(t).concat(
		(function (t) {
			return Object.getOwnPropertySymbols
				? Object.getOwnPropertySymbols(t).filter(function (e) {
						return t.propertyIsEnumerable(e);
				  })
				: [];
		})(t)
	);
}
function Bt(t, e) {
	try {
		return e in t;
	} catch (r) {
		return !1;
	}
}
function Wt(t, e, r) {
	var n = {};
	return (
		r.isMergeableObject(t) &&
			Xt(t).forEach(function (e) {
				n[e] = zt(t[e], r);
			}),
		Xt(e).forEach(function (o) {
			(function (t, e) {
				return (
					Bt(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e))
				);
			})(t, o) ||
				(Bt(t, o) && r.isMergeableObject(e[o])
					? (n[o] = (function (t, e) {
							if (!e.customMerge) return Jt;
							var r = e.customMerge(t);
							return 'function' == typeof r ? r : Jt;
					  })(o, r)(t[o], e[o], r))
					: (n[o] = zt(e[o], r)));
		}),
		n
	);
}
function Jt(t, e, r) {
	((r = r || {}).arrayMerge = r.arrayMerge || Vt),
		(r.isMergeableObject = r.isMergeableObject || Ht),
		(r.cloneUnlessOtherwiseSpecified = zt);
	var n = Array.isArray(e);
	return n === Array.isArray(t) ? (n ? r.arrayMerge(t, e, r) : Wt(t, e, r)) : zt(e, r);
}
Jt.all = function (t, e) {
	if (!Array.isArray(t)) throw new Error('first argument should be an array');
	return t.reduce(function (t, r) {
		return Jt(t, r, e);
	}, {});
};
var Qt = Jt,
	Zt = function (t, e) {
		return (Zt =
			Object.setPrototypeOf ||
			({ __proto__: [] } instanceof Array &&
				function (t, e) {
					t.__proto__ = e;
				}) ||
			function (t, e) {
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
			})(t, e);
	};
function Kt(t, e) {
	if ('function' != typeof e && null !== e)
		throw new TypeError('Class extends value ' + String(e) + ' is not a constructor or null');
	function r() {
		this.constructor = t;
	}
	Zt(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
}
var te,
	ee,
	re,
	ne,
	oe,
	ie,
	ae = function () {
		return (ae =
			Object.assign ||
			function (t) {
				for (var e, r = 1, n = arguments.length; r < n; r++)
					for (var o in (e = arguments[r]))
						Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
				return t;
			}).apply(this, arguments);
	};
function se(t, e, r) {
	if (r || 2 === arguments.length)
		for (var n, o = 0, i = e.length; o < i; o++)
			(!n && o in e) || (n || (n = Array.prototype.slice.call(e, 0, o)), (n[o] = e[o]));
	return t.concat(n || Array.prototype.slice.call(e));
}
function ue(t) {
	return t.type === re.literal;
}
function ce(t) {
	return t.type === re.argument;
}
function le(t) {
	return t.type === re.number;
}
function fe(t) {
	return t.type === re.date;
}
function pe(t) {
	return t.type === re.time;
}
function he(t) {
	return t.type === re.select;
}
function ye(t) {
	return t.type === re.plural;
}
function de(t) {
	return t.type === re.pound;
}
function me(t) {
	return t.type === re.tag;
}
function ge(t) {
	return !(!t || 'object' != typeof t || t.type !== oe.number);
}
function be(t) {
	return !(!t || 'object' != typeof t || t.type !== oe.dateTime);
}
((ee = te || (te = {}))[(ee.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] = 'EXPECT_ARGUMENT_CLOSING_BRACE'),
	(ee[(ee.EMPTY_ARGUMENT = 2)] = 'EMPTY_ARGUMENT'),
	(ee[(ee.MALFORMED_ARGUMENT = 3)] = 'MALFORMED_ARGUMENT'),
	(ee[(ee.EXPECT_ARGUMENT_TYPE = 4)] = 'EXPECT_ARGUMENT_TYPE'),
	(ee[(ee.INVALID_ARGUMENT_TYPE = 5)] = 'INVALID_ARGUMENT_TYPE'),
	(ee[(ee.EXPECT_ARGUMENT_STYLE = 6)] = 'EXPECT_ARGUMENT_STYLE'),
	(ee[(ee.INVALID_NUMBER_SKELETON = 7)] = 'INVALID_NUMBER_SKELETON'),
	(ee[(ee.INVALID_DATE_TIME_SKELETON = 8)] = 'INVALID_DATE_TIME_SKELETON'),
	(ee[(ee.EXPECT_NUMBER_SKELETON = 9)] = 'EXPECT_NUMBER_SKELETON'),
	(ee[(ee.EXPECT_DATE_TIME_SKELETON = 10)] = 'EXPECT_DATE_TIME_SKELETON'),
	(ee[(ee.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] = 'UNCLOSED_QUOTE_IN_ARGUMENT_STYLE'),
	(ee[(ee.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] = 'EXPECT_SELECT_ARGUMENT_OPTIONS'),
	(ee[(ee.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] = 'EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE'),
	(ee[(ee.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] = 'INVALID_PLURAL_ARGUMENT_OFFSET_VALUE'),
	(ee[(ee.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] = 'EXPECT_SELECT_ARGUMENT_SELECTOR'),
	(ee[(ee.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] = 'EXPECT_PLURAL_ARGUMENT_SELECTOR'),
	(ee[(ee.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
		'EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT'),
	(ee[(ee.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
		'EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT'),
	(ee[(ee.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] = 'INVALID_PLURAL_ARGUMENT_SELECTOR'),
	(ee[(ee.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] = 'DUPLICATE_PLURAL_ARGUMENT_SELECTOR'),
	(ee[(ee.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] = 'DUPLICATE_SELECT_ARGUMENT_SELECTOR'),
	(ee[(ee.MISSING_OTHER_CLAUSE = 22)] = 'MISSING_OTHER_CLAUSE'),
	(ee[(ee.INVALID_TAG = 23)] = 'INVALID_TAG'),
	(ee[(ee.INVALID_TAG_NAME = 25)] = 'INVALID_TAG_NAME'),
	(ee[(ee.UNMATCHED_CLOSING_TAG = 26)] = 'UNMATCHED_CLOSING_TAG'),
	(ee[(ee.UNCLOSED_TAG = 27)] = 'UNCLOSED_TAG'),
	((ne = re || (re = {}))[(ne.literal = 0)] = 'literal'),
	(ne[(ne.argument = 1)] = 'argument'),
	(ne[(ne.number = 2)] = 'number'),
	(ne[(ne.date = 3)] = 'date'),
	(ne[(ne.time = 4)] = 'time'),
	(ne[(ne.select = 5)] = 'select'),
	(ne[(ne.plural = 6)] = 'plural'),
	(ne[(ne.pound = 7)] = 'pound'),
	(ne[(ne.tag = 8)] = 'tag'),
	((ie = oe || (oe = {}))[(ie.number = 0)] = 'number'),
	(ie[(ie.dateTime = 1)] = 'dateTime');
var ve = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
	_e =
		/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Ee(t) {
	var e = {};
	return (
		t.replace(_e, function (t) {
			var r = t.length;
			switch (t[0]) {
				case 'G':
					e.era = 4 === r ? 'long' : 5 === r ? 'narrow' : 'short';
					break;
				case 'y':
					e.year = 2 === r ? '2-digit' : 'numeric';
					break;
				case 'Y':
				case 'u':
				case 'U':
				case 'r':
					throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
				case 'q':
				case 'Q':
					throw new RangeError('`q/Q` (quarter) patterns are not supported');
				case 'M':
				case 'L':
					e.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][r - 1];
					break;
				case 'w':
				case 'W':
					throw new RangeError('`w/W` (week) patterns are not supported');
				case 'd':
					e.day = ['numeric', '2-digit'][r - 1];
					break;
				case 'D':
				case 'F':
				case 'g':
					throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
				case 'E':
					e.weekday = 4 === r ? 'short' : 5 === r ? 'narrow' : 'short';
					break;
				case 'e':
					if (r < 4) throw new RangeError('`e..eee` (weekday) patterns are not supported');
					e.weekday = ['short', 'long', 'narrow', 'short'][r - 4];
					break;
				case 'c':
					if (r < 4) throw new RangeError('`c..ccc` (weekday) patterns are not supported');
					e.weekday = ['short', 'long', 'narrow', 'short'][r - 4];
					break;
				case 'a':
					e.hour12 = !0;
					break;
				case 'b':
				case 'B':
					throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
				case 'h':
					(e.hourCycle = 'h12'), (e.hour = ['numeric', '2-digit'][r - 1]);
					break;
				case 'H':
					(e.hourCycle = 'h23'), (e.hour = ['numeric', '2-digit'][r - 1]);
					break;
				case 'K':
					(e.hourCycle = 'h11'), (e.hour = ['numeric', '2-digit'][r - 1]);
					break;
				case 'k':
					(e.hourCycle = 'h24'), (e.hour = ['numeric', '2-digit'][r - 1]);
					break;
				case 'j':
				case 'J':
				case 'C':
					throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
				case 'm':
					e.minute = ['numeric', '2-digit'][r - 1];
					break;
				case 's':
					e.second = ['numeric', '2-digit'][r - 1];
					break;
				case 'S':
				case 'A':
					throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
				case 'z':
					e.timeZoneName = r < 4 ? 'short' : 'long';
					break;
				case 'Z':
				case 'O':
				case 'v':
				case 'V':
				case 'X':
				case 'x':
					throw new RangeError(
						'`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead'
					);
			}
			return '';
		}),
		e
	);
}
var we = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
var Se,
	Te = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
	Ae = /^(@+)?(\+|#+)?$/g,
	Oe = /(\*)(0+)|(#+)(0+)|(0+)/g,
	Pe = /^(0+)$/;
function Me(t) {
	var e = {};
	return (
		t.replace(Ae, function (t, r, n) {
			return (
				'string' != typeof n
					? ((e.minimumSignificantDigits = r.length), (e.maximumSignificantDigits = r.length))
					: '+' === n
					? (e.minimumSignificantDigits = r.length)
					: '#' === r[0]
					? (e.maximumSignificantDigits = r.length)
					: ((e.minimumSignificantDigits = r.length),
					  (e.maximumSignificantDigits = r.length + ('string' == typeof n ? n.length : 0))),
				''
			);
		}),
		e
	);
}
function Le(t) {
	switch (t) {
		case 'sign-auto':
			return { signDisplay: 'auto' };
		case 'sign-accounting':
		case '()':
			return { currencySign: 'accounting' };
		case 'sign-always':
		case '+!':
			return { signDisplay: 'always' };
		case 'sign-accounting-always':
		case '()!':
			return { signDisplay: 'always', currencySign: 'accounting' };
		case 'sign-except-zero':
		case '+?':
			return { signDisplay: 'exceptZero' };
		case 'sign-accounting-except-zero':
		case '()?':
			return { signDisplay: 'exceptZero', currencySign: 'accounting' };
		case 'sign-never':
		case '+_':
			return { signDisplay: 'never' };
	}
}
function De(t) {
	var e;
	if (
		('E' === t[0] && 'E' === t[1]
			? ((e = { notation: 'engineering' }), (t = t.slice(2)))
			: 'E' === t[0] && ((e = { notation: 'scientific' }), (t = t.slice(1))),
		e)
	) {
		var r = t.slice(0, 2);
		if (
			('+!' === r
				? ((e.signDisplay = 'always'), (t = t.slice(2)))
				: '+?' === r && ((e.signDisplay = 'exceptZero'), (t = t.slice(2))),
			!Pe.test(t))
		)
			throw new Error('Malformed concise eng/scientific notation');
		e.minimumIntegerDigits = t.length;
	}
	return e;
}
function je(t) {
	var e = Le(t);
	return e || {};
}
function Ne(t) {
	for (var e = {}, r = 0, n = t; r < n.length; r++) {
		var o = n[r];
		switch (o.stem) {
			case 'percent':
			case '%':
				e.style = 'percent';
				continue;
			case '%x100':
				(e.style = 'percent'), (e.scale = 100);
				continue;
			case 'currency':
				(e.style = 'currency'), (e.currency = o.options[0]);
				continue;
			case 'group-off':
			case ',_':
				e.useGrouping = !1;
				continue;
			case 'precision-integer':
			case '.':
				e.maximumFractionDigits = 0;
				continue;
			case 'measure-unit':
			case 'unit':
				(e.style = 'unit'), (e.unit = o.options[0].replace(/^(.*?)-/, ''));
				continue;
			case 'compact-short':
			case 'K':
				(e.notation = 'compact'), (e.compactDisplay = 'short');
				continue;
			case 'compact-long':
			case 'KK':
				(e.notation = 'compact'), (e.compactDisplay = 'long');
				continue;
			case 'scientific':
				e = ae(
					ae(ae({}, e), { notation: 'scientific' }),
					o.options.reduce(function (t, e) {
						return ae(ae({}, t), je(e));
					}, {})
				);
				continue;
			case 'engineering':
				e = ae(
					ae(ae({}, e), { notation: 'engineering' }),
					o.options.reduce(function (t, e) {
						return ae(ae({}, t), je(e));
					}, {})
				);
				continue;
			case 'notation-simple':
				e.notation = 'standard';
				continue;
			case 'unit-width-narrow':
				(e.currencyDisplay = 'narrowSymbol'), (e.unitDisplay = 'narrow');
				continue;
			case 'unit-width-short':
				(e.currencyDisplay = 'code'), (e.unitDisplay = 'short');
				continue;
			case 'unit-width-full-name':
				(e.currencyDisplay = 'name'), (e.unitDisplay = 'long');
				continue;
			case 'unit-width-iso-code':
				e.currencyDisplay = 'symbol';
				continue;
			case 'scale':
				e.scale = parseFloat(o.options[0]);
				continue;
			case 'integer-width':
				if (o.options.length > 1)
					throw new RangeError('integer-width stems only accept a single optional option');
				o.options[0].replace(Oe, function (t, r, n, o, i, a) {
					if (r) e.minimumIntegerDigits = n.length;
					else {
						if (o && i) throw new Error('We currently do not support maximum integer digits');
						if (a) throw new Error('We currently do not support exact integer digits');
					}
					return '';
				});
				continue;
		}
		if (Pe.test(o.stem)) e.minimumIntegerDigits = o.stem.length;
		else if (Te.test(o.stem)) {
			if (o.options.length > 1)
				throw new RangeError('Fraction-precision stems only accept a single optional option');
			o.stem.replace(Te, function (t, r, n, o, i, a) {
				return (
					'*' === n
						? (e.minimumFractionDigits = r.length)
						: o && '#' === o[0]
						? (e.maximumFractionDigits = o.length)
						: i && a
						? ((e.minimumFractionDigits = i.length),
						  (e.maximumFractionDigits = i.length + a.length))
						: ((e.minimumFractionDigits = r.length), (e.maximumFractionDigits = r.length)),
					''
				);
			}),
				o.options.length && (e = ae(ae({}, e), Me(o.options[0])));
		} else if (Ae.test(o.stem)) e = ae(ae({}, e), Me(o.stem));
		else {
			var i = Le(o.stem);
			i && (e = ae(ae({}, e), i));
			var a = De(o.stem);
			a && (e = ae(ae({}, e), a));
		}
	}
	return e;
}
var Re = new RegExp('^' + ve.source + '*'),
	xe = new RegExp(ve.source + '*$');
function ke(t, e) {
	return { start: t, end: e };
}
var Ie = !!String.prototype.startsWith,
	Ce = !!String.fromCodePoint,
	$e = !!Object.fromEntries,
	Ue = !!String.prototype.codePointAt,
	Fe = !!String.prototype.trimStart,
	Ge = !!String.prototype.trimEnd,
	Ye = !!Number.isSafeInteger
		? Number.isSafeInteger
		: function (t) {
				return (
					'number' == typeof t &&
					isFinite(t) &&
					Math.floor(t) === t &&
					Math.abs(t) <= 9007199254740991
				);
		  },
	He = !0;
try {
	He =
		'a' ===
		(null === (Se = Qe('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu').exec('a')) ||
		void 0 === Se
			? void 0
			: Se[0]);
} catch (ma) {
	He = !1;
}
var qe,
	ze = Ie
		? function (t, e, r) {
				return t.startsWith(e, r);
		  }
		: function (t, e, r) {
				return t.slice(r, r + e.length) === e;
		  },
	Ve = Ce
		? String.fromCodePoint
		: function () {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				for (var r, n = '', o = t.length, i = 0; o > i; ) {
					if ((r = t[i++]) > 1114111) throw RangeError(r + ' is not a valid code point');
					n +=
						r < 65536
							? String.fromCharCode(r)
							: String.fromCharCode(55296 + ((r -= 65536) >> 10), (r % 1024) + 56320);
				}
				return n;
		  },
	Xe = $e
		? Object.fromEntries
		: function (t) {
				for (var e = {}, r = 0, n = t; r < n.length; r++) {
					var o = n[r],
						i = o[0],
						a = o[1];
					e[i] = a;
				}
				return e;
		  },
	Be = Ue
		? function (t, e) {
				return t.codePointAt(e);
		  }
		: function (t, e) {
				var r = t.length;
				if (!(e < 0 || e >= r)) {
					var n,
						o = t.charCodeAt(e);
					return o < 55296 ||
						o > 56319 ||
						e + 1 === r ||
						(n = t.charCodeAt(e + 1)) < 56320 ||
						n > 57343
						? o
						: n - 56320 + ((o - 55296) << 10) + 65536;
				}
		  },
	We = Fe
		? function (t) {
				return t.trimStart();
		  }
		: function (t) {
				return t.replace(Re, '');
		  },
	Je = Ge
		? function (t) {
				return t.trimEnd();
		  }
		: function (t) {
				return t.replace(xe, '');
		  };
function Qe(t, e) {
	return new RegExp(t, e);
}
if (He) {
	var Ze = Qe('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
	qe = function (t, e) {
		var r;
		return (Ze.lastIndex = e), null !== (r = Ze.exec(t)[1]) && void 0 !== r ? r : '';
	};
} else
	qe = function (t, e) {
		for (var r = []; ; ) {
			var n = Be(t, e);
			if (void 0 === n || er(n) || rr(n)) break;
			r.push(n), (e += n >= 65536 ? 2 : 1);
		}
		return Ve.apply(void 0, r);
	};
var Ke = (function () {
	function t(t, e) {
		void 0 === e && (e = {}),
			(this.message = t),
			(this.position = { offset: 0, line: 1, column: 1 }),
			(this.ignoreTag = !!e.ignoreTag),
			(this.requiresOtherClause = !!e.requiresOtherClause),
			(this.shouldParseSkeletons = !!e.shouldParseSkeletons);
	}
	return (
		(t.prototype.parse = function () {
			if (0 !== this.offset()) throw Error('parser can only be used once');
			return this.parseMessage(0, '', !1);
		}),
		(t.prototype.parseMessage = function (t, e, r) {
			for (var n = []; !this.isEOF(); ) {
				var o = this.char();
				if (123 === o) {
					if ((i = this.parseArgument(t, r)).err) return i;
					n.push(i.val);
				} else {
					if (125 === o && t > 0) break;
					if (35 !== o || ('plural' !== e && 'selectordinal' !== e)) {
						if (60 === o && !this.ignoreTag && 47 === this.peek()) {
							if (r) break;
							return this.error(
								te.UNMATCHED_CLOSING_TAG,
								ke(this.clonePosition(), this.clonePosition())
							);
						}
						if (60 === o && !this.ignoreTag && tr(this.peek() || 0)) {
							if ((i = this.parseTag(t, e)).err) return i;
							n.push(i.val);
						} else {
							var i;
							if ((i = this.parseLiteral(t, e)).err) return i;
							n.push(i.val);
						}
					} else {
						var a = this.clonePosition();
						this.bump(), n.push({ type: re.pound, location: ke(a, this.clonePosition()) });
					}
				}
			}
			return { val: n, err: null };
		}),
		(t.prototype.parseTag = function (t, e) {
			var r = this.clonePosition();
			this.bump();
			var n = this.parseTagName();
			if ((this.bumpSpace(), this.bumpIf('/>')))
				return {
					val: { type: re.literal, value: '<' + n + '/>', location: ke(r, this.clonePosition()) },
					err: null
				};
			if (this.bumpIf('>')) {
				var o = this.parseMessage(t + 1, e, !0);
				if (o.err) return o;
				var i = o.val,
					a = this.clonePosition();
				if (this.bumpIf('</')) {
					if (this.isEOF() || !tr(this.char()))
						return this.error(te.INVALID_TAG, ke(a, this.clonePosition()));
					var s = this.clonePosition();
					return n !== this.parseTagName()
						? this.error(te.UNMATCHED_CLOSING_TAG, ke(s, this.clonePosition()))
						: (this.bumpSpace(),
						  this.bumpIf('>')
								? {
										val: {
											type: re.tag,
											value: n,
											children: i,
											location: ke(r, this.clonePosition())
										},
										err: null
								  }
								: this.error(te.INVALID_TAG, ke(a, this.clonePosition())));
				}
				return this.error(te.UNCLOSED_TAG, ke(r, this.clonePosition()));
			}
			return this.error(te.INVALID_TAG, ke(r, this.clonePosition()));
		}),
		(t.prototype.parseTagName = function () {
			var t,
				e = this.offset();
			for (
				this.bump();
				!this.isEOF() &&
				(45 === (t = this.char()) ||
					46 === t ||
					(t >= 48 && t <= 57) ||
					95 === t ||
					(t >= 97 && t <= 122) ||
					(t >= 65 && t <= 90) ||
					183 == t ||
					(t >= 192 && t <= 214) ||
					(t >= 216 && t <= 246) ||
					(t >= 248 && t <= 893) ||
					(t >= 895 && t <= 8191) ||
					(t >= 8204 && t <= 8205) ||
					(t >= 8255 && t <= 8256) ||
					(t >= 8304 && t <= 8591) ||
					(t >= 11264 && t <= 12271) ||
					(t >= 12289 && t <= 55295) ||
					(t >= 63744 && t <= 64975) ||
					(t >= 65008 && t <= 65533) ||
					(t >= 65536 && t <= 983039));

			)
				this.bump();
			return this.message.slice(e, this.offset());
		}),
		(t.prototype.parseLiteral = function (t, e) {
			for (var r = this.clonePosition(), n = ''; ; ) {
				var o = this.tryParseQuote(e);
				if (o) n += o;
				else {
					var i = this.tryParseUnquoted(t, e);
					if (i) n += i;
					else {
						var a = this.tryParseLeftAngleBracket();
						if (!a) break;
						n += a;
					}
				}
			}
			var s = ke(r, this.clonePosition());
			return { val: { type: re.literal, value: n, location: s }, err: null };
		}),
		(t.prototype.tryParseLeftAngleBracket = function () {
			return this.isEOF() ||
				60 !== this.char() ||
				(!this.ignoreTag && (tr((t = this.peek() || 0)) || 47 === t))
				? null
				: (this.bump(), '<');
			var t;
		}),
		(t.prototype.tryParseQuote = function (t) {
			if (this.isEOF() || 39 !== this.char()) return null;
			switch (this.peek()) {
				case 39:
					return this.bump(), this.bump(), "'";
				case 123:
				case 60:
				case 62:
				case 125:
					break;
				case 35:
					if ('plural' === t || 'selectordinal' === t) break;
					return null;
				default:
					return null;
			}
			this.bump();
			var e = [this.char()];
			for (this.bump(); !this.isEOF(); ) {
				var r = this.char();
				if (39 === r) {
					if (39 !== this.peek()) {
						this.bump();
						break;
					}
					e.push(39), this.bump();
				} else e.push(r);
				this.bump();
			}
			return Ve.apply(void 0, e);
		}),
		(t.prototype.tryParseUnquoted = function (t, e) {
			if (this.isEOF()) return null;
			var r = this.char();
			return 60 === r ||
				123 === r ||
				(35 === r && ('plural' === e || 'selectordinal' === e)) ||
				(125 === r && t > 0)
				? null
				: (this.bump(), Ve(r));
		}),
		(t.prototype.parseArgument = function (t, e) {
			var r = this.clonePosition();
			if ((this.bump(), this.bumpSpace(), this.isEOF()))
				return this.error(te.EXPECT_ARGUMENT_CLOSING_BRACE, ke(r, this.clonePosition()));
			if (125 === this.char())
				return this.bump(), this.error(te.EMPTY_ARGUMENT, ke(r, this.clonePosition()));
			var n = this.parseIdentifierIfPossible().value;
			if (!n) return this.error(te.MALFORMED_ARGUMENT, ke(r, this.clonePosition()));
			if ((this.bumpSpace(), this.isEOF()))
				return this.error(te.EXPECT_ARGUMENT_CLOSING_BRACE, ke(r, this.clonePosition()));
			switch (this.char()) {
				case 125:
					return (
						this.bump(),
						{
							val: { type: re.argument, value: n, location: ke(r, this.clonePosition()) },
							err: null
						}
					);
				case 44:
					return (
						this.bump(),
						this.bumpSpace(),
						this.isEOF()
							? this.error(te.EXPECT_ARGUMENT_CLOSING_BRACE, ke(r, this.clonePosition()))
							: this.parseArgumentOptions(t, e, n, r)
					);
				default:
					return this.error(te.MALFORMED_ARGUMENT, ke(r, this.clonePosition()));
			}
		}),
		(t.prototype.parseIdentifierIfPossible = function () {
			var t = this.clonePosition(),
				e = this.offset(),
				r = qe(this.message, e),
				n = e + r.length;
			return this.bumpTo(n), { value: r, location: ke(t, this.clonePosition()) };
		}),
		(t.prototype.parseArgumentOptions = function (t, e, r, n) {
			var o,
				i = this.clonePosition(),
				a = this.parseIdentifierIfPossible().value,
				s = this.clonePosition();
			switch (a) {
				case '':
					return this.error(te.EXPECT_ARGUMENT_TYPE, ke(i, s));
				case 'number':
				case 'date':
				case 'time':
					this.bumpSpace();
					var u = null;
					if (this.bumpIf(',')) {
						this.bumpSpace();
						var c = this.clonePosition();
						if ((m = this.parseSimpleArgStyleIfPossible()).err) return m;
						if (0 === (p = Je(m.val)).length)
							return this.error(
								te.EXPECT_ARGUMENT_STYLE,
								ke(this.clonePosition(), this.clonePosition())
							);
						u = { style: p, styleLocation: ke(c, this.clonePosition()) };
					}
					if ((g = this.tryParseArgumentClose(n)).err) return g;
					var l = ke(n, this.clonePosition());
					if (u && ze(null == u ? void 0 : u.style, '::', 0)) {
						var f = We(u.style.slice(2));
						if ('number' === a)
							return (m = this.parseNumberSkeletonFromString(f, u.styleLocation)).err
								? m
								: { val: { type: re.number, value: r, location: l, style: m.val }, err: null };
						if (0 === f.length) return this.error(te.EXPECT_DATE_TIME_SKELETON, l);
						var p = {
							type: oe.dateTime,
							pattern: f,
							location: u.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? Ee(f) : {}
						};
						return {
							val: { type: 'date' === a ? re.date : re.time, value: r, location: l, style: p },
							err: null
						};
					}
					return {
						val: {
							type: 'number' === a ? re.number : 'date' === a ? re.date : re.time,
							value: r,
							location: l,
							style: null !== (o = null == u ? void 0 : u.style) && void 0 !== o ? o : null
						},
						err: null
					};
				case 'plural':
				case 'selectordinal':
				case 'select':
					var h = this.clonePosition();
					if ((this.bumpSpace(), !this.bumpIf(',')))
						return this.error(te.EXPECT_SELECT_ARGUMENT_OPTIONS, ke(h, ae({}, h)));
					this.bumpSpace();
					var y = this.parseIdentifierIfPossible(),
						d = 0;
					if ('select' !== a && 'offset' === y.value) {
						if (!this.bumpIf(':'))
							return this.error(
								te.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
								ke(this.clonePosition(), this.clonePosition())
							);
						var m;
						if (
							(this.bumpSpace(),
							(m = this.tryParseDecimalInteger(
								te.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
								te.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE
							)).err)
						)
							return m;
						this.bumpSpace(), (y = this.parseIdentifierIfPossible()), (d = m.val);
					}
					var g,
						b = this.tryParsePluralOrSelectOptions(t, a, e, y);
					if (b.err) return b;
					if ((g = this.tryParseArgumentClose(n)).err) return g;
					var v = ke(n, this.clonePosition());
					return 'select' === a
						? { val: { type: re.select, value: r, options: Xe(b.val), location: v }, err: null }
						: {
								val: {
									type: re.plural,
									value: r,
									options: Xe(b.val),
									offset: d,
									pluralType: 'plural' === a ? 'cardinal' : 'ordinal',
									location: v
								},
								err: null
						  };
				default:
					return this.error(te.INVALID_ARGUMENT_TYPE, ke(i, s));
			}
		}),
		(t.prototype.tryParseArgumentClose = function (t) {
			return this.isEOF() || 125 !== this.char()
				? this.error(te.EXPECT_ARGUMENT_CLOSING_BRACE, ke(t, this.clonePosition()))
				: (this.bump(), { val: !0, err: null });
		}),
		(t.prototype.parseSimpleArgStyleIfPossible = function () {
			for (var t = 0, e = this.clonePosition(); !this.isEOF(); ) {
				switch (this.char()) {
					case 39:
						this.bump();
						var r = this.clonePosition();
						if (!this.bumpUntil("'"))
							return this.error(te.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ke(r, this.clonePosition()));
						this.bump();
						break;
					case 123:
						(t += 1), this.bump();
						break;
					case 125:
						if (!(t > 0)) return { val: this.message.slice(e.offset, this.offset()), err: null };
						t -= 1;
						break;
					default:
						this.bump();
				}
			}
			return { val: this.message.slice(e.offset, this.offset()), err: null };
		}),
		(t.prototype.parseNumberSkeletonFromString = function (t, e) {
			var r = [];
			try {
				r = (function (t) {
					if (0 === t.length) throw new Error('Number skeleton cannot be empty');
					for (
						var e = [],
							r = 0,
							n = t.split(we).filter(function (t) {
								return t.length > 0;
							});
						r < n.length;
						r++
					) {
						var o = n[r].split('/');
						if (0 === o.length) throw new Error('Invalid number skeleton');
						for (var i = o[0], a = o.slice(1), s = 0, u = a; s < u.length; s++)
							if (0 === u[s].length) throw new Error('Invalid number skeleton');
						e.push({ stem: i, options: a });
					}
					return e;
				})(t);
			} catch (ha) {
				return this.error(te.INVALID_NUMBER_SKELETON, e);
			}
			return {
				val: {
					type: oe.number,
					tokens: r,
					location: e,
					parsedOptions: this.shouldParseSkeletons ? Ne(r) : {}
				},
				err: null
			};
		}),
		(t.prototype.tryParsePluralOrSelectOptions = function (t, e, r, n) {
			for (var o, i = !1, a = [], s = new Set(), u = n.value, c = n.location; ; ) {
				if (0 === u.length) {
					var l = this.clonePosition();
					if ('select' === e || !this.bumpIf('=')) break;
					var f = this.tryParseDecimalInteger(
						te.EXPECT_PLURAL_ARGUMENT_SELECTOR,
						te.INVALID_PLURAL_ARGUMENT_SELECTOR
					);
					if (f.err) return f;
					(c = ke(l, this.clonePosition())), (u = this.message.slice(l.offset, this.offset()));
				}
				if (s.has(u))
					return this.error(
						'select' === e
							? te.DUPLICATE_SELECT_ARGUMENT_SELECTOR
							: te.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
						c
					);
				'other' === u && (i = !0), this.bumpSpace();
				var p = this.clonePosition();
				if (!this.bumpIf('{'))
					return this.error(
						'select' === e
							? te.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
							: te.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
						ke(this.clonePosition(), this.clonePosition())
					);
				var h = this.parseMessage(t + 1, e, r);
				if (h.err) return h;
				var y = this.tryParseArgumentClose(p);
				if (y.err) return y;
				a.push([u, { value: h.val, location: ke(p, this.clonePosition()) }]),
					s.add(u),
					this.bumpSpace(),
					(u = (o = this.parseIdentifierIfPossible()).value),
					(c = o.location);
			}
			return 0 === a.length
				? this.error(
						'select' === e
							? te.EXPECT_SELECT_ARGUMENT_SELECTOR
							: te.EXPECT_PLURAL_ARGUMENT_SELECTOR,
						ke(this.clonePosition(), this.clonePosition())
				  )
				: this.requiresOtherClause && !i
				? this.error(te.MISSING_OTHER_CLAUSE, ke(this.clonePosition(), this.clonePosition()))
				: { val: a, err: null };
		}),
		(t.prototype.tryParseDecimalInteger = function (t, e) {
			var r = 1,
				n = this.clonePosition();
			this.bumpIf('+') || (this.bumpIf('-') && (r = -1));
			for (var o = !1, i = 0; !this.isEOF(); ) {
				var a = this.char();
				if (!(a >= 48 && a <= 57)) break;
				(o = !0), (i = 10 * i + (a - 48)), this.bump();
			}
			var s = ke(n, this.clonePosition());
			return o ? (Ye((i *= r)) ? { val: i, err: null } : this.error(e, s)) : this.error(t, s);
		}),
		(t.prototype.offset = function () {
			return this.position.offset;
		}),
		(t.prototype.isEOF = function () {
			return this.offset() === this.message.length;
		}),
		(t.prototype.clonePosition = function () {
			return {
				offset: this.position.offset,
				line: this.position.line,
				column: this.position.column
			};
		}),
		(t.prototype.char = function () {
			var t = this.position.offset;
			if (t >= this.message.length) throw Error('out of bound');
			var e = Be(this.message, t);
			if (void 0 === e) throw Error('Offset ' + t + ' is at invalid UTF-16 code unit boundary');
			return e;
		}),
		(t.prototype.error = function (t, e) {
			return { val: null, err: { kind: t, message: this.message, location: e } };
		}),
		(t.prototype.bump = function () {
			if (!this.isEOF()) {
				var t = this.char();
				10 === t
					? ((this.position.line += 1), (this.position.column = 1), (this.position.offset += 1))
					: ((this.position.column += 1), (this.position.offset += t < 65536 ? 1 : 2));
			}
		}),
		(t.prototype.bumpIf = function (t) {
			if (ze(this.message, t, this.offset())) {
				for (var e = 0; e < t.length; e++) this.bump();
				return !0;
			}
			return !1;
		}),
		(t.prototype.bumpUntil = function (t) {
			var e = this.offset(),
				r = this.message.indexOf(t, e);
			return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
		}),
		(t.prototype.bumpTo = function (t) {
			if (this.offset() > t)
				throw Error(
					'targetOffset ' +
						t +
						' must be greater than or equal to the current offset ' +
						this.offset()
				);
			for (t = Math.min(t, this.message.length); ; ) {
				var e = this.offset();
				if (e === t) break;
				if (e > t) throw Error('targetOffset ' + t + ' is at invalid UTF-16 code unit boundary');
				if ((this.bump(), this.isEOF())) break;
			}
		}),
		(t.prototype.bumpSpace = function () {
			for (; !this.isEOF() && er(this.char()); ) this.bump();
		}),
		(t.prototype.peek = function () {
			if (this.isEOF()) return null;
			var t = this.char(),
				e = this.offset(),
				r = this.message.charCodeAt(e + (t >= 65536 ? 2 : 1));
			return null != r ? r : null;
		}),
		t
	);
})();
function tr(t) {
	return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
}
function er(t) {
	return (
		(t >= 9 && t <= 13) ||
		32 === t ||
		133 === t ||
		(t >= 8206 && t <= 8207) ||
		8232 === t ||
		8233 === t
	);
}
function rr(t) {
	return (
		(t >= 33 && t <= 35) ||
		36 === t ||
		(t >= 37 && t <= 39) ||
		40 === t ||
		41 === t ||
		42 === t ||
		43 === t ||
		44 === t ||
		45 === t ||
		(t >= 46 && t <= 47) ||
		(t >= 58 && t <= 59) ||
		(t >= 60 && t <= 62) ||
		(t >= 63 && t <= 64) ||
		91 === t ||
		92 === t ||
		93 === t ||
		94 === t ||
		96 === t ||
		123 === t ||
		124 === t ||
		125 === t ||
		126 === t ||
		161 === t ||
		(t >= 162 && t <= 165) ||
		166 === t ||
		167 === t ||
		169 === t ||
		171 === t ||
		172 === t ||
		174 === t ||
		176 === t ||
		177 === t ||
		182 === t ||
		187 === t ||
		191 === t ||
		215 === t ||
		247 === t ||
		(t >= 8208 && t <= 8213) ||
		(t >= 8214 && t <= 8215) ||
		8216 === t ||
		8217 === t ||
		8218 === t ||
		(t >= 8219 && t <= 8220) ||
		8221 === t ||
		8222 === t ||
		8223 === t ||
		(t >= 8224 && t <= 8231) ||
		(t >= 8240 && t <= 8248) ||
		8249 === t ||
		8250 === t ||
		(t >= 8251 && t <= 8254) ||
		(t >= 8257 && t <= 8259) ||
		8260 === t ||
		8261 === t ||
		8262 === t ||
		(t >= 8263 && t <= 8273) ||
		8274 === t ||
		8275 === t ||
		(t >= 8277 && t <= 8286) ||
		(t >= 8592 && t <= 8596) ||
		(t >= 8597 && t <= 8601) ||
		(t >= 8602 && t <= 8603) ||
		(t >= 8604 && t <= 8607) ||
		8608 === t ||
		(t >= 8609 && t <= 8610) ||
		8611 === t ||
		(t >= 8612 && t <= 8613) ||
		8614 === t ||
		(t >= 8615 && t <= 8621) ||
		8622 === t ||
		(t >= 8623 && t <= 8653) ||
		(t >= 8654 && t <= 8655) ||
		(t >= 8656 && t <= 8657) ||
		8658 === t ||
		8659 === t ||
		8660 === t ||
		(t >= 8661 && t <= 8691) ||
		(t >= 8692 && t <= 8959) ||
		(t >= 8960 && t <= 8967) ||
		8968 === t ||
		8969 === t ||
		8970 === t ||
		8971 === t ||
		(t >= 8972 && t <= 8991) ||
		(t >= 8992 && t <= 8993) ||
		(t >= 8994 && t <= 9e3) ||
		9001 === t ||
		9002 === t ||
		(t >= 9003 && t <= 9083) ||
		9084 === t ||
		(t >= 9085 && t <= 9114) ||
		(t >= 9115 && t <= 9139) ||
		(t >= 9140 && t <= 9179) ||
		(t >= 9180 && t <= 9185) ||
		(t >= 9186 && t <= 9254) ||
		(t >= 9255 && t <= 9279) ||
		(t >= 9280 && t <= 9290) ||
		(t >= 9291 && t <= 9311) ||
		(t >= 9472 && t <= 9654) ||
		9655 === t ||
		(t >= 9656 && t <= 9664) ||
		9665 === t ||
		(t >= 9666 && t <= 9719) ||
		(t >= 9720 && t <= 9727) ||
		(t >= 9728 && t <= 9838) ||
		9839 === t ||
		(t >= 9840 && t <= 10087) ||
		10088 === t ||
		10089 === t ||
		10090 === t ||
		10091 === t ||
		10092 === t ||
		10093 === t ||
		10094 === t ||
		10095 === t ||
		10096 === t ||
		10097 === t ||
		10098 === t ||
		10099 === t ||
		10100 === t ||
		10101 === t ||
		(t >= 10132 && t <= 10175) ||
		(t >= 10176 && t <= 10180) ||
		10181 === t ||
		10182 === t ||
		(t >= 10183 && t <= 10213) ||
		10214 === t ||
		10215 === t ||
		10216 === t ||
		10217 === t ||
		10218 === t ||
		10219 === t ||
		10220 === t ||
		10221 === t ||
		10222 === t ||
		10223 === t ||
		(t >= 10224 && t <= 10239) ||
		(t >= 10240 && t <= 10495) ||
		(t >= 10496 && t <= 10626) ||
		10627 === t ||
		10628 === t ||
		10629 === t ||
		10630 === t ||
		10631 === t ||
		10632 === t ||
		10633 === t ||
		10634 === t ||
		10635 === t ||
		10636 === t ||
		10637 === t ||
		10638 === t ||
		10639 === t ||
		10640 === t ||
		10641 === t ||
		10642 === t ||
		10643 === t ||
		10644 === t ||
		10645 === t ||
		10646 === t ||
		10647 === t ||
		10648 === t ||
		(t >= 10649 && t <= 10711) ||
		10712 === t ||
		10713 === t ||
		10714 === t ||
		10715 === t ||
		(t >= 10716 && t <= 10747) ||
		10748 === t ||
		10749 === t ||
		(t >= 10750 && t <= 11007) ||
		(t >= 11008 && t <= 11055) ||
		(t >= 11056 && t <= 11076) ||
		(t >= 11077 && t <= 11078) ||
		(t >= 11079 && t <= 11084) ||
		(t >= 11085 && t <= 11123) ||
		(t >= 11124 && t <= 11125) ||
		(t >= 11126 && t <= 11157) ||
		11158 === t ||
		(t >= 11159 && t <= 11263) ||
		(t >= 11776 && t <= 11777) ||
		11778 === t ||
		11779 === t ||
		11780 === t ||
		11781 === t ||
		(t >= 11782 && t <= 11784) ||
		11785 === t ||
		11786 === t ||
		11787 === t ||
		11788 === t ||
		11789 === t ||
		(t >= 11790 && t <= 11798) ||
		11799 === t ||
		(t >= 11800 && t <= 11801) ||
		11802 === t ||
		11803 === t ||
		11804 === t ||
		11805 === t ||
		(t >= 11806 && t <= 11807) ||
		11808 === t ||
		11809 === t ||
		11810 === t ||
		11811 === t ||
		11812 === t ||
		11813 === t ||
		11814 === t ||
		11815 === t ||
		11816 === t ||
		11817 === t ||
		(t >= 11818 && t <= 11822) ||
		11823 === t ||
		(t >= 11824 && t <= 11833) ||
		(t >= 11834 && t <= 11835) ||
		(t >= 11836 && t <= 11839) ||
		11840 === t ||
		11841 === t ||
		11842 === t ||
		(t >= 11843 && t <= 11855) ||
		(t >= 11856 && t <= 11857) ||
		11858 === t ||
		(t >= 11859 && t <= 11903) ||
		(t >= 12289 && t <= 12291) ||
		12296 === t ||
		12297 === t ||
		12298 === t ||
		12299 === t ||
		12300 === t ||
		12301 === t ||
		12302 === t ||
		12303 === t ||
		12304 === t ||
		12305 === t ||
		(t >= 12306 && t <= 12307) ||
		12308 === t ||
		12309 === t ||
		12310 === t ||
		12311 === t ||
		12312 === t ||
		12313 === t ||
		12314 === t ||
		12315 === t ||
		12316 === t ||
		12317 === t ||
		(t >= 12318 && t <= 12319) ||
		12320 === t ||
		12336 === t ||
		64830 === t ||
		64831 === t ||
		(t >= 65093 && t <= 65094)
	);
}
function nr(t) {
	t.forEach(function (t) {
		if ((delete t.location, he(t) || ye(t)))
			for (var e in t.options) delete t.options[e].location, nr(t.options[e].value);
		else
			(le(t) && ge(t.style)) || ((fe(t) || pe(t)) && be(t.style))
				? delete t.style.location
				: me(t) && nr(t.children);
	});
}
function or(t, e) {
	void 0 === e && (e = {}), (e = ae({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e));
	var r = new Ke(t, e).parse();
	if (r.err) {
		var n = SyntaxError(te[r.err.kind]);
		throw ((n.location = r.err.location), (n.originalMessage = r.err.message), n);
	}
	return (null == e ? void 0 : e.captureLocation) || nr(r.val), r.val;
}
function ir(t, e) {
	var r = e && e.cache ? e.cache : yr,
		n = e && e.serializer ? e.serializer : lr;
	return (e && e.strategy ? e.strategy : cr)(t, { cache: r, serializer: n });
}
function ar(t, e, r, n) {
	var o,
		i = null == (o = n) || 'number' == typeof o || 'boolean' == typeof o ? n : r(n),
		a = e.get(i);
	return void 0 === a && ((a = t.call(this, n)), e.set(i, a)), a;
}
function sr(t, e, r) {
	var n = Array.prototype.slice.call(arguments, 3),
		o = r(n),
		i = e.get(o);
	return void 0 === i && ((i = t.apply(this, n)), e.set(o, i)), i;
}
function ur(t, e, r, n, o) {
	return r.bind(e, t, n, o);
}
function cr(t, e) {
	return ur(t, this, 1 === t.length ? ar : sr, e.cache.create(), e.serializer);
}
var lr = function () {
	return JSON.stringify(arguments);
};
function fr() {
	this.cache = Object.create(null);
}
(fr.prototype.get = function (t) {
	return this.cache[t];
}),
	(fr.prototype.set = function (t, e) {
		this.cache[t] = e;
	});
var pr,
	hr,
	yr = {
		create: function () {
			return new fr();
		}
	},
	dr = {
		variadic: function (t, e) {
			return ur(t, this, sr, e.cache.create(), e.serializer);
		},
		monadic: function (t, e) {
			return ur(t, this, ar, e.cache.create(), e.serializer);
		}
	};
((hr = pr || (pr = {})).MISSING_VALUE = 'MISSING_VALUE'),
	(hr.INVALID_VALUE = 'INVALID_VALUE'),
	(hr.MISSING_INTL_API = 'MISSING_INTL_API');
var mr,
	gr,
	br = (function (t) {
		function e(e, r, n) {
			var o = t.call(this, e) || this;
			return (o.code = r), (o.originalMessage = n), o;
		}
		return (
			Kt(e, t),
			(e.prototype.toString = function () {
				return '[formatjs Error: ' + this.code + '] ' + this.message;
			}),
			e
		);
	})(Error),
	vr = (function (t) {
		function e(e, r, n, o) {
			return (
				t.call(
					this,
					'Invalid values for "' +
						e +
						'": "' +
						r +
						'". Options are "' +
						Object.keys(n).join('", "') +
						'"',
					pr.INVALID_VALUE,
					o
				) || this
			);
		}
		return Kt(e, t), e;
	})(br),
	_r = (function (t) {
		function e(e, r, n) {
			return (
				t.call(this, 'Value for "' + e + '" must be of type ' + r, pr.INVALID_VALUE, n) || this
			);
		}
		return Kt(e, t), e;
	})(br),
	Er = (function (t) {
		function e(e, r) {
			return (
				t.call(
					this,
					'The intl string context variable "' + e + '" was not provided to the string "' + r + '"',
					pr.MISSING_VALUE,
					r
				) || this
			);
		}
		return Kt(e, t), e;
	})(br);
function wr(t) {
	return 'function' == typeof t;
}
function Sr(t, e, r, n, o, i, a) {
	if (1 === t.length && ue(t[0])) return [{ type: mr.literal, value: t[0].value }];
	for (var s = [], u = 0, c = t; u < c.length; u++) {
		var l = c[u];
		if (ue(l)) s.push({ type: mr.literal, value: l.value });
		else if (de(l))
			'number' == typeof i && s.push({ type: mr.literal, value: r.getNumberFormat(e).format(i) });
		else {
			var f = l.value;
			if (!o || !(f in o)) throw new Er(f, a);
			var p = o[f];
			if (ce(l))
				(p && 'string' != typeof p && 'number' != typeof p) ||
					(p = 'string' == typeof p || 'number' == typeof p ? String(p) : ''),
					s.push({ type: 'string' == typeof p ? mr.literal : mr.object, value: p });
			else if (fe(l)) {
				var h =
					'string' == typeof l.style
						? n.date[l.style]
						: be(l.style)
						? l.style.parsedOptions
						: void 0;
				s.push({ type: mr.literal, value: r.getDateTimeFormat(e, h).format(p) });
			} else if (pe(l)) {
				h =
					'string' == typeof l.style
						? n.time[l.style]
						: be(l.style)
						? l.style.parsedOptions
						: void 0;
				s.push({ type: mr.literal, value: r.getDateTimeFormat(e, h).format(p) });
			} else if (le(l)) {
				(h =
					'string' == typeof l.style
						? n.number[l.style]
						: ge(l.style)
						? l.style.parsedOptions
						: void 0) &&
					h.scale &&
					(p *= h.scale || 1),
					s.push({ type: mr.literal, value: r.getNumberFormat(e, h).format(p) });
			} else {
				if (me(l)) {
					var y = l.children,
						d = l.value,
						m = o[d];
					if (!wr(m)) throw new _r(d, 'function', a);
					var g = m(
						Sr(y, e, r, n, o, i).map(function (t) {
							return t.value;
						})
					);
					Array.isArray(g) || (g = [g]),
						s.push.apply(
							s,
							g.map(function (t) {
								return { type: 'string' == typeof t ? mr.literal : mr.object, value: t };
							})
						);
				}
				if (he(l)) {
					if (!(b = l.options[p] || l.options.other))
						throw new vr(l.value, p, Object.keys(l.options), a);
					s.push.apply(s, Sr(b.value, e, r, n, o));
				} else if (ye(l)) {
					var b;
					if (!(b = l.options['=' + p])) {
						if (!Intl.PluralRules)
							throw new br(
								'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
								pr.MISSING_INTL_API,
								a
							);
						var v = r.getPluralRules(e, { type: l.pluralType }).select(p - (l.offset || 0));
						b = l.options[v] || l.options.other;
					}
					if (!b) throw new vr(l.value, p, Object.keys(l.options), a);
					s.push.apply(s, Sr(b.value, e, r, n, o, p - (l.offset || 0)));
				} else;
			}
		}
	}
	return (function (t) {
		return t.length < 2
			? t
			: t.reduce(function (t, e) {
					var r = t[t.length - 1];
					return (
						r && r.type === mr.literal && e.type === mr.literal ? (r.value += e.value) : t.push(e),
						t
					);
			  }, []);
	})(s);
}
function Tr(t, e) {
	return e
		? Object.keys(t).reduce(function (r, n) {
				var o, i;
				return (
					(r[n] =
						((o = t[n]),
						(i = e[n])
							? ae(
									ae(ae({}, o || {}), i || {}),
									Object.keys(o).reduce(function (t, e) {
										return (t[e] = ae(ae({}, o[e]), i[e] || {})), t;
									}, {})
							  )
							: o)),
					r
				);
		  }, ae({}, t))
		: t;
}
function Ar(t) {
	return {
		create: function () {
			return {
				get: function (e) {
					return t[e];
				},
				set: function (e, r) {
					t[e] = r;
				}
			};
		}
	};
}
((gr = mr || (mr = {}))[(gr.literal = 0)] = 'literal'), (gr[(gr.object = 1)] = 'object');
var Or = (function () {
	function t(e, r, n, o) {
		var i,
			a = this;
		if (
			(void 0 === r && (r = t.defaultLocale),
			(this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
			(this.format = function (t) {
				var e = a.formatToParts(t);
				if (1 === e.length) return e[0].value;
				var r = e.reduce(function (t, e) {
					return (
						t.length && e.type === mr.literal && 'string' == typeof t[t.length - 1]
							? (t[t.length - 1] += e.value)
							: t.push(e.value),
						t
					);
				}, []);
				return r.length <= 1 ? r[0] || '' : r;
			}),
			(this.formatToParts = function (t) {
				return Sr(a.ast, a.locales, a.formatters, a.formats, t, void 0, a.message);
			}),
			(this.resolvedOptions = function () {
				return { locale: Intl.NumberFormat.supportedLocalesOf(a.locales)[0] };
			}),
			(this.getAst = function () {
				return a.ast;
			}),
			'string' == typeof e)
		) {
			if (((this.message = e), !t.__parse))
				throw new TypeError(
					'IntlMessageFormat.__parse must be set to process `message` of type `string`'
				);
			this.ast = t.__parse(e, { ignoreTag: null == o ? void 0 : o.ignoreTag });
		} else this.ast = e;
		if (!Array.isArray(this.ast))
			throw new TypeError('A message must be provided as a String or AST.');
		(this.formats = Tr(t.formats, n)),
			(this.locales = r),
			(this.formatters =
				(o && o.formatters) ||
				(void 0 === (i = this.formatterCache) &&
					(i = { number: {}, dateTime: {}, pluralRules: {} }),
				{
					getNumberFormat: ir(
						function () {
							for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
							return new ((t = Intl.NumberFormat).bind.apply(t, se([void 0], e)))();
						},
						{ cache: Ar(i.number), strategy: dr.variadic }
					),
					getDateTimeFormat: ir(
						function () {
							for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
							return new ((t = Intl.DateTimeFormat).bind.apply(t, se([void 0], e)))();
						},
						{ cache: Ar(i.dateTime), strategy: dr.variadic }
					),
					getPluralRules: ir(
						function () {
							for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
							return new ((t = Intl.PluralRules).bind.apply(t, se([void 0], e)))();
						},
						{ cache: Ar(i.pluralRules), strategy: dr.variadic }
					)
				}));
	}
	return (
		Object.defineProperty(t, 'defaultLocale', {
			get: function () {
				return (
					t.memoizedDefaultLocale ||
						(t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale),
					t.memoizedDefaultLocale
				);
			},
			enumerable: !1,
			configurable: !0
		}),
		(t.memoizedDefaultLocale = null),
		(t.__parse = or),
		(t.formats = {
			number: {
				integer: { maximumFractionDigits: 0 },
				currency: { style: 'currency' },
				percent: { style: 'percent' }
			},
			date: {
				short: { month: 'numeric', day: 'numeric', year: '2-digit' },
				medium: { month: 'short', day: 'numeric', year: 'numeric' },
				long: { month: 'long', day: 'numeric', year: 'numeric' },
				full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }
			},
			time: {
				short: { hour: 'numeric', minute: 'numeric' },
				medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
				long: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
				full: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }
			}
		}),
		t
	);
})();
const Pr = {},
	Mr = (t, e, r) => (r ? (e in Pr || (Pr[e] = {}), t in Pr[e] || (Pr[e][t] = r), r) : r),
	Lr = (t, e) => {
		if (null == e) return;
		if (e in Pr && t in Pr[e]) return Pr[e][t];
		const r = Wr(e);
		for (let n = 0; n < r.length; n++) {
			const o = Rr(r[n], t);
			if (o) return Mr(t, e, o);
		}
	};
let Dr;
const jr = Ft({});
function Nr(t) {
	return t in Dr;
}
function Rr(t, e) {
	return Nr(t)
		? (function (t, e) {
				if (e in t) return t[e];
				const r = e.split('.');
				let n = t;
				for (let o = 0; o < r.length; o++)
					if ('object' == typeof n) {
						if (o > 0) {
							const t = r.slice(o, r.length).join('.');
							if (t in n) {
								n = n[t];
								break;
							}
						}
						n = n[r[o]];
					} else n = void 0;
				return n;
		  })(Dr[t] || null, e)
		: null;
}
Gt([jr], ([t]) => Object.keys(t)), jr.subscribe((t) => (Dr = t));
const xr = {};
function kr(t) {
	return xr[t];
}
function Ir(t) {
	return (
		null != t &&
		Wr(t).some((t) => {
			var e;
			return null === (e = kr(t)) || void 0 === e ? void 0 : e.size;
		})
	);
}
function Cr(t, e) {
	return Promise.all(
		e.map((e) => {
			return (
				(n = e),
				xr[(r = t)].delete(n),
				0 === xr[r].size && delete xr[r],
				e().then((t) => t.default || t)
			);
			var r, n;
		})
	).then((e) =>
		(function (t, ...e) {
			delete Pr[t], jr.update((r) => ((r[t] = Qt.all([r[t] || {}, ...e])), r));
		})(t, ...e)
	);
}
const $r = {};
function Ur(t) {
	if (!Ir(t)) return t in $r ? $r[t] : Promise.resolve();
	const e = Wr(t)
		.map((t) => {
			const e = kr(t);
			return [t, e ? [...e] : []];
		})
		.filter(([, t]) => t.length > 0);
	return (
		($r[t] = Promise.all(e.map(([t, e]) => Cr(t, e))).then(() => {
			if (Ir(t)) return Ur(t);
			delete $r[t];
		})),
		$r[t]
	);
}
function Fr(t, e) {
	kr(t) || (xr[t] = new Set());
	const r = kr(t);
	kr(t).has(e) || (Nr(t) || jr.update((e) => ((e[t] = {}), e)), r.add(e));
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function Gr(t, e) {
	var r = {};
	for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
	if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
		var o = 0;
		for (n = Object.getOwnPropertySymbols(t); o < n.length; o++)
			e.indexOf(n[o]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(t, n[o]) &&
				(r[n[o]] = t[n[o]]);
	}
	return r;
}
const Yr = {
	fallbackLocale: null,
	loadingDelay: 200,
	formats: {
		number: {
			scientific: { notation: 'scientific' },
			engineering: { notation: 'engineering' },
			compactLong: { notation: 'compact', compactDisplay: 'long' },
			compactShort: { notation: 'compact', compactDisplay: 'short' }
		},
		date: {
			short: { month: 'numeric', day: 'numeric', year: '2-digit' },
			medium: { month: 'short', day: 'numeric', year: 'numeric' },
			long: { month: 'long', day: 'numeric', year: 'numeric' },
			full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }
		},
		time: {
			short: { hour: 'numeric', minute: 'numeric' },
			medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
			long: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
			full: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }
		}
	},
	warnOnMissingMessages: !0,
	ignoreTag: !0
};
function Hr() {
	return Yr;
}
function qr(t) {
	const { formats: e } = t,
		r = Gr(t, ['formats']),
		n = t.initialLocale || t.fallbackLocale;
	return (
		Object.assign(Yr, r, { initialLocale: n }),
		e &&
			('number' in e && Object.assign(Yr.formats.number, e.number),
			'date' in e && Object.assign(Yr.formats.date, e.date),
			'time' in e && Object.assign(Yr.formats.time, e.time)),
		Qr.set(n)
	);
}
const zr = Ft(!1);
let Vr;
const Xr = Ft(null);
function Br(t) {
	return t
		.split('-')
		.map((t, e, r) => r.slice(0, e + 1).join('-'))
		.reverse();
}
function Wr(t, e = Hr().fallbackLocale) {
	const r = Br(t);
	return e ? [...new Set([...r, ...Br(e)])] : r;
}
function Jr() {
	return null != Vr ? Vr : void 0;
}
Xr.subscribe((t) => {
	(Vr = null != t ? t : void 0),
		'undefined' != typeof window && null != t && document.documentElement.setAttribute('lang', t);
});
const Qr = Object.assign(Object.assign({}, Xr), {
		set: (t) => {
			if (
				t &&
				(function (t) {
					if (null == t) return;
					const e = Wr(t);
					for (let r = 0; r < e.length; r++) {
						const t = e[r];
						if (Nr(t)) return t;
					}
				})(t) &&
				Ir(t)
			) {
				const { loadingDelay: e } = Hr();
				let r;
				return (
					'undefined' != typeof window && null != Jr() && e
						? (r = window.setTimeout(() => zr.set(!0), e))
						: zr.set(!0),
					Ur(t)
						.then(() => {
							Xr.set(t);
						})
						.finally(() => {
							clearTimeout(r), zr.set(!1);
						})
				);
			}
			return Xr.set(t);
		}
	}),
	Zr = () =>
		'undefined' == typeof window
			? null
			: window.navigator.language || window.navigator.languages[0],
	Kr = (t) => {
		const e = Object.create(null);
		return (r) => {
			const n = JSON.stringify(r);
			return n in e ? e[n] : (e[n] = t(r));
		};
	},
	tn = (t, e) => {
		const { formats: r } = Hr();
		if (t in r && e in r[t]) return r[t][e];
		throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
	},
	en = Kr((t) => {
		var { locale: e, format: r } = t,
			n = Gr(t, ['locale', 'format']);
		if (null == e) throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
		return r && (n = tn('number', r)), new Intl.NumberFormat(e, n);
	}),
	rn = Kr((t) => {
		var { locale: e, format: r } = t,
			n = Gr(t, ['locale', 'format']);
		if (null == e) throw new Error('[svelte-i18n] A "locale" must be set to format dates');
		return (
			r ? (n = tn('date', r)) : 0 === Object.keys(n).length && (n = tn('date', 'short')),
			new Intl.DateTimeFormat(e, n)
		);
	}),
	nn = Kr((t) => {
		var { locale: e, format: r } = t,
			n = Gr(t, ['locale', 'format']);
		if (null == e) throw new Error('[svelte-i18n] A "locale" must be set to format time values');
		return (
			r ? (n = tn('time', r)) : 0 === Object.keys(n).length && (n = tn('time', 'short')),
			new Intl.DateTimeFormat(e, n)
		);
	}),
	on = Kr((t, e = Jr()) => new Or(t, e, Hr().formats, { ignoreTag: Hr().ignoreTag })),
	an = (t, e = {}) => {
		let r = e;
		'object' == typeof t && ((r = t), (t = r.id));
		const { values: n, locale: o = Jr(), default: i } = r;
		if (null == o)
			throw new Error(
				'[svelte-i18n] Cannot format a message without first setting the initial locale.'
			);
		let a = Lr(t, o);
		if (a) {
			if ('string' != typeof a)
				return (
					console.warn(
						`[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof a}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
					),
					a
				);
		} else
			Hr().warnOnMissingMessages &&
				console.warn(
					`[svelte-i18n] The message "${t}" was not found in "${Wr(o).join('", "')}".${
						Ir(Jr())
							? "\n\nNote: there are at least one loader still registered to this locale that wasn't executed."
							: ''
					}`
				),
				(a = i || t);
		if (!n) return a;
		let s = a;
		try {
			s = on(a, o).format(n);
		} catch (u) {
			console.warn(`[svelte-i18n] Message "${t}" has syntax error:`, u.message);
		}
		return s;
	},
	sn = (t, e) =>
		((t = {}) => {
			var { locale: e = Jr() } = t,
				r = Gr(t, ['locale']);
			return nn(Object.assign({ locale: e }, r));
		})(e).format(t),
	un = (t, e) =>
		((t = {}) => {
			var { locale: e = Jr() } = t,
				r = Gr(t, ['locale']);
			return rn(Object.assign({ locale: e }, r));
		})(e).format(t),
	cn = (t, e) =>
		((t = {}) => {
			var { locale: e = Jr() } = t,
				r = Gr(t, ['locale']);
			return en(Object.assign({ locale: e }, r));
		})(e).format(t),
	ln = (t, e = Jr()) => Lr(t, e),
	fn = Gt([Qr, jr], () => an);
function pn(t) {
	return Ur(t || Jr() || Hr().initialLocale);
}
Gt([Qr], () => sn), Gt([Qr], () => un), Gt([Qr], () => cn), Gt([Qr, jr], () => ln);
var hn = { exports: {} },
	yn = { exports: {} };
!(function (t) {
	function e(t) {
		if (t)
			return (function (t) {
				for (var r in e.prototype) t[r] = e.prototype[r];
				return t;
			})(t);
	}
	(yn.exports = e),
		(e.prototype.on = e.prototype.addEventListener =
			function (t, e) {
				return (
					(this._callbacks = this._callbacks || {}),
					(this._callbacks['$' + t] = this._callbacks['$' + t] || []).push(e),
					this
				);
			}),
		(e.prototype.once = function (t, e) {
			function r() {
				this.off(t, r), e.apply(this, arguments);
			}
			return (r.fn = e), this.on(t, r), this;
		}),
		(e.prototype.off =
			e.prototype.removeListener =
			e.prototype.removeAllListeners =
			e.prototype.removeEventListener =
				function (t, e) {
					if (((this._callbacks = this._callbacks || {}), 0 == arguments.length))
						return (this._callbacks = {}), this;
					var r,
						n = this._callbacks['$' + t];
					if (!n) return this;
					if (1 == arguments.length) return delete this._callbacks['$' + t], this;
					for (var o = 0; o < n.length; o++)
						if ((r = n[o]) === e || r.fn === e) {
							n.splice(o, 1);
							break;
						}
					return 0 === n.length && delete this._callbacks['$' + t], this;
				}),
		(e.prototype.emit = function (t) {
			this._callbacks = this._callbacks || {};
			for (
				var e = new Array(arguments.length - 1), r = this._callbacks['$' + t], n = 1;
				n < arguments.length;
				n++
			)
				e[n - 1] = arguments[n];
			if (r) {
				n = 0;
				for (var o = (r = r.slice(0)).length; n < o; ++n) r[n].apply(this, e);
			}
			return this;
		}),
		(e.prototype.listeners = function (t) {
			return (this._callbacks = this._callbacks || {}), this._callbacks['$' + t] || [];
		}),
		(e.prototype.hasListeners = function (t) {
			return !!this.listeners(t).length;
		});
})();
var dn = vn;
(vn.default = vn), (vn.stable = Sn), (vn.stableStringify = Sn);
var mn = [],
	gn = [];
function bn() {
	return { depthLimit: Number.MAX_SAFE_INTEGER, edgesLimit: Number.MAX_SAFE_INTEGER };
}
function vn(t, e, r, n) {
	var o;
	void 0 === n && (n = bn()), En(t, '', 0, [], void 0, 0, n);
	try {
		o = 0 === gn.length ? JSON.stringify(t, e, r) : JSON.stringify(t, An(e), r);
	} catch (ma) {
		return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
	} finally {
		for (; 0 !== mn.length; ) {
			var i = mn.pop();
			4 === i.length ? Object.defineProperty(i[0], i[1], i[3]) : (i[0][i[1]] = i[2]);
		}
	}
	return o;
}
function _n(t, e, r, n) {
	var o = Object.getOwnPropertyDescriptor(n, r);
	void 0 !== o.get
		? o.configurable
			? (Object.defineProperty(n, r, { value: t }), mn.push([n, r, e, o]))
			: gn.push([e, r, t])
		: ((n[r] = t), mn.push([n, r, e]));
}
function En(t, e, r, n, o, i, a) {
	var s;
	if (((i += 1), 'object' == typeof t && null !== t)) {
		for (s = 0; s < n.length; s++) if (n[s] === t) return void _n('[Circular]', t, e, o);
		if (void 0 !== a.depthLimit && i > a.depthLimit) return void _n('[...]', t, e, o);
		if (void 0 !== a.edgesLimit && r + 1 > a.edgesLimit) return void _n('[...]', t, e, o);
		if ((n.push(t), Array.isArray(t))) for (s = 0; s < t.length; s++) En(t[s], s, s, n, t, i, a);
		else {
			var u = Object.keys(t);
			for (s = 0; s < u.length; s++) {
				var c = u[s];
				En(t[c], c, s, n, t, i, a);
			}
		}
		n.pop();
	}
}
function wn(t, e) {
	return t < e ? -1 : t > e ? 1 : 0;
}
function Sn(t, e, r, n) {
	void 0 === n && (n = bn());
	var o,
		i = Tn(t, '', 0, [], void 0, 0, n) || t;
	try {
		o = 0 === gn.length ? JSON.stringify(i, e, r) : JSON.stringify(i, An(e), r);
	} catch (ma) {
		return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
	} finally {
		for (; 0 !== mn.length; ) {
			var a = mn.pop();
			4 === a.length ? Object.defineProperty(a[0], a[1], a[3]) : (a[0][a[1]] = a[2]);
		}
	}
	return o;
}
function Tn(t, e, r, n, o, i, a) {
	var s;
	if (((i += 1), 'object' == typeof t && null !== t)) {
		for (s = 0; s < n.length; s++) if (n[s] === t) return void _n('[Circular]', t, e, o);
		try {
			if ('function' == typeof t.toJSON) return;
		} catch (ma) {
			return;
		}
		if (void 0 !== a.depthLimit && i > a.depthLimit) return void _n('[...]', t, e, o);
		if (void 0 !== a.edgesLimit && r + 1 > a.edgesLimit) return void _n('[...]', t, e, o);
		if ((n.push(t), Array.isArray(t))) for (s = 0; s < t.length; s++) Tn(t[s], s, s, n, t, i, a);
		else {
			var u = {},
				c = Object.keys(t).sort(wn);
			for (s = 0; s < c.length; s++) {
				var l = c[s];
				Tn(t[l], l, s, n, t, i, a), (u[l] = t[l]);
			}
			if (void 0 === o) return u;
			mn.push([o, e, t]), (o[e] = u);
		}
		n.pop();
	}
}
function An(t) {
	return (
		(t =
			void 0 !== t
				? t
				: function (t, e) {
						return e;
				  }),
		function (e, r) {
			if (gn.length > 0)
				for (var n = 0; n < gn.length; n++) {
					var o = gn[n];
					if (o[1] === e && o[0] === r) {
						(r = o[2]), gn.splice(n, 1);
						break;
					}
				}
			return t.call(this, e, r);
		}
	);
}
var On = 'undefined' != typeof Symbol && Symbol,
	Pn = function () {
		if ('function' != typeof Symbol || 'function' != typeof Object.getOwnPropertySymbols) return !1;
		if ('symbol' == typeof Symbol.iterator) return !0;
		var t = {},
			e = Symbol('test'),
			r = Object(e);
		if ('string' == typeof e) return !1;
		if ('[object Symbol]' !== Object.prototype.toString.call(e)) return !1;
		if ('[object Symbol]' !== Object.prototype.toString.call(r)) return !1;
		for (e in ((t[e] = 42), t)) return !1;
		if ('function' == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
		if (
			'function' == typeof Object.getOwnPropertyNames &&
			0 !== Object.getOwnPropertyNames(t).length
		)
			return !1;
		var n = Object.getOwnPropertySymbols(t);
		if (1 !== n.length || n[0] !== e) return !1;
		if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
		if ('function' == typeof Object.getOwnPropertyDescriptor) {
			var o = Object.getOwnPropertyDescriptor(t, e);
			if (42 !== o.value || !0 !== o.enumerable) return !1;
		}
		return !0;
	},
	Mn = 'Function.prototype.bind called on incompatible ',
	Ln = Array.prototype.slice,
	Dn = Object.prototype.toString,
	jn = function (t) {
		var e = this;
		if ('function' != typeof e || '[object Function]' !== Dn.call(e)) throw new TypeError(Mn + e);
		for (
			var r,
				n = Ln.call(arguments, 1),
				o = function () {
					if (this instanceof r) {
						var o = e.apply(this, n.concat(Ln.call(arguments)));
						return Object(o) === o ? o : this;
					}
					return e.apply(t, n.concat(Ln.call(arguments)));
				},
				i = Math.max(0, e.length - n.length),
				a = [],
				s = 0;
			s < i;
			s++
		)
			a.push('$' + s);
		if (
			((r = Function(
				'binder',
				'return function (' + a.join(',') + '){ return binder.apply(this,arguments); }'
			)(o)),
			e.prototype)
		) {
			var u = function () {};
			(u.prototype = e.prototype), (r.prototype = new u()), (u.prototype = null);
		}
		return r;
	},
	Nn = Function.prototype.bind || jn,
	Rn = Nn.call(Function.call, Object.prototype.hasOwnProperty),
	xn = SyntaxError,
	kn = Function,
	In = TypeError,
	Cn = function (t) {
		try {
			return kn('"use strict"; return (' + t + ').constructor;')();
		} catch (ha) {}
	},
	$n = Object.getOwnPropertyDescriptor;
if ($n)
	try {
		$n({}, '');
	} catch (ha) {
		$n = null;
	}
var Un = function () {
		throw new In();
	},
	Fn = $n
		? (function () {
				try {
					return Un;
				} catch (t) {
					try {
						return $n(arguments, 'callee').get;
					} catch (e) {
						return Un;
					}
				}
		  })()
		: Un,
	Gn =
		'function' == typeof On &&
		'function' == typeof Symbol &&
		'symbol' == typeof On('foo') &&
		'symbol' == typeof Symbol('bar') &&
		Pn(),
	Yn =
		Object.getPrototypeOf ||
		function (t) {
			return t.__proto__;
		},
	Hn = {},
	qn = 'undefined' == typeof Uint8Array ? undefined : Yn(Uint8Array),
	zn = {
		'%AggregateError%': 'undefined' == typeof AggregateError ? undefined : AggregateError,
		'%Array%': Array,
		'%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? undefined : ArrayBuffer,
		'%ArrayIteratorPrototype%': Gn ? Yn([][Symbol.iterator]()) : undefined,
		'%AsyncFromSyncIteratorPrototype%': undefined,
		'%AsyncFunction%': Hn,
		'%AsyncGenerator%': Hn,
		'%AsyncGeneratorFunction%': Hn,
		'%AsyncIteratorPrototype%': Hn,
		'%Atomics%': 'undefined' == typeof Atomics ? undefined : Atomics,
		'%BigInt%': 'undefined' == typeof BigInt ? undefined : BigInt,
		'%Boolean%': Boolean,
		'%DataView%': 'undefined' == typeof DataView ? undefined : DataView,
		'%Date%': Date,
		'%decodeURI%': decodeURI,
		'%decodeURIComponent%': decodeURIComponent,
		'%encodeURI%': encodeURI,
		'%encodeURIComponent%': encodeURIComponent,
		'%Error%': Error,
		'%eval%': eval,
		'%EvalError%': EvalError,
		'%Float32Array%': 'undefined' == typeof Float32Array ? undefined : Float32Array,
		'%Float64Array%': 'undefined' == typeof Float64Array ? undefined : Float64Array,
		'%FinalizationRegistry%':
			'undefined' == typeof FinalizationRegistry ? undefined : FinalizationRegistry,
		'%Function%': kn,
		'%GeneratorFunction%': Hn,
		'%Int8Array%': 'undefined' == typeof Int8Array ? undefined : Int8Array,
		'%Int16Array%': 'undefined' == typeof Int16Array ? undefined : Int16Array,
		'%Int32Array%': 'undefined' == typeof Int32Array ? undefined : Int32Array,
		'%isFinite%': isFinite,
		'%isNaN%': isNaN,
		'%IteratorPrototype%': Gn ? Yn(Yn([][Symbol.iterator]())) : undefined,
		'%JSON%': 'object' == typeof JSON ? JSON : undefined,
		'%Map%': 'undefined' == typeof Map ? undefined : Map,
		'%MapIteratorPrototype%':
			'undefined' != typeof Map && Gn ? Yn(new Map()[Symbol.iterator]()) : undefined,
		'%Math%': Math,
		'%Number%': Number,
		'%Object%': Object,
		'%parseFloat%': parseFloat,
		'%parseInt%': parseInt,
		'%Promise%': 'undefined' == typeof Promise ? undefined : Promise,
		'%Proxy%': 'undefined' == typeof Proxy ? undefined : Proxy,
		'%RangeError%': RangeError,
		'%ReferenceError%': ReferenceError,
		'%Reflect%': 'undefined' == typeof Reflect ? undefined : Reflect,
		'%RegExp%': RegExp,
		'%Set%': 'undefined' == typeof Set ? undefined : Set,
		'%SetIteratorPrototype%':
			'undefined' != typeof Set && Gn ? Yn(new Set()[Symbol.iterator]()) : undefined,
		'%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? undefined : SharedArrayBuffer,
		'%String%': String,
		'%StringIteratorPrototype%': Gn ? Yn(''[Symbol.iterator]()) : undefined,
		'%Symbol%': Gn ? Symbol : undefined,
		'%SyntaxError%': xn,
		'%ThrowTypeError%': Fn,
		'%TypedArray%': qn,
		'%TypeError%': In,
		'%Uint8Array%': 'undefined' == typeof Uint8Array ? undefined : Uint8Array,
		'%Uint8ClampedArray%': 'undefined' == typeof Uint8ClampedArray ? undefined : Uint8ClampedArray,
		'%Uint16Array%': 'undefined' == typeof Uint16Array ? undefined : Uint16Array,
		'%Uint32Array%': 'undefined' == typeof Uint32Array ? undefined : Uint32Array,
		'%URIError%': URIError,
		'%WeakMap%': 'undefined' == typeof WeakMap ? undefined : WeakMap,
		'%WeakRef%': 'undefined' == typeof WeakRef ? undefined : WeakRef,
		'%WeakSet%': 'undefined' == typeof WeakSet ? undefined : WeakSet
	},
	Vn = function t(e) {
		var r;
		if ('%AsyncFunction%' === e) r = Cn('async function () {}');
		else if ('%GeneratorFunction%' === e) r = Cn('function* () {}');
		else if ('%AsyncGeneratorFunction%' === e) r = Cn('async function* () {}');
		else if ('%AsyncGenerator%' === e) {
			var n = t('%AsyncGeneratorFunction%');
			n && (r = n.prototype);
		} else if ('%AsyncIteratorPrototype%' === e) {
			var o = t('%AsyncGenerator%');
			o && (r = Yn(o.prototype));
		}
		return (zn[e] = r), r;
	},
	Xn = {
		'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
		'%ArrayPrototype%': ['Array', 'prototype'],
		'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
		'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
		'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
		'%ArrayProto_values%': ['Array', 'prototype', 'values'],
		'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
		'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
		'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
		'%BooleanPrototype%': ['Boolean', 'prototype'],
		'%DataViewPrototype%': ['DataView', 'prototype'],
		'%DatePrototype%': ['Date', 'prototype'],
		'%ErrorPrototype%': ['Error', 'prototype'],
		'%EvalErrorPrototype%': ['EvalError', 'prototype'],
		'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
		'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
		'%FunctionPrototype%': ['Function', 'prototype'],
		'%Generator%': ['GeneratorFunction', 'prototype'],
		'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
		'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
		'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
		'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
		'%JSONParse%': ['JSON', 'parse'],
		'%JSONStringify%': ['JSON', 'stringify'],
		'%MapPrototype%': ['Map', 'prototype'],
		'%NumberPrototype%': ['Number', 'prototype'],
		'%ObjectPrototype%': ['Object', 'prototype'],
		'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
		'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
		'%PromisePrototype%': ['Promise', 'prototype'],
		'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
		'%Promise_all%': ['Promise', 'all'],
		'%Promise_reject%': ['Promise', 'reject'],
		'%Promise_resolve%': ['Promise', 'resolve'],
		'%RangeErrorPrototype%': ['RangeError', 'prototype'],
		'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
		'%RegExpPrototype%': ['RegExp', 'prototype'],
		'%SetPrototype%': ['Set', 'prototype'],
		'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
		'%StringPrototype%': ['String', 'prototype'],
		'%SymbolPrototype%': ['Symbol', 'prototype'],
		'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
		'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
		'%TypeErrorPrototype%': ['TypeError', 'prototype'],
		'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
		'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
		'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
		'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
		'%URIErrorPrototype%': ['URIError', 'prototype'],
		'%WeakMapPrototype%': ['WeakMap', 'prototype'],
		'%WeakSetPrototype%': ['WeakSet', 'prototype']
	},
	Bn = Nn,
	Wn = Rn,
	Jn = Bn.call(Function.call, Array.prototype.concat),
	Qn = Bn.call(Function.apply, Array.prototype.splice),
	Zn = Bn.call(Function.call, String.prototype.replace),
	Kn = Bn.call(Function.call, String.prototype.slice),
	to =
		/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
	eo = /\\(\\)?/g,
	ro = function (t) {
		var e = Kn(t, 0, 1),
			r = Kn(t, -1);
		if ('%' === e && '%' !== r) throw new xn('invalid intrinsic syntax, expected closing `%`');
		if ('%' === r && '%' !== e) throw new xn('invalid intrinsic syntax, expected opening `%`');
		var n = [];
		return (
			Zn(t, to, function (t, e, r, o) {
				n[n.length] = r ? Zn(o, eo, '$1') : e || t;
			}),
			n
		);
	},
	no = function (t, e) {
		var r,
			n = t;
		if ((Wn(Xn, n) && (n = '%' + (r = Xn[n])[0] + '%'), Wn(zn, n))) {
			var o = zn[n];
			if ((o === Hn && (o = Vn(n)), void 0 === o && !e))
				throw new In('intrinsic ' + t + ' exists, but is not available. Please file an issue!');
			return { alias: r, name: n, value: o };
		}
		throw new xn('intrinsic ' + t + ' does not exist!');
	},
	oo = function (t, e) {
		if ('string' != typeof t || 0 === t.length)
			throw new In('intrinsic name must be a non-empty string');
		if (arguments.length > 1 && 'boolean' != typeof e)
			throw new In('"allowMissing" argument must be a boolean');
		var r = ro(t),
			n = r.length > 0 ? r[0] : '',
			o = no('%' + n + '%', e),
			i = o.name,
			a = o.value,
			s = !1,
			u = o.alias;
		u && ((n = u[0]), Qn(r, Jn([0, 1], u)));
		for (var c = 1, l = !0; c < r.length; c += 1) {
			var f = r[c],
				p = Kn(f, 0, 1),
				h = Kn(f, -1);
			if (('"' === p || "'" === p || '`' === p || '"' === h || "'" === h || '`' === h) && p !== h)
				throw new xn('property names with quotes must have matching quotes');
			if ((('constructor' !== f && l) || (s = !0), Wn(zn, (i = '%' + (n += '.' + f) + '%'))))
				a = zn[i];
			else if (null != a) {
				if (!(f in a)) {
					if (!e)
						throw new In('base intrinsic for ' + t + ' exists, but the property is not available.');
					return;
				}
				if ($n && c + 1 >= r.length) {
					var y = $n(a, f);
					a = (l = !!y) && 'get' in y && !('originalValue' in y.get) ? y.get : a[f];
				} else (l = Wn(a, f)), (a = a[f]);
				l && !s && (zn[i] = a);
			}
		}
		return a;
	},
	io = { exports: {} };
!(function (t) {
	var e = Nn,
		r = oo,
		n = r('%Function.prototype.apply%'),
		o = r('%Function.prototype.call%'),
		i = r('%Reflect.apply%', !0) || e.call(o, n),
		a = r('%Object.getOwnPropertyDescriptor%', !0),
		s = r('%Object.defineProperty%', !0),
		u = r('%Math.max%');
	if (s)
		try {
			s({}, 'a', { value: 1 });
		} catch (ha) {
			s = null;
		}
	t.exports = function (t) {
		var r = i(e, o, arguments);
		if (a && s) {
			var n = a(r, 'length');
			n.configurable && s(r, 'length', { value: 1 + u(0, t.length - (arguments.length - 1)) });
		}
		return r;
	};
	var c = function () {
		return i(e, n, arguments);
	};
	s ? s(t.exports, 'apply', { value: c }) : (t.exports.apply = c);
})(io);
var ao = oo,
	so = io.exports,
	uo = so(ao('String.prototype.indexOf')),
	co = Yt(Object.freeze({ __proto__: null, [Symbol.toStringTag]: 'Module', default: {} })),
	lo = 'function' == typeof Map && Map.prototype,
	fo =
		Object.getOwnPropertyDescriptor && lo
			? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
			: null,
	po = lo && fo && 'function' == typeof fo.get ? fo.get : null,
	ho = lo && Map.prototype.forEach,
	yo = 'function' == typeof Set && Set.prototype,
	mo =
		Object.getOwnPropertyDescriptor && yo
			? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
			: null,
	go = yo && mo && 'function' == typeof mo.get ? mo.get : null,
	bo = yo && Set.prototype.forEach,
	vo = 'function' == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
	_o = 'function' == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
	Eo = 'function' == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
	wo = Boolean.prototype.valueOf,
	So = Object.prototype.toString,
	To = Function.prototype.toString,
	Ao = String.prototype.match,
	Oo = 'function' == typeof BigInt ? BigInt.prototype.valueOf : null,
	Po = Object.getOwnPropertySymbols,
	Mo =
		'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
			? Symbol.prototype.toString
			: null,
	Lo = 'function' == typeof Symbol && 'object' == typeof Symbol.iterator,
	Do = Object.prototype.propertyIsEnumerable,
	jo =
		('function' == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
		([].__proto__ === Array.prototype
			? function (t) {
					return t.__proto__;
			  }
			: null),
	No = co.custom,
	Ro = No && $o(No) ? No : null,
	xo = 'function' == typeof Symbol && void 0 !== Symbol.toStringTag ? Symbol.toStringTag : null;
function ko(t, e, r) {
	var n = 'double' === (r.quoteStyle || e) ? '"' : "'";
	return n + t + n;
}
function Io(t) {
	return String(t).replace(/"/g, '&quot;');
}
function Co(t) {
	return !('[object Array]' !== Go(t) || (xo && 'object' == typeof t && xo in t));
}
function $o(t) {
	if (Lo) return t && 'object' == typeof t && t instanceof Symbol;
	if ('symbol' == typeof t) return !0;
	if (!t || 'object' != typeof t || !Mo) return !1;
	try {
		return Mo.call(t), !0;
	} catch (ha) {}
	return !1;
}
var Uo =
	Object.prototype.hasOwnProperty ||
	function (t) {
		return t in this;
	};
function Fo(t, e) {
	return Uo.call(t, e);
}
function Go(t) {
	return So.call(t);
}
function Yo(t, e) {
	if (t.indexOf) return t.indexOf(e);
	for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
	return -1;
}
function Ho(t, e) {
	if (t.length > e.maxStringLength) {
		var r = t.length - e.maxStringLength,
			n = '... ' + r + ' more character' + (r > 1 ? 's' : '');
		return Ho(t.slice(0, e.maxStringLength), e) + n;
	}
	return ko(t.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, qo), 'single', e);
}
function qo(t) {
	var e = t.charCodeAt(0),
		r = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[e];
	return r ? '\\' + r : '\\x' + (e < 16 ? '0' : '') + e.toString(16).toUpperCase();
}
function zo(t) {
	return 'Object(' + t + ')';
}
function Vo(t) {
	return t + ' { ? }';
}
function Xo(t, e, r, n) {
	return t + ' (' + e + ') {' + (n ? Bo(r, n) : r.join(', ')) + '}';
}
function Bo(t, e) {
	if (0 === t.length) return '';
	var r = '\n' + e.prev + e.base;
	return r + t.join(',' + r) + '\n' + e.prev;
}
function Wo(t, e) {
	var r = Co(t),
		n = [];
	if (r) {
		n.length = t.length;
		for (var o = 0; o < t.length; o++) n[o] = Fo(t, o) ? e(t[o], t) : '';
	}
	var i,
		a = 'function' == typeof Po ? Po(t) : [];
	if (Lo) {
		i = {};
		for (var s = 0; s < a.length; s++) i['$' + a[s]] = a[s];
	}
	for (var u in t)
		Fo(t, u) &&
			((r && String(Number(u)) === u && u < t.length) ||
				(Lo && i['$' + u] instanceof Symbol) ||
				(/[^\w$]/.test(u) ? n.push(e(u, t) + ': ' + e(t[u], t)) : n.push(u + ': ' + e(t[u], t))));
	if ('function' == typeof Po)
		for (var c = 0; c < a.length; c++)
			Do.call(t, a[c]) && n.push('[' + e(a[c]) + ']: ' + e(t[a[c]], t));
	return n;
}
var Jo = oo,
	Qo = function (t, e) {
		var r = ao(t, !!e);
		return 'function' == typeof r && uo(t, '.prototype.') > -1 ? so(r) : r;
	},
	Zo = function t(e, r, n, o) {
		var i = r || {};
		if (Fo(i, 'quoteStyle') && 'single' !== i.quoteStyle && 'double' !== i.quoteStyle)
			throw new TypeError('option "quoteStyle" must be "single" or "double"');
		if (
			Fo(i, 'maxStringLength') &&
			('number' == typeof i.maxStringLength
				? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0
				: null !== i.maxStringLength)
		)
			throw new TypeError(
				'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
			);
		var a = !Fo(i, 'customInspect') || i.customInspect;
		if ('boolean' != typeof a && 'symbol' !== a)
			throw new TypeError(
				'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
			);
		if (
			Fo(i, 'indent') &&
			null !== i.indent &&
			'\t' !== i.indent &&
			!(parseInt(i.indent, 10) === i.indent && i.indent > 0)
		)
			throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
		if (void 0 === e) return 'undefined';
		if (null === e) return 'null';
		if ('boolean' == typeof e) return e ? 'true' : 'false';
		if ('string' == typeof e) return Ho(e, i);
		if ('number' == typeof e) return 0 === e ? (1 / 0 / e > 0 ? '0' : '-0') : String(e);
		if ('bigint' == typeof e) return String(e) + 'n';
		var s = void 0 === i.depth ? 5 : i.depth;
		if ((void 0 === n && (n = 0), n >= s && s > 0 && 'object' == typeof e))
			return Co(e) ? '[Array]' : '[Object]';
		var u = (function (t, e) {
			var r;
			if ('\t' === t.indent) r = '\t';
			else {
				if (!('number' == typeof t.indent && t.indent > 0)) return null;
				r = Array(t.indent + 1).join(' ');
			}
			return { base: r, prev: Array(e + 1).join(r) };
		})(i, n);
		if (void 0 === o) o = [];
		else if (Yo(o, e) >= 0) return '[Circular]';
		function c(e, r, a) {
			if ((r && (o = o.slice()).push(r), a)) {
				var s = { depth: i.depth };
				return Fo(i, 'quoteStyle') && (s.quoteStyle = i.quoteStyle), t(e, s, n + 1, o);
			}
			return t(e, i, n + 1, o);
		}
		if ('function' == typeof e) {
			var l = (function (t) {
					if (t.name) return t.name;
					var e = Ao.call(To.call(t), /^function\s*([\w$]+)/);
					if (e) return e[1];
					return null;
				})(e),
				f = Wo(e, c);
			return (
				'[Function' +
				(l ? ': ' + l : ' (anonymous)') +
				']' +
				(f.length > 0 ? ' { ' + f.join(', ') + ' }' : '')
			);
		}
		if ($o(e)) {
			var p = Lo ? String(e).replace(/^(Symbol\(.*\))_[^)]*$/, '$1') : Mo.call(e);
			return 'object' != typeof e || Lo ? p : zo(p);
		}
		if (
			(function (t) {
				if (!t || 'object' != typeof t) return !1;
				if ('undefined' != typeof HTMLElement && t instanceof HTMLElement) return !0;
				return 'string' == typeof t.nodeName && 'function' == typeof t.getAttribute;
			})(e)
		) {
			for (
				var h = '<' + String(e.nodeName).toLowerCase(), y = e.attributes || [], d = 0;
				d < y.length;
				d++
			)
				h += ' ' + y[d].name + '=' + ko(Io(y[d].value), 'double', i);
			return (
				(h += '>'),
				e.childNodes && e.childNodes.length && (h += '...'),
				(h += '</' + String(e.nodeName).toLowerCase() + '>')
			);
		}
		if (Co(e)) {
			if (0 === e.length) return '[]';
			var m = Wo(e, c);
			return u &&
				!(function (t) {
					for (var e = 0; e < t.length; e++) if (Yo(t[e], '\n') >= 0) return !1;
					return !0;
				})(m)
				? '[' + Bo(m, u) + ']'
				: '[ ' + m.join(', ') + ' ]';
		}
		if (
			(function (t) {
				return !('[object Error]' !== Go(t) || (xo && 'object' == typeof t && xo in t));
			})(e)
		) {
			var g = Wo(e, c);
			return 0 === g.length
				? '[' + String(e) + ']'
				: '{ [' + String(e) + '] ' + g.join(', ') + ' }';
		}
		if ('object' == typeof e && a) {
			if (Ro && 'function' == typeof e[Ro]) return e[Ro]();
			if ('symbol' !== a && 'function' == typeof e.inspect) return e.inspect();
		}
		if (
			(function (t) {
				if (!po || !t || 'object' != typeof t) return !1;
				try {
					po.call(t);
					try {
						go.call(t);
					} catch (h) {
						return !0;
					}
					return t instanceof Map;
				} catch (ha) {}
				return !1;
			})(e)
		) {
			var b = [];
			return (
				ho.call(e, function (t, r) {
					b.push(c(r, e, !0) + ' => ' + c(t, e));
				}),
				Xo('Map', po.call(e), b, u)
			);
		}
		if (
			(function (t) {
				if (!go || !t || 'object' != typeof t) return !1;
				try {
					go.call(t);
					try {
						po.call(t);
					} catch (e) {
						return !0;
					}
					return t instanceof Set;
				} catch (ha) {}
				return !1;
			})(e)
		) {
			var v = [];
			return (
				bo.call(e, function (t) {
					v.push(c(t, e));
				}),
				Xo('Set', go.call(e), v, u)
			);
		}
		if (
			(function (t) {
				if (!vo || !t || 'object' != typeof t) return !1;
				try {
					vo.call(t, vo);
					try {
						_o.call(t, _o);
					} catch (h) {
						return !0;
					}
					return t instanceof WeakMap;
				} catch (ha) {}
				return !1;
			})(e)
		)
			return Vo('WeakMap');
		if (
			(function (t) {
				if (!_o || !t || 'object' != typeof t) return !1;
				try {
					_o.call(t, _o);
					try {
						vo.call(t, vo);
					} catch (h) {
						return !0;
					}
					return t instanceof WeakSet;
				} catch (ha) {}
				return !1;
			})(e)
		)
			return Vo('WeakSet');
		if (
			(function (t) {
				if (!Eo || !t || 'object' != typeof t) return !1;
				try {
					return Eo.call(t), !0;
				} catch (ha) {}
				return !1;
			})(e)
		)
			return Vo('WeakRef');
		if (
			(function (t) {
				return !('[object Number]' !== Go(t) || (xo && 'object' == typeof t && xo in t));
			})(e)
		)
			return zo(c(Number(e)));
		if (
			(function (t) {
				if (!t || 'object' != typeof t || !Oo) return !1;
				try {
					return Oo.call(t), !0;
				} catch (ha) {}
				return !1;
			})(e)
		)
			return zo(c(Oo.call(e)));
		if (
			(function (t) {
				return !('[object Boolean]' !== Go(t) || (xo && 'object' == typeof t && xo in t));
			})(e)
		)
			return zo(wo.call(e));
		if (
			(function (t) {
				return !('[object String]' !== Go(t) || (xo && 'object' == typeof t && xo in t));
			})(e)
		)
			return zo(c(String(e)));
		if (
			!(function (t) {
				return !('[object Date]' !== Go(t) || (xo && 'object' == typeof t && xo in t));
			})(e) &&
			!(function (t) {
				return !('[object RegExp]' !== Go(t) || (xo && 'object' == typeof t && xo in t));
			})(e)
		) {
			var _ = Wo(e, c),
				E = jo ? jo(e) === Object.prototype : e instanceof Object || e.constructor === Object,
				w = e instanceof Object ? '' : 'null prototype',
				S = !E && xo && Object(e) === e && xo in e ? Go(e).slice(8, -1) : w ? 'Object' : '',
				T =
					(E || 'function' != typeof e.constructor
						? ''
						: e.constructor.name
						? e.constructor.name + ' '
						: '') + (S || w ? '[' + [].concat(S || [], w || []).join(': ') + '] ' : '');
			return 0 === _.length
				? T + '{}'
				: u
				? T + '{' + Bo(_, u) + '}'
				: T + '{ ' + _.join(', ') + ' }';
		}
		return String(e);
	},
	Ko = Jo('%TypeError%'),
	ti = Jo('%WeakMap%', !0),
	ei = Jo('%Map%', !0),
	ri = Qo('WeakMap.prototype.get', !0),
	ni = Qo('WeakMap.prototype.set', !0),
	oi = Qo('WeakMap.prototype.has', !0),
	ii = Qo('Map.prototype.get', !0),
	ai = Qo('Map.prototype.set', !0),
	si = Qo('Map.prototype.has', !0),
	ui = function (t, e) {
		for (var r, n = t; null !== (r = n.next); n = r)
			if (r.key === e) return (n.next = r.next), (r.next = t.next), (t.next = r), r;
	},
	ci = String.prototype.replace,
	li = /%20/g,
	fi = 'RFC3986',
	pi = {
		default: fi,
		formatters: {
			RFC1738: function (t) {
				return ci.call(t, li, '+');
			},
			RFC3986: function (t) {
				return String(t);
			}
		},
		RFC1738: 'RFC1738',
		RFC3986: fi
	},
	hi = pi,
	yi = Object.prototype.hasOwnProperty,
	di = Array.isArray,
	mi = (function () {
		for (var t = [], e = 0; e < 256; ++e)
			t.push('%' + ((e < 16 ? '0' : '') + e.toString(16)).toUpperCase());
		return t;
	})(),
	gi = function (t, e) {
		for (var r = e && e.plainObjects ? Object.create(null) : {}, n = 0; n < t.length; ++n)
			void 0 !== t[n] && (r[n] = t[n]);
		return r;
	},
	bi = {
		arrayToObject: gi,
		assign: function (t, e) {
			return Object.keys(e).reduce(function (t, r) {
				return (t[r] = e[r]), t;
			}, t);
		},
		combine: function (t, e) {
			return [].concat(t, e);
		},
		compact: function (t) {
			for (var e = [{ obj: { o: t }, prop: 'o' }], r = [], n = 0; n < e.length; ++n)
				for (var o = e[n], i = o.obj[o.prop], a = Object.keys(i), s = 0; s < a.length; ++s) {
					var u = a[s],
						c = i[u];
					'object' == typeof c &&
						null !== c &&
						-1 === r.indexOf(c) &&
						(e.push({ obj: i, prop: u }), r.push(c));
				}
			return (
				(function (t) {
					for (; t.length > 1; ) {
						var e = t.pop(),
							r = e.obj[e.prop];
						if (di(r)) {
							for (var n = [], o = 0; o < r.length; ++o) void 0 !== r[o] && n.push(r[o]);
							e.obj[e.prop] = n;
						}
					}
				})(e),
				t
			);
		},
		decode: function (t, e, r) {
			var n = t.replace(/\+/g, ' ');
			if ('iso-8859-1' === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
			try {
				return decodeURIComponent(n);
			} catch (ha) {
				return n;
			}
		},
		encode: function (t, e, r, n, o) {
			if (0 === t.length) return t;
			var i = t;
			if (
				('symbol' == typeof t
					? (i = Symbol.prototype.toString.call(t))
					: 'string' != typeof t && (i = String(t)),
				'iso-8859-1' === r)
			)
				return escape(i).replace(/%u[0-9a-f]{4}/gi, function (t) {
					return '%26%23' + parseInt(t.slice(2), 16) + '%3B';
				});
			for (var a = '', s = 0; s < i.length; ++s) {
				var u = i.charCodeAt(s);
				45 === u ||
				46 === u ||
				95 === u ||
				126 === u ||
				(u >= 48 && u <= 57) ||
				(u >= 65 && u <= 90) ||
				(u >= 97 && u <= 122) ||
				(o === hi.RFC1738 && (40 === u || 41 === u))
					? (a += i.charAt(s))
					: u < 128
					? (a += mi[u])
					: u < 2048
					? (a += mi[192 | (u >> 6)] + mi[128 | (63 & u)])
					: u < 55296 || u >= 57344
					? (a += mi[224 | (u >> 12)] + mi[128 | ((u >> 6) & 63)] + mi[128 | (63 & u)])
					: ((s += 1),
					  (u = 65536 + (((1023 & u) << 10) | (1023 & i.charCodeAt(s)))),
					  (a +=
							mi[240 | (u >> 18)] +
							mi[128 | ((u >> 12) & 63)] +
							mi[128 | ((u >> 6) & 63)] +
							mi[128 | (63 & u)]));
			}
			return a;
		},
		isBuffer: function (t) {
			return (
				!(!t || 'object' != typeof t) &&
				!!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
			);
		},
		isRegExp: function (t) {
			return '[object RegExp]' === Object.prototype.toString.call(t);
		},
		maybeMap: function (t, e) {
			if (di(t)) {
				for (var r = [], n = 0; n < t.length; n += 1) r.push(e(t[n]));
				return r;
			}
			return e(t);
		},
		merge: function t(e, r, n) {
			if (!r) return e;
			if ('object' != typeof r) {
				if (di(e)) e.push(r);
				else {
					if (!e || 'object' != typeof e) return [e, r];
					((n && (n.plainObjects || n.allowPrototypes)) || !yi.call(Object.prototype, r)) &&
						(e[r] = !0);
				}
				return e;
			}
			if (!e || 'object' != typeof e) return [e].concat(r);
			var o = e;
			return (
				di(e) && !di(r) && (o = gi(e, n)),
				di(e) && di(r)
					? (r.forEach(function (r, o) {
							if (yi.call(e, o)) {
								var i = e[o];
								i && 'object' == typeof i && r && 'object' == typeof r
									? (e[o] = t(i, r, n))
									: e.push(r);
							} else e[o] = r;
					  }),
					  e)
					: Object.keys(r).reduce(function (e, o) {
							var i = r[o];
							return yi.call(e, o) ? (e[o] = t(e[o], i, n)) : (e[o] = i), e;
					  }, o)
			);
		}
	},
	vi = function () {
		var t,
			e,
			r,
			n = {
				assert: function (t) {
					if (!n.has(t)) throw new Ko('Side channel does not contain ' + Zo(t));
				},
				get: function (n) {
					if (ti && n && ('object' == typeof n || 'function' == typeof n)) {
						if (t) return ri(t, n);
					} else if (ei) {
						if (e) return ii(e, n);
					} else if (r)
						return (function (t, e) {
							var r = ui(t, e);
							return r && r.value;
						})(r, n);
				},
				has: function (n) {
					if (ti && n && ('object' == typeof n || 'function' == typeof n)) {
						if (t) return oi(t, n);
					} else if (ei) {
						if (e) return si(e, n);
					} else if (r)
						return (function (t, e) {
							return !!ui(t, e);
						})(r, n);
					return !1;
				},
				set: function (n, o) {
					ti && n && ('object' == typeof n || 'function' == typeof n)
						? (t || (t = new ti()), ni(t, n, o))
						: ei
						? (e || (e = new ei()), ai(e, n, o))
						: (r || (r = { key: {}, next: null }),
						  (function (t, e, r) {
								var n = ui(t, e);
								n ? (n.value = r) : (t.next = { key: e, next: t.next, value: r });
						  })(r, n, o));
				}
			};
		return n;
	},
	_i = bi,
	Ei = pi,
	wi = Object.prototype.hasOwnProperty,
	Si = {
		brackets: function (t) {
			return t + '[]';
		},
		comma: 'comma',
		indices: function (t, e) {
			return t + '[' + e + ']';
		},
		repeat: function (t) {
			return t;
		}
	},
	Ti = Array.isArray,
	Ai = Array.prototype.push,
	Oi = function (t, e) {
		Ai.apply(t, Ti(e) ? e : [e]);
	},
	Pi = Date.prototype.toISOString,
	Mi = Ei.default,
	Li = {
		addQueryPrefix: !1,
		allowDots: !1,
		charset: 'utf-8',
		charsetSentinel: !1,
		delimiter: '&',
		encode: !0,
		encoder: _i.encode,
		encodeValuesOnly: !1,
		format: Mi,
		formatter: Ei.formatters[Mi],
		indices: !1,
		serializeDate: function (t) {
			return Pi.call(t);
		},
		skipNulls: !1,
		strictNullHandling: !1
	},
	Di = function t(e, r, n, o, i, a, s, u, c, l, f, p, h, y, d) {
		var m,
			g = e;
		if (d.has(e)) throw new RangeError('Cyclic object value');
		if (
			('function' == typeof s
				? (g = s(r, g))
				: g instanceof Date
				? (g = l(g))
				: 'comma' === n &&
				  Ti(g) &&
				  (g = _i.maybeMap(g, function (t) {
						return t instanceof Date ? l(t) : t;
				  })),
			null === g)
		) {
			if (o) return a && !h ? a(r, Li.encoder, y, 'key', f) : r;
			g = '';
		}
		if (
			'string' == typeof (m = g) ||
			'number' == typeof m ||
			'boolean' == typeof m ||
			'symbol' == typeof m ||
			'bigint' == typeof m ||
			_i.isBuffer(g)
		)
			return a
				? [p(h ? r : a(r, Li.encoder, y, 'key', f)) + '=' + p(a(g, Li.encoder, y, 'value', f))]
				: [p(r) + '=' + p(String(g))];
		var b,
			v = [];
		if (void 0 === g) return v;
		if ('comma' === n && Ti(g)) b = [{ value: g.length > 0 ? g.join(',') || null : void 0 }];
		else if (Ti(s)) b = s;
		else {
			var _ = Object.keys(g);
			b = u ? _.sort(u) : _;
		}
		for (var E = 0; E < b.length; ++E) {
			var w = b[E],
				S = 'object' == typeof w && void 0 !== w.value ? w.value : g[w];
			if (!i || null !== S) {
				var T = Ti(g) ? ('function' == typeof n ? n(r, w) : r) : r + (c ? '.' + w : '[' + w + ']');
				d.set(e, !0);
				var A = vi();
				Oi(v, t(S, T, n, o, i, a, s, u, c, l, f, p, h, y, A));
			}
		}
		return v;
	},
	ji = bi,
	Ni = Object.prototype.hasOwnProperty,
	Ri = Array.isArray,
	xi = {
		allowDots: !1,
		allowPrototypes: !1,
		allowSparse: !1,
		arrayLimit: 20,
		charset: 'utf-8',
		charsetSentinel: !1,
		comma: !1,
		decoder: ji.decode,
		delimiter: '&',
		depth: 5,
		ignoreQueryPrefix: !1,
		interpretNumericEntities: !1,
		parameterLimit: 1e3,
		parseArrays: !0,
		plainObjects: !1,
		strictNullHandling: !1
	},
	ki = function (t) {
		return t.replace(/&#(\d+);/g, function (t, e) {
			return String.fromCharCode(parseInt(e, 10));
		});
	},
	Ii = function (t, e) {
		return t && 'string' == typeof t && e.comma && t.indexOf(',') > -1 ? t.split(',') : t;
	},
	Ci = function (t, e, r, n) {
		if (t) {
			var o = r.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t,
				i = /(\[[^[\]]*])/g,
				a = r.depth > 0 && /(\[[^[\]]*])/.exec(o),
				s = a ? o.slice(0, a.index) : o,
				u = [];
			if (s) {
				if (!r.plainObjects && Ni.call(Object.prototype, s) && !r.allowPrototypes) return;
				u.push(s);
			}
			for (var c = 0; r.depth > 0 && null !== (a = i.exec(o)) && c < r.depth; ) {
				if (
					((c += 1),
					!r.plainObjects && Ni.call(Object.prototype, a[1].slice(1, -1)) && !r.allowPrototypes)
				)
					return;
				u.push(a[1]);
			}
			return (
				a && u.push('[' + o.slice(a.index) + ']'),
				(function (t, e, r, n) {
					for (var o = n ? e : Ii(e, r), i = t.length - 1; i >= 0; --i) {
						var a,
							s = t[i];
						if ('[]' === s && r.parseArrays) a = [].concat(o);
						else {
							a = r.plainObjects ? Object.create(null) : {};
							var u = '[' === s.charAt(0) && ']' === s.charAt(s.length - 1) ? s.slice(1, -1) : s,
								c = parseInt(u, 10);
							r.parseArrays || '' !== u
								? !isNaN(c) &&
								  s !== u &&
								  String(c) === u &&
								  c >= 0 &&
								  r.parseArrays &&
								  c <= r.arrayLimit
									? ((a = [])[c] = o)
									: (a[u] = o)
								: (a = { 0: o });
						}
						o = a;
					}
					return o;
				})(u, e, r, n)
			);
		}
	},
	$i = {
		formats: pi,
		parse: function (t, e) {
			var r = (function (t) {
				if (!t) return xi;
				if (null !== t.decoder && void 0 !== t.decoder && 'function' != typeof t.decoder)
					throw new TypeError('Decoder has to be a function.');
				if (void 0 !== t.charset && 'utf-8' !== t.charset && 'iso-8859-1' !== t.charset)
					throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
				var e = void 0 === t.charset ? xi.charset : t.charset;
				return {
					allowDots: void 0 === t.allowDots ? xi.allowDots : !!t.allowDots,
					allowPrototypes:
						'boolean' == typeof t.allowPrototypes ? t.allowPrototypes : xi.allowPrototypes,
					allowSparse: 'boolean' == typeof t.allowSparse ? t.allowSparse : xi.allowSparse,
					arrayLimit: 'number' == typeof t.arrayLimit ? t.arrayLimit : xi.arrayLimit,
					charset: e,
					charsetSentinel:
						'boolean' == typeof t.charsetSentinel ? t.charsetSentinel : xi.charsetSentinel,
					comma: 'boolean' == typeof t.comma ? t.comma : xi.comma,
					decoder: 'function' == typeof t.decoder ? t.decoder : xi.decoder,
					delimiter:
						'string' == typeof t.delimiter || ji.isRegExp(t.delimiter) ? t.delimiter : xi.delimiter,
					depth: 'number' == typeof t.depth || !1 === t.depth ? +t.depth : xi.depth,
					ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
					interpretNumericEntities:
						'boolean' == typeof t.interpretNumericEntities
							? t.interpretNumericEntities
							: xi.interpretNumericEntities,
					parameterLimit:
						'number' == typeof t.parameterLimit ? t.parameterLimit : xi.parameterLimit,
					parseArrays: !1 !== t.parseArrays,
					plainObjects: 'boolean' == typeof t.plainObjects ? t.plainObjects : xi.plainObjects,
					strictNullHandling:
						'boolean' == typeof t.strictNullHandling ? t.strictNullHandling : xi.strictNullHandling
				};
			})(e);
			if ('' === t || null == t) return r.plainObjects ? Object.create(null) : {};
			for (
				var n =
						'string' == typeof t
							? (function (t, e) {
									var r,
										n = {},
										o = e.ignoreQueryPrefix ? t.replace(/^\?/, '') : t,
										i = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit,
										a = o.split(e.delimiter, i),
										s = -1,
										u = e.charset;
									if (e.charsetSentinel)
										for (r = 0; r < a.length; ++r)
											0 === a[r].indexOf('utf8=') &&
												('utf8=%E2%9C%93' === a[r]
													? (u = 'utf-8')
													: 'utf8=%26%2310003%3B' === a[r] && (u = 'iso-8859-1'),
												(s = r),
												(r = a.length));
									for (r = 0; r < a.length; ++r)
										if (r !== s) {
											var c,
												l,
												f = a[r],
												p = f.indexOf(']='),
												h = -1 === p ? f.indexOf('=') : p + 1;
											-1 === h
												? ((c = e.decoder(f, xi.decoder, u, 'key')),
												  (l = e.strictNullHandling ? null : ''))
												: ((c = e.decoder(f.slice(0, h), xi.decoder, u, 'key')),
												  (l = ji.maybeMap(Ii(f.slice(h + 1), e), function (t) {
														return e.decoder(t, xi.decoder, u, 'value');
												  }))),
												l && e.interpretNumericEntities && 'iso-8859-1' === u && (l = ki(l)),
												f.indexOf('[]=') > -1 && (l = Ri(l) ? [l] : l),
												Ni.call(n, c) ? (n[c] = ji.combine(n[c], l)) : (n[c] = l);
										}
									return n;
							  })(t, r)
							: t,
					o = r.plainObjects ? Object.create(null) : {},
					i = Object.keys(n),
					a = 0;
				a < i.length;
				++a
			) {
				var s = i[a],
					u = Ci(s, n[s], r, 'string' == typeof t);
				o = ji.merge(o, u, r);
			}
			return !0 === r.allowSparse ? o : ji.compact(o);
		},
		stringify: function (t, e) {
			var r,
				n = t,
				o = (function (t) {
					if (!t) return Li;
					if (null !== t.encoder && void 0 !== t.encoder && 'function' != typeof t.encoder)
						throw new TypeError('Encoder has to be a function.');
					var e = t.charset || Li.charset;
					if (void 0 !== t.charset && 'utf-8' !== t.charset && 'iso-8859-1' !== t.charset)
						throw new TypeError(
							'The charset option must be either utf-8, iso-8859-1, or undefined'
						);
					var r = Ei.default;
					if (void 0 !== t.format) {
						if (!wi.call(Ei.formatters, t.format))
							throw new TypeError('Unknown format option provided.');
						r = t.format;
					}
					var n = Ei.formatters[r],
						o = Li.filter;
					return (
						('function' == typeof t.filter || Ti(t.filter)) && (o = t.filter),
						{
							addQueryPrefix:
								'boolean' == typeof t.addQueryPrefix ? t.addQueryPrefix : Li.addQueryPrefix,
							allowDots: void 0 === t.allowDots ? Li.allowDots : !!t.allowDots,
							charset: e,
							charsetSentinel:
								'boolean' == typeof t.charsetSentinel ? t.charsetSentinel : Li.charsetSentinel,
							delimiter: void 0 === t.delimiter ? Li.delimiter : t.delimiter,
							encode: 'boolean' == typeof t.encode ? t.encode : Li.encode,
							encoder: 'function' == typeof t.encoder ? t.encoder : Li.encoder,
							encodeValuesOnly:
								'boolean' == typeof t.encodeValuesOnly ? t.encodeValuesOnly : Li.encodeValuesOnly,
							filter: o,
							format: r,
							formatter: n,
							serializeDate:
								'function' == typeof t.serializeDate ? t.serializeDate : Li.serializeDate,
							skipNulls: 'boolean' == typeof t.skipNulls ? t.skipNulls : Li.skipNulls,
							sort: 'function' == typeof t.sort ? t.sort : null,
							strictNullHandling:
								'boolean' == typeof t.strictNullHandling
									? t.strictNullHandling
									: Li.strictNullHandling
						}
					);
				})(e);
			'function' == typeof o.filter ? (n = (0, o.filter)('', n)) : Ti(o.filter) && (r = o.filter);
			var i,
				a = [];
			if ('object' != typeof n || null === n) return '';
			i =
				e && e.arrayFormat in Si
					? e.arrayFormat
					: e && 'indices' in e
					? e.indices
						? 'indices'
						: 'repeat'
					: 'indices';
			var s = Si[i];
			r || (r = Object.keys(n)), o.sort && r.sort(o.sort);
			for (var u = vi(), c = 0; c < r.length; ++c) {
				var l = r[c];
				(o.skipNulls && null === n[l]) ||
					Oi(
						a,
						Di(
							n[l],
							l,
							s,
							o.strictNullHandling,
							o.skipNulls,
							o.encode ? o.encoder : null,
							o.filter,
							o.sort,
							o.allowDots,
							o.serializeDate,
							o.format,
							o.formatter,
							o.encodeValuesOnly,
							o.charset,
							u
						)
					);
			}
			var f = a.join(o.delimiter),
				p = !0 === o.addQueryPrefix ? '?' : '';
			return (
				o.charsetSentinel &&
					('iso-8859-1' === o.charset ? (p += 'utf8=%26%2310003%3B&') : (p += 'utf8=%E2%9C%93&')),
				f.length > 0 ? p + f : ''
			);
		}
	};
function Ui(t) {
	return (Ui =
		'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
			? function (t) {
					return typeof t;
			  }
			: function (t) {
					return t &&
						'function' == typeof Symbol &&
						t.constructor === Symbol &&
						t !== Symbol.prototype
						? 'symbol'
						: typeof t;
			  })(t);
}
var Fi = function (t) {
	return null !== t && 'object' === Ui(t);
};
function Gi(t) {
	return (Gi =
		'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
			? function (t) {
					return typeof t;
			  }
			: function (t) {
					return t &&
						'function' == typeof Symbol &&
						t.constructor === Symbol &&
						t !== Symbol.prototype
						? 'symbol'
						: typeof t;
			  })(t);
}
var Yi = Fi,
	Hi = qi;
function qi(t) {
	if (t)
		return (function (t) {
			for (var e in qi.prototype)
				Object.prototype.hasOwnProperty.call(qi.prototype, e) && (t[e] = qi.prototype[e]);
			return t;
		})(t);
}
(qi.prototype.clearTimeout = function () {
	return (
		clearTimeout(this._timer),
		clearTimeout(this._responseTimeoutTimer),
		clearTimeout(this._uploadTimeoutTimer),
		delete this._timer,
		delete this._responseTimeoutTimer,
		delete this._uploadTimeoutTimer,
		this
	);
}),
	(qi.prototype.parse = function (t) {
		return (this._parser = t), this;
	}),
	(qi.prototype.responseType = function (t) {
		return (this._responseType = t), this;
	}),
	(qi.prototype.serialize = function (t) {
		return (this._serializer = t), this;
	}),
	(qi.prototype.timeout = function (t) {
		if (!t || 'object' !== Gi(t))
			return (this._timeout = t), (this._responseTimeout = 0), (this._uploadTimeout = 0), this;
		for (var e in t)
			if (Object.prototype.hasOwnProperty.call(t, e))
				switch (e) {
					case 'deadline':
						this._timeout = t.deadline;
						break;
					case 'response':
						this._responseTimeout = t.response;
						break;
					case 'upload':
						this._uploadTimeout = t.upload;
						break;
					default:
						console.warn('Unknown timeout option', e);
				}
		return this;
	}),
	(qi.prototype.retry = function (t, e) {
		return (
			(0 !== arguments.length && !0 !== t) || (t = 1),
			t <= 0 && (t = 0),
			(this._maxRetries = t),
			(this._retries = 0),
			(this._retryCallback = e),
			this
		);
	});
var zi = new Set([
		'ETIMEDOUT',
		'ECONNRESET',
		'EADDRINUSE',
		'ECONNREFUSED',
		'EPIPE',
		'ENOTFOUND',
		'ENETUNREACH',
		'EAI_AGAIN'
	]),
	Vi = new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]);
(qi.prototype._shouldRetry = function (t, e) {
	if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
	if (this._retryCallback)
		try {
			var r = this._retryCallback(t, e);
			if (!0 === r) return !0;
			if (!1 === r) return !1;
		} catch (n) {
			console.error(n);
		}
	if (e && e.status && Vi.has(e.status)) return !0;
	if (t) {
		if (t.code && zi.has(t.code)) return !0;
		if (t.timeout && 'ECONNABORTED' === t.code) return !0;
		if (t.crossDomain) return !0;
	}
	return !1;
}),
	(qi.prototype._retry = function () {
		return (
			this.clearTimeout(),
			this.req && ((this.req = null), (this.req = this.request())),
			(this._aborted = !1),
			(this.timedout = !1),
			(this.timedoutError = null),
			this._end()
		);
	}),
	(qi.prototype.then = function (t, e) {
		var r = this;
		if (!this._fullfilledPromise) {
			var n = this;
			this._endCalled &&
				console.warn(
					'Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises'
				),
				(this._fullfilledPromise = new Promise(function (t, e) {
					n.on('abort', function () {
						if (!(r._maxRetries && r._maxRetries > r._retries))
							if (r.timedout && r.timedoutError) e(r.timedoutError);
							else {
								var t = new Error('Aborted');
								(t.code = 'ABORTED'),
									(t.status = r.status),
									(t.method = r.method),
									(t.url = r.url),
									e(t);
							}
					}),
						n.end(function (r, n) {
							r ? e(r) : t(n);
						});
				}));
		}
		return this._fullfilledPromise.then(t, e);
	}),
	(qi.prototype.catch = function (t) {
		return this.then(void 0, t);
	}),
	(qi.prototype.use = function (t) {
		return t(this), this;
	}),
	(qi.prototype.ok = function (t) {
		if ('function' != typeof t) throw new Error('Callback required');
		return (this._okCallback = t), this;
	}),
	(qi.prototype._isResponseOK = function (t) {
		return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300);
	}),
	(qi.prototype.get = function (t) {
		return this._header[t.toLowerCase()];
	}),
	(qi.prototype.getHeader = qi.prototype.get),
	(qi.prototype.set = function (t, e) {
		if (Yi(t)) {
			for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && this.set(r, t[r]);
			return this;
		}
		return (this._header[t.toLowerCase()] = e), (this.header[t] = e), this;
	}),
	(qi.prototype.unset = function (t) {
		return delete this._header[t.toLowerCase()], delete this.header[t], this;
	}),
	(qi.prototype.field = function (t, e) {
		if (null == t) throw new Error('.field(name, val) name can not be empty');
		if (this._data)
			throw new Error(
				".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"
			);
		if (Yi(t)) {
			for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && this.field(r, t[r]);
			return this;
		}
		if (Array.isArray(e)) {
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && this.field(t, e[n]);
			return this;
		}
		if (null == e) throw new Error('.field(name, val) val can not be empty');
		return 'boolean' == typeof e && (e = String(e)), this._getFormData().append(t, e), this;
	}),
	(qi.prototype.abort = function () {
		return (
			this._aborted ||
				((this._aborted = !0),
				this.xhr && this.xhr.abort(),
				this.req && this.req.abort(),
				this.clearTimeout(),
				this.emit('abort')),
			this
		);
	}),
	(qi.prototype._auth = function (t, e, r, n) {
		switch (r.type) {
			case 'basic':
				this.set('Authorization', 'Basic '.concat(n(''.concat(t, ':').concat(e))));
				break;
			case 'auto':
				(this.username = t), (this.password = e);
				break;
			case 'bearer':
				this.set('Authorization', 'Bearer '.concat(t));
		}
		return this;
	}),
	(qi.prototype.withCredentials = function (t) {
		return void 0 === t && (t = !0), (this._withCredentials = t), this;
	}),
	(qi.prototype.redirects = function (t) {
		return (this._maxRedirects = t), this;
	}),
	(qi.prototype.maxResponseSize = function (t) {
		if ('number' != typeof t) throw new TypeError('Invalid argument');
		return (this._maxResponseSize = t), this;
	}),
	(qi.prototype.toJSON = function () {
		return { method: this.method, url: this.url, data: this._data, headers: this._header };
	}),
	(qi.prototype.send = function (t) {
		var e = Yi(t),
			r = this._header['content-type'];
		if (this._formData)
			throw new Error(
				".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"
			);
		if (e && !this._data)
			Array.isArray(t) ? (this._data = []) : this._isHost(t) || (this._data = {});
		else if (t && this._data && this._isHost(this._data))
			throw new Error("Can't merge these send calls");
		if (e && Yi(this._data))
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (this._data[n] = t[n]);
		else
			'string' == typeof t
				? (r || this.type('form'),
				  (r = this._header['content-type']) && (r = r.toLowerCase().trim()),
				  (this._data =
						'application/x-www-form-urlencoded' === r
							? this._data
								? ''.concat(this._data, '&').concat(t)
								: t
							: (this._data || '') + t))
				: (this._data = t);
		return !e || this._isHost(t) || r || this.type('json'), this;
	}),
	(qi.prototype.sortQuery = function (t) {
		return (this._sort = void 0 === t || t), this;
	}),
	(qi.prototype._finalizeQueryString = function () {
		var t = this._query.join('&');
		if (
			(t && (this.url += (this.url.includes('?') ? '&' : '?') + t),
			(this._query.length = 0),
			this._sort)
		) {
			var e = this.url.indexOf('?');
			if (e >= 0) {
				var r = this.url.slice(e + 1).split('&');
				'function' == typeof this._sort ? r.sort(this._sort) : r.sort(),
					(this.url = this.url.slice(0, e) + '?' + r.join('&'));
			}
		}
	}),
	(qi.prototype._appendQueryString = function () {
		console.warn('Unsupported');
	}),
	(qi.prototype._timeoutError = function (t, e, r) {
		if (!this._aborted) {
			var n = new Error(''.concat(t + e, 'ms exceeded'));
			(n.timeout = e),
				(n.code = 'ECONNABORTED'),
				(n.errno = r),
				(this.timedout = !0),
				(this.timedoutError = n),
				this.abort(),
				this.callback(n);
		}
	}),
	(qi.prototype._setTimeouts = function () {
		var t = this;
		this._timeout &&
			!this._timer &&
			(this._timer = setTimeout(function () {
				t._timeoutError('Timeout of ', t._timeout, 'ETIME');
			}, this._timeout)),
			this._responseTimeout &&
				!this._responseTimeoutTimer &&
				(this._responseTimeoutTimer = setTimeout(function () {
					t._timeoutError('Response timeout of ', t._responseTimeout, 'ETIMEDOUT');
				}, this._responseTimeout));
	});
var Xi = {};
function Bi(t, e) {
	var r;
	if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
		if (
			Array.isArray(t) ||
			(r = (function (t, e) {
				if (!t) return;
				if ('string' == typeof t) return Wi(t, e);
				var r = Object.prototype.toString.call(t).slice(8, -1);
				'Object' === r && t.constructor && (r = t.constructor.name);
				if ('Map' === r || 'Set' === r) return Array.from(t);
				if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
					return Wi(t, e);
			})(t)) ||
			(e && t && 'number' == typeof t.length)
		) {
			r && (t = r);
			var n = 0,
				o = function () {};
			return {
				s: o,
				n: function () {
					return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
				},
				e: function (t) {
					throw t;
				},
				f: o
			};
		}
		throw new TypeError(
			'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
		);
	}
	var i,
		a = !0,
		s = !1;
	return {
		s: function () {
			r = t[Symbol.iterator]();
		},
		n: function () {
			var t = r.next();
			return (a = t.done), t;
		},
		e: function (t) {
			(s = !0), (i = t);
		},
		f: function () {
			try {
				a || null == r.return || r.return();
			} finally {
				if (s) throw i;
			}
		}
	};
}
function Wi(t, e) {
	(null == e || e > t.length) && (e = t.length);
	for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
	return n;
}
(Xi.type = function (t) {
	return t.split(/ *; */).shift();
}),
	(Xi.params = function (t) {
		var e,
			r = {},
			n = Bi(t.split(/ *; */));
		try {
			for (n.s(); !(e = n.n()).done; ) {
				var o = e.value.split(/ *= */),
					i = o.shift(),
					a = o.shift();
				i && a && (r[i] = a);
			}
		} catch (s) {
			n.e(s);
		} finally {
			n.f();
		}
		return r;
	}),
	(Xi.parseLinks = function (t) {
		var e,
			r = {},
			n = Bi(t.split(/ *, */));
		try {
			for (n.s(); !(e = n.n()).done; ) {
				var o = e.value.split(/ *; */),
					i = o[0].slice(1, -1);
				r[o[1].split(/ *= */)[1].slice(1, -1)] = i;
			}
		} catch (a) {
			n.e(a);
		} finally {
			n.f();
		}
		return r;
	}),
	(Xi.cleanHeader = function (t, e) {
		return (
			delete t['content-type'],
			delete t['content-length'],
			delete t['transfer-encoding'],
			delete t.host,
			e && (delete t.authorization, delete t.cookie),
			t
		);
	});
var Ji = Xi,
	Qi = Zi;
function Zi(t) {
	if (t)
		return (function (t) {
			for (var e in Zi.prototype)
				Object.prototype.hasOwnProperty.call(Zi.prototype, e) && (t[e] = Zi.prototype[e]);
			return t;
		})(t);
}
function Ki(t) {
	return (
		(function (t) {
			if (Array.isArray(t)) return ta(t);
		})(t) ||
		(function (t) {
			if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
		})(t) ||
		(function (t, e) {
			if (!t) return;
			if ('string' == typeof t) return ta(t, e);
			var r = Object.prototype.toString.call(t).slice(8, -1);
			'Object' === r && t.constructor && (r = t.constructor.name);
			if ('Map' === r || 'Set' === r) return Array.from(t);
			if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ta(t, e);
		})(t) ||
		(function () {
			throw new TypeError(
				'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
			);
		})()
	);
}
function ta(t, e) {
	(null == e || e > t.length) && (e = t.length);
	for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
	return n;
}
function ea() {
	this._defaults = [];
}
(Zi.prototype.get = function (t) {
	return this.header[t.toLowerCase()];
}),
	(Zi.prototype._setHeaderProperties = function (t) {
		var e = t['content-type'] || '';
		this.type = Ji.type(e);
		var r = Ji.params(e);
		for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (this[n] = r[n]);
		this.links = {};
		try {
			t.link && (this.links = Ji.parseLinks(t.link));
		} catch (o) {}
	}),
	(Zi.prototype._setStatusProperties = function (t) {
		var e = (t / 100) | 0;
		(this.statusCode = t),
			(this.status = this.statusCode),
			(this.statusType = e),
			(this.info = 1 === e),
			(this.ok = 2 === e),
			(this.redirect = 3 === e),
			(this.clientError = 4 === e),
			(this.serverError = 5 === e),
			(this.error = (4 === e || 5 === e) && this.toError()),
			(this.created = 201 === t),
			(this.accepted = 202 === t),
			(this.noContent = 204 === t),
			(this.badRequest = 400 === t),
			(this.unauthorized = 401 === t),
			(this.notAcceptable = 406 === t),
			(this.forbidden = 403 === t),
			(this.notFound = 404 === t),
			(this.unprocessableEntity = 422 === t);
	}),
	[
		'use',
		'on',
		'once',
		'set',
		'query',
		'type',
		'accept',
		'auth',
		'withCredentials',
		'sortQuery',
		'retry',
		'ok',
		'redirects',
		'timeout',
		'buffer',
		'serialize',
		'parse',
		'ca',
		'key',
		'pfx',
		'cert',
		'disableTLSCerts'
	].forEach(function (t) {
		ea.prototype[t] = function () {
			for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
			return this._defaults.push({ fn: t, args: r }), this;
		};
	}),
	(ea.prototype._setDefaults = function (t) {
		this._defaults.forEach(function (e) {
			t[e.fn].apply(t, Ki(e.args));
		});
	});
var ra = ea;
!(function (t, e) {
	function r(t) {
		return (r =
			'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
				? function (t) {
						return typeof t;
				  }
				: function (t) {
						return t &&
							'function' == typeof Symbol &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? 'symbol'
							: typeof t;
				  })(t);
	}
	var n;
	'undefined' != typeof window
		? (n = window)
		: 'undefined' == typeof self
		? (console.warn('Using browser-only version of superagent in non-browser environment'),
		  (n = void 0))
		: (n = self);
	var o = yn.exports,
		i = dn,
		a = $i,
		s = Hi,
		u = Fi,
		c = Qi,
		l = ra;
	function f() {}
	t.exports = function (t, r) {
		return 'function' == typeof r
			? new e.Request('GET', t).end(r)
			: 1 === arguments.length
			? new e.Request('GET', t)
			: new e.Request(t, r);
	};
	var p = (e = t.exports);
	(e.Request = v),
		(p.getXHR = function () {
			if (n.XMLHttpRequest && (!n.location || 'file:' !== n.location.protocol || !n.ActiveXObject))
				return new XMLHttpRequest();
			try {
				return new ActiveXObject('Microsoft.XMLHTTP');
			} catch (t) {}
			try {
				return new ActiveXObject('Msxml2.XMLHTTP.6.0');
			} catch (e) {}
			try {
				return new ActiveXObject('Msxml2.XMLHTTP.3.0');
			} catch (r) {}
			try {
				return new ActiveXObject('Msxml2.XMLHTTP');
			} catch (o) {}
			throw new Error('Browser-only version of superagent could not find XHR');
		});
	var h = ''.trim
		? function (t) {
				return t.trim();
		  }
		: function (t) {
				return t.replace(/(^\s*|\s*$)/g, '');
		  };
	function y(t) {
		if (!u(t)) return t;
		var e = [];
		for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && d(e, r, t[r]);
		return e.join('&');
	}
	function d(t, e, r) {
		if (void 0 !== r)
			if (null !== r)
				if (Array.isArray(r))
					r.forEach(function (r) {
						d(t, e, r);
					});
				else if (u(r))
					for (var n in r)
						Object.prototype.hasOwnProperty.call(r, n) &&
							d(t, ''.concat(e, '[').concat(n, ']'), r[n]);
				else t.push(encodeURI(e) + '=' + encodeURIComponent(r));
			else t.push(encodeURI(e));
	}
	function m(t) {
		for (var e, r, n = {}, o = t.split('&'), i = 0, a = o.length; i < a; ++i)
			-1 === (r = (e = o[i]).indexOf('='))
				? (n[decodeURIComponent(e)] = '')
				: (n[decodeURIComponent(e.slice(0, r))] = decodeURIComponent(e.slice(r + 1)));
		return n;
	}
	function g(t) {
		return /[/+]json($|[^-\w])/i.test(t);
	}
	function b(t) {
		(this.req = t),
			(this.xhr = this.req.xhr),
			(this.text =
				('HEAD' !== this.req.method &&
					('' === this.xhr.responseType || 'text' === this.xhr.responseType)) ||
				void 0 === this.xhr.responseType
					? this.xhr.responseText
					: null),
			(this.statusText = this.req.xhr.statusText);
		var e = this.xhr.status;
		1223 === e && (e = 204),
			this._setStatusProperties(e),
			(this.headers = (function (t) {
				for (var e, r, n, o, i = t.split(/\r?\n/), a = {}, s = 0, u = i.length; s < u; ++s)
					-1 !== (e = (r = i[s]).indexOf(':')) &&
						((n = r.slice(0, e).toLowerCase()), (o = h(r.slice(e + 1))), (a[n] = o));
				return a;
			})(this.xhr.getAllResponseHeaders())),
			(this.header = this.headers),
			(this.header['content-type'] = this.xhr.getResponseHeader('content-type')),
			this._setHeaderProperties(this.header),
			null === this.text && t._responseType
				? (this.body = this.xhr.response)
				: (this.body =
						'HEAD' === this.req.method
							? null
							: this._parseBody(this.text ? this.text : this.xhr.response));
	}
	function v(t, e) {
		var r = this;
		(this._query = this._query || []),
			(this.method = t),
			(this.url = e),
			(this.header = {}),
			(this._header = {}),
			this.on('end', function () {
				var t,
					e = null,
					n = null;
				try {
					n = new b(r);
				} catch (o) {
					return (
						((e = new Error('Parser is unable to parse the response')).parse = !0),
						(e.original = o),
						r.xhr
							? ((e.rawResponse =
									void 0 === r.xhr.responseType ? r.xhr.responseText : r.xhr.response),
							  (e.status = r.xhr.status ? r.xhr.status : null),
							  (e.statusCode = e.status))
							: ((e.rawResponse = null), (e.status = null)),
						r.callback(e)
					);
				}
				r.emit('response', n);
				try {
					r._isResponseOK(n) ||
						(t = new Error(n.statusText || n.text || 'Unsuccessful HTTP response'));
				} catch (o) {
					t = o;
				}
				t
					? ((t.original = e), (t.response = n), (t.status = n.status), r.callback(t, n))
					: r.callback(null, n);
			});
	}
	function _(t, e, r) {
		var n = p('DELETE', t);
		return 'function' == typeof e && ((r = e), (e = null)), e && n.send(e), r && n.end(r), n;
	}
	(p.serializeObject = y),
		(p.parseString = m),
		(p.types = {
			html: 'text/html',
			json: 'application/json',
			xml: 'text/xml',
			urlencoded: 'application/x-www-form-urlencoded',
			form: 'application/x-www-form-urlencoded',
			'form-data': 'application/x-www-form-urlencoded'
		}),
		(p.serialize = { 'application/x-www-form-urlencoded': a.stringify, 'application/json': i }),
		(p.parse = { 'application/x-www-form-urlencoded': m, 'application/json': JSON.parse }),
		c(b.prototype),
		(b.prototype._parseBody = function (t) {
			var e = p.parse[this.type];
			return this.req._parser
				? this.req._parser(this, t)
				: (!e && g(this.type) && (e = p.parse['application/json']),
				  e && t && (t.length > 0 || t instanceof Object) ? e(t) : null);
		}),
		(b.prototype.toError = function () {
			var t = this.req,
				e = t.method,
				r = t.url,
				n = 'cannot '.concat(e, ' ').concat(r, ' (').concat(this.status, ')'),
				o = new Error(n);
			return (o.status = this.status), (o.method = e), (o.url = r), o;
		}),
		(p.Response = b),
		o(v.prototype),
		s(v.prototype),
		(v.prototype.type = function (t) {
			return this.set('Content-Type', p.types[t] || t), this;
		}),
		(v.prototype.accept = function (t) {
			return this.set('Accept', p.types[t] || t), this;
		}),
		(v.prototype.auth = function (t, e, n) {
			1 === arguments.length && (e = ''),
				'object' === r(e) && null !== e && ((n = e), (e = '')),
				n || (n = { type: 'function' == typeof btoa ? 'basic' : 'auto' });
			var o = function (t) {
				if ('function' == typeof btoa) return btoa(t);
				throw new Error('Cannot use basic auth, btoa is not a function');
			};
			return this._auth(t, e, n, o);
		}),
		(v.prototype.query = function (t) {
			return 'string' != typeof t && (t = y(t)), t && this._query.push(t), this;
		}),
		(v.prototype.attach = function (t, e, r) {
			if (e) {
				if (this._data) throw new Error("superagent can't mix .send() and .attach()");
				this._getFormData().append(t, e, r || e.name);
			}
			return this;
		}),
		(v.prototype._getFormData = function () {
			return this._formData || (this._formData = new n.FormData()), this._formData;
		}),
		(v.prototype.callback = function (t, e) {
			if (this._shouldRetry(t, e)) return this._retry();
			var r = this._callback;
			this.clearTimeout(),
				t && (this._maxRetries && (t.retries = this._retries - 1), this.emit('error', t)),
				r(t, e);
		}),
		(v.prototype.crossDomainError = function () {
			var t = new Error(
				'Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.'
			);
			(t.crossDomain = !0),
				(t.status = this.status),
				(t.method = this.method),
				(t.url = this.url),
				this.callback(t);
		}),
		(v.prototype.agent = function () {
			return console.warn('This is not supported in browser version of superagent'), this;
		}),
		(v.prototype.ca = v.prototype.agent),
		(v.prototype.buffer = v.prototype.ca),
		(v.prototype.write = function () {
			throw new Error('Streaming is not supported in browser version of superagent');
		}),
		(v.prototype.pipe = v.prototype.write),
		(v.prototype._isHost = function (t) {
			return (
				t &&
				'object' === r(t) &&
				!Array.isArray(t) &&
				'[object Object]' !== Object.prototype.toString.call(t)
			);
		}),
		(v.prototype.end = function (t) {
			this._endCalled &&
				console.warn('Warning: .end() was called twice. This is not supported in superagent'),
				(this._endCalled = !0),
				(this._callback = t || f),
				this._finalizeQueryString(),
				this._end();
		}),
		(v.prototype._setUploadTimeout = function () {
			var t = this;
			this._uploadTimeout &&
				!this._uploadTimeoutTimer &&
				(this._uploadTimeoutTimer = setTimeout(function () {
					t._timeoutError('Upload timeout of ', t._uploadTimeout, 'ETIMEDOUT');
				}, this._uploadTimeout));
		}),
		(v.prototype._end = function () {
			if (this._aborted)
				return this.callback(
					new Error('The request has been aborted even before .end() was called')
				);
			var t = this;
			this.xhr = p.getXHR();
			var e = this.xhr,
				r = this._formData || this._data;
			this._setTimeouts(),
				(e.onreadystatechange = function () {
					var r = e.readyState;
					if (
						(r >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 === r)
					) {
						var n;
						try {
							n = e.status;
						} catch (o) {
							n = 0;
						}
						if (!n) {
							if (t.timedout || t._aborted) return;
							return t.crossDomainError();
						}
						t.emit('end');
					}
				});
			var n = function (e, r) {
				r.total > 0 &&
					((r.percent = (r.loaded / r.total) * 100),
					100 === r.percent && clearTimeout(t._uploadTimeoutTimer)),
					(r.direction = e),
					t.emit('progress', r);
			};
			if (this.hasListeners('progress'))
				try {
					e.addEventListener('progress', n.bind(null, 'download')),
						e.upload && e.upload.addEventListener('progress', n.bind(null, 'upload'));
				} catch (s) {}
			e.upload && this._setUploadTimeout();
			try {
				this.username && this.password
					? e.open(this.method, this.url, !0, this.username, this.password)
					: e.open(this.method, this.url, !0);
			} catch (u) {
				return this.callback(u);
			}
			if (
				(this._withCredentials && (e.withCredentials = !0),
				!this._formData &&
					'GET' !== this.method &&
					'HEAD' !== this.method &&
					'string' != typeof r &&
					!this._isHost(r))
			) {
				var o = this._header['content-type'],
					i = this._serializer || p.serialize[o ? o.split(';')[0] : ''];
				!i && g(o) && (i = p.serialize['application/json']), i && (r = i(r));
			}
			for (var a in this.header)
				null !== this.header[a] &&
					Object.prototype.hasOwnProperty.call(this.header, a) &&
					e.setRequestHeader(a, this.header[a]);
			this._responseType && (e.responseType = this._responseType),
				this.emit('request', this),
				e.send(void 0 === r ? null : r);
		}),
		(p.agent = function () {
			return new l();
		}),
		['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'].forEach(function (t) {
			l.prototype[t.toLowerCase()] = function (e, r) {
				var n = new p.Request(t, e);
				return this._setDefaults(n), r && n.end(r), n;
			};
		}),
		(l.prototype.del = l.prototype.delete),
		(p.get = function (t, e, r) {
			var n = p('GET', t);
			return 'function' == typeof e && ((r = e), (e = null)), e && n.query(e), r && n.end(r), n;
		}),
		(p.head = function (t, e, r) {
			var n = p('HEAD', t);
			return 'function' == typeof e && ((r = e), (e = null)), e && n.query(e), r && n.end(r), n;
		}),
		(p.options = function (t, e, r) {
			var n = p('OPTIONS', t);
			return 'function' == typeof e && ((r = e), (e = null)), e && n.send(e), r && n.end(r), n;
		}),
		(p.del = _),
		(p.delete = _),
		(p.patch = function (t, e, r) {
			var n = p('PATCH', t);
			return 'function' == typeof e && ((r = e), (e = null)), e && n.send(e), r && n.end(r), n;
		}),
		(p.post = function (t, e, r) {
			var n = p('POST', t);
			return 'function' == typeof e && ((r = e), (e = null)), e && n.send(e), r && n.end(r), n;
		}),
		(p.put = function (t, e, r) {
			var n = p('PUT', t);
			return 'function' == typeof e && ((r = e), (e = null)), e && n.send(e), r && n.end(r), n;
		});
})(hn, hn.exports);
var na = hn.exports;
function oa(t) {
	const e = t - 1;
	return e * e * e + 1;
}
function ia(t) {
	return --t * t * t * t * t + 1;
}
function aa(
	t,
	{ delay: e = 0, duration: r = 400, easing: n = oa, x: o = 0, y: i = 0, opacity: a = 0 } = {}
) {
	const s = getComputedStyle(t),
		u = +s.opacity,
		c = 'none' === s.transform ? '' : s.transform,
		l = u * (1 - a);
	return {
		delay: e,
		duration: r,
		easing: n,
		css: (t, e) =>
			`\n\t\t\ttransform: ${c} translate(${(1 - t) * o}px, ${(1 - t) * i}px);\n\t\t\topacity: ${
				u - l * e
			}`
	};
}
var sa = { exports: {} },
	ua = (sa.exports = (function () {
		var t = 1e3,
			e = 6e4,
			r = 36e5,
			n = 'millisecond',
			o = 'second',
			i = 'minute',
			a = 'hour',
			s = 'day',
			u = 'week',
			c = 'month',
			l = 'quarter',
			f = 'year',
			p = 'date',
			h = 'Invalid Date',
			y =
				/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
			d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
			m = {
				name: 'en',
				weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
				months:
					'January_February_March_April_May_June_July_August_September_October_November_December'.split(
						'_'
					)
			},
			g = function (t, e, r) {
				var n = String(t);
				return !n || n.length >= e ? t : '' + Array(e + 1 - n.length).join(r) + t;
			},
			b = {
				s: g,
				z: function (t) {
					var e = -t.utcOffset(),
						r = Math.abs(e),
						n = Math.floor(r / 60),
						o = r % 60;
					return (e <= 0 ? '+' : '-') + g(n, 2, '0') + ':' + g(o, 2, '0');
				},
				m: function t(e, r) {
					if (e.date() < r.date()) return -t(r, e);
					var n = 12 * (r.year() - e.year()) + (r.month() - e.month()),
						o = e.clone().add(n, c),
						i = r - o < 0,
						a = e.clone().add(n + (i ? -1 : 1), c);
					return +(-(n + (r - o) / (i ? o - a : a - o)) || 0);
				},
				a: function (t) {
					return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
				},
				p: function (t) {
					return (
						{ M: c, y: f, w: u, d: s, D: p, h: a, m: i, s: o, ms: n, Q: l }[t] ||
						String(t || '')
							.toLowerCase()
							.replace(/s$/, '')
					);
				},
				u: function (t) {
					return void 0 === t;
				}
			},
			v = 'en',
			_ = {};
		_[v] = m;
		var E = function (t) {
				return t instanceof A;
			},
			w = function (t, e, r) {
				var n;
				if (!t) return v;
				if ('string' == typeof t) _[t] && (n = t), e && ((_[t] = e), (n = t));
				else {
					var o = t.name;
					(_[o] = t), (n = o);
				}
				return !r && n && (v = n), n || (!r && v);
			},
			S = function (t, e) {
				if (E(t)) return t.clone();
				var r = 'object' == typeof e ? e : {};
				return (r.date = t), (r.args = arguments), new A(r);
			},
			T = b;
		(T.l = w),
			(T.i = E),
			(T.w = function (t, e) {
				return S(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });
			});
		var A = (function () {
				function m(t) {
					(this.$L = w(t.locale, null, !0)), this.parse(t);
				}
				var g = m.prototype;
				return (
					(g.parse = function (t) {
						(this.$d = (function (t) {
							var e = t.date,
								r = t.utc;
							if (null === e) return new Date(NaN);
							if (T.u(e)) return new Date();
							if (e instanceof Date) return new Date(e);
							if ('string' == typeof e && !/Z$/i.test(e)) {
								var n = e.match(y);
								if (n) {
									var o = n[2] - 1 || 0,
										i = (n[7] || '0').substring(0, 3);
									return r
										? new Date(Date.UTC(n[1], o, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, i))
										: new Date(n[1], o, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, i);
								}
							}
							return new Date(e);
						})(t)),
							(this.$x = t.x || {}),
							this.init();
					}),
					(g.init = function () {
						var t = this.$d;
						(this.$y = t.getFullYear()),
							(this.$M = t.getMonth()),
							(this.$D = t.getDate()),
							(this.$W = t.getDay()),
							(this.$H = t.getHours()),
							(this.$m = t.getMinutes()),
							(this.$s = t.getSeconds()),
							(this.$ms = t.getMilliseconds());
					}),
					(g.$utils = function () {
						return T;
					}),
					(g.isValid = function () {
						return !(this.$d.toString() === h);
					}),
					(g.isSame = function (t, e) {
						var r = S(t);
						return this.startOf(e) <= r && r <= this.endOf(e);
					}),
					(g.isAfter = function (t, e) {
						return S(t) < this.startOf(e);
					}),
					(g.isBefore = function (t, e) {
						return this.endOf(e) < S(t);
					}),
					(g.$g = function (t, e, r) {
						return T.u(t) ? this[e] : this.set(r, t);
					}),
					(g.unix = function () {
						return Math.floor(this.valueOf() / 1e3);
					}),
					(g.valueOf = function () {
						return this.$d.getTime();
					}),
					(g.startOf = function (t, e) {
						var r = this,
							n = !!T.u(e) || e,
							l = T.p(t),
							h = function (t, e) {
								var o = T.w(r.$u ? Date.UTC(r.$y, e, t) : new Date(r.$y, e, t), r);
								return n ? o : o.endOf(s);
							},
							y = function (t, e) {
								return T.w(
									r
										.toDate()
										[t].apply(r.toDate('s'), (n ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)),
									r
								);
							},
							d = this.$W,
							m = this.$M,
							g = this.$D,
							b = 'set' + (this.$u ? 'UTC' : '');
						switch (l) {
							case f:
								return n ? h(1, 0) : h(31, 11);
							case c:
								return n ? h(1, m) : h(0, m + 1);
							case u:
								var v = this.$locale().weekStart || 0,
									_ = (d < v ? d + 7 : d) - v;
								return h(n ? g - _ : g + (6 - _), m);
							case s:
							case p:
								return y(b + 'Hours', 0);
							case a:
								return y(b + 'Minutes', 1);
							case i:
								return y(b + 'Seconds', 2);
							case o:
								return y(b + 'Milliseconds', 3);
							default:
								return this.clone();
						}
					}),
					(g.endOf = function (t) {
						return this.startOf(t, !1);
					}),
					(g.$set = function (t, e) {
						var r,
							u = T.p(t),
							l = 'set' + (this.$u ? 'UTC' : ''),
							h = ((r = {}),
							(r[s] = l + 'Date'),
							(r[p] = l + 'Date'),
							(r[c] = l + 'Month'),
							(r[f] = l + 'FullYear'),
							(r[a] = l + 'Hours'),
							(r[i] = l + 'Minutes'),
							(r[o] = l + 'Seconds'),
							(r[n] = l + 'Milliseconds'),
							r)[u],
							y = u === s ? this.$D + (e - this.$W) : e;
						if (u === c || u === f) {
							var d = this.clone().set(p, 1);
							d.$d[h](y), d.init(), (this.$d = d.set(p, Math.min(this.$D, d.daysInMonth())).$d);
						} else h && this.$d[h](y);
						return this.init(), this;
					}),
					(g.set = function (t, e) {
						return this.clone().$set(t, e);
					}),
					(g.get = function (t) {
						return this[T.p(t)]();
					}),
					(g.add = function (n, l) {
						var p,
							h = this;
						n = Number(n);
						var y = T.p(l),
							d = function (t) {
								var e = S(h);
								return T.w(e.date(e.date() + Math.round(t * n)), h);
							};
						if (y === c) return this.set(c, this.$M + n);
						if (y === f) return this.set(f, this.$y + n);
						if (y === s) return d(1);
						if (y === u) return d(7);
						var m = ((p = {}), (p[i] = e), (p[a] = r), (p[o] = t), p)[y] || 1,
							g = this.$d.getTime() + n * m;
						return T.w(g, this);
					}),
					(g.subtract = function (t, e) {
						return this.add(-1 * t, e);
					}),
					(g.format = function (t) {
						var e = this,
							r = this.$locale();
						if (!this.isValid()) return r.invalidDate || h;
						var n = t || 'YYYY-MM-DDTHH:mm:ssZ',
							o = T.z(this),
							i = this.$H,
							a = this.$m,
							s = this.$M,
							u = r.weekdays,
							c = r.months,
							l = function (t, r, o, i) {
								return (t && (t[r] || t(e, n))) || o[r].substr(0, i);
							},
							f = function (t) {
								return T.s(i % 12 || 12, t, '0');
							},
							p =
								r.meridiem ||
								function (t, e, r) {
									var n = t < 12 ? 'AM' : 'PM';
									return r ? n.toLowerCase() : n;
								},
							y = {
								YY: String(this.$y).slice(-2),
								YYYY: this.$y,
								M: s + 1,
								MM: T.s(s + 1, 2, '0'),
								MMM: l(r.monthsShort, s, c, 3),
								MMMM: l(c, s),
								D: this.$D,
								DD: T.s(this.$D, 2, '0'),
								d: String(this.$W),
								dd: l(r.weekdaysMin, this.$W, u, 2),
								ddd: l(r.weekdaysShort, this.$W, u, 3),
								dddd: u[this.$W],
								H: String(i),
								HH: T.s(i, 2, '0'),
								h: f(1),
								hh: f(2),
								a: p(i, a, !0),
								A: p(i, a, !1),
								m: String(a),
								mm: T.s(a, 2, '0'),
								s: String(this.$s),
								ss: T.s(this.$s, 2, '0'),
								SSS: T.s(this.$ms, 3, '0'),
								Z: o
							};
						return n.replace(d, function (t, e) {
							return e || y[t] || o.replace(':', '');
						});
					}),
					(g.utcOffset = function () {
						return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
					}),
					(g.diff = function (n, p, h) {
						var y,
							d = T.p(p),
							m = S(n),
							g = (m.utcOffset() - this.utcOffset()) * e,
							b = this - m,
							v = T.m(this, m);
						return (
							(v =
								((y = {}),
								(y[f] = v / 12),
								(y[c] = v),
								(y[l] = v / 3),
								(y[u] = (b - g) / 6048e5),
								(y[s] = (b - g) / 864e5),
								(y[a] = b / r),
								(y[i] = b / e),
								(y[o] = b / t),
								y)[d] || b),
							h ? v : T.a(v)
						);
					}),
					(g.daysInMonth = function () {
						return this.endOf(c).$D;
					}),
					(g.$locale = function () {
						return _[this.$L];
					}),
					(g.locale = function (t, e) {
						if (!t) return this.$L;
						var r = this.clone(),
							n = w(t, e, !0);
						return n && (r.$L = n), r;
					}),
					(g.clone = function () {
						return T.w(this.$d, this);
					}),
					(g.toDate = function () {
						return new Date(this.valueOf());
					}),
					(g.toJSON = function () {
						return this.isValid() ? this.toISOString() : null;
					}),
					(g.toISOString = function () {
						return this.$d.toISOString();
					}),
					(g.toString = function () {
						return this.$d.toUTCString();
					}),
					m
				);
			})(),
			O = A.prototype;
		return (
			(S.prototype = O),
			[
				['$ms', n],
				['$s', o],
				['$m', i],
				['$H', a],
				['$W', s],
				['$M', c],
				['$y', f],
				['$D', p]
			].forEach(function (t) {
				O[t[1]] = function (e) {
					return this.$g(e, t[0], t[1]);
				};
			}),
			(S.extend = function (t, e) {
				return t.$i || (t(e, A, S), (t.$i = !0)), S;
			}),
			(S.locale = w),
			(S.isDayjs = E),
			(S.unix = function (t) {
				return S(1e3 * t);
			}),
			(S.en = _[v]),
			(S.Ls = _),
			(S.p = {}),
			S
		);
	})()),
	ca = { exports: {} },
	la = (ca.exports = function (t, e, r) {
		var n = e.prototype,
			o = function (t) {
				return t && (t.indexOf ? t : t.s);
			},
			i = function (t, e, r, n, i) {
				var a = t.name ? t : t.$locale(),
					s = o(a[e]),
					u = o(a[r]),
					c =
						s ||
						u.map(function (t) {
							return t.substr(0, n);
						});
				if (!i) return c;
				var l = a.weekStart;
				return c.map(function (t, e) {
					return c[(e + (l || 0)) % 7];
				});
			},
			a = function () {
				return r.Ls[r.locale()];
			},
			s = function (t, e) {
				return (
					t.formats[e] ||
					t.formats[e.toUpperCase()].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (t, e, r) {
						return e || r.slice(1);
					})
				);
			},
			u = function () {
				var t = this;
				return {
					months: function (e) {
						return e ? e.format('MMMM') : i(t, 'months');
					},
					monthsShort: function (e) {
						return e ? e.format('MMM') : i(t, 'monthsShort', 'months', 3);
					},
					firstDayOfWeek: function () {
						return t.$locale().weekStart || 0;
					},
					weekdays: function (e) {
						return e ? e.format('dddd') : i(t, 'weekdays');
					},
					weekdaysMin: function (e) {
						return e ? e.format('dd') : i(t, 'weekdaysMin', 'weekdays', 2);
					},
					weekdaysShort: function (e) {
						return e ? e.format('ddd') : i(t, 'weekdaysShort', 'weekdays', 3);
					},
					longDateFormat: function (e) {
						return s(t.$locale(), e);
					},
					meridiem: this.$locale().meridiem,
					ordinal: this.$locale().ordinal
				};
			};
		(n.localeData = function () {
			return u.bind(this)();
		}),
			(r.localeData = function () {
				var t = a();
				return {
					firstDayOfWeek: function () {
						return t.weekStart || 0;
					},
					weekdays: function () {
						return r.weekdays();
					},
					weekdaysShort: function () {
						return r.weekdaysShort();
					},
					weekdaysMin: function () {
						return r.weekdaysMin();
					},
					months: function () {
						return r.months();
					},
					monthsShort: function () {
						return r.monthsShort();
					},
					longDateFormat: function (e) {
						return s(t, e);
					},
					meridiem: t.meridiem,
					ordinal: t.ordinal
				};
			}),
			(r.months = function () {
				return i(a(), 'months');
			}),
			(r.monthsShort = function () {
				return i(a(), 'monthsShort', 'months', 3);
			}),
			(r.weekdays = function (t) {
				return i(a(), 'weekdays', null, null, t);
			}),
			(r.weekdaysShort = function (t) {
				return i(a(), 'weekdaysShort', 'weekdays', 3, t);
			}),
			(r.weekdaysMin = function (t) {
				return i(a(), 'weekdaysMin', 'weekdays', 2, t);
			});
	}),
	fa = { exports: {} },
	pa = (fa.exports = (function () {
		var t = {
				LTS: 'h:mm:ss A',
				LT: 'h:mm A',
				L: 'MM/DD/YYYY',
				LL: 'MMMM D, YYYY',
				LLL: 'MMMM D, YYYY h:mm A',
				LLLL: 'dddd, MMMM D, YYYY h:mm A'
			},
			e = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
			r = /\d\d/,
			n = /\d\d?/,
			o = /\d*[^\s\d-_:/()]+/,
			i = {},
			a = function (t) {
				return (t = +t) + (t > 68 ? 1900 : 2e3);
			},
			s = function (t) {
				return function (e) {
					this[t] = +e;
				};
			},
			u = [
				/[+-]\d\d:?(\d\d)?|Z/,
				function (t) {
					(this.zone || (this.zone = {})).offset = (function (t) {
						if (!t) return 0;
						if ('Z' === t) return 0;
						var e = t.match(/([+-]|\d\d)/g),
							r = 60 * e[1] + (+e[2] || 0);
						return 0 === r ? 0 : '+' === e[0] ? -r : r;
					})(t);
				}
			],
			c = function (t) {
				var e = i[t];
				return e && (e.indexOf ? e : e.s.concat(e.f));
			},
			l = function (t, e) {
				var r,
					n = i.meridiem;
				if (n) {
					for (var o = 1; o <= 24; o += 1)
						if (t.indexOf(n(o, 0, e)) > -1) {
							r = o > 12;
							break;
						}
				} else r = t === (e ? 'pm' : 'PM');
				return r;
			},
			f = {
				A: [
					o,
					function (t) {
						this.afternoon = l(t, !1);
					}
				],
				a: [
					o,
					function (t) {
						this.afternoon = l(t, !0);
					}
				],
				S: [
					/\d/,
					function (t) {
						this.milliseconds = 100 * +t;
					}
				],
				SS: [
					r,
					function (t) {
						this.milliseconds = 10 * +t;
					}
				],
				SSS: [
					/\d{3}/,
					function (t) {
						this.milliseconds = +t;
					}
				],
				s: [n, s('seconds')],
				ss: [n, s('seconds')],
				m: [n, s('minutes')],
				mm: [n, s('minutes')],
				H: [n, s('hours')],
				h: [n, s('hours')],
				HH: [n, s('hours')],
				hh: [n, s('hours')],
				D: [n, s('day')],
				DD: [r, s('day')],
				Do: [
					o,
					function (t) {
						var e = i.ordinal,
							r = t.match(/\d+/);
						if (((this.day = r[0]), e))
							for (var n = 1; n <= 31; n += 1) e(n).replace(/\[|\]/g, '') === t && (this.day = n);
					}
				],
				M: [n, s('month')],
				MM: [r, s('month')],
				MMM: [
					o,
					function (t) {
						var e = c('months'),
							r =
								(
									c('monthsShort') ||
									e.map(function (t) {
										return t.substr(0, 3);
									})
								).indexOf(t) + 1;
						if (r < 1) throw new Error();
						this.month = r % 12 || r;
					}
				],
				MMMM: [
					o,
					function (t) {
						var e = c('months').indexOf(t) + 1;
						if (e < 1) throw new Error();
						this.month = e % 12 || e;
					}
				],
				Y: [/[+-]?\d+/, s('year')],
				YY: [
					r,
					function (t) {
						this.year = a(t);
					}
				],
				YYYY: [/\d{4}/, s('year')],
				Z: u,
				ZZ: u
			};
		function p(r) {
			var n, o;
			(n = r), (o = i && i.formats);
			for (
				var a = (r = n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (e, r, n) {
						var i = n && n.toUpperCase();
						return (
							r ||
							o[n] ||
							t[n] ||
							o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (t, e, r) {
								return e || r.slice(1);
							})
						);
					})).match(e),
					s = a.length,
					u = 0;
				u < s;
				u += 1
			) {
				var c = a[u],
					l = f[c],
					p = l && l[0],
					h = l && l[1];
				a[u] = h ? { regex: p, parser: h } : c.replace(/^\[|\]$/g, '');
			}
			return function (t) {
				for (var e = {}, r = 0, n = 0; r < s; r += 1) {
					var o = a[r];
					if ('string' == typeof o) n += o.length;
					else {
						var i = o.regex,
							u = o.parser,
							c = t.substr(n),
							l = i.exec(c)[0];
						u.call(e, l), (t = t.replace(l, ''));
					}
				}
				return (
					(function (t) {
						var e = t.afternoon;
						if (void 0 !== e) {
							var r = t.hours;
							e ? r < 12 && (t.hours += 12) : 12 === r && (t.hours = 0), delete t.afternoon;
						}
					})(e),
					e
				);
			};
		}
		return function (t, e, r) {
			(r.p.customParseFormat = !0), t && t.parseTwoDigitYear && (a = t.parseTwoDigitYear);
			var n = e.prototype,
				o = n.parse;
			n.parse = function (t) {
				var e = t.date,
					n = t.utc,
					a = t.args;
				this.$u = n;
				var s = a[1];
				if ('string' == typeof s) {
					var u = !0 === a[2],
						c = !0 === a[3],
						l = u || c,
						f = a[2];
					c && (f = a[2]),
						(i = this.$locale()),
						!u && f && (i = r.Ls[f]),
						(this.$d = (function (t, e, r) {
							try {
								if (['x', 'X'].indexOf(e) > -1) return new Date(('X' === e ? 1e3 : 1) * t);
								var n = p(e)(t),
									o = n.year,
									i = n.month,
									a = n.day,
									s = n.hours,
									u = n.minutes,
									c = n.seconds,
									l = n.milliseconds,
									f = n.zone,
									h = new Date(),
									y = a || (o || i ? 1 : h.getDate()),
									d = o || h.getFullYear(),
									m = 0;
								(o && !i) || (m = i > 0 ? i - 1 : h.getMonth());
								var g = s || 0,
									b = u || 0,
									v = c || 0,
									_ = l || 0;
								return f
									? new Date(Date.UTC(d, m, y, g, b, v, _ + 60 * f.offset * 1e3))
									: r
									? new Date(Date.UTC(d, m, y, g, b, v, _))
									: new Date(d, m, y, g, b, v, _);
							} catch (E) {
								return new Date('');
							}
						})(e, s, n)),
						this.init(),
						f && !0 !== f && (this.$L = this.locale(f).$L),
						l && e != this.format(s) && (this.$d = new Date('')),
						(i = {});
				} else if (s instanceof Array)
					for (var h = s.length, y = 1; y <= h; y += 1) {
						a[1] = s[y - 1];
						var d = r.apply(this, a);
						if (d.isValid()) {
							(this.$d = d.$d), (this.$L = d.$L), this.init();
							break;
						}
						y === h && (this.$d = new Date(''));
					}
				else o.call(this, t);
			};
		};
	})());
!(function (t) {
	function e(t) {
		return t && 'object' == typeof t && 'default' in t ? t : { default: t };
	}
	var r = e(t),
		n = {
			name: 'th',
			weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
			weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
			weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
			months:
				'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split(
					'_'
				),
			monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
			formats: {
				LT: 'H:mm',
				LTS: 'H:mm:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY เวลา H:mm',
				LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
			},
			relativeTime: {
				future: 'อีก %s',
				past: '%sที่แล้ว',
				s: 'ไม่กี่วินาที',
				m: '1 นาที',
				mm: '%d นาที',
				h: '1 ชั่วโมง',
				hh: '%d ชั่วโมง',
				d: '1 วัน',
				dd: '%d วัน',
				M: '1 เดือน',
				MM: '%d เดือน',
				y: '1 ปี',
				yy: '%d ปี'
			},
			ordinal: function (t) {
				return t + '.';
			}
		};
	r.default.locale(n, null, !0);
})(sa.exports);
var ha,
	ya = { exports: {} },
	da = (ya.exports =
		((ha = {
			LTS: 'h:mm:ss A',
			LT: 'h:mm A',
			L: 'MM/DD/YYYY',
			LL: 'MMMM D, YYYY',
			LLL: 'MMMM D, YYYY h:mm A',
			LLLL: 'dddd, MMMM D, YYYY h:mm A'
		}),
		function (t, e, r) {
			var n = e.prototype,
				o = n.format;
			(r.en.formats = ha),
				(n.format = function (t) {
					void 0 === t && (t = 'YYYY-MM-DDTHH:mm:ssZ');
					var e,
						r = this.$locale().formats,
						n =
							((e = void 0 === r ? {} : r),
							t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (t, r, n) {
								var o = n && n.toUpperCase();
								return (
									r ||
									e[n] ||
									ha[n] ||
									e[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (t, e, r) {
										return e || r.slice(1);
									})
								);
							}));
					return o.call(this, n);
				});
		}));
export {
	qr as $,
	nt as A,
	r as B,
	Ft as C,
	Fr as D,
	pn as E,
	p as F,
	d as G,
	m as H,
	Zr as I,
	y as J,
	P as K,
	t as L,
	X as M,
	I as N,
	f as O,
	ut as P,
	jt as Q,
	c as R,
	$t as S,
	yt as T,
	na as U,
	i as V,
	Qr as W,
	fn as X,
	g as Y,
	D as Z,
	it as _,
	U as a,
	ht as a0,
	Mt as a1,
	ia as a2,
	aa as a3,
	B as a4,
	ua as a5,
	la as a6,
	pa as a7,
	W as a8,
	da as a9,
	N as aa,
	H as ab,
	$ as ac,
	C as b,
	Y as c,
	L as d,
	j as e,
	M as f,
	q as g,
	V as h,
	Ct as i,
	Nt as j,
	x as k,
	k as l,
	Rt as m,
	z as n,
	xt as o,
	Lt as p,
	Dt as q,
	St as r,
	s,
	R as t,
	Ot as u,
	kt as v,
	Tt as w,
	At as x,
	at as y,
	ot as z
};

import {
	S as t,
	i as e,
	s as n,
	l as s,
	f as l,
	r as o,
	u as a,
	w as i,
	x as c,
	d as u,
	_ as r,
	F as d,
	e as p,
	c as h,
	a as m,
	b as f,
	N as b,
	G as y,
	H as g,
	J as x
} from './vendor-4465f8c9.js';
function v(t) {
	let e, n, s, o;
	const i = t[4].default,
		r = d(i, t, t[3], null);
	return {
		c() {
			(e = p('button')), r && r.c(), this.h();
		},
		l(t) {
			e = h(t, 'BUTTON', { class: !0, type: !0 });
			var n = m(e);
			r && r.l(n), n.forEach(u), this.h();
		},
		h() {
			f(
				e,
				'class',
				'bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
			),
				f(e, 'type', t[1]);
		},
		m(a, i) {
			l(a, e, i), r && r.m(e, null), (n = !0), s || ((o = b(e, 'click', t[2])), (s = !0));
		},
		p(t, s) {
			r && r.p && (!n || 8 & s) && y(r, i, t, t[3], n ? x(i, t[3], s, null) : g(t[3]), null),
				(!n || 2 & s) && f(e, 'type', t[1]);
		},
		i(t) {
			n || (c(r, t), (n = !0));
		},
		o(t) {
			a(r, t), (n = !1);
		},
		d(t) {
			t && u(e), r && r.d(t), (s = !1), o();
		}
	};
}
function w(t) {
	let e, n, s, o;
	const i = t[4].default,
		r = d(i, t, t[3], null);
	return {
		c() {
			(e = p('button')), r && r.c(), this.h();
		},
		l(t) {
			e = h(t, 'BUTTON', { class: !0, type: !0 });
			var n = m(e);
			r && r.l(n), n.forEach(u), this.h();
		},
		h() {
			f(
				e,
				'class',
				'bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
			),
				f(e, 'type', t[1]);
		},
		m(a, i) {
			l(a, e, i), r && r.m(e, null), (n = !0), s || ((o = b(e, 'click', t[2])), (s = !0));
		},
		p(t, s) {
			r && r.p && (!n || 8 & s) && y(r, i, t, t[3], n ? x(i, t[3], s, null) : g(t[3]), null),
				(!n || 2 & s) && f(e, 'type', t[1]);
		},
		i(t) {
			n || (c(r, t), (n = !0));
		},
		o(t) {
			a(r, t), (n = !1);
		},
		d(t) {
			t && u(e), r && r.d(t), (s = !1), o();
		}
	};
}
function $(t) {
	let e, n, s, o;
	const i = t[4].default,
		r = d(i, t, t[3], null);
	return {
		c() {
			(e = p('button')), r && r.c(), this.h();
		},
		l(t) {
			e = h(t, 'BUTTON', { class: !0, type: !0 });
			var n = m(e);
			r && r.l(n), n.forEach(u), this.h();
		},
		h() {
			f(
				e,
				'class',
				'bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
			),
				f(e, 'type', t[1]);
		},
		m(a, i) {
			l(a, e, i), r && r.m(e, null), (n = !0), s || ((o = b(e, 'click', t[2])), (s = !0));
		},
		p(t, s) {
			r && r.p && (!n || 8 & s) && y(r, i, t, t[3], n ? x(i, t[3], s, null) : g(t[3]), null),
				(!n || 2 & s) && f(e, 'type', t[1]);
		},
		i(t) {
			n || (c(r, t), (n = !0));
		},
		o(t) {
			a(r, t), (n = !1);
		},
		d(t) {
			t && u(e), r && r.d(t), (s = !1), o();
		}
	};
}
function T(t) {
	let e, n, r, d;
	const p = [$, w, v],
		h = [];
	function m(t, e) {
		return 'small' == t[0] ? 0 : 'regular' == t[0] ? 1 : 2;
	}
	return (
		(e = m(t)),
		(n = h[e] = p[e](t)),
		{
			c() {
				n.c(), (r = s());
			},
			l(t) {
				n.l(t), (r = s());
			},
			m(t, n) {
				h[e].m(t, n), l(t, r, n), (d = !0);
			},
			p(t, [s]) {
				let l = e;
				(e = m(t)),
					e === l
						? h[e].p(t, s)
						: (o(),
						  a(h[l], 1, 1, () => {
								h[l] = null;
						  }),
						  i(),
						  (n = h[e]),
						  n ? n.p(t, s) : ((n = h[e] = p[e](t)), n.c()),
						  c(n, 1),
						  n.m(r.parentNode, r));
			},
			i(t) {
				d || (c(n), (d = !0));
			},
			o(t) {
				a(n), (d = !1);
			},
			d(t) {
				h[e].d(t), t && u(r);
			}
		}
	);
}
function N(t, e, n) {
	let { $$slots: s = {}, $$scope: l } = e,
		{ size: o = 'small' } = e,
		{ type: a = 'button' } = e;
	const i = r();
	return (
		(t.$$set = (t) => {
			'size' in t && n(0, (o = t.size)),
				'type' in t && n(1, (a = t.type)),
				'$$scope' in t && n(3, (l = t.$$scope));
		}),
		[
			o,
			a,
			(t) => {
				i('click', t);
			},
			l,
			s
		]
	);
}
class k extends t {
	constructor(t) {
		super(), e(this, t, N, T, n, { size: 0, type: 1 });
	}
}
export { k as B };

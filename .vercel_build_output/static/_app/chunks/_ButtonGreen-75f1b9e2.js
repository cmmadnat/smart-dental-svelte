import {
	S as e,
	i as t,
	s as n,
	l as s,
	f as l,
	r as o,
	u as a,
	w as r,
	x as u,
	d as c,
	_ as i,
	F as d,
	e as p,
	c as h,
	a as m,
	b as f,
	N as b,
	G as g,
	H as x,
	J as v
} from './vendor-4465f8c9.js';
function w(e) {
	let t, n, s, o;
	const r = e[3].default,
		i = d(r, e, e[2], null);
	return {
		c() {
			(t = p('button')), i && i.c(), this.h();
		},
		l(e) {
			t = h(e, 'BUTTON', { class: !0, type: !0 });
			var n = m(t);
			i && i.l(n), n.forEach(c), this.h();
		},
		h() {
			f(
				t,
				'class',
				'bg-green-500 text-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
			),
				f(t, 'type', 'button');
		},
		m(a, r) {
			l(a, t, r), i && i.m(t, null), (n = !0), s || ((o = b(t, 'click', e[1])), (s = !0));
		},
		p(e, t) {
			i && i.p && (!n || 4 & t) && g(i, r, e, e[2], n ? v(r, e[2], t, null) : x(e[2]), null);
		},
		i(e) {
			n || (u(i, e), (n = !0));
		},
		o(e) {
			a(i, e), (n = !1);
		},
		d(e) {
			e && c(t), i && i.d(e), (s = !1), o();
		}
	};
}
function $(e) {
	let t, n, s, o;
	const r = e[3].default,
		i = d(r, e, e[2], null);
	return {
		c() {
			(t = p('button')), i && i.c(), this.h();
		},
		l(e) {
			t = h(e, 'BUTTON', { class: !0, type: !0 });
			var n = m(t);
			i && i.l(n), n.forEach(c), this.h();
		},
		h() {
			f(
				t,
				'class',
				'bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
			),
				f(t, 'type', 'button');
		},
		m(a, r) {
			l(a, t, r), i && i.m(t, null), (n = !0), s || ((o = b(t, 'click', e[1])), (s = !0));
		},
		p(e, t) {
			i && i.p && (!n || 4 & t) && g(i, r, e, e[2], n ? v(r, e[2], t, null) : x(e[2]), null);
		},
		i(e) {
			n || (u(i, e), (n = !0));
		},
		o(e) {
			a(i, e), (n = !1);
		},
		d(e) {
			e && c(t), i && i.d(e), (s = !1), o();
		}
	};
}
function y(e) {
	let t, n, s, o;
	const r = e[3].default,
		i = d(r, e, e[2], null);
	return {
		c() {
			(t = p('button')), i && i.c(), this.h();
		},
		l(e) {
			t = h(e, 'BUTTON', { class: !0, type: !0 });
			var n = m(t);
			i && i.l(n), n.forEach(c), this.h();
		},
		h() {
			f(
				t,
				'class',
				'bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
			),
				f(t, 'type', 'button');
		},
		m(a, r) {
			l(a, t, r), i && i.m(t, null), (n = !0), s || ((o = b(t, 'click', e[1])), (s = !0));
		},
		p(e, t) {
			i && i.p && (!n || 4 & t) && g(i, r, e, e[2], n ? v(r, e[2], t, null) : x(e[2]), null);
		},
		i(e) {
			n || (u(i, e), (n = !0));
		},
		o(e) {
			a(i, e), (n = !1);
		},
		d(e) {
			e && c(t), i && i.d(e), (s = !1), o();
		}
	};
}
function T(e) {
	let t, n, i, d;
	const p = [y, $, w],
		h = [];
	function m(e, t) {
		return 'small' == e[0] ? 0 : 'regular' == e[0] ? 1 : 2;
	}
	return (
		(t = m(e)),
		(n = h[t] = p[t](e)),
		{
			c() {
				n.c(), (i = s());
			},
			l(e) {
				n.l(e), (i = s());
			},
			m(e, n) {
				h[t].m(e, n), l(e, i, n), (d = !0);
			},
			p(e, [s]) {
				let l = t;
				(t = m(e)),
					t === l
						? h[t].p(e, s)
						: (o(),
						  a(h[l], 1, 1, () => {
								h[l] = null;
						  }),
						  r(),
						  (n = h[t]),
						  n ? n.p(e, s) : ((n = h[t] = p[t](e)), n.c()),
						  u(n, 1),
						  n.m(i.parentNode, i));
			},
			i(e) {
				d || (u(n), (d = !0));
			},
			o(e) {
				a(n), (d = !1);
			},
			d(e) {
				h[t].d(e), e && c(i);
			}
		}
	);
}
function N(e, t, n) {
	let { $$slots: s = {}, $$scope: l } = t,
		{ size: o = 'small' } = t;
	const a = i();
	return (
		(e.$$set = (e) => {
			'size' in e && n(0, (o = e.size)), '$$scope' in e && n(2, (l = e.$$scope));
		}),
		[
			o,
			(e) => {
				a('click', e);
			},
			l,
			s
		]
	);
}
class k extends e {
	constructor(e) {
		super(), t(this, e, N, T, n, { size: 0 });
	}
}
export { k as B };

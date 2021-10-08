import {
	S as a,
	i as s,
	s as r,
	e as t,
	t as e,
	k as c,
	c as l,
	a as o,
	g as n,
	d as h,
	n as f,
	b as i,
	f as u,
	K as m,
	h as g,
	j as d,
	m as p,
	o as v,
	x as $,
	u as b,
	v as E,
	Z as T,
	O as N,
	X as H
} from '../chunks/vendor-4465f8c9.js';
import { N as k } from '../chunks/_Navigation-c30c9703.js';
import { S as y } from '../chunks/_SetLanguage-5b0c250f.js';
import { S as j } from '../chunks/_SearchUser-8a75a77d.js';
import '../chunks/_Button-bc959185.js';
import '../chunks/_ButtonGreen-75f1b9e2.js';
import '../chunks/navigation-51f4a605.js';
import '../chunks/singletons-12a22614.js';
function x(a, s, r) {
	const t = a.slice();
	return (t[3] = s[r]), (t[5] = r), t;
}
function D(a) {
	let s,
		r,
		d,
		p,
		v,
		$,
		b,
		E,
		T,
		N,
		H,
		k,
		y,
		j,
		x,
		D,
		q,
		w = a[5] + 1 + '',
		I = a[3].firstName + '',
		z = a[3].lastName + '',
		M = a[3].age + '',
		S = a[3].citizenID + '';
	return {
		c() {
			(s = t('tr')),
				(r = t('th')),
				(d = e(w)),
				(p = c()),
				(v = t('th')),
				($ = t('a')),
				(b = e(I)),
				(E = c()),
				(T = t('th')),
				(N = e(z)),
				(H = c()),
				(k = t('th')),
				(y = e(M)),
				(j = c()),
				(x = t('th')),
				(D = e(S)),
				(q = c()),
				this.h();
		},
		l(a) {
			s = l(a, 'TR', { class: !0 });
			var t = o(s);
			r = l(t, 'TH', { class: !0 });
			var e = o(r);
			(d = n(e, w)), e.forEach(h), (p = f(t)), (v = l(t, 'TH', { class: !0 }));
			var c = o(v);
			$ = l(c, 'A', { href: !0 });
			var i = o($);
			(b = n(i, I)), i.forEach(h), c.forEach(h), (E = f(t)), (T = l(t, 'TH', { class: !0 }));
			var u = o(T);
			(N = n(u, z)), u.forEach(h), (H = f(t)), (k = l(t, 'TH', { class: !0 }));
			var m = o(k);
			(y = n(m, M)), m.forEach(h), (j = f(t)), (x = l(t, 'TH', { class: !0 }));
			var g = o(x);
			(D = n(g, S)), g.forEach(h), (q = f(t)), t.forEach(h), this.h();
		},
		h() {
			i(r, 'class', 'border-2 p-2 text-center'),
				i($, 'href', '/patient/i'),
				i(v, 'class', 'border-2 p-2'),
				i(T, 'class', 'border-2 p-2'),
				i(k, 'class', 'border-2 text-center p-2'),
				i(x, 'class', 'border-2 p-2'),
				i(s, 'class', 'text-left hover:bg-blue-50');
		},
		m(a, t) {
			u(a, s, t),
				m(s, r),
				m(r, d),
				m(s, p),
				m(s, v),
				m(v, $),
				m($, b),
				m(s, E),
				m(s, T),
				m(T, N),
				m(s, H),
				m(s, k),
				m(k, y),
				m(s, j),
				m(s, x),
				m(x, D),
				m(s, q);
		},
		p(a, s) {
			2 & s && I !== (I = a[3].firstName + '') && g(b, I),
				2 & s && z !== (z = a[3].lastName + '') && g(N, z),
				2 & s && M !== (M = a[3].age + '') && g(y, M),
				2 & s && S !== (S = a[3].citizenID + '') && g(D, S);
		},
		d(a) {
			a && h(s);
		}
	};
}
function q(a) {
	let s,
		r,
		N,
		H,
		q,
		w,
		I,
		z,
		M,
		S,
		_,
		B,
		A,
		L,
		R,
		V,
		F,
		O,
		P,
		G,
		K,
		U,
		Y,
		Z,
		C,
		J,
		Q,
		W,
		X,
		aa,
		sa,
		ra,
		ta,
		ea,
		ca = a[2]('findPatient') + '',
		la = a[2]('firstName') + '',
		oa = a[2]('lastName') + '',
		na = a[2]('age') + '',
		ha = a[2]('citizenID') + '';
	(s = new k({})), (z = new y({})), (A = new j({ props: { query: a[0] } }));
	let fa = a[1],
		ia = [];
	for (let t = 0; t < fa.length; t += 1) ia[t] = D(x(a, fa, t));
	return {
		c() {
			d(s.$$.fragment),
				(r = c()),
				(N = t('div')),
				(H = t('div')),
				(q = t('h1')),
				(w = e(ca)),
				(I = c()),
				d(z.$$.fragment),
				(M = c()),
				(S = t('hr')),
				(_ = c()),
				(B = t('div')),
				d(A.$$.fragment),
				(L = c()),
				(R = t('table')),
				(V = t('thead')),
				(F = t('tr')),
				(O = t('th')),
				(P = e('#')),
				(G = c()),
				(K = t('th')),
				(U = e(la)),
				(Y = c()),
				(Z = t('th')),
				(C = e(oa)),
				(J = c()),
				(Q = t('th')),
				(W = e(na)),
				(X = c()),
				(aa = t('th')),
				(sa = e(ha)),
				(ra = c()),
				(ta = t('tbody'));
			for (let a = 0; a < ia.length; a += 1) ia[a].c();
			this.h();
		},
		l(a) {
			p(s.$$.fragment, a), (r = f(a)), (N = l(a, 'DIV', { class: !0 }));
			var t = o(N);
			H = l(t, 'DIV', { class: !0 });
			var e = o(H);
			q = l(e, 'H1', { class: !0 });
			var c = o(q);
			(w = n(c, ca)),
				c.forEach(h),
				(I = f(e)),
				p(z.$$.fragment, e),
				e.forEach(h),
				(M = f(t)),
				(S = l(t, 'HR', {})),
				(_ = f(t)),
				(B = l(t, 'DIV', { class: !0 }));
			var i = o(B);
			p(A.$$.fragment, i), i.forEach(h), (L = f(t)), (R = l(t, 'TABLE', { class: !0 }));
			var u = o(R);
			V = l(u, 'THEAD', {});
			var m = o(V);
			F = l(m, 'TR', { class: !0 });
			var g = o(F);
			O = l(g, 'TH', { class: !0 });
			var d = o(O);
			(P = n(d, '#')), d.forEach(h), (G = f(g)), (K = l(g, 'TH', { class: !0 }));
			var v = o(K);
			(U = n(v, la)), v.forEach(h), (Y = f(g)), (Z = l(g, 'TH', { class: !0 }));
			var $ = o(Z);
			(C = n($, oa)), $.forEach(h), (J = f(g)), (Q = l(g, 'TH', { class: !0 }));
			var b = o(Q);
			(W = n(b, na)), b.forEach(h), (X = f(g)), (aa = l(g, 'TH', { class: !0 }));
			var E = o(aa);
			(sa = n(E, ha)),
				E.forEach(h),
				g.forEach(h),
				m.forEach(h),
				(ra = f(u)),
				(ta = l(u, 'TBODY', {}));
			var T = o(ta);
			for (let s = 0; s < ia.length; s += 1) ia[s].l(T);
			T.forEach(h), u.forEach(h), t.forEach(h), this.h();
		},
		h() {
			i(q, 'class', 'text-2xl bold'),
				i(H, 'class', 'flex justify-between'),
				i(B, 'class', 'p-4'),
				i(O, 'class', 'p-2 border-2'),
				i(K, 'class', 'p-2 border-2'),
				i(Z, 'class', 'p-2 border-2'),
				i(Q, 'class', 'p-2 border-2'),
				i(aa, 'class', 'p-2 border-2'),
				i(F, 'class', 'bg-blue-50'),
				i(R, 'class', 'table-auto w-full border-2 '),
				i(N, 'class', 'container mx-auto bg-white p-2 rounded-lg shadow-lg');
		},
		m(a, t) {
			v(s, a, t),
				u(a, r, t),
				u(a, N, t),
				m(N, H),
				m(H, q),
				m(q, w),
				m(H, I),
				v(z, H, null),
				m(N, M),
				m(N, S),
				m(N, _),
				m(N, B),
				v(A, B, null),
				m(N, L),
				m(N, R),
				m(R, V),
				m(V, F),
				m(F, O),
				m(O, P),
				m(F, G),
				m(F, K),
				m(K, U),
				m(F, Y),
				m(F, Z),
				m(Z, C),
				m(F, J),
				m(F, Q),
				m(Q, W),
				m(F, X),
				m(F, aa),
				m(aa, sa),
				m(R, ra),
				m(R, ta);
			for (let s = 0; s < ia.length; s += 1) ia[s].m(ta, null);
			ea = !0;
		},
		p(a, [s]) {
			(!ea || 4 & s) && ca !== (ca = a[2]('findPatient') + '') && g(w, ca);
			const r = {};
			if (
				(1 & s && (r.query = a[0]),
				A.$set(r),
				(!ea || 4 & s) && la !== (la = a[2]('firstName') + '') && g(U, la),
				(!ea || 4 & s) && oa !== (oa = a[2]('lastName') + '') && g(C, oa),
				(!ea || 4 & s) && na !== (na = a[2]('age') + '') && g(W, na),
				(!ea || 4 & s) && ha !== (ha = a[2]('citizenID') + '') && g(sa, ha),
				2 & s)
			) {
				let r;
				for (fa = a[1], r = 0; r < fa.length; r += 1) {
					const t = x(a, fa, r);
					ia[r] ? ia[r].p(t, s) : ((ia[r] = D(t)), ia[r].c(), ia[r].m(ta, null));
				}
				for (; r < ia.length; r += 1) ia[r].d(1);
				ia.length = fa.length;
			}
		},
		i(a) {
			ea || ($(s.$$.fragment, a), $(z.$$.fragment, a), $(A.$$.fragment, a), (ea = !0));
		},
		o(a) {
			b(s.$$.fragment, a), b(z.$$.fragment, a), b(A.$$.fragment, a), (ea = !1);
		},
		d(a) {
			E(s, a), a && h(r), a && h(N), E(z), E(A), T(ia, a);
		}
	};
}
function w({ page: a }) {
	const s = a.query.get('query');
	return s ? { props: { query: s } } : {};
}
function I(a, s, r) {
	let t;
	N(a, H, (a) => r(2, (t = a)));
	let e = [],
		{ query: c = '' } = s;
	for (let l = 0; l < 20; l++)
		e = [
			...e,
			{
				firstName: 'FakeFirstName' + l,
				lastName: 'fakeLastName' + l,
				age: Math.floor((100 * Math.random()) % 60),
				citizenID: '' + Math.floor(Math.random() * Math.pow(10, 13))
			}
		];
	return (
		(a.$$set = (a) => {
			'query' in a && r(0, (c = a.query));
		}),
		[c, e, t]
	);
}
class z extends a {
	constructor(a) {
		super(), s(this, a, I, q, r, { query: 0 });
	}
}
export { z as default, w as load };

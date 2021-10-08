import {
	S as s,
	i as a,
	s as e,
	e as t,
	k as l,
	t as r,
	c,
	a as o,
	d as n,
	n as i,
	g as h,
	R as f,
	b as p,
	f as d,
	K as u,
	h as x,
	L as g,
	O as b,
	X as v
} from './vendor-4465f8c9.js';
function m(s) {
	let a,
		e,
		b,
		v,
		m,
		w,
		E,
		y,
		I,
		k,
		A,
		N,
		j,
		L,
		S,
		V,
		_,
		D,
		M,
		P,
		O,
		T,
		U,
		B,
		G,
		K,
		R,
		q,
		z = s[0]('hello') + '',
		C = s[0]('logout') + '';
	return {
		c() {
			(a = t('nav')),
				(e = t('div')),
				(b = t('div')),
				(v = t('a')),
				(m = t('img')),
				(E = l()),
				(y = t('button')),
				(I = t('span')),
				(k = l()),
				(A = t('span')),
				(N = l()),
				(j = t('span')),
				(L = l()),
				(S = t('div')),
				(V = t('ul')),
				(_ = t('li')),
				(D = t('a')),
				(M = t('i')),
				(P = r(' \n\t\t\t\t\t\t')),
				(O = r(z)),
				(T = r(', user')),
				(U = l()),
				(B = t('li')),
				(G = t('a')),
				(K = t('i')),
				(R = r(' \n\t\t\t\t\t\t')),
				(q = r(C)),
				this.h();
		},
		l(s) {
			a = c(s, 'NAV', { class: !0 });
			var t = o(a);
			e = c(t, 'DIV', { class: !0 });
			var l = o(e);
			b = c(l, 'DIV', { class: !0 });
			var r = o(b);
			v = c(r, 'A', { class: !0, href: !0 });
			var f = o(v);
			(m = c(f, 'IMG', { src: !0, alt: !0, class: !0 })),
				f.forEach(n),
				(E = i(r)),
				(y = c(r, 'BUTTON', { class: !0, type: !0 }));
			var p = o(y);
			(I = c(p, 'SPAN', { class: !0 })),
				o(I).forEach(n),
				(k = i(p)),
				(A = c(p, 'SPAN', { class: !0 })),
				o(A).forEach(n),
				(N = i(p)),
				(j = c(p, 'SPAN', { class: !0 })),
				o(j).forEach(n),
				p.forEach(n),
				r.forEach(n),
				(L = i(l)),
				(S = c(l, 'DIV', { class: !0 }));
			var d = o(S);
			V = c(d, 'UL', { class: !0 });
			var u = o(V);
			_ = c(u, 'LI', { class: !0 });
			var x = o(_);
			D = c(x, 'A', { class: !0, href: !0 });
			var g = o(D);
			(M = c(g, 'I', { class: !0 })),
				o(M).forEach(n),
				(P = h(g, ' \n\t\t\t\t\t\t')),
				(O = h(g, z)),
				(T = h(g, ', user')),
				g.forEach(n),
				x.forEach(n),
				(U = i(u)),
				(B = c(u, 'LI', { class: !0 }));
			var w = o(B);
			G = c(w, 'A', { class: !0, href: !0 });
			var F = o(G);
			(K = c(F, 'I', { class: !0 })),
				o(K).forEach(n),
				(R = h(F, ' \n\t\t\t\t\t\t')),
				(q = h(F, C)),
				F.forEach(n),
				w.forEach(n),
				u.forEach(n),
				d.forEach(n),
				l.forEach(n),
				t.forEach(n),
				this.h();
		},
		h() {
			f(m.src, (w = '/Mahidol_dentis_th.png')) || p(m, 'src', '/Mahidol_dentis_th.png'),
				p(m, 'alt', 'mahidol smart dental logo'),
				p(m, 'class', 'w-60'),
				p(
					v,
					'class',
					'text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white'
				),
				p(v, 'href', '/home'),
				p(I, 'class', 'block relative w-6 h-px rounded-sm bg-white'),
				p(A, 'class', 'block relative w-6 h-px rounded-sm bg-white mt-1'),
				p(j, 'class', 'block relative w-6 h-px rounded-sm bg-white mt-1'),
				p(
					y,
					'class',
					'cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
				),
				p(y, 'type', 'button'),
				p(
					b,
					'class',
					'w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start'
				),
				p(M, 'class', 'lni lni-user'),
				p(
					D,
					'class',
					'px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75'
				),
				p(D, 'href', '#pablo'),
				p(_, 'class', 'nav-item'),
				p(K, 'class', 'lni lni-exit'),
				p(
					G,
					'class',
					'px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75'
				),
				p(G, 'href', '#pablo'),
				p(B, 'class', 'nav-item'),
				p(V, 'class', 'flex flex-col lg:flex-row list-none ml-auto'),
				p(S, 'class', 'lg:flex flex-grow items-center'),
				p(e, 'class', 'container px-4 mx-auto flex flex-wrap items-center justify-between'),
				p(
					a,
					'class',
					'relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-500 mb-3'
				);
		},
		m(s, t) {
			d(s, a, t),
				u(a, e),
				u(e, b),
				u(b, v),
				u(v, m),
				u(b, E),
				u(b, y),
				u(y, I),
				u(y, k),
				u(y, A),
				u(y, N),
				u(y, j),
				u(e, L),
				u(e, S),
				u(S, V),
				u(V, _),
				u(_, D),
				u(D, M),
				u(D, P),
				u(D, O),
				u(D, T),
				u(V, U),
				u(V, B),
				u(B, G),
				u(G, K),
				u(G, R),
				u(G, q);
		},
		p(s, [a]) {
			1 & a && z !== (z = s[0]('hello') + '') && x(O, z),
				1 & a && C !== (C = s[0]('logout') + '') && x(q, C);
		},
		i: g,
		o: g,
		d(s) {
			s && n(a);
		}
	};
}
function w(s, a, e) {
	let t;
	return b(s, v, (s) => e(0, (t = s))), [t];
}
class E extends s {
	constructor(s) {
		super(), a(this, s, w, m, e, {});
	}
}
export { E as N };

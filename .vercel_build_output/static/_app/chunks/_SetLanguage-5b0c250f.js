import {
	S as s,
	i as a,
	s as c,
	e as t,
	k as r,
	t as e,
	c as o,
	a as l,
	n,
	g as i,
	d as h,
	b as f,
	R as v,
	f as d,
	K as g,
	N as u,
	L as m,
	V as p,
	O as x,
	W as E,
	A as I,
	Y as w
} from './vendor-4465f8c9.js';
function D(s) {
	let a, c, x, E, I, w, D, k, T, U, V, b, C, N, O, R, S, B, G;
	return {
		c() {
			(a = t('div')),
				(c = t('div')),
				(x = t('img')),
				(I = r()),
				(w = t('button')),
				(D = e('ไทย')),
				(k = r()),
				(T = t('div')),
				(U = e('|')),
				(V = r()),
				(b = t('div')),
				(C = t('img')),
				(O = r()),
				(R = t('button')),
				(S = e('English')),
				this.h();
		},
		l(s) {
			a = o(s, 'DIV', { class: !0 });
			var t = l(a);
			c = o(t, 'DIV', { class: !0 });
			var r = l(c);
			(x = o(r, 'IMG', { class: !0, src: !0, alt: !0 })), (I = n(r)), (w = o(r, 'BUTTON', {}));
			var e = l(w);
			(D = i(e, 'ไทย')), e.forEach(h), r.forEach(h), (k = n(t)), (T = o(t, 'DIV', { class: !0 }));
			var f = l(T);
			(U = i(f, '|')), f.forEach(h), (V = n(t)), (b = o(t, 'DIV', { class: !0 }));
			var v = l(b);
			(C = o(v, 'IMG', { class: !0, src: !0, alt: !0 })), (O = n(v)), (R = o(v, 'BUTTON', {}));
			var d = l(R);
			(S = i(d, 'English')), d.forEach(h), v.forEach(h), t.forEach(h), this.h();
		},
		h() {
			f(x, 'class', 'w-6 mr-2'),
				v(x.src, (E = '/th.svg')) || f(x, 'src', '/th.svg'),
				f(x, 'alt', ''),
				f(c, 'class', 'flex flex-row'),
				f(T, 'class', 'mx-2'),
				f(C, 'class', 'w-6 mr-2'),
				v(C.src, (N = '/us.svg')) || f(C, 'src', '/us.svg'),
				f(C, 'alt', ''),
				f(b, 'class', 'flex flex-row'),
				f(a, 'class', 'flex text-gray-400');
		},
		m(t, r) {
			d(t, a, r),
				g(a, c),
				g(c, x),
				g(c, I),
				g(c, w),
				g(w, D),
				g(a, k),
				g(a, T),
				g(T, U),
				g(a, V),
				g(a, b),
				g(b, C),
				g(b, O),
				g(b, R),
				g(R, S),
				B || ((G = [u(w, 'click', s[2]), u(R, 'click', s[3])]), (B = !0));
		},
		p: m,
		i: m,
		o: m,
		d(s) {
			s && h(a), (B = !1), p(G);
		}
	};
}
function k(s, a, c) {
	let t;
	x(s, E, (s) => c(0, (t = s))),
		I(() => {
			const s = e('lang');
			s && w(E, (t = s), t);
		});
	const r = (s, a, c = 7, t = '/') => {
			const r = new Date(Date.now() + 864e5 * c).toUTCString();
			document.cookie = s + '=' + encodeURIComponent(a) + '; expires=' + r + '; path=' + t;
		},
		e = (s) =>
			document.cookie.split('; ').reduce((a, c) => {
				const t = c.split('=');
				return t[0] === s ? decodeURIComponent(t[1]) : a;
			}, '');
	return [
		t,
		r,
		() => {
			r('lang', 'th'), w(E, (t = 'th'), t);
		},
		() => {
			r('lang', 'en'), w(E, (t = 'en'), t);
		}
	];
}
class T extends s {
	constructor(s) {
		super(), a(this, s, k, D, c, {});
	}
}
export { T as S };

import {
	S as e,
	i as s,
	s as a,
	e as t,
	t as l,
	c as n,
	a as r,
	g as o,
	d as i,
	b as c,
	f as u,
	K as h,
	h as f,
	k as d,
	n as m,
	M as p,
	N as v,
	L as b,
	O as g,
	X as w,
	P as $,
	Q as x,
	j as y,
	m as E,
	R as j,
	o as I,
	T as k,
	x as D,
	u as H,
	v as U,
	U as V
} from '../chunks/vendor-4465f8c9.js';
import { g as N } from '../chunks/navigation-51f4a605.js';
import { S } from '../chunks/_SetLanguage-5b0c250f.js';
import { T } from '../chunks/_TextBox-13ab11d7.js';
import '../chunks/singletons-12a22614.js';
function _(e) {
	let s,
		a,
		d = e[3]('newUserHint') + '';
	return {
		c() {
			(s = t('span')), (a = l(d)), this.h();
		},
		l(e) {
			s = n(e, 'SPAN', { class: !0 });
			var t = r(s);
			(a = o(t, d)), t.forEach(i), this.h();
		},
		h() {
			c(s, 'class', 'text-gray-800 my-2 text-sm');
		},
		m(e, t) {
			u(e, s, t), h(s, a);
		},
		p(e, s) {
			8 & s && d !== (d = e[3]('newUserHint') + '') && f(a, d);
		},
		d(e) {
			e && i(s);
		}
	};
}
function M(e) {
	let s,
		a,
		g,
		w,
		$,
		x,
		y,
		E,
		j,
		I = 0 != e[2].length && _(e);
	return {
		c() {
			(s = t('label')),
				(a = l(e[1])),
				(g = d()),
				(w = t('div')),
				($ = t('input')),
				(y = d()),
				I && I.c(),
				this.h();
		},
		l(t) {
			s = n(t, 'LABEL', { for: !0 });
			var l = r(s);
			(a = o(l, e[1])), l.forEach(i), (g = m(t)), (w = n(t, 'DIV', { class: !0 }));
			var c = r(w);
			($ = n(c, 'INPUT', { id: !0, type: !0, placeholder: !0, class: !0 })),
				(y = m(c)),
				I && I.l(c),
				c.forEach(i),
				this.h();
		},
		h() {
			c(s, 'for', e[1]),
				c($, 'id', e[1]),
				c($, 'type', 'password'),
				c($, 'placeholder', (x = e[3]('enter') + ' ' + e[1] + '...')),
				c(
					$,
					'class',
					'px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10'
				),
				c(w, 'class', 'relative flex w-full flex-wrap items-stretch mt-2 mb-3');
		},
		m(t, l) {
			u(t, s, l),
				h(s, a),
				u(t, g, l),
				u(t, w, l),
				h(w, $),
				p($, e[0]),
				h(w, y),
				I && I.m(w, null),
				E || ((j = v($, 'input', e[4])), (E = !0));
		},
		p(e, [t]) {
			2 & t && f(a, e[1]),
				2 & t && c(s, 'for', e[1]),
				2 & t && c($, 'id', e[1]),
				10 & t && x !== (x = e[3]('enter') + ' ' + e[1] + '...') && c($, 'placeholder', x),
				1 & t && $.value !== e[0] && p($, e[0]),
				0 != e[2].length
					? I
						? I.p(e, t)
						: ((I = _(e)), I.c(), I.m(w, null))
					: I && (I.d(1), (I = null));
		},
		i: b,
		o: b,
		d(e) {
			e && i(s), e && i(g), e && i(w), I && I.d(), (E = !1), j();
		}
	};
}
function P(e, s, a) {
	let t;
	g(e, w, (e) => a(3, (t = e)));
	let { label: l } = s,
		{ hint: n = '' } = s,
		{ value: r = '' } = s;
	return (
		(e.$$set = (e) => {
			'label' in e && a(1, (l = e.label)),
				'hint' in e && a(2, (n = e.hint)),
				'value' in e && a(0, (r = e.value));
		}),
		[
			r,
			l,
			n,
			t,
			function () {
				(r = this.value), a(0, r);
			}
		]
	);
}
class A extends e {
	constructor(e) {
		super(), s(this, e, P, M, a, { label: 1, hint: 2, value: 0 });
	}
}
function B(e) {
	let s,
		a,
		p,
		v,
		b,
		g,
		w,
		$,
		x,
		y,
		E = e[3]('error') + '',
		j = e[3](e[2]) + '';
	return {
		c() {
			(s = t('div')),
				(a = t('span')),
				(p = t('i')),
				(v = d()),
				(b = t('span')),
				(g = t('b')),
				(w = l(E)),
				($ = l('!')),
				(x = d()),
				(y = l(j)),
				this.h();
		},
		l(e) {
			s = n(e, 'DIV', { class: !0 });
			var t = r(s);
			a = n(t, 'SPAN', { class: !0 });
			var l = r(a);
			(p = n(l, 'I', { class: !0 })),
				r(p).forEach(i),
				l.forEach(i),
				(v = m(t)),
				(b = n(t, 'SPAN', { class: !0 }));
			var c = r(b);
			g = n(c, 'B', { class: !0 });
			var u = r(g);
			(w = o(u, E)),
				($ = o(u, '!')),
				u.forEach(i),
				(x = m(c)),
				(y = o(c, j)),
				c.forEach(i),
				t.forEach(i),
				this.h();
		},
		h() {
			c(p, 'class', 'fas fa-bell'),
				c(a, 'class', 'text-xl inline-block mr-5 align-middle'),
				c(g, 'class', 'capitalize'),
				c(b, 'class', 'inline-block align-middle mr-8'),
				c(s, 'class', 'text-white px-6 py-4 border-0 rounded relative mb-4 bg-amber-500');
		},
		m(e, t) {
			u(e, s, t), h(s, a), h(a, p), h(s, v), h(s, b), h(b, g), h(g, w), h(g, $), h(b, x), h(b, y);
		},
		p(e, s) {
			8 & s && E !== (E = e[3]('error') + '') && f(w, E),
				12 & s && j !== (j = e[3](e[2]) + '') && f(y, j);
		},
		d(e) {
			e && i(s);
		}
	};
}
function G(e) {
	let s,
		a,
		p,
		b,
		g,
		w,
		V,
		N,
		_,
		M,
		P,
		G,
		L,
		R,
		O,
		q,
		z,
		F,
		K,
		Q,
		C,
		J,
		W,
		X,
		Y,
		Z,
		ee,
		se,
		ae,
		te,
		le = e[3]('login') + '',
		ne = e[3]('login') + '',
		re = 0 != e[2].length && B(e);
	function oe(s) {
		e[5](s);
	}
	let ie = { label: e[3]('username') };
	function ce(s) {
		e[6](s);
	}
	void 0 !== e[0] && (ie.value = e[0]), (G = new T({ props: ie })), $.push(() => x(G, 'value', oe));
	let ue = { hint: e[3]('newUserHint'), label: e[3]('password') };
	return (
		void 0 !== e[1] && (ue.value = e[1]),
		(O = new A({ props: ue })),
		$.push(() => x(O, 'value', ce)),
		(ee = new S({})),
		{
			c() {
				(s = t('div')),
					(a = t('div')),
					(p = t('img')),
					(g = d()),
					(w = t('h1')),
					(V = l(le)),
					(N = d()),
					re && re.c(),
					(_ = d()),
					(M = t('div')),
					(P = t('form')),
					y(G.$$.fragment),
					(R = d()),
					y(O.$$.fragment),
					(z = d()),
					(F = t('hr')),
					(K = d()),
					(Q = t('button')),
					(C = l(ne)),
					(J = d()),
					(W = t('div')),
					(X = t('hr')),
					(Y = d()),
					(Z = t('div')),
					y(ee.$$.fragment),
					this.h();
			},
			l(e) {
				s = n(e, 'DIV', { class: !0 });
				var t = r(s);
				a = n(t, 'DIV', { class: !0 });
				var l = r(a);
				(p = n(l, 'IMG', { src: !0, class: !0, alt: !0 })),
					(g = m(l)),
					(w = n(l, 'H1', { class: !0 }));
				var c = r(w);
				(V = o(c, le)),
					c.forEach(i),
					(N = m(l)),
					re && re.l(l),
					(_ = m(l)),
					(M = n(l, 'DIV', { class: !0 }));
				var u = r(M);
				P = n(u, 'FORM', {});
				var h = r(P);
				E(G.$$.fragment, h),
					(R = m(h)),
					E(O.$$.fragment, h),
					(z = m(h)),
					(F = n(h, 'HR', {})),
					(K = m(h)),
					(Q = n(h, 'BUTTON', { class: !0, type: !0 }));
				var f = r(Q);
				(C = o(f, ne)),
					f.forEach(i),
					h.forEach(i),
					u.forEach(i),
					(J = m(l)),
					(W = n(l, 'DIV', { class: !0 }));
				var d = r(W);
				(X = n(d, 'HR', {})), d.forEach(i), (Y = m(l)), (Z = n(l, 'DIV', {}));
				var v = r(Z);
				E(ee.$$.fragment, v), v.forEach(i), l.forEach(i), t.forEach(i), this.h();
			},
			h() {
				j(p.src, (b = '/Mahidol_dentis_th.png')) || c(p, 'src', '/Mahidol_dentis_th.png'),
					c(p, 'class', 'w-96 shadowfilter svelte-ja46hq'),
					c(p, 'alt', ''),
					c(w, 'class', 'text-xl my-2 w-2/3'),
					c(
						Q,
						'class',
						'mt-2 bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
					),
					c(Q, 'type', 'submit'),
					c(M, 'class', 'border-2 w-2/3 p-4'),
					c(W, 'class', 'w-full my-2'),
					c(
						a,
						'class',
						'p-3 mt-40 w-1/2 object-center bg-white shadow-lg flex justify-center flex-col items-center'
					),
					c(s, 'class', 'container mx-auto flex justify-center ');
			},
			m(t, l) {
				u(t, s, l),
					h(s, a),
					h(a, p),
					h(a, g),
					h(a, w),
					h(w, V),
					h(a, N),
					re && re.m(a, null),
					h(a, _),
					h(a, M),
					h(M, P),
					I(G, P, null),
					h(P, R),
					I(O, P, null),
					h(P, z),
					h(P, F),
					h(P, K),
					h(P, Q),
					h(Q, C),
					h(a, J),
					h(a, W),
					h(W, X),
					h(a, Y),
					h(a, Z),
					I(ee, Z, null),
					(se = !0),
					ae || ((te = v(P, 'submit', e[4])), (ae = !0));
			},
			p(e, [s]) {
				(!se || 8 & s) && le !== (le = e[3]('login') + '') && f(V, le),
					0 != e[2].length
						? re
							? re.p(e, s)
							: ((re = B(e)), re.c(), re.m(a, _))
						: re && (re.d(1), (re = null));
				const t = {};
				8 & s && (t.label = e[3]('username')),
					!L && 1 & s && ((L = !0), (t.value = e[0]), k(() => (L = !1))),
					G.$set(t);
				const l = {};
				8 & s && (l.hint = e[3]('newUserHint')),
					8 & s && (l.label = e[3]('password')),
					!q && 2 & s && ((q = !0), (l.value = e[1]), k(() => (q = !1))),
					O.$set(l),
					(!se || 8 & s) && ne !== (ne = e[3]('login') + '') && f(C, ne);
			},
			i(e) {
				se || (D(G.$$.fragment, e), D(O.$$.fragment, e), D(ee.$$.fragment, e), (se = !0));
			},
			o(e) {
				H(G.$$.fragment, e), H(O.$$.fragment, e), H(ee.$$.fragment, e), (se = !1);
			},
			d(e) {
				e && i(s), re && re.d(), U(G), U(O), U(ee), (ae = !1), te();
			}
		}
	);
}
function L({ session: e }) {
	return e.user ? { status: 302, redirect: '/home' } : {};
}
function R(e, s, a) {
	let t;
	g(e, w, (e) => a(3, (t = e)));
	let l = '',
		n = '',
		r = '';
	return [
		l,
		n,
		r,
		t,
		(e) => {
			e.preventDefault(),
				V.post('/login')
					.send({ username: l, password: n })
					.then((e) => {
						e.body.success ? N('/home') : a(2, (r = e.body.message));
					});
		},
		function (e) {
			(l = e), a(0, l);
		},
		function (e) {
			(n = e), a(1, n);
		}
	];
}
class O extends e {
	constructor(e) {
		super(), s(this, e, R, G, a, {});
	}
}
export { O as default, L as load };

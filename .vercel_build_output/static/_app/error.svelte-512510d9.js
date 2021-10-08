import {
	S as r,
	i as s,
	s as a,
	e as t,
	t as e,
	c,
	a as n,
	g as o,
	d as u,
	f,
	K as l,
	h as m,
	k as p,
	l as d,
	n as i,
	L as h
} from './chunks/vendor-4465f8c9.js';
function E(r) {
	let s,
		a,
		p = r[1].frame + '';
	return {
		c() {
			(s = t('pre')), (a = e(p));
		},
		l(r) {
			s = c(r, 'PRE', {});
			var t = n(s);
			(a = o(t, p)), t.forEach(u);
		},
		m(r, t) {
			f(r, s, t), l(s, a);
		},
		p(r, s) {
			2 & s && p !== (p = r[1].frame + '') && m(a, p);
		},
		d(r) {
			r && u(s);
		}
	};
}
function k(r) {
	let s,
		a,
		p = r[1].stack + '';
	return {
		c() {
			(s = t('pre')), (a = e(p));
		},
		l(r) {
			s = c(r, 'PRE', {});
			var t = n(s);
			(a = o(t, p)), t.forEach(u);
		},
		m(r, t) {
			f(r, s, t), l(s, a);
		},
		p(r, s) {
			2 & s && p !== (p = r[1].stack + '') && m(a, p);
		},
		d(r) {
			r && u(s);
		}
	};
}
function v(r) {
	let s,
		a,
		v,
		g,
		P,
		R,
		x,
		N,
		$ = r[1].message + '',
		j = r[1].frame && E(r),
		H = r[1].stack && k(r);
	return {
		c() {
			(s = t('h1')),
				(a = e(r[0])),
				(v = p()),
				(g = t('pre')),
				(P = e($)),
				(R = p()),
				j && j.c(),
				(x = p()),
				H && H.c(),
				(N = d());
		},
		l(t) {
			s = c(t, 'H1', {});
			var e = n(s);
			(a = o(e, r[0])), e.forEach(u), (v = i(t)), (g = c(t, 'PRE', {}));
			var f = n(g);
			(P = o(f, $)), f.forEach(u), (R = i(t)), j && j.l(t), (x = i(t)), H && H.l(t), (N = d());
		},
		m(r, t) {
			f(r, s, t),
				l(s, a),
				f(r, v, t),
				f(r, g, t),
				l(g, P),
				f(r, R, t),
				j && j.m(r, t),
				f(r, x, t),
				H && H.m(r, t),
				f(r, N, t);
		},
		p(r, [s]) {
			1 & s && m(a, r[0]),
				2 & s && $ !== ($ = r[1].message + '') && m(P, $),
				r[1].frame
					? j
						? j.p(r, s)
						: ((j = E(r)), j.c(), j.m(x.parentNode, x))
					: j && (j.d(1), (j = null)),
				r[1].stack
					? H
						? H.p(r, s)
						: ((H = k(r)), H.c(), H.m(N.parentNode, N))
					: H && (H.d(1), (H = null));
		},
		i: h,
		o: h,
		d(r) {
			r && u(s), r && u(v), r && u(g), r && u(R), j && j.d(r), r && u(x), H && H.d(r), r && u(N);
		}
	};
}
function g({ error: r, status: s }) {
	return { props: { error: r, status: s } };
}
function P(r, s, a) {
	let { status: t } = s,
		{ error: e } = s;
	return (
		(r.$$set = (r) => {
			'status' in r && a(0, (t = r.status)), 'error' in r && a(1, (e = r.error));
		}),
		[t, e]
	);
}
class R extends r {
	constructor(r) {
		super(), s(this, r, P, v, a, { status: 0, error: 1 });
	}
}
export { R as default, g as load };

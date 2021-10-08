import {
	S as SvelteComponent,
	i as init,
	s as safe_not_equal,
	P as binding_callbacks,
	Q as bind,
	e as element,
	t as text,
	c as claim_element,
	a as children,
	g as claim_text,
	d as detach,
	b as attr,
	f as insert_hydration,
	K as append_hydration,
	h as set_data,
	k as space,
	j as create_component,
	n as claim_space,
	m as claim_component,
	o as mount_component,
	T as add_flush_callback,
	x as transition_in,
	a0 as add_render_callback,
	a1 as create_in_transition,
	u as transition_out,
	v as destroy_component,
	O as component_subscribe,
	X,
	_ as createEventDispatcher,
	a2 as quintOut,
	a3 as fly,
	L as noop,
	M as set_input_value,
	a4 as select_option,
	N as listen,
	Z as destroy_each,
	V as run_all,
	a5 as dayjs,
	a6 as localeData,
	a7 as customParseFormat,
	a8 as select_value,
	l as empty,
	r as group_outros,
	w as check_outros,
	U as superagent
} from '../chunks/vendor-4465f8c9.js';
import { N as Navigation } from '../chunks/_Navigation-c30c9703.js';
import { S as SetLanguage } from '../chunks/_SetLanguage-5b0c250f.js';
import { B as Button } from '../chunks/_Button-bc959185.js';
import { T as TextBox } from '../chunks/_TextBox-13ab11d7.js';
import { g as goto } from '../chunks/navigation-51f4a605.js';
import '../chunks/singletons-12a22614.js';
function create_if_block$2(e) {
	let t, a, n;
	return {
		c() {
			(t = element('p')), (a = element('span')), (n = text(e[2])), this.h();
		},
		l(c) {
			t = claim_element(c, 'P', {});
			var i = children(t);
			a = claim_element(i, 'SPAN', { class: !0 });
			var l = children(a);
			(n = claim_text(l, e[2])), l.forEach(detach), i.forEach(detach), this.h();
		},
		h() {
			attr(a, 'class', 'text-red-400 bold');
		},
		m(e, c) {
			insert_hydration(e, t, c), append_hydration(t, a), append_hydration(a, n);
		},
		p(e, t) {
			4 & t && set_data(n, e[2]);
		},
		d(e) {
			e && detach(t);
		}
	};
}
function create_default_slot$3(e) {
	let t,
		a = e[3]('checkDuplicateCitizenIDandProceed') + '';
	return {
		c() {
			t = text(a);
		},
		l(e) {
			t = claim_text(e, a);
		},
		m(e, a) {
			insert_hydration(e, t, a);
		},
		p(e, n) {
			8 & n && a !== (a = e[3]('checkDuplicateCitizenIDandProceed') + '') && set_data(t, a);
		},
		d(e) {
			e && detach(t);
		}
	};
}
function create_fragment$6(e) {
	let t,
		a,
		n,
		c,
		i,
		l,
		o,
		s,
		r,
		d,
		_,
		p,
		m,
		h,
		u,
		f,
		$,
		b,
		y,
		g,
		v,
		x,
		k,
		I,
		D,
		w,
		E,
		N = e[3]('step') + '',
		C = e[3]('of') + '',
		L = e[3]('checkDuplicateCitizenID') + '';
	function T(t) {
		e[5](t);
	}
	let P = { label: e[3]('citizenID') };
	function S(t) {
		e[6](t);
	}
	void 0 !== e[0] && (P.value = e[0]),
		(u = new TextBox({ props: P })),
		binding_callbacks.push(() => bind(u, 'value', T));
	let z = { label: e[3]('phone') };
	void 0 !== e[1] && (z.value = e[1]),
		(b = new TextBox({ props: z })),
		binding_callbacks.push(() => bind(b, 'value', S));
	let j = '' != e[0] && create_if_block$2(e);
	return (
		(D = new Button({
			props: { $$slots: { default: [create_default_slot$3] }, $$scope: { ctx: e } }
		})),
		D.$on('click', e[4]),
		{
			c() {
				(t = element('div')),
					(a = element('p')),
					(n = text(N)),
					(c = space()),
					(i = element('span')),
					(l = text(step)),
					(o = space()),
					(s = text(C)),
					(r = space()),
					(d = element('span')),
					(_ = text('3')),
					(p = space()),
					(m = element('hr')),
					(h = space()),
					create_component(u.$$.fragment),
					($ = space()),
					create_component(b.$$.fragment),
					(g = space()),
					(v = element('p')),
					(x = text(L)),
					(k = space()),
					j && j.c(),
					(I = space()),
					create_component(D.$$.fragment),
					this.h();
			},
			l(e) {
				t = claim_element(e, 'DIV', { class: !0 });
				var f = children(t);
				a = claim_element(f, 'P', { class: !0 });
				var y = children(a);
				(n = claim_text(y, N)), (c = claim_space(y)), (i = claim_element(y, 'SPAN', { class: !0 }));
				var w = children(i);
				(l = claim_text(w, step)),
					w.forEach(detach),
					(o = claim_space(y)),
					(s = claim_text(y, C)),
					(r = claim_space(y)),
					(d = claim_element(y, 'SPAN', { class: !0 }));
				var E = children(d);
				(_ = claim_text(E, '3')),
					E.forEach(detach),
					y.forEach(detach),
					(p = claim_space(f)),
					(m = claim_element(f, 'HR', {})),
					(h = claim_space(f)),
					claim_component(u.$$.fragment, f),
					($ = claim_space(f)),
					claim_component(b.$$.fragment, f),
					(g = claim_space(f)),
					(v = claim_element(f, 'P', { class: !0 }));
				var T = children(v);
				(x = claim_text(T, L)),
					T.forEach(detach),
					(k = claim_space(f)),
					j && j.l(f),
					(I = claim_space(f)),
					claim_component(D.$$.fragment, f),
					f.forEach(detach),
					this.h();
			},
			h() {
				attr(i, 'class', 'text-blue-600'),
					attr(d, 'class', 'text-blue-600'),
					attr(a, 'class', 'text-2xl'),
					attr(v, 'class', 'my-2'),
					attr(t, 'class', 'w-1/3 bg-pink-100 p-3');
			},
			m(e, f) {
				insert_hydration(e, t, f),
					append_hydration(t, a),
					append_hydration(a, n),
					append_hydration(a, c),
					append_hydration(a, i),
					append_hydration(i, l),
					append_hydration(a, o),
					append_hydration(a, s),
					append_hydration(a, r),
					append_hydration(a, d),
					append_hydration(d, _),
					append_hydration(t, p),
					append_hydration(t, m),
					append_hydration(t, h),
					mount_component(u, t, null),
					append_hydration(t, $),
					mount_component(b, t, null),
					append_hydration(t, g),
					append_hydration(t, v),
					append_hydration(v, x),
					append_hydration(t, k),
					j && j.m(t, null),
					append_hydration(t, I),
					mount_component(D, t, null),
					(E = !0);
			},
			p(a, [c]) {
				(e = a),
					(!E || 8 & c) && N !== (N = e[3]('step') + '') && set_data(n, N),
					(!E || 8 & c) && C !== (C = e[3]('of') + '') && set_data(s, C);
				const i = {};
				8 & c && (i.label = e[3]('citizenID')),
					!f && 1 & c && ((f = !0), (i.value = e[0]), add_flush_callback(() => (f = !1))),
					u.$set(i);
				const l = {};
				8 & c && (l.label = e[3]('phone')),
					!y && 2 & c && ((y = !0), (l.value = e[1]), add_flush_callback(() => (y = !1))),
					b.$set(l),
					(!E || 8 & c) && L !== (L = e[3]('checkDuplicateCitizenID') + '') && set_data(x, L),
					'' != e[0]
						? j
							? j.p(e, c)
							: ((j = create_if_block$2(e)), j.c(), j.m(t, I))
						: j && (j.d(1), (j = null));
				const o = {};
				264 & c && (o.$$scope = { dirty: c, ctx: e }), D.$set(o);
			},
			i(e) {
				E ||
					(transition_in(u.$$.fragment, e),
					transition_in(b.$$.fragment, e),
					transition_in(D.$$.fragment, e),
					w ||
						add_render_callback(() => {
							(w = create_in_transition(t, fly, {
								duration: 300,
								x: 100,
								opacity: 0.5,
								easing: quintOut
							})),
								w.start();
						}),
					(E = !0));
			},
			o(e) {
				transition_out(u.$$.fragment, e),
					transition_out(b.$$.fragment, e),
					transition_out(D.$$.fragment, e),
					(E = !1);
			},
			d(e) {
				e && detach(t),
					destroy_component(u),
					destroy_component(b),
					j && j.d(),
					destroy_component(D);
			}
		}
	);
}
let step = 1;
function IsNumeric(e) {
	return /^-?(0|INF|(0[1-7][0-7]*)|(0x[0-9a-fA-F]+)|((0|[1-9][0-9]*|(?=[.,]))([.,][0-9]+)?([eE]-?\d+)?))$/.test(
		e
	);
}
function Script_checkID(e) {
	if (!IsNumeric(e)) return !1;
	if (0 == e.substring(0, 1)) return !1;
	if (13 != e.length) return !1;
	for (var t = 0, a = 0; t < 12; t++) a += parseFloat(e.charAt(t)) * (13 - t);
	return (11 - (a % 11)) % 10 == parseFloat(e.charAt(12));
}
function instance$6(e, t, a) {
	let n;
	component_subscribe(e, X, (e) => a(3, (n = e)));
	const c = createEventDispatcher();
	let { citizenID: i = '' } = t,
		{ phone: l = '' } = t,
		o = '';
	return (
		(e.$$set = (e) => {
			'citizenID' in e && a(0, (i = e.citizenID)), 'phone' in e && a(1, (l = e.phone));
		}),
		[
			i,
			l,
			o,
			n,
			() => {
				13 == i.length
					? Script_checkID(i)
						? c('complete')
						: a(2, (o = n('citizenIDWrongFormat')))
					: a(2, (o = n('citizenIDWrongLength')));
			},
			function (e) {
				(i = e), a(0, i);
			},
			function (e) {
				(l = e), a(1, l);
			}
		]
	);
}
class CheckCitizenID extends SvelteComponent {
	constructor(e) {
		super(),
			init(this, e, instance$6, create_fragment$6, safe_not_equal, { citizenID: 0, phone: 1 });
	}
}
function get_each_context$2(e, t, a) {
	const n = e.slice();
	return (n[11] = t[a]), (n[13] = a), n;
}
function create_each_block$2(e) {
	let t,
		a,
		n,
		c,
		i,
		l = e[5][e[13]] + '',
		o = e[11] + '';
	return {
		c() {
			(t = element('option')), (a = text(l)), (n = text(' - ')), (c = text(o)), this.h();
		},
		l(e) {
			t = claim_element(e, 'OPTION', {});
			var i = children(t);
			(a = claim_text(i, l)),
				(n = claim_text(i, ' - ')),
				(c = claim_text(i, o)),
				i.forEach(detach),
				this.h();
		},
		h() {
			(t.__value = i = e[13] + 1), (t.value = t.__value);
		},
		m(e, i) {
			insert_hydration(e, t, i),
				append_hydration(t, a),
				append_hydration(t, n),
				append_hydration(t, c);
		},
		p: noop,
		d(e) {
			e && detach(t);
		}
	};
}
function create_fragment$5(e) {
	let t,
		a,
		n,
		c,
		i,
		l,
		o,
		s,
		r,
		d,
		_,
		p,
		m,
		h = e[4],
		u = [];
	for (let f = 0; f < h.length; f += 1) u[f] = create_each_block$2(get_each_context$2(e, h, f));
	return {
		c() {
			(t = element('div')),
				(a = element('div')),
				(n = element('input')),
				(i = space()),
				(l = element('div')),
				(o = element('select'));
			for (let e = 0; e < u.length; e += 1) u[e].c();
			(s = space()), (r = element('div')), (d = element('input')), this.h();
		},
		l(e) {
			t = claim_element(e, 'DIV', { class: !0 });
			var c = children(t);
			a = claim_element(c, 'DIV', { class: !0 });
			var _ = children(a);
			(n = claim_element(_, 'INPUT', { class: !0, placeholder: !0 })),
				_.forEach(detach),
				(i = claim_space(c)),
				(l = claim_element(c, 'DIV', { class: !0 }));
			var p = children(l);
			o = claim_element(p, 'SELECT', { class: !0 });
			var m = children(o);
			for (let t = 0; t < u.length; t += 1) u[t].l(m);
			m.forEach(detach),
				p.forEach(detach),
				(s = claim_space(c)),
				(r = claim_element(c, 'DIV', { class: !0 }));
			var h = children(r);
			(d = claim_element(h, 'INPUT', { class: !0, placeholder: !0 })),
				h.forEach(detach),
				c.forEach(detach),
				this.h();
		},
		h() {
			attr(
				n,
				'class',
				'px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full'
			),
				attr(n, 'placeholder', (c = e[3]('date'))),
				attr(a, 'class', 'w-24'),
				attr(
					o,
					'class',
					'px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full'
				),
				void 0 === e[1] && add_render_callback(() => e[9].call(o)),
				attr(l, 'class', 'w-60'),
				attr(
					d,
					'class',
					'px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full'
				),
				attr(d, 'placeholder', (_ = e[3]('be'))),
				attr(r, 'class', 'w-24'),
				attr(t, 'class', 'flex flex-row justify-between');
		},
		m(c, _) {
			insert_hydration(c, t, _),
				append_hydration(t, a),
				append_hydration(a, n),
				set_input_value(n, e[0]),
				append_hydration(t, i),
				append_hydration(t, l),
				append_hydration(l, o);
			for (let e = 0; e < u.length; e += 1) u[e].m(o, null);
			select_option(o, e[1]),
				append_hydration(t, s),
				append_hydration(t, r),
				append_hydration(r, d),
				set_input_value(d, e[2]),
				p ||
					((m = [
						listen(n, 'input', e[8]),
						listen(o, 'change', e[9]),
						listen(d, 'blur', e[6]),
						listen(d, 'input', e[10])
					]),
					(p = !0));
		},
		p(e, [t]) {
			if (
				(8 & t && c !== (c = e[3]('date')) && attr(n, 'placeholder', c),
				1 & t && n.value !== e[0] && set_input_value(n, e[0]),
				48 & t)
			) {
				let a;
				for (h = e[4], a = 0; a < h.length; a += 1) {
					const n = get_each_context$2(e, h, a);
					u[a] ? u[a].p(n, t) : ((u[a] = create_each_block$2(n)), u[a].c(), u[a].m(o, null));
				}
				for (; a < u.length; a += 1) u[a].d(1);
				u.length = h.length;
			}
			2 & t && select_option(o, e[1]),
				8 & t && _ !== (_ = e[3]('be')) && attr(d, 'placeholder', _),
				4 & t && d.value !== e[2] && set_input_value(d, e[2]);
		},
		i: noop,
		o: noop,
		d(e) {
			e && detach(t), destroy_each(u, e), (p = !1), run_all(m);
		}
	};
}
function instance$5(e, t, a) {
	let n;
	component_subscribe(e, X, (e) => a(3, (n = e))),
		dayjs.extend(localeData),
		dayjs.extend(customParseFormat),
		dayjs().localeData();
	let { date: c = new Date() } = t,
		i = dayjs(c).date(),
		l = dayjs(c).month() + 1,
		o = dayjs(c).year() + 543;
	dayjs.locale('en');
	const s = dayjs.months();
	dayjs.locale('th');
	const r = dayjs.months();
	return (
		(e.$$set = (e) => {
			'date' in e && a(7, (c = e.date));
		}),
		(e.$$.update = () => {
			if (7 & e.$$.dirty) {
				dayjs.locale('en');
				let e = `${l}-${i}-${parseInt(o) - 543}`,
					t = dayjs(e, 'M-D-YYYY');
				const n = dayjs(`${l}-1-${parseInt(o) - 543}`, 'M-D-YYYY').daysInMonth();
				parseInt(i) > n &&
					(a(0, (i = n)), (e = `${l}-${i}-${parseInt(o) - 543}`), (t = dayjs(e, 'M-D-YYYY'))),
					a(7, (c = t.toDate()));
			}
		}),
		[
			i,
			l,
			o,
			n,
			s,
			r,
			() => {
				(parseInt(o) < 2400 || parseInt(o) > 2600) && a(2, (o = dayjs().year() + 543));
			},
			c,
			function () {
				(i = this.value), a(0, i), a(1, l), a(2, o);
			},
			function () {
				(l = select_value(this)), a(1, l);
			},
			function () {
				(o = this.value), a(2, o);
			}
		]
	);
}
class DateInput extends SvelteComponent {
	constructor(e) {
		super(), init(this, e, instance$5, create_fragment$5, safe_not_equal, { date: 7 });
	}
}
function create_default_slot$2(e) {
	let t,
		a = e[4]('next') + '';
	return {
		c() {
			t = text(a);
		},
		l(e) {
			t = claim_text(e, a);
		},
		m(e, a) {
			insert_hydration(e, t, a);
		},
		p(e, n) {
			16 & n && a !== (a = e[4]('next') + '') && set_data(t, a);
		},
		d(e) {
			e && detach(t);
		}
	};
}
function create_fragment$4(e) {
	let t,
		a,
		n,
		c,
		i,
		l,
		o,
		s,
		r,
		d,
		_,
		p,
		m,
		h,
		u,
		f,
		$,
		b,
		y,
		g,
		v,
		x,
		k,
		I,
		D,
		w,
		E,
		N,
		C,
		L,
		T,
		P,
		S,
		z,
		j,
		B,
		O,
		V,
		A,
		G,
		q,
		Y,
		F,
		H,
		X = e[4]('step') + '',
		R = e[4]('of') + '',
		M = e[4]('male') + '',
		U = e[4]('female') + '',
		W = e[4]('birthday') + '';
	function K(t) {
		e[6](t);
	}
	let Q = { label: e[4]('firstName') };
	function Z(t) {
		e[7](t);
	}
	void 0 !== e[0] && (Q.value = e[0]),
		(u = new TextBox({ props: Q })),
		binding_callbacks.push(() => bind(u, 'value', K));
	let J = { label: e[4]('lastName') };
	function ee(t) {
		e[11](t);
	}
	void 0 !== e[1] && (J.value = e[1]),
		(b = new TextBox({ props: J })),
		binding_callbacks.push(() => bind(b, 'value', Z));
	let te = {};
	return (
		void 0 !== e[3] && (te.date = e[3]),
		(B = new DateInput({ props: te })),
		binding_callbacks.push(() => bind(B, 'date', ee)),
		(G = new Button({
			props: { $$slots: { default: [create_default_slot$2] }, $$scope: { ctx: e } }
		})),
		G.$on('click', e[5]),
		{
			c() {
				(t = element('div')),
					(a = element('p')),
					(n = text(X)),
					(c = space()),
					(i = element('span')),
					(l = text('2')),
					(o = space()),
					(s = text(R)),
					(r = space()),
					(d = element('span')),
					(_ = text('3')),
					(p = space()),
					(m = element('hr')),
					(h = space()),
					create_component(u.$$.fragment),
					($ = space()),
					create_component(b.$$.fragment),
					(g = space()),
					(v = element('p')),
					(x = element('input')),
					(k = space()),
					(I = element('label')),
					(D = text(M)),
					(w = space()),
					(E = element('input')),
					(N = space()),
					(C = element('label')),
					(L = text(U)),
					(T = space()),
					(P = element('div')),
					(S = text(W)),
					(z = space()),
					(j = element('div')),
					create_component(B.$$.fragment),
					(V = space()),
					(A = space()),
					create_component(G.$$.fragment),
					this.h();
			},
			l(e) {
				t = claim_element(e, 'DIV', { class: !0 });
				var f = children(t);
				a = claim_element(f, 'P', { class: !0 });
				var y = children(a);
				(n = claim_text(y, X)), (c = claim_space(y)), (i = claim_element(y, 'SPAN', { class: !0 }));
				var O = children(i);
				(l = claim_text(O, '2')),
					O.forEach(detach),
					(o = claim_space(y)),
					(s = claim_text(y, R)),
					(r = claim_space(y)),
					(d = claim_element(y, 'SPAN', { class: !0 }));
				var q = children(d);
				(_ = claim_text(q, '3')),
					q.forEach(detach),
					y.forEach(detach),
					(p = claim_space(f)),
					(m = claim_element(f, 'HR', {})),
					(h = claim_space(f)),
					claim_component(u.$$.fragment, f),
					($ = claim_space(f)),
					claim_component(b.$$.fragment, f),
					(g = claim_space(f)),
					(v = claim_element(f, 'P', { class: !0 }));
				var Y = children(v);
				(x = claim_element(Y, 'INPUT', { type: !0, id: !0 })),
					(k = claim_space(Y)),
					(I = claim_element(Y, 'LABEL', { for: !0 }));
				var F = children(I);
				(D = claim_text(F, M)),
					F.forEach(detach),
					(w = claim_space(Y)),
					(E = claim_element(Y, 'INPUT', { type: !0, id: !0 })),
					(N = claim_space(Y)),
					(C = claim_element(Y, 'LABEL', { for: !0 }));
				var H = children(C);
				(L = claim_text(H, U)),
					H.forEach(detach),
					Y.forEach(detach),
					(T = claim_space(f)),
					(P = claim_element(f, 'DIV', { class: !0 }));
				var K = children(P);
				(S = claim_text(K, W)), (z = claim_space(K)), (j = claim_element(K, 'DIV', { class: !0 }));
				var Q = children(j);
				claim_component(B.$$.fragment, Q),
					Q.forEach(detach),
					K.forEach(detach),
					(V = claim_space(f)),
					(A = claim_space(f)),
					claim_component(G.$$.fragment, f),
					f.forEach(detach),
					this.h();
			},
			h() {
				attr(i, 'class', 'text-blue-600'),
					attr(d, 'class', 'text-blue-600'),
					attr(a, 'class', 'text-2xl'),
					attr(x, 'type', 'radio'),
					(x.__value = 'm'),
					(x.value = x.__value),
					attr(x, 'id', 'male'),
					e[9][0].push(x),
					attr(I, 'for', 'male'),
					attr(E, 'type', 'radio'),
					(E.__value = 'f'),
					(E.value = E.__value),
					attr(E, 'id', 'female'),
					e[9][0].push(E),
					attr(C, 'for', 'female'),
					attr(v, 'class', 'my-2'),
					attr(j, 'class', 'mt-2 mb-3'),
					attr(P, 'class', 'my-2'),
					attr(t, 'class', 'w-1/3 bg-pink-100 p-3');
			},
			m(f, y) {
				insert_hydration(f, t, y),
					append_hydration(t, a),
					append_hydration(a, n),
					append_hydration(a, c),
					append_hydration(a, i),
					append_hydration(i, l),
					append_hydration(a, o),
					append_hydration(a, s),
					append_hydration(a, r),
					append_hydration(a, d),
					append_hydration(d, _),
					append_hydration(t, p),
					append_hydration(t, m),
					append_hydration(t, h),
					mount_component(u, t, null),
					append_hydration(t, $),
					mount_component(b, t, null),
					append_hydration(t, g),
					append_hydration(t, v),
					append_hydration(v, x),
					(x.checked = x.__value === e[2]),
					append_hydration(v, k),
					append_hydration(v, I),
					append_hydration(I, D),
					append_hydration(v, w),
					append_hydration(v, E),
					(E.checked = E.__value === e[2]),
					append_hydration(v, N),
					append_hydration(v, C),
					append_hydration(C, L),
					append_hydration(t, T),
					append_hydration(t, P),
					append_hydration(P, S),
					append_hydration(P, z),
					append_hydration(P, j),
					mount_component(B, j, null),
					append_hydration(t, V),
					append_hydration(t, A),
					mount_component(G, t, null),
					(Y = !0),
					F || ((H = [listen(x, 'change', e[8]), listen(E, 'change', e[10])]), (F = !0));
			},
			p(t, [a]) {
				(e = t),
					(!Y || 16 & a) && X !== (X = e[4]('step') + '') && set_data(n, X),
					(!Y || 16 & a) && R !== (R = e[4]('of') + '') && set_data(s, R);
				const c = {};
				16 & a && (c.label = e[4]('firstName')),
					!f && 1 & a && ((f = !0), (c.value = e[0]), add_flush_callback(() => (f = !1))),
					u.$set(c);
				const i = {};
				16 & a && (i.label = e[4]('lastName')),
					!y && 2 & a && ((y = !0), (i.value = e[1]), add_flush_callback(() => (y = !1))),
					b.$set(i),
					4 & a && (x.checked = x.__value === e[2]),
					(!Y || 16 & a) && M !== (M = e[4]('male') + '') && set_data(D, M),
					4 & a && (E.checked = E.__value === e[2]),
					(!Y || 16 & a) && U !== (U = e[4]('female') + '') && set_data(L, U),
					(!Y || 16 & a) && W !== (W = e[4]('birthday') + '') && set_data(S, W);
				const l = {};
				!O && 8 & a && ((O = !0), (l.date = e[3]), add_flush_callback(() => (O = !1))), B.$set(l);
				const o = {};
				8208 & a && (o.$$scope = { dirty: a, ctx: e }), G.$set(o);
			},
			i(e) {
				Y ||
					(transition_in(u.$$.fragment, e),
					transition_in(b.$$.fragment, e),
					transition_in(B.$$.fragment, e),
					transition_in(G.$$.fragment, e),
					q ||
						add_render_callback(() => {
							(q = create_in_transition(t, fly, {
								duration: 300,
								x: 100,
								opacity: 0.5,
								easing: quintOut
							})),
								q.start();
						}),
					(Y = !0));
			},
			o(e) {
				transition_out(u.$$.fragment, e),
					transition_out(b.$$.fragment, e),
					transition_out(B.$$.fragment, e),
					transition_out(G.$$.fragment, e),
					(Y = !1);
			},
			d(a) {
				a && detach(t),
					destroy_component(u),
					destroy_component(b),
					e[9][0].splice(e[9][0].indexOf(x), 1),
					e[9][0].splice(e[9][0].indexOf(E), 1),
					destroy_component(B),
					destroy_component(G),
					(F = !1),
					run_all(H);
			}
		}
	);
}
function instance$4(e, t, a) {
	let n;
	component_subscribe(e, X, (e) => a(4, (n = e)));
	const c = createEventDispatcher();
	let { firstName: i = '' } = t,
		{ lastName: l = '' } = t,
		{ gender: o = 'm' } = t,
		{ birthday: s = new Date() } = t;
	return (
		(e.$$set = (e) => {
			'firstName' in e && a(0, (i = e.firstName)),
				'lastName' in e && a(1, (l = e.lastName)),
				'gender' in e && a(2, (o = e.gender)),
				'birthday' in e && a(3, (s = e.birthday));
		}),
		[
			i,
			l,
			o,
			s,
			n,
			() => {
				c('complete');
			},
			function (e) {
				(i = e), a(0, i);
			},
			function (e) {
				(l = e), a(1, l);
			},
			function () {
				(o = this.__value), a(2, o);
			},
			[[]],
			function () {
				(o = this.__value), a(2, o);
			},
			function (e) {
				(s = e), a(3, s);
			}
		]
	);
}
class GetBasicPatientInfo extends SvelteComponent {
	constructor(e) {
		super(),
			init(this, e, instance$4, create_fragment$4, safe_not_equal, {
				firstName: 0,
				lastName: 1,
				gender: 2,
				birthday: 3
			});
	}
}
function get_each_context$1(e, t, a) {
	const n = e.slice();
	return (n[6] = t[a]), n;
}
function create_each_block$1(e) {
	let t,
		a,
		n,
		c = e[6].label + '';
	return {
		c() {
			(t = element('option')), (a = text(c)), this.h();
		},
		l(e) {
			t = claim_element(e, 'OPTION', {});
			var n = children(t);
			(a = claim_text(n, c)), n.forEach(detach), this.h();
		},
		h() {
			(t.__value = n = e[6].id), (t.value = t.__value);
		},
		m(e, n) {
			insert_hydration(e, t, n), append_hydration(t, a);
		},
		p(e, i) {
			2 & i && c !== (c = e[6].label + '') && set_data(a, c),
				2 & i && n !== (n = e[6].id) && ((t.__value = n), (t.value = t.__value));
		},
		d(e) {
			e && detach(t);
		}
	};
}
function create_fragment$3(e) {
	let t,
		a,
		n,
		c,
		i,
		l,
		o,
		s = e[1],
		r = [];
	for (let d = 0; d < s.length; d += 1) r[d] = create_each_block$1(get_each_context$1(e, s, d));
	return {
		c() {
			(t = element('label')),
				(a = text(e[2])),
				(n = space()),
				(c = element('div')),
				(i = element('select'));
			for (let e = 0; e < r.length; e += 1) r[e].c();
			this.h();
		},
		l(l) {
			t = claim_element(l, 'LABEL', { for: !0 });
			var o = children(t);
			(a = claim_text(o, e[2])),
				o.forEach(detach),
				(n = claim_space(l)),
				(c = claim_element(l, 'DIV', { class: !0 }));
			var s = children(c);
			i = claim_element(s, 'SELECT', { class: !0 });
			var d = children(i);
			for (let e = 0; e < r.length; e += 1) r[e].l(d);
			d.forEach(detach), s.forEach(detach), this.h();
		},
		h() {
			attr(t, 'for', e[2]),
				attr(
					i,
					'class',
					'px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full'
				),
				void 0 === e[0] && add_render_callback(() => e[4].call(i)),
				attr(c, 'class', 'mt-2 mb-3');
		},
		m(s, d) {
			insert_hydration(s, t, d),
				append_hydration(t, a),
				insert_hydration(s, n, d),
				insert_hydration(s, c, d),
				append_hydration(c, i);
			for (let e = 0; e < r.length; e += 1) r[e].m(i, null);
			select_option(i, e[0]),
				l || ((o = [listen(i, 'change', e[4]), listen(i, 'change', e[3])]), (l = !0));
		},
		p(e, [n]) {
			if ((4 & n && set_data(a, e[2]), 4 & n && attr(t, 'for', e[2]), 2 & n)) {
				let t;
				for (s = e[1], t = 0; t < s.length; t += 1) {
					const a = get_each_context$1(e, s, t);
					r[t] ? r[t].p(a, n) : ((r[t] = create_each_block$1(a)), r[t].c(), r[t].m(i, null));
				}
				for (; t < r.length; t += 1) r[t].d(1);
				r.length = s.length;
			}
			3 & n && select_option(i, e[0]);
		},
		i: noop,
		o: noop,
		d(e) {
			e && detach(t), e && detach(n), e && detach(c), destroy_each(r, e), (l = !1), run_all(o);
		}
	};
}
function instance$3(e, t, a) {
	let { options: n = [] } = t,
		{ label: c = '' } = t,
		{ value: i = '' } = t;
	const l = createEventDispatcher();
	return (
		(e.$$set = (e) => {
			'options' in e && a(1, (n = e.options)),
				'label' in e && a(2, (c = e.label)),
				'value' in e && a(0, (i = e.value));
		}),
		[
			i,
			n,
			c,
			() => {
				l('change');
			},
			function () {
				(i = select_value(this)), a(0, i), a(1, n);
			}
		]
	);
}
class SelectBox extends SvelteComponent {
	constructor(e) {
		super(),
			init(this, e, instance$3, create_fragment$3, safe_not_equal, {
				options: 1,
				label: 2,
				value: 0
			});
	}
}
function create_if_block_1$1(e) {
	let t, a, n, c;
	function i(t) {
		e[8](t);
	}
	let l = { options: e[3], label: e[4]('subdistrict') };
	return (
		void 0 !== e[1] && (l.value = e[1]),
		(a = new SelectBox({ props: l })),
		binding_callbacks.push(() => bind(a, 'value', i)),
		a.$on('change', e[5]),
		{
			c() {
				(t = element('div')), create_component(a.$$.fragment), this.h();
			},
			l(e) {
				t = claim_element(e, 'DIV', { class: !0 });
				var n = children(t);
				claim_component(a.$$.fragment, n), n.forEach(detach), this.h();
			},
			h() {
				attr(t, 'class', 'w-2/3 pl-2');
			},
			m(e, n) {
				insert_hydration(e, t, n), mount_component(a, t, null), (c = !0);
			},
			p(e, t) {
				const c = {};
				8 & t && (c.options = e[3]),
					16 & t && (c.label = e[4]('subdistrict')),
					!n && 2 & t && ((n = !0), (c.value = e[1]), add_flush_callback(() => (n = !1))),
					a.$set(c);
			},
			i(e) {
				c || (transition_in(a.$$.fragment, e), (c = !0));
			},
			o(e) {
				transition_out(a.$$.fragment, e), (c = !1);
			},
			d(e) {
				e && detach(t), destroy_component(a);
			}
		}
	);
}
function create_if_block$1(e) {
	let t,
		a,
		n,
		c,
		i,
		l = e[4]('addressLineTwo') + '';
	return {
		c() {
			(t = element('span')),
				(a = text(l)),
				(n = space()),
				(c = element('p')),
				(i = text(e[2])),
				this.h();
		},
		l(o) {
			t = claim_element(o, 'SPAN', { class: !0 });
			var s = children(t);
			(a = claim_text(s, l)),
				s.forEach(detach),
				(n = claim_space(o)),
				(c = claim_element(o, 'P', {}));
			var r = children(c);
			(i = claim_text(r, e[2])), r.forEach(detach), this.h();
		},
		h() {
			attr(t, 'class', 'text-blue-800 bold');
		},
		m(e, l) {
			insert_hydration(e, t, l),
				append_hydration(t, a),
				insert_hydration(e, n, l),
				insert_hydration(e, c, l),
				append_hydration(c, i);
		},
		p(e, t) {
			16 & t && l !== (l = e[4]('addressLineTwo') + '') && set_data(a, l),
				4 & t && set_data(i, e[2]);
		},
		d(e) {
			e && detach(t), e && detach(n), e && detach(c);
		}
	};
}
function create_fragment$2(e) {
	let t, a, n, c, i, l, o, s;
	function r(t) {
		e[7](t);
	}
	let d = { label: e[4]('postalCode') };
	void 0 !== e[0] && (d.value = e[0]),
		(n = new TextBox({ props: d })),
		binding_callbacks.push(() => bind(n, 'value', r));
	let _ = 0 != e[3].length && create_if_block_1$1(e),
		p = 0 != e[2].length && create_if_block$1(e);
	return {
		c() {
			(t = element('div')),
				(a = element('div')),
				create_component(n.$$.fragment),
				(i = space()),
				_ && _.c(),
				(l = space()),
				p && p.c(),
				(o = empty()),
				this.h();
		},
		l(e) {
			t = claim_element(e, 'DIV', { class: !0 });
			var c = children(t);
			a = claim_element(c, 'DIV', { class: !0 });
			var s = children(a);
			claim_component(n.$$.fragment, s),
				s.forEach(detach),
				(i = claim_space(c)),
				_ && _.l(c),
				c.forEach(detach),
				(l = claim_space(e)),
				p && p.l(e),
				(o = empty()),
				this.h();
		},
		h() {
			attr(a, 'class', 'w-1/3'), attr(t, 'class', 'flex');
		},
		m(e, c) {
			insert_hydration(e, t, c),
				append_hydration(t, a),
				mount_component(n, a, null),
				append_hydration(t, i),
				_ && _.m(t, null),
				insert_hydration(e, l, c),
				p && p.m(e, c),
				insert_hydration(e, o, c),
				(s = !0);
		},
		p(e, [a]) {
			const i = {};
			16 & a && (i.label = e[4]('postalCode')),
				!c && 1 & a && ((c = !0), (i.value = e[0]), add_flush_callback(() => (c = !1))),
				n.$set(i),
				0 != e[3].length
					? _
						? (_.p(e, a), 8 & a && transition_in(_, 1))
						: ((_ = create_if_block_1$1(e)), _.c(), transition_in(_, 1), _.m(t, null))
					: _ &&
					  (group_outros(),
					  transition_out(_, 1, 1, () => {
							_ = null;
					  }),
					  check_outros()),
				0 != e[2].length
					? p
						? p.p(e, a)
						: ((p = create_if_block$1(e)), p.c(), p.m(o.parentNode, o))
					: p && (p.d(1), (p = null));
		},
		i(e) {
			s || (transition_in(n.$$.fragment, e), transition_in(_), (s = !0));
		},
		o(e) {
			transition_out(n.$$.fragment, e), transition_out(_), (s = !1);
		},
		d(e) {
			e && detach(t), destroy_component(n), _ && _.d(), e && detach(l), p && p.d(e), e && detach(o);
		}
	};
}
function instance$2(e, t, a) {
	let n;
	component_subscribe(e, X, (e) => a(4, (n = e)));
	let { value: c = '' } = t,
		{ postalCode: i = '' } = t,
		{ selectedSubdistrict: l = '' } = t,
		o = '',
		s = [];
	return (
		(e.$$set = (e) => {
			'value' in e && a(6, (c = e.value)),
				'postalCode' in e && a(0, (i = e.postalCode)),
				'selectedSubdistrict' in e && a(1, (l = e.selectedSubdistrict));
		}),
		(e.$$.update = () => {
			64 & e.$$.dirty && a(2, (o = c)),
				1 & e.$$.dirty &&
					5 == i.length &&
					superagent
						.get('/postalCodeInfo')
						.query({ postalCode: i })
						.then((e) => e.body)
						.then((e) => {
							a(3, (s = e.subDistrict.map((e) => ({ id: e, label: e }))));
						});
		}),
		[
			i,
			l,
			o,
			s,
			n,
			() => {
				superagent
					.get('/postalCodeInfo')
					.query({ postalCode: i, subDistrict: l })
					.then((e) => e.body)
					.then((e) => {
						a(2, (o = `${e.subDistrict}, ${e.districtName}, ${e.provinceName}, ${e.zipCode}`)),
							a(6, (c = o));
					});
			},
			c,
			function (e) {
				(i = e), a(0, i);
			},
			function (e) {
				(l = e), a(1, l);
			}
		]
	);
}
class CityPicker extends SvelteComponent {
	constructor(e) {
		super(),
			init(this, e, instance$2, create_fragment$2, safe_not_equal, {
				value: 6,
				postalCode: 0,
				selectedSubdistrict: 1
			});
	}
}
function create_default_slot$1(e) {
	let t,
		a = e[4]('next') + '';
	return {
		c() {
			t = text(a);
		},
		l(e) {
			t = claim_text(e, a);
		},
		m(e, a) {
			insert_hydration(e, t, a);
		},
		p(e, n) {
			16 & n && a !== (a = e[4]('next') + '') && set_data(t, a);
		},
		d(e) {
			e && detach(t);
		}
	};
}
function create_fragment$1(e) {
	let t,
		a,
		n,
		c,
		i,
		l,
		o,
		s,
		r,
		d,
		_,
		p,
		m,
		h,
		u,
		f,
		$,
		b,
		y,
		g,
		v,
		x,
		k,
		I,
		D,
		w,
		E = e[4]('step') + '',
		N = e[4]('of') + '';
	function C(t) {
		e[6](t);
	}
	let L = { label: e[4]('addressLineOne') };
	function T(t) {
		e[7](t);
	}
	function P(t) {
		e[8](t);
	}
	function S(t) {
		e[9](t);
	}
	void 0 !== e[0] && (L.value = e[0]),
		(u = new TextBox({ props: L })),
		binding_callbacks.push(() => bind(u, 'value', C));
	let z = {};
	return (
		void 0 !== e[2] && (z.postalCode = e[2]),
		void 0 !== e[3] && (z.selectedSubdistrict = e[3]),
		void 0 !== e[1] && (z.value = e[1]),
		(y = new CityPicker({ props: z })),
		binding_callbacks.push(() => bind(y, 'postalCode', T)),
		binding_callbacks.push(() => bind(y, 'selectedSubdistrict', P)),
		binding_callbacks.push(() => bind(y, 'value', S)),
		(I = new Button({
			props: { $$slots: { default: [create_default_slot$1] }, $$scope: { ctx: e } }
		})),
		I.$on('click', e[5]),
		{
			c() {
				(t = element('div')),
					(a = element('p')),
					(n = text(E)),
					(c = space()),
					(i = element('span')),
					(l = text('3')),
					(o = space()),
					(s = text(N)),
					(r = space()),
					(d = element('span')),
					(_ = text('3')),
					(p = space()),
					(m = element('hr')),
					(h = space()),
					create_component(u.$$.fragment),
					($ = space()),
					(b = element('div')),
					create_component(y.$$.fragment),
					(k = space()),
					create_component(I.$$.fragment),
					this.h();
			},
			l(e) {
				t = claim_element(e, 'DIV', { class: !0 });
				var f = children(t);
				a = claim_element(f, 'P', { class: !0 });
				var g = children(a);
				(n = claim_text(g, E)), (c = claim_space(g)), (i = claim_element(g, 'SPAN', { class: !0 }));
				var v = children(i);
				(l = claim_text(v, '3')),
					v.forEach(detach),
					(o = claim_space(g)),
					(s = claim_text(g, N)),
					(r = claim_space(g)),
					(d = claim_element(g, 'SPAN', { class: !0 }));
				var x = children(d);
				(_ = claim_text(x, '3')),
					x.forEach(detach),
					g.forEach(detach),
					(p = claim_space(f)),
					(m = claim_element(f, 'HR', {})),
					(h = claim_space(f)),
					claim_component(u.$$.fragment, f),
					($ = claim_space(f)),
					(b = claim_element(f, 'DIV', { class: !0 }));
				var D = children(b);
				claim_component(y.$$.fragment, D),
					D.forEach(detach),
					(k = claim_space(f)),
					claim_component(I.$$.fragment, f),
					f.forEach(detach),
					this.h();
			},
			h() {
				attr(i, 'class', 'text-blue-600'),
					attr(d, 'class', 'text-blue-600'),
					attr(a, 'class', 'text-2xl'),
					attr(b, 'class', 'my-2'),
					attr(t, 'class', 'w-1/3 bg-pink-100 p-3');
			},
			m(e, f) {
				insert_hydration(e, t, f),
					append_hydration(t, a),
					append_hydration(a, n),
					append_hydration(a, c),
					append_hydration(a, i),
					append_hydration(i, l),
					append_hydration(a, o),
					append_hydration(a, s),
					append_hydration(a, r),
					append_hydration(a, d),
					append_hydration(d, _),
					append_hydration(t, p),
					append_hydration(t, m),
					append_hydration(t, h),
					mount_component(u, t, null),
					append_hydration(t, $),
					append_hydration(t, b),
					mount_component(y, b, null),
					append_hydration(t, k),
					mount_component(I, t, null),
					(w = !0);
			},
			p(t, [a]) {
				(e = t),
					(!w || 16 & a) && E !== (E = e[4]('step') + '') && set_data(n, E),
					(!w || 16 & a) && N !== (N = e[4]('of') + '') && set_data(s, N);
				const c = {};
				16 & a && (c.label = e[4]('addressLineOne')),
					!f && 1 & a && ((f = !0), (c.value = e[0]), add_flush_callback(() => (f = !1))),
					u.$set(c);
				const i = {};
				!g && 4 & a && ((g = !0), (i.postalCode = e[2]), add_flush_callback(() => (g = !1))),
					!v &&
						8 & a &&
						((v = !0), (i.selectedSubdistrict = e[3]), add_flush_callback(() => (v = !1))),
					!x && 2 & a && ((x = !0), (i.value = e[1]), add_flush_callback(() => (x = !1))),
					y.$set(i);
				const l = {};
				2064 & a && (l.$$scope = { dirty: a, ctx: e }), I.$set(l);
			},
			i(e) {
				w ||
					(transition_in(u.$$.fragment, e),
					transition_in(y.$$.fragment, e),
					transition_in(I.$$.fragment, e),
					D ||
						add_render_callback(() => {
							(D = create_in_transition(t, fly, {
								duration: 300,
								x: 100,
								opacity: 0.5,
								easing: quintOut
							})),
								D.start();
						}),
					(w = !0));
			},
			o(e) {
				transition_out(u.$$.fragment, e),
					transition_out(y.$$.fragment, e),
					transition_out(I.$$.fragment, e),
					(w = !1);
			},
			d(e) {
				e && detach(t), destroy_component(u), destroy_component(y), destroy_component(I);
			}
		}
	);
}
function instance$1(e, t, a) {
	let n;
	component_subscribe(e, X, (e) => a(4, (n = e)));
	const c = createEventDispatcher();
	let { addressLineOne: i = '' } = t,
		{ addressLineTwo: l = '' } = t,
		{ postalCode: o = '' } = t,
		{ subdistrict: s = '' } = t;
	return (
		(e.$$set = (e) => {
			'addressLineOne' in e && a(0, (i = e.addressLineOne)),
				'addressLineTwo' in e && a(1, (l = e.addressLineTwo)),
				'postalCode' in e && a(2, (o = e.postalCode)),
				'subdistrict' in e && a(3, (s = e.subdistrict));
		}),
		[
			i,
			l,
			o,
			s,
			n,
			() => {
				c('complete');
			},
			function (e) {
				(i = e), a(0, i);
			},
			function (e) {
				(o = e), a(2, o);
			},
			function (e) {
				(s = e), a(3, s);
			},
			function (e) {
				(l = e), a(1, l);
			}
		]
	);
}
class GetAddress extends SvelteComponent {
	constructor(e) {
		super(),
			init(this, e, instance$1, create_fragment$1, safe_not_equal, {
				addressLineOne: 0,
				addressLineTwo: 1,
				postalCode: 2,
				subdistrict: 3
			});
	}
}
function get_each_context(e, t, a) {
	const n = e.slice();
	return (n[28] = t[a]), n;
}
function create_if_block_3(e) {
	let t,
		a,
		n,
		c,
		i,
		l,
		o,
		s,
		r,
		d,
		_,
		p,
		m,
		h = e[11]('confirm') + '';
	(a = new Button({
		props: { $$slots: { default: [create_default_slot_3] }, $$scope: { ctx: e } }
	})),
		a.$on('click', e[12]);
	let u = [
			'citizenID',
			'phone',
			'firstName',
			'lastName',
			'gender',
			'birthday',
			'addressLineOne',
			'addressLineTwo'
		],
		f = [];
	for (let $ = 0; $ < 8; $ += 1) f[$] = create_each_block(get_each_context(e, u, $));
	return (
		(p = new Button({
			props: { $$slots: { default: [create_default_slot_2] }, $$scope: { ctx: e } }
		})),
		p.$on('click', e[16]),
		{
			c() {
				(t = element('div')),
					create_component(a.$$.fragment),
					(n = space()),
					(c = element('div')),
					(i = element('h1')),
					(l = text(h)),
					(o = space()),
					(s = element('table'));
				for (let e = 0; e < 8; e += 1) f[e].c();
				(r = space()),
					(d = element('hr')),
					(_ = space()),
					create_component(p.$$.fragment),
					this.h();
			},
			l(e) {
				t = claim_element(e, 'DIV', { class: !0 });
				var m = children(t);
				claim_component(a.$$.fragment, m),
					(n = claim_space(m)),
					(c = claim_element(m, 'DIV', { class: !0 }));
				var u = children(c);
				i = claim_element(u, 'H1', { class: !0 });
				var $ = children(i);
				(l = claim_text($, h)),
					$.forEach(detach),
					(o = claim_space(u)),
					(s = claim_element(u, 'TABLE', { class: !0 }));
				var b = children(s);
				for (let t = 0; t < 8; t += 1) f[t].l(b);
				b.forEach(detach),
					(r = claim_space(u)),
					(d = claim_element(u, 'HR', { class: !0 })),
					(_ = claim_space(u)),
					claim_component(p.$$.fragment, u),
					u.forEach(detach),
					m.forEach(detach),
					this.h();
			},
			h() {
				attr(i, 'class', 'text-2xl bold mb-2'),
					attr(s, 'class', 'table-auto'),
					attr(d, 'class', 'my-2'),
					attr(c, 'class', 'p-3 bg-yellow-100'),
					attr(t, 'class', 'py-3 flex justify-center');
			},
			m(e, h) {
				insert_hydration(e, t, h),
					mount_component(a, t, null),
					append_hydration(t, n),
					append_hydration(t, c),
					append_hydration(c, i),
					append_hydration(i, l),
					append_hydration(c, o),
					append_hydration(c, s);
				for (let t = 0; t < 8; t += 1) f[t].m(s, null);
				append_hydration(c, r),
					append_hydration(c, d),
					append_hydration(c, _),
					mount_component(p, c, null),
					(m = !0);
			},
			p(e, t) {
				const n = {};
				if (
					((2048 & t[0]) | (1 & t[1]) && (n.$$scope = { dirty: t, ctx: e }),
					a.$set(n),
					(!m || 2048 & t[0]) && h !== (h = e[11]('confirm') + '') && set_data(l, h),
					133120 & t[0])
				) {
					let a;
					for (
						u = [
							'citizenID',
							'phone',
							'firstName',
							'lastName',
							'gender',
							'birthday',
							'addressLineOne',
							'addressLineTwo'
						],
							a = 0;
						a < 8;
						a += 1
					) {
						const n = get_each_context(e, u, a);
						f[a] ? f[a].p(n, t) : ((f[a] = create_each_block(n)), f[a].c(), f[a].m(s, null));
					}
					for (; a < 8; a += 1) f[a].d(1);
				}
				const c = {};
				(2048 & t[0]) | (1 & t[1]) && (c.$$scope = { dirty: t, ctx: e }), p.$set(c);
			},
			i(e) {
				m || (transition_in(a.$$.fragment, e), transition_in(p.$$.fragment, e), (m = !0));
			},
			o(e) {
				transition_out(a.$$.fragment, e), transition_out(p.$$.fragment, e), (m = !1);
			},
			d(e) {
				e && detach(t), destroy_component(a), destroy_each(f, e), destroy_component(p);
			}
		}
	);
}
function create_if_block_2(e) {
	let t, a, n, c, i, l, o, s, r;
	function d(t) {
		e[24](t);
	}
	function _(t) {
		e[25](t);
	}
	function p(t) {
		e[26](t);
	}
	function m(t) {
		e[27](t);
	}
	(a = new Button({
		props: { $$slots: { default: [create_default_slot_1] }, $$scope: { ctx: e } }
	})),
		a.$on('click', e[12]);
	let h = {};
	return (
		void 0 !== e[9] && (h.postalCode = e[9]),
		void 0 !== e[10] && (h.subdistrict = e[10]),
		void 0 !== e[6] && (h.addressLineOne = e[6]),
		void 0 !== e[7] && (h.addressLineTwo = e[7]),
		(c = new GetAddress({ props: h })),
		binding_callbacks.push(() => bind(c, 'postalCode', d)),
		binding_callbacks.push(() => bind(c, 'subdistrict', _)),
		binding_callbacks.push(() => bind(c, 'addressLineOne', p)),
		binding_callbacks.push(() => bind(c, 'addressLineTwo', m)),
		c.$on('complete', e[15]),
		{
			c() {
				(t = element('div')),
					create_component(a.$$.fragment),
					(n = space()),
					create_component(c.$$.fragment),
					this.h();
			},
			l(e) {
				t = claim_element(e, 'DIV', { class: !0 });
				var i = children(t);
				claim_component(a.$$.fragment, i),
					(n = claim_space(i)),
					claim_component(c.$$.fragment, i),
					i.forEach(detach),
					this.h();
			},
			h() {
				attr(t, 'class', 'py-3 flex justify-center');
			},
			m(e, i) {
				insert_hydration(e, t, i),
					mount_component(a, t, null),
					append_hydration(t, n),
					mount_component(c, t, null),
					(r = !0);
			},
			p(e, t) {
				const n = {};
				(2048 & t[0]) | (1 & t[1]) && (n.$$scope = { dirty: t, ctx: e }), a.$set(n);
				const r = {};
				!i && 512 & t[0] && ((i = !0), (r.postalCode = e[9]), add_flush_callback(() => (i = !1))),
					!l &&
						1024 & t[0] &&
						((l = !0), (r.subdistrict = e[10]), add_flush_callback(() => (l = !1))),
					!o &&
						64 & t[0] &&
						((o = !0), (r.addressLineOne = e[6]), add_flush_callback(() => (o = !1))),
					!s &&
						128 & t[0] &&
						((s = !0), (r.addressLineTwo = e[7]), add_flush_callback(() => (s = !1))),
					c.$set(r);
			},
			i(e) {
				r || (transition_in(a.$$.fragment, e), transition_in(c.$$.fragment, e), (r = !0));
			},
			o(e) {
				transition_out(a.$$.fragment, e), transition_out(c.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && detach(t), destroy_component(a), destroy_component(c);
			}
		}
	);
}
function create_if_block_1(e) {
	let t, a, n, c, i, l, o, s, r;
	function d(t) {
		e[20](t);
	}
	function _(t) {
		e[21](t);
	}
	function p(t) {
		e[22](t);
	}
	function m(t) {
		e[23](t);
	}
	(a = new Button({ props: { $$slots: { default: [create_default_slot] }, $$scope: { ctx: e } } })),
		a.$on('click', e[12]);
	let h = {};
	return (
		void 0 !== e[4] && (h.gender = e[4]),
		void 0 !== e[2] && (h.firstName = e[2]),
		void 0 !== e[3] && (h.lastName = e[3]),
		void 0 !== e[5] && (h.birthday = e[5]),
		(c = new GetBasicPatientInfo({ props: h })),
		binding_callbacks.push(() => bind(c, 'gender', d)),
		binding_callbacks.push(() => bind(c, 'firstName', _)),
		binding_callbacks.push(() => bind(c, 'lastName', p)),
		binding_callbacks.push(() => bind(c, 'birthday', m)),
		c.$on('complete', e[14]),
		{
			c() {
				(t = element('div')),
					create_component(a.$$.fragment),
					(n = space()),
					create_component(c.$$.fragment),
					this.h();
			},
			l(e) {
				t = claim_element(e, 'DIV', { class: !0 });
				var i = children(t);
				claim_component(a.$$.fragment, i),
					(n = claim_space(i)),
					claim_component(c.$$.fragment, i),
					i.forEach(detach),
					this.h();
			},
			h() {
				attr(t, 'class', 'py-3 flex justify-center');
			},
			m(e, i) {
				insert_hydration(e, t, i),
					mount_component(a, t, null),
					append_hydration(t, n),
					mount_component(c, t, null),
					(r = !0);
			},
			p(e, t) {
				const n = {};
				(2048 & t[0]) | (1 & t[1]) && (n.$$scope = { dirty: t, ctx: e }), a.$set(n);
				const r = {};
				!i && 16 & t[0] && ((i = !0), (r.gender = e[4]), add_flush_callback(() => (i = !1))),
					!l && 4 & t[0] && ((l = !0), (r.firstName = e[2]), add_flush_callback(() => (l = !1))),
					!o && 8 & t[0] && ((o = !0), (r.lastName = e[3]), add_flush_callback(() => (o = !1))),
					!s && 32 & t[0] && ((s = !0), (r.birthday = e[5]), add_flush_callback(() => (s = !1))),
					c.$set(r);
			},
			i(e) {
				r || (transition_in(a.$$.fragment, e), transition_in(c.$$.fragment, e), (r = !0));
			},
			o(e) {
				transition_out(a.$$.fragment, e), transition_out(c.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && detach(t), destroy_component(a), destroy_component(c);
			}
		}
	);
}
function create_if_block(e) {
	let t, a, n, c, i;
	function l(t) {
		e[18](t);
	}
	function o(t) {
		e[19](t);
	}
	let s = {};
	return (
		void 0 !== e[8] && (s.phone = e[8]),
		void 0 !== e[1] && (s.citizenID = e[1]),
		(a = new CheckCitizenID({ props: s })),
		binding_callbacks.push(() => bind(a, 'phone', l)),
		binding_callbacks.push(() => bind(a, 'citizenID', o)),
		a.$on('complete', e[13]),
		{
			c() {
				(t = element('div')), create_component(a.$$.fragment), this.h();
			},
			l(e) {
				t = claim_element(e, 'DIV', { class: !0 });
				var n = children(t);
				claim_component(a.$$.fragment, n), n.forEach(detach), this.h();
			},
			h() {
				attr(t, 'class', 'py-3 flex justify-center');
			},
			m(e, n) {
				insert_hydration(e, t, n), mount_component(a, t, null), (i = !0);
			},
			p(e, t) {
				const i = {};
				!n && 256 & t[0] && ((n = !0), (i.phone = e[8]), add_flush_callback(() => (n = !1))),
					!c && 2 & t[0] && ((c = !0), (i.citizenID = e[1]), add_flush_callback(() => (c = !1))),
					a.$set(i);
			},
			i(e) {
				i || (transition_in(a.$$.fragment, e), (i = !0));
			},
			o(e) {
				transition_out(a.$$.fragment, e), (i = !1);
			},
			d(e) {
				e && detach(t), destroy_component(a);
			}
		}
	);
}
function create_default_slot_3(e) {
	let t,
		a,
		n,
		c = e[11]('back') + '';
	return {
		c() {
			(t = element('i')), (a = space()), (n = text(c)), this.h();
		},
		l(e) {
			(t = claim_element(e, 'I', { class: !0 })),
				children(t).forEach(detach),
				(a = claim_space(e)),
				(n = claim_text(e, c)),
				this.h();
		},
		h() {
			attr(t, 'class', 'lni lni-backward');
		},
		m(e, c) {
			insert_hydration(e, t, c), insert_hydration(e, a, c), insert_hydration(e, n, c);
		},
		p(e, t) {
			2048 & t[0] && c !== (c = e[11]('back') + '') && set_data(n, c);
		},
		d(e) {
			e && detach(t), e && detach(a), e && detach(n);
		}
	};
}
function create_each_block(e) {
	let t,
		a,
		n,
		c,
		i,
		l,
		o,
		s = e[11](e[28]) + '',
		r = e[17](e[28]) + '';
	return {
		c() {
			(t = element('tr')),
				(a = element('td')),
				(n = text(s)),
				(c = space()),
				(i = element('td')),
				(l = text(r)),
				(o = space()),
				this.h();
		},
		l(e) {
			t = claim_element(e, 'TR', {});
			var d = children(t);
			a = claim_element(d, 'TD', { class: !0 });
			var _ = children(a);
			(n = claim_text(_, s)),
				_.forEach(detach),
				(c = claim_space(d)),
				(i = claim_element(d, 'TD', {}));
			var p = children(i);
			(l = claim_text(p, r)), p.forEach(detach), (o = claim_space(d)), d.forEach(detach), this.h();
		},
		h() {
			attr(a, 'class', 'text-blue-800');
		},
		m(e, s) {
			insert_hydration(e, t, s),
				append_hydration(t, a),
				append_hydration(a, n),
				append_hydration(t, c),
				append_hydration(t, i),
				append_hydration(i, l),
				append_hydration(t, o);
		},
		p(e, t) {
			2048 & t[0] && s !== (s = e[11](e[28]) + '') && set_data(n, s);
		},
		d(e) {
			e && detach(t);
		}
	};
}
function create_default_slot_2(e) {
	let t,
		a = e[11]('confirm') + '';
	return {
		c() {
			t = text(a);
		},
		l(e) {
			t = claim_text(e, a);
		},
		m(e, a) {
			insert_hydration(e, t, a);
		},
		p(e, n) {
			2048 & n[0] && a !== (a = e[11]('confirm') + '') && set_data(t, a);
		},
		d(e) {
			e && detach(t);
		}
	};
}
function create_default_slot_1(e) {
	let t,
		a,
		n,
		c = e[11]('back') + '';
	return {
		c() {
			(t = element('i')), (a = space()), (n = text(c)), this.h();
		},
		l(e) {
			(t = claim_element(e, 'I', { class: !0 })),
				children(t).forEach(detach),
				(a = claim_space(e)),
				(n = claim_text(e, c)),
				this.h();
		},
		h() {
			attr(t, 'class', 'lni lni-backward');
		},
		m(e, c) {
			insert_hydration(e, t, c), insert_hydration(e, a, c), insert_hydration(e, n, c);
		},
		p(e, t) {
			2048 & t[0] && c !== (c = e[11]('back') + '') && set_data(n, c);
		},
		d(e) {
			e && detach(t), e && detach(a), e && detach(n);
		}
	};
}
function create_default_slot(e) {
	let t,
		a,
		n,
		c = e[11]('back') + '';
	return {
		c() {
			(t = element('i')), (a = space()), (n = text(c)), this.h();
		},
		l(e) {
			(t = claim_element(e, 'I', { class: !0 })),
				children(t).forEach(detach),
				(a = claim_space(e)),
				(n = claim_text(e, c)),
				this.h();
		},
		h() {
			attr(t, 'class', 'lni lni-backward');
		},
		m(e, c) {
			insert_hydration(e, t, c), insert_hydration(e, a, c), insert_hydration(e, n, c);
		},
		p(e, t) {
			2048 & t[0] && c !== (c = e[11]('back') + '') && set_data(n, c);
		},
		d(e) {
			e && detach(t), e && detach(a), e && detach(n);
		}
	};
}
function create_fragment(e) {
	let t,
		a,
		n,
		c,
		i,
		l,
		o,
		s,
		r,
		d,
		_,
		p,
		m,
		h,
		u,
		f,
		$ = e[11]('addPatient') + '';
	(t = new Navigation({})), (s = new SetLanguage({}));
	const b = [create_if_block, create_if_block_1, create_if_block_2, create_if_block_3],
		y = [];
	function g(e, t) {
		return 1 == e[0] ? 0 : 2 == e[0] ? 1 : 3 == e[0] ? 2 : 4 == e[0] ? 3 : -1;
	}
	return (
		~(p = g(e)) && (m = y[p] = b[p](e)),
		{
			c() {
				create_component(t.$$.fragment),
					(a = space()),
					(n = element('div')),
					(c = element('div')),
					(i = element('h1')),
					(l = text($)),
					(o = space()),
					create_component(s.$$.fragment),
					(r = space()),
					(d = element('hr')),
					(_ = space()),
					m && m.c(),
					(h = space()),
					(u = element('div')),
					this.h();
			},
			l(e) {
				claim_component(t.$$.fragment, e),
					(a = claim_space(e)),
					(n = claim_element(e, 'DIV', { class: !0 }));
				var p = children(n);
				c = claim_element(p, 'DIV', { class: !0 });
				var f = children(c);
				i = claim_element(f, 'H1', { class: !0 });
				var b = children(i);
				(l = claim_text(b, $)),
					b.forEach(detach),
					(o = claim_space(f)),
					claim_component(s.$$.fragment, f),
					f.forEach(detach),
					(r = claim_space(p)),
					(d = claim_element(p, 'HR', {})),
					(_ = claim_space(p)),
					m && m.l(p),
					(h = claim_space(p)),
					(u = claim_element(p, 'DIV', {})),
					children(u).forEach(detach),
					p.forEach(detach),
					this.h();
			},
			h() {
				attr(i, 'class', 'text-2xl bold'),
					attr(c, 'class', 'flex justify-between'),
					attr(n, 'class', 'container mx-auto bg-white p-2 rounded-lg shadow-lg');
			},
			m(e, m) {
				mount_component(t, e, m),
					insert_hydration(e, a, m),
					insert_hydration(e, n, m),
					append_hydration(n, c),
					append_hydration(c, i),
					append_hydration(i, l),
					append_hydration(c, o),
					mount_component(s, c, null),
					append_hydration(n, r),
					append_hydration(n, d),
					append_hydration(n, _),
					~p && y[p].m(n, null),
					append_hydration(n, h),
					append_hydration(n, u),
					(f = !0);
			},
			p(e, t) {
				(!f || 2048 & t[0]) && $ !== ($ = e[11]('addPatient') + '') && set_data(l, $);
				let a = p;
				(p = g(e)),
					p === a
						? ~p && y[p].p(e, t)
						: (m &&
								(group_outros(),
								transition_out(y[a], 1, 1, () => {
									y[a] = null;
								}),
								check_outros()),
						  ~p
								? ((m = y[p]),
								  m ? m.p(e, t) : ((m = y[p] = b[p](e)), m.c()),
								  transition_in(m, 1),
								  m.m(n, h))
								: (m = null));
			},
			i(e) {
				f ||
					(transition_in(t.$$.fragment, e),
					transition_in(s.$$.fragment, e),
					transition_in(m),
					(f = !0));
			},
			o(e) {
				transition_out(t.$$.fragment, e),
					transition_out(s.$$.fragment, e),
					transition_out(m),
					(f = !1);
			},
			d(e) {
				destroy_component(t, e),
					e && detach(a),
					e && detach(n),
					destroy_component(s),
					~p && y[p].d();
			}
		}
	);
}
function instance($$self, $$props, $$invalidate) {
	let $_;
	component_subscribe($$self, X, (e) => $$invalidate(11, ($_ = e)));
	let step = 1,
		citizenID = '',
		firstName = '',
		lastName = '',
		gender = 'm',
		birthday = new Date(),
		addressLineOne = '',
		addressLineTwo = '',
		phone = '',
		postalCode = '',
		subdistrict = '';
	const goBack = () => {
			$$invalidate(0, (step -= 1));
		},
		gotCitizenID = () => {
			$$invalidate(0, (step = 2));
		},
		gotBasicInfo = () => {
			console.log(citizenID),
				console.log(firstName),
				console.log(lastName),
				console.log(birthday),
				console.log(gender),
				$$invalidate(0, (step = 3));
		},
		gotAddress = () => {
			$$invalidate(0, (step = 4));
		},
		confirm = () => {
			goto('/FindPatient');
		},
		myEval = (label) => eval(label);
	function checkcitizenid_phone_binding(e) {
		(phone = e), $$invalidate(8, phone);
	}
	function checkcitizenid_citizenID_binding(e) {
		(citizenID = e), $$invalidate(1, citizenID);
	}
	function getbasicpatientinfo_gender_binding(e) {
		(gender = e), $$invalidate(4, gender);
	}
	function getbasicpatientinfo_firstName_binding(e) {
		(firstName = e), $$invalidate(2, firstName);
	}
	function getbasicpatientinfo_lastName_binding(e) {
		(lastName = e), $$invalidate(3, lastName);
	}
	function getbasicpatientinfo_birthday_binding(e) {
		(birthday = e), $$invalidate(5, birthday);
	}
	function getaddress_postalCode_binding(e) {
		(postalCode = e), $$invalidate(9, postalCode);
	}
	function getaddress_subdistrict_binding(e) {
		(subdistrict = e), $$invalidate(10, subdistrict);
	}
	function getaddress_addressLineOne_binding(e) {
		(addressLineOne = e), $$invalidate(6, addressLineOne);
	}
	function getaddress_addressLineTwo_binding(e) {
		(addressLineTwo = e), $$invalidate(7, addressLineTwo);
	}
	return [
		step,
		citizenID,
		firstName,
		lastName,
		gender,
		birthday,
		addressLineOne,
		addressLineTwo,
		phone,
		postalCode,
		subdistrict,
		$_,
		goBack,
		gotCitizenID,
		gotBasicInfo,
		gotAddress,
		confirm,
		myEval,
		checkcitizenid_phone_binding,
		checkcitizenid_citizenID_binding,
		getbasicpatientinfo_gender_binding,
		getbasicpatientinfo_firstName_binding,
		getbasicpatientinfo_lastName_binding,
		getbasicpatientinfo_birthday_binding,
		getaddress_postalCode_binding,
		getaddress_subdistrict_binding,
		getaddress_addressLineOne_binding,
		getaddress_addressLineTwo_binding
	];
}
class NewPatient extends SvelteComponent {
	constructor(e) {
		super(), init(this, e, instance, create_fragment, safe_not_equal, {}, null, [-1, -1]);
	}
}
export { NewPatient as default };

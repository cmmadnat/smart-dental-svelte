import {
	S as SvelteComponent,
	i as init,
	s as safe_not_equal,
	l as empty,
	f as insert_hydration,
	r as group_outros,
	u as transition_out,
	w as check_outros,
	x as transition_in,
	d as detach,
	_ as createEventDispatcher,
	F as create_slot,
	e as element,
	c as claim_element,
	a as children,
	b as attr,
	N as listen,
	G as update_slot_base,
	H as get_all_dirty_from_scope,
	J as get_slot_changes,
	t as text,
	k as space,
	j as create_component,
	g as claim_text,
	n as claim_space,
	m as claim_component,
	K as append_hydration,
	o as mount_component,
	v as destroy_component,
	h as set_data,
	Z as destroy_each,
	O as component_subscribe,
	X,
	a5 as dayjs,
	a9 as LocalizedFormat
} from '../../chunks/vendor-4465f8c9.js';
import { N as Navigation } from '../../chunks/_Navigation-c30c9703.js';
import { S as SetLanguage } from '../../chunks/_SetLanguage-5b0c250f.js';
import { B as ButtonGreen } from '../../chunks/_ButtonGreen-75f1b9e2.js';
function create_else_block$1(e) {
	let t, a, n, c;
	const r = e[3].default,
		l = create_slot(r, e, e[2], null);
	return {
		c() {
			(t = element('button')), l && l.c(), this.h();
		},
		l(e) {
			t = claim_element(e, 'BUTTON', { class: !0, type: !0 });
			var a = children(t);
			l && l.l(a), a.forEach(detach), this.h();
		},
		h() {
			attr(
				t,
				'class',
				'bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
			),
				attr(t, 'type', 'button');
		},
		m(r, i) {
			insert_hydration(r, t, i),
				l && l.m(t, null),
				(a = !0),
				n || ((c = listen(t, 'click', e[1])), (n = !0));
		},
		p(e, t) {
			l &&
				l.p &&
				(!a || 4 & t) &&
				update_slot_base(
					l,
					r,
					e,
					e[2],
					a ? get_slot_changes(r, e[2], t, null) : get_all_dirty_from_scope(e[2]),
					null
				);
		},
		i(e) {
			a || (transition_in(l, e), (a = !0));
		},
		o(e) {
			transition_out(l, e), (a = !1);
		},
		d(e) {
			e && detach(t), l && l.d(e), (n = !1), c();
		}
	};
}
function create_if_block_1$1(e) {
	let t, a, n, c;
	const r = e[3].default,
		l = create_slot(r, e, e[2], null);
	return {
		c() {
			(t = element('button')), l && l.c(), this.h();
		},
		l(e) {
			t = claim_element(e, 'BUTTON', { class: !0, type: !0 });
			var a = children(t);
			l && l.l(a), a.forEach(detach), this.h();
		},
		h() {
			attr(
				t,
				'class',
				'bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
			),
				attr(t, 'type', 'button');
		},
		m(r, i) {
			insert_hydration(r, t, i),
				l && l.m(t, null),
				(a = !0),
				n || ((c = listen(t, 'click', e[1])), (n = !0));
		},
		p(e, t) {
			l &&
				l.p &&
				(!a || 4 & t) &&
				update_slot_base(
					l,
					r,
					e,
					e[2],
					a ? get_slot_changes(r, e[2], t, null) : get_all_dirty_from_scope(e[2]),
					null
				);
		},
		i(e) {
			a || (transition_in(l, e), (a = !0));
		},
		o(e) {
			transition_out(l, e), (a = !1);
		},
		d(e) {
			e && detach(t), l && l.d(e), (n = !1), c();
		}
	};
}
function create_if_block$1(e) {
	let t, a, n, c;
	const r = e[3].default,
		l = create_slot(r, e, e[2], null);
	return {
		c() {
			(t = element('button')), l && l.c(), this.h();
		},
		l(e) {
			t = claim_element(e, 'BUTTON', { class: !0, type: !0 });
			var a = children(t);
			l && l.l(a), a.forEach(detach), this.h();
		},
		h() {
			attr(
				t,
				'class',
				'bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
			),
				attr(t, 'type', 'button');
		},
		m(r, i) {
			insert_hydration(r, t, i),
				l && l.m(t, null),
				(a = !0),
				n || ((c = listen(t, 'click', e[1])), (n = !0));
		},
		p(e, t) {
			l &&
				l.p &&
				(!a || 4 & t) &&
				update_slot_base(
					l,
					r,
					e,
					e[2],
					a ? get_slot_changes(r, e[2], t, null) : get_all_dirty_from_scope(e[2]),
					null
				);
		},
		i(e) {
			a || (transition_in(l, e), (a = !0));
		},
		o(e) {
			transition_out(l, e), (a = !1);
		},
		d(e) {
			e && detach(t), l && l.d(e), (n = !1), c();
		}
	};
}
function create_fragment$4(e) {
	let t, a, n, c;
	const r = [create_if_block$1, create_if_block_1$1, create_else_block$1],
		l = [];
	function i(e, t) {
		return 'small' == e[0] ? 0 : 'regular' == e[0] ? 1 : 2;
	}
	return (
		(t = i(e)),
		(a = l[t] = r[t](e)),
		{
			c() {
				a.c(), (n = empty());
			},
			l(e) {
				a.l(e), (n = empty());
			},
			m(e, a) {
				l[t].m(e, a), insert_hydration(e, n, a), (c = !0);
			},
			p(e, [c]) {
				let o = t;
				(t = i(e)),
					t === o
						? l[t].p(e, c)
						: (group_outros(),
						  transition_out(l[o], 1, 1, () => {
								l[o] = null;
						  }),
						  check_outros(),
						  (a = l[t]),
						  a ? a.p(e, c) : ((a = l[t] = r[t](e)), a.c()),
						  transition_in(a, 1),
						  a.m(n.parentNode, n));
			},
			i(e) {
				c || (transition_in(a), (c = !0));
			},
			o(e) {
				transition_out(a), (c = !1);
			},
			d(e) {
				l[t].d(e), e && detach(n);
			}
		}
	);
}
function instance$4(e, t, a) {
	let { $$slots: n = {}, $$scope: c } = t,
		{ size: r = 'small' } = t;
	const l = createEventDispatcher();
	return (
		(e.$$set = (e) => {
			'size' in e && a(0, (r = e.size)), '$$scope' in e && a(2, (c = e.$$scope));
		}),
		[
			r,
			(e) => {
				l('click', e);
			},
			c,
			n
		]
	);
}
class ButtonRed extends SvelteComponent {
	constructor(e) {
		super(), init(this, e, instance$4, create_fragment$4, safe_not_equal, { size: 0 });
	}
}
function get_each_context$3(e, t, a) {
	const n = e.slice();
	return (n[1] = t[a]), n;
}
function create_default_slot_1(e) {
	let t,
		a,
		n,
		c = e[0]('addSchedule') + '';
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
			attr(t, 'class', 'lni lni-plus');
		},
		m(e, c) {
			insert_hydration(e, t, c), insert_hydration(e, a, c), insert_hydration(e, n, c);
		},
		p(e, t) {
			1 & t && c !== (c = e[0]('addSchedule') + '') && set_data(n, c);
		},
		d(e) {
			e && detach(t), e && detach(a), e && detach(n);
		}
	};
}
function create_default_slot$2(e) {
	let t,
		a,
		n,
		c = e[0]('remove') + '';
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
			attr(t, 'class', 'lni lni-trash-can');
		},
		m(e, c) {
			insert_hydration(e, t, c), insert_hydration(e, a, c), insert_hydration(e, n, c);
		},
		p(e, t) {
			1 & t && c !== (c = e[0]('remove') + '') && set_data(n, c);
		},
		d(e) {
			e && detach(t), e && detach(a), e && detach(n);
		}
	};
}
function create_each_block$3(e) {
	let t,
		a,
		n,
		c,
		r,
		l,
		i,
		o,
		s,
		d,
		_,
		h = dayjs().format('LLL') + '';
	return (
		(s = new ButtonRed({
			props: { size: 'small', $$slots: { default: [create_default_slot$2] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = element('div')),
					(a = element('div')),
					(n = text(h)),
					(c = space()),
					(r = element('div')),
					(l = text('ขูดหินปูน')),
					(i = space()),
					(o = element('div')),
					create_component(s.$$.fragment),
					(d = space()),
					this.h();
			},
			l(e) {
				t = claim_element(e, 'DIV', { class: !0 });
				var _ = children(t);
				a = claim_element(_, 'DIV', {});
				var m = children(a);
				(n = claim_text(m, h)),
					m.forEach(detach),
					(c = claim_space(_)),
					(r = claim_element(_, 'DIV', {}));
				var p = children(r);
				(l = claim_text(p, 'ขูดหินปูน')),
					p.forEach(detach),
					(i = claim_space(_)),
					(o = claim_element(_, 'DIV', {}));
				var u = children(o);
				claim_component(s.$$.fragment, u),
					u.forEach(detach),
					(d = claim_space(_)),
					_.forEach(detach),
					this.h();
			},
			h() {
				attr(t, 'class', 'mb-1 flex justify-between bg-yellow-100 p-3 rounded-md');
			},
			m(e, h) {
				insert_hydration(e, t, h),
					append_hydration(t, a),
					append_hydration(a, n),
					append_hydration(t, c),
					append_hydration(t, r),
					append_hydration(r, l),
					append_hydration(t, i),
					append_hydration(t, o),
					mount_component(s, o, null),
					append_hydration(t, d),
					(_ = !0);
			},
			p(e, t) {
				const a = {};
				17 & t && (a.$$scope = { dirty: t, ctx: e }), s.$set(a);
			},
			i(e) {
				_ || (transition_in(s.$$.fragment, e), (_ = !0));
			},
			o(e) {
				transition_out(s.$$.fragment, e), (_ = !1);
			},
			d(e) {
				e && detach(t), destroy_component(s);
			}
		}
	);
}
function create_fragment$3(e) {
	let t,
		a,
		n,
		c,
		r,
		l,
		i,
		o,
		s,
		d,
		_ = e[0]('schedule') + '';
	i = new ButtonGreen({
		props: { $$slots: { default: [create_default_slot_1] }, $$scope: { ctx: e } }
	});
	let h = [1, 2, 3, 4, 5],
		m = [];
	for (let u = 0; u < 5; u += 1) m[u] = create_each_block$3(get_each_context$3(e, h, u));
	const p = (e) =>
		transition_out(m[e], 1, 1, () => {
			m[e] = null;
		});
	return {
		c() {
			(t = element('h1')),
				(a = text(_)),
				(n = space()),
				(c = element('hr')),
				(r = space()),
				(l = element('div')),
				create_component(i.$$.fragment),
				(o = space());
			for (let e = 0; e < 5; e += 1) m[e].c();
			(s = empty()), this.h();
		},
		l(e) {
			t = claim_element(e, 'H1', { class: !0 });
			var d = children(t);
			(a = claim_text(d, _)),
				d.forEach(detach),
				(n = claim_space(e)),
				(c = claim_element(e, 'HR', {})),
				(r = claim_space(e)),
				(l = claim_element(e, 'DIV', { class: !0 }));
			var h = children(l);
			claim_component(i.$$.fragment, h), h.forEach(detach), (o = claim_space(e));
			for (let t = 0; t < 5; t += 1) m[t].l(e);
			(s = empty()), this.h();
		},
		h() {
			attr(t, 'class', 'text-2xl my-2 bold text-blue-800'), attr(l, 'class', 'my-2');
		},
		m(e, _) {
			insert_hydration(e, t, _),
				append_hydration(t, a),
				insert_hydration(e, n, _),
				insert_hydration(e, c, _),
				insert_hydration(e, r, _),
				insert_hydration(e, l, _),
				mount_component(i, l, null),
				insert_hydration(e, o, _);
			for (let t = 0; t < 5; t += 1) m[t].m(e, _);
			insert_hydration(e, s, _), (d = !0);
		},
		p(e, [t]) {
			(!d || 1 & t) && _ !== (_ = e[0]('schedule') + '') && set_data(a, _);
			const n = {};
			if ((17 & t && (n.$$scope = { dirty: t, ctx: e }), i.$set(n), 1 & t)) {
				let a;
				for (h = [1, 2, 3, 4, 5], a = 0; a < 5; a += 1) {
					const n = get_each_context$3(e, h, a);
					m[a]
						? (m[a].p(n, t), transition_in(m[a], 1))
						: ((m[a] = create_each_block$3(n)),
						  m[a].c(),
						  transition_in(m[a], 1),
						  m[a].m(s.parentNode, s));
				}
				for (group_outros(), a = 5; a < 5; a += 1) p(a);
				check_outros();
			}
		},
		i(e) {
			if (!d) {
				transition_in(i.$$.fragment, e);
				for (let e = 0; e < 5; e += 1) transition_in(m[e]);
				d = !0;
			}
		},
		o(e) {
			transition_out(i.$$.fragment, e), (m = m.filter(Boolean));
			for (let t = 0; t < 5; t += 1) transition_out(m[t]);
			d = !1;
		},
		d(e) {
			e && detach(t),
				e && detach(n),
				e && detach(c),
				e && detach(r),
				e && detach(l),
				destroy_component(i),
				e && detach(o),
				destroy_each(m, e),
				e && detach(s);
		}
	};
}
function instance$3(e, t, a) {
	let n;
	return component_subscribe(e, X, (e) => a(0, (n = e))), dayjs.extend(LocalizedFormat), [n];
}
class Schedule extends SvelteComponent {
	constructor(e) {
		super(), init(this, e, instance$3, create_fragment$3, safe_not_equal, {});
	}
}
function get_each_context$2(e, t, a) {
	const n = e.slice();
	return (n[14] = t[a]), n;
}
function get_each_context_1$1(e, t, a) {
	const n = e.slice();
	return (n[14] = t[a]), n;
}
function get_each_context_2(e, t, a) {
	const n = e.slice();
	return (n[14] = t[a]), n;
}
function get_each_context_3(e, t, a) {
	const n = e.slice();
	return (n[14] = t[a]), n;
}
function get_each_context_4(e, t, a) {
	const n = e.slice();
	return (n[14] = t[a]), n;
}
function create_else_block_4(e) {
	let t,
		a,
		n,
		c,
		r = e[14] + '';
	function l() {
		return e[5](e[14]);
	}
	return {
		c() {
			(t = element('span')), (a = text(r)), this.h();
		},
		l(e) {
			t = claim_element(e, 'SPAN', { class: !0 });
			var n = children(t);
			(a = claim_text(n, r)), n.forEach(detach), this.h();
		},
		h() {
			attr(t, 'class', 'cursor-pointer p-2 text-sm rounded-xl bg-white m-1');
		},
		m(e, r) {
			insert_hydration(e, t, r),
				append_hydration(t, a),
				n || ((c = listen(t, 'click', l)), (n = !0));
		},
		p(t, a) {
			e = t;
		},
		d(e) {
			e && detach(t), (n = !1), c();
		}
	};
}
function create_if_block_4(e) {
	let t,
		a,
		n,
		c,
		r = e[14] + '';
	function l() {
		return e[4](e[14]);
	}
	return {
		c() {
			(t = element('span')), (a = text(r)), this.h();
		},
		l(e) {
			t = claim_element(e, 'SPAN', { class: !0 });
			var n = children(t);
			(a = claim_text(n, r)), n.forEach(detach), this.h();
		},
		h() {
			attr(t, 'class', 'cursor-pointer p-2 text-sm rounded-xl bg-blue-700 text-white m-1');
		},
		m(e, r) {
			insert_hydration(e, t, r),
				append_hydration(t, a),
				n || ((c = listen(t, 'click', l)), (n = !0));
		},
		p(t, a) {
			e = t;
		},
		d(e) {
			e && detach(t), (n = !1), c();
		}
	};
}
function create_each_block_4(e) {
	let t, a;
	function n(e, a) {
		return (
			(null == t || 1 & a) && (t = !(-1 === e[0].indexOf(e[14]))),
			t ? create_if_block_4 : create_else_block_4
		);
	}
	let c = n(e, -1),
		r = c(e);
	return {
		c() {
			r.c(), (a = empty());
		},
		l(e) {
			r.l(e), (a = empty());
		},
		m(e, t) {
			r.m(e, t), insert_hydration(e, a, t);
		},
		p(e, t) {
			c === (c = n(e, t)) && r
				? r.p(e, t)
				: (r.d(1), (r = c(e)), r && (r.c(), r.m(a.parentNode, a)));
		},
		d(e) {
			r.d(e), e && detach(a);
		}
	};
}
function create_else_block_3(e) {
	let t, a, n, c;
	function r() {
		return e[7](e[14]);
	}
	return {
		c() {
			(t = element('span')), (a = text(e[14])), this.h();
		},
		l(n) {
			t = claim_element(n, 'SPAN', { class: !0 });
			var c = children(t);
			(a = claim_text(c, e[14])), c.forEach(detach), this.h();
		},
		h() {
			attr(t, 'class', 'cursor-pointer p-2 text-sm rounded-xl bg-white m-1');
		},
		m(e, l) {
			insert_hydration(e, t, l),
				append_hydration(t, a),
				n || ((c = listen(t, 'click', r)), (n = !0));
		},
		p(t, a) {
			e = t;
		},
		d(e) {
			e && detach(t), (n = !1), c();
		}
	};
}
function create_if_block_3(e) {
	let t, a, n, c;
	function r() {
		return e[6](e[14]);
	}
	return {
		c() {
			(t = element('span')), (a = text(e[14])), this.h();
		},
		l(n) {
			t = claim_element(n, 'SPAN', { class: !0 });
			var c = children(t);
			(a = claim_text(c, e[14])), c.forEach(detach), this.h();
		},
		h() {
			attr(t, 'class', 'cursor-pointer p-2 text-sm rounded-xl bg-blue-700 text-white m-1');
		},
		m(e, l) {
			insert_hydration(e, t, l),
				append_hydration(t, a),
				n || ((c = listen(t, 'click', r)), (n = !0));
		},
		p(t, a) {
			e = t;
		},
		d(e) {
			e && detach(t), (n = !1), c();
		}
	};
}
function create_each_block_3(e) {
	let t, a;
	function n(e, a) {
		return (
			(null == t || 1 & a) && (t = !(-1 === e[0].indexOf(e[14]))),
			t ? create_if_block_3 : create_else_block_3
		);
	}
	let c = n(e, -1),
		r = c(e);
	return {
		c() {
			r.c(), (a = empty());
		},
		l(e) {
			r.l(e), (a = empty());
		},
		m(e, t) {
			r.m(e, t), insert_hydration(e, a, t);
		},
		p(e, t) {
			c === (c = n(e, t)) && r
				? r.p(e, t)
				: (r.d(1), (r = c(e)), r && (r.c(), r.m(a.parentNode, a)));
		},
		d(e) {
			r.d(e), e && detach(a);
		}
	};
}
function create_else_block_2(e) {
	let t, a, n, c;
	function r() {
		return e[9](e[14]);
	}
	return {
		c() {
			(t = element('span')), (a = text(e[14])), this.h();
		},
		l(n) {
			t = claim_element(n, 'SPAN', { class: !0 });
			var c = children(t);
			(a = claim_text(c, e[14])), c.forEach(detach), this.h();
		},
		h() {
			attr(t, 'class', 'cursor-pointer p-2 text-sm rounded-xl bg-white m-1');
		},
		m(e, l) {
			insert_hydration(e, t, l),
				append_hydration(t, a),
				n || ((c = listen(t, 'click', r)), (n = !0));
		},
		p(t, a) {
			e = t;
		},
		d(e) {
			e && detach(t), (n = !1), c();
		}
	};
}
function create_if_block_2(e) {
	let t, a, n, c;
	function r() {
		return e[8](e[14]);
	}
	return {
		c() {
			(t = element('span')), (a = text(e[14])), this.h();
		},
		l(n) {
			t = claim_element(n, 'SPAN', { class: !0 });
			var c = children(t);
			(a = claim_text(c, e[14])), c.forEach(detach), this.h();
		},
		h() {
			attr(t, 'class', 'cursor-pointer p-2 text-sm rounded-xl bg-blue-700 text-white m-1');
		},
		m(e, l) {
			insert_hydration(e, t, l),
				append_hydration(t, a),
				n || ((c = listen(t, 'click', r)), (n = !0));
		},
		p(t, a) {
			e = t;
		},
		d(e) {
			e && detach(t), (n = !1), c();
		}
	};
}
function create_each_block_2(e) {
	let t, a;
	function n(e, a) {
		return (
			(null == t || 1 & a) && (t = !(-1 === e[0].indexOf(e[14]))),
			t ? create_if_block_2 : create_else_block_2
		);
	}
	let c = n(e, -1),
		r = c(e);
	return {
		c() {
			r.c(), (a = empty());
		},
		l(e) {
			r.l(e), (a = empty());
		},
		m(e, t) {
			r.m(e, t), insert_hydration(e, a, t);
		},
		p(e, t) {
			c === (c = n(e, t)) && r
				? r.p(e, t)
				: (r.d(1), (r = c(e)), r && (r.c(), r.m(a.parentNode, a)));
		},
		d(e) {
			r.d(e), e && detach(a);
		}
	};
}
function create_else_block_1(e) {
	let t, a, n, c;
	function r() {
		return e[11](e[14]);
	}
	return {
		c() {
			(t = element('span')), (a = text(e[14])), this.h();
		},
		l(n) {
			t = claim_element(n, 'SPAN', { class: !0 });
			var c = children(t);
			(a = claim_text(c, e[14])), c.forEach(detach), this.h();
		},
		h() {
			attr(t, 'class', 'cursor-pointer p-2 text-sm rounded-xl bg-white m-1');
		},
		m(e, l) {
			insert_hydration(e, t, l),
				append_hydration(t, a),
				n || ((c = listen(t, 'click', r)), (n = !0));
		},
		p(t, a) {
			e = t;
		},
		d(e) {
			e && detach(t), (n = !1), c();
		}
	};
}
function create_if_block_1(e) {
	let t, a, n, c;
	function r() {
		return e[10](e[14]);
	}
	return {
		c() {
			(t = element('span')), (a = text(e[14])), this.h();
		},
		l(n) {
			t = claim_element(n, 'SPAN', { class: !0 });
			var c = children(t);
			(a = claim_text(c, e[14])), c.forEach(detach), this.h();
		},
		h() {
			attr(t, 'class', 'cursor-pointer p-2 text-sm rounded-xl bg-blue-700 text-white m-1');
		},
		m(e, l) {
			insert_hydration(e, t, l),
				append_hydration(t, a),
				n || ((c = listen(t, 'click', r)), (n = !0));
		},
		p(t, a) {
			e = t;
		},
		d(e) {
			e && detach(t), (n = !1), c();
		}
	};
}
function create_each_block_1$1(e) {
	let t, a;
	function n(e, a) {
		return (
			(null == t || 1 & a) && (t = !(-1 === e[0].indexOf(e[14]))),
			t ? create_if_block_1 : create_else_block_1
		);
	}
	let c = n(e, -1),
		r = c(e);
	return {
		c() {
			r.c(), (a = empty());
		},
		l(e) {
			r.l(e), (a = empty());
		},
		m(e, t) {
			r.m(e, t), insert_hydration(e, a, t);
		},
		p(e, t) {
			c === (c = n(e, t)) && r
				? r.p(e, t)
				: (r.d(1), (r = c(e)), r && (r.c(), r.m(a.parentNode, a)));
		},
		d(e) {
			r.d(e), e && detach(a);
		}
	};
}
function create_else_block(e) {
	let t, a, n, c;
	function r() {
		return e[13](e[14]);
	}
	return {
		c() {
			(t = element('span')), (a = text(e[14])), this.h();
		},
		l(n) {
			t = claim_element(n, 'SPAN', { class: !0 });
			var c = children(t);
			(a = claim_text(c, e[14])), c.forEach(detach), this.h();
		},
		h() {
			attr(t, 'class', 'cursor-pointer p-2 text-sm rounded-xl bg-white m-1');
		},
		m(e, l) {
			insert_hydration(e, t, l),
				append_hydration(t, a),
				n || ((c = listen(t, 'click', r)), (n = !0));
		},
		p(t, a) {
			e = t;
		},
		d(e) {
			e && detach(t), (n = !1), c();
		}
	};
}
function create_if_block(e) {
	let t, a, n, c;
	function r() {
		return e[12](e[14]);
	}
	return {
		c() {
			(t = element('span')), (a = text(e[14])), this.h();
		},
		l(n) {
			t = claim_element(n, 'SPAN', { class: !0 });
			var c = children(t);
			(a = claim_text(c, e[14])), c.forEach(detach), this.h();
		},
		h() {
			attr(t, 'class', 'cursor-pointer p-2 text-sm rounded-xl bg-blue-700 text-white m-1');
		},
		m(e, l) {
			insert_hydration(e, t, l),
				append_hydration(t, a),
				n || ((c = listen(t, 'click', r)), (n = !0));
		},
		p(t, a) {
			e = t;
		},
		d(e) {
			e && detach(t), (n = !1), c();
		}
	};
}
function create_each_block$2(e) {
	let t, a;
	function n(e, a) {
		return (
			(null == t || 1 & a) && (t = !(-1 === e[0].indexOf(e[14]))),
			t ? create_if_block : create_else_block
		);
	}
	let c = n(e, -1),
		r = c(e);
	return {
		c() {
			r.c(), (a = empty());
		},
		l(e) {
			r.l(e), (a = empty());
		},
		m(e, t) {
			r.m(e, t), insert_hydration(e, a, t);
		},
		p(e, t) {
			c === (c = n(e, t)) && r
				? r.p(e, t)
				: (r.d(1), (r = c(e)), r && (r.c(), r.m(a.parentNode, a)));
		},
		d(e) {
			r.d(e), e && detach(a);
		}
	};
}
function create_default_slot$1(e) {
	let t,
		a,
		n,
		c = e[1]('save') + '';
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
			attr(t, 'class', 'lni lni-save');
		},
		m(e, c) {
			insert_hydration(e, t, c), insert_hydration(e, a, c), insert_hydration(e, n, c);
		},
		p(e, t) {
			2 & t && c !== (c = e[1]('save') + '') && set_data(n, c);
		},
		d(e) {
			e && detach(t), e && detach(a), e && detach(n);
		}
	};
}
function create_fragment$2(e) {
	let t,
		a,
		n,
		c,
		r,
		l,
		i,
		o,
		s,
		d,
		_,
		h,
		m,
		p,
		u,
		f,
		y,
		x,
		$,
		g,
		b,
		v,
		k,
		E,
		w,
		D,
		N,
		I,
		S,
		V,
		L,
		B,
		R,
		A,
		T,
		j,
		P,
		H,
		O,
		z,
		q,
		C,
		G,
		X,
		U,
		F,
		J,
		K,
		Z = e[1]('newRecord') + '',
		M = e[1]('teeth') + '',
		Q = e[1]('upperLeft') + '',
		W = e[1]('upperRight') + '',
		Y = e[1]('lowerLeft') + '',
		ee = e[1]('lowerRight') + '',
		te = e[1]('note') + '',
		ae = e[2],
		ne = [];
	for (let he = 0; he < ae.length; he += 1)
		ne[he] = create_each_block_4(get_each_context_4(e, ae, he));
	let ce = [18, 17, 16, 15, 14, 13, 12, 11],
		re = [];
	for (let he = 0; he < 8; he += 1) re[he] = create_each_block_3(get_each_context_3(e, ce, he));
	let le = [21, 22, 23, 24, 25, 25, 27, 28],
		ie = [];
	for (let he = 0; he < 8; he += 1) ie[he] = create_each_block_2(get_each_context_2(e, le, he));
	let oe = [48, 47, 46, 45, 44, 43, 42, 41],
		se = [];
	for (let he = 0; he < 8; he += 1) se[he] = create_each_block_1$1(get_each_context_1$1(e, oe, he));
	let de = [31, 32, 33, 34, 35, 35, 37, 38],
		_e = [];
	for (let he = 0; he < 8; he += 1) _e[he] = create_each_block$2(get_each_context$2(e, de, he));
	return (
		(J = new ButtonGreen({
			props: { $$slots: { default: [create_default_slot$1] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = element('div')),
					(a = element('h2')),
					(n = text(Z)),
					(c = space()),
					(r = element('hr')),
					(l = space()),
					(i = element('div'));
				for (let e = 0; e < ne.length; e += 1) ne[e].c();
				(o = space()),
					(s = element('hr')),
					(d = space()),
					(_ = element('h3')),
					(h = text(M)),
					(m = space()),
					(p = element('div')),
					(u = element('div')),
					(f = element('span')),
					(y = text(Q)),
					(x = space()),
					($ = element('div'));
				for (let e = 0; e < 8; e += 1) re[e].c();
				(g = space()),
					(b = element('div')),
					(v = element('span')),
					(k = text(W)),
					(E = space()),
					(w = element('div'));
				for (let e = 0; e < 8; e += 1) ie[e].c();
				(D = space()),
					(N = element('div')),
					(I = element('div')),
					(S = element('span')),
					(V = text(Y)),
					(L = space()),
					(B = element('div'));
				for (let e = 0; e < 8; e += 1) se[e].c();
				(R = space()),
					(A = element('div')),
					(T = element('span')),
					(j = text(ee)),
					(P = space()),
					(H = element('div'));
				for (let e = 0; e < 8; e += 1) _e[e].c();
				(O = space()),
					(z = element('hr')),
					(q = space()),
					(C = element('h3')),
					(G = text(te)),
					(X = space()),
					(U = element('textarea')),
					(F = space()),
					create_component(J.$$.fragment),
					this.h();
			},
			l(e) {
				t = claim_element(e, 'DIV', { class: !0 });
				var K = children(t);
				a = claim_element(K, 'H2', { class: !0 });
				var ae = children(a);
				(n = claim_text(ae, Z)),
					ae.forEach(detach),
					(c = claim_space(K)),
					(r = claim_element(K, 'HR', {})),
					(l = claim_space(K)),
					(i = claim_element(K, 'DIV', { class: !0 }));
				var ce = children(i);
				for (let t = 0; t < ne.length; t += 1) ne[t].l(ce);
				ce.forEach(detach),
					(o = claim_space(K)),
					(s = claim_element(K, 'HR', { class: !0 })),
					(d = claim_space(K)),
					(_ = claim_element(K, 'H3', { class: !0 }));
				var le = children(_);
				(h = claim_text(le, M)),
					le.forEach(detach),
					(m = claim_space(K)),
					(p = claim_element(K, 'DIV', { class: !0 }));
				var oe = children(p);
				u = claim_element(oe, 'DIV', { class: !0 });
				var de = children(u);
				f = claim_element(de, 'SPAN', { class: !0 });
				var he = children(f);
				(y = claim_text(he, Q)),
					he.forEach(detach),
					(x = claim_space(de)),
					($ = claim_element(de, 'DIV', { class: !0 }));
				var me = children($);
				for (let t = 0; t < 8; t += 1) re[t].l(me);
				me.forEach(detach),
					de.forEach(detach),
					(g = claim_space(oe)),
					(b = claim_element(oe, 'DIV', { class: !0 }));
				var pe = children(b);
				v = claim_element(pe, 'SPAN', { class: !0 });
				var ue = children(v);
				(k = claim_text(ue, W)),
					ue.forEach(detach),
					(E = claim_space(pe)),
					(w = claim_element(pe, 'DIV', { class: !0 }));
				var fe = children(w);
				for (let t = 0; t < 8; t += 1) ie[t].l(fe);
				fe.forEach(detach),
					pe.forEach(detach),
					oe.forEach(detach),
					(D = claim_space(K)),
					(N = claim_element(K, 'DIV', { class: !0 }));
				var ye = children(N);
				I = claim_element(ye, 'DIV', { class: !0 });
				var xe = children(I);
				S = claim_element(xe, 'SPAN', { class: !0 });
				var $e = children(S);
				(V = claim_text($e, Y)),
					$e.forEach(detach),
					(L = claim_space(xe)),
					(B = claim_element(xe, 'DIV', { class: !0 }));
				var ge = children(B);
				for (let t = 0; t < 8; t += 1) se[t].l(ge);
				ge.forEach(detach),
					xe.forEach(detach),
					(R = claim_space(ye)),
					(A = claim_element(ye, 'DIV', { class: !0 }));
				var be = children(A);
				T = claim_element(be, 'SPAN', { class: !0 });
				var ve = children(T);
				(j = claim_text(ve, ee)),
					ve.forEach(detach),
					(P = claim_space(be)),
					(H = claim_element(be, 'DIV', { class: !0 }));
				var ke = children(H);
				for (let t = 0; t < 8; t += 1) _e[t].l(ke);
				ke.forEach(detach),
					be.forEach(detach),
					ye.forEach(detach),
					(O = claim_space(K)),
					(z = claim_element(K, 'HR', { class: !0 })),
					(q = claim_space(K)),
					(C = claim_element(K, 'H3', { class: !0 }));
				var Ee = children(C);
				(G = claim_text(Ee, te)),
					Ee.forEach(detach),
					(X = claim_space(K)),
					(U = claim_element(K, 'TEXTAREA', { class: !0 })),
					children(U).forEach(detach),
					(F = claim_space(K)),
					claim_component(J.$$.fragment, K),
					K.forEach(detach),
					this.h();
			},
			h() {
				attr(a, 'class', 'bold text-xl text-lime-700'),
					attr(i, 'class', 'flex flex-row flex-wrap'),
					attr(s, 'class', 'my-2'),
					attr(_, 'class', 'bold text-xl'),
					attr(f, 'class', 'text-sm'),
					attr($, 'class', 'flex flex-row flex-wrap justify-end'),
					attr(u, 'class', 'w-1/2 p-2'),
					attr(v, 'class', 'text-sm'),
					attr(w, 'class', 'flex flex-row flex-wrap'),
					attr(b, 'class', 'w-1/2 border-l-2 border-lightBlue-800 p-2'),
					attr(p, 'class', 'w-full flex flex-row'),
					attr(S, 'class', 'text-sm'),
					attr(B, 'class', 'flex flex-row flex-wrap justify-end'),
					attr(I, 'class', 'w-1/2 p-2'),
					attr(T, 'class', 'text-sm'),
					attr(H, 'class', 'flex flex-row flex-wrap'),
					attr(A, 'class', 'w-1/2 border-l-2 border-lightBlue-800 p-2'),
					attr(N, 'class', 'w-full flex flex-row'),
					attr(z, 'class', 'my-2'),
					attr(C, 'class', 'bold text-lg'),
					attr(U, 'class', 'p-2 w-full my-2'),
					attr(t, 'class', 'p-3 rouded-xl shadow-2xl bg-rose-100 rounded-md');
			},
			m(e, Z) {
				insert_hydration(e, t, Z),
					append_hydration(t, a),
					append_hydration(a, n),
					append_hydration(t, c),
					append_hydration(t, r),
					append_hydration(t, l),
					append_hydration(t, i);
				for (let t = 0; t < ne.length; t += 1) ne[t].m(i, null);
				append_hydration(t, o),
					append_hydration(t, s),
					append_hydration(t, d),
					append_hydration(t, _),
					append_hydration(_, h),
					append_hydration(t, m),
					append_hydration(t, p),
					append_hydration(p, u),
					append_hydration(u, f),
					append_hydration(f, y),
					append_hydration(u, x),
					append_hydration(u, $);
				for (let t = 0; t < 8; t += 1) re[t].m($, null);
				append_hydration(p, g),
					append_hydration(p, b),
					append_hydration(b, v),
					append_hydration(v, k),
					append_hydration(b, E),
					append_hydration(b, w);
				for (let t = 0; t < 8; t += 1) ie[t].m(w, null);
				append_hydration(t, D),
					append_hydration(t, N),
					append_hydration(N, I),
					append_hydration(I, S),
					append_hydration(S, V),
					append_hydration(I, L),
					append_hydration(I, B);
				for (let t = 0; t < 8; t += 1) se[t].m(B, null);
				append_hydration(N, R),
					append_hydration(N, A),
					append_hydration(A, T),
					append_hydration(T, j),
					append_hydration(A, P),
					append_hydration(A, H);
				for (let t = 0; t < 8; t += 1) _e[t].m(H, null);
				append_hydration(t, O),
					append_hydration(t, z),
					append_hydration(t, q),
					append_hydration(t, C),
					append_hydration(C, G),
					append_hydration(t, X),
					append_hydration(t, U),
					append_hydration(t, F),
					mount_component(J, t, null),
					(K = !0);
			},
			p(e, [t]) {
				if (((!K || 2 & t) && Z !== (Z = e[1]('newRecord') + '') && set_data(n, Z), 13 & t)) {
					let a;
					for (ae = e[2], a = 0; a < ae.length; a += 1) {
						const n = get_each_context_4(e, ae, a);
						ne[a] ? ne[a].p(n, t) : ((ne[a] = create_each_block_4(n)), ne[a].c(), ne[a].m(i, null));
					}
					for (; a < ne.length; a += 1) ne[a].d(1);
					ne.length = ae.length;
				}
				if (
					((!K || 2 & t) && M !== (M = e[1]('teeth') + '') && set_data(h, M),
					(!K || 2 & t) && Q !== (Q = e[1]('upperLeft') + '') && set_data(y, Q),
					9 & t)
				) {
					let a;
					for (ce = [18, 17, 16, 15, 14, 13, 12, 11], a = 0; a < 8; a += 1) {
						const n = get_each_context_3(e, ce, a);
						re[a] ? re[a].p(n, t) : ((re[a] = create_each_block_3(n)), re[a].c(), re[a].m($, null));
					}
					for (; a < 8; a += 1) re[a].d(1);
				}
				if (((!K || 2 & t) && W !== (W = e[1]('upperRight') + '') && set_data(k, W), 9 & t)) {
					let a;
					for (le = [21, 22, 23, 24, 25, 25, 27, 28], a = 0; a < 8; a += 1) {
						const n = get_each_context_2(e, le, a);
						ie[a] ? ie[a].p(n, t) : ((ie[a] = create_each_block_2(n)), ie[a].c(), ie[a].m(w, null));
					}
					for (; a < 8; a += 1) ie[a].d(1);
				}
				if (((!K || 2 & t) && Y !== (Y = e[1]('lowerLeft') + '') && set_data(V, Y), 9 & t)) {
					let a;
					for (oe = [48, 47, 46, 45, 44, 43, 42, 41], a = 0; a < 8; a += 1) {
						const n = get_each_context_1$1(e, oe, a);
						se[a]
							? se[a].p(n, t)
							: ((se[a] = create_each_block_1$1(n)), se[a].c(), se[a].m(B, null));
					}
					for (; a < 8; a += 1) se[a].d(1);
				}
				if (((!K || 2 & t) && ee !== (ee = e[1]('lowerRight') + '') && set_data(j, ee), 9 & t)) {
					let a;
					for (de = [31, 32, 33, 34, 35, 35, 37, 38], a = 0; a < 8; a += 1) {
						const n = get_each_context$2(e, de, a);
						_e[a] ? _e[a].p(n, t) : ((_e[a] = create_each_block$2(n)), _e[a].c(), _e[a].m(H, null));
					}
					for (; a < 8; a += 1) _e[a].d(1);
				}
				(!K || 2 & t) && te !== (te = e[1]('note') + '') && set_data(G, te);
				const a = {};
				33554434 & t && (a.$$scope = { dirty: t, ctx: e }), J.$set(a);
			},
			i(e) {
				K || (transition_in(J.$$.fragment, e), (K = !0));
			},
			o(e) {
				transition_out(J.$$.fragment, e), (K = !1);
			},
			d(e) {
				e && detach(t),
					destroy_each(ne, e),
					destroy_each(re, e),
					destroy_each(ie, e),
					destroy_each(se, e),
					destroy_each(_e, e),
					destroy_component(J);
			}
		}
	);
}
function instance$2(e, t, a) {
	let n;
	component_subscribe(e, X, (e) => a(1, (n = e)));
	let c = [];
	const r = (e) => {
		-1 !== c.indexOf(e) ? a(0, (c = c.filter((t) => t != e))) : a(0, (c = [...c, e]));
	};
	return [
		c,
		n,
		[
			'การตรวจเช็คสุขภาพของฟันและช่องปาก',
			'การขูดหินปูน',
			'การขจัดคราบหรือฟอกฟัน',
			'การอุดฟัน',
			'การรักษารากฟัน',
			'การจัดฟัน',
			'การอุดฟันน้ำนม',
			'การขัดฟันและการเคลือบฟลูออไรด์',
			'การเคลือบหลุมร่องฟัน',
			'สะพานฟัน',
			'เคลือบฟัน',
			'ฟันปลอม'
		],
		r,
		(e) => r(e),
		(e) => r(e),
		(e) => r(e),
		(e) => r(e),
		(e) => r(e),
		(e) => r(e),
		(e) => r(e),
		(e) => r(e),
		(e) => r(e),
		(e) => r(e)
	];
}
class NewRecord extends SvelteComponent {
	constructor(e) {
		super(), init(this, e, instance$2, create_fragment$2, safe_not_equal, {});
	}
}
function get_each_context$1(e, t, a) {
	const n = e.slice();
	return (n[1] = t[a]), n;
}
function create_default_slot(e) {
	let t,
		a,
		n,
		c = e[0]('view') + '';
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
			attr(t, 'class', 'lni lni-list');
		},
		m(e, c) {
			insert_hydration(e, t, c), insert_hydration(e, a, c), insert_hydration(e, n, c);
		},
		p(e, t) {
			1 & t && c !== (c = e[0]('view') + '') && set_data(n, c);
		},
		d(e) {
			e && detach(t), e && detach(a), e && detach(n);
		}
	};
}
function create_each_block$1(e) {
	let t,
		a,
		n,
		c,
		r,
		l,
		i,
		o,
		s,
		d,
		_,
		h = dayjs().format('LLL') + '';
	return (
		(s = new ButtonGreen({
			props: { size: 'small', $$slots: { default: [create_default_slot] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = element('div')),
					(a = element('div')),
					(n = text(h)),
					(c = space()),
					(r = element('div')),
					(l = text('ขูดหินปูน')),
					(i = space()),
					(o = element('div')),
					create_component(s.$$.fragment),
					(d = space()),
					this.h();
			},
			l(e) {
				t = claim_element(e, 'DIV', { class: !0 });
				var _ = children(t);
				a = claim_element(_, 'DIV', {});
				var m = children(a);
				(n = claim_text(m, h)),
					m.forEach(detach),
					(c = claim_space(_)),
					(r = claim_element(_, 'DIV', {}));
				var p = children(r);
				(l = claim_text(p, 'ขูดหินปูน')),
					p.forEach(detach),
					(i = claim_space(_)),
					(o = claim_element(_, 'DIV', {}));
				var u = children(o);
				claim_component(s.$$.fragment, u),
					u.forEach(detach),
					(d = claim_space(_)),
					_.forEach(detach),
					this.h();
			},
			h() {
				attr(t, 'class', 'mb-1 flex justify-between bg-rose-200 p-3 rounded-md');
			},
			m(e, h) {
				insert_hydration(e, t, h),
					append_hydration(t, a),
					append_hydration(a, n),
					append_hydration(t, c),
					append_hydration(t, r),
					append_hydration(r, l),
					append_hydration(t, i),
					append_hydration(t, o),
					mount_component(s, o, null),
					append_hydration(t, d),
					(_ = !0);
			},
			p(e, t) {
				const a = {};
				17 & t && (a.$$scope = { dirty: t, ctx: e }), s.$set(a);
			},
			i(e) {
				_ || (transition_in(s.$$.fragment, e), (_ = !0));
			},
			o(e) {
				transition_out(s.$$.fragment, e), (_ = !1);
			},
			d(e) {
				e && detach(t), destroy_component(s);
			}
		}
	);
}
function create_fragment$1(e) {
	let t,
		a,
		n,
		c,
		r,
		l,
		i,
		o = e[0]('visits') + '',
		s = [1, 2, 3, 4, 5],
		d = [];
	for (let h = 0; h < 5; h += 1) d[h] = create_each_block$1(get_each_context$1(e, s, h));
	const _ = (e) =>
		transition_out(d[e], 1, 1, () => {
			d[e] = null;
		});
	return {
		c() {
			(t = element('h1')), (a = text(o)), (n = space()), (c = element('hr')), (r = space());
			for (let e = 0; e < 5; e += 1) d[e].c();
			(l = empty()), this.h();
		},
		l(e) {
			t = claim_element(e, 'H1', { class: !0 });
			var i = children(t);
			(a = claim_text(i, o)),
				i.forEach(detach),
				(n = claim_space(e)),
				(c = claim_element(e, 'HR', {})),
				(r = claim_space(e));
			for (let t = 0; t < 5; t += 1) d[t].l(e);
			(l = empty()), this.h();
		},
		h() {
			attr(t, 'class', 'text-2xl my-2 bold text-blue-800');
		},
		m(e, o) {
			insert_hydration(e, t, o),
				append_hydration(t, a),
				insert_hydration(e, n, o),
				insert_hydration(e, c, o),
				insert_hydration(e, r, o);
			for (let t = 0; t < 5; t += 1) d[t].m(e, o);
			insert_hydration(e, l, o), (i = !0);
		},
		p(e, [t]) {
			if (((!i || 1 & t) && o !== (o = e[0]('visits') + '') && set_data(a, o), 1 & t)) {
				let a;
				for (s = [1, 2, 3, 4, 5], a = 0; a < 5; a += 1) {
					const n = get_each_context$1(e, s, a);
					d[a]
						? (d[a].p(n, t), transition_in(d[a], 1))
						: ((d[a] = create_each_block$1(n)),
						  d[a].c(),
						  transition_in(d[a], 1),
						  d[a].m(l.parentNode, l));
				}
				for (group_outros(), a = 5; a < 5; a += 1) _(a);
				check_outros();
			}
		},
		i(e) {
			if (!i) {
				for (let e = 0; e < 5; e += 1) transition_in(d[e]);
				i = !0;
			}
		},
		o(e) {
			d = d.filter(Boolean);
			for (let t = 0; t < 5; t += 1) transition_out(d[t]);
			i = !1;
		},
		d(e) {
			e && detach(t),
				e && detach(n),
				e && detach(c),
				e && detach(r),
				destroy_each(d, e),
				e && detach(l);
		}
	};
}
function instance$1(e, t, a) {
	let n;
	return component_subscribe(e, X, (e) => a(0, (n = e))), dayjs.extend(LocalizedFormat), [n];
}
class Visits extends SvelteComponent {
	constructor(e) {
		super(), init(this, e, instance$1, create_fragment$1, safe_not_equal, {});
	}
}
function get_each_context(e, t, a) {
	const n = e.slice();
	return (n[2] = t[a]), n;
}
function get_each_context_1(e, t, a) {
	const n = e.slice();
	return (n[2] = t[a]), n;
}
function create_each_block_1(e) {
	let t,
		a,
		n,
		c,
		r,
		l,
		i,
		o = e[0](e[2]) + '',
		s = e[1](e[2]) + '';
	return {
		c() {
			(t = element('tr')),
				(a = element('td')),
				(n = text(o)),
				(c = space()),
				(r = element('td')),
				(l = text(s)),
				(i = space()),
				this.h();
		},
		l(e) {
			t = claim_element(e, 'TR', {});
			var d = children(t);
			a = claim_element(d, 'TD', { class: !0 });
			var _ = children(a);
			(n = claim_text(_, o)),
				_.forEach(detach),
				(c = claim_space(d)),
				(r = claim_element(d, 'TD', { class: !0 }));
			var h = children(r);
			(l = claim_text(h, s)), h.forEach(detach), (i = claim_space(d)), d.forEach(detach), this.h();
		},
		h() {
			attr(a, 'class', 'text-blue-800 text-right p-2'), attr(r, 'class', 'p-2');
		},
		m(e, o) {
			insert_hydration(e, t, o),
				append_hydration(t, a),
				append_hydration(a, n),
				append_hydration(t, c),
				append_hydration(t, r),
				append_hydration(r, l),
				append_hydration(t, i);
		},
		p(e, t) {
			1 & t && o !== (o = e[0](e[2]) + '') && set_data(n, o);
		},
		d(e) {
			e && detach(t);
		}
	};
}
function create_each_block(e) {
	let t,
		a,
		n,
		c,
		r,
		l,
		i,
		o = e[0](e[2]) + '',
		s = e[1](e[2]) + '';
	return {
		c() {
			(t = element('tr')),
				(a = element('td')),
				(n = text(o)),
				(c = space()),
				(r = element('td')),
				(l = text(s)),
				(i = space()),
				this.h();
		},
		l(e) {
			t = claim_element(e, 'TR', {});
			var d = children(t);
			a = claim_element(d, 'TD', { class: !0 });
			var _ = children(a);
			(n = claim_text(_, o)),
				_.forEach(detach),
				(c = claim_space(d)),
				(r = claim_element(d, 'TD', { class: !0 }));
			var h = children(r);
			(l = claim_text(h, s)), h.forEach(detach), (i = claim_space(d)), d.forEach(detach), this.h();
		},
		h() {
			attr(a, 'class', 'text-blue-800 text-right p-2'), attr(r, 'class', 'p-2');
		},
		m(e, o) {
			insert_hydration(e, t, o),
				append_hydration(t, a),
				append_hydration(a, n),
				append_hydration(t, c),
				append_hydration(t, r),
				append_hydration(r, l),
				append_hydration(t, i);
		},
		p(e, t) {
			1 & t && o !== (o = e[0](e[2]) + '') && set_data(n, o);
		},
		d(e) {
			e && detach(t);
		}
	};
}
function create_fragment(e) {
	let t,
		a,
		n,
		c,
		r,
		l,
		i,
		o,
		s,
		d,
		_,
		h,
		m,
		p,
		u,
		f,
		y,
		x,
		$,
		g,
		b,
		v,
		k,
		E,
		w,
		D = e[0]('patientDetail') + '';
	(t = new Navigation({})), (o = new SetLanguage({}));
	let N = ['citizenID', 'phone', 'firstName', 'lastName'],
		I = [];
	for (let L = 0; L < 4; L += 1) I[L] = create_each_block_1(get_each_context_1(e, N, L));
	let S = ['gender', 'birthday', 'addressLineOne', 'addressLineTwo'],
		V = [];
	for (let L = 0; L < 4; L += 1) V[L] = create_each_block(get_each_context(e, S, L));
	return (
		($ = new Schedule({})),
		(b = new Visits({})),
		(E = new NewRecord({})),
		{
			c() {
				create_component(t.$$.fragment),
					(a = space()),
					(n = element('div')),
					(c = element('div')),
					(r = element('h1')),
					(l = text(D)),
					(i = space()),
					create_component(o.$$.fragment),
					(s = space()),
					(d = element('hr')),
					(_ = space()),
					(h = element('div')),
					(m = element('table'));
				for (let e = 0; e < 4; e += 1) I[e].c();
				(p = space()), (u = element('table'));
				for (let e = 0; e < 4; e += 1) V[e].c();
				(f = space()),
					(y = element('div')),
					(x = element('div')),
					create_component($.$$.fragment),
					(g = space()),
					create_component(b.$$.fragment),
					(v = space()),
					(k = element('div')),
					create_component(E.$$.fragment),
					this.h();
			},
			l(e) {
				claim_component(t.$$.fragment, e),
					(a = claim_space(e)),
					(n = claim_element(e, 'DIV', { class: !0 }));
				var w = children(n);
				c = claim_element(w, 'DIV', { class: !0 });
				var N = children(c);
				r = claim_element(N, 'H1', { class: !0 });
				var S = children(r);
				(l = claim_text(S, D)),
					S.forEach(detach),
					(i = claim_space(N)),
					claim_component(o.$$.fragment, N),
					N.forEach(detach),
					(s = claim_space(w)),
					(d = claim_element(w, 'HR', {})),
					(_ = claim_space(w)),
					(h = claim_element(w, 'DIV', { class: !0 }));
				var L = children(h);
				m = claim_element(L, 'TABLE', { class: !0 });
				var B = children(m);
				for (let t = 0; t < 4; t += 1) I[t].l(B);
				B.forEach(detach), (p = claim_space(L)), (u = claim_element(L, 'TABLE', { class: !0 }));
				var R = children(u);
				for (let t = 0; t < 4; t += 1) V[t].l(R);
				R.forEach(detach),
					L.forEach(detach),
					(f = claim_space(w)),
					(y = claim_element(w, 'DIV', { class: !0 }));
				var A = children(y);
				x = claim_element(A, 'DIV', { class: !0 });
				var T = children(x);
				claim_component($.$$.fragment, T),
					(g = claim_space(T)),
					claim_component(b.$$.fragment, T),
					T.forEach(detach),
					(v = claim_space(A)),
					(k = claim_element(A, 'DIV', { class: !0 }));
				var j = children(k);
				claim_component(E.$$.fragment, j),
					j.forEach(detach),
					A.forEach(detach),
					w.forEach(detach),
					this.h();
			},
			h() {
				attr(r, 'class', 'text-2xl bold'),
					attr(c, 'class', 'flex justify-between'),
					attr(m, 'class', 'table-auto'),
					attr(u, 'class', 'table-auto'),
					attr(h, 'class', 'flex bg-blue-50 my-2 p-2'),
					attr(x, 'class', 'w-1/3 p-2'),
					attr(k, 'class', 'w-2/3 p-2'),
					attr(y, 'class', 'flex'),
					attr(n, 'class', 'container mx-auto bg-white p-2 rounded-lg shadow-lg');
			},
			m(e, D) {
				mount_component(t, e, D),
					insert_hydration(e, a, D),
					insert_hydration(e, n, D),
					append_hydration(n, c),
					append_hydration(c, r),
					append_hydration(r, l),
					append_hydration(c, i),
					mount_component(o, c, null),
					append_hydration(n, s),
					append_hydration(n, d),
					append_hydration(n, _),
					append_hydration(n, h),
					append_hydration(h, m);
				for (let t = 0; t < 4; t += 1) I[t].m(m, null);
				append_hydration(h, p), append_hydration(h, u);
				for (let t = 0; t < 4; t += 1) V[t].m(u, null);
				append_hydration(n, f),
					append_hydration(n, y),
					append_hydration(y, x),
					mount_component($, x, null),
					append_hydration(x, g),
					mount_component(b, x, null),
					append_hydration(y, v),
					append_hydration(y, k),
					mount_component(E, k, null),
					(w = !0);
			},
			p(e, [t]) {
				if (((!w || 1 & t) && D !== (D = e[0]('patientDetail') + '') && set_data(l, D), 3 & t)) {
					let a;
					for (N = ['citizenID', 'phone', 'firstName', 'lastName'], a = 0; a < 4; a += 1) {
						const n = get_each_context_1(e, N, a);
						I[a] ? I[a].p(n, t) : ((I[a] = create_each_block_1(n)), I[a].c(), I[a].m(m, null));
					}
					for (; a < 4; a += 1) I[a].d(1);
				}
				if (3 & t) {
					let a;
					for (
						S = ['gender', 'birthday', 'addressLineOne', 'addressLineTwo'], a = 0;
						a < 4;
						a += 1
					) {
						const n = get_each_context(e, S, a);
						V[a] ? V[a].p(n, t) : ((V[a] = create_each_block(n)), V[a].c(), V[a].m(u, null));
					}
					for (; a < 4; a += 1) V[a].d(1);
				}
			},
			i(e) {
				w ||
					(transition_in(t.$$.fragment, e),
					transition_in(o.$$.fragment, e),
					transition_in($.$$.fragment, e),
					transition_in(b.$$.fragment, e),
					transition_in(E.$$.fragment, e),
					(w = !0));
			},
			o(e) {
				transition_out(t.$$.fragment, e),
					transition_out(o.$$.fragment, e),
					transition_out($.$$.fragment, e),
					transition_out(b.$$.fragment, e),
					transition_out(E.$$.fragment, e),
					(w = !1);
			},
			d(e) {
				destroy_component(t, e),
					e && detach(a),
					e && detach(n),
					destroy_component(o),
					destroy_each(I, e),
					destroy_each(V, e),
					destroy_component($),
					destroy_component(b),
					destroy_component(E);
			}
		}
	);
}
function instance($$self, $$props, $$invalidate) {
	let $_;
	component_subscribe($$self, X, (e) => $$invalidate(0, ($_ = e)));
	const myEval = (q) => eval(q);
	return [$_, myEval];
}
class U5Bidu5D extends SvelteComponent {
	constructor(e) {
		super(), init(this, e, instance, create_fragment, safe_not_equal, {});
	}
}
export { U5Bidu5D as default };

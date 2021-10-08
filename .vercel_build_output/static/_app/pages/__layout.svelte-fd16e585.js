import {
	D as n,
	$ as t,
	I as e,
	E as s,
	S as c,
	i as o,
	s as a,
	F as r,
	G as u,
	H as i,
	J as l,
	x as f,
	u as p
} from '../chunks/vendor-4465f8c9.js';
import { _ } from '../chunks/preload-helper-ec9aa979.js';
n('en', () => _(() => import('../chunks/en-b6e1da6c.js'), [])),
	n('en-US', () => _(() => import('../chunks/en-b6e1da6c.js'), [])),
	n('th', () => _(() => import('../chunks/th-7ff33bb7.js'), [])),
	t({ fallbackLocale: 'en', initialLocale: e() });
function h(n) {
	let t;
	const e = n[1].default,
		s = r(e, n, n[0], null);
	return {
		c() {
			s && s.c();
		},
		l(n) {
			s && s.l(n);
		},
		m(n, e) {
			s && s.m(n, e), (t = !0);
		},
		p(n, [c]) {
			s && s.p && (!t || 1 & c) && u(s, e, n, n[0], t ? l(e, n[0], c, null) : i(n[0]), null);
		},
		i(n) {
			t || (f(s, n), (t = !0));
		},
		o(n) {
			p(s, n), (t = !1);
		},
		d(n) {
			s && s.d(n);
		}
	};
}
var d = function (n, t, e, s) {
	return new (e || (e = Promise))(function (c, o) {
		function a(n) {
			try {
				u(s.next(n));
			} catch (t) {
				o(t);
			}
		}
		function r(n) {
			try {
				u(s.throw(n));
			} catch (t) {
				o(t);
			}
		}
		function u(n) {
			var t;
			n.done
				? c(n.value)
				: ((t = n.value),
				  t instanceof e
						? t
						: new e(function (n) {
								n(t);
						  })).then(a, r);
		}
		u((s = s.apply(n, t || [])).next());
	});
};
function m() {
	return d(this, void 0, void 0, function* () {
		return yield s(), {};
	});
}
function $(n, t, e) {
	let { $$slots: s = {}, $$scope: c } = t;
	return (
		(n.$$set = (n) => {
			'$$scope' in n && e(0, (c = n.$$scope));
		}),
		[c, s]
	);
}
class v extends c {
	constructor(n) {
		super(), o(this, n, $, h, a, {});
	}
}
export { v as default, m as load };

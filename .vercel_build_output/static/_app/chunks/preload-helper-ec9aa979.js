const e = {},
	r = function (r, t) {
		return t && 0 !== t.length
			? Promise.all(
					t.map((r) => {
						if ((r = `/_app/${r}`) in e) return;
						e[r] = !0;
						const t = r.endsWith('.css'),
							n = t ? '[rel="stylesheet"]' : '';
						if (document.querySelector(`link[href="${r}"]${n}`)) return;
						const s = document.createElement('link');
						return (
							(s.rel = t ? 'stylesheet' : 'modulepreload'),
							t || ((s.as = 'script'), (s.crossOrigin = '')),
							(s.href = r),
							document.head.appendChild(s),
							t
								? new Promise((e, r) => {
										s.addEventListener('load', e), s.addEventListener('error', r);
								  })
								: void 0
						);
					})
			  ).then(() => r())
			: r();
	};
export { r as _ };

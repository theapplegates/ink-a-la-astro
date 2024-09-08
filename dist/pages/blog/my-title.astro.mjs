import { c as createComponent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_Dp6SZoyW.mjs';
import 'kleur/colors';
import { $ as $$Post } from '../../chunks/post_BMi_l3Hu.mjs';
export { renderers } from '../../renderers.mjs';

const html = "<p>П﻿роба пера</p>";

				const frontmatter = {"layout":"$/layouts/post.astro","title":"My title","description":"it`s simple","author":"ВГ","authorTwitter":"лдт","date":"2024-02-22T10:11:06.408Z"};
				const file = "/Users/thor3/Documents/kill-me-ink/src/pages/blog/my-title.md";
				const url = "/blog/my-title";
				function rawContent() {
					return "П﻿роба пера";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Post, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

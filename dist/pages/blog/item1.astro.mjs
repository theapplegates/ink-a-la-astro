import { c as createComponent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_Dp6SZoyW.mjs';
import 'kleur/colors';
import { $ as $$Post } from '../../chunks/post_BMi_l3Hu.mjs';
export { renderers } from '../../renderers.mjs';

const html = "<p>GThis is the body</p>";

				const frontmatter = {"layout":"$/layouts/post.astro","title":"Item1","description":"Test","author":"Justin","authorTwitter":"@justin","date":"2023-12-11T00:48:30.405Z"};
				const file = "/Users/thor3/Documents/kill-me-ink/src/pages/blog/item1.md";
				const url = "/blog/item1";
				function rawContent() {
					return "GThis is the body";
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

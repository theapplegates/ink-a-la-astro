import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, f as createAstro, d as renderComponent } from '../chunks/astro/server_Dp6SZoyW.mjs';
import 'kleur/colors';
import { a as getCollection } from '../chunks/_astro_content_Dx4uqgM2.mjs';
import { $ as $$Default } from '../chunks/default_BjkvIHdm.mjs';
import { $ as $$PostPreviewList } from '../chunks/PostPreviewList_XtZcCYkP.mjs';
import { $ as $$Prose } from '../chunks/Prose_CKkXiVTj.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const html = "<p><strong>Astro-Ink</strong> is a crisp, minimal, personal blog theme for Astro, that shows the capability of statically built sites - offering all the goodness and DX of the modern JS ecosystem without actually shipping any JS by default. And, above all…</p>\n<h3 id=\"its-open-source\">It’s Open-Source!</h3>\n<p><strong>Maintained By:</strong> Aftab Alam // <a href=\"https://twitter.com/aftabbuddy\">@aftabbuddy</a>  // <a href=\"https://github.com/one-aalam\">one-aalam</a></p>";

				const frontmatter = {};
				const file = "/Users/thor3/Documents/kill-me-ink/src/pages/_astro-ink.md";
				const url = "/_astro-ink";

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const $$Astro = createAstro("https://ink.paulapplegate.com");
const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Home";
  const description = "Astro-Ink is a crisp, minimal, personal blog theme for Astro";
  const posts = await getCollection("blog");
  return renderTemplate`${renderComponent($$result, "DefaultPageLayout", $$Default, { "content": { title, description }, "showPageHeader": false, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="hero " data-astro-cid-j7pv25f6> <div class="hero__face" data-astro-cid-j7pv25f6> <div class="author-card" data-astro-cid-j7pv25f6> <img src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5358878e2493fbea064dd9_peep-59.svg" title="Aalam" data-astro-cid-j7pv25f6> </div> </div> <div class="hero__says" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Prose", $$Prose, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AboutAstroInk", Content, { "data-astro-cid-j7pv25f6": true })} ` })} </div> </div> <hr data-astro-cid-j7pv25f6> ${renderComponent($$result2, "PostPreviewList", $$PostPreviewList, { "posts": posts.slice(0, 3), "heading": "recent posts", "data-astro-cid-j7pv25f6": true })} <div class="page__actions" data-astro-cid-j7pv25f6> <a class="action__go-to-blog ink-h" href="/blog" title="All Posts" data-astro-cid-j7pv25f6>All Posts &rarr;</a> </div> ` })} `;
}, "/Users/thor3/Documents/kill-me-ink/src/pages/index.astro", void 0);

const $$file = "/Users/thor3/Documents/kill-me-ink/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

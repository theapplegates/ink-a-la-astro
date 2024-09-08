import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, g as addAttribute, h as renderTransition } from '../chunks/astro/server_Dp6SZoyW.mjs';
import 'kleur/colors';
import { a as getCollection } from '../chunks/_astro_content_Dx4uqgM2.mjs';
import { $ as $$Default } from '../chunks/default_BjkvIHdm.mjs';
/* empty css                                 */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let title = "All Tags";
  let description = "All the tags used so far...";
  const allPosts = await getCollection("blog");
  const tags = [...new Set([].concat.apply([], allPosts.map((post) => post.data.tags)))];
  return renderTemplate`${renderComponent($$result, "DefaultPageLayout", $$Default, { "content": { title, description }, "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="tag-list" data-astro-cid-os4i7owy> ${tags.map((tag) => renderTemplate`<li data-astro-cid-os4i7owy><a class="tag"${addAttribute(`/tags/${tag}`, "href")}${addAttribute(`View posts tagged under "${tag}"`, "title")} data-astro-cid-os4i7owy${addAttribute(renderTransition($$result2, "6ykwchq7", "slide"), "data-astro-transition-scope")}>${tag}</a></li>`)} </ul> ` })} `;
}, "/Users/thor3/Documents/kill-me-ink/src/pages/tags/index.astro", "self");

const $$file = "/Users/thor3/Documents/kill-me-ink/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

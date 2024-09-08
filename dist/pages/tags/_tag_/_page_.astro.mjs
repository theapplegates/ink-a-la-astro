import { f as createAstro, c as createComponent, r as renderTemplate, d as renderComponent } from '../../../chunks/astro/server_Dp6SZoyW.mjs';
import 'kleur/colors';
import { a as getCollection } from '../../../chunks/_astro_content_Dx4uqgM2.mjs';
import { P as PAGE_SIZE } from '../../../chunks/config_7kXHvDFn.mjs';
import { $ as $$Default } from '../../../chunks/default_BjkvIHdm.mjs';
import { $ as $$PostPreviewList } from '../../../chunks/PostPreviewList_XtZcCYkP.mjs';
import { $ as $$Paginator } from '../../../chunks/Paginator_CmLZx9q9.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://ink.paulapplegate.com");
const prerender = true;
async function getStaticPaths({ paginate }) {
  const allPosts = await getCollection("blog");
  const allTags = /* @__PURE__ */ new Set();
  allPosts.map((post) => {
    post.data.tags && post.data.tags.map((tag) => allTags.add(tag));
  });
  return Array.from(allTags).flatMap((tag) => {
    const filteredPosts = allPosts.filter((post) => post.data.tags.includes(tag));
    return paginate(filteredPosts, {
      params: { tag },
      pageSize: PAGE_SIZE
    });
  });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  const { tag } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "DefaultPageLayout", $$Default, { "content": { title: `Posts by Tag: ${tag}`, description: `all of the articles we have posted and linked so far under the tag: ${tag}` } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostPreviewList", $$PostPreviewList, { "posts": page.data })} ${renderComponent($$result2, "Paginator", $$Paginator, { "page": page })} ` })}`;
}, "/Users/thor3/Documents/kill-me-ink/src/pages/tags/[tag]/[page].astro", void 0);

const $$file = "/Users/thor3/Documents/kill-me-ink/src/pages/tags/[tag]/[page].astro";
const $$url = "/tags/[tag]/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

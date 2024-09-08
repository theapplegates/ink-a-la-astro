import { f as createAstro, c as createComponent, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_Dp6SZoyW.mjs';
import 'kleur/colors';
import { a as getCollection } from '../../chunks/_astro_content_Dx4uqgM2.mjs';
import { $ as $$Default } from '../../chunks/default_BjkvIHdm.mjs';
import { $ as $$PostPreviewList } from '../../chunks/PostPreviewList_XtZcCYkP.mjs';
import { $ as $$Paginator } from '../../chunks/Paginator_CmLZx9q9.mjs';
import { P as PAGE_SIZE } from '../../chunks/config_7kXHvDFn.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://ink.paulapplegate.com");
const prerender = true;
async function getStaticPaths({ paginate }) {
  const allPosts = await getCollection("blog");
  const sortedPosts = allPosts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  return paginate(sortedPosts, {
    pageSize: PAGE_SIZE
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  let title = "Blog";
  let description = "All the articles posted so far...";
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultPageLayout", $$Default, { "content": { title, description } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostPreviewList", $$PostPreviewList, { "posts": page.data })} ${renderComponent($$result2, "Paginator", $$Paginator, { "page": page })} ` })}`;
}, "/Users/thor3/Documents/kill-me-ink/src/pages/blog/[...page].astro", void 0);

const $$file = "/Users/thor3/Documents/kill-me-ink/src/pages/blog/[...page].astro";
const $$url = "/blog/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

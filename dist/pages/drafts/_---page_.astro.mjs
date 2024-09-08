import { f as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, d as renderComponent } from '../../chunks/astro/server_Dp6SZoyW.mjs';
import 'kleur/colors';
import { $ as $$Default } from '../../chunks/default_BjkvIHdm.mjs';
import 'clsx';
import { a as getMonthName, g as getSlugFromPathname } from '../../chunks/index_BaAdIIbj.mjs';
/* empty css                                     */
import { $ as $$Paginator } from '../../chunks/Paginator_CmLZx9q9.mjs';
import { P as PAGE_SIZE } from '../../chunks/config_7kXHvDFn.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://ink.paulapplegate.com");
const $$PostDraftPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostDraftPreview;
  const { frontmatter: post, file } = Astro2.props.post;
  return renderTemplate`${maybeRenderHead()}<div class="post-draft-preview" data-astro-cid-rlpjy3zc> <div class="sm:w-20 md:w-32" data-astro-cid-rlpjy3zc> <div class="post-draft-preview__date" data-astro-cid-rlpjy3zc> <span class="post-draft-preview__date__day" data-astro-cid-rlpjy3zc>${new Date(post.date).getDate()}</span> <span class="post-draft-preview__date__month-n-year" data-astro-cid-rlpjy3zc>${`${getMonthName(post.date)} ${new Date(post.date).getFullYear()}`}</span> </div> </div> <div class="flex-1" data-astro-cid-rlpjy3zc> <h4 class="post-draft-preview__title dark:text-theme-dark-primary" data-astro-cid-rlpjy3zc> <a${addAttribute(`/drafts/${getSlugFromPathname(file)}`, "href")}${addAttribute(post.title, "title")} data-astro-cid-rlpjy3zc>${post.title}</a> </h4> <p class="post-draft-preview__desc" data-astro-cid-rlpjy3zc> ${post.description} </p> </div> </div> `;
}, "/Users/thor3/Documents/kill-me-ink/src/components/PostDraftPreview.astro", void 0);

const $$Astro$1 = createAstro("https://ink.paulapplegate.com");
const $$PostDraftPreviewList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostDraftPreviewList;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="post-draft-preview__list" data-astro-cid-mlqldfje> ${posts.map((post) => renderTemplate`${renderComponent($$result, "PostDraftPreview", $$PostDraftPreview, { "post": post, "data-astro-cid-mlqldfje": true })}`)} </section> `;
}, "/Users/thor3/Documents/kill-me-ink/src/components/PostDraftPreviewList.astro", void 0);

const $$Astro = createAstro("https://ink.paulapplegate.com");
const Astro = $$Astro;
const prerender = true;
async function getStaticPaths({ paginate, rss }) {
  let allPosts = [];
  try {
    allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({}), () => "../../drafts/*.md");
  } catch (error) {
    console.log("No draft posts found while generating the index page for the draft pages");
  }
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return paginate(sortedPosts, {
    pageSize: PAGE_SIZE
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  let title = "Drafts";
  let description = "You're viewing a list of unpublished articles on the site. Accuracy or correctness isn't guranteed...";
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultPageLayout", $$Default, { "content": { title, description } }, { "default": ($$result2) => renderTemplate`${renderTemplate`${renderComponent($$result2, "PostDraftPreviewList", $$PostDraftPreviewList, { "posts": page.data })}` }${renderComponent($$result2, "Paginator", $$Paginator, { "page": page })} ` })}`;
}, "/Users/thor3/Documents/kill-me-ink/src/pages/drafts/[...page].astro", void 0);

const $$file = "/Users/thor3/Documents/kill-me-ink/src/pages/drafts/[...page].astro";
const $$url = "/drafts/[...page]";

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

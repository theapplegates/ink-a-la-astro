import { f as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../../chunks/astro/server_Dp6SZoyW.mjs';
import 'kleur/colors';
import { g as getSlugFromPathname } from '../../chunks/index_BaAdIIbj.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://ink.paulapplegate.com");
const Astro = $$Astro;
const prerender = true;
async function getStaticPaths({}) {
  let allPosts = [];
  try {
    allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({}), () => "../../../drafts/*.md");
  } catch (error) {
    console.log("No draft posts found while generating the draft pages");
  }
  const allSlugs = /* @__PURE__ */ new Set();
  const allPostsWithSlug = allPosts.map((post) => {
    const slug = getSlugFromPathname(post.file);
    allSlugs.add(slug.toLowerCase());
    return {
      ...post,
      slug
    };
  });
  return Array.from(allSlugs).map((slug) => {
    const filteredPosts = allPostsWithSlug.filter((post) => post.slug === slug);
    return {
      params: { slug },
      props: {
        pages: filteredPosts
      }
    };
  });
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { slug } = Astro2.params;
  const { pages } = Astro2.props;
  const [post] = pages;
  return renderTemplate`${maybeRenderHead()}<div class="draft-message" data-astro-cid-gzn2w4sg>
You're viewing a <strong data-astro-cid-gzn2w4sg>preview</strong> of <code data-astro-cid-gzn2w4sg>/blog/${slug}</code> which isn't published yet!
</div> ${renderComponent($$result, "post.Content", post.Content, { "data-astro-cid-gzn2w4sg": true })} `;
}, "/Users/thor3/Documents/kill-me-ink/src/pages/drafts/[slug]/index.astro", void 0);

const $$file = "/Users/thor3/Documents/kill-me-ink/src/pages/drafts/[slug]/index.astro";
const $$url = "/drafts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    getStaticPaths,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { f as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, d as renderComponent } from '../chunks/astro/server_Dp6SZoyW.mjs';
import 'kleur/colors';
import { $ as $$Default } from '../chunks/default_BjkvIHdm.mjs';
import 'clsx';
import { a as getMonthName } from '../chunks/index_BaAdIIbj.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://ink.paulapplegate.com");
const $$MediaPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MediaPreview;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="post-preview" data-astro-cid-oyndpakh> <div class="sm:w-20 md:w-32" data-astro-cid-oyndpakh> <div class="post-preview__date" data-astro-cid-oyndpakh> <span class="post-preview__date__day" data-astro-cid-oyndpakh>${new Date(post.date).getDate()}</span> <span class="post-preview__date__month-n-year" data-astro-cid-oyndpakh>${`${getMonthName(post.date)} ${new Date(post.date).getFullYear()}`}</span> </div> </div> <div${addAttribute(`flex-1 ${post.thumbnail ? "flex flex-row gap-4" : ""}`, "class")} data-astro-cid-oyndpakh> ${post.thumbnail && renderTemplate`<img class="post-preview__media"${addAttribute(post.thumbnail, "src")} alt="media thumbnail" data-astro-cid-oyndpakh>`} <div class="flex flex-col mb-2" data-astro-cid-oyndpakh> <h4 class="post-preview__title dark:text-theme-dark-primary" data-astro-cid-oyndpakh> <a${addAttribute(post.url, "href")}${addAttribute(post.title, "title")} target="_blank" data-astro-cid-oyndpakh>${post.title}</a> </h4> <div data-astro-cid-oyndpakh> <strong data-astro-cid-oyndpakh>${post.host}</strong> ${post.participants.length > 0 && renderTemplate`<em data-astro-cid-oyndpakh>with</em>`} ${post.participants.length > 0 && `${post.participants.join(", ")}`} </div> </div> <p class="post-preview__desc" data-astro-cid-oyndpakh> ${post.description} </p> </div> </div> `;
}, "/Users/thor3/Documents/kill-me-ink/src/components/MediaPreview.astro", void 0);

const $$Astro$1 = createAstro("https://ink.paulapplegate.com");
const $$MediaPreviewList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MediaPreviewList;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="media-preview__list" data-astro-cid-zw3co6ql> ${posts.map((post) => renderTemplate`${renderComponent($$result, "MediaPreview", $$MediaPreview, { "post": post, "data-astro-cid-zw3co6ql": true })}`)} </section> `;
}, "/Users/thor3/Documents/kill-me-ink/src/components/MediaPreviewList.astro", void 0);

const DEFAULT_MEDIA_URL = "https://api.github.com/repos/one-aalam/astro-ink/contents/src/data/astro-media.json";

const $$Astro = createAstro("https://ink.paulapplegate.com");
const prerender = true;
const $$Media = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Media;
  let title = "Videos & Screencasts";
  let description = "All the great videos on Astro we could find for ya!";
  const response = await fetch(
    // an YT channelId is present?
    (
      // no?
      DEFAULT_MEDIA_URL
    ),
    // Default media URL is a Github content URL currently
    (
      // and we need the below header if pulling raw content from Github. If you don't need it, remove the headers
      {
        headers: {
          "Accept": "application/vnd.github.v3.raw"
        }
      }
    ) 
  );
  const allPosts = await response.json();
  const sortedPosts = (allPosts).sort((a, b) => new Date(b.date) - new Date(a.date));
  return renderTemplate`${renderComponent($$result, "DefaultPageLayout", $$Default, { "content": { title, description } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MediaPreviewList", $$MediaPreviewList, { "posts": sortedPosts })} ` })}`;
}, "/Users/thor3/Documents/kill-me-ink/src/pages/media.astro", void 0);

const $$file = "/Users/thor3/Documents/kill-me-ink/src/pages/media.astro";
const $$url = "/media";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Media,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

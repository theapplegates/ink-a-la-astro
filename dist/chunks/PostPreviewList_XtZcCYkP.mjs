import { f as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, d as renderComponent } from './astro/server_Dp6SZoyW.mjs';
import 'kleur/colors';
import 'clsx';
import { a as getMonthName } from './index_BaAdIIbj.mjs';
/* empty css                          */

const $$Astro$1 = createAstro("https://ink.paulapplegate.com");
const $$PostPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { post: { data: post, slug }, asCard = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`post-preview ${asCard && "post-preview--card"}`, "class")} data-astro-cid-jzq3evcu> <div class="post-preview__date-box" data-astro-cid-jzq3evcu> <div class="post-preview__date" data-astro-cid-jzq3evcu> <span class="post-preview__date__day" data-astro-cid-jzq3evcu>${new Date(post.date).getDate()}</span> <span class="post-preview__date__month-n-year" data-astro-cid-jzq3evcu>${`${getMonthName(post.date)} ${new Date(post.date).getFullYear()}`}</span> </div> </div> <div class="flex-1" data-astro-cid-jzq3evcu> <h4 class="post-preview__title dark:text-theme-dark-primary" data-astro-cid-jzq3evcu> <a${addAttribute(`/blog/${slug}`, "href")}${addAttribute(post.title, "title")} data-astro-cid-jzq3evcu>${post.title}</a> </h4> <p class="post-preview__desc" data-astro-cid-jzq3evcu> ${post.description} </p> </div> </div> `;
}, "/Users/thor3/Documents/kill-me-ink/src/components/PostPreview.astro", void 0);

const $$Astro = createAstro("https://ink.paulapplegate.com");
const $$PostPreviewList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPreviewList;
  const { posts, heading, mode = "col" } = Astro2.props;
  const sortedPosts = posts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  return renderTemplate`${heading ? renderTemplate`${maybeRenderHead()}<h5${addAttribute(`post-preview__heading post-preview__heading--${mode} ink-h`, "class")} data-astro-cid-n45jycaa>${heading}</h5>` : ""}<section${addAttribute(`post-preview__list post-preview__list--${mode}`, "class")} data-astro-cid-n45jycaa> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result, "PostPreview", $$PostPreview, { "post": post, "asCard": mode === "row" ? true : false, "data-astro-cid-n45jycaa": true })}`)} </section> `;
}, "/Users/thor3/Documents/kill-me-ink/src/components/PostPreviewList.astro", void 0);

export { $$PostPreviewList as $ };

import { f as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, d as renderComponent, a as renderHead, e as renderSlot } from './astro/server_Dp6SZoyW.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './index_CBfwsjUN.mjs';
import { S as SITE, U as USE_VIEW_STATS } from './config_7kXHvDFn.mjs';
import { $ as $$BaseHead, a as $$MainLayout } from './MainLayout_0373l9Ho.mjs';
import { $ as $$Prose } from './Prose_CKkXiVTj.mjs';
/* empty css                          */

const $$Astro$1 = createAstro("https://ink.paulapplegate.com");
const $$EditLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EditLink;
  const { editUrl, label = "Edit this page" } = Astro2.props;
  return renderTemplate`${editUrl && renderTemplate`${maybeRenderHead()}<a${addAttribute(editUrl, "href")}${addAttribute(label, "title")} class=" font-thin text-theme-primary dark:text-theme-dark-primary text-sm">${renderComponent($$result, "Icon", $$Icon, { "class": "w-4 h-4 inline-block", "pack": "mdi", "name": "pencil" })}${label}</a>`}`;
}, "/Users/thor3/Documents/kill-me-ink/src/components/EditLink.astro", void 0);

const $$Astro = createAstro("https://ink.paulapplegate.com");
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const { content, meta } = Astro2.props;
  const AUTHOR_NAME = content.author ? content.author : "Author";
  const AUTHOR_TWITTER = content.authorTwitter ? content.authorTwitter : "";
  const AUTHOR_AVATAR = content.authorImage ? content.authorImage : "";
  return renderTemplate`<html lang="en" data-astro-cid-jj6gr7j4> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { ...content, "title": content.title ? `${SITE.title} | ${content.title}` : SITE.title, "data-astro-cid-jj6gr7j4": true })}${renderHead()}</head> ${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-jj6gr7j4": true }, { "default": ($$result2) => renderTemplate` <div class="post__header" data-astro-cid-jj6gr7j4> <div class="post__tags" data-astro-cid-jj6gr7j4> ${content.tags.length > 0 && content.tags.map((tag) => renderTemplate`<a class="post__tag"${addAttribute(`/tags/${tag}`, "href")}${addAttribute(tag, "title")} data-astro-cid-jj6gr7j4>${tag}</a>`)} </div> <h1 class="post__title" data-astro-cid-jj6gr7j4>${content.title}</h1> <h5${addAttribute(`post__desc ${AUTHOR_AVATAR ? "flex flex-row gap-2" : ""}`, "class")} data-astro-cid-jj6gr7j4> ${AUTHOR_AVATAR ? renderTemplate`<img class="avatar"${addAttribute(AUTHOR_AVATAR, "src")}${addAttribute(`${AUTHOR_NAME}'s avatar`, "alt")} data-astro-cid-jj6gr7j4>` : ""} <div${addAttribute(AUTHOR_AVATAR ? "flex flex-col border-l-2 pl-2" : "", "class")} data-astro-cid-jj6gr7j4> ${AUTHOR_TWITTER ? renderTemplate`<a class="post__author"${addAttribute(`https://twitter.com/${AUTHOR_TWITTER}`, "href")}${addAttribute(`${AUTHOR_NAME}'s twitter`, "title")} target="_blank" rel="external" data-astro-cid-jj6gr7j4>${AUTHOR_NAME}</a>` : renderTemplate`<span class="post__author" data-astro-cid-jj6gr7j4>${AUTHOR_NAME}</span>`} ${!AUTHOR_AVATAR ? " | " : ""} <span class="post__date" data-astro-cid-jj6gr7j4> <!-- post creation/updation data --> ${new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date(content.date))} </span> <span class="post__stats" data-astro-cid-jj6gr7j4> ${USE_VIEW_STATS} ${USE_VIEW_STATS} <!-- | <Icon class="w-5 h-5 inline-block" pack="mdi" name="clock" /> 2 mins --> </span> </div> </h5> </div> ${content.image ? renderTemplate`<img class="img__outer"${addAttribute(content.image, "src")}${addAttribute(content.title, "alt")} data-astro-cid-jj6gr7j4><br data-astro-cid-jj6gr7j4>` : ""}${renderComponent($$result2, "Prose", $$Prose, { "data-astro-cid-jj6gr7j4": true }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })} <div class="post__footer" data-astro-cid-jj6gr7j4> ${renderTemplate`<br data-astro-cid-jj6gr7j4>
                <div class="author-card" data-astro-cid-jj6gr7j4> ${AUTHOR_AVATAR ? renderTemplate`<img class="author-card__img avatar avatar--lg"${addAttribute(AUTHOR_AVATAR, "src")}${addAttribute(`${AUTHOR_NAME}'s avatar`, "alt")} data-astro-cid-jj6gr7j4>` : ""} <div class="author-card__meta" data-astro-cid-jj6gr7j4> ${AUTHOR_TWITTER ? renderTemplate`<a class="author-card__author"${addAttribute(`https://twitter.com/${AUTHOR_TWITTER}`, "href")}${addAttribute(`${AUTHOR_NAME}'s twitter`, "title")} target="_blank" rel="external" data-astro-cid-jj6gr7j4>${AUTHOR_NAME}</a>` : renderTemplate`<span class="author-card__author" data-astro-cid-jj6gr7j4>${AUTHOR_NAME}</span>`} <p class="author-card__bio" data-astro-cid-jj6gr7j4>${SITE.authorBio}</p> <br data-astro-cid-jj6gr7j4> ${renderTemplate`<a class="author-card__follow-btn button" target="_blank"${addAttribute(`https://twitter.com/intent/follow?screen_name=${AUTHOR_TWITTER}`, "href")} data-astro-cid-jj6gr7j4>${renderComponent($$result2, "Icon", $$Icon, { "class": "w-5 h-5 inline-block", "pack": "mdi", "name": "twitter", "data-astro-cid-jj6gr7j4": true })} Follow on Twitter</a>`} </div> </div>
                <br data-astro-cid-jj6gr7j4>`} ${meta?.collection && meta?.id && renderTemplate`${renderComponent($$result2, "EditUrl", $$EditLink, { "label": " Suggest changes on GitHub", "editUrl": `${SITE.githubUrl}/tree/main/src/content/${meta?.collection}/${meta?.id}`, "data-astro-cid-jj6gr7j4": true })}`} </div> ` })} </html>`;
}, "/Users/thor3/Documents/kill-me-ink/src/layouts/post.astro", void 0);

export { $$Post as $ };

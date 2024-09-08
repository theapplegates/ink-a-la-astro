import { f as createAstro, c as createComponent, r as renderTemplate, d as renderComponent, a as renderHead, e as renderSlot } from './astro/server_Dp6SZoyW.mjs';
import 'kleur/colors';
import { S as SITE } from './config_7kXHvDFn.mjs';
import { $ as $$BaseHead, a as $$MainLayout } from './MainLayout_0373l9Ho.mjs';
/* empty css                         */

const $$Astro = createAstro("https://ink.paulapplegate.com");
const $$Default = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Default;
  const { content, showPageHeader = true } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-5z7xtygo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": content.title ? `${SITE.title} | ${content.title}` : SITE.title, "description": content.description, "image": SITE.image, "data-astro-cid-5z7xtygo": true })}${renderHead()}</head> ${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-5z7xtygo": true }, { "default": ($$result2) => renderTemplate`${showPageHeader && renderTemplate`<div class="page__header" data-astro-cid-5z7xtygo> <h1 class="page__title" data-astro-cid-5z7xtygo>${content.title}</h1> <h5 class="page__desc" data-astro-cid-5z7xtygo>${content.description}</h5> </div>`}${renderSlot($$result2, $$slots["default"])} ` })} </html>`;
}, "/Users/thor3/Documents/kill-me-ink/src/layouts/default.astro", void 0);

export { $$Default as $ };

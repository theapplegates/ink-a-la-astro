import { f as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from './astro/server_Dp6SZoyW.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://ink.paulapplegate.com");
const $$Paginator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Paginator;
  const { page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="page__actions" data-astro-cid-plu6zll4> ${page.url.prev && renderTemplate`<a class="action__go-to-x"${addAttribute(page.url.prev, "href")} title="Go to Previous" data-astro-cid-plu6zll4>&larr; Prev</a>`} ${page.url.next && renderTemplate`<a class="action__go-to-x"${addAttribute(page.url.next, "href")} title="Go to Next" data-astro-cid-plu6zll4>Next &rarr;</a>`} </div> `;
}, "/Users/thor3/Documents/kill-me-ink/src/components/Paginator.astro", void 0);

export { $$Paginator as $ };

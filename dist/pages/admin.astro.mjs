import { c as createComponent, r as renderTemplate, a as renderHead } from '../chunks/astro/server_Dp6SZoyW.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Admin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex"><link href="/admin/config.yml" type="text/yaml" rel="cms-config-url"><title>Content Manager</title>${renderHead()}</head> <body> <!-- Include the script that builds the page and powers Decap CMS -->  </body> </html>`;
}, "/Users/thor3/Documents/kill-me-ink/node_modules/astro-decap-cms-oauth/src/admin.astro", void 0);

const $$file = "/Users/thor3/Documents/kill-me-ink/node_modules/astro-decap-cms-oauth/src/admin.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

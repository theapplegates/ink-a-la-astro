import { f as createAstro, c as createComponent, r as renderTemplate, g as addAttribute, d as renderComponent, m as maybeRenderHead, e as renderSlot, h as renderTransition } from './astro/server_Dp6SZoyW.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
import { S as SITE, N as NAV_ITEMS } from './config_7kXHvDFn.mjs';
import { w as writable, c as create_ssr_component, v as validate_component, s as subscribe, b as add_attribute, e as escape, d as each } from './index_Ctj3Se_6.mjs';
import { t as toTitleCase } from './index_BaAdIIbj.mjs';

const $$Astro$4 = createAstro("https://ink.paulapplegate.com");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/thor3/Documents/kill-me-ink/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://ink.paulapplegate.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title = SITE.title, description, permalink, image } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<!-- Use Google Fonts, if you don't wanna prefer a self-hosted version --><!-- <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet"> --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>`, '</title><meta name="title"', ">", "", '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="shortcut icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="sitemap" href="/sitemap-index.xml"><link rel="manifest" href="/site.webmanifest"><link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="msapplication-TileColor" content="#da532c"><meta name="msapplication-config" content="/browserconfig.xml"><meta name="theme-color" content="#ffffff"><!-- Open Graph Tags (Facebook) --><meta property="og:type" content="website"><meta property="og:title"', ">", "", "", '<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title"', ">", "", "", '<script>\n  const theme = (() => {\n    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n      return localStorage.getItem("theme");\n    }\n    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n      return "dark";\n    }\n    return "light";\n  })();\n\n  if (theme === "light") {\n    document.documentElement.classList.remove("dark");\n  } else {\n    document.documentElement.classList.add("dark");\n  }\n<\/script>'])), title, addAttribute(title, "content"), description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), addAttribute(title, "content"), permalink && renderTemplate`<meta property="og:url"${addAttribute(permalink, "content")}>`, description && renderTemplate`<meta property="og:description"${addAttribute(description, "content")}>`, image && renderTemplate`<meta property="og:image"${addAttribute(image, "content")}>`, addAttribute(title, "content"), permalink && renderTemplate`<meta property="twitter:url"${addAttribute(permalink, "content")}>`, description && renderTemplate`<meta property="twitter:description"${addAttribute(description, "content")}>`, image && renderTemplate`<meta property="twitter:image"${addAttribute(image, "content")}>`);
}, "/Users/thor3/Documents/kill-me-ink/src/components/BaseHead.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<body class="font-sans antialiased min-h-screen bg-gray-100 dark:bg-gray-800"> <svg class="absolute w-full fill-theme-primary dark:fill-theme-dark-primary opacity-10 -z-10" viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 81L26.7 86.5C53.3 92 106.7 103 160 99.3C213.3 95.7 266.7 77.3 320 66.3C373.3 55.3 426.7 51.7 480 49.7C533.3 47.7 586.7 47.3 640 45.2C693.3 43 746.7 39 800 51C853.3 63 906.7 91 933.3 105L960 119L960 0L933.3 0C906.7 0 853.3 0 800 0C746.7 0 693.3 0 640 0C586.7 0 533.3 0 480 0C426.7 0 373.3 0 320 0C266.7 0 213.3 0 160 0C106.7 0 53.3 0 26.7 0L0 0Z" stroke-linecap="round" stroke-linejoin="miter"></path></svg> <div class="transition-colors"> <main class="mx-auto max-w-4xl px-4 md:px-0"> ${renderSlot($$result, $$slots["default"])} </main> </div> </body>`;
}, "/Users/thor3/Documents/kill-me-ink/src/components/BaseLayout.astro", void 0);

const $$SvgIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/thor3/Documents/kill-me-ink/src/components/SvgIcon.astro", void 0);

const theme = writable("dark");

/* src/components/ModeSwitcher.svelte generated by Svelte v4.2.8 */
const THEME_DARK = "dark";

const ModeSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let currTheme = THEME_DARK;

	return `<button>${slots.default ? slots.default({ theme: currTheme }) : ``}</button>`;
});

/* src/components/SvgIcon.svelte generated by Svelte v4.2.8 */

const SvgIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${slots.default ? slots.default({}) : ``}</svg>`;
});

/* src/components/ModeSwitcherBtn.svelte generated by Svelte v4.2.8 */

const ModeSwitcherBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(ModeSwitcher, "ModeSwitcher").$$render($$result, {}, {}, {
		default: ({ theme }) => {
			return `${validate_component(SvgIcon, "SvgIcon").$$render($$result, {}, {}, {
				default: () => {
					return `${theme === 'dark'
					? `<circle cx="12" cy="12" r="5"></circle> <line x1="12" y1="1" x2="12" y2="3"></line> <line x1="12" y1="21" x2="12" y2="23"></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line> <line x1="1" y1="12" x2="3" y2="12"></line> <line x1="21" y1="12" x2="23" y2="12"></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`
					: `<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>`}`;
				}
			})}`;
		}
	})}`;
});

/* src/components/SearchIcon.svelte generated by Svelte v4.2.8 */

const SearchIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { found = false } = $$props;
	if ($$props.found === void 0 && $$bindings.found && found !== void 0) $$bindings.found(found);

	return `${validate_component(SvgIcon, "SvgIcon").$$render($$result, {}, {}, {
		default: () => {
			return `${found
			? `<path d="M7.66542 10.2366L9.19751 8.951L10.4831 10.4831L13.5473 7.91194L14.8328 9.44402L10.2366 13.3007L7.66542 10.2366Z" fill="currentColor"></path>`
			: ``} <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2071 4.89344C19.0923 7.77862 19.3131 12.3193 16.8693 15.4578C16.8846 15.4713 16.8996 15.4854 16.9143 15.5L21.1569 19.7427C21.5474 20.1332 21.5474 20.7664 21.1569 21.1569C20.7664 21.5474 20.1332 21.5474 19.7427 21.1569L15.5 16.9143C15.4854 16.8996 15.4713 16.8846 15.4578 16.8693C12.3193 19.3131 7.77862 19.0923 4.89344 16.2071C1.76924 13.083 1.76924 8.01763 4.89344 4.89344C8.01763 1.76924 13.083 1.76924 16.2071 4.89344ZM14.7929 14.7929C17.1361 12.4498 17.1361 8.6508 14.7929 6.30765C12.4498 3.96451 8.6508 3.96451 6.30765 6.30765C3.96451 8.6508 3.96451 12.4498 6.30765 14.7929C8.6508 17.1361 12.4498 17.1361 14.7929 14.7929Z" fill="currentColor"></path>`;
		}
	})}`;
});

const isSearchVisible = writable(false);

/* src/components/SearchBtn.svelte generated by Svelte v4.2.8 */

const SearchBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {

	return `<button>${validate_component(SearchIcon, "SearchIcon").$$render($$result, {}, {}, {})}</button>`;
});

const $$Astro$2 = createAstro("https://ink.paulapplegate.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <div class="header__logo" data-astro-cid-3ef6ksr2> <a href="/" class="avatar" data-astro-cid-3ef6ksr2> <img class="header__logo-img" src="/assets/logo.svg" alt="Astro logo" data-astro-cid-3ef6ksr2> </a> </div> <div class="header__meta flex-1" data-astro-cid-3ef6ksr2> <h3 class="header__title dark:text-theme-dark-secondary" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2>${SITE.name}</a> </h3> <div class="header__meta-more flex" data-astro-cid-3ef6ksr2> <p class="header__desc" data-astro-cid-3ef6ksr2> ${SITE.description} </p> <nav class="header__nav flex" data-astro-cid-3ef6ksr2> <ul class="header__ref-list" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> ${renderComponent($$result, "SearchBtn", SearchBtn, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/thor3/Documents/kill-me-ink/src/components/SearchBtn.svelte", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true })} </li> <li data-astro-cid-3ef6ksr2> <a${addAttribute(SITE.githubUrl, "href")}${addAttribute(`${SITE.name}'s Github URL'`, "title")} data-astro-cid-3ef6ksr2> ${renderComponent($$result, "SvgIcon", $$SvgIcon, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-astro-cid-3ef6ksr2></path> ` })} </a> </li> <li data-astro-cid-3ef6ksr2> <a href="/rss.xml" title="RSS" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "SvgIcon", $$SvgIcon, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <path d="M4 11a9 9 0 0 1 9 9" data-astro-cid-3ef6ksr2></path> <path d="M4 4a16 16 0 0 1 16 16" data-astro-cid-3ef6ksr2></path> <circle cx="5" cy="19" r="1" data-astro-cid-3ef6ksr2></circle> ` })} </a> </li> <li data-astro-cid-3ef6ksr2> ${renderComponent($$result, "ModeSwitcherBtn", ModeSwitcherBtn, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/thor3/Documents/kill-me-ink/src/components/ModeSwitcherBtn.svelte", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true })} </li> </ul> </nav> </div> </div> </header> `;
}, "/Users/thor3/Documents/kill-me-ink/src/components/Header.astro", void 0);

/* src/components/ModeSensitive.svelte generated by Svelte v4.2.8 */

const ModeSensitive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $theme, $$unsubscribe_theme;
	$$unsubscribe_theme = subscribe(theme, value => $theme = value);
	$$unsubscribe_theme();

	return `${$theme === 'dark'
	? `${slots.dark ? slots.dark({}) : ``}`
	: `${slots.light ? slots.light({}) : ``}`}`;
});

/* src/components/ModeLabel.svelte generated by Svelte v4.2.8 */

const ModeLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(ModeSensitive, "ModeSensitive").$$render($$result, {}, {}, {
		light: () => {
			return `<span slot="light" data-svelte-h="svelte-1fh1ua8">(light)</span>`;
		},
		dark: () => {
			return `<span slot="dark" data-svelte-h="svelte-14ov3lc">(dark)</span>`;
		}
	})}`;
});

const $$Astro$1 = createAstro("https://ink.paulapplegate.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <nav class="nav" data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte>2021  &copy; Copyright notice | <a${addAttribute(SITE.githubUrl, "href")}${addAttribute(`${SITE.name}'s Github URL'`, "title")} data-astro-cid-sz7xmlte>${SITE.name}</a> ${renderComponent($$result, "ModeLabel", ModeLabel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/thor3/Documents/kill-me-ink/src/components/ModeLabel.svelte", "client:component-export": "default", "data-astro-cid-sz7xmlte": true })} theme on <a href="https://astro.build/" data-astro-cid-sz7xmlte>Astro</a></div> </nav> </footer> `;
}, "/Users/thor3/Documents/kill-me-ink/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://ink.paulapplegate.com");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav class="nav py-3" data-astro-cid-dmqpwcec> <ul class="nav-list dark:text-theme-dark-secondary" data-astro-cid-dmqpwcec${addAttribute(renderTransition($$result, "4ybupojm", "fade"), "data-astro-transition-scope")}> ${Object.keys(NAV_ITEMS).map((navItemKey) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute([
    `pb-1 border-b-2 hover:border-gray-400 hover:dark:border-gray-700 `,
    Astro2.url.pathname !== NAV_ITEMS[navItemKey].path ? "border-gray-100 dark:border-gray-800" : "",
    Astro2.url.pathname === NAV_ITEMS[navItemKey].path ? "border-theme-primary" : ""
  ], "class:list")}${addAttribute(NAV_ITEMS[navItemKey].path, "href")}${addAttribute(NAV_ITEMS[navItemKey].title, "title")} data-astro-cid-dmqpwcec>${toTitleCase(NAV_ITEMS[navItemKey].title)}</a> </li>`)} </ul> </nav> `;
}, "/Users/thor3/Documents/kill-me-ink/src/components/Nav.astro", "self");

const $$Portal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="portal-root"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/thor3/Documents/kill-me-ink/src/components/Portal.astro", void 0);

/* src/components/PostSearchPreview.svelte generated by Svelte v4.2.8 */

const css$2 = {
	code: ".post-preview.svelte-ofkg9t{display:flex;gap:1.5rem;text-align:left\n}.post-preview__title.svelte-ofkg9t{margin-bottom:0.5rem;font-size:1.125rem;line-height:1.75rem;font-weight:600;line-height:1.25;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}.post-preview__desc.svelte-ofkg9t{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-size:1rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(216 180 254 / var(--tw-text-opacity))\n}.tag-list.svelte-ofkg9t{display:flex;list-style-type:none;flex-wrap:wrap;gap:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem\n}.tag.svelte-ofkg9t{display:inline-block;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(216 180 254 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.25rem;padding-bottom:0.25rem;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(126 34 206 / var(--tw-text-opacity))\n}",
	map: null
};

const PostSearchPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { post } = $$props;
	let { isLast = false } = $$props;
	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
	if ($$props.isLast === void 0 && $$bindings.isLast && isLast !== void 0) $$bindings.isLast(isLast);
	$$result.css.add(css$2);

	return `<div class="post-preview hover:bg-theme-primary svelte-ofkg9t"><div class="flex-1"><h4 class="post-preview__title svelte-ofkg9t"><a${add_attribute("href", `/${post.category}/${post.slug}`, 0)}${add_attribute("title", post.title, 0)}>${escape(post.title)} →</a></h4> <p class="post-preview__desc svelte-ofkg9t">${escape(post.description)}</p> <ul class="tag-list svelte-ofkg9t">${each(post.tags, tag => {
		return `<a class="tag svelte-ofkg9t"${add_attribute("href", `/tags/${tag}`, 0)}${add_attribute("title", tag, 0)}>${escape(tag)}</a>`;
	})}</ul></div></div> ${!isLast
	? `<hr class="my-4 text-theme-dark-secondary">`
	: ``}`;
});

/* src/components/Search.svelte generated by Svelte v4.2.8 */

const css$1 = {
	code: ".search.svelte-ft3h3t.svelte-ft3h3t{position:relative;width:100%;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(126 34 206 / var(--tw-bg-opacity));padding:2rem;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}input.svelte-ft3h3t.svelte-ft3h3t{width:100%;border-radius:0.375rem;border-width:0px;--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:2.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity))\n}input.svelte-ft3h3t.svelte-ft3h3t::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(168 85 247 / var(--tw-placeholder-opacity))\n}input.svelte-ft3h3t.svelte-ft3h3t::placeholder{--tw-placeholder-opacity:1;color:rgb(168 85 247 / var(--tw-placeholder-opacity))\n}input.svelte-ft3h3t.svelte-ft3h3t{--tw-shadow:inset 0 2px 4px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}.search__ctrl.svelte-ft3h3t.svelte-ft3h3t{position:relative;padding-bottom:1rem\n}.search__ctrl.svelte-ft3h3t label.svelte-ft3h3t{position:absolute;top:0.5rem;left:0.5rem;--tw-text-opacity:1;color:rgb(126 34 206 / var(--tw-text-opacity))\n}.search__results.svelte-ft3h3t.svelte-ft3h3t{height:16rem;width:24rem;overflow-y:auto;padding-top:1rem;padding-bottom:1rem\n}.search__results--none.svelte-ft3h3t.svelte-ft3h3t{text-align:center;--tw-text-opacity:1;color:rgb(216 180 254 / var(--tw-text-opacity))\n}.note.svelte-ft3h3t.svelte-ft3h3t{width:100%;text-align:center;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}",
	map: null
};

const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let searchInput;
	let searchQuery = "";
	let searchResults = [];

	$$result.css.add(css$1);

	return `<div class="search svelte-ft3h3t"><div class="search__ctrl svelte-ft3h3t"><label for="search" class="svelte-ft3h3t">${validate_component(SearchIcon, "SearchIcon").$$render($$result, { found: searchResults.length > 0 }, {}, {})}</label> <input type="text" name="search" placeholder="What are you looking for?" class="svelte-ft3h3t"${add_attribute("this", searchInput, 0)}${add_attribute("value", searchQuery, 0)}></div> <div class="search__results svelte-ft3h3t">${searchResults.length
	? `${each(searchResults, (post, i) => {
			return `${validate_component(PostSearchPreview, "PostSearchPreview").$$render(
				$$result,
				{
					post,
					isLast: i === searchResults.length - 1
				},
				{},
				{}
			)}`;
		})}`
	: `<div class="search__results--none svelte-ft3h3t">${searchQuery.length
		? `No matching items found!`
		: `Search something and let me find it for you! :-)`}</div>`}</div> <div class="note svelte-ft3h3t" data-svelte-h="svelte-fzud3b"><small>click anywhere outside to close</small></div> </div>`;
});

/* src/components/SearchModal.svelte generated by Svelte v4.2.8 */

const css = {
	code: ".modal.svelte-gud11r{pointer-events:none;position:fixed;top:0px;left:0px;display:grid;height:100%;width:100%;align-content:center;justify-content:center\n}.modal__backdrop.svelte-gud11r{position:fixed;top:0px;left:0px;z-index:0;height:100vh;width:100%;background-image:linear-gradient(to top right, var(--tw-gradient-stops));--tw-gradient-from:#c026d3 var(--tw-gradient-from-position);--tw-gradient-to:rgb(192 38 211 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:#701a75 var(--tw-gradient-to-position);opacity:0.5\n}.modal__cnt.svelte-gud11r{pointer-events:auto;z-index:10;width:100%\n}",
	map: null
};

const SearchModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $isSearchVisible, $$unsubscribe_isSearchVisible;
	$$unsubscribe_isSearchVisible = subscribe(isSearchVisible, value => $isSearchVisible = value);

	$$result.css.add(css);
	$$unsubscribe_isSearchVisible();

	return `${$isSearchVisible
	? `<div class="modal__backdrop svelte-gud11r" role="button" tabindex="0"></div> <div class="modal svelte-gud11r" role="dialog"><div class="modal__cnt svelte-gud11r">${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div></div>`
	: ``}`;
});

const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-fhdt7an5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<br class="my-4" data-astro-cid-fhdt7an5> ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-fhdt7an5": true })} ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-fhdt7an5": true })} <div class="content" data-astro-cid-fhdt7an5> ${renderSlot($$result2, $$slots["default"])} </div> <br class="my-4" data-astro-cid-fhdt7an5> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-fhdt7an5": true })} ${renderComponent($$result2, "Portal", $$Portal, { "data-astro-cid-fhdt7an5": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SearchModal", SearchModal, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/thor3/Documents/kill-me-ink/src/components/SearchModal.svelte", "client:component-export": "default", "data-astro-cid-fhdt7an5": true })} ` })} ` })} `;
}, "/Users/thor3/Documents/kill-me-ink/src/components/MainLayout.astro", void 0);

export { $$BaseHead as $, $$MainLayout as a };

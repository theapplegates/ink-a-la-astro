import rss from '@astrojs/rss';
import { a as getCollection } from '../chunks/_astro_content_Dx4uqgM2.mjs';
import { S as SITE } from '../chunks/config_7kXHvDFn.mjs';
export { renderers } from '../renderers.mjs';

const allPosts = await getCollection("blog");
const sortedPosts = Object.values(allPosts).sort(
  (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
);
const get = () => rss({
  // `<title>` field in output xml
  title: `${SITE.name} | Blog`,
  // `<description>` field in output xml
  description: SITE.description,
  // base URL for RSS <item> links
  // SITE will use "site" from your project's astro.config.
  site: "https://ink.paulapplegate.com",
  // list of `<item>`s in output xml
  // simple example: generate items for every md file in /src/pages
  // see "Generating items" section for required frontmatter and advanced use cases
  items: sortedPosts.map((item) => ({
    title: item.data.title,
    description: item.data.description,
    link: `blog/${item.slug}`,
    pubDate: new Date(item.data.date)
  })),
  // (optional) inject custom xml
  customData: `<language>en-us</language>`
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	get
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

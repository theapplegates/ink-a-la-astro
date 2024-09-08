import { _ as __astro_tag_component__, F as Fragment, b as createVNode } from './astro/server_Dp6SZoyW.mjs';
import { $ as $$Image } from './_astro_assets_0yN2kvK1.mjs';
import 'clsx';

const frontmatter = {
  "title": "Introducing Astro - Ship Less JavaScript",
  "date": "2021-06-08",
  "image": "https://images.unsplash.com/photo-1589409514187-c21d14df0d04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  "author": "Fred K. Schott",
  "authorTwitter": "FredKSchott",
  "authorImage": "https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg",
  "category": "design",
  "tags": ["astro", "jam-stack"],
  "description": "There's a simple secret to building a faster website \u2014 just ship less."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "h1-is-good",
    "text": "H1 is good"
  }, {
    "depth": 3,
    "slug": "h2-is-good-too",
    "text": "H2 is good too"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Unfortunately, modern web development has been trending in the opposite direction\u2014towards more. More JavaScript, more features, more moving parts, and ultimately more complexity needed to keep it all running smoothly."
    }), "\n", createVNode(_components.p, {
      children: "Today I\u2019m excited to publicly share Astro: a new kind of static site builder that delivers lightning-fast performance with a modern developer experience. To design Astro, we borrowed the best parts of our favorite tools and then added a few innovations of our own, including:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Bring Your Own Framework (BYOF): Build your site using React, Svelte, Vue, Preact, web components, or just plain ol\u2019 HTML + JavaScript."
      }), "\n", createVNode(_components.li, {
        children: "100% Static HTML, No JS: Astro renders your entire page to static HTML, removing all JavaScript from your final build by default."
      }), "\n", createVNode(_components.li, {
        children: "On-Demand Components: Need some JS? Astro can automatically hydrate interactive components when they become visible on the page. If the user never sees it, they never load it."
      }), "\n", createVNode(_components.li, {
        children: "Fully-Featured: Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any of your favorite npm packages."
      }), "\n", createVNode(_components.li, {
        children: "SEO Enabled: Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "h1-is-good",
      children: "H1 is good"
    }), "\n", createVNode(_components.h3, {
      id: "h2-is-good-too",
      children: "H2 is good too"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "links are better"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "they-are-better",
        children: "I know"
      })
    }), "\n", createVNode(_components.p, {
      children: "This post marks the first public beta release of Astro. Missing features and bugs are still to be expected at this early stage. There are still some months to go before an official 1.0 release, but there are already several fast sites built with Astro in production today. We would love your early feedback as we move towards a v1.0 release later this year."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "To learn more about Astro and start building your first site, check out the project README."
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/introducing-astro.mdx";
const file = "/Users/thor3/Documents/kill-me-ink/src/content/blog/introducing-astro.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/thor3/Documents/kill-me-ink/src/content/blog/introducing-astro.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

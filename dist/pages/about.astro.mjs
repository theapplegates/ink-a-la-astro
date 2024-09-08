import { _ as __astro_tag_component__, b as createVNode, F as Fragment } from '../chunks/astro/server_Dp6SZoyW.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_0yN2kvK1.mjs';
import { $ as $$Default } from '../chunks/default_BjkvIHdm.mjs';
import { $ as $$Prose } from '../chunks/Prose_CKkXiVTj.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const frontmatter = {
  "title": "About",
  "description": "There is a simple secret to building a faster website \u2014 just ship less."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "author",
    "text": "Author"
  }, {
    "depth": 3,
    "slug": "credits",
    "text": "Credits"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode($$Default, {
    content: {
      title: frontmatter.title,
      description: frontmatter.description
    },
    children: createVNode($$Prose, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Astro-Ink"
        }), " is a crisp, minimal, personal blog theme for Astro, that shows the capability of statically built sites - offering all the goodness and DX of the modern JS ecosystem without actually shipping any JS by default."]
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Astro-ink"
        }), " strives to remain minimal & performant while still offering you all the bells and whistles you expect in a personal blog system. Please check the ", createVNode(_components.a, {
          href: "https://github.com/one-aalam/astro-ink/blob/main/README.md",
          children: "README"
        }), " to know about all the features."]
      }), createVNode(_components.h2, {
        id: "author",
        children: "Author"
      }), createVNode(_components.p, {
        children: ["Aftab Alam // ", createVNode(_components.a, {
          href: "https://twitter.com/aftabbuddy",
          children: "@aftabbuddy"
        }), "  // ", createVNode(_components.a, {
          href: "https://github.com/one-aalam",
          children: "one-aalam"
        })]
      }), createVNode("div", {
        class: "author",
        children: createVNode("img", {
          class: "rounded-full",
          width: "160",
          src: "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5358878e2493fbea064dd9_peep-59.svg",
          title: "Aalam"
        })
      }), createVNode(_components.h3, {
        id: "credits",
        children: "Credits"
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Illustrations:"
        }), " ", createVNode(_components.a, {
          href: "https://www.openpeeps.com/",
          children: "openpeeps"
        })]
      })]
    })
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
const url = "/about";
const file = "/Users/thor3/Documents/kill-me-ink/src/pages/about.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/thor3/Documents/kill-me-ink/src/pages/about.mdx";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    __usesAstroImage,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

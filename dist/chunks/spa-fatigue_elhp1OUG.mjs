import { _ as __astro_tag_component__, F as Fragment, b as createVNode } from './astro/server_Dp6SZoyW.mjs';
import { $ as $$Image } from './_astro_assets_0yN2kvK1.mjs';
import 'clsx';

const frontmatter = {
  "title": "Second-guessing the modern web",
  "date": "2021-04-10",
  "image": "https://images.unsplash.com/photo-1501772418-b33899635bca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  "author": "Tom MacWright",
  "authorTwitter": "tmcw",
  "category": "design",
  "tags": ["architecture", "front-end", "spa"],
  "description": "There is a sweet spot of React - in moderately interactive interfaces.."
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: createVNode(_components.a, {
      href: "https://macwright.com/2020/05/10/spa-fatigue.html",
      children: "https://macwright.com/2020/05/10/spa-fatigue.html"
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
const url = "src/content/blog/spa-fatigue.mdx";
const file = "/Users/thor3/Documents/kill-me-ink/src/content/blog/spa-fatigue.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/thor3/Documents/kill-me-ink/src/content/blog/spa-fatigue.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

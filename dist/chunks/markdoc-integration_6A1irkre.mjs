import { c as createComponent, r as renderTemplate, i as renderUniqueStylesheet, j as renderScriptElement, u as unescapeHTML, k as createHeadAndContent, d as renderComponent, o as isHTMLString, f as createAstro, m as maybeRenderHead, g as addAttribute, e as renderSlot } from './astro/server_Dp6SZoyW.mjs';
import 'kleur/colors';
import Markdoc$1 from '@markdoc/markdoc';
import Slugger from 'github-slugger';
import { $ as $$Image } from './_astro_assets_0yN2kvK1.mjs';
import { $ as $$Icon } from './index_CBfwsjUN.mjs';
import 'clsx';
/* empty css                                                                    */
import { c as create_ssr_component, f as setContext, o as onDestroy, w as writable, g as getContext, s as subscribe, v as validate_component, d as each, e as escape } from './index_Ctj3Se_6.mjs';
/* empty css                                                         */
/* empty css                                                     */
/* empty css                                                       */

const ComponentNode = createComponent({
  factory(result, { treeNode }) {
    if (treeNode.type === "text") return renderTemplate`${treeNode.content}`;
    const slots = {
      default: () => renderTemplate`${treeNode.children.map(
        (child) => renderComponent(result, "ComponentNode", ComponentNode, { treeNode: child })
      )}`
    };
    if (treeNode.type === "component") {
      let styles = "", links = "", scripts = "";
      if (Array.isArray(treeNode.collectedStyles)) {
        styles = treeNode.collectedStyles.map(
          (style) => renderUniqueStylesheet(result, {
            type: "inline",
            content: style
          })
        ).join("");
      }
      if (Array.isArray(treeNode.collectedLinks)) {
        links = treeNode.collectedLinks.map((link) => {
          return renderUniqueStylesheet(result, {
            type: "external",
            src: link[0] === "/" ? link : "/" + link
          });
        }).join("");
      }
      if (Array.isArray(treeNode.collectedScripts)) {
        scripts = treeNode.collectedScripts.map((script) => renderScriptElement(script)).join("");
      }
      const head = unescapeHTML(styles + links + scripts);
      let headAndContent = createHeadAndContent(
        head,
        renderTemplate`${renderComponent(
          result,
          treeNode.component.name,
          treeNode.component,
          treeNode.props,
          slots
        )}`
      );
      result._metadata.propagators.add({
        init() {
          return headAndContent;
        }
      });
      return headAndContent;
    }
    return renderComponent(result, treeNode.tag, treeNode.tag, treeNode.attributes, slots);
  },
  propagation: "self"
});
async function createTreeNode(node) {
  if (isHTMLString(node)) {
    return { type: "text", content: node };
  } else if (typeof node === "string" || typeof node === "number") {
    return { type: "text", content: String(node) };
  } else if (node === null || typeof node !== "object" || !Markdoc$1.Tag.isTag(node)) {
    return { type: "text", content: "" };
  }
  const children = await Promise.all(node.children.map((child) => createTreeNode(child)));
  if (typeof node.name === "function") {
    const component = node.name;
    const props = node.attributes;
    return {
      type: "component",
      component,
      props,
      children
    };
  } else if (isPropagatedAssetsModule(node.name)) {
    const { collectedStyles, collectedLinks, collectedScripts } = node.name;
    const component = (await node.name.getMod()).default;
    const props = node.attributes;
    return {
      type: "component",
      component,
      collectedStyles,
      collectedLinks,
      collectedScripts,
      props,
      children
    };
  } else {
    return {
      type: "element",
      tag: node.name,
      attributes: node.attributes,
      children
    };
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

const $$Astro$5 = createAstro("https://ink.paulapplegate.com");
const $$Renderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Renderer;
  //! astro-head-inject
  const { stringifiedAst, config } = Astro2.props;
  const ast = Markdoc$1.Ast.fromJSON(stringifiedAst);
  const content = Markdoc$1.transform(ast, config);
  return renderTemplate`${Array.isArray(content) ? content.map(async (c) => renderTemplate`${renderComponent($$result, "ComponentNode", ComponentNode, { "treeNode": await createTreeNode(c) })}`) : renderTemplate`${renderComponent($$result, "ComponentNode", ComponentNode, { "treeNode": await createTreeNode(content) })}`}`;
}, "/Users/thor3/Documents/kill-me-ink/node_modules/@astrojs/markdoc/components/Renderer.astro", void 0);

function startsWithDotDotSlash(path) {
  const c1 = path[0];
  const c2 = path[1];
  const c3 = path[2];
  return c1 === "." && c2 === "." && c3 === "/";
}
function startsWithDotSlash(path) {
  const c1 = path[0];
  const c2 = path[1];
  return c1 === "." && c2 === "/";
}
function isRelativePath(path) {
  return startsWithDotDotSlash(path) || startsWithDotSlash(path);
}

class MarkdocError extends Error {
  loc;
  title;
  hint;
  frame;
  type = "MarkdocError";
  constructor(props, ...params) {
    super(...params);
    const { title = "MarkdocError", message, stack, location, hint, frame } = props;
    this.title = title;
    if (message)
      this.message = message;
    this.stack = stack ? stack : this.stack;
    this.loc = location;
    this.hint = hint;
    this.frame = frame;
  }
}
const componentConfigSymbol = Symbol.for("@astrojs/markdoc/component-config");

function getSlug(attributes, children, headingSlugger) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }
  const textContent = attributes.content ?? getTextContent(children);
  let slug = headingSlugger.slug(textContent);
  if (slug.endsWith("-"))
    slug = slug.slice(0, -1);
  return slug;
}
const heading = {
  children: ["inline"],
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 }
  },
  transform(node, config) {
    const { level, ...attributes } = node.transformAttributes(config);
    const children = node.transformChildren(config);
    if (!config.ctx?.headingSlugger) {
      throw new MarkdocError({
        message: "Unexpected problem adding heading IDs to Markdoc file. Did you modify the `ctx.headingSlugger` property in your Markdoc config?"
      });
    }
    const slug = getSlug(attributes, children, config.ctx.headingSlugger);
    const render = config.nodes?.heading?.render ?? `h${level}`;
    const tagProps = (
      // For components, pass down `level` as a prop,
      // alongside `__collectHeading` for our `headings` collector.
      // Avoid accidentally rendering `level` as an HTML attribute otherwise!
      typeof render === "string" ? { ...attributes, id: slug } : { ...attributes, id: slug, __collectHeading: true, level }
    );
    return new Markdoc$1.Tag(render, tagProps, children);
  }
};
function setupHeadingConfig() {
  const headingSlugger = new Slugger();
  return {
    ctx: {
      headingSlugger
    },
    nodes: {
      heading
    }
  };
}

const Markdoc = Markdoc$1;
({ ...Markdoc.nodes, heading });
function defineMarkdocConfig(config) {
  return config;
}
function component(pathnameOrPkgName, namedExport) {
  return {
    type: isNpmPackageName(pathnameOrPkgName) ? "package" : "local",
    path: pathnameOrPkgName,
    namedExport,
    [componentConfigSymbol]: true
  };
}
function isNpmPackageName(pathname) {
  return !isRelativePath(pathname) && !pathname.startsWith("/");
}

async function setupConfig(userConfig = {}, options) {
  let defaultConfig = setupHeadingConfig();
  if (userConfig.extends) {
    for (let extension of userConfig.extends) {
      if (extension instanceof Promise) {
        extension = await extension;
      }
      defaultConfig = mergeConfig(defaultConfig, extension);
    }
  }
  let merged = mergeConfig(defaultConfig, userConfig);
  return merged;
}
function setupConfigSync(userConfig = {}, options) {
  const defaultConfig = setupHeadingConfig();
  let merged = mergeConfig(defaultConfig, userConfig);
  return merged;
}
function mergeConfig(configA, configB) {
  return {
    ...configA,
    ...configB,
    ctx: {
      ...configA.ctx,
      ...configB.ctx
    },
    tags: {
      ...configA.tags,
      ...configB.tags
    },
    nodes: {
      ...configA.nodes,
      ...configB.nodes
    },
    functions: {
      ...configA.functions,
      ...configB.functions
    },
    variables: {
      ...configA.variables,
      ...configB.variables
    },
    partials: {
      ...configA.partials,
      ...configB.partials
    },
    validation: {
      ...configA.validation,
      ...configB.validation
    }
  };
}
function resolveComponentImports(markdocConfig, tagComponentMap, nodeComponentMap) {
  for (const [tag, render] of Object.entries(tagComponentMap)) {
    const config = markdocConfig.tags[tag];
    if (config)
      config.render = render;
  }
  for (const [node, render] of Object.entries(nodeComponentMap)) {
    const config = markdocConfig.nodes[node];
    if (config)
      config.render = render;
  }
  return markdocConfig;
}
function getTextContent(childNodes) {
  let text = "";
  for (const node of childNodes) {
    if (typeof node === "string" || typeof node === "number") {
      text += node;
    } else if (typeof node === "object" && Markdoc$1.Tag.isTag(node)) {
      text += getTextContent(node.children);
    }
  }
  return text;
}
const headingLevels = [1, 2, 3, 4, 5, 6];
function collectHeadings(children, collectedHeadings) {
  for (const node of children) {
    if (typeof node !== "object" || !Markdoc$1.Tag.isTag(node))
      continue;
    if (node.attributes.__collectHeading === true && typeof node.attributes.level === "number") {
      collectedHeadings.push({
        slug: node.attributes.id,
        depth: node.attributes.level,
        text: getTextContent(node.children)
      });
      continue;
    }
    for (const level of headingLevels) {
      if (node.name === "h" + level) {
        collectedHeadings.push({
          slug: node.attributes.id,
          depth: level,
          text: getTextContent(node.children)
        });
      }
    }
    collectHeadings(node.children, collectedHeadings);
  }
}
function createGetHeadings(stringifiedAst, userConfig, options) {
  return function getHeadings() {
    const config = setupConfigSync(userConfig);
    const ast = Markdoc$1.Ast.fromJSON(stringifiedAst);
    const content = Markdoc$1.transform(ast, config);
    let collectedHeadings = [];
    collectHeadings(Array.isArray(content) ? content : [content], collectedHeadings);
    return collectedHeadings;
  };
}
function createContentComponent(Renderer, stringifiedAst, userConfig, options, tagComponentMap, nodeComponentMap) {
  return createComponent({
    async factory(result, props) {
      const withVariables = mergeConfig(userConfig, { variables: props });
      const config = resolveComponentImports(
        await setupConfig(withVariables),
        tagComponentMap,
        nodeComponentMap
      );
      return renderComponent(result, Renderer.name, Renderer, { stringifiedAst, config }, {});
    },
    propagation: "self"
  });
}

const callout = {
  render: component("./src/components/mdoc/Callout.astro"),
  children: ["paragraph", "tag", "list"],
  attributes: {
    type: {
      type: String,
      default: "note goes here...",
      matches: ["error", "check", "note", "warning"],
      errorLevel: "critical"
    },
    title: {
      type: String
    }
  }
};

const link = {
  render: component("./src/components/mdoc/Link.astro"),
  children: ["strong", "em", "s", "code", "text", "tag"],
  attributes: {
    href: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    target: {
      type: String
    }
  }
};

const tweetEmbed = {
  render: component("./src/components/mdoc/TweetEmbed.astro"),
  attributes: {
    url: {
      type: String,
      required: true
    }
  }
};

const tabs = {
  render: component("./src/components/mdoc/Tabs/Tabs.astro"),
  children: ["paragraph", "tag", "list"],
  attributes: {
    tabs: {
      type: Array
    },
    heading: {
      type: String
    }
  }
};

const ytEmbed = {
  render: component("./src/components/mdoc/YTVideoEmbed.astro"),
  attributes: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};

const config = {
  tags: {
    callout,
    link,
    tweet: tweetEmbed,
    yt: ytEmbed,
    tabs
  },
  functions: {
    getCountryEmoji: {
      transform(parameters) {
        const [country] = Object.values(parameters);
        const countryToEmojiMap = {
          japan: "🇯🇵",
          spain: "🇪🇸",
          france: "🇫🇷"
        };
        return countryToEmojiMap[country] ?? "🏳";
      }
    }
  }
};

const markdocConfig = defineMarkdocConfig(config);

const assetsConfig = {
  nodes: {
    image: {
      attributes: {
        ...Markdoc$1.nodes.image.attributes,
        __optimizedSrc: { type: "Object" }
      },
      transform(node, config) {
        const attributes = node.transformAttributes(config);
        const children = node.transformChildren(config);
        if (node.type === "image" && "__optimizedSrc" in node.attributes) {
          const { __optimizedSrc, ...rest } = node.attributes;
          return new Markdoc$1.Tag($$Image, { ...rest, src: __optimizedSrc }, children);
        } else {
          return new Markdoc$1.Tag("img", attributes, children);
        }
      }
    }
  }
};

const $$Astro$4 = createAstro("https://ink.paulapplegate.com");
const $$Callout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Callout;
  const ICON_MAP = {
    "check": "check-circle",
    "error": "close-circle",
    "note": "note",
    "warning": "warning-circle"
  };
  const COLOR_MAP = {
    "check": "text-green-700",
    "error": "text-red-700",
    "note": " text-gray-700",
    "warning": "text-orange-700"
  };
  const { title, type = "note" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="callout flex gap-2 w-full bg-gray-200/75 dark:bg-gray-600/75 p-4 rounded-sm shadow-sm"> ${renderComponent($$result, "Icon", $$Icon, { "class": `w-6 h-6 inline-block ${COLOR_MAP[type]}`, "pack": "mdi", "name": ICON_MAP[type] })} <div class="copy flex flex-col"> <h4${addAttribute(`title m-0 ${COLOR_MAP[type]}`, "class")}>${title}</h4> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/thor3/Documents/kill-me-ink/src/components/mdoc/Callout.astro", void 0);

const $$Astro$3 = createAstro("https://ink.paulapplegate.com");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, title, target } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="site-link"${addAttribute(href, "href")}${addAttribute(title, "title")}${addAttribute(target, "target")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/thor3/Documents/kill-me-ink/src/components/mdoc/Link.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://ink.paulapplegate.com");
const $$TweetEmbed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TweetEmbed;
  const { url } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="twitter-embed flex flex-col items-center justify-center relative"> <blockquote class="twitter-tweet" data-conversation="none" data-theme="light" data-lang="en" data-dnt="true"> <a class="unset no-underline text-current absolute top-0 left-0"', '>Loading embedded tweet...</a> </blockquote> </div> <script async defer src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>'])), maybeRenderHead(), addAttribute(url, "href"));
}, "/Users/thor3/Documents/kill-me-ink/src/components/mdoc/TweetEmbed.astro", void 0);

const $$Astro$1 = createAstro("https://ink.paulapplegate.com");
const $$YTVideoEmbed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$YTVideoEmbed;
  const { url, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-zrumgile> <iframe class="yt-iframe" width="560" height="315"${addAttribute(url, "src")}${addAttribute(title, "title")} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-astro-cid-zrumgile>
  </iframe> </div> `;
}, "/Users/thor3/Documents/kill-me-ink/src/components/mdoc/YTVideoEmbed.astro", void 0);

/* src/components/mdoc/Tabs/Tabs.svelte generated by Svelte v4.2.8 */
const TABS = {};

const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const tabs = [];
	const panels = [];
	const selectedTab = writable(null);
	const selectedPanel = writable(null);

	setContext(TABS, {
		registerTab: tab => {
			tabs.push(tab);
			selectedTab.update(current => current || tab);

			onDestroy(() => {
				const i = tabs.indexOf(tab);
				tabs.splice(i, 1);

				selectedTab.update(current => current === tab
				? tabs[i] || tabs[tabs.length - 1]
				: current);
			});
		},
		registerPanel: panel => {
			panels.push(panel);
			selectedPanel.update(current => current || panel);

			onDestroy(() => {
				const i = panels.indexOf(panel);
				panels.splice(i, 1);

				selectedPanel.update(current => current === panel
				? panels[i] || panels[panels.length - 1]
				: current);
			});
		},
		selectTab: tab => {
			const i = tabs.indexOf(tab);
			selectedTab.set(tab);
			selectedPanel.set(panels[i]);
		},
		selectedTab,
		selectedPanel
	});

	return `<div class="tabs">${slots.default ? slots.default({}) : ``}</div>`;
});

/* src/components/mdoc/Tabs/TabList.svelte generated by Svelte v4.2.8 */

const css$2 = {
	code: ".tab-list.svelte-1mgr4p5{border-bottom-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(107 114 128 / var(--tw-border-opacity))\n}",
	map: null
};

const TabList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$2);
	return `<div class="tab-list svelte-1mgr4p5">${slots.default ? slots.default({}) : ``} </div>`;
});

/* src/components/mdoc/Tabs/TabPanel.svelte generated by Svelte v4.2.8 */

const TabPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $selectedPanel, $$unsubscribe_selectedPanel;
	const panel = {};
	const { registerPanel, selectedPanel } = getContext(TABS);
	$$unsubscribe_selectedPanel = subscribe(selectedPanel, value => $selectedPanel = value);
	registerPanel(panel);
	$$unsubscribe_selectedPanel();

	return `${$selectedPanel === panel
	? `${slots.default ? slots.default({}) : ``}`
	: ``}`;
});

/* src/components/mdoc/Tabs/Tab.svelte generated by Svelte v4.2.8 */

const css$1 = {
	code: "button.svelte-ct3r7u{margin:0px;border-bottom-width:2px;border-style:solid;--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity));background-image:none;padding-left:1rem;padding-right:1rem;padding-top:0.25rem;padding-bottom:0.25rem;--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))\n}.selected.svelte-ct3r7u{border-bottom-width:2px;border-style:solid;--tw-border-opacity:1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity))\n}",
	map: null
};

const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $selectedTab, $$unsubscribe_selectedTab;
	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);
	$$unsubscribe_selectedTab = subscribe(selectedTab, value => $selectedTab = value);
	registerTab(tab);
	$$result.css.add(css$1);
	$$unsubscribe_selectedTab();
	return `<button class="${["svelte-ct3r7u", $selectedTab === tab ? "selected" : ""].join(' ').trim()}">${slots.default ? slots.default({}) : ``}</button>`;
});

/* src/components/mdoc/Tabs/index.svelte generated by Svelte v4.2.8 */

const css = {
	code: ".body.svelte-1vjsbpq{padding-left:1rem;padding-right:1rem;padding-top:0.25rem;padding-bottom:0.25rem\n}",
	map: null
};

const Tabs_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { tabs = [] } = $$props;
	if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0) $$bindings.tabs(tabs);
	$$result.css.add(css);

	return `${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
		default: () => {
			return `${validate_component(TabList, "TabList").$$render($$result, {}, {}, {
				default: () => {
					return `${each(tabs, tab => {
						return `${validate_component(Tab, "Tab").$$render($$result, {}, {}, {
							default: () => {
								return `${escape(tab.title)}`;
							}
						})}`;
					})}`;
				}
			})} ${each(tabs, tab => {
				return `${validate_component(TabPanel, "TabPanel").$$render($$result, {}, {}, {
					default: () => {
						return `<div class="body svelte-1vjsbpq">${escape(tab.body)}</div> `;
					}
				})}`;
			})}`;
		}
	})}`;
});

const $$Astro = createAstro("https://ink.paulapplegate.com");
const $$Tabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tabs;
  const { tabs } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tabs", Tabs_1, { "tabs": tabs, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/thor3/Documents/kill-me-ink/src/components/mdoc/Tabs/index.svelte", "client:component-export": "default" })}`;
}, "/Users/thor3/Documents/kill-me-ink/src/components/mdoc/Tabs/Tabs.astro", void 0);

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };



const tagComponentMap = {"callout": $$Callout,
"link": $$Link,
"tweet": $$TweetEmbed,
"yt": $$YTVideoEmbed,
"tabs": $$Tabs,
};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":true,\"attributes\":{\"href\":\"https://markdoc.dev/docs/overview\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":true,\"attributes\":{\"content\":\"Markdoc\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"link\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":true,\"attributes\":{\"content\":\" extends the markdown syntax you know and love to offer you authoring superpowers... 💪.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[2,3],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[2,3],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[2,3],\"inline\":true,\"attributes\":{\"content\":\"Tags are the heart of Markdoc system. You can use native Markdoc tags, like tables(example below), conditionals, and partials...\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":2},\"end\":{\"line\":3}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":2},\"end\":{\"line\":3}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":2},\"end\":{\"line\":3}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[4,5],\"inline\":false,\"attributes\":{\"level\":2},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[4,5],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[4,5],\"inline\":true,\"attributes\":{\"content\":\"Table in Markdoc\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":4},\"end\":{\"line\":5}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":4},\"end\":{\"line\":5}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":4},\"end\":{\"line\":5}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6,30,31],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,9],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,7],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,7],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,7],\"inline\":true,\"attributes\":{\"content\":\"Foo\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":7}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":7}}}],\"type\":\"th\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":7}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":true,\"attributes\":{\"content\":\"Bar\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"th\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,9],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,9],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,9],\"inline\":true,\"attributes\":{\"content\":\"Baz\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":9}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":9}}}],\"type\":\"th\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":9}}}],\"type\":\"tr\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":9}}}],\"type\":\"thead\",\"annotations\":[],\"slots\":{}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,20],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,14],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[11,14],\"inline\":false,\"attributes\":{\"content\":\"puts \\\"Some code here.\\\"\\n\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[11,14],\"inline\":false,\"attributes\":{\"content\":\"puts \\\"Some code here.\\\"\\n\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":11},\"end\":{\"line\":14}}}],\"type\":\"fence\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":11},\"end\":{\"line\":14}}}],\"type\":\"td\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":14}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[14,19],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[15,19],\"inline\":false,\"attributes\":{\"content\":\"{% list type=\\\"checkmark\\\" %}\\n  * Bulleted list in table\\n  * Second item in bulleted list\\n  {% /list %}\"},\"children\":[],\"type\":\"comment\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":15},\"end\":{\"line\":19}}}],\"type\":\"td\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":14},\"end\":{\"line\":19}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[19,20],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[19,20],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[19,20],\"inline\":true,\"attributes\":{\"content\":\"Text in a table\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":19},\"end\":{\"line\":20}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":19},\"end\":{\"line\":20}}}],\"type\":\"td\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":19},\"end\":{\"line\":20}}}],\"type\":\"tr\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":20}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[21,27],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[21,25],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[22,23],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[22,23],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[22,23],\"inline\":true,\"attributes\":{\"content\":\"A \\\"loose\\\" list with\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":22},\"end\":{\"line\":23}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":22},\"end\":{\"line\":23}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":22},\"end\":{\"line\":23}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[24,25],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[24,25],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[24,25],\"inline\":true,\"attributes\":{\"content\":\"multiple line items\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":24},\"end\":{\"line\":25}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":24},\"end\":{\"line\":25}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":24},\"end\":{\"line\":25}}}],\"type\":\"td\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":21},\"end\":{\"line\":25}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[25,26],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[25,26],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[25,26],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[25,26],\"inline\":true,\"attributes\":{\"content\":\"Test 2\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":25},\"end\":{\"line\":26}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":25},\"end\":{\"line\":26}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":25},\"end\":{\"line\":26}}}],\"type\":\"td\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":25},\"end\":{\"line\":26}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[26,27],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[26,27],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[26,27],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[26,27],\"inline\":true,\"attributes\":{\"content\":\"Test 3\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":26},\"end\":{\"line\":27}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":26},\"end\":{\"line\":27}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":26},\"end\":{\"line\":27}}}],\"type\":\"td\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":26},\"end\":{\"line\":27}}}],\"type\":\"tr\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":21},\"end\":{\"line\":27}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[28,30],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[28,29],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[28,29],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[28,29],\"inline\":true,\"attributes\":{\"content\":\"Test 1\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":28},\"end\":{\"line\":29}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":28},\"end\":{\"line\":29}}}],\"type\":\"td\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":28},\"end\":{\"line\":29}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[29,30],\"inline\":false,\"attributes\":{\"colspan\":2},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[29,30],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[29,30],\"inline\":true,\"attributes\":{\"content\":\"A cell that spans two columns \"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":29},\"end\":{\"line\":30}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":29},\"end\":{\"line\":30}}}],\"type\":\"td\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"colspan\",\"value\":2}],\"slots\":{},\"location\":{\"start\":{\"line\":29},\"end\":{\"line\":30}}}],\"type\":\"tr\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":28},\"end\":{\"line\":30}}}],\"type\":\"tbody\",\"annotations\":[],\"slots\":{}}],\"type\":\"table\",\"annotations\":[],\"slots\":{}}],\"type\":\"tag\",\"tag\":\"table\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[32,33],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[32,33],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[32,33],\"inline\":true,\"attributes\":{\"content\":\"or create custom components.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":32},\"end\":{\"line\":33}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":32},\"end\":{\"line\":33}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":32},\"end\":{\"line\":33}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[34,35],\"inline\":false,\"attributes\":{\"level\":2},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[34,35],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[34,35],\"inline\":true,\"attributes\":{\"content\":\"Tags available out of Ink\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":34},\"end\":{\"line\":35}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":34},\"end\":{\"line\":35}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":34},\"end\":{\"line\":35}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[35,36],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[35,36],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[35,36],\"inline\":true,\"attributes\":{\"content\":\"Astro Ink ships with the following tags with more coming soon...\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":35},\"end\":{\"line\":36}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":35},\"end\":{\"line\":36}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":35},\"end\":{\"line\":36}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[37,38],\"inline\":false,\"attributes\":{\"level\":3},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[37,38],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[37,38],\"inline\":true,\"attributes\":{\"content\":\"Callout\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":37},\"end\":{\"line\":38}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":37},\"end\":{\"line\":38}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":37},\"end\":{\"line\":38}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[39,40],\"inline\":false,\"attributes\":{\"level\":4},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[39,40],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[39,40],\"inline\":true,\"attributes\":{\"content\":\"Note\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":39},\"end\":{\"line\":40}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":39},\"end\":{\"line\":40}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":39},\"end\":{\"line\":40}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[40,41,42,43],\"inline\":false,\"attributes\":{\"type\":\"note\",\"title\":\"title goes here...\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[41,42],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[41,42],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[41,42],\"inline\":true,\"attributes\":{\"content\":\"lorem ipsum doler sit amet lorem\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":41},\"end\":{\"line\":42}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":41},\"end\":{\"line\":42}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":41},\"end\":{\"line\":42}}}],\"type\":\"tag\",\"tag\":\"callout\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"type\",\"value\":\"note\"},{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"title goes here...\"}],\"slots\":{},\"location\":{\"start\":{\"line\":40},\"end\":{\"line\":41}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[44,45],\"inline\":false,\"attributes\":{\"level\":4},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[44,45],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[44,45],\"inline\":true,\"attributes\":{\"content\":\"Error\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":44},\"end\":{\"line\":45}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":44},\"end\":{\"line\":45}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":44},\"end\":{\"line\":45}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[45,46,47,48],\"inline\":false,\"attributes\":{\"type\":\"error\",\"title\":\"title goes here...\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[46,47],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[46,47],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[46,47],\"inline\":true,\"attributes\":{\"content\":\"lorem ipsum doler sit amet\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":46},\"end\":{\"line\":47}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":46},\"end\":{\"line\":47}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":46},\"end\":{\"line\":47}}}],\"type\":\"tag\",\"tag\":\"callout\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"type\",\"value\":\"error\"},{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"title goes here...\"}],\"slots\":{},\"location\":{\"start\":{\"line\":45},\"end\":{\"line\":46}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[49,50],\"inline\":false,\"attributes\":{\"level\":4},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[49,50],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[49,50],\"inline\":true,\"attributes\":{\"content\":\"Warning\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":49},\"end\":{\"line\":50}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":49},\"end\":{\"line\":50}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":49},\"end\":{\"line\":50}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[50,51,52,53],\"inline\":false,\"attributes\":{\"type\":\"warning\",\"title\":\"title goes here...\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[51,52],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[51,52],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[51,52],\"inline\":true,\"attributes\":{\"content\":\"lorem ipsum doler sit amet\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":51},\"end\":{\"line\":52}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":51},\"end\":{\"line\":52}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":51},\"end\":{\"line\":52}}}],\"type\":\"tag\",\"tag\":\"callout\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"type\",\"value\":\"warning\"},{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"title goes here...\"}],\"slots\":{},\"location\":{\"start\":{\"line\":50},\"end\":{\"line\":51}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[54,55],\"inline\":false,\"attributes\":{\"level\":4},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[54,55],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[54,55],\"inline\":true,\"attributes\":{\"content\":\"Check\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":54},\"end\":{\"line\":55}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":54},\"end\":{\"line\":55}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":54},\"end\":{\"line\":55}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[55,56,57,58],\"inline\":false,\"attributes\":{\"type\":\"check\",\"title\":\"title goes here...\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[56,57],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[56,57],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[56,57],\"inline\":true,\"attributes\":{\"content\":\"lorem ipsum doler sit amet\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":56},\"end\":{\"line\":57}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":56},\"end\":{\"line\":57}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":56},\"end\":{\"line\":57}}}],\"type\":\"tag\",\"tag\":\"callout\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"type\",\"value\":\"check\"},{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"title goes here...\"}],\"slots\":{},\"location\":{\"start\":{\"line\":55},\"end\":{\"line\":56}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[59,60],\"inline\":false,\"attributes\":{\"level\":3},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[59,60],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[59,60],\"inline\":true,\"attributes\":{\"content\":\"Link\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":59},\"end\":{\"line\":60}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":59},\"end\":{\"line\":60}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":59},\"end\":{\"line\":60}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[61,62,63,64],\"inline\":false,\"attributes\":{\"href\":\"/blog\",\"title\":\"take care\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[62,63],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[62,63],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[62,63],\"inline\":true,\"attributes\":{\"content\":\"Go to blog\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":62},\"end\":{\"line\":63}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":62},\"end\":{\"line\":63}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":62},\"end\":{\"line\":63}}}],\"type\":\"tag\",\"tag\":\"link\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"href\",\"value\":\"/blog\"},{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"take care\"}],\"slots\":{},\"location\":{\"start\":{\"line\":61},\"end\":{\"line\":62}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[65,66],\"inline\":false,\"attributes\":{\"level\":3},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[65,66],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[65,66],\"inline\":true,\"attributes\":{\"content\":\"Tweet Embed\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":65},\"end\":{\"line\":66}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":65},\"end\":{\"line\":66}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":65},\"end\":{\"line\":66}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[66,67,67,68],\"inline\":false,\"attributes\":{\"url\":\"https://twitter.com/aftabbuddy/status/1630403326406959105\"},\"children\":[],\"type\":\"tag\",\"tag\":\"tweet\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"url\",\"value\":\"https://twitter.com/aftabbuddy/status/1630403326406959105\"}],\"slots\":{},\"location\":{\"start\":{\"line\":66},\"end\":{\"line\":67}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[71,72,72,73],\"inline\":false,\"attributes\":{\"url\":\"https://www.youtube.com/embed/ADnaRwQZfqw\",\"title\":\"SvelteKit + GraphQL with Houdini | Intro, Setup and Project Overview\"},\"children\":[],\"type\":\"tag\",\"tag\":\"yt\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"url\",\"value\":\"https://www.youtube.com/embed/ADnaRwQZfqw\"},{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"SvelteKit + GraphQL with Houdini | Intro, Setup and Project Overview\"}],\"slots\":{},\"location\":{\"start\":{\"line\":71},\"end\":{\"line\":72}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[74,75],\"inline\":false,\"attributes\":{\"level\":3},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[74,75],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[74,75],\"inline\":true,\"attributes\":{\"content\":\"Tabs\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":74},\"end\":{\"line\":75}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":74},\"end\":{\"line\":75}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":74},\"end\":{\"line\":75}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[76,77,77,78],\"inline\":false,\"attributes\":{\"heading\":\"some\",\"tabs\":[{\"title\":\"tab1\",\"body\":\"tab1\"},{\"title\":\"tab2\",\"body\":\"tab2\"}]},\"children\":[],\"type\":\"tag\",\"tag\":\"tabs\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"heading\",\"value\":\"some\"},{\"type\":\"attribute\",\"name\":\"tabs\",\"value\":[{\"title\":\"tab1\",\"body\":\"tab1\"},{\"title\":\"tab2\",\"body\":\"tab2\"}]}],\"slots\":{},\"location\":{\"start\":{\"line\":76},\"end\":{\"line\":77}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[79,80],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[79,80],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[79,80],\"inline\":true,\"attributes\":{\"content\":\"...more tags coming soon!\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":79},\"end\":{\"line\":80}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":79},\"end\":{\"line\":80}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":79},\"end\":{\"line\":80}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[81,82],\"inline\":false,\"attributes\":{\"level\":2},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[81,82],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[81,82],\"inline\":true,\"attributes\":{\"content\":\"Functions (from official example)\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":81},\"end\":{\"line\":82}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":81},\"end\":{\"line\":82}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":81},\"end\":{\"line\":82}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[83,84],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[83,84],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[83,84],\"inline\":true,\"attributes\":{\"content\":\"¡Hola \"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":83},\"end\":{\"line\":84}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[83,84],\"inline\":true,\"attributes\":{\"content\":{\"$$mdtype\":\"Function\",\"name\":\"getCountryEmoji\",\"parameters\":{\"0\":\"spain\"}}},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":83},\"end\":{\"line\":84}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[83,84],\"inline\":true,\"attributes\":{\"content\":\"!\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":83},\"end\":{\"line\":84}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":83},\"end\":{\"line\":84}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":83},\"end\":{\"line\":84}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

const getHeadings = createGetHeadings(stringifiedAst, markdocConfig);
const Content = createContentComponent(
	$$Renderer,
	stringifiedAst,
	markdocConfig,
  options,
	tagComponentMap,
	nodeComponentMap,
);

export { Content, getHeadings };

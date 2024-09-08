import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'devalue';
import { n as decodeKey } from './chunks/astro/server_Dp6SZoyW.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/thor3/Documents/kill-me-ink/","adapterName":"","routes":[{"file":"file:///Users/thor3/Documents/kill-me-ink/dist/admin/index.html","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/admin","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-decap-cms-oauth/src/admin.astro","pathname":"/admin","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/thor3/Documents/kill-me-ink/dist/oauth/callback","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/oauth/callback","pattern":"^\\/oauth\\/callback$","segments":[[{"content":"oauth","dynamic":false,"spread":false}],[{"content":"callback","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-decap-cms-oauth/src/oauth/callback.ts","pathname":"/oauth/callback","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/thor3/Documents/kill-me-ink/dist/oauth","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/oauth","pattern":"^\\/oauth$","segments":[[{"content":"oauth","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-decap-cms-oauth/src/oauth/index.ts","pathname":"/oauth","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/thor3/Documents/kill-me-ink/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.mdx","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/thor3/Documents/kill-me-ink/dist/blog/item1/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/item1","isIndex":false,"type":"page","pattern":"^\\/blog\\/item1\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"item1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/item1.md","pathname":"/blog/item1","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/thor3/Documents/kill-me-ink/dist/blog/my-title/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/my-title","isIndex":false,"type":"page","pattern":"^\\/blog\\/my-title\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"my-title","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/my-title.md","pathname":"/blog/my-title","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/thor3/Documents/kill-me-ink/dist/media/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/media","isIndex":false,"type":"page","pattern":"^\\/media\\/?$","segments":[[{"content":"media","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/media.astro","pathname":"/media","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/thor3/Documents/kill-me-ink/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/thor3/Documents/kill-me-ink/dist/tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/thor3/Documents/kill-me-ink/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://ink.paulapplegate.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/thor3/Documents/kill-me-ink/node_modules/astro-decap-cms-oauth/src/admin.astro",{"propagation":"none","containsHead":true}],["/Users/thor3/Documents/kill-me-ink/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/kill-me-ink/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/thor3/Documents/kill-me-ink/src/pages/blog/item1.md",{"propagation":"in-tree","containsHead":true}],["/Users/thor3/Documents/kill-me-ink/src/pages/blog/my-title.md",{"propagation":"in-tree","containsHead":true}],["/Users/thor3/Documents/kill-me-ink/src/pages/about.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/thor3/Documents/kill-me-ink/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/Users/thor3/Documents/kill-me-ink/src/pages/drafts/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/Users/thor3/Documents/kill-me-ink/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/thor3/Documents/kill-me-ink/src/pages/media.astro",{"propagation":"in-tree","containsHead":true}],["/Users/thor3/Documents/kill-me-ink/src/pages/tags/[tag]/[page].astro",{"propagation":"in-tree","containsHead":true}],["/Users/thor3/Documents/kill-me-ink/src/pages/tags/[tag]/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/thor3/Documents/kill-me-ink/src/components/Nav.astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/kill-me-ink/src/components/MainLayout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/kill-me-ink/src/layouts/default.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/drafts/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/media@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/[tag]/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/[tag]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/kill-me-ink/src/layouts/post.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/item1@_@md",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/my-title@_@md",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/kill-me-ink/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/kill-me-ink/node_modules/@astrojs/markdoc/components/Renderer.astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/kill-me-ink/node_modules/@astrojs/markdoc/components/index.ts",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/kill-me-ink/src/content/blog/markdoc-integration.mdoc",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/kill-me-ink/src/content/blog/markdoc-integration.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro-decap-cms-oauth/src/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:node_modules/astro-decap-cms-oauth/src/oauth/callback@_@ts":"pages/oauth/callback.astro.mjs","\u0000@astro-page:node_modules/astro-decap-cms-oauth/src/oauth/index@_@ts":"pages/oauth.astro.mjs","\u0000@astro-page:src/pages/about@_@mdx":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/item1@_@md":"pages/blog/item1.astro.mjs","\u0000@astro-page:src/pages/blog/my-title@_@md":"pages/blog/my-title.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"pages/blog/_---page_.astro.mjs","\u0000@astro-page:src/pages/drafts/[slug]/index@_@astro":"pages/drafts/_slug_.astro.mjs","\u0000@astro-page:src/pages/drafts/[...page]@_@astro":"pages/drafts/_---page_.astro.mjs","\u0000@astro-page:src/pages/media@_@astro":"pages/media.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]/[page]@_@astro":"pages/tags/_tag_/_page_.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]/index@_@astro":"pages/tags/_tag_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_KSsZ5Cqc.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/introducing-astro-2.mdx?astroContentCollectionEntry=true":"chunks/introducing-astro-2_B92CXgYr.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/introducing-astro-ship-less-javascript.mdx?astroContentCollectionEntry=true":"chunks/introducing-astro-ship-less-javascript_B9rL1506.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/introducing-astro.mdx?astroContentCollectionEntry=true":"chunks/introducing-astro_BJ-fk5jJ.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/islands-architecture.mdx?astroContentCollectionEntry=true":"chunks/islands-architecture_pm8fOzyU.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/markdoc-integration.mdoc?astroContentCollectionEntry=true":"chunks/markdoc-integration__9qji_6u.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/spa-fatigue.mdx?astroContentCollectionEntry=true":"chunks/spa-fatigue_Dzr6VhJR.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/introducing-astro-2.mdx?astroPropagatedAssets":"chunks/introducing-astro-2_DS5M5lR0.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/introducing-astro-ship-less-javascript.mdx?astroPropagatedAssets":"chunks/introducing-astro-ship-less-javascript_BHFZ9Xsl.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/introducing-astro.mdx?astroPropagatedAssets":"chunks/introducing-astro_BnNod4Jw.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/islands-architecture.mdx?astroPropagatedAssets":"chunks/islands-architecture_B-6qY-6G.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/markdoc-integration.mdoc?astroPropagatedAssets":"chunks/markdoc-integration_CdDQQWiF.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/spa-fatigue.mdx?astroPropagatedAssets":"chunks/spa-fatigue_CXniduIC.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/introducing-astro-2.mdx":"chunks/introducing-astro-2_BCNocdnP.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/introducing-astro-ship-less-javascript.mdx":"chunks/introducing-astro-ship-less-javascript_B9wmZ6cy.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/introducing-astro.mdx":"chunks/introducing-astro_CGoDAg9m.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/islands-architecture.mdx":"chunks/islands-architecture_DFSTk7wh.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/markdoc-integration.mdoc":"chunks/markdoc-integration_6A1irkre.mjs","/Users/thor3/Documents/kill-me-ink/src/content/blog/spa-fatigue.mdx":"chunks/spa-fatigue_elhp1OUG.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.D-J6Cgqt.js","/Users/thor3/Documents/kill-me-ink/src/components/CodeCopy.svelte":"_astro/CodeCopy.B70DBXrS.js","$/components/PostStats.svelte":"_astro/PostStats.ySoWeikF.js","/Users/thor3/Documents/kill-me-ink/src/components/SearchBtn.svelte":"_astro/SearchBtn.DvthoPPa.js","/Users/thor3/Documents/kill-me-ink/src/components/ModeSwitcherBtn.svelte":"_astro/ModeSwitcherBtn.CFcBVA9v.js","@astrojs/svelte/client.js":"_astro/client.ppxVM2Be.js","/Users/thor3/Documents/kill-me-ink/src/components/ModeLabel.svelte":"_astro/ModeLabel.Dp06noy1.js","/Users/thor3/Documents/kill-me-ink/src/components/SearchModal.svelte":"_astro/SearchModal.BVX0sO1n.js","/Users/thor3/Documents/kill-me-ink/src/components/mdoc/Tabs/index.svelte":"_astro/index.YKEDYhQK.js","/astro/hoisted.js?q=1":"_astro/hoisted.CmkSwYHY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///Users/thor3/Documents/kill-me-ink/dist/admin/index.html","/file:///Users/thor3/Documents/kill-me-ink/dist/oauth/callback","/file:///Users/thor3/Documents/kill-me-ink/dist/oauth","/file:///Users/thor3/Documents/kill-me-ink/dist/about/index.html","/file:///Users/thor3/Documents/kill-me-ink/dist/blog/item1/index.html","/file:///Users/thor3/Documents/kill-me-ink/dist/blog/my-title/index.html","/file:///Users/thor3/Documents/kill-me-ink/dist/media/index.html","/file:///Users/thor3/Documents/kill-me-ink/dist/rss.xml","/file:///Users/thor3/Documents/kill-me-ink/dist/tags/index.html","/file:///Users/thor3/Documents/kill-me-ink/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"9/KXruobkvFHAd6bODPtCwNqKqSPNMgsZc7IHETNJKQ=","experimentalEnvGetSecretEnabled":false});

export { manifest };

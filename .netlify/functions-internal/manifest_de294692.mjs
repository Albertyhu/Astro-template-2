import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_96538662.mjs';
import 'mime';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

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
  return toPath;
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
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/404.02c0bac8.css"},{"type":"inline","content":"body{position:relative;display:flex;flex-direction:column;overflow-y:auto}.header{transform-style:preserve-3d;position:relative;justify-content:center;display:flex;height:100%;max-height:100vh;align-items:center;z-index:-1}.sectionStyle{perspective:10px;overflow-y:auto;height:100vh;overflow-x:hidden;background-color:#e2dddc;background-attachment:fixed;-ms-overflow-style:none;scrollbar-width:none;z-index:-1}.sectionStyle::-webkit-scrollbar{display:none}.layer1Style,.layer2Style,.layer3Style,.layer4Style,.layer5Style,.layer6Style,.layer7Style,.layer8Style{position:absolute;height:100%;width:100%;-o-object-fit:cover;object-fit:cover;z-index:-1;will-change:transform}.layer1Style{transform:scale(1.1)l}.layer2Style{transform:translateZ(-2.5px) scale(1.45)}.layer3Style{transform:translateZ(-3.75px) scale(1.575)}.layer4Style{transform:translateZ(-5px) scale(1.7)}.layer5Style{transform:translateZ(-6.25px) scale(1.825)}.layer6Style{transform:translateZ(-7.5px) scale(1.95)}.layer7Style{transform:translateZ(-8.75px) scale(2.075)}.layer8Style{transform:translateZ(-11.25px) scale(2.325);background-attachment:fixed}@media screen and (min-width:360px){body{height:100vh}}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"HomeButton\");t?.addEventListener(\"mousedown\",()=>{window.location.href=\"/\"});\n"}],"styles":[{"type":"external","src":"/_astro/404.02c0bac8.css"},{"type":"external","src":"/_astro/404.330ae0dc.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["D:/Astro/design-initiative/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/Astro/design-initiative/src/pages/tags/[tag].astro",{"propagation":"none","containsHead":true}],["D:/Astro/design-initiative/src/pages/tags/[tag]/[page].astro",{"propagation":"none","containsHead":true}],["D:/Astro/design-initiative/src/pages/tags/index.astro",{"propagation":"none","containsHead":true}],["D:/Astro/design-initiative/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index_5edbcf94.mjs","\u0000@astrojs-manifest":"manifest_de294692.mjs","D:/Astro/design-initiative/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3769332a.mjs","\u0000@astro-page:node_modules/astro/dist/assets/image-endpoint@_@js":"chunks/image-endpoint_3547c842.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_1ad65404.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"chunks/index_8ce02662.mjs","\u0000@astro-page:src/pages/tags/[tag]/[page]@_@astro":"chunks/_page__d5fd5c66.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"chunks/_tag__3112d897.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_2abe3143.mjs","D:/Astro/design-initiative/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_6da8740f.mjs","D:/Astro/design-initiative/src/components/HeaderComponent/MobileMenu/menuLinks.tsx":"_astro/menuLinks.0f3b40bf.js","D:/Astro/design-initiative/src/components/blogComponents/description.tsx":"_astro/description.b58bd68a.js","@/components/paginatedBlog/renderTagPagination.tsx":"_astro/renderTagPagination.6cbaecf7.js","/astro/hoisted.js?q=0":"_astro/hoisted.4817a05b.js","@astrojs/react/client.js":"_astro/client.bb1cf6b8.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/logo.33912b93.svg","/_astro/1_foreground.b8f69a7b.webp","/_astro/3_Skyscraper_back.5780cbe6.svg","/_astro/4_Dark mountains.323090a2.svg","/_astro/5_Mid mountains.260161c6.svg","/_astro/los-angeles-mountains-scaled.2ae473d6.webp","/_astro/2_Skyscraper_front.6a3636eb.svg","/_astro/6_Pale mountains.4b787e5a.svg","/_astro/7_White_mountains.5e2c5c4a.svg","/_astro/8_Sky.8bf8ac11.svg","/_astro/white-logo.26ba15c6.svg","/_astro/shape-13.364c4b46.png","/_astro/404.330ae0dc.css","/_astro/404.02c0bac8.css","/_astro/_page_.68e77935.css","/_astro/_tag_.9cfafafc.css","/_astro/_tag_.b801fe56.css","/_astro/index.e3c75c6e.css","/favicon.svg","/_astro/client.bb1cf6b8.js","/_astro/description.b58bd68a.js","/_astro/index.ed373d49.js","/_astro/jsx-runtime.391947bd.js","/_astro/menuLinks.0f3b40bf.js","/_astro/renderTagPagination.6cbaecf7.js","/_astro/uuid.11ddbd1d.js","/tags/index.html"]});

export { manifest };

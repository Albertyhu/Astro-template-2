import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_6e2ac6d0.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_96538662.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_3547c842.mjs');
const _page1  = () => import('./chunks/index_1ad65404.mjs');
const _page2  = () => import('./chunks/index_537f5bae.mjs');
const _page3  = () => import('./chunks/_page__41362200.mjs');
const _page4  = () => import('./chunks/_tag__dc4b5bc6.mjs');
const _page5  = () => import('./chunks/404_2abe3143.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/tags/index.astro", _page2],["src/pages/tags/[tag]/[page].astro", _page3],["src/pages/tags/[tag].astro", _page4],["src/pages/404.astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };

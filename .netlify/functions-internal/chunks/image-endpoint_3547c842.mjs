export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/image-endpoint_2b6d59b3.mjs').then(n => n.i);

export { page };

import { b as authUrl } from '../chunks/_config_DHcSfQSp.mjs';
export { renderers } from '../renderers.mjs';

const GET = ({ redirect }) => {
  return redirect(authUrl);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

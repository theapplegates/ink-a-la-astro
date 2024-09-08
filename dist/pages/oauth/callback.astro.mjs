import { c as clientId, a as clientSecret, t as tokenUrl } from '../../chunks/_config_DHcSfQSp.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ url, redirect }) => {
  const data = {
    code: url.searchParams.get("code"),
    client_id: clientId,
    client_secret: clientSecret
  };
  let script;
  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const body = await response.json();
    const content = {
      token: body.access_token,
      provider: "github"
    };
    script = `
      <script>
        const receiveMessage = (message) => {
          window.opener.postMessage(
            'authorization:${content.provider}:success:${JSON.stringify(content)}',
            message.origin
          );

          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);

        window.opener.postMessage("authorizing:${content.provider}", "*");
      <\/script>
    `;
    return new Response(script, {
      headers: { "Content-Type": "text/html" }
    });
  } catch (err) {
    console.log(err);
    return redirect("/?error=😡");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

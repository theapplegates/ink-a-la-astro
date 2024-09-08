const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user`;
const tokenUrl = "https://github.com/login/oauth/access_token";

export { clientSecret as a, authUrl as b, clientId as c, tokenUrl as t };

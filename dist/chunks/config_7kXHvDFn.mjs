const NAV_ITEMS = {
  home: {
    path: "/",
    title: "home"
  },
  blog: {
    path: "/blog",
    title: "blog"
  },
  tags: {
    path: "/tags",
    title: "tags"
  },
  media: {
    path: "/media",
    title: "media"
  },
  about: {
    path: "/about",
    title: "about"
  }
};
const SITE = {
  // Your site's detail?
  name: "Ink",
  title: "Astro - Ink",
  description: "Crisp, minimal, personal blog theme for Astro",
  url: "https://astro-ink.vercel.app",
  githubUrl: "https://github.com/one-aalam/astro-ink",
  listDrafts: true,
  image: "https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png",
  // YT video channel Id (used in media.astro)
  ytChannelId: "",
  // Optional, user/author settings (example)
  // Author: name
  author: "",
  // Example: Fred K. Schott
  // Author: Twitter handler
  authorTwitter: "",
  // Example: FredKSchott
  // Author: Image external source
  authorImage: "",
  // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
  // Author: Bio
  authorBio: "Crisp, minimal, personal blog theme for Astro. Crisp, minimal, personal blog theme for Astro. Crisp, minimal, personal blog theme for Astro"
};
const PAGE_SIZE = 8;
const USE_VIEW_STATS = false;

export { NAV_ITEMS as N, PAGE_SIZE as P, SITE as S, USE_VIEW_STATS as U };

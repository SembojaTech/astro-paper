export const SITE = {
  website: "https://havit.semboja.tech/",
  author: "Havit C. Rovik",
  profile: "https://havit.web.id/",
  desc: "This blog is a space for sharing, growing, and building knowledge together, driven by my belief that the best way to learn is to teach.",
  title: "Semboja",
  ogImage: "havit-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Jakarta", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

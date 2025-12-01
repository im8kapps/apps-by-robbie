export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://appsbyrobby.com/sitemap.xml",
  };
}

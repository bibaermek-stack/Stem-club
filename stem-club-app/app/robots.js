export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://stem-ayu.example/sitemap.xml",
  };
}

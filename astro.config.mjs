import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://777paintinganddecorating.co.uk",
  trailingSlash: "never",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
});

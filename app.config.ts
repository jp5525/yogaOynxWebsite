import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
      ssr: true,
      server: {
        baseURL: process.env.BASE_PATH,
        preset: "static",
        compatibilityDate:'2024-11-21'
      },
       
  });

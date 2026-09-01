// TanStack configuration
// This config sets up Vite with TanStack Start, React, Tailwind CSS and TypeScript support
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/portfolio/",
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});

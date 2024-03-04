import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://joshuaco.github.io/patient-administrator-react/",
  plugins: [react()],
});

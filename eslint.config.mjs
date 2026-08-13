import { defineConfig, globalIgnores } from "eslint/config";
import eslint from "@eslint/js";
import next from "@next/eslint-plugin-next";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
  globalIgnores([
    ".next/**",
    "dist/**",
    "netlify-dist/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".claude/**",
  ]),
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs.flat["recommended-latest"],
  jsxA11y.flatConfigs.recommended,
  next.configs["core-web-vitals"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.serviceworker,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    // This site is a zero-runtime-JS static export: scripts/export-netlify.mjs
    // strips <script>/modulepreload markup from every route and asserts none
    // survives, but that check runs on already-stripped output — it verifies
    // the stripper ran, not that a page never needed JS. A genuine "use
    // client" component still renders its static HTML shell fine even after
    // stripping; it just silently loses its interactivity, with no leftover
    // markup for that regex check to catch. Banning the directives here, at
    // the source, is the actual guard.
    files: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "Program > ExpressionStatement[expression.value='use client']",
          message:
            'This site is a zero-runtime-JS static export (see AGENTS.md). "use client" would compile in silently and lose its interactivity in the exported HTML rather than fail the build. If client-side interactivity is genuinely needed, get explicit approval first.',
        },
        {
          selector: "Program > ExpressionStatement[expression.value='use server']",
          message:
            'This site has no server actions or backend — "use server" does not fit the static-export architecture (see AGENTS.md). If this is intentional, get explicit approval first.',
        },
      ],
    },
  },
]);

export default eslintConfig;

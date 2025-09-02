// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

// export default eslintConfig;

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// These lines are standard boilerplate for getting the directory name in an ES module.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat is a utility to help use older, non-flat ESLint configs 
// (like the ones from Next.js) in the new "flat" config format.
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  // This is the recommended setup. By extending both, you get all the
  // essential Next.js rules, TypeScript-specific rules, and vital
  // performance checks for Core Web Vitals.
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;

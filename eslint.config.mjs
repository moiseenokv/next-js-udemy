import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: "module",
			},
		},
		plugins: {
			"@typescript-eslint": tsPlugin,
			"@stylistic": stylistic,
			"react-hooks": reactHooks,
		},
		rules: {
			semi: "off",
			"@stylistic/semi": ["error", "always"],
			quotes: "off", // отключаем встроенное
			"@stylistic/quotes": [
				"error",
				"single",
				{
					avoidEscape: true,
					allowTemplateLiterals: true,
				},
			],
			"@typescript-eslint/no-empty-interface": [
				"error",
				{ allowSingleExtends: true },
			],
		},
	},
	globalIgnores([
		// Default ignores of eslint-config-next:
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
	]),
]);

export default eslintConfig;

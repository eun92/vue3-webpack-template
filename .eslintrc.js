module.exports = {
	env: {
		browser: true,
		node: true,
	},
	plugins: ["babel", "prettier"],
	extends: [
		// vue
		// "plugin:vue/vue3-essential", // Lv1
		"plugin:vue/vue3-strongly-recommended", // Lv2
		// "plugin:vue/vue3-recommended", // Lv3

		// js
		"eslint:recommended",

		// prettier
		"prettier",
		"plugin:prettier/recommended",

		// "prettier/@typescript-eslint",
		// "plugin:@typescript-eslint/recommended",
	],
	parserOptions: {
		parser: "babel-eslint",
	},
	rules: {
		// 변경해야할 때
		"vue/html-closing-bracket-newline": [
			"error",
			{
				singleline: "never",
				multiline: "never",
			},
		],
		"prettier/prettier": "error",
	},
};

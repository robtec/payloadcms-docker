import { Block } from "payload/types";

export const CodeBlock: Block = {
	slug: "codeblock",
	imageAltText: "A code block image",
	interfaceName: "Block of Code",
	labels: {
		singular: "Block of Code",
		plural: "Blocks of Code",
	},
	fields: [
		{
			name: "language",
			label: "Language",
			type: "select",
			options: [
				{ label: "Typescript", value: "ts" },
				{ label: "Javascript", value: "js" },
				{ label: "C", value: "c" },
				{ label: "C#", value: "c#" },
				{ label: "CSS", value: "css" },
				{ label: "PlainText", value: "txt" },
				{ label: "HTML", value: "html" },
				{ label: "Assembly", value: "nasm" },
				{ label: "Elixir", value: "ex" },
			],
			defaultValue: "ts",
			required: true,
		},
		{
			name: "code",
			label: "Code",
			type: "textarea",
		},
	],
};

import { Block } from "payload/types";

export const CodeBlock: Block = {
	slug: "codeblock",
	imageAltText: "A code block image",
	interfaceName: "Bloco de Código",
	labels: {
		singular: "Bloco de Código",
		plural: "Blocos de Código",
	},
	fields: [
		{
			name: "language",
			label: "Linguagem",
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
			label: "Código",
			type: "textarea",
		},
	],
};

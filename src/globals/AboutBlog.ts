import { GlobalConfig } from "payload/types";
import blogWebHook from "./hooks/blogWebHook";
const AboutBlog: GlobalConfig = {
	slug: "aboutblog",
	label: "Página 'Sobre' do Blog",
	access: {
		read: (): boolean => true,
	},
	hooks: {
		afterChange: [blogWebHook],
	},
	fields: [
		{
			name: "content",
			label: "Sobre mim",
			type: "richText",
		},
		{
			name: "meta",
			label: "Informações de SEO",
			type: "group",
			fields: [
				{
					name: "title",
					label: "Título do Navegador",
					type: "text",
					admin: {
						description:
							"Conteúdo que ficará visivel na aba do navegador.",
					},
				},
				{
					name: "description",
					label: "Descrição da Página",
					type: "textarea",
					admin: {
						description:
							"Descrição de até 80 caracteres sobre a página. Importante para otimização de buscadores de sites (SEO)",
					},
				},
				{
					name: "keywords",
					label: "Palavras Chaves",
					type: "text",
					admin: {
						description:
							"Algumas palavras chaves da página. Separe por vírgula. Quanto menos genéricas, melhor.",
					},
				},
			],
		},
	],
};

export default AboutBlog;

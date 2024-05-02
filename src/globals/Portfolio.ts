import { GlobalConfig } from "payload/types";
import netlifyWebhook from "./hooks/portfolioWebhook";
const Portfolio: GlobalConfig = {
	slug: "portfolio",
	label: "Portfolio",
	access: {
		read: (): boolean => true,
	},
	hooks: {
		afterChange: [netlifyWebhook],
	},
	fields: [
		{
			type: "row",
			fields: [
				{
					name: "name",
					label: "Nome",
					type: "text",
					admin: {
						width: "50%",
					},
					required: true,
				},
				{
					name: "title",
					label: "Título",
					type: "text",
					admin: {
						width: "50%",
					},
					required: true,
				},
			],
		},
		{
			name: "about",
			label: "Sobre mim",
			type: "richText",
		},
		{
			name: "projects",
			admin: {
				description: "Projetos mais importantes que já fiz.",
			},
			labels: {
				singular: "Projeto",
				plural: "Projetos",
			},
			type: "array",
			minRows: 1,
			fields: [
				{
					name: "title",
					label: "Título",
					type: "text",
					required: true,
				},
				{
					name: "image",
					label: "Imagem do Projeto",
					type: "upload",
					relationTo: "media",
					admin: {
						description: "Imagem que representa o projeto.",
					},
					required: true,
				},
				{
					name: "githubUrl",
					label: "URL do GitHub",
					type: "text",
					required: true,
				},
				{
					name: "deployUrl",
					label: "URL de Deploy",
					type: "text",
				},
				{
					name: "description",
					label: "Descrição",
					type: "textarea",
					required: true,
				},
				{
					name: "tags",
					label: "Tags",
					type: "array",
					required: false,
					minRows: 0,
					labels: {
						singular: "Tag",
						plural: "Tags",
					},
					fields: [
						{
							name: "name",
							label: "Nome",
							type: "text",
							required: true,
						},
					],
				},
			],
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

export default Portfolio;

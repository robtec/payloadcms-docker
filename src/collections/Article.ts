import { CollectionConfig } from "payload/types";
import blogWebHook from "../globals/hooks/blogWebHook";
import formatSlug from "../globals/hooks/formatSlug";
import { CategoryType } from "./Category";

export type ArticleType = {
	title: string;
	slug: string;
	description: string;
	content: string;
	category: CategoryType;
	meta: {
		title?: string;
		description?: string;
		keywords?: string;
	};
};

const Article: CollectionConfig = {
	slug: "articles",
	labels: {
		singular: "Artigo",
		plural: "Artigos",
	},
	admin: {
		useAsTitle: "title",
		disableDuplicate: true,
	},
	access: {
		read: (): boolean => true,
	},
	hooks: {
		afterChange: [blogWebHook as any],
	},
	fields: [
		{
			name: "title",
			label: "Título",
			type: "text",
			required: true,
		},
		{
			name: "description",
			label: "Descrição",
			type: "text",
			required: true,
		},
		{
			name: "content",
			label: "Conteúdo",
			type: "richText",
			required: true,
		},
		{
			name: "category",
			label: "Categoria",
			type: "relationship",
			relationTo: "category",
			required: true,
		},
		{
			name: "meta",
			label: "Informações de SEO",
			type: "group",
			fields: [
				{
					name: "seotitle",
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
		{
			name: "slug",
			label: "slug (gerado automaticamente)",
			type: "text",
			admin: {
				position: "sidebar",
				readOnly: true,
			},
			index: true,
			unique: true,
			hooks: {
				beforeValidate: [formatSlug("title")],
			},
		},
	],
};

export default Article;

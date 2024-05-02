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
		singular: "Article",
		plural: "Articles",
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
			label: "Title",
			type: "text",
			required: true,
		},
		{
			name: "description",
			label: "Description",
			type: "text",
			required: true,
		},
		{
			name: "content",
			label: "Content",
			type: "richText",
			required: true,
		},
		{
			name: "category",
			label: "Category",
			type: "relationship",
			relationTo: "category",
			required: true,
		},
		{
			name: "meta",
			label: "Information for SEO",
			type: "group",
			fields: [
				{
					name: "seotitle",
					label: "SEO Title",
					type: "text",
					admin: {
						description:
							"Sample seo title.",
					},
				},
				{
					name: "description",
					label: "Description",
					type: "textarea",
					admin: {
						description:
							"Description for (SEO)",
					},
				},
				{
					name: "keywords",
					label: "Keywords",
					type: "text",
					admin: {
						description:
							"SEO and Search keywords.",
					},
				},
			],
		},
		{
			name: "slug",
			label: "slug",
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

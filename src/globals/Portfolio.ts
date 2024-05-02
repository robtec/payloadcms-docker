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
					label: "Name",
					type: "text",
					admin: {
						width: "50%",
					},
					required: true,
				},
				{
					name: "title",
					label: "Title",
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
			label: "About",
			type: "richText",
		},
		{
			name: "projects",
			admin: {
				description: "About the projects",
			},
			labels: {
				singular: "Project",
				plural: "Projects",
			},
			type: "array",
			minRows: 1,
			fields: [
				{
					name: "title",
					label: "Title",
					type: "text",
					required: true,
				},
				{
					name: "image",
					label: "Project Image",
					type: "upload",
					relationTo: "media",
					admin: {
						description: "Image for the project",
					},
					required: true,
				},
				{
					name: "githubUrl",
					label: "Github URL",
					type: "text",
					required: true,
				},
				{
					name: "deployUrl",
					label: "Deploy URL",
					type: "text",
				},
				{
					name: "description",
					label: "Description",
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
							label: "Name",
							type: "text",
							required: true,
						},
					],
				},
			],
		},
		{
			name: "meta",
			label: "Information for SEO",
			type: "group",
			fields: [
				{
					name: "title",
					label: "Title",
					type: "text",
					admin: {
						description:
							"Title for navigation.",
					},
				},
				{
					name: "description",
					label: "Description",
					type: "textarea",
					admin: {
						description:
							"Description for sites (SEO)",
					},
				},
				{
					name: "keywords",
					label: "Keywords",
					type: "text",
					admin: {
						description:
							"SEO keywords.",
					},
				},
			],
		},
	],
};

export default Portfolio;

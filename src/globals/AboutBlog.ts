import { GlobalConfig } from "payload/types";
import blogWebHook from "./hooks/blogWebHook";
const AboutBlog: GlobalConfig = {
	slug: "aboutblog",
	label: "About Blog",
	access: {
		read: (): boolean => true,
	},
	hooks: {
		afterChange: [blogWebHook],
	},
	fields: [
		{
			name: "content",
			label: "SEO",
			type: "richText",
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
							"Content.",
					},
				},
				{
					name: "description",
					label: "Description",
					type: "textarea",
					admin: {
						description:
							"Description of site for (SEO)",
					},
				},
				{
					name: "keywords",
					label: "Keywords",
					type: "text",
					admin: {
						description:
							"Keywords for SEO.",
					},
				},
			],
		},
	],
};

export default AboutBlog;

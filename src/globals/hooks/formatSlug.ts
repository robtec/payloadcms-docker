import { FieldHook } from "payload/types";
import slugify from "slugify";

const formatSlug =
	(fallback: string): FieldHook =>
	({ value, originalDoc, data }) => {
		if (typeof value === "string") {
			return slugify(value, {
				locale: "br",
			});
		}
		const fallbackData =
			(data && data[fallback]) || (originalDoc && originalDoc[fallback]);

		if (fallbackData && typeof fallbackData === "string") {
			return slugify(fallbackData, {
				locale: "br",
			});
		}

		return value;
	};

export default formatSlug;

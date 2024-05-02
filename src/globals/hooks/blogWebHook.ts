import { GlobalAfterChangeHook } from "payload/types";
import axios from "axios";

const blogWebHook: GlobalAfterChangeHook = async ({ doc }) => {
	try {
		await axios.post(process.env.BLOG_NETLIFY_WEBHOOK_URL);
	} catch (error) {
		console.error("Erro ao acionar o webhook:", error);
	}

	return doc;
};

export default blogWebHook;

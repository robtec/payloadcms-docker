import { GlobalAfterChangeHook } from "payload/types";
import axios from "axios";

const portfolioWebhook: GlobalAfterChangeHook = async ({ doc }) => {
	try {
		await axios.post(process.env.PORTFOLIO_NETLIFY_WEBHOOK_URL);
	} catch (error) {
		console.error("Erro ao acionar o webhook:", error);
	}

	return doc;
};

export default portfolioWebhook;

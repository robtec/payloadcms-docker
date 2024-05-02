import express from "express";
import payload from "payload";
import { mediaManagement } from "payload-cloudinary-plugin";

require("dotenv").config();
const app = express();
app.use(
	mediaManagement({
		api_key: process.env.CLOUDINARY_API_KEY,
		cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
		api_secret: process.env.CLOUDINARY_API_SECRET,
	})
);

// Redirect root to Admin panel
app.get("/", (_, res) => {
	res.redirect("/admin");
});

const start = async () => {
	// Initialize Payload
	await payload.init({
		secret: process.env.PAYLOAD_SECRET,
		express: app,
		onInit: async () => {
			payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
		},
	});

	// Add your own express routes here

	const PORT = process.env.PORT || 4000;
	app.listen(PORT);
};

start();

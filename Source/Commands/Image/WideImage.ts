import { createCanvas, loadImage } from "canvas";
import { Message, MessageAttachment } from "discord.js";
import BaseCommand from "../../Base/BaseCommand";
import PhotoGenieClient from "../../Base/Client";

export default class WideImage extends BaseCommand {
	constructor(client: PhotoGenieClient) {
		super(client, {
			name: "wideimage",
			description: "Kinda like Wide Putin",
			category: "Image",
			aliases: [
				"wide-image",
			],
		});
	}

	public async run(message: Message) {
		const image = message.attachments.first();

		if(!image) return message.channel.send("<a:error:840147176360378388> Attach an image to your message first!");

		let userImage;

		try {
			userImage = await loadImage(image.url);
		}
		catch(err) {
			console.log(err);
			return message.channel.send("<a:error:840147176360378388> Something went wrong while running the code");
		}

		const canvas = createCanvas(userImage.width * 2, userImage.height);
		const ctx = canvas.getContext("2d");

		ctx.drawImage(userImage, 0, 0, userImage.width * 2, userImage.height);

		return message.channel.send({
			files: [
				new MessageAttachment(canvas.toBuffer()),
			],
		});
	}
}
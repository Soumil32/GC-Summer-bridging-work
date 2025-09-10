import type { RequestHandler } from '@builder.io/qwik-city';
import "dotenv/config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import * as z from "zod";

 
export const onPost: RequestHandler = async (request) => {
    console.log("request recieved")
    const json = await request.request.json()
    const feedback = {
        name: json.name,
        email: json.email,
        message: json.message,
    }

    const feedbackSchema = z.object({
        name: z.string(),
        email: z.string(),
        message: z.string(),
    });

    const validatedFeedback = feedbackSchema.parse(feedback);

    const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY as string,
    });

    const sentFrom = new Sender("MS_niYQRE@test-q3enl6kvmy542vwr.mlsender.net", "soumil");

    const recipients = [
        new Recipient(validatedFeedback.email, validatedFeedback.name)
    ];

    const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject(`Thanks for your feedback ${validatedFeedback.name}`)
    .setHtml("<h1>Your feedback is much appreciated</h1> <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExczdzN2VqcWZhNXdvZHFqd21oM3FnMHp3cjJiMGF1emFpbXJnNW1ncyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K52mizrT6zoOF1SKAX/giphy.gif' </img>")

    await mailerSend.email.send(emailParams);
    request.send(200, JSON.stringify({ message: 'feedback submitted' }));
};
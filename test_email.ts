import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
async function main() {
    const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY as string,
    });

    const sentFrom = new Sender("MS_niYQRE@test-q3enl6kvmy542vwr.mlsender.net", "soumil");

    const recipients = [
    new Recipient("soumil009@outlook.com", "Mr. Gupta")
    ];

    const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject("This is a Subject")
    .setHtml("<strong>This is the HTML content</strong>")
    //.setText("This is the text content");

    await mailerSend.email.send(emailParams);


}

main().catch(console.error).finally(() => process.exit(0));
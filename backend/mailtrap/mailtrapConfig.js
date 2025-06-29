import { MailtrapClient } from "mailtrap";
import dotenv from 'dotenv'

dotenv.config()
const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = "https://send.api,mailtrap.oi"

export const mailTrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Atobra",
};
// const recipients = [
//   {
//     email: "ofoefrancisteye@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     html: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
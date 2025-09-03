import type { RequestHandler } from '@builder.io/qwik-city';
 
export const onPost: RequestHandler = async (request) => {
    console.log("request recieved")
    const json = await request.request.json()
    const name = json.name
    const email = json.email
    const message = json.message
    request.send(200, JSON.stringify({ message: 'feedback submitted' }));
};
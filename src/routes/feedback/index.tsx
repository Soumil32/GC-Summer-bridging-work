import { component$ } from "@builder.io/qwik";
import { Form, routeAction$, type DocumentHead } from "@builder.io/qwik-city";

const postForm = routeAction$(async (props) => {
    console.log(props);
    const params = {
        name: props.name,
        email: props.email,
        message: props.message,
    }
    const url = "https://friendly-space-halibut-4p55764r66gf79w9-5173.app.github.dev";
    const res = await fetch(url + "/api/submitfeedback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    });
    const resJSON = await res.json();
    console.log("res: " + resJSON.message);
});

export default component$(() => {
    const postFormAction = postForm();
  return (
    <>
      <h1>Feedback</h1>
      <div class="w-screen">       
        <Form action={postFormAction} class="w-md flex justify-center flex-col">
          <input type="text" name="name" id="name" />
          <input type="email" name="email" id="email" />
          <textarea name="message" id="message"></textarea>
          <button type="submit">Submit</button>

        </Form>
      </div>
    </>
    );
});

export const head: DocumentHead = {
  title: "Feedback",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
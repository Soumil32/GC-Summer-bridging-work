import { component$ } from "@builder.io/qwik";
import { Form, routeAction$, type DocumentHead } from "@builder.io/qwik-city";

const postForm = routeAction$((props) => {
    console.log(props);
});

export default component$(() => {
    const postFormAction = postForm();
  return (
    <>
      <h1>Feedback</h1>

      <Form action={postFormAction}>
        <input type="text" name="name" id="name" />
        <input type="email" name="email" id="email" />
        <textarea name="message" id="message"></textarea>
        <button type="submit">Submit</button>
      </Form>
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
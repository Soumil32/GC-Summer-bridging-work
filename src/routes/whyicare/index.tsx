import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Why I care about OSS</h1>

      <p>Place holder for screenhots of github profile</p>

      <p>
        I have been programming from a young age and would not be where I am without open source software. Even this entire website from the code to the technologies used to serve it on the open web are all open source.
        Here's just a small list of things OSS has let me do:
      </p>
      <ul>
        <li>Blender: allowed me to learn 3D modeling and animation</li>
        <li>Linux: The OS that powers the modern internet, was used to develop and serve this website</li>
        <li>Git: A version control system that manges different stages of development, allows for collaboration and code review</li>
      </ul>
    </>
    );
});

export const head: DocumentHead = {
  title: "Why I care about OSS",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
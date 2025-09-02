import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Impact of OSS</h1>

      <p>Place holder for photos</p>
    </>
    );
});

export const head: DocumentHead = {
  title: "Impact of OSS",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
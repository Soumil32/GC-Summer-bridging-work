import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Why I care about OSS</h1>
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
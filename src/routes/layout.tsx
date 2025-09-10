import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="flex flex-row justify-between bg-pink-500 p-4 text-white">
        <Link href="/">What is OSS</Link> <br />
        <Link href="/whyicare">Why I care about OSS</Link> <br /> 
        <Link href="/impact">Impact of OSS</Link> <br />
        <Link href="/feedback">Give Feedback</Link> <br />
      </div>
      <Slot />
    </>
  )
});
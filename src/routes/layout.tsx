import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <Slot />
      <Link href="/">What is OSS</Link> <br />
      <Link href="/whyicare">Why I care about OSS</Link> <br /> 
      <Link href="/impact">Impact of OSS</Link> <br />
    </>
  )
});
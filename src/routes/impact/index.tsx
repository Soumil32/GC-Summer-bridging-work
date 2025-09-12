import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Impact of OSS</h1>

      <img src="https://th.bing.com/th/id/OIP.JCjpPBxeJUX88397dbZQsgHaEK?w=265&h=180&c=7&r=0&o=7&pid=1.7&rm=3" height={200} width={200} />

      <p>Open souce software has been the backbone of my tech journey. Without tools like VSCode, Gihub, NodeJS and many more, a large percentage of develepers would not even had a chance
        to discover the joys (and the many, many headaches) of tech industry. This even more true since that the majoiry of he human population currently lives in developing countries
        where the internet is not as ubiquitous as it is in developed countries and paying £1000s for a single piece of software is a far flung luxury. Startups can now spend 
        greatly less on there tech stacks and focus more on growth and innovation. 
      </p>
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
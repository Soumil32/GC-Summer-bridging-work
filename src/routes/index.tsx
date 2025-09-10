import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Open Source Software (OSS)</h1>
      <hr />
      <p>Sustaining The Modern World</p>

      <div class="grid grid-cols-2 grid-rows-2 gap-4">
        <img src="icons8-github.svg" alt="Github lo go"/>
        <img src="/gitlab.svg" alt="Gitlab logo" height={96} width={96}/>
        <img width="96" height="96" src="https://img.icons8.com/color/96/git.png" alt="git"/>
        <img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-apache-a-free-and-open-source-cross-platform-web-server-software-logo-shadow-tal-revivo.png" alt="apache logo"/>
      </div>

      <h2>What is OSS?</h2>
      <p>Open Source Software (OSS) is a type of software that is openly licensed, which means that the source code is available for anyone to view, modify, and distribute.
        This means that anyone can contribute to the development of the software, inspect the software's sorce code, and modify the software for their own use.
      </p>
      
      <h2>What benefits does OSS bring?</h2>
      <ul>
        <li>Cost savings: OSS are often free to use compared to the exorbitant licensing fees for proprietary software.</li>
        <li>Security and Transparency: Since anyone can inspect the software's source code, it is easier to identify and fix security vulnerabilities along with gaining transparency and trust in the software</li>
        <li>Privacy: Since the source code is available for anyone to view, you can see how the app is utilising your data and most OSS apps are incredibly privacy friendly</li>
        <li>Accessibility: Anyone, anywhere, any income can use and contribute to the software</li>
        <li>Community Maintained: OSS projects are often maintained by a community of developers who are passionate about the project and its goals. The projects often are not financially incentivised
          thus focus on the betterment of the project and its users rather than maximising profits.</li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Introduction to OSS",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

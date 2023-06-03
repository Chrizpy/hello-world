import Page from "../components/Page.tsx";

export default function TechUsed() {
  return (
    <div>
      <Page>
        <div class="text-5xl lg:text-4xl sm:text-left sm:mt-0">
          <p>Tech used!</p>
        </div>

        <div class="text-2xl">
          <p>
            To create this website, I used{"  "}
            <a
              href="https://fresh.deno.dev/"
              target="_blank"
              class="text-green-400"
            >
              Deno Fresh
            </a>. As a non-frontend developer, I wanted to try something other
            than Node because of all the horror stories I have read online. I
            don't know if using Deno will alleviate some of that pain, but I
            must say it has been really easy to get started with.
          </p>
        </div>

        <div class="text-2xl mt-5">
          Deno Fresh uses{" "}
          <a
            href="https://preactjs.com/"
            target="_blank"
            class="text-purple-400"
          >
            Preact
          </a>{" "}
          for its templating and rendering, which should make it easier for
          React or other frontend developers to get into Deno Fresh, I believe.
        </div>

        <div class="text-2xl mt-5">
          I decided to use{" "}
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            class="text-blue-400"
          >
            TypeScript
          </a>{" "}
          in this project since I have dabbled with Go a bit in the past. I may
          still not be using it correctly in this project, but my plan is to
          update this site as I learn and improve.
        </div>

        <div class="text-2xl mt-5">
          To create the simple design for the top banner on this page, I used
          the app{" "}
          <a href="http://inkpad.art/" target="_blank" class="text-yellow-400">
            InkPad
          </a>{" "}
          on my iPad.
        </div>

        <div class="text-2xl mt-5">
          I used{" "}
          <a
            href="https://deno.com/deploy"
            target="_blank"
            class="text-purple-400"
          >
            Deno Deploy
          </a>{" "}
          to host this website, and it integrates seamlessly with GitHub. It
          automatically deploys changes that are pushed to the main branch and
          also provides helpful pull-request applications so that you can try
          your changes before pushing them to the main branch.
        </div>
      </Page>
    </div>
  );
}

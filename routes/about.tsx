import Page from "../components/Page.tsx";

export default function About() {
  return (
    <div>
      <Page>
        <div class="mt-5 text-5xl lg:text-4xl sm:text-left sm:mt-0">
          <p>About!</p>
        </div>

        <div class="text-2xl">
          <p>
            Just as it is explained on the front page of this website. The
            reason this website exists is because I wanted to try out frontend
            development in my sparetime. Another reason this website exists is
            for me to able to show people what I am up to!
          </p>
        </div>

        <div class="text-2xl mt-5">
          <p>
            The idea is to create a landing page for my software development.
            But could also include other things in the future. One such thing
            that is currently in developing, is a blog section to this website.
            Having a blog will make it even easier to share things I am up to.
            It is also nice for myself to look back on to see what I have done
            through the years. If I keep it up to date that is. ;)
          </p>
        </div>
      </Page>
    </div>
  );
}

import Page from "../components/Page.tsx";

export default function About() {
  return (
    <div>
      <Page>
        <div class="text-5xl lg:text-4xl sm:text-left sm:mt-0">
          <p>About!</p>
        </div>

        <div class="text-2xl">
          <p>
            Just as it is explained on the front page of this website, the
            reason this website exists is because I wanted to try out frontend
            development in my spare time. Another reason this website exists is
            for me to be able to show people what I am up to!
          </p>
        </div>

        <div class="text-2xl mt-5">
          <p>
            The idea is to create a landing page for my software development,
            but it could also include other things in the future. One such thing
            that is currently in development is a blog section for this website.
            Having a blog will make it even easier to share what I am up to. It
            will also be nice for me to look back on and see what I have done
            throughout the years, if I keep it up to date, that is. ;)
          </p>
        </div>
      </Page>
    </div>
  );
}

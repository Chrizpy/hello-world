import Head from "../components/Head.tsx";
import SocialNav from "../components/SocialNav.tsx";
import Navigation from "../components/Navigation.tsx";
import Footer from "../components/Footer.tsx";

export default function Cv() {
  return (
    <div>
      <Head />
      <div id="content" class="max-w-6xl mx-auto font-nanum">
        <SocialNav />
        <div class="grid grid-cols-4 m-5">
          <div class="col-span-4 tablet:col-span-1">
            <Navigation />
          </div>

          <div class="mt-5 tablet:mt-0 col-span-4 tablet:col-span-3">
            <div>
              <div class="text-5xl lg:text-6xl sm:text-left sm:mt-0">
                <p>Work experience</p>
              </div>

              <div class="mt-5 grid tablet:grid-cols-4 border border-dashed border-black rounded-lg border-2 divide-y-2 tablet:divide-y-0 tablet:divide-x-2 divide-dashed divide-black transition ease-in-out hover:scale-95 ">
                <div class="p-3 grid grid-cols-3 tablet:grid-rows-3 tablet:grid-cols-none">
                  <p class="text-xl col-span-2 tablet:col-span-none">
                    September 2020 - Present
                  </p>

                  <img
                    src="./img/twingly-transparent.png"
                    class="mx-auto w-1/2 tablet:row-span-2 tablet:w-3/4"
                  >
                  </img>
                </div>

                <div class="p-3 tablet:col-span-3">
                  <p class="text-4xl">
                    System Developer
                  </p>

                  <p class="text-xl">
                    In my role at Twingly, I have the unique opportunity to
                    contribute to multiple areas due to our smaller team size. I
                    take on a range of responsibilities, including ensuring the
                    smooth operation of our systems, developing new features for
                    both our customers and internal tooling, and actively
                    participating in research and development efforts. By
                    collaborating with the team, I take an active role in
                    determining our future steps and direction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

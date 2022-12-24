import Head from "../components/Head.tsx";
import SocialNav from "../components/SocialNav.tsx";
import Navigation from "../components/Navigation.tsx";

export default function Conferences() {
  return (
    <div>
      <Head />
      <div id="content" class="max-w-6xl mx-auto font-nanum">
        <SocialNav />
        <div class="grid grid-cols-3 m-5">
          <div class="col-span-3 sm:col-span-1 ">
            <Navigation />
          </div>

          <div class="col-span-3 sm:col-span-2">
            <div class="mt-5 text-5xl lg:text-6xl sm:text-left sm:mt-0">
              <p>Coming soon!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

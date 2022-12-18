import { PageProps } from "$fresh/server.ts";

import Head from "../../components/Head.tsx";
import SocialNav from "../../components/SocialNav.tsx";
import Navigation from "../../components/Navigation.tsx";

export default function BlogPage(props: PageProps) {
const { route } = props.params;

  return (
    <div>
      <Head />
      <div id="content" class="max-w-6xl mx-auto font-nanum">
        <SocialNav />
        <div class="grid grid-cols-3 m-5">
          <div class="col-span-3 sm:col-span-1">
            <Navigation />
          </div>

          <div class="col-span-3 sm:col-span-2 font-sans">
            <article>
              <h1 class="text-5xl">
                <span class="text-blue-500"> 1# </span>
                { route }
              </h1>
              <p class="text-gray-500 mt-5 mb-5"> { new Date().toLocaleDateString() } </p>
              <img src="/img/IMG_1997.png"> </img>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

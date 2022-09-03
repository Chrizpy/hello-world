/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Head from "../components/Head.tsx";
import SocialNav from "../components/SocialNav.tsx";
import Navigation from "../components/Navigation.tsx";

export default function TechUsed() {
  return (
    <div class={tw`min-h-screen bg-dotted-background bg-repeat`}>
      <Head />
      <div id="content" class={tw`max-w-6xl mx-auto font-nanum`}>
        <SocialNav />
        <div class={tw`grid grid-cols-3 m-5`}>
          <div class={tw`col-span-3 sm:col-span-1 `}>
            <Navigation />
          </div>

          <div class={tw`col-span-3 sm:col-span-2`}>
            <div
              class={tw`mt-5 text-5xl lg:text-6xl sm:text-left sm:mt-0`}
            >
              <p>Coming soon!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

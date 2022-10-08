/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Head from "../components/Head.tsx";
import SocialNav from "../components/SocialNav.tsx";
import Navigation from "../components/Navigation.tsx";

export default function Home() {
  return (
    <div>
      <Head />
      <div id="content" class={tw`max-w-6xl mx-auto font-nanum`}>
        <SocialNav />
        <div class={tw`grid grid-cols-3 m-5`}>
          <div class={tw`col-span-3 sm:col-span-1`}>
            <Navigation />
          </div>
          <div class={tw`col-span-3 sm:col-span-2`}>
            <div
              class={tw`mt-5 text-5xl lg:text-6xl sm:text-left sm:mt-0`}
            >
              <p>Welcome to my website!</p>
            </div>

            <div id="title" class={tw`text-2xl`}>
              <p class={tw``}>
                On this corner of the internet, you get to know me a little bit.
                :)
              </p>
            </div>

            <div id="title" class={tw`text-2xl font-black mt-5`}>
              <p>So who am I?</p>
            </div>

            <div id="title" class={tw`text-2xl`}>
              <p>
                I'm a 24 year old Software Engineer from &#127480;&#127466;. I
                currently work as a System Developer at Twingly.
                <a href="https://twingly.com" target="_blank">
                  <img
                    src="./img/twingly-transparent.png"
                    class={tw`inline w-12 mx-2`}
                  >
                  </img>
                </a>
              </p>
              <p class={tw`mt-2`}>
                In my sparetime I like to tinker. I usually like to play with
                things that I don't have the chance to incorporate at work.
                Examples of this can be frontend development (why this website
                exists), embedded development with microcontrollers or Raspberry
                Pi's.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

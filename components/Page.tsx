import Head from "./Head.tsx";
import SocialNav from "./SocialNav.tsx";
import Navigation from "./Navigation.tsx";
import Footer from "./Footer.tsx";
import { Partial } from "fresh/runtime";
import type { ComponentChildren } from "preact";

interface PageProps {
  children: ComponentChildren;
}

export default function Page(props: PageProps) {
  return (
    <div>
      <Head />
      <div id="content" class="max-w-6xl mx-auto">
        <SocialNav />
        <div class="grid grid-cols-4 m-5">
          <div class="col-span-4 tablet:col-span-1">
            <Navigation />
          </div>

          <div class="mt-5 tablet:mt-0 col-span-4 tablet:col-span-2">
            <Partial name="content">
              {props.children}
            </Partial>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

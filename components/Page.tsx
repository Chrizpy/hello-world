import Head from "./Head.tsx";
import SocialNav from "./SocialNav.tsx";
import Navigation from "./Navigation.tsx";

export default function Page(props: any) {
  return (
    <div>
      <Head />
      <div id="content" class="max-w-6xl mx-auto font-nanum">
        <SocialNav />
        <div class="grid grid-cols-4 m-5">
          <div class="sm:col-span-1 col-span-4">
            <Navigation />
          </div>

          <div class="col-span-4 lg:col-span-2 md:col-span-3 sm:col-span-3">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

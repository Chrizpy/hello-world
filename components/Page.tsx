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
          <div class="col-span-4 tablet:col-span-1">
            <Navigation />
          </div>

          <div class="mt-5 tablet:mt-0 col-span-4 tablet:col-span-2">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

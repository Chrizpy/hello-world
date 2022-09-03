/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const iconStyling =
  "hover:bg-banner rounded-lg p-1.5 transition-all ease-in-out";

export default function SocialNav() {
  return (
    <div class={tw`mx-5 text-xl`}>
      <a
        href="https://github.com/chrizpy"
        target="_blank"
        class={tw`${iconStyling}`}
      >
        <i class={tw`align-middle ri-github-line`}></i>
      </a>
      <a
        href="https://www.linkedin.com/in/christoffer-akouri/"
        target="_blank"
        class={tw`${iconStyling}`}
      >
        <i class={tw`align-middle ri-linkedin-fill`}></i>
      </a>
    </div>
  );
}

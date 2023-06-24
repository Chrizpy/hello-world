import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-linkedin.tsx";

const iconStyling = "hover:bg-banner rounded-lg p-2 transition-all ease-in-out";

export default function SocialNav() {
  return (
    <div class="mx-5 text-xl">
      <a
        href="https://github.com/chrizpy"
        target="_blank"
        class={iconStyling}
      >
        <IconBrandGithub class="inline w-8 h-8" />
      </a>
      <a
        href="https://www.linkedin.com/in/christoffer-akouri/"
        target="_blank"
        class={iconStyling}
      >
        <IconBrandLinkedin class="inline w-8 h-8" />
      </a>
    </div>
  );
}

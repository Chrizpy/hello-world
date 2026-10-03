import IconBrandGithub from "@tabler/icons-preact/dist/esm/icons/IconBrandGithub.mjs";
import IconBrandLinkedin from "@tabler/icons-preact/dist/esm/icons/IconBrandLinkedin.mjs";

const iconStyling = "hover:bg-banner rounded-lg p-2 transition-all ease-in-out";

export default function SocialNav() {
  return (
    <div class="mx-5 text-xl">
      <a
        href="https://github.com/chrizpy"
        target="_blank"
        rel="noopener noreferrer"
        class={iconStyling}
      >
        <IconBrandGithub class="inline w-8 h-8" />
      </a>
      <a
        href="https://www.linkedin.com/in/christoffer-akouri/"
        target="_blank"
        rel="noopener noreferrer"
        class={iconStyling}
      >
        <IconBrandLinkedin class="inline w-8 h-8" />
      </a>
    </div>
  );
}

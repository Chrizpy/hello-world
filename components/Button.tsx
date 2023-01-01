import { HtmlAttributes } from "https://esm.sh/v92/csstype@3.1.0/index.d.ts";
import { tw } from "twind";

interface ButtonProps {
  onClick: any;
  children: string;
}

const buttonStyling =
  "block sm:hidden bg-banner rounded px-2 border border-black border-2";

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      class={tw`${buttonStyling}`}
    >
      {props.children}
    </button>
  );
}

/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface ButtonProps {
  onClick: h.JSX.MouseEventHandler<HTMLButtonElement>;
  children: string;
}

const buttonStyling =
  "block sm:hidden bg-banner rounded px-2 border border-black";

export default function Button(props: ButtonProps): h.JSX.Element {
  return (
    <button
      {...props}
      class={tw`${buttonStyling}`}
    >
      {props.children}
    </button>
  );
}

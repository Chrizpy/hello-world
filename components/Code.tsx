/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

interface CodeProps {
  children: string;
}

const codeStyling = "bg-gray-100 rounded px-2 border";

export default function Code(props: CodeProps): h.JSX.Element {
  return (
    <code
      {...props}
      class={tw`${codeStyling}`}
    >
      {props.children}
    </code>
  );
}

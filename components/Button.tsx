interface ButtonProps {
  onClick: any;
  children: string;
  class: string;
}

const buttonStyling =
  "bg-banner rounded px-2 border border-black border-2";

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      class={buttonStyling + " " + props.class}
    >
      {props.children}
    </button>
  );
}

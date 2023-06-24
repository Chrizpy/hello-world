interface ButtonProps {
  onClick: any;
  children: string;
  class: string;
}

const buttonStyling = "bg-banner rounded px-2 border-2 border-black";

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

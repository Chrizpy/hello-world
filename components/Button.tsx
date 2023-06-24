interface ButtonProps {
  onClick: any;
  children: string;
}

const buttonStyling =
  "block tablet:hidden bg-banner rounded px-2 border border-black border-2";

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      class={buttonStyling}
    >
      {props.children}
    </button>
  );
}

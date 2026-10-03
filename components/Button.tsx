import type { ComponentChildren, JSX } from "preact";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ComponentChildren;
  class?: string;
}

const buttonStyling = "bg-banner rounded px-2 border-2 border-black";

export default function Button(props: ButtonProps) {
  const { children, class: className = "", ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      class={`${buttonStyling} ${className}`.trim()}
    >
      {children}
    </button>
  );
}

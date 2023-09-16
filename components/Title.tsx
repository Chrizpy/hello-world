import { ComponentChildren } from "preact";

type HeaderStyle = "h1" | "h2" | "h3" | "h4";

interface TitleProps {
  headerStyle: HeaderStyle;
  class?: string;
  children: string;
}

const stylingBase = "font-nanum text-gray-800";

const textSizeStyling = (headerStyle: HeaderStyle) => {
  switch (headerStyle) {
    case "h1":
      return "text-5xl";
    case "h2":
      return "text-4xl";
    case "h3":
      return "text-2xl";
    case "h4":
      return "text-md";
    default:
      return "text-xl";
  }
};

const addExternalStyling = (styling: string | undefined) => {
  return styling ? styling : "";
};

export default function Title(props: TitleProps) {
  return (
    <>
      <p
        className={stylingBase + " " + textSizeStyling(props.headerStyle) +
          " " + addExternalStyling(props.class)}
      >
        {props.children}
      </p>
    </>
  );
}

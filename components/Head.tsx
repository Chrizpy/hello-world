/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Head() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap"
        rel="stylesheet"
      >
      </link>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      >
      </link>

      <div id="banner">
        <img src="./svg/drawing.svg" class={tw`block mx-auto`}></img>
      </div>
    </div>
  );
}

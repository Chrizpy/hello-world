/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import CollapseButton from "../islands/CollapseButton.tsx";

interface Route {
  path: string;
  value: string;
}

function formatRoute(route: string): string {
  if (route === "/") {
    return "Home";
  } else {
    route = route.replace("-", " ")
      .replace("/", "")
      .toLowerCase();

    return route.charAt(0).toUpperCase() + route.slice(1);
  }
}

function initiateRoutes(routes: string[]): Route[] {
  return routes.map((route) => ({
    path: route,
    value: formatRoute(route),
  }));
}

const anchorStyling =
  "p-1 hover:bg-banner rounded-lg transition-all ease-in-out";
const routes = [
  "/",
  "/about",
  "/tech-used",
  "/cv",
  "/my-projects",
  "/open-source",
  "conferences",
];

function createLinks(): h.JSX.Element[] {
  return initiateRoutes(routes).map((route) => (
    <li>
      <a
        class={tw`${anchorStyling}`}
        href={route.path}
      >
        {route.value}
      </a>
    </li>
  ));
}

export default function Navigation(): h.JSX.Element {
  return (
    <div class={tw`text-center text-2xl content-center `}>
      <CollapseButton target="navCollapse" />

      <nav class={tw`hidden sm:block`} id="navCollapse">
        <ul>
          {createLinks()}
        </ul>
      </nav>
    </div>
  );
}

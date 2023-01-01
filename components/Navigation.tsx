import { tw } from "twind";

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
  "block md:w-28 p-1 m-1 rounded-lg hover:bg-banner bg-white transition-all ease-in-out";
const routes = [
  "/",
  "/about",
  "/tech-used",
  "/cv",
  "/my-projects",
  "/open-source",
  "conferences",
];

function createLinks() {
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

export default function Navigation() {
  return (
    <div class="text-center text-2xl content-center ">
      <CollapseButton target="navCollapse" />

      <nav class="hidden sm:block" id="navCollapse">
        <ul>
          {createLinks()}
        </ul>
      </nav>
    </div>
  );
}

import CollapseButton from "../islands/CollapseButton.tsx";

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

interface RouteInformation {
  path: string;
  enabled: boolean;
}

const anchorStyling =
  "block p-1 m-1 rounded-lg hover:bg-banner transition-all ease-in-out";
const routes: RouteInformation[] = [
  { path: "/", enabled: true },
  { path: "/about", enabled: true },
  { path: "/tech-used", enabled: true },
  { path: "/cv", enabled: true },
  { path: "/my-projects", enabled: false },
  { path: "/open-source", enabled: true },
  { path: "conferences", enabled: false },
];

function createLinks() {
  return routes
    .filter((route) => route.enabled)
    .map((route) => (
      <li key={route.path}>
        <a
          className={anchorStyling}
          href={route.path}
        >
          {formatRoute(route.path)}
        </a>
      </li>
    ));
}

export default function Navigation() {
  return (
    <div class="text-center text-2xl content-center">
      <CollapseButton target="navCollapse" />

      <nav
        class="max-h-0 tablet:max-h-full w-1/2 mx-auto overflow-hidden transition-all"
        id="navCollapse"
      >
        <ul>
          {createLinks()}
        </ul>
      </nav>
    </div>
  );
}

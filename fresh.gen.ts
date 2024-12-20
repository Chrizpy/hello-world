// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $_middleware from "./routes/_middleware.tsx";
import * as $about from "./routes/about.tsx";
import * as $conferences from "./routes/conferences.tsx";
import * as $cv from "./routes/cv.tsx";
import * as $index from "./routes/index.tsx";
import * as $my_projects from "./routes/my-projects.tsx";
import * as $open_source from "./routes/open-source.tsx";
import * as $tech_used from "./routes/tech-used.tsx";
import * as $CollapseButton from "./islands/CollapseButton.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.tsx": $_middleware,
    "./routes/about.tsx": $about,
    "./routes/conferences.tsx": $conferences,
    "./routes/cv.tsx": $cv,
    "./routes/index.tsx": $index,
    "./routes/my-projects.tsx": $my_projects,
    "./routes/open-source.tsx": $open_source,
    "./routes/tech-used.tsx": $tech_used,
  },
  islands: {
    "./islands/CollapseButton.tsx": $CollapseButton,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;

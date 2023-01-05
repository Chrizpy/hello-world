// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_middleware.tsx";
import * as $1 from "./routes/about.tsx";
import * as $2 from "./routes/conferences.tsx";
import * as $3 from "./routes/cv.tsx";
import * as $4 from "./routes/index.tsx";
import * as $5 from "./routes/my-projects.tsx";
import * as $6 from "./routes/open-source.tsx";
import * as $7 from "./routes/tech-used.tsx";
import * as $$0 from "./islands/CollapseButton.tsx";

const manifest = {
  routes: {
    "./routes/_middleware.tsx": $0,
    "./routes/about.tsx": $1,
    "./routes/conferences.tsx": $2,
    "./routes/cv.tsx": $3,
    "./routes/index.tsx": $4,
    "./routes/my-projects.tsx": $5,
    "./routes/open-source.tsx": $6,
    "./routes/tech-used.tsx": $7,
  },
  islands: {
    "./islands/CollapseButton.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;

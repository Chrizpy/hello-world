import { AppProps } from "$fresh/server.ts";
import { Partial } from "$fresh/src/runtime/Partial.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>hello-world</title>
      </head>
      <body f-client-nav class="overflow-y-scroll">
        <Component />
      </body>
    </html>
  );
}

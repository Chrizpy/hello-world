import type { PageProps } from "fresh";

export default function App({ Component }: PageProps) {
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

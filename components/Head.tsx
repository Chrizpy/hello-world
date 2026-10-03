export default function Head() {
  const bannerAnimationId = crypto.randomUUID();

  return (
    <div>
      <link
        href="/css/index.css"
        rel="stylesheet"
      >
      </link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap"
        rel="stylesheet"
      >
      </link>
      <div id="banner" class="w-max-width">
        <object
          type="image/svg+xml"
          data={`/svg/drawing.svg?animation=${bannerAnimationId}`}
          class="block mx-auto w-full tablet:w-1/2 laptop:w-8/12 desktop:w-auto h-auto"
          aria-label="Hello! I'm Christoffer banner"
        >
        </object>
      </div>
    </div>
  );
}

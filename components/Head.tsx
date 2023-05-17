export default function Head() {
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
        <img
          src="/svg/drawing.svg"
          class="block mx-auto w-auto tablet:w-1/2 laptop:w-8/12 desktop:w-auto"
        >
        </img>
      </div>
    </div>
  );
}

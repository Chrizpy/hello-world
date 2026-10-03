export default function Banner() {
  return (
    <div id="banner" class="w-max-width">
      <object
        type="image/svg+xml"
        data="/svg/drawing.svg"
        class="block mx-auto w-full tablet:w-1/2 laptop:w-8/12 desktop:w-auto h-auto"
        aria-label="Hello! I'm Christoffer banner"
      >
      </object>
    </div>
  );
}

import { tw } from "twind";

interface ThumbnailProps {
  title: string;
  date: Date;
  children: string;
  route: string;
}

const cardStyling =
  "transition ease-in-out hover:scale-105 p-5 rounded-lg border border-black col-span-3 lg:col-span-1";
const h1Styling = "text-4xl min-h-[5rem] lg:min-h-[6rem]"; // min-h-14 //
const summaryTextStyling = "min-h-[7rem] lg:min-h-[8rem]"; // min-h-[8rem]
const dateStyling = "text-2xl mt-2";

export default function Code(props: ThumbnailProps) {
  return (
    <a
      class={tw`${cardStyling}`}
      href={ "/blog/" + props.route }
    >
      <h1 class={tw`${h1Styling}`}>{props.title}</h1>
      <article>
        <p class={tw`${summaryTextStyling}`}>{props.children}</p>
      </article>
      <p class={tw`${dateStyling}`}>{props.date.toLocaleDateString()}</p>
    </a>
  );
}

import { ComponentChildren } from "preact";

interface CvProps {
  start: string;
  end: string;
  image: string;
  title: string;
  subTitle: string;
  children: ComponentChildren;
}

export default function CvCard(props: CvProps) {
  return (
    <div class="mt-5 grid border-2 border-dashed border-black rounded-lg divide-y-2 divide-dashed divide-black transition ease-in-out hover:scale-95 tablet:grid-cols-4 tablet:divide-y-0 tablet:divide-x-2">
      <div class="p-3 grid grid-cols-3 tablet:grid-cols-none">
        <p class="text-md col-span-2 tablet:col-span-none">
          {props.start} - {props.end}
        </p>

        <img
          src={props.image}
          class="p-5 mx-auto"
        >
        </img>
      </div>

      <div class="p-3 tablet:col-span-3">
        <p class="text-4xl">
          {props.title}
        </p>

        <p class="text-xl mb-5">
          {props.subTitle}
        </p>

        <p class="text-xl">
          {props.children}
        </p>
      </div>
    </div>
  );
}

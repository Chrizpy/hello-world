import { ComponentChildren } from "preact";
import Title from "./Title.tsx";

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
    <div class="mt-5 grid border-2 border-dashed border-gray-400 rounded-lg divide-y-2 divide-dashed divide-gray-400 transition ease-in-out hover:scale-95 tablet:grid-cols-4 tablet:divide-y-0 tablet:divide-x-2">
      <div class="p-5 grid grid-cols-3 tablet:grid-cols-none">
        <p class="text-sm col-span-2 tablet:col-span-1">
          {props.start + " - " + props.end}
        </p>

        <img
          src={props.image}
          class="p-5"
        >
        </img>
      </div>

      <div class="p-5 tablet:col-span-3">
        <Title headerStyle="h2">
          {props.title}
        </Title>

        <p>
          {props.subTitle}
        </p>

        <p class="mt-5">
          {props.children}
        </p>
      </div>
    </div>
  );
}

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
    <div class="mt-5 transition ease-in-out laptop:hover:scale-95 border-2 border-dashed border-gray-400 rounded-lg divide-y-2 divide-dashed divide-gray-400">
      <div class="grid grid-cols-3 p-5 ">
        <div class="col-span-2">
          <Title headerStyle="h2">
            {props.title}
          </Title>
          <p>
            {props.start + " - " + props.end}
          </p>
          <p>
            {props.subTitle}
          </p>
        </div>

        <div class="col-span-1">
          <img
            src={props.image}
            class="w-2/3 float-right"
          >
          </img>
        </div>
      </div>

      <div class="px-5 pb-5">
        <div class="divide-2 divide-dashed divide-gray-400">
          <p class="mt-5">
            {props.children}
          </p>
        </div>
      </div>
    </div>
  );
}

/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";

import Button from "../components/Button.tsx";

interface CollapseButtonProps {
  target: string;
}

function manipulateTarget(target: string, state: boolean) {
  const targetElement = document.getElementById(target);
  const targetElementClasses = targetElement?.classList;

  if (state) {
    targetElementClasses?.add("block");
    targetElementClasses?.remove("hidden");
  } else {
    targetElementClasses?.add("hidden");
    targetElementClasses?.remove("block");
  }
}

export default function CollapseButton(
  props: CollapseButtonProps,
): h.JSX.Element {
  const [state, setState] = useState(true);
  const switchCollapseState = () => {
    setState(!state);

    manipulateTarget(props.target, state);
  };

  return (
    <div>
      <Button
        onClick={() => switchCollapseState()}
      >
        . . .
      </Button>
    </div>
  );
}

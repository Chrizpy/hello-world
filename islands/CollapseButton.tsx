import { useState } from "preact/hooks";

import Button from "../components/Button.tsx";

interface CollapseButtonProps {
  target: string;
}

function manipulateTarget(target: string, state: boolean) {
  const targetElement = document.getElementById(target);

  if (targetElement) {
    targetElement.style.maxHeight = state
      ? targetElement.scrollHeight + "px"
      : "0";
  }
}

export default function CollapseButton(
  props: CollapseButtonProps,
) {
  const [state, setState] = useState(true);
  const switchCollapseState = () => {
    setState(!state);

    manipulateTarget(props.target, state);
  };

  return (
    <div>
      <Button
        onClick={() => switchCollapseState()}
        class="block tablet:hidden"
      >
        . . .
      </Button>
    </div>
  );
}

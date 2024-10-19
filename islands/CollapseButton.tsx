import { useState } from "preact/hooks";
import { ComponentChildren } from "preact";

import Button from "../components/Button.tsx";

const target = "collapseChildren";

interface CollapseButtonProps {
  children: ComponentChildren;
}

function manipulateTarget(state: boolean) {
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

    manipulateTarget(state);
  };

  return (
    <div>
      <div class="tablet:hidden">
        <Button
          onClick={() => {
            switchCollapseState();
          }}
          class="block tablet:hidden"
        >
          . . .
        </Button>
        <div
          onClick={() => {
            switchCollapseState();
          }}
        >
          {props.children}
        </div>
      </div>

      <div>
        {props.children}
      </div>
    </div>
  );
}

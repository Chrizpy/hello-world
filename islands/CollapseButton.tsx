import { useState } from "preact/hooks";
import { ComponentChildren } from "preact";

import Button from "../components/Button.tsx";

interface CollapseButtonProps {
  children: ComponentChildren;
}

export default function CollapseButton(
  props: CollapseButtonProps,
) {
  const [isOpen, setIsOpen] = useState(false);
  const contentStyling =
    "overflow-hidden transition-[max-height] duration-300 ease-in-out tablet:overflow-visible tablet:max-h-full";

  return (
    <div>
      <div class="tablet:hidden">
        <Button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          class="block tablet:hidden"
        >
          . . .
        </Button>
      </div>

      <div
        id="mobile-navigation"
        class={`${contentStyling} ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        {props.children}
      </div>
    </div>
  );
}

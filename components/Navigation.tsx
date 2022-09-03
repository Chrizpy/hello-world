/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const anchorStyling = "p-1 hover:bg-banner rounded-lg transition-all ease-in-out";

export default function Navigation() {
  return (
    <div class={tw`text-center text-2xl content-center `}>
      <nav>
        <ul>
          <li>
            <a
              href="/"
              class={tw`${anchorStyling}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              class={tw`${anchorStyling}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/tech-used"
              class={tw`${anchorStyling}`}
            >
              Tech used
            </a>
          </li>
          <li>
            <a
              href="/cv"
              class={tw`${anchorStyling}`}
            >
              CV
            </a>
          </li>
          <li>---</li>
          <li>
            <a
              href="/my-projects"
              class={tw`${anchorStyling}`}
            >
              My projects
            </a>
          </li>
          <li>
            <a
              href="/open-source"
              class={tw`${anchorStyling}`}
            >
              Open-source contributions
            </a>
          </li>
          <li>
            <a
              href="/conferences"
              class={tw`${anchorStyling}`}
            >
              Conferences I have attended
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

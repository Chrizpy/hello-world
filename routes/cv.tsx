import "./cv.css";
import Page from "../components/Page.tsx";
import Title from "../components/Title.tsx";

export default function Cv() {
  return (
    <Page>
      <header class="cv-intro">
        <p class="cv-intro__eyebrow">A little professional history</p>
        <Title headerStyle="h1">
          Career timeline
        </Title>
        <p class="cv-intro__description">
          My current role at Axis, and the notes that led me here.
        </p>
      </header>

      <ol class="cv-timeline">
        <li class="cv-event cv-event--axis">
          <span
            class="cv-event__marker cv-event__marker--current"
            aria-hidden="true"
          />
          <div class="cv-event__date">
            <time datetime="2023-09">Sep 2023</time>
            <span class="cv-event__date-separator" aria-hidden="true" />
            <span>Present</span>
          </div>
          <article class="cv-event__paper cv-note cv-note--current">
            <span class="cv-note__pin" aria-hidden="true" />
            <header class="cv-event__header">
              <div>
                <div class="cv-event__meta">
                  <span class="cv-event__category">Work</span>
                </div>
                <h2 class="cv-event__title">Axis Communications</h2>
                <p class="cv-event__role">Experienced Software Engineer</p>
              </div>
              <img
                src="./svg/axis.svg"
                alt=""
                class="cv-event__logo"
                loading="lazy"
              />
            </header>
            <p class="cv-event__description">
              At Axis I joined a team working with{" "}
              <a
                href="https://www.axis.com/solutions/body-worn-solutions"
                class="cv-event__link"
              >
                body worn solutions
              </a>.
            </p>
          </article>
        </li>

        <li class="cv-event cv-event--twingly">
          <span class="cv-event__marker" aria-hidden="true" />
          <div class="cv-event__date">
            <time datetime="2020-09">Sep 2020</time>
            <span class="cv-event__date-separator" aria-hidden="true" />
            <time datetime="2023-09">Sep 2023</time>
          </div>
          <article class="cv-event__paper cv-note">
            <span class="cv-note__pin" aria-hidden="true" />
            <header class="cv-event__header">
              <div>
                <div class="cv-event__meta">
                  <span class="cv-event__category">Work</span>
                </div>
                <h2 class="cv-event__title">Twingly</h2>
                <p class="cv-event__role">System Developer</p>
              </div>
              <img
                src="./img/twingly-transparent.png"
                alt=""
                class="cv-event__logo"
                loading="lazy"
              />
            </header>
            <p class="cv-event__description">
              In a small team, I worked across system operations, customer
              features, internal tooling, and research and development. I also
              collaborated with the team to help shape our direction.
            </p>
          </article>
        </li>

        <li class="cv-event cv-event--education">
          <span class="cv-event__marker" aria-hidden="true" />
          <div class="cv-event__date">
            <time datetime="2017-09">Sep 2017</time>
            <span class="cv-event__date-separator" aria-hidden="true" />
            <time datetime="2020-06">Jun 2020</time>
          </div>
          <article class="cv-event__paper cv-note">
            <span class="cv-note__pin" aria-hidden="true" />
            <header class="cv-event__header">
              <div>
                <div class="cv-event__meta">
                  <span class="cv-event__category">Education</span>
                </div>
                <h2 class="cv-event__title">Linköpings Universitet</h2>
                <p class="cv-event__role">
                  Bachelor in Computer Science and Engineering
                </p>
              </div>
              <img
                src="./img/linkopings-universitet.png"
                alt=""
                class="cv-event__logo"
                loading="lazy"
              />
            </header>
            <p class="cv-event__description">
              I pursued computer science at Linköping University, where I built
              a strong foundation for my career.
            </p>
          </article>

          <ol class="cv-subtimeline" aria-label="Experiences during my degree">
            <li class="cv-sub-event cv-sub-event--exchange">
              <span class="cv-sub-event__marker" aria-hidden="true" />
              <div class="cv-sub-event__date">
                <time datetime="2019-09">Sep 2019</time>
                <span aria-hidden="true">—</span>
                <time datetime="2019-12">Dec 2019</time>
              </div>
              <article class="cv-sub-event__paper cv-note cv-note--nested">
                <span class="cv-note__pin" aria-hidden="true" />
                <header class="cv-sub-event__header">
                  <div>
                    <span class="cv-event__category">Exchange</span>
                    <h3 class="cv-sub-event__title">University of Limerick</h3>
                    <p class="cv-sub-event__description">
                      I spent three months in Ireland studying Computer
                      Engineering as part of the Erasmus exchange program.
                    </p>
                  </div>
                  <img
                    src="./img/university-of-limerick.png"
                    alt=""
                    class="cv-sub-event__logo"
                    loading="lazy"
                  />
                </header>
              </article>
            </li>

            <li class="cv-sub-event cv-sub-event--teaching">
              <span class="cv-sub-event__marker" aria-hidden="true" />
              <div class="cv-sub-event__date">
                <time datetime="2019-04">Apr 2019</time>
              </div>
              <article class="cv-sub-event__paper cv-note cv-note--nested">
                <span class="cv-note__pin" aria-hidden="true" />
                <span class="cv-event__category">Teaching</span>
                <h3 class="cv-sub-event__title">Course Assistant</h3>
                <p class="cv-sub-event__description">
                  I assisted with embedded programming labs, where students
                  wrote their assignments in assembly.
                </p>
              </article>
            </li>
          </ol>
        </li>
      </ol>
    </Page>
  );
}

import Page from "../components/Page.tsx";
import CvCard from "../components/CvCard.tsx";
import Title from "../components/Title.tsx";

export default function Cv() {
  return (
    <>
      <Page>
        <Title headerStyle="h1">
          Work experience!
        </Title>

        <div>
          <CvCard
            start="Sep 2023"
            end="present"
            image="./svg/axis.svg"
            title="Axis Communications"
            subTitle="Experienced Software Engineer"
          >
            At Axis I joined a team that works with{" "}
            <a
              class="text-blue-600 visited:text-purple-600"
              href="https://www.axis.com/solutions/body-worn-solutions"
            >
              body worn solutions
            </a>.
          </CvCard>

          <CvCard
            start="Sep 2020"
            end="Sep 2023"
            image="./img/twingly-transparent.png"
            title="Twingly"
            subTitle="System Developer"
          >
            In my role at Twingly, I had the unique opportunity to contribute to
            multiple areas due to our smaller team size. I take on a range of
            responsibilities, including ensuring the smooth operation of our
            systems, developing new features for both our customers and internal
            tooling, and actively participating in research and development
            efforts. By collaborating with the team, I take an active role in
            determining our future steps and direction.
          </CvCard>

          <CvCard
            start="Apr 2019"
            end="Apr 2019"
            image="./img/linkopings-universitet.png"
            title="Linköpings Universitet"
            subTitle="Course Assistant"
          >
            I worked as an assistant to the teacher during labs in courses that
            leaned towards embedded programming. These labs were very low level
            since all assignments required students to write their code in
            assembly. Both the labs and the course in general were really great,
            as they provided a better sense of respect for the computer and a
            deeper understanding of how applications function in everyday life.
          </CvCard>
        </div>

        <div class="mt-5">
          <Title headerStyle="h1">
            Education
          </Title>

          <CvCard
            start="Sep 2017"
            end="Jun 2020"
            image="./img/linkopings-universitet.png"
            title="Linköpings Universitet"
            subTitle="Bachelor in Computer Science and Engineering"
          >
            Having discovered my passion for Computer Science during my
            enjoyable high school courses, I knew that I wanted to pursue a
            career in this field. To achieve this goal, I made the decision to
            attend university. After conducting thorough research and receiving
            a recommendation from a close friend, I chose to enroll at Linköping
            University. This educational journey was both exhilarating and
            challenging, as university studies proved to be more demanding than
            anything I had encountered before. However, this experience
            toughened me and equipped me with the necessary skills to become a
            competent employee, or so I believe.
          </CvCard>

          <CvCard
            start="Sep 2019"
            end="Dec 2019"
            image="./img/university-of-limerick.png"
            title="University of Limerick"
            subTitle="Computer Engineering"
          >
            In 2019, I participated in an Erasmus exchange program in Ireland.
            As part of the program, I had the opportunity to study at the
            University of Limerick. I spent three months living in Ireland on my
            own, and it turned out to be an incredibly enjoyable and
            transformative experience.
          </CvCard>
        </div>
      </Page>
    </>
  );
}

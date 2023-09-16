import Page from "../components/Page.tsx";
import Title from "../components/Title.tsx";

function calculateAge(birthdate: Date) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  const month = today.getMonth() - birthDate.getMonth();
  let age = today.getFullYear() - birthDate.getFullYear();

  // Adjust the age if the current month is before the birth month or
  // if it's the birth month and the day has not yet occurred.
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export default function Home() {
  return (
    <>
      <Page>
        <Title headerStyle="h1">
          Welcome to my website!
        </Title>

        <p>
          On this corner of the internet, you get to know me a little bit. :)
        </p>

        <Title headerStyle="h2" class="mt-5">
          So who am I?
        </Title>

        <p>
          I'm a{" "}
          {calculateAge(new Date("1998-05-21"))}-year old Software Engineer from
          Sweden (<span class="inline-block animate-shake">
            &#127480;&#127466;
          </span>). My current role is as an Experienced Software Engineer at
          Axis Communications.
          <a href="https://axis.com" target="_blank">
            <img
              src="./svg/axis.svg"
              class="inline w-16 mx-2"
            >
            </img>
          </a>
        </p>

        <p class="mt-2">
          In my spare time, I enjoy tinkering. I usually like to play with
          things that I don't have the opportunity to work on professionally.
          Examples of this include frontend development (which is why this
          website exists), embedded development with microcontrollers, or
          Raspberry Pi's.
        </p>
      </Page>
    </>
  );
}

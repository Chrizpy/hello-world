import Page from "../components/Page.tsx";

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
    <div>
      <Page>
        <div class="text-5xl lg:text-6xl sm:text-left sm:mt-5">
          <p>Welcome to my website!</p>
        </div>

        <div id="title" class="text-2xl">
          <p class="">
            On this corner of the internet, you get to know me a little bit. :)
          </p>
        </div>

        <div id="title" class="text-2xl font-black mt-5">
          <p>So who am I?</p>
        </div>

        <div id="title" class="text-2xl">
          <p>
            I'm a {calculateAge(new Date("1998-05-21"))}{" "}
            year old Software Engineer from &#127480;&#127466;. I currently work
            as a System Developer at Twingly.
            <a href="https://twingly.com" target="_blank">
              <img
                src="./img/twingly-transparent.png"
                class="inline w-12 mx-2"
              >
              </img>
            </a>
          </p>
          <p class="mt-2">
            In my sparetime I like to tinker. I usually like to play with things
            that I don't have the chance to incorporate at work. Examples of
            this can be frontend development (why this website exists), embedded
            development with microcontrollers or Raspberry Pi's.
          </p>
        </div>
      </Page>
    </div>
  );
}

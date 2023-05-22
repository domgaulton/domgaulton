import HeaderAndFooter from "@/components/HeaderAndFooter";
import Head from "next/head";

export const TECH_LINKS = [
  "HTML",
  "CSS",
  "Next.js",
  "Vercel",
  "Tailwind",
  "Storybook",
  "Github",
  "VSCode",
  "Firebase",
  "AWS",
];

const About = () => {
  return (
    <HeaderAndFooter
      childWrappingTag="article"
      childWrappingClasses="flex h-full flex-col items-center justify-center px-4 dark:bg-black dark:text-white text-center"
    >
      <Head>
        <title>About Dom Gaulton</title>
      </Head>
      <h1 className="text-3xl md:text-4xl mb-8">
        Hi 👋 <br /> I&apos;m Dom Gaulton.
      </h1>
      <h2 className="text-2xl mb-8">
        I&apos;m a senior full stack developer who is currently working at
        Lottie.org
      </h2>

      <p className="text-lg mb-8">
        I pride myself in positioning myself as a central and key contact and
        collaborator in all teams. I have a passion for coding and a drive for
        efficiency, I have dedicated myself to creating efficient and innovative
        solutions for multiple software projects.
      </p>

      <h2 className="text-xl mb-4 font-bold">
        👨‍💻 Tech Stack / Proficiencies 👨‍💻
      </h2>
      <ul className="list-disc mb-12">
        {TECH_LINKS.map((link: string) => {
          return <li key={link}>{link}</li>;
        })}
      </ul>

      <h2 className="text-xl mb-6 font-bold">Useful links</h2>

      <a
        href="https://github.com/domgaulton"
        target="_blank"
        className="text-lg hover:underline flex items-center gap-2 mb-4"
      >
        <span className="h-4 w-4 bg-no-repeat bg-center bg-[url('/svgs/github-000.svg')] dark:bg-[url('/svgs/github-fff.svg')]"></span>
        <p>Github</p>
      </a>
      <a
        href="https://www.linkedin.com/in/dom-gaulton-00503b39/"
        target="_blank"
        className="text-lg hover:underline flex items-center gap-2 mb-4"
      >
        <span className="h-4 w-4 bg-no-repeat bg-center bg-[url('/svgs/linkedin-000.svg')] dark:bg-[url('/svgs/linkedin-fff.svg')]"></span>
        <p>LinkedIn</p>
      </a>
      <a
        href="mailto:hello@domgaulton.tech"
        className="text-lg hover:underline flex items-center gap-2 mb-4"
      >
        <span className="h-4 w-4 bg-no-repeat bg-center bg-[url('/svgs/envelope-000.svg')] dark:bg-[url('/svgs/envelope-fff.svg')]"></span>
        <p>hello@domgaulton.tech</p>
      </a>
    </HeaderAndFooter>
  );
};

export default About;

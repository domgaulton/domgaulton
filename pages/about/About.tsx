import Details from '@/components/Details';
import HeaderAndFooter from '@/components/HeaderAndFooter';
import Head from 'next/head';

export const TECH_LINKS = [
  'React',
  'Typescript',
  'Node',
  'TRPC',
  'Next',
  'Tanstack',
  'Prisma',
  'Clerk',
  'Postgres',
  'SQL',
];

const About = () => {
  return (
    <HeaderAndFooter
      childWrappingTag="article"
      childWrappingClasses="flex h-full flex-col items-center justify-center px-4 dark:bg-black dark:text-white text-center max-w-4xl  mx-auto"
    >
      <Head>
        <title>About Dom Gaulton</title>
      </Head>
      <h1 className="text-3xl md:text-4xl mb-2">Hi, I&apos;m Dom Gaulton.</h1>
      <h2 className="text-2xl mb-8">A South-East London based Developer</h2>

      <Details />

      <h2 className="text-xl mb-4 font-bold">
        👨‍💻 Tech Stack / Proficiencies 👨‍💻
      </h2>
      <ul className="mb-12">
        {TECH_LINKS.map((link: string) => {
          return <li key={link}>{link}</li>;
        })}
      </ul>

      <h2 className="text-xl mb-6 font-bold">Useful links</h2>

      <a
        href="https://github.com/domgaulton"
        target="_blank"
        className="text-lg hover:underline flex items-center gap-2 mb-4"
        rel="noopener"
      >
        <span className="h-4 w-4 bg-no-repeat bg-center bg-[url('/svgs/github-000.svg')] dark:bg-[url('/svgs/github-fff.svg')]"></span>
        <p>Github</p>
      </a>
      <a
        href="https://www.linkedin.com/in/dom-gaulton-00503b39/"
        target="_blank"
        className="text-lg hover:underline flex items-center gap-2 mb-4"
        rel="noopener"
      >
        <span className="h-4 w-4 bg-no-repeat bg-center bg-[url('/svgs/linkedin-000.svg')] dark:bg-[url('/svgs/linkedin-fff.svg')]"></span>
        <p>LinkedIn</p>
      </a>
      <a
        href="mailto:domgaulton@gmail.com"
        className="text-lg hover:underline flex items-center gap-2 mb-4"
      >
        <span className="h-4 w-4 bg-no-repeat bg-center bg-[url('/svgs/envelope-000.svg')] dark:bg-[url('/svgs/envelope-fff.svg')]"></span>
        <p>domgaulton@gmail.com</p>
      </a>
      <a
        href="/documents/dom_gaulton_cv.pdf"
        target="_blank"
        className="text-lg hover:underline flex items-center gap-2 mb-4"
        rel="noopener"
      >
        <span className="h-4 w-4 bg-no-repeat bg-center bg-[url('/svgs/cv-000.svg')] dark:bg-[url('/svgs/cv-fff.svg')]"></span>
        <p>CV</p>
      </a>
    </HeaderAndFooter>
  );
};

export default About;

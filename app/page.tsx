import Details from '@/components/Details';

export const metadata = {
  title: 'domgaulton.tech',
};

export default function Home() {
  return (
    <main className='flex h-full flex-col items-center justify-center px-4 '>
      <div className="bg-[url('/dg-atari.svg')] dark:bg-[url('/dg-atari--dark.svg')] w-36 md:w-48 aspect-video bg-no-repeat bg-center"></div>
      <h1 className="text-4xl md:text-6xl my-8">domgaulton.tech</h1>
      <Details />

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
        href="/documents/dom_gaulton_cv.pdf"
        target="_blank"
        className="text-lg hover:underline flex items-center gap-2"
        rel="noopener"
      >
        <span className="h-4 w-4 bg-no-repeat bg-center bg-[url('/svgs/cv-000.svg')] dark:bg-[url('/svgs/cv-fff.svg')]"></span>
        <p>CV</p>
      </a>
    </main>
  );
}

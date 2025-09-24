import HeaderAndFooter from '@/components/HeaderAndFooter';
import Head from 'next/head';

const Contact = () => {
  return (
    <HeaderAndFooter
      childWrappingTag="article"
      childWrappingClasses="flex h-full flex-col items-center justify-center px-4 dark:bg-black dark:text-white text-center"
    >
      <Head>
        <title>Get In Touch</title>
      </Head>
      <h1 className="text-3xl mb-4">Get in touch</h1>

      <a
        href="mailto:domgaulton@gmail.com"
        className="text-lg hover:underline flex items-center gap-2"
      >
        <span className="h-4 w-4 bg-no-repeat bg-center bg-[url('/svgs/envelope-000.svg')] dark:bg-[url('/svgs/envelope-fff.svg')]"></span>
        <p>domgaulton@gmail.com</p>
      </a>
    </HeaderAndFooter>
  );
};

export default Contact;

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DomGaulton.Tech</title>
        <meta name="description" content={'London based senior full stack developer'} />
      </Head>
      <main className={`flex h-screen flex-col items-center justify-center p-24 dark:bg-black dark:text-white`}>
      <h1 className="text-4xl mb-4">🚀 DomGaulton.Tech</h1>
      <p className="text-xl mb-2">Coming Soon...</p>
      <a href="https://github.com/domgaulton" target="_blank"><p>github.com/domgaulton</p></a>
    </main>
    </>
  )
}

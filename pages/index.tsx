import Head from "next/head";

export default function Home() {
  return (
    <main className={`flex h-screen flex-col items-center justify-center p-4 dark:bg-black dark:text-white`}>
      <h1 className="text-3xl md:text-5xl mb-4">🚀 domgaulton.tech</h1>
      <p className="text-xl md:text-2xl mb-2">Coming Soon...</p>
      <a href="https://github.com/domgaulton" target="_blank"><p>github.com/domgaulton</p></a>
    </main>
  )
}

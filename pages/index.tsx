export default function Home() {
  return (
    <main className={`flex h-screen flex-col items-center justify-center p-4 dark:bg-black dark:text-white`}>
      <div className="bg-[url('/dg-atari.svg')] dark:bg-[url('/dg-atari--dark.svg')] w-36 md:w-48 aspect-video bg-no-repeat bg-center"></div>
      <h1 className="text-4xl md:text-6xl my-8">domgaulton.tech</h1>
      <p className="text-xl md:text-2xl mb-2">🚀 Coming Soon...</p>
      <a href="https://github.com/domgaulton" target="_blank"><p>github.com/domgaulton</p></a>
    </main>
  )
}

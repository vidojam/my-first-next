import Hero from "./Hero"

export const metedata = {
  title: "Um...Whatev",
  description: "This is custom metadata for this route"
}

export default function Page() {
  return (
    <main className="p-8">
      <Hero />
      <h1 className=" font-bold text-2xl">Whatev</h1>
      <p>Route in Next.js are too easy.</p>
    </main>
  )
}
import { Header, NavBar } from "@/components";

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-900">
      <NavBar />
      <main className="border flex flex-col justify-center bg-white dark:bg-zinc-900 px-8 text-gray-900 dark:text-gray-100 antialiased">
        <Header />
      </main>
    </div>
  );
}

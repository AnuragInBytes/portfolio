import Link from "next/link";
import HighlightedText from "./HighlightedText";
import ProjectText from "./ProjectText";
import Image from "next/image";

export default function Header() {
  return(
    <div className="flex flex-col justify-center items-start max-w-2xl w-full mx-auto mb-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10">
        <div className="flex md:w-3/4 flex-col mt-6">
          <Link href='https://x.com/anuragmeranaam'>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">Anurag Poddar</h1>
          </Link>
          <div className="relative leading-7 items-center flex-wrap text-zinc-700 dark:text-zinc-400 mb-5">
            Building <ProjectText link="https://github.com/anuraginbytes" text="StreamSync" />, <ProjectText text="ChronoGit" link="https://github.com/anuraginbytes" /> and other <HighlightedText link="https://github.com/anuraginbytes" text="cool things" />
          </div>
          <p className="text-zinc-600 dark:text-zinc-500">Full Stack Developer building SaaS products and web apps. Follow my growth stories on <HighlightedText link="https://x.com/anuragmeranaam" text="x" /> and <HighlightedText link="https://linkedin.com/in/anurag-poddar-dev" text="LinkedIn" />. </p>
        </div>
        <div className="relative flex-shrink-1 p-4 md:p-4 md:order-last order-first">
          <Link className="block z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5 relative bg-white h-20 w-20" href='https://x.com/anuragmeranaam'>
            <Image src='/HD-profile.jpeg' alt="Profile image" width="200" height="200" />
          </Link>
        </div>
      </div>
    </div>
  );
}
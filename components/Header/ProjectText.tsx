import Link from "next/link";

interface MyComponentProp {
  text: string,
  link: string
}
export default function ProjectText({ text, link }: MyComponentProp) {
  return (
    <Link href={link} target="_blank" className="inline-block px-2 py-0 font-bold bg-gray-100 dark:bg-zinc-700 dark:text-white  mx-1">{text}</Link>
  );
}
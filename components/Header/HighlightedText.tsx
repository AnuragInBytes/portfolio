import Link from "next/link";

interface HighlightedTextProp {
  text: string,
  link: string
}
export default function HighlightedText({ text, link }: HighlightedTextProp) {
  return (
    <span className="font-bold cursor-pointer text-zinc-800 dark:text-zinc-200">
      <Link href={link}>{text}</Link>
    </span>
  );
}
interface HighlightedTextType {
  text: string
}

export default function HighlightedText({ text }: HighlightedTextType) {
  return (
    <span className="font-bold cursor-pointer text-zinc-800 dark:text-zinc-200">
      {text}
    </span>
  )
}
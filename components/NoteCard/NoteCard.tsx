import { NoteType } from '@/lib/types';
import Link from 'next/link';

export default function NoteCard(note: NoteType) {
  return (
    <Link href={note.url}>
      <article className="inline-block px-4 py-3 text-base border shadow-sm block-bg border-blockBorderColorLight dark:border-blockBorderColorDark rounded-xl">
        <h2>{note.title}</h2>
      </article>
    </Link>
  )
}

import NotesList from '@/components/NotesList/NotesList';
import { getPosts } from '@/lib/getPosts';

export default async function Notes() {
  const notes = await getPosts('notes');

  return (
    <>
      <h1 className="block-title">Заметки</h1>
      <NotesList posts={notes} />
    </>
  );
}

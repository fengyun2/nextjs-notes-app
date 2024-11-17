import { getNote } from '@/core/services/note';
import { notFound } from 'next/navigation';
import { unstable_cache } from 'next/cache';
import EditNoteForm from './components/EditNoteForm'

const fetchNote = async (id: string) => {
  const note = await unstable_cache(getNote, [`note-details/${id}`], { tags: ['note-details', `note-details/${id}`] })({
    id,
  });
  if (!note) {
    return notFound();
  }
  return note;
};

export default async function EditNotePage(props: { params: Promise<{ noteId: string }> }) {
  const params = await props.params;
  const noteId = params.noteId;
  const note = await fetchNote(noteId);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{note.title}</h1>
      <EditNoteForm note={note} />
    </div>
  );
}

import { getNotes } from '@/core/services/note';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import NotesList from './components/NoteList';
import type { QueryParams } from '@/core/entities/note';
import { unstable_cache } from 'next/cache';

export default async function NotesPage(props: {
  searchParams?: Promise<{
    search?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams
  const page = Number(searchParams?.page) || 1;
  const search = searchParams?.search || '';
  const { notes, total } = await fetchNotes({ page, search, limit: 5 });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Notes</h1>
      <div className="mb-4">
        <Link href="/notes/create">
          <Button>Create New Note</Button>
        </Link>
      </div>
      <NotesList notes={notes} total={total} currentPage={page} search={search} />
    </div>
  );
}

async function fetchNotes(params: QueryParams) {
  return await unstable_cache(getNotes, ['notes'], { tags: ['notes'] })({ ...params });
}

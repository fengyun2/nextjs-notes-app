'use server'

import { type NoteWhere, WhereNoteSchema } from '@/core/entities/note'
import { deleteNote } from '@/core/services/note'
import { revalidateTag } from 'next/cache'

export async function deleteNoteAction(whereRaw: NoteWhere) {
  const { data, error} = await WhereNoteSchema.safeParseAsync(whereRaw)
  if (error) {
    throw new Error(error.message)
  }
  await deleteNote(data)
  revalidateTag('notes')
  revalidateTag(`note-details/${data.id}`)
}
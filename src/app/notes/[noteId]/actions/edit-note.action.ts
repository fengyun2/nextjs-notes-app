'use server'

import { type NoteWhere, type NoteUpdate, UpdateNoteSchema} from '@/core/entities/note'
import { updateNote } from '@/core/services/note'
import {revalidateTag} from 'next/cache'

export async function updateNoteAction(whereRaw: NoteWhere,rawNote: NoteUpdate) {
  const {data, error} = await UpdateNoteSchema.safeParseAsync(rawNote)
  if (error) {
    throw new Error(error.message)
  }
  await updateNote(whereRaw, data)
  revalidateTag('notes')
  revalidateTag(`note-details/${whereRaw.id}`)
}
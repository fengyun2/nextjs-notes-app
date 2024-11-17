"use server"

import type { NoteInsert } from '@/core/entities/note'
import { InsertNoteSchema } from '@/core/entities/note'
import {createNote} from '@/core/services/note'
import { revalidateTag } from 'next/cache'

export async function createNoteAction(rawNote: NoteInsert) {
  const {data, error} = await InsertNoteSchema.safeParseAsync(rawNote)
  if (error) {
    throw new Error(error.message)
  }
  await createNote(data)
  revalidateTag('notes')
}
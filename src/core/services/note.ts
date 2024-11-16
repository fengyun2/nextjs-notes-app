import { notes } from "@/db";
import type { Note, NoteInsert, NoteWhere, NoteUpdate, QueryParams } from "@/core/entities/note";
import { nanoid } from 'nanoid'
import { sleep } from "@/lib/utils";

interface NotesSummary {
  totalNotes: number;
  notesThisWeek: number;
  notesThisMonth: number;
}

export async function createNote(data: NoteInsert) {
  const id = nanoid(2);
  await sleep()
  notes.unshift({ ...data, id, createdAt: new Date() })
  console.log("新增一条笔记: ", data, notes)
}

export async function updateNote({ id }: NoteWhere, data: NoteUpdate) {
  const noteIndex = notes.findIndex(note => note.id === id)
  if (noteIndex < 0) {
    throw new Error('Note not found')
  }
  await sleep()
  notes[noteIndex] = { ...notes[noteIndex], ...data }
  console.log("更新一条笔记: ", data, notes)
}

export async function deleteNote({ id }: NoteWhere) {
  const noteIndex = notes.findIndex(note => note.id === id)
  if (noteIndex < 0) {
    throw new Error('Note not found')
  }
  await sleep()
  notes.splice(noteIndex, 1)
}

export async function getNotes({ page = 1, limit = 10, search }: QueryParams): Promise<{ notes: Note[]; total: number }> {
  const start = (page - 1) * limit
  const end = start + limit
  await sleep()
  return {
    notes: notes
      .filter(
        (n) =>
          !search ||
          n.title.toLowerCase().includes(search.toLowerCase()) ||
          n.content.toLowerCase().includes(search.toLowerCase()),
      )
      .slice(start, end),
    total: notes.length
  }
}

export async function getNote({id}: NoteWhere): Promise<Note> {
  await sleep()
  const note =  notes.find(note => note.id === id)
  if (!note) {
    throw new Error('Note not found')
  }
  return note
}

export async function getNotesSummary(): Promise<NotesSummary> {
  const now = new Date();
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const notesThisWeek = notes.filter(
    (note) => note.createdAt >= oneWeekAgo,
  ).length;
  const notesThisMonth = notes.filter(
    (note) => note.createdAt >= oneMonthAgo,
  ).length;

  await sleep();

  return {
    totalNotes: notes.length,
    notesThisWeek,
    notesThisMonth,
  };
}

export async function getRandomNote(): Promise<Note> {
  await sleep()
  return notes[Math.floor(Math.random() * notes.length)]
}
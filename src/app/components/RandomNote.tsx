import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { getRandomNote } from '@/core/services/note'

export default async function RandomNote() {
  const note = await getRandomNote()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-gray-600 line-clamp-2'>{note.content}</p>
        <p className='text-sm text-gray-400 mt-2'>
          Created: {new Date(note.createdAt).toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
  )
}
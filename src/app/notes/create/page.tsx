import CreateNoteForm from "./components/CreateNoteForm";

export default function CreateNotePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Note</h1>
      <CreateNoteForm />
    </div>
  );
}
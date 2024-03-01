function NoteList({ notes, sortBy, onDeleteNotes, onCompletedNotes }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let sortedNotes = notes;
  if (sortBy === "earliest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }
  if (sortBy === "latest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }
  if (sortBy === "completed") {
    sortedNotes = [...notes].sort(
      (a, b) => Number(b.completed) - Number(a.completed)
    );
  }

  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDeleteNotes={onDeleteNotes}
          onCompletedNotes={onCompletedNotes}
        />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onDeleteNotes, onCompletedNotes }) {
  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDeleteNotes(note.id)}>❌</button>
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            checked={note.completed}
            onChange={onCompletedNotes}
          />
        </div>
      </div>
      <p className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US")}
      </p>
    </div>
  );
}

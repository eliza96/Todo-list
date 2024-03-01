import { useState } from "react";

function NoteHeader({ notes, sortBy, onSort }) {
 
  return (
    <div className="note-header">
      <h1>My Notes ({notes.length})</h1>
      <select value={sortBy} onChange={onSort}>
        <option value="earliest">Sort by earliest notes</option>
        <option value="latest">Sort by latest notes</option>
        <option value="completed">Sort by completed notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;

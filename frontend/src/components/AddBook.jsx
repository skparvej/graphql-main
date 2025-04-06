import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_BOOK, GET_BOOKS } from "../queries.js";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [authorId, setAuthorId] = useState("");

  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ variables: { id: Date.now().toString(), title, authorId } });
    setTitle("");
    setAuthorId("");
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title" />
        <input value={authorId} onChange={(e) => setAuthorId(e.target.value)} placeholder="Author ID" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;

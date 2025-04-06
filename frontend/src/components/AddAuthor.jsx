import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_AUTHOR } from "../queries";

const AddAuthor = () => {
  const [authorId, setAuthorId] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [addAuthor, { loading, error }] = useMutation(ADD_AUTHOR);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!authorId || !authorName) return alert("Please enter all fields!");

    try {
      await addAuthor({ variables: { id: authorId, name: authorName } });
      alert("Author added successfully!");
      setAuthorId("");
      setAuthorName("");
    } catch (err) {
      console.error("Error adding author:", err);
    }
  };

  return (
    <div>
      <h2>Add Author</h2>
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
            placeholder="Author ID"
            required
          />
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Author Name"
            required
          />
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Author"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
};

export default AddAuthor;

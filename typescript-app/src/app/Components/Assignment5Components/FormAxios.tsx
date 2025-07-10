// 7. Create a Component in Next.js that renders a form allowing the user to input data, such as a post title and content.
// On form submission, use Axios to send a POST request to a public API endpoint, submitting the user's input data.
// Handle success and error states appropriately in the UI.
"use client";

import axios from "axios";
import React, { useState } from "react";

function FormAxios() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function TitleHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function ContentHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value);
  }

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const rus = {
        title: title,
        content: content,
      };
      await axios.post("https://jsonplaceholder.typicode.com/posts", rus);
      console.log(rus);
      alert("done");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="post title"
          value={title}
          onChange={TitleHandler}
          name="post-title"
        />

        <input
          type="text"
          placeholder="content"
          value={content}
          onChange={ContentHandler}
          name="content"
        />
        <button type="submit">sendddd</button>
      </form>
    </div>
  );
}

export default FormAxios;

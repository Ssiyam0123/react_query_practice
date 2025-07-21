"use client";

import { postPost } from "@/functions/fetch-data";
import { useState } from "react";
import { toast } from "react-toastify";

export default function FormComponent() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(title, body);
    const sentData = {
      title,
      body,
    };
    const res = await postPost(sentData);
    console.log(res);
    if (res?._id) {
      toast.success("post added successfully");
      setTitle("");
      setBody("");
    } else {
      return toast.error("error while posting a post");
    }
  };
  return (
    <div className="w-[80%] mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-2.5">
        <div>
          <span>title:</span>
          <input
            type="text"
            placeholder="enter your title"
            className="border-2 p-2 rounded-2xl ml-5"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <span>body:</span>
          <input
            type="text"
            placeholder="enter your description"
            className="border-2 p-2 rounded-2xl ml-5"
            value={title}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="border-2 p-2 rounded-2xl cursor-pointer"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

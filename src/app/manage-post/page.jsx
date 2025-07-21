"use client";

import useAllPost, {
  useDeletePost,
  useUpdatePost,
} from "@/functions/tns-AllPost";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ManagePost() {
  const [title, setTitle] = useState("");
  const [desdcription, setDesdcription] = useState("");
  const { data, refetch } = useAllPost();
  const updateMutation = useUpdatePost();
  const deletePostMutation = useDeletePost();
  console.log(data);

  const handleUpdate = (id) => {
    console.log(id);
    const body = {
      title,
      desdcription,
    };

    updateMutation.mutate(
      { id, body },
      {
        onSuccess: () => {
          toast.success("post updated");
          refetch();
        },
      }
    );
  };

const handleDelete = (id) => {
  console.log(id);
  deletePostMutation.mutate(
    { id },
    {
      onSuccess: () => {
        toast.success("Post deleted successfully");
        refetch();
      },
      onError: (error) => {
        console.error("Delete failed:", error);
        toast.error("Failed to delete post");
      },
    }
  );
};


  return (
    <div className="space-y-2">
      {data?.map((c) => (
        <div key={c?._id} className="border-2 p-4 space-y-2">
          <div>
            <span>title : </span>
            <input
              type="text"
              className="border-2 p-2 rounded-2xl"
              defaultValue={c?.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <span>description : </span>
            <input
              type="text"
              className="border-2 p-2 rounded-2xl"
              defaultValue={c?.body}
              onChange={(e) => setDesdcription(e.target.value)}
            />
          </div>

          <div className="flex gap-10">
            <button
              className="border-2 p-2 rounded-2xl cursor-pointer"
              onClick={() => handleUpdate(c?._id)}
            >
              update
            </button>
            <button
              className="border-2 p-2 rounded-2xl cursor-pointer"
              onClick={() => handleDelete(c?._id)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

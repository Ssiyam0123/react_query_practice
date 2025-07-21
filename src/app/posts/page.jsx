"use client";

import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/functions/fetch-data";
import useAllPost from "@/functions/tns-AllPost";

export default function PostPage() {
  const { data, isLoading, error } = useAllPost();
  console.log(data);
  console.log(isLoading);

  {
    isLoading && (
      <p className="text-4xl text-center text-amber-300">loading...</p>
    );
  }

  {
    error && <p>error : {error.message}</p>;
  }

  return (
    <div className="w-[80%] mx-auto">
      {" "}
      <p className="mt-10 "> total post: {data?.length}</p>
      <PostCard data={data} />
    </div>
  );
}

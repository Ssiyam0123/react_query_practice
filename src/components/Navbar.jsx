import Link from "next/link";
import React from "react";

export default function Navbar() {
  const links = () => {
    return (
      <div className="w-[70%] mx-auto flex justify-between mt-10 text-2xl">
        <Link href={"/"}> home</Link>
        <Link href={"/posts"}>Posts</Link>
        <Link href={"/new-post"}>New Post</Link>
        <Link href={"/manage-post"}>Manage your posts</Link>
      </div>
    );
  };
  return <div>{links()}</div>;
}

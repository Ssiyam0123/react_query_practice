import { deletePost, getAllPosts, updatePost } from "./fetch-data";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function useAllPost() {
  return useQuery({
    queryKey: ["all-post"],
    queryFn: getAllPosts,
  });
}

export function useUpdatePost() {


  return useMutation({
    mutationFn: ({id, body})=>updatePost(id,body)
  })
}

export function useDeletePost() {
  return useMutation({
    mutationFn: ({id})=> deletePost(id)
  })
}

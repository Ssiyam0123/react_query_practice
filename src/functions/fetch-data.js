const { default: axios } = require("axios");

export const getAllPosts = async () => {
  const { data } = await axios.get("/api/posts");
  return data;
};

export const postPost = async (body) => {
  const { data } = await axios.post("/api/posts", body);
  return data;
};

export const updatePost = async (id,body)=>{
    const {data} = await axios.patch(`/api/posts/${id}`, body)
    return data
} 

export const deletePost = async (id)=>{
  const {data} = await axios.delete(`/api/posts/${id}`)
  return data
}

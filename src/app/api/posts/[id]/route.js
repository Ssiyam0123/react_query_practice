import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = await params;
  console.log(id);
  try {
    await connectDB();
    const post = await Post.findOne({ _id: new ObjectId(id) }).lean();
    return Response.json(post);
  } catch (error) {
    console.log(error);
  }
}

export async function PATCH(req, { params }) {
  const { id } = await params;
  console.log("id for update : ", id);
  try {
    await connectDB();

    const { title, body } = await req.json();

    const updatePost = await Post.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { title, body } },
      { new: true }
    );

    return Response.json(updatePost);
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(req,{params}) {
  const {id} = await params;
  console.log("id is :", id)
  try {
    await connectDB()

    const daleteOne = await Post.findOneAndDelete({_id: new ObjectId(id)})
    return Response.json(daleteOne)
  } catch (error) {
    console.log(error)
  }
}

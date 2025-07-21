import { connectDB } from "@/lib/db";
import Post from "@/models/Post";

export async function POST(req) {
  const { title, body } = await req.json();
  try {
    await connectDB();
    const res = await Post.create({ title, body });

    return Response.json(res);
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  try {
    await connectDB();

    const res = await Post.find({}).lean();
    return Response.json(res);
  } catch (error) {
    console.log(error);
  }
}



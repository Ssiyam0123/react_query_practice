// lib/mongoose.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define the MONGODB_URI in .env.local");
}

// Global is used to maintain a cache across hot reloads in development
let cached = (global).mongoose;

if (!cached) {
  cached = (global).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      dbName: "react_query_practice", // Optional: override db name here
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

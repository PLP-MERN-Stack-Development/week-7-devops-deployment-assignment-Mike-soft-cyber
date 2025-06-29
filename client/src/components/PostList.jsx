import React from "react";
import usePosts from "@/hooks/usePosts";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function PostList(){
    const posts = usePosts();

    return(
        <div className="p-8 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Posts</h1>
        <Button asChild>
          <Link to="/create">New Post</Link>
        </Button>
      </div>

      {posts.map(post => (
        <div key={post._id} className="border rounded-lg p-4 mb-4 hover:shadow transition">
          <Link to={`/posts/${post._id}`}>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
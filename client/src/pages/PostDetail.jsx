import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/posts/${id}`)
      .then(() => navigate("/"))
      .catch(err => console.log(err));
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-6">{post.body}</p>
      <div className="flex gap-4">
        <Button asChild>
          <Link to={`/edit/${post._id}`}>Edit</Link>
        </Button>
        <Button onClick={handleDelete} variant="destructive">Delete</Button>
        <Button asChild>
          <Link to="/">Back</Link>
        </Button>
      </div>
    </div>
  );
}

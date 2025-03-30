"use client";

import { Post } from "../lib/Types";
import { useState, useEffect } from "react";
import apiClient from "../api/client";

export default function PostList({ authCode }: { authCode: string }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError("");

      try {
        const response = await apiClient.get("/list", {
          headers: {
            PinggyAuthHeader: authCode,
          },
        });
        setPosts(response.data);
      } catch (error) {
        setError(
          "Failed to fetch posts. Please check your auth code and try again."+error
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (authCode) {
      fetchPosts();
    }
  }, [authCode]);

  if (!authCode) {
    return (
      <div className="text-gray-500">
        Please submit a post first to see the list.
      </div>
    );
  }

  if (isLoading) {
    return <div className="text-gray-500">Loading posts...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (posts.length === 0) {
    return <div className="text-gray-500">No posts available.</div>;
  }

  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">{post.title}</h3>
          <p className="text-gray-600 mt-2">{post.body}</p>
          <p className="text-sm text-gray-400 mt-2">
            Auth: {post.pinggyAuthHeader}
          </p>
        </div>
      ))}
    </div>
  );
}

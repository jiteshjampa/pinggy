"use client";

import { useState, useEffect } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

export default function Home() {
  const [authCode, setAuthCode] = useState("");

  // Load auth code from localStorage on initial render
  useEffect(() => {
    const storedAuthCode = localStorage.getItem("lastAuthCode");
    if (storedAuthCode) {
      setAuthCode(storedAuthCode);
    }
  }, []);

  const handlePostCreated = (newAuthCode: string) => {
    // Store the new auth code in localStorage and state
    localStorage.setItem("lastAuthCode", newAuthCode);
    setAuthCode(newAuthCode);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Pinggy Posts</h1>

        <PostForm onPostCreated={handlePostCreated} />

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Posts</h2>
          <PostList authCode={authCode} />
        </div>
      </div>
    </main>
  );
}

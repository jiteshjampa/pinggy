"use client";

import { useForm } from "react-hook-form";
import { PostFormData } from "../lib/Types";
import { useState } from "react";
import apiClient from "../api/client";

export default function PostForm({
  onPostCreated,
}: {
  onPostCreated: (newAuthCode: string) => void;
}) {
  const { register, handleSubmit, reset } = useForm<PostFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data: PostFormData) => {
    setIsSubmitting(true);
    setError("");

    try {
      await apiClient.post(
        "/post",
        {
          title: data.title,
          body: data.body,
        },
        {
          headers: {
            PinggyAuthHeader: data.authCode,
          },
        }
      );
      reset();
      onPostCreated(data.authCode);
    } catch (error) {
      setError(
        "Failed to create post. Please check your auth code and try again."+ error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register("title", { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>

        <div>
          <label
            htmlFor="body"
            className="block text-sm font-medium text-gray-700"
          >
            Body
          </label>
          <textarea
            id="body"
            rows={3}
            {...register("body", { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>

        <div>
          <label
            htmlFor="authCode"
            className="block text-sm font-medium text-gray-700"
          >
            Auth Code
          </label>
          <input
            id="authCode"
            type="text"
            {...register("authCode", { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Post"}
        </button>
      </form>
    </div>
  );
}

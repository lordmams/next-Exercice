'use client';
import React from 'react';
import { createPost } from '@/use-cases/post';
import PostRepository from '@/repository/PostRepository';

const repo = new PostRepository();
type Props = {
  onSubmit: (post: { title: string; content: string }) => void;
};

const CreatePost:  React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    createPost(repo, { title, content, dateCreated: new Date() })
  }

  return (
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />
      </div>

      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" required></textarea>
      </div>

      <button type="submit">Create Post</button>
    </form>
  );
  }

export default CreatePost;
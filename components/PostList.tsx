import React from 'react';
import { FormattedPost } from '@/presenters/postPresenter';
import PostCard from './PostCard';

interface PostListProps {
  posts: FormattedPost[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  if (!posts.length) return <p>No posts available.</p>;

  return (
    <div>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
}

export default PostList;
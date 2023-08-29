import React from 'react';
import { FormattedPost } from '@/presenters/postPresenter';

interface PostCardProps {
  post: FormattedPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <div className="postCard">
    <h3>{post.title}</h3>
    <p>{post.content}</p>
    <small>{post.dateCreated}</small>
  </div>
);

export default PostCard;
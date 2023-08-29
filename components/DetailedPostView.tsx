import React from 'react';
import { FormattedPost } from '@/presenters/postPresenter';

interface DetailedPostViewProps {
  post: FormattedPost;
  onBack: () => void; // Function to handle 'back' action
}

const DetailedPostView: React.FC<DetailedPostViewProps> = ({ post, onBack }) => (
  <div>
    <h2>{post.title}</h2>
    <p>{post.content}</p>
    <small>{post.dateCreated}</small>
    <button onClick={onBack}>Back</button>
  </div>
);

export default DetailedPostView;
import { useRouter } from 'next/router';
import DetailedPostView from '@/components/DetailedPostView';
import { getPostById } from '@/use-cases/post';
import PostRepository from '@/repository/PostRepository';
import { formatPostForDisplay } from '@/presenters/postPresenter';

const repo = new PostRepository();

const PostDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = id ? getPostById(repo, +id) : null; 
  if (!post) return <p>Post not found!</p>;
  const formattedPost =  formatPostForDisplay(post);
  return (
    <DetailedPostView post={formattedPost} onBack={() => router.push('/')} />
  );
}

export default PostDetailPage;
import { getPosts } from '@/use-cases/post';
import PostRepository from '@/repository/PostRepository';
import { formatPostForDisplay } from '@/presenters/postPresenter';
import PostList from '@/components/PostList';
import Link from 'next/link';
const repo = new PostRepository();

const Home = () => {
  const posts = getPosts(repo).map(formatPostForDisplay);

  return (
    <div>
      {posts.map(post => (
         <div>
         <h1>All Posts</h1>
         <PostList posts={posts} />
         {/* Add a link to create new posts */}
         <Link href="/create">Create a new post</Link>
       </div>
      ))}
    </div>
  );
}

export default Home;
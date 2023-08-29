import IPostRepository from './IPostRepository';
import Post from '@/entities/Post';

export default class PostRepository implements IPostRepository {
  private posts: Post[] = [
    new Post(1, "Sample Post", "This is a sample post.", new Date())
  ];

  create(postData: Omit<Post, 'id'>): Post {
    const newPost = new Post(
        this.posts.length + 1,
        postData.title,
        postData.content,
        postData.dateCreated
    );
    this.posts.push(newPost);
    return newPost;
}
  findAll(): Post[] {
    return this.posts;
  }

  findById(id: number): Post | undefined {
    return this.posts.find(post => post.id === id);
  }

  delete(id: number): void {
    const index = this.posts.findIndex(post => post.id === id);
    if (index > -1) {
      this.posts.splice(index, 1);
    }
  }
}
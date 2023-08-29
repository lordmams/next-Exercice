import Post from '../entities/Post';

export default interface IPostRepository {
  create(postData: Omit<Post, 'id'>): Post;
  findAll(): Post[];
  findById(id: number): Post | undefined;
  delete(id: number): void;
}
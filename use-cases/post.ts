import IPostRepository from '@/repository/IPostRepository';
import Post from '@/entities/Post';

export const createPost = (repository: IPostRepository, postData: Omit<Post, 'id'>): Post => {
  return repository.create(postData);
}

export const getPosts = (repository: IPostRepository): Post[] => {
  return repository.findAll();
}

export const getPostById = (repository: IPostRepository, id: number): Post | undefined => {
  return repository.findById(id);
}

export const deletePost = (repository: IPostRepository, id: number): void => {
  return repository.delete(id);
}
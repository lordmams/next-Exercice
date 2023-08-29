import Post from "@/entities/Post";
export type FormattedPost = Omit<Post, 'dateCreated'> & { dateCreated: string };

export const formatPostForDisplay = (post: Post): FormattedPost => {
    return {
      ...post,
      dateCreated: post.dateCreated.toLocaleDateString()
    };
  }

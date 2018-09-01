export interface Author {
  id: number;
  firstName: string;
  lastName: string;
}

export interface Post {
  id: number;
  title: string;
  votes: number;
}

export interface Query {
  posts: Post[];
}

export interface Mutation {
  upvotePost: Post;
}

export interface Variables {
  postId: number;
}

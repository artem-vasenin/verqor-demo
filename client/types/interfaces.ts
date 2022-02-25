export interface IPost {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  body: string;
  comments: IComment[]
}

export interface IComment {
  id: number;
  createdAt: string;
  name: string;
  body: string;
  postId: number;
}
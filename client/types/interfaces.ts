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

export interface IPostCreate {
  title: string;
  description: string;
  body: string;
}

export interface IPostEdit extends IPostCreate {
  id: number;
}

export interface IFormField {
  name: string;
  value: string;
}
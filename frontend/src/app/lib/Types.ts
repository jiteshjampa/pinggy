export interface Post {
  title: string;
  body: string;
  pinggyAuthHeader?: string;
}

export interface PostFormData {
  title: string;
  body: string;
  authCode: string;
}

export interface PostData {
  slug: string;
  content: string;
  date?: string;
  isFeatured?: boolean;
}

export interface Message {
  email: string;
  name: string;
  message: string;
  id?: string;
}

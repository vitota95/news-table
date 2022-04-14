export type Article = {
  objectID: string;
  author: string;
  title: string;
  num_comments: number;
  url: string;
  created_at: string;
  type: string;
  points: number;
};

export type SearchType = {
  hits: Article[];
};

export type SingleArticleType = {};

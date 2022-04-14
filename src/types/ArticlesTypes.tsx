export type Article = {
  objectID: number;
  author: string;
  title: string;
  num_comments: number;
  url: string;
};

export type SearchType = {
  hits: Article[];
};

export type SingleArticleType = {};

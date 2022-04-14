export type Article = {
  author: string;
  title: string;
  num_comments: number;
  url: string;
};

export type SearchType = {
  hits: Article[];
};

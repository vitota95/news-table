import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Article, SearchType } from "../types/ArticlesTypes";

// Define a service using a base URL and expected endpoints
const baseUrl = "https://hn.algolia.com/api/v1/";
export const newsApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<SearchType, string>({
      query: (query?: string) => `/search?${query}`,
    }),
    getArticle: builder.query<Article, string>({
      query: (id: string) => `/items/${id}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi

export const { useGetArticlesQuery, useGetArticleQuery } = newsApi;

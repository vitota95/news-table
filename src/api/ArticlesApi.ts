import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchType } from "../types/ArticlesTypes";

// Define a service using a base URL and expected endpoints
const baseUrl = "https://hn.algolia.com/api/v1/";
export const newsApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // prepareHeaders: (headers) => {
    //   headers.set(
    //     "Access-Control-Allow-Headers",
    //     "https://hn.algolia.com/api/v1/search"
    //   );
    //   return headers;
    // },
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<SearchType, string>({
      query: (query?: string) => `/search?${query}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi

export const { useGetArticlesQuery } = newsApi;

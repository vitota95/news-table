import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchType } from "../types/NewsTypes";

// Define a service using a base URL and expected endpoints
export const newsApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hn.algolia.com/api/v1" }),
  endpoints: (builder) => ({
    getNews: builder.query<SearchType, string>({
      query: (query?: string) => `/search?${query}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi

export const { useGetNewsQuery } = newsApi;

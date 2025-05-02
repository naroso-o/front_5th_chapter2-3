import { createQueryKeys } from "@lukemorales/query-key-factory"

export const posts = createQueryKeys("posts", {
  tags: () => ({
    queryKey: [{}],
  }),
  posts: () => ({
    queryKey: [{}],
  }),
  postsByTag: (tag: string) => ({ queryKey: [{ tag }] }),
  search: (query: string) => ({ queryKey: [{ q: query }] }),
})
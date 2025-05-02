import { useQuery } from "@tanstack/react-query"
import { posts } from "./queries"
import { Post, User } from "@/shared/types"

export const fetchSearchPosts = async (searchQuery: string): Promise<{ posts: Post[]; total: number }> => {
  const response = await fetch(`/api/posts/search?q=${searchQuery}`)
  const data = await response.json()

  const usersResponse = await fetch("/api/users?limit=0&select=username,image")
  const usersData: { users: User[] } = await usersResponse.json()

  const postsWithUsers = data.posts.map((post: Post) => {
    const author = usersData.users.find((user) => user.id === post.userId)
    if (!author) throw new Error(`작성자 가져오기 오류: ${post.id}`)
    return { ...post, author }
  })

  return { posts: postsWithUsers, total: data.total }
}

export const useSearchPostsQuery = (query: string, enabled: boolean) => {
  return useQuery({
    ...posts.search(query),
    queryFn: () => fetchSearchPosts(query),
    enabled,
  })
}

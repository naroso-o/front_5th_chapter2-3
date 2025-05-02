import { Post, User } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";
import { posts } from "./queries";

export const fetchPostsByTag = async (tag: string): Promise<{ posts: Post[]; total: number }> => {
  const [postsResponse, usersResponse] = await Promise.all([
    fetch(`/api/posts/tag/${tag}`),
    fetch("/api/users?limit=0&select=username,image"),
  ])

  const postsData = await postsResponse.json()
  const usersData: { users: User[] } = await usersResponse.json()

  const postsWithUsers = postsData.posts.map((post: Post) => {
    const author = usersData.users.find((user) => user.id === post.userId)
    if (!author) {
      throw new Error(`작성자 가져오기 오류: ${post.id}`)
    }
    return {
      ...post,
      author,
    }
  })

  return { posts: postsWithUsers, total: postsData.total }
}

export const usePostsByTagQuery = (tag: string) =>
    useQuery({
      ...posts.postsByTag(tag),
      queryFn: () => fetchPostsByTag(tag),
      enabled: !!tag && tag !== "all",
    })

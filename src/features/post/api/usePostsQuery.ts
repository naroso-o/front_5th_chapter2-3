import { useQuery } from "@tanstack/react-query"
import { posts } from "./queries"
import { Posts, User } from "@/shared/types"

export const fetchPosts = async () => {
  const postsResponse = await fetch(`/api/posts?limit=0&skip=0`) // limit/skip은 필요시 파라미터화
  const postsData: Posts = await postsResponse.json()

  const usersResponse = await fetch("/api/users?limit=0&select=username,image")
  const usersData: { users: User[] } = await usersResponse.json()

  const postsWithUsers = postsData.posts.map((post) => {
    const author = usersData.users.find((user) => user.id === post.userId)
    if (!author) throw new Error(`작성자 가져오기 오류: ${post.id}`)
    return {
      ...post,
      author,
    }
  })

  return { posts: postsWithUsers, total: postsData.total }
}

export const usePostsQuery = () => {
  return useQuery({
    ...posts.posts(),
    queryFn: fetchPosts,
  })
}

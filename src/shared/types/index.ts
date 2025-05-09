export type Tag = {
  url: string
  slug: string
}

export type Post = {
  id: number
  userId: number
  title: string
  body: string
  author: User
  tags: string[]
  reactions: Reaction
}

export type Posts = {
  total: number
  posts: Post[]
}

export type User = {
  id: number
  username: string
  image: string
  age: number
  firstName: string
  lastName: string
  email: string
  phone: string
  company: Company
  address: Address
}

type Reaction = {
  likes: number
  dislikes: number
}

type Address = {
  address: string
  city: string
  state: string
}

type Company = {
  name: string
  title: string
}

export type Comment = {
  postId: number
  id: number
  body: string
  likes: number
  user: User
}

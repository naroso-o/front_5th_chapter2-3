import { create } from "zustand"
import { Post } from "../types"

type PostStates = {
  posts: Post[]
  total: number
  selectedPost: Post | null
  newPost: { title: string; body: string; userId: number }

  showAddDialog: boolean
  showEditDialog: boolean
  showPostDetailDialog: boolean

  loading: boolean
}

type PostActions = {
  setPosts: (posts: Post[]) => void
  setTotal: (total: number) => void
  setSelectedPost: (post: Post | null) => void
  setNewPost: (newPost: { title: string; body: string; userId: number }) => void
  setShowAddDialog: (show: boolean) => void
  setShowEditDialog: (show: boolean) => void
  setShowPostDetailDialog: (show: boolean) => void
  setLoading: (loading: boolean) => void
  reset: () => void
}

const usePostStore = create<PostStates & PostActions>((set) => ({
  posts: [],
  total: 0,
  selectedPost: null,
  newPost: { title: "", body: "", userId: 1 },

  showAddDialog: false,
  showEditDialog: false,
  showPostDetailDialog: false,

  loading: false,

  setPosts: (posts) => set({ posts }),
  setTotal: (total) => set({ total }),
  setSelectedPost: (post) => set({ selectedPost: post }),
  setNewPost: (newPost) => set({ newPost }),
  setShowAddDialog: (show) => set({ showAddDialog: show }),
  setShowEditDialog: (show) => set({ showEditDialog: show }),
  setShowPostDetailDialog: (show) => set({ showPostDetailDialog: show }),
  setLoading: (loading) => set({ loading }),

  reset: () =>
    set({
      posts: [],
      total: 0,
      selectedPost: null,
      newPost: { title: "", body: "", userId: 1 },
      showAddDialog: false,
      showEditDialog: false,
      showPostDetailDialog: false,
    }),
}))

export default usePostStore

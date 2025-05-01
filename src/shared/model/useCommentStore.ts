import { create } from "zustand"
import { Comment } from "../types"

type CommentStates = {
  comments: Record<number, Comment[]>
  selectedComment: Comment | null
  newComment: { body: string; postId: number | null; userId: number }

  showAddCommentDialog: boolean
  showEditCommentDialog: boolean
}

type CommentActions = {
  setComments: (comments: Record<number, Comment[]>) => void
  setSelectedComment: (comment: Comment | null) => void
  setNewComment: (newComment: { body: string; postId: number | null; userId: number }) => void
  setShowAddCommentDialog: (show: boolean) => void
  setShowEditCommentDialog: (show: boolean) => void
  reset: () => void
}

const useCommentStore = create<CommentStates & CommentActions>((set) => ({
  comments: {},
  selectedComment: null,
  newComment: { body: "", postId: null, userId: 1 },
  showAddCommentDialog: false,
  showEditCommentDialog: false,

  setComments: (comments) => set({ comments }),
  setSelectedComment: (comment) => set({ selectedComment: comment }),
  setNewComment: (newComment) => set({ newComment }),
  setShowAddCommentDialog: (show) => set({ showAddCommentDialog: show }),
  setShowEditCommentDialog: (show) => set({ showEditCommentDialog: show }),

  reset: () =>
    set({
      comments: {},
      selectedComment: null,
      newComment: { body: "", postId: null, userId: 1 },
      showAddCommentDialog: false,
      showEditCommentDialog: false,
    }),
}))

export default useCommentStore

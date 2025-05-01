import { create } from "zustand"
import { Tag } from "../types"

type TagStates = {
  tags: Tag[]
}

type TagActions = {
  setTags: (tags: Tag[]) => void
}

const useTagStore = create<TagStates & TagActions>((set) => ({
  tags: [],
  setTags: (tags) => set({ tags }),

  reset: () =>
    set({
      tags: [],
    }),
}))

export default useTagStore

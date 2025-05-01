import { create } from "zustand"
import { User } from "../types"

type UserStates = {
  showUserModal: boolean
  selectedUser: User | null
}

type UserActions = {
  setShowUserModal: (show: boolean) => void
  setSelectedUser: (user: User | null) => void
  reset: () => void
}

const useUserStore = create<UserStates & UserActions>((set) => ({
  showUserModal: false,
  selectedUser: null,

  setShowUserModal: (show) => set({ showUserModal: show }),
  setSelectedUser: (user) => set({ selectedUser: user }),

  reset: () =>
    set({
      showUserModal: false,
      selectedUser: null,
    }),
}))

export default useUserStore

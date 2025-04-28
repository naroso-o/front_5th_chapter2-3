import { useState } from "react"

export const Params = {
  skip: "skip",
  limit: "limit",
  search: "search",
  sortBy: "sortBy",
  sortOrder: "sortOrder",
} as const

export type ParamType = keyof typeof Params

const useParam = () => {
  const queryParams = new URLSearchParams(location.search)

  const [skip, setSkip] = useState(parseInt(queryParams.get("skip") || "0"))
  const [limit, setLimit] = useState(parseInt(queryParams.get("limit") || "10"))
  const [searchQuery, setSearchQuery] = useState(queryParams.get("search") || "")
  const [sortBy, setSortBy] = useState(queryParams.get("sortBy") || "")
  const [sortOrder, setSortOrder] = useState(queryParams.get("sortOrder") || "asc")

  return { skip, limit, searchQuery, sortBy, sortOrder, setSkip, setLimit, setSearchQuery, setSortBy, setSortOrder }
}

export default useParam

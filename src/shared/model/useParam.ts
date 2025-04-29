import { useLocation, useNavigate } from "react-router-dom"

export const Params = {
  skip: "skip",
  limit: "limit",
  search: "search",
  sortBy: "sortBy",
  sortOrder: "sortOrder",
  tag: "tag",
} as const

export type ParamType = keyof typeof Params

const useParam = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)

  const skip = queryParams.get("skip") || "0"
  const limit = queryParams.get("limit") || "10"
  const searchQuery = queryParams.get("search") || ""
  const sortBy = queryParams.get("sortBy") || ""
  const sortOrder = queryParams.get("sortOrder") || "asc"
  const selectedTag = queryParams.get("tag") || ""

  const updateParam = (paramType: ParamType, value: string) => {
    const newParams = new URLSearchParams(location.search)
    newParams.set(paramType, value)
    navigate(`${location.pathname}?${newParams.toString()}`, { replace: true })
  }

  return {
    skip: parseInt(skip),
    limit: parseInt(limit),
    searchQuery,
    sortBy,
    sortOrder,
    selectedTag,
    updateParam,
  }
}

export default useParam

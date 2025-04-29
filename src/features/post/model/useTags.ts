import useParam from "../../../shared/model/useParam"
import useTagStore from "../../../shared/model/useTagStore"

const useTags = () => {
  const { setTags } = useTagStore()
  const { updateParam } = useParam()

  /** 태그 가져오기 */
  const fetchTags = async () => {
    try {
      const response = await fetch("/api/posts/tags")
      const data = await response.json()
      setTags(data)
    } catch (error) {
      console.error("태그 가져오기 오류:", error)
    }
  }

  /** 태그 선택하기 */
  const selectTag = (tag: string) => {
    updateParam("tag", tag)
  }

  return { fetchTags, selectTag }
}

export default useTags

import useParam from "@/shared/model/useParam"

const useTags = () => {
  const { selectedTag, updateParam } = useParam()

  /** 태그 선택하기 */
  const selectTag = (tag: string) => {
    updateParam("tag", tag)
  }

  return { selectedTag, selectTag }
}

export default useTags

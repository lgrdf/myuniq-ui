import type { ExtractPropTypes, PropType } from 'vue'
export const treeProps = {
  innerData: {
    type: Object as PropType<Array<IInnerTreeNode>>,
    required: true
  }
} as const

export type TreeProps = ExtractPropTypes<typeof treeProps> //抽取类型
export interface ITreeNode {
  label: string
  id?: string
  children?: ITreeNode[]

  selected?: boolean //点击选中
  checked?: boolean //勾选
  expanded?: boolean //展开

  disableSelect?: boolean
  disableCheck?: boolean
  diableToggle?: boolean
}

export interface IInnerTreeNode extends ITreeNode {
  parentId?: string //父节点ID
  level: number //节点层级
  isLeaf?: boolean //是否叶子节点
}

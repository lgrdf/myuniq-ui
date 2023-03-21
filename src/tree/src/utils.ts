/* import { IInnerTreeNode, ITreeNode } from './tree-type'

export function generateInnerTree(tree: ITreeNode[]): IInnerTreeNode[] {
  const tree = [
    {
      label: 'docs',
      id: 'docs'
    },
    {
      label: 'packages',
      id: 'packages',
      expanded: true,
      children: [
        {
          label: 'plugin-vue',
          id: 'plugin-vue'
        },
        {
          label: 'vite',
          id: 'vite',
          expanded: true,
          children: [
            {
              label: 'src',
              id: 'src'
            },
            {
              label: 'README.md',
              id: 'README.md'
            }
          ]
        }
      ]
    },
    {
      label: 'scripts',
      id: 'scripts',
      children: [
        {
          label: 'release.ts',
          id: 'release.ts'
        },
        {
          label: 'verifyCommit.ts',
          id: 'verifyCommit.ts'
        }
      ]
    },
    {
      label: 'pnpm-workspace.yaml',
      id: 'pnpm-workspace.yaml'
    }
  ]
  tree.reduce((prev, cur) => {
    // 判断cur是否存在children，如果存在则递归遍历


  }, [] as IInnerTreeNode[])
  return 

} */

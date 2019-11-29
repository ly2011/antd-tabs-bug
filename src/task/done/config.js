import { Input, Select } from 'antd'

const { Option } = Select
export const types = [
  { label: '类型1', value: '1' },
  { label: '类型2', value: '2' },
  { label: '类型3', value: '3' }
]
// 渲染搜索条件
export const searchConfig = () => [
  {
    itemOptions: {
      label: '姓名'
    },
    name: 'name',
    initialValue: '',
    children: <Input placeholder="请输入" />
  },
  {
    itemOptions: {
      label: '影响力'
    },
    name: 'type',
    children: (
      <Select placeholder="请选择" style={{ width: '100%' }}>
        {types.map(item => (
          <Option key={item.value} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
    )
  }
]

export const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
    ellipsis: true,
    render: text => text
  },
  {
    title: '所属组织',
    dataIndex: 'org',
    width: 100,
    ellipsis: true,
    render: text => text
  },
  {
    title: '模板名称',
    dataIndex: 'templateName',
    width: 100,
    ellipsis: true,
    render: text => text
  },
  {
    title: '生效时间',
    dataIndex: 'effectiveTime',
    width: 100,
    ellipsis: true,
    render: text => text
  },
  {
    title: '失效时间',
    dataIndex: 'invalidTime',
    width: 100,
    ellipsis: true,
    render: text => text
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 60,
    ellipsis: true,
    render: text => text
  },
  {
    title: '创建时间',
    dataIndex: 'createdTime',
    width: 120,
    ellipsis: true,
    render: text => text
  },
  {
    title: '创建人',
    dataIndex: 'founder',
    width: 100,
    ellipsis: true,
    render: text => text
  }
]

const getData = () => {
  const arr = []
  for (let i = 0; i < 10; i++) {
    arr.push({
      id: `${i + 1}`,
      org: `组织-${i + 1}`,
      templateName: `模板名称-${i + 1}`,
      founder: `刘晓晓-${i + 1}`
    })
  }
  return arr
}
export const data = getData()

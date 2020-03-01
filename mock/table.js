import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    'status|1': ['published', 'draft', 'deleted'],
    name: 'name',
  }]
})

export default [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]

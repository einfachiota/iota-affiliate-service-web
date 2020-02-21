import Mock from 'mockjs'

const data = Mock.mock({
  'items|10': [{
    id: '@id',
    title: '@word(10, 20)',
    mam: '@word(81)',
    income: '@integer(300, 50000)'
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

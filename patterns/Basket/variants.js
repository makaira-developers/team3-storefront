export default [
  {
    name: 'Default',
    props: {
      click: () => console.log('deleted'),
      basket: {
        cost: {
          total: 999,
        },
        items: [
          {
            name: 'Test',
            price: 99,
          },
          {
            name: 'Test2',
            price: 99,
          },
        ],
      },
    },
  },
]

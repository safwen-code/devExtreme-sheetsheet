$(() => {
  const fruits = ['Apples', 'Oranges', 'Lemons', 'Pears', 'Pineapples']
  $('#dropdownBox').dxDropDownBox({
    value: fruits[0],
    dataSource: fruits,
    contentTemplate: function (e) {
      const $list = $('<div>').dxList({
        dataSource: e.component.option('dataSource'),
        selectionMode: 'single',
        onSelectionChanged: function (arg) {
          e.component.option('value', arg.addedItems[0])
          e.component.close()
        },
      })
      return $list
    },
  })
})

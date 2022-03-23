var accordionData = [
  {
    title: 'Personal Data',
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1986,
  },
  {
    title: 'Contacts',
    phone: '(555)555-5555',
    email: 'John.Smith@example.com',
  },
  {
    title: 'Address',
    state: 'CA',
    city: 'San Francisco',
    street: 'Stanford Ave',
  },
]

$(() => {
  $('#accor').dxAccordion({
    dataSource: accordionData,
    itemTemplate: function (itemData, itemIndex, itemElement) {
      for (var field in itemData) {
        itemElement.append('<p>' + field + ':' + itemData[field] + '</p>')
      }
    },
    // colapsed all panel
    collapsible: true,

    // multi panel
    // multiple: true,
  })
})

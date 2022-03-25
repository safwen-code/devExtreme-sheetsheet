$(() => {
  $('#formaContainer').dxForm({
    formData: {
      firstName: 'John',
      lastName: 'Heart',
      position: 'CEO',
      phone: '+1(213) 555-9392',
      email: 'jheart@dx-email.com',
      picture: 'http://here/goes/the/picture.jpg',
    },
    //create a group with  itemType: 'group',
    //columns with group  colCount
    colCount: 2,
    items: [
      {
        itemType: 'group',
        caption: 'personel data',
        colSpan: 2,
        colCount: 2,
        items: ['firstName', 'lastName', 'position'],
      },
      {
        itemType: 'group',
        caption: 'contacts',
        items: ['phone', 'email'],
      },
      {
        itemType: 'group',
        caption: 'Picture',
        template: function (data, itemElement) {
          $('<img>').attr('src', data.formData.picture).appendTo(itemElement)
        },
      },
    ],
  })
})

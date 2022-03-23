$(() => {
  $('#form').dxForm({
    formData: {
      name: 'John heart',
      officeNumber: 991,
      hireDate: new Date(2012, 5, 18),
      notes: 'John has been in the Audio/Video industry since 1990.',
      phone: '26706437',
      skype: 'safwen_skype',
      email: 'safwendjebbi@gmail.com',
    },

    // colCount is to create a fixed number of columns
    colCount: 2,

    //1items array to configure all form items
    items: [
      {
        //create Item groupe for personel info
        itemType: 'group',
        caption: 'personal Information',
        items: [
          'name',
          'officeNumber',
          {
            dataField: 'hireDate',
            editorOptions: {
              disabled: false,
            },
          },
          'officeNumber',
          {
            dataField: 'notes',
            colSpan: 2,
          },
        ],
      },
      {
        itemType: 'group',
        caption: 'address info',
        items: ['phone', 'skype', 'email'],
      },
    ],
  })
})

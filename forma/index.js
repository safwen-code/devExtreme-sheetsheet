$(() => {
  $('#form')
    .dxForm({
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
          // validation of value
          items: [
            {
              dataField: 'name',
              isRequired: true,
            },
            {
              dataField: 'officeNumber',
              validationRules: [
                {
                  type: 'numeric',
                },
              ],
            },
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

          // create a tab in item
          items: [
            {
              itemType: 'tabbed',
              tabPanelOptions: {
                height: 260,
              },
              tabs: [
                {
                  title: 'Contacts',
                  items: ['phone', 'skype', 'email'],
                },
              ],
            },
          ],
        },
      ],
    })
    .dxForm('instance')
  // $('#checkBox').dxCheckBox({
  //   text: 'Enable read-only mode',
  //   value: false,
  //   onValueChanged: function (e) {
  //     form.option('readOnly', e.value)
  //     console.log(e.value)
  //   },
  // })
})

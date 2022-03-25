$(() => {
  console.log('hi')
  $('#formaContainer').dxForm({
    formData: {
      firstName: 'Jhon',
      lastName: 'folen',
      position: 'developpeur',
      office: 458,
      hireDate: new Date(2012, 4, 13),
      phone: '55 852 789',
      picture:
        'https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person2.png',
      notes:
        'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.',
    },

    items: [
      {
        dataField: 'firstName',
        //required option value
        isRequired: true,
        //define a custum with template
        template: function (data, itemElement) {
          itemElement.append("<div id='textAreaContainer'>").dxTextArea({
            value: data.component.option('formData')[data.dataField],
            onValueChanged: function (e) {
              data.component.updateData(data.dataField, e.value)
            },
          })
        },
      },
      'lastName',
      'position',
      'office',
      {
        dataField: 'hireDate',
        //to specifie the item
        editorType: 'dxCalendar',
        editorOptions: {
          value: new Date(),
        },
      },
      {
        dataField: 'notes',
        editorType: 'dxTextArea',
        editorOptions: 'add notes ........',
      },
      {
        dataField: 'picture',
        template: function (data, itemElement) {
          itemElement.append("<img src='" + data.editorOptions.value + "'>")
        },
      },
      {
        dataField: 'phone',
        //to specifie this text
        helpText: 'Example: +1(216)111-1111',
      },
    ],
  })
})

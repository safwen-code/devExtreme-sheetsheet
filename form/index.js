$(() => {
  const form = $('#form')
    .dxForm({
      formData,
      readOnly: false,
      showColonAfterLabel: true,
      showValidationSummary: true,

      items: [
        {
          itemType: 'group',
          caption: 'Credentials',
          items: [
            {
              dataField: 'Email',
            },
            {
              dataField: 'password',
              editorOptions: {
                mode: 'password',
              },
            },
            {
              label: {
                text: 'confirm Passsword',
              },
              editorType: 'dxTextBox',
              editorOptions: {
                mode: 'password',
              },
            },
          ],
        },
        {
          itemType: 'group',
          caption: 'info Personel',
          items: [
            {
              dataField: 'Name',
            },
            {
              dataField: 'Date',
              editorType: 'dxDateBox',
              label: {
                text: 'Date of birth',
              },
            },
          ],
        },
        {
          itemType: 'group',
          caption: 'buil a new address',
          items: [
            {
              dataField: 'Country',
              editorType: 'dxSelectBox',
              editorOptions: {
                dataSource: contries,
              },
            },
            { dataField: 'City', editorType: 'dxAutocomplete' },
            {
              dataField: 'Adress',
            },
            {
              dataField: 'Phone',
              helpText: 'Enter the phone number in USA phone format',
              editorOptions: {
                mask: '+1 (X00) 000-0000',
                maskRules: {
                  X: /[02-9]/,
                },
              },
            },
          ],
        },
        {
          itemType: 'button',
          horizontalAlignment: 'center',
          buttonOptions: {
            text: 'Register',
            type: 'success',
            useSubmitBehavior: true,
          },
        },
      ],
    })
    .dxForm('instance')
  //show data
  $('#form-container').on('submit', (e) => {
    // DevExpress.ui.notify(
    //   {
    //     message: 'You have submitted the form',
    //     position: {
    //       my: 'center top',
    //       at: 'center top',
    //     },
    //   },
    //   'success',
    //   3000,
    // )

    var formData = form.option('formData')
    // console.log(e.data.push(formData))
    console.log(formData)
    e.preventDefault()
    console.log(e)
  })
})

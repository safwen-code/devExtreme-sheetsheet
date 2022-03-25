$(function () {
  $('#formaContainer').dxForm({
    items: [
      {
        dataField: 'firstName',
        editorType: 'dxTextBox',
      },
      {
        dataField: 'lastName',
        editorType: 'dxTextBox',
      },
      {
        dataField: 'birthDate',
        editorType: 'dxDateBox',
      },
    ],

    // on hundel change in react
    onFieldDataChanged: function (e) {
      var newFormData = e.component.option('formData')
      console.log(newFormData)
    },
  })
})

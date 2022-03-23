$(() => {
  $('#login')
    .dxTextBox({
      name: 'login',
    })
    .dxValidator({
      validationRules: [
        {
          type: 'required',
        },
      ],
    })
  $('#password')
    .dxTextBox({
      name: 'password',
      mode: 'password',
    })
    .dxValidator({
      validationRules: [
        {
          type: 'required',
        },
      ],
    })
  $('#validate').dxButton({
    text: 'submit',
    type: 'success',
    useSubmitBehavior: true,
  })
})

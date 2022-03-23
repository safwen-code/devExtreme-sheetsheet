const login = {
  email: '',
  password: '',
}

$(() => {
  const form = $('#loginform')
    .dxForm({
      formData: login,
      readOnly: false,
      validationGroup: 'customerData',
      items: [
        {
          itemType: 'group',
          caption: 'Login',
          items: [
            {
              dataField: 'email',
              // check validation
              validationRules: [
                {
                  type: 'required',
                  massage: 'email is required',
                },
              ],
            },
            {
              dataField: 'password',
              editorOptions: {
                mode: 'password',
              },
              validationRules: [
                {
                  type: 'required',
                  message: 'password is required',
                },
              ],
            },
            {
              itemType: 'button',
              horizontalAlignment: 'left',
              buttonOptions: {
                text: 'Register',
                type: 'success',
                useSubmitBehavior: true,
              },
            },
          ],
        },
      ],
    })
    .dxForm('instance')

  $('#formcontainer').on('submit', (e) => {
    e.preventDefault()
    let formData = form.option('formData')
    console.log(JSON.stringify(formData))
    $.ajax({
      type: 'POST',
      url: 'test.php',
      data: JSON.stringify(formData),
      success: function (data) {
        console.log(data)
      },
    })
  })
})

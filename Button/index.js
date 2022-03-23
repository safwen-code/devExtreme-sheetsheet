$(() => {
  $('#button').dxButton({
    //add name to button
    text: 'click me',

    //style button
    type: 'success',
    stylingMode: 'outlined',

    //add icon
    icon: 'comment',

    //add click
    onClick: function () {
      DevExpress.ui.notify('the button is clicked')
    },
  })
})

$(() => {
  // change the value of check
  const valueChangedHandler1 = function (e) {
    const previousValue = e.previousValue
    const newValue = e.value
    console.log(newValue)
    // First handler of the "valueChanged" event
  }
  console.log('checjk box')
  // create a check box
  $('#checkBox')
    .dxCheckBox({
      text: 'Check me',
      value: undefined,
    })
    .dxCheckBox('instance')
    .on('valueChange', valueChangedHandler1)
})

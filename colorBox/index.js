$(() => {
  $('#colorBox').dxColorBox({
    value: '#FF0000',
    //with this method the ui component appliers the value immediatly
    applyValueMode: 'instantly',
    // handel change to process the color value
    onValueChanged: function (e) {
      const preValue = e.preValue
      const newValue = e.value
      console.log(newValue)
    },
  })
})

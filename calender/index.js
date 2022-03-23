$(() => {
  //change event handlers at runtime with on(eventName,eventHandler)
  const valuechanged1 = (e) => {
    const previousValue = e.previousValue
    const newValue = e.value
    console.log('preValue', previousValue)
    console.log('newValue', newValue)
  }
  const valuechanged2 = (e) => {
    const previousValue = e.previousValue
    const newValue = e.value
    console.log('preValue', previousValue)
    console.log('newValue', newValue)
  }

  //create calender
  $('#calendar')
    .dxCalendar({
      //afficher year
      zoomLevel: 'year',
      //showTodayButton
      showTodayButton: true,

      //hundelchangeValue of calender
      // onValueChanged: function (e) {
      //   const previousValue = e.previousValue
      //   const newValue = e.value
      //   console.log(newValue)
      // },
    })
    .dxCalendar('instance')
    .on('valueChanged', valuechanged1)
    .on('valueChanged', valuechanged2)
})

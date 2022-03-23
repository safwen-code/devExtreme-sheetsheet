$(() => {
  const actions = [
    { id: 1, text: 'My profile', icon: 'user' },
    { id: 2, text: 'Messages', icon: 'email' },
    { id: 3, text: 'Contacts', icon: 'group' },
    { id: 4, text: 'Log out', icon: 'runner' },
  ]
  // create
  $('#dropDownButton').dxDropDownButton({
    //simple data
    // text: 'Sandra Johnson',
    // icon: 'user',
    //populate multiple data
    text: ' Sandra Johnson',
    items: actions,
    keyExpr: 'id',
    displayExpr: 'text',

    //log the select action name
    onItemClick: function (e) {
      console.log(e.itemData.text + ' was selected')
    },

    //split Button
    splitButton: true,
    onButtonClick: function () {
      console.log('button wes clicked')
    },
    dropDownOptions: {
      height: 150,
    },
  })
})

$(() => {
  console.log('hi')

  const drawer = $('#drawer').dxDrawer({
    // template is a propritée specifies the drawer's content

    template: function (e) {
      return $("<div style='width: 150px'>Drawer content</div>")
    },
    height: 250,
    minSize: 37,
  })
})

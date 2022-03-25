$(function () {
  $('#view').load('./acceuil.html')

  $('#drawer')
    .dxDrawer({
      template: function (e) {
        return $("<div style='width: 150px'>Drawer content</div>")
      },
      height: 250,
      minSize: 37,

      //navigate to pages with dxlist
      template: function (e) {
        var $list = $('<div/>').dxList({
          items: [
            { id: 1, text: 'acceuil', icon: 'message', filePath: 'acceuil' },
            { id: 2, text: 'login', icon: 'check', filePath: 'login' },
            { id: 3, text: 'register', icon: 'trash', filePath: 'register' },
          ],
          width: 200,
          selectionMode: 'single',
          onSelectionChanged: function (e) {
            $('#view').load(e.addedItems[0].filePath + '.html')
          },
        })
        return $list
      },
    })
    .dxDrawer('instance')

  //open and close drawer
  $('#toolbar').dxToolbar({
    items: [
      {
        widget: 'dxButton',
        location: 'before',
        options: {
          icon: 'menu',
          onClick: function () {
            drawer.toggle()
          },
        },
      },
    ],
  })
})

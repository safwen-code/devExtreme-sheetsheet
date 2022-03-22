$(() => {
  $('#dataGrid').dxDataGrid({
    dataSource: employees,
    keyExpr: 'EmployeeID',
    editing: {
      mode: 'popup',
      allowUpdating: true,
      allowDeleting: true,
      allowAdding: true,
    },
    columns: [
      {
        dataField: 'FullName',
        fixed: true,
      },
      {
        dataField: 'Position',
      },
      {
        dataField: 'HireDate',
        dataType: 'date',
        width: 100,
      },
      'Address',

      {
        dataField: 'PostalCode',
        visible: false,
      },
      {
        dataField: 'Country',
        groupIndex: 0,
      },
    ],
    //permet de changer les columns
    allowColumnReordering: true,
    //size of column
    columnAutoWidth: true,
    //fixed colunm
    columnFixing: { enabled: true },
    //hide element
    columnShooser: { enabled: true },
    //search panel
    filterRow: { visible: true },
    searchPanel: { visible: true },
    // groupe Data with gropue panel
    groupPanel: { visible: true },

    //select one record of employer
    selection: { mode: 'single' },
    onSelectionChanged: function (e) {
      e.component.byKey(e.currentSelectedRowKeys[0]).done((employee) => {
        if (employee) {
          $('#selected-emp').text(
            `employer selected name ${employee.FullName} `,
          )
        }
      })
    },
    // create a ui for user
    masterDetail: {
      enabled: true,
      template: function (_, options) {
        const employee = options.data
        const photo = $('<img>').addClass('emp').attr('src', employee.Photo)
        const notes = $('<p>').addClass('emp-note').text(employee.Notes)
        return $('<div>').append(photo, notes)
      },
    },
  })
})

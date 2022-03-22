$(() => {
  $('#dataContainer').dxDataGrid({
    dataSource: employees,
    keyExpr: 'EmployeeID',
    editing: {
      allowUpdating: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'row',
    },
    columns: [{ dataField: 'EmployeeID', allowEditing: true }],
  })
})

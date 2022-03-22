$(() => {
  function logEvent(eventName) {
    const logList = $('#events ul')
    const newItem = $('<li>', { text: eventName })

    logList.prepend(newItem)
  }

  $('#gridContainer').dxDataGrid({
    dataSource: employees,
    KeyExpr: 'EmployeeID',
    showBorders: true,
    paging: {
      enabled: false,
    },
    editing: {
      mode: 'row',
      allowUpdating: true,
      allowDeleting: true,
      allowAdding: true,
    },
    columns: [
      {
        dataField: 'TitleOfCourtesy',
      },
      {
        dataField: 'FullName',
      },
      { dataField: 'Position' },
      {
        dataField: 'BirthDate',
        dataType: 'date',
      },
      {
        dataField: 'HireDate',
        dataType: 'date',
      },
    ],
    onEditingStart() {
      logEvent('EditingStart')
    },
    onInitNewRow() {
      logEvent('InitNewRow')
    },
    onRowInserting() {
      logEvent('RowInserting')
    },
    onRowInserted() {
      logEvent('RowInserted')
    },
    onRowUpdating() {
      logEvent('RowUpdating')
    },
    onRowUpdated() {
      logEvent('RowUpdated')
    },
    onRowRemoving() {
      logEvent('RowRemoving')
    },
    onRowRemoved() {
      logEvent('RowRemoved')
    },
    onSaving() {
      logEvent('Saving')
    },
    onSaved() {
      logEvent('Saved')
    },
    onEditCanceling() {
      logEvent('EditCanceling')
    },
    onEditCanceled() {
      logEvent('EditCanceled')
    },
  })

  $('#clear').dxButton({
    text: 'Clear',
    onClick() {
      $('#events ul').empty()
    },
  })
})

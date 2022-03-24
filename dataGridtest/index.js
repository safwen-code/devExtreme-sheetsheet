const url = 'https://js.devexpress.com/Demos/Mvc/api/CustomEditors'

const employees = DevExpress.data.AspNet.createStore({
  key: 'ID',
  loadUrl: `${url}/Employees`,
  onBeforeSend(method, ajaxOptions) {
    ajaxOptions.xhrFields = { withCredentials: true }
  },
})

$(() => {
  $('#gridContainer').dxDataGrid({
    dataSource: DevExpress.data.AspNet.createStore({
      key: 'ID',
      loadUrl: `${url}/Tasks`,
      updateUrl: `${url}/UpdateTask`,
      insertUrl: `${url}/InsertTask`,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: true }
      },
    }),
    showBorders: true,
    paging: {
      enabled: true,
      pageSize: 15,
    },
    headerFilter: {
      visible: true,
    },
    searchPanel: {
      visible: true,
    },
    editing: {
      mode: 'cell',
      allowUpdating: true,
      allowAdding: true,
    },
    // onRowInserted(e) {
    //   e.component.navigateToRow(e.key)
    // },
    columns: [
      {
        dataField: 'Owner',
        width: 150,
        allowSorting: false,
        lookup: {
          dataSource: employees,
          valueExpr: 'ID',
          displayExpr: 'FullName',
        },
        validationRules: [{ type: 'required' }],
        editCellTemplate: dropDownBoxEditorTemplate,
      },
      {
        dataField: 'AssignedEmployee',
        caption: 'Assignees',
        width: 200,
        allowSorting: false,
        editCellTemplate: tagBoxEditorTemplate,
        lookup: {
          dataSource: employees,
          valueExpr: 'ID',
          displayExpr: 'FullName',
        },
        // validationRules: [{ type: 'required' }],
        // this part is important
        cellTemplate(container, options) {
          const noBreakSpace = '\u00A0'
          const text = (options.value || [])
            .map((element) => options.column.lookup.calculateCellValue(element))
            .join(', ')
          container.text(text || noBreakSpace).attr('title', text)
        },
        calculateFilterExpression(
          filterValue,
          selectedFilterOperation,
          target,
        ) {
          if (target === 'search' && typeof filterValue === 'string') {
            return [this.dataField, 'contains', filterValue]
          }
          return function (data) {
            return (data.AssignedEmployee || []).indexOf(filterValue) !== -1
          }
        },
      },
    ],
  })

  function dropDownBoxEditorTemplate(cellElement, cellInfo) {
    return $('<div>').dxDropDownBox({
      dropDownOptions: { width: 500 },
      dataSource: employees,
      value: cellInfo.value,
      valueExpr: 'ID',
      displayExpr: 'FullName',
      contentTemplate(e) {
        return $('<div>').dxDataGrid({
          dataSource: employees,
          remoteOperations: true,
          columns: ['FullName', 'Title', 'Department'],
          hoverStateEnabled: true,
          scrolling: { mode: 'virtual' },
          height: 250,
          selection: { mode: 'single' },
          selectedRowKeys: [cellInfo.value],
          focusedRowEnabled: true,
          focusedRowKey: cellInfo.value,
          onSelectionChanged(selectionChangedArgs) {
            e.component.option('value', selectionChangedArgs.selectedRowKeys[0])
            cellInfo.setValue(selectionChangedArgs.selectedRowKeys[0])
            if (selectionChangedArgs.selectedRowKeys.length > 0) {
              e.component.close()
            }
          },
        })
      },
    })
  }

  function tagBoxEditorTemplate(cellElement, cellInfo) {
    return $('<div>').dxTagBox({
      dataSource: employees,
      value: cellInfo.value,
      valueExpr: 'ID',
      displayExpr: 'FullName',
      showSelectionControls: true,
      maxDisplayedTags: 3,
      showMultiTagOnly: false,
      applyValueMode: 'useButtons',
      searchEnabled: true,
      onValueChanged(e) {
        cellInfo.setValue(e.value)
      },
      onSelectionChanged() {
        cellInfo.component.updateDimensions()
      },
    })
  }
})

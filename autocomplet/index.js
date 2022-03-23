const autocomplet = [
  { country: 'Afghanistan', capital: 'Kabul' },
  { country: 'Albania', capital: 'Tirana' },
]
$(() => {
  $('#autocomplet').dxAutocomplete({
    dataSource: autocomplet,
    placeholder: 'Type country name',

    // show data with value in tab
    valueExpr: 'country',

    //serch data with value in tab
    searchExpr: 'capital',
  })
})

var employees = [
  {
    name: 'John Heart',
    position: 'CEO',
    officeNo: '901',
  },
  {
    name: 'Bill Silver',
    position: 'HR Manager',
    officeNo: '905',
  },
]

$(() => {
  $('#formaContainer')
    .dxForm({
      formData: {
        firstName: 'joe',
        lastName: 'heart',
        phone: '+256 555 878',
      },
    })
    .dxForm('instance')
  $('#updatePhone').dxButton({
    text: 'update the form number',
    onClick: function () {
      form.updateData('phone', '+1(455) 458-8999')
    },
  })
})

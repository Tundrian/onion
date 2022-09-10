const editBtn = document.querySelector('#edit')
const deleteBtn = document.querySelector('#delete')
const submitBtn = document.querySelector('#submit')
const cancelEditBtn = document.querySelector('#cancelEdit')

editBtn.addEventListener('click', editClicked)
deleteBtn.addEventListener('click', deleteClicked)
submitBtn.addEventListener('click', submitClicked)
cancelEditBtn.addEventListener('click', cancelEditClicked)

function editClicked(e) {
  editBtn.hidden = true
  deleteBtn.hidden = false
  submitBtn.hidden = false
  cancelEditBtn.hidden = false

  editBtn.disabled = true
  deleteBtn.disabled = false
  submitBtn.disabled = false
  cancelEditBtn.disabled = false

  document.querySelectorAll('input').forEach(input => input.disabled = false)
}

function deleteClicked(e){

}

async function submitClicked(e){
  e.preventDefault()
  await fetch(`/api/member/${document.querySelector('#_id').value}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({memberNumber: document.querySelector('#memberNumber').value})

  })
  

}

function cancelEditClicked(e){
  editBtn.hidden = false
  deleteBtn.hidden = true
  submitBtn.hidden = true
  cancelEditBtn.hidden = true

  editBtn.disabled = false
  deleteBtn.disabled = true
  submitBtn.disabled = true
  cancelEditBtn.disabled = true

  document.querySelectorAll('input').forEach(input => input.disabled = true)
}



document.querySelectorAll('input').forEach(input => input.disabled = true)
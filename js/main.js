const showModal = () => {  
  document.querySelectorAll('.form-btn').forEach(btn => {
      btn.onclick =  e => {
        document.body.classList.add('modal-open') 
        document.querySelector('section.modal').classList.add('show')
      }
    }
  )

  document.querySelector('.modal .close').onclick = () => {
    document.body.classList.remove('modal-open') 
    document.querySelector('section.modal').classList.remove('show')
  }

  window.onclick = e => { 
    if(e.target == document.querySelector('section.modal')) {
      document.body.classList.remove('modal-open') 
      document.querySelector('section.modal').classList.remove('show')
    }
  }

} 

document.addEventListener("DOMContentLoaded", () => { 
  showModal()
});
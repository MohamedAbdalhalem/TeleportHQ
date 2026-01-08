const collapseBtn = document.querySelector('.collapse-btn')
const links = document.querySelector('.Links')
const submitButton = document.querySelector('form button')
const submitModal = document.querySelector('#submit-modal')
const submitModalChild = document.querySelector('#submit-modal div')
console.log(submitButton, submitModal)
collapseBtn.addEventListener('click', () => {
    if (links.classList.contains('d-none')) {
        links.classList.replace('d-none','d-block')
    } else {
        links.classList.replace('d-block','d-none')
    }
})
submitButton.addEventListener('click', () => {
    submitModal.classList.replace('d-none','d-flex')
})
submitModal.addEventListener('click', (e) => {
    submitModal.classList.replace('d-flex', 'd-none')
})
submitModalChild.addEventListener('click', (e) => {
    e.stopPropagation()
})

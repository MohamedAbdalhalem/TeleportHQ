const collapseBtn = document.querySelector('.collapse-btn')
const links = document.querySelector('.Links')
console.log(collapseBtn, links)
collapseBtn.addEventListener('click', () => {
    if (links.classList.contains('d-none')) {
        links.classList.replace('d-none','d-block')
    } else {
        links.classList.replace('d-block','d-none')
    }
})
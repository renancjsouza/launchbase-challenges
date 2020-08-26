const modal = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modalClose = document.querySelector('.modal-close');


for (let card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute('id')
        modal.classList.add("active")
        modal.querySelector('iframe').src = `recipes/${videoId}.html`
    })
}

modalClose.addEventListener("click", function() {
    modal.classList.remove('active')
    modal.querySelector('iframe').src = ``
})


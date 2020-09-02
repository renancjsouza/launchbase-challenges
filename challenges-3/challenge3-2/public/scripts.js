const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

for (let card of cards) {
    card.addEventListener("click", function() {
        let pageId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://www.rocketseat.com.br/${pageId}`
    });
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
    modal.classList.remove('fullscreen')
    modal.querySelector('span').innerHTML = 'fullscreen'
})

document.querySelector('.maximize-modal').addEventListener("click", function() {
    if (modal.classList.contains('fullscreen')) {
        modal.classList.remove('fullscreen')
        modal.querySelector('span').innerHTML = 'fullscreen'
    } else {
        modal.classList.add('fullscreen')
        modal.querySelector('span').innerHTML = 'fullscreen_exit'
    }
})
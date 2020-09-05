const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function() {
        let pageId = card.getAttribute('id')
        window.location.href = `/courses/${pageId}`
    });
}
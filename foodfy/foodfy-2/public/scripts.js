const sections = document.querySelectorAll('span')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        let recipeId = card.getAttribute('id')
        window.location.href = `/recipes/${recipeId}`
    })
}


for (let section of sections) {
    section.addEventListener("click", function() {
        const sectionId = section.getAttribute('id')
        const showHidden = document.querySelector(`.${sectionId}`)
        
        if (showHidden.classList.contains("hidden")) {
            showHidden.classList.remove("hidden")
            section.innerText = "TO HIDE"
        }
        else {
            showHidden.classList.add("hidden")
            section.innerText = "SHOW"
        }
    })
}


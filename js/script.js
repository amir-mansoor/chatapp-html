const avatar = document.querySelector(".avatar")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close h1")


avatar.addEventListener('click', () => {
    modal.classList.toggle("open")
})

closeBtn.addEventListener('click', () => modal.classList.remove("open"))

const buttonsWrapper = document.querySelector(".nav")
const slides = document.querySelector(".inner")

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    )
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)"

    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-105%)"
      
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translateX(-210%)'
    }
  }
})






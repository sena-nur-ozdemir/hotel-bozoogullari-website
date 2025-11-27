const filterButtons = document.querySelectorAll(".filter-btn")
const galleryItems = document.querySelectorAll(".gallery-item")

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    button.classList.add("active")

    const filter = button.getAttribute("data-filter")

    galleryItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.classList.remove("hidden")
        setTimeout(() => {
          item.style.opacity = "1"
          item.style.transform = "scale(1)"
        }, 10)
      } else {
        item.style.opacity = "0"
        item.style.transform = "scale(0.8)"
        setTimeout(() => {
          item.classList.add("hidden")
        }, 300)
      }
    })
  })
})

const lightbox = document.getElementById("lightbox")
const lightboxImage = document.getElementById("lightboxImage")
const lightboxCaption = document.getElementById("lightboxCaption")
const lightboxClose = document.getElementById("lightboxClose")
const lightboxPrev = document.getElementById("lightboxPrev")
const lightboxNext = document.getElementById("lightboxNext")

let currentImageIndex = 0
const visibleImages = () => Array.from(galleryItems).filter((item) => !item.classList.contains("hidden"))

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img")
    const caption = item.querySelector(".gallery-overlay span")

    lightboxImage.src = img.src
    lightboxCaption.textContent = caption.textContent
    lightbox.classList.add("active")

    currentImageIndex = visibleImages().indexOf(item)
    document.body.style.overflow = "hidden"
  })
})

lightboxClose.addEventListener("click", closeLightbox)
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox()
  }
})

function closeLightbox() {
  lightbox.classList.remove("active")
  document.body.style.overflow = ""
}

lightboxPrev.addEventListener("click", () => {
  const images = visibleImages()
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length
  updateLightboxImage(images[currentImageIndex])
})

lightboxNext.addEventListener("click", () => {
  const images = visibleImages()
  currentImageIndex = (currentImageIndex + 1) % images.length
  updateLightboxImage(images[currentImageIndex])
})

function updateLightboxImage(item) {
  const img = item.querySelector("img")
  const caption = item.querySelector(".gallery-overlay span")
  lightboxImage.src = img.src
  lightboxCaption.textContent = caption.textContent
}

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return

  if (e.key === "Escape") {
    closeLightbox()
  } else if (e.key === "ArrowLeft") {
    lightboxPrev.click()
  } else if (e.key === "ArrowRight") {
    lightboxNext.click()
  }
})

console.log("[v0] Gallery scripts loaded successfully")

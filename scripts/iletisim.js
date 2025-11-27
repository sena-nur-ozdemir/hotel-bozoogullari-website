const contactForm = document.getElementById("contactForm")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    console.log("[v0] Contact form submitted:", data)

    alert("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.")
    contactForm.reset()
  })
}

console.log("[v0] Contact scripts loaded successfully")

gsap.to(".aboutMe", {
    text: "a passionate junior web developer.",
    duration: 5,
    ease: "power1.in",
    repeat: -1,
    repeatDelay: 1,
})

gsap.from(".welcome", {y: 30, opacity: 0, delay: 5, duration: 2,})

gsap.from(".nav_item", {y: 30, opacity: 0, duration: 4, stagger: 0.5,})

gsap.from(".img_project", {y: 30, opacity: 0.1, duration: 1.5, stagger: 1, ease: "power1.in", ease: "bounce", repeat: -1, repeatDelay: 3})

const goTopBtn = document.querySelector(".go-top-btn");

window.addEventListener("scroll", checkHeight)

function checkHeight() {
    if(window.scrollY > 200) {
        goTopBtn.style.display = "flex";
    }
    else {
        goTopBtn.style.display = "none";
    }
}

goTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

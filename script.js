document.addEventListener("DOMContentLoaded", () => {

    
    const navbar = document.getElementById("navbar");
        window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            navbar.classList.add("shrink");
        } else {
        navbar.classList.remove("shrink");
        }
    });

    const goTopBtn = document.querySelector(".go-top-btn");

    window.addEventListener("scroll", checkHeight);

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
    });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    window.addEventListener("load", () => {
        const navbar = document.getElementById("navbar");
        navbar.classList.add("loaded");
    });
    
    window.addEventListener("load", () => {
        const tl = gsap.timeline({
            defaults: {duration: 0.9, ease: "power2.out"}
        });

        tl
        .to(".hero-avatar", {opacity: 1, y: 0})
        .to("h1", {opacity: 1, y: 0}, "-=0.6")
        .to(".hero-subtitle", {opacity: 1, y: 0}, "-=0.6")
        .to(".hero-buttons", {opacity: 1, y: 0}, "-=0.6");
    });

});

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".certificate",
    {opacity: 0, y: 30},
    {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            toggleActions: "play none none none",
        }
    }
);

gsap.fromTo(".about-container",
    {opacity: 0, y: 30},
    {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".about-container",
            start: "top 85%",
            toggleActions: "restart reverse restart reverse",
        }
    }
);

gsap.fromTo(".skill-card",
    {
        opacity: 0,
        y: 40,
    },

    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#skills",
            start: "top 85%",
            toggleActions: "restart reverse restart reverse",
        }
    }
);

async function loadLanguage(lang) {
    try {
        const response = await fetch( `lang/${lang}.json`);
        const translations = await response.json();

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const keys = el.dataset.i18n.split(".");
            let text = translations;

            keys.forEach(key => {
                text = text[key];
            });

            if (text) {
                el.textContent = text;
            }
        });
    } catch (error) {
        console.error("Translation loading error:"), error;
    }
}

function setActiveLang(lang) {
    document.querySelectorAll("[data-lang]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
};

document.querySelectorAll("[data-lang]").forEach(button => {
    button.addEventListener("click", () => {
        const lang = button.dataset.lang;
        loadLanguage(lang);
        setActiveLang(lang);
        document.documentElement.lang = lang;
        localStorage.setItem("lang", lang);
    });
});

const savedLang = localStorage.getItem("lang")  || "en";
    loadLanguage(savedLang);
    setActiveLang(savedLang);
    document.documentElement.lang = savedLang;

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


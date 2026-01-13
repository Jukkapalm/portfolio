gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 767) {
    gsap.fromTo(".hero-banneri",
        { y: "100vh", opacity: 0, visibility: "visible" },
        { y: 0, opacity: 1, duration: 1.1, ease: "power4.out" }
    );

    gsap.from(".banner-txt h1, .banner-txt h3, .banner-txt h6, .banner-txt a", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.5
    });

    gsap.from("#teknologiat h2", {
        y: 50,
        opacity: 0,
        duration:0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#teknologiat",
            start: "top 80%",
            once: true
        }
    });

    gsap.from("#teknologiat .badges span", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#teknologiat",
            start: "top 80%",
            once: true
        }
    });

    gsap.from("#projektit h2", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#projektit",
            start: "top 80%",
            once: true
        }
    });

    gsap.from("#projektit .projekti-kortti", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#projektit",
            start: "top 80%",
            once: true
        }
    });

    gsap.from("#koulutus h2", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#koulutus",
            start: "top 80%",
            once: true
        }
    });

    gsap.from("#koulutus .koulutus li, #koulutus .table", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#koulutus",
            start: "top 80%",
            once: true
        }
    });

} else {
    const elementit = document.querySelectorAll(".hero-banneri, .banner-txt h1, .banner-txt h3, .banner-txt h6, .banner-txt a, #teknologiat h2, #teknologiat .badges span, #projektit h2, #projektit .projekti-kortti, #koulutus h2, #koulutus .koulutus li, #koulutus .table");
    elementit.forEach(el => {
        el.style.opacity = 1;
        el.style.transform = "none";
        el.style.visibility = "visible";
    });
}

const offcanvasLinkit = document.querySelectorAll("#mobileMenu .nav-link");
const offcanvasEl = document.getElementById("mobileMenu");
const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);

offcanvasLinkit.forEach(link => {
    link.addEventListener("click", () => {
        bsOffcanvas.hide();
    });
});
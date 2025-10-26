const closeBtn = document.getElementById("img-close");
const banner = document.getElementById("sign-up-banner");

closeBtn.addEventListener("click", () => {
  gsap.to(banner, {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power2.inOut",
    onComplete: () => banner.remove(),
  });
});

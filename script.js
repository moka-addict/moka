// script.js

// Adds a mobile "tap" effect for elements marked with [data-tap]
(function () {
  const tappables = document.querySelectorAll("[data-tap]");
  if (!tappables.length) return;

  const addTap = (el) => el.classList.add("is-tapping");
  const removeTap = (el) => el.classList.remove("is-tapping");

  tappables.forEach((el) => {
    // Touch
    el.addEventListener("touchstart", () => addTap(el), { passive: true });
    el.addEventListener("touchend", () => removeTap(el));
    el.addEventListener("touchcancel", () => removeTap(el));

    // Mouse fallback (optional)
    el.addEventListener("mousedown", () => addTap(el));
    el.addEventListener("mouseup", () => removeTap(el));
    el.addEventListener("mouseleave", () => removeTap(el));
  });
})();

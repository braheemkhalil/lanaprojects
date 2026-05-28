// Detail page interactions: image lightbox and keyboard-friendly gallery.
(function () {
  function buildLightbox() {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.hidden = true;
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Image viewer");
    lightbox.innerHTML = `
      <button class="lightbox__close" type="button" aria-label="Close image viewer">&#x2715;</button>
      <button class="lightbox__nav lightbox__prev" type="button" aria-label="Previous image">&#8249;</button>
      <img class="lightbox__img" alt="Property photo">
      <button class="lightbox__nav lightbox__next" type="button" aria-label="Next image">&#8250;</button>
    `;
    document.body.appendChild(lightbox);
    return lightbox;
  }

  function initDetailGallery() {
    const galleryImages = Array.from(document.querySelectorAll(".detail-gallery img"));
    if (!galleryImages.length) return;

    const lightbox = document.querySelector(".lightbox") || buildLightbox();
    const img = lightbox.querySelector(".lightbox__img");
    const closeBtn = lightbox.querySelector(".lightbox__close");
    const prevBtn = lightbox.querySelector(".lightbox__prev");
    const nextBtn = lightbox.querySelector(".lightbox__next");
    let index = 0;
    let lastFocusEl = null;

    galleryImages.forEach((image, i) => {
      image.setAttribute("role", "button");
      image.setAttribute("tabindex", "0");
      image.setAttribute("aria-label", image.alt ? `Open ${image.alt}` : "Open project image");
      image.addEventListener("click", () => openAt(i, image));
      image.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openAt(i, image);
        }
      });
    });

    function openAt(nextIndex, opener) {
      index = (nextIndex + galleryImages.length) % galleryImages.length;
      const source = galleryImages[index];
      lastFocusEl = opener || document.activeElement;
      img.src = source.currentSrc || source.src;
      img.alt = source.alt || "Property photo";
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      const showNav = galleryImages.length > 1;
      prevBtn.style.display = showNav ? "" : "none";
      nextBtn.style.display = showNav ? "" : "none";
      closeBtn.focus();
    }

    function close() {
      lightbox.hidden = true;
      img.removeAttribute("src");
      document.body.style.overflow = "";
      lastFocusEl?.focus?.();
      lastFocusEl = null;
    }

    function prev() {
      openAt(index - 1);
    }

    function next() {
      openAt(index + 1);
    }

    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      prev();
    });
    nextBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      next();
    });
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) close();
    });
    window.addEventListener("keydown", (event) => {
      if (lightbox.hidden) return;
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDetailGallery);
  } else {
    initDetailGallery();
  }
})();

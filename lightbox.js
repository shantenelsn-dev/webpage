document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".lightbox");
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  document.body.appendChild(overlay);

  const fullImage = document.createElement("img");
  overlay.appendChild(fullImage);

  images.forEach(image => {
    image.addEventListener("click", function (e) {
      e.preventDefault();
      fullImage.src = image.href;
      overlay.style.display = "flex";
    });
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });
});
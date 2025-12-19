// Modal full-image viewer
(function () {
  const modal = document.getElementById("imgModal");
  if (!modal) return;

  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const closeBtn = document.getElementById("modalClose");

  function openModal(src, title) {
    modal.classList.add("open");
    modalImg.src = src;
    modalImg.alt = title || "Artwork";
    modalTitle.textContent = title || "Artwork";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    modalImg.src = "";
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-full]");
    if (!btn) return;

    const src = btn.getAttribute("data-full");
    const title = btn.getAttribute("data-title") || "";
    openModal(src, title);
  });

  closeBtn?.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
})();

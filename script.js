//--- video button buy product-----
document.addEventListener("DOMContentLoaded", function () {
  const videoCards = document.querySelectorAll(".video-card");

  videoCards.forEach((card) => {
    const caption = card.querySelector(".video-caption span");
    const buyButton = card.querySelector(".video-buy");

    if (!caption || !buyButton) return;

    buyButton.addEventListener("click", function (e) {
      e.preventDefault();

      const videoName = caption.textContent.trim();

      const message = `Hello, I am interested in *${videoName}* Products. Please share the relevant AWPL product details, price and ordering information.`;

      const whatsappURL = `https://wa.me/917061378706?text=${encodeURIComponent(message)}`;

      window.open(whatsappURL, "_blank");
    });
  });
});
//----Product Message------
document.querySelectorAll(".product-card").forEach(function (card) {
  const buyButton = card.querySelector("a.btn");
  if (!buyButton) return;

  buyButton.addEventListener("click", function () {
    const productName =
      card.querySelector("h3")?.textContent.trim() || "AWPL product";
    const productDetails =
      card.querySelector(".product-content p")?.innerText.trim() || "";

    const message =
      "Hello, I want to buy this AWPL product: " +
      "*" +
      productName +
      "*" +
      (productDetails ? ". Product details: " + productDetails : "") +
      ". Please share price, availability and ordering details.";

    buyButton.href =
      "https://wa.me/917061378706?text=" + encodeURIComponent(message);
  });
});

//-------menu Toggle--------

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );

  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute("aria-label", "Open navigation menu");

    menuToggle.textContent = "☰";
  });
});

const videoMoreBtn = document.getElementById("videoMoreBtn");

const hiddenVideos = document.querySelectorAll(".video-card.video-hidden");

videoMoreBtn.addEventListener("click", () => {
  const isExpanded = videoMoreBtn.getAttribute("aria-expanded") === "true";

  hiddenVideos.forEach((card) => {
    card.style.display = isExpanded ? "none" : "block";
  });

  videoMoreBtn.setAttribute("aria-expanded", String(!isExpanded));

  videoMoreBtn.textContent = isExpanded ? "See More Videos" : "See Less";
});

document.getElementById("year").textContent = new Date().getFullYear();

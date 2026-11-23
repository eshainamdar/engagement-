const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const hint = document.getElementById("hint");
const confettiLayer = document.getElementById("confettiLayer");
let opened = false;

function openInvitation() {
  if (opened) return;
  opened = true;
  envelope.classList.add("is-open");
  envelope.setAttribute("aria-expanded", "true");
  openButton.innerHTML = 'View venue <span>↗</span>';
  hint.textContent = "A celebration awaits — tap the venue name on the card";
  makeConfetti();

  // The venue link is added as a transparent, accessible click target over
  // the Narmada Residency line on the original invitation artwork.
  const venueLink = document.createElement("a");
  venueLink.className = "venue-hotspot";
  venueLink.href = "https://maps.app.goo.gl/htrqwzCTb79crgFk7";
  venueLink.target = "_blank";
  venueLink.rel = "noopener noreferrer";
  venueLink.setAttribute("aria-label", "Open Narmada Residency in Google Maps");
  venueLink.title = "Open Narmada Residency in Google Maps";
  document.querySelector(".letter").appendChild(venueLink);
}

function makeConfetti() {
  for (let i = 0; i < 34; i++) {
    const piece = document.createElement("i");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty("--drift", `${(Math.random() - .5) * 180}px`);
    piece.style.animationDelay = `${Math.random() * .65}s`;
    confettiLayer.appendChild(piece);
    setTimeout(() => piece.remove(), 3000);
  }
}
envelope.addEventListener("click", openInvitation);
envelope.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openInvitation();
  }
});
openButton.addEventListener("click", () => {
  if (!opened) openInvitation();
  else window.open("https://maps.app.goo.gl/htrqwzCTb79crgFk7", "_blank", "noopener");
});

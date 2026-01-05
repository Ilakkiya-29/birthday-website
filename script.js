// ===== MUSIC SYSTEM (GLOBAL) =====
const song = document.getElementById("song");
const musicBtn = document.getElementById("musicBtn");

// Resume music if user already started it
if (localStorage.getItem("music") === "on") {
  song.play().catch(() => {});
  if (musicBtn) musicBtn.innerText = "⏸ Pause Music";
}

// Toggle music
function toggleMusic() {
  if (song.paused) {
    song.play();
    localStorage.setItem("music", "on");
    musicBtn.innerText = "⏸ Pause Music";
  } else {
    song.pause();
    localStorage.setItem("music", "off");
    musicBtn.innerText = "▶ Play Music";
  }
}

// ===== START MUSIC AND GO (INDEX ONLY) =====
function startMusicAndGo() {
  song.play().then(() => {
    localStorage.setItem("music", "on");
    window.location.href = "intro.html";
  });
}

// ===== GIFTS =====
let currentGift = 0;

const gifts = [
  { img: "j5.jpeg", text: "Some moments stay forever 🖤" },
  { img: "j7.jpeg", text: "You make days brighter ✨" },
  { img: "j3.jpeg", text: "Your smile is magic 🌙" },
  { img: "j6.jpg", text: "Happy Birthday 💖" }
];

function openGift(i) {
  if (i !== currentGift) return;

  document.getElementById("giftImg").src = gifts[i].img;
  document.getElementById("giftText").innerText = gifts[i].text;
  document.getElementById("reveal").style.display = "flex";

  document.querySelectorAll(".gift")[i].classList.remove("active");
}

function closeReveal() {
  document.getElementById("reveal").style.display = "none";
  currentGift++;

  const next = document.querySelectorAll(".gift")[currentGift];
  if (next) next.classList.add("active");
}

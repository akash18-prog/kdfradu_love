const correctPassword = "kuttyma";

function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === correctPassword) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").style.display = "block";
    startTyping();
    startCountdown();
  } else {
    document.getElementById("error").innerText = "Wrong password 😢";
  }
}

function playMusic() {
  document.getElementById("bgMusic").play();
}

const text = "Kutty Ma… You entered my life silently, but changed everything loudly. I am not perfect, but my love for you is real, deep, and forever. I promise to stand as your lover, your support, and always your Fradu ❤️";

let i = 0;
function startTyping() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(startTyping, 60);
  }
}

function startCountdown() {
  const valentine = new Date("Feb 14, 2026 00:00:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const d = valentine - now;
    document.getElementById("timer").innerHTML =
      Math.floor(d / (1000 * 60 * 60 * 24)) + " days to go ❤️";
  }, 1000);
}

function yes() {
  alert("She said YES 💖 Forever starts now!");
}
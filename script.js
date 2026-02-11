const correctPassword = "kuttyma";
const text =
"Kutty Ma… You came into my life when I was alone. " +
"Today because of you, I know what love feels like. " +
"I promise to stand as your lover, your support, and always your Fradu ❤️";

let i = 0;

function unlock(){
  const pass = document.getElementById("password").value;
  if(pass === correctPassword){
    document.getElementById("lock").style.display="none";
    document.getElementById("content").style.display="block";
    document.getElementById("music").play();
    typeText();
    startCountdown();
  } else {
    document.getElementById("error").innerText="Wrong password 😢";
  }
}

function typeText(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 60);
  }
}

function startCountdown(){
  const v = new Date("Feb 14, 2026").getTime();
  setInterval(()=>{
    const d = v - new Date().getTime();
    document.getElementById("timer").innerText =
      Math.floor(d/(1000*60*60*24)) + " days to go ❤️";
  },1000);
}

window.addEventListener("scroll", ()=>{
  if(window.scrollY > 1200){
    document.getElementById("secret").classList.remove("hidden");
  }
});

function sayYes(){
  alert("She said YES 💍❤️\nForever starts now.");
}
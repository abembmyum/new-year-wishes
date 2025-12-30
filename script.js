
const wishes = [
"May 2026 bring growth, recognition, and new achievements. ✨",
"Believe in progress, consistency, and yourself. 🎊",
"May this year bring new beginnings and beautiful moments. 🎉",
"Wishing you courage to chase your dreams. 🌟",
"Cheers to new beginnings! 🥂",
"Your dreams will shine bright this year! 🌟",
"Happy New Year 2026. 🍾",
"Here’s to a year filled with laughter and love. 🎆",
"Every sunrise brings a new chance to succeed. 💛",
"Challenges are stepping stones—rise in 2026.🎆",
"A new year, a new chapter. 🎊"
];

const btn = document.getElementById('explodeBtn');
const wishBox = document.getElementById('wishBox');
const boom = document.getElementById('boom');

btn.onclick = () => {
  boom.play().catch(()=>{});
  wishBox.textContent = wishes[Math.floor(Math.random()*wishes.length)];
};

// Fireworks canvas (minimal)
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

window.onresize = () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
};

function firework() {
  const x = Math.random()*canvas.width;
  const y = Math.random()*canvas.height/2;
  const colors = ["gold","white","orange","yellow"];
  for (let i=0; i<60; i++) {
    let angle = i * (Math.PI*2/60);
    let speed = Math.random()*4+2;
    let vx = Math.cos(angle)*speed;
    let vy = Math.sin(angle)*speed;

    let px=x, py=y;
    let life=30;
    const color = colors[Math.floor(Math.random()*colors.length)];

    const interval = setInterval(()=>{
      ctx.beginPath();
      ctx.arc(px,py,2,0,2*Math.PI);
      ctx.fillStyle=color;
      ctx.fill();
      px+=vx;
      py+=vy;
      vy+=0.05;
      life--;
      if(life<=0) clearInterval(interval);
    },16);
  }
}

setInterval(firework,1000);

const confetti=document.getElementById("confetti");
const colors=["#ff6ea9","#ff9ec8","#ff7fb8","#ff4f9a"];
for(let i=0;i<40;i++){
  const s=document.createElement("span");
  s.textContent="❤";
  s.style.left=Math.random()*100+"vw";
  s.style.top=Math.random()*-40+"vh";
  s.style.color=colors[Math.floor(Math.random()*colors.length)];
  s.style.animationDuration=(6+Math.random()*6)+"s";
  s.style.fontSize=(12+Math.random()*12)+"px";
  confetti.appendChild(s);
}

const heroGift=document.getElementById('heroGift');
const bgLayer=document.getElementById('bgLayer');
const bgImg=document.getElementById('memoryBgImg');
let hideTimeout;

heroGift.addEventListener('mouseenter',()=>{
  clearTimeout(hideTimeout);
  const photo=heroGift.querySelector('.popup-photo');
  bgImg.src=photo.dataset.bg;
  bgLayer.style.opacity='1';
  bgImg.style.transform='scale(1.08)';
});

heroGift.addEventListener('mouseleave',()=>{
  hideTimeout=setTimeout(()=>{
    bgLayer.style.opacity='0';
    bgImg.style.transform='scale(1)';
  },600);
});

function playMusic(){
  const bgMusic=document.getElementById('bgMusic');
  bgMusic.volume=0.8;
  bgMusic.play().catch(()=>alert("Tap again to allow sound"));
}

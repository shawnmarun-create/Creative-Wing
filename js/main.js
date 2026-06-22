// Creative Wing Investments — global behaviors

// Mobile nav
document.addEventListener("click",e=>{
  if(e.target.closest(".hamburger")) document.body.classList.toggle("menu-open");
  else if(e.target.closest(".nav-links a")) document.body.classList.remove("menu-open");
});

// Year
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());

// Reveal on scroll
const io=new IntersectionObserver(entries=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }});
},{threshold:.12});
document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-zoom").forEach(el=>io.observe(el));

// Floating WhatsApp button
(function(){
  const num=window.WHATSAPP_NUMBER||"263773967500";
  const txt=encodeURIComponent("Hi Creative Wing Investments, I need help on the website.");
  const fab=document.createElement("a");
  fab.href=`https://wa.me/${num}?text=${txt}`;
  fab.target="_blank";fab.rel="noopener";fab.className="fab";fab.setAttribute("aria-label","Chat on WhatsApp");
  fab.innerHTML=`<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M19.11 17.27c-.27-.13-1.6-.79-1.85-.88s-.43-.13-.61.13c-.18.27-.7.88-.86 1.06s-.32.2-.59.07a7.4 7.4 0 0 1-2.18-1.34 8.18 8.18 0 0 1-1.51-1.88c-.16-.27 0-.42.12-.55s.27-.32.4-.48a1.85 1.85 0 0 0 .27-.45.5.5 0 0 0 0-.47c-.07-.13-.61-1.46-.83-2s-.44-.45-.61-.46h-.52a1 1 0 0 0-.72.34 3 3 0 0 0-.94 2.24 5.21 5.21 0 0 0 1.1 2.78 12 12 0 0 0 4.6 4.06 15.13 15.13 0 0 0 1.53.57 3.69 3.69 0 0 0 1.69.11 2.76 2.76 0 0 0 1.81-1.28 2.24 2.24 0 0 0 .16-1.28c-.06-.11-.24-.17-.51-.3zM16 4A12 12 0 0 0 5.61 22.06l-1.5 5.5a.75.75 0 0 0 .92.92l5.6-1.46A12 12 0 1 0 16 4zm0 21.93a9.94 9.94 0 0 1-5.07-1.39l-.36-.21-3.74 1 1-3.65-.24-.38A9.94 9.94 0 1 1 16 25.93z"/></svg>`;
  document.body.appendChild(fab);
  const tip=document.createElement("div");tip.className="fab-tip";tip.textContent="Need help? Chat with us!";
  document.body.appendChild(tip);
  setTimeout(()=>{tip.classList.add("show");setTimeout(()=>tip.classList.remove("show"),3500)},1800);
})();

// Hero slideshow (home)
(function(){
  const slides=document.querySelectorAll(".hero-slide");
  if(!slides.length) return;
  let i=0; slides[0].classList.add("active");
  setInterval(()=>{
    slides[i].classList.remove("active");
    i=(i+1)%slides.length;
    slides[i].classList.add("active");
  },4500);
})();

// Smooth in-page anchor offset for nav height handled by scroll-margin-top via CSS scroll-behavior smooth

// Contact form -> WhatsApp prefilled message
document.addEventListener("DOMContentLoaded",()=>{
  const form=document.getElementById("contactForm");
  if(!form) return;
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(form).entries());
    const msg=`Hello Creative Wing Investments,\n\nMy name is *${data.name||"-"}*.\nInterested in: ${data.interest||"General enquiry"}\n\n${data.message||""}\n\nContact me back on: ${data.phone||"this WhatsApp number"}`;
    const num=window.WHATSAPP_NUMBER||"263773967500";
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
  });
});

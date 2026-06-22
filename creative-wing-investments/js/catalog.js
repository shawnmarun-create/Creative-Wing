// Catalog rendering, filtering, modal, WhatsApp message builder
(function(){
  const WA = window.WHATSAPP_NUMBER || "263773967500";
  const fmt = n => "$"+n.toLocaleString("en-US");
  const enc = s => encodeURIComponent(s);

  function orderMsg(p, kind){
    if(kind==="check"){
      return `Hi Creative Wing Investments, is *${p.name}* (ID: ${p.id}) currently in stock? Thanks.`;
    }
    let extras = "";
    if(p.year)        extras += `\n• Year: ${p.year}`;
    if(p.mileage)     extras += `\n• Mileage: ${p.mileage}`;
    if(p.transmission)extras += `\n• Transmission: ${p.transmission}`;
    if(p.fuel)        extras += `\n• Fuel: ${p.fuel}`;
    if(p.body)        extras += `\n• Body: ${p.body}`;
    if(p.color)       extras += `\n• Color: ${p.color}`;
    if(p.category)    extras += `\n• Category: ${p.category}`;
    return `Hello Creative Wing Investments,\n\nI'd like to order:\n• Item: *${p.name}* (ID: ${p.id})\n• Price: *${fmt(p.price)} USD*${extras}\n\nPayment: Cash on collection.\nPlease confirm availability and pickup details. Thank you!`;
  }
  const waLink = (msg)=> `https://wa.me/${WA}?text=${enc(msg)}`;

  function card(p, type){
    const stockBadge = p.inStock
      ? `<span class="badge badge-stock">In stock</span>`
      : `<span class="badge badge-out">Out of stock</span>`;
    const meta = type==="cars"
      ? `<div class="meta"><span>${p.year}</span><span>${p.body}</span><span>${p.transmission}</span><span>${p.fuel}</span></div>`
      : `<div class="meta"><span>${p.category}</span><span>Sizes S–XXL</span></div>`;
    return `
    <article class="card reveal" data-id="${p.id}">
      ${stockBadge}
      <div class="card-img"><img loading="lazy" src="${p.image}" alt="${p.name}"></div>
      <div class="card-body">
        <h3>${p.name}</h3>
        ${meta}
        <div class="price">${fmt(p.price)}</div>
        <div class="card-actions">
          <a class="btn btn-wa btn-sm" target="_blank" rel="noopener"
             href="${waLink(orderMsg(p,"order"))}"
             ${p.inStock?'':'aria-disabled="true"'}>Order</a>
          <button class="btn btn-ghost btn-sm" data-open="${p.id}">Details</button>
        </div>
      </div>
    </article>`;
  }

  function renderGrid(targetSel, items, type){
    const el=document.querySelector(targetSel);
    if(!el) return;
    if(!items.length){ el.innerHTML=`<div class="empty"><h3>No items match your filters</h3><p>Try clearing filters or searching a different keyword.</p></div>`; return; }
    el.innerHTML = items.map(p=>card(p,type)).join("");
    // animate in
    el.querySelectorAll(".reveal").forEach((c,i)=>{ setTimeout(()=>c.classList.add("in"), 40*i); });
  }

  // Modal
  function ensureModal(){
    let m=document.getElementById("modal");
    if(m) return m;
    m=document.createElement("div");
    m.id="modal";m.className="modal";
    m.innerHTML=`<div class="modal-box" role="dialog" aria-modal="true">
      <button class="modal-close" aria-label="Close">✕</button>
      <div class="modal-img"><img alt=""></div>
      <div class="modal-body"></div>
    </div>`;
    document.body.appendChild(m);
    m.addEventListener("click",e=>{
      if(e.target===m||e.target.closest(".modal-close")) m.classList.remove("open");
    });
    document.addEventListener("keydown",e=>{if(e.key==="Escape") m.classList.remove("open")});
    return m;
  }
  function openModal(p, type){
    const m=ensureModal();
    m.querySelector(".modal-img img").src=p.image;
    m.querySelector(".modal-img img").alt=p.name;
    const stockLine = p.inStock
      ? `<p style="color:var(--light-green);font-weight:600;margin:0">● In stock — ready for collection</p>`
      : `<p style="color:#ff8a8a;font-weight:600;margin:0">● Currently out of stock</p>`;
    const specs = type==="cars" ? `
      <div class="meta">
        <span>Year ${p.year}</span><span>${p.body}</span>
        <span>${p.transmission}</span><span>${p.fuel}</span>
        <span>${p.mileage}</span><span>${p.color}</span>
      </div>` : `
      <div class="meta"><span>${p.category}</span><span>Sizes: S, M, L, XL, XXL</span><span>Jersey + Shorts</span></div>`;
    const desc = type==="cars"
      ? `<p>Well-maintained ${p.body.toLowerCase()} ready for inspection in Harare. Cash deals only — please confirm availability before traveling.</p>`
      : `<p>High-quality breathable polyester jersey + shorts set. Custom team printing available on request. Cash deals only.</p>`;
    m.querySelector(".modal-body").innerHTML=`
      <span class="eyebrow">${type==="cars"?"Vehicle":"Sportswear"} • ID ${p.id}</span>
      <h3>${p.name}</h3>
      <div class="price">${"$"+p.price.toLocaleString("en-US")} USD</div>
      ${specs}
      ${desc}
      ${stockLine}
      <div class="modal-actions">
        <a class="btn btn-wa" target="_blank" rel="noopener"
           href="https://wa.me/${WA}?text=${encodeURIComponent(orderMsg(p,'order'))}">Order on WhatsApp</a>
        <a class="btn btn-ghost" target="_blank" rel="noopener"
           href="https://wa.me/${WA}?text=${encodeURIComponent(orderMsg(p,'check'))}">Check Availability</a>
      </div>
    `;
    m.classList.add("open");
  }

  // Filters & search
  function setupCatalog(opts){
    const {gridSel, items, type, categories} = opts;
    const search = document.getElementById("search");
    const sort   = document.getElementById("sort");
    const stockOnly = document.getElementById("stockOnly");
    const chipsEl = document.getElementById("chips");
    let activeCat = "All";

    if(chipsEl && categories){
      chipsEl.innerHTML = ["All",...categories].map(c=>
        `<button class="chip ${c==='All'?'active':''}" data-cat="${c}">${c}</button>`).join("");
      chipsEl.addEventListener("click",e=>{
        const b=e.target.closest(".chip"); if(!b) return;
        chipsEl.querySelectorAll(".chip").forEach(c=>c.classList.remove("active"));
        b.classList.add("active"); activeCat=b.dataset.cat; apply();
      });
    }

    function apply(){
      let list=[...items];
      if(activeCat!=="All"){
        list=list.filter(p=> (type==="cars"? p.body : p.category) === activeCat);
      }
      const q=(search?.value||"").trim().toLowerCase();
      if(q) list=list.filter(p=>p.name.toLowerCase().includes(q)||p.id.toLowerCase().includes(q));
      if(stockOnly?.checked) list=list.filter(p=>p.inStock);
      const s=sort?.value||"default";
      if(s==="price-asc") list.sort((a,b)=>a.price-b.price);
      else if(s==="price-desc") list.sort((a,b)=>b.price-a.price);
      else if(s==="name") list.sort((a,b)=>a.name.localeCompare(b.name));
      renderGrid(gridSel,list,type);
    }
    [search,sort,stockOnly].forEach(el=>el&&el.addEventListener("input",apply));
    apply();

    // delegate "Details" clicks
    document.addEventListener("click",e=>{
      const b=e.target.closest("[data-open]"); if(!b) return;
      const id=b.dataset.open;
      const p=items.find(x=>x.id===id); if(p) openModal(p,type);
    });
  }

  // Featured (home page)
  function renderFeatured(sel,items,type,n=6){
    const el=document.querySelector(sel); if(!el) return;
    el.innerHTML=items.slice(0,n).map(p=>card(p,type)).join("");
    el.querySelectorAll(".reveal").forEach((c,i)=>setTimeout(()=>c.classList.add("in"),60*i));
  }

  window.CWI = { setupCatalog, renderFeatured, openModal };
})();

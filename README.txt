CREATIVE WING INVESTMENTS — WEBSITE
=====================================

A multi-page static website. No build step needed.

QUICK START
-----------
Just open index.html in your browser, or upload the whole folder to any web host
(Netlify, Vercel, cPanel, GitHub Pages, Hostinger, etc.).

FILES
-----
index.html         Home page (hero slideshow + featured products)
cars.html          Cars catalog (filters, search, sort, modal)
sportswear.html    Sportswear catalog
about.html         Brand story + values
contact.html       Contact info, map, WhatsApp form
css/style.css      All styling
css/animations.css Reveal-on-scroll animations
js/data.js         ⭐ EDIT THIS to change products/prices/stock
js/main.js         Global behaviors (nav, scroll reveal, slideshow, WhatsApp FAB)
js/catalog.js      Catalog grid + filtering + product modal
js/contact.js      Contact form -> WhatsApp
images/logo.jpeg   Brand logo
images/cars/       18 car photos (01-18.jpeg)
images/sportswear/ 20 jersey-set photos (01-20.jpeg)

EDITING PRODUCTS
----------------
Open js/data.js. Each product is one line in the CARS or SPORTSWEAR array:

  { id:"C01", name:"Toyota Auris Hatchback", price:8500, year:2014, ...
    inStock:true, image:"images/cars/01.jpeg" },

To mark something out of stock, change inStock:true → inStock:false.
To change price, edit the number (USD).
To change name or specs, edit the strings.
Save and refresh the page.

CHANGING THE WHATSAPP NUMBER
----------------------------
Open js/data.js, edit the first line:
  const WHATSAPP_NUMBER = "263773967500";
Use international format with country code, NO leading "+" or spaces.

ADDING NEW PRODUCTS
-------------------
1) Drop the photo into images/cars/ or images/sportswear/.
2) Add a new line in js/data.js with a unique id (e.g. "C19" or "S21"),
   matching the image path.
3) Save & refresh.

WHATSAPP MESSAGES
-----------------
The site never collects payments. Every "Order" or "Check Availability" button
opens WhatsApp on your number with a pre-filled message containing the product
name, ID, price, and any details — you confirm and arrange cash collection.

The floating green WhatsApp button (bottom-right of every page) opens a generic
"I need help on the website" chat.

CUSTOMIZING COLORS
------------------
Open css/style.css and edit the :root variables (top of the file).
Colors are based on the Creative Wing brand palette.

LOCATION
--------
Currently set to "Harare, Zimbabwe" as a demo. To pin a real address:
- Edit contact.html (the contact-row with "Location")
- Edit the Google Maps iframe src to your address:
  src="https://www.google.com/maps?q=YOUR+FULL+ADDRESS&output=embed"

That's it. Cash deals only · USD pricing.

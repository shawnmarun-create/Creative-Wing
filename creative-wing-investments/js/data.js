/* Creative Wing Investments — product data
   Edit names, prices, stock here. Prices in USD. Set inStock:false to mark sold-out.
*/

const WHATSAPP_NUMBER = "263773967500"; // international format, no '+'
const BUSINESS_NAME = "Creative Wing Investments";
const LOCATION = "Harare, Zimbabwe";

const CARS = [
  { id:"C01", name:"Toyota Auris Hatchback", price:8500, year:2014, mileage:"118,000 km", transmission:"Automatic", fuel:"Petrol", body:"Hatchback", color:"Maroon", inStock:true, image:"images/cars/01.jpeg" },
  { id:"C02", name:"Toyota Sedan Executive", price:9200, year:2013, mileage:"135,000 km", transmission:"Automatic", fuel:"Petrol", body:"Sedan", color:"Silver", inStock:true, image:"images/cars/02.jpeg" },
  { id:"C03", name:"Honda Fit Compact", price:6800, year:2012, mileage:"142,000 km", transmission:"Automatic", fuel:"Petrol", body:"Hatchback", color:"White", inStock:true, image:"images/cars/03.jpeg" },
  { id:"C04", name:"Mazda Demio Sport", price:6500, year:2013, mileage:"128,000 km", transmission:"Automatic", fuel:"Petrol", body:"Hatchback", color:"Red", inStock:true, image:"images/cars/04.jpeg" },
  { id:"C05", name:"Nissan AD Wagon", price:7200, year:2014, mileage:"110,000 km", transmission:"Automatic", fuel:"Petrol", body:"Wagon", color:"White", inStock:true, image:"images/cars/05.jpeg" },
  { id:"C06", name:"Toyota Corolla Sedan", price:9800, year:2015, mileage:"95,000 km", transmission:"Automatic", fuel:"Petrol", body:"Sedan", color:"Pearl White", inStock:true, image:"images/cars/06.jpeg" },
  { id:"C07", name:"Honda Civic Sedan", price:10500, year:2015, mileage:"102,000 km", transmission:"Automatic", fuel:"Petrol", body:"Sedan", color:"Black", inStock:true, image:"images/cars/07.jpeg" },
  { id:"C08", name:"Toyota Vitz Hatch", price:5800, year:2012, mileage:"148,000 km", transmission:"Automatic", fuel:"Petrol", body:"Hatchback", color:"Blue", inStock:true, image:"images/cars/08.jpeg" },
  { id:"C09", name:"Mazda Axela Touring", price:9400, year:2014, mileage:"125,000 km", transmission:"Automatic", fuel:"Petrol", body:"Sedan", color:"Grey", inStock:true, image:"images/cars/09.jpeg" },
  { id:"C10", name:"Nissan Tiida Latio", price:7800, year:2013, mileage:"132,000 km", transmission:"Automatic", fuel:"Petrol", body:"Sedan", color:"Champagne", inStock:true, image:"images/cars/10.jpeg" },
  { id:"C11", name:"Toyota Wish MPV", price:11200, year:2014, mileage:"138,000 km", transmission:"Automatic", fuel:"Petrol", body:"MPV", color:"Pearl", inStock:true, image:"images/cars/11.jpeg" },
  { id:"C12", name:"Honda Stream RSZ", price:8900, year:2013, mileage:"140,000 km", transmission:"Automatic", fuel:"Petrol", body:"MPV", color:"Black", inStock:true, image:"images/cars/12.jpeg" },
  { id:"C13", name:"Toyota Spacio Family", price:7600, year:2012, mileage:"152,000 km", transmission:"Automatic", fuel:"Petrol", body:"MPV", color:"Silver", inStock:true, image:"images/cars/13.jpeg" },
  { id:"C14", name:"Toyota Premio Luxury", price:12500, year:2015, mileage:"98,000 km", transmission:"Automatic", fuel:"Petrol", body:"Sedan", color:"Pearl White", inStock:true, image:"images/cars/14.jpeg" },
  { id:"C15", name:"Mazda CX-5 SUV", price:14800, year:2014, mileage:"115,000 km", transmission:"Automatic", fuel:"Petrol", body:"SUV", color:"Soul Red", inStock:true, image:"images/cars/15.jpeg" },
  { id:"C16", name:"Nissan X-Trail SUV", price:13200, year:2013, mileage:"130,000 km", transmission:"Automatic", fuel:"Petrol", body:"SUV", color:"Black", inStock:true, image:"images/cars/16.jpeg" },
  { id:"C17", name:"Honda Vezel Hybrid", price:13800, year:2015, mileage:"105,000 km", transmission:"Automatic", fuel:"Hybrid", body:"SUV", color:"White Pearl", inStock:true, image:"images/cars/17.jpeg" },
  { id:"C18", name:"Toyota RAV4 SUV", price:15500, year:2014, mileage:"120,000 km", transmission:"Automatic", fuel:"Petrol", body:"SUV", color:"Bronze", inStock:true, image:"images/cars/18.jpeg" }
];

const SPORTSWEAR = [
  { id:"S01", name:"Yellow Chevron Jersey Set",   price:25, category:"Jersey Set", inStock:true, image:"images/sportswear/01.jpeg" },
  { id:"S02", name:"Royal Blue Pro Kit",           price:28, category:"Jersey Set", inStock:true, image:"images/sportswear/02.jpeg" },
  { id:"S03", name:"Crimson Striker Set",          price:25, category:"Jersey Set", inStock:true, image:"images/sportswear/03.jpeg" },
  { id:"S04", name:"Emerald Match Kit",            price:26, category:"Jersey Set", inStock:true, image:"images/sportswear/04.jpeg" },
  { id:"S05", name:"Black Tactic Set",             price:27, category:"Jersey Set", inStock:true, image:"images/sportswear/05.jpeg" },
  { id:"S06", name:"Sky Blue Speed Kit",           price:25, category:"Jersey Set", inStock:true, image:"images/sportswear/06.jpeg" },
  { id:"S07", name:"Orange Flare Set",             price:25, category:"Jersey Set", inStock:true, image:"images/sportswear/07.jpeg" },
  { id:"S08", name:"Purple Rush Kit",              price:26, category:"Jersey Set", inStock:true, image:"images/sportswear/08.jpeg" },
  { id:"S09", name:"White Elite Jersey Set",       price:28, category:"Jersey Set", inStock:true, image:"images/sportswear/09.jpeg" },
  { id:"S10", name:"Forest Green Match Set",       price:26, category:"Jersey Set", inStock:true, image:"images/sportswear/10.jpeg" },
  { id:"S11", name:"Navy Captain Kit",             price:27, category:"Jersey Set", inStock:true, image:"images/sportswear/11.jpeg" },
  { id:"S12", name:"Lime Apex Set",                price:25, category:"Jersey Set", inStock:true, image:"images/sportswear/12.jpeg" },
  { id:"S13", name:"Maroon Legacy Kit",            price:26, category:"Jersey Set", inStock:true, image:"images/sportswear/13.jpeg" },
  { id:"S14", name:"Teal Velocity Set",            price:25, category:"Jersey Set", inStock:true, image:"images/sportswear/14.jpeg" },
  { id:"S15", name:"Charcoal Stealth Kit",         price:28, category:"Jersey Set", inStock:true, image:"images/sportswear/15.jpeg" },
  { id:"S16", name:"Pink Phoenix Set",             price:26, category:"Jersey Set", inStock:true, image:"images/sportswear/16.jpeg" },
  { id:"S17", name:"Gold Champion Kit",            price:30, category:"Jersey Set", inStock:true, image:"images/sportswear/17.jpeg" },
  { id:"S18", name:"Aqua Dynamic Set",             price:25, category:"Jersey Set", inStock:true, image:"images/sportswear/18.jpeg" },
  { id:"S19", name:"Burgundy Pro Kit",             price:27, category:"Jersey Set", inStock:true, image:"images/sportswear/19.jpeg" },
  { id:"S20", name:"Mint Glide Set",               price:25, category:"Jersey Set", inStock:true, image:"images/sportswear/20.jpeg" }
];

// All sportswear sets include jersey + shorts, sizes S–XXL on request.
const SPORTSWEAR_SIZES = ["S","M","L","XL","XXL"];

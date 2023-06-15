
let productDisplayed = 
JSON.parse(localStorage.getItem('data')) ? 
JSON.parse(localStorage.getItem('data')) :localStorage.setItem('data', JSON.stringify([
  {
   id: 1,
   Image:"https://i.postimg.cc/wvbzF5xQ/curve-monitor.jpg",
   Title: "Acer Predator Z35 35-inch Curved Full HD (2560 x 1080) ",
   Description:"The Predator Z35 curved screen transforms your viewing experience drawing you deep into the action with NVIDIA G-SYNC tech eliminates screen tearing for an epic gaming experience",
   price:"R37 720"
  

  },
  {
      id: 2,
      Image:"https://i.postimg.cc/T1L6sypM/headset.jpg",
      Title: "Over-Ear PANDORA USB RGB Gaming Headset",
      Description:"Experienced enhanced gaming sound with the H50 Pandora USB RGB Gaming Headset. It features 7.1 Surround Sound Audio, a lightweight design, a detachable microphone and RGB backlighting.",
      price:"R650"},

     
  {
   id: 3,
   Image:"https://i.postimg.cc/0yNLXM3t/orange-tower.jpg",
   Title: "Thermaltake View 91 TG RGB Ultra Tower Black PC Case CA-1I9-00F1WN-00",
   Description:"Thermaltake View 91 TG RGB. Ultra Tower, Material: SPCC,Tempered glass. Front fans installed: 1x 140 mm, Front fans: 120,140 mm, Side fans: 120,140,200 mm",
   price:"8 999"
  },
  {
   id: 4,
   Image:"https://i.postimg.cc/sDmkJ9nQ/rgb-key-Wmon.jpg",
   Title: "Wireless Gaming Keyboard & Mouse,rainbow Backlit Keyboard",
   Description:"Gaming Keyboard Mouse ComboThe gaming keyboard is made of aluminum alloy brushed panel, which is sturdy and durable. It can be waterproof, and the keyboard builts-in 3000mAh battery. The mouse builts-in 800mAh battery ,eliminates the trouble of frequently changing batteries. No operation automatically sleeps within 5 minutes, any key wakes up. Get this great combo for the best gaming experience",
   price:"R1 200"
  },
  {
   id: 5,
   Image:"https://i.postimg.cc/jSkBpqYR/scorpion-chair.jpg",
   Title: "giant scorpion gaming chair is a zero-gravity computer workstation",
   Description:"With the highly stable steel structure, fully electrical tilting capabilities, LED / RGB lighting, Our Newly developed Scorpion shape chair - IW-SK is the future of high-end home and office ,and gaming computer work environments. It offers functions that enable the user to experience unprecedented comfort and quasi total immersion through strategically positioned monitors, audio system and accessories.",
   price:"R19 000"
  },
  {
   id: 6,
   Image:"https://i.postimg.cc/cLnQKPFG/one-hadn.jpg",
   Title: "One Hand RGB Gaming Keyboard & Mouse Combo,USB Wired Rainbow Letters Glow Single Hand Mechanical Feeling Keyboard with Wrist Rest Support",
   Description:" 39 non-conflict keys allows you to press or hold multiple keys simultaneously. The ergonomic wrist rest provides comfortable typing experience. Pefect keyboard and mouse for all games Ergonomically designed construction,6 Buttons, Made of quality ABS plastic, Comfortable and durable ",
   price:"R1 500"
  },

])) 

let productData = document.querySelector('#productData')

function showData(){
  productData.innerHTML = ''
  productDisplayed.forEach((data) =>{
    productData.innerHTML += 
    `
    <div class="newCard"">
    <img class="newCardImg" src="${data.Image}">
    <div class="body-newCard">
      <h5 class="title-newCard">${data.Title}</h5>
      <p class="text-newCard">${data.Description }</p>
      <button onclick="addToCart()" class="btn btn-primary">add to cart</=>
    </div>
  </div>
    `
  })
}
showData();

function addToCart() {
  alert("sorry, function Coming soon :/")
}
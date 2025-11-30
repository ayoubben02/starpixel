
// Toggle mobile nav
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('primary-navigation');

toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isExpanded));
    navLinks.classList.toggle('show');
});

// Optional: close nav when clicking a link (mobile)
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && window.matchMedia('(max-width: 720px)').matches) {
        navLinks.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
    }
});


const products = [
  { name: "Tanjiro Kamado Akaza Wallpaper", price: "$1", image: "images/wall1.jpg", link : "https://starpixel0.gumroad.com/l/TanjiroKamado" },
  { name: "Black Asta Black Clover Wallpaper", price: "$1", image: "images/wall2.jpg", link : "https://starpixel0.gumroad.com/l/BlackAsta" },
  { name: "Skull American flag Wallpaper", price: "$1", image: "images/wall3.png", link : "https://starpixel0.gumroad.com/l/SkullAmericanflag" },
  { name: "Naruto Uzumaki Smiley face Wallpaper", price: "$1", image: "images/wall4.jpg", link : "https://starpixel0.gumroad.com/l/NarutoUzumaki" },
  { name: "Toyota GR Supra City street Wallpaper", price: "$1", image: "images/wall5.jpg", link : "https://starpixel0.gumroad.com/l/ToyotaGRSupra" },
  { name: "Mitsuri Kanroji Neon art Wallpaper", price: "$1", image: "images/wall6.png", link : "https://starpixel0.gumroad.com/l/MitsuriKanroji" },
  { name: "Lilo & Stitch 3D Wallpaper", price: "$1", image: "images/wall7.jpg", link : "https://starpixel0.gumroad.com/l/LiloStitch" },
  { name: "Goku Ultra Instinct Electric Wallpaper", price: "$1", image: "images/wall8.png", link : "https://starpixel0.gumroad.com/l/GokuUltraInstinct" },
  { name: "Sung Jinwoo Anime poster Wallpaper", price: "$1", image: "images/wall9.jpg", link : "https://starpixel0.gumroad.com/l/SungJinwoo" },
  { name: "Urban Automotive Mercedes-AMG G 63 2025 Wallpaper", price: "$1", image: "images/wall10.jpg", link : "https://starpixel0.gumroad.com/l/UrbanAutomotive" }
];

const container = document.querySelector(".product-list");

products.forEach(p => {
  container.innerHTML += `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">${p.price}</p>
      <a href="${p.link}"><button class="btn">Buy Now</button></a>
    </div>`;
});


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
  { name: "Minimal Aesthetic Wallpapers Pack (10 HD Images)", price: "$1", image: "images/cover-square.jpg", link : "https://bensassiayoub2.gumroad.com/l/iyshsv" },
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

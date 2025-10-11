// Product images
const products = [
  {
    name: "Prunex",
    image: "https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/PE/PE_142626_GRA_26102020_142206_MAIN.jpg",
    price: "S/ 76.00",
    benefit: "Regulate your intestinal transit and say goodbye to constipation!",
  },
  {
    name: "No Stress",
    image: "https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/PE/PE_143070_GRA_17092020_230030_MAIN.jpg",
    price: "S/ 142.50",
    benefit: "Reduce your cortisol levels and enjoy mental relaxation!",
  },
  {
    name: "Rexet",
    image: "https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/PE/PE_145993_GRA_27012021_200316_MAIN.jpg",
    price: "S/ 129.50",
    benefit: "Detox your liver and control your appetite to reduce overeating anxiety!",
  },
  {
    name: "Vita XTRA T+",
    image: "https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/PE/PE_142625_EXT_13092021_155851_MAIN.jpeg",
    price: "S/ 129.50",
    benefit: "Boost your energy naturally and stay active all day!",
  },
  {
    name: "Thermo T3",
    image: "https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/PE/PE_142623_GRA_17092020_213145_MAIN.jpg",
    price: "S/ 129.50",
    benefit: "Accelerate fat burning and manage your weight effectively!",
  },
  {
    name: "Flora Liv",
    image: "https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/PE/PE_142953_GRA_17092020_210524_MAIN.jpg",
    price: "S/ 154.00",
    benefit: "Heal your gastritis and balance your gut flora for optimal digestive health!",
  },
  {
    name: "Vera +",
    image: "https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/PE/PE_143069_GRA_17092020_213013_MAIN.jpg",
    price: "S/ 169.00",
    benefit: "Strengthen your immune system and improve your body's defenses!",
  },
  {
    name: "Youth Elixir",
    image: "https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/PE/PE_145082_GRA_17092020_225522_MAIN.jpg",
    price: "S/ 129.50",
    benefit: "Delay the signs of aging and revitalize your skin!",
  }
];

// Render catalog function
function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  grid.innerHTML = products.map((product, idx) => `
    <div class="product-card">
      <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <button class="toggle-btn" aria-label="Mostrar información" data-idx="${idx}">&#8250;</button>
        <div class="product-details" style="display:none;">
          <div class="product-price">${product.price}</div>
          <div class="product-benefit">${product.benefit}</div>
        </div>
      </div>
    </div>
  `).join('');
  // Assing event listener to the toggler buttons
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = this.dataset.idx;
      const details = this.parentElement.querySelector('.product-details');
      const isOpen = details.style.display === 'block';
      details.style.display = isOpen ? 'none' : 'block';
      this.classList.toggle('open', !isOpen);
      // Change arrow direction (open/close)
      this.innerHTML = window.innerWidth <= 600 ? (isOpen ? '&#8250;' : '&#8964;') : (isOpen ? '&#8250;' : '&#8964;');
    });
  });
}

// Call function loading page
window.addEventListener('DOMContentLoaded', renderCatalog);

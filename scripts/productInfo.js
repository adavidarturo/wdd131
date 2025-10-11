const infoProducts = [
  {
    name: "Prunex",
    ingredients: "With Plum Extract, Prebiotic Fibers, and Star Anise to improve intestinal health.",
    benefits: "Regulates and promotes intestinal transit in a gentle yet highly effective manner, preventing constipation and ensuring a deep digestive cleanse without causing discomfort or irritation.",
  },
  {
    name: "No Stress",
    ingredients: "Features Amino Acids (like L-Theanine), Poppy Extract, and B-Complex Vitamins for brain function.",
    benefits: "Induces a feeling of deep relaxation and well-being, effectively decreasing stress, tension, and irritability. This leads to improved mental concentration and a more restful sleep.",
  },
  {
    name: "Rexet",
    ingredients: "Contains Amino Acids (like L-Tryptophan), Yacón Fiber, and Chromium for weight control.",
    benefits: "Detoxifies and naturally regenerates your liver, while significantly reducing food anxiety and excessive appetite. It helps maintain stable glucose levels and supports effective weight management.",
  },
  {
    name: "Vita XTRA T+",
    ingredients: "Formula based on Amino Acids, Vitamins, Minerals, and energizing extracts like Guarana and Açai.",
    benefits: "Powers your energy—both physical and mental—in a completely natural way, helping you stay active. It optimizes your daily performance and reduces the sensation of chronic fatigue or prolonged tiredness.",
  },
  {
    name: "Thermo T3",
    ingredients: "Enhanced with Green Tea Extract, L-Carnitine, Chromium, and Malabar Extract (Garcinia Cambogia).",
    benefits: "Acts as a powerful fat burner by boosting your metabolism, which facilitates weight loss. It also converts fat into an energy source for your body, helping you visibly reduce body measurements.",
  },
  {
    name: "Flora Liv",
    ingredients: "With 10 billion Probiotic Bacteria and Prebiotic Fiber (chicory inulin).",
    benefits: "Extended Benefits	Heals and relieves gastritis, restoring and balancing your intestinal flora to optimize digestion. This enhances the absorption of essential nutrients and boosts the immune system's response capability.",
  },
  {
    name: "Vera +",
    ingredients: "Formulated with Aloe Vera, Vitamin C, and Ganoderma Lucidum Beta-Glucans for cell protection.",
    benefits: "Strengthens and elevates your immune system, improving your body's defense capability to protect the organism. It also offers powerful antioxidant protection at the cellular level.",
  },
  {
    name: "Youth Elixir",
    ingredients: "Features a blend of Amino Acids (Hydrolyzed Collagen), Antioxidants (Resveratrol, Vitamins C and E), and Berries (Açai, Maqui).",
    benefits: "Combats the visible signs of aging from the inside out, promotes the firmness and elasticity of the skin, and boosts the health and growth of hair and nails, maintaining a youthful appearance.",
  },
];

// Render function to display the product info
function renderInfoList() {
  const list = document.getElementById('info-list');
  list.innerHTML = infoProducts.map((product, idx) => `
    <div class="info-card">
      <div class="info-name">${product.name}</div>
      <button class="info-toggle-btn" aria-label="Show information" data-idx="${idx}">&#8250;</button>
      <div class="info-details" id="details-${idx}">
        <div class="info-ingredients"><strong>Ingredients:</strong> ${product.ingredients}</div>
        <div class="info-benefits"><strong>Benefits:</strong> ${product.benefits}</div>
      </div>
    </div>
  `).join('');
  // Assign event listeners to toggle buttons
  document.querySelectorAll('.info-toggle-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = this.dataset.idx;
      const details = document.getElementById(`details-${idx}`);
      const isOpen = details.classList.contains('open');
      details.classList.toggle('open', !isOpen);
      this.classList.toggle('open', !isOpen);
      // Change arrow direction 
      this.innerHTML = window.innerWidth <= 600
        ? (isOpen ? '&#8250;' : '&#8964;')
        : (isOpen ? '&#8250;' : '&#8964;');
    });
  });
}

// Render function on DOMContentLoaded
window.addEventListener('DOMContentLoaded', renderInfoList);

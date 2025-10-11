// Product options
const productOptions = [
  "Prunex",
  "No Stress",
  "Rexet",
  "Vita XTRA T+",
  "Thermo T3",
  "Flora Liv",
  "Vera +",
  "Youth Elixir"
];

// Render the dropdown menu options
function renderProductOptions() {
  const select = document.getElementById('product');
  if (!select) return; // Prevent error if element not found

  select.innerHTML = '<option value="" disabled selected>Select a product</option>' +
    productOptions.map(name =>
      `<option value="${name}">${name}</option>`
    ).join('');
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;

  // Basic validation
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Get form data
  const data = {
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    names: form.names.value.trim(),
    surnames: form.surnames.value.trim(),
    product: form.product.value,
    message: form.message.value.trim()
  };

  // Save to localStorage
  localStorage.setItem('fuxionForm', JSON.stringify(data));

  // Show success message
  document.getElementById('form-success').style.display = 'block';
  form.reset();
}

// Initialize the form when the page loads
window.addEventListener('DOMContentLoaded', () => {
  renderProductOptions();

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
});

/*
  - The form validates required fields and saves data to localStorage.
*/

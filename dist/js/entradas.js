const startPurchaseBtn = document.getElementById("start-purchase");
const formSection = document.getElementById("form-section");
const infoSection = document.getElementById("info-section");
const thankyouSection = document.getElementById("thankyou-section");
const form = document.getElementById("purchase-form");

const nameInput = document.getElementById("name");
const quantityInput = document.getElementById("quantity");
const promotionSelect = document.getElementById("promotion");
const dateInput = document.getElementById("date");
const submitBtn = form.querySelector('button[type="submit"]');

const errors = {
  name: document.getElementById("error-name"),
  quantity: document.getElementById("error-quantity"),
  date: document.getElementById("error-date"),
};

startPurchaseBtn.addEventListener("click", () => {
  infoSection.classList.add("hidden");
  formSection.classList.remove("hidden");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Reset errors
  Object.values(errors).forEach((error) => error.classList.add("hidden"));

  let valid = true;

  if (nameInput.value.trim() === "") {
    errors.name.classList.remove("hidden");
    valid = false;
  }
  if (quantityInput.value.trim() === "" || parseInt(quantityInput.value) <= 0) {
    errors.quantity.classList.remove("hidden");
    valid = false;
  }
  if (dateInput.value.trim() === "") {
    errors.date.textContent = "* Seleccioná una fecha";
    errors.date.classList.remove("hidden");
    valid = false;
  } else {
    const selectedDate = new Date(dateInput.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // reset hora para comparar solo fechas

    if (selectedDate < today) {
      errors.date.textContent = "* La fecha debe ser mayor o igual a hoy";
      errors.date.classList.remove("hidden");
      valid = false;
    }
  }

  if (valid) {
    // Disable button + loading text
    submitBtn.disabled = true;
    submitBtn.textContent = "Procesando...";

    setTimeout(() => {
      formSection.classList.add("hidden");
      thankyouSection.classList.remove("hidden");

      const duration = 4 * 1000;
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();

      // Redirect after 5 seconds
      setTimeout(() => {
        window.location.href = "index.html";
      }, 5000);
    }, 1500); // Delay to simulate processing
  }
});

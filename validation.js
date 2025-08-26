<!-- scripts/validation.js -->
document.addEventListener("DOMContentLoaded", () => {
  const daySelect = document.querySelector("select[name='day']");
  const monthSelect = document.querySelector("select[name='month']");
  const yearSelect = document.querySelector("select[name='year']");
  const expMonth = document.querySelector("select[name='expMonth']");
  const expYear = document.querySelector("select[name='expYear']");

  for (let d = 1; d <= 31; d++) {
    daySelect.innerHTML += `<option value="${d}">${d}</option>`;
  }

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  months.forEach((month, i) => {
    const option = `<option value="${i + 1}">${month}</option>`;
    monthSelect.innerHTML += option;
    expMonth.innerHTML += option;
  });

  for (let y = 1950; y <= 2025; y++) {
    yearSelect.innerHTML += `<option value="${y}">${y}</option>`;
  }

  for (let y = 2025; y <= 2030; y++) {
    expYear.innerHTML += `<option value="${y}">${y}</option>`;
  }
});

function validateForm() {
  const form = document.getElementById("registrationForm");
  if (form.password.value !== form.confirmPassword.value) {
    alert("Passwords do not match!");
    return false;
  }

  const cardNumberClean = form.cardNumber.value.trim().replace(/\s+/g, "");
  if (!/^\d{13,19}$/.test(cardNumberClean)) {
    alert("Invalid credit card number (13–19 digits only).“);
    return false;
  }
  return true;
}

function copyAddress(checkbox) {
  if (checkbox.checked) {
    const street = document.getElementById("street").value.trim();
    const suburb = document.getElementById("suburb").value.trim();
    const city = document.getElementById("city").value.trim();
    const province = document.getElementById("province").value.trim();
    const postalCode = document.getElementById("postalCode").value.trim();
    const fullAddress = `${street}, ${suburb}, ${city}, ${province}, ${postalCode}`;
    document.getElementById("postalAddress").value = fullAddress;
  } else {
    document.getElementById("postalAddress").value = "";
  }
}

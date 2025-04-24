document.getElementById("deposit-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const amount = parseFloat(document.getElementById("deposit-amount").value);

  const messageBox = document.getElementById("deposit-msg");

  if (amount >= 500) {
    messageBox.textContent = "You are now a VIP! $700 has been credited to your account. You can withdraw anytime!";
  } else if (amount >= 80) {
    messageBox.textContent = `You deposited $${amount}. You can withdraw once your balance reaches $120.`;
  } else {
    messageBox.textContent = "Minimum deposit is $80. Please increase the amount.";
  }
});

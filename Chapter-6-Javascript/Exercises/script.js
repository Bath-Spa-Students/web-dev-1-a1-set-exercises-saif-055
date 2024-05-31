const costPerLiterInput = document.getElementById("cost-per-liter");
const litersPurchasedInput = document.getElementById("liters-purchased");
const calculateBtn = document.getElementById("calculate-btn");
const totalCostOutput = document.getElementById("total-cost");

// Set default values
costPerLiterInput.value = "1.72";
litersPurchasedInput.value = "0";

// Calculate total cost of petrol
function calculateTotalCost() {
  const costPerLiter = parseFloat(costPerLiterInput.value);
  const litersPurchased = parseFloat(litersPurchasedInput.value);
  const totalCost = costPerLiter * litersPurchased;
  totalCostOutput.innerText = `Total cost: AED${totalCost.toFixed(2)}`;
}

// Attach event listener to calculate button
calculateBtn.addEventListener("click", calculateTotalCost);

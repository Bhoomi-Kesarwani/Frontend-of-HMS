const inventoryTable = document.getElementById("inventory-table").getElementsByTagName("tbody")[0];

function addMedication() {
  const name = document.getElementById("med-name").value;
  const quantity = document.getElementById("med-quantity").value;
  const expiry = document.getElementById("med-expiry").value;
  addInventoryRow("Medication", name, quantity, expiry);
}

function addEquipment() {
  const name = document.getElementById("equip-name").value;
  const quantity = document.getElementById("equip-quantity").value;
  addInventoryRow("Equipment", name, quantity, "");
}

function addSupply() {
  const name = document.getElementById("supply-name").value;
  const quantity = document.getElementById("supply-quantity").value;
  addInventoryRow("Supply", name, quantity, "");
}

function addInventoryRow(type, name, quantity, expiry) {
  const row = inventoryTable.insertRow();
  row.insertCell(0).textContent = type;
  row.insertCell(1).textContent = name;
  row.insertCell(2).textContent = quantity;
  row.insertCell(3).textContent = expiry || "N/A";
  
  // Clear input fields
  document.getElementById(`${type.toLowerCase()}-name`).value = "";
  document.getElementById(`${type.toLowerCase()}-quantity`).value = "";
  if (expiry) document.getElementById("med-expiry").value = "";
}

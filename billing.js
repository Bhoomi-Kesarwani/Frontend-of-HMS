function calculateTotal() {
    const consultationFee = parseFloat(document.getElementById("consultation-fee").value) || 0;
    const serviceCharge = parseFloat(document.getElementById("service-charge").value) || 0;
    const tax = parseFloat(document.getElementById("tax").value) || 0;

    // Calculate Medications Total
    let medicationsTotal = 0;
    document.querySelectorAll(".medication-cost").forEach(input => {
        medicationsTotal += parseFloat(input.value) || 0;
    });

    // Calculate Other Services Cost
    const otherServiceCost = parseFloat(document.getElementById("other-service-cost").value) || 0;

    // Calculate Total Amount
    const totalAmount = consultationFee + serviceCharge + medicationsTotal + otherServiceCost;
    const totalWithTax = totalAmount + (totalAmount * (tax / 100));

    // Update the Total Amount in the UI
    document.getElementById("total-amount").textContent = totalWithTax.toFixed(2);
}

function addMedication() {
    const medicationsList = document.getElementById("medications-list");
    const medicationItem = document.createElement("div");
    medicationItem.classList.add("medication-item");
    medicationItem.innerHTML = `
        <input type="text" placeholder="Medication Name" class="medication-name">
        <input type="number" placeholder="Cost" class="medication-cost" oninput="calculateTotal()">
    `;
    medicationsList.appendChild(medicationItem);
}

function generateInvoice() {
    const patientId = document.getElementById("patient-id").value;
    const appointmentId = document.getElementById("appointment-id").value;
    const consultationFee = document.getElementById("consultation-fee").value;
    const serviceCharge = document.getElementById("service-charge").value;
    const tax = document.getElementById("tax").value;
    const totalAmount = document.getElementById("total-amount").textContent;

    // Update Billing Slip
    document.getElementById("slip-patient-id").textContent = patientId;
    document.getElementById("slip-appointment-id").textContent = appointmentId;
    document.getElementById("slip-consultation-fee").textContent = consultationFee;
    document.getElementById("slip-service-charge").textContent = serviceCharge;
    document.getElementById("slip-tax").textContent = (parseFloat(totalAmount) - (parseFloat(consultationFee) + parseFloat(serviceCharge))).toFixed(2);
    document.getElementById("slip-total-amount").textContent = totalAmount;

    // Update Medications List in Billing Slip
    const medicationsList = document.getElementById("slip-medications-list");
    medicationsList.innerHTML = ''; // Clear previous entries
    document.querySelectorAll(".medication-item").forEach(item => {
        const medicationName = item.querySelector(".medication-name").value;
        const medicationCost = item.querySelector(".medication-cost").value;
        if (medicationName && medicationCost) {
            const listItem = document.createElement("li");
            listItem.textContent = `${medicationName}: ₹${medicationCost}`;
            medicationsList.appendChild(listItem);
        }
    });

    // Show Billing Slip
    document.getElementById("billing-slip-container").style.display = "block";
}

function nextToDoctorInfo() {
    // Hide Patient Information form
    document.getElementById('patient-form').style.display = 'none';
    // Show Doctor Information form
    document.getElementById('doctor-form').style.display = 'block';
}

function prevToPatientInfo() {
    // Hide Doctor Information form
    document.getElementById('doctor-form').style.display = 'none';
    // Show Patient Information form
    document.getElementById('patient-form').style.display = 'block';
}

function nextToAppointmentInfo() {
    // Hide Doctor Information form
    document.getElementById('doctor-form').style.display = 'none';
    // Show Appointment Information form
    document.getElementById('appointment-form').style.display = 'block';
}

function prevToDoctorInfo() {
    // Hide Appointment Information form
    document.getElementById('appointment-form').style.display = 'none';
    // Show Doctor Information form
    document.getElementById('doctor-form').style.display = 'block';
}

function confirmAppointment() {
    // Hide Appointment Information form
    document.getElementById('appointment-form').style.display = 'none';

    // Display Booking Slip
    const slipDetails = `
        Your appointment has been booked successfully!
        Date: ${document.querySelector('#appointment-form input[type="date"]').value}
        Time: ${document.querySelector('#appointment-form input[type="time"]').value}
    `;
    document.getElementById('slip-details').innerText = slipDetails;
    document.getElementById('booking-slip').style.display = 'block';
}




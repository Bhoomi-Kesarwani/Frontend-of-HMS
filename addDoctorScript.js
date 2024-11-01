function clearForm() {
    document.getElementById('doctorForm').reset();
    document.getElementById('subcategory').innerHTML = '<option value="">Select Subcategory</option>'; 
}

function nextForm() {
    document.getElementById('doctorForm').reset();
    document.getElementById('subcategory').innerHTML = '<option value="">Select Subcategory</option>'; 
}

function updateSubcategory() {
    const category = document.getElementById('category').value;
    const subcategorySelect = document.getElementById('subcategory');
    subcategorySelect.innerHTML = '<option value="">Select Subcategory</option>'; // Reset subcategory options

    if (category === 'specialist') {
        subcategorySelect.innerHTML += `
            <option value="gynecologist">Gynecologist</option>
            <option value="cardiologist">Cardiologist</option>
            <option value="pathologist">Pathologist</option>
        `;
    } else if (category === 'surgeon') {
        subcategorySelect.innerHTML += `
            <option value="cardiothoracicSurgeon">Cardiothoracic Surgeon</option>
            <option value="plasticSurgeon">Plastic Surgeon</option>
            <option value="orthopedicSurgeon">Orthopedic Surgeon</option>
        `;
    }
}

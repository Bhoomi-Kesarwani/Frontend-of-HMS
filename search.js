function searchDoctors() {
    const category = document.getElementById("doctorCategory").value;
    const timing = document.getElementById("doctorTiming").value;
    const resultDiv = document.getElementById("searchResult");

    // Check if both fields are filled
    if (!category || !timing) {
        resultDiv.textContent = "Please select a category and enter the timing.";
        return;
    }

    // AJAX request to fetch doctor data from Django API
    fetch(`http://localhost:8000/api/doctors?category=${category}&timing=${encodeURIComponent(timing)}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const doctorNames = data.map(doc => `${doc.name}: ${doc.timing}`).join('<br>');
                resultDiv.innerHTML = `Doctors Available:<br>${doctorNames}`;
            } else {
                resultDiv.textContent = "No doctors found for the selected category and timing.";
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resultDiv.textContent = "An error occurred while fetching the data.";
        });
    }
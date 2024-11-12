document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Handle client data
    const clientFullName = document.getElementById('clientFullName').value;
    const clientDOB = document.getElementById('clientDOB').value;
    const clientDuration = document.getElementById('clientDuration').value;
    const clientPrice = parseFloat(document.getElementById('clientPrice').value) || 0;

    if (clientFullName && clientDOB && clientDuration) {
        const clientData = {
            fullName: client FullName,
            dob: clientDOB,
            duration: clientDuration,
            price: clientPrice
        };

        // Send data to the server
        fetch('/save-client', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clientData)
        })
        .then(response => response.text())
        .then(data => {
            alert(data); // Show success message
            // Clear input fields after saving
            document.getElementById('clientForm').reset();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});

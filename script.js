let totalClientsCount = 0; // Initialize total clients count
let totalRevenueAmount = 0; // Initialize total revenue

document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Handle client data
    const clientFullName = document.getElementById('clientFullName').value;
    const clientDOB = document.getElementById('clientDOB').value;
    const clientDuration = document.getElementById('clientDuration').value;
    const clientPrice = parseFloat(document.getElementById('clientPrice').value) || 0;

    if (clientFullName && clientDOB && clientDuration) {
        totalClientsCount++;
        totalRevenueAmount += clientPrice; // Update total revenue
        document.getElementById('totalClientsCount').textContent = totalClientsCount; // Update total clients on the total clients page
        document.getElementById('totalRevenueAmount').textContent = totalRevenueAmount.toFixed(2); // Update total revenue on the total revenue page

        // Add client to the list
        const clientList = document.getElementById('clientList');
        const li = document.createElement('li');
        li.textContent = `${clientFullName} - DOB: ${clientDOB} - Duration: ${clientDuration} Month(s) - Price: ₹${clientPrice}`;
        clientList.appendChild(li);

        // Clear input fields after saving
        document.getElementById('clientForm').reset();
    }
});

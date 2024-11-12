let totalClientsCount = 0; // Initialize total clients count
let totalAppointmentsCount = 0; // Initialize total appointments count
let totalRevenueAmount = 0; // Initialize total revenue

document.getElementById('uploadData').addEventListener('click', function() {
    // Handle client data
    const clientName = document.getElementById('clientName').value;
    const clientSessions = document.getElementById('clientSessions').value;

    if (clientName && clientSessions) {
        totalClientsCount++;
        document.getElementById('totalClientsCount').textContent = totalClientsCount; // Update total clients on the total clients page
        const clientList = document.getElementById('clientList');
        const li = document.createElement('li');
        li.textContent = `${clientName} - Total Sessions: ${clientSessions}`;
        clientList.appendChild(li);
    }

    // Handle appointment data
    const appointmentClient = document.getElementById('appointmentClient').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    if (appointmentClient && appointmentTime) {
        totalAppointmentsCount++;
        document.getElementById('totalAppointmentsCount').textContent = totalAppointmentsCount; // Update total appointments on the total appointments page
        const appointmentList = document.getElementById('appointmentList');
        const li = document.createElement('li');
        li.textContent = `${appointmentClient} - Appointment Time: ${appointmentTime}`;
        appointmentList.appendChild(li);
    }

    // Handle revenue data
    const sessionPrice = parseFloat(document.getElementById('sessionPrice').value) || 0;
    const totalSessions = totalClientsCount * 10; // Example: assuming each client has 10 sessions
    totalRevenueAmount = sessionPrice * totalSessions;
    document.getElementById('totalRevenueAmount').textContent = totalRevenueAmount.toFixed(2); // Update total revenue on the total revenue page

    // Clear input fields after upload
    document.getElementById('clientForm').reset();
    document.getElementById('appointmentForm').reset();
    document.getElementById('sessionPrice').value = '';
});

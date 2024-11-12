let totalClientsCount = 0; // Initialize total clients count
let totalAppointmentsCount = 0; // Initialize total appointments count
let totalRevenueAmount = 0; // Initialize total revenue

document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const clientName = document.getElementById('clientName').value;
    const clientSessions = document.getElementById('clientSessions').value;

    const clientList = document.getElementById('clientList');
    const li = document.createElement('li');
    li.textContent = `${clientName} - Total Sessions: ${clientSessions}`;
    clientList.appendChild(li);

    totalClientsCount++;
    document.getElementById('totalClientsCount').textContent = totalClientsCount; // Update total clients on the total clients page
});

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const appointmentClient = document.getElementById('appointmentClient').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    const appointmentList = document.getElementById('appointmentList');
    const li = document.createElement('li');
    li.textContent = `${appointmentClient} - Appointment Time: ${appointmentTime}`;
    appointmentList.appendChild(li);

    totalAppointmentsCount++;
    document.getElementById('totalAppointmentsCount').textContent = totalAppointmentsCount; // Update total appointments on the total appointments page
});

document.getElementById('calculateRevenue').addEventListener('click', function() {
    const sessionPrice ⬤

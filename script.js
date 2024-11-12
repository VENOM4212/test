document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const clientName = document.getElementById('clientName').value;
    const clientSessions = document.getElementById('clientSessions').value;

    const clientList = document.getElementById('clientList');
    const li = document.createElement('li');
    li.textContent = `${clientName} - Total Sessions: ${clientSessions}`;
    clientList.appendChild(li);

    document.getElementById('clientForm').reset();
});

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const appointmentClient = document.getElementById('appointmentClient').value;
    const appointmentTime = document.getElementById('

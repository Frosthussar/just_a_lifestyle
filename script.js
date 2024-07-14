document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const user = {
        email: document.getElementById('email').value,
        lastModTime: document.getElementById('lastModTime').value,
        mealPlan: document.getElementById('mealPlan').value,
        nickname: document.getElementById('nickname').value,
        timeOfReg: document.getElementById('timeOfReg').value,
        userId: document.getElementById('userId').value
    };

    fetch('/addUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert('Error: ' + data.error);
        } else {
            alert('User added successfully with ID: ' + data.id);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

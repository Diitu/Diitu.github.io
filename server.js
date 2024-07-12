document.getElementById('submission').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;

    fetch('/.netlify/functions/submission/submission.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            resubscribe: true
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorData => {
                throw new Error(`Network response was not ok: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
            });
        }
        return response.json();
    })
    .then(data => {
        alert('Subscription successful! You will be notified about the latest updates to Pulsey.');
    })
    .catch(error => {
        console.error('There was a problem with your submission:', error);
        alert('There was a problem with your submission: ' + error.message);
    });
});

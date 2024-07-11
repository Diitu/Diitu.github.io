document.getElementById('submission').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;

    fetch('https://api.mailerlite.com/api/v2/subscribers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-MailerLite-ApiKey': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMGFlMTNlNzFlNzczY2I4OWMyNzA4OTBlMDcwZTJiYzEwNjAwMzZmZDQ0ZWE3M2YxZGMxOTk0OGFjYmMyMjVmMmY3NWE0NDE3MzgxZGNlNTIiLCJpYXQiOjE3MjA2OTQ5NjIuNDQ2NjEyLCJuYmYiOjE3MjA2OTQ5NjIuNDQ2NjE0LCJleHAiOjQ4NzYzNjg1NjIuNDQ0MDMsInN1YiI6IjEwMjkwMDYiLCJzY29wZXMiOltdfQ.VbjsLblPx5rd-CF3WzqVICda0_l4Qd5wO_DZRUjw_hZQsHemNA1MZV01_xL1QXuO-GnJQh5HwxxqjWD8aI7FXhyWg17O3E5XvjFdICBTYAIt36trbPZ4z4bRkXupmrjKUDTsdsxhjBKP1JMYaZ78lqeURdSai4-Dw9YZGXh67Av-_lNCHrZU0iaWkRGuA1hkuBcuB-SUYYPl23zm7pYtu89jdELnCdpnJakPtUdM8ZOHN4o0m0T6L8Rj2xe182N8MdCkk-mIDdEFAXoGIRHbgNoUyMiCVBdyNjiiqMecUiEDPjcIZoQauSDgjprmZ_bk9gUkr1KpVM_cacnpcDZWw0pQevNf3cbcsxZ__CjDYQeas6-bhJ35fTfDAPBL459SbC-ThLS7EwPYZrWcSsiy8KJdHaFP4YB4OLHmJTuO9BSZ_zjfRvVe0XLdG8vf4-GVbHPo1YLjV5tXA6eu7QG7gqt-z-ysJFv1fyS-wDcN_j7TK5QAvBFAM7bfl3vaix3EUn3qX1-2OgHBBB6HVxan2f-QX0e88mOV7oCyzaKgOy5rxboUlx7lodzL2L9f_WJDbgnQpUOtiyjNVjshsKrv-rzusQ1cCs24maw4xsYiAIW-_7-IKA2asbxj2BW9e1l8itw_6OlS9uQCjZDDZ20FfPxwn1cOqaFkzFhVmvsQWYQ'
        },
        body: JSON.stringify({
            email: email,
            resubscribe: true
        })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        alert('Subscription successful! You will be notified about the latest updates to Pulsey.');
    })
    .catch(error => {
        alert('There was a problem with your submission: ' + error.message);
    });
});

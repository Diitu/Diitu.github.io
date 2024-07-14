// // optionally configure local env vars
// require('dotenv').config()

// // details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
exports.handler = async (event) => {
  try {
    const fetch = (await import('node-fetch')).default;
    const { email } = JSON.parse(event.body);

    console.log(`Received a submission: ${email}`);

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.EMAIL_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    const data = await response.json()
    console.log(`Submitted to MailerLite: ${JSON.stringify(data)}`);

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Error submitting to MailerLite:', error);
    return { statusCode: 422, body: String(error) };
  }
};

module.exports = { handler }

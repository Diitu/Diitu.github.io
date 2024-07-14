// // optionally configure local env vars
// require('dotenv').config()

// // details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
const process = require('process');

const handler = async (event) => {
  try {
    const fetch = (await import('node-fetch')).default;
    const { email } = JSON.parse(event.body);

    console.log(`Received a submission: ${email}`);

    // Ensure the environment variable is available
    if (!process.env.EMAIL_TOKEN) {
      throw new Error('EMAIL_TOKEN environment variable is not set');
    }

    const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.EMAIL_TOKEN}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify(data)
      };
    }

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

module.exports = { handler };

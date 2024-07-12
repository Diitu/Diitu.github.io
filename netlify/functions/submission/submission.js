// // optionally configure local env vars
// require('dotenv').config()

// // details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
const process = require('process')

const fetch = require('node-fetch')

const { EMAIL_TOKEN } = process.env
const handler = async (event) => {
  const { email } = JSON.parse(event.body)
  console.log(`Received a submission: ${email}`)
  try {
    const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${EMAIL_TOKEN}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify({ email }),
    })
    const data = await response.json()
    console.log(`Submitted to Buttondown:\n ${data}`)
  } catch (error) {
    return { statusCode: 422, body: String(error) }
  }
}

module.exports = { handler }

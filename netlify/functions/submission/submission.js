// // optionally configure local env vars
// require('dotenv').config()

// // details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
const process = require('process')

const fetch = require('node-fetch')

const { EMAIL_TOKEN } = process.env
const handler = async (event) => {
  const { email } = JSON.parse(event.body).payload
  console.log(`Received a submission: ${email}`)
  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZGI5ZmQ2MGVkNWZmNTNiMjk5YTE1N2Y4MDM3NDY0YTcwNTcxNTI3ZjA5MzU4ZTFlMDc1NzI2OWI2ZWI4MDhkNDYzZDMyNjYwOWQ5ODVkNDUiLCJpYXQiOjE3MjA2OTg2MTcuMTU5MDgzLCJuYmYiOjE3MjA2OTg2MTcuMTU5MDg1LCJleHAiOjQ4NzYzNzIyMTcuMTU2MzM3LCJzdWIiOiIxMDI5MDA2Iiwic2NvcGVzIjpbXX0.rR5Ql0TDI4sPzQIJmxGMQRm8Hsy976r1hFX8jIBALVOBZbgToQbObFqiUvkbBlWpo3pf36pTWDiX54xZBTfwz81BSYWL4cfAV7jB-_OeHsfKVxfGIs46_1Pxv4XfNCgF0c_H7_JI5qkQaxfj6FlCf1mMh88gQxr3ivF0pL3OSkrk9mIrHGy_4fkQlEe56hb0lAEsGFacA7llRp9ktM8L-jEBSssLFMjcW1R7JlP3lR2tyO3q4vbrBvilF9CopOx4Zst5QP0S-QnEMORoybtrlTsugMUHNaBJWwNY83CWQmt8yTnDJk0-S2VzAyRIgd9VQuZn0DOHUIL_PcVI4k460K9ueXXin7kI7dii3jkxwbDJZLnOIyCziE285O6tbnVHt96mxQDmxmNDGYV3d1Pel10grF7SaP09VCLC4N6X0_fV6DiRi8yA-f1eI4bLZ3BCX9SbViclvb0WSYRI09Ohbhp3vCMLgxRAp1T9OZQU3HQSG4E58QUGJJO0P1wOQ3DJ9RsiZJaYiu8eJ_pCnDCluZOXX0KzQriSB-5kRp1FbipMrfAqa45aXBNYbVPGBQy_CnZuOd3irzEGiive438Z18jBWD5btzGwyQs25iFs16KPTMgrsJVYKKmbc82f7y5zPlD7fFk1L1IaIKdEK_RakAGL3_u8ytmTpZ7k80PVMO8`,
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

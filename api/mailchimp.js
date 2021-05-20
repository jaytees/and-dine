import express from 'express'
import Mailchimp from 'mailchimp-api-v3'

const API_KEY = '02d02a91ab778f5992225144904ec65f-us1'
const AUDIENCE_ID = '5c8512abdc'
const mailchimp = new Mailchimp(API_KEY)

const app = express()
app.use(express.json())

app.post('/subscribe', async (req, res) => {
  const { email } = req.body

  try {
    const response = await mailchimp.request({
      method: 'post',
      path: `/lists/${AUDIENCE_ID}/members`,
      body: {
        email_address: email,
        status: 'subscribed',
      },
    })
    console.log(response)
    res.status(response.statusCode).json(response.status)
  } catch (error) {
    res.status(error.status).send(error)
  }
})

module.exports = app


require('dotenv').config()
const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000
app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('v2.0')
})

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log("server started on port", PORT);
})

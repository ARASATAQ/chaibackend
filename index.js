const express = require('express')
const app = express()

const PORT = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('hitesh.com')
})

app.get('/login', (req, res) => {
  res.send('<h1>please login</h1>')
})

// IMPORTANT: must be 0.0.0.0 for AWS
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})
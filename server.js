const express = require('express')
const bp = require('body-parser')
const multer = require('multer')
const upload = multer()
const app = express()

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

app.post('/upload', upload.single('image'), (req, res, next) => {
  console.log(req.body, req.file)
  res.json({})
})

app.get('/', (req, res, next) => {
  res.sendFile(require('path').join(__dirname, 'index.html'))
})

app.listen(8080)

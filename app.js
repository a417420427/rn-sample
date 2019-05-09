const express = require('express')
const path = require('path')
const app = express()


app.use('/rt', express.static(path.resolve(__dirname, 'dist')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './dist/index.html'))
})


app.listen(7000)
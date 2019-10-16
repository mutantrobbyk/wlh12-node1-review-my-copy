const express = require('express')
const app = express()
const PORT = 5000
const ctrl = require('./controller')

app.use(express.json())

app.get(`/api/people`, ctrl.getAllPeople)




app.listen(PORT, () => console.log(`PowerMan ${PORT}`))
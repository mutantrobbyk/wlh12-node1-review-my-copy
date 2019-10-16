const express = require('express')
const app = express()
const PORT = 5000
const ctrl = require('./controller')

app.use(express.json())

app.get(`/api/people`, ctrl.getAllPeople)
app.get('/api/people/females', ctrl.getAllFemales)
app.get('/api/people/males', ctrl.getAllMales)




app.listen(PORT, () => console.log(`PowerMan ${PORT}`))
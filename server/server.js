const express = require('express')
const app = express()
const PORT = 5000
const ctrl = require('./controller')

app.use(express.json())

app.get(`/api/people`, ctrl.getAllPeople)
app.get('/api/people/females', ctrl.getAllFemales)
app.get('/api/people/males', ctrl.getAllMales)
app.get('/api/people/country', ctrl.getPeopleByCountry)
app.get('/api/people/genre', ctrl.getPeopleByGenre)




app.listen(PORT, () => console.log(`PowerMan ${PORT}`))
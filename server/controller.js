const people = require('./data')

module.exports = {
    getAllPeople(req, res, next) {
        console.log(people)
        res.status(200).send(people)
    },
    getAllFemales(req, res, next) {
        let females = people.filter(el => {
            return (el.gender === "F")
        })
        console.log(females)
        res.status(200).send(females)
    },
    getAllMales(req, res, next) {
        let males = people.filter(el => {
            return (el.gender === "M")
        })
        console.log(males)
        res.status(200).send(males)
    }
}
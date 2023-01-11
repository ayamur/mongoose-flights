import { Flight } from "../models/flight.js"

function index(req, res) {
  Flight.find({})
  .then(flight => {
    res.render('flights/index', {
      flights,
      title: "All Flights",
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight"
  })
}

function create(req, res) {
  for (const key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  Flight.create(req.body)
  .then(flight => {
    console.log(movie);
    res.redirect("/flights")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/flights")
  })
}

export {
  index,
  newFlight as new,
  create,
}
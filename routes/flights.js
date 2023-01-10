import { Router } from 'express'

const router = Router()

/* GET flights listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

export {
  router
}

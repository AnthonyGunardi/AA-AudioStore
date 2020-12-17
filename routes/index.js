const mainRouter = require('express').Router()
const Controller = require('../controllers/controller')
const adminRoute = require('./admin')

//middleware
const isLogIn = (req, res, next) => {
  const checkLogin = req.session.userId
  if(checkLogin) next()
  else res.redirect('/login')
}

const preventDoubleLogin = (req, res, next)=>{
  if(req.session.userId) res.redirect('/')
  else next()
}

mainRouter.get('/', Controller.home)
mainRouter.get('/register',preventDoubleLogin, Controller.showFormRegister)
mainRouter.post('/register',preventDoubleLogin, Controller.register)
mainRouter.get('/login',preventDoubleLogin, Controller.showFormLogin)
mainRouter.post('/login',preventDoubleLogin, Controller.login)
mainRouter.use(isLogIn)
mainRouter.get('/categories', Controller.showCategories)
mainRouter.get('/details/:id', Controller.showDetails)
mainRouter.get('/transactions/:id', Controller.showFormTransactions)
mainRouter.post('/transactions/:id', Controller.transactions)
mainRouter.get('/logout', Controller.logout)

mainRouter.use('/admins', adminRoute)

module.exports = mainRouter
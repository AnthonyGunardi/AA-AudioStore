const adminRoute = require('express').Router()
const AdminController = require('../controllers/adminController')

adminRoute.get('/', AdminController.home)
adminRoute.get('/products', AdminController.showProductData)
adminRoute.get('/products/add', AdminController.showFormAddProduct)
adminRoute.post('/products/add', AdminController.addProduct)
adminRoute.get('/products/edit/:id', AdminController.showFormEditProduct)
adminRoute.post('/products/edit/:id', AdminController.editProduct)
adminRoute.get('/products/delete/:id', AdminController.deleteData)
adminRoute.get('/users', AdminController.showUserData)
adminRoute.get('/transactions', AdminController.showTransactionData)

module.exports = adminRoute
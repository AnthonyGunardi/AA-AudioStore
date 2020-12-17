const {User, Transaction, Product} = require('../models')

class AdminController{
  static home(req, res){
    res.render('admin/home.ejs')
  }
  static showProductData(req, res){
    Product.findAll()
      .then(data => res.render('admin/product.ejs', {data}))
      .catch(err => res.send(err))
  }
  static showFormAddProduct(req, res){
    res.render('admin/addProduct.ejs')
  }
  static addProduct(req,res){
    let newData = {
      brand: req.body.brand,
      type: req.body.type,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock
    }
    Product.create(newData)
      .then(data => res.redirect('/admins'))
      .catch(err => res.send(err))
  }
  static showFormEditProduct(req, res){
    let id = +req.params.id
    Product.findByPk(id)
      .then(data =>{
        if(data) res.render('admin/editForm.ejs', {data})
      })
      .catch(err => res.send(err))
  }
  static editProduct(req, res){
    let id = +req.params.id
    let newData = {
      brand: req.body.brand,
      type: req.body.type,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock
    }
    Product.update(newData, {
      where: {id: id}
    })
      .then(data => res.redirect('/admins/products'))
      .catch(err => res.send(err))
  }
  static deleteData(req, res){
    let id = +req.params.id
    Product.destroy({
      where: {id: id}
    })
      .then(data => res.redirect('/admins/products'))
      .catch(err => res.send(err))
  }
  static showUserData(req, res){
    User.findAll({
      where:{role_admin: false}
    })
      .then(data =>{
        if(data) res.render('admin/dataUser.ejs', {data})
      })
      .catch(err => res.send(err))
  }
  static showTransactionData(req, res){
    Transaction.findAll({
      include:[User, Product]
    })
      .then(data =>{
        if(data) res.render('admin/dataTransaction.ejs', {data})
      })
      .catch(err => res.send(err))
  }
}

module.exports = AdminController
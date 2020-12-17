const bcrypt = require('bcryptjs')

class Helper{
  static hashPassword(plainPassword){
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(plainPassword, salt)
    return hash
  }
  static comparePassword(hashPassword, plainPassword){
    return bcrypt.compareSync(plainPassword, hashPassword)
  }
  static formatPrice(price){
    let reverse = price.toString().split('').reverse().join('')
    let ribuan = reverse.match(/\d{1,3}/g)
    return ribuan.join('.').split('').reverse().join('')
  }
}

module.exports = Helper
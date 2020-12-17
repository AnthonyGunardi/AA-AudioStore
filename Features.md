Feature List:

- CRUD
- Association Many To Many
- Static Method & Instance Method:
    Static Method: at models/user.js (User.sendingEmail), is used by controllers/controller.js (Controller.register)
    Instance Method: at models/transaction.js (Transaction.afterDiscount)
- Helper:
    Helper.hashPassword: at models/user.js (Hooks at User.init)
    Helper.comparePassword: at controllers/controller.js (Controller.login)
    Helper.formatPrice: at 
- Hooks:
    At models/user.js (User.init) to manipulate login data
- Middleware:
    At routes/index.js (isLogin authentication)
- Session
- MVP: Nodemailer:
    at models/user.js (User.sendingEmail), is used by controllers/controller.js (Controller.register)

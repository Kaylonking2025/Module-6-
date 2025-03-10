const AdminController = require('../controllers/admin/admin.controller');

const registerAdminRoutes = (app) => {
  app.get('/email-list', AdminController.emailList);

  app.get('/region-avg', AdminController.regionAverage);
}

module.exports = {registerAdminRoutes};
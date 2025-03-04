const PublicController = require('../controllers/public/public.controller');

const registerPublicRoutes = (app) => {
  app.post('/contact', PublicController.contactUs);

  app.get('/calc-residential', PublicController.calculateResidentialQuote);
}

module.exports = {registerPublicRoutes};
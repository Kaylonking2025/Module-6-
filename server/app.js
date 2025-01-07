require('dotenv').config();
const Express = require('express');
const app = Express();
const port = process.env.PORT || 3004;


const MongoManager = require('./db/mongodb/mongo-manager')
const MiddleWare = require('./middleware/base-middleware');
const HealthRoutes = require('./routes/health.routes');
const AdminRoutes = require('./routes/admin.routes');
const PublicRoutes = require('./routes/public.routes');
const AgentRoutes = require('./routes/agent.routes')
const regionRouter = require('./routes/region.routes')


app.use(Express.static('../client')) //serves our static genesis project
app.use(Express.json())


MiddleWare.registerBaseMiddleWare(app)
HealthRoutes.registerHealthRoutes(app);
AdminRoutes.registerAdminRoutes(app);
PublicRoutes.registerPublicRoutes(app);
AgentRoutes.registerAgentRoutes(app)
regionRouter.registerRegionRoutes(app)


MongoManager.openMongoConnection();
app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})

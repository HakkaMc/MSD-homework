import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';
import * as path from 'path';

// Controller with routes for ships endpoint
import v1ShipsController from './controllers/v1/ships';

// Load yaml specification for showing swagger documentation
const swaggerDocument = YAML.load(path.resolve(__dirname, './spec.yaml'));

// Prepare express server
export const server: express.Express = express();
server.use(
    express.json({
        type: 'application/json',
    }),
);

// Just for debug
server.use((req: express.Request, res: express.Response, next: express.NextFunction): void => {
    console.log('Request: ', req.url, req.method, req.body);
    next();
});

// --------------------------------
// Routes
// --------------------------------

// Swagger documentation
server.use('/v1/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Ships route
server.use('/v1/ships', v1ShipsController);

// --------------------------------

export default server;

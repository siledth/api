import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import routes from './routes';
import * as http from 'http';
import { Http2ServerRequest } from 'http2';

const PORT = process.env.PORT || 3000;

createConnection()
  .then(async () => {
    // create express app
    const app = express();
    // Middlewares
    app.use(cors());
    app.use(helmet());

    app.use(express.json());
    // Routes
    app.use('/', routes);

    // start express server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    //http.createServer(app).listen(PORT, () => console.log (`Webserver running at http://app.ipsfa.gob.ve:${PORT}/`));
  })
  .catch(error => console.log(error));

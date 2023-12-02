/** Importación type: Module / ES */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { exports } from './default.js';
import router from '../routes/index.routes.js';
import middleware from '../middlewares/index.middleware.js';
import pgService from '../services/pg.service.js';

export default class Server {
  constructor() {
    this.app = express();
    this.port = exports.port;
  }

  async connectionDB() {
    new pgService();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(middleware);
  }

  route() {
    this.app.use(router);
  }

  runServer() {
    this.app.listen(this.port, () => {
      console.log(`servidor corriendo en el puerto ${this.port}`);
    });
  }

  load() {
    this.connectionDB();
    this.middleware();
    this.route();
    this.runServer();
  }
}

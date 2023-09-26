import pgPromise from 'pg-promise';
import { exports } from '../config/default.js';

export default class pgService {
  static instance;
  connection;
  constructor() {
    if (pgService.instance) {
      return pgService.instance;
    }
    pgService.instance = this;
    const pgp = pgPromise({
      /* Initialization Options */
    });
    this.connection = pgp(exports.postgress);
    this.connection
      .connect()
      .then((obj) => {
        console.log(
          `Conexión exitosa a la base de datos: ${obj.client.database}`
        );
        obj.done();
      })
      .catch((error) => {
        console.log('ERROR:', error.message || error);
      });
  }
}

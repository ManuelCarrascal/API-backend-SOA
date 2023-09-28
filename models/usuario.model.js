import pgService from "../services/pg.service.js";


export const getUser =async (usuario,contrasena)=>{
    const pg = new pgService();
    const query = 'SELECT * FROM usuario where usuario = $1 and contrasena = $2'
    const result = await pg.connection.oneOrNone(query,[usuario, contrasena])
    return result;
}
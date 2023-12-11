import { getUser } from '../models/usuario.model.js';
import { generateToken } from '../services/token.service.js';

export const login = async (req, res) => {
  try {
    const { correo, contrasena } = req.body;
    let data = await getUser(correo, contrasena);

    if (!data) {
      throw Error('Error de credenciales');
    }
    res.status(200).json({
      token: generateToken(data),
      success: true,
      data: 'Logueo Exitoso',
      msg: 'Logueo Exitoso',
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      data: 'Problema al inciar Sesion',
      msg: 'Problema al inciar Sesion',
    });
  }
};

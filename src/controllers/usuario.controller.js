const { response } = require("express");
const { Usuario } = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");

const getUser = async (req, res = response) => {
  const user = await Usuario.findAll();
  return res.json({ message: "success", response: user });
};

const singIn = async (req, res = response) => {
  const { user, password } = req.body;
  try {
    const usuario = await Usuario.findOne({
      where: { usuario: user },
      attributes: ["nombre", "apellido", "usuario", "correo", "contrasena"],
    });

    if (!usuario) {
      return res.json({
        ok: false,
        message: "Usuario no encontrado",
      });
    }

    const validPassword = bcrypt.compareSync(password, usuario.contrasena);
    if (!validPassword) {
      return res.json({
        ok: false,
        message: "Contraseña no válida",
      });
    }

    // construccion del token con la data mostrada

    const payload = {
      usuario: usuario.usuario,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      correo: usuario.correo,
    };

    const token = await generarJWT(payload);
    res.json({
      ok: true,
      user,
      message: "success",
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "error",
    });
  }
};

const createusuario = async (req, res = response) => {
  const {
    nombre,
    apellido,
    tipodocumento,
    documento,
    celular,
    correo,
    contrasena,
  } = req.body;

  try {
    const salt = bcrypt.genSaltSync();
    const password = bcrypt.hashSync(contrasena, salt);
    const usuario_ = "S0" + documento;
    const usuariovalidacion = await Usuario.findOne({
      where: {
        //[Op.or]: [
        //  { documento: documento },
        //  { usuario_: usuario_ },
        //  { correo: correo },
        //],
        documento: documento
      },
    });

    if (!usuariovalidacion) {
      const newUsuario = await Usuario.create({
        nombre: nombre,
        apellido: apellido,
        usuario: usuario_,
        tipodocumento: tipodocumento,
        documento: documento,
        celular: celular,
        correo: correo,
        contrasena: password,
      });

      if (newUsuario) {
        res.json({
          ok: true,
          message: "Usuario creado con exito",
        });
      } else {
        res.json({
          ok: false,
          message: "No se pudo crear usuario",
        });
      }
    } else {
        res.json({
            ok: false,
            message: "Un usuario ya se encuentra registrado con el mismo número de documento",
        });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "error",
    });
  }
};

module.exports = {
  getUser,
  singIn,
  createusuario,
};

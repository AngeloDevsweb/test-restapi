const {Router} = require('express')
const router = Router();

const {getUsuario, getUsuarios, deleteUsuario, createUsuario, updateUsuario}= require('../controllers/usuario.controller')

router.route('/')
    .get(getUsuarios)
    .post(createUsuario)

router.route('/:id')
    .get(getUsuario)
    .delete(deleteUsuario)
    .put(updateUsuario)


module.exports = router;
import express from "express";
import {crear,buscar,buscarId,actualizar,eliminar} from "../controladores/solicitudesController.js";

const routerAdopciones = express.Router();

routerAdopciones.get('/', (req, res) => {
    res.send('Hola Sitio de Adopciones');
});

routerAdopciones.post('/crear', (req, res) => {
    //res.send('Crear Mascota');
    crear(req,res);
    
});

routerAdopciones.get('/buscar', (req, res) => {
    //res.send('Buscar Mascota');
    buscar(req,res);
});

routerAdopciones.get('/buscarId/:id', (req, res) => {
    //res.send('Buscar Mascota');
    buscarId(req,res);
});

routerAdopciones.put('/actualizar/:id', (req, res) => {
    //res.send('Actualizar Mascota');
    actualizar(req,res);
});

routerAdopciones.delete('/eliminar/:id', (req, res) => {
    eliminar(req,res);
});

export {routerAdopciones}
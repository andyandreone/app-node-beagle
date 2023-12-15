import { Router } from "express";
import {getDatosLights,  getDataLight, deleteDataLight, updateDataLight,getHome, getCountLights, saveDeviceLight} from "../controllers/tasks.js";
import {getDatosCurtains} from "../controllers/tasks.js";
import {getDatosAir} from "../controllers/tasks.js";
import {getDatosPlug} from "../controllers/tasks.js";
import {getDatosRooms} from "../controllers/tasks.js";

const router = Router()

router.get('/',getHome);


//LIGHTS

router.get('/devices/lights', getDatosLights);

router.get('/lights/count', getCountLights);

router.get('/lights/data/:id',getDataLight)

router.post('/light', saveDeviceLight);

router.delete('/lights/data/:id', deleteDataLight)

router.put('/lights/data/:id', updateDataLight)

//CURTAINS

router.get('/curtains/datos', getDatosCurtains);

//AIR
router.get('/devices/air', getDatosAir);


//TOMACORRIENTE
router.get('/devices/plug', getDatosPlug);

//TOMACORRIENTE
router.get('/devices/rooms/:room', getDatosRooms);

export default router


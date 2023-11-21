import { Router } from "express";
import {getDatosLights,  getDataLight, deleteDataLight, updateDataLight,getHome, getCountLights, saveDeviceLight} from "../controllers/tasks.js";
import {getDatosCurtains,  getDataCurtain, deleteDataCurtain, updateDataCurtain, getCountCurtains, saveDeviceCurtain} from "../controllers/tasks.js";

const router = Router()

router.get('/',getHome);


//LIGHTS

router.get('/lights/datos', getDatosLights);

router.get('/lights/count', getCountLights);

router.get('/lights/data/:id',getDataLight)

router.post('/light', saveDeviceLight);

router.delete('/lights/data/:id', deleteDataLight)

router.put('/lights/data/:id', updateDataLight)

//CURTAINS

router.get('/curtains/datos', getDatosCurtains);

router.get('/curtains/count', getCountCurtains);

router.get('/curtains/data/:id',getDataCurtain);

router.post('/curtains', saveDeviceCurtain);

router.delete('/curtains/data/:id', deleteDataCurtain)

router.put('/curtains/data/:id', updateDataCurtain)


export default router


"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasks = require("../controllers/tasks.js");
var router = (0, _express.Router)();
router.get('/', _tasks.getHome);

//LIGHTS

router.get('/lights/datos', _tasks.getDatosLights);
router.get('/lights/count', _tasks.getCountLights);
router.get('/lights/data/:id', _tasks.getDataLight);
router.post('/light', _tasks.saveDeviceLight);
router["delete"]('/lights/data/:id', _tasks.deleteDataLight);
router.put('/lights/data/:id', _tasks.updateDataLight);

//CURTAINS

router.get('/curtains/datos', _tasks.getDatosCurtains);
router.get('/curtains/count', _tasks.getCountCurtains);
router.get('/curtains/data/:id', _tasks.getDataCurtain);
router.post('/curtains', _tasks.saveDeviceCurtain);
router["delete"]('/curtains/data/:id', _tasks.deleteDataCurtain);
router.put('/curtains/data/:id', _tasks.updateDataCurtain);
var _default = exports["default"] = router;
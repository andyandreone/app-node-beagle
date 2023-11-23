import {connect} from '../database.js'

export const getHome = async (req,res) => {
    res.send("WELCOME TO SUNDAY INTELLIGENCE");
 }
 


//----------- CORTINAS ---------------------------------

export const getDatosCurtains = async (req,res) => {
   const connection = await connect()
   const [rows] = await connection.query('SELECT * FROM curtains')
   res.json(rows);
}

export const getDataCurtain = async (req,res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM curtains WHERE id = ?' , [req.params.id,])
    
    if(rows.length>0){
        res.json(rows[0])
    }
    else{
        res.json('no se encontraron resultados')
    }
}

export const getCountCurtains = async (req,res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT (*) FROM curtains')
    
    res.json(rows[0]["COUNT (*)"]);
}

export const saveDeviceCurtain = async (req,res) => {
    const connection = await connect()
    const [results] = await connection.query('INSERT INTO curtains (name, nameIcon) VALUES (?,?)', [req.body.name, req.body.nameIcon])
    
    res.json({
           id: results.insertId,
        ...req.body,
    });
}

export const deleteDataCurtain = async (req,res) => {
    const connection = await connect()
    await connection.query('DELETE FROM curtains WHERE id=?',[req.params.id])
    res.sendStatus(204)
}

export const updateDataCurtain = async (req,res) => {
    const connection = await connect()
    await connection.query('UPDATE curtains SET ? WHERE id = ?', [
            req.body,
            req.params.id
        ])
        
    res.sendStatus(204)
}

//----------- LUCES ---------------------------------

export const getDatosLights = async (req,res) => {
    const connection = await connect()
    const [rows] = await connection.query("SELECT * FROM device WHERE category = 'light'")
    res.json(rows);
 }
 
 export const getDataLight = async (req,res) => {
     const connection = await connect()
     const [rows] = await connection.query('SELECT * FROM device WHERE id = ?' , [req.params.id,])
     
     if(rows.length>0){
         res.json(rows[0])
     }
     else{
         res.json('no se encontraron resultados')
     }
 }
 
 export const getCountLights = async (req,res) => {
     const connection = await connect();
     const [rows] = await connection.query('SELECT COUNT (*) FROM device')
     
     res.json(rows[0]["COUNT (*)"]);
 }
 
 export const saveDeviceLight = async (req,res) => {
     const connection = await connect()
     const [results] = await connection.query('INSERT INTO device (name, nameIcon) VALUES (?,?)', [req.body.name, req.body.nameIcon])
     
     res.json({
            id: results.insertId,
         ...req.body,
     });
 }
 
 export const deleteDataLight = async (req,res) => {
     const connection = await connect()
     await connection.query('DELETE FROM device WHERE id=?',[req.params.id])
     res.sendStatus(204)
 }
 
 export const updateDataLight = async (req,res) => {
     const connection = await connect()
     await connection.query('UPDATE device SET ? WHERE id = ?', [
             req.body,
             req.params.id
         ])
         
     res.sendStatus(204)
 }
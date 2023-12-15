import {connect} from '../database.js'

export const getHome = async (req,res) => {
    res.send("WELCOME TO SUNDAY INTELLIGENCE");
 }
 


//----------- CORTINAS ---------------------------------

export const getDatosCurtains = async (req,res) => {
   const connection = await connect()
   const [rows] = await connection.query("SELECT * FROM device WHERE category = 'curtain'")
   res.json(rows);
}



//----------- LUCES ---------------------------------

export const getDatosLights = async (req,res) => {

    const connection = await connect()
    
    const [rows] =  await connection.query("SELECT * FROM lights WHERE category = 'light'")
    
    res.json(rows);
 }
 
//----------- air ---------------------------------

export const getDatosAir = async (req,res) => {

    const connection = await connect()
    
    const [rows] =  await connection.query("SELECT * FROM lights WHERE category = 'air'")
    
    res.json(rows);
 }


 //----------- air ---------------------------------

export const getDatosPlug = async (req,res) => {

    const connection = await connect()
    
    const [rows] =  await connection.query("SELECT * FROM lights WHERE category = 'plug'")
    
    res.json(rows);
}


 //----------- rooms ---------------------------------

 export const getDatosRooms= async (req,res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM lights WHERE room = ?' , [req.params.room,])
    
    if(rows.length>0){
        res.json(rows)
    }
    else{
        res.json('no se encontraron resultados')
    }

}
//-----GENERALES----------
 
 export const getDataLight = async (req,res) => {
     const connection = await connect()
     const [rows] = await connection.query('SELECT * FROM lights WHERE id = ?' , [req.params.id,])
     
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
     await connection.query('UPDATE lights SET ? WHERE id = ?', [
             req.body,
             req.params.id
         ])
         
     res.sendStatus(204)
 }
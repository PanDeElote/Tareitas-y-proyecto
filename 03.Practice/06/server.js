import express from 'express';
import {contarController, detallesController} from './controllers/contarController.js';

const app = express();
const PORT  = 3000;

app.use(express.json());

//http://localhost:3000/contar
//http://localhost:3000/contar?detallado=true

app.get('/', (req, res) =>{
    res.json({mensaje: 'Si jala'});
})

app.post('/contar', (req, res) =>{
    const objeto = req.body;
    const detallado = req.query.detallado;

    //Validaciones
    if(!objeto || typeof objeto !== 'object' || Array.isArray(objeto)){
        return res.status(400).json({error: 'Requisito no válido'});
    }

    if (!detallado || detallado.trim() !== 'true'){
        return res.status(400).json({error: 'Requisito no válidooo'});
    }

    const cantidad = contarController(objeto);
    const detalles = detallesController(objeto)
    res.status(200).json({
        "propiedades": cantidad,
        "detalles": detalles
    });
});

app.listen(PORT, ()=>{
    console.log(`Server escuchando en el puerto ${PORT}`);
})
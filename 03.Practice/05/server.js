import express from 'express';
import separarParesImpares from './utils/separarParesImpares.js';

const PORT = 3000;

const app = express();

app.use(express.json());

let numeros = [];

//http://localhost:3000/filtrar?numeros=-3,-2,-1,0,1,2,3
app.get('/filtrar', (req, res) =>{
    //Pedir numeros
    const numerosQuery = req.query.numeros;

    if(!numerosQuery){
        return res.status(400).json({error: 'Se requiere el parámetro numeros'});
    }
    //Convertirlo de string a array con split
    //Y a cada elemento aplicarle un parseInt para que sea un array de números
    numeros = numerosQuery.split(',').map(n => parseInt(n));

    if(numeros.some(isNaN)){
        return res.status(400).json({error: 'Solo se pueden ingresar numeros a la lista'});
    }

    //Aplicar el separador de impares y pares
    const  pares = separarParesImpares(numeros).pares;
    const impares = separarParesImpares(numeros).impares;

    res.json({
        "original": numeros,
        "pares": pares,
        "impares": impares
    });

});



app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
});
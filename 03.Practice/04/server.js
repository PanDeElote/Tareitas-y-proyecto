import http from 'http';
import numMayor from './utils/numMayor.js';

const PORT = 3000;

// http://localhost:3000/mayor?numeros=5,3,9,1

const server = http.createServer((req, res) =>{
    const {method, url} = req;

    if (url === '/' && method === 'GET'){
        res.end('Bienvenido al server');
    } else if(url.startsWith('/mayor') && method === 'GET'){
        const Url = new URL(req.url, `http://${req.headers.host}`);
        const numeros = Url.searchParams.get("numeros");

        //validar que si hay query
        if(!numeros){
            res.writeHead(400, {"content-type": "application/json"});
            res.end(JSON.stringify({error: 'Se requiere el parámetro de "numeros" '}));
        }

        //ocupo convertir el string de numeros en un array
        const numerosArray = numeros.trim().split(',').map(n => parseInt(n));

        //validar el query
        if(!numerosArray){
            res.writeHead(400, {"content-type": "application/json"});
            res.end(JSON.stringify({error: 'La lista sólo puede contener números '}));
        }

        //buscar el mayor
        const mayor = numMayor(numerosArray);
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify({
            "numeros": numerosArray,
            "mayor": mayor
        }))
        
    }else{
        res.writeHead(400, {"content-type": "application/json"});
        res.end(JSON.stringify({error: "Ruta no existente"}));
    }
});

server.listen(PORT, () =>{
    console.log('Servidor escuchando chido');
})
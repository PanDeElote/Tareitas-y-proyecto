export function contarController(objeto){
    const cantidad = Object.keys(objeto).length;
    return cantidad;
}
export function detallesController(objeto){
    const propiedades = Object.keys(objeto);
    return propiedades;
}
export default function separarParesImpares(numeros){
    const pares = numeros.filter(p => p % 2 === 0);
    const impares = numeros.filter(i => i % 2 !== 0);

    return {pares, impares};
}
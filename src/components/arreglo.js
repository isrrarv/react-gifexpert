const enteros = [1,3,6,4,7,2]

const solucion= (arreglo) => {
    arreglo.sort();
    console.log(arreglo);
    let numero_menor=1; // para omitir los negativos

    for(let i=0; i < arreglo.length; i++){
        const n = arreglo [i];
        console.log(n);
        console.log('for:',i-1)
        
    
    }
  
}
console.log(solucion(enteros));




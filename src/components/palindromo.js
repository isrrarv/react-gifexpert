const palindromo = (frase) => {
    console.log('Texto ingresado:',frase)
    let  text = frase.toLowerCase();
    // console.log(text)
    let newText=text.trim()//quitamos espacios al incio y final 
        let sinEspacios= newText.replace(/ /g, "");
        // console.log("es un string: ",sinEspacios);
    const array= sinEspacios.split(''); // creamos un arreglo
    // console.log(array);
    const arregloInverso = array.reverse(); // invertimos el arreglo
    // console.log(arregloInverso);
    const stringInverso = arregloInverso.join('');// convertimos arreglo a string 
    // console.log("es un string: ",stringInverso);

    if (sinEspacios == stringInverso){
        console.log("Es palindrimo")

    }
    else{
        console.log("No es palindromo")
       
   }

}

palindromo('Amor azul Ramera de todo te di Mariposa colosal si yo de todo te di Poda la rosa Venus El ATomo como tal es un evasor alado Pide todo te doy islasol ocaso piramide Todo te dare mar luz aroma');  

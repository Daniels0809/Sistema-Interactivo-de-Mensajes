// Damos la bienvenida
alert("Bienvenido al Sistema Interactivo de Mensajes!");
//Pedimos al ususario que ingrese nombre
const ingresaNombre = prompt("Ingresa tu nombre");
//definimos esLetra para que busque solo letras desde inicio a final de cada caracter
const esLetra = /^[a-zA-Z]+$/;
//Pedimos al usuario que ingrese su edad
const añosEdad = parseInt(prompt("Ingresa tu edad"));
//Verificamos primero que ingresara nombre solo con letras
if(esLetra.test(ingresaNombre)){

    //Verificamos que los años ingresados sean numeros enteros y que este entre 1 y 100 años.
    if(Number.isInteger(añosEdad) && Number.isInteger(añosEdad) >= 1 && Number.isInteger(añosEdad) <= 100){
        //si es menor de edad imprimimos el mensaje
        if(añosEdad < 18){
            console.log(`Animo ${ingresaNombre}, Eres menor de edad, ¡Sigue aprendiendo!!!`);
        }else//si no es menor significa que es mayor de edad, entoences mostramos el mensaje tambien
        {
            console.log(`Sigue explorando nuevas oportunidades ${ingresaNombre}!!!`);
        }
    }else//si ingresa algo que no sea un numero entero saldra el mensaje de error
    {
        console.error(`Error, ingresa números enteros y entre 1 a 100 !!!`);
    }
}else{
    console.error("Ingresa nombre solo con letras!");
    
}

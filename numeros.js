// JAIME FERNÁNDEZ CALVO
// https://github.com/jaimecamocha/numerosNegativosPositivosCero.git

var num = prompt("Ingrese un número:");

num = parseFloat(num);

switch (true) {
    case num > 0:
        console.log("El número es positivo.");
        alert("El número es positivo.");
        break;
    case num < 0:
        console.log("El número es negativo.");
        alert("El número es negativo.");
        break;
    case num == 0:
        console.log("El número es cero.");
        alert("El número es cero.");
        break;
    default:
        console.log("Introduzca un número");
        alert("Introduzca un número.");
        break;        
}
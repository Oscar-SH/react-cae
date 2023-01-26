

const nombre ='Oscar';
const apellido = 'Santos';

//const nombreCompleto = nombre +'' + apellido;
const nombreCompleto = ` ${nombre} ${apellido}`;

console.log(nombreCompleto);

export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( nombre ) }` );
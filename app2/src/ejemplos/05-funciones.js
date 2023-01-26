
//const saludar = function( nombre ) {
//    return `Hola, ${nombre}`;
//}

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// console.log( saludar ('Goku') );

console.log( saludar2('Soy Goku') );
console.log( saludar3('Soy Vegeta') );
console.log( saludar4() );

const getUser = () => ({
    uid: 'ABC123',
    username: 'oscr'
})

const user = getUser();
console.log( user );


const getUsuarioActivo = (nombre) =>({
            uid: 'ABC123',
            username: nombre,
        })

const usuarioActivo = getUsuarioActivo('oscar');
console.log( usuarioActivo );

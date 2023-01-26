const persona = {
    nombre: 'Oscar',
    apellido: 'Santos',
    edad: 22,
    direccion:{
        ciudad: 'New York',
        zip: 5616519,
        lat: 1611651,
        lng: 1561685
    }
};

//console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Angel';

console.log( persona );
console.log( persona2 );
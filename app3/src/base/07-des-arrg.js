
const personajes = ['Goku', 'Gohan', 'Goten'];

const [ , , p3 ] =  personajes;

console.log(p3);

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

const useState = ( valor ) =>{
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const arr = useState( 'Goku' );

const [ nombre, setNombre ] = useState( 'Goku' );

console.log( nombre );
setNombre();
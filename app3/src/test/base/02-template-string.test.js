import '@testing-library/jest-dom'

import { getSaludo } from '../../base/02-template-string'

describe('Prueba en 02-template', () => {
    
    test('getSaludo debe retornar Hola Oscar', () => { 
        
        const nombre = 'Oscar';

        const saludo  = getSaludo(nombre);
        console.log(saludo);    

        //expect(saludo).toBe('Hola'+ nombre);
     })  

})
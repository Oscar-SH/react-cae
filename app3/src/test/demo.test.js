
describe('Pruebas en el archivo demo.test', () => {
    
    test('Deben ser iguales los strings', () => {
    
        const mensaje = 'Hola mundo';
    
        const mensaje2 = "Hola mundo";
    
        expect(mensaje).toBe(mensaje2);
    
    });

})
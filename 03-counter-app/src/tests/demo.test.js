describe('Pruebas en el archivo demo.test.js', () => {
    
    test('Los strings deben ser iguales', () => {
        
        // 1. inicialización
        const mensaje = 'Hola Mundo';
    
        // 2. estímulo
        const mensaje2 = `Hola Mundo`;
    
        // 3. comprobación
        expect( mensaje ).toBe( mensaje2 );
    });
})



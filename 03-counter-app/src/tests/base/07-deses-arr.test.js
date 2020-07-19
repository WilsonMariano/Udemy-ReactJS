import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {

    test('debe retornar un arreglo con un string y un number', () => {

        const [letras, numeros] = retornaArreglo();

        expect( letras ).toBe('ABC');
        expect( typeof letras ).toBe('string');

        expect( numeros ).toBe(123);
        expect( typeof numeros ).toBe('number');

    });
});
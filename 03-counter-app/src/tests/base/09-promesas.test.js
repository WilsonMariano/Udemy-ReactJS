import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/heroes';


describe('Pruebas en 09-promesas', () => {

    test('getHeroeByAsync debe retornar un héroe' , ( done ) => {

        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {

                expect( heroe ).toBe( heroes[0] );
                done();
            });

    });

    test('getHeroeByAsync debe retornar un error si el héroe no existe', (done) => {

        const id = 10;

        getHeroeByIdAsync(id)
            .catch(e => {

                expect(e).toBe('No se pudo encontrar el héroe');
                done();
            });
    });

});
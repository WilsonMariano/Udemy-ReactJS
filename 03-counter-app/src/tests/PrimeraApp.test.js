import '@testing-library/jest-dom';
import React from 'react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {

    // test('debe mostrar el mensaje "Hola, soy Mariano"', () => {
    //     const saludo = 'Hola, soy Mariano';
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('debe mostrar <PrimeraApp /> correctamennte', () => {

        const saludo = "Hola, soy Mariano";
        const wrapper = shallow(<PrimeraApp saludo={ saludo } />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el subtítulo enviado por props', () => {

        const saludo = "Hola, soy Mariano";
        const subtitulo = "Soy un programador";

        const wrapper = shallow(
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subtitulo } 
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);
    });
});
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';


describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);

    // Se ejecuta antes de cada test
    beforeEach(() => wrapper = shallow(<CounterApp />));
    

    test('debe mostrar el componente correctamente', () => {        

        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe mostrar el valor por defecto 100', () => {

        const wrapper = shallow(<CounterApp value={100} />);
        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe('100');
    });

    test('debe incrementar con el botón +1', () => {

        wrapper.find('button').at(0).simulate('click')
        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe('11');
    });

    test('debe decrementar con el botón -1', () => {

        wrapper.find('button').at(2).simulate('click')
        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe('9');
    });

    test('debe colocar el valor por defecto con el btn reset', () => {

        const value = 100;
        const wrapper = shallow(<CounterApp value={ value } />);

        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        
        const counterText = wrapper.find('h2').text();
        
        expect(counterText).toBe(`${value}`);
    });
});
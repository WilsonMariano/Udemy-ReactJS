import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';
import '@testing-library/jest-dom';

describe('Prueba del archivo GifGripItem', () => {
    
    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
    
    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un párrafo con el title', () => {
        const p = wrapper.find('p').text();
        expect(p.trim()).toBe(title);
    });

    test('Debe tener la imagen igual  al url y alt de todos los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe tener la clase animate__fadeIn', () => {
        const divClassName = wrapper.find('div').prop('className');
        expect(divClassName.includes('animate__fadeIn')).toBe(true);
    });
});
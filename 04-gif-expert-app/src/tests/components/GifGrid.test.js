import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {

    
    test('Debe mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category='Simpsons' />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://cualquiercosa.com',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category='Simpsons' />);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
    
    
});

import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories= { setCategories  }/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories= { setCategories  }/>);
    });

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto ', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value }});
        expect(wrapper.find('p').text().trim()).toBe(value); 
    });

    test('No debe postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        wrapper.find('input').simulate('change', { target: { value: 'Hola mundo' }});
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});
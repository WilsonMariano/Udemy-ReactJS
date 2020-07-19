import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {

    test('Debe traer 10 elementos', async () => {
        const gifs = await getGifs('alf');
        expect(gifs.length).toBe(10);
    });

    
    test('No debe traer ningún elemento', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});
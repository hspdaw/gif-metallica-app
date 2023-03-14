import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en <GifItem/>', () =>{
    const title = 'Saitama'
    const url = 'algo';

    test('debe hacer match con el snapshot', ()=>{
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })

    test('debe mostrar la imagen con la URL y el ALT indicado', () =>{
        //1º tomar el sujeto de pruebas
        render(<GifItem title={title} url={url} />);
        //screen.debug() //ver la estuctura por consola
        const {src, alt }= screen.getAllByRole('img');
        expect(src).toBe(src);
        expect(alt).toBe(alt);
    })

    test('debe mostrar el titulo en el componente', () =>{
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

    })
})
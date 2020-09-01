import React from 'react'
import { useFechGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {
    
    const {data: images, loading} = useFechGifs(category);
    // const [count, setCount] = useState(0);
    // const [images, setimages] = useState([])
    // useEffect(() => {
    //     getGifs(category).then(setimages );
    // }, [category]);


    
    return (
        // framen de una forma corta esto  "<>" es igual a <framgment></framgment>
        <>
        <h3>{category}</h3>
        {loading && <p className="animate__animated animate__flash  animate-duration: 4s">Loading...</p>}
            <div className="card-grid ">
                {
                    images.map(img => (
                    <GifGridItem key={img.id} {...img} />
                    ))
                }
                    
            </div>
        </>
        
    )
}

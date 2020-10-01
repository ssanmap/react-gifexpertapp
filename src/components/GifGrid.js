import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [count, setcount] = useState(0)
    const {data:images, loading} = useFetchGifs( category);
    

    
   /*  const [images, setimages] = useState([]);
    useEffect( () => {
        // getGif();
        getGif(category)
        .then( setimages);
    }, [ category]) */

   
    // getGif();
    return (
        <>
            <h3> {category} </h3>
            { loading && <p className="card animate__animated animate__lightSpeedOutRight"> Loading</p> }
          
                <div className= "card-grid">
          
                        {
                                images.map( img => (
                                    <GifGridItem  
                                    key = {img.id}
                                {... img }
                                />
                                // <li key = { id}> {title}</li>
                                ))
                            }
                    
                         {/* <h4> {count}</h4>
                        <button onClick= { () => setcount (count + 1 )}> </button>  */}
                 </div>
                 </>
    )
}

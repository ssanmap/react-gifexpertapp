import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiffExpertApp = () => {

    // const  categories = ['One Punch', 'Dragon Ball', 'Samurai X'];
    const [categories, setCategories] = useState(['One Punch']);
    
    // const handleAdd = () =>{
    // setCategories ([...categories,'Naruto' ])
    // }
    return (
        <div>
            <h2> Hola Giff Expert APP</h2>
            <AddCategory setCategories = { setCategories} />
            <hr></hr>

            {/* <button onClick= {handleAdd}> Agregar </button> */}
            <ul>
            {
                categories.map( category => (
                    <GifGrid
                    key = {category}
                     category = {category} />
                ))
            }
            </ul>
        </div>
    )
}

import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";
// import {getGifs} from '../helpers/getGifs';
// import {getGifs} from './helpers/getGifs';

export const useFetchGifs = ( category ) =>{

   const [state, setstate] = useState({
    data: [],
    loading:true
   });
useEffect(() => {
    getGif( category)
    .then( imgs =>{

        // setTimeout( () => {

            setstate({
                data:imgs,
                loading:false
            });

        // }, 3000);
       
    })
  
}, [ category])


   return state; 

   
}
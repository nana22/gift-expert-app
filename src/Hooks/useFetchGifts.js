import {useState,useEffect} from 'react'
import { getGiftByCategory } from '../Api/Gifts';

export const useFecthGifs = (category) => {
    const [state,setState]=useState({
        data:[],
        loading:true
    });
    useEffect(()=>{
           getGiftByCategory(category)
           .then((imgs)=>{
            setTimeout(() => {
                setState(
                    {
                        data:imgs,
                        loading:false
                    }
                )
            }, 3000);

           });

          },[category]);

    return state;//{data,loading}
}

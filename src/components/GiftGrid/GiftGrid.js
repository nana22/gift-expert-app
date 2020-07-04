import React from 'react'
import './GiftGrid.css'; // 
import PropTypes from 'prop-types'
import { GiftItem } from '../GiftItem/GiftItem';
import { useFecthGifs } from '../../Hooks/useFetchGifts';



export const GiftGrid = ({category}) => {

  // const [gifts,setGifts] = useState(['']);
    const {data,loading} = useFecthGifs(category);

  return (
    <div className='Grid'>
      {loading? 'Getting Gifts':''  }
       { 
                data?.map((gift,i)=>{
                   return (
                      <GiftItem key={i} id={i} url={gift.url} title={gift.title}/>
                )})
       }
    </div>
  )
}


GiftGrid.propTypes = {
  category: PropTypes.any.isRequired
}
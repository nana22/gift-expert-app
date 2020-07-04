import React, { useState } from "react";
import './GiftExpertApp.css'; // Tell webpack that
import { AddCategory } from "../AddCategory/AddCategory";
import { GiftGrid } from "../GiftGrid/GiftGrid";

export const GiftExpertApp = () => {

    const [categories, setgetCategories] = useState(['']);

    return (
        <div>
           <h2>Gif Expert App</h2>
           <hr></hr>
           <AddCategory setgetCategories={setgetCategories}/>
            
              { 
                categories.map(category=>{
                    return <GiftGrid key={category} category={category}/>
                })
              }
        </div>
    )
}

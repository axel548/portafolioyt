import React from 'react'
import { NavLink } from 'react-router-dom';

function Categories({filter, categories}) {
    return (
        <div className="buttons">
          {
              categories.map((cat, i)=>{
                  return <button type="button" className="btn-port" key={i} onClick={() => filter(cat)} >{cat}</button>
              })
          }  
        </div>
    )
}

export default Categories;
 
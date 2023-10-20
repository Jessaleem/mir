import { useState } from "react";

export function OnionHater (){  

  const handleChange = (e)=>{
   const { value } = e.target;        
   setGoal(value.toLowerCase());        
  }
  const [goal, setGoal] = useState ('')


    return(
        <div className="container">
            <textarea name="description" cols="30" rows="10" onChange={handleChange} />
            <p>
               {goal.includes('cebolla') 
               ? 'Odio la cebolla!'
               : null
               }
            </p>
        </div>
    )
}
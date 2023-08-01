import React from 'react'

const RecipeIndex = ({abetsIndex}) => {
    const abets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let num = 0;
  return (
        <>
        {
            abets.map(items=>{
                return(
                    <div className="numBox font" key={num++} onClick={()=>abetsIndex(items)}>
                        <h3>
                            {items}
                        </h3>
                    </div>
                )
            })
        }
        </>
  )
}

export default RecipeIndex;

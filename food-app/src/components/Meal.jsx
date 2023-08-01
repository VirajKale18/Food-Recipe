import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
const Meal = () =>{
    //IMP Fetching MealDB API data ->
    const [url,setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item,setItem] = useState();
    const [show,setShow] = useState(false);
    const [search,setSearch] = useState();
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meals );
            setItem(data.meals);
            setShow(true);
        })
    },[url])

    const setIndex = (abets)=>{
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${abets}`)
    }  
    const searchRecipe = (evt)=>{
        if(evt.key==='Enter'){
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }
    //<----------------------------->
    return(
        <>
        <div className="main font">
            <div className="heading">
                <h1>The Recipe Book</h1>
                <h4> One Stop Solution for your craving </h4>
                <h4> Why to Order when you can make it at home !!</h4>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" onChange={e=>setSearch(e.target.value)} onKeyDown={searchRecipe}/>
            </div>
            <div className="container">
               
               {
                 show ? <MealItem data={item}/> : "Not Found"
               } 
            </div>      
            <div className="indexController">
                <RecipeIndex abetsIndex={(abets)=>setIndex(abets)}/>
            </div>
        </div>
        </>
    )
} 
export default Meal;
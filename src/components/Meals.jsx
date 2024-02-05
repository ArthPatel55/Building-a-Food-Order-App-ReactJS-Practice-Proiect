import React from 'react'
import useHttp from '../hooks/useHttp.js';

// import { useEffect ,useState} from 'react';
import MealItem from './MealItem.jsx';

function Meals() {
   const{data:loadedMeals,isLoading,error}= useHttp('http://localhost:3000/meals');
   //  const [loadedMeals,setLoadedMeals]= useState([]);
//     useEffect(()=>{        
//     async function fetchMeals(){
//        const response = await fetch('http://localhost:3000/meals');
//        if(!response.ok){
//        }
//        const meals =await response.json();
//     //    
//        setLoadedMeals(meals);
//     }
//     fetchMeals();
// },[]);
  
return (
    <ul id="meals"> 
    {loadedMeals.map((meal)=> (<MealItem key={meal.id} meal={meal}/>))}
    </ul>
  )
}

export default Meals

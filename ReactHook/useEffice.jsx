🔹 useEffect() কী?

React component render হওয়ার পর যেসব কাজ করতে হয় (API call, DOM update, timer, event listener), সেগুলো handle করার জন্য useEffect() ব্যবহার করা হয়।

🔹 Basic Syntax
useEffect(() => {
  // side effect code
}, []);

//---------------Api Call use fetch-----------------
import { useEffect, useRef, useState } from "react";

const Hero = () =>{

    let[data,setData] = useState();

    useEffect(()=>{

        fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(json => setData(json))

    },[])

    return(

        <div>
            <h1>{JSON.stringify(data)}</h1>
        </div>
    )
}

export default Hero;

//---------------Api Call use async-----------------

import { useEffect, useRef, useState } from "react";

const Hero = () =>{

    let[data,setData] = useState();

    useEffect(()=>{

        ( async ()=>{
            let response = await fetch('https://dummyjson.com/products/category-list')
            let result = await response.json();
            setData(result);
        })()

    },[])

    return(

        <div>
            <h1>{JSON.stringify(data)}</h1>
        </div>
    )
}

export default Hero;

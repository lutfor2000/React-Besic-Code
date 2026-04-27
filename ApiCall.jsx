import { useRef } from "react";

const Hero = () => {

    let apiData = useRef(null);
    let myPtag = useRef();

    const fetchData = async ()=> {

       const response = await fetch("https://dummyjson.com/products");
       apiData.current = await response.json();
    }
    
   
    const showData = ()=>{
        myPtag.current.innrText = JSON.stringify(apiData.current);
    }

    return(
        <div>
            <p ref={myPtag}></p>
            <button onClick={fetchData}>Call API</button>
            <button onClick={showData}>Show Data</button>
        </div>
    );
};

export default Hero;

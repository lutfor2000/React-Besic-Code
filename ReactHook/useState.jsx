useState ব্যবহার করে তুমি কোনো data store, update, এবং track করতে পারো।
যখন state পরিবর্তন হয়, তখন component auto re-render হয়।

import { useRef, useState } from "react";

const Hero = () => {
        const [number,setNumber] = useState(0);
   
    return(
        <div>
            <h1>Number: {number}</h1>
            <button onClick={()=>setNumber(number+1)}>Click</button>
        </div>
    );
};

export default Hero;

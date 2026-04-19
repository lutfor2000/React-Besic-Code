const Hero = () => {

    function demo(){
        alert("This is Demo Function");
    }

    return (
        <div>
            <button onClick={demo}>Submit Document</button>
        </div>
    );
};

export default Hero;

=====================================Step 02===========================
const Hero = () => {

    return (
        <div>
            <button onClick={()=>{alert("Alert Success full")}}>Submit Document</button>
        </div>
    );
};

export default Hero;

=>Props হলো parent component থেকে child component-এ data পাঠানোর একটি মাধ্যম।

==========================Parent Component======================================
import Hero from "./components/Hero"
function App() {
  return (
    <div>
      <Hero title="Lutfor Rhaman Shanto" age="24"/>
    <div/>
  )
}

export default App

  

==========================Child Component======================================
const Hero = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.age}</h1>
        </div>
    );
};

export default Hero;


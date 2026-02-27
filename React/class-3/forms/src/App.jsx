
import "./App.css";
// import Form from "./Components/Form";

import TempratureInput from "./Temprature/TempratureInput";

function App() {
  // const [count, setCount] = useState(0);
  // const [color, setColor] = useState("white");

  return (
    <>
    <TempratureInput/>
    {/* <Formik/> */}
      {/* <p style={{ color: color, fontSize: "3rem" }}>
        Hello, the count is {count}
      </p>
      <button
        onClick={() => {
          setCount((count) => count + 1);
          setColor("red");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          if(count <= 0){
            alert("Negatives not allowed")
            return;
          }
          setCount((count) => count - 1);
          setColor("green");
        }}
      >
        Decrement
      </button> */}
      
    </>
  );
}

export default App;

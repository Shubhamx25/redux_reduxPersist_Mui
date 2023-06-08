import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { increment, decrement } from "./redux/countReducer";

/* import { MuiTypography } from "./components/MuiTypography"; */
import { MuiButton } from "./components/MuiButton";




function App() {
  const val = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  return (
    <div className="App">
      <button onClick={handleIncrement}>+</button>
      <p>{val}</p>
      <button onClick={handleDecrement}>-</button>
    {/*   <MuiTypography /> */}
      <MuiButton />
    </div>
  );
}

export default App;

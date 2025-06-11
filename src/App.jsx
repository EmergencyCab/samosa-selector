import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count} </h2>
        <img
          className="samosa"
          src="https://images.jdmagicbox.com/quickquotes/images_main/vegetable-masala-samosa-2226280547-20vz5vxc.png"
          onClick={updateCount}
        />
      </div>
    </div>
  );
};

export default App;

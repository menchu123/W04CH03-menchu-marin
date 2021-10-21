import "./App.css";
import Info from "./components/Info/Info.js";
import Display from "./components/Display/Display";
import Keyboard from "./components/Keyboard/Keyboard";
import Actions from "./components/Actions/Actions";
import { useState } from "react";
import Context from "./components/Context/Context";

function App() {
  const [displayArray, setDisplayArray] = useState([]);

  const getNumber = (event) => {
    if (displayArray.length < 9) {
      setDisplayArray([...displayArray, event.target.textContent]);
    }
  };

  const deleteNumber = () => {
    setDisplayArray(displayArray.splice(0, displayArray.length - 1));
  };

  return (
    <Context.Provider
      value={{
        getNumber,
        deleteNumber,
      }}
    >
      {/* <Key text="ok" actionOnClick={() => console.log("ji")} isCalling={true} /> */}
      <div className="container">
        {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
        <Info isCalling={false} />
        <main className="phone">
          <div className="keyboard-container">
            <ol className="keyboard">
              <Keyboard isCalling={false} />
            </ol>
          </div>
          <div className="actions">
            <Display numbers={displayArray} />
            {/* <!-- El botón de llamar debe tener la clase "activo" cuando --> */}
            {/* <!-- el número de teléfono tiene 9 cifras --> */}

            {/* <!-- Sólo se tiene que ver un botón u otro --> */}
            <Actions isDisabled={false} isCalling={false} />
          </div>
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;

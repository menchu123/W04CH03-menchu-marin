import "./App.css";
import Info from "./components/Info/Info.js";
import Display from "./components/Display/Display";
import Keyboard from "./components/Keyboard/Keyboard";
import Actions from "./components/Actions/Actions";
import { useRef, useState } from "react";
import Context from "./components/Context/Context";

function App() {
  const [displayArray, setDisplayArray] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isCalling, setIsCalling] = useState(false);
  const timer = useRef(null);

  const getNumber = (event) => {
    if (displayArray.length < 9) {
      setDisplayArray([...displayArray, event.target.textContent]);
    } else {
      setIsDisabled(false);
    }
  };

  const deleteNumber = () => {
    setDisplayArray(displayArray.splice(0, displayArray.length - 1));
  };

  const reset = () => {
    setIsCalling(false);
    setDisplayArray([]);
    setIsDisabled(true);
  };

  const call = () => {
    if (displayArray.length === 9) {
      setIsCalling(true);
      timer.current = setTimeout(() => {
        reset();
      }, 5000);
    }
  };

  const hang = () => {
    clearTimeout(timer.current);
    reset();
  };

  return (
    <Context.Provider
      value={{
        getNumber,
        deleteNumber,
        call,
        hang,
        isCalling,
      }}
    >
      {/* <Key text="ok" actionOnClick={() => console.log("ji")} isCalling={true} /> */}
      <div className="container">
        {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
        <Info isCalling={isCalling} />
        <main className="phone">
          <div className="keyboard-container">
            <ol className="keyboard">
              <Keyboard isCalling={isCalling} />
            </ol>
          </div>
          <div className="actions">
            <Display numbers={displayArray} />
            {/* <!-- El botón de llamar debe tener la clase "activo" cuando --> */}
            {/* <!-- el número de teléfono tiene 9 cifras --> */}

            {/* <!-- Sólo se tiene que ver un botón u otro --> */}
            <Actions isDisabled={isDisabled} isCalling={isCalling} />
          </div>
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;

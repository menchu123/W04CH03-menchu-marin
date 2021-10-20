import "./App.css";
import Info from "./components/Info/Info.js";
import Display from "./components/Display/Display";
import Keyboard from "./components/Keyboard/Keyboard";
import Actions from "./components/Actions/Actions";

function App() {
  return (
    <>
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
            <Display numbers={[6, 4, 2, 7, 9]} />
            {/* <!-- El botón de llamar debe tener la clase "activo" cuando --> */}
            {/* <!-- el número de teléfono tiene 9 cifras --> */}

            {/* <!-- Sólo se tiene que ver un botón u otro --> */}
            <Actions isDisabled={false} isCalling={false} />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

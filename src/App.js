import "./App.css";
import Info from "./components/Info/Info.js";
import Key from "./components/Key/Key";
import Display from "./components/Display/Display";

function App() {
  return (
    <>
      <Info isCalling={false} />
      <Key text="ok" actionOnClick={() => console.log("ji")} />
      <Display numbers={[6, 4, 2, 7, 9]} />
    </>
    // <div className="container">
    //   {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
    //   <span className="message">Calling...</span>
    //   <main className="phone">
    //     <div className="keyboard-container">
    //       <ol className="keyboard">
    //         <li>
    //           <button className="key">1</button>
    //         </li>
    //         <li>
    //           <button className="key">2</button>
    //         </li>
    //         <li>
    //           <button className="key">3</button>
    //         </li>
    //         <li>
    //           <button className="key">4</button>
    //         </li>
    //         <li>
    //           <button className="key">5</button>
    //         </li>
    //         <li>
    //           <button className="key">6</button>
    //         </li>
    //         <li>
    //           <button className="key">7</button>
    //         </li>
    //         <li>
    //           <button className="key">8</button>
    //         </li>
    //         <li>
    //           <button className="key">9</button>
    //         </li>
    //         <li>
    //           <button className="key">0</button>
    //         </li>
    //         <li>
    //           <button className="key big">delete</button>
    //         </li>
    //       </ol>
    //     </div>
    //     <div className="actions">
    //       <span className="number">667359961</span>
    //       {/* <!-- El botón de llamar debe tener la clase "activo" cuando --> */}
    //       {/* <!-- el número de teléfono tiene 9 cifras --> */}
    //       <a href="#" className="call">
    //         Call
    //       </a>
    //       {/* <!-- Sólo se tiene que ver un botón u otro --> */}
    //       <a href="#" className="hang active">
    //         Hang
    //       </a>
    //     </div>
    //   </main>
    // </div>
  );
}

export default App;

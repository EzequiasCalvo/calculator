import "./App.scss";

function App() {
  return (
    <div className="container">
      <section className="output-wrapper"></section>
      <section className="buttons-wrapper">
        <div>
          <section className="delete">
            <button className="button" id="clear">
              CLEAR
            </button>
            <button className="button" id="delete">
              DEL
            </button>
          </section>
          <section className="numbers">
            <button className="button">7</button>
            <button className="button">8</button>
            <button className="button">9</button>
            <button className="button">4</button>
            <button className="button">5</button>
            <button className="button">6</button>
            <button className="button">7</button>
            <button className="button">8</button>
            <button className="button">9</button>
            <button className="button" id="zero">
              0
            </button>
            <button className="button">.</button>
          </section>
        </div>
        <section className="operators">
          <button className="button">÷</button>
          <button className="button">x</button>
          <button className="button">-</button>
          <button className="button">+</button>
          <button className="button">=</button>
        </section>
      </section>
    </div>
  );
}

export default App;

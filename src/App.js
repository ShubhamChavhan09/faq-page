import "./App.css";
import Image from "./components/Image";

import Accordoin from "./components/Accordion";

function App() {
  return (
    <>
      <div className="container">
        <div className="App">
          <Image />
        </div>
        <div className="wrapper">
          <Accordoin />
        </div>
      </div>
    </>
  );
}

export default App;

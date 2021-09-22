import "./App.css";
import Image from "./components/Image";

import Accordoin from "./components/Accordion";

function App() {
  return (
    <>
      <a
        className="link"
        rel="noreferrer"
        href="https://github.com/ShubhamChavhan09/faq-page"
        target="_blank"
      >
        Github
      </a>
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

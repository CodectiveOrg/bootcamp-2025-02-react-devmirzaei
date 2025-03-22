import { ReactNode } from "react";

import Header from "./components/Header/Header.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";

import "./App.css";
import Result from "./components/Result/Result.tsx";

function App(): ReactNode {
  return (
    <>
      <Header />
      <main>
        <Toolbar />
        <Result />
      </main>
    </>
  );
}

export default App;

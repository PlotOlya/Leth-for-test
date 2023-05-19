import React from "react";
import { Route, Routes,} from "react-router-dom";
import Layout from "../Layout/Layout";


function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default App;

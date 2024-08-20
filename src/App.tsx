import { Route, Routes } from "react-router-dom";
import Sample1 from "./pages/Sample1";
import Sample2 from "./pages/Sample2";


function App() {
  return (
    <>
      <Routes>
        <Route path="/project-1" element={<Sample1 />}  />
        <Route path="/project-2" element={<Sample2 />}  />
      </Routes>
    </>
  );
}

export default App;

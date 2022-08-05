import SearchPage from "./pages/search";
import AddCaption from "./pages/caption";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<SearchPage />} />
      <Route path="/caption" element={<AddCaption />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

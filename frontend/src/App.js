import NavBar from "./components/NavBar";
import ConsumerHomePage from "./pages/ConsumerHomePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path='/consumerHomePage'
            element={<ConsumerHomePage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

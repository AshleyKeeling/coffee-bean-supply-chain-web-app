import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import NavBar from "./components/NavBar";

// pages
import ConsumerHome from "./pages/ConsumerHome";
import SupplyChainOverview from "./pages/SupplyChainOverview";




function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path='/consumerHomePage'
            element={<ConsumerHome />}
          />
          <Route
            path='/supplyChainOverviewPage'
            element={<SupplyChainOverview />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

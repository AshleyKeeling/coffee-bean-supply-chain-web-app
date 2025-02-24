import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import NavBar from "./components/NavBar";

// pages
import ConsumerHome from "./pages/ConsumerHome";
import SupplyChainOverview from "./pages/SupplyChainOverview";
import ParticipantHome from './pages/ParticipantHome';




function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path='/consumerHome'
            element={<ConsumerHome />}
          />
          <Route
            path='/supplyChainOverviewPage'
            element={<SupplyChainOverview />}
          />
          <Route
            path='/participantHome'
            element={<ParticipantHome />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

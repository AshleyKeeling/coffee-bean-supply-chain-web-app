import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import NavBar from "./components/NavBar";

// pages
import ConsumerHome from "./pages/ConsumerHome";
import SupplyChainOverview from "./pages/SupplyChainOverview";
import ParticipantHome from './pages/ParticipantHome';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';




function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={<ConsumerHome />}
          />
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
          <Route
            path='/signUp'
            element={<SignUp />}
          />
          <Route
            path='/signIn'
            element={<SignIn />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

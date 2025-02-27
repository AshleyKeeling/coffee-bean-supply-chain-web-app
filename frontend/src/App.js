import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import NavBar from "./components/NavBar";

// pages
import ConsumerHome from "./pages/ConsumerHome";
import SupplyChainOverview from "./pages/SupplyChainOverview";
import ParticipantHome from './pages/ParticipantHome';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import BatchTimeline from './pages/BatchTimeline';
import ManagerDashboard from './pages/ManagerDashboard';
import ParticipantDashboard from './pages/ParticipantDashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* --- Consumer routes --- */}
          <Route path='/' element={<ConsumerHome />} />
          <Route path='/consumerHome' element={<ConsumerHome />} />
          <Route path='/supplyChainOverviewPage' element={<SupplyChainOverview />} />
          <Route path='/batchTimeline' element={<BatchTimeline />} />

          {/* --- Participant Routes --- */}
          <Route path='/participantHome' element={<ParticipantHome />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/signIn' element={<SignIn />} />

          {/* --- Protected routes (particiapnts and managers) --- */}
          <Route path="/managerDashboard" element={<ManagerDashboard />} />
          <Route path="/participantDashboard" element={<ParticipantDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

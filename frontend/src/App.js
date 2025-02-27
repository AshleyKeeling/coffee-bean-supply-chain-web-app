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
import NewBatch from './pages/NewBatch';
import NewSupplyChain from './pages/NewSupplyChain';
import UpdateBatch from './pages/UpdateBatch';

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
          <Route path="/managerDashboard/newBatch" element={<NewBatch />} />
          <Route path="/managerDashboard/newSupplyChain" element={<NewSupplyChain />} />

          <Route path="/participantDashboard" element={<ParticipantDashboard />} />
          <Route path="/participantDashboard/updateBatch" element={<UpdateBatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

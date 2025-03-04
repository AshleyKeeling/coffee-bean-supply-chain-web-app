import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

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
  const { user } = useAuthContext();

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
          <Route path='/signUp' element={!user ? <SignUp /> : user.role === "Manager" ? <Navigate to="/managerDashboard" /> : <Navigate to="/participantDashboard" />} />
          <Route path='/signIn' element={!user ? <SignIn /> : user.role === "Manager" ? <Navigate to="/managerDashboard" /> : <Navigate to="/participantDashboard" />} />

          {/* --- Protected routes (particiapnts and managers) --- */}
          <Route path="/managerDashboard" element={user && user.role === "Manager" ? <ManagerDashboard /> : <Navigate to="/participantHome" />} />
          <Route path="/managerDashboard/newBatch" element={user && user.role === "Manager" ? <NewBatch /> : <Navigate to="/participantHome" />} />
          <Route path="/managerDashboard/newSupplyChain" element={user && user.role === "Manager" ? <NewSupplyChain /> : <Navigate to="/participantHome" />} />

          <Route path="/participantDashboard" element={user && user.role !== "Manager" ? <ParticipantDashboard /> : <Navigate to="/participantHome" />} />
          <Route path="/participantDashboard/updateBatch" element={user && user.role !== "Manager" ? <UpdateBatch /> : <Navigate to="/participantHome" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

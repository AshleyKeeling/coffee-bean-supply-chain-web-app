import NavBar from "./components/NavBar";
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <h1>test</h1>
    </div>
  );
}

export default App;

import {
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from './pages/home/component';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
}

export default App

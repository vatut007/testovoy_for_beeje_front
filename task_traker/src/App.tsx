import {
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from './pages/home/component';
import { CreatePage } from "./pages/create/component";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/create" element={<CreatePage/>}/>
    </Routes>
  );
}

export default App

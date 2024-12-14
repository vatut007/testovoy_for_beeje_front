import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/component";
import { CreatePage } from "./pages/create/component";
import { LoginPage } from "./pages/login/component";
import { useGetMeQuery } from "./services/api/api-slice";
import { LogoutPage } from "./pages/logout/component";

function App() {
  const { data: user, isLoading } = useGetMeQuery(undefined);
  if (isLoading) {
    return <p>Идет загрузка</p>;
  }
  if (user) {
    return (
      <Routes>
        <Route path="/create" element={<CreatePage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    );
  }
}

export default App;

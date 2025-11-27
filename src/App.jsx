import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import CertificatePage from "./pages/CertificatePage";
import DetailPage from "./pages/ProjectDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/certifications" element={<CertificatePage />} />
        <Route path="/projects/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;

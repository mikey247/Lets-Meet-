import { Route, Routes } from "react-router-dom";
import AllMeetUps from "./pages/AllMeetUps";
import Favorites from "./pages/Favorites";
import NewMeetUps from "./pages/NewMeetUp";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUps />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/new-meetups" element={<NewMeetUps />} />
      </Routes>
    </Layout>
  );
}

export default App;

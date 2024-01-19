import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./Pages/Main";
import Places from "./Pages/Places";
import Activities from "./Pages/Activities";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/places" element={<Places />}></Route>
          <Route path="/activities" element={<Activities/>}></Route>
          <Route path="/services" element={<Main />}></Route>
          <Route path="/services" element={<Main />}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/blog" element={<Main />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

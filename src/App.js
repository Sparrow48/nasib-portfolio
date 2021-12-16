import { BrowserRouter as Router } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Works from "./components/Works";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="bg-gray-50 ">
      <Router>
        <Layout>
          <Header />
          <AboutMe />
          <Works />
        </Layout>
      </Router>
    </div>
  );
}

export default App;

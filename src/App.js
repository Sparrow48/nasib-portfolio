import { BrowserRouter as Router } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Works from "./components/Works";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="">
      <Router>
        <Layout>
          <Header />
          <AboutMe />
          <Works />
          <Contact />
          <Footer />
        </Layout>
      </Router>
    </div>
  );
}

export default App;

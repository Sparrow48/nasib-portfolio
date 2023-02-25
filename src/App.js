import { BrowserRouter as Router } from "react-router-dom";
import 'toastr/build/toastr.min.css';
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Works from "./components/Works";
import Layout from "./layout/Layout";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="">
      <Router>
        <Layout>
          <Header />
          <AboutMe />
          <Experience />
          <Works />
          <Contact />
          <Footer />
        </Layout>
      </Router>
    </div>
  );
}

export default App;

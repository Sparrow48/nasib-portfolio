import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Works from "./components/Works";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="bg-gray-50 ">
      <Router>
        <Layout>
          <Header />
          <Works />
          <div className="h-screen bg-gray-50 "> hello</div>
          <div className="h-screen bg-gray-50 "> hello</div>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

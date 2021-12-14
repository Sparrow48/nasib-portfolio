import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="font-inter">
      <Router>
        <Layout>
          <Header />
          <div className="h-screen bg-gray-50 "> hello</div>
          <div className="h-screen bg-gray-50 "> hello</div>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

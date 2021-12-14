import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="font-inter">
      <Router>
        <Layout>
          <h1>Hello</h1>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

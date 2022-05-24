import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavigationApp from "./components/Navigation";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apolloclient";
import DetailAnime from "./pages/DetailAnime";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <NavigationApp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime/:id" element={<DetailAnime />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;

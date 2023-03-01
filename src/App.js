import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import RoutesPath from "./components/RoutesPath";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Navigation />
        <RoutesPath />
      </div>
      <Footer />
    </>
  );
}

export default App;

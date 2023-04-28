import Header from "./components/header/Header";
import "./styles/normalize.css";
import "./styles/global.css";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Red from "./components/decoration/blur/red/Red";
import PlanetRed from "./components/decoration/static/planetRed/PlanetRed";
import PlanetRedSmall from "./components/decoration/static/planetRedSmall/PlanetRedSmall";
import Yellow from "./components/decoration/blur/yellow/Yellow";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />

      <Red />
      <PlanetRed />
      <PlanetRedSmall />
      <Yellow />
    </div>
  );
}

export default App;

import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewsLetter from "./Components/NewsLetter";
import Packages from "./Components/Packages";
import Team from "./Components/Team";


function App() {
  return (
    <div>
      <Header />
      <Packages /> 
      <Team />
      <NewsLetter /> 
      <Footer />
    </div>
  );
}

export default App;

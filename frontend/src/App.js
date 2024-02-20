import "./main.css"
import {Routes,Route} from "react-router-dom"
import MainPage from "./react_elements/pages/main"
import Header from "./react_elements/components/header"

function App() {
  return (
    <div className="app-wrapper flex flex-col h-screen overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;

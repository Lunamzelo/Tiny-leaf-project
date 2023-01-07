import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

//import  ReactDOM  from 'react-dom/client';
import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Reservation from "./Reservation";
//import Layout from "./layout/Layout";
function App() {
  return (
    <div className="App">
      
        {/* // <BrowserRouter> */}

        <Routes>
          {/* <Switch> */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          {/* </Switch> */}
        </Routes>
        
        {/* </BrowserRouter> */}
      {/* <Layout/> */}
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
export default App;

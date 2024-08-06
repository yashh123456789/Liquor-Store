import './App.css';
import  {NavBar} from "../src/components/navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Home} from "../src/components/home/home";
import {Products} from "../src/components/products/products";



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Products/>
    </div>
  );
}

export default App;

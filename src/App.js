import { Routes, Route} from "react-router-dom";
import Nav from './routes/navigation/navigation.component';
import Home from './routes/home/home.component'
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/Shop.component";






const App = () => {

 return (
<Routes>
    <Route path="/" element={<Nav />}>
      <Route index element={<Home />} />
      <Route path="auth" element={<Authentication/>} />
      <Route path="shop" element={<Shop />} />
  </Route>
</Routes>
 )
};

export default App;

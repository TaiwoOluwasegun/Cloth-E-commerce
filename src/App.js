import { Routes, Route} from "react-router-dom";
import Nav from './routes/navigation/navigation.component';
import Home from './routes/home/home.component'
import SignIn from "./routes/sign-In/Sign-In-component";
import Shop from "./routes/shop/Shop.component";






const App = () => {

 return (
<Routes>
    <Route path="/" element={<Nav />}>
      <Route index element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="shop" element={<Shop />} />
  </Route>
</Routes>
 )
};

export default App;

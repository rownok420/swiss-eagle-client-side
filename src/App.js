import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Share/Header/Header";
import Footer from "./Pages/Share/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import About from "./Pages/About/About";
import Explore from "./Pages/Explore/Explore";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Register from "./Pages/Login/Register/Register";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import AddProduct from "./Pages/AddProduct/AddProduct";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/explore">
                            <Explore />
                        </Route>
                        <PrivateRoute path="/dashboard">
                            <Dashboard />
                        </PrivateRoute>
                        <Route exact path="/placeOrder">
                            <PlaceOrder />
                        </Route>
                        <Route exact path="/addProduct">
                            <AddProduct />
                        </Route>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;

// font-family: 'Libre Baskerville', serif;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Share/Header/Header";
// import Footer from "./Pages/Share/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="*">
                        <NotFound />
                    </Route>
                </Switch>
                {/* <Footer /> */}
            </Router>
        </div>
    );
}

export default App;

// font-family: 'Libre Baskerville', serif;

import React, { useState } from "react";
import style from "./App.module.css";
import Home from "./Pages/Home/Home";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Provider } from "react-redux";
import { userReducer } from "./store/reducers/user";
import { createStore } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Verify from './Pages/Verify/Verify'

const App = () => {
  const store = createStore(userReducer);
  const [state, setState] = useState("");
  const handleTop = () => {
    setState("Navbar");
    setTimeout(() => {
      setState("");
    }, 1000);
  };
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
          <Route exact path="/verify/:id" component={Verify}>
              <Verify></Verify>
            </Route>
            <Route exact path="/">
              <Home top={state}></Home>
              <IoIosArrowDropupCircle
                onClick={handleTop}
                fontSize="50px"
                className={style.arrow}
              ></IoIosArrowDropupCircle>
            </Route>
           
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;

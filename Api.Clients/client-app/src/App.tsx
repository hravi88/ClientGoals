import { useEffect } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import { ClientDetails } from "./components/ClientDetails";
import { useDispatch } from "react-redux";
import { LoadClientDataActions } from "./store/actions";
import Goals from "./components/Goals";
import UIError from "./ErrorBoundary/Error";
import "./App.css";
import AddGoals from "./components/AddGoals";
import EditGoals from "./components/EditGoals";

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadClientDataActions.LOAD_CLIENT_DATA_REQUEST.request({}));
  }, []);

  return (
    <div className="App">
     <h3 className="col-add">Client Details</h3>
      <ErrorBoundary>
        <main>
      <Routes>
        <Route path="/" element={<ClientDetails />} />
        <Route path="/goals/:id" element={<Goals />} />
        <Route path='/add' element={<AddGoals />} />
        <Route path='/edit/:id' element={<EditGoals />} />
        <Route path="/error" element={<UIError />} />
        
      </Routes>
        </main>
      </ErrorBoundary>
    </div>
  );
};

export default App;

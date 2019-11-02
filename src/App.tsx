import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UserComp, UserComp2 } from "./component/User"
import 'bootstrap/dist/css/bootstrap.css';

const App: React.FC = () => {

  return (
        <div className="container">
          <UserComp username="vtssogari" />
        </div>
  );
}

export default App;

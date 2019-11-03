import React from 'react';
import './App.css';
//import { UserComp, UserClassComp } from "./component/User"
import { UserComp, UserClassComp } from "./component/UserSearch"
import 'bootstrap/dist/css/bootstrap.css';  //root level bootstrap framework. Avoid the tagging bootstrap from index.html

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <UserComp username="vtssogari" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <UserClassComp username="vtssogari" />
        </div>
      </div>
    </div>
  );
}

export default App;

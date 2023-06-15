import React from "react";
import Plan from './components/plan';
import AddOns from './components/add_ons';
import FinishUp from './components/step_4';
import PersonalInfo from './components/personal_info';
import {Button} from './components/button';
import Success from './components/success';


function App() {
  
  const components = [PersonalInfo, Plan, AddOns, FinishUp, Success];

  return (
    
    <Button components={components} />
  )
}

export default App;

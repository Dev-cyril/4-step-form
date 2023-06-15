import React from 'react'
import Plan from './plan';
import AddOns from './add_ons';
import FinishUp from './step_4';
import PersonalInfo from './personal_info';
import {Button} from './button';
import Success from './success';

export default function Comp() {

    const components = [PersonalInfo, Plan, AddOns, FinishUp, Success];

  return (
    
    <Button components={components} />
  )
}

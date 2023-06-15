import React, {useState, useRef, useEffect, useContext} from "react";
import { info } from "./info";
import { ButtonContext } from "./button";
import '../styles/add_ons.css'

function AddOns() {
  console.log(info.plan.duration === 'Monthly')

  const services = useRef(null)
  const storage = useRef(null)
  const profile = useRef(null)

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const { setIsButtonDisabled } = useContext(ButtonContext)

  useEffect(() => {
    const isAnyChecked = isChecked1 || isChecked2 || isChecked3;
    setIsButtonDisabled(!isAnyChecked);
  }, [isChecked1, isChecked2, isChecked3, setIsButtonDisabled]);

  const handleCheckboxChange1 = (event) => {
    setIsChecked1(event.target.checked);
    info.add_ons.price['Online services'] = services.current.textContent
  };

  const handleCheckboxChange2 = (event) => {
    setIsChecked2(event.target.checked);
    info.add_ons.price['Larger storage'] = storage.current.textContent
  };

  const handleCheckboxChange3 = (event) => {
    setIsChecked3(event.target.checked);
    info.add_ons.price['Customizable Profile'] = profile.current.textContent
  };

  info.add_ons.type = {'Online services': isChecked1, 'Larger storage': isChecked2, 'Customizable Profile': isChecked3}
  
  console.log(info)
  return (
    <section className="details">
      <div className="info">
        <h2>Pick add-ons</h2>
        <small>Add-ons helps to enhance your gaming experience</small>
        <div className="cards-container">
            <div className="card-adds">
                <input type="checkbox" className="services"
                        checked={isChecked1}
                        onChange={handleCheckboxChange1}/>
                <div>
                    <h3>Online services</h3>
                    <h6>Access to multiplayer game</h6>
                </div>
                {
                  info.plan.duration === 'Monthly' ? 
                    <div className="price fir" ref={services}>$1/mo</div> :
                    <div className="price fir" ref={services}>$10/yr</div>
                }
            </div>
            <div className="card-adds">
                <input type="checkbox" className="services"
                        checked={isChecked2}
                        onChange={handleCheckboxChange2}/>
                <div>
                    <h3>Larger storage </h3>
                    <h6>Extra 1TB of cloud save</h6>
                </div>
                {
                  info.plan.duration === 'Monthly' ? 
                    <div className="price sec" ref={storage}>$2/mo</div> :
                    <div className="price sec" ref={storage}>$20/yr</div>
                }
            </div>
            <div className="card-adds">
                <input type="checkbox" className="services"
                        checked={isChecked3}
                        onChange={handleCheckboxChange3}/>
                <div>
                    <h3>Customizable Profile</h3>
                    <h6>Custom theme on your profile</h6>
                </div>
                {
                  info.plan.duration === 'Monthly' ? 

                    <div className="price thr" ref={profile}>$2/mo</div> :
                    <div className="price thr" ref={profile}>$20/yr</div>
                }
            </div>
        </div>
      </div>
    </section>
  )
}

export default AddOns
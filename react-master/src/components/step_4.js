import React, { useContext} from "react";
import "../styles/step_4.css";
import { info } from "./info";
import { ButtonContext } from "./button";
function FinishUp() {

  const { setActiveIndex} = useContext(ButtonContext)

  const change = () => {
    setActiveIndex(1)
  };
  const values = Object.values(info.add_ons.price);
  const sum = values.reduce((acc, cur) => acc + cur, 0) + info.plan.price;

  return (
    <section className="details">
      <div className="info">
        <h2>Finishing up</h2>
        <small>Double check everything looks okay before confirming</small>
        <div className="cards-container-finish">
          <div className="card-adds-finish">
            <div>
              {info.plan.type} ({info.plan.duration}) <br />
              <p onClick={change} style={{cursor: 'pointer'}}>Change</p>
            </div>
            <div className="price">${info.plan.price}</div>
          </div>
          {Object.keys(info.add_ons.type).map((key) =>
            info.add_ons.type[key] ? (
              <div className="card-adds-finish-adds" key={key}>
                <div>{key}</div>
                <div className="price" >+${info.add_ons.price[key]}/{info.plan.duration === 'Monthly' ? 'mo' : 'yr'}</div>
              </div>
            ) : null
          )}
        </div>
        <div className="card-final">
          <h4>Total (per {info.plan.duration.split("ly")})</h4>
          <div className="price">${sum}/{info.plan.duration === 'Monthly' ? 'mo' : 'yr'}</div>
        </div>
      </div>
    </section>
  );
}

export default FinishUp;

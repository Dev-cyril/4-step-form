import React, { useContext, useEffect, useState } from "react";
import './App.css';
import Comp from "./components/comp";
import { ButtonContext } from "./components/button";


function App() {
  const { activeIndex, setActiveIndex } = useContext(ButtonContext);
  // const [index, setIndex] = useState(activeIndex);

  // useEffect(() => {
  //   setIndex(activeIndex);
  // }, [activeIndex]);

  // console.log(index);
  
  return (
    <section className="sect">
      <aside>
        <div className={`div`}>
          <div className="number">1</div>
          <div>
            <h3> Step 1<br /> <span>YOUR INFO</span> </h3>
          </div>
        </div>
        <div className={`div`}>
          <div className="number">2</div>
          <div>
            <h3> Step 2<br /> <span>SELECT PLAN</span> </h3>
          </div>
        </div>
        <div className={`div`}>
          <div className="number">3</div>
          <div>
            <h3> Step 3<br /> <span>ADD-ONS</span> </h3>
          </div>
        </div>
        <div className={`div`}>
          <div className="number">4</div>
          <div>
            <h3> Step 4<br /> <span>SUMMARY</span> </h3>
          </div>
        </div>
      </aside>
      <Comp />
    </section>
  );
}

export default App;

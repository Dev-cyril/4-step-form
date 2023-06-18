import React, { useState, createContext, useEffect } from 'react';
import '../styles/button.css';

const ButtonContext = createContext();

const Button = ({ components }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveComponent = components[activeIndex];

  const next = () => {
    setActiveIndex(prevIndex => prevIndex + 1);
  };

  const previous = () => {
    setActiveIndex(prevIndex => prevIndex - 1);
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (isButtonDisabled) {
      setActiveIndex(activeIndex);
    }
  }, [isButtonDisabled, activeIndex]);

  return (
    <ButtonContext.Provider value={{ activeIndex, setActiveIndex, isButtonDisabled, setIsButtonDisabled, next }}>
      <div className='sect'>
        <aside>
          <div className={`div`}>
            <div className={`number ${activeIndex === 0 ? 'active' : ''}`}>1</div>
            <div>
              <h3> Step 1<br /> <span>YOUR INFO</span> </h3>
            </div>
          </div>
          <div className={`div`}>
            <div className={`number ${activeIndex === 1 ? 'active' : ''}`}>2</div>
            <div>
              <h3> Step 2<br /> <span>SELECT PLAN</span> </h3>
            </div>
          </div>
          <div className={`div`}>
            <div className={`number ${activeIndex === 2 ? 'active' : ''}`}>3</div>
            <div>
              <h3> Step 3<br /> <span>ADD-ONS</span> </h3>
            </div>
          </div>
          <div className={`div`}>
            <div className={`number ${activeIndex >= 3 ? 'active' : ''}`}>4</div>
            <div>
              <h3> Step 4<br /> <span>SUMMARY</span> </h3>
            </div>
          </div>
        </aside>
        <div className="container">
          {ActiveComponent && <ActiveComponent />}
          {
            (activeIndex < components.length - 1) ?
              <div className="button-wrapper">
                {activeIndex >= 1 && components.length - 1 && <p className="back-button" onClick={previous}>Go back</p>}
                <div className="button-container">
                  {activeIndex < components.length - 2 ? (
                    <button disabled={isButtonDisabled} className="next-button" onClick={next}>
                      Next step
                    </button>
                  ) : (
                    <button disabled={isButtonDisabled} className="finish-button" onClick={next}>
                      Confirm
                    </button>
                  )}
                </div>
              </div>
              : null
          }
        </div>
      </div>
    </ButtonContext.Provider>
  );
};

export { Button, ButtonContext };

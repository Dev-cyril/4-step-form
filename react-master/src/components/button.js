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
      <div className="container">
        {ActiveComponent && <ActiveComponent />}
        {
          (activeIndex < components.length - 1) ?
            <div className="button-wrapper">
              {activeIndex >= 1 && components.length - 1 && <p className="back-button" onClick={previous}>Go back</p>}
              <div className="button-container">
                {activeIndex < components.length - 1 ? (
                  <button disabled={isButtonDisabled} className="next-button" onClick={next}>
                    Next step
                  </button>
                ) : (
                  <button disabled={isButtonDisabled} className="finish-button">
                    Finish
                  </button>
                )}
              </div>
            </div>
            : null
        }
      </div>
    </ButtonContext.Provider>
  );
};

export { Button, ButtonContext };

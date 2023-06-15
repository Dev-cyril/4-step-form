import React, { useRef, useEffect, useContext, useState } from 'react';
import { ButtonContext } from './button';
import '../styles/personal_info.css';

const PersonalInfo = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: ''
  });

  const { isButtonDisabled, setIsButtonDisabled, next } = useContext(ButtonContext);

  useEffect(() => {
    const { input1, input2, input3 } = inputValues;
    setIsButtonDisabled(!(input1 !== '' && input2 !== '' && input3 !== ''));
  }, [inputValues, setIsButtonDisabled]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value.trim() }));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isButtonDisabled) {
      e.preventDefault();
      next();
    }
  };

  return (
    <section className="details">
      <div className="info">
        <h2>Personal Information</h2>
        <small>Please provide your name, email, and phone number</small>
        <form>
          <div className="form-group col-1-2">
            <label htmlFor="name">Name</label>
            <div className="form-field">
              <p className="form-help">This field is required</p>
              <span className="form-field-container">
                <input
                  type="text"
                  name="input1"
                  ref={ref1}
                  placeholder="e.g. Joseph Doe"
                  maxLength="35"
                  autoComplete="on"
                  required
                  onKeyDown={handleKeyDown}
                  onChange={handleInputChange}
                />
                <i className="form-field-icon"></i>
              </span>
            </div>
          </div>
          <div className="form-group col-1-2">
            <label htmlFor="email">Email Address</label>
            <div className="form-field">
              <p className="form-help">This field is required</p>
              <span className="form-field-container">
                <input
                  type="email"
                  name="input2"
                  ref={ref2}
                  placeholder="e.g. johndoe@email.com"
                  maxLength="55"
                  autoComplete="on"
                  required
                  onKeyDown={handleKeyDown}
                  onChange={handleInputChange}
                />
                <i className="form-field-icon"></i>
              </span>
            </div>
          </div>
          <div className="form-group col-1-2">
            <label htmlFor="phone">Phone Number</label>
            <div className="form-field">
              <p className="form-help">This field is required</p>
              <span className="form-field-container">
                <input
                  type="tel"
                  id="phone"
                  name="input3"
                  placeholder="e.g. +123456789"
                  required
                  ref={ref3}
                  onKeyDown={handleKeyDown}
                  onChange={handleInputChange}
                />
                <i className="form-field-icon"></i>
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PersonalInfo;

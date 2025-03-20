import React, { useState } from 'react';
import { FaArrowLeft, FaTimes, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Audience = () => {
  const navigate = useNavigate();
  const [targetGender, setTargetGender] = useState('');
  const [targetAgeGroups, setTargetAgeGroups] = useState([]);
  const [creatorCategories, setCreatorCategories] = useState(['Health & Fitness']);
  const [creatorGender, setCreatorGender] = useState('');
  const [creatorSize, setCreatorSize] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const steps = [
    { number: 1, label: 'Goals', active: false },
    { number: 2, label: 'Deliverable', active: false },
    { number: 3, label: 'Audience', active: true },
    { number: 4, label: 'Campaign Design', active: false },
    { number: 5, label: 'Summary', active: false },
  ];

  const ageGroups = [
    'Under 18', '18-24', '25-34', '35-44', '45-54', '55+'
  ];

  const creatorSizes = ['Nano', 'Micro', 'Mid', 'Macro'];

  const handleBack = () => {
    navigate('/deliverable');
  };

  const handleContinue = () => {
    navigate('/campaign-design');
  };

  const handleAgeGroupToggle = (age) => {
    if (targetAgeGroups.includes(age)) {
      setTargetAgeGroups(targetAgeGroups.filter(a => a !== age));
    } else {
      setTargetAgeGroups([...targetAgeGroups, age]);
    }
  };

  const removeCategory = (category) => {
    setCreatorCategories(creatorCategories.filter(c => c !== category));
  };

  const clearAllCategories = () => {
    setCreatorCategories([]);
  };

  return (
    <div className="deliverable-page">
      <div className="dashboard-header">
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft /> Back
        </button>
        <div className="stepper">
          {steps.map((step, index) => (
            <div key={step.number} className="step-container">
              <div className={`step ${step.active ? 'active' : ''}`}>
                <div className="step-number">{step.number}</div>
                <div className="step-label">{step.label}</div>
              </div>
              {index < steps.length - 1 && <div className="step-line" />}
            </div>
          ))}
        </div>
      </div>

      <div className="deliverable-form">
        <h1>Audience</h1>

        <section className="audience-section">
          <h2>Target audience gender</h2>
          <div className="gender-options">
            <button 
              className={`gender-button ${targetGender === 'male' ? 'selected' : ''}`}
              onClick={() => setTargetGender('male')}
            >
              <span className="gender-icon">♂</span> Male
            </button>
            <button 
              className={`gender-button ${targetGender === 'female' ? 'selected' : ''}`}
              onClick={() => setTargetGender('female')}
            >
              <span className="gender-icon">♀</span> Female
            </button>
            <button 
              className={`gender-button ${targetGender === 'mix' ? 'selected' : ''}`}
              onClick={() => setTargetGender('mix')}
            >
              Mix
            </button>
          </div>
        </section>

        <section className="age-section">
          <h2>Target audience age</h2>
          <div className="age-groups">
            {ageGroups.map(age => (
              <button
                key={age}
                className={`age-button ${targetAgeGroups.includes(age) ? 'selected' : ''}`}
                onClick={() => handleAgeGroupToggle(age)}
              >
                {age}
              </button>
            ))}
          </div>
        </section>

        <section className="category-section">
          <h2>Creator Category</h2>
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Beauty"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="category-search"
            />
          </div>
          <div className="selected-categories">
            {creatorCategories.map(category => (
              <div key={category} className="category-tag">
                {category}
                <button onClick={() => removeCategory(category)}>
                  <FaTimes />
                </button>
              </div>
            ))}
            {creatorCategories.length > 0 && (
              <button className="clear-all" onClick={clearAllCategories}>
                Clear All
              </button>
            )}
          </div>
        </section>

        <section className="creator-gender-section">
          <h2>Creator gender</h2>
          <div className="gender-options">
            <button 
              className={`gender-button ${creatorGender === 'male' ? 'selected' : ''}`}
              onClick={() => setCreatorGender('male')}
            >
              <span className="gender-icon">♂</span> Male
            </button>
            <button 
              className={`gender-button ${creatorGender === 'female' ? 'selected' : ''}`}
              onClick={() => setCreatorGender('female')}
            >
              <span className="gender-icon">♀</span> Female
            </button>
            <button 
              className={`gender-button ${creatorGender === 'mix' ? 'selected' : ''}`}
              onClick={() => setCreatorGender('mix')}
            >
              Mix
            </button>
          </div>
        </section>

        <section className="creator-size-section">
          <h2>Creator size</h2>
          <div className="size-options">
            {creatorSizes.map(size => (
              <button
                key={size}
                className={`size-button ${creatorSize === size.toLowerCase() ? 'selected' : ''}`}
                onClick={() => setCreatorSize(size.toLowerCase())}
              >
                {size}
              </button>
            ))}
          </div>
        </section>

        <div className="action-buttons">
          <button className="continue-button" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Audience;

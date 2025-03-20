import React, { useState } from 'react';
import GoalCard from '../components/GoalCard';

const Goals = () => {
  const [selectedGoal, setSelectedGoal] = useState('');

  const goals = [
    {
      title: 'Awareness',
      description: 'Show your Ads to the maximum number of people'
    },
    {
      title: 'Traffic',
      description: 'Send people to a destination: your website, app, event, or venue'
    }
  ];

  return (
    <div className="page-container">
      <h2>What are your Goals?</h2>
      <div className="goals-grid">
        {goals.map(goal => (
          <GoalCard
            key={goal.title}
            {...goal}
            selected={selectedGoal === goal.title}
            onClick={() => setSelectedGoal(goal.title)}
          />
        ))}
      </div>
      
      <div className="section-divider" />
      
      <h3>Who Should See your Ads?</h3>
      <div className="location-section">
        <label>Location</label>
        <div className="location-tags">
          <span className="tag">New York</span>
          <span className="tag">United Arab Emirates</span>
          <button className="clear-all">Clear All</button>
        </div>
      </div>
    </div>
  );
};

export default Goals;
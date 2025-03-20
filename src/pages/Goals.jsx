import React, { useState } from 'react';
import GoalCard from '../components/GoalCard';

const Goals = () => {
  const [selectedGoal, setSelectedGoal] = useState('');

  const goals = [
    { title: 'Awareness', description: 'Show your Ads to the maximum number of people' },
    { title: 'Traffic', description: 'Send people to a destination: your website, app, event, or venue' }
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
      
      {/* Rest of your Goals page content */}
    </div>
  );
};

export default Goals; 
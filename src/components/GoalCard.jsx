const GoalCard = ({ title, description, selected, onClick }) => (
    <div 
      className={`goal-card ${selected ? 'selected' : ''}`} 
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
  
  export default GoalCard;
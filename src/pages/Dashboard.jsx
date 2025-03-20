import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCampaign } from '../context/CampaignContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { campaignData, updateCampaignData } = useCampaign();

  const steps = [
    { number: 1, label: 'Goals', active: true },
    { number: 2, label: 'Deliverable', active: false },
    { number: 3, label: 'Audience', active: false },
    { number: 4, label: 'Campaign Design', active: false },
    { number: 5, label: 'Summary', active: false },
  ];

  const handleLocationRemove = (location) => {
    updateCampaignData({
      locations: campaignData.locations.filter(loc => loc !== location)
    });
  };

  const clearAllLocations = () => {
    updateCampaignData({
      locations: []
    });
  };

  const handleGoalSelect = (goal) => {
    updateCampaignData({
      goals: {
        ...campaignData.goals,
        selectedGoal: goal
      }
    });
  };

  const handleConversionSelect = (conversion) => {
    updateCampaignData({
      goals: {
        ...campaignData.goals,
        selectedConversion: conversion
      }
    });
  };

  const handleCreatorTypeSelect = (type) => {
    updateCampaignData({
      creator: {
        ...campaignData.creator,
        type
      }
    });
  };

  const handleContinue = () => {
    navigate('/deliverable');
  };

  return (
    <div className="deliverable-page">
      <div className="dashboard-header">
        <button className="back-button">
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
        <section className="goals-section">
          <h2>What are your Goals?</h2>
          <div className="cards-grid">
            <div 
              className={`goal-card ${campaignData.goals.selectedGoal === 'awareness' ? 'selected' : ''}`}
              onClick={() => handleGoalSelect('awareness')}
            >
              <div className="goal-icon awareness-icon"></div>
              <h3>Awareness</h3>
              <p>Show your Ads to the maximum number of people</p>
            </div>
            <div 
              className={`goal-card ${campaignData.goals.selectedGoal === 'traffic' ? 'selected' : ''}`}
              onClick={() => handleGoalSelect('traffic')}
            >
              <div className="goal-icon traffic-icon"></div>
              <h3>Traffic</h3>
              <p>Send people to a destination: your website, app, event, or venue</p>
            </div>
          </div>
        </section>

        <section className="conversion-section">
          <h2>Conversion</h2>
          <div className="cards-grid">
            <div 
              className={`goal-card ${campaignData.goals.selectedConversion === 'conversion' ? 'selected' : ''}`}
              onClick={() => handleConversionSelect('conversion')}
            >
              <div className="goal-icon conversion-icon"></div>
              <h3>Conversion</h3>
              <p>Drive valuable actions for the product or service you're promoting</p>
            </div>
            <div 
              className={`goal-card ${campaignData.goals.selectedConversion === 'content' ? 'selected' : ''}`}
              onClick={() => handleConversionSelect('content')}
            >
              <div className="goal-icon content-icon"></div>
              <h3>Content creation</h3>
              <p>Use creators to create content that promotes your product or service</p>
            </div>
          </div>
        </section>

        <section className="location-section">
          <h2>Who Should See your Ads?</h2>
          <div className="location-input-container">
            <label>
              <span>Location</span>
              <input type="text" placeholder="Input your Target Location" />
            </label>
            <div className="selected-locations">
              {campaignData.locations.map((location) => (
                <div key={location} className="location-tag">
                  {location}
                  <button onClick={() => handleLocationRemove(location)}>×</button>
                </div>
              ))}
              {campaignData.locations.length > 0 && (
                <button className="clear-all" onClick={clearAllLocations}>
                  Clear All
                </button>
              )}
            </div>
            <p className="location-disclaimer">
              The Actual Ads Delivery May Very Depending On the Supported locations of different Placement
              <a href="#learn-more">Learn More</a>
            </p>
          </div>
        </section>

        <section className="creator-section">
          <h2>What type of creator do you prefer?</h2>
          <div className="creator-options">
            <div 
              className={`creator-option ${campaignData.creator.type === 'Influencer' ? 'selected' : ''}`}
              onClick={() => handleCreatorTypeSelect('Influencer')}
            >
              <div className="creator-icon influencer-icon"></div>
              <span>Influencer</span>
            </div>
            <div 
              className={`creator-option ${campaignData.creator.type === 'UGC creator' ? 'selected' : ''}`}
              onClick={() => handleCreatorTypeSelect('UGC creator')}
            >
              <div className="creator-icon ugc-icon"></div>
              <span>UGC creator</span>
            </div>
          </div>
        </section>

        <div className="action-buttons">
          <button className="continue-button" onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
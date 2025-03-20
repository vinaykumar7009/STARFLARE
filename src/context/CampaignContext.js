import React, { createContext, useContext, useState } from 'react';

const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
  const [campaignData, setCampaignData] = useState({
    goals: {
      selectedGoal: '',
      selectedConversion: '',
    },
    locations: ['New york', 'United Arab Emirates'],
    creator: {
      type: 'UGC creator',
      gender: 'Mix',
      size: 'Nano',
    },
    campaign: {
      name: '',
      brief: '',
      promoting: '',
      category: '',
      attachedFile: '',
    },
    deliverables: {
      platforms: [],
      content: [],
    },
    schedule: {
      startDate: '',
      endDate: '',
    },
    design: {
      pageToTag: '',
      tags: [],
      productLink: '',
      productCategory: '',
      marketValue: {
        currency: 'AUD',
        amount: '',
      },
    },
  });

  const updateCampaignData = (newData) => {
    setCampaignData(prev => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <CampaignContext.Provider value={{ campaignData, updateCampaignData }}>
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaign = () => {
  const context = useContext(CampaignContext);
  if (!context) {
    throw new Error('useCampaign must be used within a CampaignProvider');
  }
  return context;
}; 
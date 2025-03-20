import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCampaign } from '../context/CampaignContext';

const Summary = () => {
  const navigate = useNavigate();
  const { campaignData } = useCampaign();

  const steps = [
    { number: 1, label: 'Goals', active: false },
    { number: 2, label: 'Deliverable', active: false },
    { number: 3, label: 'Audience', active: false },
    { number: 4, label: 'Campaign Design', active: false },
    { number: 5, label: 'Summary', active: true },
  ];

  const handleBack = () => {
    navigate('/campaign-design');
  };

  const handlePublish = () => {
    console.log('Publishing campaign...', campaignData);
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

      <div className="summary-content">
        <h1>Campaign Summary</h1>
        
        <section className="summary-section">
          <h2>Goals & Conversion</h2>
          <div className="summary-grid">
            <div className="summary-item">
              <label>Selected Goal</label>
              <p>{campaignData.goals.selectedGoal || 'Not selected'}</p>
            </div>
            <div className="summary-item">
              <label>Conversion Type</label>
              <p>{campaignData.goals.selectedConversion || 'Not selected'}</p>
            </div>
          </div>
        </section>

        <section className="summary-section">
          <h2>Target Locations</h2>
          <div className="summary-grid">
            <div className="summary-item">
              <label>Selected Locations</label>
              <div className="tag-list">
                {campaignData.locations.map((location, index) => (
                  <span key={index} className="tag">{location}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="summary-section">
          <h2>Creator Details</h2>
          <div className="summary-grid">
            <div className="summary-item">
              <label>Creator Type</label>
              <p>{campaignData.creator.type || 'Not selected'}</p>
            </div>
            <div className="summary-item">
              <label>Creator Gender</label>
              <p>{campaignData.creator.gender || 'Not selected'}</p>
            </div>
            <div className="summary-item">
              <label>Creator Size</label>
              <p>{campaignData.creator.size || 'Not selected'}</p>
            </div>
          </div>
        </section>

        <section className="summary-section">
          <h2>Campaign Details</h2>
          <div className="summary-grid">
            <div className="summary-item">
              <label>Campaign Name</label>
              <p>{campaignData.campaign?.name || 'Not specified'}</p>
            </div>
            <div className="summary-item">
              <label>Campaign Brief</label>
              <p>{campaignData.campaign?.brief || 'Not specified'}</p>
            </div>
            <div className="summary-item">
              <label>What are you Promoting?</label>
              <p>{campaignData.campaign?.promoting || 'Not specified'}</p>
            </div>
            <div className="summary-item">
              <label>Category</label>
              <p>{campaignData.campaign?.category || 'Not specified'}</p>
            </div>
            <div className="summary-item">
              <label>Attached File</label>
              <p>{campaignData.campaign?.attachedFile ? campaignData.campaign.attachedFile : 'No file attached'}</p>
            </div>
          </div>
        </section>

        <section className="summary-section">
          <h2>Platform & Deliverables</h2>
          <div className="platform-grid">
            <div className="platform-item">
              <h3>Selected Platforms</h3>
              <div className="platform-tags">
                {campaignData.deliverables.platforms.map((platform, index) => (
                  <span key={index} className="platform-tag">{platform}</span>
                ))}
              </div>
            </div>
            <div className="platform-item">
              <h3>Selected Deliverables</h3>
              <div className="platform-tags">
                {campaignData.deliverables.content.map((content, index) => (
                  <span key={index} className="platform-tag">{content}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="summary-section">
          <h2>Campaign Schedule</h2>
          <div className="schedule-grid">
            <div className="summary-item">
              <label>Start Date</label>
              <p>{campaignData.schedule.startDate || 'Mar 11, 2024'}</p>
            </div>
            <div className="summary-item">
              <label>End Date</label>
              <p>{campaignData.schedule.endDate || 'Jul 11, 2024'}</p>
            </div>
          </div>
        </section>

        <section className="summary-section">
          <h2>Campaign Design</h2>
          <div className="design-preview">
            <div className="summary-item">
              <label>Page to tag</label>
              <p>{campaignData.design?.pageToTag || 'Not specified'}</p>
            </div>
            <div className="summary-item">
              <label>Tags</label>
              <div className="tag-list">
                {campaignData.design?.tags?.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                )) || <span>No tags added</span>}
              </div>
            </div>
            <div className="summary-item">
              <label>Product Link</label>
              <p className="link">{campaignData.design?.productLink || 'Not specified'}</p>
            </div>
            <div className="summary-item">
              <label>Product Category</label>
              <p>{campaignData.design?.productCategory || 'Not specified'}</p>
            </div>
            <div className="summary-item">
              <label>Product will be gifted</label>
              <p>{campaignData.design?.isGifted || 'Not specified'}</p>
            </div>
            <div className="summary-item">
              <label>Market Value</label>
              <p>{campaignData.design?.marketValue?.currency} {campaignData.design?.marketValue?.amount || 'Not specified'}</p>
            </div>
            <div className="summary-item">
              <label>Shipment Available</label>
              <p>{campaignData.design?.isShipmentAvailable ? 'Yes' : 'No'}</p>
            </div>
            {campaignData.design?.coverImage && (
              <div className="summary-item">
                <label>Cover Image</label>
                <div className="image-preview">
                  <img src={campaignData.design.coverImage.preview} alt="Cover" />
                </div>
              </div>
            )}
            {campaignData.design?.productImages?.length > 0 && (
              <div className="summary-item">
                <label>Product Images</label>
                <div className="images-grid">
                  {campaignData.design.productImages.map((image, index) => (
                    <div key={index} className="image-preview">
                      <img src={image.preview} alt={`Product ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <div className="action-buttons">
          <button className="secondary-button" onClick={() => navigate('/')}>Do Later</button>
          <button className="primary-button" onClick={handlePublish}>Publish Now</button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
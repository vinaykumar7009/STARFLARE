import React, { useState } from 'react';
import { FaCloudUploadAlt, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Deliverable = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    campaignName: '',
    campaignBrief: '',
    promoting: '',
    category: '',
    platforms: {
      instagram: false,
      tiktok: false,
      youtube: false,
      snapchat: false
    },
    deliverables: {
      instaPost: false,
      instaReels: false,
      snapStories: false,
      youtubeShort: false,
      youtubeVideo: false,
      tiktokVideo: false,
      instaStories: false
    },
    startDate: '',
    endDate: ''
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const steps = [
    { number: 1, label: 'Goals', active: false },
    { number: 2, label: 'Deliverable', active: true },
    { number: 3, label: 'Audience', active: false },
    { number: 4, label: 'Campaign Design', active: false },
    { number: 5, label: 'Summary', active: false },
  ];

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlatformChange = (platform) => {
    setFormData(prev => ({
      ...prev,
      platforms: {
        ...prev.platforms,
        [platform]: !prev.platforms[platform]
      }
    }));
  };

  const handleDeliverableChange = (deliverable) => {
    setFormData(prev => ({
      ...prev,
      deliverables: {
        ...prev.deliverables,
        [deliverable]: !prev.deliverables[deliverable]
      }
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleContinue = () => {
    navigate('/audience');
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
        <div className="form-section">
          <div className="form-group">
            <label>Campaign Name</label>
            <input
              type="text"
              name="campaignName"
              placeholder="Campaign name"
              value={formData.campaignName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Campaign Brief</label>
            <textarea
              name="campaignBrief"
              placeholder="Tell us more about your campaign!"
              value={formData.campaignBrief}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group file-upload">
            <label>Attach Content file</label>
            <div className="upload-container">
              <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                className="hidden-input"
              />
              <label htmlFor="file-upload" className="upload-button">
                <FaCloudUploadAlt className="upload-icon" />
                <span>{selectedFile ? selectedFile.name : 'Browse'}</span>
              </label>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label>What are you Promoting?</label>
            <select
              name="promoting"
              value={formData.promoting}
              onChange={handleInputChange}
            >
              <option value="">Select category</option>
              <option value="product">Product</option>
              <option value="service">Service</option>
              <option value="event">Event</option>
            </select>
          </div>

          <div className="form-group">
            <label>Category <span className="subtitle">(max 3 category)</span></label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">Select category</option>
              <option value="fashion">Fashion</option>
              <option value="beauty">Beauty</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="tech">Technology</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label>Platform</label>
            <div className="checkbox-grid">
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.platforms.instagram}
                  onChange={() => handlePlatformChange('instagram')}
                />
                <span>Instagram</span>
              </label>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.platforms.tiktok}
                  onChange={() => handlePlatformChange('tiktok')}
                />
                <span>tiktok</span>
              </label>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.platforms.youtube}
                  onChange={() => handlePlatformChange('youtube')}
                />
                <span>youtube</span>
              </label>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.platforms.snapchat}
                  onChange={() => handlePlatformChange('snapchat')}
                />
                <span>Snapchat</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Deliverables</label>
            <div className="checkbox-grid">
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.deliverables.instaPost}
                  onChange={() => handleDeliverableChange('instaPost')}
                />
                <span>Insta Post</span>
              </label>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.deliverables.instaReels}
                  onChange={() => handleDeliverableChange('instaReels')}
                />
                <span>Insta Reels</span>
              </label>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.deliverables.snapStories}
                  onChange={() => handleDeliverableChange('snapStories')}
                />
                <span>Snap Stories</span>
              </label>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.deliverables.youtubeShort}
                  onChange={() => handleDeliverableChange('youtubeShort')}
                />
                <span>Youtube Short</span>
              </label>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.deliverables.youtubeVideo}
                  onChange={() => handleDeliverableChange('youtubeVideo')}
                />
                <span>Youtube Video</span>
              </label>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.deliverables.tiktokVideo}
                  onChange={() => handleDeliverableChange('tiktokVideo')}
                />
                <span>tik tok Video</span>
              </label>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.deliverables.instaStories}
                  onChange={() => handleDeliverableChange('instaStories')}
                />
                <span>Insta Stories</span>
              </label>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Campaign Schedule</h2>
          <div className="date-inputs">
            <div className="form-group">
              <label>Start Date:</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>End Date:</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button className="continue-button" onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Deliverable;
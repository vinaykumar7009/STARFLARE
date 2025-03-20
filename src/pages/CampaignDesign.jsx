import React from 'react';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCampaign } from '../context/CampaignContext';

const CampaignDesign = () => {
  const navigate = useNavigate();
  const { campaignData, updateCampaignData } = useCampaign();

  const steps = [
    { number: 1, label: 'Goals', active: false },
    { number: 2, label: 'Deliverable', active: false },
    { number: 3, label: 'Audience', active: false },
    { number: 4, label: 'Campaign Design', active: true },
    { number: 5, label: 'Summary', active: false },
  ];

  const handleBack = () => {
    navigate('/audience');
  };

  const handleContinue = () => {
    navigate('/summary');
  };

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && e.target.value && campaignData.design.tags.length < 5) {
      updateCampaignData({
        design: {
          ...campaignData.design,
          tags: [...campaignData.design.tags, e.target.value]
        }
      });
      e.target.value = '';
    }
  };

  const removeTag = (tagToRemove) => {
    updateCampaignData({
      design: {
        ...campaignData.design,
        tags: campaignData.design.tags.filter(tag => tag !== tagToRemove)
      }
    });
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (type === 'cover') {
          updateCampaignData({
            design: {
              ...campaignData.design,
              coverImage: { name: file.name, size: file.size, preview: reader.result }
            }
          });
        } else {
          updateCampaignData({
            design: {
              ...campaignData.design,
              productImages: [...(campaignData.design.productImages || []), { name: file.name, size: file.size, preview: reader.result }]
            }
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (type, index) => {
    if (type === 'cover') {
      updateCampaignData({
        design: {
          ...campaignData.design,
          coverImage: null
        }
      });
    } else {
      updateCampaignData({
        design: {
          ...campaignData.design,
          productImages: campaignData.design.productImages.filter((_, i) => i !== index)
        }
      });
    }
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
        <h1>Campaign Design</h1>

        <section className="form-section">
          <div className="form-group">
            <label>Page to tag</label>
            <input
              type="text"
              placeholder="paste your social link or brand link here"
              value={campaignData.design.pageToTag}
              onChange={(e) => updateCampaignData({
                design: {
                  ...campaignData.design,
                  pageToTag: e.target.value
                }
              })}
            />
          </div>

          <div className="form-group">
            <label># tags (Max 5)</label>
            <input
              type="text"
              placeholder="write your tag"
              onKeyPress={handleAddTag}
            />
            <div className="tags-container">
              {campaignData.design.tags.map((tag, index) => (
                <div key={index} className="tag">
                  {tag}
                  <button onClick={() => removeTag(tag)}><FaTimes /></button>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Product Link</label>
            <input
              type="text"
              placeholder="paste your product link"
              value={campaignData.design.productLink}
              onChange={(e) => updateCampaignData({
                design: {
                  ...campaignData.design,
                  productLink: e.target.value
                }
              })}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Product Category</label>
              <select 
                value={campaignData.design.productCategory} 
                onChange={(e) => updateCampaignData({
                  design: {
                    ...campaignData.design,
                    productCategory: e.target.value
                  }
                })}
              >
                <option value="">Select category</option>
                <option value="clothing">Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="beauty">Beauty</option>
                <option value="food">Food & Beverage</option>
              </select>
            </div>

            <div className="form-group">
              <label>The product will be gifted to the creator</label>
              <select
                value={campaignData.design.isGifted}
                onChange={(e) => updateCampaignData({
                  design: {
                    ...campaignData.design,
                    isGifted: e.target.value
                  }
                })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Product/Services Market Value</label>
              <div className="currency-input">
                <select 
                  value={campaignData.design.marketValue.currency}
                  onChange={(e) => updateCampaignData({
                    design: {
                      ...campaignData.design,
                      marketValue: {
                        ...campaignData.design.marketValue,
                        currency: e.target.value
                      }
                    }
                  })}
                >
                  <option value="AUD">AUD</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
                <input
                  type="number"
                  value={campaignData.design.marketValue.amount}
                  onChange={(e) => updateCampaignData({
                    design: {
                      ...campaignData.design,
                      marketValue: {
                        ...campaignData.design.marketValue,
                        amount: e.target.value
                      }
                    }
                  })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Product Shipment for this Campaign</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    checked={campaignData.design.isShipmentAvailable}
                    onChange={() => updateCampaignData({
                      design: {
                        ...campaignData.design,
                        isShipmentAvailable: true
                      }
                    })}
                  />
                  Available
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    checked={!campaignData.design.isShipmentAvailable}
                    onChange={() => updateCampaignData({
                      design: {
                        ...campaignData.design,
                        isShipmentAvailable: false
                      }
                    })}
                  />
                  Not Available
                </label>
              </div>
            </div>
          </div>
        </section>

        <section className="design-section">
          <h2>Design</h2>
          <p className="subtitle">add pictures about your product or service and what you want to promote</p>

          <div className="upload-section">
            <div className="upload-group">
              <label>Cover Image <span className="size-limit">400X200 px</span></label>
              <div className="upload-area">
                {!campaignData.design.coverImage ? (
                  <>
                    <div className="upload-placeholder">
                      <span>Drop your image here, or</span>
                      <label className="browse-button">
                        browse
                        <input
                          type="file"
                          hidden
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, 'cover')}
                        />
                      </label>
                    </div>
                  </>
                ) : (
                  <div className="uploaded-image">
                    <img src={campaignData.design.coverImage.preview} alt="Cover" />
                    <div className="image-info">
                      <span>{campaignData.design.coverImage.name}</span>
                      <span>{Math.round(campaignData.design.coverImage.size / 1024)}KB</span>
                      <button onClick={() => removeImage('cover')}><FaTimes /></button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="upload-group">
              <label>Product (Add upto 5 Image) <span className="size-limit">400X200 px</span></label>
              <div className="upload-area">
                {(!campaignData.design.productImages || campaignData.design.productImages.length < 5) && (
                  <div className="upload-placeholder">
                    <span>Drop your image here, or</span>
                    <label className="browse-button">
                      browse
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, 'product')}
                      />
                    </label>
                  </div>
                )}
                <div className="uploaded-images-grid">
                  {campaignData.design.productImages && campaignData.design.productImages.map((image, index) => (
                    <div key={index} className="uploaded-image">
                      <img src={image.preview} alt={`Product ${index + 1}`} />
                      <div className="image-info">
                        <span>{image.name}</span>
                        <span>{Math.round(image.size / 1024)}KB</span>
                        <button onClick={() => removeImage('product', index)}><FaTimes /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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

export default CampaignDesign;
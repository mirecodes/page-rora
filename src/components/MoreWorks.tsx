import React, { useState } from 'react';
import { FaFlask, FaChevronDown, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

export const MoreWorks: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="more-works-container">
      <button 
        className="more-works-btn" 
        onClick={() => setIsOpen(!isOpen)} 
        title="View More Works from Our Lab"
      >
        <span className="icon"><FaFlask /></span>
        More Works
        <span className="icon dropdown-arrow" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}><FaChevronDown /></span>
      </button>

      {isOpen && (
        <div className="more-works-dropdown" id="moreWorksDropdown" style={{ display: 'block' }}>
          <div className="dropdown-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h4>More Works from Our Lab</h4>
            <button className="close-btn" onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <FaTimes />
            </button>
          </div>
          <div className="works-list">
            <a href="https://arxiv.org/abs/PAPER_ID_1" className="work-item" target="_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', textDecoration: 'none', color: 'inherit' }}>
              <div className="work-info">
                <h5 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Paper Title 1</h5>
                <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9em', color: '#555' }}>Brief description of the work and its main contribution.</p>
                <span className="work-venue" style={{ fontSize: '0.8em', color: '#888' }}>Conference/Journal 2024</span>
              </div>
              <FaExternalLinkAlt style={{ color: '#aaa' }} />
            </a>
            
            <a href="https://arxiv.org/abs/PAPER_ID_2" className="work-item" target="_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', textDecoration: 'none', color: 'inherit' }}>
              <div className="work-info">
                <h5 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Paper Title 2</h5>
                <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9em', color: '#555' }}>Brief description of the work and its main contribution.</p>
                <span className="work-venue" style={{ fontSize: '0.8em', color: '#888' }}>Conference/Journal 2023</span>
              </div>
              <FaExternalLinkAlt style={{ color: '#aaa' }} />
            </a>

            <a href="https://arxiv.org/abs/PAPER_ID_3" className="work-item" target="_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', textDecoration: 'none', color: 'inherit' }}>
              <div className="work-info">
                <h5 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Paper Title 3</h5>
                <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9em', color: '#555' }}>Brief description of the work and its main contribution.</p>
                <span className="work-venue" style={{ fontSize: '0.8em', color: '#888' }}>Conference/Journal 2023</span>
              </div>
              <FaExternalLinkAlt style={{ color: '#aaa' }} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

export const BibTeX: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const bibtexCode = `@article{rora2026anonymous,
  title={RORA: Realistic Object Reconstruction with Articulation},
  author={Anonymous Authors},
  journal={Under Review},
  year={2026}
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtexCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="section" id="BibTeX">
      <div className="container is-max-desktop content">
        <div className="bibtex-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="title">BibTeX</h2>
          <button 
            className="copy-bibtex-btn button is-small" 
            onClick={handleCopy} 
            title="Copy BibTeX to clipboard"
          >
            <span className="icon">
              <FaCopy />
            </span>
            <span className="copy-text">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
        <pre id="bibtex-code" style={{ marginTop: '1rem' }}>
          <code>{bibtexCode}</code>
        </pre>
      </div>
    </section>
  );
};

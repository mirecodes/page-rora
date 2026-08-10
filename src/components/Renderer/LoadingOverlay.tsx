import { useState, useEffect } from 'react';
import type { SplatLoadState } from './types';
import './LoadingOverlay.css';

interface LoadingOverlayProps {
  loadStates: SplatLoadState[];
}

export function LoadingOverlay({ loadStates }: LoadingOverlayProps) {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const allLoaded = loadStates.length > 0 && loadStates.every((s) => s.status === 'loaded');
  const hasError = loadStates.some((s) => s.status === 'error');
  
  // Calculate target progress
  const targetProgress = loadStates.length > 0 
    ? Math.round(loadStates.reduce((acc, s) => acc + s.progress, 0) / loadStates.length) 
    : 0;

  // Smoothly interpolate displayProgress towards targetProgress
  useEffect(() => {
    if (displayProgress < targetProgress) {
      const step = Math.max(1, (targetProgress - displayProgress) * 0.1);
      const timer = requestAnimationFrame(() => {
        setDisplayProgress(prev => Math.min(prev + step, targetProgress));
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [displayProgress, targetProgress]);

  // Handle unmounting with a slight delay after reaching 100%
  useEffect(() => {
    if (allLoaded && displayProgress >= 99.9) {
      const timeout = setTimeout(() => setIsVisible(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [allLoaded, displayProgress]);

  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (displayProgress / 100) * circumference;

  if (!isVisible) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-panel">
        <div className="loading-progress-container">
          <svg width="80" height="80" viewBox="0 0 64 64" className="progress-ring">
            <circle
              className="progress-ring-bg"
              cx="32"
              cy="32"
              r={radius}
              strokeWidth="3"
            />
            <circle
              className="progress-ring-fill"
              cx="32"
              cy="32"
              r={radius}
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          </svg>
          <div className="progress-value">{Math.round(displayProgress)}%</div>
        </div>

        <h3 className="loading-title">Loading Gaussian Splats</h3>

        {hasError && (
          <p className="loading-error-hint">
            Some files failed to load. Check browser console and ensure PLY files are in{' '}
            <code>public/data/&lt;scene&gt;/gaussian/</code>.
          </p>
        )}

        <div className="loading-items">
          {loadStates.map((state) => (
            <div key={state.gaussianId} className="loading-item">
              <div className="loading-item-header">
                <span className="loading-item-label">{state.label}</span>
                <span className={`loading-item-status status-${state.status}`}>
                  {state.status === 'loading' && `${state.progress}%`}
                  {state.status === 'loaded' && '✓'}
                  {state.status === 'error' && '✗'}
                  {state.status === 'idle' && '—'}
                </span>
              </div>
              <div className="loading-bar-track">
                <div
                  className={`loading-bar-fill fill-${state.status}`}
                  style={{ width: `${state.progress}%` }}
                />
              </div>
              {state.errorMsg && (
                <p className="loading-error-msg">{state.errorMsg}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export const BlogSection = ({ articles, personaId, personaTitle }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="blog-section-container" id="articles-section">
      <div className="blog-header-row">
        <div>
          <span className="section-pill">RESEARCH & TECHNICAL PAPERS</span>
          <h3 className="blog-main-title">
            Engineering Deep-Dives: <span className="highlight-text">{personaTitle}</span>
          </h3>
          <p className="blog-main-desc">
            Technical breakdowns, benchmark analyses, and production post-mortems written from hands-on implementation.
          </p>
        </div>
      </div>

      <div className={`blog-articles-grid layout-${personaId}`}>
        {articles.map((art, idx) => (
          <article 
            key={idx} 
            className="article-card"
            onClick={() => setSelectedArticle(art)}
          >
            <div className="article-top-meta">
              <span className="article-date">{art.date}</span>
              <span className="article-read-time">{art.readTime}</span>
            </div>

            <h4 className="article-title">{art.title}</h4>
            <p className="article-summary">{art.summary}</p>

            <div className="article-tags-row">
              {art.tags.map((t, i) => (
                <span key={i} className="article-tag">{t}</span>
              ))}
            </div>

            <div className="article-bottom-row">
              <span className="article-metrics-badge">⚡ {art.metrics}</span>
              <span className="article-read-more">Read Breakdown →</span>
            </div>
          </article>
        ))}
      </div>

      {/* Deep-dive Article Modal */}
      {selectedArticle && (
        <div className="modal-backdrop" onClick={() => setSelectedArticle(null)}>
          <div className="article-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="modal-eyebrow">{selectedArticle.date} • {selectedArticle.readTime}</span>
                <h3 className="modal-title">{selectedArticle.title}</h3>
              </div>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setSelectedArticle(null)}
              >
                ✕
              </button>
            </div>

            <div className="article-modal-body">
              <div className="article-modal-metric-banner">
                <span className="banner-icon">🎯</span>
                <div>
                  <strong>Key System Metric:</strong> {selectedArticle.metrics}
                </div>
              </div>

              <h4>Abstract & Executive Summary</h4>
              <p>{selectedArticle.summary}</p>

              <h4>Engineering Architecture & Implementation</h4>
              <p>
                This technical document outlines the design decisions, trade-offs, and profiling results gathered while deploying this subsystem in production. By decoupling heavy computational steps from low-latency event loops and enforcing strict schema validation, the architecture ensures deterministic execution.
              </p>

              <div className="article-modal-tags">
                <strong>Keywords & Stack:</strong>
                <div className="tags-flex">
                  {selectedArticle.tags.map((t, i) => (
                    <span key={i} className="article-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-action-row">
                <button 
                  type="button" 
                  className="btn-pill primary"
                  onClick={() => setSelectedArticle(null)}
                >
                  Close Article View
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSection;

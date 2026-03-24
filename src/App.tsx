import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { knowledgeData, statistics, KnowledgeItem } from './data/knowledge_base';

// SVG Icons
const Icons = {
  Book: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
  ),
  Layout: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
  ),
  Files: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
  ),
  Image: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
  ),
  ArrowRight: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  ),
  Sparkles: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M3 5h4"/></svg>
  ),
  X: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  ),
  User: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  )
};

const Modal = ({ item, onClose }: { item: KnowledgeItem; onClose: () => void }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <button className="close-btn" onClick={onClose}><Icons.X /></button>
          <div className="badge">{item.category}</div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.title}</h2>
          <p style={{ color: 'var(--text-secondary)' }}>{item.summary}</p>
        </div>
        <div className="modal-body">
          <ul className="item-list">
            {item.items?.map((it, idx) => (
              <li key={idx} className="item-row" style={{ animationDelay: `${idx * 0.1}s` }}>
                {it.title && <h4>{it.title}</h4>}
                {it.description && <p>{it.description}</p>}
                {it.detail && <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{it.detail}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Card = ({ item, onClick }: { item: KnowledgeItem; onClick: () => void }) => (
  <div className="knowledge-card">
    <div className="card-meta">
      <span className="category-tag">{item.category}</span>
      <span className="type-tag">{item.contentType}</span>
    </div>
    <h3>{item.title}</h3>
    <p>{item.summary}</p>
    <div className="card-footer">
      <div className="author">
        <Icons.User />
        {item.author || "Internal"}
      </div>
      <button className="btn-secondary explore-link" style={{border: 'none', padding: 0, background: 'transparent'}} onClick={onClick}>
        Explore <Icons.ArrowRight />
      </button>
    </div>
  </div>
);

function Dashboard() {
  return (
    <div className="page dashboard">
      <header className="hero">
        <div className="hero-content">
          <span className="badge">AntiRagivity v2.0</span>
          <h1>Master Your <span className="text-gradient">Career & Company</span></h1>
          <p>Explore an immersive, structured knowledge base built from 830+ curated resources covering Leadership, HR, AI, and Cultural Transformation.</p>
          <div className="btn-group">
            <Link to="/library" className="btn btn-primary"><Icons.Sparkles /> Start Exploring</Link>
            <a href="https://github.com" className="btn btn-secondary">Documentation</a>
          </div>
        </div>
      </header>

      <div className="section-header">
        <h2>Intelligence at a Glance</h2>
        <p>A comprehensive repository representing global trends and corporate methodologies.</p>
      </div>

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><Icons.Files /></div>
          <div className="stat-content">
            <h3>{statistics.totalFiles}+</h3>
            <p>Total Files Processed</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Icons.Layout /></div>
          <div className="stat-content">
            <h3>{statistics.coreCategories.length}</h3>
            <p>Core Categories</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Icons.Image /></div>
          <div className="stat-content">
            <h3>{statistics.visualFiles}</h3>
            <p>Visual Frameworks</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Library() {
  const [selectedItem, setSelectedItem] = useState<KnowledgeItem | null>(null);

  return (
    <div className="page library">
      <div className="section-header">
        <h2>Curated Library</h2>
        <p>Immerse yourself into dynamic case studies, templates, and actionable frameworks.</p>
      </div>

      <div className="cards-grid">
        {knowledgeData.map(item => (
          <Card key={item.id} item={item} onClick={() => setSelectedItem(item)} />
        ))}
      </div>

      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}

function App() {
  const NavigationLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
      <Link to={to} className={isActive ? "active" : ""}>
        {icon}
        {label}
      </Link>
    );
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="sidebar">
          <div className="logo">
            <Icons.Sparkles /> AR Hub
          </div>
          <ul className="nav-links">
            <li><NavigationLink to="/" icon={<Icons.Layout />} label="Dashboard" /></li>
            <li><NavigationLink to="/library" icon={<Icons.Book />} label="Library" /></li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

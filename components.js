// Reusable Components
export function createHeader(config) {
  return `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <img src="android-chrome-192x192.png" alt="${config.title} Logo" class="logo-img">
            <h1 class="logo-text">${config.title}</h1>
          </div>
          <nav class="nav">
            <ul class="nav-list">
              <li><a href="#home" class="nav-link">Home</a></li>
              <li><a href="#videos" class="nav-link">Videos</a></li>
              <li><a href="#verification" class="nav-link">Verification</a></li>
              <li><a href="#download" class="nav-link">Download</a></li>
              <li><a href="#how-to-use" class="nav-link">How to Use</a></li>
              <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
          </nav>
          <button class="mobile-menu-btn" aria-label="Toggle mobile menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

export function createHeroSection(config) {
  const featuresHTML = config.hero.features.map(feature => `
    <div class="hero-feature">
      <span class="hero-feature-icon">${feature.icon}</span>
      <div class="hero-feature-content">
        <strong>${feature.title}</strong> – ${feature.description}
      </div>
    </div>
  `).join('');

  return `
    <section id="home" class="hero">
      <div class="hero-background"></div>
      <div class="container">
        <div class="hero-content">
          <h2 class="hero-title">
            ${config.hero.title} 
            <span class="highlight">${config.hero.highlights[0]}</span> & 
            <span class="highlight">${config.hero.highlights[1]}</span>
          </h2>
          <p class="hero-subtitle">${config.hero.subtitle}</p>
          <p class="hero-description">${config.hero.description}</p>
          
          <div class="hero-features">
            ${featuresHTML}
          </div>
          
          <p class="hero-closing">With IBU, customers discover reliable services faster, and businesses gain the exposure they deserve.</p>
          
          <div class="hero-buttons">
            <a href="#download" class="btn btn-primary">Download App</a>
            <a href="#videos" class="btn btn-secondary">Watch Videos</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function createYouTubeSection(config) {
  const videosHTML = config.youtube.videos.map(video => `
    <div class="video-card">
      <div class="video-thumbnail">
        <iframe 
          src="https://www.youtube.com/embed/${video.id}" 
          title="${video.title}"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      <div class="video-info">
        <h4 class="video-title">${video.title}</h4>
        <p class="video-description">${video.description}</p>
      </div>
    </div>
  `).join('');

  return `
    <section id="videos" class="section videos-section">
      <div class="container">
        <h2 class="section-title">${config.youtube.title}</h2>
        <p class="section-subtitle">${config.youtube.subtitle}</p>
        <div class="videos-grid">
          ${videosHTML}
        </div>
      </div>
    </section>
  `;
}

export function createVerificationSection(config) {
  const tiersHTML = config.verificationTiers.map(tier => `
    <div class="verification-card">
      <div class="verification-badge">
        <img src="${tier.badge}" alt="${tier.name} Badge" class="badge-img">
      </div>
      <h4 class="verification-title">${tier.name}</h4>
      <p class="verification-price">${tier.price}</p>
      <p class="verification-description">${tier.description}</p>
      <ul class="verification-features">
        ${tier.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  return `
    <section id="verification" class="section verification-section">
      <div class="container">
        <h2 class="section-title">🌟 Verification Tiers</h2>
        <p class="section-subtitle">Build trust with your customers through our comprehensive verification system. Higher verification levels mean better visibility and increased customer confidence.</p>
        <div class="verification-grid">
          ${tiersHTML}
        </div>
      </div>
    </section>
  `;
}

export function createDownloadSection(config) {
  const stepsHTML = config.download.installationSteps.map((step, index) => 
    `<li>${step}</li>`
  ).join('');

  return `
    <section id="download" class="section download-section">
      <div class="container">
        <h2 class="section-title">${config.download.title}</h2>
        <p class="section-subtitle">${config.download.subtitle}</p>
        
        <div class="download-buttons">
          <a href="${config.download.apkFile}" class="btn btn-download" download>
            ⬇️ Download APP
          </a>
          <a href="${config.contact.website}" class="btn btn-website" target="_blank" rel="noopener noreferrer">
            📱 Visit Website
          </a>
        </div>
        
        <div class="installation-guide">
          <h4>📋 Installation Instructions for Android:</h4>
          <ol class="installation-steps">
            ${stepsHTML}
          </ol>
          <p class="installation-note">It's completely free to use.</p>
        </div>
      </div>
    </section>
  `;
}

export function createUsageSection(config) {
  const usageHTML = config.usageGuide.map(guide => {
    let content = `
      <div class="usage-card">
        <h4 class="usage-title">${guide.title}</h4>
        <p class="usage-description">${guide.description}</p>
    `;
    
    if (guide.example) {
      content += `<p class="usage-example"><strong>Example:</strong> ${guide.example}</p>`;
    }
    
    if (guide.steps) {
      content += `
        <div class="usage-steps">
          <p><strong>Steps:</strong></p>
          <ol>
            ${guide.steps.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>
      `;
    }
    
    if (guide.note) {
      content += `<p class="usage-note"><strong>Note:</strong> ${guide.note}</p>`;
    }
    
    content += `</div>`;
    return content;
  }).join('');

  return `
    <section id="how-to-use" class="section usage-section">
      <div class="container">
        <h2 class="section-title">🧠 How to Use the App</h2>
        <div class="usage-grid">
          ${usageHTML}
        </div>
      </div>
    </section>
  `;
}

export function createContactSection(config) {
  return `
    <section id="contact" class="section contact-section">
      <div class="container">
        <h2 class="section-title">📬 Contact & Support</h2>
        <p class="section-subtitle">Have questions or need support? We're here to help! Reach out to us through any of the following channels:</p>
        <div class="contact-buttons">
          <a href="mailto:${config.contact.email}" class="btn btn-contact">
            📧 Email Us
          </a>
          <a href="https://wa.me/${config.contact.whatsapp}" class="btn btn-contact" target="_blank">
            📱 WhatsApp
          </a>
        </div>
      </div>
    </section>
  `;
}

export function createFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 IBU Business Directory. All rights reserved. | Domus Dei Tech.</p>
      </div>
    </footer>
  `;
}
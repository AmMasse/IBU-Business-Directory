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
              <li><a href="#legal" class="nav-link">Legal</a></li>
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
        <div class="footer-content">
          <p>&copy; 2025 IBU Business Directory. All rights reserved. | Domus Dei Tech.</p>
          <div class="footer-links">
            <a href="#privacy" class="footer-link">Privacy Policy</a>
            <a href="#terms" class="footer-link">Terms of Service</a>
            <a href="#data" class="footer-link">Data Handling</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function createLegalSection(config) {
  return `
    <section id="legal" class="section legal-section">
      <div class="container">
        <h2 class="section-title">Legal Information</h2>
        <div class="legal-grid">
          <div class="legal-card" id="privacy">
            <h3 class="legal-title">🔒 Privacy Policy</h3>
            <div class="legal-content">
              <p><strong>Last updated:</strong> January 2025</p>
              
              <h4>Information We Collect</h4>
              <ul>
                <li><strong>Business Information:</strong> Company name, contact details, services offered, and business descriptions</li>
                <li><strong>User Data:</strong> Email addresses for verification, phone numbers for enhanced verification</li>
                <li><strong>Usage Data:</strong> App usage patterns, search queries, and interaction data to improve our services</li>
              </ul>
              
              <h4>How We Use Your Information</h4>
              <ul>
                <li>To provide and maintain our business directory services</li>
                <li>To verify business authenticity and maintain platform integrity</li>
                <li>To improve our AI assistant Mr. IBU's recommendations</li>
                <li>To communicate important updates and notifications</li>
              </ul>
              
              <h4>Data Protection</h4>
              <p>We implement industry-standard security measures to protect your personal information. Your data is encrypted in transit and at rest. We never sell your personal information to third parties.</p>
              
              <h4>Your Rights</h4>
              <p>You have the right to access, update, or delete your personal information. Contact us at <a href="mailto:${config.contact.email}">${config.contact.email}</a> for any privacy-related requests.</p>
            </div>
          </div>
          
          <div class="legal-card" id="terms">
            <h3 class="legal-title">📋 Terms of Service</h3>
            <div class="legal-content">
              <p><strong>Last updated:</strong> January 2025</p>
              
              <h4>Acceptance of Terms</h4>
              <p>By using IBU Business Directory, you agree to these terms of service. If you disagree with any part of these terms, you may not use our service.</p>
              
              <h4>Service Description</h4>
              <p>IBU Business Directory is an AI-powered platform that connects customers with local businesses and professionals. We provide a directory service with verification tiers to ensure quality and trustworthiness.</p>
              
              <h4>User Responsibilities</h4>
              <ul>
                <li>Provide accurate and truthful business information</li>
                <li>Maintain up-to-date contact details and service descriptions</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect other users and maintain professional conduct</li>
              </ul>
              
              <h4>Verification Process</h4>
              <p>Our verification system includes multiple tiers. Higher verification levels require additional documentation and may involve fees. Verification status can be revoked if terms are violated.</p>
              
              <h4>Prohibited Activities</h4>
              <ul>
                <li>Submitting false or misleading business information</li>
                <li>Attempting to manipulate search rankings unfairly</li>
                <li>Using the platform for illegal activities</li>
                <li>Harassing other users or businesses</li>
              </ul>
              
              <h4>Limitation of Liability</h4>
              <p>IBU Business Directory serves as a platform connecting businesses and customers. We are not responsible for the quality of services provided by listed businesses or for any disputes between users.</p>
            </div>
          </div>
          
          <div class="legal-card" id="data">
            <h3 class="legal-title">🛡️ Data Handling Compliance</h3>
            <div class="legal-content">
              <p><strong>Last updated:</strong> January 2025</p>
              
              <h4>GDPR Compliance</h4>
              <p>We are committed to protecting the privacy rights of EU residents under the General Data Protection Regulation (GDPR).</p>
              <ul>
                <li><strong>Lawful Basis:</strong> We process data based on legitimate interests and user consent</li>
                <li><strong>Data Minimization:</strong> We only collect data necessary for our services</li>
                <li><strong>Right to Erasure:</strong> Users can request deletion of their personal data</li>
                <li><strong>Data Portability:</strong> Users can request their data in a portable format</li>
              </ul>
              
              <h4>Data Storage and Security</h4>
              <ul>
                <li><strong>Encryption:</strong> All data is encrypted using industry-standard protocols</li>
                <li><strong>Access Control:</strong> Strict access controls limit who can view personal data</li>
                <li><strong>Regular Audits:</strong> We conduct regular security audits and assessments</li>
                <li><strong>Data Retention:</strong> Personal data is retained only as long as necessary</li>
              </ul>
              
              <h4>Third-Party Services</h4>
              <p>We may use trusted third-party services for:</p>
              <ul>
                <li>Email delivery and communication</li>
                <li>Analytics and performance monitoring</li>
                <li>Payment processing for verification services</li>
                <li>Cloud storage and hosting</li>
              </ul>
              
              <h4>Data Breach Protocol</h4>
              <p>In the unlikely event of a data breach, we will:</p>
              <ul>
                <li>Notify affected users within 72 hours</li>
                <li>Report to relevant authorities as required by law</li>
                <li>Take immediate steps to secure the breach</li>
                <li>Provide regular updates on remediation efforts</li>
              </ul>
              
              <h4>Contact for Data Matters</h4>
              <p>For any data-related questions or requests, contact our Data Protection Officer at:</p>
              <p><strong>Email:</strong> <a href="mailto:${config.contact.email}">${config.contact.email}</a></p>
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/${config.contact.whatsapp}">+${config.contact.whatsapp}</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
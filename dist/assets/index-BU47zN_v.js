(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const n={title:"IBU Business Directory",tagline:"AI-Powered Local Business Platform",description:"Connect with local professionals and businesses through our AI assistant Mr. IBU. Increase your business exposure today!",contact:{email:"ibudirectory@gmail.com",whatsapp:"256749472414",website:"https://local-genius-guide.vercel.app/"},hero:{title:"Connect with Local",highlights:["Professionals","Businesses"],subtitle:"IBU Business Directory is an AI-powered platform that increases exposure for small businesses, technicians, handworkers, and local professionals.",description:"The platform is designed to connect people with trusted local services — where local talent meets local needs.",features:[{icon:"📢",title:"Promoting what you do",description:"Businesses fill in their details and services, and promote exactly how they want to be seen."},{icon:"🔍",title:"Finding what you need",description:"Customers are provided with the most accurate and up-to-date information on their needs."}]},youtube:{title:"Watch How IBU Works",subtitle:"Learn more about our platform through these helpful videos",videos:[{id:"dQw4w9WgXcQ",title:"Getting Started with IBU",description:"Learn how to set up your business profile and get verified"},{id:"dQw4w9WgXcQ",title:"Customer Guide",description:"How to find and connect with local businesses using Mr. IBU"},{id:"dQw4w9WgXcQ",title:"Verification Process",description:"Understanding our verification tiers and how to get verified"}]},verificationTiers:[{name:"Email Verified",badge:"blue.png",price:"Automatic & Free",description:"Receive your blue verification badge instantly upon signing up and verifying your email address.",features:["Basic profile visibility","Email verification badge","Access to basic features"]},{name:"Phone Verified",badge:"green.png",price:"Once-per-year paid verification",description:"Get your green verification badge by providing legal documentation via phone or email.",features:["All email verified benefits","Phone verification badge","Higher search ranking","Enhanced credibility"]},{name:"Location Verified",badge:"black.png",price:"Once-per-year paid verification",description:"Receive your black verification badge through in-person verification of your business location and legal documents.",features:["All previous benefits","Location verification badge","Premium search placement","Maximum customer trust"]},{name:"Premium Verified",badge:"gold.png",price:"Subscription-based",description:"Get your gold verification badge with all benefits plus guaranteed promotion in searches and business activity confirmation.",features:["All verification benefits","Premium gold badge","Top search priority","Active business confirmation","Featured listings"]}],usageGuide:[{title:"👤 As a Guest User",description:"You can use Mr. IBU as a guest and simply ask our AI assistant what you're looking for. No registration required to search for businesses and professionals in your area.",example:'"I need a plumber in Kitooro" or "Show me pizza restaurants in Kasese."'},{title:"🏢 As a Business Owner",description:'Sign up for a free account and add up to 3 businesses to the directory. Once signed in, go to "My Business Dashboard" to manage your listings.',steps:["Create your account",'Access "My Business Dashboard"',"Fill in your business details","Submit for verification"]},{title:"✅ Verification Process",description:'After submitting your business details, go to the "About Us" section in the app to communicate with our team. Every business has different verification standards based on the industry and services offered.',note:"Our team will guide you through the specific requirements for your business type."}],download:{title:"Download Mr. IBU App",subtitle:"Get started today with our AI-powered business directory app. Available for Android devices.",apkFile:"Mr. IBU.apk",installationSteps:["Go to Settings → Security",'Enable "Install from unknown sources"',"Open the downloaded APK file","Follow the installation prompts","Accept the required permissions"]}};function p(i){return`
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <img src="android-chrome-192x192.png" alt="${i.title} Logo" class="logo-img">
            <h1 class="logo-text">${i.title}</h1>
          </div>
          <nav class="nav">
            <ul class="nav-list">
              <li><a href="#home" class="nav-link">Home</a></li>
              <li><a href="#videos" class="nav-link">Tutorials</a></li>
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
  `}function h(i){const e=i.hero.features.map(t=>`
    <div class="hero-feature">
      <span class="hero-feature-icon">${t.icon}</span>
      <div class="hero-feature-content">
        <strong>${t.title}</strong> – ${t.description}
      </div>
    </div>
  `).join("");return`
    <section id="home" class="hero">
      <div class="hero-background"></div>
      <div class="container">
        <div class="hero-content">
          <h2 class="hero-title">
            ${i.hero.title} 
            <span class="highlight">${i.hero.highlights[0]}</span> & 
            <span class="highlight">${i.hero.highlights[1]}</span>
          </h2>
          <p class="hero-subtitle">${i.hero.subtitle}</p>
          <p class="hero-description">${i.hero.description}</p>
          
          <div class="hero-features">
            ${e}
          </div>
          
          <p class="hero-closing">With IBU, customers discover reliable services faster, and businesses gain the exposure they deserve.</p>
          
          <div class="hero-buttons">
            <a href="#download" class="btn btn-primary">Download App</a>
            <a href="#videos" class="btn btn-secondary">Watch Videos</a>
          </div>
        </div>
      </div>
    </section>
  `}function f(i){const e=i.youtube.videos.map(t=>`
    <div class="video-card">
      <div class="video-thumbnail">
        <iframe 
          src="https://www.youtube.com/embed/${t.id}" 
          title="${t.title}"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      <div class="video-info">
        <h4 class="video-title">${t.title}</h4>
        <p class="video-description">${t.description}</p>
      </div>
    </div>
  `).join("");return`
    <section id="videos" class="section videos-section">
      <div class="container">
        <h2 class="section-title">${i.youtube.title}</h2>
        <p class="section-subtitle">${i.youtube.subtitle}</p>
        <div class="videos-grid">
          ${e}
        </div>
      </div>
    </section>
  `}function v(i){return`
    <section id="verification" class="section verification-section">
      <div class="container">
        <h2 class="section-title">🌟 Verification Tiers</h2>
        <p class="section-subtitle">Build trust with your customers through our comprehensive verification system. Higher verification levels mean better visibility and increased customer confidence.</p>
        <div class="verification-grid">
          ${i.verificationTiers.map(t=>`
    <div class="verification-card">
      <div class="verification-badge">
        <img src="${t.badge}" alt="${t.name} Badge" class="badge-img">
      </div>
      <h4 class="verification-title">${t.name}</h4>
      <p class="verification-price">${t.price}</p>
      <p class="verification-description">${t.description}</p>
      <ul class="verification-features">
        ${t.features.map(a=>`<li>${a}</li>`).join("")}
      </ul>
    </div>
  `).join("")}
        </div>
      </div>
    </section>
  `}function m(i){const e=i.download.installationSteps.map((t,a)=>`<li>${t}</li>`).join("");return`
    <section id="download" class="section download-section">
      <div class="container">
        <h2 class="section-title">${i.download.title}</h2>
        <p class="section-subtitle">${i.download.subtitle}</p>
        
        <div class="download-buttons">
          <a href="${i.download.apkFile}" class="btn btn-download" download>
            ⬇️ Download APP
          </a>
          <a href="${i.contact.website}" class="btn btn-website" target="_blank" rel="noopener noreferrer">
            📱 Visit Website
          </a>
        </div>
        
        <div class="installation-guide">
          <h4>📋 Installation Instructions for Android:</h4>
          <ol class="installation-steps">
            ${e}
          </ol>
          <p class="installation-note">It's completely free to use.</p>
        </div>
      </div>
    </section>
  `}function g(i){return`
    <section id="how-to-use" class="section usage-section">
      <div class="container">
        <h2 class="section-title">🧠 How to Use the App</h2>
        <div class="usage-grid">
          ${i.usageGuide.map(t=>{let a=`
      <div class="usage-card">
        <h4 class="usage-title">${t.title}</h4>
        <p class="usage-description">${t.description}</p>
    `;return t.example&&(a+=`<p class="usage-example"><strong>Example:</strong> ${t.example}</p>`),t.steps&&(a+=`
        <div class="usage-steps">
          <p><strong>Steps:</strong></p>
          <ol>
            ${t.steps.map(s=>`<li>${s}</li>`).join("")}
          </ol>
        </div>
      `),t.note&&(a+=`<p class="usage-note"><strong>Note:</strong> ${t.note}</p>`),a+="</div>",a}).join("")}
        </div>
      </div>
    </section>
  `}function b(i){return`
    <section id="contact" class="section contact-section">
      <div class="container">
        <h2 class="section-title">📬 Contact & Support</h2>
        <p class="section-subtitle">Have questions or need support? We're here to help! Reach out to us through any of the following channels:</p>
        <div class="contact-buttons">
          <a href="mailto:${i.contact.email}" class="btn btn-contact">
            📧 Email Us
          </a>
          <a href="https://wa.me/${i.contact.whatsapp}" class="btn btn-contact" target="_blank">
            📱 WhatsApp
          </a>
        </div>
      </div>
    </section>
  `}function y(){return`
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
  `}function w(i){return`
    <section id="legal" class="section legal-section">
      <div class="container">
        <h2 class="section-title">Legal Information</h2>
        <div class="legal-grid">
          <div class="legal-card" id="privacy">
            <h3 class="legal-title">🔒 Privacy Policy</h3>
            <div class="legal-content">
              <p><strong>Last updated:</strong> July 2025</p>
              
              <h4>Information We Collect</h4>
              <ul>
                <li><strong>Business Information:</strong> Company name, contact details, services offered, and business descriptions</li>
                <li><strong>User Data:</strong> Email addresses, website, phone numbers and location for enhanced verification</li>
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
              <p>You have the right to access, update, or delete your personal information. Contact us at <a href="mailto:${i.contact.email}">${i.contact.email}</a> for any privacy-related requests.</p>
            </div>
          </div>
          
          <div class="legal-card" id="terms">
            <h3 class="legal-title">📋 Terms of Service</h3>
            <div class="legal-content">
              <p><strong>Last updated:</strong> July 2025</p>
              
              <h4>Acceptance of Terms</h4>
              <p>By using IBU Business Directory, you agree to these terms of service. If you disagree with any part of these terms, you may not use our service.</p>
              <p>By submitting your business and personal information (such as business name and phone number), you agree that your data may be publicly displayed to anyone seeking your services.</p>
              
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
              <p><strong>Last updated:</strong> July 2025</p>
              
              <h4>GDPR Compliance</h4>
              <p>We are committed to protecting personal data in compliance with Uganda’s Data Protection and Privacy Act, 2019 and other applicable privacy laws.</p>

              <ul>
                <li><strong>Lawful Basis:</strong> We process data based on legitimate interests and user consent</li>
                <li><strong>Data Minimization:</strong> We only collect data necessary for our services</li>
                <li><strong>Right to Erasure:</strong> Users can delete their personal data</li>
                
              </ul>
              
              <h4>Data Storage and Security</h4>
              <ul>
                <li><strong>Encryption:</strong> All data is encrypted using industry-standard protocols</li>
                <li><strong>Access Control:</strong> Strict access controls limit who can edit personal data</li>
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
                <li>Notify affected users as soon as possible</li>
                <li>Report to relevant authorities as required by law</li>
                <li>Take immediate steps to secure the breach</li>
                <li>Provide regular updates on remediation efforts</li>
              </ul>
              
              <h4>Contact for Data Matters</h4>
              <p>For any data-related questions or requests, contact our Data Protection Officer at:</p>
              <p><strong>Email:</strong> <a href="mailto:${i.contact.email}">${i.contact.email}</a></p>
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/${i.contact.whatsapp}">+${i.contact.whatsapp}</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}class ${constructor(){this.init()}init(){this.renderPage(),this.setupEventListeners(),this.setupScrollEffects(),this.setupMobileMenu()}renderPage(){const e=document.getElementById("app");e&&(e.innerHTML=`
      ${p(n)}
      <main>
        ${h(n)}
        ${f(n)}
        ${v(n)}
        ${m(n)}
        ${g(n)}
        ${b(n)}
        ${w(n)}
      </main>
      ${y()}
    `)}setupEventListeners(){document.addEventListener("click",e=>{if(e.target.matches('a[href^="#"]')){e.preventDefault();const t=e.target.getAttribute("href"),a=document.querySelector(t);if(a){const s=document.querySelector(".header").offsetHeight,o=a.offsetTop-s-20;window.scrollTo({top:o,behavior:"smooth"})}}}),document.addEventListener("mouseover",e=>{e.target.matches(".btn")&&(e.target.style.transform="translateY(-2px) scale(1.02)")}),document.addEventListener("mouseout",e=>{e.target.matches(".btn")&&(e.target.style.transform="")})}setupScrollEffects(){const e=document.querySelectorAll(".nav-link"),t=Array.from(e).map(r=>{const l=r.getAttribute("href");return document.querySelector(l)}).filter(Boolean),a=()=>{const r=window.scrollY+150;let l=null;t.forEach(c=>{c.offsetTop<=r&&c.offsetTop+c.offsetHeight>r&&(l=c)}),e.forEach(c=>{c.classList.remove("active"),l&&c.getAttribute("href")===`#${l.id}`&&c.classList.add("active")})},s={threshold:.1,rootMargin:"0px 0px -50px 0px"},o=new IntersectionObserver(r=>{r.forEach(l=>{l.isIntersecting&&(l.target.style.opacity="1",l.target.style.transform="translateY(0)")})},s);document.querySelectorAll(".section, .verification-card, .usage-card, .video-card").forEach(r=>{r.style.opacity="0",r.style.transform="translateY(30px)",r.style.transition="opacity 0.6s ease, transform 0.6s ease",o.observe(r)});let d=!1;const u=()=>{d||(requestAnimationFrame(()=>{a(),this.updateHeaderBackground(),d=!1}),d=!0)};window.addEventListener("scroll",u,{passive:!0}),a()}updateHeaderBackground(){const e=document.querySelector(".header");window.scrollY>50?(e.style.background="rgba(26, 54, 93, 0.95)",e.style.backdropFilter="blur(20px)"):(e.style.background="",e.style.backdropFilter="")}setupMobileMenu(){const e=document.querySelector(".mobile-menu-btn"),t=document.querySelector(".nav");e&&t&&(e.addEventListener("click",()=>{t.classList.toggle("active"),e.classList.toggle("active")}),t.addEventListener("click",a=>{a.target.matches(".nav-link")&&(t.classList.remove("active"),e.classList.remove("active"))}))}updateConfig(e){Object.assign(n,e),this.renderPage(),this.setupEventListeners(),this.setupScrollEffects(),this.setupMobileMenu()}addYouTubeVideo(e){n.youtube.videos.push(e),this.renderPage(),this.setupEventListeners(),this.setupScrollEffects(),this.setupMobileMenu()}updateYouTubeVideo(e,t){n.youtube.videos[e]&&(n.youtube.videos[e]={...n.youtube.videos[e],...t},this.renderPage(),this.setupEventListeners(),this.setupScrollEffects(),this.setupMobileMenu())}}document.addEventListener("DOMContentLoaded",()=>{window.ibuWebsite=new $});

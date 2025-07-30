(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const n={title:"IBU Business Directory",tagline:"AI-Powered Local Business Platform",description:"Connect with local professionals and businesses through our AI assistant Mr. IBU. Increase your business exposure today!",contact:{email:"ibudirectory@gmail.com",whatsapp:"256749472414",website:"https://local-genius-guide.vercel.app/"},hero:{title:"Connect with Local",highlights:["Professionals","Businesses"],subtitle:"IBU Business Directory is an AI-powered platform that increases exposure for small businesses, technicians, handworkers, and local professionals.",description:"The platform is designed to connect people with trusted local services — where local talent meets local needs.",features:[{icon:"📢",title:"Promoting what you do",description:"Businesses fill in their details and services, and promote exactly how they want to be seen."},{icon:"🔍",title:"Finding what you need",description:"Customers are provided with the most accurate and up-to-date information on their needs."}]},youtube:{title:"Watch How IBU Works",subtitle:"Learn more about our platform through these helpful videos",videos:[{id:"dQw4w9WgXcQ",title:"Getting Started with IBU",description:"Learn how to set up your business profile and get verified"},{id:"dQw4w9WgXcQ",title:"Customer Guide",description:"How to find and connect with local businesses using Mr. IBU"},{id:"dQw4w9WgXcQ",title:"Verification Process",description:"Understanding our verification tiers and how to get verified"}]},verificationTiers:[{name:"Email Verified",badge:"blue.png",price:"Automatic & Free",description:"Receive your blue verification badge instantly upon signing up and verifying your email address.",features:["Basic profile visibility","Email verification badge","Access to basic features"]},{name:"Phone Verified",badge:"green.png",price:"Once-per-year paid verification",description:"Get your green verification badge by providing legal documentation via phone or email.",features:["All email verified benefits","Phone verification badge","Higher search ranking","Enhanced credibility"]},{name:"Location Verified",badge:"black.png",price:"Once-per-year paid verification",description:"Receive your black verification badge through in-person verification of your business location and legal documents.",features:["All previous benefits","Location verification badge","Premium search placement","Maximum customer trust"]},{name:"Premium Verified",badge:"gold.png",price:"Subscription-based",description:"Get your gold verification badge with all benefits plus guaranteed promotion in searches and business activity confirmation.",features:["All verification benefits","Premium gold badge","Top search priority","Active business confirmation","Featured listings"]}],usageGuide:[{title:"👤 As a Guest User",description:"You can use Mr. IBU as a guest and simply ask our AI assistant what you're looking for. No registration required to search for businesses and professionals in your area.",example:'"I need a plumber in Kitooro" or "Show me pizza restaurants in Kasese."'},{title:"🏢 As a Business Owner",description:'Sign up for a free account and add up to 3 businesses to the directory. Once signed in, go to "My Business Dashboard" to manage your listings.',steps:["Create your account",'Access "My Business Dashboard"',"Fill in your business details","Submit for verification"]},{title:"✅ Verification Process",description:'After submitting your business details, go to the "About Us" section in the app to communicate with our team. Every business has different verification standards based on the industry and services offered.',note:"Our team will guide you through the specific requirements for your business type."}],download:{title:"Download Mr. IBU App",subtitle:"Get started today with our AI-powered business directory app. Available for Android devices.",apkFile:"Mr. IBU.apk",installationSteps:["Go to Settings → Security",'Enable "Install from unknown sources"',"Open the downloaded APK file","Follow the installation prompts","Accept the required permissions"]}};function p(s){return`
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <img src="android-chrome-192x192.png" alt="${s.title} Logo" class="logo-img">
            <h1 class="logo-text">${s.title}</h1>
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
  `}function h(s){const e=s.hero.features.map(t=>`
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
            ${s.hero.title} 
            <span class="highlight">${s.hero.highlights[0]}</span> & 
            <span class="highlight">${s.hero.highlights[1]}</span>
          </h2>
          <p class="hero-subtitle">${s.hero.subtitle}</p>
          <p class="hero-description">${s.hero.description}</p>
          
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
  `}function f(s){const e=s.youtube.videos.map(t=>`
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
        <h2 class="section-title">${s.youtube.title}</h2>
        <p class="section-subtitle">${s.youtube.subtitle}</p>
        <div class="videos-grid">
          ${e}
        </div>
      </div>
    </section>
  `}function v(s){return`
    <section id="verification" class="section verification-section">
      <div class="container">
        <h2 class="section-title">🌟 Verification Tiers</h2>
        <p class="section-subtitle">Build trust with your customers through our comprehensive verification system. Higher verification levels mean better visibility and increased customer confidence.</p>
        <div class="verification-grid">
          ${s.verificationTiers.map(t=>`
    <div class="verification-card">
      <div class="verification-badge">
        <img src="${t.badge}" alt="${t.name} Badge" class="badge-img">
      </div>
      <h4 class="verification-title">${t.name}</h4>
      <p class="verification-price">${t.price}</p>
      <p class="verification-description">${t.description}</p>
      <ul class="verification-features">
        ${t.features.map(o=>`<li>${o}</li>`).join("")}
      </ul>
    </div>
  `).join("")}
        </div>
      </div>
    </section>
  `}function m(s){const e=s.download.installationSteps.map((t,o)=>`<li>${t}</li>`).join("");return`
    <section id="download" class="section download-section">
      <div class="container">
        <h2 class="section-title">${s.download.title}</h2>
        <p class="section-subtitle">${s.download.subtitle}</p>
        
        <div class="download-buttons">
          <a href="${s.download.apkFile}" class="btn btn-download" download>
            ⬇️ Download APP
          </a>
          <a href="${s.contact.website}" class="btn btn-website" target="_blank" rel="noopener noreferrer">
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
  `}function g(s){return`
    <section id="how-to-use" class="section usage-section">
      <div class="container">
        <h2 class="section-title">🧠 How to Use the App</h2>
        <div class="usage-grid">
          ${s.usageGuide.map(t=>{let o=`
      <div class="usage-card">
        <h4 class="usage-title">${t.title}</h4>
        <p class="usage-description">${t.description}</p>
    `;return t.example&&(o+=`<p class="usage-example"><strong>Example:</strong> ${t.example}</p>`),t.steps&&(o+=`
        <div class="usage-steps">
          <p><strong>Steps:</strong></p>
          <ol>
            ${t.steps.map(i=>`<li>${i}</li>`).join("")}
          </ol>
        </div>
      `),t.note&&(o+=`<p class="usage-note"><strong>Note:</strong> ${t.note}</p>`),o+="</div>",o}).join("")}
        </div>
      </div>
    </section>
  `}function b(s){return`
    <section id="contact" class="section contact-section">
      <div class="container">
        <h2 class="section-title">📬 Contact & Support</h2>
        <p class="section-subtitle">Have questions or need support? We're here to help! Reach out to us through any of the following channels:</p>
        <div class="contact-buttons">
          <a href="mailto:${s.contact.email}" class="btn btn-contact">
            📧 Email Us
          </a>
          <a href="https://wa.me/${s.contact.whatsapp}" class="btn btn-contact" target="_blank">
            📱 WhatsApp
          </a>
        </div>
      </div>
    </section>
  `}function y(){return`
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 IBU Business Directory. All rights reserved. | Domus Dei Tech.</p>
      </div>
    </footer>
  `}class w{constructor(){this.init()}init(){this.renderPage(),this.setupEventListeners(),this.setupScrollEffects(),this.setupMobileMenu()}renderPage(){const e=document.getElementById("app");e&&(e.innerHTML=`
      ${p(n)}
      <main>
        ${h(n)}
        ${f(n)}
        ${v(n)}
        ${m(n)}
        ${g(n)}
        ${b(n)}
      </main>
      ${y()}
    `)}setupEventListeners(){document.addEventListener("click",e=>{if(e.target.matches('a[href^="#"]')){e.preventDefault();const t=e.target.getAttribute("href"),o=document.querySelector(t);if(o){const i=document.querySelector(".header").offsetHeight,a=o.offsetTop-i-20;window.scrollTo({top:a,behavior:"smooth"})}}}),document.addEventListener("mouseover",e=>{e.target.matches(".btn")&&(e.target.style.transform="translateY(-2px) scale(1.02)")}),document.addEventListener("mouseout",e=>{e.target.matches(".btn")&&(e.target.style.transform="")})}setupScrollEffects(){const e=document.querySelectorAll(".nav-link"),t=Array.from(e).map(r=>{const c=r.getAttribute("href");return document.querySelector(c)}).filter(Boolean),o=()=>{const r=window.scrollY+150;let c=null;t.forEach(l=>{l.offsetTop<=r&&l.offsetTop+l.offsetHeight>r&&(c=l)}),e.forEach(l=>{l.classList.remove("active"),c&&l.getAttribute("href")===`#${c.id}`&&l.classList.add("active")})},i={threshold:.1,rootMargin:"0px 0px -50px 0px"},a=new IntersectionObserver(r=>{r.forEach(c=>{c.isIntersecting&&(c.target.style.opacity="1",c.target.style.transform="translateY(0)")})},i);document.querySelectorAll(".section, .verification-card, .usage-card, .video-card").forEach(r=>{r.style.opacity="0",r.style.transform="translateY(30px)",r.style.transition="opacity 0.6s ease, transform 0.6s ease",a.observe(r)});let d=!1;const u=()=>{d||(requestAnimationFrame(()=>{o(),this.updateHeaderBackground(),d=!1}),d=!0)};window.addEventListener("scroll",u,{passive:!0}),o()}updateHeaderBackground(){const e=document.querySelector(".header");window.scrollY>50?(e.style.background="rgba(26, 54, 93, 0.95)",e.style.backdropFilter="blur(20px)"):(e.style.background="",e.style.backdropFilter="")}setupMobileMenu(){const e=document.querySelector(".mobile-menu-btn"),t=document.querySelector(".nav");e&&t&&(e.addEventListener("click",()=>{t.classList.toggle("active"),e.classList.toggle("active")}),t.addEventListener("click",o=>{o.target.matches(".nav-link")&&(t.classList.remove("active"),e.classList.remove("active"))}))}updateConfig(e){Object.assign(n,e),this.renderPage(),this.setupEventListeners(),this.setupScrollEffects(),this.setupMobileMenu()}addYouTubeVideo(e){n.youtube.videos.push(e),this.renderPage(),this.setupEventListeners(),this.setupScrollEffects(),this.setupMobileMenu()}updateYouTubeVideo(e,t){n.youtube.videos[e]&&(n.youtube.videos[e]={...n.youtube.videos[e],...t},this.renderPage(),this.setupEventListeners(),this.setupScrollEffects(),this.setupMobileMenu())}}document.addEventListener("DOMContentLoaded",()=>{window.ibuWebsite=new w});

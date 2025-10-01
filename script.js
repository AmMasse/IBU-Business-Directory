// Main JavaScript functionality
import { siteConfig } from './config.js';
import { 
  createHeader, 
  createHeroSection, 
  createYouTubeSection,
  createVerificationSection, 
  createDownloadSection, 
  createUsageSection, 
  createContactSection, 
  createFooter,
  createLegalSection
} from './components.js';

class IBUWebsite {
  constructor() {
    this.init();
  }

  init() {
    this.renderPage();
    this.setupEventListeners();
    this.setupScrollEffects();
    this.setupMobileMenu();
  }

  renderPage() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
      ${createHeader(siteConfig)}
      <main>
        ${createHeroSection(siteConfig)}
        ${createYouTubeSection(siteConfig)}
        ${createVerificationSection(siteConfig)}
        ${createDownloadSection(siteConfig)}
        ${createUsageSection(siteConfig)}
        ${createContactSection(siteConfig)}
      </main>
      ${createFooter()}
    `;
  }

  setupEventListeners() {
    // Smooth scrolling for navigation links
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });

    // Button hover effects
    document.addEventListener('mouseover', (e) => {
      if (e.target.matches('.btn')) {
        e.target.style.transform = 'translateY(-2px) scale(1.02)';
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.matches('.btn')) {
        e.target.style.transform = '';
      }
    });
  }

  setupScrollEffects() {
    // Active navigation highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = Array.from(navLinks).map(link => {
      const href = link.getAttribute('href');
      return document.querySelector(href);
    }).filter(Boolean);

    // Cache section positions to avoid recalculating on every scroll
    let sectionPositions = [];
    const cacheSectionPositions = () => {
      sectionPositions = sections.map(section => ({
        element: section,
        top: section.offsetTop,
        bottom: section.offsetTop + section.offsetHeight
      }));
    };
    cacheSectionPositions();

    const updateActiveNav = () => {
      const scrollPos = window.scrollY + 150;

      let activeSection = null;
      for (const section of sectionPositions) {
        if (section.top <= scrollPos && section.bottom > scrollPos) {
          activeSection = section.element;
          break;
        }
      }

      navLinks.forEach(link => {
        const isActive = activeSection && link.getAttribute('href') === `#${activeSection.id}`;
        link.classList.toggle('active', isActive);
      });
    };

    // Intersection Observer for animations - only animate once
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('.section, .verification-card, .usage-card, .video-card').forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });

    // Throttled scroll handler
    let ticking = false;
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking && Math.abs(currentScrollY - lastScrollY) > 5) {
        window.requestAnimationFrame(() => {
          updateActiveNav();
          this.updateHeaderBackground();
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', cacheSectionPositions, { passive: true });
    updateActiveNav();
  }

  updateHeaderBackground() {
    const header = document.querySelector('.header');
    const scrolled = window.scrollY > 50;

    if (scrolled) {
      header.style.background = 'rgba(255, 255, 255, 0.35)';
      header.style.backdropFilter = 'blur(35px) saturate(180%)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.25)';
      header.style.backdropFilter = 'blur(30px) saturate(180%)';
    }
  }

  setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
      mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
      });

      // Close mobile menu when clicking on a link
      nav.addEventListener('click', (e) => {
        if (e.target.matches('.nav-link')) {
          nav.classList.remove('active');
          mobileMenuBtn.classList.remove('active');
        }
      });
    }
  }

  // Method to update configuration dynamically
  updateConfig(newConfig) {
    Object.assign(siteConfig, newConfig);
    this.renderPage();
    this.setupEventListeners();
    this.setupScrollEffects();
    this.setupMobileMenu();
  }

  // Method to add new YouTube video
  addYouTubeVideo(video) {
    siteConfig.youtube.videos.push(video);
    this.renderPage();
    this.setupEventListeners();
    this.setupScrollEffects();
    this.setupMobileMenu();
  }

  // Method to update YouTube video
  updateYouTubeVideo(index, video) {
    if (siteConfig.youtube.videos[index]) {
      siteConfig.youtube.videos[index] = { ...siteConfig.youtube.videos[index], ...video };
      this.renderPage();
      this.setupEventListeners();
      this.setupScrollEffects();
      this.setupMobileMenu();
    }
  }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.ibuWebsite = new IBUWebsite();
});

// Export for potential external use
export default IBUWebsite;
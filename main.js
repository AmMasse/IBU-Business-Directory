// This file contains the main JavaScript logic for the business directory form
// It is loaded from index.html

// Initialize Supabase client
const supabaseUrl = 'https://qbcrtnbxrdpkxmlbdlkn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiY3J0bmJ4cmRwa3htbGJkbGtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNjA4NjUsImV4cCI6MjA2NTYzNjg2NX0.KbInVmeJ1AZzLXdKe4pGxKMsMX_54KgXcz5HiZOEtxg';
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

// Auth state management
let authUser = null;

// DOM elements
const authModal = document.getElementById('auth-modal');
const authEmailSection = document.getElementById('auth-email');
const authOtpSection = document.getElementById('auth-otp');
const authError = document.getElementById('auth-error');
const userInfo = document.getElementById('user-info');
const userEmail = document.getElementById('user-email');
const signOutButton = document.getElementById('sign-out-button');
const welcomePage = document.getElementById('welcome');
const startButton = document.getElementById('start-registration');
const consentCheckbox = document.getElementById('consent');

// Form steps management
let currentStep = 0;
const steps = document.querySelectorAll('.step');
const stepDots = document.querySelectorAll('.step-dot');
const progressFill = document.getElementById('progress-fill');
const progressContainer = document.getElementById('progress-container');
const stepIndicators = document.getElementById('step-indicators');
const businessForm = document.getElementById('business-form');

// Check auth state on page load
window.addEventListener('DOMContentLoaded', checkAuth);

// Auth functions
async function checkAuth() {
  try {
    const { data } = await supabaseClient.auth.getSession();
    if (data.session) {
      authUser = data.session.user;
      showUserInfo();
      startButton.disabled = !consentCheckbox.checked;
    } else {
      showAuthModal();
    }
  } catch (error) {
    showAuthModal();
  }
}

function showUserInfo() {
  userEmail.textContent = authUser.email;
  userInfo.style.display = 'flex';
}

function showAuthModal() {
  authModal.style.display = 'flex';
  startButton.disabled = true;
}

function hideAuthModal() {
  authModal.style.display = 'none';
}

function showError(message) {
  authError.textContent = message;
  authError.style.display = 'block';
  setTimeout(() => {
    authError.style.display = 'none';
  }, 5000);
}

// Email auth handler
const authEmailButton = document.getElementById('auth-email-button');
authEmailButton.addEventListener('click', async () => {
  const email = document.getElementById('auth-email-input').value.trim();
  if (!email) {
    showError('Please enter your email');
    return;
  }
  try {
    const { error } = await supabaseClient.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.href }
    });
    if (error) {
      showError(error.message);
    } else {
      authEmailSection.style.display = 'none';
      authOtpSection.style.display = 'block';
      document.getElementById('auth-otp-input').focus();
    }
  } catch (error) {
    showError('Failed to send email. Please try again.');
  }
});

// OTP verification handler
const authVerifyButton = document.getElementById('auth-verify-button');
authVerifyButton.addEventListener('click', async () => {
  const token = document.getElementById('auth-otp-input').value.trim();
  const email = document.getElementById('auth-email-input').value.trim();
  if (!token) {
    showError('Please enter the OTP code');
    return;
  }
  try {
    const { data, error } = await supabaseClient.auth.verifyOtp({
      email,
      token,
      type: 'email'
    });
    if (error) {
      showError(error.message);
    } else {
      authUser = data.user;
      hideAuthModal();
      showUserInfo();
      startButton.disabled = !consentCheckbox.checked;
    }
  } catch (error) {
    showError('OTP verification failed.');
  }
});

signOutButton.addEventListener('click', async () => {
  await supabaseClient.auth.signOut();
  window.location.reload();
});

// Consent checkbox enables start button
consentCheckbox.addEventListener('change', () => {
  startButton.disabled = !(consentCheckbox.checked && authUser);
});

// Start registration button
startButton.addEventListener('click', () => {
  if (!authUser) {
    showAuthModal();
    return;
  }
  welcomePage.classList.remove('active');
  showStep(0);
});

function showStep(step) {
  currentStep = step;
  steps.forEach((el, idx) => {
    el.classList.toggle('active', idx === step);
  });
  progressContainer.style.display = 'block';
  stepIndicators.style.display = 'flex';
  updateProgress();
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    showStep(currentStep + 1);
  }
}

function prevStep() {
  if (currentStep > 0) {
    showStep(currentStep - 1);
  }
}

function updateProgress() {
  const percent = ((currentStep + 1) / steps.length) * 100;
  progressFill.style.width = percent + '%';
  stepDots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentStep);
    dot.classList.toggle('completed', idx < currentStep);
  });
}

// Form submission
businessForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!authUser) {
    showAuthModal();
    return;
  }
  const formData = new FormData(businessForm);
  const data = {};
  formData.forEach((value, key) => {
    if (key === 'working_days') {
      if (!data[key]) data[key] = [];
      data[key].push(value);
    } else {
      data[key] = value;
    }
  });
  data['user_id'] = authUser.id;
  try {
    const { error } = await supabaseClient.from('businesses').insert([data]);
    if (error) {
      alert('Submission failed: ' + error.message);
    } else {
      alert('Business registered successfully!');
      businessForm.reset();
      window.location.reload();
    }
  } catch (err) {
    alert('Submission failed. Please try again.');
  }
});

// Allow navigation with Enter key
steps.forEach((step, idx) => {
  step.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      if (idx < steps.length - 1) nextStep();
    }
  });
});

// Allow clicking step dots to navigate
stepDots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    if (idx <= currentStep + 1) showStep(idx);
  });
});

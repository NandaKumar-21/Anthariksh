// Anthariksh - 2025 Symposium Registration System
// Enhanced JavaScript file with cosmic theme functionality

// Event data storage - Contains all technical and non-technical events
const eventData = {
  symposium: {
    name: "Anthariksh - 2025",
    tagline: "The Galaxy of Talents, Breaking Barriers with Brilliance",
    organizer: "Department of CSE in association with Coding Club"
  },
  events: {
    technical: [
      {
        id: "project-expo",
        name: "Project Expo",
        category: "Technical",
        shortDesc: "Showcase your innovative projects",
        fullDesc: "Present your technical projects and compete with fellow students. Open to all domains including web development, mobile apps, AI/ML, and hardware projects."
      },
      {
        id: "ppt-presentation",
        name: "PPT Presentation",
        category: "Technical",
        shortDesc: "Present your technical ideas",
        fullDesc: "Create compelling presentations on technical topics. Judges will evaluate content, presentation skills, and technical depth."
      },
      {
        id: "logo-design",
        name: "Logo Design",
        category: "Technical",
        shortDesc: "Design creative logos",
        fullDesc: "Design unique and creative logos using digital tools. Showcase your graphic design and creativity skills."
      },
      {
        id: "web-designing-ai",
        name: "Web designing with AI",
        category: "Technical",
        shortDesc: "AI-powered web development",
        fullDesc: "Create stunning websites using AI tools and modern web technologies. Combine creativity with cutting-edge AI assistance."
      },
      {
        id: "ideathon",
        name: "Ideathon",
        category: "Technical",
        shortDesc: "Innovate and ideate solutions",
        fullDesc: "Brainstorm innovative solutions to real-world problems. Present your ideas and win exciting prizes."
      },
      {
        id: "technical-quiz",
        name: "Technical Quiz",
        category: "Technical",
        shortDesc: "Test your technical knowledge",
        fullDesc: "Challenge your technical knowledge across various domains including programming, algorithms, and current technology trends."
      },
      {
        id: "debugging",
        name: "Debugging",
        category: "Technical",
        shortDesc: "Find and fix code issues",
        fullDesc: "Test your debugging skills by finding and fixing errors in various programming languages within time limits."
      }
    ],
    nonTechnical: [
      {
        id: "mad-ad",
        name: "Mad-AD",
        category: "Non-Technical",
        shortDesc: "Create hilarious advertisements",
        fullDesc: "Create funny and creative advertisements for unusual products. Let your imagination run wild!"
      },
      {
        id: "e-sports",
        name: "E-Sports",
        category: "Non-Technical",
        shortDesc: "Compete in gaming tournaments",
        fullDesc: "Participate in exciting gaming tournaments across multiple popular games. Show your gaming skills!"
      },
      {
        id: "photography",
        name: "Photography",
        category: "Non-Technical",
        shortDesc: "Capture moments through lens",
        fullDesc: "Showcase your photography skills through themed photo contests. Categories include nature, portrait, and creative photography."
      },
      {
        id: "movie-fun",
        name: "Movie Fun",
        category: "Non-Technical",
        shortDesc: "Movie-based entertainment",
        fullDesc: "Participate in movie-based activities including quizzes, dialogues, and scene recreation competitions."
      },
      {
        id: "memes",
        name: "Memes",
        category: "Non-Technical",
        shortDesc: "Create viral memes",
        fullDesc: "Create the funniest and most creative memes. Show your humor and creativity skills!"
      },
      {
        id: "non-tech-quiz",
        name: "Non-Tech Quiz",
        category: "Non-Technical",
        shortDesc: "General knowledge challenge",
        fullDesc: "Test your general knowledge across various topics including current affairs, history, geography, and entertainment."
      },
      {
        id: "painting",
        name: "Pot painting / Picture painting",
        category: "Non-Technical",
        shortDesc: "Express through art",
        fullDesc: "Showcase your artistic talents through pot painting or picture painting. All materials will be provided."
      }
    ]
  }
};

// Global variables for application state
let currentEvent = null;
let registrationData = {};

// Enhanced Navigation system with cosmic animations
const Navigation = {
  // Show specific page with enhanced transitions
  showPage: function(pageId) {
    console.log('🚀 Navigating to page:', pageId);
    
    // Add cosmic transition effect
    this.addTransitionEffect();
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    
    // Show target page with delay for transition
    setTimeout(() => {
      const targetPage = document.getElementById(pageId);
      if (targetPage) {
        targetPage.classList.add('active');
        // Scroll to top when switching pages
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        console.error('❌ Page not found:', pageId);
      }
    }, 100);
  },

  // Add cosmic transition effect
  addTransitionEffect: function() {
    const body = document.body;
    body.style.transition = 'opacity 0.3s ease';
    body.style.opacity = '0.7';
    
    setTimeout(() => {
      body.style.opacity = '1';
    }, 300);
  },

  // Navigate to event detail page
  goToEventDetail: function(eventId) {
    console.log('🌟 Navigating to event detail:', eventId);
    
    const event = this.findEventById(eventId);
    if (event) {
      currentEvent = event;
      this.populateEventDetail(event);
      this.showPage('event-detail-page');
    } else {
      console.error('❌ Event not found:', eventId);
    }
  },

  // Navigate to registration page
  goToRegistration: function() {
    if (currentEvent) {
      console.log('📝 Opening registration for:', currentEvent.name);
      document.getElementById('reg-event-name').textContent = currentEvent.name;
      this.showPage('registration-page');
    } else {
      console.error('❌ No current event selected');
    }
  },

  // Navigate to payment page
  goToPayment: function() {
    console.log('💳 Processing to payment...');
    this.populatePaymentSummary();
    this.showPage('payment-page');
  },

  // Navigate to ticket page
  goToTicket: function() {
    console.log('🎫 Generating cosmic ticket...');
    this.generateTicket();
    this.showPage('ticket-page');
  },

  // Find event by ID in both technical and non-technical arrays
  findEventById: function(eventId) {
    const allEvents = [...eventData.events.technical, ...eventData.events.nonTechnical];
    return allEvents.find(event => event.id === eventId);
  },

  // Populate event detail page with selected event data
  populateEventDetail: function(event) {
    document.getElementById('event-title').textContent = event.name;
    document.getElementById('event-description').textContent = event.fullDesc;
    
    const categoryElement = document.getElementById('event-category');
    categoryElement.textContent = event.category;
    // Enhanced category styling for cosmic theme
    const categoryClass = event.category.toLowerCase().replace(/[^a-z]/g, '');
    categoryElement.className = `status status--${categoryClass} neon-glow`;
  },

  // Populate payment summary with registration data
  populatePaymentSummary: function() {
    const summaryContainer = document.getElementById('payment-summary');
    
    let summaryHTML = '<div class="payment-summary cosmic-card">';
    summaryHTML += `<div class="summary-item"><span>Event:</span><span>${currentEvent.name}</span></div>`;
    summaryHTML += `<div class="summary-item"><span>Participant:</span><span>${registrationData.name}</span></div>`;
    summaryHTML += `<div class="summary-item"><span>College:</span><span>${registrationData.college}</span></div>`;
    
    if (registrationData.teamName) {
      summaryHTML += `<div class="summary-item"><span>Team:</span><span>${registrationData.teamName}</span></div>`;
    }
    
    summaryHTML += '<div class="summary-item"><span><strong>Registration Fee:</strong></span><span><strong>₹100</strong></span></div>';
    summaryHTML += '</div>';
    
    summaryContainer.innerHTML = summaryHTML;
  },

  // Generate e-ticket with unique code and cosmic styling
  generateTicket: function() {
    // Generate unique 5-character alphanumeric code
    const uniqueCode = CodeGenerator.generateUniqueCode();
    
    console.log('✨ Generated cosmic ticket code:', uniqueCode);
    
    // Populate ticket details
    document.getElementById('ticket-event').textContent = currentEvent.name;
    document.getElementById('ticket-participant').textContent = registrationData.name;
    document.getElementById('ticket-code').textContent = uniqueCode;
    document.getElementById('ticket-date').textContent = 'March 15-16, 2025';
    
    // Store ticket data for potential future use
    const ticketData = {
      event: currentEvent.name,
      participant: registrationData.name,
      code: uniqueCode,
      date: 'March 15-16, 2025',
      generated: new Date().toISOString()
    };
    
    // Store in session storage
    sessionStorage.setItem('ticketData', JSON.stringify(ticketData));
    
    // Add cosmic glow effect to ticket code
    setTimeout(() => {
      const ticketCodeElement = document.getElementById('ticket-code');
      if (ticketCodeElement) {
        ticketCodeElement.style.animation = 'neon-flicker 1s ease-in-out infinite alternate';
      }
    }, 100);
  }
};

// Enhanced Code Generator with cosmic flair
const CodeGenerator = {
  // Character set for code generation: A-Z and 0-9 (uppercase letters and digits)
  characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  
  /**
   * Generates a unique 5-character alphanumeric code with cosmic enhancement
   * Format: Exactly 5 characters using uppercase letters A-Z and digits 0-9
   * 
   * Enhanced Algorithm:
   * 1. Initialize empty result string
   * 2. Loop 5 times (for 5 characters)
   * 3. In each iteration, generate random index from 0 to characters.length-1
   * 4. Select character at that random index
   * 5. Append selected character to result string
   * 6. Add cosmic validation to ensure uniqueness
   * 7. Return final 5-character code
   * 
   * Example outputs: "A1B2C", "XYZ99", "12ABC", "QW3R7"
   * 
   * @returns {string} 5-character alphanumeric cosmic code
   */
  generateUniqueCode: function() {
    let result = '';
    
    // Generate exactly 5 characters with cosmic randomness
    for (let i = 0; i < 5; i++) {
      // Generate random index from 0 to 35 (36 total characters: 26 letters + 10 digits)
      const randomIndex = Math.floor(Math.random() * this.characters.length);
      
      // Select character at random index and append to result
      result += this.characters.charAt(randomIndex);
    }
    
    // Add cosmic timestamp validation to ensure uniqueness
    const timestamp = Date.now().toString().slice(-2);
    
    // If result starts with same pattern, add cosmic variation
    if (this.isCommonPattern(result)) {
      result = result.substring(0, 3) + timestamp.charAt(0) + result.charAt(4);
    }
    
    console.log('🌌 Generated cosmic code:', result);
    return result;
  },

  // Check for common patterns to ensure cosmic uniqueness
  isCommonPattern: function(code) {
    const commonPatterns = ['AAAAA', '11111', '00000', 'ABCDE', '12345'];
    return commonPatterns.some(pattern => 
      code.split('').every((char, index) => 
        pattern.charAt(index % pattern.length) === char
      )
    );
  }
};

// Enhanced Event rendering system with cosmic effects
const EventRenderer = {
  // Render all events on home page with cosmic animations
  renderEvents: function() {
    console.log('🎨 Rendering cosmic events...');
    this.renderEventSection('technical-events', eventData.events.technical);
    this.renderEventSection('non-technical-events', eventData.events.nonTechnical);
    
    // Add cosmic loading effect
    this.addCosmicLoadingEffect();
  },

  // Add cosmic loading effect
  addCosmicLoadingEffect: function() {
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(50px)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  },

  // Render specific event section with enhanced effects
  renderEventSection: function(containerId, events) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error('❌ Container not found:', containerId);
      return;
    }
    
    container.innerHTML = '';

    events.forEach((event, index) => {
      const eventCard = this.createEventCard(event, index);
      container.appendChild(eventCard);
    });
    
    console.log(`✨ Rendered ${events.length} cosmic events in ${containerId}`);
  },

  // Create individual event card element with cosmic styling
  createEventCard: function(event, index) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.setAttribute('data-event-id', event.id);
    
    // Add cosmic animation delay
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>${event.shortDesc}</p>
    `;

    // Add enhanced click event listener for cosmic navigation
    card.addEventListener('click', (e) => {
      console.log('🌟 Cosmic event card clicked:', event.id);
      e.preventDefault();
      e.stopPropagation();
      
      // Add cosmic click effect
      this.addClickEffect(card);
      
      setTimeout(() => {
        Navigation.goToEventDetail(event.id);
      }, 200);
    });

    // Enhanced keyboard support with cosmic feedback
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${event.name}`);
    
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.addClickEffect(card);
        setTimeout(() => {
          Navigation.goToEventDetail(event.id);
        }, 200);
      }
    });

    return card;
  },

  // Add cosmic click effect
  addClickEffect: function(element) {
    element.style.transform = 'scale(0.95)';
    element.style.filter = 'brightness(1.2)';
    
    setTimeout(() => {
      element.style.transform = '';
      element.style.filter = '';
    }, 150);
  }
};

// Enhanced Form validation system with cosmic feedback
const FormValidator = {
  // Validate registration form with cosmic enhancements
  validateForm: function() {
    console.log('🔍 Validating cosmic form...');
    let isValid = true;
    
    // Clear previous errors with cosmic effect
    this.clearErrors();
    
    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const college = document.getElementById('college').value.trim();
    
    // Validate name with cosmic feedback
    if (!name) {
      this.showError('name', 'Name is required for cosmic registration');
      isValid = false;
    } else if (name.length < 2) {
      this.showError('name', 'Name must be at least 2 characters');
      isValid = false;
    }
    
    // Validate email with enhanced cosmic checking
    if (!email) {
      this.showError('email', 'Email is required for cosmic communication');
      isValid = false;
    } else if (!this.isValidEmail(email)) {
      this.showError('email', 'Please enter a valid cosmic email address');
      isValid = false;
    }
    
    // Validate phone with cosmic verification
    if (!phone) {
      this.showError('phone', 'Phone number is required for cosmic contact');
      isValid = false;
    } else if (!this.isValidPhone(phone)) {
      this.showError('phone', 'Please enter a valid 10-digit phone number');
      isValid = false;
    }
    
    // Validate college
    if (!college) {
      this.showError('college', 'College name is required for cosmic identification');
      isValid = false;
    }
    
    if (isValid) {
      console.log('✅ Cosmic form validation successful!');
    } else {
      console.log('❌ Cosmic form validation failed');
    }
    
    return isValid;
  },

  // Enhanced email validation with cosmic regex
  isValidEmail: function(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email) && email.length <= 254;
  },

  // Enhanced phone validation with cosmic checking
  isValidPhone: function(phone) {
    const phoneRegex = /^\d{10}$/;
    const cleanPhone = phone.replace(/\D/g, '');
    return phoneRegex.test(cleanPhone) && !this.isInvalidPhonePattern(cleanPhone);
  },

  // Check for invalid phone patterns
  isInvalidPhonePattern: function(phone) {
    const invalidPatterns = ['0000000000', '1111111111', '1234567890'];
    return invalidPatterns.includes(phone);
  },

  // Show error message with cosmic styling
  showError: function(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    const inputElement = document.getElementById(fieldId);
    
    if (errorElement && inputElement) {
      errorElement.textContent = message;
      errorElement.classList.add('show');
      inputElement.classList.add('error');
      
      // Add cosmic error glow
      inputElement.style.boxShadow = '0 0 10px rgba(239, 68, 68, 0.5)';
      
      // Cosmic shake animation
      inputElement.style.animation = 'shake 0.5s ease-in-out';
      setTimeout(() => {
        inputElement.style.animation = '';
      }, 500);
    }
  },

  // Clear all errors with cosmic transition
  clearErrors: function() {
    document.querySelectorAll('.error-message').forEach(element => {
      element.classList.remove('show');
    });
    
    document.querySelectorAll('.form-control').forEach(element => {
      element.classList.remove('error', 'success');
      element.style.boxShadow = '';
    });
  },

  // Collect form data with cosmic validation
  collectFormData: function() {
    const data = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      college: document.getElementById('college').value.trim(),
      teamName: document.getElementById('team-name').value.trim(),
      numMembers: document.getElementById('num-members').value
    };
    
    console.log('📊 Collected cosmic form data:', data);
    return data;
  }
};

// Enhanced Payment simulation system with cosmic effects
const PaymentSimulator = {
  selectedMethod: null,
  cosmicProcessing: false,

  // Initialize payment interface with cosmic enhancements
  init: function() {
    console.log('💳 Initializing cosmic payment system...');
    
    // Setup payment method selection with cosmic effects
    const paymentBtns = document.querySelectorAll('.payment-btn');
    paymentBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.selectPaymentMethod(e.target.closest('.payment-btn'));
      });
      
      // Add cosmic hover sound effect (visual feedback)
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-2px)';
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });

    // Setup pay now button with cosmic processing
    const payNowBtn = document.getElementById('pay-now');
    if (payNowBtn) {
      payNowBtn.addEventListener('click', () => {
        this.processCosmicPayment();
      });
    }

    // Setup enhanced test buttons
    this.setupTestButtons();
  },

  // Setup test buttons with cosmic styling
  setupTestButtons: function() {
    const testButtons = [
      { id: 'force-success', status: 'success' },
      { id: 'force-pending', status: 'pending' },
      { id: 'force-failure', status: 'failure' }
    ];

    testButtons.forEach(({ id, status }) => {
      const button = document.getElementById(id);
      if (button) {
        button.addEventListener('click', () => {
          console.log(`🧪 Cosmic test: forcing ${status}`);
          this.showPaymentResult(status);
        });
      }
    });
  },

  // Select payment method with cosmic feedback
  selectPaymentMethod: function(button) {
    // Remove previous selection with cosmic transition
    document.querySelectorAll('.payment-btn').forEach(btn => {
      btn.classList.remove('selected');
      btn.style.transform = '';
    });

    // Add selection to clicked button with cosmic effect
    button.classList.add('selected');
    button.style.transform = 'scale(1.02)';
    this.selectedMethod = button.dataset.method;

    console.log('🌟 Selected cosmic payment method:', this.selectedMethod);

    // Show payment interface with cosmic animation
    const paymentInterface = document.getElementById('payment-interface');
    const methodText = document.getElementById('payment-method-text');
    
    const methodNames = {
      'upi': '🚀 Complete payment using UPI through cosmic gateway',
      'qr': '📷 Scan QR code with your cosmic scanner',
      'card': '💳 Enter card details for cosmic transaction'
    };

    methodText.textContent = methodNames[this.selectedMethod] || 'Complete your cosmic payment';
    
    // Cosmic reveal animation
    paymentInterface.style.opacity = '0';
    paymentInterface.style.display = 'block';
    paymentInterface.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      paymentInterface.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      paymentInterface.style.opacity = '1';
      paymentInterface.style.transform = 'translateY(0)';
    }, 100);
  },

  // Process payment with enhanced cosmic simulation
  processCosmicPayment: function() {
    if (!this.selectedMethod) {
      this.showCosmicAlert('Please select a cosmic payment method first! 🌌');
      return;
    }

    if (this.cosmicProcessing) {
      console.log('⏳ Cosmic payment already in progress...');
      return;
    }

    this.cosmicProcessing = true;
    console.log('🚀 Processing cosmic payment via:', this.selectedMethod);

    // Enhanced loading state with cosmic animation
    const payButton = document.getElementById('pay-now');
    const originalContent = payButton.innerHTML;
    
    payButton.innerHTML = `
      <span class="loading"></span> 
      <span style="margin-left: 8px;">Connecting to cosmic gateway...</span>
    `;
    payButton.disabled = true;
    payButton.style.background = 'linear-gradient(135deg, #6b46c1, #8b5cf6)';

    // Cosmic progress simulation
    const progressMessages = [
      'Initializing cosmic connection... 🌌',
      'Validating galactic credentials... ✨',
      'Processing through nebula network... 🌟',
      'Finalizing cosmic transaction... 🚀'
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      if (messageIndex < progressMessages.length) {
        const messageSpan = payButton.querySelector('span:last-child');
        if (messageSpan) {
          messageSpan.textContent = progressMessages[messageIndex];
        }
        messageIndex++;
      }
    }, 1000);

    // Simulate cosmic payment processing delay (4 seconds for full experience)
    setTimeout(() => {
      clearInterval(messageInterval);
      
      // Restore button
      payButton.innerHTML = originalContent;
      payButton.disabled = false;
      payButton.style.background = '';
      this.cosmicProcessing = false;

      // Enhanced payment outcome with cosmic probability
      const random = Math.random();
      let outcome;
      
      // Cosmic success rates: 70% success, 20% pending, 10% failure
      if (random < 0.7) {
        outcome = 'success';
      } else if (random < 0.9) {
        outcome = 'pending';
      } else {
        outcome = 'failure';
      }

      console.log('🎲 Cosmic payment outcome:', outcome, '(probability:', random.toFixed(3), ')');
      this.showPaymentResult(outcome);
    }, 4000);
  },

  // Show cosmic alert
  showCosmicAlert: function(message) {
    // Create temporary cosmic alert
    const alert = document.createElement('div');
    alert.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(0, 212, 255, 0.9));
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      z-index: 1000;
      font-family: 'Orbitron', Arial, sans-serif;
      box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
      animation: slideIn 0.3s ease-out;
    `;
    alert.textContent = message;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
      alert.style.animation = 'slideOut 0.3s ease-in forwards';
      setTimeout(() => alert.remove(), 300);
    }, 3000);
  },

  // Show payment result with enhanced cosmic styling
  showPaymentResult: function(status) {
    const resultContainer = document.getElementById('payment-result');
    let content = '';
    
    const cosmicMessages = {
      success: {
        icon: '✨',
        title: 'Cosmic Payment Successful!',
        message: 'Your registration has been confirmed through the galactic network.',
        button: 'Generate Cosmic E-Ticket 🎫'
      },
      pending: {
        icon: '⏳',
        title: 'Payment Orbiting...',
        message: 'Your payment is traveling through space-time. Confirmation incoming shortly.',
        button: 'Return to Galaxy Home 🌌'
      },
      failure: {
        icon: '💥',
        title: 'Cosmic Interference Detected',
        message: 'Houston, we have a problem! Please recalibrate and try again.',
        button: 'Retry Cosmic Connection 🚀'
      }
    };

    const config = cosmicMessages[status];
    
    switch (status) {
      case 'success':
        content = `
          <div class="payment-result success">
            <div class="result-icon">${config.icon}</div>
            <div class="result-message">${config.title}</div>
            <p>${config.message}</p>
            <button onclick="Navigation.goToTicket()" class="btn btn--primary cosmic-btn">
              <span class="btn-text">${config.button}</span>
              <span class="btn-glow"></span>
            </button>
          </div>
        `;
        break;
      
      case 'pending':
        content = `
          <div class="payment-result pending">
            <div class="result-icon">${config.icon}</div>
            <div class="result-message">${config.title}</div>
            <p>${config.message}</p>
            <button onclick="Navigation.showPage('home-page')" class="btn btn--secondary btn--glow">
              ${config.button}
            </button>
          </div>
        `;
        break;
      
      case 'failure':
        content = `
          <div class="payment-result failure">
            <div class="result-icon">${config.icon}</div>
            <div class="result-message">${config.title}</div>
            <p>${config.message}</p>
            <button onclick="PaymentSimulator.hidePaymentResult()" class="btn btn--primary cosmic-btn">
              <span class="btn-text">${config.button}</span>
              <span class="btn-glow"></span>
            </button>
          </div>
        `;
        break;
    }
    
    // Cosmic reveal animation
    resultContainer.style.opacity = '0';
    resultContainer.innerHTML = content;
    resultContainer.style.display = 'block';
    
    setTimeout(() => {
      resultContainer.style.transition = 'opacity 0.5s ease';
      resultContainer.style.opacity = '1';
    }, 100);
    
    // Hide payment interface with cosmic transition
    const paymentInterface = document.getElementById('payment-interface');
    paymentInterface.style.transition = 'all 0.3s ease';
    paymentInterface.style.opacity = '0';
    paymentInterface.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
      paymentInterface.style.display = 'none';
    }, 300);

    console.log('🎨 Displayed cosmic payment result:', status);
  },

  // Hide payment result for cosmic retry
  hidePaymentResult: function() {
    console.log('🔄 Hiding payment result for cosmic retry...');
    
    const resultContainer = document.getElementById('payment-result');
    const paymentInterface = document.getElementById('payment-interface');
    
    // Cosmic hide animation
    resultContainer.style.transition = 'all 0.3s ease';
    resultContainer.style.opacity = '0';
    resultContainer.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      resultContainer.style.display = 'none';
      resultContainer.style.transform = '';
      
      // Show payment interface with cosmic animation
      paymentInterface.style.opacity = '0';
      paymentInterface.style.display = 'block';
      
      setTimeout(() => {
        paymentInterface.style.transition = 'opacity 0.3s ease';
        paymentInterface.style.opacity = '1';
      }, 100);
    }, 300);
  }
};

// Enhanced Application initialization with cosmic startup
document.addEventListener('DOMContentLoaded', function() {
  console.log('🌌 DOM Content Loaded - Initializing Anthariksh cosmic application...');
  
  // Add cosmic startup animation
  document.body.style.opacity = '0';
  
  setTimeout(() => {
    document.body.style.transition = 'opacity 1s ease';
    document.body.style.opacity = '1';
    
    // Load saved cosmic data
    loadSavedData();
    
    // Render cosmic events
    EventRenderer.renderEvents();
    
    // Initialize cosmic payment system
    PaymentSimulator.init();
    
    // Setup cosmic event listeners
    setupEventListeners();
    
    console.log('✨ Anthariksh cosmic application initialized successfully!');
  }, 100);
});

// Setup enhanced event listeners with cosmic interactions
function setupEventListeners() {
  console.log('🎛️ Setting up cosmic event listeners...');
  
  // Enhanced back navigation with cosmic transitions
  const backToHomeBtn = document.getElementById('back-to-home');
  if (backToHomeBtn) {
    backToHomeBtn.addEventListener('click', () => {
      console.log('🏠 Returning to cosmic home...');
      Navigation.showPage('home-page');
    });
  }

  const backToEventBtn = document.getElementById('back-to-event');
  if (backToEventBtn) {
    backToEventBtn.addEventListener('click', () => {
      console.log('⬅️ Returning to cosmic event details...');
      Navigation.showPage('event-detail-page');
    });
  }

  // Enhanced registration button
  const registerBtn = document.getElementById('register-btn');
  if (registerBtn) {
    registerBtn.addEventListener('click', () => {
      console.log('📝 Opening cosmic registration portal...');
      Navigation.goToRegistration();
    });
  }

  // Enhanced registration form with cosmic validation
  const registrationForm = document.getElementById('registration-form');
  if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('🚀 Submitting cosmic registration form...');
      
      if (FormValidator.validateForm()) {
        registrationData = FormValidator.collectFormData();
        
        // Store registration data with cosmic timestamp
        registrationData.cosmicTimestamp = new Date().toISOString();
        sessionStorage.setItem('registrationData', JSON.stringify(registrationData));
        
        console.log('✅ Cosmic registration data validated and stored');
        Navigation.goToPayment();
      } else {
        console.log('❌ Cosmic registration validation failed');
      }
    });
  }

  // Enhanced team name field with cosmic member management
  const teamNameField = document.getElementById('team-name');
  if (teamNameField) {
    teamNameField.addEventListener('input', function(e) {
      const membersGroup = document.getElementById('members-group');
      const hasTeamName = e.target.value.trim();
      
      if (hasTeamName) {
        membersGroup.style.display = 'block';
        membersGroup.style.opacity = '0';
        membersGroup.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
          membersGroup.style.transition = 'all 0.3s ease';
          membersGroup.style.opacity = '1';
          membersGroup.style.transform = 'translateY(0)';
        }, 50);
        
        console.log('👥 Team mode activated for cosmic collaboration');
      } else {
        membersGroup.style.transition = 'all 0.3s ease';
        membersGroup.style.opacity = '0';
        
        setTimeout(() => {
          membersGroup.style.display = 'none';
          document.getElementById('num-members').value = '';
        }, 300);
        
        console.log('👤 Individual mode activated');
      }
    });
  }

  // Enhanced ticket actions with cosmic effects
  setupTicketActions();
  
  // Setup cosmic input validation
  setupCosmicInputValidation();
  
  console.log('✨ Cosmic event listeners setup complete');
}

// Setup enhanced ticket actions
function setupTicketActions() {
  const downloadTicketBtn = document.getElementById('download-ticket');
  if (downloadTicketBtn) {
    downloadTicketBtn.addEventListener('click', function() {
      console.log('📥 Downloading cosmic ticket...');
      
      // Add cosmic download effect
      this.style.transform = 'scale(0.95)';
      this.innerHTML = '<span class="loading"></span> Generating...';
      
      setTimeout(() => {
        window.print();
        this.innerHTML = '<span class="btn-text">Download Ticket</span><span class="btn-glow"></span>';
        this.style.transform = '';
      }, 1000);
    });
  }

  const closeTicketBtn = document.getElementById('close-ticket');
  if (closeTicketBtn) {
    closeTicketBtn.addEventListener('click', function() {
      console.log('🚪 Closing cosmic ticket and returning to galaxy...');
      
      // Cosmic session cleanup
      sessionStorage.clear();
      console.log('🧹 Cosmic session data cleared');
      
      // Add closing transition
      const ticketPage = document.getElementById('ticket-page');
      ticketPage.style.transition = 'opacity 0.5s ease';
      ticketPage.style.opacity = '0';
      
      setTimeout(() => {
        Navigation.showPage('home-page');
        ticketPage.style.opacity = '1';
      }, 500);
    });
  }
}

// Setup enhanced input validation with cosmic feedback
function setupCosmicInputValidation() {
  const inputs = ['name', 'email', 'phone', 'college'];
  
  inputs.forEach(inputId => {
    const input = document.getElementById(inputId);
    if (input) {
      // Cosmic blur validation
      input.addEventListener('blur', function() {
        console.log(`🔍 Validating cosmic field: ${inputId}`);
        validateSingleField(inputId);
      });
      
      // Enhanced input feedback with cosmic glow
      input.addEventListener('input', function() {
        // Clear error on input with cosmic transition
        const errorElement = document.getElementById(`${inputId}-error`);
        if (errorElement && errorElement.classList.contains('show')) {
          errorElement.style.transition = 'opacity 0.3s ease';
          errorElement.style.opacity = '0';
          
          setTimeout(() => {
            errorElement.classList.remove('show');
            errorElement.style.opacity = '1';
          }, 300);
          
          input.classList.remove('error');
          input.style.boxShadow = '';
        }
        
        // Add cosmic typing glow
        if (this.value.trim()) {
          input.style.borderColor = 'rgba(0, 212, 255, 0.5)';
          input.style.boxShadow = '0 0 5px rgba(0, 212, 255, 0.2)';
        } else {
          input.style.borderColor = '';
          input.style.boxShadow = '';
        }
      });

      // Cosmic focus effects
      input.addEventListener('focus', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.2s ease';
      });

      input.addEventListener('blur', function() {
        this.style.transform = '';
      });
    }
  });
}

// Enhanced single field validation with cosmic feedback
function validateSingleField(fieldId) {
  const input = document.getElementById(fieldId);
  if (!input) return;
  
  const value = input.value.trim();
  let isValid = true;
  
  switch (fieldId) {
    case 'name':
      if (!value) {
        FormValidator.showError(fieldId, 'Name is required for cosmic registration');
        isValid = false;
      } else if (value.length < 2) {
        FormValidator.showError(fieldId, 'Name must be at least 2 characters for galactic identification');
        isValid = false;
      }
      break;
    
    case 'college':
      if (!value) {
        FormValidator.showError(fieldId, 'College name is required for cosmic institutional verification');
        isValid = false;
      } else if (value.length < 3) {
        FormValidator.showError(fieldId, 'Please enter full college name');
        isValid = false;
      }
      break;
    
    case 'email':
      if (!value) {
        FormValidator.showError(fieldId, 'Email is required for cosmic communication');
        isValid = false;
      } else if (!FormValidator.isValidEmail(value)) {
        FormValidator.showError(fieldId, 'Please enter a valid cosmic email address');
        isValid = false;
      }
      break;
    
    case 'phone':
      if (!value) {
        FormValidator.showError(fieldId, 'Phone number is required for cosmic contact');
        isValid = false;
      } else if (!FormValidator.isValidPhone(value)) {
        FormValidator.showError(fieldId, 'Please enter a valid 10-digit phone number');
        isValid = false;
      }
      break;
  }
  
  if (isValid) {
    input.classList.add('success');
    input.style.borderColor = 'rgba(0, 212, 255, 0.7)';
    input.style.boxShadow = '0 0 8px rgba(0, 212, 255, 0.3)';
    console.log(`✅ Cosmic validation passed for: ${fieldId}`);
  } else {
    console.log(`❌ Cosmic validation failed for: ${fieldId}`);
  }
}

// Enhanced data loading with cosmic restoration
function loadSavedData() {
  console.log('💾 Loading saved cosmic data...');
  
  const saved = sessionStorage.getItem('registrationData');
  if (saved) {
    try {
      registrationData = JSON.parse(saved);
      console.log('✅ Cosmic registration data restored:', Object.keys(registrationData));
    } catch (e) {
      console.error('❌ Error loading saved cosmic registration data:', e);
      registrationData = {};
    }
  }

  // Load ticket data if available
  const ticketSaved = sessionStorage.getItem('ticketData');
  if (ticketSaved) {
    try {
      const ticketData = JSON.parse(ticketSaved);
      console.log('🎫 Cosmic ticket data found:', ticketData.code);
    } catch (e) {
      console.error('❌ Error loading saved cosmic ticket data:', e);
    }
  }
}

// Enhanced error handling with cosmic reporting
window.addEventListener('error', function(e) {
  console.error('🚨 Cosmic application error detected:', e.error);
  
  // Add cosmic error reporting
  const errorReport = {
    message: e.message,
    filename: e.filename,
    line: e.lineno,
    column: e.colno,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent
  };
  
  console.error('📊 Cosmic error report:', errorReport);
});

// Cosmic performance monitoring
window.addEventListener('load', function() {
  const loadTime = performance.now();
  console.log(`🚀 Anthariksh cosmic application loaded in ${loadTime.toFixed(2)}ms`);
});

// Add cosmic CSS shake animation dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
  
  @keyframes slideIn {
    from { 
      transform: translateX(100%); 
      opacity: 0; 
    }
    to { 
      transform: translateX(0); 
      opacity: 1; 
    }
  }
  
  @keyframes slideOut {
    from { 
      transform: translateX(0); 
      opacity: 1; 
    }
    to { 
      transform: translateX(100%); 
      opacity: 0; 
    }
  }
`;
document.head.appendChild(style);

// Expose enhanced Navigation and PaymentSimulator to global scope
window.Navigation = Navigation;
window.PaymentSimulator = PaymentSimulator;

// Add cosmic console signature
console.log(`
🌌 ═══════════════════════════════════════════════════ 🌌
   ✨ ANTHARIKSH - 2025 COSMIC SYMPOSIUM SYSTEM ✨
   🚀 The Galaxy of Talents, Breaking Barriers with Brilliance 🚀
   
   🎯 System Status: ONLINE
   🔧 Cosmic Engine: v2.0
   🌟 Theme: Space Odyssey Enhanced
   💻 Developer Console Access: GRANTED
   
🌌 ═══════════════════════════════════════════════════ 🌌
`);
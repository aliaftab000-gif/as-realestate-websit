// Contact Form Handler
class ContactFormHandler {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.setupValidation();
            this.setupSubmitHandler();
            this.setupPhoneValidation();
        }
    }

    setupValidation() {
        const inputs = this.form.querySelectorAll('input, select, textarea');

        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    setupPhoneValidation() {
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');

                // Format as 0311-1234567
                if (value.length > 4) {
                    value = value.substring(0, 4) + '-' + value.substring(4, 11);
                }

                e.target.value = value;
            });
        }
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Clear previous error
        this.clearError(field);

        // Required validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }

        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }

        // Phone validation
        if (field.id === 'phone' && value) {
            const phoneRegex = /^03\d{2}-\d{7}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number (0311-1234567)';
            }
        }

        if (!isValid) {
            this.showError(field, errorMessage);
        }

        return isValid;
    }

    showError(field, message) {
        field.classList.add('error');

        let errorElement = field.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            field.parentNode.appendChild(errorElement);
        }

        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    clearError(field) {
        field.classList.remove('error');

        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    setupSubmitHandler() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (this.validateForm()) {
                await this.handleSubmit();
            }
        });
    }

    validateForm() {
        let isValid = true;
        const fields = this.form.querySelectorAll('input[required], select[required], textarea[required]');

        fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    async handleSubmit() {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        try {
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Get form data
            const formData = {
                name: document.getElementById('name').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                email: document.getElementById('email').value.trim() || 'Not provided',
                society: document.getElementById('society').value,
                service: document.getElementById('service').value,
                budget: document.getElementById('budget').value || 'Not specified',
                message: document.getElementById('message').value.trim() || 'No additional message',
                timestamp: new Date().toISOString(),
                source: 'A&S RealEstate Website'
            };

            // Create WhatsApp message
            const whatsappMessage = this.formatWhatsAppMessage(formData);

            // Save to localStorage for backup
            this.saveToLocalStorage(formData);

            // Open WhatsApp
            window.open(`https://wa.me/923111544966?text=${encodeURIComponent(whatsappMessage)}`, '_blank');

            // Show success notification
            if (window.app) {
                window.app.showNotification('Message sent successfully! Opening WhatsApp...', 'success');
            }

            // Reset form
            setTimeout(() => {
                this.form.reset();
            }, 1000);

        } catch (error) {
            console.error('Error submitting form:', error);

            if (window.app) {
                window.app.showNotification('Error sending message. Please try again.', 'error');
            }

        } finally {
            // Restore button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    formatWhatsAppMessage(formData) {
        return `
🏠 *NEW PROPERTY INQUIRY* 🏠
━━━━━━━━━━━━━━━━━━━━━━━━━

👤 *Customer Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email}

📋 *Requirements:*
• Society: ${formData.society}
• Service: ${formData.service}
• Budget: ${formData.budget}

📝 *Message:*
${formData.message}

⏰ *Submitted:* ${new Date().toLocaleString()}
🌐 *Source:* ${formData.source}

━━━━━━━━━━━━━━━━━━━━━━━━━
_This inquiry was sent via A&S RealEstate Website_
        `.trim();
    }

    saveToLocalStorage(formData) {
        try {
            // Get existing inquiries
            const inquiries = JSON.parse(localStorage.getItem('as_inquiries') || '[]');

            // Add new inquiry
            inquiries.push({
                ...formData,
                id: Date.now(),
                status: 'pending'
            });

            // Save back to localStorage (keep only last 50)
            localStorage.setItem('as_inquiries', JSON.stringify(inquiries.slice(-50)));

            console.log('Inquiry saved to localStorage');
        } catch (error) {
            console.warn('Could not save to localStorage:', error);
        }
    }

    getInquiryStats() {
        try {
            const inquiries = JSON.parse(localStorage.getItem('as_inquiries') || '[]');
            return {
                total: inquiries.length,
                today: inquiries.filter(inquiry => {
                    const inquiryDate = new Date(inquiry.timestamp);
                    const today = new Date();
                    return inquiryDate.toDateString() === today.toDateString();
                }).length,
                bySociety: this.groupBySociety(inquiries)
            };
        } catch (error) {
            return { total: 0, today: 0, bySociety: {} };
        }
    }

    groupBySociety(inquiries) {
        return inquiries.reduce((acc, inquiry) => {
            acc[inquiry.society] = (acc[inquiry.society] || 0) + 1;
            return acc;
        }, {});
    }
}

// Initialize Contact Form Handler
document.addEventListener('DOMContentLoaded', () => {
    const contactHandler = new ContactFormHandler();

    // Make available globally for debugging
    window.contactHandler = contactHandler;

    // Add click tracking for WhatsApp buttons
    document.querySelectorAll('a[href*="whatsapp"]').forEach(link => {
        link.addEventListener('click', () => {
            const source = link.closest('.society-card') ? 'society_card' :
                          link.closest('.contact-card') ? 'contact_card' :
                          link.closest('.quick-contact') ? 'quick_contact' :
                          'other';

            this.trackWhatsAppClick(source);
        });
    });
});

// WhatsApp Click Tracking
function trackWhatsAppClick(source) {
    try {
        const clicks = JSON.parse(localStorage.getItem('whatsapp_clicks') || '[]');
        clicks.push({
            source,
            timestamp: new Date().toISOString(),
            url: window.location.href
        });
        localStorage.setItem('whatsapp_clicks', JSON.stringify(clicks.slice(-100)));
    } catch (error) {
        console.warn('Could not track WhatsApp click:', error);
    }
}

// Form auto-fill for specific inquiries
function prefillForm(society, service) {
    const societySelect = document.getElementById('society');
    const serviceSelect = document.getElementById('service');

    if (societySelect && society) {
        societySelect.value = society;
    }

    if (serviceSelect && service) {
        serviceSelect.value = service;
    }
}
// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        document.getElementById('loadingScreen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loadingScreen').style.display = 'none';
        }, 500);
    }, 2000);

    // Initialize all functions
    initThemeToggle();
    initMobileMenu();
    initHeroSlider();
    initStatsCounter();
    initPropertyFilters();
    initProperties();
    initContactForm();
    initScrollAnimations();
    initBackToTop();
});

// Theme Toggle Function
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    const html = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);

    // Desktop toggle
    themeToggle?.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Mobile toggle
    mobileThemeToggle?.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn?.contains(e.target) && !navLinks?.contains(e.target)) {
            navLinks?.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Hero Slider
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    if (slides.length === 0) return;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    // Auto slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);

    // Initial show
    showSlide(currentSlide);
}

// Animated Counter
function initStatsCounter() {
    const counters = document.querySelectorAll('[data-count]');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };

        // Start counter when in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(counter);
    });
}

// Property Filters
function initPropertyFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const propertyCards = document.querySelectorAll('.property-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Filter properties
            propertyCards.forEach(card => {
                const propertyType = card.getAttribute('data-type');

                if (filter === 'all' || filter === propertyType) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Properties Data (Replace with your real properties)
const propertiesData = [
    {
        id: 1,
        title: "5 Marla Luxury House",
        price: "PKR 45,000,000",
        type: "sale",
        project: "Park View City",
        bedrooms: 3,
        bathrooms: 3,
        size: "5 Marla",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "10 Marla Prime Plot",
        price: "PKR 25,000,000",
        type: "sale",
        project: "Bharia Enclave",
        bedrooms: 0,
        bathrooms: 0,
        size: "10 Marla",
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "3 Bed Apartment for Rent",
        price: "PKR 120,000/month",
        type: "rent",
        project: "Margalla Orchard",
        bedrooms: 3,
        bathrooms: 2,
        size: "2000 sq ft",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "Commercial Space",
        price: "PKR 80,000,000",
        type: "sale",
        project: "Park Enclave",
        bedrooms: 0,
        bathrooms: 2,
        size: "2000 sq ft",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        title: "2 Bed House for Rent",
        price: "PKR 80,000/month",
        type: "rent",
        project: "PHA Officers Residencia",
        bedrooms: 2,
        bathrooms: 2,
        size: "5 Marla",
        image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        title: "Featured Villa",
        price: "PKR 75,000,000",
        type: "featured",
        project: "Margalla Enclave",
        bedrooms: 4,
        bathrooms: 4,
        size: "1 Kanal",
        image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

// Initialize Properties
function initProperties() {
    const container = document.querySelector('.properties-container');
    if (!container) return;

    container.innerHTML = '';

    propertiesData.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.setAttribute('data-type', property.type);

        const badgeClass = property.type === 'sale' ? 'badge-sale' :
                          property.type === 'rent' ? 'badge-rent' : 'badge-sale';
        const badgeText = property.type === 'sale' ? 'FOR SALE' :
                         property.type === 'rent' ? 'FOR RENT' : 'FEATURED';

        propertyCard.innerHTML = `
            <div class="property-image" style="background-image: url('${property.image}')">
                <span class="property-badge ${badgeClass}">${badgeText}</span>
            </div>
            <div class="property-details">
                <h3 class="property-price">${property.price}</h3>
                <h4>${property.title}</h4>
                <p class="property-location">
                    <i class="fas fa-map-marker-alt"></i> ${property.project}, Islamabad
                </p>
                <div class="property-features">
                    ${property.bedrooms > 0 ? `<span><i class="fas fa-bed"></i> ${property.bedrooms} Beds</span>` : ''}
                    ${property.bathrooms > 0 ? `<span><i class="fas fa-bath"></i> ${property.bathrooms} Baths</span>` : ''}
                    <span><i class="fas fa-vector-square"></i> ${property.size}</span>
                </div>
                <button class="btn inquire-btn" data-id="${property.id}">
                    <i class="fas fa-envelope"></i> Inquire Now
                </button>
            </div>
        `;

        container.appendChild(propertyCard);
    });

    // Add event listeners to inquire buttons
    document.querySelectorAll('.inquire-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const propertyId = this.getAttribute('data-id');
            const property = propertiesData.find(p => p.id == propertyId);

            if (property) {
                const message = `I'm interested in: ${property.title}\nPrice: ${property.price}\nLocation: ${property.project}\nType: ${property.type.toUpperCase()}\n\nPlease contact me for more details.`;
                const whatsappURL = `https://wa.me/923111544996?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, '_blank');
            }
        });
    });
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    contactForm?.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            name: this.querySelector('input[type="text"]').value,
            phone: this.querySelector('input[type="tel"]').value,
            email: this.querySelector('input[type="email"]').value,
            interest: this.querySelector('select').value,
            message: this.querySelector('textarea').value
        };

        // Create WhatsApp message
        const whatsappMessage = `New Inquiry from Website\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterested In: ${formData.interest}\nMessage: ${formData.message}`;

        // Open WhatsApp
        window.open(`https://wa.me/923111544996?text=${encodeURIComponent(whatsappMessage)}`, '_blank');

        // Reset form
        this.reset();

        // Show success message
        alert('Thank you! Your message has been sent. You will be redirected to WhatsApp.');
    });
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animation]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animation = entry.target.getAttribute('data-animation');
                entry.target.classList.add('animate__animated', `animate__${animation}`);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
}

// Back to Top Button
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
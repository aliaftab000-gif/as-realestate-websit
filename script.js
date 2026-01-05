// Main Application Script
class RealEstateApp {
    constructor() {
        this.societies = [
            {
                id: "bharia",
                name: "Bharia Enclave",
                location: "Islamabad, Pakistan",
                description: "Bharia Enclave is a premium residential society offering modern amenities and a secure environment. With well-planned infrastructure, lush green parks, and commercial areas, it provides a perfect blend of comfort and convenience for families. The society features wide roads, underground utilities, and excellent security systems.",
                features: ["Gated Community", "24/7 Security", "Parks & Green Areas", "Commercial Area", "Mosque", "Schools", "Hospital", "Shopping Center", "Wide Roads", "Underground Utilities"],
                coordinates: [33.6844, 73.0479],
                images: [
                    "images/Bahria-Enclave folder/1.jpg",
                    "images/Bahria-Enclave folder/2.jpg",
                    "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ]
            },
            {
                id: "orchard",
                name: "Margalla Orchards",
                location: "Islamabad, Pakistan",
                description: "Margalla Orchards offers a unique living experience with beautifully designed orchard plots. Enjoy fresh air, green surroundings, and modern facilities in this exclusive society. Perfect for those who want to live close to nature while enjoying all modern amenities.",
                features: ["Orchard Plots", "Modern Infrastructure", "Green Environment", "Secure Society", "Community Center", "Water Supply", "Electricity", "Boundary Wall", "CCTV Security", "Maintenance Staff"],
                coordinates: [33.6209, 73.1259],
                images: [
                    "images/Margalla Orchards folder/1.jpg",
                    "images/Margalla Orchards folder/2.jpg",
                    "images/Margalla Orchards folder/3.jpg",
                    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ]
            },
            {
                id: "park",
                name: "Park Enclave",
                location: "Islamabad, Pakistan",
                description: "Park Enclave offers luxury living with premium amenities including clubhouse, sports facilities, and beautifully designed landscapes. Its prime location and exclusive environment make it a top choice for elite residents.",
                features: ["Luxury Villas", "Clubhouse", "Swimming Pool", "Sports Complex", "24/7 Security", "Gym", "Park", "Playground", "Jogging Track", "Community Hall"],
                coordinates: [33.7091, 73.0531],
                images: [
                    "images/Park Enclave folder/1.jpg",
                    "images/Park Enclave folder/2.jpg",
                    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1560448205-97abe0c6f19d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ]
            },
            {
                id: "pha",
                name: "PHA Officers Residencia",
                location: "Kurri Road, Islamabad",
                description: "Exclusively designed for government officers, PHA Officers Residencia offers premium residential facilities with modern infrastructure. Located on Kurri Road, it provides easy access to major city areas while maintaining a peaceful environment.",
                features: ["Exclusive Society", "Modern Infrastructure", "Government Officers", "Prime Location", "Secure Environment", "Mosque", "Parking", "Parks", "Community Center", "Maintenance"],
                coordinates: [33.6667, 73.1667],
                images: [
                    "images/Pha folder/1.jpg",
                    "images/Pha folder/2.jpg",
                    "images/Pha folder/3.jpg",
                    "images/Pha folder/4.jpg",
                    "images/Pha folder/5.jpg",
                    "images/Pha folder/6.jpg"
                ]
            }
        ];

        this.currentSlide = 0;
        this.map = null;
        this.init();
    }

    init() {
        this.setupDOM();
        this.loadSocieties();
        this.setupEventListeners();
        this.setupHeroSlider();
        this.setupCurrentYear();
        this.setupScrollAnimations();
        this.setupBackToTop();
    }

    setupDOM() {
        this.societiesContainer = document.querySelector('.societies-container');
        this.societyModal = document.getElementById('societyModal');
        this.modalClose = document.getElementById('modalClose');
        this.modalSocietyName = document.getElementById('modalSocietyName');
        this.modalGallery = document.getElementById('modalGallery');
        this.modalDescription = document.getElementById('modalDescription');
        this.modalFeatures = document.getElementById('modalFeatures');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navbar = document.querySelector('.navbar');
        this.backToTop = document.getElementById('backToTop');
        this.heroSlider = document.getElementById('heroSlider');
        this.sliderPrev = document.querySelector('.slider-prev');
        this.sliderNext = document.querySelector('.slider-next');
    }

    loadSocieties() {
        this.societiesContainer.innerHTML = '';

        this.societies.forEach(society => {
            const card = this.createSocietyCard(society);
            this.societiesContainer.appendChild(card);
        });
    }

    createSocietyCard(society) {
        const card = document.createElement('div');
        card.className = 'society-card';
        card.setAttribute('data-id', society.id);

        const imageSrc = society.images[0] || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

        card.innerHTML = `
            <div class="society-image">
                <img src="${imageSrc}" alt="${society.name}" loading="lazy"
                     onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';">
            </div>
            <div class="society-content">
                <h3 class="society-name">${society.name}</h3>
                <div class="society-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${society.location}</span>
                </div>
                <p class="society-description">${society.description.substring(0, 150)}...</p>
                <div class="society-features">
                    ${society.features.slice(0, 3).map(feature =>
                        `<span class="feature-tag">${feature}</span>`
                    ).join('')}
                    ${society.features.length > 3 ?
                        `<span class="feature-tag">+${society.features.length - 3} more</span>` : ''
                    }
                </div>
                <button class="society-button" data-id="${society.id}">
                    <i class="fas fa-eye"></i> View Details
                </button>
            </div>
        `;

        return card;
    }

    setupEventListeners() {
        // Society card clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.society-button')) {
                const button = e.target.closest('.society-button');
                const societyId = button.getAttribute('data-id');
                this.openSocietyModal(societyId);
            }

            // Footer society links
            if (e.target.closest('.footer-links a[data-society]')) {
                e.preventDefault();
                const societyId = e.target.closest('a').getAttribute('data-society');
                this.openSocietyModal(societyId);
            }

            // Nav menu active state
            if (e.target.closest('.nav-menu a')) {
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.classList.remove('active');
                });
                e.target.closest('.nav-menu a').classList.add('active');
            }
        });

        // Modal close
        this.modalClose.addEventListener('click', () => this.closeSocietyModal());
        this.societyModal.addEventListener('click', (e) => {
            if (e.target === this.societyModal) {
                this.closeSocietyModal();
            }
        });

        // Hamburger menu
        this.hamburger.addEventListener('click', () => this.toggleMobileMenu());

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!this.hamburger.contains(e.target) && !this.navMenu.contains(e.target)) {
                    this.hamburger.classList.remove('active');
                    this.navMenu.classList.remove('active');
                }
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.societyModal.classList.contains('active')) {
                this.closeSocietyModal();
            }
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }

            // Back to top button
            if (window.scrollY > 300) {
                this.backToTop.classList.add('visible');
            } else {
                this.backToTop.classList.remove('visible');
            }
        });

        // Back to top button
        this.backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupHeroSlider() {
        if (!this.heroSlider) return;

        const slides = this.heroSlider.querySelectorAll('.slide');

        // Auto slide every 5 seconds
        setInterval(() => {
            this.nextSlide();
        }, 5000);

        // Previous button
        this.sliderPrev?.addEventListener('click', () => {
            this.prevSlide();
        });

        // Next button
        this.sliderNext?.addEventListener('click', () => {
            this.nextSlide();
        });
    }

    nextSlide() {
        const slides = this.heroSlider.querySelectorAll('.slide');
        slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.currentSlide + 1) % slides.length;
        slides[this.currentSlide].classList.add('active');
    }

    prevSlide() {
        const slides = this.heroSlider.querySelectorAll('.slide');
        slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.currentSlide - 1 + slides.length) % slides.length;
        slides[this.currentSlide].classList.add('active');
    }

    openSocietyModal(societyId) {
        const society = this.societies.find(s => s.id === societyId);
        if (!society) return;

        // Update modal content
        this.modalSocietyName.textContent = society.name;
        this.modalDescription.textContent = society.description;

        // Clear and load gallery images
        this.modalGallery.innerHTML = '';
        society.images.forEach((imgSrc, index) => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `${society.name} - Image ${index + 1}`;
            img.loading = 'lazy';
            img.onerror = () => {
                img.src = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            };

            imgContainer.appendChild(img);
            this.modalGallery.appendChild(imgContainer);
        });

        // Load features
        this.modalFeatures.innerHTML = '';
        society.features.forEach(feature => {
            const featureTag = document.createElement('span');
            featureTag.className = 'feature-tag';
            featureTag.textContent = feature;
            this.modalFeatures.appendChild(featureTag);
        });

        // Initialize or update map
        if (!this.map) {
            this.initializeMap(society.coordinates);
        } else {
            this.map.setView(society.coordinates, 14);
            this.map.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    this.map.removeLayer(layer);
                }
            });
        }

        // Add marker
        L.marker(society.coordinates)
            .addTo(this.map)
            .bindPopup(`<b>${society.name}</b><br>${society.location}`)
            .openPopup();

        // Show modal
        this.societyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    initializeMap(coordinates) {
        this.map = L.map('modalMap').setView(coordinates, 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(this.map);
    }

    closeSocietyModal() {
        this.societyModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    toggleMobileMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }

    setupCurrentYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.society-card, .service-card, .testimonial-card, .featured-card').forEach(el => {
            observer.observe(el);
        });
    }

    setupBackToTop() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                this.backToTop.classList.add('visible');
            } else {
                this.backToTop.classList.remove('visible');
            }
        });
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">&times;</button>
        `;

        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);

        // Close button
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new RealEstateApp();

    // Remove animation overlay after 3 seconds
    setTimeout(() => {
        const overlay = document.getElementById('animationOverlay');
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 500);
        }
    }, 3000);
});
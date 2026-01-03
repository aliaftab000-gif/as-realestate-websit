// Society Data with 10 images each (using Unsplash for demonstration)
const societies = [
    {
        id: "bharia",
        name: "Bharia Enclave",
        location: "Islamabad, Pakistan",
        description: "Bharia Enclave is a premium residential society offering modern amenities and a secure environment. With well-planned infrastructure, lush green parks, and commercial areas, it provides a perfect blend of comfort and convenience for families.",
        features: ["Gated Community", "24/7 Security", "Parks", "Commercial Area", "Mosque"],
        coordinates: [33.6844, 73.0479],
        images: [
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448205-97abe0c6f19d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "parkview",
        name: "Park View City",
        location: "Islamabad, Pakistan",
        description: "Park View City is Islamabad's most sought-after residential project, featuring state-of-the-art facilities, beautiful landscapes, and a strategic location. Offering various plot sizes and payment plans, it's an ideal investment opportunity.",
        features: ["Modern Infrastructure", "Landscaped Parks", "Gymnasium", "Shopping Mall", "School"],
        coordinates: [33.6209, 73.1259],
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448205-97abe0c6f19d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "park",
        name: "Park Enclave",
        location: "Islamabad, Pakistan",
        description: "Park Enclave offers luxury living with premium amenities including clubhouse, sports facilities, and beautifully designed landscapes. Its prime location and exclusive environment make it a top choice for elite residents.",
        features: ["Luxury Villas", "Clubhouse", "Swimming Pool", "Sports Complex", "24/7 Security"],
        coordinates: [33.7091, 73.0531],
        images: [
            "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448205-97abe0c6f19d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "margalla",
        name: "Margalla Enclave",
        location: "Islamabad, Pakistan",
        description: "Nestled against the beautiful Margalla Hills, Margalla Enclave provides serene living with panoramic views. The society features modern infrastructure, recreational facilities, and a peaceful environment away from city chaos.",
        features: ["Hill View", "Modern Infrastructure", "Recreational Areas", "Secure Environment", "Peaceful Location"],
        coordinates: [33.7208, 73.0900],
        images: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448205-97abe0c6f19d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "orchard",
        name: "Margalla Orchard",
        location: "Islamabad, Pakistan",
        description: "Margalla Orchard is a well-planned agricultural and residential community offering farmhouses and residential plots. With its unique concept of orchard living, it combines modern amenities with natural surroundings.",
        features: ["Orchard Living", "Farmhouses", "Agricultural Plots", "Natural Environment", "Modern Amenities"],
        coordinates: [33.6500, 73.1667],
        images: [
            "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448205-97abe0c6f19d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "pha",
        name: "PHA Officers Residencia",
        location: "Kurri Road, Islamabad",
        description: "Exclusively designed for government officers, PHA Officers Residencia offers premium residential facilities with modern infrastructure. Located on Kurri Road, it provides easy access to major city areas while maintaining a peaceful environment.",
        features: ["Exclusive Society", "Modern Infrastructure", "Government Officers", "Prime Location", "Secure Environment"],
        coordinates: [33.6667, 73.1667],
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448205-97abe0c6f19d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    }
];

// DOM Elements
let map;
const societiesContainer = document.querySelector('.societies-container');
const societyModal = document.getElementById('societyModal');
const modalClose = document.getElementById('modalClose');
const modalSocietyName = document.getElementById('modalSocietyName');
const modalGallery = document.getElementById('modalGallery');
const modalDescription = document.getElementById('modalDescription');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contactForm');
const footerLinks = document.querySelectorAll('.footer-links a[data-society]');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load societies
    loadSocieties();

    // Setup event listeners
    setupEventListeners();

    // Initialize form
    initializeForm();

    // Animation overlay will auto-remove after 3 seconds (handled by CSS)
});

// Load societies into the grid
function loadSocieties() {
    societies.forEach(society => {
        const societyCard = createSocietyCard(society);
        societiesContainer.appendChild(societyCard);
    });
}

// Create society card HTML
function createSocietyCard(society) {
    const card = document.createElement('div');
    card.className = 'society-card';
    card.setAttribute('data-id', society.id);

    card.innerHTML = `
        <div class="society-image">
            <img src="${society.images[0]}" alt="${society.name}" loading="lazy">
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

// Setup event listeners
function setupEventListeners() {
    // Society card click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('society-button') || e.target.closest('.society-button')) {
            const button = e.target.classList.contains('society-button') ?
                e.target : e.target.closest('.society-button');
            const societyId = button.getAttribute('data-id');
            openSocietyModal(societyId);
        }

        // Footer society links
        if (e.target.closest('.footer-links a[data-society]')) {
            e.preventDefault();
            const societyId = e.target.closest('a').getAttribute('data-society');
            openSocietyModal(societyId);
        }
    });

    // Modal close
    modalClose.addEventListener('click', closeSocietyModal);
    societyModal.addEventListener('click', function(e) {
        if (e.target === societyModal) {
            closeSocietyModal();
        }
    });

    // Hamburger menu
    hamburger.addEventListener('click', toggleMobileMenu);

    // Nav menu links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                toggleMobileMenu();
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && societyModal.style.display === 'flex') {
            closeSocietyModal();
        }
    });
}

// Open society modal
function openSocietyModal(societyId) {
    const society = societies.find(s => s.id === societyId);
    if (!society) return;

    // Update modal content
    modalSocietyName.textContent = society.name;
    modalDescription.textContent = society.description;

    // Clear and load gallery images
    modalGallery.innerHTML = '';
    society.images.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `${society.name} - Image ${index + 1}`;
        img.loading = 'lazy';
        modalGallery.appendChild(img);
    });

    // Initialize or update map
    if (!map) {
        initializeMap(society.coordinates);
    } else {
        map.setView(society.coordinates, 14);
    }

    // Add marker
    L.marker(society.coordinates)
        .addTo(map)
        .bindPopup(`<b>${society.name}</b><br>${society.location}`)
        .openPopup();

    // Show modal
    societyModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Initialize map
function initializeMap(coordinates) {
    map = L.map('modalMap').setView(coordinates, 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
}

// Close society modal
function closeSocietyModal() {
    societyModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Toggle mobile menu
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Initialize contact form
function initializeForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            society: document.getElementById('society').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };

        // Create WhatsApp message
        const whatsappMessage =
            `Hello A&S RealEstate!%0A%0A` +
            `Name: ${formData.name}%0A` +
            `Phone: ${formData.phone}%0A` +
            `Interested in: ${formData.society}%0A` +
            `Service needed: ${formData.service}%0A` +
            `Message: ${formData.message}`;

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/923111544966?text=${whatsappMessage}`, '_blank');

        // Reset form
        contactForm.reset();

        // Show success message (optional)
        alert('Thank you! You will be redirected to WhatsApp to send your inquiry.');
    });
}

// Smooth scrolling for anchor links
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

// Intersection Observer for animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.society-card, .service-card').forEach(el => {
    observer.observe(el);
});
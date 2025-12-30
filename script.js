// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Sample Properties Data
const propertiesData = {
    sale: [
        {
            id: 1,
            title: "5 Marla House for Sale",
            price: "PKR 45,000,000",
            location: "Park View City, Islamabad",
            type: "house",
            bedrooms: 3,
            bathrooms: 3,
            size: "5 Marla",
            project: "parkview",
            status: "sale",
            description: "Beautiful house with modern amenities"
        },
        {
            id: 2,
            title: "10 Marla Plot",
            price: "PKR 25,000,000",
            location: "Bharia Enclave, Islamabad",
            type: "plot",
            bedrooms: 0,
            bathrooms: 0,
            size: "10 Marla",
            project: "bharia",
            status: "sale",
            description: "Corner plot with prime location"
        },
        {
            id: 3,
            title: "Luxury Apartment",
            price: "PKR 60,000,000",
            location: "Margalla Enclave, Islamabad",
            type: "apartment",
            bedrooms: 4,
            bathrooms: 4,
            size: "3000 sq ft",
            project: "margalla",
            status: "sale",
            description: "Penthouse with mountain view"
        },
        {
            id: 4,
            title: "Commercial Space",
            price: "PKR 80,000,000",
            location: "Park Enclave, Islamabad",
            type: "commercial",
            bedrooms: 0,
            bathrooms: 2,
            size: "2000 sq ft",
            project: "parkenclave",
            status: "sale",
            description: "Prime commercial space"
        }
    ],
    rental: [
        {
            id: 5,
            title: "3 Bed Apartment for Rent",
            price: "PKR 120,000/month",
            location: "Margalla Orchard, Islamabad",
            type: "apartment",
            bedrooms: 3,
            bathrooms: 2,
            size: "2000 sq ft",
            project: "margallaorchard",
            status: "rent",
            description: "Fully furnished apartment"
        },
        {
            id: 6,
            title: "2 Bed House for Rent",
            price: "PKR 80,000/month",
            location: "PHA Officers Residencia",
            type: "house",
            bedrooms: 2,
            bathrooms: 2,
            size: "5 Marla",
            project: "pha",
            status: "rent",
            description: "Well-maintained house"
        }
    ]
};

// Render Properties Function
function renderProperties(properties, containerId, filter = 'all') {
    const container = document.querySelector(containerId);
    if (!container) return;

    container.innerHTML = '';

    const filteredProperties = filter === 'all'
        ? properties
        : properties.filter(prop => prop.project === filter);

    filteredProperties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';

        propertyCard.innerHTML = `
            <div class="property-image" style="background-image: url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')">
                <span class="property-status ${property.status === 'sale' ? 'status-sale' : 'status-rent'}">
                    ${property.status === 'sale' ? 'FOR SALE' : 'FOR RENT'}
                </span>
            </div>
            <div class="property-details">
                <h3 class="property-price">${property.price}</h3>
                <h4>${property.title}</h4>
                <p class="property-location">
                    <i class="fas fa-map-marker-alt"></i> ${property.location}
                </p>
                <p>${property.description}</p>
                <div class="property-features">
                    ${property.bedrooms > 0 ? `<span><i class="fas fa-bed"></i> ${property.bedrooms} Beds</span>` : ''}
                    ${property.bathrooms > 0 ? `<span><i class="fas fa-bath"></i> ${property.bathrooms} Baths</span>` : ''}
                    ${property.size ? `<span><i class="fas fa-vector-square"></i> ${property.size}</span>` : ''}
                </div>
                <button class="btn btn-primary" onclick="inquireProperty(${property.id})">
                    <i class="fas fa-envelope"></i> Inquire Now
                </button>
            </div>
        `;

        container.appendChild(propertyCard);
    });
}

// Initialize Properties
document.addEventListener('DOMContentLoaded', () => {
    // Render sale properties
    renderProperties(propertiesData.sale, '.sale-properties .properties-grid');

    // Render rental properties
    renderProperties(propertiesData.rental, '.rental-properties .properties-grid');

    // Filter buttons for sale properties
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to clicked button
            this.classList.add('active');

            // Get filter value
            const filter = this.getAttribute('data-filter');

            // Re-render properties with filter
            renderProperties(propertiesData.sale, '.sale-properties .properties-grid', filter);
        });
    });

    // Property type selector
    document.querySelectorAll('.type-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.type-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to clicked button
            this.classList.add('active');

            // Update form based on type
            const type = this.getAttribute('data-type');
            updatePropertyForm(type);
        });
    });
});

// Update Property Form based on type
function updatePropertyForm(type) {
    const priceLabel = document.querySelector('label[for="price"]');
    if (priceLabel) {
        if (type === 'rent') {
            priceLabel.textContent = 'Monthly Rent *';
        } else {
            priceLabel.textContent = 'Price *';
        }
    }
}

// Property Form Submission
const propertyForm = document.getElementById('propertyForm');
propertyForm?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const formData = {
        type: document.getElementById('propertyType').value,
        project: document.getElementById('project').value,
        price: document.getElementById('price').value,
        size: document.getElementById('size').value,
        bedrooms: document.getElementById('bedrooms').value,
        bathrooms: document.getElementById('bathrooms').value,
        description: document.getElementById('description').value,
        ownerName: document.getElementById('ownerName').value,
        ownerPhone: document.getElementById('ownerPhone').value
    };

    // Create WhatsApp message
    const propertyType = document.querySelector('.type-btn.active').getAttribute('data-type');
    const whatsappMessage = `New Property Listing Submission:%0A%0AProperty Type: ${formData.type}%0AFor: ${propertyType === 'sale' ? 'Sale' : 'Rent'}%0AProject: ${formData.project}%0APrice: ${formData.price}%0ASize: ${formData.size}%0ABedrooms: ${formData.bedrooms}%0ABathrooms: ${formData.bathrooms}%0ADescription: ${formData.description}%0A%0AOwner Details:%0AName: ${formData.ownerName}%0APhone: ${formData.ownerPhone}`;

    // Open WhatsApp
    window.open(`https://wa.me/923111544996?text=${whatsappMessage}`, '_blank');

    // Reset form
    this.reset();

    // Show success message
    alert('Thank you! Your property has been submitted. You will be redirected to WhatsApp for confirmation.');
});

// Admin Form Submission
const adminForm = document.getElementById('adminForm');
adminForm?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    // Simple admin validation (in real app, this should be server-side)
    if (username === 'admin' && password === 'admin123') {
        alert('Login successful! Admin panel would open in a real application.');
        // In real app, redirect to admin dashboard
        // window.location.href = 'admin-dashboard.html';
    } else {
        alert('Invalid credentials. Try: admin / admin123');
    }
});

// Inquiry Form Submission
const inquiryForm = document.getElementById('inquiryForm');
inquiryForm?.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const interest = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;

    // Create WhatsApp message
    const whatsappMessage = `New Inquiry from Website:%0A%0AName: ${name}%0APhone: ${phone}${email ? `%0AEmail: ${email}` : ''}%0AInterested in: ${interest}%0AMessage: ${message}`;

    // Open WhatsApp
    window.open(`https://wa.me/923111544996?text=${whatsappMessage}`, '_blank');

    // Reset form
    this.reset();

    // Show success message
    alert('Thank you! Your inquiry has been sent. You will be redirected to WhatsApp.');
});

// Property Inquiry Function
function inquireProperty(propertyId) {
    const property = [...propertiesData.sale, ...propertiesData.rental].find(p => p.id === propertyId);

    if (property) {
        const whatsappMessage = `I'm interested in this property:%0A%0A${property.title}%0APrice: ${property.price}%0ALocation: ${property.location}%0ADescription: ${property.description}%0A%0APlease contact me with more details.`;

        window.open(`https://wa.me/923111544996?text=${whatsappMessage}`, '_blank');
    }
}

// Smooth Scrolling
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

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '';
        navbar.style.backdropFilter = '';
    }
});
// Admin Panel Script
document.addEventListener('DOMContentLoaded', function() {
    initAdminLogin();
    initAdminDashboard();
    initPropertyManagement();
    initThemeToggle();
});

// Admin Login
function initAdminLogin() {
    const loginForm = document.getElementById('loginForm');
    const loginScreen = document.getElementById('loginScreen');
    const dashboard = document.getElementById('dashboard');

    // Default credentials (Change these in production)
    const DEFAULT_USERNAME = 'admin';
    const DEFAULT_PASSWORD = 'admin123';

    loginForm?.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
            // Successful login
            loginScreen.style.display = 'none';
            dashboard.style.display = 'flex';

            // Initialize dashboard
            updateDashboardStats();
            loadPropertiesTable();

            // Save login state
            localStorage.setItem('adminLoggedIn', 'true');
        } else {
            alert('Invalid credentials! Try: admin / admin123');
        }
    });

    // Check if already logged in
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        loginScreen.style.display = 'none';
        dashboard.style.display = 'flex';
        updateDashboardStats();
        loadPropertiesTable();
    }

    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn?.addEventListener('click', function() {
        localStorage.removeItem('adminLoggedIn');
        location.reload();
    });
}

// Admin Dashboard Functions
function initAdminDashboard() {
    // Sidebar toggle for mobile
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.admin-sidebar');

    sidebarToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Menu item clicks
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all items
            document.querySelectorAll('.menu-item').forEach(i => {
                i.classList.remove('active');
            });

            // Add active class to clicked item
            this.classList.add('active');

            // Scroll to section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Update Dashboard Stats
function updateDashboardStats() {
    const properties = JSON.parse(localStorage.getItem('properties') || '[]');

    const totalProperties = properties.length;
    const saleProperties = properties.filter(p => p.category === 'sale').length;
    const rentProperties = properties.filter(p => p.category === 'rent').length;

    document.getElementById('totalProperties').textContent = totalProperties;
    document.getElementById('saleProperties').textContent = saleProperties;
    document.getElementById('rentProperties').textContent = rentProperties;
    document.getElementById('totalInquiries').textContent = '0'; // You can add inquiry tracking
}

// Property Management
function initPropertyManagement() {
    const addPropertyForm = document.getElementById('addPropertyForm');

    // Load existing properties from localStorage
    if (!localStorage.getItem('properties')) {
        localStorage.setItem('properties', JSON.stringify([]));
    }

    // Add Property Form Submission
    addPropertyForm?.addEventListener('submit', function(e) {
        e.preventDefault();

        const propertyData = {
            id: Date.now(),
            title: document.getElementById('propertyTitle').value,
            type: document.getElementById('propertyType').value,
            category: document.getElementById('propertyCategory').value,
            project: document.getElementById('propertyProject').value,
            price: document.getElementById('propertyPrice').value,
            size: document.getElementById('propertySize').value,
            bedrooms: document.getElementById('propertyBedrooms').value,
            bathrooms: document.getElementById('propertyBathrooms').value,
            description: document.getElementById('propertyDescription').value,
            image: document.getElementById('propertyImage').value || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: new Date().toISOString().split('T')[0]
        };

        // Save to localStorage
        const properties = JSON.parse(localStorage.getItem('properties') || '[]');
        properties.push(propertyData);
        localStorage.setItem('properties', JSON.stringify(properties));

        // Update dashboard
        updateDashboardStats();
        loadPropertiesTable();

        // Reset form
        this.reset();

        // Show success message
        alert('Property added successfully!');
    });
}

// Load Properties Table
function loadPropertiesTable() {
    const properties = JSON.parse(localStorage.getItem('properties') || '[]');
    const tableBody = document.getElementById('propertiesTableBody');

    if (!tableBody) return;

    tableBody.innerHTML = '';

    properties.forEach((property, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${property.title}</td>
            <td>${property.type}</td>
            <td>${property.project}</td>
            <td>${property.price}</td>
            <td>
                <span class="status-badge ${property.category === 'sale' ? 'status-sale' : 'status-rent'}">
                    ${property.category === 'sale' ? 'For Sale' : 'For Rent'}
                </span>
            </td>
            <td class="action-buttons">
                <button class="btn-sm btn-view" onclick="viewProperty(${property.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-sm btn-edit" onclick="editProperty(${property.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-sm btn-delete" onclick="deleteProperty(${property.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Property Actions
function viewProperty(id) {
    const properties = JSON.parse(localStorage.getItem('properties') || '[]');
    const property = properties.find(p => p.id === id);

    if (property) {
        const details = `
Property Details:
-----------------
Title: ${property.title}
Type: ${property.type}
Category: ${property.category}
Project: ${property.project}
Price: ${property.price}
Size: ${property.size}
Bedrooms: ${property.bedrooms}
Bathrooms: ${property.bathrooms}
Description: ${property.description}
        `;
        alert(details);
    }
}

function editProperty(id) {
    alert('Edit feature will be available in the next update!');
    // You can implement edit functionality here
}

function deleteProperty(id) {
    if (confirm('Are you sure you want to delete this property?')) {
        const properties = JSON.parse(localStorage.getItem('properties') || '[]');
        const updatedProperties = properties.filter(p => p.id !== id);
        localStorage.setItem('properties', JSON.stringify(updatedProperties));

        updateDashboardStats();
        loadPropertiesTable();
        alert('Property deleted successfully!');
    }
}

// Admin Theme Toggle
function initThemeToggle() {
    const themeBtn = document.querySelector('.theme-toggle-btn');
    const html = document.documentElement;

    themeBtn?.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('admin-theme', newTheme);
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('admin-theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
}
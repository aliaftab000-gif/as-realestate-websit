// Image Loader and Optimizer
class ImageManager {
    constructor() {
        this.cache = new Map();
        this.fallbackImages = [
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ];
        this.init();
    }

    init() {
        this.preloadCriticalImages();
        this.setupLazyLoading();
        this.setupErrorHandling();
        this.optimizeExistingImages();
    }

    preloadCriticalImages() {
        const criticalImages = [
            'images/Bahria-Enclave folder/1.jpg',
            'images/Margalla Orchards folder/1.jpg',
            'images/Park Enclave folder/1.jpg',
            'images/Pha folder/1.jpg'
        ];

        criticalImages.forEach(src => {
            this.loadImage(src).catch(error => {
                console.warn(`Failed to preload: ${src}`, error);
            });
        });
    }

    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.getAttribute('data-src');

                        if (src) {
                            this.loadImage(src)
                                .then(() => {
                                    img.src = src;
                                    img.removeAttribute('data-src');
                                    img.classList.add('loaded');
                                })
                                .catch(() => {
                                    this.handleImageError(img);
                                });
                        }

                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.1
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    setupErrorHandling() {
        document.addEventListener('error', (e) => {
            if (e.target.tagName === 'IMG') {
                this.handleImageError(e.target);
            }
        }, true);
    }

    optimizeExistingImages() {
        document.querySelectorAll('img').forEach(img => {
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }

            if (!img.hasAttribute('decoding')) {
                img.setAttribute('decoding', 'async');
            }

            // Add width and height attributes for CLS prevention
            if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
                img.setAttribute('width', '800');
                img.setAttribute('height', '600');
            }
        });
    }

    handleImageError(img) {
        const randomFallback = this.fallbackImages[
            Math.floor(Math.random() * this.fallbackImages.length)
        ];

        img.src = randomFallback;
        img.alt = img.alt || 'Property Image';
        img.classList.add('image-error');

        console.warn(`Image failed to load: ${img.dataset.originalSrc || img.src}`);
    }

    async loadImage(src) {
        // Return cached image if available
        if (this.cache.has(src)) {
            return Promise.resolve(this.cache.get(src));
        }

        return new Promise((resolve, reject) => {
            const img = new Image();

            img.onload = () => {
                this.cache.set(src, img);
                resolve(img);
            };

            img.onerror = () => {
                reject(new Error(`Failed to load image: ${src}`));
            };

            img.src = src;
        });
    }

    preloadSocietyImages(societyId) {
        const society = window.app?.societies?.find(s => s.id === societyId);
        if (!society) return;

        society.images.forEach(src => {
            this.loadImage(src).catch(error => {
                console.warn(`Failed to preload society image: ${src}`, error);
            });
        });
    }
}

// Initialize Image Manager
const imageManager = new ImageManager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ImageManager, imageManager };
}
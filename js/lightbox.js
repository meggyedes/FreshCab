// ===================================
// FreshCab Fullscreen Image Viewer (Lightbox)
// ===================================

class Lightbox {
    constructor() {
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImage = document.getElementById('lightbox-image');
        this.lightboxCaption = document.getElementById('lightbox-caption');
        this.closeBtn = document.getElementById('lightbox-close');
        this.prevBtn = document.getElementById('lightbox-prev');
        this.nextBtn = document.getElementById('lightbox-next');
        
        this.currentImages = [];
        this.currentIndex = 0;
        
        this.init();
    }
    
    init() {
        // Automatically add expand buttons and classes to all carousel images
        this.setupExpandableImages();

        // Add click listeners to all expandable images
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('expandable-image')) {
                this.openLightbox(e.target);
            }

            if (e.target.classList.contains('expand-btn')) {
                const img = e.target.previousElementSibling;
                if (img && img.classList.contains('expandable-image')) {
                    this.openLightbox(img);
                }
            }
        });
        
        // Close button
        this.closeBtn.addEventListener('click', () => this.closeLightbox());
        
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.showPrevImage());
        this.nextBtn.addEventListener('click', () => this.showNextImage());
        
        // Close on background click
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.closeLightbox();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;
            
            if (e.key === 'Escape') {
                this.closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                this.showPrevImage();
            } else if (e.key === 'ArrowRight') {
                this.showNextImage();
            }
        });
    }

    setupExpandableImages() {
        // Find all carousel slides
        const carouselSlides = document.querySelectorAll('.carousel-slide');

        carouselSlides.forEach(slide => {
            const img = slide.querySelector('img');
            if (img && !img.classList.contains('expandable-image')) {
                // Add expandable class
                img.classList.add('expandable-image');

                // Add expand button if it doesn't exist
                if (!slide.querySelector('.expand-btn')) {
                    const expandBtn = document.createElement('button');
                    expandBtn.className = 'expand-btn';
                    expandBtn.setAttribute('aria-label', 'View fullscreen');
                    expandBtn.innerHTML = '⛶';
                    slide.appendChild(expandBtn);
                }
            }
        });
    }

    openLightbox(imgElement) {
        // Get all images in the same carousel
        const carousel = imgElement.closest('.carousel');
        if (carousel) {
            this.currentImages = Array.from(carousel.querySelectorAll('.expandable-image'));
            this.currentIndex = this.currentImages.indexOf(imgElement);
        } else {
            this.currentImages = [imgElement];
            this.currentIndex = 0;
        }
        
        this.showImage(this.currentIndex);
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    showImage(index) {
        if (index < 0 || index >= this.currentImages.length) return;
        
        const img = this.currentImages[index];
        this.lightboxImage.src = img.src;
        this.lightboxImage.alt = img.alt;
        this.lightboxCaption.textContent = img.alt;
        this.currentIndex = index;
        
        // Show/hide navigation buttons based on position
        this.prevBtn.style.display = index > 0 ? 'flex' : 'none';
        this.nextBtn.style.display = index < this.currentImages.length - 1 ? 'flex' : 'none';
    }
    
    showPrevImage() {
        if (this.currentIndex > 0) {
            this.showImage(this.currentIndex - 1);
        }
    }
    
    showNextImage() {
        if (this.currentIndex < this.currentImages.length - 1) {
            this.showImage(this.currentIndex + 1);
        }
    }
}

// Initialize lightbox on page load
document.addEventListener('DOMContentLoaded', () => {
    new Lightbox();
    console.log('FreshCab Lightbox - Initialized Successfully');
});


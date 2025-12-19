// Get branch from page
function getBranchName() {
    const path = window.location.pathname;
    if (path.includes('kampala')) return 'AK GARDENS IBANDA';
    if (path.includes('entebbe')) return 'Rwenkobwa';
    if (path.includes('jinja')) return 'Karuma';
    return 'AK GARDENS IBANDA'; // default
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Set minimum date for check-in to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('checkin').setAttribute('min', today);

// Update checkout minimum date when check-in changes
document.getElementById('checkin').addEventListener('change', function() {
    const checkinDate = new Date(this.value);
    checkinDate.setDate(checkinDate.getDate() + 1);
    const minCheckout = checkinDate.toISOString().split('T')[0];
    document.getElementById('checkout').setAttribute('min', minCheckout);
});

// Handle booking form submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const messageDiv = document.getElementById('bookingMessage');
    const submitButton = this.querySelector('.submit-button');
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        guests: document.getElementById('guests').value,
        checkin: document.getElementById('checkin').value,
        checkout: document.getElementById('checkout').value,
        roomType: document.getElementById('roomType').value,
        message: document.getElementById('message').value,
        branch: getBranchName() // Add branch information
    };
    
    // Validate dates
    const checkinDate = new Date(formData.checkin);
    const checkoutDate = new Date(formData.checkout);
    
    if (checkoutDate <= checkinDate) {
        showMessage('error', 'Check-out date must be after check-in date.');
        return;
    }
    
    // Disable submit button
    submitButton.disabled = true;
    submitButton.textContent = 'Processing...';
    
    // Simulate booking process
    setTimeout(() => {
        // Save booking to localStorage
        const booking = {
            id: Date.now(),
            ...formData,
            status: 'pending',
            bookingDate: new Date().toISOString()
        };
        
        // Get existing bookings
        const bookings = JSON.parse(localStorage.getItem('hotelBookings') || '[]');
        bookings.push(booking);
        localStorage.setItem('hotelBookings', JSON.stringify(bookings));
        
        showMessage('success', 
            `✓ Booking Request Submitted for SMA Hotels ${formData.branch}! ` +
            `Your booking ID is #${booking.id}. ` +
            `Our team will review your request and send you a WhatsApp confirmation shortly. ` +
            `Dates: ${formatDate(formData.checkin)} to ${formatDate(formData.checkout)}`
        );
        
        // Reset form
        this.reset();
        
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Booking';
        
    }, 2000);
});

// Show message function
function showMessage(type, text) {
    const messageDiv = document.getElementById('bookingMessage');
    messageDiv.className = `booking-message ${type}`;
    messageDiv.textContent = text;
    messageDiv.style.display = 'block';
    
    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Hide message after 10 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 10000);
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(44, 62, 80, 1)';
    } else {
        navbar.style.background = 'rgba(44, 62, 80, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// Add animation to service cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});


// Gallery functionality
const galleryImages = [
    { src: 'gallery-ribs.jpg', caption: 'Delicious BBQ Ribs with Vegetables' },
    { src: 'gallery-parking.jpg', caption: 'AK Gardens Hotel - Ibanda' },
    { src: 'ak-gardens-building.jpg', caption: 'Modern Hotel Building with Safari Vehicle' },
    { src: 'gallery-gardens.jpg', caption: 'Beautiful Landscaped Gardens' },
    { src: 'gallery-restaurant.jpg', caption: 'Elegant Restaurant Interior' },
    { src: 'gallery-buffet.jpg', caption: 'Buffet Setup for Events' },
    { src: 'gallery-chef.jpg', caption: 'Chef Preparing Fresh Tilapia' }
];

let currentGalleryIndex = 0;

function openGalleryModal(index) {
    currentGalleryIndex = index;
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('galleryModalImg');
    const caption = document.getElementById('galleryCaption');
    
    modal.style.display = 'block';
    modalImg.src = galleryImages[index].src;
    caption.textContent = galleryImages[index].caption;
    document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
    document.getElementById('galleryModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeGalleryImage(direction) {
    currentGalleryIndex += direction;
    
    if (currentGalleryIndex >= galleryImages.length) {
        currentGalleryIndex = 0;
    } else if (currentGalleryIndex < 0) {
        currentGalleryIndex = galleryImages.length - 1;
    }
    
    const modalImg = document.getElementById('galleryModalImg');
    const caption = document.getElementById('galleryCaption');
    
    modalImg.src = galleryImages[currentGalleryIndex].src;
    caption.textContent = galleryImages[currentGalleryIndex].caption;
}

// Close modal on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeGalleryModal();
    }
});

// Navigate gallery with arrow keys
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('galleryModal');
    if (modal.style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            changeGalleryImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeGalleryImage(1);
        }
    }
});

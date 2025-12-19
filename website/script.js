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
        message: document.getElementById('message').value
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
            `✓ Booking Request Submitted! Thank you ${formData.name}! ` +
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

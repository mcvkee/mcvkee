// Admin credentials
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'vkee18'
};

// Check if user is logged in
let isLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    if (isLoggedIn) {
        showDashboard();
    }
    
    // Login form handler
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', handleNavigation);
    });
    
    // Search and filter
    document.getElementById('searchBookings')?.addEventListener('input', filterBookings);
    document.getElementById('statusFilter')?.addEventListener('change', filterBookings);
    document.getElementById('branchFilter')?.addEventListener('change', filterBookings);
    
    // Close modal
    document.querySelector('.close-modal')?.addEventListener('click', closeModal);
    
    // Load bookings if logged in
    if (isLoggedIn) {
        loadBookings();
        updateStats();
    }
});

// Handle login
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('loginError');
    
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        isLoggedIn = true;
        showDashboard();
        loadBookings();
        updateStats();
    } else {
        errorDiv.textContent = 'Invalid username or password';
    }
}

// Handle logout
function handleLogout() {
    sessionStorage.removeItem('adminLoggedIn');
    isLoggedIn = false;
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('loginForm').reset();
}

// Show dashboard
function showDashboard() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('dashboard').style.display = 'flex';
}

// Handle navigation
function handleNavigation(e) {
    e.preventDefault();
    const section = this.dataset.section;
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    this.classList.add('active');
    
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    const sectionMap = {
        'overview': 'overviewSection',
        'bookings': 'bookingsSection',
        'rooms': 'roomsSection',
        'guests': 'guestsSection'
    };
    
    const titleMap = {
        'overview': 'Dashboard Overview',
        'bookings': 'All Bookings',
        'rooms': 'Room Management',
        'guests': 'Guest Management'
    };
    
    document.getElementById(sectionMap[section]).style.display = 'block';
    document.getElementById('sectionTitle').textContent = titleMap[section];
    
    if (section === 'bookings') {
        displayBookingsTable();
    } else if (section === 'rooms') {
        displayRooms();
    } else if (section === 'guests') {
        displayGuests();
    }
}

// Get bookings from localStorage
function getBookings() {
    const bookings = localStorage.getItem('hotelBookings');
    return bookings ? JSON.parse(bookings) : [];
}

// Save bookings to localStorage
function saveBookings(bookings) {
    localStorage.setItem('hotelBookings', JSON.stringify(bookings));
}

// Load and display bookings
function loadBookings() {
    const bookings = getBookings();
    displayRecentBookings(bookings);
    displayBookingsTable(bookings);
}

// Update statistics
function updateStats() {
    const bookings = getBookings();
    const total = bookings.length;
    const confirmed = bookings.filter(b => b.status === 'confirmed').length;
    const pending = bookings.filter(b => b.status === 'pending').length;
    const cancelled = bookings.filter(b => b.status === 'cancelled').length;
    
    document.getElementById('totalBookings').textContent = total;
    document.getElementById('confirmedBookings').textContent = confirmed;
    document.getElementById('pendingBookings').textContent = pending;
    document.getElementById('cancelledBookings').textContent = cancelled;
}

// Display recent bookings
function displayRecentBookings(bookings) {
    const recentList = document.getElementById('recentBookingsList');
    const recent = bookings.slice(-5).reverse();
    
    if (recent.length === 0) {
        recentList.innerHTML = '<p style="color: #7f8c8d; text-align: center; padding: 2rem;">No bookings yet</p>';
        return;
    }
    
    recentList.innerHTML = recent.map(booking => `
        <div style="padding: 1rem; border-bottom: 1px solid #ecf0f1; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <strong style="color: var(--primary-color);">${booking.name}</strong>
                <p style="color: #7f8c8d; font-size: 0.9rem; margin-top: 0.3rem;">
                    <span class="branch-badge branch-${(booking.branch || 'AK GARDENS IBANDA').toLowerCase()}" style="font-size: 0.75rem; padding: 0.2rem 0.6rem;">${booking.branch || 'AK GARDENS IBANDA'}</span>
                    ${booking.checkin} to ${booking.checkout} • ${booking.roomType}
                </p>
            </div>
            <span class="status-badge status-${booking.status}">${booking.status}</span>
        </div>
    `).join('');
}

// Display bookings table
function displayBookingsTable(bookingsToShow) {
    const bookings = bookingsToShow || getBookings();
    const tbody = document.getElementById('bookingsTableBody');
    
    if (bookings.length === 0) {
        tbody.innerHTML = '<tr><td colspan="10" style="text-align: center; padding: 2rem; color: #7f8c8d;">No bookings found</td></tr>';
        return;
    }
    
    tbody.innerHTML = bookings.map(booking => `
        <tr>
            <td>#${booking.id}</td>
            <td><span class="branch-badge branch-${(booking.branch || 'AK GARDENS IBANDA').toLowerCase()}">${booking.branch || 'AK GARDENS IBANDA'}</span></td>
            <td>${booking.name}</td>
            <td>${booking.email}</td>
            <td>${booking.phone}</td>
            <td>${booking.checkin}</td>
            <td>${booking.checkout}</td>
            <td>${booking.roomType}</td>
            <td>${booking.guests}</td>
            <td><span class="status-badge status-${booking.status}">${booking.status}</span></td>
            <td>
                <button class="action-btn btn-view" onclick="viewBooking(${booking.id})" title="View Details">
                    <i class="fas fa-eye"></i>
                </button>
                ${booking.status === 'pending' ? `
                    <button class="action-btn btn-confirm" onclick="approveBooking(${booking.id})" title="Approve & Send Notifications">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="action-btn btn-cancel" onclick="rejectBooking(${booking.id})" title="Cancel & Send Notifications">
                        <i class="fas fa-times"></i>
                    </button>
                ` : `
                    <button class="action-btn btn-view" onclick="resendNotifications(${booking.id})" title="Resend Notifications" style="background: #9b59b6;">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                `}
            </td>
        </tr>
    `).join('');
}

// View booking details
function viewBooking(bookingId) {
    const bookings = getBookings();
    const booking = bookings.find(b => b.id === bookingId);
    
    if (!booking) return;
    
    const modal = document.getElementById('bookingModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="booking-detail">
            <strong>Booking ID:</strong>
            <p>#${booking.id}</p>
        </div>
        <div class="booking-detail">
            <strong>Hotel Branch:</strong>
            <p><span class="branch-badge branch-${(booking.branch || 'AK GARDENS IBANDA').toLowerCase()}">${booking.branch || 'AK GARDENS IBANDA'}</span></p>
        </div>
        <div class="booking-detail">
            <strong>Guest Name:</strong>
            <p>${booking.name}</p>
        </div>
        <div class="booking-detail">
            <strong>Email:</strong>
            <p>${booking.email}</p>
        </div>
        <div class="booking-detail">
            <strong>Phone:</strong>
            <p>${booking.phone}</p>
        </div>
        <div class="booking-detail">
            <strong>Check-in Date:</strong>
            <p>${booking.checkin}</p>
        </div>
        <div class="booking-detail">
            <strong>Check-out Date:</strong>
            <p>${booking.checkout}</p>
        </div>
        <div class="booking-detail">
            <strong>Room Type:</strong>
            <p>${booking.roomType}</p>
        </div>
        <div class="booking-detail">
            <strong>Number of Guests:</strong>
            <p>${booking.guests}</p>
        </div>
        <div class="booking-detail">
            <strong>Special Requests:</strong>
            <p>${booking.message || 'None'}</p>
        </div>
        <div class="booking-detail">
            <strong>Status:</strong>
            <p><span class="status-badge status-${booking.status}">${booking.status}</span></p>
        </div>
        <div class="booking-detail">
            <strong>Booking Date:</strong>
            <p>${new Date(booking.bookingDate).toLocaleString()}</p>
        </div>
    `;
    
    modal.classList.add('active');
}

// Close modal
function closeModal() {
    document.getElementById('bookingModal').classList.remove('active');
}

// Approve booking
function approveBooking(bookingId) {
    const bookings = getBookings();
    const booking = bookings.find(b => b.id === bookingId);
    
    if (!booking) return;
    
    // Show confirmation with booking details
    const confirmMsg = `Approve booking for ${booking.name}?\n\n` +
                      `This will:\n` +
                      `1. Open WhatsApp app to send confirmation to: ${booking.phone}\n` +
                      `2. Show email content to send to: ${booking.email}\n\n` +
                      `Click OK to proceed.`;
    
    if (!confirm(confirmMsg)) return;
    
    // Update booking status
    booking.status = 'confirmed';
    saveBookings(bookings);
    
    // Refresh display first
    loadBookings();
    updateStats();
    
    // Send WhatsApp notification immediately
    sendWhatsAppNotification(booking, 'approved');
    
    // Show email modal after WhatsApp opens
    setTimeout(() => {
        sendEmailNotification(booking, 'approved');
    }, 3000);
}

// Reject booking
function rejectBooking(bookingId) {
    const bookings = getBookings();
    const booking = bookings.find(b => b.id === bookingId);
    
    if (!booking) return;
    
    // Show confirmation with booking details
    const confirmMsg = `Cancel booking for ${booking.name}?\n\n` +
                      `This will:\n` +
                      `1. Open WhatsApp app to send cancellation to: ${booking.phone}\n` +
                      `2. Show email content to send to: ${booking.email}\n\n` +
                      `Click OK to proceed.`;
    
    if (!confirm(confirmMsg)) return;
    
    // Update booking status
    booking.status = 'cancelled';
    saveBookings(bookings);
    
    // Refresh display first
    loadBookings();
    updateStats();
    
    // Send WhatsApp notification immediately
    sendWhatsAppNotification(booking, 'rejected');
    
    // Show email modal after WhatsApp opens
    setTimeout(() => {
        sendEmailNotification(booking, 'rejected');
    }, 3000);
}

// Send WhatsApp notification
function sendWhatsAppNotification(booking, action) {
    let message = '';
    
    const branchName = booking.branch || 'AK GARDENS IBANDA';
    
    if (action === 'approved') {
        message = `✅ *BOOKING CONFIRMED* ✅\n\n` +
                  `Dear ${booking.name},\n\n` +
                  `Your booking at SMA Hotels ${branchName} has been APPROVED!\n\n` +
                  `📋 *Booking Details:*\n` +
                  `Booking ID: #${booking.id}\n` +
                  `Hotel Branch: ${branchName}\n` +
                  `Check-in: ${booking.checkin}\n` +
                  `Check-out: ${booking.checkout}\n` +
                  `Room Type: ${booking.roomType}\n` +
                  `Guests: ${booking.guests}\n\n` +
                  `We look forward to welcoming you!\n\n` +
                  `SMA Hotel ${branchName} 🏨`;
    } else {
        message = `❌ *BOOKING CANCELLED* ❌\n\n` +
                  `Dear ${booking.name},\n\n` +
                  `Unfortunately, your booking at SMA Hotels ${branchName} has been cancelled.\n\n` +
                  `📋 *Booking Details:*\n` +
                  `Booking ID: #${booking.id}\n` +
                  `Hotel Branch: ${branchName}\n` +
                  `Dates: ${booking.checkin} to ${booking.checkout}\n\n` +
                  `Please contact us for alternative dates or more information.\n\n` +
                  `SMA Hotel ${branchName} 🏨`;
    }
    
    // Clean phone number (remove spaces, dashes, etc.)
    const cleanPhone = booking.phone.replace(/[^\d+]/g, '');
    
    // Try WhatsApp desktop app first, then fallback to web
    const whatsappDesktopUrl = `whatsapp://send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
    const whatsappWebUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    
    // Try to open desktop app
    window.location.href = whatsappDesktopUrl;
    
    // Fallback to web after 2 seconds if desktop app doesn't open
    setTimeout(() => {
        const openWeb = confirm('WhatsApp desktop app not detected.\n\nClick OK to open WhatsApp Web instead.');
        if (openWeb) {
            window.open(whatsappWebUrl, '_blank');
        }
    }, 2000);
}

// Send Email notification - Show in modal for easy copying
function sendEmailNotification(booking, action) {
    let subject = '';
    let body = '';
    const branchName = booking.branch || 'AK GARDENS IBANDA';
    
    if (action === 'approved') {
        subject = `Booking Confirmed - SMA Hotels ${branchName} - Booking #${booking.id}`;
        body = `Dear ${booking.name},\n\n` +
               `Great news! Your booking at SMA Hotels ${branchName} has been CONFIRMED!\n\n` +
               `BOOKING DETAILS:\n` +
               `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
               `Booking ID: #${booking.id}\n` +
               `Hotel Branch: ${branchName}\n` +
               `Guest Name: ${booking.name}\n` +
               `Email: ${booking.email}\n` +
               `Phone: ${booking.phone}\n\n` +
               `CHECK-IN: ${formatDateForEmail(booking.checkin)}\n` +
               `CHECK-OUT: ${formatDateForEmail(booking.checkout)}\n\n` +
               `Room Type: ${booking.roomType}\n` +
               `Number of Guests: ${booking.guests}\n` +
               `${booking.message ? `Special Requests: ${booking.message}\n` : ''}\n` +
               `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
               `WHAT TO BRING:\n` +
               `• Valid ID/Passport\n` +
               `• Booking confirmation (this email)\n` +
               `• Payment method\n\n` +
               `CHECK-IN TIME: 2:00 PM\n` +
               `CHECK-OUT TIME: 11:00 AM\n\n` +
               `HOTEL AMENITIES:\n` +
               `• Swimming Pool\n` +
               `• Spa & Wellness Center\n` +
               `• Fitness Center\n` +
               `• Fine Dining Restaurant\n` +
               `• Free WiFi\n\n` +
               `If you have any questions or need to make changes to your booking, please contact us:\n` +
               `Phone: +256782884567\n` +
               `WhatsApp: +256782884567\n` +
               `Email: vkeelevin18@gmail.com\n\n` +
               `We look forward to welcoming you!\n\n` +
               `Best regards,\n` +
               `SMA Hotel ${branchName} Team\n` +
               `🏨 Your Home Away From Home`;
    } else {
        subject = `Booking Cancelled - SMA Hotels ${branchName} - Booking #${booking.id}`;
        body = `Dear ${booking.name},\n\n` +
               `We regret to inform you that your booking at SMA Hotels ${branchName} has been cancelled.\n\n` +
               `BOOKING DETAILS:\n` +
               `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
               `Booking ID: #${booking.id}\n` +
               `Hotel Branch: ${branchName}\n` +
               `Guest Name: ${booking.name}\n` +
               `Check-in Date: ${formatDateForEmail(booking.checkin)}\n` +
               `Check-out Date: ${formatDateForEmail(booking.checkout)}\n` +
               `Room Type: ${booking.roomType}\n` +
               `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
               `We apologize for any inconvenience this may cause.\n\n` +
               `If you would like to:\n` +
               `• Book alternative dates\n` +
               `• Discuss other room options\n` +
               `• Get more information\n\n` +
               `Please contact us:\n` +
               `Phone: +256782884567\n` +
               `WhatsApp: +256782884567\n` +
               `Email: vkeelevin18@gmail.com\n\n` +
               `We hope to serve you in the future.\n\n` +
               `Best regards,\n` +
               `SMA Hotels ${branchName} Team\n` +
               `🏨 Your Home Away From Home`;
    }
    
    // Show email modal with content
    showEmailModal(booking.email, subject, body);
}

// Format date for email
function formatDateForEmail(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Filter bookings
function filterBookings() {
    const searchTerm = document.getElementById('searchBookings').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    const branchFilter = document.getElementById('branchFilter').value;
    
    let bookings = getBookings();
    
    // Filter by branch
    if (branchFilter !== 'all') {
        bookings = bookings.filter(b => (b.branch || 'AK GARDENS IBANDA') === branchFilter);
    }
    
    // Filter by status
    if (statusFilter !== 'all') {
        bookings = bookings.filter(b => b.status === statusFilter);
    }
    
    // Filter by search term
    if (searchTerm) {
        bookings = bookings.filter(b => 
            b.name.toLowerCase().includes(searchTerm) ||
            b.email.toLowerCase().includes(searchTerm) ||
            b.phone.includes(searchTerm) ||
            b.id.toString().includes(searchTerm)
        );
    }
    
    displayBookingsTable(bookings);
}

// Display rooms
function displayRooms() {
    const roomsGrid = document.getElementById('roomsGrid');
    
    const rooms = [
        { type: 'Standard Room', total: 20, occupied: 12, price: '$100/night' },
        { type: 'Deluxe Room', total: 15, occupied: 8, price: '$150/night' },
        { type: 'Executive Suite', total: 10, occupied: 5, price: '$250/night' },
        { type: 'Presidential Suite', total: 5, occupied: 2, price: '$500/night' }
    ];
    
    roomsGrid.innerHTML = rooms.map(room => {
        const available = room.total - room.occupied;
        const isAvailable = available > 0;
        
        return `
            <div class="room-card">
                <div class="room-card-header">
                    <h3>${room.type}</h3>
                    <p>${room.price}</p>
                </div>
                <div class="room-card-body">
                    <p><strong>Total Rooms:</strong> ${room.total}</p>
                    <p><strong>Occupied:</strong> ${room.occupied}</p>
                    <p><strong>Available:</strong> ${available}</p>
                    <span class="room-status ${isAvailable ? 'room-available' : 'room-occupied'}">
                        ${isAvailable ? 'Available' : 'Fully Booked'}
                    </span>
                </div>
            </div>
        `;
    }).join('');
}

// Display guests
function displayGuests() {
    const bookings = getBookings();
    const guestsMap = new Map();
    
    // Aggregate guest data
    bookings.forEach(booking => {
        if (guestsMap.has(booking.email)) {
            const guest = guestsMap.get(booking.email);
            guest.totalBookings++;
            if (new Date(booking.checkin) > new Date(guest.lastVisit)) {
                guest.lastVisit = booking.checkin;
            }
        } else {
            guestsMap.set(booking.email, {
                name: booking.name,
                email: booking.email,
                phone: booking.phone,
                totalBookings: 1,
                lastVisit: booking.checkin
            });
        }
    });
    
    const guests = Array.from(guestsMap.values());
    const tbody = document.getElementById('guestsTableBody');
    
    if (guests.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 2rem; color: #7f8c8d;">No guests found</td></tr>';
        return;
    }
    
    tbody.innerHTML = guests.map(guest => `
        <tr>
            <td>${guest.name}</td>
            <td>${guest.email}</td>
            <td>${guest.phone}</td>
            <td>${guest.totalBookings}</td>
            <td>${guest.lastVisit}</td>
            <td>
                <button class="action-btn btn-view" onclick="contactGuest('${guest.phone}')">
                    <i class="fab fa-whatsapp"></i> Contact
                </button>
            </td>
        </tr>
    `).join('');
}

// Contact guest via WhatsApp
function contactGuest(phone) {
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    const whatsappUrl = `https://wa.me/${cleanPhone}`;
    window.open(whatsappUrl, '_blank');
}

// Resend notifications for confirmed/cancelled bookings
function resendNotifications(bookingId) {
    const bookings = getBookings();
    const booking = bookings.find(b => b.id === bookingId);
    
    if (!booking) return;
    
    const action = booking.status === 'confirmed' ? 'approved' : 'rejected';
    const actionText = booking.status === 'confirmed' ? 'confirmation' : 'cancellation';
    
    if (!confirm(`Resend ${actionText} notifications to ${booking.name}?`)) return;
    
    // Send WhatsApp notification
    sendWhatsAppNotification(booking, action);
    
    // Send Email notification
    setTimeout(() => {
        sendEmailNotification(booking, action);
    }, 500);
    
    alert(`${actionText.charAt(0).toUpperCase() + actionText.slice(1)} notifications are ready to send!`);
}

// Show email modal with content ready to copy
function showEmailModal(toEmail, subject, body) {
    const modal = document.getElementById('emailModal');
    const modalBody = document.getElementById('emailModalBody');
    
    modalBody.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <p style="color: #7f8c8d; margin-bottom: 1rem;">
                Copy the email details below and send via your Gmail account:
            </p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}" 
               target="_blank" 
               class="cta-button" 
               style="display: inline-block; padding: 0.8rem 1.5rem; background: var(--secondary-color); color: white; text-decoration: none; border-radius: 8px; margin-bottom: 1rem;">
                📧 Open Gmail & Send
            </a>
        </div>
        
        <div class="email-field">
            <label><strong>To:</strong></label>
            <div class="copy-field">
                <input type="text" value="${toEmail}" readonly id="emailTo">
                <button onclick="copyToClipboard('emailTo')" class="copy-btn">Copy</button>
            </div>
        </div>
        
        <div class="email-field">
            <label><strong>Subject:</strong></label>
            <div class="copy-field">
                <input type="text" value="${subject}" readonly id="emailSubject">
                <button onclick="copyToClipboard('emailSubject')" class="copy-btn">Copy</button>
            </div>
        </div>
        
        <div class="email-field">
            <label><strong>Message:</strong></label>
            <div class="copy-field">
                <textarea readonly id="emailBody" rows="15" style="width: 100%; padding: 0.8rem; border: 2px solid #ddd; border-radius: 8px; font-family: monospace; font-size: 0.9rem;">${body}</textarea>
            </div>
            <button onclick="copyToClipboard('emailBody')" class="copy-btn" style="width: 100%; margin-top: 0.5rem;">Copy Message</button>
        </div>
        
        <div style="margin-top: 1.5rem; padding: 1rem; background: #e8f5e9; border-radius: 8px; color: #2e7d32;">
            <strong>✓ Instructions:</strong>
            <ol style="margin: 0.5rem 0 0 1.2rem; line-height: 1.8;">
                <li>Click "Open Gmail & Send" button above (easiest way)</li>
                <li>OR copy each field and paste into your email client</li>
                <li>Send the email to the customer</li>
            </ol>
        </div>
    `;
    
    modal.classList.add('active');
}

// Copy to clipboard function
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    element.select();
    document.execCommand('copy');
    
    // Show feedback
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ Copied!';
    btn.style.background = '#2ecc71';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 2000);
}

// Close email modal
function closeEmailModal() {
    document.getElementById('emailModal').classList.remove('active');
}

// Make functions global
window.viewBooking = viewBooking;
window.approveBooking = approveBooking;
window.rejectBooking = rejectBooking;
window.contactGuest = contactGuest;
window.resendNotifications = resendNotifications;
window.copyToClipboard = copyToClipboard;
window.closeEmailModal = closeEmailModal;

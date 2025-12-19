# Testing the Booking & Notification System

## Step-by-Step Testing Guide

### Step 1: Create a Test Booking
1. Open `index.html` in your browser
2. Fill out the booking form with test data:
   - Name: Your Name
   - Email: Your actual email address
   - Phone: Your WhatsApp number (with country code, e.g., +256782884567)
   - Select dates and room type
3. Click "Submit Booking"
4. You should see: "Booking Request Submitted! Your booking ID is #[number]"

### Step 2: Login to Admin Dashboard
1. Open `admin.html` in your browser (same browser, same computer)
2. Login with:
   - Username: `admin`
   - Password: `admin123`
3. You should see your test booking in the "Overview" section

### Step 3: View the Booking
1. Click on "Bookings" in the sidebar
2. You should see your test booking with status "pending"
3. Click the 👁️ (eye) icon to view full details

### Step 4: Approve the Booking (This sends notifications!)
1. Click the ✓ (green checkmark) button
2. A confirmation dialog appears showing:
   - Customer name
   - Phone number (for WhatsApp)
   - Email address
3. Click "OK" to proceed

### Step 5: What Happens Next

**Immediately:**
- Booking status changes to "confirmed"
- WhatsApp opens in a new browser tab/window

**WhatsApp Window:**
- Goes to: `https://wa.me/[customer-phone]`
- Message is pre-filled with booking confirmation
- You'll see options to:
  - "Open WhatsApp" (if you have the app)
  - "Continue to WhatsApp Web" (if using browser)
- Click to open and then click "Send" to send the message

**After 1 second:**
- Your default email program opens
- Windows will show "Choose an app" if you have multiple email accounts
- Select your email account (Outlook, Gmail, Thunderbird, etc.)

**Email Window:**
- "To" field: Customer's email address
- "Subject": Booking Confirmed - SMA Hotel - Booking #[ID]
- "Body": Full confirmation message with all details
- Click "Send" to send the email

### Step 6: Verify Notifications Sent
- Check WhatsApp: Message should be sent to customer
- Check Email: Email should be in your "Sent" folder
- Customer receives both notifications!

## Important Notes

### For WhatsApp to Work:
- Customer phone number MUST include country code (e.g., +256782884567)
- You need WhatsApp installed OR use WhatsApp Web
- Browser may ask permission to open WhatsApp

### For Email to Work:
- You need a default email client set up (Outlook, Thunderbird, etc.)
- OR Gmail desktop app installed
- Windows will prompt you to choose which email account to use

### If Email Doesn't Open:
1. **Check Default Apps:**
   - Windows Settings → Apps → Default Apps → Email
   - Set your preferred email client

2. **Alternative for Gmail Users:**
   - Install Gmail desktop app
   - OR manually copy the email content and send via Gmail web

3. **Manual Fallback:**
   - If email doesn't open, you'll see an alert
   - Copy booking details from the booking view
   - Manually compose email to customer

## Testing Rejection

1. Create another test booking
2. In admin dashboard, click the ✗ (red X) button
3. Same process as approval, but sends cancellation messages

## Testing Resend Notifications

1. For already confirmed/cancelled bookings
2. Click the 📧 (paper plane) icon
3. Resends both WhatsApp and Email notifications

## Troubleshooting

**"Bookings not showing in admin?"**
- Use the same browser for both pages
- Both pages must be on the same computer
- Clear browser cache and try again

**"WhatsApp opens but no message?"**
- Check phone number format: +256782884567 (no spaces)
- Try clicking "Continue to WhatsApp Web"

**"Email doesn't open?"**
- Set default email client in Windows Settings
- Try using Outlook or Thunderbird
- Check browser popup blocker settings

**"Can't send to my own number?"**
- WhatsApp doesn't allow sending to yourself
- Use a friend's number for testing
- Or just verify the message appears correctly

## Production Checklist

Before going live:
- [ ] Change admin password in `admin-script.js`
- [ ] Update hotel contact info in all files
- [ ] Test with real customer data
- [ ] Verify WhatsApp business number is correct
- [ ] Test email sending from your business email
- [ ] Set up proper web hosting (not just local files)
- [ ] Consider adding SMS backup notifications
- [ ] Add payment processing if needed

---

**Questions?** Check SETUP-GUIDE.md for more details!

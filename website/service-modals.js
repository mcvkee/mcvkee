// Service data for each hotel branch
const serviceData = {
    accommodation: {
        title: '🏨 Luxury Accommodation - Rooms & Prices',
        content: `
            <div class="rooms-grid">
                <div class="room-detail-card">
                    <div class="room-image room-standard"></div>
                    <div class="room-header">
                        <h3>Standard Room</h3>
                        <div class="room-price">UGX 150,000 <span>/night</span></div>
                    </div>
                    <div class="room-features">
                        <p><i class="fas fa-users"></i> Capacity: 2 Adults</p>
                        <p><i class="fas fa-bed"></i> 1 Queen Bed</p>
                        <p><i class="fas fa-wifi"></i> Free WiFi</p>
                        <p><i class="fas fa-tv"></i> Flat Screen TV</p>
                        <p><i class="fas fa-snowflake"></i> Air Conditioning</p>
                        <p><i class="fas fa-bath"></i> Private Bathroom</p>
                    </div>
                </div>

                <div class="room-detail-card featured">
                    <div class="room-image room-deluxe"></div>
                    <div class="featured-badge">Most Popular</div>
                    <div class="room-header">
                        <h3>Deluxe Room</h3>
                        <div class="room-price">UGX 250,000 <span>/night</span></div>
                    </div>
                    <div class="room-features">
                        <p><i class="fas fa-users"></i> Capacity: 2 Adults + 1 Child</p>
                        <p><i class="fas fa-bed"></i> 1 King Bed</p>
                        <p><i class="fas fa-wifi"></i> Free WiFi</p>
                        <p><i class="fas fa-tv"></i> Smart TV</p>
                        <p><i class="fas fa-snowflake"></i> Air Conditioning</p>
                        <p><i class="fas fa-bath"></i> Luxury Bathroom with Bathtub</p>
                        <p><i class="fas fa-coffee"></i> Mini Bar</p>
                        <p><i class="fas fa-eye"></i> City/Lake View</p>
                    </div>
                </div>

                <div class="room-detail-card">
                    <div class="room-image room-twin"></div>
                    <div class="room-header">
                        <h3>Executive Suite</h3>
                        <div class="room-price">UGX 400,000 <span>/night</span></div>
                    </div>
                    <div class="room-features">
                        <p><i class="fas fa-users"></i> Capacity: 4 Adults</p>
                        <p><i class="fas fa-bed"></i> 1 King Bed + 1 Queen Bed</p>
                        <p><i class="fas fa-wifi"></i> Free WiFi</p>
                        <p><i class="fas fa-tv"></i> Smart TV (2)</p>
                        <p><i class="fas fa-snowflake"></i> Air Conditioning</p>
                        <p><i class="fas fa-bath"></i> 2 Luxury Bathrooms</p>
                        <p><i class="fas fa-couch"></i> Separate Living Room</p>
                        <p><i class="fas fa-coffee"></i> Full Mini Bar</p>
                        <p><i class="fas fa-concierge-bell"></i> 24/7 Room Service</p>
                    </div>
                </div>

                <div class="room-detail-card premium">
                    <div class="featured-badge" style="background: #FFD700;">Premium</div>
                    <div class="room-header">
                        <h3>Presidential Suite</h3>
                        <div class="room-price">UGX 800,000 <span>/night</span></div>
                    </div>
                    <div class="room-features">
                        <p><i class="fas fa-users"></i> Capacity: 6 Adults</p>
                        <p><i class="fas fa-bed"></i> 2 King Beds + 2 Single Beds</p>
                        <p><i class="fas fa-wifi"></i> Premium WiFi</p>
                        <p><i class="fas fa-tv"></i> Smart TV (3)</p>
                        <p><i class="fas fa-snowflake"></i> Climate Control</p>
                        <p><i class="fas fa-bath"></i> 3 Luxury Bathrooms + Jacuzzi</p>
                        <p><i class="fas fa-couch"></i> Large Living & Dining Area</p>
                        <p><i class="fas fa-utensils"></i> Private Kitchen</p>
                        <p><i class="fas fa-wine-glass"></i> Premium Bar</p>
                        <p><i class="fas fa-concierge-bell"></i> Personal Butler Service</p>
                    </div>
                </div>
            </div>
            <div class="booking-note">
                <i class="fas fa-info-circle"></i>
                <p>All prices are per night. Breakfast included. Check-in: 2:00 PM | Check-out: 11:00 AM</p>
            </div>
        `
    },
    swimming: {
        title: '🏊 Pool & Swimming - Prices',
        content: `
            <div class="pricing-grid">
                <div class="price-card">
                    <div class="price-header">
                        <i class="fas fa-child"></i>
                        <h3>Children (5-12 years)</h3>
                    </div>
                    <div class="price-body">
                        <div class="price-amount">UGX 10,000</div>
                        <p class="price-duration">Per Day</p>
                        <ul class="price-features">
                            <li><i class="fas fa-check"></i> Full day access</li>
                            <li><i class="fas fa-check"></i> Swimming lessons available</li>
                            <li><i class="fas fa-check"></i> Life jacket provided</li>
                            <li><i class="fas fa-check"></i> Kids pool area</li>
                        </ul>
                    </div>
                </div>

                <div class="price-card featured">
                    <div class="featured-badge">Popular</div>
                    <div class="price-header">
                        <i class="fas fa-user"></i>
                        <h3>Adults (13+ years)</h3>
                    </div>
                    <div class="price-body">
                        <div class="price-amount">UGX 20,000</div>
                        <p class="price-duration">Per Day</p>
                        <ul class="price-features">
                            <li><i class="fas fa-check"></i> Full day access</li>
                            <li><i class="fas fa-check"></i> Olympic-sized pool</li>
                            <li><i class="fas fa-check"></i> Poolside bar access</li>
                            <li><i class="fas fa-check"></i> Lounge chairs included</li>
                            <li><i class="fas fa-check"></i> Towels provided</li>
                        </ul>
                    </div>
                </div>

                <div class="price-card">
                    <div class="price-header">
                        <i class="fas fa-users"></i>
                        <h3>Family Package</h3>
                    </div>
                    <div class="price-body">
                        <div class="price-amount">UGX 50,000</div>
                        <p class="price-duration">Per Day (2 Adults + 2 Children)</p>
                        <ul class="price-features">
                            <li><i class="fas fa-check"></i> Full day access for 4</li>
                            <li><i class="fas fa-check"></i> All pool areas</li>
                            <li><i class="fas fa-check"></i> Poolside snacks included</li>
                            <li><i class="fas fa-check"></i> Private cabana (subject to availability)</li>
                            <li><i class="fas fa-check"></i> Save UGX 10,000!</li>
                        </ul>
                    </div>
                </div>

                <div class="price-card premium">
                    <div class="featured-badge" style="background: #FFD700;">VIP</div>
                    <div class="price-header">
                        <i class="fas fa-crown"></i>
                        <h3>VIP Pool Access</h3>
                    </div>
                    <div class="price-body">
                        <div class="price-amount">UGX 100,000</div>
                        <p class="price-duration">Per Day (Up to 6 people)</p>
                        <ul class="price-features">
                            <li><i class="fas fa-check"></i> Private pool section</li>
                            <li><i class="fas fa-check"></i> Dedicated waiter service</li>
                            <li><i class="fas fa-check"></i> Complimentary drinks & snacks</li>
                            <li><i class="fas fa-check"></i> Premium cabana</li>
                            <li><i class="fas fa-check"></i> Massage service available</li>
                            <li><i class="fas fa-check"></i> Photography session</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="booking-note">
                <i class="fas fa-info-circle"></i>
                <p>Pool hours: 6:00 AM - 8:00 PM daily. Children under 5 swim free with adult supervision. Swimming attire required.</p>
            </div>
        `
    },
    dining: {
        title: '🍽️ Fine Dining - Menu & Prices',
        content: `
            <div class="menu-tabs">
                <button class="menu-tab active" onclick="showMenuCategory('food')">Food Menu</button>
                <button class="menu-tab" onclick="showMenuCategory('drinks')">Drinks</button>
                <button class="menu-tab" onclick="showMenuCategory('juice')">Fresh Juices</button>
            </div>

            <div id="food-menu" class="menu-category active">
                <h3 class="menu-section-title">🍖 Main Courses</h3>
                <div class="menu-items">
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Grilled Tilapia</h4>
                            <p>Fresh tilapia grilled to perfection, served with vegetables and chips</p>
                        </div>
                        <div class="menu-item-price">UGX 35,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Beef Steak</h4>
                            <p>Premium beef steak with mushroom sauce, mashed potatoes & salad</p>
                        </div>
                        <div class="menu-item-price">UGX 45,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Chicken Curry</h4>
                            <p>Tender chicken in rich curry sauce, served with rice or chapati</p>
                        </div>
                        <div class="menu-item-price">UGX 30,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Vegetarian Pasta</h4>
                            <p>Fresh pasta with mixed vegetables in creamy sauce</p>
                        </div>
                        <div class="menu-item-price">UGX 25,000</div>
                    </div>
                </div>

                <h3 class="menu-section-title">🍕 Fast Food & Snacks</h3>
                <div class="menu-items">
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Beef Burger</h4>
                            <p>Juicy beef patty with cheese, lettuce, tomato & fries</p>
                        </div>
                        <div class="menu-item-price">UGX 20,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Club Sandwich</h4>
                            <p>Triple-decker with chicken, bacon, egg & vegetables</p>
                        </div>
                        <div class="menu-item-price">UGX 18,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Samosas (6 pieces)</h4>
                            <p>Crispy pastry filled with spiced meat or vegetables</p>
                        </div>
                        <div class="menu-item-price">UGX 10,000</div>
                    </div>
                </div>

                <h3 class="menu-section-title">🍰 Desserts</h3>
                <div class="menu-items">
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Chocolate Cake</h4>
                            <p>Rich chocolate cake with vanilla ice cream</p>
                        </div>
                        <div class="menu-item-price">UGX 15,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Fresh Fruit Salad</h4>
                            <p>Seasonal fruits with honey and mint</p>
                        </div>
                        <div class="menu-item-price">UGX 12,000</div>
                    </div>
                </div>
            </div>

            <div id="drinks-menu" class="menu-category">
                <h3 class="menu-section-title">🍺 Beers & Alcoholic Drinks</h3>
                <div class="menu-items">
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Local Beer (Nile Special, Bell)</h4>
                            <p>500ml bottle</p>
                        </div>
                        <div class="menu-item-price">UGX 6,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Imported Beer (Heineken, Corona)</h4>
                            <p>330ml bottle</p>
                        </div>
                        <div class="menu-item-price">UGX 10,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Red/White Wine</h4>
                            <p>Glass</p>
                        </div>
                        <div class="menu-item-price">UGX 15,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Cocktails (Mojito, Margarita, etc.)</h4>
                            <p>Classic cocktails</p>
                        </div>
                        <div class="menu-item-price">UGX 20,000</div>
                    </div>
                </div>

                <h3 class="menu-section-title">☕ Hot Beverages</h3>
                <div class="menu-items">
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Coffee (Espresso, Cappuccino, Latte)</h4>
                            <p>Freshly brewed</p>
                        </div>
                        <div class="menu-item-price">UGX 8,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Tea (Black, Green, Herbal)</h4>
                            <p>Premium selection</p>
                        </div>
                        <div class="menu-item-price">UGX 5,000</div>
                    </div>
                </div>

                <h3 class="menu-section-title">🥤 Soft Drinks</h3>
                <div class="menu-items">
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Soda (Coke, Fanta, Sprite)</h4>
                            <p>500ml bottle</p>
                        </div>
                        <div class="menu-item-price">UGX 3,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Bottled Water</h4>
                            <p>500ml</p>
                        </div>
                        <div class="menu-item-price">UGX 2,000</div>
                    </div>
                </div>
            </div>

            <div id="juice-menu" class="menu-category">
                <h3 class="menu-section-title">🍹 Fresh Juices & Smoothies</h3>
                <div class="menu-items">
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Fresh Orange Juice</h4>
                            <p>Freshly squeezed oranges</p>
                        </div>
                        <div class="menu-item-price">UGX 8,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Pineapple Juice</h4>
                            <p>Fresh pineapple blend</p>
                        </div>
                        <div class="menu-item-price">UGX 8,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Passion Fruit Juice</h4>
                            <p>Sweet and tangy</p>
                        </div>
                        <div class="menu-item-price">UGX 7,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Watermelon Juice</h4>
                            <p>Refreshing and hydrating</p>
                        </div>
                        <div class="menu-item-price">UGX 7,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Mango Smoothie</h4>
                            <p>Creamy mango with yogurt</p>
                        </div>
                        <div class="menu-item-price">UGX 10,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Mixed Fruit Smoothie</h4>
                            <p>Banana, strawberry, mango & yogurt</p>
                        </div>
                        <div class="menu-item-price">UGX 12,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Green Detox Juice</h4>
                            <p>Spinach, apple, cucumber & lemon</p>
                        </div>
                        <div class="menu-item-price">UGX 15,000</div>
                    </div>
                </div>
            </div>

            <div class="booking-note">
                <i class="fas fa-info-circle"></i>
                <p>Restaurant hours: 6:00 AM - 11:00 PM. Room service available 24/7. Special dietary requirements can be accommodated.</p>
            </div>
        `
    },
    bar: {
        title: '🍸 AK Gardens Bar - Drinks & Entertainment',
        content: `
            <div class="bar-intro">
                <h3 style="color: #2c3e50; margin-bottom: 1rem;">Welcome to AK Gardens Bar</h3>
                <p style="color: #7f8c8d; margin-bottom: 2rem; line-height: 1.6;">
                    Experience AK GARDENS IBANDA's finest rooftop bar with stunning city views, premium cocktails, and live entertainment. 
                    Our expert bartenders craft signature drinks using the finest spirits and fresh ingredients.
                </p>
            </div>

            <div class="menu-tabs">
                <button class="menu-tab active" onclick="showMenuCategory('cocktails')">Signature Cocktails</button>
                <button class="menu-tab" onclick="showMenuCategory('beers')">Beers & Spirits</button>
                <button class="menu-tab" onclick="showMenuCategory('bar-snacks')">Bar Snacks</button>
            </div>

            <div id="cocktails-menu" class="menu-category active">
                <h3 class="menu-section-title">🍹 Signature Cocktails</h3>
                <div class="menu-items">
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>AK Gardens Special</h4>
                            <p>Our signature blend with premium vodka, passion fruit, and mint</p>
                        </div>
                        <div class="menu-item-price">UGX 25,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>AK GARDENS IBANDA Sunset</h4>
                            <p>Rum, mango, lime, and ginger beer with a beautiful sunset presentation</p>
                        </div>
                        <div class="menu-item-price">UGX 22,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Nile Breeze</h4>
                            <p>Gin, cucumber, elderflower, and tonic with fresh herbs</p>
                        </div>
                        <div class="menu-item-price">UGX 20,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Tropical SMA</h4>
                            <p>Coconut rum, pineapple, coconut cream, and lime</p>
                        </div>
                        <div class="menu-item-price">UGX 18,000</div>
                    </div>
                </div>

                <h3 class="menu-section-title">🥃 Classic Cocktails</h3>
                <div class="menu-items">
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Mojito</h4>
                            <p>White rum, mint, lime, sugar, and soda water</p>
                        </div>
                        <div class="menu-item-price">UGX 15,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Margarita</h4>
                            <p>Tequila, triple sec, lime juice, salt rim</p>
                        </div>
                        <div class="menu-item-price">UGX 16,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Whiskey Sour</h4>
                            <p>Bourbon whiskey, lemon juice, simple syrup, egg white</p>
                        </div>
                        <div class="menu-item-price">UGX 18,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Cosmopolitan</h4>
                            <p>Vodka, cranberry juice, lime juice, triple sec</p>
                        </div>
                        <div class="menu-item-price">UGX 17,000</div>
                    </div>
                </div>
            </div>

            <div id="beers-menu" class="menu-category">
                <h3 class="menu-section-title">🍺 Local Beers</h3>
                <div class="menu-items">
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Nile Special</h4>
                            <p>Uganda's premium lager beer - 500ml bottle</p>
                        </div>
                        <div class="menu-item-price">UGX 8,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Bell Lager</h4>
                            <p>Classic Ugandan beer - 500ml bottle</p>
                        </div>
                        <div class="menu-item-price">UGX 7,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Club Pilsner</h4>
                            <p>Premium pilsner beer - 500ml bottle</p>
                        </div>
                        <div class="menu-item-price">UGX 8,500</div>
                    </div>
                </div>

                <h3 class="menu-section-title">🍻 Imported Beers</h3>
                <div class="menu-items">
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Heineken</h4>
                            <p>Dutch premium lager - 330ml bottle</p>
                        </div>
                        <div class="menu-item-price">UGX 12,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Corona Extra</h4>
                            <p>Mexican beer with lime - 330ml bottle</p>
                        </div>
                        <div class="menu-item-price">UGX 15,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Stella Artois</h4>
                            <p>Belgian premium lager - 330ml bottle</p>
                        </div>
                        <div class="menu-item-price">UGX 14,000</div>
                    </div>
                </div>

                <h3 class="menu-section-title">🥃 Premium Spirits</h3>
                <div class="menu-items">
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Johnnie Walker Black Label</h4>
                            <p>Premium Scotch whisky - Single shot</p>
                        </div>
                        <div class="menu-item-price">UGX 20,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Grey Goose Vodka</h4>
                            <p>Premium French vodka - Single shot</p>
                        </div>
                        <div class="menu-item-price">UGX 18,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Hennessy VS</h4>
                            <p>Premium cognac - Single shot</p>
                        </div>
                        <div class="menu-item-price">UGX 25,000</div>
                    </div>
                </div>
            </div>

            <div id="bar-snacks-menu" class="menu-category">
                <h3 class="menu-section-title">🥜 Bar Snacks & Appetizers</h3>
                <div class="menu-items">
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Mixed Nuts</h4>
                            <p>Premium roasted nuts selection</p>
                        </div>
                        <div class="menu-item-price">UGX 8,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Chicken Wings (6 pieces)</h4>
                            <p>Spicy buffalo wings with blue cheese dip</p>
                        </div>
                        <div class="menu-item-price">UGX 18,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Cheese & Crackers Platter</h4>
                            <p>Selection of local and imported cheeses</p>
                        </div>
                        <div class="menu-item-price">UGX 22,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Beef Skewers (4 pieces)</h4>
                            <p>Grilled beef with spicy peanut sauce</p>
                        </div>
                        <div class="menu-item-price">UGX 20,000</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>Fish & Chips</h4>
                            <p>Crispy tilapia with seasoned potato chips</p>
                        </div>
                        <div class="menu-item-price">UGX 25,000</div>
                    </div>
                </div>
            </div>

            <div class="bar-features">
                <h3 style="color: #2c3e50; margin: 2rem 0 1rem 0;">🎵 Entertainment & Features</h3>
                <div class="feature-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px;">
                        <h4 style="color: #56ab2f; margin-bottom: 0.5rem;">Live Music</h4>
                        <p style="font-size: 0.9rem; color: #7f8c8d;">Friday & Saturday nights</p>
                    </div>
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px;">
                        <h4 style="color: #56ab2f; margin-bottom: 0.5rem;">Happy Hour</h4>
                        <p style="font-size: 0.9rem; color: #7f8c8d;">5:00 PM - 7:00 PM daily</p>
                    </div>
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px;">
                        <h4 style="color: #56ab2f; margin-bottom: 0.5rem;">City Views</h4>
                        <p style="font-size: 0.9rem; color: #7f8c8d;">Rooftop terrace seating</p>
                    </div>
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px;">
                        <h4 style="color: #56ab2f; margin-bottom: 0.5rem;">Private Events</h4>
                        <p style="font-size: 0.9rem; color: #7f8c8d;">Available for booking</p>
                    </div>
                </div>
            </div>

            <div class="booking-note">
                <i class="fas fa-info-circle"></i>
                <p>Bar hours: 4:00 PM - 2:00 AM daily. Happy Hour: 5:00 PM - 7:00 PM (25% off all drinks). Live music every Friday & Saturday from 8:00 PM. Must be 18+ to consume alcohol.</p>
            </div>
        `
    }
};

// Open service modal
function openServiceModal(serviceType) {
    const modal = document.getElementById('serviceModal');
    const title = document.getElementById('serviceModalTitle');
    const body = document.getElementById('serviceModalBody');

    const data = serviceData[serviceType];
    title.innerHTML = data.title;
    body.innerHTML = data.content;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close service modal
function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Show menu category
function showMenuCategory(category) {
    // Hide all categories
    document.querySelectorAll('.menu-category').forEach(cat => {
        cat.classList.remove('active');
    });

    // Remove active from all tabs
    document.querySelectorAll('.menu-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected category
    document.getElementById(category + '-menu').classList.add('active');

    // Add active to clicked tab
    event.target.classList.add('active');
}

// Close modal when clicking outside
window.addEventListener('click', function (event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        closeServiceModal();
    }
});

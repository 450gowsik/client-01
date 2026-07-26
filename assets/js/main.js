/**
 * Soundariya Health Care & Beauty Parlour
 * Main JavaScript — Navigation, Scroll Effects, Animations, Booking Form
 */

document.addEventListener('DOMContentLoaded', () => {
    // ============ NAVBAR SCROLL EFFECT ============
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Navbar shadow on scroll
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button
        if (scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Back to top click
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============ 8K 5-IMAGE ROTATING SLIDER ============
    function initSlider(sliderId, dotsContainerId = null, intervalMs = 3500) {
        const slider = document.getElementById(sliderId);
        if (!slider) return;
        
        const slides = slider.querySelectorAll('.slider-slide');
        const dots = dotsContainerId ? document.querySelectorAll(`#${dotsContainerId} .dot`) : [];
        if (!slides.length) return;
        
        let currentIndex = 0;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
            
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
            currentIndex = index;
        }
        
        // Auto play
        let timer = setInterval(() => {
            const nextIndex = (currentIndex + 1) % slides.length;
            showSlide(nextIndex);
        }, intervalMs);
        
        // Dot clicks
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                clearInterval(timer);
                showSlide(i);
                timer = setInterval(() => {
                    const nextIndex = (currentIndex + 1) % slides.length;
                    showSlide(nextIndex);
                }, intervalMs);
            });
        });
    }
    
    initSlider('hero-slider', 'hero-dots', 3500);
    initSlider('about-slider', null, 4000);
    
    // ============ MOBILE MENU TOGGLE ============
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
            navbarToggle.classList.toggle('active');
        });
        
        // Close menu on link click
        navbarMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navbarMenu.classList.remove('active');
                navbarToggle.classList.remove('active');
            });
        });
    }
    
    // ============ SMOOTH SCROLL FOR ANCHOR LINKS ============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = navbar ? navbar.offsetHeight : 70;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile App Bar Active State Handling
    const mobileAppTabs = document.querySelectorAll('.mobile-app-tab');
    mobileAppTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            mobileAppTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
    
    // ============ SCROLL REVEAL ANIMATIONS ============
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger children animations
                const children = entry.target.querySelectorAll('.service-card, .feature-card, .testimonial-card, .gallery-item');
                children.forEach((child, index) => {
                    child.style.animationDelay = `${index * 0.1}s`;
                    child.classList.add('animate-in');
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('.services-grid, .features-grid, .testimonials-marquee-wrapper, .gallery-grid, .booking-content, .visit-content').forEach(el => {
        observer.observe(el);
    });
    
    // ============ BOOKING FORM ============
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        // Set minimum date to today
        const dateInput = document.getElementById('booking-date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
            dateInput.value = today;
        }
        
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = document.getElementById('booking-submit');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Booking...';
            submitBtn.disabled = true;
            
            // Collect form data
            const formData = {
                name: document.getElementById('booking-name').value,
                phone: document.getElementById('booking-phone').value,
                service: document.getElementById('booking-service').value,
                preferred_slot: document.getElementById('booking-preferred').value,
                date: document.getElementById('booking-date').value,
                message: document.getElementById('booking-message').value
            };
            
            // Construct WhatsApp message
            const waMessage = `Hello Soundariya Beauty Parlour,%0A%0AI would like to book an appointment:%0A• *Name:* ${encodeURIComponent(formData.name)}%0A• *Phone:* ${encodeURIComponent(formData.phone)}%0A• *Service:* ${encodeURIComponent(formData.service)}%0A• *Date:* ${encodeURIComponent(formData.date)}%0A• *Time Slot:* ${encodeURIComponent(formData.preferred_slot || 'Flexible')}%0A• *Message:* ${encodeURIComponent(formData.message || 'N/A')}`;
            
            // Redirect to WhatsApp number 93455 69097
            window.open(`https://wa.me/919345569097?text=${waMessage}`, '_blank');
            
            showNotification('✅ Opening WhatsApp to send your booking request!', 'success');
            bookingForm.reset();
            if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    }
    
    // ============ NOTIFICATION SYSTEM ============
    function showNotification(message, type = 'success') {
        // Remove existing notifications
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button onclick="this.parentElement.remove()" style="background:none;border:none;color:inherit;font-size:1.2rem;cursor:pointer;margin-left:12px;">&times;</button>
        `;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '90px',
            right: '24px',
            maxWidth: '420px',
            padding: '16px 20px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: '10000',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.9rem',
            fontWeight: '500',
            animation: 'fadeInUp 0.4s ease-out',
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)'
        });
        
        if (type === 'success') {
            notification.style.background = '#e8f5e9';
            notification.style.color = '#1a5c2e';
            notification.style.border = '1px solid #a5d6a7';
        } else {
            notification.style.background = '#fce4ec';
            notification.style.color = '#c62828';
            notification.style.border = '1px solid #ef9a9a';
        }
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.4s ease-out forwards';
            setTimeout(() => notification.remove(), 400);
        }, 5000);
    }
    
    // ============ SERVICE CARD HOVER EFFECT ============
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // ============ ACTIVE NAV LINK ON SCROLL ============
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                document.querySelectorAll('.navbar-menu a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // ============ GALLERY & PHOTO LIGHTBOX ============
    const photoTargets = document.querySelectorAll('.gallery-item, .service-card-img img, .hero-image-frame img');
    photoTargets.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const img = this.tagName === 'IMG' ? this : this.querySelector('img');
            if (!img) return;
            
            // Remove existing lightbox if any
            const existing = document.getElementById('photo-lightbox');
            if (existing) existing.remove();
            
            const lightbox = document.createElement('div');
            lightbox.id = 'photo-lightbox';
            lightbox.style.cssText = `
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,0.92);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 100000;
                padding: 20px;
                animation: fadeIn 0.25s ease;
                cursor: pointer;
            `;
            
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '<i class="fas fa-times"></i>';
            closeBtn.style.cssText = `
                position: absolute;
                top: 20px;
                right: 20px;
                background: rgba(255,255,255,0.2);
                color: #fff;
                border: none;
                width: 44px;
                height: 44px;
                border-radius: 50%;
                font-size: 1.4rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            `;
            
            const lightboxImg = document.createElement('img');
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt || 'Soundariya Beauty Parlour';
            lightboxImg.style.cssText = `
                max-width: 92vw;
                max-height: 82vh;
                object-fit: contain;
                border-radius: 16px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.6);
                border: 2px solid rgba(224, 188, 104, 0.4);
                animation: scaleIn 0.25s ease;
            `;

            const caption = document.createElement('p');
            caption.innerText = img.alt || 'Soundariya Health Care & Beauty Parlour';
            caption.style.cssText = `
                color: #e0bc68;
                margin-top: 14px;
                font-size: 0.95rem;
                font-family: var(--font-body);
                text-align: center;
            `;
            
            lightbox.appendChild(closeBtn);
            lightbox.appendChild(lightboxImg);
            lightbox.appendChild(caption);
            document.body.appendChild(lightbox);
            
            lightbox.addEventListener('click', () => {
                lightbox.style.animation = 'fadeOut 0.2s ease forwards';
                setTimeout(() => lightbox.remove(), 200);
            });
        });
    });

    // ============ CALL ACTION MODAL (Dual Phone Numbers) ============
    const callBtns = document.querySelectorAll('.call-float, a[href^="tel:"]');
    callBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // On mobile devices, allow direct call if single tel link clicked, but provide chooser modal if float button clicked
            if (this.classList.contains('call-float')) {
                e.preventDefault();
                
                const existingModal = document.getElementById('call-modal');
                if (existingModal) existingModal.remove();
                
                const modal = document.createElement('div');
                modal.id = 'call-modal';
                modal.style.cssText = `
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.7);
                    backdrop-filter: blur(8px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 100000;
                    padding: 20px;
                    animation: fadeIn 0.25s ease;
                `;
                
                modal.innerHTML = `
                    <div style="background: #123524; border: 1px solid rgba(224, 188, 104, 0.4); border-radius: 24px; padding: 26px 20px; width: 100%; max-width: 340px; text-align: center; color: #fff; box-shadow: 0 20px 40px rgba(0,0,0,0.5); position: relative; animation: scaleIn 0.25s ease;">
                        <button id="close-call-modal" style="position: absolute; top: 14px; right: 14px; background: none; border: none; color: rgba(255,255,255,0.7); font-size: 1.2rem; cursor: pointer;"><i class="fas fa-times"></i></button>
                        <div style="width: 54px; height: 54px; background: linear-gradient(135deg, #e91e63, #ff4081); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; font-size: 1.4rem;"><i class="fas fa-phone-alt"></i></div>
                        <h3 style="font-family: var(--font-display); color: #e0bc68; margin-bottom: 6px; font-size: 1.25rem;">Call Soundariya Parlour</h3>
                        <p style="font-size: 0.82rem; color: rgba(255,255,255,0.8); margin-bottom: 20px;">Tap any number below to connect directly:</p>
                        <a href="tel:+919345569097" style="display: flex; align-items: center; justify-content: center; gap: 10px; background: rgba(255,255,255,0.12); color: #fff; text-decoration: none; padding: 14px; border-radius: 14px; margin-bottom: 10px; font-weight: 600; font-size: 1rem; border: 1px solid rgba(255,255,255,0.1);"><i class="fas fa-phone-volume" style="color: #e0bc68;"></i> 93455 69097</a>
                        <a href="tel:+919087261808" style="display: flex; align-items: center; justify-content: center; gap: 10px; background: rgba(255,255,255,0.12); color: #fff; text-decoration: none; padding: 14px; border-radius: 14px; font-weight: 600; font-size: 1rem; border: 1px solid rgba(255,255,255,0.1);"><i class="fas fa-phone-volume" style="color: #e0bc68;"></i> 90872 61808</a>
                    </div>
                `;
                
                document.body.appendChild(modal);
                
                modal.querySelector('#close-call-modal').addEventListener('click', () => modal.remove());
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) modal.remove();
                });
            }
        });
    });
    
    // Add animations keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            to { opacity: 0; transform: scale(0.95); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes scaleIn {
            from { transform: scale(0.85); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    console.log('✨ Soundariya Health Care & Beauty Parlour — Full features active!');
});

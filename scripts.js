// Ensure DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get referral ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const refId = urlParams.get('ref') || 'Unknown';
    const referralMessage = document.getElementById('referralMessage');

    // Display referral message if refId exists
    if (refId) {
        referralMessage.innerHTML = `You were referred by <strong>${refId}</strong>. Download the NovaWallet App and claim your eligible amount of Nova Token! Your claim is based on your BNB Blockchain transactions.`;
        referralMessage.style.display = 'block';
    }

    // Countdown Timer
    const launchDate = new Date('July 7, 2025 00:00:00').getTime();
    const countdownTimer = document.getElementById('countdownTimer');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            countdownTimer.innerHTML = 'Token & DEX Launched!';
        }
    }

    setInterval(updateCountdown, 1000);

    // Popup for iOS Coming Soon
    const iosButton = document.getElementById('iosButton');
    const popup = document.getElementById('comingSoonPopup');
    const closePopup = document.getElementById('closePopup');

    iosButton.addEventListener('click', (e) => {
        e.preventDefault();
        popup.style.display = 'flex';
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close popup when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
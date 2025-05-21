// Get referral ID from URL
const urlParams = new URLSearchParams(window.location.search);
const refId = urlParams.get('ref') || 'Unknown';
const referralMessage = document.getElementById('referralMessage');
referralMessage.innerHTML = `You were referred by <strong>${refId}</strong>. Download the PulseWallet App and claim your eligible amount of Pulse Token! Your claim is based on your Core Blockchain transactions.`;

// Countdown Timer
const launchDate = new Date('July 1, 2025 00:00:00').getTime();
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
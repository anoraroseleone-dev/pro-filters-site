// Modal open/close
const proBtn = document.getElementById('proBtn');
const proModal = document.getElementById('proModal');
const closeModal = document.getElementById('closeModal');

proBtn.addEventListener('click', () => {
  proModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  proModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target === proModal) proModal.style.display = 'none';
});

// Unlock Pro features
function enableProFeatures() {
  alert("🎉 Pro features unlocked! Enjoy Izzy’s advanced filters.");
  // Add your filter logic here
}

// PayPal subscription button
paypal.Buttons({
  style: {
    shape: 'rect',
    color: 'blue',
    layout: 'vertical',
    label: 'subscribe'
  },
  createSubscription: function(data, actions) {
    return actions.subscription.create({
      'plan_id': 'P-XXXXXXXXXX' // Replace with your PayPal Plan ID
    });
  },
  onApprove: function(data, actions) {
    enableProFeatures();
  }
}).render('#paypal-button-container');

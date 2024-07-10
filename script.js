var spotlightOverlay = document.getElementById('spotlightOverlay');
var toggleBtn = document.getElementById('toggleBtn');
var colorPicker = document.getElementById('colorPicker');
var sizeRange = document.getElementById('sizeRange');
var intensityRange = document.getElementById('intensityRange');

toggleBtn.addEventListener('change', function() {
  spotlightOverlay.style.opacity = this.checked ? '1' : '0';
});

document.addEventListener('mousemove', function(e) {
  if (toggleBtn.checked) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    spotlightOverlay.style.transition = '0.1s ease-out'; // Smooth transition
    spotlightOverlay.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${colorPicker.value} 0%, rgba(0,0,0,${intensityRange.value}) ${sizeRange.value}px)`;
    spotlightOverlay.style.opacity = '1'; // Make the spotlight visible when mouse moves

    // Reset transition after a short delay to prevent it from affecting subsequent updates
    setTimeout(function() {
      spotlightOverlay.style.transition = 'none';
    }, 100);
  }
});

// Function to update spotlight when control values change
function updateSpotlight() {
  if (toggleBtn.checked) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    
    spotlightOverlay.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${colorPicker.value} 0%, rgba(0,0,0,${intensityRange.value}) ${sizeRange.value}px)`;
  }
}

// Event listeners for control value changes
colorPicker.addEventListener('input', updateSpotlight);
sizeRange.addEventListener('input', updateSpotlight);
intensityRange.addEventListener('input', updateSpotlight);

document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('image-container');
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    const responsiveImage = document.getElementById('responsive-image');
  
    const originalWidth = 6201; // Replace with your image's actual width
    const originalHeight = 3898; // Replace with your image's actual height
  
    const items = [
      { id: 1, x: 2689, y: 3521 },
      { id: 2, x: 2872, y: 3525 },
      { id: 3, x: 2828, y: 3494 },
      { id: 4, x:2827, y: 3442 },
      // ... other items with their coordinates
      { id: 190, x: 1600, y: 300 }
    ];
  
    const circleElements = {};
    const labelElements = {};
    
    function updatePositions() {
      const currentWidth = responsiveImage.getBoundingClientRect().width;
      const scaleFactor = currentWidth / originalWidth;
  
      items.forEach(item => {
        const circle = circleElements[item.id];
        const label = labelElements[item.id];
        if (circle && label && !circle.classList.contains('hidden')) {
          const newX = item.x * scaleFactor - 10; // centerX = x - (width / 2)
          const newY = item.y * scaleFactor - 10; // centerY = y - (height / 2)
  
          circle.style.left = `${newX}px`;
          circle.style.top = `${newY}px`;
  
          label.style.left = `${newX}px`;
          label.style.top = `${newY + 20}px`;
        }
      });
    }
  
    items.forEach(item => {
      const circle = document.createElement('div');
      const label = document.createElement('div');
  
      circle.classList.add('blink-circle', 'hidden');
      label.classList.add('number-label', 'hidden');
  
      label.textContent = item.id;
  
      circleElements[item.id] = circle;
      labelElements[item.id] = label;
  
      imageContainer.appendChild(circle);
      imageContainer.appendChild(label);
    });
  
    function searchAndBlink() {
      const searchTerm = parseInt(searchBar.value.trim(), 10);
      const circle = circleElements[searchTerm];
      const label = labelElements[searchTerm];
  
      Object.values(circleElements).forEach(el => el.classList.add('hidden'));
      Object.values(labelElements).forEach(el => el.classList.add('hidden'));
  
      if (circle && label) {
        circle.classList.remove('hidden');
        label.classList.remove('hidden');
        circle.classList.add('blink');
  
        circle.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        alert('Item not found!');
      }
    }
  
    searchButton.addEventListener('click', searchAndBlink);
    searchBar.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        searchAndBlink();
      }
    });
  
    window.addEventListener('resize', updatePositions);
     // Wait for the image to load before calculating positions
  responsiveImage.onload = function() {
    createCirclesAndLabels();
    updatePositions();}

    responsiveImage.addEventListener('load', updatePositions);
    updatePositions(); // Call once to ensure initial positions are set

    // Check if the image is already loaded (e.g., if it's cached)
  if (responsiveImage.complete) {
    createCirclesAndLabels();
    updatePositions();
  }
  });
  
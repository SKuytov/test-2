// Define the coordinates for the doors in a JS object or array
// Here is a mockup example for the first few IDs
const doorCoordinates = {
  1: { building: 'building1', x: 97.22, y: 19.94 },
  2: { building: 'building1', x: 93.41, y: 34.41 },
  3: { building: 'building1', x: 76.95, y: 44.64 },
  4: { building: 'building1', x: 79.26, y: 40.82 },
  5: { building: 'building1', x: 69.37, y: 44.59 },
  6: { building: 'building1', x: 56.07, y: 24.58 },
  7: { building: 'building1', x: 53.50, y: 44.88 },
  8: { building: 'building1', x: 38.76, y: 6.42 },
  9: { building: 'building1', x: 28.88, y: 19.40 },
  10: { building: 'building1', x: 29.49, y: 27.43 },
  11: { building: 'building1', x: 33.41, y: 32.07 },
  12: { building: 'building1', x: 30.36, y: 37.51 },
  13: { building: 'building1', x: 29.28, y: 39.26 },
  14: { building: 'building1', x: 28.51, y: 41.36 },
  15: { building: 'building1', x: 26.20, y: 41.52 },
  16: { building: 'building1', x: 31.70, y: 40.26 },
  17: { building: 'building1', x: 31.97, y: 44.62 },
  18: { building: 'building1', x: 34.31, y: 44.34 },
  19: { building: 'building1', x: 13.94, y: 44.34 },
  20: { building: 'building1', x: 5.96, y: 40.13 },
  21: { building: 'building1', x: 5.77, y: 34.20 },

    // ... Add all your coordinates here
  };
  
  document.getElementById('locateBtn').addEventListener('click', function() {
    const doorId = document.getElementById('doorInput').value;
    const coordinates = doorCoordinates[doorId];
    
    if (coordinates) {
      // Hide all maps
      document.querySelectorAll('.map').forEach(map => map.style.display = 'none');
  
      // Show the correct map
      document.getElementById(coordinates.building).style.display = 'block';
  
      // Position the blinking dot
      const dot = document.getElementById('blinking-dot');
      dot.style.left = coordinates.x + '%';
      dot.style.top = coordinates.y + '%';
      dot.style.display = 'block';
    } else {
      alert('Door ID not found.');
    }
  });
  
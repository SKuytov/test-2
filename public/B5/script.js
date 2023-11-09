// Define the coordinates for the doors in a JS object or array
// Here is a mockup example for the first few IDs
const doorCoordinates = {
  1: { building: 'building1', x: 7.48, y: 15.14 },
    2: { building: 'building1', x: 7.48, y: 19.91 },
    3: { building: 'building1', x: 6.12, y: 24.25 },
    4: { building: 'building1', x: 8.44, y: 90.62 },
    5: { building: 'building1', x: 54.71, y: 90.46 },
    6: { building: 'building1', x: 58.03, y: 64.45 },
    7: { building: 'building1', x: 59.79, y: 68.43 },
    8: { building: 'building1', x: 58.18, y: 58.65 },
    9: { building: 'building1', x: 54.58, y: 47.88 },
    10: { building: 'building1', x: 48.12, y: 11.60 },

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
  
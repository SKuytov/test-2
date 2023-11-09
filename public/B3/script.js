// Define the coordinates for the doors in a JS object or array
// Here is a mockup example for the first few IDs
const doorCoordinates = {
  1: { building: 'building1', x: 32.46, y: 16.94 },
  2: { building: 'building1', x: 36.81, y: 15.01 },
  3: { building: 'building1', x: 42.73, y: 8.42 },
  4: { building: 'building1', x: 3.48, y: 46.11 },
  5: { building: 'building1', x: 18.23, y: 83.10 },
  6: { building: 'building1', x: 30.05, y: 84.43 },
  7: { building: 'building1', x: 31.10, y: 86.90 },
  8: { building: 'building1', x: 32.68, y: 86.97 },
  9: { building: 'building1', x: 65.48, y: 50.34 },
  10: { building: 'building1', x: 64.21, y: 54.91 },
  11: { building: 'building1', x: 86.16, y: 81.48 },
  12: { building: 'building1', x: 89.01, y: 81.56 },
  13: { building: 'building1', x: 89.72, y: 57.86 },
  14: { building: 'building1', x: 83.64, y: 42.93 },
  15: { building: 'building1', x: 78.58, y: 43.08 },
  16: { building: 'building1', x: 75.82, y: 82.64 },
  17: { building: 'building1', x: 69.85, y: 84.90 },
  18: { building: 'building1', x: 91.32, y: 38.13 },
  19: { building: 'building1', x: 94.27, y: 43.77 },
  20: { building: 'building1', x: 80.58, y: 24.43 },
  21: { building: 'building1', x: 86.09, y: 27.51 },
  22: { building: 'building1', x: 86.71, y: 25.10 },
  23: { building: 'building1', x: 87.98, y: 22.20 },
  24: { building: 'building1', x: 87.95, y: 17.32 },
  25: { building: 'building1', x: 89.54, y: 18.91 },
  26: { building: 'building1', x: 90.59, y: 18.50 },
  27: { building: 'building1', x: 86.74, y: 12.71 },
  28: { building: 'building1', x: 88.82, y: 30.84 },
  29: { building: 'building1', x: 89.22, y: 33.07 },
  30: { building: 'building1', x: 58.44, y: 43.26 }

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
  
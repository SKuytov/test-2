// Define the coordinates for the doors in a JS object or array
// Here is a mockup example for the first few IDs
const doorCoordinates = {
    1: { building: 'building1', x: 42.4, y: 89 },
    2: { building: 'building1', x: 45.3, y: 89.5 },
    3: { building: 'building1', x: 44.75, y: 88.46 },
    4: { building: 'building1', x: 44.6 ,y: 87.0},
    5: { building: 'building1', x: 46.91, y: 88.31  },
    6: { building: 'building1', x: 52.94, y: 88.56 },
    7: { building: 'building1', x: 47.92, y: 85.95 },
    8: { building: 'building1', x: 48.65, y: 85.49 },
    9: { building: 'building1', x: 50.08, y: 86.18 },
    10: { building: 'building1', x: 51.42 ,y: 85.41 },
    // rest coordinates here
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
  

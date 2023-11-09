// Define the coordinates for the doors in a JS object or array
// Here is a mockup example for the first few IDs
const doorCoordinates = {
  1: { building: 'building1', x: 11.56, y: 24.97 },
    2: { building: 'building1', x: 47.44, y: 10.60 },
    3: { building: 'building1', x: 46.34, y: 7.55 },
    4: { building: 'building1', x: 47.44, y: 14.58 },
    5: { building: 'building1', x: 40.02, y: 14.40 },
    6: { building: 'building1', x: 40.20, y: 10.42 },
    7: { building: 'building1', x: 42.91, y: 10.04 },
    8: { building: 'building1', x: 43.94, y: 7.55 },
    9: { building: 'building1', x: 53.11, y: 13.27 },
    10: { building: 'building1', x: 59.82, y: 15.58 },
    11: { building: 'building1', x: 67.34, y: 14.96 },
    12: { building: 'building1', x: 67.10, y: 10.42 },
    13: { building: 'building1', x: 64.19, y: 10.45 },
    14: { building: 'building1', x: 63.34, y: 7.68 },
    15: { building: 'building1', x: 61.07, y: 11.88 },
    16: { building: 'building1', x: 61.11, y: 7.83 },
    17: { building: 'building1', x: 11.54, y: 31.51 },
    18: { building: 'building1', x: 4.56, y: 51.21 },
    19: { building: 'building1', x: 4.33, y: 56.19 },
    20: { building: 'building1', x: 6.98, y: 61.81 },
    21: { building: 'building1', x: 4.59, y: 65.60 },
    22: { building: 'building1', x: 2.46, y: 69.63 },
    23: { building: 'building1', x: 23.88, y: 30.92 },
    24: { building: 'building1', x: 28.86, y: 31.05 },
    25: { building: 'building1', x: 52.63, y: 31.23 },
    26: { building: 'building1', x: 55.45, y: 34.18 },
    27: { building: 'building1', x: 23.86, y: 61.65 },
    28: { building: 'building1', x: 29.09, y: 61.94 },
    29: { building: 'building1', x: 39.33, y: 61.83 },
    30: { building: 'building1', x: 58.71, y: 59.58 },
    31: { building: 'building1', x: 53.92, y: 61.94 },
    32: { building: 'building1', x: 5.06, y: 63.65 },
    33: { building: 'building1', x: 67.98, y: 62.37 },
    34: { building: 'building1', x: 68.02, y: 67.25 },
    35: { building: 'building1', x: 55.94, y: 92.85 },
    36: { building: 'building1', x: 52.08, y: 92.87 },
    37: { building: 'building1', x: 30.39, y: 95.75 },
    38: { building: 'building1', x: 25.44, y: 96.29 },
    39: { building: 'building1', x: 9.77, y: 92.85 },
    40: { building: 'building1', x: 29.10, y: 76.64 },
    41: { building: 'building1', x: 26.22, y: 70.74 },
    42: { building: 'building1', x: 20.68, y: 63.32 },
    43: { building: 'building1', x: 67.58, y: 82.28 },
    44: { building: 'building1', x: 70.74, y: 83.74 },
    45: { building: 'building1', x: 74.79, y: 85.20 },
    46: { building: 'building1', x: 83.58, y: 27.82 },
    47: { building: 'building1', x: 89.75, y: 27.92 },
    48: { building: 'building1', x: 96.87, y: 29.84 },
    49: { building: 'building1', x: 77.29, y: 48.85 },

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
  
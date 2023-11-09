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
    11: { building: 'building1', x: 48.97, y: 84.59 },
    12: { building: 'building1', x: 49.82, y: 84.41 },
    13: { building: 'building1', x: 50.74, y: 84.51 },
    14: { building: 'building1', x: 48.57, y: 80.59 },
    15: { building: 'building1', x: 53.81, y: 87.23 },
    16: { building: 'building1', x: 53.89, y: 80.46 },
    17: { building: 'building1', x: 55.86, y: 87.21 },
    18: { building: 'building1', x: 58.66, y: 88.10 },
    19: { building: 'building1', x: 58.68, y: 86.05 },
    20: { building: 'building1', x: 60.66, y: 80.02 },
    21: { building: 'building1', x: 63.05, y: 86.20 },
    22: { building: 'building1', x: 63.55, y: 88.15 },
    23: { building: 'building1', x: 63.40, y: 92.54 },
    24: { building: 'building1', x: 66.64, y: 86.20 },
    25: { building: 'building1', x: 66.63, y: 88.21 },
    26: { building: 'building1', x: 68.24, y: 91.21 },
    27: { building: 'building1', x: 68.19, y: 92.98 },
    28: { building: 'building1', x: 70.84, y: 92.62 },
    29: { building: 'building1', x: 70.24, y: 88.00 },
    30: { building: 'building1', x: 69.68, y: 79.92 },
    31: { building: 'building1', x: 67.66, y: 80.02 },
    32: { building: 'building1', x: 71.47, y: 87.08 },
    33: { building: 'building1', x: 75.05, y: 89.54 },
    34: { building: 'building1', x: 75.55, y: 80.95 },
    35: { building: 'building1', x: 54.81, y: 92.70 },
    36: { building: 'building1', x: 19.81, y: 80.05 },
    37: { building: 'building1', x: 14.01, y: 7.16 },
    38: { building: 'building1', x: 16.69, y: 80.54 },
    39: { building: 'building1', x: 20.80, y: 74.17 },
    40: { building: 'building1', x: 21.36, y: 68.79 },
    41: { building: 'building1', x: 8.99, y: 17.91 },
    42: { building: 'building1', x: 6.69, y: 20.71 },
    43: { building: 'building1', x: 21.93, y: 17.35 },
    44: { building: 'building1', x: 33.96, y: 11.91 },
    45: { building: 'building1', x: 30.72, y: 8.88 },
    46: { "building": "building1", "x": 37.60, "y": 20.04 },
    47: { "building": "building1", "x": 41.29, "y": 24.43 },
    48: { "building": "building1", "x": 41.34, "y": 15.35 },
    49: { "building": "building1", "x": 40.04, "y": 11.86 },
    50: { "building": "building1", "x": 64.95, "y": 15.96 },
    51: { "building": "building1", "x": 64.29, "y": 11.65 },
    52: { "building": "building1", "x": 66.32, "y": 23.48 },
    53: { "building": "building1", "x": 66.18, "y": 29.38 },
    54: { "building": "building1", "x": 66.32, "y": 32.13 },
    55: { "building": "building1", "x": 65.11, "y": 36.97 },
    56: { "building": "building1", "x": 66.40, "y": 42.52 },
    57: { "building": "building1", "x": 66.42, "y": 47.90 },
    58: { "building": "building1", "x": 43.16, "y": 36.79 },
    59: { "building": "building1", "x": 35.36, "y": 41.98 },
    60: { "building": "building1", "x": 30.23, "y": 42.05 },
    61: { "building": "building1", "x": 24.47, "y": 59.96 },
    62: { "building": "building1", "x": 43.15, "y": 57.86 },
    63: { "building": "building1", "x": 35.00, "y": 78.35 },
    64: { "building": "building1", "x": 54.84, "y": 78.41 },
    65: { "building": "building1", "x": 66.39, "y": 62.22 },
    66: { "building": "building1", "x": 70.55, "y": 78.71 },
    67: { "building": "building1", "x": 54.42, "y": 19.20 },
    68: { "building": "building1", "x": 79.27, "y": 12.17 },
    69: { "building": "building1", "x": 76.47, "y": 8.86 },
    70: { "building": "building1", "x": 82.19, "y": 8.73 },
    71: { "building": "building1", "x": 92.93, "y": 25.46 },
    72: { "building": "building1", "x": 78.24, "y": 77.76 },
    73: { "building": "building1", "x": 89.08, "y": 78.23 },
    74: { "building": "building1", "x": 86.79, "y": 76.23 },
    75: { "building": "building1", "x": 83.43, "y": 78.46 },
    76: { "building": "building1", "x": 84.67, "y": 12.65 },
    77: { "building": "building1", "x": 49.76, "y": 8.09 },

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
  
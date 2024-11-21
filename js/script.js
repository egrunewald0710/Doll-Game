// Get all draggable items and the doll area
const items = document.querySelectorAll('.item');
const doll = document.getElementById('doll');

// Set up dragstart event for items
items.forEach(item => {
  item.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('src', e.target.src); // Store the source of the image being dragged
    e.target.style.opacity = '0.5';  // Visual feedback while dragging
  });

  item.addEventListener('dragend', (e) => {
    e.target.style.opacity = '1';  // Restore original opacity
  });
});

// Allow dropping onto the doll
doll.addEventListener('dragover', (e) => {
  e.preventDefault();  // This is necessary to allow the drop action
});

// Handle the drop event
doll.addEventListener('drop', (e) => {
  e.preventDefault();  // Prevent the default behavior

  const src = e.dataTransfer.getData('src');  // Get the image source of the dragged item

  // Create a new image element for the dropped item
  const newItem = document.createElement('img');
  newItem.src = src;
  newItem.style.position = 'absolute';
  newItem.style.width = '80px';
  newItem.style.height = '80px';
  newItem.style.top = `${e.offsetY - 40}px`;  // Position the image at the drop location
  newItem.style.left = `${e.offsetX - 40}px`;

  // Append the new item to the doll area
  doll.appendChild(newItem);
});

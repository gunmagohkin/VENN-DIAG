// Get elements
const circles = document.querySelectorAll('.circle');
const infoBox = document.getElementById('info-box');

// Data for each section of the Venn Diagram
const vennData = {
  'Design': 'Design ensures that the product is manufacturable, including shape, material, and tooling.',
  'Analysis': 'Analysis involves testing and verifying the design to ensure that it meets criteria.',
  'Quality': 'Quality is about meeting the required standards, dimensional accuracy, defect prevention, and durability.'
};

// Add hover event listeners
circles.forEach(circle => {
  circle.addEventListener('mouseenter', () => {
    const title = circle.getAttribute('data-title');
    
    // Store the original circle content in a data attribute
    circle.setAttribute('data-original-text', circle.textContent);
    
    // Update the circle's text with the relevant data on hover
    circle.textContent = vennData[title];
    
    // Change the text color and reduce font size to prevent overlap
    circle.style.color = 'black';
    circle.style.fontSize = '14px';  // Adjust font size for better fit

    infoBox.style.visibility = 'visible';
  });

  circle.addEventListener('mouseleave', () => {
    // Restore the original circle content and font size
    circle.textContent = circle.getAttribute('data-original-text');
    circle.style.color = 'white';
    circle.style.fontSize = '18px';  // Restore original font size
    
    // Hide the infoBox
    infoBox.style.visibility = 'hidden';
  });
});

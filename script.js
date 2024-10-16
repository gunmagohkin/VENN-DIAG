// Get elements
const circles = document.querySelectorAll('.circle');
const infoBox = document.getElementById('info-box');

// Data for each section of the Venn Diagram
const vennData = {
  'Design': 'Design ensures that the part is functional and manufacturable, including shape, material, and tooling.',
  'Analysis': 'Analysis involves testing and verifying the design to ensure it meets criteria.',
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
    
    // Change the text color to black for better readability
    circle.style.color = 'black';

    infoBox.style.visibility = 'visible';
  });

  circle.addEventListener('mouseleave', () => {
    // Restore the original circle content
    circle.textContent = circle.getAttribute('data-original-text');
    
    // Restore the original text color (white)
    circle.style.color = 'white';
    
    // Hide the infoBox
    infoBox.style.visibility = 'hidden';
  });
});

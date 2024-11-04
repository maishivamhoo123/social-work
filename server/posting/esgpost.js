// Function to create and append iframes, videos, or images to the container
function renderESGItems(data) {
  const container = document.querySelector('#editable-container');
  
  // Clear the container
  container.innerHTML = '';
  
  let isRight = true; // To alternate alignment

  data.forEach(item => {
    let element;

    if (item.type === 'image') {
      // Create an image element
      element = document.createElement('img');
      element.src = item.url;
      element.width = 365;
      element.height = 365;
    } else {
      // Create an iframe element
      element = document.createElement('iframe');
      element.src = item.link;
      element.width = 365;
      element.height = 365;
      element.frameBorder = 0;
      element.allowFullscreen = true;
    }

    // Alternate classes for alignment
    if (isRight) {
      element.className = 'align-right';
    } else {
      element.className = 'align-left';
    }
    
    isRight = !isRight; // Toggle position

    container.appendChild(element);
  });
}

// Fetch and render data
fetch('http://localhost:8080/add-esg')
  .then(response => response.json())
  .then(data => {
    renderESGItems(data);
  })
  .catch(error => {
    console.error('Error fetching ESG data:', error);
  });

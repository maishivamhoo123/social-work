  // script.js

  // Function to create and append iframes or videos to the articles-container
  function renderVlogItems(data) {
    const container = document.querySelector('#vlogsadd');
  
    // Clear the container before adding new elements
    container.innerHTML = '';
  
    data.forEach(item => {
      let element;
  
      // if (item.type === 'video') {
      //   // Create a video element
      //   element = document.createElement('video');
      //   element.className = 'it cl2';
      //   element.width = 400;
      //   element.height = 400;
      //   element.src = item.url;
      //   element.setAttribute('controls', true);
      //   element.setAttribute('autoplay', true);
      // } else if (item.type === 'iframe') {
        // Create an iframe element
        element = document.createElement('iframe');
        element.className = 'it cl2';
        element.width = 365;
        element.height = 365;
        element.src = item.link;
        element.title = "YouTube video player";
        element.frameBorder = 0;
        element.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        element.referrerPolicy = "strict-origin-when-cross-origin";
        element.allowFullscreen = true;
      // }
  
      // Append the element to the container
      container.appendChild(element);
    });
  }
  
  // Fetch data from the /add-esg endpoint and render it
  fetch('http://localhost:8080/add-project')
    .then(response => response.json())
    .then(data => {
        renderVlogItems(data);
      console.log(data); // Log the data for debugging
    })
    .catch(error => {
      console.error('Error fetching ESG data:', error);
    });
  
document.addEventListener("DOMContentLoaded", function() {
    fetch("http://localhost:8080/add-esgdocument")
        .then(response => response.json())
        .then(data => {
            // Check if there are any documents
            if (data.length > 0) {
                const container = document.getElementById("esg-content");

                // Loop through each document and create the necessary HTML elements
                data.forEach(esgDocument => {
                    // Create a wrapper div for each document
                    const wrapper = document.createElement("div");
                    wrapper.className = "row g-5";

                    // Create the first column (text content)
                    const col1 = document.createElement("div");
                    col1.className = "col-lg-8 wow fadeInUp";
                    col1.setAttribute("data-wow-delay", "0.1s");

                    const headingDiv = document.createElement("div");
                    headingDiv.className = "mb-4";

                    const heading = document.createElement("h1");
                    heading.className = "mb-3";
                    heading.textContent = esgDocument.heading;

                    const para1 = document.createElement("p");
                    para1.className = "mb-4";
                    para1.textContent = esgDocument.paraesg1;

                    headingDiv.appendChild(heading);
                    headingDiv.appendChild(para1);

                    const para2 = document.createElement("h5");
                    para2.className = "mb-3";
                    para2.textContent = esgDocument.paraesg2;

                    const initiativesList = document.createElement("ul");

                    const li1 = document.createElement("li");
                    li1.textContent = esgDocument.li1;
                    initiativesList.appendChild(li1);

                    const li2 = document.createElement("li");
                    li2.textContent = esgDocument.li2;
                    initiativesList.appendChild(li2);

                    const li3 = document.createElement("li");
                    li3.textContent = esgDocument.li3;
                    initiativesList.appendChild(li3);

                    col1.appendChild(headingDiv);
                    col1.appendChild(para2);
                    col1.appendChild(initiativesList);

                    // Create the second column (image)
                    const col2 = document.createElement("div");
                    col2.className = "col-lg-4 wow fadeInUp";
                    col2.setAttribute("data-wow-delay", "0.3s");

                    const img = document.createElement("img");
                    img.className = "img-fluid mb-4";
                    
                    // Fallback to a default image if esgDocument.Image1 is not set
                    img.src = esgDocument.Image1 || "img/vecteezy_mother-earth-globe-day-world-environment-day-vector_7943503-1.jpg";
                    
                    col2.appendChild(img);
                    
                    // Append both columns to the wrapper div
                    wrapper.appendChild(col1);
                    wrapper.appendChild(col2);

                    // Append the wrapper div to the container
                    container.appendChild(wrapper);
                });
            }
            console.log(data);
        })
        .catch(error => {
            console.error("Error fetching ESG documents:", error);
        });
});

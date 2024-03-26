document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // Display JSON data
    document.getElementById('jsonDisplay').innerText = JSON.stringify(
      formDataObject,
      null,
      2
    );
  });

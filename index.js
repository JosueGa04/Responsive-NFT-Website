fetch("http://localhost:3300/tools/1")
    .then(response => console.log(response))
    .catch(error => console.error('Error:', error));

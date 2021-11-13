// Add your code here
const submitData = (name, email) => {
    const formData = { //This is the data that will be sent into the db
        name: "Steve",
        email: "steve@steve.com",
    };
  
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(formData), //converting the object into JSON to send into db
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json(); //Converts the Response body from JSON to POJO
      })
      .then( (object) => { document.body.innerHTML = object.id; }) //append the ID that the JSON server created for the data, to the DOM
    .catch(function (error){
        let message = 'Unauthorized Access';
        alert("Bad things! Ragnarők!"); //Alert when an error occurs
        document.body.innerHTML = error.message; //append the error message to the DOM
    });
}
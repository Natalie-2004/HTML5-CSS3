// "https://swapi.dev/api/people/1/"

const req = new XMLHttpRequest();

// run this if no error occur
req.onload = function () {
    console.log("LOADED");
    // convert to js format so that we could only request for certain item i.e height, weight etc
    const data = JSON.parse(this.responseText);
    console.log(data);
}

req.onerror = function() {
    console.log("ERROR");
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1/");
req.send();
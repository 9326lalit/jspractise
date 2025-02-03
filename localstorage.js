// LocalStorage object allows you to save key/value pairs in the browser.

// How to add the data from localStorage Key Value pair
localStorage.setItem("jsContent","addingData");

// How to get the data from localStorage
localStorage.getItem("jscontent");

// How to remove the data from localStorage
localStorage.removeItem("jscontent");

// we can only store data in String format only, but if you
// want to store complex data like array , object etc
// then first convert in json.stringfy 


// JSON.stringify --> converts a JS object into a JSON string.
// useful when you want to send data to a server or store it in a text file,as
// JSON is a common data interchange format.
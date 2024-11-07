const rootNode = document.getElementById("root");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
   function delayedMeassage(message, callback) {
    setTimeout(() => {
        msg = `${message}`
        callback(msg);
    }, 5000)
   }

   function displayMessage(message) {
        rootNode.innerHTML = `${message}`;
   }

delayedMeassage("Callback executed after 5 seconds", displayMessage);

});
    

btn.addEventListener("click", addFetch);
    
    function addFetch() {
        setTimeout (() => {
            const obj = fetch('http://dummyjson.com/posts');
            obj.then(result => result.text())
            .then(data => {rootNode.innerHTML = data;
            })
        }, 6000);
        
    }
    
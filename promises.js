const rootNode = document.getElementById("root");
const btn = document.getElementById("btn");

btn.addEventListener("click", promises) 

function promises() {

    const promise = new Promise(function(resolve, reject) {

        let promiseObj = fetch('http://dummyjson.com/posts')

        rootNode.innerHTML = "Loading..."

        if(promiseObj) {
            resolve(fetch('http://dummyjson.com/posts'));
        }
        else {
            reject(rootNode.innerHTML = "Operation timed Out");
        }
    })
    

    promise.then(result => result.text())
    .then(data => {
        rootNode.innerHTML = data;
    })

    promise.catch(err => err);
}
const rootNode = document.getElementById("root");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {

    async function fetchData() {
        try {
        rootNode.innerHTML = "Loading..."
        const response = await fetch('http://dummyjson.com/posts');
        rootNode.innerHTML = "Loading..."
        const data = await response.text();
        
        rootNode.innerHTML = data;

        } catch (error) {
            rootNode.innerHTML = "Error!"
        }
    }

    fetchData();
})
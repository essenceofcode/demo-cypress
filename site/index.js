const searchButton = document.querySelector('#search-button');

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const displayResults = (data) => {

    const resultsElement = document.querySelector('#results');

    const list = document.createElement("ul");

    data.forEach(value => {

        const listItem = document.createElement("li");
        listItem.innerHTML = value.name;  
        list.appendChild(listItem);             
    });

    resultsElement.appendChild(list);
};

searchButton.addEventListener('click', (e) => {

    sleep(5000).then(() => {
        const searchInput = document.querySelector('#search-input').value;

        fetch(`api/customers?searchInput=${searchInput}`).then(response => {
            
            if (response.ok){
                response.json().then(data =>  displayResults(data));
            } else {
                document.querySelector('#results').innerHTML = 'Fetch failed!';
            }
        }).catch(err => {
    
            document.querySelector('#error').innerHTML = err;
        });    
    });
});

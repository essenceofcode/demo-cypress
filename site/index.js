const searchButton = document.querySelector('#search-button');

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

searchButton.addEventListener('click', (e) => {

    sleep(5000).then(() => {
        const searchInput = document.querySelector('#search-input').value;

        fetch(`customers?searchInput=${searchInput}`).then(response => {
            
            if (response.ok){
                document.querySelector('#results').innerHTML = response.json;
            } else {
                document.querySelector('#error').innerHTML = 'Fetch failed!';
            }
        }).catch(err => {
    
            document.querySelector('#error').innerHTML = err;
        });    
    });
});

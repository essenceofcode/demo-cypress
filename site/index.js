const searchButton = document.querySelector('#search-button');

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const displayResults = (data) => {

    const resultsElement = document.querySelector('#results');
    
    data.forEach(value => {

        const listDiv = document.createElement("div");
        listDiv.setAttribute('class', 'list-group-item list-group-item-action');

        const div = document.createElement("div");
        div.setAttribute('class', 'd-flex w-100 justify-content-between');
                
        const header = document.createElement("h5");
        header.setAttribute('class', '<h5 class="mb-1">List group item heading</h5>');
        header.innerHTML = value.name;        
        div.appendChild(header);

        const small = document.createElement("small");        
        small.innerHTML = value.title;
        div.appendChild(small);

        const description = document.createElement("p");
        description.setAttribute('class', 'mb-1');
        description.innerHTML = value.description;
        
        
        const email = document.createElement("small");
        const anchor = document.createElement("a");
        anchor.href = `mailto:${value.email}`;
        anchor.innerHTML = value.email;
        email.appendChild(anchor);        

        listDiv.appendChild(div);
        listDiv.appendChild(description);
        listDiv.appendChild(email);

        resultsElement.appendChild(listDiv);                             
    });
};

searchButton.addEventListener('click', (e) => {

    const spinner = document.querySelector('#spinner');
    spinner.setAttribute('style', 'display:inline-block');

    sleep(4500).then(() => {
        const searchInput = document.querySelector('#search-input').value;

        fetch(`api/customers?searchInput=${searchInput}`).then(response => {
            
            spinner.setAttribute('style', 'display:none');
            if (response.ok){
                response.json().then(data =>  displayResults(data));
            } else {
                document.querySelector('#results').innerHTML = 'Fetch failed!';
            }
        }).catch(err => {
    
            spinner.setAttribute('style', 'display:none');
            document.querySelector('#error').innerHTML = err;
        });    
    });
});

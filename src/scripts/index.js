
/* Hamburger Button Drawer */
document.getElementById ("hamburger").addEventListener ("click", function() {
    document.getElementById("myNav").style.right = "-50px";
}, false);

document.getElementById ("close-btn").addEventListener ("click", function() {
    document.getElementById("myNav").style.right = "-500px";
}, false);


/* Get JSON Data*/
fetch('../DATA.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        appendData(data.restaurants);
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });

/* Display JSON Data to the website */
const appendData = (data) => {
    let mainContainer = document.getElementById("catalog-item");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="card">
            <div class="catalog-img">
                <img src="${data[i].pictureId}" alt="restaurant picture" tabindex="0">
            </div>
            <div class="catalog-info">
                <div class="info-wrapper">
                    <p class="location tags" tabindex="0">${data[i].city}</p>
                    <div class="rating" tabindex="0">
                        <i class="bi bi-star-fill icon" style="color: #ffbf5f" ;></i>
                        <p>${data[i].rating}</p>
                    </div>
                </div>
                <p class="resto-name" tabindex="0">${data[i].name}</p>
                <p class="resto-description" tabindex="0">${data[i].description}</p>
            </div>
        </div>
      `;
        mainContainer.appendChild(div);
    }
}
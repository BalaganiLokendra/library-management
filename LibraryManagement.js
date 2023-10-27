let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let resultHeadEl = document.getElementById("resultHead");

function final(objs) {
    let {
        title,
        imageLink,
        author
    } = objs;
    resultHeadEl.textContent = "Popular Books";
    let co = document.createElement("div");
    searchResultsEl.appendChild(co);

    let pic = document.createElement("img");
    pic.src = imageLink;
    co.appendChild(pic);

    let h = document.createElement("p");
    h.textContent = author;
    co.appendChild(h);

}


function createAndAppend(obj) {
    for (let objs of obj) {
        final(objs);
    }
}

let options = {
    method: "GET"
};

searchInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let url = "https://apis.ccbp.in/book-store?title=" + searchInputEl.value;
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let obj = jsonData.search_results;
                createAndAppend(obj);
            });
    }
});
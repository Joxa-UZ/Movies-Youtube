
var elList = document.querySelector(".site-list");

var fragment = new DocumentFragment();

var elTemplate = document.querySelector("#site-template").content;

var searchForm = document.querySelector(".site-search");
var searchInput = document.querySelector(".site-search-input");

for (let i = 0; i < 100; i++) {
    // const element = array[index];
    // console.log(movies[i]);
    
    var cloneTemplate = elTemplate.cloneNode(true);
    
    cloneTemplate.querySelector(".site-item").dataset.idItem = movies[i].imdb_id;
    cloneTemplate.querySelector(".site-img").src = `http://i3.ytimg.com/vi/${movies[i].ytid}/mqdefault.jpg`;
    cloneTemplate.querySelector(".site-title").textContent = movies[i].Title;
    cloneTemplate.querySelector(".one").textContent = movies[i].imdb_rating;
    cloneTemplate.querySelector(".two").textContent = movies[i].movie_year;
    cloneTemplate.querySelector(".three").textContent = runTime(movies[i].runtime);
    cloneTemplate.querySelector(".site-info").textContent = movies[i].Categories.split("|").join(", ");
    cloneTemplate.querySelector(".site-btn").dataset.idButton = movies[i].imdb_id;
    
    fragment.appendChild(cloneTemplate);
    elList.appendChild(fragment);
    
}

// var move = movies[i].runtime;

function runTime (move){
    
    var hour = Math.floor (move/60);
    var minut = move % 60;
    hour = hour < 10 ? "" + hour : hour;
    minut = minut < 10 ? "" + minut : minut;
    return `${hour} hr ${minut} min`
}

function openModal (){
    elList.addEventListener("click", function(evt){
        let cinema = null;
        if(evt.target.matches(".site-btn"));
        
        let siteIndex = evt.target.dataset.idButton;
        cinema = movies.find(item => item.imdb_id == siteIndex);
        console.log(cinema);

        let modalTitle = document.querySelector(".modal-title");
        let modalIf = document.querySelector(".modal-if");
        let modalBoxTitle = document.querySelector(".modal-box-title");
        let modalBoxText = document.querySelector(".modal-box-text");

        let modalBoxLink = document.querySelector(".modal-box-link");
        let modalRank = document.querySelector(".modal-one");
        let modalYear = document.querySelector(".modal-two");
        let modalWatch = document.querySelector(".modal-three");
        

        modalRank.textContent = cinema.imdb_rating;
        modalYear.textContent = cinema.movie_year;
        // modalWatch.textContent = runTime(movies[i].runtime);

        modalTitle.textContent = cinema.Title;
        modalIf.src = `https://www.youtube-nocookie.com/embed/${cinema.ytid}`;

        modalBoxTitle.textContent = cinema.fulltitle;
        modalBoxText.textContent = cinema.summary;
        modalBoxLink.href = `https://www.youtube.com/watch?v=${cinema.ytid}`;


        let btnClose = document.querySelector(".btn-closed");
        btnClose.addEventListener("click", function(){
            modalIf.src = "";
        })


    })
}
openModal();
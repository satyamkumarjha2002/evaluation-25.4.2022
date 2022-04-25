// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let wallet_amount = JSON.parse(localStorage.getItem("amount"));
document.querySelector("#wallet").innerText = wallet_amount;

function append_data(data) {
    let main_div = document.querySelector("#movies");
    main_div.innerHTML = null;
    data.map(function (element) {
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let image = document.createElement("img");
        image.src = element.Poster;
        let div2=document.createElement("div");
        let title=document.createElement("h3");
        title.innerText=element.Title;
        let button=document.createElement("button");
        button.innerText="Book Now";
        button.setAttribute("class","book_now");
        button.addEventListener("click",function(){
            book_now_data(element);
        })
        div2.append(title,button)
        div1.append(image);
        div.append(div1,div2);
        main_div.append(div)
    })

}
function book_now_data(data){
     localStorage.setItem("movie",JSON.stringify(data));
     window.location.href="checkout.html"
}
function fetch_data() {
    let search = document.querySelector("#search").value;
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=561016a2`).then(function (res) {
        return res.json();
    }).then(function (res) {
        append_data(res.Search);
    })
}

function main() {
    fetch_data();
}
let id;

function debaunce(func, delay) {
    clearTimeout(id);
    id = setTimeout(function () {
        func();
    }, delay);
}
// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let wallet_amount = JSON.parse(localStorage.getItem("amount"));
let data = document.querySelector("#wallet");
data.innerText = wallet_amount;

function book() {
    let seats = document.querySelector("#number_of_seats").value;
    let total_amount = Number(seats * 100);
    let wallet_amou = JSON.parse(localStorage.getItem("amount"));
    let after_wallet = (Number(wallet_amou) - Number(total_amount));
    if (total_amount <= wallet_amou && wallet_amou > 0) {
        setlocl(after_wallet)
        alert('Booking successfull!');
    } else {
        alert("Insufficient Balance!");
    }

}

function setlocl(after_wallet) {
    localStorage.setItem("amount", after_wallet);
    data.innerText = after_wallet;
}

function display() {
    let data = JSON.parse(localStorage.getItem("movie"));
    let main_div = document.querySelector("#movie");
    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let image = document.createElement("img");
    image.src = data.Poster;
    div1.append(image);
    let div2 = document.createElement("div");
    let title = document.createElement("p");
    title.innerText = data.Title;
    div2.append(title);
    div.append(div1, div2);
    main_div.append(div);

}
display()
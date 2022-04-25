// Store the wallet amount to your local storage with key "amount"
let amou=JSON.parse(localStorage.getItem("amount"));
if(amou==null){
    var amount=0;
}else{
    amount=amou;
}
function add_to_wallet() {
    amount=JSON.parse(localStorage.getItem("amount"))
    let amn = document.querySelector("#amount").value;
    localStorage.setItem("amount", (Number(amount)+Number(amn)));
    display_amount();
}
function display_amount(){
   let amount=JSON.parse(localStorage.getItem("amount"));
   let h1=document.querySelector("#wallet");
   h1.innerText=0;
   h1.innerText=amount;
}
display_amount();
const initialPrice = document.querySelector("#initial-price");
const stock = document.querySelector("#stocks");
const currentPrice = document.querySelector("#current-price");
const btnCheck = document.querySelector("#btn");
const message = document.querySelector("#show-msg")

btnCheck.addEventListener("click", check);

function check(){
    s = parseInt(stock.value);
    //console.log(stock.value)
    ip = s * Number(initialPrice.value);
    cp = s * Number(currentPrice.value);

    if(ip > cp ){
        message.innerText = "Loss = " + (ip-cp) + " and percent = " + ((ip-cp)*100/(ip))
        console.log(ip-cp)
    }
    if (ip===cp){
        message.innerText = "No LOSS NO GAIN!"
    }
    if (cp > ip) {
        message.innerText = "Profit = " + (cp-ip) + " and percent = " + ((cp-ip)*100/(cp))   
    }



}
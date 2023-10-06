const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

let numberOfCookies = 0;

cookie.onclick = () => {
    //zvednout cislo o 1
numberOfCookies = numberOfCookies + 1 
    //zobrazit v odstavci
    counter.innerText = "Zabitých nechutných smurf catů :" + numberOfCookies;
}
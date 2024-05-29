let cardDiv1 = document.getElementById("card-div1");
let seeMoreBtn1 = document.getElementById("see-more1");
const myfunction1 = () =>{
    cardDiv1.classList.toggle("card-div1");
    cardDiv1.classList.toggle("activeme1");
    if(cardDiv1.classList.contains("activeme")){
        seeMoreBtn1.innerText="Less Features"
    }else{
        seeMoreBtn1.innerText="See more Features"
    }
}
seeMoreBtn1.addEventListener("click", myfunction1);

let cardDiv2 = document.getElementById("card-div2");
let seeMoreBtn2 = document.getElementById("see-more2");
const myfunction2 = () =>{
    cardDiv2.classList.toggle("card-div2");
    cardDiv2.classList.toggle("activeme2");
    if(cardDiv2.classList.contains("activeme")){
        seeMoreBtn2.innerText="Less Features"
    }else{
        seeMoreBtn2.innerText="See more Features"
    }
}
seeMoreBtn2.addEventListener("click", myfunction2);


let cardDiv3 = document.getElementById("card-div3");
let seeMoreBtn3 = document.getElementById("see-more3");
const myfunction3 = () =>{
    cardDiv3.classList.toggle("card-div3");
    cardDiv3.classList.toggle("activeme3");
    if(cardDiv3.classList.contains("activeme3")){
        seeMoreBtn3.innerText="Less Features"
    }else{
        seeMoreBtn3.innerText="See more Features"
    }
}
seeMoreBtn3.addEventListener("click", myfunction3);
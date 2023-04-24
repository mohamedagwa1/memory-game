const allCards =document.querySelectorAll(".card");
let firstCard=null;
let secondCard=null;
let canClick=true;
let score =0;
allCards.forEach((card)=>{
    card.addEventListener("click",cardClicked);
});



function cardClicked() {
    //prevent card double click
    if(this.classList.contains("flip")) return ;

    if(!canClick) return;

    this.classList.add("flip");
    console.log("error");

    if(!firstCard) firstCard=this ;
    else if(!secondCard) secondCard=this;

    let img1 = firstCard ? firstCard.firstElementChild.src : null ;
    let img2 = secondCard ? secondCard.firstElementChild.src : null ;

    
    if(img1==img2){
        firstCard=null;
        secondCard=null;
        score++;
        if(score==6) gameOver();
    }
    else if(img1 && img2){
        canClick=false;
        setTimeout(()=>{
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            firstCard=null;
            secondCard=null; 
            canClick=true;
        },1000)
        
    }
    console.log("img1",img1,"img2",img2);
}
function gameOver(){
    setTimeout(()=>{
        let replay=confirm("you win😍😍😎 play again?");
        if (replay==true){
            location.reload();
        }
    },1000)
}

// shuffle cards 
allCards.forEach((card)=>{
    let ranplace=Math.floor(Math.random()*12);
    card.style.order=ranplace;
})
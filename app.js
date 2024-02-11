window.addEventListener("DOMContentLoaded", function () {
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let imageSource1 = "images/dice" + randomNumber1 + ".png";
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);
    let imageSource2 = "images/dice" + randomNumber2 + ".png";
    console.log(randomNumber1, randomNumber2);
    let imageOne = document.querySelector(".img1");
    imageOne.setAttribute("src", imageSource1);
    let imageTwo = document.querySelector(".img2");
    imageTwo.setAttribute("src", imageSource2);
    let headerText = document.querySelector("h1");
    // switch (randomNumber1) {
    //     case 1:
    //         imageOne.setAttribute("src", "images/dice1.png");
    //         break;
    //     case 2:
    //         imageOne.setAttribute("src", "images/dice2.png");
    //         break;
    //     case 3:
    //         imageOne.setAttribute("src", "images/dice3.png");
    //         break;
    //     case 4:
    //         imageOne.setAttribute("src", "images/dice4.png");
    //         break;
    //     case 5:
    //         imageOne.setAttribute("src", "images/dice5.png");
    //         break;
    //     default:
    //         imageOne.setAttribute("src", "images/dice6.png");
    // }
    // switch (randomNumber2) {
    //     case 1:
    //         imageTwo.setAttribute("src", "images/dice1.png");
    //         break;
    //     case 2:
    //         imageTwo.setAttribute("src", "images/dice2.png");
    //         break;
    //     case 3:
    //         imageTwo.setAttribute("src", "images/dice3.png");
    //         break;
    //     case 4:
    //         imageTwo.setAttribute("src", "images/dice4.png");
    //         break;
    //     case 5:
    //         imageTwo.setAttribute("src", "images/dice5.png");
    //         break;
    //     default:
    //         imageTwo.setAttribute("src", "images/dice6.png");
    // }
    if (randomNumber1 === randomNumber2) {
        headerText.innerHTML = "🚩 Draw! 🚩";
    } else if (randomNumber1 > randomNumber2) {
        headerText.innerHTML = "🚩 Player 1 Wins!";
    } else {
        headerText.innerHTML = "Player 2 Wins! 🚩";
    }
});
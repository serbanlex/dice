var scor1 = 0, scor2 = 0;
function doDice()
{

    //obtaining first dice number
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var newSource1 = `images/dice/dice${randomNumber1}.png`; //new source of second dice image
    document.querySelector("#dice1 .img1").setAttribute("src", newSource1); //changing first dice image

    //obtaining second dice number
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var newSource2 = `images/dice/dice${randomNumber2}.png`; //new source of second dice image
    document.querySelector("#dice2 .img2").setAttribute("src", newSource2); //changing second dice image

    if(randomNumber1 > randomNumber2) //player 1 wins
    {
        scor1 ++;
        document.querySelector(".sampist1").setAttribute("src", "images/anim/dancing1.png" ); //sampist 1 win image
        document.querySelector(".sampist2").setAttribute("src", "images/anim/injured2.png"); //sampist 2 lose image
        document.querySelector(".container h1").innerText = "🚩Sampist 1 câștigă!";
        document.querySelector("#scor1").innerText=`${scor1}`;
    }

    else 
        if(randomNumber1 < randomNumber2) //player 2 wins
        {
            scor2 ++;
            document.querySelector(".sampist1").setAttribute("src", "images/anim/injured1.png" ); //sampist 1 lose image
            document.querySelector(".sampist2").setAttribute("src", "images/anim/dancing2.png"); //sampist 2 win image
            document.querySelector(".container h1").innerText = "Sampist 2 câștigă!🚩";
            document.querySelector("#scor2").innerText=`${scor2}`;
        }
        else //draw
        {
            scor1 ++; scor2++;
            document.querySelector(".sampist1").setAttribute("src", "images/anim/dancing1.png" ); //sampist 1 win image
            document.querySelector(".sampist2").setAttribute("src", "images/anim/dancing2.png"); //sampist 2 win image
            document.querySelector(".container h1").innerText = "🏳️ Egalitate! 🏳️";
            document.querySelector("#scor1").innerText=`${scor1}`;
            document.querySelector("#scor2").innerText=`${scor2}`;
        }
}
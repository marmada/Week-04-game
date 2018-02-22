

/* Game PseudoCoding
// - Asign Variables : Random Generatated Target # (19 - 120) , Each "Crystal" (value 1-12), Player Total Sum, Total Wins Counter, Total Lost Counter. */
// - Add Crystal Values to Sum Value
// Compare SumValue to Target and evaluate if you've won, loose or can continue playing
$(document).ready(function () {

    var randomN = 0;
    var blue;
    var red;
    var pink;
    var green;
    var sumT;
    var win = 0;
    var loose = 0;

    var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "assets/sounds/Tetris10ATYPE.ogg");

    var winElement = document.createElement ("audio")
        winElement.setAttribute ("src", "assets/sounds/Alarm02.wav")

        var looseElement = document.createElement ("audio")
        looseElement.setAttribute ("src", "assets/sounds/ringout.wav")

    $(".start").on("click", function () {

        audioElement.play();
        pink = 0;
        blue = 0;
        green = 0;
        red = 0;
        sumT = 0;
        randomN = 0
        console.log(sumT);
        $("#guessS").text(sumT);
        $("#number").text(randomN);

        randomN = (Math.floor(Math.random() * 101) + 19);
        console.log(randomN);
        $("#number").text(randomN);

        blue = Math.floor(Math.random() * 12) + 1;
        console.log(blue);

        pink = Math.floor(Math.random() * 12) + 1;
        console.log(pink);

        green = Math.floor(Math.random() * 12) + 1;
        console.log(green);

        red = Math.floor(Math.random() * 12) + 1;
        console.log(red);


    });

    $(".reset").on("click", function () {

        pink = 0;
        blue = 0;
        green = 0;
        red = 0;
        sumT = 0;
        randomN = 0
        console.log(sumT);
        $("#guessS").text(sumT);
        $("#number").text(randomN);
    });

    $("#blue").on("click", function () {

        sumT = sumT + blue;

        $("#guessS").text(sumT);

        CheckWin();
    });

    $("#pink").on("click", function () {

        sumT = sumT + pink;

        $("#guessS").text(sumT);

        CheckWin();
    });

    $("#green").on("click", function () {

        sumT = sumT + green;

        $("#guessS").text(sumT);
        CheckWin();
    });

    $("#red").on("click", function () {

        sumT = sumT + red;

        $("#guessS").text(sumT);

        CheckWin();

    });

    function CheckWin() {

        if (sumT > randomN) {
            loose++
            $("#lost").text(loose);
            looseElement.play();
            $("#gameOutput").text("You've LOST, Click on Start to Play again")
            pink = 0;
            blue = 0;
            green = 0;
            red = 0;
            sumT = 0;
            randomN = 0
            console.log(sumT);
         ;
            $("#number").text("##");
        }

       else if (sumT === randomN) {

            win++
            $("#win").text(win);
            winElement.play();
            $("#gameOutput").text("You've WON, Click on Start to Play again")
            pink = 0;
            blue = 0;
            green = 0;
            red = 0;
            sumT = 0;
            randomN = 0
            console.log(sumT);
           ;
            $("#number").text("##");

        }

        else {

            return;
        }
    }

    });

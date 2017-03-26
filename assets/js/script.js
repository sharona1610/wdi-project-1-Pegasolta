// 2) Winning Screen for individual players
// 3) Every 10 clicks spew a quote
//  3a) Button click generates a number (index)
//  3b) Number (index) is used to search array for quote to return
// 4) Timeout after a certain timing, Game runs for 1minute
//Optional
// 5) Photo Upload Option
// 6) Animation on touch / click
//  6a) kapow animation
//  6b) Trump picture changes animation
//  6c) Mouse Cursor changes to punching gloves
$(document).ready(function() {
    console.log("loaded js");

    var gameArea = document.getElementById("gameArea")
    var winnerOne = document.getElementById("winnerOne")
    var winnerTwo = document.getElementById("winnerTwo")
    var draw = document.getElementById("draw")
    var button = document.getElementsByClassName("restart")

    //Score Variables
    var score1 = 1
    var $display1 = $("#scoreDisplay1")
    var $trump1 = $("#trump1")
    var score2 = 1
    var $display2 = $("#scoreDisplay2")
    var $trump2 = $("#trump2")

    //Timer Variables
    var countdown = 60
    var gameStarted = false
    var timer = document.getElementById("timer")

    //When ENTER is pressed
    document.addEventListener("keydown", startGame, false)
    document.addEventListener("click", restart, false)

    function startGame(e) {
        if (e.keyCode === 13 && gameStarted === false) {
            //Game Starts
            gameStarted = true
            gameArea.style.display = "block"

            //Interval Function
            var interval = setInterval(function() {
                timer.textContent = "Time Left: " + countdown
                countdown--
                if (countdown === 0) {
                    timer.textContent = "Time Left: " + countdown
                    clearInterval(interval)
                    gameArea.style.display = "none"
                      if (score1 > score2) {
                        winnerOne.style.display = "block"
                    } else if (score1 < score2) {
                        winnerTwo.style.display = "block"
                    } else draw.style.display = "block"
                }
            }, 1000)

            document.addEventListener("keydown", trumpKey1, false)
            document.addEventListener("keydown", trumpKey2, false)

            //Game Play
            function trumpKey1(t) {
                $display1.text("Player 1 Score: " + score1)
                if (t.keyCode === 65 && countdown > 0)
                    score1++
                    if (score1 % 5 === 0) {
                        //code for generating quote
                        var randomIndex = Math.floor(Math.random() * 20)

                    }
            }

            function trumpKey2(t) {
                $display2.text("Player 2 Score: " + score2)
                if (t.keyCode === 76 && countdown > 0)
                    score2++
                    if (score2 % 5 === 0) {
                        //code for generating quote
                        var randomIndex = Math.floor(Math.random() * 20)

                    }
            }
        }

        //Game Over
          function restart () { 
            startGame(13)
          }
        }
    })

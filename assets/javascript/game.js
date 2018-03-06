/*
Where does Dwight claim he has buried a large sum of cash?
Under The Office, Under a body, Under his farm

Dwight is jealous of Jim for the following facial feature?
His nose, his cheek bones, his smile
*/

/*Pseudo code
var qWrong
var qRight
var noAnswer

Start button - on click function

function - replace questions with vars displaying
button to reload page

set timeout(function time)
set interval time--

done button - setTimeout to 0

*/
var qWrong = 0;
var seconds = 30;
var qRight = 0;
var noAnswer = 0;
var questions = '<h2>' + 'Where does Dwight claim he has buried a large sum of cash:' + '</h2>' +
                '<div class="form-check form-check-inline">' +
                    '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" name="q1" value="option1">' +
                    '<label class="form-check-label" for="inlineCheckbox1">Under a body</label>' +
                '</div>' +
                '<div class="form-check form-check-inline">' +
                    '<input class="form-check-input" type="checkbox" id="inlineCheckbox2" name="q1" value="option2">' +
                    '<label class="form-check-label" for="inlineCheckbox2">Under the office</label>' +
                '</div>' +
                '<div class="form-check form-check-inline">' +
                    '<input class="form-check-input" type="checkbox" id="inlineCheckbox3" name="q1" value="option3">' +
                    '<label class="form-check-label" for="inlineCheckbox2">under his barn</label>' +
                '</div>' +
                '<div><button class="button2">Done</button></div>'

function questionInsert(){
    $(".questionCont").html(questions)
}

$(".button").on("click", function(){
    var timer = setTimeout(function () {
        alert("5 seconds have passed");
    }, 5 * 1000);
    var timer2 = setInterval(decrement, 1000) 
    function decrement() {
        seconds--;
        $(".countdown").html(seconds);
    }
    $(".questionCont").html(questionInsert());
    $(".button2").on("click", function () {
        console.log("Hey");
        clearTimeout(timer);
        clearInterval(timer2);
    });
});





/*
var 1right = document.getElementById("1right").checked;
var 1wrong = document.getElementById("1wrong").checked;

if (1right === true) {
    qRight++
} else if (1wrong === true) {
    qwrong++
} else {
    noAnswer++
}
*/

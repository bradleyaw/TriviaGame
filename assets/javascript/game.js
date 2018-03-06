var Qs = [{
    question: "Where does Dwight claim he has buried a large sum of cash?",
    alternatives: ["under a body", "under the warehouse", "under his barn"],
    correct: 1,
}, {
    question: "Which one of these is not a nickname of Andy's?",
    alternatives: ["Nard Dog", "Dandy Andy", "Boner Champ"],
    correct: 2,
}, {
    question: "Michael reported to each of these people at Dunder Mifflin except:",
    alternatives: ["Dwight", "Jim", "Ryan"],
    correct: 1,
}, {
    question: "Dwight is jealous of Jim for the following facial feature?",
    alternatives: ["his nose", "his cheek bones", "his smile"],
    correct: 1,
}]

var qWrong = 0;
var seconds = 30;
var qRight = 0;
var noAnswer = 0;
var questionText;

function questionInsert() {
    $(".questionCont").prepend(questionText)
}

$(".button").on("click", function () {
    $(".questionCont").html("&nbsp")
    var timer = setTimeout(function () {
        $(".questionCont").html('Questions answered correctly: ' + qRight + "<br>" +
                                'Questions answered incorrectly: ' + qWrong + "<br>" +
                                'Questions left unanswered: ' + noAnswer + "<br>")
    }, 30 * 1000);
    var timer2 = setInterval(decrement, 1000)
    function decrement() {
        if (seconds > 0) {
            seconds--;
            $(".countdown").html(seconds);
        }
    }
    for (var i = 0; i < Qs.length; i++) {
        questionText = '<h2>' + Qs[i].question + '</h2>' +
            '<div class="form-check form-check-inline">' +
                '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">' +
                '<label class="form-check-label" for="inlineCheckbox1">' + Qs[i].alternatives[0] + '</label>' +
            '</div>' +
            '<div class="form-check form-check-inline">' +
                '<input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">' +
                '<label class="form-check-label" for="inlineCheckbox1">' + Qs[i].alternatives[1] + '</label>' +
            '</div>' +
            '<div class="form-check form-check-inline">' +
                '<input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">' +
                '<label class="form-check-label" for="inlineCheckbox1">' + Qs[i].alternatives[2] + '</label>' +
            '</div>'

        questionInsert();
    }
    $(".questionCont").append('<div><button class="button2">Done</button></div>')
    $(".button2").on("click", function () {
        clearTimeout(timer);
        clearInterval(timer2);
        $(".questionCont").html('Questions answered correctly: ' + qRight + "<br>" +
                                'Questions answered incorrectly: ' + qWrong + "<br>" +
                                'Questions left unanswered: ' + noAnswer)
    });
});
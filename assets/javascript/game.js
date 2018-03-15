// Array of Questions and answers
var Qs = [{
    question: "Where does Dwight claim he has buried a large sum of cash?",
    alternatives: ["under a body", "under the warehouse", "under his barn"],
    correct: "under a body",
}, {
    question: "Which one of these is not a nickname of Andy's?",
    alternatives: ["Nard Dog", "Dandy Andy", "Boner Champ"],
    correct: "Dandy Andy",
}, {
    question: "Michael reported to each of these people at Dunder Mifflin except:",
    alternatives: ["Dwight", "Jim", "Ryan"],
    correct: "Dwight",
}, {
    question: "Dwight is jealous of Jim for the following facial feature?",
    alternatives: ["his nose", "his cheek bones", "his smile"],
    correct: "his nose",
}]


var qWrong = 0;
var seconds = 30;
var qRight = 0;
var noAnswer = 0;
var questionText;
var panel = $(".questionCont");

$(".button").on("click", function () {
    $(".questionCont").html("&nbsp")
    var timer = setTimeout(function () {
        $(".questionCont").html('Questions answered correctly: ' + qRight + "<br>" +
            'Questions answered incorrectly: ' + qWrong + "<br>" +
            'Questions left unanswered: ' + noAnswer + "<br>")
            Check();
    }, 30 * 1000);
    var timer2 = setInterval(decrement, 1000)
    function decrement() {
        if (seconds > 0) {
            seconds--;
            $(".countdown").html(seconds);
        }
    }
    for (var i = 0; i < Qs.length; i++) {
        panel.append('<h2>' + Qs[i].question + '</h2>');
        for (var j = 0; j < Qs[i].alternatives.length; j++) {
            panel.append("<input type='radio' name='question-" + i +
                "' value='" + Qs[i].alternatives[j] + "''>" + Qs[i].alternatives[j]);
        }
    }
    $(".questionCont").append('<div><button class="button2">Done</button></div>')
    $(".button2").on("click", function () {
        Check();
        clearTimeout(timer);
        clearInterval(timer2);
        $(".questionCont").html('Questions answered correctly: ' + qRight + "<br>" +
            'Questions answered incorrectly: ' + qWrong + "<br>" +
            'Questions left unanswered: ' + noAnswer)
    });
});

function Check() {
    $.each($("input[name='question-0']:checked"), function () {
        if ($(this).val() === Qs[0].correct) {
            qRight++;
        }
        else {
            qWrong++;
        }
    });
    $.each($("input[name='question-1']:checked"), function () {
        if ($(this).val() === Qs[1].correct) {
            qRight++;
        }
        else {
            qWrong++;
        }
    });
    $.each($("input[name='question-2']:checked"), function () {
        if ($(this).val() === Qs[2].correct) {
            qRight++;
        }
        else {
            qWrong++;
        }
    });
    $.each($("input[name='question-3']:checked"), function () {
        if ($(this).val() === Qs[3].correct) {
            qRight++;
        }
        else {
            qWrong++;
        }
    });

    if ((qRight + qWrong) < Qs.length) {
        noAnswer = Qs.length - qRight - qWrong;
    }
}
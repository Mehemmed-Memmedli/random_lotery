'use strict';


$('#btn-random').on('click', function () {
    var number = Math.floor(Math.random() * 1000) + 1;
    $('#Generate').html(number);
})

// $('#btn-random').on('click', function () {
//     var lottoryN = "";
//     for (let i = 0; i < 9; i++) {
//         var randomNumber = Math.floor(Math.random() * 9) + 1;
//         lottoryN = randomNumber + lottoryN;

//     }
//     $('#Generate').prepend("<br>" + lottoryN);
// })


